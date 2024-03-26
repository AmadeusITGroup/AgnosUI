const t=`{
	"name": "@agnos-ui/svelte-headless",
	"description": "Headless widget library for Svelte.",
	"version": "0.0.0",
	"type": "module",
	"main": "./index.js",
	"module": "./index.js",
	"types": "./index.d.ts",
	"exports": {
		".": {
			"types": "./index.d.ts",
			"svelte": "./index.d.ts",
			"default": "./index.js"
		},
		"./components/*": {
			"types": "./components/*/*.d.ts",
			"svelte": "./components/*/*.js",
			"default": "./components/*/*.js"
		},
		"./config": {
			"types": "./config.d.ts",
			"svelte": "./config.js",
			"default": "./config.js"
		},
		"./slot": {
			"types": "./slot.d.ts",
			"svelte": "./slot.js",
			"default": "./slot.js"
		},
		"./types": {
			"types": "./types.d.ts",
			"svelte": "./types.js",
			"default": "./types.js"
		},
		"./services/*": {
			"types": "./generated/services/*.d.ts",
			"svelte": "./generated/services/*.js",
			"default": "./generated/services/*.js"
		},
		"./services/transitions/*": {
			"types": "./generated/services/transitions/*.d.ts",
			"svelte": "./generated/services/transitions/*.js",
			"default": "./generated/services/transitions/*.js"
		},
		"./utils/*": {
			"types": "./generated/utils/*.d.ts",
			"svelte": "./generated/utils/*.js",
			"default": "./generated/utils/*.js"
		}
	},
	"dependencies": {
		"@agnos-ui/core": "0.0.0"
	},
	"peerDependencies": {
		"@amadeus-it-group/tansu": "*",
		"svelte": "*"
	},
	"sideEffects": false,
	"homepage": "https://amadeusitgroup.github.io/AgnosUI/latest/",
	"bugs": "https://github.com/AmadeusITGroup/AgnosUI/issues",
	"license": "MIT",
	"repository": "AmadeusITGroup/AgnosUI.git",
	"keywords": [
		"svelte",
		"headless",
		"accordion",
		"alert",
		"bootstrap",
		"components",
		"daisyUI",
		"modal",
		"pagination",
		"rating",
		"slider",
		"widgets"
	]
}`;export{t as default};
