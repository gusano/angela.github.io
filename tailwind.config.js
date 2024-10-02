module.exports = {
  content: [
    './dist/*.html',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    theme: {
      extend: {},
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio'),
  ],
  corePlugins: {
    preflight: false,
  },
}
