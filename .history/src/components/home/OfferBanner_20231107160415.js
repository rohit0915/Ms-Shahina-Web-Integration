/** @format */

import React, { useEffect, useState } from "react";
import { getLimitedOffer } from "../../Repository/Api";

const OfferBanner = ({ setBanner }) => {
  const [response, setResponse] = useState([]);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 786);

  function fetchHandler() {
    getLimitedOffer(setResponse, "Promotion");
  }

  useEffect(() => {
    fetchHandler();
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
        <div className="relative w-full Offer_Banner">
        <div className="w-4/6 h-[23rem] image_container">
          <img
            className="w-full h-full object-cover"
            src={response?.[0]?.bannerImage}
            alt="banner"
          />
        </div>
        <div>
          <h1 className="text-4xl font-normal text-white  absolute bottom-10 left-16 text-center w-[37rem]">
            {response?.[0]?.desc}
          </h1>
        </div>

        <div className="absolute  top-0 right-0 flex flex-col gap-10  justify-center items-center bg-white w-[51rem] h-full rounded-l-full z-[300] Hover_Element">
          <h1 className="font-medium text-4xl"> {response?.[0]?.title} </h1>
          <div className="flex items-center store">
            <div className="w-60 h-30 ">
              <a
                href={response?.[0]?.playstoreLink}
                target="_blank"
                rel="noreferrer"
              >
                <img
                  className="w-full h-full object-contain"
                  src="/asessts/play.png"
                  alt="play"
                />
              </a>
            </div>

            <div className="w-60 h-30 ">
              <a
                href={response?.[0]?.appleLink}
                target="_blank"
                rel="noreferrer"
              >
                <img
                  className="w-full h-full object-contain"
                  src="/asessts/store.png"
                  alt="store"
                />
              </a>
            </div>
          </div>
          <div className="w-12 h-8  absolute top-3 right-11 close_btn ">
            <img
              onClick={() => setBanner(false)}
              className="object-cover cursor-pointer"
              src="/Image/14.png"
              alt=""
            />
          </div>
        </div>
      </div>
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
                    <Link to={option?.link} key={`mobile_footer_list${index}`}>
                      <li className="text-left  font-medium cursor-pointer desc">{` ${option?.title}`}</li>
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

  return (
    response?.[0] && (
      <div className="relative w-full Offer_Banner">
        <div className="w-4/6 h-[23rem] image_container">
          <img
            className="w-full h-full object-cover"
            src={response?.[0]?.bannerImage}
            alt="banner"
          />
        </div>
        <div>
          <h1 className="text-4xl font-normal text-white  absolute bottom-10 left-16 text-center w-[37rem]">
            {response?.[0]?.desc}
          </h1>
        </div>

        <div className="absolute  top-0 right-0 flex flex-col gap-10  justify-center items-center bg-white w-[51rem] h-full rounded-l-full z-[300] Hover_Element">
          <h1 className="font-medium text-4xl"> {response?.[0]?.title} </h1>
          <div className="flex items-center store">
            <div className="w-60 h-30 ">
              <a
                href={response?.[0]?.playstoreLink}
                target="_blank"
                rel="noreferrer"
              >
                <img
                  className="w-full h-full object-contain"
                  src="/asessts/play.png"
                  alt="play"
                />
              </a>
            </div>

            <div className="w-60 h-30 ">
              <a
                href={response?.[0]?.appleLink}
                target="_blank"
                rel="noreferrer"
              >
                <img
                  className="w-full h-full object-contain"
                  src="/asessts/store.png"
                  alt="store"
                />
              </a>
            </div>
          </div>
          <div className="w-12 h-8  absolute top-3 right-11 close_btn ">
            <img
              onClick={() => setBanner(false)}
              className="object-cover cursor-pointer"
              src="/Image/14.png"
              alt=""
            />
          </div>
        </div>
      </div>
    )
  );
};

export default OfferBanner;
