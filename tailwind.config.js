/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        sfBlackLight: '#121212',
        sfBlack: '#000000',
        sfPurpleDark: '#1d0e42',
      },
    },
  },
  plugins: [],
};
