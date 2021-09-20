module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        bgBlue: "#255977",
        bgBlueLight: "#31769e",
        gold: "#FEC576",
      },
      fontFamily: {
        nunito: ["Nunito Sans", "sans-serif"],
      },
      fontSize: {
        xxs: ["0.60rem", "0.75rem"],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
