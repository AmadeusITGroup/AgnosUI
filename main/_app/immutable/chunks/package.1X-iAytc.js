const t=`{
	"name": "@agnos-ui/style-bootstrap",
	"description": "Scss and css files needed to style AgnosUI components not styled by Bootstrap",
	"version": "0.0.0",
	"keywords": [
		"style-bootstrap",
		"bootstrap",
		"css",
		"scss",
		"style",
		"accordion",
		"alert",
		"bootstrap",
		"components",
		"daisyUI",
		"modal",
		"pagination",
		"rating",
		"slider",
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
	"license": "MIT",
	"bugs": "https://github.com/AmadeusITGroup/AgnosUI/issues",
	"repository": {
		"type": "git",
		"url": "git+https://github.com/AmadeusITGroup/AgnosUI.git",
		"directory": "style-bootstrap"
	},
	"dependencies": {
		"@agnos-ui/core": "0.0.0"
	},
	"peerDependencies": {},
	"homepage": "https://amadeusitgroup.github.io/AgnosUI/latest/"
}`;export{t as default};
