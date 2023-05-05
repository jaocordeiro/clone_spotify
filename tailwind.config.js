/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        sfBlackLight: "#121212",
        sfBlack: "#000000",
        sfGrey: "#3a3a3a",
        sfPurpleDark: "#1d0e42",
      },
      keyframes: {
        entry: {
          "0%": {
            width: "40px",
          },
          "100%": {
            width: "100%",
          },
        },
      },
      animation: {
        entry: "entry .3s ease-in-out forwards",
      },
    },
  },
  plugins: [],
};
