/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      colors: {
        'primary-gold': '#C8973A',
        'deep-gold': '#A07828',
        'light-gold': '#F5DFA0',
        'cream-white': '#FDFAF4',
        'warm-white': '#FFF8ED',
        'dark-brown': '#4A2E0A',
        'soft-sand': '#EDE0C8',
        'accent-glow': '#F9ECC5',
      },
      fontFamily: {
        'serif': ['"Cormorant Garamond"', 'serif'],
        'sans': ['"DM Sans"', 'sans-serif'],
      },
      animation: {
        'slow-glow': 'glow 8s ease-in-out infinite alternate',
        'connector': 'connector 2s linear forwards',
      },
      keyframes: {
        glow: {
          '0%': { transform: 'scale(1) translate(0, 0)', opacity: 0.1 },
          '100%': { transform: 'scale(1.2) translate(10px, 10px)', opacity: 0.2 },
        },
        connector: {
          '0%': { width: '0%' },
          '100%': { width: '100%' },
        }
      }
    },
  },
  plugins: [],
}
