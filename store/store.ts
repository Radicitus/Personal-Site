import { create } from "zustand";
import {
  ThemeSliceTemplate,
  createThemeSlice,
} from "@/store/slices/themeSliceTemplate";
import { persist } from "zustand/middleware";

type StoreState = ThemeSliceTemplate;

export const useAppStore = create<StoreState>()(
  persist(
    (...a) => ({
      ...createThemeSlice(...a),
    }),
    { name: "app-store" }
  )
);
