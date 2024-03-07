/** @format */

import React, { useEffect, useState } from "react";
import { Drawer } from "antd";
import { Link } from "react-router-dom";
import { getServiceProduct, getServiceProductAuth } from "../../Repository/Api";
import { useSelector } from "react-redux";
import { isAuthenticated } from "../../store/authSlice";
import WithLoader from "../Wrapped/WithLoader";
import { ImageLazyLoading } from "../../utils/helpingComponent";

const ServiceDrawer = ({ open, onClose, title, id }) => {
  const [name, setName] = useState("");
  const [response, setResponse] = useState([]);
  const [load, setLoad] = useState(false);
  const isLoggedIn = useSelector(isAuthenticated);

  const fetchHandler = async () => {
    try {
      setLoad(true);
      if (isLoggedIn) {
        await getServiceProductAuth(setResponse, id, setName);
      } else {
        await getServiceProduct(setResponse, id, setName);
      }
      setLoad(false);
    } catch (e) {
      console.log(e);
    } finally {
      setLoad(false);
    }
  };

  useEffect(() => {
    if (open === true) {
      fetchHandler();
    }
  }, [open]);

  const Heading = name ? name : title;

  function priceFetcher(i) {
    if (i.multipleSize === false) {
      return (
        <>
          <span className="price-container">
            <p className="member" style={{ color: "red" }}>
              Member Price
            </p>
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
            <p className="member-price" style={{ color: "red" }}>
              ${i.mPrice}{" "}
            </p>
            <span className="mrp" style={{ textDecoration: "none" }}>
              ${i.price}{" "}
            </span>
          </span>
        </>
      );
    } else {
      const smallestPriceObject = i?.sizePrice?.reduce(
        (minPriceObject, currentObject) => {
          if (currentObject.mPrice < minPriceObject.mPrice) {
            return currentObject;
          } else {
            return minPriceObject;
          }
        },
        i?.sizePrice?.[0]
      );

      return (
        <>
          <span className="price-container">
            <p className="member" style={{ color: "red" }}>
              Member Price
            </p>
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
            <p className="member-price" style={{ color: "red" }}>
              ${smallestPriceObject?.mPrice}{" "}
            </p>
            <span className="mrp" style={{ textDecoration: "none" }}>
              ${smallestPriceObject?.price}{" "}
            </span>
          </span>
        </>
      );
    }
  }
  const Component = () => {
    function getHead() {
      if (Heading === "IV Injections") {
        return "IV Injections";
      } else {
        return `${Heading} Treatments`;
      }
    }

    return (
      <div className="Service_Drawer">
        <div className="heading">
          <p> {getHead()}</p>
          <img src="/Image/14.png" alt="" onClick={() => onClose()} />
        </div>

        <div className="product-container">
          {response?.length === 0 ? (
            <div className="Not-Found">
              <ImageLazyLoading
                img={"/Image/no-results.png"}
                alt={""}
                className=""
              />
              <h5> Sorry, we couldn't find any matching services</h5>
            </div>
          ) : (
            response?.map((i, index) => (
              <div className="Items" key={index}>
                <Link to={`/indi-services/${i._id}`}>
                  <ImageLazyLoading
                    img={i.images?.[0]?.img}
                    className="thumbnail"
                    alt={i.name}
                  />
                </Link>
                <p className="title"> {i.name} </p>
                {priceFetcher(i)}
                <p className="interes">
                  Pay with interest free installments with Cherry
                </p>
                <Link to="/paymentplan">CLICK TO LEARN MORE</Link>

                <Link to={`/indi-services/${i._id}`}>
                  <button>VIEW MORE</button>
                </Link>
              </div>
            ))
          )}
        </div>
      </div>
    );
  };

  return (
      <Drawer
        placement="bottom"
        closable={false}
        onClose={onClose}
        open={open}
        size={"large"}
      >
        <WithLoader Wrapped={Component} loading={load} />
      </Drawer>
  );
};

export default ServiceDrawer;
