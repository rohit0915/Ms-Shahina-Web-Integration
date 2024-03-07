/** @format */
import React, { useEffect, useState } from "react";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { orderFailed, orderSuccess, showMsg } from "../../Repository/Api";
import { useDispatch } from "react-redux";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const CheckoutIntent = ({
  pickUpFromStore,
  deliveryAddressPresent,
  hasProducts,
  hasGiftCard,
}) => {
  const [processing, setProcessing] = useState("");
  const [loading, setLoading] = useState(false);
  const [complete, setComplete] = useState(false);
  const [show, setShow] = useState(false);
  const [completeMsg, setCompleteMsg] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const stripe = useStripe();
  const elements = useElements();
  const Baseurl = process.env.React_App_Baseurl;

  let url;
  let orderId;

  const handleCheckout = async () => {
    try {
      const response = await axios.post(
        `${Baseurl}api/v1/checkout`,
        {},
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("Token")}`,
          },
        }
      );
      const id = response.data?.data?.orderId;
      orderId = id;
    } catch (e) {
      console.log(e);
      const msg = e?.response?.data?.message;
      showMsg("", msg, "info");
    }
  };

  const placeOrder = async (id) => {
    try {
      const response = await axios.post(
        `${Baseurl}api/v1/placeOrderWebsite/${id} `,
        {},
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("Token")}`,
          },
        }
      );
      const intentKey = response?.data?.paymentIntent?.client_secret;
      url = intentKey;
    } catch (e) {
      const msg = e.response.data.message;
      showMsg("", msg, "info");
    }
  };

  // ---
  const handleCheckoutAndPlaceOrder = async () => {
    setProcessing(true);
    setLoading(true);
    try {
      await handleCheckout();
      await placeOrder(orderId);
      const clientSecret = url;
      const payload = await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: elements.getElement(CardElement),
        },
      });

      if (payload.error) {
        orderFailed(orderId);
        setProcessing(false);
        setLoading(false);
      } else {
        setProcessing(false);
        dispatch(orderSuccess(orderId, navigate, setLoading));
      }
    } catch (e) {
      console.log(e);
    }
  };

  const handleGiftCardCheckout = () => {
    if (complete === true) {
      handleCheckoutAndPlaceOrder();
    } else {
      setCompleteMsg("Please fill card details first");
    }
  };

  const handleProductCheckout = async () => {
    if (pickUpFromStore === true) {
      if (complete === true) {
        handleCheckoutAndPlaceOrder();
      } else {
        setCompleteMsg("Please fill card details first");
      }
    } else if (
      pickUpFromStore === false &&
      deliveryAddressPresent !== null &&
      deliveryAddressPresent !== undefined
    ) {
      if (complete === true) {
        handleCheckoutAndPlaceOrder();
      } else {
        setCompleteMsg("Please fill card details first");
      }
    } else {
      setShow(true);
    }
  };

  const handleSubmit = async (ev) => {
    ev.preventDefault();
    if (hasGiftCard && !hasProducts) {
      handleGiftCardCheckout();
    } else {
      handleProductCheckout();
    }
  };
  // ----

  const options = {
    style: {
      base: {
        fontSize: "16px",
        fontFamily: "Arial, sans-serif",
        color: "#32325d",
        "::placeholder": {
          color: "#aab7c4",
        },
      },
      invalid: {
        color: "#fa755a",
        iconColor: "#fa755a",
      },
    },
  };

  const btnStyle = {
    backgroundColor: "#000",
    color: "#fff",
    padding: "10px",
    borderRadius: "10px",
    border: "1px solid #000",
    width: "200px",
    display: "block",
    marginTop: "15px",
  };

  const messageCaster = () => {
    if (pickUpFromStore === false && !deliveryAddressPresent && show) {
      return (
        <Link
          to="/my-profile"
          style={{ color: "blue", textDecoration: "underline" }}
        >
          Please add shipping address first
        </Link>
      );
    }
  };

  useEffect(() => {
    if (!elements) return;
    const cardElement = elements.getElement(CardElement);
    const onChange = (event) => {
      setComplete(event.complete);
    };
    cardElement.on("change", onChange);
    return () => {
      cardElement.off("change", onChange);
    };
  }, [elements]);

  useEffect(() => {
    setShow(false);
    setCompleteMsg("");
  }, [pickUpFromStore, deliveryAddressPresent]);
  return (
    <>
      {loading && (
        <div className="fullscreen-spinner">
          <div className="spinner"></div>
        </div>
      )}

      <div className="schedule_1 appointment_box">
        <div className="left_div" style={{ width: "100%" }}>
          <div className="review_box">
            <p className="title"> Confirm Payment </p>
            <form id="payment-form" onSubmit={handleSubmit}>
              <CardElement id="card-element" options={options} />
              <button disabled={processing} style={btnStyle} id="submit">
                <span id="button-text">Pay now</span>
              </button>
              {messageCaster()}
              <div className="flex gap-2 items-center mt-14 ">
                <img
                  className="w-6 h-6"
                  src="/asessts/safeAndSecure.svg"
                  alt="safe and secure"
                />
                <p>Safe & Secure Payments.</p>
              </div>
              {!complete && <div style={{ color: "red" }}>{completeMsg}</div>}
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default CheckoutIntent;
