const colors = require("tailwindcss/colors");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        blue: "#2563eb",
        Light: {
          primary: "#f3f4f2",
          secondary: "#e2e8f0",
          text_primary: "#2d3748",
          text_secondary: "#4a5568",
          text_accent: "#2b6cb0",
        },
        Dark: {
          primary: "#2d3748",
          secondary: "#4a5568",
          text_primary: "#f3f4f2",
          text_secondary: "#e2e8f0",
          text_accent: "#81e6d9",
        },
        background: {
          glass: "#ffffff33",
        },
      },
      fontFamily: {
        display: ["Helvetica", "Arial", "sans-serif"],
        body: ["Helvetica", "Arial", "sans-serif"],
        inter: ["Inter"],
        monts: ["Montserrat"],
      },
      // textColor: {
      //   accent: 'var(--color-text-accent)',
      //   primary: 'var(--color-text-primary)',
      //   secondary: 'var(--color-text-secondary)',
      // },
      // transparent: "transparent",
      // current: "currentColor",
      // black: colors.black,
      // white: colors.white,
      // gray: colors.gray,
      // red: colors.red,
      // emerald: colors.emerald,
      // indigo: colors.indigo,
      // yellow: colors.yellow,
      // teal: colors.teal,
    },
  },
  plugins: [],
};
