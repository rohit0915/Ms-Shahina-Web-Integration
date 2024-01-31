/** @format */

import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getServiceOrder } from "../../Repository/Api";

const ServiceBooked = () => {
  const [order, setOrder] = useState([]);

  const fetchHandler = () => {
    getServiceOrder("Pending", setOrder);
  };

  useEffect(() => {
    fetchHandler();
  }, []);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "instant",
    });
  }, []);

  const date = order?.[0]?.toTime;

  console.log(date);

  function DOBfetcher() {
    const original = new Date(profile?.dob);
    const month = original.getMonth() + 1;
    const date = original.getDate();
    const year = original.getFullYear();
    const hasAll = month && year && date;
    return hasAll &&  ``}
  }

  return (
    <div className="Thanks_Container">
      <p className="title">Thank you for your order!</p>
      <p className="desc">
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
