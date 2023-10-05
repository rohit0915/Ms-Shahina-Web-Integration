/** @format */

import React, { useEffect, useState } from "react";
import { getLimitedOffer } from "../../Repository/Api";

const OfferBanner = ({ setBanner }) => {
  const [response, setResponse] = useState([]);

  function fetchHandler() {
    getLimitedOffer(setResponse, "Promotion");
  }

  useEffect(() => {
    fetchHandler();
  }, []);

  return 
  (
    
  )
};

export default OfferBanner;
