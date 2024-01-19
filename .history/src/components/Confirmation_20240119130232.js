/** @format */

import React, { useEffect } from "react";

const Confirmation = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "instant",
    });
  }, []);

  return <div>Confirmation</div>;
};

export default Confirmation;
