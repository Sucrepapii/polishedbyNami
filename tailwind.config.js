export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#D4AF37", // Metallic Gold
        secondary: "#FAD6A5", // Champagne/Rose Gold
        dark: "#1A1A1A", // Soft Black
      },
      fontFamily: {
        serif: ['"Playfair Display"', "serif"],
        sans: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};
