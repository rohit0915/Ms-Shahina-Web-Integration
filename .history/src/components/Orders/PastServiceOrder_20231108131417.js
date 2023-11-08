/** @format */

import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getServiceOrder } from "../../Repository/Api";

const PastServiceOrder = () => {
  const [order, setOrder] = useState([]);
  const [addOnServicePresent, setAddOnServicePresent] = useState(false);
  const [regularServicePresent, setRegularServicePresent] = useState(false);
  const navigate = useNavigate();

  const fetchHandler = () => {
    getServiceOrder("Done", setOrder);
  };

  useEffect(() => {
    fetchHandler();
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
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
    <div className="user_product_order">
      <div className="title_account_second">Past Service history</div>
      {order?.length === 0 ? (
        <div className="Not-Found">
          <img src="/Image/out-of-stock.png" alt="" />
          <h5> You have no past service orders.</h5>
        </div>
      ) : (

      
    </div>
  );
};

export default PastServiceOrder;
