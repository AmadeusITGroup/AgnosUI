const t=`{
	"name": "@agnos-ui/angular",
	"description": "Bootstrap-based widget library for Angular.",
	"version": "0.0.0",
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
		"@agnos-ui/angular-headless": "0.0.0",
		"@agnos-ui/style-bootstrap": "0.0.0",
		"tslib": "^2.6.2"
	},
	"sideEffects": false,
	"homepage": "https://amadeusitgroup.github.io/AgnosUI/latest/",
	"bugs": "https://github.com/AmadeusITGroup/AgnosUI/issues",
	"license": "MIT",
	"repository": "AmadeusITGroup/AgnosUI.git",
	"keywords": [
		"angular",
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
	]
}`;export{t as default};
