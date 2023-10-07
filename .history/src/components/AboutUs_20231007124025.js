/** @format */

import React, { useEffect, useState } from "react";
import Pictures from "./home/Pictures";
import { useNavigate } from "react-router-dom";
import { getAboutUs } from "../Repository/Api";

const AboutUs = () => {
  const [show, setShow] = useState(false);
  const [ response , setResponse] = useState({})
  const navigate = useNavigate();

  

  useEffect(() => {
    window.scrollTo(0, 0);
    getAboutUs(setResponse)
  }, []);
  
  console.log(response)

  return (
    <section className="bg-primary text-white font-light">
      <div className="Backward_Heading step_Heading">
        <div>
          <img src="/Image/1.png" alt="" onClick={() => navigate(-1)} />
        </div>
        <p className="title" style={{ color: "#fff" }}>
          About Us
        </p>
      </div>

      <div className="flex justify-center  gap-14 About-us_section "  >
        <div className="w-[37rem] h-[37rem]  border-8 border-secondary overflow-hidden left-container">
          <img
            className="w-full h-full object-cover"
            alt=""
            src={response?.image}
          />
        </div>
        <div
          className="flex flex-col w-[47.04rem] items-start Right_Section "
          style={{ gap: "20px" }}
        >
          <h3 className="text-4xl font-medium title"> {response?.title}  </h3>
          <h4 className="font-medium text-xl flex items-center gap-2">
            {/* Shahina Hoja, RN, LE
            <span className="font-light text-sm ">
              - Aesthetic Nurse & Founder
            </span> */}
            {response?.designation}
          </h4>
          <p>
            {response?.description?.[0]}
          </p>
          {show ? 
            response?.description?.map((i , index) => (
              <p key={index} >  {i} </p>
            ))}
           
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

      <hr className="bg-secondary mt-[28.5rem] mb-14 w-3/4 mx-auto" />
      <Pictures />
    </section>
  );
};

export default AboutUs;
