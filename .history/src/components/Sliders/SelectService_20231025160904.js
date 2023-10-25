/** @format */

import React, { useState } from "react";
import Slider from "react-slick";

const SelectService = () => {
  var settings = {
    dots: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    swipeToSlide: true,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  return (
    <Slider {...settings} className="w-full MaxComponent">
        <p></p>
    </Slider>
  );
};

export default SelectService;
