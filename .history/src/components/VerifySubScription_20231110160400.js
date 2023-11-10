/** @format */

import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import {  verifySubscription } from "../Repository/Api";

const VerifySubScription = () => {
  const { id } = useParams();
  const [ response , setResponse ] = useState(false)

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    verifySubscription(id);
  }, [id]);

  return (
    <div className="Thanks_Container">
      <p className="title">Thank You!</p>
      <p className="desc">
        Thank you for Purchasing your MemberShip from Us! We are looking forward
        to <br />
        provide you the best Experience
      </p>
      <img src={"/Image/12.gif"} alt="" />
      <Link to="/" style={{ cursor: "pointer" }}>
        <button>RETURN TO HOMEPAGE</button>
      </Link>
    </div>
  );
};

export default VerifySubScription;
