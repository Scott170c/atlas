/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Hack Club CSS variable mapping
        darker: "var(--darker)",
        dark: "var(--dark)",
        darkless: "var(--darkless)",
        black: "var(--black)",
        steel: "var(--steel)",
        slate: "var(--slate)",
        muted: "var(--muted)",
        smoke: "var(--smoke)",
        snow: "var(--snow)",
        white: "var(--white)",
        red: "var(--red)",
        orange: "var(--orange)",
        yellow: "var(--yellow)",
        green: "var(--green)",
        cyan: "var(--cyan)",
        blue: "var(--blue)",
        purple: "var(--purple)",
        text: "var(--text)",
        background: "var(--background)",
        elevated: "var(--elevated)",
        sheet: "var(--sheet)",
        sunken: "var(--sunken)",
        border: "var(--border)",
        primary: "var(--primary)",
        secondary: "var(--secondary)",
        accent: "var(--accent)",
        twitter: "var(--twitter)",
        facebook: "var(--facebook)",
        instagram: "var(--instagram)",
        // Legacy/compat
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
