/** @format */

import React from "react";
import { useNavigate } from "react-router-dom";

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
  const navigate = useNavigate();
  const handleClick = () => {
    if (step === 4) {
      navigate("/acnequiz/recomended");
    } else {
      step > 0 && setStep(step + 1);
    }
  };
  return (
    <>
      <h2 className="my-24 text-4xl font-medium text-primary">{text}</h2>
      <div className="flex justify-center gap-5 ">
      {/* Option 1 */}
        <div
          onClick={handleClick}
          className="flex flex-col items-center gap-8 cursor-pointer"
        >
          <div className={`${styles ? styles : "w-96 h-96"}`}>
            <img className="w-full h-full object-cover" src={option1image} alt="skin" />
          </div>
          <span className="text-2xl font-normal">{option1}</span>
        </div>

        {/* Option 2 */}
        <div
          onClick={handleClick}
          className="flex flex-col items-center gap-8 cursor-pointer"
        >
          <div className={`${styles ? styles : "w-96 h-96"}`}>
            <img className="w-full h-full object-cover" src={option1image} alt="skin" />
          </div>
          <span className="text-2xl font-normal">{option2}</span>
        </div>


        {/* Option 3 */}
        <div
          onClick={handleClick}
          className="flex flex-col items-center gap-8 cursor-pointer"
        >
          <div className={`${styles ? styles : "w-96 h-96"}`}>
            <img className="w-full h-full object-cover" src={option1image} alt="skin" />
          </div>
          <span className="text-2xl font-normal">{option1}</span>
        </div>

        {/* Option 4 */}
        <div
          onClick={handleClick}
          className="flex flex-col items-center gap-8 cursor-pointer"
        >
          <div className={`${styles ? styles : "w-96 h-96"}`}>
            <img className="w-full h-full object-cover" src={option1image} alt="skin" />
          </div>
          <span className="text-2xl font-normal">{option1}</span>
        </div>

      </div>
    </>
  );
};

export default Question;
