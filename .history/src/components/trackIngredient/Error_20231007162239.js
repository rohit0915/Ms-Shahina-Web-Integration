/** @format */

import React from "react";

const Error = ({ setError, message }) => {
  return (
    <div
      onClick={() => setError(false)}
      className=" fixed flex justify-center items-center top-0 w-full h-screen z-[1000] bg-black bg-opacity-5 backdrop-blur-sm"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative w-[34rem] bg-secondary"
        style={{heigh}}
      >
        <div
          onClick={() => setError(false)}
          className="w-5 h-5 absolute top-4 cursor-pointer right-8"
        >
          <img
            className="w-full h-full"
            src="/Image/14.png"
            alt="close"
          />
        </div>
        <div className="flex pl-10 pr-24 py-14 items-start gap-4 flex-shrink-0 w-full h-full">
          <img className="w-12 h-12" src="/Image/101.png" alt="" />
          <div className=" space-y-10">
            <h3 className="text-3xl font-semibold text-primary">{message}</h3>
            <p className="text-xs">
              {" "}
              Comedogenic ingredients are listed in red.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Error;
