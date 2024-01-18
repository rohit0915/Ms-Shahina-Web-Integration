/** @format */

import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { userSendOtp, verifyOtp } from "../Repository/Api";

const ForgetPassword = () => {
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const navigate = useNavigate();

  const payload = { email };

  const submitHandler = () => {
    if (email) {
      userSendOtp(payload);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const payload = { email, otp };
    verifyOtp(payload, navigate);
  };

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "instant",
    });
  }, []);

  return (
    <>
      <div className="Backward_Heading step_Heading">
        <p style={{ width: "100%" }}>Forgot Password?</p>
      </div>

      <div className="forget-password">
        <p className="title">Please Enter the following Details to Verify </p>

        <form onSubmit={handleSubmit}>
          <div className="otp">
            <div>
              <p>Email Address</p>
              <input
                type="text"
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <button
              className="sendOtp"
              type="button"
              onClick={() => submitHandler()}
            >
              SEND OTP
            </button>
          </div>

          <div className="mt-4">
            <p>Enter 4 Digit Code</p>
            <input
              type="tel"
              pattern="[0-9]{4}"
              required
              onChange={(e) => setOtp(e.target.value)}
            />
          </div>

          <button className="verify" type="submit">
            VERIFY
          </button>
        </form>
      </div>
    </>
  );
};

export default ForgetPassword;
