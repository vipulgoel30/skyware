/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: "#60a5fa",
        secondary: "#60a5fa",
      },
    },
    screens: {
      xsm: "420px",
      sm: "640px",
      navbar: "850px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
  },
  plugins: [],
};
