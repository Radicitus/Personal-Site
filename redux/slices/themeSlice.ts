import { createSlice } from "@reduxjs/toolkit";

export const installedThemes = ["bumblebee", "night"];

type InitialStateType = {
  theme: string;
};

const initialState = {
  theme: installedThemes[0],
} as InitialStateType;

export const theme = createSlice({
  name: "theme",
  initialState,
  reducers: {
    swapTheme: (state) => {
      state.theme === installedThemes[0]
        ? (state.theme = installedThemes[1])
        : (state.theme = installedThemes[0]);
    },
  },
});

export const { swapTheme } = theme.actions;
export default theme.reducer;
