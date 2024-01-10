/** @format */

import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getShippingPrivacy } from "../Repository/Api";

const ShippingPrivacy = () => {
  const [shippingPrivacy, setShippingPrivacy] = useState();
  const navigate = useNavigate();

  function BackNavigation() {
    navigate(-1);
  }


  useEffect(() => {
    getShippingPrivacy(setShippingPrivacy);
  }, []);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "instant",
    });
  }, []);

  console.log(shippingPrivacy)

  return (
    <main className="service_details_page">
      <div className="Backward_Heading step_Heading" style={{ padding: 0 }}>
        <div>
          <img src="/Image/1.png" alt="" onClick={() => BackNavigation()} />
          <p style={{ width: "50%" }}></p>
        </div>
        <p className="title" style={{ textTransform: "uppercase" }}>
        Shipping Privacy
        </p>
      </div>

      {/* {response && (
        <div className="content privacy_policy" style={{ padding: "20px" }}>
          {response?.map((i, index) => (
            <p className="desc" key={index}>
              <View_description description={i.privacy} />
            </p>
          ))}
        </div>
      )} */}
    </main>
  );
};

export default ShippingPrivacy;
