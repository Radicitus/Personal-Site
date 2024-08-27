import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      spacing: {
        104: "26rem",
        112: "28rem",
        120: "30rem",
        128: "32rem",
        136: "34rem",
        142: "36rem",
        150: "38rem",
        158: "40rem",
        166: "42rem",
        174: "44rem",
        182: "46rem",
        190: "48rem",
      },
      fontFamily: {
        inter: ['var(--font-inter)'],
        mohave: ['var(--font-mohave)'],
        quicksand: ['var(--font-quicksand)'],
      },
      animation: {
        'text': 'text 10s ease infinite',
      },
      keyframes: {
        'text': {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'left center'
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center'
          }
        },
      }
    },
  },
  plugins: [
    require('daisyui'),
  ],
};
export default config;
