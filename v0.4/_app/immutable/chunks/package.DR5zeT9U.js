const t=`{
	"name": "agnos-ui-svelte-stackblitz-demo",
	"version": "0.4.1",
	"private": true,
	"type": "module",
	"scripts": {
		"dev": "vite",
		"build": "vite build && svelte-check --tsconfig ./tsconfig.json",
		"preview": "vite preview"
	},
	"devDependencies": {
		"@agnos-ui/svelte-bootstrap": "0.4.1",
		"@agnos-ui/svelte-preprocess": "0.4.1",
		"@amadeus-it-group/tansu": "^1.0.0",
		"@floating-ui/dom": "^1.6.8",
		"@sveltejs/vite-plugin-svelte": "^3.1.1",
		"@tsconfig/svelte": "^5.0.4",
		"bootstrap-icons": "^1.11.3",
		"sass": "^1.77.8",
		"svelte": "^4.2.18",
		"svelte-check": "^3.8.4",
		"tslib": "^2.6.3",
		"typescript": "~5.5.4",
		"vite": "^5.3.5"
	}
}
`;export{t as default};
