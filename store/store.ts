import create from "zustand";
import { ThemeSlice, createThemeSlice } from "@/store/slices/themeSlice";

type StoreState = ThemeSlice;

export const useAppStore = create<StoreState>()((...a) => ({
  ...createThemeSlice(...a),
}));
