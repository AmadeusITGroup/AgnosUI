import daisyUI from 'daisyui';

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./daisyui/src/app/**/*.{html,js,ts}', './daisyui/src/app/index.html'],
	theme: {
		extend: {},
	},
	plugins: [daisyUI],
	darkMode: ['selector', '[data-theme="dark"]'],
	daisyui: {
		themes: ['light', 'dark'],
	},
};
