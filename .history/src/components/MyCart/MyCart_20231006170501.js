/** @format */

import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import CartProduct from "./CartProduct";
import PriceDetail from "./PriceDetail";
import { AiFillApple } from "react-icons/ai";
import CheckoutModal from "../Drawer/CheckoutModal";
import { RiDeleteBin6Fill } from "react-icons/ri";
import { getCart } from "../../Repository/Api";

const MyCart = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [cart, setCart] = useState({});

  useEffect(() => {
    getCart(setCart);
  }, []);



  return (
    <>
      <CheckoutModal open={modalOpen} setOpen={() => setModalOpen(false)} />
      <section className="my-14">
        <div className="Backward_Heading step_Heading">
          <div>
            <img src="/Image/1.png" alt="" onClick={() => navigate(-1)} />
          </div>
          <p className="title">My Cart</p>
        </div>

        <div className="flex gap-10 justify-center cart-container">
          <div className="left-container">
            {cart?.products?.map((i, index) => (
              <div className="Item" key={index}>
                <div className="img-container">
                  <img src="/Image/40.png" alt="product" />
                </div>
                <div className="flex flex-col">
                  <p
                    className="text-xl leading-10"
                    style={{ textAlign: "center" }}
                  >
                    {" "}
                    {i.productId?.name}{" "}
                  </p>
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
                        defaultValue={1}
                        disabled
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
            ))}
          </div>

          <section>
            <div>
              <PriceDetail
                subTotal={cart?.subTotal}
                shipping={cart?.shipping}
                total={cart?.grandTotal}
                memberShip={cart?.memberShip}
                memberShipPer={cart?.memberShipPer}
                discount={cart?.discount}
                pickupFromStore={cart?.pickupFromStore}
                deliveryAddresss={cart?.deliveryAddresss}
              />
              <button
                className="text-2xl py-4 my-12 w-full text-secondary bg-primary text-center"
                onClick={() => setModalOpen(true)}
              >
                Chekout Now
              </button>
              <div className="flex justify-center items-center text-lg">
                <span className="text-mediumGray">
                  Pay with interest free installments with{" "}
                </span>
              </div>
              <Link
                className="text-lg flex justify-center my-4 font-bold underline text-primary"
                to="/paymentplan"
              >
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
    </>
  );
};

export default MyCart;
