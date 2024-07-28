const flowbite = require("flowbite-react/tailwind");

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}", flowbite.content()],
  theme: {
    extend: {
      fontFamily: {
        primary: ["Poppins", "sans-serif"],
      },
      colors: {
        primary: "#fef7ec",
        secondary: "#e2f7fa",
        accent: "#ccffff",
        primaryText: "#2c3e50",
        secondaryText: "#d4af37",
      },
    },
  },
  plugins: [flowbite.plugin()],
};