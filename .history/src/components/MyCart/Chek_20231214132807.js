/** @format */

import React, { useState } from "react";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe(
  "pk_test_51Kr67EJsxpRH9smiVHbxmogutwO92w8dmTUErkRtIsIo0lR7kyfyeVnULRoQlry9byYbS8Uhk5Mq4xegT2bB9n9F00hv3OFGM5"
);

const App = () => {
    const [ message  , setMessage ] = useState("")

    const pr  = stripe.paymen


  return (
    <Elements stripe={stripePromise}>
      <h1>Apple Pay</h1>
    </Elements>
  );
};

export default App;