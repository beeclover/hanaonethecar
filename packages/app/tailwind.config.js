const defaultTheme = require('tailwindcss/defaultTheme');

const colors = {
}

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors,
      container: {
        center: true,
        padding: {
          DEFAULT: "var(--container-px, 1rem)",
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/typography'),
  ],
};
