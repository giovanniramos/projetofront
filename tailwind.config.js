const config = {
  content: ["./src/**/*.{html,js,ts}"],
  purge: ["./src/**/*.{html,ts}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [
    require("@tailwindcss/forms"),
    require("@tailwindcss/typography")({
      modifiers: [],
    }),
  ],
};

module.exports = config;
