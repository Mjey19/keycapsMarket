import { configureStore } from "@reduxjs/toolkit";
import drawerReducer from "../../feature/slices/drawer-slice/drawer-slice";
import formReducer from "../../feature/slices/form-slice/form-slice";
export const store = configureStore({
  reducer: {
    drawer: drawerReducer,
    form: formReducer,
  },
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
