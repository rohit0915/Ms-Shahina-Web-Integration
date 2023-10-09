/** @format */

import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AiFillStar, AiFillInstagram, AiFillClockCircle } from "react-icons/ai";
import { BsFillTelephoneFill } from "react-icons/bs";
import { GrMail } from "react-icons/gr";
import { BiCurrentLocation } from "react-icons/bi";
import Calendar from "react-calendar";
import { getCart  ,getContactDetails} from "../../Repository/Api";

const Schedule2 = () => {
  const navigate = useNavigate();
  const [cart, setCart] = useState({});
  const [contact, setContact] = useState({});

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
    getContactDetails(setContact)
  }, []);
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
              <input type="radio" name="slot" style={{ marginTop: "5px" }} />

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
    
      </div>
    </>
  );
};

export default Schedule2;
