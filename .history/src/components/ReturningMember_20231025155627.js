/** @format */

import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { userLogin } from "../../Repository/Api";
import { useDispatch } from "react-redux";

const ReturningMember = () => {
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const payload = { phone, password };

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(userLogin(payload, navigate));
  };

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  function BackNavigation() {
    navigate(-1);
  }
  return <div>ReturningMember</div>;
};

export default ReturningMember;
