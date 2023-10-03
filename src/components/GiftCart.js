/** @format */

import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { AiOutlinePlus, AiOutlineMinus, AiFillApple } from "react-icons/ai";
import { BsFillTrashFill } from "react-icons/bs";
import { MdVerifiedUser } from "react-icons/md";

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
            <p className="title">PRICE DETAILS</p>

            <div className="bordered-line"></div>

            <div className="two-sec">
              <p>Price ( 1 Gift Card $100 )</p>
              <p className="price">$100</p>
            </div>
            <div className="two-sec">
              <p>Quantity </p>
              <p className="price">1</p>
            </div>

            <div className="bordered-line"></div>

            <div className="two-sec">
              <p className="price">Total Amount </p>
              <p className="price">$100</p>
            </div>

            <div className="bordered-line"></div>

            <div className="safe">
              <MdVerifiedUser />
              <p>Safe & Secure Payments. 100% Authentic Products.</p>
            </div>
          </div>

          <button className="checkout">CHECKOUT NOW</button>

          <div className="Interest">
            <span className="text-mediumGray">
              Pay with interest free installments with{" "}
            </span>
            <div className="">
              <img className="h-10" src="/Image/35.png" alt="" />{" "}
            </div>
          </div>

          <Link className="text-lg flex justify-center my-4 font-bold underline text-primary">
            CLICK TO LEARN MORE
          </Link>

          <div className="relative flex items-center justify-center text-xl my-12 font-semibold">
            <hr className="w-full h-0.5" />
            <span className="absolute  mx-auto px-4 bg-white">OR</span>
          </div>
          <div className="">
            <h3 className="text-lg font-semibold my-4">
              Express Checkout with
            </h3>
            <button className="apple_Pay ">
              <AiFillApple className="text-3xl" />
              Pay
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default GiftCart;
