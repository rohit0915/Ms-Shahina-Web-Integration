/** @format */

import { useState } from "react";
import {
  useStripe,
  useElements,
  PaymentElement,
} from "@stripe/react-stripe-js";
import { useDispatch } from "react-redux";
import { serviceCheckout } from "../../Repository/Api";
import axios from "axios";

export default function StripeComp() {
  const stripe = useStripe();
  const elements = useElements();
  const [errorMessage, setErrorMessage] = useState();
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  const handleError = (error) => {
    setLoading(false);
    setErrorMessage(error.message);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
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
      const res = await axios.post(
        `${process.env.React_App_Baseurl}api/v1/user/card/savecard`,
        {},
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("Token")}`,
          },
        }
      );
      const clientSecret = res?.data?.client_secret?.client_secret;
      await dispatch(serviceCheckout());
      const { error } = await stripe.confirmSetup({
        elements,
        clientSecret,
        confirmParams: {
          return_url: "https://shahina-web.vercel.app/mycart",
        },
      });
      if (error) {
        handleError(error);
      } else {
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
      <div className="checkbox_checker">
        
      </div>
      <button style={btnStyle} type="submit" disabled={!stripe || loading}>
        Book Now
      </button>
      {errorMessage && <div>{errorMessage}</div>}
    </form>
  );
}
