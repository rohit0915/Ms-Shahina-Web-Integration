/** @format */

import React, { useEffect, useState } from "react";
import { getShippingPrivacy } from "../Repository/Api";

const ShippingPrivacy = () => {
  const [shippingPrivacy, setShippingPrivacy] = useState();

  useEffect(() => {
    getShippingPrivacy(setShippingPrivacy);
  }, []);
  return <div>ShippingPrivacy</div>;
};

export default ShippingPrivacy;
