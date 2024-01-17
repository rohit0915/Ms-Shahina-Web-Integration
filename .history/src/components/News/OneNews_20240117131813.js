/** @format */

import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getSingleNews } from "../../Repository/Api";
import { View_description } from "../../Helper/Herlper";

const OneNews = () => {
  const { id } = useParams();

  const [response, setResponse] = useState([]);

  function fetchHandler() {
    getSingleNews(setResponse, id);
  }

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "instant",
    });
  }, []);

  useEffect(() => {
    fetchHandler();
  }, []);

  return (
    <section
      className=" Home_Three_Sec  MaxComponent All_News_Page"
      style={{ marginBottom: "40px" }}
    >
      <div className="gap-3  mx-auto  All_News_Page">
        <section className="p-3">
          <div className="my-2">
            <div
              style={{ backgroundImage: `url${response.image}` }}
              className="thumbnail"
            />
            <h3 className="my-6 font-medium text-3xl text-primary title">
              {response.title}
            </h3>
            <View_description description={response?.description} />
          </div>
        </section>
      </div>
    </section>
  );
};

export default OneNews;
