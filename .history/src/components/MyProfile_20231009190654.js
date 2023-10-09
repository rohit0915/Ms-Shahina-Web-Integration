/** @format */

import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getAddress, getProfile, removeAddress } from "../Repository/Api";
import AddressModal from "./Drawer/AddressModal";
import ProfileModal from "./Drawer/ProfileModal";

const MyProfile = () => {
  const [profile, setProfile] = useState({});
  const [address, setAddress] = useState([]);
  const [open, setOpen] = useState(false);
  const [title, setTitle] = useState("");
  const [addressType, setAddressType] = useState("");
  const [openProfile, setOpenProfile] = useState(false);

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

          {QueryHandler(profile?.firstName, "First Name ")}
          {QueryHandler(profile?.lastName, "Last Name ")}
          {QueryHandler(profile?.gender, "Gender ")}
          {QueryHandler(profile?.dob, "Date of Birth")}
          {QueryHandler(profile?.countryCode, "Country Code")}
          {QueryHandler(profile?.phone, "Mobile Number")}
          {QueryHandler(profile?.email, "Email Id ")}
        </div>

        <div className="profile_div">
          <div className="heading">
            <p>Shipping Address</p>

            {filterData?.length === 0 ? (
              <button
                onClick={() => {
                  setTitle("Create Address");
                  setAddressType("Shipping");
                  setOpen(true);
                }}
              >
                <img src="/Image/103.png" alt="" />
                Edit Address
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
          </div>

          {QueryHandler(filterData?.[0]?.appartment, "Appartment")}
          {QueryHandler(filterData?.[0]?.city, "City")}
          {QueryHandler(filterData?.[0]?.state, "State")}
          {QueryHandler(filterData?.[0]?.zipCode, "Zip Code")}
          {QueryHandler(filterData?.[0]?.address, "Address")}
        </div>
        <div className="profile_div">
          <div className="heading">
            <p>Billing Address</p>

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
          </div>

          {QueryHandler(billing?.[0]?.appartment, "Appartment")}
          {QueryHandler(billing?.[0]?.city, "City")}
          {QueryHandler(billing?.[0]?.state, "State")}
          {QueryHandler(billing?.[0]?.zipCode, "Zip Code")}
          {QueryHandler(billing?.[0]?.address, "Address")}
        </div>
      </div>
    </>
  );
};

export default MyProfile;
