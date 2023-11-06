/** @format */

// src/cartSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

const DummyCart = createSlice({
  name: "dummyCart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const product = action.payload;
      state.items.push(action.payload);
    },
    removeFromCart: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
  },
});

export const { addToCart, removeFromCart } = DummyCart.actions;
export default DummyCart.reducer;
