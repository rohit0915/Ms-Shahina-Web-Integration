/** @format */

import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { openQuiz } from "../../store/quizSlice";
import AcneQuiz from "../AcneQuiz/AcneQuiz";

const CustomButton = ({ src, btnName, height }) => {
  return (
    <button className="flex items-center justify-center gap-2 px-2 py-1 rounded-lg border border-primary">
      <div className="w-7 h-7">
        <img className="w-full h-full object-contain" src={src} alt={btnName} />
      </div>
      {btnName}
    </button>
  );
};

const TopHeader = () => {
  const dispatch = useDispatch();
  const { isQuizOpen } = useSelector((store) => store.quiz);

  return (
    <header className="top-header-container">
      <div className="Top_Header ">
        <Link to={"/giftcards"}>
          <button className="button-container ">
            <img src="/asessts/topheader/gift.png" alt="" />
            GIFT CARDS
          </button>
        </Link>
        <div onClick={() => dispatch(openQuiz())}>
          <button className="button-container ">
            <img src="/asessts/topheader/bulb.png" alt="" />
            ACNE QUIZ
          </button>
        </div>

        <Link to={"/checkIngredients"}>
        <button className="button-container ">
            <img src="/asessts/topheader/bulb.png" alt="" />
            ACNE QUIZ
          </button>
          <CustomButton
            src={"/asessts/topheader/note.png"}
            btnName="CHECK INGREDIENT"
          />
        </Link>
      </div>
      {isQuizOpen && <AcneQuiz />}
    </header>
  );
};

export default TopHeader;
