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
			"default": "./index.js"
		},
		"./components/*": {
			"types": "./components/*/*.d.ts",
			"default": "./components/*/*.js"
		},
		"./config": {
			"types": "./config.d.ts",
			"default": "./config.js"
		},
		"./slot": {
			"types": "./slot.d.ts",
			"default": "./slot.js"
		},
		"./types": {
			"types": "./types.d.ts",
			"default": "./types.js"
		},
		"./services/*": {
			"types": "./generated/services/*.d.ts",
			"default": "./generated/services/*.js"
		},
		"./services/transitions/*": {
			"types": "./generated/services/transitions/*.d.ts",
			"default": "./generated/services/transitions/*.js"
		},
		"./utils/*": {
			"types": "./generated/utils/*.d.ts",
			"default": "./generated/utils/*.js"
		}
	},
	"dependencies": {
		"@agnos-ui/core": "",
		"@amadeus-it-group/tansu": "0.0.24"
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
		"rating",
		"slider"
	]
}`;export{t as default};
