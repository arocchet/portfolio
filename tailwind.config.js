import {heroui} from "@heroui/theme"

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)"],
        mono: ["var(--font-mono)"],
      },
      colors: {
        black: {
          90: '#1a191c',
        },
        gray: {
          90: '#1a1a1a',
          80: '#333333',
          65: '#595959',
          60: '#6b6a6a',
          50: '#807e7e',
          25: '#bdbdbd',
          15: '#d9d9d9',
          10: '#e8e1f0',
          
        },
        white: {
          90: '#f7f7f7',
          15: '#e3e3e3',
          10: '#ededed',
          5: '#f7f7f7',
        },
        blue: {
          75: '#00738a',
          60: '#00a2c7',
          50: '#00ccf5',
        }, 
        purple: {
          45: '#7438ff',
          40: '#7438ff',
          30: '#9869ff',
          20: '#b694ff',
          15: '#caadff',
          10: '#d7c2ff',
        },
        pink: {
          60: '#af00c9',
          35: '#e657ff',
          20: '#f699ff',
        },
        green: {
          75: '#007a23',
          65: '#00ad3a',
          55: '#00ed4f'
        },
        teal: {
          75: '#007864',
          65: '#00ab80',
          60: '#00d4a2',
          45: '#59c2a9',        
        },
        yellow: {
          65: '#bd9400', 
          55: '#f0bc00'
        },
        red: {
          60: '#c90054',
          45: '#e63e5f',
          35: '#e66a7c',
          25: '#eb8a99',
        },
        orange: {
          55: '#ba3f20',
          40: '#e6704c', 
          25: '#ffa382'
        }
      },
    },
  },
  darkMode: "class",
  plugins: [heroui()],
}
