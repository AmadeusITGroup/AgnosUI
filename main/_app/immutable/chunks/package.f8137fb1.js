const t=`{
	"name": "@agnos-ui/angular",
	"description": "Bootstrap-based widget library for Angular.",
	"peerDependencies": {
		"@angular/common": "*",
		"@angular/core": "*"
	},
	"dependencies": {
		"@agnos-ui/angular-headless": "",
		"@agnos-ui/style-bootstrap": "",
		"@amadeus-it-group/tansu": "0.0.23",
		"tslib": "^2.6.2"
	},
	"sideEffects": false,
	"module": "fesm2022/agnos-ui-angular.mjs",
	"typings": "index.d.ts",
	"exports": {
		"./package.json": {
			"default": "./package.json"
		},
		".": {
			"types": "./index.d.ts",
			"esm2022": "./esm2022/agnos-ui-angular.mjs",
			"esm": "./esm2022/agnos-ui-angular.mjs",
			"default": "./fesm2022/agnos-ui-angular.mjs"
		}
	},
	"homepage": "https://amadeusitgroup.github.io/AgnosUI/latest/",
	"bugs": "https://github.com/AmadeusITGroup/AgnosUI/issues",
	"license": "MIT",
	"repository": {
		"type": "git",
		"url": "https://github.com/AmadeusITGroup/AgnosUI.git",
		"directory": "angular/lib"
	},
	"keywords": [
		"angular",
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
