/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{jsx,js}"],
  theme: {
    extend: {
      colors: {
        'mainPurple': '#7339E5',
        'btnColor': '#7C8BBF',
        'detailsGray': '#A1A1A1',
      },
      fontSize:{
        title: '2rem',
      },
    },
  },
  plugins: [require('tailwind-scrollbar-hide')],
}
