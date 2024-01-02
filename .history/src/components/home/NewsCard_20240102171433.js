/** @format */

import React from "react";
import { View_description } from "../../Helper/Herlper";

const NewsCard = ({ src, title, content }) => {
  const textTransformation = (content) => {
    if (content?.length > 100) {
      return `${content?.substr(0, 100)}...`
      <View_description Description  />
      ;
    } else {
      return content;
    }
  };

  return (
    <section className="p-3 w-[430px] NewsCard ">
      <div className="my-2 Upper_Div"  >
        <img src={src} className="w-full h-auto" alt="news" />
        <h3 className="my-6 font-medium text-3xl text-primary title">
          {title}
        </h3>
        <p className="text-xl font-normal desc">
          {textTransformation(content)}{" "}
        </p>
      </div>
    </section>
  );
};

export default NewsCard;