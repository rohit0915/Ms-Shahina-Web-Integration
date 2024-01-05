import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import { addDays, format, isAfter } from "date-fns";

const SwipCal = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(addDays(new Date(), 6));

  useEffect(() => {
    const updateDates = () => {
      setEndDate(addDays(startDate, 6));
    };

    updateDates();
  }, [startDate]);

  const renderCalendar = () => {
    const calendarDays = [];
    let currentDate = startDate;

    while (calendarDays.length < 7) {
      calendarDays.push(currentDate);
      currentDate = addDays(currentDate, 1);
    }

    // Check if the current date is within the last 7 days
    if (isAfter(currentDate, endDate)) {
      const nextStartDate = addDays(currentDate, 1); // Move start date to the next day
      const nextEndDate = addDays(currentDate, 7); // Update end date accordingly

      setStartDate(nextStartDate);
      setEndDate(nextEndDate);
    }

    return calendarDays.map((date) => (
      <SwiperSlide key={date.toISOString()}>
        <div className="calendar-day">{format(date, "MMMM d, yyyy")}</div>
      </SwiperSlide>
    ));
  };

  const stlCont = {
    padding: "20px",
  };

  return (
    <div style={stlCont}>
      <Swiper
        spaceBetween={50}
        slidesPerView={7}
        keyboard={{ enabled: true }}
        pagination={{ clickable: true }}
      >
        {renderCalendar()}
      </Swiper>
    </div>
  );
};

export default SwipCal;
