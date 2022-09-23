import { createSlice } from "@reduxjs/toolkit";
import decoder from "jwt-decode";

const initialState = {
  token: localStorage.getItem("token")
    ? JSON.parse(localStorage.getItem("token"))
    : "",
  user: localStorage.getItem("user")
    ? JSON.parse(localStorage.getItem("user"))
    : {},
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: async (state, payload) => {
      state.token = payload.payload;
      const userInfo = await decoder(payload.payload);
      state.user = userInfo;
      localStorage.setItem("token", JSON.stringify(payload.payload));
      localStorage.setItem("user", JSON.stringify(userInfo));
    },
    logout: (state) => {
      state.token = "";
      state.user = {};
      localStorage.removeItem("token");
      localStorage.removeItem("user");
    },
  },
});

export const { login, logout } = userSlice.actions;

export default userSlice.reducer;
