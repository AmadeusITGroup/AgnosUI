const t=`{
	"name": "@agnos-ui/svelte-headless",
	"description": "Headless widget library for Svelte.",
	"type": "module",
	"main": "./index.js",
	"module": "./index.js",
	"types": "./index.d.ts",
	"exports": {
		".": {
			"types": "./index.d.ts",
			"svelte": "./index.js"
		}
	},
	"dependencies": {
		"@agnos-ui/core": "",
		"@amadeus-it-group/tansu": "0.0.23"
	},
	"peerDependencies": {
		"svelte": "*"
	},
	"sideEffects": false,
	"homepage": "https://amadeusitgroup.github.io/AgnosUI/latest/",
	"bugs": "https://github.com/AmadeusITGroup/AgnosUI/issues",
	"license": "MIT",
	"repository": {
		"type": "git",
		"url": "https://github.com/AmadeusITGroup/AgnosUI.git",
		"directory": "svelte/headless"
	},
	"keywords": [
		"svelte",
		"headless",
		"components",
		"widgets",
		"accordion",
		"alert",
		"modal",
		"pagination",
		"rating"
	]
}`;export{t as default};
