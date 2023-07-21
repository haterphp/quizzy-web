/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,sccs,ts}"],
  theme: {
    extend: {
      colors: makeProjectColors()
    },
  },
  plugins: [],
};
