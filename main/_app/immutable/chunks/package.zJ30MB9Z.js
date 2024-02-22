const t=`{
	"name": "@agnos-ui/react",
	"type": "module",
	"main": "./index.js",
	"module": "./index.js",
	"types": "./index.d.ts",
	"exports": {
		".": {
			"types": "./index.d.ts",
			"default": "./index.js"
		},
		"./components/*": {
			"types": "./components/*/*.d.ts",
			"default": "./components/*/*.js"
		},
		"./config": {
			"types": "./generated/config.d.ts",
			"default": "./generated/config.js"
		},
		"./slot": {
			"types": "./generated/slot.d.ts",
			"default": "./generated/slot.js"
		},
		"./types": {
			"types": "./generated/types.d.ts",
			"default": "./generated/types.js"
		},
		"./services/*": {
			"types": "./generated/services/*.d.ts",
			"default": "./generated/services/*.js"
		},
		"./services/transitions/*": {
			"types": "./generated/services/transitions/*.d.ts",
			"default": "./generated/services/transitions/*.js"
		},
		"./utils/*": {
			"types": "./generated/utils/*.d.ts",
			"default": "./generated/utils/*.js"
		}
	},
	"dependencies": {
		"@agnos-ui/react-headless": "",
		"@agnos-ui/style-bootstrap": "",
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
		"directory": "react/lib"
	},
	"keywords": [
		"react",
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
