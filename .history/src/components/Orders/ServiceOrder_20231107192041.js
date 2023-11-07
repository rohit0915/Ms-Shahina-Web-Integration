/** @format */

import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getServiceOrder } from "../../Repository/Api";

const ServiceOrder = () => {
  const [order, setOrder] = useState([]);
  const navigate = useNavigate();

  const fetchHandler = () => {
    getServiceOrder("Pending", setOrder);
  };

  useEffect(() => {
    fetchHandler();
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  console.log(order);

  return (
    <div className="user_product_order">
      <div className="title_account_second">Upcoming Service history</div>

      {order?.map((item) =>
        item?.services?.map((i, index) => (
          <div className="Items" key={index}>
            <img
              src={i.serviceId?.images?.[0]?.img}
              alt=""
              className="thumb"
            />
            <div className="content">
              <div
                style={{ display: "flex", gap: "40px", alignItems: "center" }}
              >
                <p className="title" style={{ margin: 0 }}>
                  {i?.serviceId?.name}{" "}
                </p>{" "}
                <p className="title" style={{ fontSize: "24px" }}>
                  {" "}
                  ${i?.serviceId?.price}
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
              </div>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default ServiceOrder;
