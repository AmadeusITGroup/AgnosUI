const t=`{
	"name": "@agnos-ui/angular-bootstrap",
	"description": "Bootstrap-based widget library for Angular.",
	"version": "0.0.0",
	"type": "module",
	"exports": {
		".": {
			"types": "./index.d.ts",
			"esm2022": "./esm2022/agnos-ui-angular-bootstrap.mjs",
			"esm": "./esm2022/agnos-ui-angular-bootstrap.mjs",
			"default": "./fesm2022/agnos-ui-angular-bootstrap.mjs"
		}
	},
	"peerDependencies": {
		"@amadeus-it-group/tansu": "^1.0.0",
		"@angular/common": "^18.2.0",
		"@angular/core": "^18.2.0"
	},
	"dependencies": {
		"@agnos-ui/angular-headless": "0.0.0",
		"@agnos-ui/core-bootstrap": "0.0.0",
		"tslib": "^2.6.3"
	},
	"sideEffects": false,
	"homepage": "https://amadeusitgroup.github.io/AgnosUI/latest/",
	"bugs": "https://github.com/AmadeusITGroup/AgnosUI/issues",
	"license": "MIT",
	"repository": {
		"type": "git",
		"url": "git+https://github.com/AmadeusITGroup/AgnosUI.git",
		"directory": "angular/bootstrap"
	},
	"keywords": [
		"angular",
		"bootstrap",
		"accordion",
		"AgnosUI",
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
