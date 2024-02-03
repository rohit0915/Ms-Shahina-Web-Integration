/** @format */

import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";

const Thanks = () => {
  const { id } = useParams();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "instant",
    });
  }, []);

  return id === "failed" ? (
    <div className="Thanks_Container">
      <p className="desc">
        We apologize, but there was an issue processing your order. <br />
        Please check your payment details and try again. If the problem
        persists, contact customer support for assistance.
      </p>
      <Link to="/mycart" style={{ cursor: "pointer" }}>
        <button>RETURN TO CART</button>
      </Link>
    </div>
  ) : id === "success-giftorder" ? (
    <div className="Thanks_Container">
      <p className="title">Thank You for Your Gift Card Purchase!</p>
      <p className="desc">
        We look forward to serving you and hope to exceed your expectations.
      </p>
      <Link to="/mycart" style={{ cursor: "pointer" }}>
        <button>RETURN TO CART</button>
      </Link>
    </div>
  ) : (
    <div className="Thanks_Container">
      <p className="title">Thank You!</p>
      <p className="desc">
        Congratulations! Your order has been successfully verified. <br /> We
        are looking forward to provide you the best Experience
      </p>
      <Link to="/mycart" style={{ cursor: "pointer" }}>
        <button>RETURN TO CART</button>
      </Link>
    </div>
  );
};

export default Thanks;