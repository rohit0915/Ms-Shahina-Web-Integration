/** @format */

import React from "react";
import { useNavigate } from "react-router-dom";

const GiftCart = () => {
  const navigate = useNavigate();

  function BackNavigation() {
    navigate(-1);
  }

  return (
    <>
      <div className="Backward_Heading step_Heading">
        <div>
          <img src="/Image/1.png" alt="" onClick={() => BackNavigation()} />
        </div>
        <p className="title">Select Time & Slot</p>
      </div>

      <div className="giftCart">
        <div className="left">
          <div className="Item">
            <img src="/Image/34.png" alt=" " />
            <div>
                <p className="title">GIFT CARD ( $100 )</p>
                <p className="quantity">QTY</p>
                <div className="qty">
                <span><i class="fa-solid fa-minus"></i></span>
                <span>1</span>
                <span></span>

                </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default GiftCart;
