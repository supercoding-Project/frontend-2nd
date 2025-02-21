import { configureStore, createSlice } from "@reduxjs/toolkit";

const initialAuthState = {
  isAuthenticated: localStorage.getItem("isAuthenticated") === false,
};

const authSlice = createSlice({
  name: "authentication",
  initialState: initialAuthState,
  reducers: {
    logIn(state) {
      state.isAuthenticated = true;
      localStorage.setItem("isAuthenticated", true);
    },

    logOut(state) {
      state.isAuthenticated = false;
      localStorage.removeItem("isAuthenticated");
    },
  },
});

const store = configureStore({
  reducer: { auth: authSlice.reducer },
});

export default store;
export const authActions = authSlice.actions;
