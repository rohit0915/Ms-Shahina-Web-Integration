/** @format */

import React, { useEffect, useState } from "react";
import { getLimitedOffer } from "../../Repository/Api";
import { ImageLazyLoading } from "../../utils/helpingComponent";
import OfferDrawer from "../Drawer/OfferDrawer";

const LimitedOffer = () => {
  const [open, setOpen] = useState(false);
  const [response, setResponse] = useState([]);

  function fetchHandler() {
    getLimitedOffer(setResponse, "offer");
  }

  useEffect(() => {
    fetchHandler();
  }, []);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  const OfferComponent = () => {
    if (response?.[0]?.bannerImage) {
      return (
        <div className="Limited_offer" onClick={() => showDrawer()}>
          <ImageLazyLoading img={response?.[0]?.bannerImage} alt={""} />
        </div>
      );
    }
  };

  return (
    <>
      <OfferDrawer onClose={onClose} open={open} />
      {OfferComponent()}
    </>
  );
};

export default LimitedOffer;
