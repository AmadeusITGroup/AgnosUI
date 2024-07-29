const t=`{
	"name": "@agnos-ui/core-bootstrap",
	"description": "Styles and widget interface extensions necessary to use AgnosUI with Bootstrap.",
	"version": "0.0.0",
	"keywords": [
		"bootstrap",
		"css",
		"scss",
		"accordion",
		"AgnosUI",
		"alert",
		"components",
		"modal",
		"pagination",
		"progressbar",
		"rating",
		"slider",
		"toast",
		"widgets"
	],
	"type": "module",
	"main": "./index.cjs",
	"module": "./index.js",
	"types": "./index.d.ts",
	"exports": {
		".": {
			"types": "./index.d.ts",
			"sass": "./scss/agnosui.scss",
			"require": "./index.cjs",
			"default": "./index.js"
		},
		"./types": {
			"types": "./types.d.ts",
			"require": "./types.cjs",
			"default": "./types.js"
		},
		"./components/*": {
			"types": "./components/*/index.d.ts",
			"require": "./components/*/index.cjs",
			"default": "./components/*/index.js"
		},
		"./services/transitions": {
			"types": "./services/transitions/index.d.ts",
			"require": "./services/transitions/index.cjs",
			"default": "./services/transitions/index.js"
		},
		"./config": {
			"types": "./config.d.ts",
			"require": "./config.cjs",
			"default": "./config.js"
		},
		"./scss/agnosui.scss": {
			"require": "./scss/agnosui.scss",
			"default": "./scss/agnosui.scss"
		},
		"./css/agnosui.css": {
			"require": "./css/agnosui.css",
			"default": "./css/agnosui.css"
		}
	},
	"dependencies": {
		"@agnos-ui/core": "0.0.0"
	},
	"sideEffects": false,
	"homepage": "https://amadeusitgroup.github.io/AgnosUI/latest/",
	"bugs": "https://github.com/AmadeusITGroup/AgnosUI/issues",
	"license": "MIT",
	"repository": {
		"type": "git",
		"url": "git+https://github.com/AmadeusITGroup/AgnosUI.git",
		"directory": "core-bootstrap"
	}
}`;export{t as default};
