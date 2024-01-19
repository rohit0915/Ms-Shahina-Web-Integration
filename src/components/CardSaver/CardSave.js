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
import axios from "axios";
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

const Baseurl = process.env.React_App_Baseurl;
const CardSave = () => {
  const { email } = useParams();

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
        const res = await axios.post(
          `${Baseurl}api/v1/user/card/savecardBeforLogin/${email}`
        );
        const clientSecret = res?.data?.client_secret?.client_secret;
        if (clientSecret) {
          const { error } = await stripe.confirmSetup({
            elements,
            clientSecret,
            confirmParams: {
              return_url:
                "http://shahinahoja.s3-website.eu-north-1.amazonaws.com/confirmation",
            },
          });
          if (error) {
            handleError(error);
            setSubmitLoading(false);
          } else {
            setSubmitLoading(false);
          }
        } else {
          console.log("Client Secret not available ");
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
