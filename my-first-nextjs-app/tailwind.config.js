/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
  // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    minHeight:{
      '1/5' : '15vh',
      '3/5' : '70vh',
    },
    extend: {},
  },
  plugins: [],
}
