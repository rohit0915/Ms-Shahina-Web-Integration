/** @format */

import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import { addDays, format } from "date-fns";

const SwipCal = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(addDays(new Date(), 6)); // 6 days ahead

  useEffect(() => {
    // Update the end date when the start date changes
    setEndDate(addDays(startDate, 6));
  }, [startDate]);

  const handleDateClick = (selectedDate) => {
    if (selectedDate > endDate) {
      // If the selected date is beyond the current week, advance to the next week
      setStartDate(selectedDate);
      setEndDate(addDays(selectedDate, 6));
    } else {
      setStartDate(selectedDate);
    }
  };

  const renderCalendar = () => {
    const calendarDays = [];
    let currentDate = startDate;

    while (currentDate <= endDate) {
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

  const stlCont = {
    padding: "20px",
  };

  return (
    <div style={stlCont}>
      <Swiper spaceBetween={10} slidesPerView={7}>
        {renderCalendar()}
      </Swiper>
    </div>
  );
};

export default SwipCal;
