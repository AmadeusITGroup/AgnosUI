const t=`{
	"name": "@agnos-ui/svelte",
	"description": "Bootstrap-based widget library for Svelte.",
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
			"types": "./components/*/index.d.ts",
			"default": "./components/*/index.js"
		},
		"./config": {
			"types": "./generated/config.d.ts",
			"default": "./generated/config.js"
		},
		"./slot": {
			"types": "./generated/slot.d.ts",
			"default": "./generated/slot.js"
		},
		"./types": {
			"types": "./generated/types.d.ts",
			"default": "./generated/types.js"
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
		"@agnos-ui/style-bootstrap": "",
		"@agnos-ui/svelte-headless": "",
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
		"directory": "svelte/lib"
	},
	"keywords": [
		"svelte",
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
