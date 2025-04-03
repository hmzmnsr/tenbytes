import React from "react";
import ContactForm from "../ContactFrom/ContactForm";
import icon1 from "/public/images/icons/icon_map_mark_2.svg";
import icon2 from "/public/images/icons/icon_calling_2.svg";
import icon3 from "/public/images/icons/icon_mail_3.svg";
import icon4 from "/public/images/icons/icon_calendar_2.svg";
import Image from "next/image";

const ContactSection = (props) => {
  return (
    <section className="contact_section section_space bg-white">
      <div className="container">
        <div className="contact_info_box row">
          <div className="col-lg-3 col-md-6 col-sm-6">
            <div className="iconbox_block text-center bg-black">
              <div className="iconbox_icon">
                <Image src={icon1} alt="Map Mark SVG Icon" />
              </div>
              <div className="iconbox_content">
                <h3 className="iconbox_title text-white">Location</h3>
                <p className="mb-0 text-white">
                107 HALL ROAD ISLEWORTH TW7 7PB
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-6">
            <div className="iconbox_block text-center bg-black">
              <div className="iconbox_icon">
                <Image src={icon2} alt="Calling SVG Icon" />
              </div>
              <div className="iconbox_content">
                <h3 className="iconbox_title text-white">Contact</h3>
                <p className="mb-0 text-white">+(44) 07301 842826</p>
                <div className="mb-0 text-black">.</div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-6">
            <div className="iconbox_block text-center bg-black">
              <div className="iconbox_icon">
                <Image src={icon3} alt="User Check SVG Icon" />
              </div>
              <div className="iconbox_content">
                <h3 className="iconbox_title text-white">Email</h3>
                <p className="mb-0 text-white">support@tenbytes.co.uk</p>
                <p className="mb-0 text-white">salesmanager@tenbytes.co.uk</p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-6">
            <div className="iconbox_block text-center bg-black">
              <div className="iconbox_icon">
                <Image src={icon4} alt="Calendar SVG Icon" />
              </div>
              <div className="iconbox_content">
                <h3 className="iconbox_title text-white">Visit Between</h3>
                <p className="mb-0 text-white">Mon - Fri: 9.00-17.00</p>
                <p className="mb-0 text-white">Sat & Sun: Closed</p>
              </div>
            </div>
          </div>
        </div>
        <div className="section_space pb-0">
          <div className="row justify-content-lg-between">
            <div className="col-lg-7">
              <div className="contact_form mb-0">
                <h3 className="details_item_info_title mb-1">
                  Send Us A Message
                </h3>
                <p className="mb-5">
                  Give us chance to serve and bring magic to your brand.
                </p>
                <ContactForm />
              </div>
            </div>
            <div className="col-lg-5">
              <div className="gmap_canvas ps-lg-5">
                <iframe
                  title="map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2485.7939305603377!2d-0.35137652414792225!3d51.46193981402437!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48760ce89d5730c7%3A0x82899430d22c08a7!2s107%20Hall%20Rd%2C%20Isleworth%20TW7%207PB%2C%20UK!5e0!3m2!1sen!2s!4v1743042379558!5m2!1sen!2s"
                ></iframe>

              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
