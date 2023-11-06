/** @format */

// src/cartSlice.js
import { createSlice } from "@reduxjs/toolkit";

const Localdata = localStorage.getItem("dummyCart");

let cartData = [];

try {
  cartData = JSON.parse(Localdata);
} catch (error) {
  console.error("Invalid JSON in localStorage:", error);
}

const initialState = {
    Array.isArray(cartData) ? cartData : []
};

const DummyCart = createSlice({
  name: "dummyCart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const product = action.payload;
      state.items.push(product);
    },
    removeFromCart: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
  },
});

export const { addToCart, removeFromCart } = DummyCart.actions;
export default DummyCart.reducer;
