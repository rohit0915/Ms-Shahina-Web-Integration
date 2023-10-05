/** @format */

import React, { useState } from "react";
import Services from "../home/Services";
import {  useNavigate  } from "react-router-dom";

const ServiceTab = () => {
  const [ response , setResponse ] = useState([])
  const navigate = useNavigate();

  return (
    <section>
      <div className="relative_product_container">
        <img className="full_Image" src={"/Image/71.jpg"} alt="" />
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
