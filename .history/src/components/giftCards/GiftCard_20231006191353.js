/** @format */

import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { addGiftItem, getGiftCard } from "../../Repository/Api";

const options = [100, 50, 150, 200, 300];
const GiftCard = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState(100);
  const [item, setItem] = useState([]);

  useEffect(() => {
    getGiftCard(setItem);
  }, []);


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

  function submitHandler () {
    addGiftItem(id)
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
        {item?.map((i, index) => (
          <>
            <div className="w-[50rem] h-[22rem] mx-auto my-20" key={index}>
              <img
                className="w-full h-full object-cover"
                src={i.image}
                alt="card"
              />
            </div>
            <div className="w-[50rem] mx-auto">
              <h2 className="text-2xl font-bold text-primary ">{i.name}</h2>
              <p className="text-mediumGray text-1xl my-8">{i.description}</p>
              <label className="text-2xl font-bold flex flex-col">
                TITLE
                <div className="relative inline-block">
                  <div
                    className="w-full border border-black py-5 px-12 flex items-center justify-between cursor-pointer"
                    onClick={toggleSelectBox}
                  >
                    <span>${selectedValue}</span>
                    <img
                      className={`w-7 h-7 transition-transform transform ${
                        isOpen ? "rotate-180" : ""
                      }`}
                      src="/Image/77.png"
                      alt="arrow down"
                    />
                  </div>
                  {isOpen && (
                    <div className="absolute bg-white  w-full mt-2 border space-y-4 border-black py-2 px-12">
                      {options.map((item, index) => (
                        <div
                          key={`option${index}`}
                          className="cursor-pointer text-3xl hover:bg-gray-300"
                          onClick={() => handleOptionClick(item)}
                        >
                          ${item}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </label>
              <div className="flex justify-between font-bold  items-center mt-16">
                <div className="flex items-center gap-10">
                  <h3 className="text-2xl  text-mediumGray">Price : </h3>
                  <span className="text-2xl  text-black">
                    ${i.discountPrice}
                  </span>
                </div>
                <span className="text-2xl line-through text-black ">
                  ${i.price}
                </span>{" "}
                <span className="text-primary text-xl">
                  You Save {i.discount}% (${i.saved})
                </span>
              </div>
              <div className="flex justify-center mt-32">
                <Link to="/giftCrat">
                  <button className="text-darkSecondary text-1xl font-bold w-[31rem] bg-primary py-4 ">
                    PURCHASE NOW
                  </button>
                </Link>
              </div>
            </div>
          </>
        ))}
      </div>
    </div>
  );
};

export default GiftCard;
