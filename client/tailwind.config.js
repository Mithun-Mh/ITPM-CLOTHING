/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        PrimaryColor: "#b8e2ff",
        SecondaryColor: "#094371",
        DarkColor: "#20a9fe",
        ExtraDarkColor: "#0077cd",
      },
    },
  },
  plugins: [],
};
