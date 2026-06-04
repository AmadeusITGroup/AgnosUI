const t=`{
	"name": "@agnos-ui/svelte-preprocess",
	"description": "Preprocessor to run Svelte directives server-side.",
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
		}
	},
	"dependencies": {
		"magic-string": "^0.30.14"
	},
	"peerDependencies": {
		"svelte": "^5.16.0"
	},
	"sideEffects": false,
	"homepage": "https://www.agnosui.dev/latest/",
	"bugs": "https://github.com/AmadeusITGroup/AgnosUI/issues",
	"license": "MIT",
	"repository": {
		"type": "git",
		"url": "git+https://github.com/AmadeusITGroup/AgnosUI.git",
		"directory": "svelte/preprocess"
	},
	"keywords": [
		"svelte",
		"headless",
		"accordion",
		"AgnosUI",
		"alert",
		"carousel",
		"collapse",
		"components",
		"modal",
		"pagination",
		"progressbar",
		"rating",
		"slider",
		"toast",
		"tree",
		"widgets"
	]
}`;export{t as default};
