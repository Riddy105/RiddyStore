/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      grey: {
        100: "#757575",
        200: "#172C50",
      },
      black: {
        50: "#202020",
      },
      blue: {
        50: "#172C50",
      },
    },
    extend: {},
  },
  plugins: [],
};
