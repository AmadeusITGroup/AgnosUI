/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/app-tailwind/**/*.{svelte,js,ts,jsx,tsx}', './src/app-tailwind/index.html'],
	theme: {
		extend: {},
	},
	plugins: [require('daisyui')],
	darkMode: ['selector', '[data-theme="dark"]'],
	daisyui: {
		themes: ['light', 'dark'],
	},
};
