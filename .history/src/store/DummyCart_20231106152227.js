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
            'dummyCart',
            JSON.stringify([...state.items, action.payload])
        );
        notification.success({
            message: '',
            description: 'Product Added in cart',
            duration: 1,
        });
    } else {
        notification.info({
            message: '',
            description: 'Product Already in cart',
            duration: 1,
        });
    }
      state.items.push(product);
    },
    removeFromCart: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
  },
});

export const { addToCart, removeFromCart } = DummyCart.actions;
export default DummyCart.reducer;
