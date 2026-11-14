/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        neo: {
          bg: '#fcf8f2',
          yellow: '#fde047',
          yellowDark: '#eab308',
          green: '#86efac',
          greenDark: '#22c55e',
          blue: '#93c5fd',
          blueDark: '#3b82f6',
          pink: '#f472b6',
          orange: '#fdba74',
          purple: '#c084fc',
          card: '#ffffff',
          darkBg: '#121212',
          darkCard: '#1e1e1e',
        }
      },
      fontFamily: {
        sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
      boxShadow: {
        'neo-sm': '2px 2px 0px 0px #000000',
        'neo': '4px 4px 0px 0px #000000',
        'neo-lg': '6px 6px 0px 0px #000000',
        'neo-xl': '8px 8px 0px 0px #000000',
      }
    },
  },
  plugins: [],
}
