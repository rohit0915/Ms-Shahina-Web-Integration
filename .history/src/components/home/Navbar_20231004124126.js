/** @format */

import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Navbar = () => {
  const { isLoggedIn } = useSelector((store) => store.user);
  return (
    <div className="Nav_Bar ">
      <header>
        <div className="left">
          <Link to={"/"}>
            <img className="" src="/asessts/navbar/logo.png" alt="logo" />
          </Link>
        </div>

        <div className="right-container">
          <img src="/asessts/navbar/search.png" alt="" />
          <Link to={"mycart"}>
            <FaShoppingCart className="text-2xl" />
          </Link>
          {isLoggedIn ? (
            <div>
              <img
                src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
                alt=""
              />
            </div>
          ) : (
            <div className="flex items-center gap-2 prof-container">
              <img src="/asessts/navbar/profile.png" alt="" />
              <Link className="text-secondary font-medium" to={"/login"}>
                <span>LOGIN</span>
              </Link>
            </div>
          )}

          <Link to={"membership"}>
            <img src="/asessts/navbar/crown.png" alt="" />
          </Link>
        </div>
      </header>
      <div
        className="mx-auto mt-5"
        style={{ backgroundColor: "#E5D896", height: "2px", width: "85%" }}
      ></div>
    </div>
  );
};

export default Navbar;
