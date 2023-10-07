/** @format */

import React, { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";
import ClientReviews from "../home/ClientReviews";
import Pictures from "../home/Pictures";
import { getSingleService } from "../../Repository/Api";

const ServicePage = () => {
  const { id } = useParams();
  const [img, setImg] = useState("");
  const [ response , setResponse ] = useState([])
  const navigate = useNavigate();

  useEffect(() => {
    getSingleService(id , setResponse)
  },[])

  console.log(response)


  function BackNavigation() {
    navigate(-1);
  }

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
          <Link to="/appointment">
            <button>Book Now</button>
          </Link>
        </div>

        <div className="content">
          <p className="desc">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            ultricies ante at odio ultricies, sed consequat nunc sollicitudin.
            Proin consequat, nulla quis tempus dignissim, neque massa bibendum
            metus, ac congue tellus nisi non lacus. Pellentesque semper dolor eu
            felis eleifend ornare. Vivamus enim diam, efficitur non lorem et,
            elementum viverra quam. Aliquam eget lectus sem. Ut ut dapibus nisi,
            ut convallis odio. Vivamus nisi nibh, venenatis quis urna eu,
            lobortis rhoncus lectus. Proin urna sem, lobortis sit amet venenatis
            eget, tristique nec velit. Sed interdum ligula nec dolor fringilla,
            a consequat augue mollis. Sed non venenatis augue. Phasellus quis
            ante ac augue ullamcorper bibendum et nec erat. Pellentesque quis
            porta tortor. Sed tortor nibh, bibendum quis pellentesque vitae,
            laoreet sit amet dolor. Etiam accumsan vehicula arcu euismod
            pharetra. Aenean sit amet nibh a diam facilisis tincidunt.
          </p>
         
        </div>

        <div className="content">
          <p className="title">Concern during laser hair removal</p>
          <ul>
            <li>Lorem ipsum dolor sit amet,</li>
            <li>Lorem ipsum dolor sit amet,</li>
            <li>Lorem ipsum dolor sit amet,</li>
            <li>Lorem ipsum dolor sit amet,</li>
          </ul>
        </div>

        <div className="center_img">
          <img
            src="https://s3-alpha-sig.figma.com/img/5118/ea86/a98fb879fd2fac2be4d751c7b0af04d8?Expires=1696809600&Signature=ZND6f6rHW6~hu1y3zlaGZeEAaGrUfdx~IkQQYUPy2IJqNJSuiWXRQHB3uSMjM3npIGso7A-MyKu1WNZOBBM25Awv7WSR4xC6~x8nmCvaqc8UnfSa1SlZrJKbY1oySQR1HItx3llnkq4mgqmrETEhguZGLyXPVT-YemIv8LRMj37-E~G6aFHUCl5sxqyqx4fGOWJyR17qEJpom56V5SuNqwMq~IsAA9zjmYOIXCn-jpUJxSs1Q0LLz4IHglm~bUTce9qtA0z2RfWsi3H9opGp8f2wJjGqn174yYM9p6lWlR798bqKc1Nb-bwJkOCrlhHMEACInrj-IBKTQ-Z32mOuhg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
            alt=""
          />
        </div>

        <div className="content">
          <p className="title">Our process</p>
          <ul>
            <li>Lorem ipsum dolor sit amet,</li>
            <li>Lorem ipsum dolor sit amet,</li>
            <li>Lorem ipsum dolor sit amet,</li>
            <li>Lorem ipsum dolor sit amet,</li>
          </ul>
        </div>

        <div className="laser_heading mt-5">
          <p></p>
          <Link to="/appointment">
            <button>Book Now</button>
          </Link>
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
