/** @format */

import React, { useEffect, useRef, useState } from "react";
import Slider from "react-slick";
import { pictures } from "../../constants/constant";
import { PiInstagramLogoLight } from "react-icons/pi";
import { Link } from "react-router-dom";

const GallarySlider = () => {
  const sliderRef = useRef(null);
  const [hover, sethover] = useState(null);

  var settings = {
    dots: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 2,
    infinite: true,
    swipeToSlide: true,
    autoplay: true,
    autoplaySpeed: 2000,
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


  return (
    <div className="w-full MaxComponent">
      <div className="grid grid-flow-col overflow-x-scroll no-scrollbar ">
        {pictures.map((picture, index) => (
          <div
            onMouseEnter={() => sethover(index)}
            onMouseLeave={() => sethover(null)}
            key={index}
            className="relative w-72 h-72 flex-shrink-0"
          >
            <img
              key={index}
              className="w-full h-full object-cover"
              src={picture}
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
      </div>
    </div>
  );
};

export default GallarySlider;
