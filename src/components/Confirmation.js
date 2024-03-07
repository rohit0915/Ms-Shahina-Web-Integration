/** @format */

import React, { useEffect } from "react";
import { Link } from "react-router-dom";

const Confirmation = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "instant",
    });
  }, []);

  return (
    <div className="Thanks_Container">
      <p className="title">You Are All Set.</p>
      <p className="desc">
        Thank you for confirming your appointment. We look forward to seeing you
        soon!
      </p>
      <Link to="/" style={{ cursor: "pointer" }}>
        <button>RETURN TO HOMEPAGE</button>
      </Link>
    </div>
  );
};

export default Confirmation;
