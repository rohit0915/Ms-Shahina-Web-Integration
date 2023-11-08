/** @format */

import React, { useEffect, useState } from "react";
import { Drawer } from "antd";
import { Link } from "react-router-dom";
import { getOfferService } from "../../Repository/Api";

const OfferDrawer = ({ open, onClose }) => {
  const [response, setResponse] = useState([]);

  function fetchHandler() {
    getOfferService(setResponse);
  }

  useEffect(() => {
    fetchHandler();
  }, []);

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
          {response?.map((i, index) => (
            <div className="Items" key={index}>
              {/* <img src="/Image/33.png" className="offer" alt="" /> */}
              <div className="offer_Discount" >
              

              </div>
              <img src={i.images?.[0]?.img} alt="" className="thumbnail" />
              <p className="title"> {i.name} </p>
              <span className="price-container">
                <span className="selling-price"> ${i.discountPrice} </span>
              </span>

              <p className="interes">
                Pay with interest free installments with Cherry
              </p>
              <Link to="/paymentplan">CLICK TO LEARN MORE</Link>

              <Link to={`/services/${i._id}`}>
                <button>VIEW MORE</button>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </Drawer>
  );
};

export default OfferDrawer;
