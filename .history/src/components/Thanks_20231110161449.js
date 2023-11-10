/** @format */

import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { orderSuccess } from "../Repository/Api";

const Thanks = () => {
  const { id } = useParams();
  const [response, setResponse] = useState(false);

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    orderSuccess(id, setResponse);
  }, [id]);

  return response === false ? (
    <div className="Thanks_Container">
      <p className="desc">
        Our system is diligently checking the details to confirm your
        order. <br /> This process may take a few seconds, but rest
        assured, we appreciate your patience.
      </p>
      <img src={"/Image/12.gif"} alt="" />
    </div>
  ) : (
    <div className="Thanks_Container">
      <p className="title">Thank You!</p>

      <p className="desc">
        Congratulations! Your subscription has been successfully verified.{" "}
        <br /> We are looking forward to provide you the best Experience
      </p>
      <img src={"/Image/12.gif"} alt="" />
      <Link to="/" style={{ cursor: "pointer" }}>
        <button>RETURN TO HOMEPAGE</button>
      </Link>
    </div>
  );
};

export default Thanks;
