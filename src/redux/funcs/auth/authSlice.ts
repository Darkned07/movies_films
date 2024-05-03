import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  users: null,
  user: localStorage.getItem("user") || null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    getUser: (state, { payload }) => {
      state.users = payload;
    },
    getUs: (state, { payload }) => {
      localStorage.setItem("user", JSON.stringify(payload));
      state.user = payload;
    },
  },
});

export default authSlice.reducer;
export const { getUser, getUs } = authSlice.actions;
