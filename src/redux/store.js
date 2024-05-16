import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./Cartslice";
import screenSlice from "./screenslice";
import Datashopmap from "./Datashofilterp";

export const store = configureStore({
  reducer: {
    cart: cartSlice,
    screen: screenSlice,
    Data: Datashopmap,
  },
});
