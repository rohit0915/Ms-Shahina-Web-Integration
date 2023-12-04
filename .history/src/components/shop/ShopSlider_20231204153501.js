/** @format */

import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import { getProductType, getSkinType } from "../../Repository/Api";
import ItemCard from "./ItemCard";

export const SkinTypeSlider = () => {
  const [response, setResponse] = useState([]);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 786);

  function fetchHandler() {
    getSkinType(setResponse);
  }
  useEffect(() => {
    fetchHandler();
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 786);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [isMobile]);


  return (
    response && (
      <>
        <div style={{ overflow: "hidden" }}>
          <Slider {...settings}>
            {response?.map((item, i) => (
              <ItemCard
                key={i}
                src={item.image}
                styles={"w-80 h-80 text-4xl"}
                type={item.name}
                link={`/skinTypeId/${item._id}/${item.name}`}
              />
            ))}
          </Slider>
        </div>
      </>
    )
  );
};


export const ProductTypeSlider = () => {
  const [response, setResponse] = useState([]);

  useEffect(() => {
    getProductType(setResponse);
  }, []);

  return (
    response && (
      <div className="SkinType_Container">
        {response?.map((item, i) => (
          <ItemCard
            key={i}
            src={item.image}
            styles={"w-60 h-60"}
            baseType={item.name}
            link={`/productTypeId/${item._id}/${item.name}`}
          />
        ))}
      </div>
    )
  );
};