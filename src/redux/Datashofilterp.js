import { createSlice } from "@reduxjs/toolkit";
import DataShop from "../data/DataShop";
import { filterdatashopcategory } from "../helper/filterdatashopcategory";
import { changenamefilter } from "../helper/changenamefilter";

const initialState = {
  name: "CASUAL",
  Data: DataShop.Casual,
};

const DataShopmap = createSlice({
  name: "Data",
  initialState,
  reducers: {
    filterbycategory: (state, action) => {
      state.Data = filterdatashopcategory(state.Data, action.payload);
      state.name = action.payload;
    },

    changenamecategory: (state, action) => {
      state.name = changenamefilter(action.payload);
    },
  },
});

export const { filterbycategory, changenamecategory } = DataShopmap.actions;
export default DataShopmap.reducer;
