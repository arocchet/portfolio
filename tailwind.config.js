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
  			sans: [
  				'var(--font-sans)'
  			],
  			mono: [
  				'var(--font-mono)'
  			]
  		},
  		colors: {
  			black: {
  				'90': '#1a191c'
  			},
  			gray: {
  				'10': '#e8e1f0',
  				'15': '#d9d9d9',
  				'25': '#bdbdbd',
  				'50': '#807e7e',
  				'60': '#6b6a6a',
  				'65': '#595959',
  				'80': '#333333',
  				'90': '#1a1a1a'
  			},
  			white: {
  				'5': '#f7f7f7',
  				'10': '#ededed',
  				'15': '#e3e3e3',
  				'90': '#f7f7f7'
  			},
  			blue: {
  				'50': '#00ccf5',
  				'60': '#00a2c7',
  				'75': '#00738a'
  			},
  			purple: {
  				'10': '#d7c2ff',
  				'15': '#caadff',
  				'20': '#b694ff',
  				'30': '#9869ff',
  				'40': '#7438ff',
  				'45': '#7438ff'
  			},
  			pink: {
  				'20': '#f699ff',
  				'35': '#e657ff',
  				'60': '#af00c9'
  			},
  			green: {
  				'55': '#00ed4f',
  				'65': '#00ad3a',
  				'75': '#007a23'
  			},
  			teal: {
  				'45': '#59c2a9',
  				'60': '#00d4a2',
  				'65': '#00ab80',
  				'75': '#007864'
  			},
  			yellow: {
  				'55': '#f0bc00',
  				'65': '#bd9400'
  			},
  			red: {
  				'25': '#eb8a99',
  				'35': '#e66a7c',
  				'45': '#e63e5f',
  				'60': '#c90054'
  			},
  			orange: {
  				'25': '#ffa382',
  				'40': '#e6704c',
  				'55': '#ba3f20'
  			},
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			}
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
  		animation: {
  			'shiny-text': 'shiny-text 8s infinite'
  		},
  		keyframes: {
  			'shiny-text': {
  				'0%, 90%, 100%': {
  					'background-position': 'calc(-100% - var(--shiny-width)) 0'
  				},
  				'30%, 60%': {
  					'background-position': 'calc(100% + var(--shiny-width)) 0'
  				}
  			}
  		}
  	}
  },
  darkMode: "class",
  plugins: [heroui(), require("tailwindcss-animate")],
}
