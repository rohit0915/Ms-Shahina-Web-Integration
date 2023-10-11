/** @format */

import React, { useEffect, useRef, useState } from "react";
import { getReviews } from "../../Repository/Api";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const Testimonials = () => {
  const [response, setResponse] = useState([]);
  const sliderRef = useRef(null);

  useEffect(() => {
    getReviews(setResponse);
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

  return (
    <div>
      <h1 className="text-center text-4xl font-semibold text-primary my-3">
        Testimonials
      </h1>
      <p className="text-center mb-5 tetx-lg">
        Don’t just take our word for it! Here’s what other patients have to say
        about Cherry…
      </p>

      <Slider {...settings} className="testimonial_slider">
        {response?.map((i, index) => (
          <div className="Testimonial-Box" key={index}>
            <h5> {i.userName} </h5>
            <p>{i.description}</p>
          </div>
        ))}
      </Slider>

      <div className="Prev_Next_cont">
        <img
          src={"./Images/leftArrow.svg"}
          onClick={prevSlide}
          className="PrevImg"
          alt=""
        />
        <img
          src={"./Images/rightArrow.scg"}
          onClick={nextSlide}
          className="NextImg"
          alt=""
        />
      </div>
    </div>
  );
};

export default Testimonials;
