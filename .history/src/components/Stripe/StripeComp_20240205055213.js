/** @format */

import { useState } from "react";
import {
  useStripe,
  useElements,
  PaymentElement,
} from "@stripe/react-stripe-js";
import { showMsg } from "../../Repository/Api";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function StripeComp() {
  const stripe = useStripe();
  const elements = useElements();
  const [errorMessage, setErrorMessage] = useState();
  const [loading, setLoading] = useState(false);
  const [submitLoading, setSubmitLoading] = useState(false);
  const navigate = useNavigate();

  const handleError = (error) => {
    setLoading(false);
    setErrorMessage(error.message);
  };

  const serviceCheckout = async (event) => {
    event.preventDefault();
    setSubmitLoading(true);
    try {
      const response = await axios.post(
        `${process.env.React_App_Baseurl}api/v1/checkoutService`,
        {},
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("Token")}`,
          },
        }
      );
      if (response.status === 200) {
        handleSubmit();
      }
    } catch (e) {
      setSubmitLoading(false);
      const msg = e.response.data.msg;
      showMsg("Error !", msg, "danger");
      if (
        msg === "This Slot already booked. " ||
        msg ===
          "Your service time is greater than 05:00 pm, so move to next date."
      ) {
        navigate("/schedule2");
      }
    }
  };

  const handleSubmit = async () => {
    if (!stripe) {
      return;
    }
    setLoading(true);
    const { error: submitError } = await elements.submit();
    if (submitError) {
      handleError(submitError);
      return;
    }
    try {
      const res = await axios.post(
        `${process.env.React_App_Baseurl}api/v1/user/card/savecard`,
        {},
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("Token")}`,
          },
        }
      );
      const clientSecret = res?.data?.client_secret?.client_secret;
      const { error } = await stripe.confirmSetup({
        elements,
        clientSecret,
        confirmParams: {
          return_url:
            "http://shahinahoja.s3-website.eu-north-1.amazonaws.com/service-booked",
        },
      });
      if (error) {
        handleError(error);
        setSubmitLoading(false);
      } else {
        setSubmitLoading(false);
      }
    } catch (error) {
      handleError(error);
      setSubmitLoading(false);
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
    <>
      {submitLoading && (
        <div className="fullscreen-spinner">
          <div className="spinner"></div>
        </div>
      )}
      <form onSubmit={serviceCheckout}>
        <PaymentElement />
        <div className="checked_check">
          <input type="checkbox" required />
          <p>I agree with cancellation policy</p>
        </div>
        <div className="content" style={{ width: "100%" }}>
          <p>
            <strong>Cancellation policy</strong>
          </p>
          <p className="desc">
            Cancel for free up to <strong>48 hours</strong> ahead , otherwise
            you will be charged <strong>50%</strong> of the service price for
            late cancellation or <strong>100%</strong> for not showing up.
          </p>
        </div>

        <div className="content" style={{ width: "100%", marginTop: "20px" }}>
          <p>
            {" "}
            <strong>Important info</strong>{" "}
          </p>
          <p className="desc">
            Please understand that when you forget or cancel your appointment
            without giving enough notice, we miss the opportunity to fill that
            appointment time, and clients on our waiting list miss the
            opportunity to receive services. <br /> Appointments are confirmed
            48 hours in advance because we know how easy it is to forget an
            appointment you booked months ago. Since the services are reserved
            for you personally, a cancellation fee will apply if you no show.
          </p>
        </div>
        <button style={btnStyle} type="submit" disabled={!stripe || loading}>
          Book Now
        </button>

        <div className="flex gap-2 items-center mt-14">
          <img
            className="w-6 h-6"
            src="/asessts/safeAndSecure.svg"
            alt="safe and secure"
          />
          <p>Safe & Secure Payments.</p>
        </div>

        {errorMessage && <div>{errorMessage}</div>}
      </form>
    </>
  );
}
