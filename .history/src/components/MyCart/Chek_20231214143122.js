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
  "pk_test_51Kr67EJsxpRH9smiVHbxmogutwO92w8dmTUErkRtIsIo0lR7kyfyeVnULRoQlry9byYbS8Uhk5Mq4xegT2bB9n9F00hv3OFGM5"
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
        console.log("REsult")
        setPaymentRequest(pr);
      }
    });
  }, [stripe, element]);

  return (
    <Elements stripe={stripePromise}>
      <h1>Apple Pay</h1>
      {paymentRequest && (
        <PaymentRequestButtonElement options={{ paymentRequest }} />
      )}
    </Elements>
  );
};

export default App;
