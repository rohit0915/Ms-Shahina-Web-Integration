import React, { useState } from "react";
import Slider from "react-slick";

const SelectService = () => {
    var settings = {
        dots: false,
        speed: 500,
        slidesToShow: 5,
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
    <div>SelectService</div>
  )
}

export default SelectService