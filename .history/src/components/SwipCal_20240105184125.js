import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import { addDays, format, isBefore } from "date-fns";

const SwipCal = () => {
  const [startDate, setStartDate] = useState(new Date());

  const endDate = addDays(startDate, 6);

  const handleDateClick = (selectedDate) => {
    setStartDate(selectedDate);
  };

  const renderCalendar = () => {
    const calendarDays = [];
    let currentDate = startDate;

    while (calendarDays.length < 7) {
      calendarDays.push(currentDate);
      currentDate = addDays(currentDate, 1);
    }

    return calendarDays.map((date) => (
      <SwiperSlide key={date.toISOString()}>
        <div className="calendar-day" onClick={() => handleDateClick(date)}>
          {format(date, "MMMM d, yyyy")}
        </div>
      </SwiperSlide>
    ));
  };

  const handleSwiperSlideChange = (swiper) => {
    const lastIndex = swiper.slides.length - 1;
    const isLastSlide = swiper.activeIndex === lastIndex;

    if (isLastSlide) {
      const nextStartDate = addDays(endDate, 1);
      setStartDate(nextStartDate);
    }
  };

  const stlCont = {
    padding: "20px",
  };

  const swiperConfig = {
    spaceBetween: 50,
    slidesPerView: 7,
    pagination: { clickable: true },
    on: {
      slideChange: (swiper) => handleSwiperSlideChange(swiper),
    },
  };

  return (
    <div style={stlCont}>
      <Swiper {...swiperConfig}>
        {renderCalendar()}
      </S
