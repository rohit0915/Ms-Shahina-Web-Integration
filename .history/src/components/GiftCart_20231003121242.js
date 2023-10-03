/** @format */

import React from "react";
import { useNavigate } from "react-router-dom";

const GiftCart = () => {
  const navigate = useNavigate();

  function BackNavigation() {
    navigate(-1);
  }

  return (
    <>
      <div className="Backward_Heading step_Heading">
        <div>
          <img src="/Image/1.png" alt="" onClick={() => BackNavigation()} />
          <p style={{ width: "50%" }}>STEP 2 OF 3</p>        </div>
        <p className="title">Select Time & Slot</p>
      </div>
    </>
  );
};

export default GiftCart;
