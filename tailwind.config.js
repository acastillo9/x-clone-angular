/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}"
  ],
  theme: {
    extend: {
      fontFamily: {
        'montserrat': ['Montserrat', 'sans-serif'],
        'fira-sans': ['Fira Sans', 'sans-serif'],
      },
      colors: {
        'blue-x': '#1D9BF0',
        'blue-x-2': '#1a8cd8',
      }
    },
  },
  plugins: [],
}

