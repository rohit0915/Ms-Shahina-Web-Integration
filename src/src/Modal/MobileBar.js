/** @format */
import React, { useState, useContext, useEffect, useCallback } from "react";
import Offcanvas from "react-bootstrap/Offcanvas";
import { VscAccount } from "react-icons/vsc";
import Dropdown from "react-bootstrap/Dropdown";
import { BsCashCoin } from "react-icons/bs";
import { AiOutlineLogin } from "react-icons/ai";
import axios from "axios";
import { MyContext } from "../Homepage/MyContext";
import { OrderModal, PortfoliModal, FundsModal, LoginModal } from "./GetOrder";
import { HistoricalModal, PlaceOrderModal } from "./GetOrder";
import { UserProfileModal } from "./GetOrder";

export function MobileBar() {
  const [userProfile, setUserProfile] = useState(false);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const { secondTab, setSecondState } = useContext(MyContext);
  const [modalShow, setModalShow] = useState(false);
  const SessionId = localStorage.getItem("sessionId");
  const [price, setPrice] = useState(false);
  const [modalOpen, setOrderOpen] = useState(false);
  const [openPModal, setOpenPModal] = useState(false);
  const [fundModalOpen, setFundModalOpen] = useState(false);
  const [openModal2, setOpenModal2] = useState(false);
  const [cashback, setCashBack] = useState("");
  const UserId = localStorage.getItem("userId");
  const [loginShow, setLoginShow] = useState(false);
  const [showss, setShowss] = useState(false);

  function LogOut() {
    localStorage.clear();
    window.location.reload();
  }

  const fetchCash = useCallback(async () => {
    try {
      const { data } = await axios.get(
        `https://ankit-pandey-backend.vercel.app/api/v1/profile/cash/${UserId}`
      );
      setCashBack(data.result.cash);
    } catch (e) {
      console.log(e);
    }
  }, [UserId]);

  useEffect(() => {
    if (UserId) {
      fetchCash();
    }
  }, [fetchCash, UserId]);

  return (
    <>
      <LoginModal show={loginShow} onHide={() => setLoginShow(false)} />
      <HistoricalModal show={openModal2} onHide={() => setOpenModal2(false)} />
      <PlaceOrderModal show={modalShow} onHide={() => setModalShow(false)} />
      <UserProfileModal
        show={userProfile}
        onHide={() => setUserProfile(false)}
      />

      <i
        className="fa-solid fa-bars"
        onClick={handleShow}
        style={{ color: "black", cursor: "pointer" }}
      ></i>
      <Offcanvas show={show} onHide={handleClose}>
        <i
          className="fa-solid fa-x"
          style={{
            color: "black",
            fontSize: "1.4rem",

            position: "absolute",
            right: "10px",
            top: "10px",
            cursor: "pointer",
          }}
          onClick={() => handleClose()}
        ></i>

        <Offcanvas.Body>
          <OrderModal show={modalOpen} onHide={() => setOrderOpen()} />
          <PortfoliModal
            show={openPModal}
            onHide={() => setOpenPModal(false)}
          />
          <FundsModal
            show={fundModalOpen}
            onHide={() => setFundModalOpen(false)}
          />

          <div className="false-sidebar">
            <div className="false-logo">Logo fx </div>

            <div className="DropdownDiv">
              <Dropdown>
                <Dropdown.Toggle id="dropdown-basic" className="dropDn">
                  Window tab Filter
                </Dropdown.Toggle>

                <Dropdown.Menu className="dropMenu">
                  <Dropdown.Item onClick={() => setOpenModal2(true)}>
                    Historical Data
                  </Dropdown.Item>
                  <Dropdown.Item onClick={() => setSecondState(!secondTab)}>
                    Second Tab
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div>

            <div className="false-sidebar-menu">
              <p
                style={{
                  color: "#0E155A",
                  fontSize: "1.4rem",
                  textAlign: "center",
                }}
              >
                Profile
              </p>

              {SessionId ? (
                <img
                  src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
                  alt=""
                  className="profileImage"
                  onClick={() => setUserProfile(true)}
                />
              ) : (
                ""
              )}

              <div>
                {" "}
                <div className="sideItem" onClick={() => setPrice(!price)}>
                  {" "}
                  <VscAccount style={{ width: " 20px", height: "20px" }} /> Your
                  Account
                </div>
                {price ? (
                  <span
                    style={{
                      marginLeft: "60%",
                      fontSize: "13px",
                      fontWeight: "600",
                      cursor: "pointer",
                    }}
                  >
                    {" "}
                    (Rs {cashback}){" "}
                  </span>
                ) : (
                  ""
                )}
                <div className="sideItem" onClick={() => setShowss(!showss)}>
                  <BsCashCoin style={{ width: " 20px", height: "20px" }} />{" "}
                  Cashback
                </div>
                {showss ? (
                  <span
                    style={{
                      marginLeft: "60%",
                      fontSize: "13px",
                      fontWeight: "600",
                      cursor: "pointer",
                    }}
                  >
                    {" "}
                    (Rs {cashback}){" "}
                  </span>
                ) : (
                  ""
                )}
                <div
                  className="sideItem"
                  onClick={() => {
                    setOpenPModal(false);
                    setOrderOpen(false);
                    setModalShow(true);
                    setFundModalOpen(false);
                  }}
                >
                  <BsCashCoin style={{ width: " 20px", height: "20px" }} />
                  BUY / SELL
                </div>
                <div
                  className="sideItem"
                  onClick={() => {
                    setOpenPModal(false);
                    setOrderOpen(false);
                    setModalShow(false);
                    setFundModalOpen(true);
                  }}
                >
                  <BsCashCoin style={{ width: " 20px", height: "20px" }} />
                  FUNDS
                </div>
                <div
                  className="sideItem"
                  onClick={() => {
                    setOrderOpen(false);
                    setModalShow(false);
                    setOpenPModal(true);
                    setFundModalOpen(false);
                  }}
                >
                  <BsCashCoin style={{ width: " 20px", height: "20px" }} />
                  PORTFOLIO
                </div>
                <div
                  className="sideItem"
                  onClick={() => {
                    setModalShow(false);
                    setOpenPModal(false);
                    setOrderOpen(true);
                    setFundModalOpen(false);
                  }}
                >
                  <BsCashCoin style={{ width: " 20px", height: "20px" }} />
                  HOLDING
                </div>
                {SessionId ? (
                  <div className="sideItem" onClick={() => LogOut()}>
                    <AiOutlineLogin
                      style={{ width: " 20px", height: "20px" }}
                    />{" "}
                    Logout
                  </div>
                ) : (
                  ""
                )}
                {SessionId ? (
                  ""
                ) : (
                  <button
                    className="loginbtn"
                    onClick={() => setLoginShow(true)}
                  >
                    Login
                  </button>
                )}
              </div>
            </div>
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}
