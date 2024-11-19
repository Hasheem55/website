/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "lightblue":"#BCCDE0",
        "red":"#EC3D2F"
      },
      boxShadow: {
        '3xl': '0 5px 5px 0px rgba(0, 0, 0, .3)',
      },
      screens: {
        'lg': '1100px',
        'mm' : '770px',
        'md ' : '768px',
        'sm' : '350px',
        'xs' : '425px',
      },
    },
  },
  plugins: [],
}