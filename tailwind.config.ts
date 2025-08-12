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
				/* Minimal Portfolio Theme Colors */
				'page-bg': 'hsl(var(--page-bg))',
				'dashboard-bg': 'hsl(var(--dashboard-bg))',
				'card-bg': 'hsl(var(--card-bg))',
				'card-hover': 'hsl(var(--card-hover))',
				
				'text-primary': 'hsl(var(--text-primary))',
				'text-secondary': 'hsl(var(--text-secondary))',
				'text-muted': 'hsl(var(--text-muted))',
				
				'accent-primary': 'hsl(var(--accent-primary))',
				'accent-secondary': 'hsl(var(--accent-secondary))',
				
				'badge-bg': 'hsl(var(--badge-bg))',
				'badge-text': 'hsl(var(--badge-text))',
				
				'status-completed': 'hsl(var(--status-completed))',
				'status-active': 'hsl(var(--status-active))',
				
				'border-subtle': 'hsl(var(--border-subtle))',
			},
			fontFamily: {
				'body': ['Inter', 'system-ui', 'sans-serif'],
			},
			boxShadow: {
				'card': 'var(--shadow-card)',
				'card-hover': 'var(--shadow-card-hover)',
				'subtle': 'var(--shadow-subtle)',
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'fade-in': {
					'0%': { opacity: '0', transform: 'translateY(10px)' },
					'100%': { opacity: '1', transform: 'translateY(0)' }
				},
				'scale-hover': {
					'0%': { transform: 'scale(1)' },
					'100%': { transform: 'scale(1.02)' }
				}
			},
			animation: {
				'fade-in': 'fade-in 0.5s ease-out',
				'scale-hover': 'scale-hover 0.3s ease-out'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
