/** @format */

import React from "react";

const GuestThanks = () => {
  return (
    <div className="Thanks_Container">
      <p className="title">Thank You!</p>

      <p className="desc">
        Congratulations! Your order has been successfully verified. <br /> We
        are looking forward to provide you the best Experience
      </p>
      <img src={"/Image/12.gif"} alt="" />
      <Link to="/" style={{ cursor: "pointer" }}>
        <button>RETURN TO HOMEPAGE</button>
      </Link>
    </div>
  );
};

export default GuestThanks;
