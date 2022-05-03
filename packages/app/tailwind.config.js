const defaultTheme = require('tailwindcss/defaultTheme');
const plugin = require('tailwindcss/plugin');

const colors = {
  primary: '#00b2a4',
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
          DEFAULT: "var(--container-px, 2rem)",
        },
        screens: {
          sm: '640px',
        }
      },
      fontFamily: {
        sans: ['"Hana"', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/typography'),
    plugin(function ({ addComponents }) {
      addComponents({
        '.text-highlighted': {
          display: 'inline',
          boxShadow: 'inset 0 -10px 0 rgba(0, 178, 164, 0.15)',
        }
      });
    }),
  ],
};
