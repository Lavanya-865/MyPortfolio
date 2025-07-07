/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Inter', 'sans-serif'],
        'mono': ['JetBrains Mono', 'monospace'],
      },
      animation: {
  'glow': 'glow 2s ease-in-out infinite alternate',
  'float': 'float 3s ease-in-out infinite',
  'waveMotion': 'waveMotion 4s ease-in-out infinite', // smoother cycle
},
keyframes: {
  glow: {
    '0%': { filter: 'drop-shadow(0 0 10px rgba(255, 255, 255, 0.3))' },
    '100%': { filter: 'drop-shadow(0 0 20px rgba(255, 255, 255, 0.6))' },
  },
  float: {
    '0%, 100%': { transform: 'translateY(0px)' },
    '50%': { transform: 'translateY(-10px)' },
  },
  waveMotion: {
    '0%': { transform: 'translateX(0)' },
    '50%': { transform: 'translateX(2%)' },
    '100%': { transform: 'translateX(0)' },
  },
      },
    },
  },
  plugins: [],
};
