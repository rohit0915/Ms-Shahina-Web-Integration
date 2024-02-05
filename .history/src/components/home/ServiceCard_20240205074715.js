/** @format */

import React, { useEffect, useState } from "react";
import { ImageLazyLoading } from "../../utils/helpingComponent";
import ServiceDrawer from "../Drawer/ServiceDrawer";

const ServiceCard = ({ src, service, id, name }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  useEffect(() => {
    if (service === name) {
      setOpen(true);
    }
  }, [service, name]);

  return (
    <>
      <ServiceDrawer onClose={onClose} open={open} title={service} id={id} />
      <div
        className="m-2 Component"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div className="relative w-full h-[30rem] xl:h-[39rem] Items">
        <ImageLazyLoading
                    img={src}
                    alt={""}
                    className="object-fill Img-C"
                  />
          <img
            src={src}
            alt="service1"
            className="w-full h-full object-cover"
          />
          {!isHovered && (
            <div className="absolute top-0 w-full h-full">
              <p className="absolute bottom-20 left-0 right-0 text-center text-white text-4xl font-medium Normal_Title ">
                {service}
              </p>
            </div>
          )}

          {isHovered && (
            <div
              className="absolute inset-0 flex items-center justify-center text-white bg-black bg-opacity-70 cursor-pointer "
              onClick={() => showDrawer()}
            >
              <div className="flex flex-col items-center space-y-3">
                <span className="text-4xl font-medium Title text-uppercase ">
                  {service}
                </span>

                <button className="btn-bookNow px-4 border border-white text-white">
                  {"Learn More"}
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default ServiceCard;
