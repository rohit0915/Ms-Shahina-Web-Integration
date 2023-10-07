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

  function QueryHandler(query, title) {
    if (query) {
      return (
        <div className="two-sec">
          <p className="dark"> {title} : </p>
          <p> {query} </p>
        </div>
      );
    }
  }

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

        {QueryHandler(profile?.firstName , "First Name " )}
        {QueryHandler(profile?.lastName , "Last Name " )}
        {QueryHandler(profile?.gender , "First Name " )}
        {QueryHandler(profile?.firstName , "First Name " )}
        {QueryHandler(profile?.firstName , "First Name " )}

      </div>
    </>
  );
};

export default MyProfile;
