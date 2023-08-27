/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "sans-serif", "system-ui"],
      },
      colors: {
        primary: "#6c2bd9",
        "primary-strong": "#6B5FCB",
        secondary: "#06A77D",
        tertiary: "#F9FAFB",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
