/** @format */

import React from "react";
import { useNavigate } from "react-router-dom";

const ProductCard = ({ src, title, price, id }) => {
  const navigate = useNavigate();
  return (
    <div
      className="Item cursor-pointer  "
      onClick={() => navigate(`/product/${id}`)}
    >
      <div className="thumbnail" style={{b}} >
        <img className="w-full h-full" src={src} alt="" />
      </div>
      <div className="thumbnail">
        <img className="w-full h-full" src={src} alt="" />
      </div>
      <p className="text-2xl font-black text-primary">${price}</p>
      <h4 className="text-xl font-normal">{title}</h4>
    </div>
  );
};

export default ProductCard;
