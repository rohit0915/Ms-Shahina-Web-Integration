/** @format */

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import { Keyboard } from "swiper/modules";
import { addDays, format } from "date-fns";

const SwipCal = () => {
  const swiperConfig = {
    spaceBetween: 20,
    slidesPerView: 7,
    keyboard: {
      enabled: true,
    },
  };

  const stlCont = {
    padding: "20px",
  };


  return (
    <div style={stlCont}>
      <Swiper {...swiperConfig} pagination={true} modules={[Keyboard]}>
        {dates?.map((item, i) => (
          <SwiperSlide key={i}>{item}</SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SwipCal;
