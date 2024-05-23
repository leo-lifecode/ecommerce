import { createSlice } from "@reduxjs/toolkit";
import FilterCart from "../helper/FilterCart";
import filterDecrementProduct from "../helper/filterDecrementProduct";
import filterIncrementProduct from "../helper/filterIncrementProduct";

const initialState = {
  cart: JSON.parse(localStorage.getItem("cart")) || [],
};

const cartslice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      state.cart = FilterCart(action.payload, state.cart);
      localStorage.setItem("cart", JSON.stringify(state.cart));
    },
    decrementProduct: (state, action) => {
      state.cart = filterDecrementProduct(state.cart, action.payload);
    },
    incrementProduct: (state, action) => {
      state.cart = filterIncrementProduct(state.cart, action.payload);
    },
    deleteCartProduct: (state, action) => {
      const cart = state.cart;
      state.cart = cart.filter(
        (item) =>
          !(
            item.id === action.payload.id &&
            item.color === action.payload.color &&
            item.size === action.payload.size
          ),
      );
      localStorage.setItem("cart", JSON.stringify(state.cart));
    },
  },
});
export const {
  addToCart,
  decrementProduct,
  incrementProduct,
  deleteCartProduct,
} = cartslice.actions;
export default cartslice.reducer;
