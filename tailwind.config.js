/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/pages/**/*.html"],
  theme: {
    extend: {
      fontFamily: {
        urbanist: "Urbanist",
      },

      colors: {
        // general
        "accent-primary": "#9257F3",

        // background
        "background-primary": "#171717",
        "background-secondary": "#1A1A1A",

        // text
        "text-primary": "#FFFFFFb3",
        "text-secondary": "#FFFFFF",
      },
    },
  },
  plugins: [],
};
