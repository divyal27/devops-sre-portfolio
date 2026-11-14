/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        graphite: {
          950: '#090a0c',
          900: '#111215',
          850: '#16181c',
          800: '#1e2126',
          700: '#2b2f36',
          600: '#3e434d',
          500: '#5c6370',
          400: '#8b94a5',
          300: '#c2c9d6',
          200: '#e2e6ed',
          100: '#f4f6f9',
        },
        console: {
          green: '#10b981',
          emerald: '#059669',
          amber: '#f59e0b',
          blue: '#3b82f6',
          cyan: '#06b6d4',
          red: '#ef4444',
        }
      },
      fontFamily: {
        sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'Cascadia Code', 'SF Mono', 'monospace'],
      },
      boxShadow: {
        'subtle': '0 1px 2px 0 rgba(0, 0, 0, 0.4)',
        'elevated': '0 4px 20px -2px rgba(0, 0, 0, 0.6)',
      }
    },
  },
  plugins: [],
}
