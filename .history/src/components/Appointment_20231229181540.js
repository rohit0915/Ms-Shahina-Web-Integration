/** @format */

import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Appointment = () => {
  const navigate = useNavigate();

  function BackNavigation() {
    navigate(-1);
  }
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "instant",
    });
  }, []);

  return (
    <>
      <div className="Backward_Heading">
        <img src="/Image/1.png" alt="" onClick={() => BackNavigation()} />
        <p>Please Select an Option Below</p>
      </div>

      <div className="Appointment_Selection">
        <p className="title">
          Choose one of the option from the options below :
        </p>

        <div className="boxes">
          <div
            className="Item cursor-pointer"
            onClick={() => navigate("/returningMember")}
          >
            <img src="/Image/2.png" alt="" />
            <p>
              Returning Client <br /> / Member{" "}
            </p>
          </div>
          <div
            className="Item cursor-pointer"
            onClick={() => navigate("/indiAppointment")}
          >
            <img src="/Image/3.png" alt="" />
            <p>Individual Appointment </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Appointment;
