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
    // custom focus styles
    "a, input, textarea, button, select, summary": {
      "&:focus": {
        outline: "none",
        "--tw-ring-offset-shadow":
          "var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color)",
        "--tw-ring-shadow":
          "var(--tw-ring-inset) 0 0 0 calc(4px + var(--tw-ring-offset-width)) var(--tw-ring-color)",
        boxShadow:
          "var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000)",
        "--tw-ring-opacity": "1",
        "--tw-ring-color": "rgba(253, 219, 227, var(--tw-ring-opacity))",
      },
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
    header: {
      borderColor: theme("colors.blue.50"),
    },
    "h1, h2, h3": {
      color: theme("colors.magenta.500"),
    },
    a: {
      color: theme("colors.blue.500"),
      borderColor: theme("colors.magenta.300"),
      transitionProperty: theme("transitionProperty.colors"),
      transitionDuration: theme("transitionDuration.DEFAULT"),
      transitionTimingFunction: theme("transitionTimingFunction.DEFAULT"),
      "&:hover": {
        color: theme("colors.magenta.500"),
        borderColor: theme("colors.magenta.400"),
      },
    },
    button: {
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
      borderColor: theme("colors.blue.50"),
      "& > footer, figcaption": {
        color: theme("colors.blue.300"),
      },
    },
    mark: {
      color: theme("colors.white"),
      backgroundColor: theme("colors.blue.500"),
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
    details: {
      color: theme("colors.magenta.500"),
      "& > summary:hover": {
        color: theme("colors.magenta.400"),
        cursor: "pointer",
      },
      "& > summary ~ *": {
        color: theme("colors.blue.500"),
      },
    },
    pre: {
      backgroundColor: theme("colors.gray.25"),
    },
    hr: {
      borderColor: theme("colors.blue.50"),
    },
  });
  /*
  -----------------------------------------
  TYPOGRAPHY
  -----------------------------------------
  */
  addBase({
    body: {
      fontFamily: theme("fontFamily.sans"),
      fontSize: theme("fontSize.xl"),
    },
    h1: {
      fontSize: theme("fontSize.3xl"),
    },
    h2: {
      fontSize: theme("fontSize.2xl"),
    },
    h3: {
      fontSize: theme("fontSize.2xl"),
    },
    h4: {
      fontSize: theme("fontSize.xl"),
    },
    h5: {
      fontSize: theme("fontSize.lg"),
      fontWeight: theme("fontWeight.extrabold"),
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
    "blockquote > *:not(:first-child), figcaption": {
      fontSize: theme("fontSize.base"),
      fontStyle: "normal",
    },
    "pre, code": {
      fontSize: theme("fontSize.base"),
    },
    address: {
      fontSize: theme("fontSize.base"),
      fontStyle: "normal",
    },
    input: {
      fontSize: theme("fontSize.lg"),
    },
    "summary ~ *": {
      fontSize: theme("fontSize.base"),
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
      backgroundColor: theme("colors.white"),
      borderBottomWidth: theme("borderWidth[2]"),
      zIndex: theme("zIndex.50"),
    },
    a: {
      borderBottomWidth: theme("borderWidth[2]"),
    },
    button: {
      paddingTop: theme("padding[2]"),
      paddingBottom: theme("padding[3]"),
      paddingLeft: theme("padding[3]"),
      paddingRight: theme("padding[3]"),
    },
    blockquote: {
      paddingLeft: theme("padding[4]"),
      borderLeftWidth: theme("borderWidth[2]"),
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
    summary: {
      display: "inline-block",
    },
    pre: {
      display: "inline-block",
      paddingTop: theme("padding[2]"),
      paddingBottom: theme("padding[2]"),
      paddingLeft: theme("padding[2]"),
      paddingRight: theme("padding[2]"),
    },
    hr: {
      borderTopWidth: theme("borderWidth[2]"),
    },
  });
});
