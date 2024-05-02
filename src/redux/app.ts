import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./funcs/auth/authSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
  },
});
