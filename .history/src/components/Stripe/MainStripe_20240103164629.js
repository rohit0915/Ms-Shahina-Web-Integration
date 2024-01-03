/** @format */

import "./styles.css";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe(
  "pk_test_51BTUDGJAJfZb9HEBwDg86TN1KNprHjkfipXmEDMb0gSCassK5T3ZfxsAbcgKVmAIXF7oZ6ItlZZbXO6idTHE67IM007EwQ4uN3"
);
const options = {
  mode: "setup",
  currency: "usd",
  appearance: {
    /*...*/
  },
};

import React from "react";
import StripeComp from "./StripeComp";

const MainStripe = () => {
  return (
    <Elements stripe={stripePromise} options={options}>
      <StripeCom />
    </Elements>
  );
};

export default MainStripe;
