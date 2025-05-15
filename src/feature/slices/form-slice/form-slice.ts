import { createSlice } from "@reduxjs/toolkit";
interface FormState {
  isOpen: boolean;
}
const initialState: FormState = {
  isOpen: false,
};

export const FormSlice = createSlice({
  name: "formSlice",
  initialState,
  reducers: {
    openForm: (state) => {
      state.isOpen = !state.isOpen;
    },
  },
});

export const { openForm } = FormSlice.actions;
export default FormSlice.reducer;
