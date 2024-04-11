const t=`{
	"name": "@agnos-ui/react-bootstrap",
	"description": "Bootstrap-based widget library for React.",
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
		},
		"./components/*": {
			"types": "./components/*/index.d.ts",
			"require": "./components/*/index.cjs",
			"default": "./components/*/index.js"
		},
		"./config": {
			"types": "./generated/config.d.ts",
			"require": "./generated/config.cjs",
			"default": "./generated/config.js"
		},
		"./slot": {
			"types": "./generated/slot.d.ts",
			"require": "./generated/slot.cjs",
			"default": "./generated/slot.js"
		},
		"./types": {
			"types": "./generated/types.d.ts",
			"require": "./generated/types.cjs",
			"default": "./generated/types.js"
		},
		"./services/*": {
			"types": "./generated/services/*.d.ts",
			"require": "./generated/services/*.cjs",
			"default": "./generated/services/*.js"
		},
		"./services/transitions/*": {
			"types": "./generated/services/transitions/*.d.ts",
			"require": "./generated/services/transitions/*.cjs",
			"default": "./generated/services/transitions/*.js"
		},
		"./utils/*": {
			"types": "./generated/utils/*.d.ts",
			"require": "./generated/utils/*.cjs",
			"default": "./generated/utils/*.js"
		}
	},
	"dependencies": {
		"@agnos-ui/core-bootstrap": "0.0.0",
		"@agnos-ui/react-headless": "0.0.0",
		"classnames": "^2.5.1"
	},
	"peerDependencies": {
		"@amadeus-it-group/tansu": "*",
		"react": "*",
		"react-dom": "*"
	},
	"sideEffects": false,
	"homepage": "https://amadeusitgroup.github.io/AgnosUI/latest/",
	"bugs": "https://github.com/AmadeusITGroup/AgnosUI/issues",
	"license": "MIT",
	"repository": {
		"type": "git",
		"url": "git+https://github.com/AmadeusITGroup/AgnosUI.git",
		"directory": "react/bootstrap"
	},
	"keywords": [
		"react",
		"bootstrap",
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
