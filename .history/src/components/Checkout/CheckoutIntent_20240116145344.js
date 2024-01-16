/** @format */
import React, { useState } from "react";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import {
  checkout,
  orderFailed,
  orderSuccess,
  showMsg,
} from "../../Repository/Api";
import { useDispatch } from "react-redux";
import axios from "axios";
// { url, orderId }
const CheckoutIntent = () => {
  const [processing, setProcessing] = useState("");
  const [url, setUrl] = useState("");
  const [orderId, setOrderId] = useState("");
  const dispatch = useDispatch();
  const stripe = useStripe();
  const elements = useElements();

  const Baseurl = process.env.React_App_Baseurl;
  // const clientSecret = url;

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
      setOrderId(id);
    } catch (e) {
      console.log(e);
      const msg = e?.response?.data?.message;
      showMsg("", msg, "info");
    }
  };

  const placeOrder = async () => {
    try {
      const response = await axios.post(
        `${Baseurl}api/v1/placeOrderWebsite/${orderId} `,
        {},
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("Token")}`,
          },
        }
      );
      const intentKey = response?.data?.paymentIntent?.client_secret;
      // setKey = intentKey;
      setKey(intentKey);
    } catch (e) {
      const msg = e.response.data.message;
      Store.addNotification({
        title: "",
        message: msg,
        type: "danger",
        insert: "top",
        container: "top-center",
        animationIn: ["animate__animated", "animate__fadeIn"],
        animationOut: ["animate__animated", "animate__fadeOut"],
        dismiss: {
          duration: 2000,
          onScreen: true,
        },
      });
    }
  };

  const handleSubmit = async (ev) => {
    ev.preventDefault();
    setProcessing(true);
    try {
      await checkout(setUrl, setOrderId);
      console.log(url, orderId);
      if (url && orderId) {
        const clientSecret = url;
        const payload = await stripe.confirmCardPayment(clientSecret, {
          payment_method: {
            card: elements.getElement(CardElement),
          },
        });

        if (payload.error) {
          orderFailed(orderId);
          setProcessing(false);
        } else {
          setProcessing(false);
          dispatch(orderSuccess(orderId));
        }
      }
    } catch (e) {
      console.log(e);
    }
  };

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

  return (
    <div className="schedule_1">
      <div className="left_div" style={{ width: "100%" }}>
        <div className="review_box">
          <p className="title">Confirm Payment for Product</p>
          <form id="payment-form" onSubmit={handleSubmit}>
            <CardElement id="card-element" options={options} />
            <button disabled={processing} style={btnStyle} id="submit">
              <span id="button-text">Pay now</span>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CheckoutIntent;
