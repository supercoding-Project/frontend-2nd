import { configureStore, createSlice } from "@reduxjs/toolkit";

const initialState = {
  isAuthenticated: true,
  accessToken:
    "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhcHBsZUBuYXZlci5jb20iLCJpYXQiOjE3NDA2NzE1NzMsImV4cCI6MTc0MDcxNDc3M30.uRH_h0I_oLuCwcARqo-xMt8SGm1ztTWOpGnzBwLE-hw",
  userId: 2,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: (state) => {
      state.isAuthenticated = false;
      state.accessToken = null;
      state.userId = null;
    },
  },
});

export const { logout } = authSlice.actions;

const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
  },
});

export default store;
