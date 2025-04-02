import nodemailer from 'nodemailer';
import validator from 'validator';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { name, email, phone, message } = req.body;

    // Sanitize inputs using validator
    const sanitizedName = validator.escape(name.trim());
    const sanitizedEmail = validator.normalizeEmail(email.trim()); // Normalizes and escapes email
    const sanitizedPhone = validator.escape(phone.trim()); // Escapes but keeps special characters like '+'
    const sanitizedMessage = validator.escape(message.trim());

    // Validation for required fields
    if (!sanitizedName || !sanitizedEmail || !sanitizedMessage) {
      return res.status(400).json({ error: 'Name, Email, and Message are required.' });
    }

    // Validate email format
    if (!validator.isEmail(sanitizedEmail)) {
      return res.status(400).json({ error: 'Invalid email address.' });
    }

    // Custom phone validation to allow numbers like +33243243243
    const phoneRegex = /^\+?[1-9]\d{1,14}$/; // Regex for international phone numbers (starting with + and followed by digits)
    if (phone && !phoneRegex.test(sanitizedPhone)) {
      console.error('Invalid phone number:', sanitizedPhone);
      return res.status(400).json({ error: 'Invalid phone number. Please enter a valid international number starting with a "+" sign.' });
    }

    // Create Nodemailer transporter
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST, // Zoho SMTP server
      port: process.env.SMTP_PORT, // 465 for SSL
      secure: true, // Use SSL for secure connection
      auth: {
        user: process.env.SMTP_USER, // Your Zoho login email
        pass: process.env.SMTP_PASS, // Your Zoho app password
      },
    });

    // Email options
    const mailOptions = {
      from: `"${sanitizedName}" <support@tenbytes.co.uk>`, // Your Zoho business email (verified)
      to: 'support@tenbytes.co.uk', // Email address to receive the contact form
      subject: 'New Contact Form Submission', // Static subject
      text: `
        Name: ${sanitizedName}
        Email: ${sanitizedEmail}
        Phone: ${sanitizedPhone}
        Message: ${sanitizedMessage}
      `,
      replyTo: sanitizedEmail, // Allows you to reply directly to the user
    };

    try {
      // Send email
      await transporter.sendMail(mailOptions);
      console.log('Email sent successfully'); // Logging for debugging
      return res.status(200).json({ message: 'Email sent successfully!' });
    } catch (error) {
      // More detailed error logging
      console.error('Error sending email:', error.response ? error.response : error.message);
      return res.status(500).json({
        error: 'Error sending email',
        details: error.response ? error.response : error.message
      });
    }
  } else {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }
}
