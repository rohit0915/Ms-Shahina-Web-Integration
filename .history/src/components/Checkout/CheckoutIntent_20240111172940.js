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
    mode: "setup",
    currency: "usd",
    appearance: {
      theme: "stripe",
      variables: {
        colorPrimary: "#0570de",
        colorBackground: "#ffffff",
        colorText: "#30313d",
        colorDanger: "#df1b41",
        fontFamily: "Ideal Sans, system-ui, sans-serif",
        spacingUnit: "4px",
        borderRadius: "4px",
        fontWeight: "bold",
      },
      rules: {
        ".Tab": {
          border: "1px solid #E0E6EB",
          boxShadow:
            "0px 1px 1px rgba(0, 0, 0, 0.03), 0px 3px 6px rgba(18, 42, 66, 0.02)",
        },
  
        ".Tab:hover": {
          color: "var(--colorText)",
        },
  
        ".Tab--selected": {
          borderColor: "#E0E6EB",
          boxShadow:
            "0px 1px 1px rgba(0, 0, 0, 0.03), 0px 3px 6px rgba(18, 42, 66, 0.02), 0 0 0 2px var(--colorPrimary)",
        },
  
        ".Input--invalid": {
          boxShadow:
            "0 1px 1px 0 rgba(0, 0, 0, 0.07), 0 0 0 2px var(--colorDanger)",
        },
      },
      CardElementButton: {
        type: "default", // or "donate"
        style: {
          CardElementButton: {
            theme: "light",
            height: "40px",
            type: "buy",
            border: "1px solid black",
          },
        },
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
