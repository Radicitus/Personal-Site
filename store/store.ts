import { create } from "zustand";
import { ThemeSlice, createThemeSlice } from "@/store/slices/themeSlice";
import { persist } from "zustand/middleware";

type StoreState = ThemeSlice;

export const useAppStore = create<StoreState>()(
  persist(
    (...a) => ({
      ...createThemeSlice(...a),
    }),
    { name: "app-store" }
  )
);
