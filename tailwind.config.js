// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#ff6f00",   // Bright Orange
        dark: "#0f0f0f",      // Black for backgrounds
        light: "#f9f9f9",     // Light grey
      },
    },
  },
  plugins: [],
};
