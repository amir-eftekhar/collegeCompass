/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#4C9494',
        secondary: '#E4F4C4',
        accent: '#9CD4AC',
        neutral: '#5C4C54',
      },
    },
  },
  plugins: [],
};