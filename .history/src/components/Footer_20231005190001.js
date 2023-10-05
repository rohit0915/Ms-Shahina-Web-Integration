/** @format */

import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  MAP_URL,
  contact,
  footerLinks,
  paymentCards,
} from "../constants/constant";
import { getContactDetails } from "../Repository/Api";

const Footer = () => {
  const [response, setResponse] = useState({});

  useEffect(() => {
    getContactDetails(setResponse);
  }, []);

  console.log(response);

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
              <img key={index} src={src} alt="card" />
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
                  src="/asessts/footer/instagram.png"
                  alt="contact"
                />
              </div>
              <span className="text-xl font-medium desc">
                {response?.instagram}
              </span>
            </div>

            {contact.map((item, index) => (
              <div key={index} className="flex items-center gap-2 ">
                <div className="flex-shrink-0">
                  <img
                    className="w-full h-full object-contain "
                    src={item.src}
                    alt="contact"
                  />
                </div>
                <span className="text-xl font-medium desc">{item.mode}</span>
              </div>
            ))}
          </div>
          <div>
            <iframe
              className="mt-3 w-full lg:w-[400px] h-full lg:h-[200px]"
              title="mapping"
              src={MAP_URL}
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

export default Footer;
