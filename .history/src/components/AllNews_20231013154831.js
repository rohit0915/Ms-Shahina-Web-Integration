import React, { useState } from 'react'
import NewsCard from './home/NewsCard';

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
        <NewsCard
          key={index}
          src={card.image}
          title={card.title}
          content={card.description}
        />
      ))}
    </div>

    <div className="flex justify-center my-24 viewMore-Container">
      <button
        className="w-1/4 py-2 font-bold text-primary bg-secondary viewMore"
        onClick={toggleShowAll}
      >
        {showAll ? "SHOW LESS" : "VIEW MORE"}
      </button>
    </div>
  </section>
  )
}

export default AllNews