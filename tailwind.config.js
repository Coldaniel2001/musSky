/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        'background': "url('./src/assets/images/fondo.png')",
      }
    },
  },
  plugins: [],
}
