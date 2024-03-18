const t=`{
	"name": "@agnos-ui/react-headless",
	"type": "module",
	"main": "./index.cjs",
	"module": "./index.js",
	"types": "./index.d.ts",
	"exports": {
		".": {
			"types": "./index.d.ts",
			"require": "./dist/index.cjs",
			"default": "./index.js"
		},
		"./components/*": {
			"types": "./components/*/index.d.ts",
			"require": "./dist/components/*/index.cjs",
			"default": "./components/*/index.js"
		},
		"./config": {
			"types": "./config.d.ts",
			"require": "./dist/config.cjs",
			"default": "./config.js"
		},
		"./slot": {
			"types": "./slot.d.ts",
			"require": "./dist/slot.cjs",
			"default": "./slot.js"
		},
		"./types": {
			"types": "./types.d.ts",
			"require": "./dist/types.cjs",
			"default": "./types.js"
		},
		"./services/*": {
			"types": "./generated/services/*.d.ts",
			"require": "./dist/generated/services/*.cjs",
			"default": "./generated/services/*.js"
		},
		"./services/transitions/*": {
			"types": "./generated/services/transitions/*.d.ts",
			"require": "./dist/generated/services/transitions/*.cjs",
			"default": "./generated/services/transitions/*.js"
		},
		"./utils/*": {
			"types": "./generated/utils/*.d.ts",
			"require": "./dist/generated/utils/*.cjs",
			"default": "./generated/utils/*.js"
		}
	},
	"dependencies": {
		"@agnos-ui/core": "",
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
		"url": "https://github.com/AmadeusITGroup/AgnosUI.git",
		"directory": "react/headless"
	},
	"keywords": [
		"react",
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
