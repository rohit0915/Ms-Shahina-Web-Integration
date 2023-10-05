/** @format */

import React, { useEffect, useState } from "react";
import { getLimitedOffer } from "../../Repository/Api";

const OfferBanner = ({ setBanner }) => {
  const [ response , setResponse  ] = useState([])

  function fetchHandler () {
    getLimitedOffer(setResponse ,'Promotion')
  }

  useEffect(() => {
    fetchHandler()
  },[])

  console.log(Respo)

  return (
    <div className="relative w-full">
      <div className="w-4/6 h-[23rem]">
        <img
          className="w-full h-full object-cover"
          src="/Image/38.png"
          alt="banner"
        />
      </div>
      <div>
        <h1 className="text-4xl font-normal text-white  absolute bottom-10 left-16 text-center w-[37rem]">
          Get <span className="font-bold">50$ OFF</span> on your First Visit
          when you Book through Our App
        </h1>
      </div>

      <div className="absolute  top-0 right-0 flex flex-col gap-10  justify-center items-center bg-white w-[51rem] h-full rounded-l-full z-[300]">
        <h1 className="font-medium text-4xl">Download Our App NOW!!</h1>
        <div className="flex items-center">
          <div className="w-80 h-24">
            <img
              className="w-full h-full object-contain"
              src="/asessts/play.png"
              alt="play"
            />
          </div>
          <div className="w-80 h-24">
            <img
              className="w-full h-full object-contain"
              src="/asessts/store.png"
              alt="store"
            />
          </div>
        </div>
        <div className="w-12 h-8  absolute top-3 right-11">
          <img
            onClick={() => setBanner(false)}
            className="object-cover cursor-pointer"
            src="/Image/14.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default OfferBanner;
