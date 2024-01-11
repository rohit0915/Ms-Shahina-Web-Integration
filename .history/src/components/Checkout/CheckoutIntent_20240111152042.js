/** @format */

import { useState } from "react";
import {
  useStripe,
  useElements,
  PaymentElement,
} from "@stripe/react-stripe-js";
import { orderSuccesssecond } from "../../Repository/Api";

const CheckoutIntent = ({ url, orderId }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [errorMessage, setErrorMessage] = useState();
  const [loading, setLoading] = useState(false);

  const handleError = (error) => {
    setLoading(false);
    setErrorMessage(error.message);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!stripe) {
      return;
    }
    setLoading(true);
    const { error: submitError } = await elements.submit();
    if (submitError) {
      handleError(submitError);
      return;
    }
    try {
      const clientSecret = url;
      stripe.confirmCardPayment(clientSecret).then(function (result) {
        if (result.error) {
          // Display error.message in your UI.
          console.log("Err", result.error);
        } else {
          orderSuccesssecond(orderId);
          }
      });
    } catch (error) {
      handleError(error);
    }
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
    <form onSubmit={handleSubmit}>
      <PaymentElement />
      <div className="checked_check">
        <input type="checkbox" required />
        <p>I agree cancellation policy</p>
      </div>
      <button style={btnStyle} type="submit" disabled={!stripe || loading}>
        Checkout
      </button>

      {errorMessage && <div>{errorMessage}</div>}
    </form>
  );
};

export default CheckoutIntent;
