import React from 'react'
import Link from 'next/link'
import icon1 from '/public/images/icons/icon_mail.svg'
import icon2 from '/public/images/icons/icon_calling.svg'
import icon3 from '/public/images/icons/icon_map_mark.svg'
import icon4 from '/public/images/icons/icon_mail_2.svg'
import Services from '../../api/service'
import Image from 'next/image'

const ClickHandler = () => {
    window.scrollTo(10, 0);
}

const SubmitHandler = (e) => {
    e.preventDefault()
}

const Footer = () => {
    return (
        <footer className="site_footer footer_layout_1" style={{ backgroundColor: "#000000" }}>
            <div className="content_box" style={{ backgroundImage: `none`, backgroundColor: "#000000" }}>
                <div className="container">
                    <div className="diract_contact_links text-white">
                        <div className="iconbox_block layout_icon_left">
                            <div className="iconbox_icon">
                                <Image src={icon1} alt="Mail SVG Icon" />
                            </div>
                            <div className="iconbox_content">
                                <h3 className="iconbox_title">Write to us</h3>
                                <p className="mb-0">
                                    support@tenbytes.co.uk
                                </p>
                            </div>
                        </div>
                        <div className="iconbox_block layout_icon_left">
                            <div className="iconbox_icon">
                                <Image src={icon2} alt="Calling Check SVG Icon" />
                            </div>
                            <div className="iconbox_content">
                                <h3 className="iconbox_title"> Call Us (UK)</h3>
                                <p className="mb-0">
                                    +(44) 07301 842826
                                </p>
                            </div>
                        </div>
                        <div className="iconbox_block layout_icon_left">
                            <div className="iconbox_icon">
                                <Image src={icon3} alt="Map Mark Check SVG Icon" />
                            </div>
                            <div className="iconbox_content">
                                <h3 className="iconbox_title">Our Office</h3>
                                <p className="mb-0">

                                107 HALL ROAD ISLEWORTH

                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="footer_main_content">
                        <div className="row justify-content-lg-between">
                            <div className="col-lg-3 col-md-6 col-sm-6">
                                <div className="footer_widget pe-md-3">
                                    <h2 className="footer_info_title text-white">Newsletter</h2>
                                    <p className="text-white">
                                        Sign up to Techco weekly newsletter to get the latest updates.
                                    </p>
                                    <form className="footer_newslatter" onSubmit={SubmitHandler}>
                                        <label htmlFor="footer_mail_input">
                                            <Image src={icon4} alt="Mail SVG Icon" />
                                        </label>
                                        <input id="footer_mail_input" type="email" name="email" placeholder="Enter your email" />
                                        <button type="submit"><i className="fa-solid fa-paper-plane"></i></button>
                                    </form>
                                    {/* <ul className="social_links_block unordered_list">
                                        <li><Link onClick={ClickHandler} href="/">Facebook</Link></li>
                                        <li><Link onClick={ClickHandler} href="/">Twitter</Link></li>
                                        <li><Link onClick={ClickHandler} href="/">LinkedIn</Link></li>
                                    </ul> */}
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-6">
                                <div className="footer_widget">
                                    <h3 className="footer_info_title text-white">Services</h3>
                                    <ul className="icon_list unordered_list_block">
                                        {Services.slice(0, 6).map((service, srv) => (
                                            <li key={srv}>
                                                {service.title ? (
                                                    <Link onClick={ClickHandler} href={'/service-single/[slug]'} as={`/service-single/${service.slug}`}>
                                                        <span className="icon_list_text text-white">
                                                            {service.title}
                                                        </span>
                                                    </Link>
                                                ) : ''}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-2 col-md-6 col-sm-6">
                                <div className="footer_widget">
                                    <h3 className="footer_info_title text-white">Information</h3>
                                    <ul className="icon_list unordered_list_block">
                                        <li>
                                            <Link onClick={ClickHandler} href="/about">
                                                <span className="icon_list_text text-white">
                                                    About Techco
                                                </span>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link onClick={ClickHandler} href="/service">
                                                <span className="icon_list_text text-white">
                                                    Investors
                                                </span>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link onClick={ClickHandler} href="/contact">
                                                <span className="icon_list_text text-white">
                                                    Contact
                                                </span>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link onClick={ClickHandler} href="/about">
                                                <span className="icon_list_text text-white">
                                                    Affiliate Program
                                                </span>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link onClick={ClickHandler} href="/portfolio">
                                                <span className="icon_list_text text-white">
                                                    Career
                                                </span>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link onClick={ClickHandler} href="/pricing">
                                                <span className="icon_list_text text-white">
                                                    Pricing Plan
                                                </span>
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-2 col-md-6 col-sm-6">
                                <div className="footer_widget">
                                    <h3 className="footer_info_title text-white">Product</h3>
                                    <ul className="icon_list unordered_list_block">
                                        <li>
                                            <Link onClick={ClickHandler} href="/portfolio">
                                                <span className="icon_list_text text-white">
                                                    Case Studies
                                                </span>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link onClick={ClickHandler} href="/pricing">
                                                <span className="icon_list_text text-white">
                                                    Our Pricing
                                                </span>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link onClick={ClickHandler} href="/service">
                                                <span className="icon_list_text text-white">
                                                    Features
                                                </span>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link onClick={ClickHandler} href="/about">
                                                <span className="icon_list_text text-white">
                                                    Overview
                                                </span>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link onClick={ClickHandler} href="/blog">
                                                <span className="icon_list_text text-white">
                                                    New Releases
                                                </span>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link onClick={ClickHandler} href="/pricing">
                                                <span className="icon_list_text text-white">
                                                    Solutions
                                                </span>
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer_bottom" style={{ backgroundColor: "#000000" }}>
                <div className="container d-md-flex align-items-md-center justify-content-md-between">
                    <p className="copyright_text m-0 text-white">
                        Copyright © 2025 TenBytes, All rights reserved.
                    </p>
                    <p className="copyright_text m-0 text-white">
                        Developed by <Link onClick={ClickHandler} href="/">TenBytes</Link>
                    </p>
                </div>
            </div>
        </footer>
    )
}

export default Footer;
