const t=`module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts,tsx}', './index.html'],
	theme: {
		extend: {},
	},
	plugins: [require('daisyui')],
	darkMode: ['selector', '[data-theme="dark"]'],
	daisyui: {
		themes: ['light', 'dark'],
	},
};
`;export{t as default};
