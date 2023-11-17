/** @format */

import React from "react";
import Loader from "../Loader/Loader";

const WithLoader = ({Wrapped , loading}) => {
  return loading ? <Loader /> : ;
};

export default WithLoader;
