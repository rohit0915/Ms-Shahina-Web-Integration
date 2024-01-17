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
import MessageModal from "./Drawer/MessageModal";

const Contact = () => {
  const [response, setResponse] = useState({});
  const [open, setOpen] = useState(false);
  const [load, setLoad] = useState(false);
  const [query, setQuery] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");

  const payload = {
    query,
    name,
    email,
    mobile,
  };
  const submitHandler = (e) => {
    e.preventDefault();
    postQuery(payload);
  };

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
    window.scrollTo({
      top: 0,
      behavior: "instant",
    });
  }, []);

  const Component = () => {
    return (
     
    );
  };

  return (
    <>
      <MessageModal open={open} setOpen={setOpen} />
      <WithLoader Wrapped={Component} loading={load} />
    </>
  );
};

export default Contact;
