const t=`{
	"name": "agnos-ui-svelte-stackblitz-demo",
	"version": "0.5.0-next.0",
	"private": true,
	"type": "module",
	"scripts": {
		"dev": "vite",
		"build": "vite build && svelte-check --tsconfig ./tsconfig.json",
		"preview": "vite preview"
	},
	"devDependencies": {
		"@agnos-ui/svelte-headless": "0.5.0-next.0",
		"@agnos-ui/svelte-preprocess": "0.5.0-next.0",
		"@amadeus-it-group/tansu": "^1.0.0",
		"@floating-ui/dom": "^1.6.11",
		"@sveltejs/vite-plugin-svelte": "^4.0.0",
		"@tsconfig/svelte": "^5.0.4",
		"autoprefixer": "^10.4.20",
		"daisyui": "^4.12.14",
		"postcss": "^8.4.47",
		"sass": "^1.80.5",
		"svelte": "^5.1.4",
		"svelte-check": "^4.0.5",
		"tailwindcss": "^3.4.14",
		"tslib": "^2.8.0",
		"typescript": "~5.5.4",
		"vite": "^5.4.10"
	}
}
`;export{t as default};
