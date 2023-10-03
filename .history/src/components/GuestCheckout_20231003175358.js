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

        <div className="two-sec">
          <div>
            <p>First Name</p>
            <input type="text" placeholder="Enter First Name" />
          </div>
          <div>
            <p>Last Name</p>
            <input type="text" placeholder="Enter Last Name" />
          </div>
        </div>

        <div>
          <p>Email ID</p>
          <input type="email" placeholder="Enter your Email ID" />
        </div>

        <div>
          <p>Contact Number</p>
          <input type="text" placeholder="Enter your Contact Number" />
        </div>

        <p className="title mt-5">
        ADD DELIVERY ADDRESS    
        </p>


        <div>
          <p>Address</p>
          <input type="text" placeholder="Enter your Address" />
        </div>


        <div className="two-sec">
          <div>
            <p>Apartment , Suite , etc. ( OPTIONAL )</p>
            <input type="text" placeholder="Enter Apartment , Suite, etc........ " />
          </div>
          <div>
            <p>City</p>
            <input type="text" placeholder="Enter City" />
          </div>
        </div>

        <div className="two-sec">
          <div>
            <p>State<p>
            <input type="text" placeholder="Enter House Number" />
          </div>
          <div>
            <p>City</p>
            <input type="text" placeholder="Enter City" />
          </div>
        </div>

      </form>
    </>
  );
};

export default GuestCheckout;
