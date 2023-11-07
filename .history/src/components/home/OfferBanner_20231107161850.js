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
        <div className="Promotional_Banner_Mobile">
          <img src={response?.[0]?.bannerImage} alt="" />
          <h1>{response?.[0]?.desc}</h1>
          <h1> {response?.[0]?.title} </h1>
          <div className="flex items-center store">
            <div className="w-60 h-30 ">
              <a
                href={response?.[0]?.playstoreLink}
                target="_blank"
                rel="noreferrer"
              >
                <img src="/asessts/play.png" alt="" />
              </a>
            </div>

            <div>
              <a
                href={response?.[0]?.appleLink}
                target="_blank"
                rel="noreferrer"
              >
                <img src="/asessts/store.png" alt="" />
              </a>
            </div>
          </div>
        </div>
      );
    };
    footer = <MyComponent />;
  }

  return response?.[0] && footer;
};

export default OfferBanner;
