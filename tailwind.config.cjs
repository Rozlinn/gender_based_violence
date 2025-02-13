/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#FCA03F',
        secondary: '#46A972',
      },
    },
  },
  plugins: [require('@tailwindcss/line-clamp')],
};
