/** @format */

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { userRegistration } from "../Repository/Api";
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

  const navigate = useNavigate();

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
    userRegistration(payload, navigate);
  };

  function BackNavigation() {
    navigate(-1);
  }

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div className="Backward_Heading">
        <img src="/Image/1.png" alt="" onClick={() => BackNavigation()} />
        <p>Individual Appointment</p>
      </div>

      <div className="Indivisual-Appointment">
        <p className="title">
          Enter your Details to continue with Individual Appointment{" "}
        </p>

        <form onSubmit={submitHandler}>
          <div>
            <p>First Name</p>
            <input
              type="text"
              placeholder="Enter Your First Name"
              required
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>

          <div>
            <p>Last Name</p>
            <input
              type="text"
              placeholder="Enter Your Last Name"
              required
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>

          <div>
            <p>Email</p>
            <input
              type="email"
              name="email"
              placeholder="Enter your Email ID"
              required
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div>
            <p>Contact Number</p>
            <PhoneInput country={"us"} onChange={setPhone} />
          </div>

          <div>
            <p>Date Of Birth</p>
            <input
              type="text"
              name="dob"
              placeholder="MM/DD/YYYY"
              onChange={(e) => setDob(e.target.value)}
              required
            />
          </div>

          <div className="check">
            <input type="checkbox" onClick={() => setShow(!show)} />
            <div>
              <p className="title">Create Profile</p>
              <p className="desc">Mark the Checkbox to Create new Profile </p>
            </div>
          </div>

          {show && (
            <div>
              <p> New Password</p>
              <div className="input-div">
                <input
                  type={show2 ? "text" : "password"}
                  required
                  placeholder="Enter Your New Password"
                  name="password"
                  onChange={(e) => setPassword(e.target.value)}
                />
                {show2 ? (
                  <FaEye onClick={() => setShow2(false)} />
                ) : (
                  <PiEyeClosedBold onClick={() => setShow2(true)} />
                )}
              </div>
            </div>
          )}

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

          <div className="check" style={{ marginTop: "40px" }}>
            <input type="checkbox" required />
            <div>
              <p className="title">I Agree to the ‘Terms & Conditions’</p>
            </div>
          </div>

          <button type="submit">REGISTER ACCOUNT</button>
        </form>
      </div>
    </>
  );
};

export default IndivisualAppointment;
