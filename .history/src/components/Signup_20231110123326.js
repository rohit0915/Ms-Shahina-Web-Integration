/** @format */

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { userRegistration } from "../Repository/Api";
import PhoneInput from "react-phone-input-2";
import { FaEye } from "react-icons/fa6";
import { PiEyeClosedBold } from "react-icons/pi";

const Signup = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [gender, setGender] = useState("");
  const [password, setPassword] = useState("");
  const [dob, setDob] = useState("");
  const [show, setShow] = useState(false);

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
        <p>Sign-Up</p>
      </div>

      <div className="Indivisual-Appointment">
        <p className="title">
          <img src="/Image/99.png" alt="" />
          <span>You are One Step away to Become our VIP Member!</span>
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
              type="date"
              name="dob"
              onChange={(e) => setDob(e.target.value)}
              required
            />
          </div>

          <div>
            <p> New Password</p>
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
            <p>Select your Gender</p>
            <div className="gender_selection">
              <button type="button" className={gender === "Male" && "activer"} >
                <div>
                  <img
                    src="/Image/male.png"
                    alt=""
                    className="active"
                    onClick={() => setGender("Male")}
                  />
                </div>
                <p>Male</p>
              </button>
              <button type="button">
                <div>
                  <img
                    src="/Image/female.png"
                    alt=""
                    onClick={() => setGender("Female")}
                  />
                </div>
                <p>Female</p>
              </button>
              <button type="button">
                <div>
                  <img
                    src="/Image/other.png"
                    alt=""
                    onClick={() => setGender("Other")}
                  />
                </div>
                <p>Other</p>
              </button>
            </div>
          </div>

          <div>
            <img src="/Image/7.png" alt="" className="Full_Image" />
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

export default Signup;
