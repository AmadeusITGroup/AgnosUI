const t=`{
	"name": "@agnos-ui/angular-bootstrap",
	"description": "Bootstrap-based component library for Angular.",
	"version": "0.0.0",
	"type": "module",
	"exports": {
		".": {
			"types": "./types/agnos-ui-angular-bootstrap.d.ts",
			"default": "./fesm2022/agnos-ui-angular-bootstrap.mjs"
		}
	},
	"peerDependencies": {
		"@amadeus-it-group/tansu": "^2.0.0",
		"@angular/common": "^21.0.0",
		"@angular/core": "^21.0.0"
	},
	"dependencies": {
		"@agnos-ui/angular-headless": "0.0.0",
		"@agnos-ui/core-bootstrap": "0.0.0",
		"tslib": "^2.8.1"
	},
	"sideEffects": false,
	"homepage": "https://www.agnosui.dev/latest/",
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
