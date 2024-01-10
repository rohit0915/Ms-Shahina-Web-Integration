/** @format */

import React, { useEffect, useState } from "react";
import { getShippingPrivacy } from "../Repository/Api";

const ShippingPrivacy = () => {
  const [shippingPrivacy, setShippingPrivacy] = useState();

  useEffect(() => {
    getShippingPrivacy(setShippingPrivacy);
  }, []);
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "instant",
    });
  }, []);

  return <div>ShippingPrivacy</div>;
};

export default ShippingPrivacy;
