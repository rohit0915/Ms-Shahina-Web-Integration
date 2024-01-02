/** @format */

import React, { useState, useEffect } from "react";
import { View_description } from "../Helper/Herlper";
import { getNews } from "../Repository/Api";

const AllNews = () => {
  const [response, setResponse] = useState([]);
  const [show, setShow] = useState(false);

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

  const textTransformation = (content) => {
    if (content?.length > 400) {
      return <View_description description={content?.substr(0, 100)} />  `${content?.substr(0, 400)}...`;
    } else {
      return content;
    }
  };

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
              <p className="text-xl font-normal desc">
                {show
                  ? card?.description
                  : textTransformation(card?.description)}
              </p>

              <div className="flex justify-center my-3 viewMore-Container">
                {card?.description?.length > 400 && (
                  <button
                    className="w-1/4 py-2 font-bold text-primary bg-secondary viewMore"
                    onClick={() => setShow(!show)}
                  >
                    {show === true ? " VIEW LESS" : " VIEW MORE"}
                  </button>
                )}
              </div>
            </div>
          </section>
        ))}
      </div>
    </section>
  );
};

export default AllNews;
