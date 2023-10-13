import { configureStore } from "@reduxjs/toolkit";
import cart from "./cartSlice";
import quiz from "./quizSlice";
import common from "./commonSlice";
import user from "./userSlice";
import authSlice from "./authSlice";

export const store = configureStore({
  reducer: {
    user,
    common,
    quiz,
    auth: authSlice ,
    cart : cartSlice
  },
});