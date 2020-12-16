module.exports = {
  purge: {
    enabled: process.env.NODE_ENV === "production",
    content: ["./public/index.html"],
  },
  darkMode: false,
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
