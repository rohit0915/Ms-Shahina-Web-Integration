/** @format */

import React, { useEffect, useState } from "react";
import PaymentType from "./PaymentType";
import { PAYMENT_TYpes, financialSituation } from "../../constants/constant";
import Testimonials from "./Testimonials";
import Faq from "./Faq";
import ManagePlan from "./ManagePlan";
import MoreQuestions from "./MoreQuestions";
import { useNavigate } from "react-router-dom";

const PaymentPlan = () => {
  const navigate = useNavigate();

  const [ LOCATE , setLocate ] = useState("")

  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  return (
    <section>

    <select onChange={(e) => setLocate(e.) } >
      <option></option>
      <option value='County' >Country</option>
      <option>State</option>
      <option>City</option>
    </select>


{LOCATE === ''}



      <div className="Backward_Heading step_Heading">
        <div>
          <img src="/Image/1.png" alt="" onClick={() => navigate(-1)} />
        </div>
        <p className="title">Payment Plans</p>
      </div>

      <div className="w-[49rem] h-[49rem] mx-auto payment_plan_gif">
        <a
          href="https://pay.withcherry.com/shahinahoja?utm_source=cherrylinks"
          target="_blank"
        >
          <img
            className="object-cover w-full h-full"
            alt="payment cover"
            src="/Image/BODY GIF 1.gif"
          />
        </a>
      </div>


      <p className="text-center w-3/5 my-14 mx-auto">
        <span className="text-lg font-bold">Buy Now. Pay Monthly.</span>
        Let your money go further and take better control of your cash flow when
        you pay in smaller, more manageable monthly installments with Cherry.
      </p>
      <div className="flex flex-wrap justify-between items-center px-16">
        {PAYMENT_TYpes.map((item, index) => (
          <PaymentType key={index} src={item.src} type={item.type} />
        ))}
      </div>
      <div className="flex justify-center my-14 gap-5 text-xl font-semibold ">
        <a
          href="https://pay.withcherry.com/shahinahoja?utm_source=cherrylinks"
          target="_blank"
        >
          <button className="w-[31rem] py-2 bg-primary text-secondary border-2 border-primary ">
            APPLY NOW
          </button>
        </a>
        <a
          href="https://pay.withcherry.com/shahinahoja?utm_source=cherrylinks"
          target="_blank"
        >
          <button className="w-[31rem] py-2 text-primary border-2 border-primary ">
            BOOK NOW
          </button>
        </a>
      </div>
      <div>
        <h2 className="text-4xl font-medium text-center text-primary mt-32 mb-5">
          Calculate your Monthly Payments
        </h2>
        <p className="text-lg text-center mb-14">
          Use the payment calculator to simulate what your monthly payments
          could look like.*
        </p>

        <div className="border-2 border-black w-3/4 mx-auto py-16 px-40 ">
          <span className="text-2xl font-bold ">Purchase Amount</span>
          <p className="text-base mb-5">
            Enter a purchase amount, payment plan, and financial situation to
            see estimated payments
          </p>
          <input
            type="text"
            className="py-4 w-full border-2 border-primary px-8 text-xl font-semibold"
            placeholder="Enter your Purchase Amount"
          />
          <div className="my-14">
            <span>Purchase Amount</span>
          </div>
          <div>
            <span className="text-2xl font-bold ">
              Patient Financial Situation
            </span>
            <div className="flex justify-center gap-12 my-8">
              {financialSituation.map((item, index) => (
                <div
                  key={index}
                  className={`${
                    item.value === "GOOD"
                      ? "bg-primary "
                      : "bg-lightSecondary  border border-secondary"
                  } w-56 h-72 flex flex-col justify-center items-center text-secondary cursor-pointer `}
                >
                  <span className="text-9xl">
                    <img src={item.icon} alt="" />
                  </span>
                  <span className="text-2xl font-semibold">{item.value}</span>
                </div>
              ))}
            </div>
          </div>
          <p className="text-center w-full mt-14 mx-auto">
            <span className="text-lg font-bold">GOOD </span>
            means a patient may have high credit and no adverse financial
            history, such as recent missed payments.
          </p>
        </div>

        <p className="text-base text-center w-3/4 mx-auto mt-14">
          *These are examples only. 0% APR and other promotional rates subject
          to eligibility. Exact terms and APR depend on credit score and other
          factors. Not every practice that uses Cherry will offer the payment
          plan terms listed above.
        </p>
        <p className="text-base text-center w-3/4 mx-auto">
          Down payment in the amount of monthly payment will be due at the time
          of purchase.
        </p>
        <div className="w-1/3 mx-auto my-14">
          <a
            href="https://pay.withcherry.com/shahinahoja?utm_source=cherrylinks"
            target="_blank"
          >
            {" "}
            <button className="text-2xl w-full font-semibold text-center flex justify-center py-6 text-secondary bg-primary">
              CALCULATE NOW
            </button>
          </a>
        </div>
        <h1 className="text-center text-4xl font-semibold text-primary my-3">
          Testimonials
        </h1>
        <p className="text-center mb-5 tetx-lg">
          Don’t just take our word for it! Here’s what other patients have to
          say about Cherry…
        </p>
        <Testimonials show={true} />
        <Faq />
        <ManagePlan />
        <MoreQuestions />
      </div>
    </section>
  );
};

export default PaymentPlan;
