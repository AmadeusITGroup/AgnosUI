const t=`{
	"name": "@agnos-ui/angular-headless",
	"description": "Headless widget library for Angular.",
	"version": "0.0.0",
	"type": "module",
	"exports": {
		".": {
			"types": "./index.d.ts",
			"esm2022": "./esm2022/agnos-ui-angular-headless.mjs",
			"esm": "./esm2022/agnos-ui-angular-headless.mjs",
			"default": "./fesm2022/agnos-ui-angular-headless.mjs"
		}
	},
	"peerDependencies": {
		"@amadeus-it-group/tansu": "^1.0.0",
		"@angular/common": "^18.0.4",
		"@angular/core": "^18.0.4"
	},
	"dependencies": {
		"@agnos-ui/core": "0.0.0",
		"tslib": "^2.6.3"
	},
	"sideEffects": false,
	"homepage": "https://amadeusitgroup.github.io/AgnosUI/latest/",
	"bugs": "https://github.com/AmadeusITGroup/AgnosUI/issues",
	"license": "MIT",
	"repository": {
		"type": "git",
		"url": "git+https://github.com/AmadeusITGroup/AgnosUI.git",
		"directory": "angular/headless"
	},
	"keywords": [
		"angular",
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