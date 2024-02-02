/** @format */

import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getProductOrder } from "../../Repository/Api";

const ProductOrder = ({ isSliced, heading }) => {
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
    <div style={{padding : '20px'}}></div>
  
  );
};

export default ProductOrder;
