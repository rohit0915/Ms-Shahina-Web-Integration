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
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Playfair+Display&family=Slabo+27px&family=Lato&family=Raleway&family=Montserrat&family=Oswald&family=Poppins&family=Source+Sans+Pro&family=PT+Sans&family=Open+Sans&display=swap"
        />
      </Helmet>
      <div id="all"></div>
    </>
  );
};

export default CherryWidget;
