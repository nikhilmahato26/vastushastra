/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        // Industrial light-mode palette — warm cream base, clay & copper accents, ink text
        cream: '#F6F0E6',
        sand: '#EDE3D2',
        clay: '#C07A53',
        terracotta: '#B0532F',
        copper: '#A8754E',
        ember: '#9A4324',
        ink: '#221E1A',
        stone: '#6B6258',
        line: '#D8CBB6',
      },
      fontFamily: {
        display: ['Fraunces', 'Georgia', 'serif'],
        sans: ['Manrope', 'system-ui', 'sans-serif'],
        mono: ['"IBM Plex Mono"', 'ui-monospace', 'monospace'],
      },
      boxShadow: {
        lift: '0 12px 40px -12px rgba(34,30,26,0.25)',
        card: '0 2px 0 0 #D8CBB6, 0 1px 2px rgba(34,30,26,0.04)',
        press: 'inset 0 2px 6px rgba(34,30,26,0.18)',
      },
      keyframes: {
        pulseGlow: {
          '0%, 100%': { opacity: '0.35', transform: 'scale(1)' },
          '50%': { opacity: '0.6', transform: 'scale(1.08)' },
        },
        slowSpin: {
          from: { transform: 'rotate(0deg)' },
          to: { transform: 'rotate(360deg)' },
        },
      },
      animation: {
        pulseGlow: 'pulseGlow 6s ease-in-out infinite',
        slowSpin: 'slowSpin 120s linear infinite',
      },
    },
  },
  plugins: [],
}
