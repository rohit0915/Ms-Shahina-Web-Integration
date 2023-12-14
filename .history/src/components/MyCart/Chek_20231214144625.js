/** @format */

import React, { useEffect, useState } from "react";
import {
  Elements,
  useElements,
  useStripe,
  PaymentRequestButtonElement,
} from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe(
  "pk_live_51Kr67EJsxpRH9smizUjNERPVsq1hlJBnnJsfCOqNTPL6HKgsG9YTOOcA5yYk38O7Wz2NILGPvIKkxe3rU90iix610049htYt1w"
);

const App = () => {
  const stripe = useStripe();
  const element = useElements();
  const [paymentRequest, setPaymentRequest] = useState(null);

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
    <Elements stripe={stripePromise}>
      <h1>Apple Pay</h1>
      {paymentRequest ? (
        <PaymentRequestButtonElement options={{ paymentRequest }} />
      ) : (
        "No Present Here"
      )}
    </Elements>
  );
};

export default App;
