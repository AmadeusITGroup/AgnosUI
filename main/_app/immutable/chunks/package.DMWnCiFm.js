const t=`{
	"name": "@agnos-ui/angular-headless",
	"description": "Headless widget library for Angular.",
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
		"@amadeus-it-group/tansu": "*",
		"@angular/common": "*",
		"@angular/core": "*"
	},
	"dependencies": {
		"@agnos-ui/core": "0.0.0",
		"tslib": "^2.6.2"
	},
	"sideEffects": false,
	"version": "0.0.0",
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
		"headless",
		"components",
		"widgets",
		"accordion",
		"alert",
		"modal",
		"pagination",
		"rating",
		"slider"
	]
}`;export{t as default};
