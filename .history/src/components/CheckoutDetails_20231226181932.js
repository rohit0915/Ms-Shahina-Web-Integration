/** @format */

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { AiFillInstagram } from "react-icons/ai";
import { BsFillTelephoneFill } from "react-icons/bs";
import { GrMail } from "react-icons/gr";
import { BiCurrentLocation } from "react-icons/bi";
import { SlCalender } from "react-icons/sl";
import axios from "axios";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import {
  PaymentElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";

const stripePromise = loadStripe(
  "pk_test_51BTUDGJAJfZb9HEBwDg86TN1KNprHjkfipXmEDMb0gSCassK5T3ZfxsAbcgKVmAIXF7oZ6ItlZZbXO6idTHE67IM007EwQ4uN3"
);
const CheckoutDetails = () => {
  const navigate = useNavigate();
  function BackNavigation() {
    navigate(-1);
  }

  // ----
  const options = {
    mode: "setup",
    currency: "usd",
    appearance: {
      /*...*/
    },
  };

  const stripe = useStripe();
  const elements = useElements();

  const [errorMessage, setErrorMessage] = useState();
  const [loading, setLoading] = useState(false);

  console.log(errorMessage)
  const handleError = (error) => {
    setLoading(false);
    setErrorMessage(error.message);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe) {
      return;
    }

    setLoading(true);

    const { error: submitError } = await elements.submit();
    if (submitError) {
      handleError(submitError);
      return;
    }

    const { clientSecret } =
      "seti_1ORZSmJsxpRH9smiFBbXY7PU_secret_PG5eX2iGtg1TDrCh6fGE2Feua5YN3Jo";
    const { error } = await stripe.confirmSetup({
      elements,
      confirmParams: {
        return_url: "https://example.com/complete",
      },
    });
    if (error) {
      console.log(error)
        // handleError(error);
    } else {
      // Handle success
    }
  };
  return (
    <>
      {elements && (
        <Elements stripe={stripePromise} options={options}>
          <form onSubmit={handleSubmit}>
            <PaymentElement />
            <button type="submit" disabled={!stripe || loading}>
              Submit
            </button>
            {errorMessage && <div>{errorMessage}</div>}
          </form>
        </Elements>
      )}

      <div className="Backward_Heading step_Heading">
        <div>
          <img src="/Image/1.png" alt="" onClick={() => BackNavigation()} />
        </div>
        <p className="title">Enter Your Card Details</p>
      </div>

      <div className="schedule_1">
        <div className="left_div">
          <div className="review_box">
            <p className="title">Please Fill your Card Details Below</p>

            <form>
              <div>
                <p>Card Holder Full Name</p>
                <input type="text" placeholder="Add Card Holder Full Name" />
              </div>

              <div>
                <p>Card Number</p>
                <input type="text" placeholder="Credit OR Debit Card Number" />
              </div>

              <div className="two_input">
                <div className="first">
                  <p>Expiry Date</p>
                  <input type="text" placeholder="MM / YYYY" />
                </div>
                <div>
                  <p>CVV</p>
                  <input type="text" placeholder="***" />
                </div>
              </div>

              <div className="payment_div">
                <p>Pay Securely with</p>
                <img src="/Image/9.png" alt="" />
                <img src="/Image/10.png" alt="" />
                <img src="/Image/11.png" alt="" />
                <img src="/Image/12.png" alt="" />
                <img src="/Image/13.png" alt="" />
              </div>

              <div className="border-line" />

              <div className="content">
                <p>Add Shipping notes</p>
                <p className="desc">
                  Include comments or requests about your Shipping
                </p>
              </div>

              <div>
                <textarea placeholder="Write your Notes here..............r" />
              </div>

              <div className="border-line" />

              <div className="submit_btn">
                <div style={{ marginTop: "0" }}>
                  <p>TOTAL PRICE</p>
                  <span>
                    <span className="total"> $499</span>
                    <span>1 SERVICE SELECTED</span>
                  </span>
                </div>

                <button onClick={() => navigate("/thanks")}>
                  PROCEED TO PAY
                </button>
              </div>
            </form>
          </div>
        </div>

        <div className="right_div">
          <div className="Box">
            <div className="two-sec">
              <img src="/Image/69.png" alt="" />
              <div>
                <p className="title mb-5">ORDER - 123</p>
                <div className="contact-info">
                  <BsFillTelephoneFill />
                  <p>(469)823-0402</p>
                </div>
                <div className="contact-info">
                  <GrMail />
                  <p>info@shahinahoja.com</p>
                </div>
                <div className="contact-info">
                  <AiFillInstagram />
                  <p>@nurse.shahina</p>
                </div>
              </div>
            </div>
            <div className="two-sec mt-3">
              <SlCalender style={{ fontSize: "20px" }} />
              <div>
                <p className="title" style={{ fontSize: "16px" }}>
                  Delivery Date : 23 October ( 10:00 AM )
                </p>
              </div>
            </div>
            <div className="two-sec mt-3">
              <BiCurrentLocation style={{ fontSize: "20px" }} />
              <div>
                <p className="title" style={{ fontSize: "16px" }}>
                  Delivery Address : 905 Watters Creek Boulevard, 141, Allen,
                  Texas, USA
                </p>
              </div>
            </div>

            <div className="Items">
              <div className="two-div">
                <p className="head">DMK Product Serum</p>
                <p className="head"> $499</p>
              </div>
              <div className="two-div">
                <p className="desc">QUANTITY - 1</p>
              </div>
            </div>

            <div className="Items">
              <div className="two-div">
                <p className="head">Pore Reduction Serum</p>
                <p className="head"> $499</p>
              </div>
              <div className="two-div">
                <p className="desc">QUANTITY - 1</p>
              </div>
            </div>

            <div className="Items">
              <div className="two-div">
                <p className="head">TOTAL PRICE</p>
                <p className="head"> $499</p>
              </div>
              <div className="two-div">
                <p className="desc">2 PRODUCTS SELECTED</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CheckoutDetails;
