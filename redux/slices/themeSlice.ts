import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type InitialStateType = {
  theme: boolean;
};

const initialState = {
  theme: false,
} as InitialStateType;

export const theme = createSlice({
  name: "theme",
  initialState,
  reducers: {
    setTheme: (state, action: PayloadAction<boolean>) => {
      return { theme: action.payload };
    },
  },
});

export const { setTheme } = theme.actions;
export default theme.reducer;
