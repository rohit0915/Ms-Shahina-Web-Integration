/** @format */

import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getPrivacyPolicy } from "../Repository/Api";

const Privacy = () => {
  const [ response , setResponse ] = useState([])
  const navigate = useNavigate();

  function BackNavigation() {
    navigate(-1);
  }

  useEffect(() => {
    getPrivacyPolicy(setResponse)
  },[])

  
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <main className="service_details_page">
      <div className="Backward_Heading step_Heading" style={{ padding: 0 }}>
        <div>
          <img src="/Image/1.png" alt="" onClick={() => BackNavigation()} />
          <p style={{ width: "50%" }}></p>
        </div>
        <p className="title" style={{ textTransform: "uppercase" }}>
          Privacy Policy
        </p>
      </div>

      <div className="content privacy_policy">
      {response?.map((i ,index) => (

      ))}
      
      </div>
    </main>
  );
};

export default Privacy;
