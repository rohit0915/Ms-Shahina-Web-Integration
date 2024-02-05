/** @format */

import React, { useState } from "react";
import { PiInstagramLogoLight } from "react-icons/pi";
import { Link } from "react-router-dom";
import { pictures } from "../../constants/constant";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import { Keyboard } from "swiper/modules";

const GallarySlider = () => {
  const [hover, sethover] = useState(null);

  const swiperConfig = {
    spaceBetween: 20,
    slidesPerView: 1,
    loop: false,
    keyboard: {
      enabled: true,
    },
    autoHeight: true,
    breakpoints: {
      768: {
        slidesPerView: 2,
      },
      900: {
        slidesPerView: 3,
      },
      1024: {
        slidesPerView: 7,
      },
    },
  };

  const sliderStyle = {
    width: "100%",
    overflow: "hidden",
  };

  return (
    <div style={sliderStyle}>
      <Swiper {...swiperConfig} modules={[Keyboard]}>
        {pictures?.map((i, index) => (
          <SwiperSlide key={index}>
            <div
              onMouseEnter={() => sethover(index)}
              onMouseLeave={() => sethover(null)}
              key={index}
              className="relative galler_slider_com "
            >
              <ImageLazyLoading
                img={response?.image}
                alt={""}
                className="object-fill Img-C"
              />
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
    </div>
  );
};

export default GallarySlider;
