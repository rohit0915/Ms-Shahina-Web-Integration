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
  <div style={{padding : '20px'}} >

  </div>

     
    </>
  );
};

export default MyProfile;
