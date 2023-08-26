/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        primary: '#907AD6',
        secondary: "#06A77D",
        tertiary: '#F9FAFB',
      }
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}