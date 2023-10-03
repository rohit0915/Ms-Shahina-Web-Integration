import React from "react";
import { RiDeleteBin6Fill } from "react-icons/ri";

const CartProduct = () => {
  return (
    <div>
      <div className="flex justify-between gap-14">
        <div className="w-60 h-60">
          <img
            className="h"
            src="/Image/40.png"
            alt="product"
          />
        </div>
        <div className="flex flex-col">
          <p className="text-xl leading-10">PORE REDUCTION PLUS</p>
          <span className="text-sm text-center">
            {"Size : 30 ml ( 1 fl oz) "}
          </span>
          <div className="mt-10">
            <span className="font-bold text-xl leading-10">OTY</span>
            <div className="flex justify-center">
              <span className="flex justify-center items-center text-xl font-medium w-8 h-8 bg-gray-400">
                -
              </span>
              <input
                className="text-center border border-black"
                type="number"
                defa
              />
              <span className="flex justify-center items-center text-xl font-medium w-8 h-8 bg-gray-400">
                +
              </span>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-between ">
          <div className="flex flex-col">
            <span className="text-2xl font-bold text-primary leading-10">
              $125.00
            </span>
            <p className="line-through text-center">$125.00</p>
          </div>
          <div className="flex flex-col gap-3 items-center">
            <button className="py-2 text-lg px-8 font-medium border-2 border-primary text-primary">
              REPLACE BUTTON
            </button>
            <button className="flex gap-2 py-2 px-8 font-medium text-lg items-center text-orange-600">
              <RiDeleteBin6Fill />
              DELETE ITEM
            </button>
          </div>
        </div>
      </div>
      <hr className="bg-black h-0.5  my-10" />
    </div>
  );
};

export default CartProduct;
