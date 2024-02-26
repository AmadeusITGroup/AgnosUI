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
		"@agnos-ui/core": "",
		"esm-env": "^1.0.0"
	},
	"peerDependencies": {
		"@amadeus-it-group/tansu": "*",
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
		"rating",
		"slider"
	]
}`;export{t as default};
