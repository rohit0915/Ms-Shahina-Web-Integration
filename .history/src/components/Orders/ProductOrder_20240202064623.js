/** @format */

import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getProductOrder } from "../../Repository/Api";

const ProductOrder = ({ isSliced }) => {
  const [order, setOrder] = useState([]);
  const navigate = useNavigate();

  const fetchHandler = () => {
    getProductOrder(setOrder);
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

  return (
    <div className="user_product_order">
      {order?.length === 0 ? (
        <div className="Not-Found">
          <img src="/Image/out-of-stock.png" alt="" />
          <h5> You have no past orders.</h5>
        </div>
      ) : (
        <>
        {isSliced === true ?  : <></>}
         
        </>
      )}
    </div>
  );
};

export default ProductOrder;
