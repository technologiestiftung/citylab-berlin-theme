// @ts-check
const { theme, base } = require("./index");

module.exports = {
  purge: {
    enabled: process.env.NODE_ENV === "production",
    content: ["./public/index.html"],
  },
  presets: [theme],
  darkMode: false,
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [base],
};
