/** @format */

import React, { useEffect, useState } from "react";
import ServiceCard from "./ServiceCard";
import { getServiceMenu } from "../../Repository/Api";

const Services = ({name}) => {
  const [response, setResponse] = useState([]);

  function fetchHandler() {
    getServiceMenu(setResponse);
  }

  useEffect(() => {
    fetchHandler();
  }, []);

  return (
    response?.length > 0 && (
      <section className="Service_Glass_Section">
        <div className="Heading">Services Menu By Concern</div>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-9 service-card ">
          {response?.map((i, index) => (
            <ServiceCard
              key={index}
              src={i.image}
              service={i.name}
              id={i._id}
            />
          ))}
        </div>
      </section>
    )
  );
};

export default Services;
