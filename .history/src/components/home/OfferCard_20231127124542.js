/** @format */

import React from "react";
import { useDispatch } from "react-redux";
import { openBanner } from "../../store/BannerSlice";

const OfferCard = () => {
  const dispatch = useDispatch();
  const handleOpen = () => {
    dispatch(openBanner());
  };

  return (
    <div className="flex gap-5 bg-secondary items-center justify-between px-3  rounded-md h-full">
      <div className="w-44 xl:w-48 p-2">
        <img
          src="/asessts/specialOffer.png"
          className="w-full cursor-pointer"
          alt=""
          onClick={() => handleOpen()}
        />
      </div>
      <div className="flex flex-col gap-3 py-2">
        <h5 className="text-center text-xs font-bold">
          Get $50 OFF on your First Visit
        </h5>
        <h5 className="cursor-pointer font-bold" onClick={() => handleOpen()}>
          {"CLICK TO VIEW MORE"}
        </h5>
      </div>
    </div>
  );
};

export default OfferCard;
