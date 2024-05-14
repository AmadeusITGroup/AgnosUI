const t=`{
	"name": "@agnos-ui/core",
	"description": "Framework-agnostic headless widget library.",
	"version": "0.0.0",
	"type": "module",
	"main": "./index.cjs",
	"module": "./index.js",
	"types": "./index.d.ts",
	"exports": {
		".": {
			"types": "./index.d.ts",
			"require": "./index.cjs",
			"default": "./index.js"
		},
		"./components/*": {
			"types": "./components/*/index.d.ts",
			"require": "./components/*/index.cjs",
			"default": "./components/*/index.js"
		},
		"./config": {
			"types": "./config.d.ts",
			"require": "./config.cjs",
			"default": "./config.js"
		},
		"./types": {
			"types": "./types.d.ts",
			"require": "./types.cjs",
			"default": "./types.js"
		},
		"./services/*": {
			"types": "./services/*.d.ts",
			"require": "./services/*.cjs",
			"default": "./services/*.js"
		},
		"./services/transitions/*": {
			"types": "./services/transitions/*.d.ts",
			"require": "./services/transitions/*.cjs",
			"default": "./services/transitions/*.js"
		},
		"./utils/*": {
			"types": "./utils/*.d.ts",
			"require": "./utils/*.cjs",
			"default": "./utils/*.js"
		}
	},
	"peerDependencies": {
		"@amadeus-it-group/tansu": "*",
		"@floating-ui/dom": "*",
		"esm-env": "*"
	},
	"sideEffects": false,
	"homepage": "https://amadeusitgroup.github.io/AgnosUI/latest/",
	"bugs": "https://github.com/AmadeusITGroup/AgnosUI/issues",
	"license": "MIT",
	"repository": {
		"type": "git",
		"url": "git+https://github.com/AmadeusITGroup/AgnosUI.git",
		"directory": "core"
	},
	"keywords": [
		"headless",
		"AgnosUI",
		"accordion",
		"alert",
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