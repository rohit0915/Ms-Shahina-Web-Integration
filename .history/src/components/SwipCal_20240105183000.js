/** @format */

import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import { addDays, format } from "date-fns";

const SwipCal = () => {
  const swiperConfig = {
    spaceBetween: 20,
    slidesPerView: 7,
    loop: true,
    autoplay: {
      delay: 1500,
      disableOnInteraction: false,
    },
    keyboard: {
      enabled: true,
    },
  };

  const stlCont = {
    padding: "20px",
  };

  const dates = [
    
  ]

  return (
    <div style={stlCont}>
      <Swiper
        {...swiperConfig}
        pagination={true}
        modules={[Pagination, Autoplay, Keyboard]}
      >
        {response?.map((item, i) => (
          <SwiperSlide key={i}>
            <ItemCard
              src={item.image}
              styles={"w-80 h-80 text-4xl"}
              type={item.name}
              link={`/skinTypeId/${item._id}/${item.name}`}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SwipCal;
