/** @format */

import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AiFillStar, AiFillInstagram } from "react-icons/ai";
import { BsFillTelephoneFill } from "react-icons/bs";
import { GrMail } from "react-icons/gr";
import { BiCurrentLocation } from "react-icons/bi";
import { PiMagnifyingGlassThin } from "react-icons/pi";
import {
  addAdOnInCart,
  addServiceInCart,
  deleteAdOn,
  deleteServiceCart,
  getContactDetails,
  getOnService,
  getServiceforCart,
  getServiceProduct,
} from "../../Repository/Api";
import SelectService from "../Sliders/SelectService";
import TextDrawer from "../Drawer/TextDrawer";
import { Alert } from "antd";
import { useSelector, useDispatch } from "react-redux";
import { CartItems } from "../../store/cartSlice";

const Schedule1 = () => {
  const [response, setResponse] = useState([]);
  const [Item, setItem] = useState([]);
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [cart, setCart] = useState({});
  const [adOnService, setAdOnService] = useState([]);
  const [contact, setContact] = useState({});
  const [modalOpen, setModalOpen] = useState(false);
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const dispatch = useDispatch();
  const [err, setErr] = useState(false);

  const myCart = useSelector(CartItems);

  useEffect(() => {
    setCart(myCart);
  }, [myCart]);

  const fetchAdOn = () => {
    getOnService(setAdOnService);
  };

  const GetItems = () => {
    getServiceProduct(setItem, id, setName);
  };

  function fetchHandler() {
    getServiceforCart(setResponse, setId);
  }

  useEffect(() => {
    fetchHandler();
    fetchAdOn();
    getContactDetails(setContact);
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

  const addServie = (id, i) => {
    let payload;
    if (i?.multipleSize === true) {
      payload = {
        quantity: 1,
        priceId: i.sizePrice?.[0]?._id,
        size: i.sizePrice?.[0]?.size,
        sizePrice: i.sizePrice?.[0]?.price,
        memberprice: i.sizePrice?.[0]?.mPrice,
      };
    } else {
      payload = {
        quantity: 1,
      };
    }
    dispatch(addServiceInCart(id, payload, navigate));
  };

  const isItemInCart = (itemId) => {
    return cart?.services?.some(
      (service) => service?.serviceId?._id === itemId
    );
  };

  const deleteServiceItem = (id, priceId) => {
    if (priceId) {
      dispatch(deleteServiceCart(id, priceId));
    } else {
      dispatch(deleteServiceCart(id));
    }
  };

  const addOnInCart = (id) => {
    const quantity = 1;
    dispatch(addAdOnInCart(id, quantity));
  };

  const deleteAnother = (id) => {
    dispatch(deleteAdOn(id));
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  function textTransform(content, title) {
    if (content?.length > 150) {
      return (
        <>
          <p className="desc">{content?.substr(0, 150)}...</p>
          <button
            className="view_more"
            onClick={() => {
              setTitle(title);
              setDesc(content);
              setModalOpen(true);
            }}
          >
            View More
          </button>
        </>
      );
    } else {
      return <p className="desc">{content}</p>;
    }
  }

  let button;
  if (cart?.services?.length === 0 && cart?.AddOnservicesSchema?.length === 0) {
    const Component = () => {
      return (
        <>
          <button className="book" onClick={() => setErr(true)}>
            BOOK NOW
          </button>
          {err && (
            <p
              style={{
                textAlign: "center",
                color: "#042b26",
                marginTop: "10px",
              }}
            >
              Please Select Service first !
            </p>
          )}
        </>
      );
    };
    button = <Component />;
  } else {
    const Component = () => {
      return (
        <button className="book" onClick={() => navigate("/schedule2")}>
          BOOK NOW
        </button>
      );
      button = <Component />;
    };
  }
  return (
    <>
      <TextDrawer
        open={modalOpen}
        setOpen={setModalOpen}
        title={title}
        desc={desc}
      />
      <div className="Backward_Heading step_Heading">
        <div>
          <img src="/Image/1.png" alt="" onClick={() => BackNavigation()} />
          <p style={{ width: "50%" }}>STEP 1 OF 3</p>
        </div>
        <p className="title">Select Services</p>
      </div>

      <SelectService data={response} id={id} setId={setId} />

      <div className="schedule_1">
        <div className="left_div">
          <ul className="Menu_List">
            {response?.map((i, index) => (
              <li
                key={index}
                className={i._id === id && "active"}
                onClick={() => {
                  setTitle(i.name);
                  setId(i._id);
                }}
              >
                {" "}
                {i.name}{" "}
              </li>
            ))}
          </ul>

          {cart?.services?.length > 0 ||
          cart?.AddOnservicesSchema?.length > 0 ? (
            <>
              <p className="title">Selected Services</p>
              <div className="Box">
                {cart?.services?.map((i, index) => (
                  <div className="Item" key={index}>
                    <div></div>
                    <div className="description-box">
                      <p className="title"> {i?.serviceId?.name} </p>
                      <p className="desc" style={{ textAlign: "justify" }}>
                        {textTransform(
                          i?.serviceId?.description,
                          i?.serviceId?.name
                        )}
                      </p>
                    </div>
                    <div className="price-Box">
                      <p className="title">
                        {" "}
                        {i?.serviceId?.type === "offer"
                          ? `$${i.total}`
                          : `$${i.subTotal}`}
                      </p>
                    </div>
                  </div>
                ))}
                {cart?.AddOnservicesSchema?.map((i, index) => (
                  <div className="Item" key={index}>
                    <div></div>
                    <div className="description-box">
                      <p className="title"> {i?.addOnservicesId?.name} </p>
                      <p className="desc" style={{ textAlign: "justify" }}>
                        {i?.addOnservicesId?.description}
                      </p>
                    </div>
                    <div className="price-Box">
                      <p className="title"> ${i.addOnservicesId?.price}</p>
                    </div>
                  </div>
                ))}
              </div>
            </>
          ) : (
            ""
          )}

          <p className="title">Featured Services</p>

          <div className="Box">
            {Item?.length === 0 ? (
              <Alert
                message={`No Service is Related to ${title}`}
                type="info"
                className="Alert"
              />
            ) : (
              Item?.map((i, index) => (
                <div className="Item" key={index}>
                  <input
                    type="checkbox"
                    checked={isItemInCart(i._id)}
                    onClick={() => {
                      if (isItemInCart(i._id)) {
                      } else {
                        addServie(i._id, i);
                      }
                    }}
                  />
                  <div className="description-box">
                    <p className="title"> {i.name} </p>
                    {textTransform(i.description, i.name)}
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
              ))
            )}
          </div>
        </div>
        <div className="right_div">
          <div className="Box">
            <div className="two-sec">
              <img src={contact?.image} alt="" />
              <div>
                <p className="title"> {contact?.name} </p>
                <span className="Stars">
                  <span>
                    {" "}
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                  </span>
                  <span> ({contact?.ratings}) </span>
                </span>
                <div className="contact-info">
                  <BsFillTelephoneFill />
                  <p> {contact?.phone} </p>
                </div>
                <div className="contact-info">
                  <GrMail />
                  <p> {contact?.email} </p>
                </div>
                <div className="contact-info">
                  <AiFillInstagram />

                  <a href={contact?.instagram}>
                    <p>nurse.shahina </p>
                  </a>
                </div>
              </div>
            </div>

            <div className="two-sec mt-3">
              <BiCurrentLocation style={{ fontSize: "20px" }} />
              <div>
                <p className="title" style={{ fontSize: "16px" }}>
                  {contact?.address}
                </p>
              </div>
            </div>

            <a href={contact?.mapLink} target="_blank">
              <button className="locate_btn">LOCATE ON GOOGLE MAPS</button>
            </a>

            {/* Service */}
            {cart?.services?.map((i, index) => (
              <div className="Items" key={index}>
                <div className="two-div">
                  <p className="head"> {i?.serviceId?.name} </p>
                  <p className="head">
                    {" "}
                    {i?.serviceId?.type === "offer"
                      ? `$${i.total}`
                      : `$${i.subTotal}`}
                  </p>
                </div>
                <div className="two-div">
                  <p className="desc"></p>
                  <p
                    className="delete cursor-pointer"
                    onClick={() =>
                      deleteServiceItem(i.serviceId?._id, i?.priceId)
                    }
                  >
                    {" "}
                    DELETE
                  </p>
                </div>
              </div>
            ))}

            {/* Ad on Service */}
            {cart?.AddOnservicesSchema?.map((i, index) => (
              <div className="Items" key={index}>
                <div className="two-div">
                  <p className="head"> {i?.addOnservicesId?.name} </p>
                  <p className="head"> ${i.addOnservicesId?.price}</p>
                </div>
                <div className="two-div">
                  <p className="desc"></p>
                  <p
                    className="delete cursor-pointer"
                    onClick={() => deleteAnother(i?.addOnservicesId?._id)}
                  >
                    {" "}
                    DELETE
                  </p>
                </div>
              </div>
            ))}

            {button}
          </div>

          <div className="border-collapsed"></div>

          <div className="Box">
            <div className="search-div">
              <PiMagnifyingGlassThin />
              <input type="search" placeholder="Search Services" />
            </div>

            {adOnService?.map((i, index) => (
              <div className="add-on" key={index}>
                <input type="checkbox" onClick={() => addOnInCart(i._id)} />
                <div className="left" style={{ textAlign: "right" }}>
                  <div className="head">
                    <p className="title"> {i.name} </p>
                    <p className="price">${i.price} </p>
                  </div>
                  <p className="desc"> {i.time} </p>
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
