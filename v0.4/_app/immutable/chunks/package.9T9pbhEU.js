const t=`{
	"name": "agnos-ui-svelte-stackblitz-demo",
	"version": "0.4.0-next.0",
	"private": true,
	"type": "module",
	"scripts": {
		"dev": "vite",
		"build": "vite build && svelte-check --tsconfig ./tsconfig.json",
		"preview": "vite preview"
	},
	"devDependencies": {
		"@amadeus-it-group/tansu": "^1.0.0",
		"@floating-ui/dom": "^1.6.5",
		"@sveltejs/vite-plugin-svelte": "^3.1.1",
		"@tsconfig/svelte": "^5.0.4",
		"autoprefixer": "^10.4.19",
		"daisyui": "^4.12.7",
		"postcss": "^8.4.38",
		"sass": "^1.77.6",
		"svelte": "^4.2.18",
		"svelte-check": "^3.8.1",
		"tailwindcss": "^3.4.4",
		"tslib": "^2.6.3",
		"typescript": "~5.4.5",
		"vite": "^5.3.1",
		"@agnos-ui/svelte-headless": "0.4.0-next.0",
		"@agnos-ui/svelte-preprocess": "0.4.0-next.0"
	}
}
`;export{t as default};
