import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  screen: false,
  icon: false,
};

const screenSlice = createSlice({
  name: "screen",
  initialState,
  reducers: {
    togglescreen: (state, action) => {
      if (action.payload === false) {
        state.screen = false;
      } else {
        state.screen = !state.screen;
      }
    },

    toggleicon: (state, action) => {
      if (action.payload === false) {
        state.icon = false;
      } else {
        state.icon = !state.icon;
      }
    },
  },
});

export const { togglescreen, toggleicon } = screenSlice.actions;
export default screenSlice.reducer;
