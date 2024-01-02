/** @format */

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { AiFillInstagram } from "react-icons/ai";
import { BsFillTelephoneFill } from "react-icons/bs";
import { GrMail } from "react-icons/gr";
import { BiCurrentLocation } from "react-icons/bi";
import { SlCalender } from "react-icons/sl";
import {
  useStripe,
  useElements,
  PaymentElement,
} from "@stripe/react-stripe-js";
import axios from "axios";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

// const stripePromise = loadStripe(
//   "pk_test_51BTUDGJAJfZb9HEBwDg86TN1KNprHjkfipXmEDMb0gSCassK5T3ZfxsAbcgKVmAIXF7oZ6ItlZZbXO6idTHE67IM007EwQ4uN3"
// );

const CheckoutDetails = () => {
  const navigate = useNavigate();
  function BackNavigation() {
    navigate(-1);
  }

  // // ----
  // const options = {
  //   mode: "setup",
  //   currency: "usd",
  //   appearance: {
  //     /*...*/
  //   },
  // };

  // const stripe = useStripe();
  // const elements = useElements();

  // const [errorMessage, setErrorMessage] = useState();
  // const [loading, setLoading] = useState(false);

  // const handleError = (error) => {
  //   setLoading(false);
  //   setErrorMessage(error.message);
  // };

  // const handleSubmit = async (event) => {
  //   event.preventDefault();

  //   if (!stripe) {
  //     return;
  //   }

  //   setLoading(true);

  //   const { error: submitError } = await elements.submit();
  //   if (submitError) {
  //     handleError(submitError);
  //     return;
  //   }

  //   const res = await axios.post(
  //     "https://shahina-backend.vercel.app/api/v1/user/card/savecard",
  //     {},
  //     {
  //       headers: {
  //         Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1NGNjMjQ1MjliNTE2M2Y0ZmFjMTE2MiIsImlhdCI6MTcwMzU5MjYwOSwiZXhwIjoxNzM1MTI4NjA5fQ.8_C1SjwjAtR-CYayezHkouJzj4usdOpwJVNCqO0RaHg`,
  //       },
  //     }
  //   );
  //   const { clientSecret } = res?.data?.client_secret?.client_secret;

  //   const { error } = await stripe.confirmSetup({
  //     elements,
  //     clientSecret,
  //     confirmParams: {
  //       return_url: "https://example.com/complete",
  //     },
  //   });

  //   if (error) {
  //     handleError(error);
  //   } else {
  //   }
  // };

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
  }, [id, cart]);

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
    window.scrollTo({
      top: 0,
      behavior: "instant",
    });
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

  console.log(cart);

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
      deleteServiceItem(id, priceId);
    } else {
      addServie(id, i);
    }
  }
  // ----

  return (
    <>
      {/* <Elements stripe={stripePromise} options={options}>
        <form onSubmit={handleSubmit}>
          <PaymentElement />
          <button type="submit" disabled={!stripe || loading}>
            Submit
          </button>
          {errorMessage && <div>{errorMessage}</div>}
        </form>
      </Elements> */}

      <div className="Backward_Heading step_Heading">
        <div>
          <img src="/Image/1.png" alt="" onClick={() => BackNavigation()} />
        </div>
        <p className="title">Review and confirm</p>
      </div>

      <div className="schedule_1">
        <div className="left_div">
          <div className="review_box">
            <p className="title">Payment method</p>
            <span>
              You won't be charged now , payment will be collected in store
              after your appointment
            </span>

            <form>
              <div>
                <p>Name on card</p>
                <input type="text" placeholder="Add Card Holder full name" />
              </div>

              <div>
                <p>Card Number</p>
                <input type="text" placeholder="Credit or debit card number" />
              </div>

              <div className="two_input">
                <div className="first">
                  <p>Expiry Date</p>
                  <input type="text" placeholder="MM/YY" />
                </div>
                <div>
                  <p>Security code</p>
                  <input type="text" placeholder="123" />
                </div>
              </div>

              <div className="payment_div">
                <p>Pay Securely with</p>
                <img src="/Image/9.png" alt="" />
                <img src="/Image/10.png" alt="" />
                <img src="/Image/11.png" alt="" />
                <img src="/Image/12.png" alt="" />
                <img src="/Image/13.png" alt="" />
              </div>

              {/* <div className="border-line" /> */}

              <div className="content">
                <p>Cancellation policy</p>
                <p className="desc">
                  Cancel for free up to <strong>48 hours</strong> ahead ,
                  otherwise you will be charged <strong>50%</strong> of the
                  service price for late cancellation or <strong>100%</strong>{" "}
                  for not showing up
                </p>
              </div>

              <div className="content">
                <p>Important info</p>
                <p className="desc">
                  Please understand that when you forget or cancel your
                  appointment without giving enough <br />
                  notice , I miss the oppurtunity to fill that appointment time
                  , and clients on my waiting list miss <br />
                  the oppurtunity to recieve services.
                </p>
              </div>

              {/* <div>
                <textarea placeholder="Write your Notes here..............r" />
              </div> */}

              {/* <div className="border-line" />
              <div className="submit_btn">
                <div style={{ marginTop: "0" }}>
                  <p>TOTAL PRICE</p>
                  <span>
                    <span className="total"> $499</span>
                    <span>1 SERVICE SELECTED</span>
                  </span>
                </div>

                <button onClick={() => navigate("/thanks")}>
                  PROCEED TO PAY
                </button>
              </div> */}
            </form>
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
            {/* {cart?.services?.map((i, index) => (
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
            ))} */}

            {/* Ad on Service */}
            {/* {cart?.AddOnservicesSchema?.map((i, index) => (
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
            ))} */}

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

export default CheckoutDetails;
