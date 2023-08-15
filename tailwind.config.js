/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      white: "#fff",
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
      purple: {
        100: "#891767",
      },
    },
    extend: {
      boxShadow: {
        product: "0 0 12px 0 rgba(0,0,0,.12)",
        search: "rgba(0, 0, 0, 0.35) 0px 5px 15px", //
      },
    },
  },
  plugins: [],
};
