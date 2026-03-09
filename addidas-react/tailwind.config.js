/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        adidas: {
          red: '#d40000',
          gray: '#767677',
          lightGray: '#e5e5e5',
        }
      }
    },
  },
  plugins: [],
}
