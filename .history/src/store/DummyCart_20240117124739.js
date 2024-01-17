/** @format */

// src/cartSlice.js
import { createSlice } from "@reduxjs/toolkit";
import { Store } from "react-notifications-component";
import { showMsg } from "../Repository/Api";

const Localdata = localStorage.getItem("dummyCart");

let cartData = [];

try {
  cartData = JSON.parse(Localdata);
} catch (error) {
  console.error("Invalid JSON in localStorage:", error);
}

const initialState = {
  items: Array.isArray(cartData) ? cartData : [],
};

const DummyCart = createSlice({
  name: "dummyCart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const product = action.payload;
      const isProductInCart = state.items.some(
        (item) => item._id === product._id
      );
      if (!isProductInCart) {
        state.items.push(product);
        localStorage.setItem(
          "dummyCart",
          JSON.stringify([...state.items, action.payload])
        );
        showMsg("", "Product added to cart", "success");
      } else {
        showMsg("", "Product added to cart", "success");
        Store.addNotification({
          title: "",
          message: "Product Already In cart",
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
      localStorage.setItem("dummyCart", JSON.stringify(state.items));
    },
  },
});

export const { addToCart, removeFromCart } = DummyCart.actions;
export const DummyCartItems = (state) => state.dummyCart.items;
export default DummyCart.reducer;
