/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        primary: 'var(--primary)',
        button: 'var(--info)'
      },
      textColor: {
        primary: 'var(--primary)',
        secondary: 'var(--secondary)',
        info: 'var(--info)'
      },
      colors: {
        primary: 'var(--primary)',
        secondary: 'var(--secondary)',
      },
      fontFamily: {
        'nerko': ['Nerko One', 'sans-serif'],
        'comfortaa': ['Comfortaa', 'cursive'],
      },
    },
  },
  plugins: [],
}
