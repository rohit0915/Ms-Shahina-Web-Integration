/** @format */

import React from "react";

const NoData = ({ message }) => {
  return (
    <div className="Not-Found">
      <img src="/Image/no-results.png" alt="" />
      <h5> {message} </h5>
    </div>
  );
};

export default NoData;
