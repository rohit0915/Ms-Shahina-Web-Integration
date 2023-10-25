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
  return (
    <section
      className=" Home_Three_Sec  MaxComponent All_News_Page"
      style={{ marginBottom: "40px" }}
    >
      <div className="gap-3  mx-auto  All_News_Page" >
        {response?.map((card, index) => (
          <section className="p-3" key={index}>
            <div className="my-2">
              <img src={card.image} className="w-full h-auto" alt="news" />
              <h3 className="my-6 font-medium text-3xl text-primary title">
                {card.title}
              </h3>
              <p className="text-xl font-normal desc">{card.description}</p>
            </div>
          </section>
        ))}
      </div>
    </section>
  );
};

export default AllNews;
