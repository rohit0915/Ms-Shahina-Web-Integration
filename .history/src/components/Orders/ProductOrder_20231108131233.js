/** @format */

import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getProductOrder, trackOrder } from "../../Repository/Api";

const ProductOrder = () => {
  const [order, setOrder] = useState([]);
  const navigate = useNavigate();

  const fetchHandler = () => {
    getProductOrder(setOrder);
  };

  useEffect(() => {
    fetchHandler();
  }, []);

  const TractStart = (id) => {
    trackOrder(id);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="user_product_order">
      <div className="title_account_second">Product Order history</div>
      {order?.length === 0 ?  <div className="Not-Found">
          <img src="/Image/out-of-stock.png" alt="" />
          <h5> No regular services are present.</h5>
        </div> : <></>}
     
    </div>
  );
};

export default ProductOrder;
