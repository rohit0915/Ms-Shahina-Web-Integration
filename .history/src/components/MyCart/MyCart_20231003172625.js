/** @format */

import React, { useState } from "react";
import { Link } from "react-router-dom";
import CartProduct from "./CartProduct";
import PriceDetail from "./PriceDetail";
import { AiFillApple } from "react-icons/ai";
import { Header } from "../../utils/helpingComponent";


const MyCart = () => {
  const [ modalOpen , setModalOpen ] = useState(false)
  return (
    <section className="my-14">
      <Header heading={"My Cart"} />
      <div className="flex gap-10 justify-center">
        <section>
          <div>
            <CartProduct />
            <CartProduct />
          </div>
        </section>
        <section>
          <div>
            <PriceDetail />
            <button className="text-2xl py-4 my-12 w-full text-secondary bg-primary text-center">
              Chekout Now
            </button>
            <div className="flex justify-center items-center text-lg">
              <span className="text-mediumGray">
                Pay with interest free installments with{" "}
              </span>
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
              <button className="flex items-center justify-center  text-3xl font-semibold text-white bg-black w-full py-4 ">
                <AiFillApple className="text-5xl" />
                Pay
              </button>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
};

export default MyCart;
