/** @format */

import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AiFillApple, AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import CheckoutModal from "../Drawer/CheckoutModal";
import { RiDeleteBin6Fill } from "react-icons/ri";
import {
  addFBP,
  addGiftItem,
  checkout,
  deleteAdOn,
  deleteFBP,
  deleteGift,
  deleteItemCart,
  deleteServiceCart,
  getCart,
  getContactDetails,
  updateAdOnQuantity,
  updateDeliveyOpt,
  updateQuan,
  updateServiceQuan,
} from "../../Repository/Api";
import { Alert } from "antd";
import { AiFillInstagram } from "react-icons/ai";
import { BsFillTelephoneFill } from "react-icons/bs";
import { GrMail } from "react-icons/gr";
import { BiCurrentLocation } from "react-icons/bi";
import { CartItems } from "../../store/cartSlice";
import { useDispatch, useSelector } from "react-redux";
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';


const MyCart = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [cart, setCart] = useState({});
  const [contact, setContact] = useState({});
  const dispatch = useDispatch();
  const myCart = useSelector(CartItems);

  const navigate = useNavigate();

  const fetchHandler = () => {
    dispatch(getCart(setCart));
  };

  const handleDeliveyOption = async () => {
    await updateDeliveyOpt();
    fetchHandler();
  };

  useEffect(() => {
    fetchHandler();
    setCart(myCart);
  }, [myCart]);

  useEffect(() => {
    getContactDetails(setContact);
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

  const updateFBPItem = async (id, quantity) => {
    await addFBP(id, quantity);
    fetchHandler();
  };

  const updateGiftQuan = async (id, quantity) => {
    await addGiftItem(id, quantity, navigate);
    fetchHandler();
  };

  const isEmpty = Object.keys(cart).length === 0;

  const DeleteServiceItem = async (id) => {
    await deleteServiceCart(id);
    fetchHandler();
  };

  const updateServiceQuantity = async (id, quantity) => {
    await updateServiceQuan(id, quantity);
    fetchHandler();
  };

  const deleteAdOnService = async (id) => {
    await deleteAdOn(id);
    fetchHandler();
  };

  const updateOnQuan = async (id, quantity) => {
    await updateAdOnQuantity(id, quantity);
    fetchHandler();
  };

  const checkoutHandler = () => {
    checkout(navigate);
  };

  const totalDiscount =
    parseFloat(cart?.membershipDiscount) + parseFloat(cart?.discount);

  const totalAmount = totalDiscount.toFixed(2);


  // Apple Pay
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (event) => {
    event.preventDefault();

    const result = await stripe.confirmCardPayment("sk_test_51NYnaISGUdCg6ljtluiIkzYmQQrVrajA9VCEK8wZDsMhQyosbjhJxrOYbGgHAInisiRdvQbdXjuLE7VrbvbiAnkY00GnxAIl5s", {
      payment_method: {
        card: elements.getElement(CardElement),
      },
    });

    if (result.error) {
      console.log('Payment failed:', result.error);
    } else {
      if (result.paymentIntent.status === 'succeeded') {
        console.log('Payment succeeded');
      }
    }
  };


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

                {cart?.frequentlyBuyProductSchema?.length > 0 ||
                cart?.products?.length > 0 ? (
                  <p className="Title">All Products : </p>
                ) : (
                  ""
                )}

                {cart?.products?.map((i, index) => (
                  <div className="Item" key={index}>
                    <div className="item-container">
                      <div className="img-container">
                        <img
                          src={i.productId?.productImages?.[0]?.image}
                          alt="product"
                        />
                      </div>
                      <div className="content">
                        <p className="title"> {i.productId?.name} </p>

                        <div className="Quantity">
                          <span className="quant">QTY</span>

                          <div className="qty">
                            <span className="input">
                              <AiOutlineMinus
                                onClick={() => {
                                  if (i.quantity > 1) {
                                    updatedItemQuan(
                                      i.productId?._id,
                                      i?.quantity - 1
                                    );
                                  }
                                }}
                                style={{ cursor: "pointer" }}
                              />
                            </span>
                            <span className="item"> {i.quantity} </span>
                            <span className="input">
                              <AiOutlinePlus
                                onClick={() => {
                                  updatedItemQuan(
                                    i.productId?._id,
                                    i?.quantity + 1
                                  );
                                }}
                                style={{ cursor: "pointer" }}
                              />
                            </span>
                          </div>
                        </div>

                        <button onClick={() => deleteItem(i.productId?._id)}>
                          {" "}
                          <RiDeleteBin6Fill /> DELETE ITEM
                        </button>
                      </div>

                      <div className="price_div">
                        <p className="sellingPrice">
                          {" "}
                          $
                          {i.productId?.discountAllow === false
                            ? i.productId?.price
                            : i.productId?.discountPrice}{" "}
                        </p>
                        {i.productId?.discountAllow === true && (
                          <p className="mrp">
                            {" "}
                            $
                            {i.productId?.discountAllow === true
                              ? i.productId?.price
                              : i.productId?.discountPrice}{" "}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                ))}

                {/* Frequently Bought Product */}
                {cart?.frequentlyBuyProductSchema?.map((item, index) => (
                  <div
                    className="frequently-bought FrequentlyInCart"
                    key={index}
                  >
                    <div className="container">
                      <div className="left">
                        {item.frequentlyBuyProductId?.products?.map((i) => (
                          <>
                            {" "}
                            <img
                              src={i.productImages?.[0]?.image}
                              className="Image"
                              alt=""
                            />
                            <img src="/Image/96.png" className="plus" alt="" />
                          </>
                        ))}
                      </div>
                      <div className="right">
                        <p className="price">
                          ${item?.frequentlyBuyProductId?.price}{" "}
                        </p>
                        <div className="Quantity">
                          <div
                            className="qty"
                            style={{ justifyContent: "flex-end" }}
                          >
                            <span className="input">
                              <AiOutlineMinus
                                onClick={() => {
                                  if (item.quantity > 1) {
                                    updateFBPItem(
                                      item?.frequentlyBuyProductId?._id,
                                      item?.quantity - 1
                                    );
                                  }
                                }}
                                style={{ cursor: "pointer" }}
                              />
                            </span>
                            <span className="item"> {item.quantity} </span>
                            <span className="input">
                              <AiOutlinePlus
                                onClick={() => {
                                  updateFBPItem(
                                    item?.frequentlyBuyProductId?._id,
                                    item?.quantity + 1
                                  );
                                }}
                                style={{ cursor: "pointer" }}
                              />
                            </span>
                          </div>
                        </div>

                        <button
                          className="delete"
                          onClick={() => {
                            DeleteFBPItem(item?.frequentlyBuyProductId?._id);
                          }}
                        >
                          {" "}
                          <RiDeleteBin6Fill /> DELETE ITEM
                        </button>
                      </div>
                    </div>
                  </div>
                ))}

                {/* Gift Item */}
                {cart?.gifts?.map((i, index) => (
                  <div className="Item" key={index}>
                    <p className="Title">All Gift : </p>
                    <div className="item-container">
                      <div className="img-container">
                        <img src={i.giftId?.giftId?.image} alt="" />
                      </div>
                      <div className="content">
                        <p className="title"> {i.giftId?.giftId?.name} </p>

                        <div className="Quantity">
                          <span className="quant">QTY</span>

                          <div className="qty">
                            <span className="input">
                              <AiOutlineMinus
                                onClick={() => {
                                  if (i.quantity > 1) {
                                    updateGiftQuan(
                                      i.giftId?._id,
                                      i?.quantity - 1
                                    );
                                  }
                                }}
                                style={{ cursor: "pointer" }}
                              />
                            </span>
                            <span className="item"> {i.quantity} </span>
                            <span className="input">
                              <AiOutlinePlus
                                onClick={() => {
                                  updateGiftQuan(
                                    i.giftId?._id,
                                    i?.quantity + 1
                                  );
                                }}
                                style={{ cursor: "pointer" }}
                              />
                            </span>
                          </div>
                        </div>

                        <button onClick={() => DeleteGiftItem(i.giftId?._id)}>
                          {" "}
                          <RiDeleteBin6Fill /> DELETE ITEM
                        </button>
                      </div>

                      <div className="price_div">
                        <p className="sellingPrice">${i?.giftId?.price}</p>
                      </div>
                    </div>
                  </div>
                ))}

                {/* Service Item */}
                {cart?.services?.length > 0 ||
                cart?.AddOnservicesSchema?.length > 0 ? (
                  <p className="Title">All Services : </p>
                ) : (
                  ""
                )}
                {cart?.services?.map((i, index) => (
                  <div className="Item" key={index}>
                    <div className="item-container">
                      <div className="img-container">
                        <img src={i.serviceId?.images?.[0]?.img} alt="" />
                      </div>
                      <div className="content">
                        <p className="title"> {i.serviceId?.name} </p>

                        <div className="Quantity">
                          <span className="quant">QTY</span>

                          <div className="qty">
                            <span className="input">
                              <AiOutlineMinus
                                onClick={() => {
                                  if (i.quantity > 1) {
                                    updateServiceQuantity(
                                      i.serviceId?._id,
                                      i?.quantity - 1
                                    );
                                  }
                                }}
                                style={{ cursor: "pointer" }}
                              />
                            </span>
                            <span className="item"> {i.quantity} </span>
                            <span className="input">
                              <AiOutlinePlus
                                onClick={() => {
                                  updateServiceQuantity(
                                    i.serviceId?._id,
                                    i?.quantity + 1
                                  );
                                }}
                                style={{ cursor: "pointer" }}
                              />
                            </span>
                          </div>
                        </div>

                        <button
                          onClick={() => DeleteServiceItem(i.serviceId?._id)}
                        >
                          {" "}
                          <RiDeleteBin6Fill /> DELETE ITEM
                        </button>
                      </div>

                      <div className="price_div">
                        <p className="sellingPrice">
                          $
                          {i.serviceId?.discountActive === true
                            ? i.serviceId?.discountPrice
                            : i.serviceId?.price}
                        </p>
                        <p className="mrp">
                          $
                          {i.serviceId?.discountActive === false
                            ? i.serviceId?.discountPrice
                            : i.serviceId?.price}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}

                {/* Ad ON Service Item */}
                {cart?.AddOnservicesSchema?.map((i, index) => (
                  <div className="Item" key={index}>
                    <div className="item-container">
                      <div className="img-container">
                        <img src={i.serviceId?.images?.[0]?.img} alt="" />
                      </div>
                      <div className="content">
                        <p className="title"> {i.addOnservicesId?.name} </p>

                        <div className="Quantity">
                          <span className="quant">QTY</span>

                          <div className="qty">
                            <span className="input">
                              <AiOutlineMinus
                                onClick={() => {
                                  if (i.quantity > 1) {
                                    updateOnQuan(
                                      i.addOnservicesId?._id,
                                      i?.quantity - 1
                                    );
                                  }
                                }}
                                style={{ cursor: "pointer" }}
                              />
                            </span>
                            <span className="item"> {i.quantity} </span>
                            <span className="input">
                              <AiOutlinePlus
                                onClick={() => {
                                  updateOnQuan(
                                    i.addOnservicesId?._id,
                                    i?.quantity + 1
                                  );
                                }}
                                style={{ cursor: "pointer" }}
                              />
                            </span>
                          </div>
                        </div>

                        <button
                          onClick={() =>
                            deleteAdOnService(i.addOnservicesId?._id)
                          }
                        >
                          {" "}
                          <RiDeleteBin6Fill /> DELETE ITEM
                        </button>
                      </div>

                      <div className="price_div">
                        <p className="sellingPrice">
                          ${i.addOnservicesId?.price}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <section className="right_container">
                <div>
                  <section className="py-6 px-8 border-2 border-black">
                    <h3 className="font-bold text-primary text-xl ">
                      PRICE DETAILS
                    </h3>
                    <hr className="w-full h-0.5 my-6 bg-black" />
                    <div className="flex flex-col gap-5 text-lg my-8">
                      <p className="flex justify-between items-center ">
                        Sub Total
                        <span className="font-semibold ">
                          ${cart?.subTotal}{" "}
                        </span>
                      </p>

                      {cart?.frequentlyBuyProductSchema?.length > 0 ||
                      cart?.products?.length > 0 ||
                      cart?.services?.length > 0 ||
                      cart?.AddOnservicesSchema?.length > 0 ? (
                        <>
                          <p className="flex justify-between items-center ">
                            Discount
                            <span className="font-semibold ">
                              ${cart?.discount}{" "}
                            </span>
                          </p>
                          {cart?.shipping > 1 && (
                            <p className="flex justify-between items-center ">
                              Shipping
                              <span className="font-semibold ">
                                ${cart?.shipping}{" "}
                              </span>
                            </p>
                          )}

                          {cart?.membershipDiscount > 0 && (
                            <p className="flex justify-between items-center">
                              Membership Discount{" "}
                              <span className="text-green font-semibold">
                                ${cart?.membershipDiscount}{" "}
                              </span>
                            </p>
                          )}
                        </>
                      ) : (
                        ""
                      )}
                    </div>

                    {cart?.frequentlyBuyProductSchema?.length > 0 ||
                    cart?.products?.length > 0 ? (
                      <>
                        <h4 className="text-xl my-2 font-bold">
                          Select Delivery Option for Product
                        </h4>
                        <div className="flex justify-between gap-2  my-5 delivery_container">
                          <div
                            className="relative flex gap-1 px-3 py-2 border-2 cursor-pointer"
                            onClick={handleDeliveyOption}
                          >
                            <input
                              className="absolute top-2 w-6  checked:accent-green h-6 left-2"
                              type="radio"
                              name="option"
                              checked={
                                cart?.pickupFromStore === false ? true : false
                              }
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
                                <p className="text-sm">
                                  *Includes Shipping Charges
                                </p>
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
                              checked={
                                cart?.pickupFromStore === true ? true : false
                              }
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
                        <h3 className="text-xl font-medium">
                          Delivery Location:
                        </h3>
                        <p className="text-lg font-normal my-3">
                          {" "}
                          {cart?.deliveryAddresss ? (
                            <>
                              {cart?.deliveryAddresss?.appartment} ,
                              {cart?.deliveryAddresss?.city} ,
                              {cart?.deliveryAddresss?.state} ,
                              {cart?.deliveryAddresss?.zipCode} ,
                              {cart?.deliveryAddresss?.address} ,
                            </>
                          ) : (
                            "Not Given Yet"
                          )}{" "}
                        </p>
                      </>
                    ) : (
                      ""
                    )}

                    {cart?.services?.length > 0 ||
                    cart?.AddOnservicesSchema?.length > 0 ? (
                      <>
                        <h4 className="text-xl my-2 font-bold">
                          Service Location
                        </h4>

                        <div className="Box">
                          <div className="two-sec">
                            <img src={contact?.image} alt="" />
                            <div>
                              <p className="title"> {contact?.name} </p>

                              <div className="contact-info">
                                <BsFillTelephoneFill />
                                <p> {contact?.phone} </p>
                              </div>
                              <div className="contact-info">
                                <GrMail />
                                <p> {contact?.email} </p>
                              </div>
                              <div className="contact-info">
                                <AiFillInstagram />
                                <p> {contact?.instagram} </p>
                              </div>
                            </div>
                          </div>

                          <div className="two-sec mt-3">
                            <BiCurrentLocation style={{ fontSize: "20px" }} />
                            <div>
                              <p className="title" style={{ fontSize: "16px" }}>
                                {contact?.address}
                              </p>
                            </div>
                          </div>

                          <a href={contact?.mapLink} target="_blank">
                            <button className="locate_btn">
                              LOCATE ON GOOGLE MAPS
                            </button>
                          </a>
                        </div>
                      </>
                    ) : (
                      ""
                    )}

                    <div className="font-semibold text-2xl flex justify-between border-black border-t-2 py-8 border-b-2 my-8">
                      <span className="">Total Amount</span>
                      <span>${cart?.grandTotal} </span>
                    </div>

                    <p className="text-base font-semibold text-green">
                      {cart?.discount > 0 && (
                        <span>
                          you will save{" "}
                          <span className="text-xl">${totalAmount}</span> on
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
                    style={{ cursor: "pointer" }}
                    onClick={() => checkoutHandler()}
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