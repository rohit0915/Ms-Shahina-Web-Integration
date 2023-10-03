/** @format */

import React from "react";
import Services from "../home/Services";
import ServiceHead from "./ServiceHead";
import { SERVICE_HEAD_IMAGE } from "../../constants/constant";
import { Outlet, useNavigate, useParams } from "react-router-dom";

const ServiceTab = () => {
  const { service } = useParams();
  const navigate = useNavigate();
  return (
    <section>
      {service ? (
        <Outlet />
      ) : (
        <>
          <div className=" relative max-w-screen">
            <img
              className="w-full h-[26rem] object-cover"
              src="/Image/71.jpg"
              alt="service cover"
            />
            <div className="absolute top-0 w-full h-full flex flex-col bg-black bg-opacity-25  justify-around">
              <h1 className="text-6xl text-white text-center  z-50 font-light">
                BOOK ONLINE
              </h1>

              <button className="w-52 mx-auto py-2 text-lg font-semibold z-50  bg-secondary text-primary">
                BOOK ONLINE
              </button>
            </div>
            <div
              onClick={() => navigate(-1)}
              className="absolute cursor-pointer top-24 left-12"
            >
              <img src="/asessts/back-button.svg" alt="back-button" />
            </div>
          </div>

          <Services />
        </>
      )}
    </section>
  );
};

export default ServiceTab;
