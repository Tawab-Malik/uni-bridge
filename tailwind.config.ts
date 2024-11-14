import type { Config } from "tailwindcss"
const { nextui } = require("@nextui-org/react");
const config = {
	darkMode: ["class"],
	content: [
		'./pages/**/*.{ts,tsx}',
		'./components/**/*.{ts,tsx}',
		'./app/**/*.{ts,tsx}',
		'./src/**/*.{ts,tsx}',
		"./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				'blue-chill': {
					DEFAULT: '#0D9488',
					50: '#67F2E5',
					100: '#54F0E2',
					200: '#2FEDDC',
					300: '#14DFCD',
					400: '#10BAAA',
					500: '#0D9488',
					600: '#086059',
					700: '#042D29',
					800: '#000000',
					900: '#000000',
					950: '#000000'
				},
			},
  		keyframes: {

				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				},
				shine: {
					'0%': {
						'background-position': '0% 0%'
					},
					'50%': {
						'background-position': '100% 100%'
					},
					to: {
						'background-position': '0% 0%'
					}
				},
				gradient: {
					to: {
						backgroundPosition: 'var(--bg-size) 0'
					}
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				shine: 'shine var(--duration) infinite linear',
				gradient: 'gradient 8s linear infinite'

			}
		}
	},
	plugins: [require("tailwindcss-animate"),
	nextui()
	],
} satisfies Config

export default config