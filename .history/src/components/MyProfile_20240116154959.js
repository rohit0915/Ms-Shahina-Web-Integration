/** @format */

import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { View_description } from "../Helper/Herlper";
import {
  cancelSubscription,
  getAddress,
  getProfile,
  removeAddress,
  RenewMembership,
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

  const renew_membership = () => {
    RenewMembership();
  };

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
    console.log(original.getMonth());
    console.log(original.getDate());
    console.log(original.getFullYear());
    const month = original.getMonth() + 1;
    const date = original.getDate();
    const year = original.getFullYear();
    return month && date && year { 
      <div className="two-sec">
      <p className="dark"> {title} : </p>
      <p> {query} </p>
    </div>
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
      />
      <ProfileModal
        open={openProfile}
        setOpen={setOpenProfile}
        fetchHandler={fechProfile}
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
          {QueryHandler(profile?.dob, "Date of Birth")}
          {QueryHandler(profile?.countryCode, "Country Code")}

          {DOBfetcher()}

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

          {QueryHandler(filterData?.[0]?.appartment, "Appartment")}
          {QueryHandler(filterData?.[0]?.city, "City")}
          {QueryHandler(filterData?.[0]?.state, "State")}
          {QueryHandler(filterData?.[0]?.zipCode, "Postal Code")}
          {QueryHandler(filterData?.[0]?.address, "Address")}
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

          {QueryHandler(billing?.[0]?.appartment, "Appartment")}
          {QueryHandler(billing?.[0]?.city, "City")}
          {QueryHandler(billing?.[0]?.state, "State")}
          {QueryHandler(billing?.[0]?.zipCode, "Postal Code")}
          {QueryHandler(billing?.[0]?.address, "Address")}
        </div>

        <div className="profile_div">
          <div className="heading">
            <p>My Membership</p>
            {profile?.isSubscription === true ? (
              <button onClick={() => renew_membership()}>
                Renew Membership
              </button>
            ) : (
              <button onClick={() => navigate("/membership")}>
                Take Membership
              </button>
            )}
          </div>

          {profile?.isSubscription === true && (
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
                    <p> {profile?.subscriptionId?.createdAt?.slice(0, 10)} </p>
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
                <Link to="/membership">
                  <button className="first">UPGRADE PLAN</button>
                </Link>
                <button onClick={() => setSubOpen(true)}>CANCEL PLAN</button>
              </div>
            </div>
          )}
        </div>
        <div className="profile_div">
          <div className="heading">
            <p>Product Order History</p>
          </div>
          <ProductOrder />
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
