/** @format */

import React from "react";
import { PaymentRequestButtonElement } from "@stripe/react-stripe-js";
import {
  useStripe,
  useElements,
  CardElement,
  Elements,
} from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe(
  "pk_test_51Kr67EJsxpRH9smiVHbxmogutwO92w8dmTUErkRtIsIo0lR7kyfyeVnULRoQlry9byYbS8Uhk5Mq4xegT2bB9n9F00hv3OFGM5"
);

const Chek = () => {
  const stripe = useStripe();
  const elements = useElements();

  const handlePayment = async (event) => {
    event.preventDefault();

    if (stripe) {
      // Perform the payment request logic here
      const paymentRequest = await stripe.paymentRequest({
        country: "US",
        currency: "usd",
        total: {
          label: "Total",
          amount: 1000, // amount in cents
        },
      });

      const result = await stripe.confirmPaymentIntent({
        payment_method: {
          card: elements.getElement(CardElement),
          billing_details: {
            name: "John Doe",
          },
        },
        payment_method_options: {
          payment_request: paymentRequest.paymentRequest,
        },
      });

      if (result.error) {
        console.error(result.error.message);
      } else {
        // Payment succeeded
      }
    }
  };

  return (
    <Elements stripe={stripePromise}>
      <form onSubmit={handlePayment}>
        {/* Your other form fields */}
        <PaymentRequestButtonElement />
        <button type="submit">Pay</button>
      </form>
    </Elements>
  );
};

export default Chek;
