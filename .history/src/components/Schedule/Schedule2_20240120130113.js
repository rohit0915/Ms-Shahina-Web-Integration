/** @format */

import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AiFillStar, AiFillInstagram } from "react-icons/ai";
import { BsFillTelephoneFill } from "react-icons/bs";
import { GrMail } from "react-icons/gr";
import { BiCurrentLocation } from "react-icons/bi";
import {
  getAllSlot,
  getCart,
  getContactDetails,
  getCrossedSlot,
  showMsg,
  TimeandSlot,
} from "../../Repository/Api";
import { Store } from "react-notifications-component";
import { Call, Mail } from "../Helping/Mail";
import SwipCal from "../SwipCal";
import ContactComponent from "../Contact/ContactComponent";

const Schedule2 = () => {
  const navigate = useNavigate();
  const [cart, setCart] = useState({});
  const [contact, setContact] = useState({});
  const today = new Date();
  const formattedToday = today.toISOString().split("T")[0]; // "YYYY-MM-DD"
  const [date1, setDate] = useState(formattedToday);
  const [time, setTime] = useState("");
  const [response, setResponse] = useState([]);

  const getHandler = () => {
    const date = date1;
    getAllSlot(setResponse, date);
  };

  useEffect(() => {
    if (date1) {
      getHandler();
    }
  }, [date1]);
  const updatedTime = time?.split("T")[1]?.slice(0, 5);

  const payload = { date: date1, time: updatedTime };

  const submitHandler = () => {
    if (date1 && time) {
      TimeandSlot(payload, navigate);
    } else {
      showMsg("", "Select Date and Time", "danger");
    }
  };

  function BackNavigation() {
    navigate(-1);
  }
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "instant",
    });
  }, []);

  const fetchCart = () => {
    getCart(setCart);
  };

  useEffect(() => {
    fetchCart();
    getContactDetails(setContact);
  }, []);

  function formatDate(date) {
    if (date) {
      const custome = new Date(date);
      const year = custome.getFullYear();
      const month = String(custome.getMonth() + 1).padStart(2, "0");
      const day = String(custome.getDate()).padStart(2, "0");
      return `${year}-${month}-${day}`;
    }
  }

  const [crossDates, setCrossDates] = useState();
  const [nextAvailableDate, setNextAvailable] = useState();

  function getBooked() {
    if (date1) {
      const year = parseInt(date1?.split("-")[0], 10);
      const month = parseInt(date1?.split("-")[1], 10);
      getCrossedSlot(setCrossDates, month, year);
    }
  }

  useEffect(() => {
    getBooked();
  }, [date1]);

  const findNextAvailableDate = (date) => {
    const nextDay = new Date(date);
    nextDay.setDate(nextDay.getDate() + 1);

    console.log(crossDates);
    const isDate = crossDates?.some(
      (i) => i.date?.slice(0, 10) === date && i.allBooked === "yes"
    );

    if (isDate) {
      findNextAvailableDate();
    }
    return nextDay.toISOString().split("T")[0];
  };

  useEffect(() => {
    if (crossDates && crossDates.length > 0) {
      const formattedSelectedDate = formatDate(new Date(date1));
      const isDateBooked = crossDates.some(
        (d) => formatDate(new Date(d.date)) === formattedSelectedDate
      );

      if (isDateBooked) {
        setNextAvailable(findNextAvailableDate(new Date(date1)));
      }
    }
  }, [crossDates, date1]);

  return (
    <>
      <div className="Backward_Heading step_Heading">
        <div>
          <img src="/Image/1.png" alt="" onClick={() => BackNavigation()} />
          <p style={{ width: "50%" }}>STEP 2 OF 3</p>
        </div>
        <p className="title">Select Time & Slot</p>
      </div>

      <div className="schedule_1">
        <div className="left_div">
          <SwipCal
            selectedDate={date1}
            setDate={setDate}
            slots={response}
            selectSlot={setTime}
            selectedSlot={time}
            nextDate={nextAvailableDate}
            crossDates={crossDates}
          />
        </div>

        <div className="right_div">
          <div className="Box">
            <ContactComponent />

            {/* Service */}
            {cart?.services?.map((i, index) => (
              <div className="Items" key={index}>
                <div className="two-div">
                  <p className="head"> {i?.serviceId?.name} </p>
                  <p className="head">
                    {" "}
                    $
                    {i?.serviceId?.discountActive === true
                      ? i?.serviceId?.discountPrice
                      : i?.serviceId?.price}{" "}
                  </p>
                </div>
              </div>
            ))}

            {/* Ad on Service */}
            {cart?.AddOnservicesSchema?.map((i, index) => (
              <div className="Items" key={index}>
                <div className="two-div">
                  <p className="head"> {i?.addOnservicesId?.name} </p>
                  <p className="head"> ${i.addOnservicesId?.price}</p>
                </div>
              </div>
            ))}
          </div>

          <button className="book" onClick={() => submitHandler()}>
            BOOK NOW
          </button>
        </div>
      </div>
    </>
  );
};

export default Schedule2;
