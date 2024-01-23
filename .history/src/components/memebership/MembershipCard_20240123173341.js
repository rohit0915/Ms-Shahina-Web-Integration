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
  fetchAll
}) => {
  const isLoggedIn = useSelector(isAuthenticated);
  const navigate = useNavigate("");
  const [profile, setProfile] = useState({});
  const [open, setOpen] = useState(false);

  const submitHandler = (e) => {
    e.preventDefault();
    takeVerification(id);
  };

  function handleLogin() {
    showMsg("", "Login to Proceed !", "info");
    navigate("/login");
  }

  const fechProfile = useCallback(() => {
    getProfile(setProfile);
  }, []);

  useEffect(() => {
    fechProfile();
  }, []);

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
      <SubsModal open={open} setOpen={setOpen} fetchHandler={fechProfile} />
      <section
        className={`${bg} flex flex-col border border-orange-600  box-border py-4 rounded-md space-y-8 justify-center card membership_card`}
      >
        <div className="flex gap-3 px-4 membership_card_header">
          <img className="w-10 h-10" src={medal} alt="d" />
          <div>
            <h1 className="text-4xl text-secondary flex items-center gap-4 font-bold">
              {price}
              <span className="text-2xl text-white font-semibold">{type} </span>
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
                <span> I Agree to Membership Terms and Policies</span>
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
