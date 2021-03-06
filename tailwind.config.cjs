const colors = require('tailwindcss/colors');

module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		screens: {
			sm: '480px',
			md: '768px',
			lg: '976px',
			xl: '1440px'
		},
		colors: {
			transparent: 'transparent',
			current: 'currentColor',
			background: '#F0F2F5',
			border: '#D9D9D9',
			'place-holder': '#BFBFBF',
			white: colors.white,
			gray: { ...colors.gray },
			slate: { ...colors.slate },
			red: { ...colors.red },
			yellow: { ...colors.yellow },
			blue: { ...colors.blue, primary: '#2593FC' },
			purple: { ...colors.purple },
			green: { ...colors.green }
		},
		container: {
			center: true
		},
		fontFamily: {
			sans: ['Graphik', 'sans-serif'],
			serif: ['Merriweather', 'serif']
		},
		extend: {}
	},
	plugins: []
};
