/** @format */

import React, { useEffect, useState } from "react";
import { getMembership_terms, takeVerification } from "../../Repository/Api";

const MembershipCard = ({
  medal,
  price,
  type,
  list,
  subList,
  bg,
  require,
  id,
  isSubscription,
}) => {
  const [checked, setIsChecked] = useState(false);

  function checkHandler() {
    setIsChecked(!checked);
  }

  const [terms, setTerms] = useState({});

  useEffect(() => {
    getMembership_terms(setTerms);
  }, []);

  const submitHandler = () => {
    if(checked === true)
    takeVerification(id);
  };

  return (
    <section
      className={`${bg} flex w-96 flex-col border border-orange-600  box-border py-4 rounded-md space-y-8 justify-center card `}
    >
      <div className="flex gap-3 px-4">
        <img className="w-10 h-10" src={medal} alt="d" />
        <div>
          <h1 className="text-4xl text-secondary flex items-center gap-4 font-bold">
            {price}
            <span className="text-2xl text-white font-semibold">{type} </span>
          </h1>

          <p className="text-secondary text-sm font-bold">{require}</p>
        </div>
      </div>
      <div className="text-sm text-white px-8">
        <ul className="list-disc">
          {list?.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
        <ul className="list-none">
          {subList?.map((item, index) => (
            <li className="before:content-['-']" key={index}>
              {item}
            </li>
          ))}
        </ul>
        <ul className="membership_check_box">
          <li>
            <input
              type="checkbox"
              checked={checked}
              onChange={() => checkHandler()}
            />
            <span> {terms?.terms} </span>
          </li>
        </ul>
      </div>

      <button
        className="py-2 mx-auto w-11/12 rounded-md shadow-sm text-primary text-lg bg-secondary font-bold"
        onClick={() => submitHandler()}
      >
        {isSubscription === true ? "UPGRADE NOW" : "BECOME A MEMBER"}
      </button>
    </section>
  );
};

export default MembershipCard;
