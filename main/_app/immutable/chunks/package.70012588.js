const t=`{
	"name": "@agnos-ui/core",
	"description": "Framework-agnostic headless widget library.",
	"keywords": [
		"headless",
		"agnostic",
		"components",
		"widgets",
		"accordion",
		"alert",
		"modal",
		"pagination",
		"rating",
		"slider"
	],
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
		"./types": {
			"types": "./types.d.ts",
			"default": "./types.js"
		},
		"./services/*": {
			"types": "./services/*.d.ts",
			"default": "./services/*.js"
		},
		"./services/transitions/*": {
			"types": "./services/transitions/*.d.ts",
			"default": "./services/transitions/*.js"
		},
		"./utils/*": {
			"types": "./utils/*.d.ts",
			"default": "./utils/*.js"
		}
	},
	"dependencies": {
		"@amadeus-it-group/tansu": "0.0.24"
	},
	"peerDependencies": {
		"@floating-ui/dom": "*"
	},
	"sideEffects": false,
	"homepage": "https://amadeusitgroup.github.io/AgnosUI/latest/",
	"bugs": "https://github.com/AmadeusITGroup/AgnosUI/issues",
	"license": "MIT",
	"repository": {
		"type": "git",
		"url": "https://github.com/AmadeusITGroup/AgnosUI.git",
		"directory": "core"
	}
}`;export{t as default};
