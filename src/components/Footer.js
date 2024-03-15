/** @format */

import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { paymentCards } from "../constants/constant";
import { getContactDetails, getServiceMenu } from "../Repository/Api";
import { Call, Mail } from "./Helping/Mail";
import { useDispatch } from "react-redux";
import { openBanner } from "../store/BannerSlice";
import { ImageLazyLoading } from "../utils/helpingComponent";

const Footer = () => {
  const [response, setResponse] = useState({});
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 786);
  const [services, setServices] = useState([]);

  const dispatch = useDispatch();

  const handleOpen = () => {
    dispatch(openBanner());
  };

  function fetchHandler() {
    getServiceMenu(setServices);
  }

  useEffect(() => {
    fetchHandler();
  }, []);

  useEffect(() => {
    getContactDetails(setResponse);
  }, []);

  // Footer Links
  const footerLinks = [
    {
      title: "About",
      options: [
        {
          title: "HOME",
          link: "/",
        },
        {
          title: "ABOUT US",
          link: "/aboutus",
        },
        {
          title: "SHOP",
          link: "/shop",
        },
        {
          title: "SERVICES",
          link: "/services/services",
        },
        {
          title: "CONTACT US",
          link: "/contact",
        },
      ],
    },
    {
      title: "Services",
      options: services?.map((i) => ({
        title: i.name,
        link: `/services/${i.name}`,
      })),
    },
    {
      title: "Useful Links",
      options: [
        {
          title: "MY ACCOUNT",
          link: "/my-profile",
        },
        {
          title: "PAYMENT PLANS",
          link: "/paymentplan",
        },
        {
          title: "MEMBERSHIP",
          link: "/membership",
        },
        {
          title: "PRIVACY POLICY",
          link: "/privacy-policy",
        },
        {
          title: "TERMS OF USE",
          link: "/terms",
        },
        {
          title: " Shipping Policy ",
          link: "/shipping-policy",
        },
        {
          title: " Return Policy ",
          link: "/return-policy",
        },
      ],
    },
  ];

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
                <a href={response?.instagram} target="_blank" rel="noreferrer">
                  <ImageLazyLoading
                    img={"/asessts/footer/instagram.png"}
                    alt={"instagram"}
                    className={"Intsa"}
                  />
                </a>
                <a href={response?.fb} target="_blank" rel="noreferrer">
                  <ImageLazyLoading
                    img={"/asessts/footer/facebook.png"}
                    alt={"facebook"}
                    className={"Intsa"}
                  />
                </a>
              </div>
            </div>

            <div className="center_div">
              <ImageLazyLoading
                img={"/asessts/navbar/logo.png"}
                className="logo"
                alt="logo"
              />
            </div>

            <div className="right-container ">
              <span className="title">WE ACCEPT</span>
              <div className="flex gap-2 img-cont">
                {paymentCards.map((src, index) => (
                  <ImageLazyLoading
                    img={src}
                    key={`Footer_Payment_card${index}`}
                    alt=""
                  />
                ))}
              </div>
            </div>
          </div>

          <div className="Mid_Container">
            <div className="flex lg:flex-row flex-col gap-3 justify-between mt-5 w-3/5 link_container">
              {footerLinks.map((item, index) => (
                <div key={`Footer_Links${index}`} className="Linkss">
                  <h4
                    className=" text-secondary font-medium Title"
                    style={{ textTransform: "uppercase" }}
                  >
                    {item.title}
                  </h4>
                  <ul className="list-none mt-5 flex flex-col gap-6">
                    {item.options.map((option, index) => (
                      <Link
                        to={option?.link}
                        key={`Footer_Links_list${index}`}
                        style={{ textTransform: "uppercase" }}
                      >
                        <li
                          className="text-left  font-medium cursor-pointer desc"
                          style={{ textTransform: "uppercase" }}
                        >{` ${option?.title}`}</li>
                      </Link>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <div className=" mt-5 max-lg:w-full w-96 Content_Container ">
              <h4
                className=" text-secondary font-medium Title"
                style={{ textTransform: "uppercase" }}
              >
                Contact
              </h4>
              <div className="flex flex-col gap-6 mt-5">
                <div className="flex items-center gap-2  cursor-pointer ">
                  <div
                    className="flex-shrink-0 cursor-pointer"
                    onClick={() => Call(response?.phone)}
                  >
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

                <div
                  className="flex items-center gap-2 cursor-pointer"
                  onClick={() => Mail(response?.email)}
                >
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
                  <div
                    className="flex-shrink-0 "
                    style={{
                      display: "flex",
                      gap: "10px",
                      alignItems: "center",
                    }}
                  >
                    <a href={response?.instagram}>
                      <img src="/asessts/footer/instagram.png" alt="contact" />
                    </a>
                    <span className="text-xl font-medium desc">
                      <a href={response?.instagram}>nurse.shahina</a>
                    </span>
                  </div>
                </div>
                <a href={response?.mapLink}>
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
                </a>
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
          </div>
          {/* <div className="flex items-center gap-3 special_offer">
            <div className="w-30 h-14" onClick={() => handleOpen()}>
              <img
                className="w-full h-full object-contain"
                src="/asessts/specialOffer.png"
                alt="offer"
              />
            </div>
            <h6 className="w-90 font-medium">
              Unlock a Special Treat! 🎉 <br /> Enjoy $50 OFF on your first
              visit when you choose the convenience of booking through
              our fabulous APP!
            </h6>
          </div> */}

          <div className="Down_Div">
            <span className="font-medium text-base text-secondary mr-5">
              DOWNLOAD OUR APP :{" "}
            </span>

            <div className="flex gap-4" style={{ alignItems: "center" }}>
              <img src="/asessts/footer/download (1).png" alt="" />
              <img src="/asessts/footer/download (2).png" alt="" />
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
            <a href={response?.instagram} target="_blank" rel="noreferrer">
              <img src="/asessts/footer/instagram.png" alt="instagram" />
            </a>
            <a href={response?.fb} target="_blank" rel="noreferrer">
              <img src="/asessts/footer/facebook.png" alt="facebook" />
            </a>
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
                <h4
                  className=" text-secondary font-medium Title"
                  style={{ textTransform: "uppercase" }}
                >
                  {item.title}
                </h4>
                <ul>
                  {item.options.map((option, index) => (
                    <Link
                      to={option?.link}
                      key={`mobile_footer_list${index}`}
                      style={{ textTransform: "uppercase" }}
                    >
                      <li className="text-left  font-medium cursor-pointer desc">{` ${option?.title}`}</li>
                    </Link>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="contact">
            <h4
              className=" text-secondary font-medium Title"
              style={{ textTransform: "uppercase" }}
            >
              Contact
            </h4>

            <div className="Item" onClick={() => Call(response?.phone)}>
              <img src="/asessts/footer/contact (1).png" alt="contact" />

              <span className="text-xl font-medium desc">
                {response?.phone}
              </span>
            </div>
            <div className="Item" onClick={() => Mail(response?.email)}>
              <img src="/asessts/footer/contact (2).png" alt="contact" />

              <span className="text-xl font-medium desc">
                {response?.email}
              </span>
            </div>
            <div className="Item">
              <a href={response?.instagram}>
                <img src="/asessts/footer/instagram.png" alt="contact" />
              </a>
              <a href={response?.instagram}>
                <span className="text-xl font-medium desc">nurse.shahina</span>
              </a>
            </div>
            <a href={response?.mapLink}>
              {" "}
              <div className="Item">
                <img src="/asessts/footer/contact (3).png" alt="contact" />

                <span className="text-xl font-medium desc">
                  {response?.address}
                </span>
              </div>
            </a>

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
              <img src="/asessts/footer/download (2).png" alt="download" />
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
