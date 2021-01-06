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
      color: theme("colors.blue.500"),
    },
    "h1, h2": {
      color: theme("colors.magenta.500"),
    },
    a: {
      color: theme("colors.blue.400"),
      transitionProperty: theme("transitionProperty.colors"),
      transitionDuration: theme("transitionDuration.DEFAULT"),
      transitionTimingFunction: theme("transitionTimingFunction.DEFAULT"),
      "&:hover": {
        color: theme("colors.blue.500"),
      },
    },
    "blockquote > footer, figcaption": {
      color: theme("colors.blue.300"),
    },
    code: {
      backgroundColor: theme("colors.blue.50"),
    },
    mark: {
      color: theme("colors.white"),
      backgroundColor: theme("colors.magenta.500"),
    },
    label: {
      color: theme("colors.gray.500"),
    },
    "input, textarea, select": {
      color: theme("colors.gray.500"),
      backgroundColor: theme("colors.gray.25"),
      "&::placeholder": {
        color: theme("colors.gray.300"),
      },
    },
    "input, textarea, select, optgroup": {
      "&:disabled": {
        opacity: theme("opacity.50"),
        "& ~ label": {
          opacity: theme("opacity.20"),
        },
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
    input: {
      fontSize: theme("fontSize.lg"),
    },
  });
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
      borderColor: theme("colors.blue.50"),
      borderBottomWidth: theme("borderWidth[2]"),
      zIndex: theme("zIndex.50"),
    },
    button: {
      paddingTop: theme("padding[2]"),
      paddingBottom: theme("padding[3]"),
      paddingLeft: theme("padding[3]"),
      paddingRight: theme("padding[3]"),
      color: theme("colors.white"),
      backgroundColor: theme("colors.magenta.500"),
      transitionProperty: theme("transitionProperty.colors"),
      transitionDuration: theme("transitionDuration.DEFAULT"),
      transitionTimingFunction: theme("transitionTimingFunction.DEFAULT"),
      "&:hover": {
        backgroundColor: theme("colors.magenta.400"),
      },
    },
    blockquote: {
      paddingLeft: theme("padding[4]"),
      borderLeftWidth: theme("borderWidth[2]"),
      borderColor: theme("colors.blue.300"),
    },
    "input:not([type=checkbox]):not([type=radio]), textarea, select": {
      display: "block",
      width: theme("width.full"),
      paddingTop: theme("padding[2]"),
      paddingBottom: theme("padding[2]"),
      paddingLeft: theme("padding[2]"),
      paddingRight: theme("padding[2]"),
    },
    input: {
      verticalAlign: "middle",
    },
  });
});
