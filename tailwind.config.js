/** @type {import('tailwindcss').Config} */
export default {
	darkMode: ["class"],
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
	  screens: {
		sm: '480px',
		md: '768px',
		lg: '976px',
		xl: '1440px'
	  },
	  colors: {
		primary: '#1d74b9',
		secondary: '#3e4756',
		accent: '#ffb049',
		background: '#f4faff',
		white: '#ffffff'
	  },
	  fontFamily: {
        main: ['"Afacad Flux"', 'sans-serif'],
      },
	  extend: {
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
	// plugins: [require("tailwindcss-animate")],
  };
  