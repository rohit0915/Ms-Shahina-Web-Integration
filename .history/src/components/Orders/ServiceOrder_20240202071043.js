/** @format */

import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getServiceOrder } from "../../Repository/Api";

const ServiceOrder = ({ isSliced, heading, padded, isMore }) => {
  const [order, setOrder] = useState([]);
  const [addOnServicePresent, setAddOnServicePresent] = useState(false);
  const [regularServicePresent, setRegularServicePresent] = useState(false);
  const navigate = useNavigate();

  const fetchHandler = () => {
    getServiceOrder("Pending", setOrder);
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
    <div className={`${!padded && "user_product_order_container"}`}>
      <div className="user_product_order">
        {order?.length === 0 ? (
          <div className="Not-Found">
            <img src="/Image/out-of-stock.png" alt="" />
            <h5> You have no upcoming service orders.</h5>
          </div>
        ) : (
          <>
          {!heading && <p className="title">Upcoming Service</p>}
         {isSliced ? ()}
            {regularServicePresent === true ? (
              <div className="service-upcoming-order">
                {order?.map((item) =>
                  item?.services?.map((i, index) => (
                    <div className="Items" key={`Service${index}`}>
                      <img
                        src={i.serviceId?.images?.[0]?.img}
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
                            {i?.serviceId?.name}{" "}
                          </p>{" "}
                          <p className="title" style={{ fontSize: "24px" }}>
                            {" "}
                            $
                            {i.memberprice
                              ? i.memberprice
                              : i?.serviceId?.price}
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
                        <p className="orderId " style={{ color: "#A9A9A9" }}>
                          {" "}
                          Membership Discount : ${item?.memberShip}
                        </p>{" "}
                        <p className="orderId " style={{ color: "#A9A9A9" }}>
                          {" "}
                          Offer Discount : ${item?.offerDiscount}
                        </p>{" "}
                        <div className="button-container">
                          <button
                            onClick={() =>
                              navigate(`/indi-services/${i?.serviceId?._id}`)
                            }
                            style={{
                              background: "#042b26",
                              border: "1px solid #042b26",
                              color: "#e5d896",
                            }}
                          >
                            View Service
                          </button>
                        </div>
                      </div>
                    </div>
                  ))
                )}
              </div>
            ) : (
              <div className="Not-Found">
                <img src="/Image/out-of-stock.png" alt="" />
                <h5> No regular services are present.</h5>
              </div>
            )}
            <div
              className="title_account_second"
              style={{ textTransform: "capitalize" }}
            >
              AddOn Service's
            </div>
            {addOnServicePresent === true ? (
              <div className="service-upcoming-order">
                {order?.map((item) =>
                  item?.AddOnservicesSchema?.map((i, index) => (
                    <div className="Items" key={`SeviceIndex${index}`}>
                      <img
                        src={i.addOnservicesId?.image}
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
                            {i?.addOnservicesId?.name}{" "}
                          </p>{" "}
                          <p className="title" style={{ fontSize: "24px" }}>
                            {" "}
                            ${i?.addOnservicesId?.price}
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
                        <p className="orderId " style={{ color: "#A9A9A9" }}>
                          {" "}
                          Membership Discount : ${item?.memberShip}
                        </p>{" "}
                        <p className="orderId " style={{ color: "#A9A9A9" }}>
                          {" "}
                          Offer Discount : ${item?.offerDiscount}
                        </p>{" "}
                      </div>
                    </div>
                  ))
                )}
              </div>
            ) : (
              <div className="Not-Found">
                <img src="/Image/out-of-stock.png" alt="" />
                <h5> No add-on services are present.</h5>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default ServiceOrder;
