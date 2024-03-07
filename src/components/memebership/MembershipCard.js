/** @format */

import React, { useCallback, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { View_description } from "../../Helper/Herlper";
import { getProfile, showMsg, takeVerification } from "../../Repository/Api";
import { isAuthenticated } from "../../store/authSlice";
import SubsModal from "../Drawer/SubsModal";

const MembershipCard = ({
  medal,
  price,
  type,
  list,
  bg,
  require,
  id,
  term,
  fetchAll,
  profile,
}) => {
  const isLoggedIn = useSelector(isAuthenticated);
  const navigate = useNavigate("");
  const [open, setOpen] = useState(false);

  const submitHandler = (e) => {
    e.preventDefault();
    takeVerification(id);
  };

  function handleLogin() {
    showMsg("", "Login to Proceed !", "info");
    navigate("/login");
  }

  const subscriptionId = profile?.subscriptionId?._id;

  const MembershipBtn = () => {
    if (isLoggedIn) {
      if (profile && profile?.isSubscription === true) {
        if (subscriptionId === id) {
          return (
            <button
              className="py-2 mx-auto w-11/12 rounded-md shadow-sm text-primary text-lg bg-secondary font-bold"
              type="button"
              style={{ display: "block", margin: " auto", marginTop: "20px" }}
              onClick={() => setOpen(true)}
            >
              {" "}
              CANCEL MEMBERSHIP{" "}
            </button>
          );
        } else {
          return (
            <button
              className="py-2 mx-auto w-11/12 rounded-md shadow-sm text-primary text-lg bg-secondary font-bold"
              type="submit"
              style={{ display: "block", margin: " auto", marginTop: "20px" }}
            >
              UPGRADE NOW
            </button>
          );
        }
      } else {
        return (
          <button
            className="py-2 mx-auto w-11/12 rounded-md shadow-sm text-primary text-lg bg-secondary font-bold"
            type="submit"
            style={{ display: "block", margin: " auto", marginTop: "20px" }}
          >
            BECOME A MEMBER
          </button>
        );
      }
    } else {
      return (
        <button
          className="py-2 mx-auto w-11/12 rounded-md shadow-sm text-primary text-lg bg-secondary font-bold"
          type="button"
          onClick={handleLogin}
          style={{ display: "block", margin: " auto", marginTop: "20px" }}
        >
          BECOME A MEMBER
        </button>
      );
    }
  };

  return (
    <>
      <SubsModal open={open} setOpen={setOpen} fetchHandler={fetchAll} />
      <section
        className={`${bg} flex flex-col    box-border py-4 rounded-md space-y-8 justify-center card membership_card`}
        style={{ border: "2px solid rgb(229, 216, 150)" }}
      >
        <div className="flex gap-3 px-4 membership_card_header">
          <img className="w-10 h-10 image_subs" src={medal} alt="d" />
          <div>
            <h1 className="text-2xl text-secondary flex items-center gap-2 font-bold">
              <span>
                <span className="Price">{price}</span>
                <span className="mon" style={{ fontSize: "12px" }}>
                  {" "}
                  /month
                </span>
              </span>
              <span className="text-white font-semibold plan_mobile ">
                {type}{" "}
              </span>
            </h1>

            <p className="text-secondary text-sm font-bold">{require}</p>
          </div>
        </div>
        <form onSubmit={submitHandler}>
          <div className="text-sm text-white px-8">
            <View_description description={list} />

            <ul className="membership_check_box">
              {term && (
                <li>
                  <a
                    href={term}
                    className="terms"
                    target="_blank"
                    rel="noreferrer"
                  >
                    View Membership Terms
                  </a>
                </li>
              )}

              <li>
                <input type="checkbox" required />
                <span > I Agree to Membership Terms and Policies</span>
              </li>
            </ul>
          </div>

          {MembershipBtn()}
        </form>
      </section>
    </>
  );
};

export default MembershipCard;
