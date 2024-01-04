/** @format */

import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  AiFillApple,
  AiOutlineMinus,
  AiOutlinePlus,
  AiFillStar,
} from "react-icons/ai";
import CheckoutModal from "../Drawer/CheckoutModal";
import { RiDeleteBin6Fill } from "react-icons/ri";
import {
  addFBP,
  AddServiceBulk,
  AddToCartInBulk,
  checkout,
  deleteAdOn,
  deleteFBP,
  deleteGift,
  deleteItemCart,
  deleteServiceCart,
  getCart,
  getContactDetails,
  getReturnPolicy,
  getShippingPrivacy,
  updateAdOnQuantity,
  updateDeliveyOpt,
  updateQuan,
  updateServiceQuan,
} from "../../Repository/Api";
import { AiFillInstagram } from "react-icons/ai";
import { BsFillTelephoneFill } from "react-icons/bs";
import { GrMail } from "react-icons/gr";
import { BiCurrentLocation } from "react-icons/bi";
import { CartItems } from "../../store/cartSlice";
import { useDispatch, useSelector } from "react-redux";
import { DummyCartItems, removeFromCart } from "../../store/DummyCart";
import { removeServiceDummy, ServiceItems } from "../../store/DummySerivce";
import TextDrawer from "../Drawer/TextDrawer";
import { Mail, Call } from "../Helping/Mail";
import { SlCalender } from "react-icons/sl";
import MainStripe from "../Stripe/MainStripe";

const MyCart = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalOpen2, setModalOpen2] = useState(false);
  const [cart, setCart] = useState({});
  const [contact, setContact] = useState({});
  const dummyCart = useSelector(DummyCartItems);
  const serviceCart = useSelector(ServiceItems);
  const dispatch = useDispatch();
  const myCart = useSelector(CartItems);
  const navigate = useNavigate();
  const [desc, setDesc] = useState("");
  const [shippingPrivacy, setShippingPrivacy] = useState();
  const [returnPolicy, setReturnPolicy] = useState();

  const handleDeliveyOption = () => {
    dispatch(updateDeliveyOpt());
  };

  const getPolicies = () => {
    getShippingPrivacy(setShippingPrivacy);
    getReturnPolicy(setReturnPolicy);
  };

  useEffect(() => {
    getPolicies();
  }, []);

  useEffect(() => {
    setCart(myCart);
  }, [myCart]);

  useEffect(() => {
    getContactDetails(setContact);
  }, []);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "instant",
    });
  }, []);

  const updatedItemQuan = (id, quantity, size, priceId, sizePrice) => {
    let payload;
    if (size && priceId) {
      payload = {
        priceId,
        quantity,
        size,
        sizePrice,
      };
    } else {
      payload = {
        quantity,
        sizePrice,
      };
    }
    dispatch(updateQuan(id, payload));
  };

  const DeleteGiftItem = (id) => {
    dispatch(deleteGift(id));
  };

  const DeleteFBPItem = (id) => {
    dispatch(deleteFBP(id));
  };
  const deleteItem = (id) => {
    dispatch(deleteItemCart(id));
  };

  const updateFBPItem = (id, quantity) => {
    dispatch(addFBP(id, quantity));
  };

  const isEmpty = cart !== null && Object.keys(cart).length === 0;

  const DeleteServiceItem = (id, priceId) => {
    if (priceId) {
      dispatch(deleteServiceCart(id, priceId));
    } else {
      dispatch(deleteServiceCart(id));
    }
  };

  const updateServiceQuantity = (i, quantity, id) => {
    let payload;
    if (i?.memberprice && i?.sizePrice && i?.memberprice && i?.priceId) {
      payload = {
        priceId: i?.priceId,
        size: i?.size,
        sizePrice: i?.sizePrice,
        memberprice: i?.memberprice,
        quantity,
      };
    } else {
      payload = {
        quantity,
      };
    }
    dispatch(updateServiceQuan(id, payload));
  };

  const deleteAdOnService = (id) => {
    dispatch(deleteAdOn(id));
  };

  const updateOnQuan = (id, quantity) => {
    dispatch(updateAdOnQuantity(id, quantity));
  };

  const checkoutHandler = () => {
    checkout();
  };

  const [isPushingItems, setIsPushingItems] = useState(false);
  const pushItemInApi = async () => {
    if (isPushingItems) return;
    setIsPushingItems(true);
    for (const item of dummyCart) {
      const ProductId = item?.product?._id;
      console.log(`Processing ProductId: ${ProductId}`);
      const quantity = item?.quantity;
      const sizePrice = item?.sizePrice;
      let payload;
      if (item.size) {
        const size = item?.size;
        const priceId = item?.priceId;
        payload = { size, priceId, quantity, sizePrice };
      } else {
        payload = { quantity, sizePrice };
      }
      await dispatch(AddToCartInBulk(ProductId, payload));
      let removePayload;
      if (item.size) {
        removePayload = item.priceId;
      } else {
        removePayload = item.product?._id;
      }
      dispatch(removeFromCart(removePayload));
    }
    setIsPushingItems(false);
  };

  const pushDummyService = async () => {
    const processedProductIds = new Set();

    for (const item of serviceCart) {
      const ProductId = item.id;
      if (processedProductIds.has(ProductId)) {
        continue;
      }
      processedProductIds.add(ProductId);
      let payload;
      if (item?.payload?.memberprice) {
        payload = {
          quantity: item?.payload?.quantity,
          priceId: item?.payload?.priceId,
          size: item?.payload?.size,
          sizePrice: item?.payload?.sizePrice,
          memberprice: item?.payload?.memberprice,
        };
      } else {
        payload = {
          quantity: item?.payload?.quantity,
        };
      }
      await dispatch(AddServiceBulk(ProductId, payload));
      dispatch(removeServiceDummy(ProductId));
    }
  };

  useEffect(() => {
    if (dummyCart?.length > 0) {
      pushItemInApi();
    } else {
      dispatch(getCart());
    }
  }, [dummyCart]);

  useEffect(() => {
    if (serviceCart?.length > 0) {
      pushDummyService();
    } else {
      dispatch(getCart());
    }
  }, [serviceCart]);

  const fromDate = new Date(cart?.fromTime);
  const toDate = new Date(cart?.toTime);

  // Subtract 5 hours and 30 minutes
  fromDate.setHours(fromDate.getHours() - 5);
  fromDate.setMinutes(fromDate.getMinutes() - 30);

  toDate.setHours(toDate.getHours() - 5);
  toDate.setMinutes(toDate.getMinutes() - 30);

  const weekday = fromDate.toLocaleString("en-US", { weekday: "long" });
  const month = fromDate.toLocaleString("en-US", { month: "long" });
  const day = fromDate.toLocaleString("en-US", { day: "numeric" });

  const fromTime = fromDate.toLocaleString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  });
  const toTime = toDate.toLocaleString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  });

  const [isChecked, setIsChecked] = useState(false);

  const handleCheck = () => {
    setIsChecked(!isChecked);
  };

  // Checkout button
  let checkoutBtn;

  if (cart?.deliveryAddresss) {
    const hasServices =
      cart?.services?.length > 0 || cart?.AddOnservicesSchema?.length > 0;

    if (hasServices && isChecked) {
      checkoutBtn = (
        <button
          className="text-2xl py-4 my-12 w-full text-secondary bg-primary text-center"
          onClick={() => checkoutHandler()}
          style={{ cursor: "pointer" }}
        >
          Checkout Now
        </button>
      );
    } else if (hasServices === false) {
      checkoutBtn = (
        <button
          className="text-2xl py-4 my-12 w-full text-secondary bg-primary text-center"
          onClick={() => checkoutHandler()}
          style={{ cursor: "pointer" }}
        >
          Checkout Now
        </button>
      );
    } else {
      checkoutBtn = (
        <a href="#"
        <button
          className={`text-2xl py-4 my-12 w-full text-secondary bg-primary text-center ${
            hasServices ? "disabled_button" : ""
          }`}
          disabled={!isChecked || !hasServices}
        >
          Checkout Now
        </button>
      );
    }
  } else {
    checkoutBtn = (
      <button className="text-2xl py-4 my-12 w-full text-secondary bg-primary text-center disabled_button">
        Checkout Now
      </button>
    );
  }

  return (
    <>
      <CheckoutModal open={modalOpen} setOpen={() => setModalOpen(false)} />
      <TextDrawer
        open={modalOpen2}
        setOpen={setModalOpen2}
        title={""}
        desc={desc}
      />

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
                                    i?.quantity - 1,
                                    i.size,
                                    i.priceId,
                                    i.sizePrice
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
                                  i?.quantity + 1,
                                  i.size,
                                  i.priceId,
                                  i.sizePrice
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
                      <p className="sellingPrice"> ${i.subTotal}</p>
                      {i.size && (
                        <p
                          className="sellingPrice"
                          style={{ fontSize: "20px" }}
                        >
                          Size : {i.size}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              ))}

              {/* Frequently Bought Product */}
              {cart?.frequentlyBuyProductSchema?.map((item, index) => (
                <div className="frequently-bought FrequentlyInCart" key={index}>
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
                      <p className="price">${item?.subTotal} </p>
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
              {cart?.gifts?.length > 0 ? (
                <p className="Title">All Gift : </p>
              ) : (
                ""
              )}
              {cart?.gifts?.map((i, index) => (
                <div className="Item" key={index}>
                  <div className="item-container">
                    <div className="img-container">
                      <img src={i.giftPriceId?.giftId?.image} alt="" />
                    </div>
                    <div className="content">
                      <p className="title"> {i.giftPriceId?.giftId?.name} </p>

                      <button
                        onClick={() => DeleteGiftItem(i.giftPriceId?._id)}
                      >
                        {" "}
                        <RiDeleteBin6Fill /> DELETE ITEM
                      </button>
                    </div>

                    <div className="price_div">
                      <p className="sellingPrice">${i?.subTotal}</p>
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
                                    i,
                                    i.quantity - 1,
                                    i.serviceId?._id
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
                                  i,
                                  i.quantity + 1,
                                  i.serviceId?._id
                                );
                              }}
                              style={{ cursor: "pointer" }}
                            />
                          </span>
                        </div>
                      </div>

                      <button
                        onClick={() =>
                          DeleteServiceItem(i.serviceId?._id, i?.priceId)
                        }
                      >
                        {" "}
                        <RiDeleteBin6Fill /> DELETE ITEM
                      </button>
                    </div>

                    <div className="price_div">
                      <p className="sellingPrice">
                        {" "}
                        {i?.serviceId?.type === "offer"
                          ? `$${i.total}`
                          : `$${i.price}`}{" "}
                      </p>
                      {i.size && (
                        <p
                          className="sellingPrice"
                          style={{ fontSize: "20px" }}
                        >
                          Size : {i.size}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              ))}

              {/* Ad ON Service Item */}
              {cart?.AddOnservicesSchema?.map((i, index) => (
                <div className="Item" key={index}>
                  <div className="item-container">
                    <div className="img-container">
                      <img src={i.addOnservicesId?.image} alt="" />
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
                      <p className="sellingPrice">${i.price}</p>
                    </div>
                  </div>
                </div>
              ))}

              {cart?.services?.length > 0 ||
              cart?.AddOnservicesSchema?.length > 0 ? (
                <div className="schedule_1">
                  <div className="left_div" style={{ width: "100%" }}>
                    <div className="review_box">
                      <p className="title">Payment method</p>
                      <span>
                        You won't be charged now , payment will be collected in
                        store after your appointment
                      </span>

                      <div
                        className="content"
                        style={{ width: "100%", marginTop: "20px" }}
                      >
                        <p>
                          <strong>Fill this form before proceeding !</strong>
                        </p>
                      </div>
                      <MainStripe />

                      <div className="content" style={{ width: "100%" }}>
                        <p>
                          <strong>Cancellation policy</strong>
                        </p>
                        <p className="desc">
                          Cancel for free up to <strong>48 hours</strong> ahead
                          , otherwise you will be charged <strong>50%</strong>{" "}
                          of the service price for late cancellation or{" "}
                          <strong>100%</strong> for not showing up
                        </p>
                      </div>

                      <div
                        className="content"
                        style={{ width: "100%", marginTop: "20px" }}
                      >
                        <p>
                          {" "}
                          <strong>Important info</strong>{" "}
                        </p>
                        <p className="desc">
                          Please understand that when you forget or cancel your
                          appointment without giving enough <br />
                          notice , I miss the oppurtunity to fill that
                          appointment time , and clients on my waiting list miss{" "}
                          <br />
                          the oppurtunity to recieve services.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                ""
              )}
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
                      <span className="font-semibold ">${cart?.subTotal} </span>
                    </p>

                    {cart?.frequentlyBuyProductSchema?.length > 0 ||
                    cart?.products?.length > 0 ||
                    cart?.services?.length > 0 ||
                    cart?.AddOnservicesSchema?.length > 0 ? (
                      <>
                        {cart?.offerDiscount > 0 && (
                          <p className="flex justify-between items-center ">
                            Offer Discount
                            <span className="font-semibold ">
                              ${cart?.offerDiscount}{" "}
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

                    {cart?.shipping > 0 && (
                      <p className="flex justify-between items-center">
                        Shpping Amount{" "}
                        <span className="text-green font-semibold">
                          ${cart?.shipping}{" "}
                        </span>
                      </p>
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
                      <h3 className="text-xl font-medium" id="#delivery_option">
                        Delivery Location:
                      </h3>
                      <p className="text-lg font-normal my-3">
                        {" "}
                        {cart?.deliveryAddresss ? (
                          <>
                            {cart?.deliveryAddresss?.appartment +
                              " , " +
                              cart?.deliveryAddresss?.city +
                              " , " +
                              cart?.deliveryAddresss?.state +
                              " , " +
                              cart?.deliveryAddresss?.zipCode +
                              " , " +
                              cart?.deliveryAddresss?.address}
                            <br />
                            <Link
                              to="/my-profile"
                              style={{
                                color: "blue",
                                textDecoration: "underline",
                              }}
                            >
                              Update Delivery Address
                            </Link>
                          </>
                        ) : (
                          <Link
                            to="/my-profile"
                            style={{
                              color: "blue",
                              textDecoration: "underline",
                            }}
                          >
                            Add Delivery Address
                          </Link>
                        )}{" "}
                      </p>
                    </>
                  ) : (
                    ""
                  )}
                  <div id="time"></div>

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
                            <div
                              className="contact-info cursor-pointer "
                              onClick={() => Mail(contact?.email)}
                            >
                              <GrMail />
                              <p> {contact?.email} </p>
                            </div>
                            <a href={contact?.instagram}>
                              <div className="contact-info">
                                <AiFillInstagram />
                                <p>nurse.shahina </p>
                              </div>
                            </a>
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
                      <div className="schedule_1">
                        <div className="right_div" style={{ width: "100%" }}>
                          <div
                            className="Box"
                            style={{
                              border: "none",
                              borderTop: "3px solid #000",
                              padding: "0",
                            }}
                          >
                            <div
                              className="Items"
                              style={{ border: "none", padding: "0" }}
                            >
                              <div className="two-div">
                                <p className="head">Appointment</p>
                              </div>
                            </div>

                            <div className="twwo margin-0">
                              <div className="imggg">S</div>
                              <p>Shahina </p>
                            </div>
                            <div className="twwo">
                              <div className="cl">
                                {" "}
                                <SlCalender />
                              </div>

                              <div>
                                <p className="title">
                                  {weekday} {day} {month}
                                </p>{" "}
                                <p>
                                  {" "}
                                  {toTime} - {fromTime}
                                </p>{" "}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </>
                  ) : (
                    ""
                  )}

                  {cart?.fromTime && cart?.toTime ? (
                    ""
                  ) : (
                    <p className="text-lg font-normal my-3">
                      <Link
                        to="/schedule2"
                        style={{
                          color: "blue",
                          textDecoration: "underline",
                        }}
                        id="time"
                      >
                        Select Time & Slot first !
                      </Link>
                    </p>
                  )}

                  <div className="font-semibold text-2xl flex justify-between border-black border-t-2 py-8 border-b-2 my-8">
                    <span className="">Total Amount</span>
                    <span>${cart?.total} </span>
                  </div>

                  <div className="flex gap-2 items-center mt-14">
                    <img
                      className="w-6 h-6"
                      src="/asessts/safeAndSecure.svg"
                      alt="safe and secure"
                    />
                    <p>Safe & Secure Payments. 100% Authentic Products.</p>
                  </div>

                  <div
                    className="flex gap-2 items-center mt-2"
                    style={{
                      textAlign: "center",
                      justifyContent: "center",
                      textDecorationLine: "underline",
                      color: "rgb(4 43 38)",
                      fontWeight: "900",
                    }}
                  >
                    <p
                      style={{ cursor: "pointer" }}
                      onClick={() => {
                        setDesc(shippingPrivacy);
                        setModalOpen2(true);
                      }}
                    >
                      {" "}
                      View Shipping Privacy
                    </p>
                    <p
                      style={{ cursor: "pointer" }}
                      onClick={() => {
                        setDesc(returnPolicy);
                        setModalOpen2(true);
                      }}
                    >
                      View Return Privacy
                    </p>
                  </div>
                  {cart?.services?.length > 0 ||
                  cart?.AddOnservicesSchema?.length > 0 ? (
                    <div className="checkbox_checker">
                      <input
                        type="checkbox"
                        checked={isChecked}
                        value={isChecked}
                        onChange={handleCheck}
                      />
                      <p>
                        {" "}
                        Please check the box if you have already provided your
                        card details.
                      </p>
                    </div>
                  ) : (
                    ""
                  )}
                </section>

                {checkoutBtn}

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
                    <AiFillApple className="text-5xl" type="submit" />
                    Pay
                  </button>
                </div>
              </div>
            </section>
          </div>
        ) : (
          <div className="Not-Found">
            <img src="/Image/empty-cart.png" alt="" />
            <h5> Your cart is currently empty.</h5>
          </div>
        )}
      </section>
    </>
  );
};

export default MyCart;
