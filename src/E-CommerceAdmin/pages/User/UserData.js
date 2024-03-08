/** @format */

import React, { useEffect, useState } from "react";
import HOC from "../../layout/HOC";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { Button } from "react-bootstrap";
import { DateInMMDDYY } from "../../../Helper/Helper";

const UserData = () => {
  const { id } = useParams();
  const [user, setUser] = useState([]);
  const navigate = useNavigate();

  const getUser = async () => {
    try {
      const { data } = await axios.get(
        `${process.env.React_App_Baseurl}api/v1/admin/viewUser/${id}`
      );
      setUser(data.data);
    } catch (e) {
      console.log(e);
    }
  };
  useEffect(() => {
    getUser();
  }, []);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "instant",
    });
  }, []);

  function ValueChecker(holder, string) {
    return holder ? (
      <div className="Desc-Container">
        <p className="title"> {string} </p>
        <p className="desc"> {holder} </p>
      </div>
    ) : (
      ""
    );
  }

 

  return (
    <>
      <section className="sectionCont">
        <p className="headP">Dashboard / {user?.firstName} </p>

        <div className="img-cont">
          <img src={user?.image} alt="" className="centerImage" />
        </div>
        {ValueChecker(user?.clientID, "Client ID")}
        {ValueChecker(user?.firstName, "First Name")}
        {ValueChecker(user?.lastName, "Last Name")}
        {ValueChecker(user?.fullName, "Full Name")}
        {ValueChecker(user?.userStatus, "Status")}
        {ValueChecker(
          user?.sendEmailMarketingNotification ? "Yes" : "No",
          "Accepts Marketing"
        )}
        {ValueChecker(
          user?.sendEmailNotification ? "Yes" : "No",
          "Accepts SMS Marketing"
        )}
        {user?.dob &&  ValueChecker(DateInMMDDYY(user?.dob), "Date of Birth") }
        {ValueChecker(user?.email, "Email Address")}
        {ValueChecker(user?.countryCode, "Country Code")}
        {ValueChecker(user?.phone, "Phone Number")}
        {ValueChecker(user?.gender, "Gender")}
        {ValueChecker(user?.refferalCode, "Refferal Code")}
        {ValueChecker(user?.referralSource, "Refferal Source")}
        {ValueChecker(user?.bio, "Note")}
        {user?.subscriptionExpiration &&  ValueChecker(DateInMMDDYY(user?.subscriptionExpiration), "Subscription Expiration") }
        {user?.createdAt &&  ValueChecker(DateInMMDDYY(user?.createdAt), "Add On")}
        {ValueChecker(
          user?.isSubscription ? "Active" : "Not Active",
          "Subscription"
        )}

        <Button variant="dark" onClick={() => navigate(-1)}>
          Back
        </Button>
      </section>
    </>
  );
};

export default HOC(UserData);
