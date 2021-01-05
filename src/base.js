// @ts-check
const plugin = require("tailwindcss/plugin");

// @ts-ignore
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
    "blockquote > footer, figcaption": {
      color: theme("colors.secondary.300"),
    },
    code: {
      backgroundColor: theme("colors.secondary.50"),
    },
    mark: {
      color: theme("colors.white"),
      backgroundColor: theme("colors.primary.500"),
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
    "b, strong": {
      fontWeight: theme("fontWeight.extrabold"),
    },
    "em, i, q, blockquote": {
      fontStyle: "italic",
    },
    "blockquote > footer, figcaption": {
      fontSize: theme("fontSize.base"),
      fontStyle: "normal",
    },
    code: {
      fontSize: theme("fontSize.base"),
    },
    address: {
      fontSize: theme("fontSize.base"),
      fontStyle: "normal",
    },
    "ul, ol": {
      listStylePosition: "inside",
    },
    ul: {
      listStyleType: theme("listStyleType.disc"),
    },
    ol: {
      listStyleType: theme("listStyleType.decimal"),
    },
  });
  /*
  -----------------------------------------
  SPACING
  -----------------------------------------
  */
  /*
  -----------------------------------------
  ELEMENTS
  -----------------------------------------
  */
  addBase({
    header: {
      position: "sticky",
      top: theme("spacing[0]"),
      padding: theme("padding[4]"),
      backgroundColor: theme("colors.white"),
      borderColor: theme("colors.secondary.50"),
      borderBottomWidth: theme("borderWidth[2]"),
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
    blockquote: {
      paddingLeft: theme("padding[4]"),
      borderLeftWidth: theme("borderWidth[2]"),
      borderColor: theme("colors.secondary.300"),
    },
  });
});
