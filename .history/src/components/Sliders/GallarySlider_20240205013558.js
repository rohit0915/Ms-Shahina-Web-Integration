/** @format */

import React, { useState } from "react";
import Slider from "react-slick";
import { PiInstagramLogoLight } from "react-icons/pi";
import { Link } from "react-router-dom";
import { pictures } from "../../constants/constant";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import { Pagination, Autoplay, Keyboard } from "swiper/modules";

const GallarySlider = () => {
  const [hover, sethover] = useState(null);

  const swiperConfig = {
    spaceBetween: 20,
    slidesPerView: 1,
    loop: true,
    keyboard: {
      enabled: true,
    },
    breakpoints: {
      768: {
        slidesPerView: 2,
      },
      900: {
        slidesPerView: 3,
      },
      1024: {
        slidesPerView: 4,
      },
    },
  };
  var settings = {
    dots: false,
    speed: 500,
    slidesToShow: 7,
    slidesToScroll: 2,
    infinite: false,
    swipeToSlide: true,
    autoplay: false,
    autoplaySpeed: 2000,
    adaptiveHeight: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const sliderStyle = {
    width: "100%",
    overflow: "hidden",
  };

  return (
    <div style={sliderStyle}>
      <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        {...swiperConfig}
        modules={[Pagination, Keyboard]}
      >
        {pictures?.map((i, index) => (
          <SwiperSlide key={index}>
            <div
              onMouseEnter={() => sethover(index)}
              onMouseLeave={() => sethover(null)}
              key={index}
              className="relative galler_slider_com "
            >
              <img
                key={index}
                className="w-full h-full object-cover"
                src={i}
                alt=""
              />
              {hover === index && (
                <div className="absolute top-0 w-full h-full flex justify-center items-center bg-black bg-opacity-30 ">
                  <Link
                    to={"https://www.instagram.com/nurse.shahina/"}
                    target="_blank"
                    className="flex flex-col gap-2 items-center text-white"
                  >
                    <PiInstagramLogoLight className="text-9xl text-white cursor-pointer" />
                    <span className="text-lg font-normal">
                      VIEW ON INSTAGRAM
                    </span>
                  </Link>
                </div>
              )}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <Slider {...settings} className="w-full">
        {pictures.map((i, index) => (
          <div
            onMouseEnter={() => sethover(index)}
            onMouseLeave={() => sethover(null)}
            key={index}
            className="relative galler_slider_com "
          >
            <img
              key={index}
              className="w-full h-full object-cover"
              src={i}
              alt=""
            />
            {hover === index && (
              <div className="absolute top-0 w-full h-full flex justify-center items-center bg-black bg-opacity-30 ">
                <Link
                  to={"https://www.instagram.com/nurse.shahina/"}
                  target="_blank"
                  className="flex flex-col gap-2 items-center text-white"
                >
                  <PiInstagramLogoLight className="text-9xl text-white cursor-pointer" />
                  <span className="text-lg font-normal">VIEW ON INSTAGRAM</span>
                </Link>
              </div>
            )}
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default GallarySlider;
