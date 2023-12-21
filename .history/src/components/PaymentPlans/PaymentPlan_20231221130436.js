/** @format */

import React, { useEffect } from "react";
// import PaymentType from "./PaymentType";
// import { PAYMENT_TYpes, financialSituation } from "../../constants/constant";
// import Testimonials from "./Testimonials";
// import Faq from "./Faq";
// import { useNavigate } from "react-router-dom";
// import { getContactDetails } from "../../Repository/Api";
// import { BsTelephoneFill } from "react-icons/bs";
// import { HiMail } from "react-icons/hi";
// import { ImLocation } from "react-icons/im";
// import { MAP_IMG } from "../../constants/constant";

const PaymentPlan = () => {
  // const navigate = useNavigate();
  // const [response, setResponse] = useState({});

  // useEffect(() => {
  //   getContactDetails(setResponse);
  // }, []);

  // useEffect(() => {
  //   window.scrollTo(0, 0);
  // }, []);

  useEffect(() => {
    const script = document.createElement("script");
    script.innerHTML = `
    (function (w, d, s, o, f, js, fjs) {
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

  return (
   
  );
};

export default PaymentPlan;
