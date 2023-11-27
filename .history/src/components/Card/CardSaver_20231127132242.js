/** @format */

import React, { useState , useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AiFillInstagram } from "react-icons/ai";
import { BsFillTelephoneFill } from "react-icons/bs";
import { GrMail } from "react-icons/gr";
import { getContactDetails } from "../../Repository/Api";

const CardSaver = () => {
  const navigate = useNavigate();
  const [contact, setContact] = useState({});

  function BackNavigation() {
    navigate(-1);
  }

  useEffect(() => {
    getContactDetails(setContact);
  }, []);

  return (
    <>
      <div className="Backward_Heading step_Heading">
        <div>
          <img src="/Image/1.png" alt="" onClick={() => BackNavigation()} />
        </div>
        <p className="title">Enter your Card Details</p>
      </div>

      <div className="schedule_1">
        <div className="left_div">
          <div className="review_box">
            <p className="title">Please Fill your Card Details Below</p>

            <form>
              <div>
                <p>Name on Card</p>
                <input type="text" />
              </div>

              <div>
                <p>Card Number</p>
                <input type="text" />
              </div>

              <div className="two_input">
                <div className="first">
                  <p>Expiry Date</p>
                  <input type="text" placeholder="MM / YYYY" />
                </div>
                <div>
                  <p>CVV</p>
                  <input type="text" placeholder="***" />
                </div>
              </div>

              <div>
                <p>Address Line 1</p>
                <input type="text" />
              </div>
              <div>
                <p>Address Line 2</p>
                <input type="text" />
              </div>

              <div className="two_input">
                <div className="first">
                  <p>City</p>
                  <input type="text" />
                </div>
                <div>
                  <p>State</p>
                  <input type="text" />
                </div>
              </div>
              <div>
                <p>Country</p>
                <input type="text" />
              </div>
              <div>
                <p>Phone Number</p>
                <input type="text" />
              </div>
              <div className="border-line" />
              <div className="submit_btn">
                <button
                  type="button"
                  style={{
                    background: "transparent",
                    border: "2px solid #042b26",
                    color: "#042b26",
                  }}
                  onClick={() => navigate(-1)}
                >
                  Back
                </button>
                <button onClick={() => navigate("/thanks")}>Save</button>
              </div>
            </form>
          </div>
        </div>

        <div className="right_div">
          <div className="Box">
           

           
           
          </div>
        </div>
      </div>
    </>
  );
};

export default CardSaver;
