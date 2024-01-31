/** @format */

import React from "react";
import { Link } from "react-router-dom";

const ServiceBooked = () => {
  return (
    <div className="Thanks_Container">
      <p className="title">Thank you for your order!
</p>
      <p className="desc">
      Your order is confirmed. Please check your email for further information.
        We are pleased to confirm your upcoming appointment with us on [Date] at
        [Time]. <br /> Thank you for choosing our services.
      </p>
      <Link to="/mycart" style={{ cursor: "pointer" }}>
        <button>RETURN TO CART</button>
      </Link>
    </div>
  );
};

export default ServiceBooked;
