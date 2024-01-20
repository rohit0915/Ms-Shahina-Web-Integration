/** @format */

import React, { useEffect } from "react";

const Confirmation = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "instant",
    });
  }, []);

  return (
    <div className="Thanks_Container">
      <p className="title">Card Saved Successfully!</p>
      <p className="desc">
        Thank you for saving your card. Your payment information has been
        securely stored.
      </p>
      <Link to="/mycart" style={{ cursor: "pointer" }}>
        <button>RETURN TO HOMEPAGE</button>
      </Link>
    </div>
  );
};

export default Confirmation;