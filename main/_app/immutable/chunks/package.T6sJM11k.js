const t=`{
	"name": "@agnos-ui/svelte-headless",
	"description": "Headless component library for Svelte.",
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
			"types": "./generated/components/*/index.d.ts",
			"svelte": "./generated/components/*/index.js",
			"default": "./generated/components/*/index.js"
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
		"@amadeus-it-group/tansu": "^1.0.0",
		"svelte": "^5.1.15"
	},
	"sideEffects": false,
	"homepage": "https://www.agnosui.dev/latest/",
	"bugs": "https://github.com/AmadeusITGroup/AgnosUI/issues",
	"license": "MIT",
	"repository": {
		"type": "git",
		"url": "git+https://github.com/AmadeusITGroup/AgnosUI.git",
		"directory": "svelte/headless"
	},
	"keywords": [
		"svelte",
		"headless",
		"accordion",
		"AgnosUI",
		"alert",
		"collapse",
		"components",
		"modal",
		"pagination",
		"progressbar",
		"rating",
		"slider",
		"toast",
		"widgets"
	]
}`;export{t as default};
