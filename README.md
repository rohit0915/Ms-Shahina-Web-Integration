/** @format */

import React, { useEffect } from "react";

const PaymentPlan = () => {
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
          primaryColor: "#042b26",
          secondaryColor: "#e5d896",
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

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "instant",
    });
  }, []);

  return <div id="all"></div>;
};

export default PaymentPlan;
