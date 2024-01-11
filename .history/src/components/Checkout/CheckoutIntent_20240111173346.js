/** @format */
import React, { useState } from "react";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { orderFailed, orderSuccess } from "../../Repository/Api";
import { useDispatch } from "react-redux";

const CheckoutIntent = ({ url, orderId }) => {
  const [processing, setProcessing] = useState("");
  const dispatch = useDispatch();

  const stripe = useStripe();
  const elements = useElements();

  const clientSecret = url;

  const handleSubmit = async (ev) => {
    ev.preventDefault();
    setProcessing(true);

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
          <p className="title">Confirm Payment</p>
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
