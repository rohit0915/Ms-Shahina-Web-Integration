/** @format */

import React, { useEffect, useState } from "react";
import { getProductOrder } from "../../Repository/Api";

const ProductOrder = () => {
  const [order, setOrder] = useState([]);

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
              <p className="title">{i?.productId?.name}</p>{" "}
              <p className="description">
                {i?.productId?.description?.substr(0, 200)}...
              </p>{" "}
              <p className="orderId">OrderId : ${item?.orderId}</p>{" "}
              <p className="orderId"> Sub-Total ${item?.subTotal}</p>{" "}
              <p className="orderId">
                {" "}
                Membership Discount : ${item?.memberShip}
              </p>{" "}
              <p className="orderId"> Total : {item?.total}</p>
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
