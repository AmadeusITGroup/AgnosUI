module.exports = {
	content: ['./src/**/*.{html,js,ts,tsx}', './index.html'],
	theme: {
		extend: {},
	},
	plugins: [require('daisyui')],
	darkMode: ['selector', '[data-theme="dark"]'],
	daisyui: {
		themes: ['light', 'dark'],
	},
};
