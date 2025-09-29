/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // Primary
        PrimaryRed: "hsl(4, 100%, 67%)",

        // Neutral
        Blue800: "hsl(234, 29%, 20%)",
        Blue700: "hsl(235, 18%, 26%)",
        Grey: "hsl(0, 0%,58%)",
        White: "hsl(0, 0%, 100%)",
      },
    },
  },
  plugins: [],
};
