import React from "react";
import { OFFER_IMG } from "../../constants/constant";

const LimitedOffer = () => {
  return (
    <section className="mb-3 w-full h-[40rem] relative">
      <img src={OFFER_IMG} alt="offer" className="w-full h-full object-cover" />
      <div className="w-full h-full bg-black bg-opacity-50 absolute top-0">
        <div className="absolute top-0 mt-5 w-full text-white">
          <div className="flex items-center gap-2 w-[38rem] py-6 pl-11 text-center  text-4xl font-black bg-secondary text-primary">
            <div className="w-16 h-16">
              <img
                className="w-full h-full object-contain"
                src="/asessts/offer-icon.png"
                alt=""
              />
            </div>
            LIMITED TIME OFFER
          </div>
        </div>
        <div className="absolute bottom-0 text-white left-12 mb-8">
          <h1 className="text-6xl font-normal text-center mb-10">
            Get your 50% OFF
          </h1>
          <p className="text-center w-[41rem] font-normal text-xl">
            Non aliqua reprehenderit reprehenderit culpa laboris nulla minim
            anim velit adipisicing ea aliqua alluptate sit do do.
          </p>
        </div>
      </div>
    </section>
  );
};

export default LimitedOffer;
