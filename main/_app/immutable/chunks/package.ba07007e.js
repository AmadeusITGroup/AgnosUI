const t=`{
	"name": "@agnos-ui/angular-headless",
	"description": "Headless widget library for Angular.",
	"peerDependencies": {
		"@angular/common": "*",
		"@angular/core": "*"
	},
	"dependencies": {
		"@agnos-ui/core": "",
		"@amadeus-it-group/tansu": "0.0.23",
		"tslib": "^2.6.2"
	},
	"sideEffects": false,
	"module": "fesm2022/agnos-ui-angular-headless.mjs",
	"typings": "index.d.ts",
	"exports": {
		"./package.json": {
			"default": "./package.json"
		},
		".": {
			"types": "./index.d.ts",
			"esm2022": "./esm2022/agnos-ui-angular-headless.mjs",
			"esm": "./esm2022/agnos-ui-angular-headless.mjs",
			"default": "./fesm2022/agnos-ui-angular-headless.mjs"
		}
	},
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
		"rating"
	]
}`;export{t as default};
