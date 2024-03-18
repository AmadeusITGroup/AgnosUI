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
	"main": "./index.cjs",
	"module": "./index.js",
	"types": "./index.d.ts",
	"exports": {
		".": {
			"types": "./index.d.ts",
			"require": "./dist/index.cjs",
			"default": "./index.js"
		},
		"./components/*": {
			"types": "./components/*/index.d.ts",
			"require": "./dist/components/*/index.cjs",
			"default": "./components/*/index.js"
		},
		"./config": {
			"types": "./config.d.ts",
			"require": "./dist/config.cjs",
			"default": "./config.js"
		},
		"./types": {
			"types": "./types.d.ts",
			"require": "./dist/types.cjs",
			"default": "./types.js"
		},
		"./services/*": {
			"types": "./services/*.d.ts",
			"require": "./dist/services/*.cjs",
			"default": "./services/*.js"
		},
		"./services/transitions/*": {
			"types": "./services/transitions/*.d.ts",
			"require": "./dist/services/transitions/*.cjs",
			"default": "./services/transitions/*.js"
		},
		"./utils/*": {
			"types": "./utils/*.d.ts",
			"require": "./dist/utils/*.cjs",
			"default": "./utils/*.js"
		}
	},
	"peerDependencies": {
		"@amadeus-it-group/tansu": "*",
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
