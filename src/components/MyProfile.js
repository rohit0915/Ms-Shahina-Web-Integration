/** @format */

import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { View_description } from "../Helper/Herlper";
import { getAddress, getProfile, removeAddress } from "../Repository/Api";
import { DateFormatter, DOBFormater } from "../utils/helpingComponent";
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
          <p className="dark"> {title}: </p>
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
      setBg("#7A8989");
    } else if (profile?.subscriptionId?.plan === "GOLD") {
      setImg("/Image/73.png");
      setBg("#D3A206");
    } else if (profile?.subscriptionId?.plan === "PLATINUM") {
      setImg("/Image/74.png");
      setBg("#545351");
    } else if (profile?.subscriptionId?.plan === "DIAMOND") {
      setImg("/Image/75.png");
      setBg("#51ADF9");
    }
  }, [profile?.subscriptionId]);

  const isSubscriptionActive = profile?.isSubscription;

  function getUpgradeBtn() {
    if (profile?.subscriptionId) {
      if (profile?.subscriptionId?.plan !== "DIAMOND") {
        return (
          <Link to="/membership">
            <button className="first">UPGRADE PLAN</button>
          </Link>
        );
      }
    }
  }

  const membershipTerms = profile?.subscriptionId?.term;
  const subscriptionDate = new Date(profile?.subscriptionExpiration);
  subscriptionDate.setMonth(subscriptionDate.getMonth() - 1);
  const newSubs = subscriptionDate.toISOString();

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
        terms={membershipTerms}
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
          {QueryHandler(profile?.firstName, "First Name")}
          {QueryHandler(profile?.lastName, "Last Name")}
          {QueryHandler(profile?.gender, "Gender")}

          {profile?.dob != null &&
            QueryHandler(DOBFormater(profile?.dob), "Date of Birth")}
          {QueryHandler(profile?.countryCode, "Country Code")}
          {profile?.phone && (
            <div className="two-sec">
              <p className="dark"> Mobile Number: </p>
              <p style={{ display: "flex", alignItems: "center", gap: "2px" }}>
                {" "}
                <i className="fa-solid fa-plus"></i>
                {profile?.phone}{" "}
              </p>
            </div>
          )}
          {QueryHandler(profile?.email, "Email")}
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
          {QueryHandler(filterData?.[0]?.appartment, "Apartment")}
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
          {QueryHandler(billing?.[0]?.appartment, "Apartment")}
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
                <div className={`left`} style={{ backgroundColor: bg }}>
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
                    <p className="strong">Purchased On: </p>
                    <p>
                      {" "}
                      {profile?.subscriptionExpiration &&
                        DateFormatter(newSubs)}
                    </p>
                  </div>
                  <div className="two-sec">
                    <p className="strong">Validity: </p>
                    <p> {profile?.subscriptionId?.month} MONTHS</p>
                  </div>
                  <div className="two-sec">
                    <p className="strong">Details: </p>
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
          <ProductOrder
            isSliced={true}
            heading={true}
            padded={true}
            isMore={true}
          />
        </div>
        <div className="profile_div">
          <div className="heading">
            <p>Upcoming Service </p>
          </div>

          <ServiceOrder
            isSliced={true}
            heading={true}
            padded={true}
            isMore={true}
          />
        </div>
        <div className="profile_div">
          <div className="heading">
            <p>Past Services </p>
          </div>

          <PastServiceOrder
            isSliced={true}
            heading={true}
            padded={true}
            isMore={true}
          />
        </div>
      </div>
    </>
  );
};

export default MyProfile;
