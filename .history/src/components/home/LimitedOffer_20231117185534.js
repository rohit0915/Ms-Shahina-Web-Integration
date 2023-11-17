/** @format */

import React, { useEffect, useState } from "react";
import { getLimitedOffer } from "../../Repository/Api";
import OfferDrawer from "../Drawer/OfferDrawer";
import Loader from "../Loader/Loader";

const LimitedOffer = () => {
  const [open, setOpen] = useState(false);
  const [response, setResponse] = useState([]);
  const [load, setLoad] = useState(false);

  async function fetchHandler() {
    setLoad(true);
    await getLimitedOffer(setResponse, "offer");
    setLoad(false);
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

  return (
    <>
      <OfferDrawer onClose={onClose} open={open} />
      {load ? (
        <Loader />
      ) : (
        
      )}
    </>
  );
};

export default LimitedOffer;
