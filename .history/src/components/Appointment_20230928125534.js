/** @format */

import React from "react";
import { useNavigate } from "react-router-dom";

const Appointment = () => {
    const navigate = useNavigate()

    function BackNavigation () {
        
    }

  return (
    <>
      <div className="Backward_Heading">
        <img src="/Image/1.png" alt=""  />
        <p>Please Select an Option Below</p>
      </div>

      <div className="Appointment_Selection">
        <p className="title">
          Choose one of the option from the options below :
        </p>

        <div className="boxes">
          <div className="Item">
            <img src="/Image/2.png" alt="" />
            <p>Returning Client / Member </p>
          </div>
          <div className="Item">
            <img src="/Image/3.png" alt="" />
            <p>Individual Appointment </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Appointment;
