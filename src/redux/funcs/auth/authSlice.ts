import { createSlice } from "@reduxjs/toolkit";

interface typ {
  users: null | [] | object[];
  user: any;
}

const initialState: typ = {
  users: null,
  user: JSON.parse(localStorage.getItem("user")) || null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    getUser: (state, { payload }) => {
      state.users = payload;
      localStorage.setItem("users", JSON.stringify(payload));
    },
    getUs: (state, { payload }) => {
      localStorage.setItem("user", JSON.stringify(payload));
      state.user = payload;
    },
  },
});

export default authSlice.reducer;
export const { getUser, getUs } = authSlice.actions;
