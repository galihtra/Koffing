/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins"],
        title: ["Gilda Display"],
      },
      colors: {
        primary: "#F87171",
        secondary: "#F87111",
      },
      backgroundImage: {
        "coffee-1": "url('./images/coffee-1.png')",
      },
      height: {
        138: "38rem",
      },
    },
  },
  plugins: [],
};
