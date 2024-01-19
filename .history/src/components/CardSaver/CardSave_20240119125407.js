/** @format */

import React from "react";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { useState } from "react";
import {
  useStripe,
  useElements,
  PaymentElement,
} from "@stripe/react-stripe-js";
import { guestIntentMaker, showMsg } from "../../Repository/Api";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";

const stripePromise = loadStripe(process.env.React_App_Stripe_Published_Key);

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
    paymentRequestButton: {
      type: "default", // or "donate"
      style: {
        paymentRequestButton: {
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

const boxStyle = {
  padding: "40px",
  maxWidth: "1200px",
  margin: "auto",
};

const CardSave = () => {
  const { email } = useParams();

  const handler = () => {
    guestIntentMaker({ email });
  };

  const IntentComponent = () => {
    const stripe = useStripe();
    const elements = useElements();
    const [errorMessage, setErrorMessage] = useState();
    const [loading, setLoading] = useState(false);
    const [submitLoading, setSubmitLoading] = useState(false);

    const handleError = (error) => {
      setLoading(false);
      setErrorMessage(error.message);
    };

    const handleSubmit = async () => {
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
        await guestIntentMaker({ email, clientSecret });
        let clientSecret;
        if(clientSecret)
        const { error } = await stripe.confirmSetup({
          elements,
          clientSecret,
          confirmParams: {
            return_url: "",
          },
        });
        if (error) {
          handleError(error);
          setSubmitLoading(false);
        } else {
          setSubmitLoading(false);
        }
      } catch (error) {
        handleError(error);
        setSubmitLoading(false);
      }
    };

    return (
      <>
        {submitLoading && (
          <div className="fullscreen-spinner">
            <div className="spinner"></div>
          </div>
        )}
        <form onSubmit={handleSubmit} style={boxStyle}>
          <PaymentElement />
          <div className="checked_check">
            <input type="checkbox" required />
            <p>I agree with cancellation policy</p>
          </div>
          <button style={btnStyle} type="submit" disabled={!stripe || loading}>
            Save
          </button>
          <button style={btnStyle} type="button" onClick={handler}>
            Save
          </button>

          {errorMessage && <div>{errorMessage}</div>}
        </form>
      </>
    );
  };

  return (
    <Elements stripe={stripePromise} options={options}>
      <IntentComponent />
    </Elements>
  );
};

export default CardSave;
