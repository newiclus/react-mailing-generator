/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        solid: "-6px 6px rgb(0, 0, 0)",
      },
      lineHeight: {
        none: "0",
      },
    },
  },
  plugins: [],
};
