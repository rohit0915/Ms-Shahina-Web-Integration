/** @format */

import React from "react";
import { Link } from "react-router-dom";

const GuestThanks = () => {
  return (
    <div className="Thanks_Container">
      <p className="title">Thank You!</p>

      <p className="desc">
         Your order has been successfully verified. <br /> We
        are looking forward to provide you the best Experience.
      </p>
      <Link to="/" style={{ cursor: "pointer" }}>
        <button>RETURN TO HOMEPAGE</button>
      </Link>
    </div>
  );
};

export default GuestThanks;
