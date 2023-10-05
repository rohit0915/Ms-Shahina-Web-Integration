/** @format */

import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { getGallery } from "../../Repository/Api";

const Gallery = () => {
  const [ response , setResponse ] = useState([])
  const navigate = useNavigate();

  useEffect(() => {
    getGallery(setResponse)
  },[])

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <div className="Backward_Heading step_Heading">
        <div>
          <img src="/Image/1.png" alt="" onClick={() => navigate(-1)} />
        </div>
        <p className="title">Gallery</p>
      </div>

      <div className="Galler_container">
      {response?.map((i ,index) => (

      ))}
      
      </div>
    </div>
  );
};

export default Gallery;
