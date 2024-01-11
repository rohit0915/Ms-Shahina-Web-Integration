/** @format */
import React, { useState } from "react";
import {
  CardElement,
  useStripe,
  useElements,
  PaymentElement,
} from "@stripe/react-stripe-js";
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
        card: elements.getElement(PaymentElement),
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

  return (
    <form id="payment-form" onSubmit={handleSubmit}>
      {/* <CardElement id="card-element" /> */}
      <PaymentElement id="payment-element" />
      <button
        disabled={processing}
        style={{ backgroundColor: "grey", width: "200px", padding: "10px" }}
        id="submit"
      >
        <span id="button-text">
          {processing ? (
            <div className="spinner" id="spinner"></div>
          ) : (
            "Pay now"
          )}
        </span>
      </button>
    </form>
  );
};

export default CheckoutIntent;
