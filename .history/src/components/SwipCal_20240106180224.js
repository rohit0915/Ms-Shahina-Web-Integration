/** @format */

import React, { useState, useEffect, useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const SwipCal = ({ selectedDate, setDate, slots }) => {
  const [generatedDates, setGeneratedDates] = useState([]);
  const [lastGeneratedDate, setLastGeneratedDate] = useState(null);
  const [currentRowContent, setCurrentRowContent] = useState([]);
  const [month, setMonth] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  function generateDates(startDate, numberOfDays) {
    const dates = [...generatedDates];
    let lastDate = lastGeneratedDate || startDate;

    for (let i = 0; i < numberOfDays; i++) {
      const date = new Date(lastDate);
      date.setDate(lastDate.getDate() + 1);
      dates.push(date);
      lastDate = date;
    }

    setLastGeneratedDate(lastDate);
    setGeneratedDates(dates);
  }

  const handleGenerateDates = () => {
    generateDates(new Date(), 7);
  };

  const formatDate = (date) => {
    const day = date?.toLocaleDateString("en-US", {
      day: "numeric",
    });
    const weekDay = date?.toLocaleDateString("en-US", {
      weekday: "long",
    });
    const month = date?.toLocaleDateString("en-US", {
      month: "numeric",
    });

    const year = date?.toLocaleDateString("en-US", {
      year: "numeric",
    });

    const formattedDate = `${year}-${month < 10 ? `${0}${month}` : month}-${
      day < 10 ? `${0}${day}` : day
    }`;

    return (
      <div className="date_shower" onClick={() => setDate(formattedDate)}>
        <div
          className={`day_container ${
            selectedDate === formattedDate ? "active" : ""
          } `}
        >
          <span className="day"> {day} </span>
        </div>
        <span className="weekDay"> {weekDay?.slice(0, 3)} </span>
      </div>
    );
  };

  useEffect(() => {
    handleGenerateDates();
  }, []);

  const sliderRef = useRef(null);

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 7,
    slidesToScroll: 7,
    autoplay: false,
    swipeToSlide: false,
    swipe: false,
    afterChange: (current) => {
      setCurrentIndex(current);
    },
  };

  const nextSlide = () => {
    handleGenerateDates();
    sliderRef.current.slickNext();
  };

  const prevSlide = () => {
    sliderRef.current.slickPrev();
  };

  useEffect(() => {
    if (generatedDates?.length > 0) {
      if (currentIndex > 0) {
        setCurrentRowContent(
          generatedDates?.slice(currentIndex, currentIndex + 7)
        );
      } else {
        setCurrentRowContent(generatedDates?.slice(0, 7));
      }
    }
  }, [currentIndex, generatedDates]);

  useEffect(() => {
    if (currentRowContent) {
      const data = currentRowContent?.slice(-1)?.[0];
      setMonth(data);
    }
  }, [currentRowContent]);

  const getYear = new Date(month)?.toLocaleDateString("en-US", {
    year: "numeric",
  });
  const getMonth = new Date(month)?.toLocaleDateString("en-US", {
    month: "long",
  });


  function getSlot(date) {
    const originalDate = new Date(date);
    const getTime = originalDate?.toLocaleDateString("en-US", {
      month: "long",
    });
    console.log(originalDate)
    // return originalDate
  }

  return (
    <div className="custome-fres-calender">
      <div className="buttons_container">
        <div className="content">
          <p className="month"> {getMonth} </p>
          <p className="year"> {getYear}</p>
        </div>
        <div className="btns">
          <button onClick={prevSlide}>
            <FaChevronLeft />
          </button>
          <button onClick={nextSlide}>
            <FaChevronRight />{" "}
          </button>
        </div>
      </div>
      <Slider {...settings} ref={sliderRef} className="Slider_Here">
        {generatedDates?.map((date, i) => (
          <div className="Main_div" key={i}>
            {formatDate(date)}
          </div>
        ))}
      </Slider>

      <div className="slots">
        <ul>
          {slots?.length > 0 ? (
            slots?.map((i, index) =>
              i.isBooked === false ? (
                <li key={`slot${index}`}>
                  {getSlot(i.from)}
                  {i?.from?.split("T")[1].split(".")[0].slice(0, 5) +
                    i.fromAmPm}
                </li>
              ) : (
                <></>
              )
            )
          ) : (
            <></>
          )}
        </ul>
      </div>
    </div>
  );
};

export default SwipCal;
