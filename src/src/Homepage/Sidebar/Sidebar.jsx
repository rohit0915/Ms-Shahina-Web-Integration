/** @format */

import React, { useState, useContext, useEffect, useCallback } from "react";
import "./Sidebar.css";
import { VscAccount } from "react-icons/vsc";
import Dropdown from "react-bootstrap/Dropdown";
import { BsCashCoin } from "react-icons/bs";
import { AiOutlineLogin } from "react-icons/ai";
import { AiFillSetting } from "react-icons/ai";
import axios from "axios";
import { MyContext } from "../MyContext";
import {
  OrderModal,
  PortfoliModal,
  FundsModal,
  HistoricalModal,
  PlaceOrderModal,
  CashbackModal,
} from "../../Modal/GetOrder";

const Sidebar = ({ width, setWidth }) => {
  const {
    secondTab,
    setSecondState,
    darkTheme,
    setDarkTheme,
    Exchange,
    symbol,
  } = useContext(MyContext);

  const [modalShow, setModalShow] = useState(false);
  const SessionId = localStorage.getItem("sessionId");
  const [price, setPrice] = useState(false);
  const [modalOpen, setOrderOpen] = useState(false);
  const [openPModal, setOpenPModal] = useState(false);
  const [fundModalOpen, setFundModalOpen] = useState(false);
  const [CashModalOpen, setCashModalOpen] = useState(false);
  const [openModal2, setOpenModal2] = useState(false);
  const [cashback, setCashBack] = useState("");
  const UserId = localStorage.getItem("userId");

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

  let DropdownComponent;
  if (Exchange && symbol) {
    const DropDownElement = () => {
      console.log(Exchange  , symbol)
      return (
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
      );
    };

    DropdownComponent = <DropDownElement />;
  } else {
    const DropDownElement = () => {

      console.log(Exchange  , symbol)
      return (
        <Dropdown>
          <Dropdown.Toggle id="dropdown-basic" className="dropDn" disabled>
            Window tab Filter
          </Dropdown.Toggle>
        </Dropdown>
      );
    };

    DropdownComponent = <DropDownElement />;
  }

  return (
    <>
      <PlaceOrderModal show={modalShow} onHide={() => setModalShow(false)} />
      <HistoricalModal show={openModal2} onHide={() => setOpenModal2(false)} />
      <OrderModal show={modalOpen} onHide={() => setOrderOpen()} />
      <PortfoliModal show={openPModal} onHide={() => setOpenPModal(false)} />
      <FundsModal show={fundModalOpen} onHide={() => setFundModalOpen(false)} />
      <CashbackModal
        show={CashModalOpen}
        onHide={() => setCashModalOpen(false)}
      />

      <div className={darkTheme ? "darkTheme" : ""}>
        <div
          className={
            width
              ? "tem false-sidebar block sideBar activeSide"
              : "true-side false-sidebar sideBar nonActiveSide "
          }
        >
          <div className="false-logo">Logo fx </div>
          <i className="fa-solid fa-x" onClick={() => setWidth(false)}></i>

          <div className="DropdownDiv">{DropdownComponent}</div>

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
              <>
                <div className="sideItem" onClick={() => setPrice(!price)}>
                  {" "}
                  <VscAccount style={{ width: " 20px", height: "20px" }} /> Your
                  Account
                </div>
                {price ? (
                  <span
                    style={{
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
                  onClick={() => setCashModalOpen(true)}
                >
                  <BsCashCoin style={{ width: " 20px", height: "20px" }} />{" "}
                  Cashback
                </div>

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
              </>
            ) : (
              <p style={{ textAlign: "left" }}>
                Please Login To see Profile Features
              </p>
            )}

            <div>
              <Dropdown
                style={{ marginLeft: "0px" }}
                className="ThemeDropDown "
              >
                <Dropdown.Toggle id="dropdown-basic" className="dropDwn">
                  <AiFillSetting
                    style={{
                      width: " 20px",
                      height: "20px",
                      marginLeft: "0px",
                    }}
                  />{" "}
                  Setting
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item onClick={() => setDarkTheme(true)}>
                    Dark Mode
                  </Dropdown.Item>
                  <Dropdown.Item onClick={() => setDarkTheme(false)}>
                    Light Mode
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
              {SessionId && UserId ? (
                <div className="sideItem" onClick={() => LogOut()}>
                  <AiOutlineLogin style={{ width: " 20px", height: "20px" }} />{" "}
                  Logout
                </div>
              ) : (
                ""
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
