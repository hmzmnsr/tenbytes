import React from 'react';
import Services from '../../pages/api/service'
import Link from 'next/link'
import Image from 'next/image';

const ServiceSection = (props) => {
    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }

    return (
        <section className="service_section section_space xb-hidden pb-0">
            <div className="container">
                <div className="heading_block text-center">
                    <div className="heading_focus_text text-danger">
                        Our
                        <span className="badge bg-secondary text-white">Specialize</span>
                    </div>
                    <h2 className="heading_text mb-0 text-danger">
                        Featured Services
                    </h2>
                </div>

                <div className="row">
                    {Services.slice(0, 5).map((service, srv) => (
                        <div className={`${service.col} mt-30`} key={srv}>
                            {service.title ?
                                <div className="service_block">
                                    <div className="service_image">
                                        <Image src={service.sImg} alt="IT Management Services" />
                                    </div>
                                    <div className="service_content">
                                        <h3 className="service_title"><Link onClick={ClickHandler} href={'/service-single/[slug]'} as={`/service-single/${service.slug}`}>{service.title}</Link>
                                        </h3>

                                        <div className="links_wrapper">
                                            <ul className="category_btns_group unordered_list">
                                                <li><Link onClick={ClickHandler} href={'/service-single/[slug]'} as={`/service-single/${service.slug}`}>{service.thumb1}</Link></li>
                                                <li><Link onClick={ClickHandler} href={'/service-single/[slug]'} as={`/service-single/${service.slug}`}>{service.thumb2}</Link></li>
                                            </ul>
                                            <Link onClick={ClickHandler} href={'/service-single/[slug]'} as={`/service-single/${service.slug}`} className="icon_block">
                                                <i className="fa-regular fa-arrow-up-right"></i>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                                : ''}
                        </div>
                    ))}
                </div>

                <div className="btns_group pb-0">
                    <Link
                        className="btn btn-outline-light"
                        href="/service"
                        style={{ backgroundColor: "#ffffff", color: "#000", border: "1px solid #000" }}
                    >
                        <span className="btn_label" data-text="More Services">More Services</span>
                        <span className="btn_icon">
                            <i className="fa-solid fa-arrow-up-right"></i>
                        </span>
                    </Link>
                </div>
            </div>
        </section>
    );
}

export default ServiceSection;