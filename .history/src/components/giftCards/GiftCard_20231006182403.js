/** @format */

import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { getGiftCard } from "../../Repository/Api";

const options = [100, 50, 150, 200, 300];
const GiftCard = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState(100);
  const [item, setItem] = useState([]);

  useEffect(() => {
    getGiftCard(setItem);
  }, []);

  console.log(item)

  const navigate = useNavigate();

  const toggleSelectBox = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (value) => {
    setSelectedValue(value);
    setIsOpen(false);
  };

  function BackNavigation() {
    navigate(-1);
  }
  return (
    <div className="my-20">
      {" "}
      <div className="Backward_Heading step_Heading">
        <div>
          <img src="/Image/1.png" alt="" onClick={() => BackNavigation()} />
        </div>
        <p className="title">Gift Cards</p>
      </div>

      <div className="w-[72rem] h-[92rem] border border-black mx-auto">
      {item?.map((i ,index) => (

      ) )}
       
      </div>
    </div>
  );
};

export default GiftCard;
