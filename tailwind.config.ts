import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				
				// VinShik brand colors
				'brand-teal': 'hsl(var(--brand-teal))',
				'brand-teal-light': 'hsl(var(--brand-teal-light))',
				
				// Text colors
				'text-primary': 'hsl(var(--text-primary))',
				'text-secondary': 'hsl(var(--text-secondary))',
				'text-muted': 'hsl(var(--text-muted))',
				
				// Chart colors
				'chart-blue': 'hsl(var(--chart-blue))',
				'chart-orange': 'hsl(var(--chart-orange))',
				'chart-green': 'hsl(var(--chart-green))',
				'chart-purple': 'hsl(var(--chart-purple))',
				
				// Status backgrounds
				'status-blue-bg': 'hsl(var(--status-blue-bg))',
				'status-orange-bg': 'hsl(var(--status-orange-bg))',
				'status-green-bg': 'hsl(var(--status-green-bg))',
				'status-purple-bg': 'hsl(var(--status-purple-bg))',
				
				primary: {
					DEFAULT: 'hsl(var(--brand-teal))',
					foreground: 'hsl(var(--background))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--background))',
					foreground: 'hsl(var(--text-secondary))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--error))',
					foreground: 'hsl(var(--background))'
				},
				muted: {
					DEFAULT: 'hsl(var(--background))',
					foreground: 'hsl(var(--text-muted))'
				},
				accent: {
					DEFAULT: 'hsl(var(--sidebar-active))',
					foreground: 'hsl(var(--sidebar-active-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-active-foreground))',
					'primary-foreground': 'hsl(var(--sidebar-background))',
					accent: 'hsl(var(--sidebar-active))',
					'accent-foreground': 'hsl(var(--sidebar-active-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--ring))'
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
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
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
