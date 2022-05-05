module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./layout/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        lightColor: "#61ACC0",
        darkColor: "#46C016",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
