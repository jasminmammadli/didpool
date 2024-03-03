/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors:{
      "blue":"#2900ff",
      "white":"#fff",
      "dark-blue":"#060026",
      "majorelle":"#6B50F6",
      "dark-green":"#072125",
      "grey":"#cfcce0",
      "primary-light":"#D4CCFF",
      "light-grey":"#fafafa",
      "dark-grey":"#e7e5f0"
    },
    screens:{
      "sm":"640px",
      "md":"768px",
      "lg":"1024px",
      "xl":"1280px",
      "2xl":"1400px",
      "3xl":"1536px"
    },
    extend: {},
  },
  plugins: [],
}