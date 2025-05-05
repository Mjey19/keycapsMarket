import { configureStore } from "@reduxjs/toolkit";
import drawerReducer from "../../feature/slices/drawer-slice/drawer-slice";
export const store = configureStore({
  reducer: {
    drawer: drawerReducer,
  },
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
