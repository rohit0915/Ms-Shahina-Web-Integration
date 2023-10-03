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
        <p className="title">My Cart</p>
      </div>

      <div className="giftCart">
        <div className="left">
          <div className="Item">
            <div>
              <img src="/Image/34.png" alt=" " />
            </div>
            <div>
              <p className="title">GIFT CARD ( $100 )</p>
              <p className="quantity">QTY</p>
              <div className="qty">
                <span className="input">
                  <AiOutlineMinus />
                </span>
                <span className="item">1</span>
                <span className="input">
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

    <div className="right">

        <div className="details">

            <p className="title"></p>

        </div>

    </div>

      </div>
    </>
  );
};

export default GiftCart;
