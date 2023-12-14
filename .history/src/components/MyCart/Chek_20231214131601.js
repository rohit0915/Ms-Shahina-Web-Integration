/** @format */

import React  from "react";
import { PaymentRequestButtonElement } from "@stripe/react-stripe-js";
import { useStripe, useElements, CardElement } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe(
  "pk_test_51Kr67EJsxpRH9smiVHbxmogutwO92w8dmTUErkRtIsIo0lR7kyfyeVnULRoQlry9byYbS8Uhk5Mq4xegT2bB9n9F00hv3OFGM5"
);

const Chek = () => {
  const stripe = useStripe();
  const elements = useElements();

  const handlePayment = async (event) => {
    event.preventDefault();

    const { paymentMethod, error } = await stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement(CardElement), // Replace with your actual card element
    });

    if (error) {
      console.error(error);
    } else {
      // Handle successful payment
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
