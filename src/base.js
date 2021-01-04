// @ts-check
const plugin = require("tailwindcss/plugin");

module.exports = plugin(function ({ addBase, theme }) {
  /*
  -----------------------------------------
  COMMON
  -----------------------------------------
  */
  addBase({
    "*": {
      // .antialiased
      "-webkit-font-smoothing": "antialiased",
      "-moz-osx-font-smoothing": "grayscale",
    },
    "*:focus": {
      outline: theme("outline.none"),
    },
  });
  /*
  -----------------------------------------
  COLOR
  -----------------------------------------
  */
  addBase({
    body: {
      color: theme("colors.secondary.500"),
    },
    "h1, h2": {
      color: theme("colors.primary.500"),
    },
    a: {
      color: theme("colors.secondary.400"),
      transitionProperty: theme("transitionProperty.colors"),
      transitionDuration: theme("transitionDuration.DEFAULT"),
      transitionTimingFunction: theme("transitionTimingFunction.DEFAULT"),
      "&:hover": {
        color: theme("colors.secondary.500"),
      },
    },
  });
  /*
  -----------------------------------------
  TYPOGRAPHY
  -----------------------------------------
  */
  addBase({
    body: {
      fontSize: theme("fontSize.xl"),
    },
    h1: {
      fontSize: theme("fontSize.4xl"),
    },
    h2: {
      fontSize: theme("fontSize.3xl"),
    },
    h3: {
      fontSize: theme("fontSize.2xl"),
    },
    h4: {
      fontSize: theme("fontSize.xl"),
    },
    h5: {
      fontSize: theme("fontSize.lg"),
    },
    h6: {
      fontSize: theme("fontSize.lg"),
    },
    "p, blockquote, h1, h2, h3, h4, h5, h6": {
      maxWidth: theme("maxWidth.prose"),
    },
  });
  /*
  -----------------------------------------
  SPACING
  -----------------------------------------
  */
  addBase({
    "p, h1, h2, h3, h4, h5, h6, blockquote, button": {
      "&:not(:first-child)": {
        marginTop: theme("margin[5]"),
      },
    },
  });
  /*
  -----------------------------------------
  ELEMENTS
  -----------------------------------------
  */
  addBase({
    "header, footer": {
      padding: theme("padding[4]"),
      backgroundColor: theme("colors.white"),
      borderColor: theme("colors.secondary.50"),
    },
    header: {
      position: "sticky",
      top: theme("spacing[0]"),
      borderBottomWidth: theme("borderWidth[2]"),
    },
    footer: {
      borderTopWidth: theme("borderWidth[2]"),
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
    },
  });
});
