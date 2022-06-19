import { createSlice } from "@reduxjs/toolkit";

const initalState = {
  menu: {
    isOpen: false,
  },
};

export const uiSlice = createSlice({
  name: "ui",
  initalState,
  reducers: {
    open: (state) => {
      state.ui.menu.isOpen = true;
    },

    close: (state) => {
      state.ui.menu.isOpen = false;
    },

    toggle: (state) => {
      state.ui.menu.isOpen = !state.ui.menu.isOpen;
    },
  },
});

export const { open, close, toggle } = uiSlice.actions;

export const selectMenuState = (state) => state.ui.menu.isOpen;

export default uiSlice.reducer;
