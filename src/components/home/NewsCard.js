/** @format */

import React from "react";
import { Link } from "react-router-dom";
import { View_description } from "../../Helper/Herlper";
import { ImageLazyLoading } from "../../utils/helpingComponent";

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
          <h3 className="font-medium  text-primary title">
            {title?.substr(0, 100)}
          </h3>
          <Link to={`/news/${id}`}>
            <ImageLazyLoading img={src} alt={""} className="w-full h-auto" />
          </Link>
          <p className="font-normal desc">{textTransformation(content)} </p>
        </div>
        <Link to={`/news/${id}`}>
          <button>Read More</button>
        </Link>
      </div>
    </section>
  );
};

export default NewsCard;
