/** @format */

import React, { useEffect, useState } from "react";
import { Drawer } from "antd";
import { Link } from "react-router-dom";
import { getServiceProduct } from "../../Repository/Api";
import { Alert } from "antd";

const ServiceDrawer = ({ open, onClose, title, id }) => {
  const [name, setName] = useState("");  const [response, setResponse] = useState([]);

  const fetchHandler = () => {
    getServiceProduct(setResponse, id, setName);
  };

  useEffect(() => {
    if (open === true) {
      fetchHandler();
    }
  }, [open]);

  const Heading = name ? name : title;

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
                  <span className="selling-price"> ${i.discountPrice} </span>
                  <span className="mrp">${i.price} </span>
                </span>

                <p className="interes">
                  Pay with interest free installments with Cherry
                </p>
                <a>CLICK TO LEARN MORE</a>

                <Link to={`/services/${Heading}`}>
                  <button>VIEW MORE</button>
                </Link>
              </div>
            ))
          )}

          {/* <div className="Items">
            <img src="/Image/16.png" alt="" />
            <p className="title">IPL Acne Treatment</p>
            <p className="member">Member Price</p>
            <span className="price-container">
              <span className="selling-price"> $499</span>
              <span className="mrp">$525.00</span>
            </span>

            <p className="interes">
              Pay with interest free installments with Cherry
            </p>
            <a>CLICK TO LEARN MORE</a>
            <Link to={link}>
              <button>VIEW MORE</button>
            </Link>
          </div>

          <div className="Items">
            <img src="/Image/17.png" alt="" />
            <p className="title">Microneedling</p>
            <p className="member">Member Price</p>
            <span className="price-container">
              <span className="selling-price"> $499</span>
              <span className="mrp">$525.00</span>
            </span>

            <p className="interes">
              Pay with interest free installments with Cherry
            </p>
            <a>CLICK TO LEARN MORE</a>
            <Link to={link}>
              <button>VIEW MORE</button>
            </Link>
          </div>

          <div className="Items">
            <img src="/Image/18.png" alt="" />
            <p className="title">Acne Peel with Extractions</p>
            <p className="member">Member Price</p>
            <span className="price-container">
              <span className="selling-price"> $499</span>
              <span className="mrp">$525.00</span>
            </span>

            <p className="interes">
              Pay with interest free installments with Cherry
            </p>
            <a>CLICK TO LEARN MORE</a>
            <Link to={link}>
              <button>VIEW MORE</button>
            </Link>
          </div>

          <div className="Items">
            <img src="/Image/19.png" alt="" />
            <p className="title">RF Microneedling</p>
            <p className="member">Member Price</p>
            <span className="price-container">
              <span className="selling-price"> $499</span>
              <span className="mrp">$525.00</span>
            </span>

            <p className="interes">
              Pay with interest free installments with Cherry
            </p>
            <a>CLICK TO LEARN MORE</a>
            <Link to={link}>
              <button>VIEW MORE</button>
            </Link>
          </div>

          <div className="Items">
            <img src="/Image/20.png" alt="" />
            <p className="title">PRF Face Rejuvenation</p>
            <p className="member">Member Price</p>
            <span className="price-container">
              <span className="selling-price"> $499</span>
              <span className="mrp">$525.00</span>
            </span>

            <p className="interes">
              Pay with interest free installments with Cherry
            </p>
            <a>CLICK TO LEARN MORE</a>
            <Link to={link}>
              <button>VIEW MORE</button>
            </Link>
          </div>

          <div className="Items">
            <img src="/Image/21.png" alt="" />
            <p className="title">Erbium Laser Resurfacing</p>
            <p className="member">Member Price</p>
            <span className="price-container">
              <span className="selling-price"> $499</span>
              <span className="mrp">$525.00</span>
            </span>

            <p className="interes">
              Pay with interest free installments with Cherry
            </p>
            <a>CLICK TO LEARN MORE</a>
            <Link to={link}>
              <button>VIEW MORE</button>
            </Link>
          </div>

          <div className="Items">
            <img src="/Image/22.png" alt="" />
            <p className="title">Jetpeel Facial</p>
            <p className="member">Member Price</p>
            <span className="price-container">
              <span className="selling-price"> $499</span>
              <span className="mrp">$525.00</span>
            </span>

            <p className="interes">
              Pay with interest free installments with Cherry
            </p>
            <a>CLICK TO LEARN MORE</a>
            <Link to={link}>
              <button>VIEW MORE</button>
            </Link>
          </div>

          <div className="Items">
            <img src="/Image/20.png" alt="" />
            <p className="title">PRF Face Rejuvenation</p>
            <p className="member">Member Price</p>
            <span className="price-container">
              <span className="selling-price"> $499</span>
              <span className="mrp">$525.00</span>
            </span>

            <p className="interes">
              Pay with interest free installments with Cherry
            </p>
            <a>CLICK TO LEARN MORE</a>
            <Link to={link}>
              <button>VIEW MORE</button>
            </Link>
          </div> */}
        </div>
      </div>
    </Drawer>
  );
};

export default ServiceDrawer;
