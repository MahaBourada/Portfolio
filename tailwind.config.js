/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      // => @media (min-width: 320px) { ... }
      'xsm': '320px', /* Extra small devices: mobile */
      'sm': '480px', /* Small devices: mobile */
      'md': '768px', /* Tablets */
      'lg': '992px', /* Laptop */
      'xl': '1200px', /* Desktop */
      '2xl': '1536px', /* Extra large devices: TV */
    },
    fontFamily: {
      main: ["Press\\ Start\\ 2P", "cursive"],
      secondary: ["Rajdhani", "sans-serif"],
    },
    extend: {
      translate: {
        "2px": "2px",
        "1px": "1px",
      },
      boxShadow: {
        small: "3px 3px 3px 00px  rgba(89, 89, 89, 0.8)",
      },
      ms: {
        "618px": "628px",
        "800px": "800px",
        "42%": "42%",
        "34.5%": "34.5%",
      },
      colors: {
        thunderbird: {
          50: "#fff1f2",
          100: "#ffe0e2",
          200: "#ffc7cb",
          300: "#ffa0a7",
          400: "#ff6974",
          500: "#fa3947",
          600: "#e71b2a",
          700: "#c1121f",
          800: "#a1131e",
          900: "#85171f",
          950: "#49060b",
        },
        "hippie-blue": {
          50: "#f1f7fa",
          100: "#dceaf1",
          200: "#bdd6e4",
          300: "#8fb9d1",
          400: "#669bbc",
          500: "#3e769c",
          600: "#366184",
          700: "#31516d",
          800: "#2f455b",
          900: "#2b3b4e",
          950: "#182534",
        },
        "prussian-blue": {
          50: "#eefaff",
          100: "#dcf5ff",
          200: "#b2edff",
          300: "#6de1ff",
          400: "#20d3ff",
          500: "#00beff",
          600: "#0099df",
          700: "#0079b4",
          800: "#006795",
          900: "#00547a",
          950: "#003049",
        },
        background: {
          100: "#fdf0d5",
        },
      },
    },
  },
  plugins: [],
};
