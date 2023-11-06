/** @format */

// src/cartSlice.js
import { createSlice } from "@reduxjs/toolkit";
import { Store } from "react-notifications-component";

const Localdata = localStorage.getItem("dummyServiceCart");

let cartData = [];

try {
  cartData = JSON.parse(Localdata);
} catch (error) {
  console.error("Invalid JSON in localStorage:", error);
}

const initialState = {
  items: Array.isArray(cartData) ? cartData : [],
};

const ServiceCart = createSlice({
  name: "dummyServiceCart",
  initialState,
  reducers: {
    addServiceLocally: (state, action) => {
      const product = action.payload;
      const isProductInCart = state.items.some(
        (item) => item._id === product._id
      );
      if (!isProductInCart) {
        state.items.push(product);
        localStorage.setItem(
          "dummyServiceCart",
          JSON.stringify([...state.items, action.payload])
        );
        Store.addNotification({
          title: "",
          message: "Service Added in cart",
          type: "success",
          insert: "top",
          container: "top-center",
          animationIn: ["animate__animated", "animate__fadeIn"],
          animationOut: ["animate__animated", "animate__fadeOut"],
          dismiss: {
            duration: 2000,
            onScreen: true,
          },
        });
      } else {
        Store.addNotification({
          title: "",
          message: "Service Already In cart",
          type: "info",
          insert: "top",
          container: "top-center",
          animationIn: ["animate__animated", "animate__fadeIn"],
          animationOut: ["animate__animated", "animate__fadeOut"],
          dismiss: {
            duration: 2000,
            onScreen: true,
          },
        });
      }
    },
    removeFromCart: (state, action) => {
      const itemId = action.payload;
      state.items = state.items.filter((item) => item._id !== itemId);
      localStorage.setItem("dummyServiceCart", JSON.stringify(state.items));
    },
 
  },
});

export const { addServiceLocally  } = ServiceCart.actions;
export const ServiceItems = (state) => state.ServiceCart.items;
export default ServiceCart.reducer;
