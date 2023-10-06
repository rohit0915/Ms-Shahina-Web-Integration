/** @format */

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { userRegistration } from "../Repository/Api";

const Signup = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [countryCode, setCounrtyCode] = useState("");
  const [phone, setPhone] = useState("");
  const [gender, setGender] = useState("");
  const [password, setPassword] = useState("");
  const [dob, setDob] = useState("");
  const [ checked , setChecked ] = useState(false)

  const navigate = useNavigate();

  const payload = {
    firstName,
    lastName,
    email,
    countryCode,
    phone,
    gender,
    password,
    dob,
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    userRegistration(payload ,navigate);
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
        <p className="title">You are One Step away to Become our VIP Member!</p>

        <form onSubmit={submitHandler}>
          <div>
            <p>First Name</p>
            <input
              type="text"
              placeholder="Enter Your First Name"
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>

          <div>
            <p>Last Name</p>
            <input
              type="text"
              placeholder="Enter Your Last Name"
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>

          <div>
            <p>Email</p>
            <input
              type="email"
              name="email"
              placeholder="Enter your Email ID"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div>
            <p>Contact Number</p>
            <input
              type="tel"
              pattern="[0-9]{10}"
              name="phone"
              placeholder="Enter your 10-Digit Phone Number"
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>

          <div>
            <p>Date Of Birth</p>
            <input type="date" onChange={(e) => setDob(e.target.value)} />
          </div>

          <div>
            <p> New Password</p>
            <input
              type="password"
              placeholder="Enter Your New Password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div>
            <p>Select your Gender</p>
            <div className="gender_selection">
              <img
                src="/Image/4.png"
                alt=""
                onClick={() => setGender("Male")}
              />
              <img
                src="/Image/5.png"
                alt=""
                onClick={() => setFirstName("Female")}
              />
              <img
                src="/Image/6.png"
                alt=""
                onClick={() => setFirstName("Other")}
              />
            </div>
          </div>

          <div>
            <img src="/Image/7.png" alt="" className="Full_Image" />
          </div>

          <div className="check" style={{ marginTop: "40px" }}>
            <input type="checkbox" required  />
            <div>
              <p className="title">I Agree to the ‘Terms & Conditions’</p>
            </div>
          </div>

          <button type="submit"  >REGISTER ACCOUNT</button>
        </form>
      </div>
    </>
  );
};

export default Signup;
