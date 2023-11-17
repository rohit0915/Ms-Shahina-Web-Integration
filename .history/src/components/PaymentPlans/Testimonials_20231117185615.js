/** @format */

import React, { useEffect, useRef, useState } from "react";
import { getReviews } from "../../Repository/Api";
import Slider from "react-slick";
import Loader from "../Loader/Loader";

const Testimonials = ({ show }) => {
  const [response, setResponse] = useState([]);
  const [load, setLoad] = useState(false);

  const sliderRef = useRef(null);

  async function fetchHandler() {
    setLoad(true);
    await getReviews(setResponse);
    setLoad(false);
  }

  useEffect(() => {
    fetchHandler();
  }, []);

  var settings = {
    dots: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 2,
    infinite: true,
    swipeToSlide: true,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const nextSlide = () => {
    sliderRef.current.slickNext();
  };

  const prevSlide = () => {
    sliderRef.current.slickPrev();
  };

  return
  response?.length > 0 && (
    <div className="testimonial_container">
      <Slider {...settings} className="testimonial_slider" ref={sliderRef}>
        {response?.map((i, index) => (
          <div className="Testimonial-Box" key={index}>
            <h5> {i.userName} </h5>
            <p>{i.description}</p>
          </div>
        ))}
      </Slider>

      {show === true && (
        <div className="Prev_Next_cont">
          <img
            src={"/Image/Arrow 2 (1).png  "}
            onClick={prevSlide}
            className="PrevImg"
            alt=""
          />
          <img
            src={"/Image/Arrow 2.png"}
            onClick={nextSlide}
            className="NextImg"
            alt=""
          />
        </div>
      )}
    </div>
  );
};

export default Testimonials;
