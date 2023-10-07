/** @format */

import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getProfile } from "../Repository/Api";

const MyProfile = () => {
  const [profile, setProfile] = useState({});

  useEffect(() => {
    getProfile(setProfile);
  }, []);

  const navigate = useNavigate();


  return (
    <>
      <div className="Backward_Heading step_Heading">
        <div>
          <img src="/Image/1.png" alt="" onClick={() => navigate(-1)} />
        </div>
        <p className="title">My Profile</p>
      </div>

      <div className="profile_div">
        <div className="heading">
          <p>Profile Details</p>

          <button>
            <img src="/Image/103.png" alt="" />
            EDIT PROFILE
          </button>
        </div>
      
        <div className="two-sec">
          <p className="dark">Name : </p>
          <p>Lorem Ipsum</p>
        </div>
        <div className="two-sec">
          <p className="dark">Email ID : </p>
          <p>Lorem Ipsum</p>
        </div>
        <div className="two-sec">
          <p className="dark">Address : </p>
          <p>Lorem Ipsum</p>
        </div>
        <div className="two-sec">
          <p className="dark">Name : </p>
          <p>Lorem Ipsum</p>
        </div>
      </div>
    </>
  );
};

export default MyProfile;
