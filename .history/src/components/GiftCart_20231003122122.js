/** @format */

import React from "react";
import { useNavigate } from "react-router-dom";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { BsFillTrashFill } from "react-icons/bs";

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
                <span>
                  <AiOutlineMinus />
                </span>
                <span>1</span>
                <span>
                  <AiOutlinePlus />
                </span>
              </div>

            </div>
            
            <div>
                <p className="price">$100.00</p>
                <button className="replace">REPLACE ITEM</button>
                <button className="delete">
                  {" "}
                  <BsFillTrashFill /> DELETE ITEM
                </button>
              </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default GiftCart;
