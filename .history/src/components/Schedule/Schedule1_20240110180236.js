/** @format */

import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AiFillStar, AiFillInstagram } from "react-icons/ai";
import { BsFillTelephoneFill } from "react-icons/bs";
import { GrMail } from "react-icons/gr";
import { BiCurrentLocation } from "react-icons/bi";
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
import { Call, Mail } from "../Helping/Mail";
import Select from "react-select";
import { View_description } from "../../Helper/Herlper";
import CancelModal from "../Drawer/CancelModal";

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
  const [priceId, setPriceId] = useState("");
  const [size, setSize] = useState("");
  const [sizePrice, setSizePrice] = useState("");
  const [memberprice, setMemberPrice] = useState("");
  const [open, setOpen] = useState(false);
  const [serviceToDelete, setServiceToDelete] = useState({
    id: "",
    priceId: "",
  });

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
  }, [id, cart]);

  const navigate = useNavigate();

  function BackNavigation() {
    navigate(-1);
  }

  const addServie = (id, i) => {
    let payload;
    if (i?.multipleSize === true) {
      const dataObj = selectedSizes[id];
      payload = {
        quantity: 1,
        priceId: dataObj?._id,
        size: dataObj?.size,
        sizePrice: dataObj?.price,
        memberprice: dataObj?.mPrice,
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
    window.scrollTo({
      top: 0,
      behavior: "instant",
    });
  }, []);

  function textTransform(content, title) {
    if (content?.length > 150) {
      return (
        <>
          <View_description description={content?.substr(0, 150)} />
          <p className="desc"> </p>
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
      return <div dangerouslySetInnerHTML={{ __html: content }} />;
    }
  }

  let bookNow;
  if (cart?.services?.length === 0 || Object.keys(cart).length === 0) {
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
    bookNow = <Component />;
  } else {
    const Component = () => {
      return (
        <button className="book" onClick={() => navigate("/schedule2")}>
          BOOK NOW
        </button>
      );
    };
    bookNow = <Component />;
  }

  const starArray = Array.from({ length: contact?.ratings });

  // For AdOn Servie ---
  const isInCart = (itemId) => {
    return cart?.AddOnservicesSchema?.some(
      (service) => service?.addOnservicesId?._id === itemId
    );
  };

  function AdOnHandler(id) {
    if (isInCart(id)) {
      deleteAnother(id);
    } else {
      addOnInCart(id);
    }
  }

  // ----------------

  // Normal Service --
  function RegularHandler(id, priceId, i) {
    if (isItemInCart(id)) {
      setServiceToDelete({ id, priceId });
      setOpen(true);
    } else {
      addServie(id, i);
    }
  }
  // ----

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "instant",
    });
  }, [cart]);

  const [selectedSizes, setSelectedSizes] = useState({});

  const handleSizeChange = (selectedOption, productId) => {
    const parsedValue = JSON.parse(selectedOption.value);
    setSelectedSizes((prevSizes) => ({
      ...prevSizes,
      [productId]: parsedValue,
    }));
  };

  const deleteThis = () => {
    deleteServiceItem(serviceToDelete?.id, serviceToDelete?.priceId);
    setOpen(false);
  };

  const hasService = cart && cart?.services?.length > 0;

  function TimeFetcher (i) {
    i.
  }

  return (
    <>
      <TextDrawer
        open={modalOpen}
        setOpen={setModalOpen}
        title={title}
        desc={desc}
      />
      <CancelModal
        open={open}
        setOpen={() => setOpen(false)}
        deleteFunc={deleteThis}
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

          {hasService && (
            <>
              <p className="title">Selected Services</p>
              <div className="Box">
                {cart?.services?.map((i, index) => (
                  <div className="Item" key={index}>
                    <div>
                      <input
                        type="checkbox"
                        checked
                        onClick={() =>
                          RegularHandler(
                            i?.serviceId?._id,
                            i?.serviceId?.priceId,
                            i?.serviceId
                          )
                        }
                      />
                    </div>
                    <div className="description-box">
                      <p className="title">
                        {" "}
                        {i?.priceId ? i?.size : i?.serviceId?.name}{" "}
                      </p>

                      <p className="desc" style={{ textAlign: "justify" }}>
                        Total Time : ( {i?.serviceId?.totalTime})
                        {textTransform(
                          i?.serviceId?.description,
                          i?.serviceId?.priceId
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
                    <div>
                      <input
                        type="checkbox"
                        checked
                        onClick={() => deleteAnother(i?.addOnservicesId?._id)}
                      />
                    </div>

                    <div className="description-box">
                      <p className="title"> {i?.addOnservicesId?.name} </p>
                      <p className="desc" style={{ textAlign: "justify" }}>
                        Total Time : ( {i?.addOnservicesId?.totalTime})
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
          )}

          <p className="title">Featured Services</p>

          <div className="Box">
            {" "}
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
                      const priceId = selectedSizes[i._id]?._id;
                      RegularHandler(i._id, priceId, i);
                    }}
                  />
                  <div className="description-box">
                    <p className="title"> {i.name} </p>
                    {i.multipleSize === true
                      ? ` Total Time :  (${selectedSizes[i._id]?.totalTime})`
                      : `Total Time :  (${i?.totalTime})`}

                    {i.multipleSize === true && (
                      <>
                        <Select
                          options={i.sizePrice?.map((i) => ({
                            value: `${JSON.stringify(i)}`,
                            label: `${i.size}`,
                          }))}
                          onChange={(selectedOption) =>
                            handleSizeChange(selectedOption, i._id)
                          }
                          placeholder="Select Package"
                          className="mt-2 mb-2"
                        />
                      </>
                    )}
                    {textTransform(i.description, i.name)}
                  </div>
                  <div className="price-Box">
                    <p className="title">
                      {i.multipleSize === true
                        ? selectedSizes[i._id]?.price
                          ? `$${selectedSizes[i._id]?.price}`
                          : ""
                        : `$${i.price}`}{" "}
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
                  {starArray.map((_, index) => (
                    <div className="Rat" key={`star ${index}`}>
                      <AiFillStar
                        className="fill_star"
                        style={{ color: "#ff9529", fontSize: "20px" }}
                      />
                    </div>
                  ))}
                  <span> ({contact?.numOfReviews}) </span>
                </span>
                <div
                  className="contact-info cursor-pointer"
                  onClick={() => Call(contact?.phone)}
                >
                  <BsFillTelephoneFill />
                  <p> {contact?.phone} </p>
                </div>
                <div
                  className="contact-info cursor-pointer"
                  onClick={() => Mail(contact?.email)}
                >
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
                  <p className="desc">
                    {" "}
                    Total Time : ( {i?.serviceId?.totalTime})
                  </p>
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
                  <p className="desc">
                    {" "}
                    Total Time : ( {i?.addOnservicesId?.totalTime})
                  </p>
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

            {bookNow}
          </div>

          <div className="border-collapsed"></div>

          <div className="Box">
            <p style={{ fontWeight: "bold", fontSize: "22px" }}>
              Add On Services
            </p>
            {adOnService?.map((i, index) => (
              <div className="add-on" key={index}>
                <input
                  type="checkbox"
                  checked={isInCart(i._id)}
                  onClick={() => AdOnHandler(i._id)}
                />
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
