/** @format */

import React, { useEffect, useState } from "react";
import NewsCard from "./NewsCard";
import { getNews } from "../../Repository/Api";
import { useNavigate } from "react-router-dom";
import WithLoader from "../Wrapped/WithLoader";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import { Pagination, Autoplay, Keyboard } from "swiper/modules";

const LatestNews = () => {
  const [response, setResponse] = useState([]);
  const [load, setLoad] = useState(false);
  const navigate = useNavigate();

  async function fetchHandler() {
    try {
      setLoad(true);
      await getNews(setResponse);
    } catch (e) {
      console.log(e);
    } finally {
      setLoad(false);
    }
  }

  useEffect(() => {
    fetchHandler();
  }, []);

  const swiperConfig = {
    spaceBetween: 20,
    slidesPerView: 1,
    loop: true,
    autoplay: {
      delay: 2000,
      disableOnInteraction: false,
    },
    keyboard: {
      enabled: true,
    },
    breakpoints: {
      768: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 3,
      },
    },
  };

  const Component = () => {
    return (
      response?.length > 0 && (
        <section className=" Home_Three_Sec  MaxComponent mt-24 ">
          <div className="flex flex-col gap-7 items-center">
            <h1 className="text-4xl text-primary font-medium  bg-secondary w-full text-center  py-4 text-4xl font-medium text-primary title latest_blog_title ">
              Latest Blogs{" "}
            </h1>
            <p className="text-xl text-center w-[53rem] content">
              Nourish your skin with toxic-free cosmetic products. With offers
              you can't refuse.
            </p>
          </div>

          <div className="latest_news_swiper">
            <Swiper
              {...swiperConfig}
              pagination={true}
              modules={[Pagination, Autoplay, Keyboard]}
            >
              {response?.map((card, index) => (
                <SwiperSlide key={index}>
                  <NewsCard
                    key={index}
                    src={card.image}
                    title={card.title}
                    content={card.description}
                    id={card._id}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          <div className="flex justify-center my-24 viewMore-Container">
            <button
              className="w-1/4 py-2 font-bold text-primary bg-secondary viewMore"
              onClick={() => navigate("/allNews")}
            >
              VIEW MORE
            </button>
          </div>
        </section>
      )
    );
  };

  return <WithLoader Wrapped={Component} loading={load} />;
};

export default LatestNews;
