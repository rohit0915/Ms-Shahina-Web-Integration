/** @format */

import { useState } from "react";
import {
  useStripe,
  useElements,
  PaymentElement,
} from "@stripe/react-stripe-js";
import axios from "axios";

export default function StripeComp() {
  const stripe = useStripe();
  const elements = useElements();
  const [errorMessage, setErrorMessage] = useState();
  const [loading, setLoading] = useState(false);

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

    const res = await axios.post(
      "https://shahina-backend.vercel.app/api/v1/user/card/savecard",
      {},
      {
        headers: {
          Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1MjkxOGUxYWJmMTIyMjM4MTcwYmRhNCIsImlhdCI6MTcwNDE5MDE1OSwiZXhwIjoxNzM1NzI2MTU5fQ.zm417Y4OeGH3-CrYYFl0Tw6baA8jpLEgyX5--S9FEB8`,
        },
      }
    );
    console.log(res?.data?.client_secret?.client_secret);
    const clientSecret = res?.data?.client_secret?.client_secret;

    const { error } = await stripe.confirmSetup({
      elements,
      clientSecret,
      confirmParams: {
        return_url: "https://shahina-web.vercel.app/",
      },
    });

    if (error) {
      handleError(error);
    } else {
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <PaymentElement />
      <button type="submit" disabled={!stripe || loading}>
        Submit
      </button>
      {errorMessage && <div>{errorMessage}</div>}
    </form>
  );
}
