/** @format */

import React, { useEffect, useState } from "react";
import Services from "../home/Services";
import { useNavigate } from "react-router-dom";
import { getLimitedOffer } from "../../Repository/Api";

const ServiceTab = () => {
  const [response, setResponse] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    getLimitedOffer(setResponse, "servicePage");
  }, []);

  return (
    <section>
    {response?.[0] && }
    

      <Services />
    </section>
  );
};

export default ServiceTab;
