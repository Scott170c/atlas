/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        black: "#000000",
        white: "#ffffff",
        "gray-50": "#f9fafb",
        "gray-900": "#111827",
        "accent-red": "#ef4444",
        "hack-club-red": "#ec3750",
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
        mono: ["JetBrains Mono", "ui-monospace", "SFMono-Regular", "monospace"],
      },
      borderWidth: {
        DEFAULT: "2px",
      },
      borderRadius: {
        DEFAULT: "0px",
        md: "4px",
        lg: "8px",
      },
      boxShadow: {
        brutal: "4px 4px 0 0 #000",
      },
    },
  },
  plugins: [],
};
