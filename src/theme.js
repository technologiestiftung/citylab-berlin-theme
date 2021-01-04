// @ts-check
module.exports = {
  theme: {
    /*
    -----------------------------------------
    Styles that override Tailwind's default theme
    -----------------------------------------
    */
    colors: {
      primary: {
        50: "#feedf1",
        100: "#fddbe3",
        200: "#fbb7c7",
        300: "#fa94aa",
        400: "#f8708e",
        500: "#f64c72",
        600: "#c53d5b",
        700: "#942e44",
        800: "#621e2e",
        900: "#310f17",
      },
      secondary: {
        50: "#eaeaf6",
        100: "#d5d5ec",
        200: "#acacda",
        300: "#8282c7",
        400: "#5959b5",
        500: "#2f2fa2",
        600: "#262682",
        700: "#1c1c61",
        800: "#131341",
        900: "#090920",
      },
      gray: {
        50: "#ebebef",
        100: "#d7d8df",
        200: "#b0b0bf",
        300: "#8889a0",
        400: "#616180",
        500: "#393a60",
        600: "#2e2e4d",
        700: "#22233a",
        800: "#171726",
        900: "#0b0c13",
      },
      white: "#fff",
    },
    fontFamily: {
      serif: {},
    },
    /*
    -----------------------------------------
    Styles that will be merged with Tailwind's default theme
    -----------------------------------------
    */
    extend: {
      fontFamily: {
        sans: [
          "National Regular",
          "Calibri",
          "Segoe UI",
          "Roboto",
          "Oxygen",
          "Ubuntu",
          "Cantarell",
          "Fira Sans",
          "Droid Sans",
          "Helvetica Neue",
          "Helvetica",
          "Arial",
          "sans-serif",
        ],
      },
    },
  },
};
