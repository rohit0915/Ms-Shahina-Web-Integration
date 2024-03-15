/** @format */

import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { verifySubscription } from "../Repository/Api";

const VerifySubScription = () => {
  const { id } = useParams();
  const [response, setResponse] = useState(false);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "instant",
    });
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
    </div>
  ) : (
    <div className="Thanks_Container">
      <p className="title">Congratulations🎉</p>
      <p className="desc">
        Thanks for becoming a member. <br /> We are looking forward to provide
        you the best Experience!
      </p>
      <Link to="/" style={{ cursor: "pointer", marginTop: "20px" }}>
        <button>RETURN TO HOMEPAGE</button>
      </Link>
    </div>
  );
};

export default VerifySubScription;
