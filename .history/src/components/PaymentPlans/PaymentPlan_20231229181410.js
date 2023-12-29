/** @format */

import React, { useEffect } from "react";

const PaymentPlan = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.innerHTML = `(function (w, d, s, o, f, js, fjs) {
      w[o] =
        w[o] ||
        function () {
          (w[o].q = w[o].q || []).push(arguments);
        };
      (js = d.createElement(s)), (fjs = d.getElementsByTagName(s)[0]);
      js.id = o;
      js.src = f;
      js.async = 1;
      fjs.parentNode.insertBefore(js, fjs);
    })(
      window,
      document,
      "script",
      "_hw",
      " https://files.withcherry.com/widgets/widget.js"
    );

    _hw(
      "init",
      {
        debug: false,
        variables: {
          slug: "shahinahoja",
          name: "Shahina Hoja Aesthetics"
        },
        styles: {
          primaryColor: "#00C37D",
          secondaryColor: "#00C37D10",
          fontFamily: "Open Sans"
        }
      },

      ["all", "hero", "howitworks", "testimony", "faq", "calculator"]
    );`;

    const head = document.querySelector("head");
    head.appendChild(script);

    return () => {
      head.removeChild(script);
    };
  }, []);

  return <div id="all"></div>;
};

export default PaymentPlan;
// <section>
//   <div className="Backward_Heading step_Heading">
//     <div>
//       <img src="/Image/1.png" alt="" onClick={() => navigate(-1)} />
//     </div>
//     <p className="title">Payment Plans</p>
//   </div>

//   <div className="payment_plan_gif">
//     <a
//       href="https://pay.withcherry.com/shahinahoja?utm_source=cherrylinks"
//       target="_blank"
//     >
//       <img alt="payment cover" src="/Image/BODY GIF 1.gif" />
//     </a>
//   </div>

//   <p className="text-center w-3/5 my-14 mx-auto">
//     <span className="text-lg font-bold">Buy Now. Pay Monthly.</span>
//     Let your money go further and take better control of your cash flow when
//     you pay in smaller, more manageable monthly installments with Cherry.
//   </p>
//   <div className="flex flex-wrap justify-evenly items-center px-16">
//     {PAYMENT_TYpes.map((item, index) => (
//       <PaymentType key={index} src={item.src} type={item.type} />
//     ))}
//   </div>
//   <div className="payment_buttons_container">
//     <a
//       href="https://pay.withcherry.com/shahinahoja?utm_source=cherrylinks"
//       target="_blank"
//     >
//       <button className="w-[31rem] py-2 bg-primary text-secondary border-2 border-primary ">
//         APPLY NOW
//       </button>
//     </a>
//     <a
//       href="https://pay.withcherry.com/shahinahoja?utm_source=cherrylinks"
//       target="_blank"
//     >
//       <button className="w-[31rem] py-2 text-primary border-2 border-primary ">
//         BOOK NOW
//       </button>
//     </a>
//   </div>

//   <div>
//     <h2 className="text-4xl font-medium text-center text-primary mt-32 mb-5">
//       How it Works
//     </h2>
//     <p
//       className="text-lg text-center mb-14"
//       style={{ maxWidth: "1200px", margin: "auto" }}
//     >
//       Choose from a range of monthly payment plans with some qualifying for
//       0% APR options. Thanks to Cherry’s fast application process, you’ll be
//       enjoying your purchase in no time - all you need is your state ID and
//       mobile phone number to get started. If approved, manage payment
//       options and stay in control with 24/7 access to Cherry’s self-serve
//       patient portal.
//     </p>

//     <div className="payment-plan">
//       <iframe
//         title="vimeo-player"
//         src="https://player.vimeo.com/video/719271145?h=bb247de1d2"
//         frameborder="0"
//         allowfullscreen
//       ></iframe>
//     </div>

//     <h2 className="text-4xl font-medium text-center text-primary mt-32 mb-5">
//       Calculate your Monthly Payments
//     </h2>
//     <p className="text-lg text-center mb-14">
//       Use the payment calculator to simulate what your monthly payments
//       could look like.*
//     </p>

//     <div className="purchase_payment_plan ">
//       <span className="text-2xl font-bold ">Purchase Amount</span>
//       <p className="text-base mb-5">
//         Enter a purchase amount, payment plan, and financial situation to
//         see estimated payments
//       </p>
//       <input
//         type="text"
//         className="py-4 w-full border-2 border-primary px-8 text-xl font-semibold"
//         placeholder="Enter your Purchase Amount"
//       />
//       <div className="my-14">
//         <span>Purchase Amount</span>
//       </div>
//       <div>
//         <span className="text-2xl font-bold ">
//           Patient Financial Situation
//         </span>
//         <div className="flex justify-center gap-12 my-8 flex-wrap ">
//           {financialSituation.map((item, index) => (
//             <div
//               key={index}
//               className={`${
//                 item.value === "GOOD"
//                   ? "bg-primary "
//                   : "bg-lightSecondary  border border-secondary"
//               } w-56 h-72 flex flex-col justify-center items-center text-secondary cursor-pointer `}
//             >
//               <span className="text-9xl">
//                 <img src={item.icon} alt="" />
//               </span>
//               <span className="text-2xl font-semibold">{item.value}</span>
//             </div>
//           ))}
//         </div>
//       </div>
//       <p className="text-center w-full mt-14 mx-auto">
//         <span className="text-lg font-bold">GOOD </span>
//         means a patient may have high credit and no adverse financial
//         history, such as recent missed payments.
//       </p>
//     </div>

//     <p className="text-base text-center w-3/4 mx-auto mt-14">
//       *These are examples only. 0% APR and other promotional rates subject
//       to eligibility. Exact terms and APR depend on credit score and other
//       factors. Not every practice that uses Cherry will offer the payment
//       plan terms listed above.
//     </p>
//     <p className="text-base text-center w-3/4 mx-auto">
//       Down payment in the amount of monthly payment will be due at the time
//       of purchase.
//     </p>
//     <div className="calcualte-button">
//       <a
//         href="https://pay.withcherry.com/shahinahoja?utm_source=cherrylinks"
//         target="_blank"
//       >
//         {" "}
//         <button className="text-2xl w-full font-semibold text-center flex justify-center py-6 text-secondary bg-primary">
//           CALCULATE NOW
//         </button>
//       </a>
//     </div>
//     <h1 className="text-center text-4xl font-semibold text-primary my-3">
//       Testimonials
//     </h1>
//     <p className="text-center mb-5 tetx-lg">
//       Don’t just take our word for it! Here’s what other patients have to
//       say about Cherry…
//     </p>
//     <Testimonials show={true} />
//     <Faq />
//     {/* More Question */}

//     <div className="More-Question">
//       <div className="left">
//         <h1 className="text-4xl font-semibold text-primary my-3">
//           More Questions?
//         </h1>
//         <p className="mb-5 tetx-lg">
//           Reach Us if you got any Queries...We are here to help you out!
//         </p>

//         <section>
//           <div className="flex gap-5 items-start mt-3 Detail_Section ">
//             <div className="flex flex-col gap-4">
//               <div className="flex flex-col gap-4">
//                 <div className="flex items-center gap-4">
//                   <span className="text-2xl">
//                     {" "}
//                     <BsTelephoneFill />{" "}
//                   </span>
//                   <span>{response?.phone} </span>
//                 </div>
//                 <div className="flex items-center gap-4">
//                   <span className="text-2xl">
//                     {" "}
//                     <HiMail />{" "}
//                   </span>
//                   <span>{response?.email} </span>
//                 </div>
//                 <div className="flex items-center gap-4">
//                   <span className="text-2xl">
//                     {" "}
//                     <ImLocation />{" "}
//                   </span>
//                   <span>{response?.address} </span>
//                 </div>
//               </div>
//               <a href={response?.mapLink} target="_blank">
//                 <button
//                   className="flex items-center gap-3 font-semibold text-green justify-center border-2 py-2  border-green"
//                   style={{ padding: "10px" }}
//                 >
//                   <img className="w-5 h-5" src={MAP_IMG} alt="location" />
//                   LOCATE ON GOOGLE MAPS
//                 </button>
//               </a>
//             </div>
//           </div>
//         </section>
//       </div>
//       <div className="left">
//         <h1 className="text-4xl font-semibold text-primary my-3">
//           Support Hours
//         </h1>

//         <section>
//           <div className="flex gap-5 items-start mt-3 Detail_Section ">
//             <div className="flex flex-col gap-4">
//               <div className="flex flex-col gap-4">
//                 <div className="flex items-center gap-4">
//                   <span style={{ fontWeight: "bold" }}>
//                     Monday through Friday : {response?.paymentplan}{" "}
//                   </span>
//                 </div>
//                 <div className="flex items-center gap-4">
//                   <span style={{ fontWeight: "bold" }}>
//                     Saturday : {response?.saturday}{" "}
//                   </span>
//                 </div>
//                 <div className="flex items-center gap-4">
//                   <span style={{ fontWeight: "bold" }}>
//                     Sunday : {response?.sundayClose}
//                   </span>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </section>
//         <p className="mb-5 tetx-lg">
//           Payment options through Cherry Technologies, Inc. are issued by
//           the following lending partners:
//           www.withcherry.com/lending-partners. See www.withcherry.com/terms
//           for details. Iowa only: Borrowers are subject to Iowa state
//           specific underwriting criteria. APR for all Iowa borrowers is
//           capped at 20.99%.{" "}
//         </p>
//       </div>
//     </div>

//     <div className="payment-copywright">
//       Copyright © 2020-2023 Cherry Technologies Inc. NMLS #2061234, 2
//       Embarcadero Center, 8th Floor, San Francisco, CA 94111.
//     </div>
//   </div>
// </section>
