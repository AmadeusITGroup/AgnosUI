const t=`{
	"name": "agnos-ui-svelte-stackblitz-demo",
	"version": "0.7.0-next.0",
	"private": true,
	"type": "module",
	"scripts": {
		"dev": "vite",
		"build": "vite build && svelte-check --tsconfig ./tsconfig.json",
		"preview": "vite preview"
	},
	"devDependencies": {
		"@agnos-ui/svelte-headless": "0.7.0-next.0",
		"@agnos-ui/svelte-preprocess": "0.7.0-next.0",
		"@amadeus-it-group/tansu": "^2.0.0",
		"@floating-ui/dom": "^1.6.12",
		"@sveltejs/vite-plugin-svelte": "^5.0.1",
		"@tsconfig/svelte": "^5.0.4",
		"autoprefixer": "^10.4.20",
		"daisyui": "^4.12.20",
		"postcss": "^8.4.49",
		"sass": "^1.82.0",
		"svelte": "^5.9.0",
		"svelte-check": "^4.1.1",
		"tailwindcss": "^3.4.16",
		"tslib": "^2.8.1",
		"typescript": "~5.6.3",
		"vite": "^6.0.3"
	}
}
`;export{t as default};
