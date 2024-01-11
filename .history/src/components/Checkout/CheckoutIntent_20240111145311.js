/** @format */

import { useState } from "react";
import {
  useStripe,
  useElements,
  PaymentElement,
} from "@stripe/react-stripe-js";
import { orderSuccesssecond } from "../../Repository/Api";
import { useNavigate } from "react-router-dom";

const CheckoutIntent = ({ url, orderId }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [errorMessage, setErrorMessage] = useState();
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleError = (error) => {
    setLoading(false);
    setErrorMessage(error.message);
  };

  console.log(url);

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
      const { error } = await stripe.confirmSetup({
        elements,
        clientSecret,
        confirmParams: {
          return_url: "https://shahina-web.vercel.app/mycart",
        },
      });
      if (error) {
        handleError(error);
        console.log("This Is Error ONe ");
      } else {
        orderSuccesssecond(orderId);
      }
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
