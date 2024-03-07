/** @format */

import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { userLogin2 } from "../Repository/Api";
import { useDispatch, useSelector } from "react-redux";
import { FaEye } from "react-icons/fa6";
import { PiEyeClosedBold } from "react-icons/pi";
import PhoneInput from "react-phone-input-2";
import { isAuthenticated } from "../store/authSlice";

const ReturningMember = () => {
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [show, setShow] = useState(false);
  const isLoggedIn = useSelector(isAuthenticated);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const payload = { phone, password };

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(userLogin2(payload, navigate));
  };

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "instant",
    });
  }, []);

  useEffect(() => {
    if (isLoggedIn) {
      navigate("/schedule1");
    }
  }, [isLoggedIn]);

  function BackNavigation() {
    navigate(-1);
  }
  return (
    <section>
      <div className="Backward_Heading step_Heading">
        <div>
          <img src="/Image/1.png" alt="" onClick={() => BackNavigation()} />
        </div>
        <p className="title">Login</p>
      </div>

      <div className="forget-password">
        <form onSubmit={submitHandler}>
          <div className="mt-4">
            <p>Phone No.</p>
          </div>
          <div
            className="Indivisual-Appointment"
            style={{ maxWidth: "100%", margin: "0", padding: 0 }}
          >
            <PhoneInput country={"us"} onChange={setPhone} />
          </div>
          <div className="mt-4">
            <p>Password</p>
            <div className="input-div">
              <input
                type={show ? "text" : "password"}
                required
                onChange={(e) => setPassword(e.target.value)}
              />
              {show ? (
                <FaEye onClick={() => setShow(false)} />
              ) : (
                <PiEyeClosedBold onClick={() => setShow(true)} />
              )}
            </div>
          </div>
          <button className="verify" type="submit">
            SIGN IN
          </button>

          <div className="password-for">
            <span>Forgot Password?</span>
            <Link to="/forget-password">CLICK HERE</Link>
          </div>

          <hr className=" bg-secondary my-3" />

          <div className="password-for">
            <span> Don’t Have an Account? </span>
            <Link to="/signup"> SIGN UP NOW</Link>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ReturningMember;
