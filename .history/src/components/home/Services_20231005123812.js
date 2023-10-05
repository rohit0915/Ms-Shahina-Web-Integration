/** @format */

import React, { useState } from "react";
import ServiceCard from "./ServiceCard";
import { ServiceCardImages } from "../../constants/constant";

const Services = () => {
  const [ response , setResponse ] = useState([])

  function fetchHandler

  return (
    <section className="Service_Glass_Section">
      <div className="Heading">
        Services Menu By Concern
      </div>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-9 service-card ">
        {ServiceCardImages.map((card, index) => (
          <ServiceCard key={index} src={card.src} service={card.service} />
        ))}
      </div>
    </section>
  );
};

export default Services;
