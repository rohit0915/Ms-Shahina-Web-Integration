/** @format */

import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

const PasswordChanged = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "instant",
    });
  }, []);
  return (
    <div className="forget-password">
      <p className="title">Your Password has been Changed Succesfully!</p>
      <Link to="/" style={{ cursor: "pointer" }}>
        <button style={{ display: "block", marign: "auto" }}>
          Return to Login
        </button>
      </Link>
    </div>
  );
};

export default PasswordChanged;