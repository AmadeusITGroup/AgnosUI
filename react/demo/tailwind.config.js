import daisyUI from 'daisyui';

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/daisyui/**/*.{svelte,js,ts,jsx,tsx}', './src/daisyui/index.html'],
	theme: {
		extend: {},
	},
	plugins: [daisyUI],
	darkMode: ['selector', '[data-theme="dark"]'],
	daisyui: {
		themes: ['light', 'dark'],
	},
};
