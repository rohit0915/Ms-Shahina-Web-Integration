/** @format */

import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getServiceOrder } from "../../Repository/Api";

const ServiceOrder = ({ isSliced, heading, padded, isMore }) => {
  const [order, setOrder] = useState([]);
  const [addOnServicePresent, setAddOnServicePresent] = useState(false);
  const [regularServicePresent, setRegularServicePresent] = useState(false);
  const navigate = useNavigate();

  const fetchHandler = () => {
    getServiceOrder("Pending", setOrder);
  };

  useEffect(() => {
    fetchHandler();
  }, []);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "instant",
    });
  }, []);
  useEffect(() => {
    const isAnyAddOnServicePresent = order.some(
      (item) => item?.AddOnservicesSchema?.length > 0
    );
    setAddOnServicePresent(isAnyAddOnServicePresent);
  }, [order]);

  useEffect(() => {
    const isRegularServicePresent = order.some(
      (item) => item?.services?.length > 0
    );
    setRegularServicePresent(isRegularServicePresent);
  }, [order]);

  return (
    <div className={`${!padded && "user_product_order_container"}`}>
      <div className="user_product_order">
        {order?.length === 0 ? (
          <div className="Not-Found">
            <img src="/Image/out-of-stock.png" alt="" />
            <h5> You have no upcoming service orders.</h5>
          </div>
        ) : (
          <>
          {!heading && <p className="title">Upcoming Service</p>}
         {isSliced ? () : <></>}
           
          </>
        )}
      </div>
    </div>
  );
};

export default ServiceOrder;
