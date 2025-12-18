/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: "#1e3a8a",      // Professional Navy Blue
        primaryDark: "#1e293b",   // Dark Navy
        primaryLight: "#3b82f6",  // Light Blue
        accent: "#ea580c",        // Professional Orange
        accentLight: "#fb923c",   // Light Orange
        secondary: "#1f2937",     // Charcoal Gray
        highlight: "#f97316",     // Vibrant Orange
        highlightLight: "#fb923c", // Light Orange
        neutral: "#64748b",       // Slate Gray
        neutralLight: "#94a3b8",  // Light Slate
      },
      backgroundImage: {
        "brand-gradient":
          "linear-gradient(135deg, #1e3a8a 0%, #1f2937 100%)",
      },
    },
  },
  plugins: [],
};
