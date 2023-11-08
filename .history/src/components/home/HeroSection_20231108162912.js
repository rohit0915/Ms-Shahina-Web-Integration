/** @format */

import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getHomePage } from "../../Repository/Api";
import { isAuthenticated } from "../../store/authSlice";

const HeroSection = () => {
  const isLoggedIn = useSelector(isAuthenticated);

  const [banner, setBanner] = useState({});

  useEffect(() => {
    getHomePage(setBanner);
  }, []);

  return (
    banner && (
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

        <div className="Image_container">
          <img
            className="w-full h-ful Hero_Imgl"
            src={banner?.bannerImage}
            alt=""
          />
        </div>
      </div>
    )
  );
};

export default HeroSection;
