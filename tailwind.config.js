import flowbite from 'flowbite-react/tailwind';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    flowbite.content(), // Assuming flowbite has a 'content' method
  ],
  theme: {
    extend: {
      fontFamily: {
        primary: ["Poppins", "sans-serif"],
        productShowOff: ["IBM Plex Serif", "serif"],
        secondary: ["Noto Serif", "serif"],
        tertiary: ["Poppins", "sans-serif"],
        domine: ["Domine", "serif"],
      },
      colors: {
        primary: "#fef7ec",
        secondary: "#e2f7fa",
        accent: "#ccffff",
        primaryText: "#2c3e50",
        secondaryText: "#d4af37",
        card: "#F5F5F5",
      },
      screens: {
        xsm: "375px",
      },
      boxShadow: {
        "3xl": "10px -10px 20px 5px rgba(0, 0, 0, 0.3)",
      },
    },
  },
  plugins: [flowbite.plugin()], // Assuming flowbite has a 'plugin' method
};
