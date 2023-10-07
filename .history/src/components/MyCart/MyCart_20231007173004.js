/** @format */

import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AiFillApple, AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import CheckoutModal from "../Drawer/CheckoutModal";
import { RiDeleteBin6Fill } from "react-icons/ri";
import {
  deleteFBP,
  deleteGift,
  deleteItemCart,
  getCart,
  updateDeliveyOpt,
  updateQuan,
} from "../../Repository/Api";
import { Alert } from "antd";

const MyCart = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [cart, setCart] = useState({});
  const navigate = useNavigate();

  const fetchHandler = () => {
    getCart(setCart);
  };

  const handleDeliveyOption = async () => {
    await updateDeliveyOpt();
    fetchHandler();
  };

  useEffect(() => {
    fetchHandler();
  }, []);

  const updatedItemQuan = async (id, quantity) => {
    await updateQuan(id, quantity);
    fetchHandler();
  };

  const DeleteGiftItem = async (id) => {
    await deleteGift(id);
    fetchHandler();
  };
  const DeleteFBPItem = async (id) => {
    await deleteFBP(id);
    fetchHandler();
  };
  const deleteItem = async (id) => {
    await deleteItemCart(id);
    fetchHandler();
  };

  const isEmpty = Object.keys(cart).length === 0;

  console.log(cart);

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

        {isEmpty === false ? (
          <div className="flex gap-10 justify-center cart-container">
            <div className="left-container">
              {/* Normal Product */}
              {cart?.products?.map((i, index) => (


                <div className="Item">
                <div className="img-container">
                  <img src={i.productId?.productImages?.[0]?.image} alt="product" />
                </div>
                <div className="content">
                  <p className="title"> {i.productId?.name} </p>

                  <div className="Quantity">
                    <span className="quant">QTY</span>

                    <div className="qty">
                      <span className="input">
                        <AiOutlineMinus />
                      </span>
                      <span className="item">  {i.quantity} </span>
                      <span className="input">
                        <AiOutlinePlus   onClick={() => {
                                updatedItemQuan(
                                  i.productId?._id,
                                  i?.quantity + 1
                                );
                              }}
                              style={{ cursor: "pointer" }} />
                      </span>
                    </div>
                  </div>

                  <button>
                    {" "}
                    <RiDeleteBin6Fill /> DELETE ITEM
                  </button>
                </div>

                <div className="price_div">
                  <p className="sellingPrice">$125.00</p>
                  <p className="mrp">$125.00</p>
                </div>
              </div>


                <div className="Item" key={index}>
                  <div className="img-container">
                    <img
                      src={}
                      alt="product"
                    />
                  </div>
                  <div className="flex flex-col">
                    <p
                      className="text-xl leading-10"
                      style={{ textAlign: "center" }}
                    >
                      {" "}
                     {" "}
                    </p>

                    <div className="mt-10">
                      <span className="font-bold text-xl leading-10">QTY</span>
                      <div
                        style={{
                          width: "80%",
                          display: "block",
                          margin: "auto",
                        }}
                      >
                        <div className="qty">
                          <span className="input">
                            <AiOutlineMinus
                          
                            />
                          </span>
                          <span className="item"> </span>
                          <span className="input">
                            <AiOutlinePlus
                            
                            />
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col items-center justify-between ">
                    <div className="flex flex-col">
                      <span className="text-2xl font-bold text-primary leading-10">
                        ${i.total}
                      </span>
                      <p className="line-through text-center">
                        ${i.productId?.discount}
                      </p>
                    </div>
                    <div className="flex flex-col gap-3 items-center">
                      <button className="py-2 text-lg px-8 font-medium border-2 border-primary text-primary">
                        REPLACE BUTTON
                      </button>
                      <button
                        className="flex gap-2 py-2 px-8 font-medium text-lg items-center text-orange-600"
                        onClick={() => deleteItem(i.productId?._id)}
                      >
                        <RiDeleteBin6Fill />
                        DELETE ITEM
                      </button>
                    </div>
                  </div>
                </div>
              ))}

              {/* Frequently Bought Product */}
              {cart?.frequentlyBuyProductSchema?.map((item) =>
                item.frequentlyBuyProductId?.products?.map((i, index) => (
                  <div className="Item" key={index}>
                    <div className="img-container">
                      <img src={i?.productImages?.[0]?.image} alt="product" />
                    </div>
                    <div className="flex flex-col">
                      <p
                        className="text-xl leading-10"
                        style={{ textAlign: "center" }}
                      >
                        {" "}
                        {i?.name}{" "}
                      </p>

                      <div className="mt-10">
                        <span className="font-bold text-xl leading-10">
                          QTY
                        </span>
                        <div
                          style={{
                            width: "80%",
                            display: "block",
                            margin: "auto",
                          }}
                        >
                          <div className="qty">
                            <span className="input">
                              <AiOutlineMinus
                                onClick={() => {
                                  updatedItemQuan(i?._id, i?.quantity - 1);
                                }}
                                style={{ cursor: "pointer" }}
                              />
                            </span>
                            <span className="item"> {i.quantity} </span>
                            <span className="input">
                              <AiOutlinePlus
                                onClick={() => {
                                  updatedItemQuan(i?._id, i?.quantity + 1);
                                }}
                                style={{ cursor: "pointer" }}
                              />
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col items-center justify-between ">
                      <div className="flex flex-col">
                        <span className="text-2xl font-bold text-primary leading-10">
                          ${i.price}
                        </span>
                        <p className="line-through text-center">
                          ${i?.discount}
                        </p>
                      </div>
                      <div className="flex flex-col gap-3 items-center">
                        <button className="py-2 text-lg px-8 font-medium border-2 border-primary text-primary">
                          REPLACE BUTTON
                        </button>
                        <button
                          className="flex gap-2 py-2 px-8 font-medium text-lg items-center text-orange-600"
                          onClick={() => {
                            DeleteFBPItem(i._id);
                          }}
                        >
                          <RiDeleteBin6Fill />
                          DELETE ITEM
                        </button>
                      </div>
                    </div>
                  </div>
                ))
              )}

              {/* Gift Item */}
              {cart?.gifts?.map((i, index) => (
                <div className="Item" key={index}>
                  <div className="img-container">
                    <img src={i.giftId?.image} alt="product" />
                  </div>
                  <div className="flex flex-col">
                    <p
                      className="text-xl leading-10"
                      style={{ textAlign: "center" }}
                    >
                      {" "}
                      {i.giftId?.name}{" "}
                    </p>
                  </div>
                  <div className="flex flex-col items-center justify-between ">
                    <div className="flex flex-col">
                      <span className="text-2xl font-bold text-primary leading-10">
                        ${i?.giftId?.price}
                      </span>
                      <p className="line-through text-center">
                        ${i.giftId?.discountPrice}
                      </p>
                    </div>
                    <div className="flex flex-col gap-3 items-center">
                      <button
                        className="flex gap-2 py-2 px-8 font-medium text-lg items-center text-orange-600"
                        onClick={() => DeleteGiftItem(i.giftId?._id)}
                      >
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
                <section className="py-6 px-8 border-2 border-black">
                  <h3 className="font-bold text-primary text-xl ">
                    PRICE DETAILS
                  </h3>
                  <hr className="w-full h-0.5 my-6 bg-black" />
                  <div className="flex flex-col gap-5 text-lg my-8">
                    <p className="flex justify-between items-center ">
                      Sub Total
                      <span className="font-semibold ">${cart?.subTotal} </span>
                    </p>
                    <p className="flex justify-between items-center ">
                      Discount
                      <span className="font-semibold ">${cart?.discount} </span>
                    </p>
                    <p className="flex justify-between items-center ">
                      Shipping
                      <span className="font-semibold ">${cart?.shipping} </span>
                    </p>
                    <p className="flex justify-between items-center">
                      Gold Membership {cart?.memberShipPer}% Discount{" "}
                      <span className="text-green font-semibold">
                        ${cart?.memberShip}{" "}
                      </span>
                    </p>
                  </div>
                  <h4 className="text-xl my-2 font-bold">
                    Select Delivery Option
                  </h4>
                  <div className="flex justify-between gap-2  my-5">
                    <div
                      className="relative flex gap-1 px-3 py-2 border-2 cursor-pointer"
                      onClick={handleDeliveyOption}
                    >
                      <input
                        className="absolute top-2 w-6  checked:accent-green h-6 left-2"
                        type="radio"
                        name="option"
                        checked={cart?.pickupFromStore === false ? true : false}
                      />
                      <label htmlFor="doorstep">
                        <div className="flex flex-col items-center">
                          <img
                            className="w-24 h-12 stroke-green fill-green"
                            src="/asessts/truck.svg"
                            alt="truck"
                          />
                          <span className="text bold  text-xl font-bold">
                            Doorstep Delivery
                          </span>
                          <p className="text-sm">*Includes Shipping Charges</p>
                        </div>
                      </label>
                    </div>

                    <div
                      className="relative flex gap-1 px-3 py-2 border-2 cursor-pointer"
                      onClick={handleDeliveyOption}
                    >
                      <input
                        className="absolute top-2 w-6  checked:accent-green h-6 left-2"
                        type="radio"
                        name="option"
                        checked={cart?.pickupFromStore === true ? true : false}
                      />
                      <label htmlFor="store">
                        <div className="flex flex-col items-center">
                          <img
                            className="w-24 h-12 stroke-green fill-green"
                            src="/asessts/store location.svg"
                            alt="store"
                          />
                          <span className="text bold text-xl font-bold">
                            Pickup from Store
                          </span>
                          <p className="text-sm">*No Shipping Charges</p>
                        </div>
                      </label>
                    </div>
                  </div>
                  <h3 className="text-xl font-medium">Delivery Location:</h3>
                  <p className="text-lg font-normal my-3">
                    {" "}
                    {cart?.deliveryAddresss
                      ? cart?.deliveryAddresss
                      : "Not Given Yet"}{" "}
                  </p>

                  <div className="font-semibold text-2xl flex justify-between border-black border-t-2 py-8 border-b-2 my-8">
                    <span className="">Total Amount</span>
                    <span>${cart?.grandTotal} </span>
                  </div>
                  <p className="text-base font-semibold text-green">
                    {cart?.discount > 0 && (
                      <span>
                        you will save{" "}
                        <span className="text-xl">${cart?.discount} </span> on
                        this order
                      </span>
                    )}
                  </p>
                  <div className="flex gap-2 items-center mt-14">
                    <img
                      className="w-6 h-6"
                      src="/asessts/safeAndSecure.svg"
                      alt="safe and secure"
                    />
                    <p>Safe & Secure Payments. 100% Authentic Products.</p>
                  </div>
                </section>

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
        ) : (
          <div style={{ padding: "20px" }}>
            <Alert message="No Item In Cart" type="info" className="Alert" />
          </div>
        )}
      </section>
    </>
  );
};

export default MyCart;
