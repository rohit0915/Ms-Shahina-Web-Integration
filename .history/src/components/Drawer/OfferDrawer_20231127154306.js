/** @format */

import React, { useEffect, useState } from "react";
import { Drawer } from "antd";
import { Link, useNavigate } from "react-router-dom";
import { getOfferService } from "../../Repository/Api";

const OfferDrawer = ({ open, onClose }) => {
  const [response, setResponse] = useState([]);
  const [load, setLoad] = useState(false);
  const navigate = useNavigate();

  async function fetchHandler() {
    try{

    }catch{}finally{}
    getOfferService(setResponse);
  }

  useEffect(() => {
    if (open) {
      fetchHandler();
    }
  }, [open]);

  const navigationHandler = (id) => {
    navigate(`/indi-services/${id}`);
    onClose();
  };

  return (
    <Drawer
      placement="bottom"
      closable={false}
      onClose={onClose}
      open={open}
      size={"large"}
    >
      <div className="Service_Drawer offer_Drawer">
        <div className="heading">
          <div>
            <img src="/Image/32.png" alt="" />
            <p>Limited Time Offers</p>
          </div>
          <img src="/Image/14.png" alt="" onClick={() => onClose()} />
        </div>

        <div className="product-container">
          {response?.length === 0 ? (
            <div className="Not-Found">
              <img src="/Image/no-results.png" alt="" />
              <h5> Sorry, we couldn't find any matching services</h5>
            </div>
          ) : (
            response?.map((i, index) => (
              <div className="Items" key={index}>
                {/* <div className="offer_Discount">
                  <img src="/Image/offerImage.png" alt="" />
                  <p>{i.discount}% OFF </p>
                </div> */}
                <img
                  onClick={() => navigationHandler(i._id)}
                  src={i.images?.[0]?.img}
                  alt=""
                  className="thumbnail cursor-pointer"
                />
                <p className="title"> {i.name} </p>
                <span className="price-container">
                  <p className="member">Limited Offer</p>
                  <span
                    className="mrp"
                    style={{
                      fontSize: "16px",
                      color: "#000",
                      textDecoration: "none",
                    }}
                  >
                    Regular Price{" "}
                  </span>
                </span>
                <span className="price-container">
                  <p className="member-price">${i.discountPrice} </p>
                  <span className="mrp">${i.price} </span>
                </span>

                <p className="interes">
                  Pay with interest free installments with Cherry
                </p>
                <Link to="/paymentplan">CLICK TO LEARN MORE</Link>

                <button onClick={() => navigationHandler(i._id)}>
                  VIEW MORE
                </button>
              </div>
            ))
          )}
        </div>
      </div>
    </Drawer>
  );
};

export default OfferDrawer;
