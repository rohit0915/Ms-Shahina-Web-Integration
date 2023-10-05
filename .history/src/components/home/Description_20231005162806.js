/** @format */

import React, { useEffect, useState } from "react";
import DescriptionView from "./DescriptionView";
import { OUR_PRODUCT, WHO_WE_ARE } from "../../constants/constant";
import { getLimitedOffer } from "../../Repository/Api";

const Description = () => {
  const [response, setResponse] = useState([]);

  function fetchHandler() {
    getLimitedOffer(setResponse, "product");
  }

  useEffect(() => {
    fetchHandler();
  }, []);

  return (
    <section className="MaxComponent">
      {response?.[0] && (
        <DescriptionView
          src={response?.[0]?.bannerImage}
          title={response?.[0]?.bannerName}
          content={response?.[0]?.title}
          desc={response?.[0]?.desc}
          btnName="EXPLORE PRODUCTS"
          link={"/shop"}
        />
      )}

      {response?.[1] && (
        <DescriptionView
          src={response?.[1]?.bannerImage}
          title={response?.[1]?.bannerName}
          content={response?.[1]?.title}
          desc={response?.[1]?.desc}
          btnName={"VIEW MORE"}
          styles={"mb-6 text-left"}
          reverse={"flex-row-reverse"}
          link={"/aboutus"}
        />
      )}

      {response?.[2] && (
        <DescriptionView
          src={response?.[2]?.bannerImage}
          title={response?.[2]?.bannerName}
          desc={response?.[2]?.title}
          desc1={response?.[2]?.desc}
        />
      )}
    </section>
  );
};

export default Description;
