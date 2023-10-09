/** @format */

import React from "react";
import { Link } from "react-router-dom";

const Thanks = () => {


  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="Thanks_Container">
      <p className="title">Thank You!</p>
      <p className="desc">
        Thank you for Purchasing your Products from Us! We are looking forward
        to <br />
        provide you the best Experience
      </p>
      <img src={'/Image/48a293976e2c10478e2eebf754ee8d25 1'} alt="" />
      <Link to="/" style={{ cursor: "pointer" }}>
        <button>RETURN TO HOMEPAGE</button>
      </Link>
    </div>
  );
};

export default Thanks;
