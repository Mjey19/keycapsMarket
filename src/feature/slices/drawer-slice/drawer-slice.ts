import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { DrawerCardInterface } from "../../../shared/types/card";
interface DrawerState {
  isOpen: boolean;
  itemCount: number;
  items: DrawerCardInterface[] ;
  totalPrice: number;
}
const initialState: DrawerState = {
  isOpen: false,
  itemCount: 0,
  items: [],
  totalPrice: 0,
};
function recalculateTotals(state: DrawerState) {
  state.itemCount = state.items.reduce((acc, curr) => acc + curr.count, 0);
  state.totalPrice = state.items.reduce(
    (acc, curr) => acc + curr.count * curr.price,
    0
  );
}
export const DrawerSlice = createSlice({
  name: "drawerSlice",
  initialState,
  reducers: {
    openDrawer: (state) => {
      state.isOpen = !state.isOpen;
    },
    addItem: (state, action: PayloadAction<DrawerCardInterface>) => {
      state.items = [...state.items, action.payload];
      recalculateTotals(state);
    },
  },
});

export const { openDrawer } = DrawerSlice.actions;
export default DrawerSlice.reducer;
