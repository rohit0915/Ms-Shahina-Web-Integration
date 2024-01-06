/** @format */

import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AiFillStar, AiFillInstagram } from "react-icons/ai";
import { BsFillTelephoneFill } from "react-icons/bs";
import { GrMail } from "react-icons/gr";
import { BiCurrentLocation } from "react-icons/bi";
import Calendar from "react-calendar";
import {
  getAllSlot,
  getCart,
  getContactDetails,
  getCrossedSlot,
  TimeandSlot,
} from "../../Repository/Api";
import { Store } from "react-notifications-component";
import { Call, Mail } from "../Helping/Mail";
import SwipCal from "../SwipCal";

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
      Store.addNotification({
        title: "",
        message: "Select Date and Time",
        type: "danger",
        insert: "top",
        container: "top-center",
        animationIn: ["animate__animated", "animate__fadeIn"],
        animationOut: ["animate__animated", "animate__fadeOut"],
        dismiss: {
          duration: 2000,
          onScreen: true,
        },
      });
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

  // console.log(date1);

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
            setSlotTime={setTime}
            selectedSlot={time}
          />

          <Calendar
            onChange={(selectedDate) => setDate(formatDate(selectedDate))}
            tileContent={({ date, view }) => {
              if (view === "month") {
                const formattedDate = formatDate(date);
                const bookedDateInfo = crossDates?.find(
                  (d) => formatDate(new Date(d.date)) === formattedDate
                );

                const isBookedDate = bookedDateInfo?.allBooked === "yes";

                return isBookedDate ? (
                  <div
                    style={{
                      position: "relative",
                      height: "100%",
                      width: "100%",
                    }}
                  >
                    <div
                      style={{
                        position: "relative",
                        height: "100%",
                        width: "100%",
                      }}
                    >
                      <div className="slot_cancle" />
                    </div>
                  </div>
                ) : null;
              }

              return null;
            }}
          />

          <p className="title">Select Slot</p>

          <div className="Box" style={{ alignItems: "center" }}>
            {response?.length > 0 ? (
              response?.map((i, index) =>
                i.isBooked === false ? (
                  <div className="Item" key={index}>
                    <input
                      type="radio"
                      name="slot"
                      value={i.from}
                      onClick={(e) => setTime(e.target.value)}
                      style={{ marginTop: "5px" }}
                    />

                    <div className="description-box" style={{ width: "100%" }}>
                      <p className="title">
                        {" "}
                        {i?.from?.split("T")[1].split(".")[0].slice(0, 5) +
                          i.fromAmPm}{" "}
                        -{" "}
                        {i?.to?.split("T")[1].split(".")[0].slice(0, 5) +
                          i.toAmPm}
                      </p>
                    </div>
                  </div>
                ) : (
                  <></>
                )
              )
            ) : (
              <>
                <h5>We're fully booked</h5>
                <p>but you can book for {nextAvailableDate} </p>
              </>
            )}
          </div>
        </div>
        <div className="right_div">
          <div className="Box">
            <div className="two-sec">
              <img src={contact?.image} alt="" />
              <div>
                <p className="title"> {contact?.name} </p>
                <span className="Stars">
                  <span>
                    {" "}
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                  </span>
                  <span> ({contact?.ratings}) </span>
                </span>
                <div
                  className="contact-info cursor-pointer"
                  onClick={() => Call(contact?.phone)}
                >
                  <BsFillTelephoneFill />
                  <p> {contact?.phone} </p>
                </div>
                <div className="contact-info cursor-pointer ">
                  <GrMail />
                  <p onClick={() => Mail(contact?.email)}> {contact?.email} </p>
                </div>
                <div className="contact-info">
                  <a href={contact?.instagram}>
                    <AiFillInstagram />
                  </a>
                  <a href={contact?.instagram}>
                    <p> @nurse.shahina </p>
                  </a>
                </div>
              </div>
            </div>
            <div className="two-sec mt-3">
              <BiCurrentLocation style={{ fontSize: "20px" }} />
              <div>
                <p className="title" style={{ fontSize: "16px" }}>
                  {contact?.address}
                </p>
              </div>
            </div>

            <a href={contact?.mapLink} target="_blank">
              <button className="locate_btn">LOCATE ON GOOGLE MAPS</button>
            </a>

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
