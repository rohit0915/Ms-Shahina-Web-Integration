/** @format */
import React, { useState } from "react";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { orderFailed, orderSuccess, showMsg } from "../../Repository/Api";
import { useDispatch } from "react-redux";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import {  PaymentRequestButtonElement } from "@stripe/react-stripe-js";

const CheckoutIntent = () => {
  const [processing, setProcessing] = useState("");
  const [loading, setLoading] = useState(false);
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

  const handleSubmit = async (ev) => {
    ev.preventDefault();
    setProcessing(true);
    setLoading(true);
    try {
      await handleCheckout();
      await placeOrder(orderId);
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
          setLoading(false);
        } else {
          setProcessing(false);
          dispatch(orderSuccess(orderId, navigate, setLoading));
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

  useEffect(() => {
    if (!stripe || !element) {
      return;
    }
    const pr = stripe.paymentRequest({
      currency: "usd",
      country: "US",
      requestPayerEmail: true,
      requestPayerName: true,
      total: {
        label: "Demo Payment",
        amount: 999,
      },
    });

    pr.canMakePayment().then((result) => {
      if (result) {
        // Show Some Buttons
        console.log("REsult");
        setPaymentRequest(pr);
      }
    });
  }, [stripe, element]);


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
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default CheckoutIntent;
