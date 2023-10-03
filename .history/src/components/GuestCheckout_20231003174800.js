/** @format */

import React from "react";
import { useNavigate } from "react-router-dom";

const GuestCheckout = () => {
  const navigate = useNavigate();

  function BackNavigation() {
    navigate(-1);
  }
  return (
    <>
      <div className="Backward_Heading step_Heading">
        <div>
          <img src="/Image/1.png" alt="" onClick={() => BackNavigation()} />
        </div>
        <p className="title">Guest Checkout</p>
      </div>

      <form className="guestCheckout">
        <p className="title">
          Please Enter the Details to Checkout as the Guest
        </p>

    <div className="">

    </div>

      </form>
    </>
  );
};

export default GuestCheckout;
