/** @format */

import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getHomePage } from "../../Repository/Api";
import { isAuthenticated } from "../../store/authSlice";

const HeroSection = () => {
  const isLoggedIn = useSelector(isAuthenticated);

  const [banner, setBanner] = useState([]);

  useEffect(() => {
    getHomePage(setBanner);
  }, []);


  return (
    <div className="Home_Hero_Section ">
      <div className="left-container ">
        <h1> {banner?.title} </h1>

        <ul>
          {banner?.description?.map((i, index) => (
            <li key={index}> {i} </li>
          ))}
        </ul>

        {isLoggedIn ? (
          <Link to="/schedule1">
            <button>BOOK ONLINE</button>
          </Link>
        ) : (
          <Link to="/appointment">
            <button>BOOK ONLINE</button>
          </Link>
        )}
      </div>
      <div className="absolute right-0 bottom-0 w-[40rem] h-[47rem] ">
        <img
          className="w-full h-ful Hero_Imgl"
          src={banner?.bannerImage}
          alt="hero img"
        />
      </div>
    </div>
  );
};

export default HeroSection;
