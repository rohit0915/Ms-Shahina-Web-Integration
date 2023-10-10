/** @format */

import React, { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";
import ClientReviews from "../home/ClientReviews";
import Pictures from "../home/Pictures";
import { addServiceInCart, getSingleService } from "../../Repository/Api";
import { useSelector } from "react-redux";
import { isAuthenticated } from "../../store/authSlice";

const ServicePage = () => {
  const { id } = useParams();
  const [response, setResponse] = useState([]);
  const navigate = useNavigate();
  const isLoggedIn = useSelector(isAuthenticated);

  useEffect(() => {
    getSingleService(id, setResponse);
    window.scrollTo(0, 0);
  }, [id]);

  function BackNavigation() {
    navigate(-1);
  }
  const quantity = 1;

  const addToCart = () => {
    addServiceInCart(id, quantity, navigate);
  };

  return (
    <>
      <main className="service_details_page">
        <div className="Backward_Heading step_Heading" style={{ padding: 0 }}>
          <div>
            <img src="/Image/1.png" alt="" onClick={() => BackNavigation()} />
            <p style={{ width: "50%" }}></p>
          </div>
          <p className="title" style={{ textTransform: "uppercase" }}>
            {response?.name}
          </p>
        </div>

        <div className="main_Img">
          <img src={response?.images?.[0]?.img} alt="" />
        </div>

        <div className="laser_heading">
          <p> {response?.name} </p>
          {isLoggedIn ? (
            <button onClick={() => addToCart()}>Book Now</button>
          ) : (
            <Link to="/appointment">
              <button>Book Now</button>
            </Link>
          )}
        </div>

        <div className="content">
          <p className="desc">{response?.description}</p>
        </div>

   

        <div className="center_img">
          <img
            src="/"
            alt=""
          />
        </div>


        <div className="laser_heading mt-5">
          <p></p>
          {isLoggedIn ? (
            <button onClick={() => addToCart()}>Book Now</button>
          ) : (
            <Link to="/appointment">
              <button>Book Now</button>
            </Link>
          )}
        </div>

        <div className="center_img">
          <Link to="/paymentplan">
            <img
              src="https://s3-alpha-sig.figma.com/img/338b/7bcb/d8c24e20bd3b348d9ac8e024514dc6a6?Expires=1696809600&Signature=LRY67yekA6wCyBWe7tj9guOYoS8iDN5VnJNUQ~gaU4hzVs-aRUkr2e7mSmdfzP2~HvJod4BbeYh8a6rfsyzZOiVDkU-x4OP1wjafVlf2XPaBzwJ2q034Ua9sUYkOn5H6uSUsHRYrZvnpqNVeVqKfqepHRvADnNQ38HLf2JeV~NZdY9dmJYxxvGEb4t1JUg3~mL6E~JddrN63tPBwQY~HHEnBrxbspC0YyxaYtt~-F2QEiqzzOi5r6yK4-9ttFHPvYke6D6p1bhobZUjAKHPhr2vtyJ7dH7dE51NOondVRDaJn24oghNshNFEUilYGMgSLsg5n9utiPL2cedGLCwa5Q__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
              alt=""
            />
          </Link>
        </div>

        <div className="main_Img " style={{ marginTop: "40px" }}>
          <Link to="/allproducts">
            <img src="/Image/24.png" alt="" />
          </Link>
        </div>

        <ClientReviews />
        <Pictures />
      </main>
    </>
  );
};

export default ServicePage;
