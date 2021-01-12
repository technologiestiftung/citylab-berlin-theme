// @ts-check
const { theme, base } = require("./index");

const config = {
  purge: {
    enabled:
      process.env.NODE_ENV === "production" ||
      process.env.NODE_ENV === "publish",

    // keep base layer styles in package, purge all layers in build (for demo site)
    layers:
      process.env.NODE_ENV === "publish"
        ? ["components", "utilities"]
        : ["base", "components", "utilities"],

    // purge all classes in package, keep used classes in build (for demo site)
    content: process.env.NODE_ENV === "publish" ? [] : ["./public/index.html"],
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

module.exports = config;
