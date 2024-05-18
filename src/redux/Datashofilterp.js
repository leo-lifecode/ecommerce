import { createSlice } from "@reduxjs/toolkit";
import DataShop from "../data/DataShop";
import { filterdatashopcategory } from "../helper/filterdatashopcategory";
import { changenamefilter } from "../helper/changenamefilter";
import sortbyFilter from "../helper/sortbyFilter";
import filterbySORT from "../helper/filterbySort";
import filterdatabyprice from "../helper/filterdatabyprice";

const initialState = {
  name: "CASUAL",
  Data: DataShop.CASUAL,
  sortBy: "Relevansi",
  Min: "",
  Max: "",
};

const DataShopmap = createSlice({
  name: "Data",
  initialState,
  reducers: {
    filterbycategory: (state, action) => {
      state.Max = "";
      state.Min = "";
      state.Data = filterdatashopcategory(
        state.Data,
        action.payload,
        state.sortBy,
      );
      state.name = action.payload;
    },

    sortby: (state, action) => {
      state.Max = "";
      state.Min = "";
      state.sortBy = sortbyFilter(action.payload);
      state.Data = filterbySORT(state.Data, state.sortBy);
    },

    changenamecategory: (state, action) => {
      state.name = changenamefilter(action.payload);
    },

    filterbyPrice: (state, action) => {
      state.Min = action.payload.min;
      state.Max = action.payload.max;
      console.log(state.Min, state.Max);
      state.Data = filterdatabyprice(
        DataShop[state.name],
        state.Min,
        state.Max,
      );
    },
  },
});

export const { filterbycategory, changenamecategory, sortby, filterbyPrice } =
  DataShopmap.actions;
export default DataShopmap.reducer;
