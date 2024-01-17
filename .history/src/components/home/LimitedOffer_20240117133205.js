/** @format */

import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { getLimitedOffer, getServiceCount } from "../../Repository/Api";
import { isAuthenticated } from "../../store/authSlice";
import OfferDrawer from "../Drawer/OfferDrawer";

const LimitedOffer = () => {
  const [open, setOpen] = useState(false);
  const [response, setResponse] = useState([]);
  const [showOffer, setShowOffer] = useState(false);
  const isLoggedIn = useSelector(isAuthenticated);

  function fetchHandler() {
    getLimitedOffer(setResponse, "offer");
  }

  useEffect(() => {
    fetchHandler();
  }, []);

  useEffect(() => {
    if (isLoggedIn) {
      getServiceCount();
    }
  }, [isLoggedIn]);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  return (
    <>
      <OfferDrawer onClose={onClose} open={open} />
      {response?.[0]?.bannerImage && (
        <div className="Limited_offer">
          <img
            src={response?.[0]?.bannerImage}
            alt=""
            onClick={() => showDrawer()}
          />
        </div>
      )}
    </>
  );
};

export default LimitedOffer;
