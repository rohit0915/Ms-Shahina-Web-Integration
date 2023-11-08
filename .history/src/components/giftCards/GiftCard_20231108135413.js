/** @format */

import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addGiftItem, getGiftCard } from "../../Repository/Api";

const GiftCard = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState(100);
  const [item, setItem] = useState([]);
  const [id, setId] = useState("");
  const [email, setEmail] = useState("");
  const dispatch = useDispatch();
  const quantity = 1;

  useEffect(() => {
    getGiftCard(setItem);
  }, []);

  const navigate = useNavigate();

  const toggleSelectBox = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (value) => {
    setSelectedValue(value?.price);
    setId(value?._id);
    setIsOpen(false);
  };

  console.log(selectedValue);
  function BackNavigation() {
    navigate(-1);
  }

  const submitHandler = () => {
    dispatch(addGiftItem(id, quantity, navigate, email));
  };

  return (
    <div className="my-20">
      {" "}
      <div className="Backward_Heading step_Heading">
        <div>
          <img src="/Image/1.png" alt="" onClick={() => BackNavigation()} />
        </div>
        <p className="title">Gift Cards</p>
      </div>
      <div className="GiftCard_Container" style={{ marginTop: "40px" }}>
        {item?.map((i, index) => (
          <>
            <div
              className="w-[50rem] h-[22rem] mx-auto my-20 Img_Container"
              key={index}
            >
              <img
                className="w-full h-full object-cover"
                src={i.image}
                alt="card"
              />
            </div>
            <div className="w-[50rem] mx-auto Img_Container">
              <h2
                className="text-4xl font-bold text-primary text_Title"
                style={{ fontWeight: "bold" }}
              >
                {i.name}
              </h2>
              <p className="text-mediumGray text-1xl my-8">{i.description}</p>
              <label
                className="font-bold flex flex-col"
                style={{ fontSize: "20px", fontFamily: "Poppins" }}
              >
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
                      <div className="cursor-pointer text-3xl hover:bg-gray-300"></div>
                      {i?.priceArray?.map((item, index) => (
                        <div
                          key={`option${index}`}
                          className="cursor-pointer text-3xl hover:bg-gray-300"
                          onClick={() => handleOptionClick(item)}
                        >
                          ${item.price}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </label>

              <div>
                <input
                  type="email"
                  className="InputEmail"
                  placeholder="Enter Email to sent gift card"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <div className="flex justify-center font-bold  items-center mt-16">
                <div className="flex items-center gap-10">
                  <h3 className="text-2xl  text-mediumGray">Price : </h3>
                  <span className="text-2xl  text-black">${selectedValue}</span>
                </div>
              </div>
              <div className="flex justify-center mt-32">
                <button
                  className="text-darkSecondary text-1xl font-bold w-[31rem] bg-primary py-4 "
                  style={{ fontSize: "24px" }}
                  onClick={() => submitHandler()}
                >
                  PURCHASE NOW
                </button>
              </div>
            </div>
          </>
        ))}
      </div>
    </div>
  );
};

export default GiftCard;
