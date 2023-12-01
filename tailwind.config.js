const colors = require("tailwindcss/colors");

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    
    extend: {
      colors: {
        transparent: "transparent",
        current: "currentColor",
        black: colors.black,
        white: colors.white,
        primary: {
          '50':  '#fdfcfb',
          '100': '#faeff2',
          '200': '#f6cbe6',
          '300': '#ec9ecb',
          '400': '#ea6fac',
          '500': '#df4b91',
          '600': '#c93270',
          '700': '#a22652',
          '800': '#771b35',
          '900': '#49111c',
        },//colors.neutral,
        secondary: colors.blue,
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
