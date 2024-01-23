/** @format */

import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { openQuiz } from "../../store/quizSlice";
import AcneQuiz from "../AcneQuiz/AcneQuiz";



const TopHeader = () => {
  const dispatch = useDispatch();
  const { isQuizOpen } = useSelector((store) => store.quiz);
  function onClose 

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
            <img src="/asessts/topheader/note.png" alt="" />
            CHECK INGREDIENTS
          </button>
        </Link>
      </div>
      {isQuizOpen && <AcneQuiz />}
    </header>
  );
};

export default TopHeader;
