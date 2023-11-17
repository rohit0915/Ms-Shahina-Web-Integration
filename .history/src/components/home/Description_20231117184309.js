/** @format */

import React, { useEffect, useState } from "react";
import DescriptionView from "./DescriptionView";
import { getLimitedOffer, getAboutUs } from "../../Repository/Api";
import WithLoader from "../Wrapped/WithLoader";

const Description = () => {
  const [response, setResponse] = useState([]);
  const [partners, setPartner] = useState([]);
  const [aboutus, setabvoutUs] = useState({});
  const [load, setLoad] = useState(false);

  async function fetchHandler() {
    setLoad(true);
    await getLimitedOffer(setResponse, "product");
    await getLimitedOffer(setPartner, "Partner");
    await getAboutUs(setabvoutUs);
    setLoad(false);
  }

  useEffect(() => {
    fetchHandler();
  }, []);

  const Component = () => {
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

        {aboutus && (
          <DescriptionView
            src={aboutus?.image}
            title={aboutus?.title}
            content={aboutus?.designation}
            desc={aboutus?.description?.[0]}
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

  return <WithLoader Wrapped={Component} loading={load} />;
};

export default Description;
