/** @format */

import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import { MyContextProvider } from "./Homepage/MyContext";
import "./Css/Responsive.css";
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';

const stripePromise = loadStripe('pk_test_51NYnaISGUdCg6ljtoAiKIBOUFoZePxplk65z8FjHXyvWx3bSfRWxYMd1vv5Qh2AYweuolrIqxwLX6XmsZ41ueyAC00MBUskGaO');


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <MyContextProvider>
    <App />
  </MyContextProvider>
);
