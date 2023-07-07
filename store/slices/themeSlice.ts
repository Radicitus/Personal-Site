import { StateCreator } from "zustand";

export const installedThemes = ["night", "bumblebee"];

export interface ThemeSlice {
  theme: string;
  swapTheme: () => void;
}

export const createThemeSlice: StateCreator<ThemeSlice> = (set, get) => ({
  theme: installedThemes[0],
  swapTheme: async () => {
    let newTheme =
      get().theme === installedThemes[0]
        ? installedThemes[1]
        : installedThemes[0];

    set({ theme: newTheme });
  },
});
