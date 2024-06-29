// import { StateCreator } from "zustand";
//
// export const installedThemes = ["bumblebee", "business"];
//
// export interface ThemeSliceTemplate {
//   theme: string;
//   swapTheme: () => void;
// }
//
// export const createThemeSlice: StateCreator<ThemeSliceTemplate> = (set, get) => ({
//   theme: installedThemes[0],
//   swapTheme: async () => {
//     let newTheme =
//       get().theme === installedThemes[0]
//         ? installedThemes[1]
//         : installedThemes[0];
//
//     set({ theme: newTheme });
//   },
// });
