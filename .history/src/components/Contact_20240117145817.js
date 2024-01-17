/** @format */

import React, { useEffect, useState } from "react";
import { MAP_IMG } from "../constants/constant";
import { getContactDetails, postQuery } from "../Repository/Api";
import { BsTelephoneFill } from "react-icons/bs";
import { HiMail } from "react-icons/hi";
import { ImLocation } from "react-icons/im";
import { AiFillStar } from "react-icons/ai";
import { Call, Mail } from "./Helping/Mail";
import MessageModal from "./Drawer/MessageModal";

const Contact = () => {
  const [response, setResponse] = useState({});
  const [open, setOpen] = useState(true);
  const [query, setQuery] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [msg, setMsg] = useState("");
  const [submitLoading, setSubmitLoading] = useState(false);

  const payload = {
    query,
    name,
    email,
    mobile,
  };
  const submitHandler = (e) => {
    e.preventDefault();
    try {
      setSubmitLoading(true);
      postQuery(payload, setMsg, setOpen);
    } catch {
      setSubmitLoading(false);
    } finally {
      setSubmitLoading(false);
    }
  };

  console.log(submit)

  const starArray = Array.from({ length: response?.ratings });

  function fetchHandler() {
    getContactDetails(setResponse);
  }

  useEffect(() => {
    fetchHandler();
  }, []);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "instant",
    });
  }, []);

  return (
    <>
      <MessageModal open={open} setOpen={setOpen} msg={msg} />
      <section className="contact-us">
        <h1 className="text-5xl text-center font-light text-primary my-10 title ">
          Contact
        </h1>

        <div className="container">
          {response && (
            <section>
              <div className="flex gap-5 items-start mt-3 Detail_Section ">
                <div className="w-52 h-52 Img-C ">
                  <img
                    className="object-fill"
                    src={response?.image}
                    alt="Addresimage"
                  />
                </div>

                <div className="flex flex-col gap-4">
                  <span className="text-lg font-semibold">
                    {response?.name}
                  </span>

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
          )}

          <section className="flex flex-col justify-between gap-7 w-1/3 query_Section">
            <h1 className="text-2xl font-semibold text-primary ">
              Any Queries?
            </h1>

            <form onSubmit={submitHandler} className="query_Container">
              <input
                type="text"
                placeholder="Enter Your Name"
                required
                onChange={(e) => setName(e.target.value)}
              />
              <input
                type="email"
                placeholder="Enter Your Email"
                required
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                type="tel"
                minLength={8}
                maxLength={12}
                placeholder="Enter Mobile Number"
                required
                onChange={(e) => setMobile(e.target.value)}
              />
              <textarea
                className="border border-black w-full py-5 px-5"
                placeholder="Write Your message..."
                name=""
                id=""
                cols="30"
                rows="5"
                required
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
    </>
  );
};

export default Contact;
