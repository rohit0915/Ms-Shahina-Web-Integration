/** @format */
import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import { Keyboard } from "swiper/modules";
import { addDays, format } from "date-fns";

const SwipCal = () => {
  const [startDate, setStartDate] = useState(new Date());

  const renderCalendar = () => {
    const slides = [];
    let currentDate = startDate;

    for (let i = 0; i < 3; i++) {
      const weekDays = [];
      for (let j = 0; j < 7; j++) {
        weekDays.push(addDays(currentDate, j));
      }

      slides.push(
        <SwiperSlide key={i}>
          {weekDays.map((date) => (
            <div className="calendar-day" key={date.toISOString()}>
              {format(date, "MMMM d, yyyy")}
            </div>
          ))}
        </SwiperSlide>
      );

      currentDate = addDays(currentDate, 7);
    }

    return slides;
  };
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
        {renderCalendar()}
      </Swiper>
    </div>
  );
};

export default SwipCal;
