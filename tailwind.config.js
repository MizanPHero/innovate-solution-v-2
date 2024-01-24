/** @type {import('tailwindcss').Config} */
export default {
  mode: 'jit',
  darkMode: false,
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      primaryBlue: '#58A7FF',
      deepDark: '#232323',
      lightDark: '#7A7A7A',
      fadeGray: '#E1E7EE'
    },
    boxShadow: {
      'custom': '0px 4px 40px 0px rgba(225, 237, 255, .70)',
    },
    extend: {},
  },
  plugins: [],
}