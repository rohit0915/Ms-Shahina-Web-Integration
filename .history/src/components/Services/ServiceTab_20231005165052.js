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
      <div className="relative_product_container">
        <img
          className="full_Image"
          src={response?.[0]?.serviceImage?.[0]}
          alt=""
        />
        <div className="content">
          <h1 className="text-6xl text-white text-center  z-50 font-light">
            BOOK ONLINE
          </h1>
          <button
            className="w-52 mx-auto py-2 text-lg font-semibold z-50  bg-secondary text-primary "
            onClick={() => navigate("/appointment")}
          >
            BOOK ONLINE
          </button>
        </div>
        <div className="Image">
          <img
            src="/asessts/back-button.svg"
            alt=""
            onClick={() => navigate(-1)}
          />
        </div>
      </div>

      <Services />
    </section>
  );
};

export default ServiceTab;
