/** @format */

import React from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

const ProductDetails = () => {
  return (
    <div className="indivisual-product">
      <div className="left">
        <div className="upperImage">
          <img src="/Image/91.png" alt="" />
        </div>
        <div className="multi-Images">
          <img src="/Image/92.png" alt="" />
          <img src="/Image/92.png" alt="" />
          <img src="/Image/92.png" alt="" />
          <img src="/Image/92.png" alt="" />
        </div>
      </div>

      <div className="right">
        <p className="title">EXODERMA PEEL</p>

        <div className="price-container">
          <span className="price">$125.00</span>
          <span className="mrp">$125.00</span>
        </div>

        <div>
            
        </div>
        <div className="qty" style={{ width: "60%" }}>
          <span className="input">
            <AiOutlineMinus />
          </span>
          <span className="item">1</span>
          <span className="input">
            <AiOutlinePlus />
          </span>
        </div>

        <div></div>
      </div>
    </div>
  );
};

export default ProductDetails;
