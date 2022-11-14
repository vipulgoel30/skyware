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
        pulseShadow: {
          "50%": {
            boxShadow: "0px 0px 5px 5px rgba(0,0,0,.2)",
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
