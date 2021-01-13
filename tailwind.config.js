module.exports = {
  purge: [
    './src/**/*.html',
    './src/**/*.js',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'black-900': '#3a4166',
        'black-800': '#4c4c4c',
        'primary': '#0090ee',
        'primary-100': '#047fde',
      },
      maxWidth: {
        'ng-xl': '1170px'
      },
      space: {
        'min-1': '-1px',
      },
    },
  },
  variants: {
    extend: {
      zIndex: ['group-hover', 'hover'],
      divideColor: ['group-hover', 'hover'],
    },
  },
  plugins: [],
}
