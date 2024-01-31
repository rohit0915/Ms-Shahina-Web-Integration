/** @format */

import React, { useEffect , useState } from "react";
import { Link, useParams } from "react-router-dom";

const Thanks = () => {
  const { id } = useParams()
  const [order, setOrder] = useState([]);;

  const fetchHandler = () => {
    getProductOrder(setOrder);
  };
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "instant",
    });
  }, []);

  // console.log(id?.split('-')?.[1])

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
      <p className="title">
        Thank you for your order! Your order is confirmed. <br />  Please check your
        email for further information.
      </p>
      <p className="desc">We are pleased to confirm your upcoming appointment
        with us on [Date] at [Time].<br /> Thank you for choosing our services.
        message when they book and buy products: We are pleased to confirm your
        upcoming appointment with us on [Date] at [Time]. Your order is
        confirmed. Please check your email for further information. Thank you
        for choosing our services.
      </p>

      <Link to="/mycart" style={{ cursor: "pointer" }}>
        <button>RETURN TO CART</button>
      </Link>
    </div>
  );
};

export default Thanks;
