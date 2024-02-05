/** @format */

import React, { useState, useEffect } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { isAuthenticated, LOGOUT } from "../../store/authSlice";
import { useDispatch, useSelector } from "react-redux";
import MenuOptions from "./MenuOptions";
import { CartItems } from "../../store/cartSlice";
import MobileBar from "../Sidebar/MobileBar";
import { getCart, showMsg } from "../../Repository/Api";
import { DummyCartItems } from "../../store/DummyCart";
import { ServiceItems } from "../../store/DummySerivce";
import SearchHeader from "../Search/SearchHeader";
import { FaHeart } from "react-icons/fa";
import { HashLink } from "react-router-hash-link";
import { ImageLazyLoading } from "../../utils/helpingComponent";

const Navbar = () => {
  const isLoggedIn = useSelector(isAuthenticated);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [cart, setCart] = useState({});
  const myCart = useSelector(CartItems);
  const [dummyLength, setDummyLength] = useState(0);
  const [serviceLength, setServiceLength] = useState(0);
  const dummyItem = useSelector(DummyCartItems);
  const [isOpen, setIsOpen] = useState(false);
  const serviceItem = useSelector(ServiceItems);

  useEffect(() => {
    if (isLoggedIn) {
      dispatch(getCart());
    }
  }, [isLoggedIn]);

  useEffect(() => {
    if (isLoggedIn) {
      setCart(myCart);
    } else {
      setDummyLength(dummyItem?.length);
      setServiceLength(serviceItem?.length);
    }
  }, [isLoggedIn, myCart, dummyItem, serviceItem]);

  const length =
    (cart?.AddOnservicesSchema?.length || 0) +
    (cart?.frequentlyBuyProductSchema?.length || 0) +
    (cart?.gifts?.length || 0) +
    (cart?.products?.length || 0) +
    (cart?.services?.length || 0);

  const myLength = dummyLength + serviceLength;

  function LogoutHandler() {
    dispatch(LOGOUT());
    showMsg("", "Logged Out Successfully", "success");
    navigate("/login");
  }

  const cartReturner = () => {
    return isLoggedIn ? (
      <>
        <div className="cartCountDiv">
          <HashLink to={"/shop#FAVOURITES"}>
            <FaHeart
              className="text-2xl cursor-pointer"
              style={{ cursor: "pointer" }}
            />
          </HashLink>
        </div>
        <div className="cartCountDiv" onClick={() => navigate("/mycart")}>
          <FaShoppingCart
            className="text-2xl cursor-pointer"
            style={{ cursor: "pointer" }}
          />
          <span> {length} </span>
        </div>
      </>
    ) : (
      <div className="cartCountDiv" onClick={() => navigate("/login")}>
        <FaShoppingCart
          className="text-2xl cursor-pointer"
          style={{ cursor: "pointer" }}
        />
        <span> {myLength} </span>
      </div>
    );
  };

  const handleToggleOpen = () => {
    setIsOpen(true);
  };

  return (
    <div className="Nav_Bar" onMouseLeave={() => setIsOpen(false)}>
      <header className="Header">
        <div className="left">
          <Link to={"/"}>
            <ImageLazyLoading img={"/asessts/navbar/logo.png"} alt={""} />
          </Link>
        </div>

        <div className="right-container">
          <img
            src="/asessts/navbar/search.png"
            style={{ cursor: "pointer" }}
            onClick={() => handleToggleOpen()}
            alt=""
          />

          <SearchHeader isOpen={isOpen} setIsOpen={setIsOpen} />

          {cartReturner()}
          {isLoggedIn === true ? (
            <div className="prof-container">
              <img
                src="/asessts/navbar/profile.png"
                alt=""
                style={{ cursor: "pointer" }}
                onClick={() => navigate("/my-profile")}
              />
              <span
                className="text-secondary font-medium cursor-pointer"
                onClick={() => LogoutHandler()}
              >
                Logout
              </span>
            </div>
          ) : (
            <div className="prof-container">
              <img src="/asessts/navbar/profile.png" alt="" />
              <Link
                className="text-secondary font-medium"
                to={"/login"}
                style={{ cursor: "pointer" }}
              >
                <span style={{ fontSize: "20px" }}>LOGIN</span>
              </Link>
            </div>
          )}

          <Link to={"membership"}>
            <img src="/asessts/navbar/crown.png" alt="" />
          </Link>
        </div>
      </header>
      <div
        className="mx-auto mt-5 bigEmptyLine "
        style={{ backgroundColor: "#E5D896", height: "2px", width: "85%" }}
      ></div>
      <MenuOptions />

      <MobileBar />
    </div>
  );
};

export default Navbar;
