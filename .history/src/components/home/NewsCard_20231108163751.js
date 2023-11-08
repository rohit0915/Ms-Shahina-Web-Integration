/** @format */

import React from "react";

const NewsCard = ({ src, title, content }) => {
  const textTransformation = (content) => {
    if (content?.length > 100) {
      return `${content?.substr(0, 100)}...`;
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
      {/* <div
        className="flex items-center gap-2 font-semibold text-lg mt-6 cursor-pointer"
        onClick={() => navigate("/allNews")}
      >
        READ MORE <img src="/asessts/arrow.svg" alt="arrow" />
      </div> */}
    </section>
  );
};

export default NewsCard;
