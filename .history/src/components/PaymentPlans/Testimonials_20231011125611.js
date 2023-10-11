/** @format */

import React, { useEffect, useRef, useState } from "react";
import { getReviews } from "../../Repository/Api";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";


function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "red" }}
      onClick={onClick}
    />
  );
}


const Testimonials = () => {
  const [response, setResponse] = useState([]);

  useEffect(() => {
    getReviews(setResponse);
  }, []);

  var settings = {
    dots: false,
    infinite: false,
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

      <div className="flex gap-2 w-32 mx-auto my-5">
        <img src="/asessts/leftArrow.svg" alt="left" />
        <img src="/asessts/rightArrow.svg" alt="right" />
      </div>
    </div>
  );
};

export default Testimonials;
