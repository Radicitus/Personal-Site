/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      spacing: {
        104: "26rem",
        112: "28rem",
        120: "30rem",
        128: "32rem",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        mohave: ["var(--font-mohave)"],
        quicksand: ["var(--font-quicksand)"],
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["bumblebee", "business"],
  },
};
