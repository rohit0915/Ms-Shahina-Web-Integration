/** @format */

import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getAboutUs } from "../Repository/Api";
import WithLoader from "./Wrapped/WithLoader";
import { View_description } from "../Helper/Herlper";
import GallarySlider from "./Sliders/GallarySlider";
import { ImageLazyLoading } from "../utils/helpingComponent";

const AboutUs = () => {
  const [show, setShow] = useState(false);
  const [response, setResponse] = useState({});
  const [load, setLoad] = useState(false);
  const navigate = useNavigate();

  async function fetchHandler() {
    try {
      setLoad(true);
      await getAboutUs(setResponse);
    } catch (e) {
      console.log(e);
    } finally {
      setLoad(false);
    }
  }
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "instant",
    });
  }, []);
  useEffect(() => {
    fetchHandler();
  }, []);

  const Component = () => {
    return (
      <section className="bg-primary text-white font-light about-us-container ">
        <div className="Backward_Heading step_Heading">
          <div>
            <img src="/Image/1.png" alt="" onClick={() => navigate(-1)} />
          </div>
        </div>

        {response && (
          <div className="flex justify-center  gap-14 About-us_section ">
            <div className="w-[37rem] h-[37rem]  border-8 border-secondary overflow-hidden left-container">
              <img
                className="w-full h-full object-cover"
                alt=""
                src={response?.image}
              />
              <ImageLazyLoading
                img={response?.image}
                alt={""}
                className="object-fill Img-C"
              />
            </div>
            <div
              className="flex flex-col w-[47.04rem] items-start Right_Section "
              style={{ gap: "20px" }}
            >
              <h3 className="text-4xl font-medium title">
                {" "}
                {response?.title}{" "}
              </h3>
              <h4 className="font-medium text-xl flex items-center gap-2">
                {response?.designation}
              </h4>

              {show ? (
                response?.description?.map((i, index) => (
                  <View_description description={i} key={index} />
                ))
              ) : (
                <View_description description={response?.description?.[0]} />
              )}

              {show ? (
                <button
                  className="w-96 py-6 bg-secondary text-primary text-2xl font-bold"
                  onClick={() => setShow(false)}
                >
                  SHOW LESS
                </button>
              ) : (
                <button
                  className="w-96 py-6 bg-secondary text-primary text-2xl font-bold"
                  onClick={() => setShow(true)}
                >
                  VIEW MORE
                </button>
              )}
            </div>
          </div>
        )}

        <hr className="bg-secondary mt-[14.5rem] mb-14 w-3/4 mx-auto last-hr" />
        <GallarySlider />
      </section>
    );
  };

  return <WithLoader Wrapped={Component} loading={load} />;
};

export default AboutUs;
