/** @format */

import React from "react";
import { Link } from "react-router-dom";
import { View_description } from "../../Helper/Herlper";

const NewsCard = ({ src, title, content, id }) => {
  const textTransformation = (content) => {
    if (content?.length > 100) {
      return <View_description description={content?.substr(0, 100)} />;
    } else {
      return <View_description description={content} />;
    }
  };

  return (
    <section className="p-3 w-[430px] NewsCard ">
      <div className="my-2 Upper_Div">
        <div>
          <ImageLazyLoading
            img={response?.image}
            alt={""}
            className="object-fill Img-C"
          />
          <img src={src} className="w-full h-auto" alt="news" />
          <h3 className="font-medium  text-primary title">
            {title?.substr(0, 100)}
          </h3>
          <p className="font-normal desc">{textTransformation(content)} </p>
        </div>
        <Link to={`/news/${id}`}>
          <button>
            READ MORE
            <img className="arrow-Img" src="/Image/Arrow 1.svg" alt="" />
          </button>
        </Link>
      </div>
    </section>
  );
};

export default NewsCard;
