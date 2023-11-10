/** @format */

import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { verifySubscription } from "../Repository/Api";

const VerifySubScription = () => {
  const { id } = useParams();
  const [response, setResponse] = useState(false);

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    verifySubscription(id, setResponse);
  }, [id]);

  return response === false ? (
    <div className="Thanks_Container">
      <p className="desc">
        Our system is diligently checking the details to confirm your
        subscription. <br /> This process may take a few seconds, but rest
        assured, we appreciate your patience.
      </p>
      <img src={"/Image/12.gif"} alt="" />
    </div>
  ) : (
    <div className="Thanks_Container">
      <p className="title">Thank You!</p>
      <p className="desc">
        Thank you for Purchasing your MemberShip from Us! We are looking forward
        to <br />
        provide you the best Experience
      </p>
      <p className="desc">
        Congratulations! Your subscription has been successfully verified. You
        can now enjoy uninterrupted access to our premium content. Thank you for
        choosing us, and we look forward to providing you with an exceptional
        experience.
      </p>
      <img src={"/Image/12.gif"} alt="" />
      <Link to="/" style={{ cursor: "pointer" }}>
        <button>RETURN TO HOMEPAGE</button>
      </Link>
    </div>
  );
};

export default VerifySubScription;
