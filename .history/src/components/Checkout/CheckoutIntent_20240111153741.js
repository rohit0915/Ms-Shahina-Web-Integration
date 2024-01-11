/** @format */

import { useState } from "react";
import { useStripe, useElements, CardElement } from "@stripe/react-stripe-js";

const CheckoutIntent = () => {
  const stripe = useStripe();
  const elements = useElements();
  const [errorMessage, setErrorMessage] = useState();
  const [loading, setLoading] = useState(false);

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

    try {
      const clientSecret =
        "pi_3OXLCXJsxpRH9smi1gho6ddC_secret_8wXN3Nnqai6JAKL67DSJkaJzl";
      const cardElement = elements.getElement(CardElement);
      const { error: confirmError } = await stripe.confirmCardPayment(
        clientSecret,
        {
          payment_method: {
            card: elements.getElement(cardElement),
          },
        }
      );

      if (confirmError) {
        handleError(confirmError);
      } else {
        console.log("Payment successful!");
        // Handle successful payment
      }
    } catch (error) {
      handleError(error);
    }
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

  return (
    <form onSubmit={handleSubmit}>
      <CardElement />
      <button style={btnStyle} type="submit" disabled={!stripe || loading}>
        Checkout
      </button>

      {errorMessage && <div>{errorMessage}</div>}
    </form>
  );
};

export default CheckoutIntent;
