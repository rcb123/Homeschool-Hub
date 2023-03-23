/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				forest: {
					300: '#A5B8AC',
					500: '#729776'
				},
        lavender: '#B8AECA'
			}
		}
	},
	daisyui: {
		themes: [
			{
				mytheme: {
					'primary': '#729776',
					'secondary': '#A5B8AC',
					'accent': '#C3BFDB',
					'neutral': '#3D4451',
					'base-100': '#FFFFFF',
					'info': '#3ABFF8',
					'success': '#36D399',
					'warning': '#FBBD23',
					'error': '#F87272'
				}
			}
		]
	},
	plugins: [require('daisyui')]
};
