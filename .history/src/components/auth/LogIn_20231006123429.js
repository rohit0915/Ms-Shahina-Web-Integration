/** @format */

import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const LogIn = () => {
  const [ phone , setPhone ] = useState("")
  const [ ] = useState("")



  const navigate = useNavigate();
  
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
        <div className="mt-4">
          <p>Phone No.</p>
          <input type="text" />
        </div>
        <div className="mt-4">
          <p>Password</p>
          <input type="password" />
        </div>
        <button className="verify">SIGN IN</button>

        <div className="password-for">
          <span>Forgot Password?</span>
          <Link to="/forget-password">CLICK HERE</Link>
        </div>

        <hr className=" bg-secondary my-3" />

        <div className="password-for">
          <span> Don’t Have an Account? </span>
          <Link to="/signup"> SIGN UP NOW</Link>
        </div>
      </div>
    </section>
  );
};

export default LogIn;