/** @format */

import React from "react";

const GuestFailed = () => {
  return (
    <div className="Thanks_Container">
      <p className="title">Failed !</p>
      <p className="desc">Order Failed due to Technical issue</p>
      <Link to="/" style={{ cursor: "pointer" }}>
        <button>RETURN TO HOMEPAGE</button>
      </Link>
    </div>
  );
};

export default GuestFailed;
