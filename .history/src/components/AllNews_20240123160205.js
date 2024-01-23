/** @format */

import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { View_description } from "../Helper/Herlper";
import { getNews } from "../Repository/Api";

const AllNews = () => {
  const [response, setResponse] = useState([]);

  function fetchHandler() {
    getNews(setResponse);
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
        {response?.map((card, index) => (
          <section className="p-3" key={index}>
            <div className="my-2">
              <div
                style={{ backgroundImage: `url(${card.image})` }}
                className="thumbnail"
                
              />
              <h3 className="my-6 font-medium text-3xl text-primary title">
                {card.title}
              </h3>
              <p className="text-xl font-normal desc">
                <View_description
                  description={card?.description?.substr(0, 200)}
                />
              </p>

              <div className="flex justify-center my-3 viewMore-Container">
                <Link to={`/news/${card?._id}`}>
                  <button className=" py-2 font-bold text-primary bg-secondary viewMore">
                    Read More
                  </button>
                </Link>
              </div>
            </div>
          </section>
        ))}
      </div>
    </section>
  );
};

export default AllNews;
