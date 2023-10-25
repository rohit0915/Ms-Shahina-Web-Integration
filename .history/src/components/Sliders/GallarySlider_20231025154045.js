/** @format */

import React, { useEffect, useRef, useState } from "react";
import React from "react";
import Slider from "react-slick";
import { pictures } from "../../constants/constant";
import { PiInstagramLogoLight } from "react-icons/pi";
import { Link } from "react-router-dom";


const GallarySlider = () => {
  const sliderRef = useRef(null);

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

  const nextSlide = () => {
    sliderRef.current.slickNext();
  };

  const prevSlide = () => {
    sliderRef.current.slickPrev();
  };
  return (
    <></>
  );
};

export default GallarySlider;
