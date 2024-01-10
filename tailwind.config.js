/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#018877',
        secondary: '#F4F6F8',
        default: '#333333',
      },
    },
  },
  plugins: [],
}
