/** @format */

import React, { useState } from "react";
import { Header } from "../../utils/helpingComponent";
import { quiz1, quiz2, quiz3, quiz4 } from "../../constants/quizConstants";
import { BiArrowBack } from "react-icons/bi";
import Question from "./Question";
import { useNavigate } from "react-router-dom";

const Quiz = () => {
  const [step, setStep] = useState(1);
  const navigate = useNavigate();

  function BackNavigation() {
    navigate(-1);
  }

  function Reverse(){
    if(step === 0) {
      
    }else{
      setStep(step -1)
    }
  }

  return (
    <div className="mb-14">
      <div className="Backward_Heading step_Heading">
        <div>
          <img src="/Image/1.png" alt="" onClick={() => BackNavigation()} />
        </div>
        <p className="title">Acne Quiz</p>
      </div>

      <div className="w-11/12 border border-black mx-auto py-14 px-14">
        <h3 className="text-4xl flex items-center text-primary font-medium">
          <span
            className="mr-9 cursor-pointer"
            onClick={() => if(step === 0) {

            }else{
              setStep(step - 1)
            }}
          >
            <BiArrowBack />
          </span>
          STEP {step} OF 4
        </h3>
        {step === 1 && (
          <Question
            quiz={quiz1}
            text={"What is your Type?"}
            styles={"w-72 h-72"}
            setStep={setStep}
            step={step}
          />
        )}
        {step === 2 && (
          <Question
            text={"What is your Acne Type?"}
            quiz={quiz2}
            setStep={setStep}
            step={step}
          />
        )}
        {step === 3 && (
          <Question
            text="Which of these do you consider your Acne?"
            quiz={quiz3}
            setStep={setStep}
            step={step}
          />
        )}
        {step === 4 && (
          <Question
            text="Are you Extremely Sensitive or Reactive?"
            quiz={quiz4}
            setStep={setStep}
            step={step}
          />
        )}
      </div>
    </div>
  );
};

export default Quiz;
