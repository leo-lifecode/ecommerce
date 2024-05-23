import { createSlice } from "@reduxjs/toolkit";
import FilterCart from "../helper/FilterCart";
import filterDecrementProduct from "../helper/filterDecrementProduct";
import filterIncrementProduct from "../helper/filterIncrementProduct";

const initialState = {
  cart: JSON.parse(localStorage.getItem("cart")) || [],
  total: 0,
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
      localStorage.setItem("cart", JSON.stringify(state.cart));
    },
    incrementProduct: (state, action) => {
      state.cart = filterIncrementProduct(state.cart, action.payload);
      localStorage.setItem("cart", JSON.stringify(state.cart));
    },
    deleteCartProduct: (state, action) => {
      state.cart = state.cart.filter(
        (item) =>
          !(
            item.id === action.payload.id &&
            item.color === action.payload.color &&
            item.size === action.payload.size
          ),
      );
      localStorage.setItem("cart", JSON.stringify(state.cart));
    },
    setTotal: (state) => {
      const rawTotal = state.cart.reduce((acc, item) => {
        return acc + item.price * item.quantity;
      }, 0);
      state.total = rawTotal;
      localStorage.setItem("total", JSON.stringify(state.total));
    },

    setCart: (state, action) => {
      state.cart = action.payload;
      localStorage.setItem("cart", JSON.stringify(state.cart));
    },
  },
});

export const {
  addToCart,
  decrementProduct,
  incrementProduct,
  deleteCartProduct,
  setTotal,
  setCart,
} = cartslice.actions;
export default cartslice.reducer;
