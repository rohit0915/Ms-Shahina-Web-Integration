/** @format */

import { configureStore } from "@reduxjs/toolkit";
import quiz from "./quizSlice";
import common from "./commonSlice";
import user from "./userSlice";
import authSlice from "./authSlice";
import cartSlice from "./cartSlice";
import DummyCart from "./DummyCart";

export const store = configureStore({
  reducer: {
    user,
    common,
    quiz,
    auth: authSlice,
    cart: cartSlice,
    dummyCart: DummyCart,
    dummyCart: DummyCart,
  },
});
