/** @format */

import { isArray } from "lodash";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addGiftItem, getGiftCard } from "../../Repository/Api";
import { View_description } from "../../Helper/Herlper";

const GiftCard = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState(null);
  const [item, setItem] = useState([]);
  const [id, setId] = useState("");
  const [email, setEmail] = useState("");
  const [isOther, setIsOther] = useState(false);
  const [price, setPrice] = useState("");
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
    if (value.type === "other") {
      setSelectedValue("other");
      setIsOther(true);
    } else {
      setSelectedValue(value?.price);
      setIsOther(false);
    }
    setId(value?._id);
    setIsOpen(false);
  };

  function BackNavigation() {
    navigate(-1);
  }

  let payload;

  if (isOther) {
    payload = {
      quantity,
      email,
      price,
    };
  } else {
    payload = {
      quantity,
      email,
    };
  }

  const submitHandler = () => {
    dispatch(addGiftItem(id, payload, navigate));
  };

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "instant",
    });
  }, []);

  function SelectedValue() {
    if (selectedValue) {
      if (selectedValue === "other") {
        return selectedValue;
      } else {
        return `$${selectedValue}`;
      }
    }
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
      <div className="GiftCard_Container" style={{ marginTop: "40px" }}>
        {isArray(item) &&
          item?.map((i, index) => (
            <>
              <div
                className="w-[50rem] h-[22rem] mx-auto my-20 Img_Container"
                key={index}
              >
                <div
                  className="gift_card_image"
                  style={{ backgroundImage: `url(${i.image})` }}
                ></div>
              </div>
              <div className="w-[50rem] mx-auto Img_Container">
                <h2
                  className="text-4xl font-bold text-primary text_Title"
                  style={{ fontWeight: "bold" }}
                >
                  {i.name}
                </h2>
                <div className="mt-3 mb-4" />
                <View_description description={i.description} />
                <div className="mt-3 mb-4" />

                <label
                  className="font-bold flex flex-col"
                  style={{ fontSize: "20px", fontFamily: "Poppins" }}
                >
                  <div className="relative inline-block">
                    <div
                      className="w-full border border-black py-5 px-12 flex items-center justify-between cursor-pointer"
                      onClick={toggleSelectBox}
                    >
                      <span> {SelectedValue()}</span>
                      <img
                        className={`w-7 h-7 transition-transform transform ${
                          isOpen ? "rotate-180" : ""
                        }`}
                        src="/Image/77.png"
                        alt="arrow down"
                      />
                    </div>
                    {isOpen && (
                      <div className="absolute bg-white  w-full mt-2 border space-y-4 border-black py-2 px-12 drop_values ">
                        <div className="cursor-pointer text-3xl hover:bg-gray-300"></div>
                        {i?.priceArray?.map((item, index) => (
                          <div
                            key={`option${index}`}
                            className="cursor-pointer text-2xl hover:bg-gray-300"
                            onClick={() => handleOptionClick(item)}
                          >
                            {item.price
                              ? `$${item.price}` 
                              : `$${item.price} `}
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

                {isOther && (
                  <div>
                    <input
                      type="number"
                      className="InputEmail"
                      placeholder="Enter Amount"
                      onChange={(e) => {
                        setPrice(e.target.value);
                      }}
                    />
                  </div>
                )}

                {selectedValue && (
                  <div className="flex justify-center font-bold  items-center mt-16">
                    <div className="flex items-center gap-10">
                      <h3 className="text-2xl  text-mediumGray">Price : </h3>
                      <span className="text-2xl  text-black">
                        {selectedValue === "other" ? `` : `$${selectedValue}`}
                      </span>
                    </div>
                  </div>
                )}

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
