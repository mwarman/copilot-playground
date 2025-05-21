/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        spin: "spin 20s linear infinite",
      },
      dropShadow: {
        vite: "0 0 2em rgba(100, 108, 255, 0.67)",
        react: "0 0 2em rgba(97, 218, 251, 0.67)",
      },
    },
  },
  plugins: [],
};
