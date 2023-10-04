/** @format */

import React from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  Header,
  PrimaryButton,
  ValidInput,
} from "../../utils/helpingComponent";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { Login } from "../../store/userSlice";

const LogIn = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { register, getValues } = useForm({
    mode: "all",
  });
  const handleSubmit = () => {
    const data = getValues();
    dispatch(Login(data));

    navigate("/");
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
        <div className="mt-4">
          <p>Phone No.</p>
          <input type="text" />
        </div>
        <div className="mt-4">
          <p>Password</p>
          <input type="password" />
        </div>
        <Link to="/changePassword">
          <button className="verify">SIGN IN</button>
        </Link>

        

        <div className="text-2xl ">
          <span className="text-white mr-1 font-bold">Forgot Password?</span>
          <Link
            className="font-bold underline underline-offset-2"
            to="/forget-password"
          >
            CLICK HERE
          </Link>
        </div>
        <hr className=" bg-secondary w-1/2 my-9" />
        <div className="text-2xl">
          <span className="text-white mr-1 font-base">
            Don’t Have an Account?{" "}
          </span>
          <Link className="font-bold underline underline-offset-2" to="/signup">
            SIGN UP NOW
          </Link>
        </div>
      </div>
    </section>
  );
};

export default LogIn;
