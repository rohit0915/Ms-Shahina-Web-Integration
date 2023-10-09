/** @format */

import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { isAuthenticated } from "../../store/authSlice";

const HeroSection = () => {
  const isLoggedIn = useSelector(isAuthenticated)
  return (
    <div className="Home_Hero_Section ">
      <div className="left-container ">
        <h1>Shahina Hoja Aesthetics</h1>
        <ul>
          <li>High Acne Clearing Success Rate</li>
          <li>Trained by Top Doctors in NYC</li>
          <li>Top & Latest Technology</li>
          <li>One Time Melasma Treatment</li>
          <li>High Quality Medical Grade Products</li>
        </ul>

      {
        isLoggedIn ? :
      }

        <Link to="/appointment">
          <button>BOOK ONLINE</button>
        </Link>
      </div>
      <div className="absolute right-0 bottom-0 w-[40rem] h-[47rem] ">
        <img
          className="w-full h-ful Hero_Imgl"
          src="/asessts/hero-img.png"
          alt="hero img"
        />
      </div>
    </div>
  );
};

export default HeroSection;
