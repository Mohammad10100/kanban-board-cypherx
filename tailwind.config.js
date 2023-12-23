/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    screens: {
      'xs': '500px',
      'sm': '680px',
      'md': '1000px',
      'lg': '1200px',
      'xl': '1536px',
    },
    extend: {},
  },
  plugins: [],
}