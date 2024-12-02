const t=`{
	"name": "@agnos-ui/svelte-bootstrap",
	"description": "Bootstrap-based component library for Svelte.",
	"version": "0.0.0",
	"type": "module",
	"main": "./index.js",
	"module": "./index.js",
	"types": "./index.d.ts",
	"exports": {
		".": {
			"types": "./index.d.ts",
			"svelte": "./index.js",
			"default": "./index.js"
		},
		"./components/*": {
			"types": "./components/*/index.d.ts",
			"svelte": "./components/*/index.js",
			"default": "./components/*/index.js"
		},
		"./config": {
			"types": "./generated/config.d.ts",
			"svelte": "./generated/config.js",
			"default": "./generated/config.js"
		},
		"./slot": {
			"types": "./generated/slot.d.ts",
			"svelte": "./generated/slot.js",
			"default": "./generated/slot.js"
		},
		"./types": {
			"types": "./generated/types.d.ts",
			"svelte": "./generated/types.js",
			"default": "./generated/types.js"
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
		"@agnos-ui/core-bootstrap": "0.0.0",
		"@agnos-ui/svelte-headless": "0.0.0"
	},
	"peerDependencies": {
		"@amadeus-it-group/tansu": "^1.0.0",
		"esm-env": "^1.2.1",
		"svelte": "^5.3.1"
	},
	"sideEffects": false,
	"homepage": "https://www.agnosui.dev/latest/",
	"bugs": "https://github.com/AmadeusITGroup/AgnosUI/issues",
	"license": "MIT",
	"repository": {
		"type": "git",
		"url": "git+https://github.com/AmadeusITGroup/AgnosUI.git",
		"directory": "svelte/bootstrap"
	},
	"keywords": [
		"svelte",
		"bootstrap",
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
