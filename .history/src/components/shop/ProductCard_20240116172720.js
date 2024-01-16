/** @format */

import React from "react";
import { useNavigate } from "react-router-dom";

const ProductCard = ({ src, title, price, id }) => {
  const navigate = useNavigate();
  return (
    <div
      className="w-60 h-[26rem] text-center flex flex-col justify-between items-center Item cursor-pointer  "
      onClick={() => navigate(`/product/${id}`)}
    >
      <div className="w-60 h-60 Img-Container">
        <img className="w-full h-full" src={src} alt="" />
      </div>
      <h4 className="text-xl font-normal">{title}</h4>

    </div>
  );
};

export default ProductCard;
