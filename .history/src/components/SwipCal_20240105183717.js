/** @format */
import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import { Keyboard } from "swiper/modules";
import { addDays, format } from "date-fns";

const SwipCal = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(addDays(new Date(), 6)); // 6 days ahead

  useEffect(() => {
    setEndDate(addDays(startDate, 6));
  }, [startDate]);

  const renderCalendar = () => {
    const calendarDays = [];
    let currentDate = startDate;

    while (calendarDays.length < 7) {
      calendarDays.push(currentDate);
      currentDate = addDays(currentDate, 1);
    }

    return calendarDays.map((date) => (
      <SwiperSlide key={date.toISOString()}>
        <div className="calendar-day">{format(date, "MMMM d, yyyy")}</div>
      </SwiperSlide>
    ));
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
      <Swiper
        spaceBetween={50}
        slidesPerView={}
        keyboard={{ enabled: true }}
        pagination={{ clickable: true }}
      >
        {renderCalendar()}
      </Swiper>
    </div>
  );
};

export default SwipCal;
