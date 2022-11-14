/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: "#60a5fa",
        secondary: "#60a5fa",
      },
      keyframes: {
        productArrow: {
          "50%": {
            scale: "1.4",
            color: "#000",
          },
        },
        logoLoader: {
          " 50%": {
            rotate: "360deg",
            opacity: "1",
          },
          "60%": {
            scale: "1.2",
            opacity: ".8",
          },
          "80%": {
            scale: ".8",
            opacity: ".6",
          },
          "100%": {
            scale: "1",
            opacity: "0",
          },
        },
      },
    },
    screens: {
      xsm: "420px",
      sm: "640px",
      navbar: "680px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
  },
  plugins: [],
};
