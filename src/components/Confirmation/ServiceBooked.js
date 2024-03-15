/** @format */

import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getServiceOrder, savedBookingCard } from "../../Repository/Api";
import DateFormatter from "../Global/DateFormatter";
import { getCorrectTime2, getCorrectTime } from "../../Helper/Herlper";

function DOBfetcher(orgignalDate) {
  const original = getCorrectTime2(orgignalDate);
  const month = original.getMonth() + 1;
  const date = original.getDate();
  const year = original.getFullYear();
  const hasAll = month && year && date;
  return (
    hasAll &&
    `${month < 9 ? `0${month}` : month}-${date < 9 ? `0${date}` : date}-${year}`
  );
}

const ServiceBooked = () => {
  const [order, setOrder] = useState([]);

  const fetchHandler = () => {
    getServiceOrder("Pending", setOrder);
  };

  useEffect(() => {
    fetchHandler();
    savedBookingCard();
  }, []);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "instant",
    });
  }, []);

  const date = order?.[0]?.toTime;

  return (
    <div className="Thanks_Container">
      <p className="title">Your appointment is confirmed!</p>
      <p className="desc">
        We are pleased to confirm your upcoming appointment with us on{" "}
        <span style={{ backgroundColor: "#e5d896" }}>
          {" "}
          {date && DOBfetcher(date)}{" "}
        </span>
        at{" "}
        <span
          style={{ backgroundColor: "#e5d896", textTransform: "uppercase" }}
        >
          {date && getCorrectTime(date)}
        </span>{" "}
        <br /> Thank you for choosing our services.
      </p>
      <Link to="/mycart" style={{ cursor: "pointer" }}>
        <button>RETURN TO CART</button>
      </Link>
    </div>
  );
};

export default ServiceBooked;
