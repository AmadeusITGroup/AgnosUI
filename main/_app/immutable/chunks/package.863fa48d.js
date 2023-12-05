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
		}
	},
	"dependencies": {
		"@amadeus-it-group/tansu": "0.0.23",
		"@floating-ui/dom": "^1.5.3"
	},
	"sideEffects": false,
	"homepage": "https://amadeusitgroup.github.io/AgnosUI/latest/",
	"bugs": "https://github.com/AmadeusITGroup/AgnosUI/issues",
	"license": "MIT",
	"repository": {
		"type": "git",
		"url": "https://github.com/AmadeusITGroup/AgnosUI.git",
		"directory": "core/lib"
	}
}`;export{t as default};
