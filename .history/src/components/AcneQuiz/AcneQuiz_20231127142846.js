/** @format */

import React, { useState } from "react";
import { Link } from "react-router-dom";
import { openQuiz } from "../../store/quizSlice";
import { useDispatch } from "react-redux";

const AcneQuiz = () => {
  const [email, setEmail] = useState("");
  const dispatch = useDispatch();
  return (
    <div className="fixed flex flex-col items-center justify-center top-0 w-screen h-screen  Quiz_Input_Handler Acne_Quiz_Container ">
      <h1 className="text-[4rem] font-light text-primary">
        Enter your Email to Start!
      </h1>
      <div className="flex flex-col gap-32 items-center justify-center mt-44 Input_Cont">
        <input
          className="w-[50rem] py-5 px-14 border border-black "
          type="text"
          placeholder="Enter your Email"
          onChange={(e) => setEmail(e.target.value)}
        />{" "}
        {email ? (
          <Link onClick={() => dispatch(openQuiz())} to={"/acnequiz"}>
            <button className="w-[31rem] bg-primary text-darkSecondary text-2xl font-bold py-5">
              NEXT
            </button>
          </Link>
        ) : (
          <button
            className="w-[31rem]  text-darkSecondary text-2xl font-bold py-5"
            style={{ background: "rgb(235, 235, 228)" }}
            disabled
          >
            NEXT
          </button>
        )}
      </div>
      <div className="acne_quiz_close_btn">
        <img onClick={() => dispatch(openQuiz())} src="/Image/14.png" alt="" />
      </div>
    </div>
  );
};

export default AcneQuiz;
