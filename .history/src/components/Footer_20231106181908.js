/** @format */

import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { footerLinks, paymentCards } from "../constants/constant";
import { getContactDetails } from "../Repository/Api";

const Footer = () => {
  const [response, setResponse] = useState({});

  useEffect(() => {
    getContactDetails(setResponse);
  }, []);


  if(window.innerWidth > 786) { 
    const Component = () => {
      
    }
  }else{

  }


  return (
 
  );
};

export default Footer;
