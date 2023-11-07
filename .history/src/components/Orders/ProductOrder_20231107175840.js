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
              <div style={{ display: "flex", gap: "40px" }}>
                <p className="title">{i?.productId?.name} </p>{" "}
                <p className="title" style={{ fontSize: "24px" }}>
                  {" "}
                  ${item?.total}
                </p>
              </div>
              <p className="orderId">Date : {item?.date?.slice(0, 10)}</p>{" "}
              <p className="orderId"> Sub-Total ${item?.subTotal}</p>{" "}
              <p className="orderId">
                {" "}
                Membership Discount : ${item?.memberShip}
              </p>{" "}
              <p className="orderId"> Total : ${item?.total}</p>
              <p className="orderId" style={{ fontWeight: "bold" }}>
                OrderId : ${item?.orderId}
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
                <button>Track Order</button>
              </div>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default ProductOrder;
