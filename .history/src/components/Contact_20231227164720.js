/** @format */

import React, { useEffect, useState } from "react";
import { MAP_IMG, STAR } from "../constants/constant";
import { getContactDetails, postQuery } from "../Repository/Api";
import { BsTelephoneFill } from "react-icons/bs";
import { HiMail } from "react-icons/hi";
import { ImLocation } from "react-icons/im";
import { AiFillStar } from "react-icons/ai";
import WithLoader from "./Wrapped/WithLoader";
import { Call, Mail } from "./Helping/Mail";

const Contact = () => {
  const [response, setResponse] = useState({});

  const [load, setLoad] = useState(false);



  const starArray = Array.from({ length: response?.ratings });

  async function fetchHandler() {
    try {
      setLoad(true);
      await getContactDetails(setResponse);
    } catch (e) {
      console.log(e);
    } finally {
      setLoad(false);
    }
  }

  useEffect(() => {
    fetchHandler();
  }, []);

  

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const Component = () => {
    const [query, setQuery] = useState("");
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [mobile, setMobile] = useState("");
    const submitHandler = (e) => {
      e.preventDefault();
      postQuery(payload);
    };
    return (
      <section className="contact-us">
        <h1 className="text-5xl text-center font-light text-primary my-10 title ">
          Contact
        </h1>
        <div className="container">
          <section>
            <h2 className="text-2xl font-semibold text-primary">Our Office</h2>

            <div className="flex gap-5 items-start mt-3 Detail_Section ">
              <div className="w-52 h-52 Img-C ">
                <img
                  className="object-fill"
                  src={response?.image}
                  alt="Addresimage"
                />
              </div>

              <div className="flex flex-col gap-4">
                <span className="text-lg font-semibold">{response?.name}</span>

                <div className="flex gap-2 items-center">
                  {" "}
                  {starArray.map((_, index) => (
                    <div className="Rat" key={`star ${index}`}>
                      <AiFillStar
                        className="fill_star"
                        style={{ color: "#ff9529", fontSize: "20px" }}
                      />
                    </div>
                  ))}
                  <span>({response?.numOfReviews})</span>
                </div>

                <div className="flex flex-col gap-4">
                  <div
                    className="flex items-center gap-4 cursor-pointer"
                    onClick={() => Call(response?.phone)}
                  >
                    <span className="text-2xl">
                      {" "}
                      <BsTelephoneFill />{" "}
                    </span>
                    <span>{response?.phone} </span>
                  </div>
                  <div
                    className="flex items-center gap-4 cursor-pointer "
                    onClick={() => Mail(response?.email)}
                  >
                    <span className="text-2xl">
                      {" "}
                      <HiMail />{" "}
                    </span>
                    <span>{response?.email} </span>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="text-2xl">
                      {" "}
                      <ImLocation />{" "}
                    </span>
                    <span>{response?.address} </span>
                  </div>
                </div>
                <a href={response?.google} target="_blank">
                  <button
                    className="flex items-center gap-3 font-semibold text-green justify-center border-2 py-2  border-green"
                    style={{ padding: "10px" }}
                  >
                    <img className="w-5 h-5" src={MAP_IMG} alt="location" />
                    LOCATE ON GOOGLE MAPS
                  </button>
                </a>
              </div>
            </div>
          </section>

          <section className="flex flex-col justify-between gap-7 w-1/3 query_Section">
            <h1 className="text-2xl font-semibold text-primary ">
              Any Queries?
            </h1>

            <form onSubmit={submitHandler} className="query_Container">
              <input
                type="text"
                placeholder="Enter Your Name"
                onChange={(e) => setName(e.target.value)}
              />
              <input
                type="email"
                placeholder="Enter Your Email"
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                type="tel"
                minLength={8}
                maxLength={12}
                placeholder="Enter Mobile Number"
                onChange={(e) => setMobile(e.target.value)}
              />
              <textarea
                className="border border-black w-full py-5 px-5"
                placeholder="Write Your message..."
                name=""
                id=""
                cols="30"
                rows="5"
                onChange={(e) => setQuery(e.target.value)}
              />
              <button
                type="submit"
                className="bg-primary w-[300px] text-secondary py-2 font-semibold"
              >
                SUBMIT
              </button>
            </form>
          </section>
        </div>
      </section>
    );
  };

  return <WithLoader Wrapped={Component} loading={load} />;
};

export default Contact;
