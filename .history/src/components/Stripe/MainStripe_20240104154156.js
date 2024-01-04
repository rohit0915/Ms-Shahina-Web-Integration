/** @format */

import React from "react";
import StripeComp from "./StripeComp";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

// const stripePromise = loadStripe(
//   "pk_test_51BTUDGJAJfZb9HEBwDg86TN1KNprHjkfipXmEDMb0gSCassK5T3ZfxsAbcgKVmAIXF7oZ6ItlZZbXO6idTHE67IM007EwQ4uN3"
// );
const stripePromise = loadStripe(
  "pk_test_51Kr67EJsxpRH9smiVHbxmogutwO92w8dmTUErkRtIsIo0lR7kyfyeVnULRoQlry9byYbS8Uhk5Mq4xegT2bB9n9F00hv3OFGM5"
);

const options = {
  mode: "setup",
  currency: "usd",
  appearance: {
    /*...*/
  },
};

const MainStripe = () => {
  return (
    <Elements stripe={stripePromise} options={options}>
      <StripeComp />
    </Elements>
  );
};

export default MainStripe;
