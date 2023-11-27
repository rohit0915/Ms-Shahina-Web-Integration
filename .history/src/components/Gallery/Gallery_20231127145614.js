/** @format */

import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { getGallery } from "../../Repository/Api";
import NoData from "../NoData/NoData";
import WithLoader from "../Wrapped/WithLoader";

const Gallery = () => {
  const [response, setResponse] = useState([]);
  const [load, setLoad] = useState(false);
  const navigate = useNavigate();

  async function fetchHandler() {
    try {
      setLoad(true);
      await getGallery(setResponse);
    } catch (e) {
      console.log(e);
    } finally {
      setLoad(false);
    }
  }

  React.useEffect(() => {
    fetchHandler();
    window.scrollTo(0, 0);
  }, []);

  const Component = () => {
    return (
      <div>
        <div className="Backward_Heading step_Heading">
          <div>
            <img src="/Image/1.png" alt="" onClick={() => navigate(-1)} />
          </div>
          <p className="title">Gallery</p>
        </div>

        {response?.length > 0 ? (
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
        ) : (
          <NoData message={"Sorry, we couldn't find any Gallery Image's"} />
        )}
      </div>
    );
  };

  return <WithLoader Wrapped={Component} loading={load} />;
};

export default Gallery;
