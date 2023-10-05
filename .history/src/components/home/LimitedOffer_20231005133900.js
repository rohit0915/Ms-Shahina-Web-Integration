/** @format */

import React, { useEffect, useState } from "react";
import { getLimitedOffer } from "../../Repository/Api";
import OfferDrawer from "../Drawer/OfferDrawer";

const LimitedOffer = () => {
  const [open, setOpen] = useState(false);
  const [ response , setResponse ] = useState([])

  function fetchHandler () {
    getLimitedOffer(setResponse ,'offer')
  }

  useEffect(() => {
    fetchHandler()
  },[])


  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  return (
    <>
      <OfferDrawer onClose={onClose} open={open}  />
      <div className="Limited_offer">
        <img src={response?.[0]?.bannerImage} alt="" onClick={() => showDrawer()} />
      </div>
    </>
  );
};

export default LimitedOffer;
