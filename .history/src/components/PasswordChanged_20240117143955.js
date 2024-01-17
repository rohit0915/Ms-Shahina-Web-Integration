/** @format */

import React, { useEffect } from "react";
import { Link } from "react-router-dom";

const PasswordChanged = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "instant",
    });
  }, []);

  const btnStyle = {
    display: "block",
    margin: "auto",
    marginTop: "20px",
  };
  return (
    <div className="forget-password">
      <p className="title">Your Password has been Changed Succesfully!</p>
      <Link to="/" style={{ cursor: "pointer" }}>
        <button style={btnStyle}>Return to Login</button>
      </Link>
    </div>
  );
};

export default PasswordChanged;
