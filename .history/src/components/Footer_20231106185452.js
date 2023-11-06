/** @format */

import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { footerLinks, paymentCards } from "../constants/constant";
import { getContactDetails } from "../Repository/Api";

const Footer = () => {
  const [response, setResponse] = useState({});
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 786);

  useEffect(() => {
    getContactDetails(setResponse);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 786);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [isMobile]);

  let footer;
  if (!isMobile) {
    const MyComponent = () => {
      return (
        <section className="Footer-Container">
          <div className="upper_div">
            <div className="left-container">
              <span className="follow_us">FOLLOW US</span>
              <div className="container">
                <img src="/asessts/footer/instagram.png" alt="instagram" />
                <img src="/asessts/footer/facebook.png" alt="facebook" />
              </div>
            </div>

            <div className="center_div">
              <img src="/asessts/navbar/logo.png" className="logo" alt="logo" />
            </div>

            <div className="right-container ">
              <span className="title">WE ACCEPT</span>
              <div className="flex gap-2 img-cont">
                {paymentCards.map((src, index) => (
                  <img key={`Footer`} src={src} alt="card" />
                ))}
              </div>
            </div>
          </div>

          <div className="Mid_Container">
            <div className="flex lg:flex-row flex-col gap-3 justify-between mt-5 w-3/5 link_container">
              {footerLinks.map((item, index) => (
                <div key={`links ${index}`} className="Linkss">
                  <h4 className=" text-secondary font-medium Title">
                    {item.title}
                  </h4>
                  <ul className="list-none mt-5 flex flex-col gap-6">
                    {item.options.map((option, index) => (
                      <Link to={option?.link}>
                        <li
                          key={index}
                          className="text-left  font-medium cursor-pointer desc"
                        >{` ${option?.title}`}</li>
                      </Link>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <div className=" mt-5 max-lg:w-full w-96 Content_Container ">
              <h4 className=" text-secondary font-medium Title">Contact</h4>
              <div className="flex flex-col gap-6 mt-5">
                <div className="flex items-center gap-2 ">
                  <div className="flex-shrink-0">
                    <img
                      className="w-full h-full object-contain "
                      src="/asessts/footer/contact (1).png"
                      alt="contact"
                    />
                  </div>
                  <span className="text-xl font-medium desc">
                    {response?.phone}
                  </span>
                </div>

                <div className="flex items-center gap-2 ">
                  <div className="flex-shrink-0">
                    <img
                      className="w-full h-full object-contain "
                      src="/asessts/footer/contact (2).png"
                      alt="contact"
                    />
                  </div>
                  <span className="text-xl font-medium desc">
                    {response?.email}
                  </span>
                </div>

                <div className="flex items-center gap-2 ">
                  <div className="flex-shrink-0">
                    <img
                      className="w-full h-full object-contain "
                      src="/asessts/footer/instagram.png"
                      alt="contact"
                    />
                  </div>
                  <span className="text-xl font-medium desc">
                    {response?.instagram}
                  </span>
                </div>

                <div className="flex items-center gap-2 ">
                  <div className="flex-shrink-0">
                    <img
                      className="w-full h-full object-contain "
                      src="/asessts/footer/contact (3).png"
                      alt="contact"
                    />
                  </div>
                  <span className="text-xl font-medium desc">
                    {response?.address}
                  </span>
                </div>
              </div>
              <div>
                <iframe
                  className="mt-3 w-full lg:w-[400px] h-full lg:h-[200px]"
                  title="mapping"
                  src={response?.map}
                  style={{ border: 0 }}
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>

            <div className="max-lg:hidden absolute bottom-0 flex items-center gap-3">
              <div className="w-30 h-14">
                <img
                  className="w-full h-full object-contain"
                  src="/asessts/specialOffer.png"
                  alt="offer"
                />
              </div>
              <h6 className="w-56 text-xl font-medium">
                Get 50$ OFF on your First Visit when you Book through our App.
              </h6>
            </div>
          </div>

          <div className="Down_Div">
            <span className="font-medium text-base text-secondary mr-5">
              DOWNLOAD OUR APP :{" "}
            </span>

            <div className="flex gap-4">
              <img
                className="w-full h-8 object-contain"
                src="/asessts/footer/download (1).png"
                alt="download"
              />
              <img
                className="w-w-full h-8 object-contain"
                src="/asessts/footer/download (1).png"
                alt="download"
              />
            </div>
          </div>

          <p className="copyRight"> ©️All Rights Reserved 2023 </p>
        </section>
      );
    };
    footer = <MyComponent />;
  } else {
    const MyComponent = () => {
      return (
        <section className="mobile-footer">
          <img src="/asessts/navbar/logo.png" className="logo" alt="logo" />

          <div className="follow-container">
            <p>FOLLOW US</p>
            <img src="/asessts/footer/instagram.png" alt="instagram" />
            <img src="/asessts/footer/facebook.png" alt="facebook" />
          </div>

          <div className="card_container">
            <span className="title">WE ACCEPT</span>
            <div className="img_cont">
              {paymentCards.map((src, index) => (
                <img
                  key={`mobile_footer_payment_card${index}`}
                  src={src}
                  alt="card"
                />
              ))}
            </div>
          </div>

          <div className="Links">
            {footerLinks.map((item, index) => (
              <div key={`mobile_footer_Links${index}`} className="Linkss">
                <h4 className=" text-secondary font-medium Title">
                  {item.title}
                </h4>
                <ul>
                  {item.options.map((option, index) => (
                    <Link to={option?.link}>
                      <li
                        key={`mobile_footer_list${index}`}
                        className="text-left  font-medium cursor-pointer desc"
                      >{` ${option?.title}`}</li>
                    </Link>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="contact">
            <h4 className=" text-secondary font-medium Title">Contact</h4>

            <div className="Item">
              <img src="/asessts/footer/contact (1).png" alt="contact" />

              <span className="text-xl font-medium desc">
                {response?.phone}
              </span>
            </div>
            <div className="Item">
              <img src="/asessts/footer/contact (2).png" alt="contact" />

              <span className="text-xl font-medium desc">
                {response?.email}
              </span>
            </div>
            <div className="Item">
              <img src="/asessts/footer/instagram.png" alt="contact" />

              <span className="text-xl font-medium desc">
                {response?.instagram}
              </span>
            </div>
            <div className="Item">
              <img src="/asessts/footer/contact (3).png" alt="contact" />

              <span className="text-xl font-medium desc">
                {response?.address}
              </span>
            </div>

            <div>
              <iframe
                className="mt-3 w-full lg:w-[400px] h-full lg:h-[200px]"
                title="mapping"
                src={response?.map}
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>

          <div className="Download">
            <span className="font-medium text-base text-secondary mr-5">
              DOWNLOAD OUR APP :{" "}
            </span>

            <div>
              <img src="/asessts/footer/download (1).png" alt="download" />
              <img src="/asessts/footer/download (1).png" alt="download" />
            </div>
          </div>

          <p className="copyRight"> ©️All Rights Reserved 2023 </p>
        </section>
      );
    };
    footer = <MyComponent />;
  }

  return footer;
};

export default Footer;
