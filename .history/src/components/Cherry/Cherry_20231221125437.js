/** @format */

import React, { useEffect } from "react";
import { Helmet } from "react-helmet";

const CherryWidget = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://files.withcherry.com/widgets/widget.js";
    script.async = true;
    script.onload = () => {
      window._hw &&
        window._hw(
          "init",
          {
            debug: false,
            variables: {
              slug: "shahinahoja",
              name: "Shahina Hoja Aesthetics",
            },
            styles: {
              primaryColor: "#00c37d",
              secondaryColor: "#00c37d10",
              fontFamily: "Open Sans",
            },
          },
          ["all", "hero", "howitworks", "testimony", "faq", "calculator"]
        );
    };

    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <>
      <Helmet>
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display&family=Slabo+27px&family=Lato&family=Raleway&family=Montserrat&family=Oswald&family=Poppins&family=Source+Sans+Pro&family=PT+Sans&family=Open+Sans&display=swap"
          rel="stylesheet"
        />
      </Helmet>
      <div id="all"></div>
    </>
  );
};

export default CherryWidget;


Try using this code instead:

import { useEffect } from "react";

function CherryWidget() {

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

  return <div id="all"></div>;
}

export default CherryWidget;
