/** @format */

import React, { useEffect, useState } from "react";
import { Drawer } from "antd";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { isAuthenticated, LOGOUT } from "../../store/authSlice";
import { Store } from "react-notifications-component";
import { openQuiz } from "../../store/quizSlice";
import AcneQuiz from "../AcneQuiz/AcneQuiz";
import { getProfile } from "../../Repository/Api";
import { AiOutlineClose } from "react-icons/ai";

const Sidebar = ({ open, onClose }) => {
  const navigate = useNavigate();
  const [profile, setProfile] = useState({});
  const isLoggedIn = useSelector(isAuthenticated);
  const dispatch = useDispatch();
  const { isQuizOpen } = useSelector((store) => store.quiz);

  const menu = [
    {
      link: "/",
      title: "HOME",
    },
    {
      link: "/shop",
      title: "SHOP",
    },
    {
      link: "/services/services",
      title: "SERVICES",
    },
    {
      link: "/gallery",
      title: "GALLERY",
    },
    {
      link: "/paymentplan",
      title: "PAYMENT PLANS",
    },
    {
      link: "/contact",
      title: "CONTACT",
    },
    {
      link: "/aboutus",
      title: "ABOUT US",
    },
    {
      link: "/membership",
      title: "Membership",
    },
    {
      link: "/giftcards",
      title: "  GIFT CARDS",
    },
    {
      link: "/checkIngredients",
      title: "CHECK INGREDIENTS",
    },
  ];

  function LogoutHandler() {
    onClose();
    dispatch(LOGOUT());
    Store.addNotification({
      title: "",
      message: "Logged Out Successfully",
      type: "success",
      insert: "top",
      container: "top-center",
      animationIn: ["animate__animated", "animate__fadeIn"],
      animationOut: ["animate__animated", "animate__fadeOut"],
      dismiss: {
        duration: 2000,
        onScreen: true,
      },
    });
    navigate("/login");
  }

  function fechProfile() {
    getProfile(setProfile);
  }

  useEffect(() => {
    if (open) {
      fechProfile();
    }
  }, [open]);

  return (
    <Drawer
      placement="left"
      closable={false}
      onClose={onClose}
      open={open}
      className="sidebar"
    >
      <div className="Sidebar_Menu">
        <div style={{ display: "flex", justifyContent: "flex-end" }}>
          <AiOutlineClose className="closeIcon" onClick={() => onClose()} />
        </div>
        {isLoggedIn === true && (
          <>
            <div className="profile_View">
              {profile?.image ? (
                <img src={profile?.image} alt="" />
              ) : (
                <img
                  src="https://img.freepik.com/premium-vector/human-symbol-3d-icon-user-business-symbology-website-profile_593228-130.jpg?w=2000"
                  alt=""
                />
              )}

              <div className="content">
                <p className="title">
                  {profile?.firstName + profile?.lastName}{" "}
                </p>

                <p className="email"> {profile?.email} </p>

                <Link to="/my-profile" onClick={() => onClose()}>
                  VIEW PROFILE{" "}
                </Link>
              </div>
            </div>

            <div className="empty"></div>
          </>
        )}

        <ul>
          {menu?.map((i, index) => (
            <li
              key={index}
              onClick={() => {
                onClose();
                navigate(i.link);
              }}
            >
              {/* <img src={i.img} alt="" /> */}
              {i.title}
            </li>
          ))}

          <li
            onClick={() => {
              dispatch(openQuiz());
              onClose();
            }}
          >
            ACNE QUIZ
          </li>

          {isLoggedIn === true ? (
            <li onClick={() => LogoutHandler()}>Logout</li>
          ) : (
            <li
              onClick={() => {
                onClose();
                navigate("/login");
              }}
            >
              {" "}
              LOGIN
            </li>
          )}
        </ul>
        {isQuizOpen && <AcneQuiz />}
      </div>
    </Drawer>
  );
};

export default Sidebar;
