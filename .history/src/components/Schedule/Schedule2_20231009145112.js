/** @format */

import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AiFillStar, AiFillInstagram, AiFillClockCircle } from "react-icons/ai";
import { BsFillTelephoneFill } from "react-icons/bs";
import { GrMail } from "react-icons/gr";
import { BiCurrentLocation } from "react-icons/bi";
import Calendar from "react-calendar";
import { getCart, getContactDetails, TimeandSlot } from "../../Repository/Api";

const Schedule2 = () => {
  const navigate = useNavigate();
  const [cart, setCart] = useState({});
  const [contact, setContact] = useState({});
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  const payload = { date, time };

  const submitHandler = () => {
    TimeandSlot(payload);
  };

  function BackNavigation() {
    navigate(-1);
  }

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const fetchCart = () => {
    getCart(setCart);
  };

  useEffect(() => {
    fetchCart();
    getContactDetails(setContact);
  }, []);

  useEffect(() => {
    if (time && date) {
      submitHandler();
    }
  }, [time, date]);

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
          <Calendar />

          <p className="title">Select Slot</p>

          <div className="Box" style={{ alignItems: "center" }}>
            <div className="Item">
              <input
                type="radio"
                name="slot"
                value={"10:00 AM"}
                onClick={() => setTime(e.target.value)}
                style={{ marginTop: "5px" }}
              />

              <div className="description-box" style={{ width: "100%" }}>
                <p className="title">10:00 AM</p>
              </div>
            </div>
            <div className="Item">
              <input type="radio" name="slot" style={{ marginTop: "5px" }} />

              <div className="description-box" style={{ width: "100%" }}>
                <p className="title">1:25 PM</p>
              </div>
            </div>
            <div className="Item">
              <input type="radio" name="slot" style={{ marginTop: "5px" }} />

              <div className="description-box" style={{ width: "100%" }}>
                <p className="title">6:00 PM</p>
              </div>
            </div>
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
                <div className="contact-info">
                  <BsFillTelephoneFill />
                  <p> {contact?.phone} </p>
                </div>
                <div className="contact-info">
                  <GrMail />
                  <p> {contact?.email} </p>
                </div>
                <div className="contact-info">
                  <AiFillInstagram />
                  <p> {contact?.instagram} </p>
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

            <button className="locate_btn">LOCATE ON GOOGLE MAPS</button>

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

          <button className="book" onClick={() => navigate("/schedule2")}>
            BOOK NOW
          </button>
        </div>
      </div>
    </>
  );
};

export default Schedule2;
