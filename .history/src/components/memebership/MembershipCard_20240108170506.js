/** @format */

import React, { useEffect, useState } from "react";
import { View_description } from "../../Helper/Herlper";
import { getMembership_terms, takeVerification } from "../../Repository/Api";

const MembershipCard = ({
  medal,
  price,
  type,
  list,
  bg,
  require,
  id,
  isSubscription,
}) => {
  const submitHandler = (e) => {
    e.preventDefault();
    takeVerification(id);
  };

  return (
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
            <li>
              <input type="checkbox" required />
              <span> I agree to membership terms and policies</span>
            </li>
          </ul>
        </div>

        <button
          className="py-2 mx-auto w-11/12 rounded-md shadow-sm text-primary text-lg bg-secondary font-bold"
          type="submit"
          style={{ display: "block", margin: " auto", marginTop: "20px" }}
        >
          {isSubscription === true ? "UPGRADE NOW" : "BECOME A MEMBER"}
        </button>
      </form>
    </section>
  );
};

export default MembershipCard;
