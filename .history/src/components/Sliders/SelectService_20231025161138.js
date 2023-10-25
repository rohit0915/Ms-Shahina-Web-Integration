/** @format */

import React from "react";
import Slider from "react-slick";

const SelectService = ({ data, id, setId }) => {
  var settings = {
    dots: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    swipeToSlide: true,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  return (
    <Slider {...settings} className="w-full MaxComponent Service_Slider">
      {data?.map((i, index) => (
        <p
          key={index}
          className={i._id === id && "active"}
          onClick={() => setId(i._id)}
        >
          {" "}
          {i.name}{" "}
        </p>
      ))}
    </Slider>
  );
};

export default SelectService;
