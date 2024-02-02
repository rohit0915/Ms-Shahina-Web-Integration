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
        
          {isSliced === true ? (
            <>
              {order?.slice(0, 4)?.map((item) =>
                item?.products?.map((i, index) => (
                  <div className="Items" key={`productOrder${index}`}>
                    <img
                      src={i.productId?.productImages?.[0]?.image}
                      alt=""
                      className="thumb"
                    />
                    <div className="content">
                      <div
                        style={{
                          display: "flex",
                          gap: "40px",
                          alignItems: "center",
                        }}
                        className="Spec"
                      >
                        <p className="title" style={{ margin: 0 }}>
                          {i?.productId?.name}{" "}
                        </p>{" "}
                        <p className="title" style={{ fontSize: "24px" }}>
                          {" "}
                          ${i?.price}
                        </p>
                      </div>
                      <p
                        className="orderId"
                        style={{
                          fontWeight: "bold",
                          fontSize: "20px",
                        }}
                      >
                        OrderId : {item?.orderId}
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
                          onClick={() =>
                            navigate(`/product/${i?.productId?._id}`)
                          }
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

              {order?.slice(0, 4)?.map((item) =>
                item?.frequentlyBuyProductSchema?.map((i, index) => (
                  <div className="Items" key={`frequent${index}`}>
                    <img
                      src={
                        i.frequentlyBuyProductId?.products?.[0]
                          ?.productImages?.[0]?.image
                      }
                      alt=""
                      className="thumb"
                    />
                    <div className="content">
                      <div className="Related_Product_Container">
                        <p
                          className="title Related_Product"
                          style={{ margin: 0 }}
                        >
                          {i.frequentlyBuyProductId?.products?.map(
                            (product, index) => (
                              <>
                                <span> {product.name} </span>
                                <img
                                  src="/Image/96.png"
                                  key={`Product_Image_Carousel_Images_Img${index}`}
                                  className="plus"
                                  alt=""
                                />
                              </>
                            )
                          )}
                        </p>{" "}
                        <p className="title" style={{ fontSize: "24px" }}>
                          {" "}
                          ${i?.price}
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
                          onClick={() =>
                            navigate(`/product/${i?.productId?._id}`)
                          }
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
            </>
          ) : (
            <>
              {order?.map((item) =>
                item?.products?.map((i, index) => (
                  <div className="Items" key={`productOrder${index}`}>
                    <img
                      src={i.productId?.productImages?.[0]?.image}
                      alt=""
                      className="thumb"
                    />
                    <div className="content">
                      <div
                        style={{
                          display: "flex",
                          gap: "40px",
                          alignItems: "center",
                        }}
                        className="Spec"
                      >
                        <p className="title" style={{ margin: 0 }}>
                          {i?.productId?.name}{" "}
                        </p>{" "}
                        <p className="title" style={{ fontSize: "24px" }}>
                          {" "}
                          ${i?.price}
                        </p>
                      </div>
                      <p
                        className="orderId"
                        style={{
                          fontWeight: "bold",
                          fontSize: "20px",
                        }}
                      >
                        OrderId : {item?.orderId}
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
                          onClick={() =>
                            navigate(`/product/${i?.productId?._id}`)
                          }
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

              {order?.map((item) =>
                item?.frequentlyBuyProductSchema?.map((i, index) => (
                  <div className="Items" key={`frequent${index}`}>
                    <img
                      src={
                        i.frequentlyBuyProductId?.products?.[0]
                          ?.productImages?.[0]?.image
                      }
                      alt=""
                      className="thumb"
                    />
                    <div className="content">
                      <div className="Related_Product_Container">
                        <p
                          className="title Related_Product"
                          style={{ margin: 0 }}
                        >
                          {i.frequentlyBuyProductId?.products?.map(
                            (product, index) => (
                              <>
                                <span> {product.name} </span>
                                <img
                                  src="/Image/96.png"
                                  key={`Product_Image_Carousel_Images_Img${index}`}
                                  className="plus"
                                  alt=""
                                />
                              </>
                            )
                          )}
                        </p>{" "}
                        <p className="title" style={{ fontSize: "24px" }}>
                          {" "}
                          ${i?.price}
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
                          onClick={() =>
                            navigate(`/product/${i?.productId?._id}`)
                          }
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
            </>
          )}
        </>
      )}
    </div>
  );
};

export default ProductOrder;
