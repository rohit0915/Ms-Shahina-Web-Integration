/** @format */

import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AiFillInstagram } from "react-icons/ai";
import { BsFillTelephoneFill } from "react-icons/bs";
import { GrMail } from "react-icons/gr";
import { BiCurrentLocation } from "react-icons/bi";
import { useSelector } from "react-redux";
import { CartItems } from "../store/cartSlice";
import { getContactDetails } from "../Repository/Api";
import { AiFillStar } from "react-icons/ai";
import { Call, Mail } from "./Helping/Mail";

const CheckoutDetails = () => {
  const navigate = useNavigate();
  function BackNavigation() {
    navigate(-1);
  }

  const [contact, setContact] = useState({});
  const [cart, setCart] = useState({});

  const myCart = useSelector(CartItems);

  useEffect(() => {
    setCart(myCart);
  }, [myCart]);

  useEffect(() => {
    getContactDetails(setContact);
  }, []);

  const starArray = Array.from({ length: contact?.ratings });

  return (
    <>
      <div className="Backward_Heading step_Heading">
        <div>
          <img src="/Image/1.png" alt="" onClick={() => BackNavigation()} />
        </div>
        <p className="title">Review and confirm</p>
      </div>

      <div className="schedule_1">
        <div className="left_div">
          <div className="review_box">
            <p className="title">Payment method</p>
            <span>
              You won't be charged now , payment will be collected in store
              after your appointment
            </span>

            <form>
              <div>
                <p>Name on card</p>
                <input type="text" placeholder="Add Card Holder full name" />
              </div>

              <div>
                <p>Card Number</p>
                <input type="text" placeholder="Credit or debit card number" />
              </div>

              <div className="two_input">
                <div className="first">
                  <p>Expiry Date</p>
                  <input type="text" placeholder="MM/YY" />
                </div>
                <div>
                  <p>Security code</p>
                  <input type="text" placeholder="123" />
                </div>
              </div>

              <div className="payment_div">
                <p>Pay Securely with</p>
                <img src="/Image/9.png" alt="" />
                <img src="/Image/10.png" alt="" />
                <img src="/Image/11.png" alt="" />
                <img src="/Image/12.png" alt="" />
                <img src="/Image/13.png" alt="" />
              </div>

              {/* <div className="border-line" /> */}

              <div className="content">
                <p>Cancellation policy</p>
                <p className="desc">
                  Cancel for free up to <strong>48 hours</strong> ahead ,
                  otherwise you will be charged <strong>50%</strong> of the
                  service price for late cancellation or <strong>100%</strong>{" "}
                  for not showing up
                </p>
              </div>

              <div className="content">
                <p>Important info</p>
                <p className="desc">
                  Please understand that when you forget or cancel your
                  appointment without giving enough <br />
                  notice , I miss the oppurtunity to fill that appointment time
                  , and clients on my waiting list miss <br />
                  the oppurtunity to recieve services.
                </p>
              </div>

              {/* <div>
                <textarea placeholder="Write your Notes here..............r" />
              </div> */}

              {/* <div className="border-line" />
              <div className="submit_btn">
                <div style={{ marginTop: "0" }}>
                  <p>TOTAL PRICE</p>
                  <span>
                    <span className="total"> $499</span>
                    <span>1 SERVICE SELECTED</span>
                  </span>
                </div>

                <button onClick={() => navigate("/thanks")}>
                  PROCEED TO PAY
                </button>
              </div> */}
            </form>
          </div>
        </div>

        <div className="right_div">
          <div className="Box">
            <div className="two-sec">
              <img src={contact?.image} alt="" />
              <div>
                <p className="title"> {contact?.name} </p>
                <span className="Stars">
                  {starArray.map((_, index) => (
                    <div className="Rat" key={`star ${index}`}>
                      <AiFillStar
                        className="fill_star"
                        style={{ color: "#ff9529", fontSize: "20px" }}
                      />
                    </div>
                  ))}
                  <span> ({contact?.numOfReviews}) </span>
                </span>
                <div
                  className="contact-info cursor-pointer"
                  onClick={() => Call(contact?.phone)}
                >
                  <BsFillTelephoneFill />
                  <p> {contact?.phone} </p>
                </div>
                <div
                  className="contact-info cursor-pointer"
                  onClick={() => Mail(contact?.email)}
                >
                  <GrMail />
                  <p> {contact?.email} </p>
                </div>
                <div className="contact-info">
                  <AiFillInstagram />

                  <a href={contact?.instagram}>
                    <p>nurse.shahina </p>
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

            {/* Service */}
            {cart?.services?.map((i, index) => (
              <div className="Items" key={index}>
                <div className="two-div">
                  <p className="head"> {i?.serviceId?.name} </p>
                  <p className="head">
                    {" "}
                    {i?.serviceId?.type === "offer"
                      ? `$${i.total}`
                      : `$${i.subTotal}`}
                  </p>
                </div>
                <div className="two-div">
                  <p className="desc">
                    {" "}
                    Total Time : ( {i?.serviceId?.totalTime})
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
                <div className="two-div">
                  <p className="desc">
                    {" "}
                    Total Time : ( {i?.addOnservicesId?.totalTime})
                  </p>
                </div>
              </div>
            ))}

            {cart?.total && (
              <div className="Items">
                <div className="two-div">
                  <p className="head">Total</p>
                  <p className="head">${cart?.total}</p>
                </div>
              </div>
            )}

            <div className="Items">
              <div className="two-div">
                <p className="head">Appointment</p>
              </div>
            </div>

            <button className="confirm_btn">Confirm</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CheckoutDetails;
