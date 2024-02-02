/** @format */

import React from "react";

const New = () => {
  const appearance = {
    /* appearance */
  };

  const elements = stripe.elements({
    mode: "payment",
    amount: 1099,
    currency: "usd",
    appearance,
  });
  const expressCheckoutElement = elements.create("expressCheckout", options);
  expressCheckoutElement.mount("#express-checkout-element");
  return <div>New</div>;
};

export default New;
