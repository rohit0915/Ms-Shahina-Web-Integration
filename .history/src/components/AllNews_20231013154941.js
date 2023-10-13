/** @format */

import React, { useState } from "react";
import NewsCard from "./home/NewsCard";

const AllNews = () => {
  const [response, setResponse] = useState([]);

  function fetchHandler() {
    getNews(setResponse);
  }

  useEffect(() => {
    fetchHandler();
  }, []);
  return (
    <section className=" Home_Three_Sec  MaxComponent mt-24 ">
      <div className="flex flex-col gap-7 items-center">
        <h1 className="text-4xl text-primary font-medium">Latest News</h1>
        <p className="text-xl text-center w-[53rem] content">
          Nourish your skin with toxic-free cosmetic products. With offers you
          can't refuse.
        </p>
      </div>

      <div className="flex flex-wrap  gap-3 mt-14 mx-auto justify-center">
        {response?.map((card, index) => (

            <section className="p-3 w-[430px] NewsCard ">
      <div className="my-2">
        <img src={card.image} className="w-full h-auto" alt="news" />
        <h3 className="my-6 font-medium text-3xl text-primary title">{title}</h3>
        <p className="text-xl font-normal desc">{card.description}</p>
      </div>
      <div className="flex items-center gap-2 font-semibold text-lg mt-6">
        READ MORE <img src="/asessts/arrow.svg" alt="arrow" />
      </div>
    </section>
          <NewsCard
            key={index}
            src={}
            title={}
            content={}
          />
        ))}
      </div>
    </section>
  );
};

export default AllNews;
