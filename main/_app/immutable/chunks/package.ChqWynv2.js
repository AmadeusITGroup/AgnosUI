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
		"@floating-ui/dom": "^1.6.11",
		"@sveltejs/vite-plugin-svelte": "^4.0.0-next.7",
		"@tsconfig/svelte": "^5.0.4",
		"bootstrap-icons": "^1.11.3",
		"sass": "^1.79.4",
		"svelte": "^5.0.0-next.260",
		"svelte-check": "^4.0.4",
		"tslib": "^2.7.0",
		"typescript": "~5.5.4",
		"vite": "^5.4.8"
	}
}
`;export{t as default};