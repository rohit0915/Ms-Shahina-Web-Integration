/** @format */

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { AiFillInstagram } from "react-icons/ai";
import { BsFillTelephoneFill } from "react-icons/bs";
import { GrMail } from "react-icons/gr";
import { BiCurrentLocation } from "react-icons/bi";
import { SlCalender } from "react-icons/sl";
import {
  useStripe,
  useElements,
  PaymentElement,
} from "@stripe/react-stripe-js";
import axios from "axios";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

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

    const res = await axios.post(
      "https://shahina-backend.vercel.app/api/v1/user/card/savecard",
      {},
      {
        headers: {
          Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1NGNjMjQ1MjliNTE2M2Y0ZmFjMTE2MiIsImlhdCI6MTcwMzU5MjYwOSwiZXhwIjoxNzM1MTI4NjA5fQ.8_C1SjwjAtR-CYayezHkouJzj4usdOpwJVNCqO0RaHg`,
        },
      }
    );
    const { clientSecret } = res?.data?.client_secret?.client_secret;

    const { error } = await stripe.confirmSetup({
      elements,
      clientSecret,
      confirmParams: {
        return_url: "https://example.com/complete",
      },
    });

    if (error) {
      handleError(error);
    } else {
    }
  };

  return (
    <>
      {/* <Elements stripe={stripePromise} options={options}>
        <form onSubmit={handleSubmit}>
          <PaymentElement />
          <button type="submit" disabled={!stripe || loading}>
            Submit
          </button>
          {errorMessage && <div>{errorMessage}</div>}
        </form>
      </Elements> */}

      <div className="Backward_Heading step_Heading">
        <div>
          <img src="/Image/1.png" alt="" onClick={() => BackNavigation()} />
        </div>
        <p className="title">Review and confirm</p>
      </div>

      <div className="schedule_1">
        <div className="left_div">
          <div className="review_box">
            <p className="title">Payment method</p>
            <span>
              You won't be charged now , payment will be collected in store
              after your appointment
            </span>

            <form>
              <div>
                <p>Name on card</p>
                <input type="text" placeholder="Add Card Holder full name" />
              </div>

              <div>
                <p>Card Number</p>
                <input type="text" placeholder="Credit or debit card number" />
              </div>

              <div className="two_input">
                <div className="first">
                  <p>Expiry Date</p>
                  <input type="text" placeholder="MM/YY" />
                </div>
                <div>
                  <p>Security code</p>
                  <input type="text" placeholder="123" />
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

              {/* <div className="border-line" /> */}

              <div className="content">
                <p>Cancellation policy</p>
                <p className="desc">
                  Cancel for free up to <strong>48 hours</strong> ahead ,
                  otherwise you will be charged <strong>50%</strong> of the
                  service price for late cancellation or <strong>100%</strong>{" "}
                  for not showing up
                </p>
              </div>

              
              <div className="content">
                <p>Important info</p>
                <p className="desc">
                  Please understand that when you forget or cancel your appointment without giving enough <br />
                  notice  , I miss the oppurtunity to fill that appointment time , and clients on my waiting list miss  <br />
                  the 
                </p>
              </div>

              {/* <div>
                <textarea placeholder="Write your Notes here..............r" />
              </div> */}

              {/* <div className="border-line" />
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
              </div> */}
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
