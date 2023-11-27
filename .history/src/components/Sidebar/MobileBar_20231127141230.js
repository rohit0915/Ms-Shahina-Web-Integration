/** @format */

import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import Sidebar from "./Sidebar";
import { useSelector } from "react-redux";

const MobileBar = () => {
  const [open, setOpen] = useState(false);
  const [dummyLength, setDummyLength] = useState(0);
  const [serviceLength, setServiceLength] = useState(0);
    const dummyItem = useSelector(DummyCartItems);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };
  return (
    <>
      <Sidebar onClose={onClose} open={open} />
      <div className="Mobile_Bar">
        <img
          src="/Image/Menu_Alt_03.png"
          className="HamberGur"
          onClick={() => showDrawer()}
          alt=""
        />

        <Link to={"/"}>
          <img className="Logo" src="/asessts/navbar/logo.png" alt="logo" />
        </Link>

        <Link to={"/mycart"}>
          <FaShoppingCart
            className="text-2xl cursor-pointer"
            style={{ cursor: "pointer" }}
          />
        </Link>
      </div>
    </>
  );
};

export default MobileBar;
