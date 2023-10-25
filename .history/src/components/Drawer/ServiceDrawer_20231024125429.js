/** @format */

import React, { useEffect, useState } from "react";
import { Drawer } from "antd";
import { Link } from "react-router-dom";
import { getServiceProduct } from "../../Repository/Api";
import { Alert } from "antd";

const ServiceDrawer = ({ open, onClose, title, id }) => {
  const [name, setName] = useState("");
  const [response, setResponse] = useState([]);

  const fetchHandler = () => {
    getServiceProduct(setResponse, id, setName);
  };

  useEffect(() => {
    if (open === true) {
      fetchHandler();
    }
  }, [open]);

  const Heading = name ? name : title;

  console.log(response)

  return (
    <Drawer
      placement="bottom"
      closable={false}
      onClose={onClose}
      open={open}
      size={"large"}
    >
      <div className="Service_Drawer">
        <div className="heading">
          <p> {`${Heading} Treatment`} </p>
          <img src="/Image/14.png" alt="" onClick={() => onClose()} />
        </div>

        <div className="product-container">
          {response && response?.length === 0 ? (
            <Alert
              message="No Related Service Found"
              type="info"
              className="Alert"
            />
          ) : (
            response?.map((i, index) => (
              <div className="Items" key={index}>
                <img src={i.images?.[0]?.img} alt="" />
                <p className="title"> {i.name} </p>
                <p className="member">Member Price</p>
                <span className="price-container">
                  <span className="selling-price"> ${i.discountActive === true ? i.discountPrice : i.price}</span>
                  {i.discountActive === true && }
                  
                </span>

                <p className="interes">
                  Pay with interest free installments with Cherry
                </p>
                <Link to='/paymentplan'>
                CLICK TO LEARN MORE
                </Link>

                <Link to={`/services/${i._id}`}>
                  <button>VIEW MORE</button>
                </Link>
              </div>
            ))
          )}
        </div>
      </div>
    </Drawer>
  );
};

export default ServiceDrawer;
