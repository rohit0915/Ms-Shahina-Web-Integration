/** @format */

import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import { addDays, format } from "date-fns";

const SwipCal = () => {
    const swiperConfig = {
        spaceBetween: 20,
        slidesPerView: 1,
        loop: true,
        autoplay: {
          delay: 1500,
          disableOnInteraction: false,
        },
        keyboard: {
          enabled: true,
        },
        breakpoints: {
          768: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 4,
          },
        },
      };
    

  const stlCont = {
    padding: "20px",
  };

  return (
    <div style={stlCont}>
    
    </div>
  );
};

export default SwipCal;
