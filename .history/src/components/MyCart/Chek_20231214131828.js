import React from "react";
import { useStripe, useElements, CardElement, useGooglePayButton } from "@stripe/react-stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe(
  "pk_test_51Kr67EJsxpRH9smiVHbxmogutwO92w8dmTUErkRtIsIo0lR7kyfyeVnULRoQlry9byYbS8Uhk5Mq4xegT2bB9n9F00hv3OFGM5"
);

const Chek = () => {
  const stripe = useStripe();
  const elements = useElements();
  const { googlePayButton, loading } = useGooglePayButton({
    onClick: () => {
      // Handle Google Pay button click
    },
  });

  const handlePayment = async (event) => {
    event.preventDefault();

    if (stripe) {
      const result = await stripe.confirmCardPayment('YOUR_SECRET_CLIENT_KEY', {
        payment_method: {
          card: elements.getElement(CardElement),
          billing_details: {
            name: 'John Doe',
          },
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
        {googlePayButton}
        <button type="submit" disabled={loading}>Pay</button>
      </form>
    </Elements>
  );
};

export default Chek;
