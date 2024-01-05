import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import { addDays, format, isAfter } from "date-fns";

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

  const stlCont = {
    padding: "20px",
  };

  console.log(ca)

  return (
    <div style={stlCont}>
      <Swiper
        spaceBetween={50}
        slidesPerView={7}
        pagination={{ clickable: true }}
      >
        {renderCalendar()}
      </Swiper>
    </div>
  );
};

export default SwipCal;
