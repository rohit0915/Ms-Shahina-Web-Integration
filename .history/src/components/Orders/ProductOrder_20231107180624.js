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
              <div
                style={{ display: "flex", gap: "40px", alignItems: "center" }}
              >
                <p className="title" style={{ margin: 0 }}>
                  {i?.productId?.name}{" "}
                </p>{" "}
                <p className="title" style={{ fontSize: "24px" }}>
                  {" "}
                  ${item?.total}
                </p>
              </div>
              <p
                className="orderId"
                style={{
                  fontWeight: "bold",
                  fontSize: "20px",
                }}
              >
                OrderId : ${item?.orderId}
              </p>{" "}
              <p className="orderId" style={{ color: "#A9A9A9" }}>
                Date : {item?.date?.slice(0, 10)}
              </p>{" "}
              <p className="orderId" style={{ color: "#A9A9A9" }}>
                {" "}
                Sub-Total ${item?.subTotal}
              </p>{" "}
              <p className="orderId " style={{ color: "#A9A9A9" }}>
                {" "}
                Membership Discount : ${item?.memberShip}
              </p>{" "}
              <div className="button-container">
                <button
                  onClick={() => navigate(`/product/${i?.productId?._id}`)}
                  style={{
                    background: "#042b26",
                    border: "1px solid #042b26",
                    color: "#e5d896",
                  }}
                >
                  View Product
                </button>
                <button onClick={() => TractStart(i?.productId?._id)}>
                  Track Order
                </button>
              </div>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default ProductOrder;
