import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isOpen: false,
  itemCount: 0,
  items: [],
};
export const DrawerSlice = createSlice({
  name: "drawerSlice",
  initialState,
  reducers: {
    openDrawer: (state) => {
      state.isOpen = !state.isOpen;
    },
  },
});

export const { openDrawer } = DrawerSlice.actions;
export default DrawerSlice.reducer;
