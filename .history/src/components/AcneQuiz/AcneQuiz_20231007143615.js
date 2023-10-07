import React from "react";
import { Link } from "react-router-dom";
import { openQuiz } from "../../store/quizSlice";
import { useDispatch } from "react-redux";

const AcneQuiz = () => {
  const dispatch = useDispatch();
  return (
    <div className="fixed flex flex-col items-center justify-center top-0 w-screen h-screen bg-white z-[1000]">
      <h1 className="text-[4rem] font-light text-primary">
        Enter your Email to Start!
      </h1>
      <div className="flex flex-col gap-32 items-center justify-center mt-44">
        <input
          className="w-[50rem] py-5 px-14 border border-black "
          type="text"
          placeholder="Enter your Email"
        />{" "}
        <Link onClick={() => dispatch(openQuiz())} to={"/acnequiz"}>
          <button className="w-[31rem] bg-primary text-darkSecondary text-2xl font-bold py-5">
            NEXT
          </button>
        </Link>
      </div>
      <div className="w-12 h-8  absolute top-3 right-11">
        <img
          onClick={() => dispatch(openQuiz())}
          className="w-full h-full object-cover cursor-pointer"
          src=""
          alt="close"
        />
      </div>
    </div>
  );
};

export default AcneQuiz;
