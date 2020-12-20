const plugin = require("tailwindcss/plugin");

module.exports = {
  purge: {
    enabled: process.env.NODE_ENV === "production",
    content: ["./public/index.html"],
  },
  presets: [require("./src/theme.js")],
  darkMode: false,
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [
    plugin(function ({ addBase, config, theme }) {
      addBase({
        "*:focus": {
          outline: theme("outline.none"),
        },
        h1: {
          fontSize: config("theme.fontSize.4xl"),
        },
        h2: {
          fontSize: config("theme.fontSize.3xl"),
        },
        "h1, h2": {
          color: config("theme.colors.primary.500"),
        },
        h3: {
          fontSize: config("theme.fontSize.2xl"),
        },
        h4: {
          fontSize: config("theme.fontSize.xl"),
        },
        h5: {
          fontSize: config("theme.fontSize.lg"),
        },
        h6: {
          fontSize: config("theme.fontSize.lg"),
        },
        button: {
          paddingTop: theme("padding[2]"),
          paddingBottom: theme("padding[3]"),
          paddingLeft: theme("padding[3]"),
          paddingRight: theme("padding[3]"),
          color: theme("colors.white"),
          backgroundColor: theme("colors.primary.500"),
          transitionProperty: theme("transitionProperty.colors"),
          transitionDuration: theme("transitionDuration.DEFAULT"),
          transitionTimingFunction: theme("transitionTimingFunction.DEFAULT"),
          "&:hover": {
            backgroundColor: theme("colors.primary.400"),
          },
          "&:focus": {
            outline: theme("outline.none"),
          },
        },
      });
    }),
  ],
};
