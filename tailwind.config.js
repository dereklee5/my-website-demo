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
        primary: colors.neutral,
        secondary: colors.blue,
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
