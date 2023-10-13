/** @format */

import React, { useEffect, useState } from "react";
import DescriptionView from "./DescriptionView";
import { getLimitedOffer ,getAboutUs } from "../../Repository/Api";

const Description = () => {
  const [response, setResponse] = useState([]);
  const [ partners , setPartner ] = useState([])
  const [ aboutus , setabvoutUs] = useState({})

  function fetchHandler() {
    getLimitedOffer(setResponse, "product");

  }

  useEffect(() => {
    fetchHandler();
    getLimitedOffer(setPartner, "Partner");
    getAboutUs(setabvoutUs);
  }, []);

console.log(aboutus)


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

      {aboutus?.[0] && (
        <DescriptionView
          src={aboutus?.[0]?.bannerImage}
          title={aboutus?.[0]?.bannerName}
          content={aboutus?.[0]?.title}
          desc={image?.[0]?.desc}
          btnName={"VIEW MORE"}
          styles={"mb-6 text-left"}
          reverse={"flex-row-reverse"}
          link={"/aboutus"}
        />
      )}

      {partners?.[0] && (
        <DescriptionView
          src={partners?.[0]?.partnerImage?.[0]}
          title={partners?.[0]?.title}
          desc1={partners?.[0]?.desc}
        />
      )}
    </section>
  );
};

export default Description;
