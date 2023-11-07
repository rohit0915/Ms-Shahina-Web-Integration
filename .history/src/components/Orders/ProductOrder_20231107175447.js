/** @format */

import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getProductOrder } from "../../Repository/Api";

const ProductOrder = () => {
  const [order, setOrder] = useState([]);
  const navigate = useNavigate();

  const fetchHandler = () => {
    getProductOrder(setOrder);
  };

  useEffect(() => {
    fetchHandler();
  }, []);

  console.log(order);

  return (
    <div className="user_product_order">
      <div className="title_account_second">Product Order history</div>

      {order?.map((item) =>
        item?.products?.map((i, index) => (
          <div className="Items" key={index}>
            <img
              src={i.productId?.productImages?.[0]?.image}
              alt=""
              className="thumb"
            />
            <div className="content">
              <div style={{ display: "flex", gap: "10px" }}>
                <p className="title">{i?.productId?.name} </p>{" "}
                <p className="title" style={{ fontSize: "24px" }}> ${item?.total}</p>
                <span style={{ fontSize: "24px" }}>${item?.total}</span>{" "}
              </div>
              <p className="orderId">Date : {item?.date?.slice(0, 10)}</p>{" "}
              <p className="orderId"> Sub-Total ${item?.subTotal}</p>{" "}
              <p className="orderId">
                {" "}
                Membership Discount : ${item?.memberShip}
              </p>{" "}
              <p className="orderId"> Total : ${item?.total}</p>
              <div className="button-container">
                <button
                  onClick={() => navigate(`/product/${i?.productId?._id}`)}
                >
                  View Product
                </button>
              </div>
            </div>
            <div className="content">
              <p className="orderId">OrderId : ${item?.orderId}</p>{" "}
              <p className="orderId">Payment Status : {item?.paymentStatus}</p>{" "}
              <p className="orderId">Order Status : {item?.orderStatus}</p>{" "}
              <p className="orderId">
                Delivery Status : {item?.deliveryStatus}
              </p>{" "}
              <div className="button-container">
                <button>Track</button>
              </div>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default ProductOrder;
