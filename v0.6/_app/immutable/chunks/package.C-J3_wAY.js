const t=`{
	"name": "agnos-ui-svelte-stackblitz-demo",
	"version": "0.6.0-next.0",
	"private": true,
	"type": "module",
	"scripts": {
		"dev": "vite",
		"build": "vite build && svelte-check --tsconfig ./tsconfig.json",
		"preview": "vite preview"
	},
	"devDependencies": {
		"@agnos-ui/svelte-bootstrap": "0.6.0-next.0",
		"@agnos-ui/svelte-preprocess": "0.6.0-next.0",
		"@amadeus-it-group/tansu": "^1.0.0",
		"@floating-ui/dom": "^1.6.12",
		"@sveltejs/vite-plugin-svelte": "^4.0.1",
		"@tsconfig/svelte": "^5.0.4",
		"bootstrap-icons": "^1.11.3",
		"sass": "^1.81.0",
		"svelte": "^5.2.7",
		"svelte-check": "^4.1.0",
		"tslib": "^2.8.1",
		"typescript": "~5.5.4",
		"vite": "^5.4.11"
	}
}
`;export{t as default};
