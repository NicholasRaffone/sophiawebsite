module.exports = {
  mode: 'jit',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  purge: [
    './public/**/*.html',
    './src/**/*.{js,jsx,ts,tsx,vue}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Tox Typewriter'],
      },
      transitionDuration: {
        '0': '0ms',
        '3000': '3000ms',
       },
       backgroundImage: {
        'beach': "url('/src/images/beach.png')",
      }
    },
  },
  plugins: [],
}
