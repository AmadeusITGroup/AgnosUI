const t=`{
	"name": "agnos-ui-svelte-stackblitz-demo",
	"version": "0.10.0-next.1",
	"private": true,
	"type": "module",
	"scripts": {
		"dev": "vite",
		"build": "vite build && svelte-check --tsconfig ./tsconfig.json",
		"preview": "vite preview"
	},
	"devDependencies": {
		"@agnos-ui/svelte-headless": "0.10.0-next.1",
		"@agnos-ui/svelte-preprocess": "0.10.0-next.1",
		"@amadeus-it-group/tansu": "^2.0.0",
		"@floating-ui/dom": "^1.6.12",
		"@sveltejs/vite-plugin-svelte": "^6.0.0",
		"@tailwindcss/browser": "^4.0.0",
		"@tsconfig/svelte": "^5.0.4",
		"daisyui": "^5.0.6",
		"embla-carousel-autoplay": "^8.5.2",
		"sass": "^1.82.0",
		"svelte": "^5.16.0",
		"svelte-check": "^4.1.1",
		"tslib": "^2.8.1",
		"typescript": "~5.9.0",
		"vite": "^7.0.0"
	}
}
`;export{t as default};
