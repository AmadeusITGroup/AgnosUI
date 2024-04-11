const t=`{
	"name": "@agnos-ui/core-bootstrap",
	"description": "Styles and widget interface extensions necessary to use AgnosUI with Bootstrap.",
	"version": "0.0.0",
	"keywords": [
		"bootstrap",
		"headless",
		"css",
		"scss",
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
	],
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
		"./scss/agnosui.scss": {
			"require": "./scss/agnosui.scss",
			"default": "./scss/agnosui.scss"
		},
		"./css/agnosui.css": {
			"require": "./css/agnosui.css",
			"default": "./css/agnosui.css"
		}
	},
	"files": [
		"scss",
		"css"
	],
	"dependencies": {
		"@agnos-ui/core": "0.0.0"
	},
	"peerDependencies": {},
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
