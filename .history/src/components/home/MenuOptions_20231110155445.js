/** @format */

import React from "react";
import { Link } from "react-router-dom";

const MenuOptions = () => {
  return (
    <header className="Nav_Menu_Container ">
      <ul>
        <Link>HOME</Link>
        <Link to={"shop"}>SHOP</Link>
        <Link to={"services/services"}>SERVICES</Link>
        <Link to={"gallery"}>GALLERY</Link>
        <Link to={"paymentplan"}>PAYMENT PLANS</Link>
        <Link to={"contact"}>CONTACT</Link>
        <Link to={"aboutus"}>ABOUT US</Link>
      </ul>
    </header>
  );
};

export default MenuOptions;
