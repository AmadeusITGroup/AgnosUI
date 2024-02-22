const t=`{
	"name": "@agnos-ui/angular",
	"description": "Bootstrap-based widget library for Angular.",
	"type": "module",
	"exports": {
		".": {
			"types": "./index.d.ts",
			"esm2022": "./esm2022/agnos-ui-angular.mjs",
			"esm": "./esm2022/agnos-ui-angular.mjs",
			"default": "./fesm2022/agnos-ui-angular.mjs"
		}
	},
	"peerDependencies": {
		"@amadeus-it-group/tansu": "*",
		"@angular/common": "*",
		"@angular/core": "*"
	},
	"dependencies": {
		"@agnos-ui/angular-headless": "",
		"@agnos-ui/style-bootstrap": "",
		"tslib": "^2.6.2"
	},
	"sideEffects": false,
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
