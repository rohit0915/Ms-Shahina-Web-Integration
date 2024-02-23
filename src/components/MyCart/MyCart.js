/** @format */

import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  addFBP,
  AddServiceBulk,
  AddToCartInBulk,
  deleteAdOn,
  deleteFBP,
  deleteGift,
  deleteItemCart,
  deleteServiceCart,
  getAddressCart,
  getCart,
  getContactDetails,
  getReturnPolicy,
  getShippingPrivacy,
  updateAdOnQuantity,
  updateDeliveyOpt,
  updateQuan,
  updateServiceQuan,
} from "../../Repository/Api";
import { CartItems } from "../../store/cartSlice";
import { useDispatch, useSelector } from "react-redux";
import { DummyCartItems, removeFromCart } from "../../store/DummyCart";
import { removeServiceDummy, ServiceItems } from "../../store/DummySerivce";
import TextDrawer from "../Drawer/TextDrawer";
import { SlCalender } from "react-icons/sl";
import DateFormatter from "../Global/DateFormatter";
import { IoMdNavigate } from "react-icons/io";
import PriceDetails from "./CartComponent/PriceDetails";
import ProductActions from "./CartComponent/ProductActions";
import FBPActions from "./CartComponent/FBPActions";
import GiftCardActions from "./CartComponent/GiftCardActions";
import ServiceActions from "./CartComponent/ServiceActions";
import AdOnActions from "./CartComponent/AdOnActions";
import CheckoutSection from "./CartComponent/CheckoutSection";

const MyCart = () => {
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
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 786);
  const [deliveryLoader, setDeliveryLoader] = useState(false);
  const [details, setDetails] = useState({});

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 786);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [isMobile]);

  const handleDeliveyOption = () => {
    dispatch(updateDeliveyOpt(setDeliveryLoader));
  };

  const getPolicies = () => {
    getShippingPrivacy(setShippingPrivacy);
    getReturnPolicy(setReturnPolicy);
  };

  useEffect(() => {
    getPolicies();
    getAddressCart(setDetails);
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

  const [isPushingItems, setIsPushingItems] = useState(false);
  const pushItemInApi = async () => {
    if (isPushingItems) return;
    setIsPushingItems(true);
    for (const item of dummyCart) {
      const ProductId = item?.product?._id;
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
  const weekday = fromDate.toLocaleString("en-US", { weekday: "long" });
  const month = fromDate.toLocaleString("en-US", { month: "long" });
  const day = fromDate.toLocaleString("en-US", { day: "numeric" });

  const hasProducts =
    cart?.frequentlyBuyProductSchema?.length > 0 || cart?.products?.length > 0;

  const hasService =
    cart?.services?.length > 0 || cart?.AddOnservicesSchema?.length > 0;

  const hasGiftCard = cart?.gifts?.length > 0;

  const hasAppointmentTime = hasService && cart?.fromTime && cart?.toTime;
  const deliveryAddressPresent = details?.cart?.deliveryAddresss;
  const isSubscriptionActive = cart?.user?.isSubscription === true;

  function addressFetcher() {
    const address = details?.cart?.deliveryAddresss?.address;
    const city = details?.cart?.deliveryAddresss?.city;
    const state = details?.cart?.deliveryAddresss?.state;
    const zipCode = details?.cart?.deliveryAddresss?.zipCode;
    const appartment = details?.cart?.deliveryAddresss?.appartment;

    if (deliveryAddressPresent && (address || city || state || zipCode)) {
      return (
        <>
          <p className="text-lg font-normal my-3">
            {`${address ? address + " " : ""}${
              appartment ? appartment + " " : ""
            }${city ? city + " " : ""}${state ? state + " " : ""}${
              zipCode ? zipCode : ""
            }`}
          </p>
          <Link
            to="/my-profile"
            style={{
              color: "blue",
              textDecoration: "underline",
            }}
            className="text-lg font-normal my-3"
          >
            Change shipping address
          </Link>
        </>
      );
    } else {
      return (
        <Link
          to="/my-profile"
          style={{
            color: "blue",
            textDecoration: "underline",
          }}
          className="text-lg font-normal my-3"
        >
          Please add shipping address
        </Link>
      );
    }
  }

  function appointmentTimeGetter() {
    if (hasAppointmentTime) {
      return (
        <div
          className="Box"
          style={{
            border: "none",
            borderTop: "3px solid #000",
            padding: "0",
          }}
        >
          <div className="Items" style={{ border: "none", padding: "0" }}>
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
                <DateFormatter time={cart?.toTime} /> -
                <DateFormatter time={cart?.fromTime} />
              </p>{" "}
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <Link
          to="/schedule2"
          style={{
            color: "blue",
            textDecoration: "underline",
          }}
          id="time"
          className="text-lg font-normal my-3"
        >
          Please select a date for your appointment first !{" "}
        </Link>
      );
    }
  }

  function appointmentSlotChanger() {
    if (hasAppointmentTime) {
      return (
        <Link
          to="/schedule2"
          style={{
            color: "blue",
            textDecoration: "underline",
          }}
          id="time"
          className="text-lg font-normal my-3"
        >
          Change selected time & date
        </Link>
      );
    }
  }

  // New Key for  price section
  const subTotal = cart?.subTotal;
  const offerDiscount = cart?.offerDiscount;
  const membershipDiscount = cart?.membershipDiscount;
  const pickUpFromStore = cart?.pickupFromStore;
  const shipping = cart?.shipping;
  const total = cart?.total;

  return (
    <>
      <TextDrawer
        open={modalOpen2}
        setOpen={setModalOpen2}
        title={""}
        desc={desc}
      />

      <>
        <div className="down_arrow_btn">
          <a href="#mobilecart">
            <IoMdNavigate color="#fff" />
          </a>
        </div>

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
                <ProductActions
                  hasProducts={hasProducts}
                  products={cart?.products}
                  QuantityAction={updatedItemQuan}
                  deleteAction={deleteItem}
                />

                <FBPActions
                  Items={cart?.frequentlyBuyProductSchema}
                  QuantityAction={updateFBPItem}
                  DeleteAction={DeleteFBPItem}
                />

                <GiftCardActions
                  hasGiftCard={hasGiftCard}
                  Items={cart?.gifts}
                  deleteAction={DeleteGiftItem}
                />

                <ServiceActions
                  hasService={hasService}
                  Items={cart?.services}
                  QuantityAction={updateServiceQuantity}
                  DeleteAction={DeleteServiceItem}
                />

                <AdOnActions
                  Items={cart?.AddOnservicesSchema}
                  QuantityAction={updateOnQuan}
                  DeletAction={deleteAdOnService}
                />

                {!isMobile && (
                  <CheckoutSection
                    hasService={hasService}
                    hasGiftCard={hasGiftCard}
                    hasProducts={hasProducts}
                  />
                )}
              </div>

              <PriceDetails
                isSubscriptionActive={isSubscriptionActive}
                subTotal={subTotal}
                offerDiscount={offerDiscount}
                membershipDiscount={membershipDiscount}
                hasProducts={hasProducts}
                deliveryLoader={deliveryLoader}
                handleDeliveyOption={handleDeliveyOption}
                pickUpFromStore={pickUpFromStore}
                contact={contact}
                addressFetcher={addressFetcher}
                hasService={hasService}
                appointmentTimeGetter={appointmentTimeGetter}
                appointmentSlotChanger={appointmentSlotChanger}
                shipping={shipping}
                total={total}
                setModalOpen2={setModalOpen2}
                setDesc={setDesc}
                returnPolicy={returnPolicy}
                shippingPrivacy={shippingPrivacy}
                isMobile={isMobile}
                hasGiftCard={hasGiftCard}
              />
            </div>
          ) : (
            <div className="Not-Found">
              <img src="/Image/empty-cart.png" alt="" />
              <h5> Your cart is currently empty.</h5>
            </div>
          )}
        </section>
      </>
    </>
  );
};

export default MyCart;
