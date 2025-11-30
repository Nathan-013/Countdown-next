/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        '.text-stroke': {
          '-webkit-text-stroke': '0.5px green',
          'color': '#f00',
        },
        '.text-stroke-sm': {
          '-webkit-text-stroke': '0.3px white',
          'color': '#f00',
        },
        '.text-stroke-mc': {
          '-webkit-text-stroke': '0.8px #166534',
          'color': '#22c55e',
        }
      };
      addUtilities(newUtilities);
    }
  ],
};
