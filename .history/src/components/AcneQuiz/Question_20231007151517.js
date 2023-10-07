/** @format */

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ReviewQuiz } from "../../Repository/Api";

const Question = ({
  styles,
  text,
  setStep,
  step,
  option1,
  option1image,
  option2,
  option2image,
  option3,
  option3image,
  option4,
  option4image,
}) => {
  const [answer1, setAnswer1] = useState("");
  const [answer2, setAnswer2] = useState("");
  const [answer3, setAnswer3] = useState("");
  const [answer4, setAnswer4] = useState("");

  const navigate = useNavigate();

  const payload = { answer1 , answer2 , answer3 , answer4 }

  const submitHandler = () => {
    ReviewQuiz(payload)
  }

  const handleClick = (setQuery, option) => {
    if (step === 4) {
      setQuery(option);
      navigate("/acnequiz/recomended");
    } else {
      setQuery(option);
      step > 0 && setStep(step + 1);
    }
  };
  return (
    <>
      <h2 className="my-24 text-4xl font-medium text-primary">{text}</h2>
      <div className="flex justify-center gap-5 ">
        {/* Option 1 */}
        {option1 && (
          <div
            onClick={() => handleClick(setAnswer1, option1)}
            className="flex flex-col items-center gap-8 cursor-pointer"
          >
            <div className={`${styles ? styles : "w-96 h-96"}`}>
              <img
                className="w-full h-full object-cover"
                src={option1image}
                alt="skin"
              />
            </div>
            <span className="text-2xl font-normal">{option1}</span>
          </div>
        )}

        {/* Option 2 */}
        {option2 && (
          <div
            onClick={() => handleClick(setAnswer2, option2)}
            className="flex flex-col items-center gap-8 cursor-pointer"
          >
            <div className={`${styles ? styles : "w-96 h-96"}`}>
              <img
                className="w-full h-full object-cover"
                src={option2image}
                alt="skin"
              />
            </div>
            <span className="text-2xl font-normal">{option2}</span>
          </div>
        )}

        {/* Option 3 */}
        {option3 && (
          <div
            onClick={() => handleClick(setAnswer3, option3)}
            className="flex flex-col items-center gap-8 cursor-pointer"
          >
            <div className={`${styles ? styles : "w-96 h-96"}`}>
              <img
                className="w-full h-full object-cover"
                src={option3image}
                alt="skin"
              />
            </div>
            <span className="text-2xl font-normal">{option3}</span>
          </div>
        )}

        {/* Option 4 */}
        {option4 && (
          <div
            onClick={() => handleClick(setAnswer4, option4)}
            className="flex flex-col items-center gap-8 cursor-pointer"
          >
            <div className={`${styles ? styles : "w-96 h-96"}`}>
              <img
                className="w-full h-full object-cover"
                src={option4image}
                alt="skin"
              />
            </div>
            <span className="text-2xl font-normal">{option4}</span>
          </div>
        )}
      </div>
    </>
  );
};

export default Question;
