/** @format */

import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { getGallery } from "../../Repository/Api";

const Gallery = () => {
  const [response, setResponse] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    getGallery(setResponse);
  }, []);

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

      {response && (
        <div className="Galler_container">
          {response?.map((i, index) => (
            <div className="Item" key={index}>
              <Link
                to={
                  "https://www.instagram.com/nurse.shahina/?igshid=OGQ5ZDc2ODk2ZA%3D%3D"
                }
                target="_blank"
              >
                <img src={i.image} alt="" />
                <p> {i.description} </p>
              </Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Gallery;
