/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}', './views/**/*.{js,ts,jsx,tsx}', './layout/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontSize: {
      base: ['1.1146rem', '1.8125rem'],
      lg: ['1.4861rem', '1.8125rem'],
      xl: ['2.3529rem', '2.875rem'],
    },
    extend: {
      colors: {
        primary: '#2a9d8f',
        secondary: '#fdb74f',
      },
      fontSize: {
        md: ['1.2384rem', '1.875rem'],
      },
      maxWidth: {
        lg: '960px',
        md: '768px',
      },
      animation: {
        'toggle-visible': 'toggleVisible 1s ease-in-out',
      },
      keyframes: {
        toggleVisible: {
          from: { opacity: 0, visibility: 'hidden' },
          to: { opacity: 1, visibility: 'visible' },
        },
      },
    },
  },
  plugins: [],
}
