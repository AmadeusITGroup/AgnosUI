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
		"@angular/common": "*",
		"@angular/core": "*"
	},
	"dependencies": {
		"@agnos-ui/core": "",
		"@amadeus-it-group/tansu": "0.0.24",
		"tslib": "^2.6.2"
	},
	"sideEffects": false,
	"homepage": "https://amadeusitgroup.github.io/AgnosUI/latest/",
	"bugs": "https://github.com/AmadeusITGroup/AgnosUI/issues",
	"license": "MIT",
	"repository": {
		"type": "git",
		"url": "https://github.com/AmadeusITGroup/AgnosUI.git",
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
