/** @format */

import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

const Appointment = () => {
  const navigate = useNavigate();

  function BackNavigation() {
    navigate(-1);
  }

  useEffect(() => {
    window.scrollTo(0, 0);
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
          <div className="Item cursor-pointer" onClick={() => navigate("/returningMember")}>
            <img src="/Image/2.png" alt="" />
            <p>
              Returning Client <br /> / Member{" "}
            </p>
          </div>
          <div className="Item cursor-pointer">
            <img src="/Image/3.png" alt="" />
            <Link to="/indiAppointment">
              <p>Individual Appointment </p>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Appointment;
