/** @format */

import React, { useEffect, useState } from "react";
import ServiceCard from "./ServiceCard";
import { getServiceMenu } from "../../Repository/Api";
import Loader from "../Loader/Loader";
import NoData from "../NoData/NoData";

const Services = ({ name }) => {
  const [response, setResponse] = useState([]);
  const [load, setLoad] = useState(false);

  async function fetchHandler() {
    try {
      setLoad(true);
      await getServiceMenu(setResponse);
      setLoad(false);
    } catch {
    } finally {
    }
  }

  useEffect(() => {
    fetchHandler();
  }, []);

  return load ? (
    <Loader />
  ) : response?.length > 0 ? (
    <section className="Service_Glass_Section">
      <div className="Heading">Services Menu By Concern</div>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-9 service-card ">
        {response?.map((i, index) => (
          <ServiceCard
            key={index}
            src={i.image}
            service={i.name}
            id={i._id}
            name={name}
          />
        ))}
      </div>
    </section>
  ) : (
    <NoData message={"Sorry, we couldn't find any service's"} />
  );
};

export default Services;
