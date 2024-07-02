/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],  
  theme: {
    extend: {
      fontFamily: {
        roboto: ['Roboto','sans-serif'],
        poppins: ['Poppins','sans-serif']
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide')
  ],
}

