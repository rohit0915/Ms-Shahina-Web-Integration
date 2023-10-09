/** @format */

import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AiFillStar, AiFillInstagram, AiFillClockCircle } from "react-icons/ai";
import { BsFillTelephoneFill } from "react-icons/bs";
import { GrMail } from "react-icons/gr";
import { BiCurrentLocation } from "react-icons/bi";
import { PiMagnifyingGlassThin } from "react-icons/pi";
import {
  addServiceInCart,
  deleteServiceCart,
  getCart,
  getOnService,
  getServiceforCart,
  getServiceProduct,
} from "../../Repository/Api";

const Schedule1 = () => {
  const [response, setResponse] = useState([]);
  const [Item, setItem] = useState([]);
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [cart, setCart] = useState({});
  const [adOnService, setAdOnService] = useState([]);

  const fetchAdOn = () => {
    getOnService(setAdOnService);
  };

  const fetchCart = () => {
    getCart(setCart);
  };

  const GetItems = () => {
    getServiceProduct(setItem, id, setName);
  };

  function fetchHandler() {
    getServiceforCart(setResponse, setId);
  }

  useEffect(() => {
    fetchHandler();
    fetchCart();
    fetchAdOn();
  }, []);

  useEffect(() => {
    if (id) {
      GetItems();
    }
  }, [id]);

  const navigate = useNavigate();

  function BackNavigation() {
    navigate(-1);
  }

  const quantity = 1;

  const addServie = async (id) => {
    await addServiceInCart(id, quantity, navigate);
    fetchCart();
  };

  const isItemInCart = (itemId) => {
    return cart?.services?.some(
      (service) => service?.serviceId?._id === itemId
    );
  };

  const deleteServiceItem = async (id) => {
    await deleteServiceCart(id);
    fetchCart();
  };

  return (
    <>
      <div className="Backward_Heading step_Heading">
        <div>
          <img src="/Image/1.png" alt="" onClick={() => BackNavigation()} />
          <p style={{ width: "50%" }}>STEP 1 OF 3</p>
        </div>
        <p className="title">Select Services</p>
      </div>

      <div className="schedule_1">
        <div className="left_div">
          <ul className="Menu_List">
            {response?.map((i, index) => (
              <li
                key={index}
                className={i._id === id && "active"}
                onClick={() => setId(i._id)}
              >
                {" "}
                {i.name}{" "}
              </li>
            ))}
          </ul>

          <p className="title">Featured Services</p>

          <div className="Box">
            {Item?.map((i, index) => (
              <div className="Item" key={index}>
                <input
                  type="checkbox"
                  checked={isItemInCart(i._id)}
                  onClick={() => {
                    if (isItemInCart(i._id)) {
                    } else {
                      addServie(i._id);
                    }
                  }}
                />
                <div className="description-box">
                  <p className="title"> {i.name} </p>
                  <p className="desc" style={{ textAlign: "justify" }}>
                    {i.description}
                  </p>
                </div>
                <div className="price-Box">
                  <p className="title">
                    {" "}
                    ${i.discountActive === true
                      ? i.discountPrice
                      : i.price}{" "}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="right_div">
          <div className="Box">
            <div className="two-sec">
              <img src="/Image/8.png" alt="" />
              <div>
                <p className="title">Shahina Hoja Aesthetics</p>
                <span className="Stars">
                  <span>
                    {" "}
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                  </span>
                  <span> (122) </span>
                </span>
                <div className="contact-info">
                  <BsFillTelephoneFill />
                  <p>(469)823-0402</p>
                </div>
                <div className="contact-info">
                  <GrMail />
                  <p>info@shahinahoja.com</p>
                </div>
                <div className="contact-info">
                  <AiFillInstagram />
                  <p>@nurse.shahina</p>
                </div>
              </div>
            </div>
            <div className="two-sec mt-3">
              <AiFillClockCircle style={{ fontSize: "20px" }} />
              <div>
                <p className="title" style={{ fontSize: "16px" }}>
                  10:00 AM - 9:30 PM
                </p>
              </div>
            </div>
            <div className="two-sec mt-3">
              <BiCurrentLocation style={{ fontSize: "20px" }} />
              <div>
                <p className="title" style={{ fontSize: "16px" }}>
                  905 Watters Creek Boulevard, 141, Allen, Texas, USA
                </p>
              </div>
            </div>

            <button className="locate_btn">LOCATE ON GOOGLE MAPS</button>

            {cart?.services?.map((i, index) => (
              <div className="Items" key={index}>
                <div className="two-div">
                  <p className="head"> {i?.serviceId?.name} </p>
                  <p className="head">
                    {" "}
                    $
                    {i?.serviceId?.discountActive === true
                      ? i?.serviceId?.discountPrice
                      : i?.serviceId?.price}{" "}
                  </p>
                </div>
                <div className="two-div">
                  <p className="desc"></p>
                  <p
                    className="delete cursor-pointer"
                    onClick={() => deleteServiceItem(i?.serviceId?._id)}
                  >
                    {" "}
                    DELETE
                  </p>
                </div>
              </div>
            ))}
          </div>

          <button className="book" onClick={() => navigate("/schedule2")}>
            BOOK NOW
          </button>

          <div className="border-collapsed"></div>

          <div className="Box">
            <div className="search-div">
              <PiMagnifyingGlassThin />
              <input type="search" placeholder="Search Services" />
            </div>

            {adOnService?.map((i, index) => (
              <div className="add-on" key={index}>
                <input type="checkbox" />
                <div className="left" style={{ textAlign: "right" }}>
                  <div className="head">
                    <p className="title"> {i.name} </p>
                    <p className="price">${i.price} </p>
                  </div>
                  <p className="desc">1 HOUR</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Schedule1;
