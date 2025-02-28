import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  totalPrice: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    setCartItems: (state, action) => {
      state.items = action.payload;
      state.totalPrice = action.payload.reduce(
        (total, item) => total + item.quantity * item.price,
        0
      );
    },
    updateCartItem: (state, action) => {
      const { productId, quantity } = action.payload;
      const item = state.items.find((item) => item.productId === productId);
      if (item) {
        item.quantity = quantity;
        state.totalPrice = state.items.reduce(
          (total, item) => total + item.quantity * item.price,
          0
        );
      }
    },
    removeCartItem: (state, action) => {
      state.items = state.items.filter(
        (item) => item.productId !== action.payload
      );
      state.totalPrice = state.items.reduce(
        (total, item) => total + item.quantity * item.price,
        0
      );
    },
  },
});

export const { setCartItems, updateCartItem, removeCartItem } =
  cartSlice.actions;
export default cartSlice.reducer;
