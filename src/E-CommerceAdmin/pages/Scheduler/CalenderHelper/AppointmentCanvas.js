/** @format */

import React, { useEffect, useState } from "react";
import { Offcanvas, Form, Spinner } from "react-bootstrap";
import Slider from "react-slick";
import {
  EditNotes,
  EditService,
  ServiceCanvas,
  UserCanvas,
} from "./Modals/modal";
import info from "./Constant/constant.json";
import img from "../../../../Images/list.png";
import {
  addNote,
  addService,
  AdOnInCart,
  checkout,
  deleteSuggestion,
  editNotesInCart,
  getCart,
  send_reminder_in_cart,
} from "../../../../Respo/Api";
import { useDispatch, useSelector } from "react-redux";
import { selectModalById } from "../../../../Store/Slices/modalSlices";

export const AppointmentCanvas = ({ show, handleClose }) => {
  const [type, setType] = useState("Info");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [userId, setUserId] = useState("");
  const [openService, setOpenService] = useState(false);
  const [userVisible, setUserVisible] = useState(false);
  const [edit_service, set_edit_service] = useState(false);
  const [cart, setCart] = useState({});
  const [notes, setNotes] = useState("");
  const [serviceId, setServiceId] = useState("");
  const [serviceType, setServiceType] = useState("");
  const [isChecked, setIsChecked] = useState(false);
  const [loading, setLoading] = useState(false);
  const [priceId, setPriceId] = useState("");
  const [notesId, setNotesId] = useState("");
  const [open_notes_modal, set_open_notes_modal] = useState(false);
  const [createNote, setCreatNote] = useState(false);
  const [edit, setEdit] = useState(false);

  const dispatch = useDispatch();

  const { modalData } = useSelector(selectModalById("appointmentCanvas"));

  const addSuggestion = async (e) => {
    e.preventDefault();
    const payload = {
      suggestion: notes,
    };
    await addNote(userId, payload);
    fetchCart();
    setNotes("");
  };

  async function editNotes(e) {
    e.preventDefault();
    const payload = {
      suggestion: notes,
    };
    await editNotesInCart(userId, notesId, fetchCart, payload);
    setNotes("");
  }

  const deleteHandler = (id) => {
    deleteSuggestion(userId, id, fetchCart);
  };

  function confirmWithCard() {
    send_reminder_in_cart(cart?.user?._id, fetchCart);
  }

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: false,
  };

  useEffect(() => {
    if (show) {
      setType("Info");
      setUserVisible(true);
    }
  }, [show]);

  useEffect(() => {
    if (modalData) {
      const originalDate = new Date(modalData?.start);
      const year = originalDate.getFullYear();
      const month = (originalDate.getMonth() + 1).toString().padStart(2, "0");
      const day = originalDate.getDate().toString().padStart(2, "0");
      setDate(`${year}-${month}-${day}`);
      const formattedTime = originalDate.toLocaleTimeString("en-US", {
        hour12: false,
        hour: "2-digit",
        minute: "2-digit",
      });
      setTime(formattedTime);
    }
  }, [modalData]);

  useEffect(() => {
    if (cart) {
      setIsChecked(cart?.user?.sendConfirmationAppointmentWithCard);
    }
  }, [cart]);

  const userHandler = (i) => {
    setUserId(i._id);
    setUserVisible(false);
    setOpenService(true);
  };

  const fetchCart = () => {
    getCart(userId, setCart);
  };

  const serviceHandler = async (type, i, priceId) => {
    if (type === "service") {
      let payload;
      if (i.multipleSize === true) {
        payload = {
          quantity: 1,
          userId,
          date,
          time,
          priceId,
        };
      } else {
        payload = {
          quantity: 1,
          userId,
          date,
          time,
        };
      }
      addService(i._id, payload, fetchCart);
    } else {
      const payload = {
        quantity: 1,
        userId,
      };
      AdOnInCart(i._id, payload, fetchCart);
    }
  };

  const handleSwitchChange = () => {
    if (isChecked) {
      setIsChecked(false);
      confirmWithCard();
    } else {
      confirmWithCard();
      setIsChecked(true);
    }
  };

  useEffect(() => {
    if (userId) {
      fetchCart();
    }
  }, [userId]);

  const openServiceEdit = (i) => {
    setServiceId(i);
    set_edit_service(true);
  };

  const checkoutHandler = async () => {
    const id = cart?.user?._id;
    try {
      setLoading(true);
      await dispatch(checkout(id, handleClose));
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
    }
  };

  const hasIn = cart?.suggesstion?.length === 0 || createNote === true;

  function SavedCardDate() {
    const cardDate = cart?.user?.cardDetailSavedDate;
    const originalDate = new Date(cardDate);
    const month = originalDate?.toLocaleDateString("en-US", {
      month: "long",
      timeZone: "UTC",
    });
    const day = originalDate?.toLocaleDateString("en-US", {
      day: "numeric",
      timeZone: "UTC",
    });
    const year = originalDate?.toLocaleDateString("en-US", {
      year: "numeric",
      timeZone: "UTC",
    });
    const formattedTime = originalDate.toLocaleTimeString("en-US", {
      hour12: true,
      hour: "2-digit",
      minute: "2-digit",
      timeZone: "UTC",
    });
    const formatteddate =
      day + " , " + month + " " + year + " at " + formattedTime;
    return formatteddate;
  }

  let slider;
  if (type === "Info") {
    const SlidingComponent = () => {
      return (
        <>
          {cart?.user ? (
            <>
              <div className="user_select_container">
                <div className="user_select">
                  <div className="img">
                    {" "}
                    {cart?.user?.firstName?.slice(0, 1)}{" "}
                  </div>
                  <div className="content">
                    <p className="heading">
                      {" "}
                      {cart?.user?.firstName + " " + cart?.user?.lastName}{" "}
                    </p>
                    <p className="faded"> +{cart?.user?.phone} </p>
                    <p className="faded"> {cart?.user?.email} </p>
                  </div>
                </div>
              </div>

              <div className="service_selector_container">
                {cart?.services?.map((i, index) => (
                  <div
                    className="service_selector"
                    key={`Service${index}`}
                    onClick={() => {
                      setServiceType("Regular");
                      openServiceEdit(i?.serviceId?._id);
                      setPriceId(i);
                    }}
                  >
                    <div>
                      <p className="title">
                        {" "}
                        {i.size ? i.size : i?.serviceId?.name}{" "}
                      </p>
                      <p className="faded"> {i?.totalTime} </p>
                    </div>
                    <p className="price">
                      {" "}
                      ${i.discountProvide ? i?.discount : i?.price}{" "}
                    </p>
                  </div>
                ))}
              </div>

              <div className="service_selector_container">
                {cart?.AddOnservicesSchema?.map((i, index) => (
                  <div
                    className="service_selector"
                    key={`Service${index}`}
                    onClick={() => {
                      setServiceType("AdOn");
                      openServiceEdit(i?.addOnservicesId?._id);
                      setPriceId(i);
                    }}
                  >
                    <div>
                      <p className="title"> {i?.addOnservicesId?.name} </p>
                      <p className="faded"> {i?.totalTime} </p>
                    </div>
                    <p className="price"> ${i?.price} </p>
                  </div>
                ))}
              </div>

              <div className="add_another" onClick={() => setOpenService(true)}>
                <p>Add another service</p>
                <i className="fa-solid fa-plus"></i>
              </div>
            </>
          ) : (
            <div className="add_another" onClick={() => setUserVisible(true)}>
              <p>Select user first !</p>
              <i className="fa-solid fa-plus"></i>
            </div>
          )}
        </>
      );
    };
    slider = <SlidingComponent />;
  } else if (type === "Notes") {
    slider = (
      <>
        <div className="info_tab">
          <p className="title">Appointment notes</p>
          <div className="Booked_Detail">
            {cart?.suggesstion?.map((i, index) => (
              <div className="define_notes p-0" key={`notes${index}`}>
                <p> {i.suggesstion} </p>
                <span className="d-flex gap-4">
                  <i
                    className="fa-regular fa-trash-can text-[#BF3131] cursor-pointer"
                    onClick={() => deleteHandler(i._id)}
                  />
                  <i
                    className="fa-solid fa-ellipsis-vertical cursor-pointer"
                    onClick={() => {
                      setNotesId(i._id);
                      set_open_notes_modal(true);
                    }}
                  ></i>
                </span>
              </div>
            ))}
          </div>

          {hasIn && (
            <form onSubmit={addSuggestion}>
              <Form.Control
                as="textarea"
                value={notes}
                required
                onChange={(e) => setNotes(e.target.value)}
              />
              <p className="note">visible only to your team members</p>
              <button type="submit">Save</button>
            </form>
          )}
          {edit === true && (
            <form onSubmit={editNotes}>
              <Form.Control
                as="textarea"
                value={notes}
                required
                onChange={(e) => setNotes(e.target.value)}
              />
              <p className="note">visible only to your team members</p>
              <button type="submit">Update</button>
            </form>
          )}
        </div>
      </>
    );
  } else if (type === "Payments") {
    const SlidingComponent = () => {
      return (
        <div className="payment_class">
          <div className="toggle_button_cont">
            <Form.Check
              type="switch"
              checked={isChecked}
              onChange={handleSwitchChange}
            />
            <p>Confirm appointment with card</p>
          </div>
          {isChecked && (
            <p className="faded">
              Once appointment is saved client will recieve a notification
              requiring them to confirm appointment with card and accept your
              poilcy of <strong style={{ color: "#000" }}>100% free</strong> for
              not showing up and{" "}
              <strong style={{ color: "#000" }}> 50% free</strong> for late
              cancellation under{" "}
              <strong style={{ color: "#000" }}>48 hours </strong> notice{" "}
            </p>
          )}
        </div>
      );
    };
    slider = <SlidingComponent />;
  } else if (type === "Forms") {
    const SlidingComponent = () => {
      return (
        <div className="awaited_payment mt-3">
          <img src={img} alt="" />
          <p className="head mt-2">No forms</p>
          <p className="faded mt-0">
            Forms will appear here once appointment has been saved
          </p>
        </div>
      );
    };
    slider = <SlidingComponent />;
  }

  function closeService() {
    setOpenService(false);
  }
  function closeUser() {
    setUserVisible(false);
  }

  return (
    <>
      <EditService
        show={edit_service}
        setShow={set_edit_service}
        userId={cart?.user?._id}
        fetchCart={fetchCart}
        date={date}
        time={time}
        type={serviceType}
        priceId={priceId}
        setPriceId={setPriceId}
      />
      <ServiceCanvas
        show={openService}
        handleClose={closeService}
        serviceHandler={serviceHandler}
        userDetail={cart?.user}
      />
      <UserCanvas
        show={userVisible}
        handleClose={closeUser}
        userHandler={userHandler}
      />
      <EditNotes
        show={open_notes_modal}
        setShow={set_open_notes_modal}
        setEdit={setEdit}
        createNote={setCreatNote}
      />
      <Offcanvas
        show={show}
        onHide={handleClose}
        placement="end"
        style={{ width: "100%" }}
      >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title style={{ fontWeight: "900" }}>
            New Appointment
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body className="Appointment_Canvas">
          <div className="select_container">
            <div>
              <div className="selector">
                <Slider {...settings}>
                  {info.appointmentInfo.map((i, index) => (
                    <div key={`Index${index}`}>
                      <p
                        onClick={() => setType(i.name)}
                        className={i.name === type ? "active" : ""}
                      >
                        {" "}
                        {i.name}{" "}
                      </p>
                    </div>
                  ))}
                </Slider>
              </div>
              {slider}
            </div>
            <div className="last_button">
              <div className="text">
                <p>Total</p>
                <p>
                  {cart?.total &&
                    ` From $${cart?.total} (${
                      cart?.timeInMin && cart?.timeInMin
                    })`}
                </p>
              </div>
              <div className="btn_container">
                <button className="checkout">Checkout</button>
                <button className="save" onClick={() => checkoutHandler()}>
                  {loading ? (
                    <Spinner animation="border" role="status" />
                  ) : (
                    "Save"
                  )}
                </button>
              </div>
            </div>
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};
