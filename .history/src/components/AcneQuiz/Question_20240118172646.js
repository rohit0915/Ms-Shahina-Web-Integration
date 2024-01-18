/** @format */

import React from "react";

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
  query,
  answer1,
  answer2,
  answer3,
  answer4,
}) => {
  const handleClick = async (options) => {
    query(options);
    if (step === 4) {
    } else {
      step > 0 && setStep(step + 1);
    }
  };

  console.log(answer1, answer2, answer3, answer4);

  return (
    <>
      <h2
        className="my-24 text-4xl font-medium text-primary Question_title "
        style={{ fontWeight: "900", textAlign: "center" }}
      >
        {text}
      </h2>
      <div className="SkinContainer">
        {/* Option 1 */}
        {option1 && (
          <div
            onClick={() => {
              handleClick(option1);
            }}
            className="flex flex-col items-center gap-8 cursor-pointer Items"
          >
            <div className={`${styles ? styles : "w-96 h-96"}`}>
              <img
                className={`w-full h-full object-cover ${
                  option1 === answer1 && "selected"
                }`}
                src={option1image}
                alt="skin"
              />
            </div>
            <span className={`text-2xl font-normal `}>{option1}</span>
          </div>
        )}

        {/* Option 2 */}
        {option2 && (
          <div
            onClick={() => {
              handleClick(option2);
            }}
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
            onClick={() => {
              handleClick(option3);
            }}
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
            onClick={() => {
              handleClick(option4);
            }}
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
