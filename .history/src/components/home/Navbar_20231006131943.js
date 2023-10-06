/** @format */

import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";
import { isAuthenticated } from "../../store/authSlice";
import { useSelector } from "react-redux";
import MenuOptions from "./MenuOptions";

const Navbar = () => {
  const isLoggedIn = useSelector(isAuthenticated);

  console.log(isLoggedIn);

  return (
    <div className="Nav_Bar ">
      <header className="Header">
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
          {isLoggedIn === true ? (
            <div>
            

              
            </div>

            <div className="prof-container">
              <img src="/asessts/navbar/profile.png" alt="" />
              <Link className="text-secondary font-medium" to={"/login"}>
                <span>LOGIN</span>
              </Link>
            </div>
          ) : (
            <div className="prof-container">
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
      <MenuOptions />
    </div>
  );
};

export default Navbar;
