/** @format */

import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { View_description } from "../Helper/Herlper";
import {
  getAddress,
  getProductOrder,
  getProfile,
  removeAddress,
} from "../Repository/Api";
import AddressModal from "./Drawer/AddressModal";
import ProfileModal from "./Drawer/ProfileModal";
import SubsModal from "./Drawer/SubsModal";
import PastServiceOrder from "./Orders/PastServiceOrder";
import ProductOrder from "./Orders/ProductOrder";
import ServiceOrder from "./Orders/ServiceOrder";

const MyProfile = () => {
  const [profile, setProfile] = useState({});
  const [address, setAddress] = useState([]);
  const [open, setOpen] = useState(false);
  const [title, setTitle] = useState("");
  const [addressType, setAddressType] = useState("");
  const [openProfile, setOpenProfile] = useState(false);
  const [img, setImg] = useState("");
  const [bg, setBg] = useState("");
  const [subOpen, setSubOpen] = useState(false);
  const [data, setData] = useState([]);
  const [product_order, setProductOrders] = useState([]);

  const removeHandler = async (id) => {
    await removeAddress(id);
    fetchHandler();
  };

  const fetchHandler = () => {
    getAddress(setAddress);
  };

  function fechProfile() {
    getProfile(setProfile);
  }

  useEffect(() => {
    fechProfile();
    fetchHandler();
    getProductOrder(setProductOrders);
  }, []);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "instant",
    });
  }, []);

  const navigate = useNavigate();

  function QueryHandler(query, title) {
    if (query) {
      return (
        <div className="two-sec">
          <p className="dark"> {title} : </p>
          <p> {query} </p>
        </div>
      );
    }
  }

  const filterData = address?.filter((i) => i?.addressType === "Shipping");
  const billing = address?.filter((i) => i?.addressType === "Billing");

  useEffect(() => {
    if (profile?.subscriptionId?.plan === "SILVER") {
      setImg("/Image/72.png");
      setBg("silver");
    } else if (profile?.subscriptionId?.plan === "GOLD") {
      setImg("/Image/73.png");
      setBg("gold");
    } else if (profile?.subscriptionId?.plan === "PLATINUM") {
      setImg("/Image/74.png");
      setBg("platinum");
    } else if (profile?.subscriptionId?.plan === "DIAMOND") {
      setImg("/Image/75.png");
      setBg("diamond");
    }
  }, [profile?.subscriptionId]);

  function DOBfetcher() {
    const original = new Date(profile?.dob);
    const month = original.getMonth() + 1;
    const date = original.getDate();
    const year = original.getFullYear();
    const hasAll = month && year && date;
    return (
      hasAll && (
        <div className="two-sec">
          <p className="dark"> Date of Birth : </p>
          <p>
            {" "}
            {`${month < 9 ? `0${month}` : month}-${
              date < 9 ? `0${date}` : date
            }-${year}  `}{" "}
          </p>
        </div>
      )
    );
  }

  const isSubscriptionActive = profile?.isSubscription;

  function getSubscriptionDate() {
    if (profile?.subscriptionId) {
      if (profile?.subscriptionId?.updatedAt) {
        const original = new Date(profile?.subscriptionId?.updatedAt);
        const month = original.getMonth() + 1;
        const date = original.getDate();
        const year = original.getFullYear();
        return (
          <p>
            {" "}
            {`${month < 9 ? `0${month}` : month}-${
              date < 9 ? `0${date}` : date
            }-${year}  `}
          </p>
        );
      } else {
        const original = new Date(profile?.subscriptionId?.createdAt);
        const month = original.getMonth() + 1;
        const date = original.getDate();
        const year = original.getFullYear();
        return (
          <p>
            {" "}
            {`${month < 9 ? `0${month}` : month}-${
              date < 9 ? `0${date}` : date
            }-${year}  `}
          </p>
        );
      }
    }
  }

  function getUpgradeBtn() {
    if (profile?.subscriptionId) {
      if (profile?.subscriptionId?.plan != "DIAMOND") {
        return (
          <Link to="/membership">
            <button className="first">UPGRADE PLAN</button>
          </Link>
        );
      }
    }
  }

  return (
    <>
      <AddressModal
        open={open}
        setOpen={setOpen}
        title={title}
        addressType={addressType}
        fetchHandler={fetchHandler}
        data={data}
      />
      <ProfileModal
        open={openProfile}
        setOpen={setOpenProfile}
        fetchHandler={fechProfile}
        data={profile}
      />
      <SubsModal
        open={subOpen}
        setOpen={setSubOpen}
        fetchHandler={fechProfile}
      />
      <div style={{ padding: "20px" }}>
        <div className="Backward_Heading step_Heading">
          <div>
            <img src="/Image/1.png" alt="" onClick={() => navigate(-1)} />
          </div>
          <p className="title">My Profile</p>
        </div>

        <div className="profile_div">
          <div className="heading">
            <p>Profile Details</p>

            <button onClick={() => setOpenProfile(true)}>
              <img src="/Image/103.png" alt="" />
              EDIT PROFILE
            </button>
          </div>
          {profile?.image && (
            <img src={profile?.image} alt="" className="Profile_Image" />
          )}
          {QueryHandler(profile?.firstName, "First Name ")}
          {QueryHandler(profile?.lastName, "Last Name ")}
          {QueryHandler(profile?.gender, "Gender ")}
          {DOBfetcher()}
          {QueryHandler(profile?.countryCode, "Country Code")}
          {profile?.phone && (
            <div className="two-sec">
              <p className="dark"> Mobile Number : </p>
              <p style={{ display: "flex", alignItems: "center", gap: "2px" }}>
                {" "}
                <i className="fa-solid fa-plus"></i>
                {profile?.phone}{" "}
              </p>
            </div>
          )}
          {QueryHandler(profile?.email, "Email Id ")}
        </div>

        <div className="profile_div">
          <div className="heading">
            <p>Shipping Address</p>

            <div
              style={{ display: "flex", gap: "20px" }}
              className="button_Cont"
            >
              {filterData?.length === 0 ? (
                <button
                  onClick={() => {
                    setData([]);
                    setTitle("Create Address");
                    setAddressType("Shipping");

                    setOpen(true);
                  }}
                >
                  Create Address
                </button>
              ) : (
                <button
                  onClick={() => {
                    setData(filterData);
                    setTitle("Edit Address");
                    setAddressType("Shipping");
                    setOpen(true);
                  }}
                >
                  <img src="/Image/103.png" alt="" />
                  Edit Address
                </button>
              )}

              {filterData?.length > 0 && (
                <button
                  onClick={() => {
                    removeHandler(filterData?.[0]?._id);
                  }}
                >
                  Remove Address
                </button>
              )}
            </div>
          </div>
          {QueryHandler(filterData?.[0]?.address, "Address")}
          {QueryHandler(filterData?.[0]?.appartment, "Appartment")}
          {QueryHandler(filterData?.[0]?.city, "City")}
          {QueryHandler(filterData?.[0]?.state, "State")}
          {QueryHandler(filterData?.[0]?.zipCode, "Zip Code")}
        </div>
        <div className="profile_div">
          <div className="heading">
            <p>Billing Address</p>

            <div
              style={{ display: "flex", gap: "20px" }}
              className="button_Cont"
            >
              {billing?.length === 0 ? (
                <button
                  onClick={() => {
                    setData([]);
                    setTitle("Create Address");
                    setAddressType("Billing");
                    setOpen(true);
                  }}
                >
                  Create Address
                </button>
              ) : (
                <button
                  onClick={() => {
                    setData(billing);
                    setTitle("Edit Address");
                    setAddressType("Billing");
                    setOpen(true);
                  }}
                >
                  <img src="/Image/103.png" alt="" />
                  Edit Address
                </button>
              )}

              {billing?.length > 0 && (
                <button
                  onClick={() => {
                    removeHandler(billing?.[0]?._id);
                  }}
                >
                  Remove Address
                </button>
              )}
            </div>
          </div>
          {QueryHandler(billing?.[0]?.address, "Address")}
          {QueryHandler(billing?.[0]?.appartment, "Appartment")}
          {QueryHandler(billing?.[0]?.city, "City")}
          {QueryHandler(billing?.[0]?.state, "State")}
          {QueryHandler(billing?.[0]?.zipCode, "Zip Code")}
        </div>

        <div className="profile_div">
          <div className="heading">
            <p>My Membership</p>
            {!isSubscriptionActive && (
              <button onClick={() => navigate("/membership")}>
                Become a member
              </button>
            )}
          </div>

          {isSubscriptionActive && (
            <div className="subscription">
              <div className="container">
                <div className={`left ${bg}`}>
                  <img src={img} alt="" />
                  <div className="two-sec">
                    <p className="price">${profile?.subscriptionId?.price}</p>
                    <p className="name"> {profile?.subscriptionId?.plan} </p>
                  </div>

                  <p className="commintment">
                    {" "}
                    {profile?.subscriptionId?.month} MONTH COMMITMENT REQUIRED
                  </p>
                </div>
                <div className="right">
                  <div className="two-sec">
                    <p className="strong">Purchased On : </p>
                    {getSubscriptionDate()}
                  </div>
                  <div className="two-sec">
                    <p className="strong">Validity : </p>
                    <p> {profile?.subscriptionId?.month} MONTHS</p>
                  </div>
                  <div className="two-sec">
                    <p className="strong">Details : </p>
                  </div>
                  <div className="two-sec">
                    <View_description
                      description={profile?.subscriptionId?.details}
                    />
                  </div>
                </div>
              </div>

              <div className="two-btn">
                {getUpgradeBtn()}
                <button onClick={() => setSubOpen(true)}>
                  CANCEL MEMBERSHIP
                </button>
              </div>
            </div>
          )}
        </div>
        <div className="profile_div">
          <div className="heading">
            <p>Product Order History</p>
          </div>
          <div className="user_product_order">
            {product_order?.length === 0 ? (
              <div className="Not-Found">
                <img src="/Image/out-of-stock.png" alt="" />
                <h5> You have no past orders.</h5>
              </div>
            ) : (
              <>
                {product_order?.slice(0,4)?.map((item) =>
                  item?.products?.map((i, index) => (
                    <div className="Items" key={`productOrder${index}`}>
                      <img
                        src={i.productId?.productImages?.[0]?.image}
                        alt=""
                        className="thumb"
                      />
                      <div className="content">
                        <div
                          style={{
                            display: "flex",
                            gap: "40px",
                            alignItems: "center",
                          }}
                          className="Spec"
                        >
                          <p className="title" style={{ margin: 0 }}>
                            {i?.productId?.name}{" "}
                          </p>{" "}
                          <p className="title" style={{ fontSize: "24px" }}>
                            {" "}
                            ${i?.price}
                          </p>
                        </div>
                        <p
                          className="orderId"
                          style={{
                            fontWeight: "bold",
                            fontSize: "20px",
                          }}
                        >
                          OrderId : {item?.orderId}
                        </p>{" "}
                        <p className="orderId" style={{ color: "#A9A9A9" }}>
                          Date : {item?.date?.slice(0, 10)}
                        </p>{" "}
                        <p className="orderId" style={{ color: "#A9A9A9" }}>
                          {" "}
                          Sub-Total ${item?.subTotal}
                        </p>{" "}
                        <p className="orderId " style={{ color: "#A9A9A9" }}>
                          {" "}
                          Membership Discount : ${item?.memberShip}
                        </p>{" "}
                        <div className="button-container">
                          <button
                            onClick={() =>
                              navigate(`/product/${i?.productId?._id}`)
                            }
                            style={{
                              background: "#042b26",
                              border: "1px solid #042b26",
                              color: "#e5d896",
                            }}
                          >
                            View Product
                          </button>
                        </div>
                      </div>
                    </div>
                  ))
                )}

                {product_order?.map((item) =>
                  item?.frequentlyBuyProductSchema?.map((i, index) => (
                    <div className="Items" key={`frequent${index}`}>
                      <img
                        src={
                          i.frequentlyBuyProductId?.products?.[0]
                            ?.productImages?.[0]?.image
                        }
                        alt=""
                        className="thumb"
                      />
                      <div className="content">
                        <div className="Related_Product_Container">
                          <p
                            className="title Related_Product"
                            style={{ margin: 0 }}
                          >
                            {i.frequentlyBuyProductId?.products?.map(
                              (product, index) => (
                                <>
                                  <span> {product.name} </span>
                                  <img
                                    src="/Image/96.png"
                                    key={`Product_Image_Carousel_Images_Img${index}`}
                                    className="plus"
                                    alt=""
                                  />
                                </>
                              )
                            )}
                          </p>{" "}
                          <p className="title" style={{ fontSize: "24px" }}>
                            {" "}
                            ${i?.price}
                          </p>
                        </div>
                        <p
                          className="orderId"
                          style={{
                            fontWeight: "bold",
                            fontSize: "20px",
                          }}
                        >
                          OrderId : ${item?.orderId}
                        </p>{" "}
                        <p className="orderId" style={{ color: "#A9A9A9" }}>
                          Date : {item?.date?.slice(0, 10)}
                        </p>{" "}
                        <p className="orderId" style={{ color: "#A9A9A9" }}>
                          {" "}
                          Sub-Total ${item?.subTotal}
                        </p>{" "}
                        <p className="orderId " style={{ color: "#A9A9A9" }}>
                          {" "}
                          Membership Discount : ${item?.memberShip}
                        </p>{" "}
                        <div className="button-container">
                          <button
                            onClick={() =>
                              navigate(`/product/${i?.productId?._id}`)
                            }
                            style={{
                              background: "#042b26",
                              border: "1px solid #042b26",
                              color: "#e5d896",
                            }}
                          >
                            View Product
                          </button>
                        </div>
                      </div>
                    </div>
                  ))
                )}
              </>
            )}
          </div>
        </div>
        <div className="profile_div">
          <div className="heading">
            <p>Upcoming Service </p>
          </div>

          <ServiceOrder />
        </div>
        <div className="profile_div">
          <div className="heading">
            <p>Past Services </p>
          </div>

          <PastServiceOrder />
        </div>
      </div>
    </>
  );
};

export default MyProfile;
