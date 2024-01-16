/** @format */

import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";

const Thanks = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "instant",
    });
  }, []);

  return
  <div className="Thanks_Container">
    <p className="title">Thank You!</p>

    <p className="desc">
      Congratulations! Your order has been successfully verified. <br /> We are
      looking forward to provide you the best Experience
    </p>
    <Link to="/mycart" style={{ cursor: "pointer" }}>
      <button>RETURN TO CART</button>
    </Link>
  </div>;
};

export default Thanks;
