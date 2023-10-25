/** @format */

import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { userLogin2 } from "../Repository/Api";
import { useDispatch } from "react-redux";

const ReturningMember = () => {
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const payload = { phone, password };

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(userLogin2(payload, navigate));
  };

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
            <input
              type="tel"
              onChange={(e) => setPhone(e.target.value)}
              minLength={8}
              maxLength={12}
              required
            />
          </div>
          <div className="mt-4">
            <p>Password</p>
            <input
              type="password"
              required
              onChange={(e) => setPassword(e.target.value)}
            />
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
