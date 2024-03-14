/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "dark-green": "#29574B",
        "lime-green": "#D9FCB4",
        whitesmoke: "#F9F6F0",
      },
    },
  },
  plugins: [],
};
