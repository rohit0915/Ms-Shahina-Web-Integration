/** @format */

import React, { useState, useEffect } from "react";
import { getNews } from "../Repository/Api";

const AllNews = () => {
  const [response, setResponse] = useState([]);

  function fetchHandler() {
    getNews(setResponse);
  }

  useEffect(() => {
    fetchHandler();
  }, []);

  const textTransformation = (content) => {
    if(content?.length > 200) {
      return (
        `${content?.substr(0,200)}...`
      )
    }else(
      return
    )
  }

  return (
    <section
      className=" Home_Three_Sec  MaxComponent All_News_Page"
      style={{ marginBottom: "40px" }}
    >
      <div className="gap-3  mx-auto  All_News_Page">
        {response?.map((card, index) => (
          <section className="p-3" key={index}>
            <div className="my-2">
              <img src={card.image} className="w-full h-auto" alt="news" />
              <h3 className="my-6 font-medium text-3xl text-primary title">
                {card.title}
              </h3>
              <p className="text-xl font-normal desc">{card.description}</p>

              <div className="flex justify-center my-3 viewMore-Container">
                <button className="w-1/4 py-2 font-bold text-primary bg-secondary viewMore">
                  VIEW MORE
                </button>
              </div>
            </div>
          </section>
        ))}
      </div>
    </section>
  );
};

export default AllNews;
