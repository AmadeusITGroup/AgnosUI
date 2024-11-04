const t=`{
	"name": "agnos-ui-svelte-stackblitz-demo",
	"version": "0.0.0",
	"private": true,
	"type": "module",
	"scripts": {
		"dev": "vite",
		"build": "vite build && svelte-check --tsconfig ./tsconfig.json",
		"preview": "vite preview"
	},
	"devDependencies": {
		"@amadeus-it-group/tansu": "^1.0.0",
		"@floating-ui/dom": "^1.6.12",
		"@sveltejs/vite-plugin-svelte": "^4.0.0",
		"@tsconfig/svelte": "^5.0.4",
		"bootstrap-icons": "^1.11.3",
		"sass": "^1.80.6",
		"svelte": "^5.1.9",
		"svelte-check": "^4.0.5",
		"tslib": "^2.8.1",
		"typescript": "~5.5.4",
		"vite": "^5.4.10"
	}
}
`;export{t as default};