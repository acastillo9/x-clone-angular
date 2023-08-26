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
        'blue-x-3': '#1d9cf0',
        'gray-x': '#71767B',
        'green-x': '#00ba7c',
        'red-x': '#f91881',
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}

