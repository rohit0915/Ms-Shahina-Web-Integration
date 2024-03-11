/** @format */

import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getTerms, showMsg, userRegistration } from "../Repository/Api";
import PhoneInput from "react-phone-input-2";
import { FaEye } from "react-icons/fa6";
import { PiEyeClosedBold } from "react-icons/pi";

const IndivisualAppointment = () => {
  const [show, setShow] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [gender, setGender] = useState("");
  const [password, setPassword] = useState("");
  const [dob, setDob] = useState("");
  const [show2, setShow2] = useState(false);
  const [response, setResponse] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    getTerms(setResponse);
  }, []);

  const payload = {
    firstName,
    lastName,
    email,
    phone,
    gender,
    password,
    dob,
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      showMsg(
        "",
        "Passwords do not match. Please make sure your password and confirm password entries are identical.",
        "info"
      );
    } else {
      userRegistration(payload, navigate);
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
  return (
    <>
      <div className="Backward_Heading">
        <img src="/Image/1.png" alt="" onClick={() => BackNavigation()} />
        <p>Individual Appointment</p>
      </div>

      <div className="Indivisual-Appointment">
        <p className="title">
          Please enter your Details to continue with Individual Appointment{" "}
        </p>

        <form onSubmit={submitHandler}>
          <div>
            <p className="required">First Name</p>
            <input
              type="text"
              placeholder="Enter Your First Name"
              required
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>

          <div>
            <p className="required">Last Name</p>
            <input
              type="text"
              placeholder="Enter Your Last Name"
              required
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>

          <div>
            <p className="required">Email</p>
            <input
              type="email"
              name="email"
              placeholder="Enter your Email ID"
              required
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div>
            <p className="required">Contact Number</p>
            <PhoneInput country={"us"} onChange={setPhone} />
          </div>

          <div>
            <p>Date Of Birth</p>
            <input
              type="text"
              pattern="[0-9]{2}/[0-9]{2}/[0-9]{4}"
              value={dob}
              placeholder="MM/DD/YYYY (optional)"
              onChange={(e) => setDob(e.target.value)}
            />
          </div>

          <div>
            <p className="required"> New Password</p>
            <div className="input-div">
              <input
                type={show ? "text" : "password"}
                required
                placeholder="Enter Your New Password"
                name="password"
                onChange={(e) => setPassword(e.target.value)}
              />
              {show ? (
                <FaEye onClick={() => setShow(false)} />
              ) : (
                <PiEyeClosedBold onClick={() => setShow(true)} />
              )}
            </div>
          </div>
          <div>
            <p className="required"> Confirm Password</p>
            <div className="input-div">
              <input
                type={show2 ? "text" : "password"}
                required
                placeholder=""
                name="password"
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
              {show2 ? (
                <FaEye onClick={() => setShow2(false)} />
              ) : (
                <PiEyeClosedBold onClick={() => setShow2(true)} />
              )}
            </div>
          </div>

          <div>
            <p>Select your Gender</p>
            <div className="gender_selection" style={{ marginTop: "0" }}>
              <button
                type="button"
                className={gender === "Male" ? "active" : ""}
                onClick={() => setGender("Male")}
              >
                <div>
                  <img src="/Image/male.png" alt="" className="active" />
                </div>
                <p>Male</p>
              </button>
              <button
                type="button"
                className={gender === "Female" ? "active" : ""}
                onClick={() => setGender("Female")}
              >
                <div>
                  <img src="/Image/female.png" alt="" />
                </div>
                <p>Female</p>
              </button>
              <button
                type="button"
                className={gender === "Other" ? "active" : ""}
                onClick={() => setGender("Other")}
              >
                <div>
                  <img src="/Image/other.png" alt="" />
                </div>
                <p>Other</p>
              </button>
            </div>
          </div>

          <div style={{ marginTop: "60px" }}>
            {" "}
            <a
              href={response?.[0]?.pdf}
              target="_blank"
              style={{
                textDecoration: "underline",
                fontSize: "18px",
                color: "#e5d896",
              }}
            >
              {`  View Terms and Conditions`}
            </a>
          </div>
          <div className="check" style={{ marginTop: "40px" }}>
            <input type="checkbox" required />
            <div>
              <span className="title">
                <span> I Agree to the Terms & Conditions</span>
              </span>
            </div>
          </div>

          <button type="submit">CONTINUE</button>
        </form>
      </div>
    </>
  );
};

export default IndivisualAppointment;
