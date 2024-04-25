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
		"magic-string": "^0.30.10"
	},
	"peerDependencies": {
		"svelte": "*"
	},
	"sideEffects": false,
	"homepage": "https://amadeusitgroup.github.io/AgnosUI/latest/",
	"bugs": "https://github.com/AmadeusITGroup/AgnosUI/issues",
	"license": "MIT",
	"repository": {
		"type": "git",
		"url": "git+https://github.com/AmadeusITGroup/AgnosUI.git",
		"directory": "svelte/preprocess"
	},
	"keywords": [
		"svelte",
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
