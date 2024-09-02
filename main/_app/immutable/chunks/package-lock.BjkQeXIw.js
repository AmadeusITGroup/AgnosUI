const t=`{
	"name": "agnos-ui-angular-stackblitz-demo",
	"version": "0.0.0",
	"lockfileVersion": 3,
	"requires": true,
	"packages": {
		"": {
			"name": "agnos-ui-angular-stackblitz-demo",
			"version": "0.0.0",
			"devDependencies": {
				"@amadeus-it-group/tansu": "^1.0.0",
				"@angular-devkit/build-angular": "^18.2.0",
				"@angular/animations": "^18.2.0",
				"@angular/cli": "^18.2.0",
				"@angular/common": "^18.2.0",
				"@angular/compiler": "^18.2.0",
				"@angular/compiler-cli": "^18.2.0",
				"@angular/core": "^18.2.0",
				"@angular/forms": "^18.2.0",
				"@angular/platform-browser": "^18.2.0",
				"@angular/platform-browser-dynamic": "^18.2.0",
				"@angular/router": "^18.2.0",
				"@floating-ui/dom": "^1.6.10",
				"autoprefixer": "^10.4.20",
				"daisyui": "^4.12.10",
				"postcss": "^8.4.43",
				"rxjs": "^7.8.1",
				"tailwindcss": "^3.4.10",
				"tslib": "^2.7.0",
				"typescript": "~5.5.4",
				"zone.js": "~0.14.10"
			}
		},
		"node_modules/@alloc/quick-lru": {
			"version": "5.2.0",
			"resolved": "https://registry.npmjs.org/@alloc/quick-lru/-/quick-lru-5.2.0.tgz",
			"integrity": "sha512-UrcABB+4bUrFABwbluTIBErXwvbsU/V7TZWfmbgJfbkwiBuziS9gxdODUyuiecfdGQ85jglMW6juS3+z5TsKLw==",
			"dev": true,
			"license": "MIT",
			"engines": {
				"node": ">=10"
			},
			"funding": {
				"url": "https://github.com/sponsors/sindresorhus"
			}
		},
		"node_modules/@amadeus-it-group/tansu": {
			"version": "1.0.0",
			"resolved": "https://registry.npmjs.org/@amadeus-it-group/tansu/-/tansu-1.0.0.tgz",
			"integrity": "sha512-JXR89NVtWT8rn7prB9j7/x/n/IxiWJEXhRWztyocrzb+M9hEhvIESeIE3mpSbrWRmDTyWvdpDCnOvKJ5/W8APQ==",
			"dev": true,
			"license": "MIT"
		},
		"node_modules/@ampproject/remapping": {
			"version": "2.3.0",
			"resolved": "https://registry.npmjs.org/@ampproject/remapping/-/remapping-2.3.0.tgz",
			"integrity": "sha512-30iZtAPgz+LTIYoeivqYo853f02jBYSd5uGnGpkFV0M3xOt9aN73erkgYAmZU43x4VfqcnLxW9Kpg3R5LC4YYw==",
			"dev": true,
			"license": "Apache-2.0",
			"dependencies": {
				"@jridgewell/gen-mapping": "^0.3.5",
				"@jridgewell/trace-mapping": "^0.3.24"
			},
			"engines": {
				"node": ">=6.0.0"
			}
		},
		"node_modules/@angular-devkit/architect": {
			"version": "0.1802.2",
			"resolved": "https://registry.npmjs.org/@angular-devkit/architect/-/architect-0.1802.2.tgz",
			"integrity": "sha512-LPRl9jhcf0NgshaL6RoUy1uL/cAyNt7oxctoZ9EHUu8eh5E9W/jZGhVowjOLpirwqYhmEzKJJIeS49Ssqs3RQg==",
			"dev": true,
			"license": "MIT",
			"dependencies": {
				"@angular-devkit/core": "18.2.2",
				"rxjs": "7.8.1"
			},
			"engines": {
				"node": "^18.19.1 || ^20.11.1 || >=22.0.0",
				"npm": "^6.11.0 || ^7.5.6 || >=8.0.0",
				"yarn": ">= 1.13.0"
			}
		},
		"node_modules/@angular-devkit/build-angular": {
			"version": "18.2.2",
			"resolved": "https://registry.npmjs.org/@angular-devkit/build-angular/-/build-angular-18.2.2.tgz",
			"integrity": "sha512-7HEnTN2T1jnjuItXKcApOsoYGgfou4+POju3ZbwIQukDZ3B2COskvQkVTxqPNrQ0ZjT2mxZYoVlmGW9M+7N25g==",
			"dev": true,
			"license": "MIT",
			"dependencies": {
				"@ampproject/remapping": "2.3.0",
				"@angular-devkit/architect": "0.1802.2",
				"@angular-devkit/build-webpack": "0.1802.2",
				"@angular-devkit/core": "18.2.2",
				"@angular/build": "18.2.2",
				"@babel/core": "7.25.2",
				"@babel/generator": "7.25.0",
				"@babel/helper-annotate-as-pure": "7.24.7",
				"@babel/helper-split-export-declaration": "7.24.7",
				"@babel/plugin-transform-async-generator-functions": "7.25.0",
				"@babel/plugin-transform-async-to-generator": "7.24.7",
				"@babel/plugin-transform-runtime": "7.24.7",
				"@babel/preset-env": "7.25.3",
				"@babel/runtime": "7.25.0",
				"@discoveryjs/json-ext": "0.6.1",
				"@ngtools/webpack": "18.2.2",
				"@vitejs/plugin-basic-ssl": "1.1.0",
				"ansi-colors": "4.1.3",
				"autoprefixer": "10.4.20",
				"babel-loader": "9.1.3",
				"browserslist": "^4.21.5",
				"copy-webpack-plugin": "12.0.2",
				"critters": "0.0.24",
				"css-loader": "7.1.2",
				"esbuild-wasm": "0.23.0",
				"fast-glob": "3.3.2",
				"http-proxy-middleware": "3.0.0",
				"https-proxy-agent": "7.0.5",
				"istanbul-lib-instrument": "6.0.3",
				"jsonc-parser": "3.3.1",
				"karma-source-map-support": "1.4.0",
				"less": "4.2.0",
				"less-loader": "12.2.0",
				"license-webpack-plugin": "4.0.2",
				"loader-utils": "3.3.1",
				"magic-string": "0.30.11",
				"mini-css-extract-plugin": "2.9.0",
				"mrmime": "2.0.0",
				"open": "10.1.0",
				"ora": "5.4.1",
				"parse5-html-rewriting-stream": "7.0.0",
				"picomatch": "4.0.2",
				"piscina": "4.6.1",
				"postcss": "8.4.41",
				"postcss-loader": "8.1.1",
				"resolve-url-loader": "5.0.0",
				"rxjs": "7.8.1",
				"sass": "1.77.6",
				"sass-loader": "16.0.0",
				"semver": "7.6.3",
				"source-map-loader": "5.0.0",
				"source-map-support": "0.5.21",
				"terser": "5.31.6",
				"tree-kill": "1.2.2",
				"tslib": "2.6.3",
				"vite": "5.4.0",
				"watchpack": "2.4.1",
				"webpack": "5.94.0",
				"webpack-dev-middleware": "7.3.0",
				"webpack-dev-server": "5.0.4",
				"webpack-merge": "6.0.1",
				"webpack-subresource-integrity": "5.1.0"
			},
			"engines": {
				"node": "^18.19.1 || ^20.11.1 || >=22.0.0",
				"npm": "^6.11.0 || ^7.5.6 || >=8.0.0",
				"yarn": ">= 1.13.0"
			},
			"optionalDependencies": {
				"esbuild": "0.23.0"
			},
			"peerDependencies": {
				"@angular/compiler-cli": "^18.0.0",
				"@angular/localize": "^18.0.0",
				"@angular/platform-server": "^18.0.0",
				"@angular/service-worker": "^18.0.0",
				"@web/test-runner": "^0.18.0",
				"browser-sync": "^3.0.2",
				"jest": "^29.5.0",
				"jest-environment-jsdom": "^29.5.0",
				"karma": "^6.3.0",
				"ng-packagr": "^18.0.0",
				"protractor": "^7.0.0",
				"tailwindcss": "^2.0.0 || ^3.0.0",
				"typescript": ">=5.4 <5.6"
			},
			"peerDependenciesMeta": {
				"@angular/localize": {
					"optional": true
				},
				"@angular/platform-server": {
					"optional": true
				},
				"@angular/service-worker": {
					"optional": true
				},
				"@web/test-runner": {
					"optional": true
				},
				"browser-sync": {
					"optional": true
				},
				"jest": {
					"optional": true
				},
				"jest-environment-jsdom": {
					"optional": true
				},
				"karma": {
					"optional": true
				},
				"ng-packagr": {
					"optional": true
				},
				"protractor": {
					"optional": true
				},
				"tailwindcss": {
					"optional": true
				}
			}
		},
		"node_modules/@angular-devkit/build-angular/node_modules/postcss": {
			"version": "8.4.41",
			"resolved": "https://registry.npmjs.org/postcss/-/postcss-8.4.41.tgz",
			"integrity": "sha512-TesUflQ0WKZqAvg52PWL6kHgLKP6xB6heTOdoYM0Wt2UHyxNa4K25EZZMgKns3BH1RLVbZCREPpLY0rhnNoHVQ==",
			"dev": true,
			"funding": [
				{
					"type": "opencollective",
					"url": "https://opencollective.com/postcss/"
				},
				{
					"type": "tidelift",
					"url": "https://tidelift.com/funding/github/npm/postcss"
				},
				{
					"type": "github",
					"url": "https://github.com/sponsors/ai"
				}
			],
			"license": "MIT",
			"dependencies": {
				"nanoid": "^3.3.7",
				"picocolors": "^1.0.1",
				"source-map-js": "^1.2.0"
			},
			"engines": {
				"node": "^10 || ^12 || >=14"
			}
		},
		"node_modules/@angular-devkit/build-angular/node_modules/tslib": {
			"version": "2.6.3",
			"resolved": "https://registry.npmjs.org/tslib/-/tslib-2.6.3.tgz",
			"integrity": "sha512-xNvxJEOUiWPGhUuUdQgAJPKOOJfGnIyKySOc09XkKsgdUV/3E2zvwZYdejjmRgPCgcym1juLH3226yA7sEFJKQ==",
			"dev": true,
			"license": "0BSD"
		},
		"node_modules/@angular-devkit/build-webpack": {
			"version": "0.1802.2",
			"resolved": "https://registry.npmjs.org/@angular-devkit/build-webpack/-/build-webpack-0.1802.2.tgz",
			"integrity": "sha512-Pj+YmKh0nJOKl6QAsqYh3SqfuVJrFqjyp5WrG9BgfsMD9GCMD+5teMHNYJlp+vG/C8e7VdZp4rqOon8K9Xn4Mw==",
			"dev": true,
			"license": "MIT",
			"dependencies": {
				"@angular-devkit/architect": "0.1802.2",
				"rxjs": "7.8.1"
			},
			"engines": {
				"node": "^18.19.1 || ^20.11.1 || >=22.0.0",
				"npm": "^6.11.0 || ^7.5.6 || >=8.0.0",
				"yarn": ">= 1.13.0"
			},
			"peerDependencies": {
				"webpack": "^5.30.0",
				"webpack-dev-server": "^5.0.2"
			}
		},
		"node_modules/@angular-devkit/core": {
			"version": "18.2.2",
			"resolved": "https://registry.npmjs.org/@angular-devkit/core/-/core-18.2.2.tgz",
			"integrity": "sha512-Zz0tGptI/QQnUBDdp+1G5wGwQWMjpfe2oO+UohkrDVgFS71yVj4VDnOy51kMTxBvzw+36evTgthPpmzqPIfxBw==",
			"dev": true,
			"license": "MIT",
			"dependencies": {
				"ajv": "8.17.1",
				"ajv-formats": "3.0.1",
				"jsonc-parser": "3.3.1",
				"picomatch": "4.0.2",
				"rxjs": "7.8.1",
				"source-map": "0.7.4"
			},
			"engines": {
				"node": "^18.19.1 || ^20.11.1 || >=22.0.0",
				"npm": "^6.11.0 || ^7.5.6 || >=8.0.0",
				"yarn": ">= 1.13.0"
			},
			"peerDependencies": {
				"chokidar": "^3.5.2"
			},
			"peerDependenciesMeta": {
				"chokidar": {
					"optional": true
				}
			}
		},
		"node_modules/@angular-devkit/schematics": {
			"version": "18.2.2",
			"resolved": "https://registry.npmjs.org/@angular-devkit/schematics/-/schematics-18.2.2.tgz",
			"integrity": "sha512-PU6+3nX+gQ3gofR7BGwXuvNUNeeV2raURaZjlPfGpBqjyTBxukMV71QsTTWptAZT4WibCWkTFp6X1gvsOGbjMg==",
			"dev": true,
			"license": "MIT",
			"dependencies": {
				"@angular-devkit/core": "18.2.2",
				"jsonc-parser": "3.3.1",
				"magic-string": "0.30.11",
				"ora": "5.4.1",
				"rxjs": "7.8.1"
			},
			"engines": {
				"node": "^18.19.1 || ^20.11.1 || >=22.0.0",
				"npm": "^6.11.0 || ^7.5.6 || >=8.0.0",
				"yarn": ">= 1.13.0"
			}
		},
		"node_modules/@angular/animations": {
			"version": "18.2.2",
			"resolved": "https://registry.npmjs.org/@angular/animations/-/animations-18.2.2.tgz",
			"integrity": "sha512-jh/dGrY77HGm54HdTiQsxmvoRfFeJgHeWAK2+nWCPoc4b7OHcWxy/04cYffs0/27ThmABmppP7ERAyZ0f60uow==",
			"dev": true,
			"license": "MIT",
			"dependencies": {
				"tslib": "^2.3.0"
			},
			"engines": {
				"node": "^18.19.1 || ^20.11.1 || >=22.0.0"
			},
			"peerDependencies": {
				"@angular/core": "18.2.2"
			}
		},
		"node_modules/@angular/build": {
			"version": "18.2.2",
			"resolved": "https://registry.npmjs.org/@angular/build/-/build-18.2.2.tgz",
			"integrity": "sha512-okaDdTMXnDhvnnnih6rPQnexL6htfEAPr19bB1Ci9d31gEjVuKZCjlcw2sPZ6BUyilwC9nZlCI5vbH1Ljf6mzA==",
			"dev": true,
			"license": "MIT",
			"dependencies": {
				"@ampproject/remapping": "2.3.0",
				"@angular-devkit/architect": "0.1802.2",
				"@babel/core": "7.25.2",
				"@babel/helper-annotate-as-pure": "7.24.7",
				"@babel/helper-split-export-declaration": "7.24.7",
				"@babel/plugin-syntax-import-attributes": "7.24.7",
				"@inquirer/confirm": "3.1.22",
				"@vitejs/plugin-basic-ssl": "1.1.0",
				"browserslist": "^4.23.0",
				"critters": "0.0.24",
				"esbuild": "0.23.0",
				"fast-glob": "3.3.2",
				"https-proxy-agent": "7.0.5",
				"listr2": "8.2.4",
				"lmdb": "3.0.13",
				"magic-string": "0.30.11",
				"mrmime": "2.0.0",
				"parse5-html-rewriting-stream": "7.0.0",
				"picomatch": "4.0.2",
				"piscina": "4.6.1",
				"rollup": "4.20.0",
				"sass": "1.77.6",
				"semver": "7.6.3",
				"vite": "5.4.0",
				"watchpack": "2.4.1"
			},
			"engines": {
				"node": "^18.19.1 || ^20.11.1 || >=22.0.0",
				"npm": "^6.11.0 || ^7.5.6 || >=8.0.0",
				"yarn": ">= 1.13.0"
			},
			"peerDependencies": {
				"@angular/compiler-cli": "^18.0.0",
				"@angular/localize": "^18.0.0",
				"@angular/platform-server": "^18.0.0",
				"@angular/service-worker": "^18.0.0",
				"less": "^4.2.0",
				"postcss": "^8.4.0",
				"tailwindcss": "^2.0.0 || ^3.0.0",
				"typescript": ">=5.4 <5.6"
			},
			"peerDependenciesMeta": {
				"@angular/localize": {
					"optional": true
				},
				"@angular/platform-server": {
					"optional": true
				},
				"@angular/service-worker": {
					"optional": true
				},
				"less": {
					"optional": true
				},
				"postcss": {
					"optional": true
				},
				"tailwindcss": {
					"optional": true
				}
			}
		},
		"node_modules/@angular/cli": {
			"version": "18.2.2",
			"resolved": "https://registry.npmjs.org/@angular/cli/-/cli-18.2.2.tgz",
			"integrity": "sha512-HVVaMxnbID0q+V3KE+JqzGbPHcBUFo1RKhBZ/jxY7USZNzgtyYbRc0IYqPWNdr99UT5QefTJrjVazJo1nqQZvQ==",
			"dev": true,
			"license": "MIT",
			"dependencies": {
				"@angular-devkit/architect": "0.1802.2",
				"@angular-devkit/core": "18.2.2",
				"@angular-devkit/schematics": "18.2.2",
				"@inquirer/prompts": "5.3.8",
				"@listr2/prompt-adapter-inquirer": "2.0.15",
				"@schematics/angular": "18.2.2",
				"@yarnpkg/lockfile": "1.1.0",
				"ini": "4.1.3",
				"jsonc-parser": "3.3.1",
				"listr2": "8.2.4",
				"npm-package-arg": "11.0.3",
				"npm-pick-manifest": "9.1.0",
				"pacote": "18.0.6",
				"resolve": "1.22.8",
				"semver": "7.6.3",
				"symbol-observable": "4.0.0",
				"yargs": "17.7.2"
			},
			"bin": {
				"ng": "bin/ng.js"
			},
			"engines": {
				"node": "^18.19.1 || ^20.11.1 || >=22.0.0",
				"npm": "^6.11.0 || ^7.5.6 || >=8.0.0",
				"yarn": ">= 1.13.0"
			}
		},
		"node_modules/@angular/common": {
			"version": "18.2.2",
			"resolved": "https://registry.npmjs.org/@angular/common/-/common-18.2.2.tgz",
			"integrity": "sha512-AQe4xnnNNch/sXRnV82C8FmhijxPATKfPGojC2qbAG2o6VkWKgt5Lbj0O8WxvSIOS5Syedv+O2kLY/JMGWHNtw==",
			"dev": true,
			"license": "MIT",
			"dependencies": {
				"tslib": "^2.3.0"
			},
			"engines": {
				"node": "^18.19.1 || ^20.11.1 || >=22.0.0"
			},
			"peerDependencies": {
				"@angular/core": "18.2.2",
				"rxjs": "^6.5.3 || ^7.4.0"
			}
		},
		"node_modules/@angular/compiler": {
			"version": "18.2.2",
			"resolved": "https://registry.npmjs.org/@angular/compiler/-/compiler-18.2.2.tgz",
			"integrity": "sha512-gmVNCXZiv/CIk2eKRLnH19N9VsPuE2s3Oxm0MNi003zk1cLy7D4YEm4fSrjKXtPY8MMpRXiu5f63W94hLwWEVw==",
			"dev": true,
			"license": "MIT",
			"dependencies": {
				"tslib": "^2.3.0"
			},
			"engines": {
				"node": "^18.19.1 || ^20.11.1 || >=22.0.0"
			},
			"peerDependencies": {
				"@angular/core": "18.2.2"
			},
			"peerDependenciesMeta": {
				"@angular/core": {
					"optional": true
				}
			}
		},
		"node_modules/@angular/compiler-cli": {
			"version": "18.2.2",
			"resolved": "https://registry.npmjs.org/@angular/compiler-cli/-/compiler-cli-18.2.2.tgz",
			"integrity": "sha512-fF7lDrTA12YGqVjF4LyMi4hm58cv9G6CWmzSlvun0nMYCwrbRNnakZsj19dOfiIqqu4MwHaF4w3PTmUSxkMuiw==",
			"dev": true,
			"license": "MIT",
			"dependencies": {
				"@babel/core": "7.25.2",
				"@jridgewell/sourcemap-codec": "^1.4.14",
				"chokidar": "^3.0.0",
				"convert-source-map": "^1.5.1",
				"reflect-metadata": "^0.2.0",
				"semver": "^7.0.0",
				"tslib": "^2.3.0",
				"yargs": "^17.2.1"
			},
			"bin": {
				"ng-xi18n": "bundles/src/bin/ng_xi18n.js",
				"ngc": "bundles/src/bin/ngc.js",
				"ngcc": "bundles/ngcc/index.js"
			},
			"engines": {
				"node": "^18.19.1 || ^20.11.1 || >=22.0.0"
			},
			"peerDependencies": {
				"@angular/compiler": "18.2.2",
				"typescript": ">=5.4 <5.6"
			}
		},
		"node_modules/@angular/core": {
			"version": "18.2.2",
			"resolved": "https://registry.npmjs.org/@angular/core/-/core-18.2.2.tgz",
			"integrity": "sha512-Rx6XajL0Ydj9hXUSPDvL2Q/kMzWtbiE3VxZFJnkE+fLQiWvr0GncB+NTb/nQ6QlPQ0ly60DvuI3KLcGDuFtGVA==",
			"dev": true,
			"license": "MIT",
			"dependencies": {
				"tslib": "^2.3.0"
			},
			"engines": {
				"node": "^18.19.1 || ^20.11.1 || >=22.0.0"
			},
			"peerDependencies": {
				"rxjs": "^6.5.3 || ^7.4.0",
				"zone.js": "~0.14.10"
			}
		},
		"node_modules/@angular/forms": {
			"version": "18.2.2",
			"resolved": "https://registry.npmjs.org/@angular/forms/-/forms-18.2.2.tgz",
			"integrity": "sha512-K8cv0w6o7+ocQfUrdSA3XaKrYfa1+2TlmtyxPHjEd2mCu2R+Yqo5RqJ3P8keFewJ1+bSLhz6xnn6mumwl0RnUQ==",
			"dev": true,
			"license": "MIT",
			"dependencies": {
				"tslib": "^2.3.0"
			},
			"engines": {
				"node": "^18.19.1 || ^20.11.1 || >=22.0.0"
			},
			"peerDependencies": {
				"@angular/common": "18.2.2",
				"@angular/core": "18.2.2",
				"@angular/platform-browser": "18.2.2",
				"rxjs": "^6.5.3 || ^7.4.0"
			}
		},
		"node_modules/@angular/platform-browser": {
			"version": "18.2.2",
			"resolved": "https://registry.npmjs.org/@angular/platform-browser/-/platform-browser-18.2.2.tgz",
			"integrity": "sha512-Bfvl8elCFxyJ9vlwamr4X5sVMcp/tSwBal2coyl0WR+/PH2PAAtf+/WMYxIN90yZmPiJx6RZWUSJRlHOFiFp3A==",
			"dev": true,
			"license": "MIT",
			"dependencies": {
				"tslib": "^2.3.0"
			},
			"engines": {
				"node": "^18.19.1 || ^20.11.1 || >=22.0.0"
			},
			"peerDependencies": {
				"@angular/animations": "18.2.2",
				"@angular/common": "18.2.2",
				"@angular/core": "18.2.2"
			},
			"peerDependenciesMeta": {
				"@angular/animations": {
					"optional": true
				}
			}
		},
		"node_modules/@angular/platform-browser-dynamic": {
			"version": "18.2.2",
			"resolved": "https://registry.npmjs.org/@angular/platform-browser-dynamic/-/platform-browser-dynamic-18.2.2.tgz",
			"integrity": "sha512-UM/+1nY4iIj1v4lxAmV3XRHPAh/4qfNKScCLq8tJGot64rPCbtCl0Rl8rFFGqxAFvTErVDaJycUgWNZSfVl/hw==",
			"dev": true,
			"license": "MIT",
			"dependencies": {
				"tslib": "^2.3.0"
			},
			"engines": {
				"node": "^18.19.1 || ^20.11.1 || >=22.0.0"
			},
			"peerDependencies": {
				"@angular/common": "18.2.2",
				"@angular/compiler": "18.2.2",
				"@angular/core": "18.2.2",
				"@angular/platform-browser": "18.2.2"
			}
		},
		"node_modules/@angular/router": {
			"version": "18.2.2",
			"resolved": "https://registry.npmjs.org/@angular/router/-/router-18.2.2.tgz",
			"integrity": "sha512-tBHwuNtZNjzYAoVdveTI1ke/ZnQjKhc7gqDk9HCH2JUpdQhGbTvCKwDM51ktJpPMPcZlA263lQyy7VIyvdtK0A==",
			"dev": true,
			"license": "MIT",
			"dependencies": {
				"tslib": "^2.3.0"
			},
			"engines": {
				"node": "^18.19.1 || ^20.11.1 || >=22.0.0"
			},
			"peerDependencies": {
				"@angular/common": "18.2.2",
				"@angular/core": "18.2.2",
				"@angular/platform-browser": "18.2.2",
				"rxjs": "^6.5.3 || ^7.4.0"
			}
		},
		"node_modules/@babel/code-frame": {
			"version": "7.24.7",
			"resolved": "https://registry.npmjs.org/@babel/code-frame/-/code-frame-7.24.7.tgz",
			"integrity": "sha512-BcYH1CVJBO9tvyIZ2jVeXgSIMvGZ2FDRvDdOIVQyuklNKSsx+eppDEBq/g47Ayw+RqNFE+URvOShmf+f/qwAlA==",
			"dev": true,
			"license": "MIT",
			"dependencies": {
				"@babel/highlight": "^7.24.7",
				"picocolors": "^1.0.0"
			},
			"engines": {
				"node": ">=6.9.0"
			}
		},
		"node_modules/@babel/compat-data": {
			"version": "7.25.4",
			"resolved": "https://registry.npmjs.org/@babel/compat-data/-/compat-data-7.25.4.tgz",
			"integrity": "sha512-+LGRog6RAsCJrrrg/IO6LGmpphNe5DiK30dGjCoxxeGv49B10/3XYGxPsAwrDlMFcFEvdAUavDT8r9k/hSyQqQ==",
			"dev": true,
			"license": "MIT",
			"engines": {
				"node": ">=6.9.0"
			}
		},
		"node_modules/@babel/core": {
			"version": "7.25.2",
			"resolved": "https://registry.npmjs.org/@babel/core/-/core-7.25.2.tgz",
			"integrity": "sha512-BBt3opiCOxUr9euZ5/ro/Xv8/V7yJ5bjYMqG/C1YAo8MIKAnumZalCN+msbci3Pigy4lIQfPUpfMM27HMGaYEA==",
			"dev": true,
			"license": "MIT",
			"dependencies": {
				"@ampproject/remapping": "^2.2.0",
				"@babel/code-frame": "^7.24.7",
				"@babel/generator": "^7.25.0",
				"@babel/helper-compilation-targets": "^7.25.2",
				"@babel/helper-module-transforms": "^7.25.2",
				"@babel/helpers": "^7.25.0",
				"@babel/parser": "^7.25.0",
				"@babel/template": "^7.25.0",
				"@babel/traverse": "^7.25.2",
				"@babel/types": "^7.25.2",
				"convert-source-map": "^2.0.0",
				"debug": "^4.1.0",
				"gensync": "^1.0.0-beta.2",
				"json5": "^2.2.3",
				"semver": "^6.3.1"
			},
			"engines": {
				"node": ">=6.9.0"
			},
			"funding": {
				"type": "opencollective",
				"url": "https://opencollective.com/babel"
			}
		},
		"node_modules/@babel/core/node_modules/convert-source-map": {
			"version": "2.0.0",
			"resolved": "https://registry.npmjs.org/convert-source-map/-/convert-source-map-2.0.0.tgz",
			"integrity": "sha512-Kvp459HrV2FEJ1CAsi1Ku+MY3kasH19TFykTz2xWmMeq6bk2NU3XXvfJ+Q61m0xktWwt+1HSYf3JZsTms3aRJg==",
			"dev": true,
			"license": "MIT"
		},
		"node_modules/@babel/core/node_modules/semver": {
			"version": "6.3.1",
			"resolved": "https://registry.npmjs.org/semver/-/semver-6.3.1.tgz",
			"integrity": "sha512-BR7VvDCVHO+q2xBEWskxS6DJE1qRnb7DxzUrogb71CWoSficBxYsiAGd+Kl0mmq/MprG9yArRkyrQxTO6XjMzA==",
			"dev": true,
			"license": "ISC",
			"bin": {
				"semver": "bin/semver.js"
			}
		},
		"node_modules/@babel/generator": {
			"version": "7.25.0",
			"resolved": "https://registry.npmjs.org/@babel/generator/-/generator-7.25.0.tgz",
			"integrity": "sha512-3LEEcj3PVW8pW2R1SR1M89g/qrYk/m/mB/tLqn7dn4sbBUQyTqnlod+II2U4dqiGtUmkcnAmkMDralTFZttRiw==",
			"dev": true,
			"license": "MIT",
			"dependencies": {
				"@babel/types": "^7.25.0",
				"@jridgewell/gen-mapping": "^0.3.5",
				"@jridgewell/trace-mapping": "^0.3.25",
				"jsesc": "^2.5.1"
			},
			"engines": {
				"node": ">=6.9.0"
			}
		},
		"node_modules/@babel/helper-annotate-as-pure": {
			"version": "7.24.7",
			"resolved": "https://registry.npmjs.org/@babel/helper-annotate-as-pure/-/helper-annotate-as-pure-7.24.7.tgz",
			"integrity": "sha512-BaDeOonYvhdKw+JoMVkAixAAJzG2jVPIwWoKBPdYuY9b452e2rPuI9QPYh3KpofZ3pW2akOmwZLOiOsHMiqRAg==",
			"dev": true,
			"license": "MIT",
			"dependencies": {
				"@babel/types": "^7.24.7"
			},
			"engines": {
				"node": ">=6.9.0"
			}
		},
		"node_modules/@babel/helper-builder-binary-assignment-operator-visitor": {
			"version": "7.24.7",
			"resolved": "https://registry.npmjs.org/@babel/helper-builder-binary-assignment-operator-visitor/-/helper-builder-binary-assignment-operator-visitor-7.24.7.tgz",
			"integrity": "sha512-xZeCVVdwb4MsDBkkyZ64tReWYrLRHlMN72vP7Bdm3OUOuyFZExhsHUUnuWnm2/XOlAJzR0LfPpB56WXZn0X/lA==",
			"dev": true,
			"license": "MIT",
			"dependencies": {
				"@babel/traverse": "^7.24.7",
				"@babel/types": "^7.24.7"
			},
			"engines": {
				"node": ">=6.9.0"
			}
		},
		"node_modules/@babel/helper-compilation-targets": {
			"version": "7.25.2",
			"resolved": "https://registry.npmjs.org/@babel/helper-compilation-targets/-/helper-compilation-targets-7.25.2.tgz",
			"integrity": "sha512-U2U5LsSaZ7TAt3cfaymQ8WHh0pxvdHoEk6HVpaexxixjyEquMh0L0YNJNM6CTGKMXV1iksi0iZkGw4AcFkPaaw==",
			"dev": true,
			"license": "MIT",
			"dependencies": {
				"@babel/compat-data": "^7.25.2",
				"@babel/helper-validator-option": "^7.24.8",
				"browserslist": "^4.23.1",
				"lru-cache": "^5.1.1",
				"semver": "^6.3.1"
			},
			"engines": {
				"node": ">=6.9.0"
			}
		},
		"node_modules/@babel/helper-compilation-targets/node_modules/semver": {
			"version": "6.3.1",
			"resolved": "https://registry.npmjs.org/semver/-/semver-6.3.1.tgz",
			"integrity": "sha512-BR7VvDCVHO+q2xBEWskxS6DJE1qRnb7DxzUrogb71CWoSficBxYsiAGd+Kl0mmq/MprG9yArRkyrQxTO6XjMzA==",
			"dev": true,
			"license": "ISC",
			"bin": {
				"semver": "bin/semver.js"
			}
		},
		"node_modules/@babel/helper-create-class-features-plugin": {
			"version": "7.25.4",
			"resolved": "https://registry.npmjs.org/@babel/helper-create-class-features-plugin/-/helper-create-class-features-plugin-7.25.4.tgz",
			"integrity": "sha512-ro/bFs3/84MDgDmMwbcHgDa8/E6J3QKNTk4xJJnVeFtGE+tL0K26E3pNxhYz2b67fJpt7Aphw5XcploKXuCvCQ==",
			"dev": true,
			"license": "MIT",
			"dependencies": {
				"@babel/helper-annotate-as-pure": "^7.24.7",
				"@babel/helper-member-expression-to-functions": "^7.24.8",
				"@babel/helper-optimise-call-expression": "^7.24.7",
				"@babel/helper-replace-supers": "^7.25.0",
				"@babel/helper-skip-transparent-expression-wrappers": "^7.24.7",
				"@babel/traverse": "^7.25.4",
				"semver": "^6.3.1"
			},
			"engines": {
				"node": ">=6.9.0"
			},
			"peerDependencies": {
				"@babel/core": "^7.0.0"
			}
		},
		"node_modules/@babel/helper-create-class-features-plugin/node_modules/semver": {
			"version": "6.3.1",
			"resolved": "https://registry.npmjs.org/semver/-/semver-6.3.1.tgz",
			"integrity": "sha512-BR7VvDCVHO+q2xBEWskxS6DJE1qRnb7DxzUrogb71CWoSficBxYsiAGd+Kl0mmq/MprG9yArRkyrQxTO6XjMzA==",
			"dev": true,
			"license": "ISC",
			"bin": {
				"semver": "bin/semver.js"
			}
		},
		"node_modules/@babel/helper-create-regexp-features-plugin": {
			"version": "7.25.2",
			"resolved": "https://registry.npmjs.org/@babel/helper-create-regexp-features-plugin/-/helper-create-regexp-features-plugin-7.25.2.tgz",
			"integrity": "sha512-+wqVGP+DFmqwFD3EH6TMTfUNeqDehV3E/dl+Sd54eaXqm17tEUNbEIn4sVivVowbvUpOtIGxdo3GoXyDH9N/9g==",
			"dev": true,
			"license": "MIT",
			"dependencies": {
				"@babel/helper-annotate-as-pure": "^7.24.7",
				"regexpu-core": "^5.3.1",
				"semver": "^6.3.1"
			},
			"engines": {
				"node": ">=6.9.0"
			},
			"peerDependencies": {
				"@babel/core": "^7.0.0"
			}
		},
		"node_modules/@babel/helper-create-regexp-features-plugin/node_modules/semver": {
			"version": "6.3.1",
			"resolved": "https://registry.npmjs.org/semver/-/semver-6.3.1.tgz",
			"integrity": "sha512-BR7VvDCVHO+q2xBEWskxS6DJE1qRnb7DxzUrogb71CWoSficBxYsiAGd+Kl0mmq/MprG9yArRkyrQxTO6XjMzA==",
			"dev": true,
			"license": "ISC",
			"bin": {
				"semver": "bin/semver.js"
			}
		},
		"node_modules/@babel/helper-define-polyfill-provider": {
			"version": "0.6.2",
			"resolved": "https://registry.npmjs.org/@babel/helper-define-polyfill-provider/-/helper-define-polyfill-provider-0.6.2.tgz",
			"integrity": "sha512-LV76g+C502biUK6AyZ3LK10vDpDyCzZnhZFXkH1L75zHPj68+qc8Zfpx2th+gzwA2MzyK+1g/3EPl62yFnVttQ==",
			"dev": true,
			"license": "MIT",
			"dependencies": {
				"@babel/helper-compilation-targets": "^7.22.6",
				"@babel/helper-plugin-utils": "^7.22.5",
				"debug": "^4.1.1",
				"lodash.debounce": "^4.0.8",
				"resolve": "^1.14.2"
			},
			"peerDependencies": {
				"@babel/core": "^7.4.0 || ^8.0.0-0 <8.0.0"
			}
		},
		"node_modules/@babel/helper-member-expression-to-functions": {
			"version": "7.24.8",
			"resolved": "https://registry.npmjs.org/@babel/helper-member-expression-to-functions/-/helper-member-expression-to-functions-7.24.8.tgz",
			"integrity": "sha512-LABppdt+Lp/RlBxqrh4qgf1oEH/WxdzQNDJIu5gC/W1GyvPVrOBiItmmM8wan2fm4oYqFuFfkXmlGpLQhPY8CA==",
			"dev": true,
			"license": "MIT",
			"dependencies": {
				"@babel/traverse": "^7.24.8",
				"@babel/types": "^7.24.8"
			},
			"engines": {
				"node": ">=6.9.0"
			}
		},
		"node_modules/@babel/helper-module-imports": {
			"version": "7.24.7",
			"resolved": "https://registry.npmjs.org/@babel/helper-module-imports/-/helper-module-imports-7.24.7.tgz",
			"integrity": "sha512-8AyH3C+74cgCVVXow/myrynrAGv+nTVg5vKu2nZph9x7RcRwzmh0VFallJuFTZ9mx6u4eSdXZfcOzSqTUm0HCA==",
			"dev": true,
			"license": "MIT",
			"dependencies": {
				"@babel/traverse": "^7.24.7",
				"@babel/types": "^7.24.7"
			},
			"engines": {
				"node": ">=6.9.0"
			}
		},
		"node_modules/@babel/helper-module-transforms": {
			"version": "7.25.2",
			"resolved": "https://registry.npmjs.org/@babel/helper-module-transforms/-/helper-module-transforms-7.25.2.tgz",
			"integrity": "sha512-BjyRAbix6j/wv83ftcVJmBt72QtHI56C7JXZoG2xATiLpmoC7dpd8WnkikExHDVPpi/3qCmO6WY1EaXOluiecQ==",
			"dev": true,
			"license": "MIT",
			"dependencies": {
				"@babel/helper-module-imports": "^7.24.7",
				"@babel/helper-simple-access": "^7.24.7",
				"@babel/helper-validator-identifier": "^7.24.7",
				"@babel/traverse": "^7.25.2"
			},
			"engines": {
				"node": ">=6.9.0"
			},
			"peerDependencies": {
				"@babel/core": "^7.0.0"
			}
		},
		"node_modules/@babel/helper-optimise-call-expression": {
			"version": "7.24.7",
			"resolved": "https://registry.npmjs.org/@babel/helper-optimise-call-expression/-/helper-optimise-call-expression-7.24.7.tgz",
			"integrity": "sha512-jKiTsW2xmWwxT1ixIdfXUZp+P5yURx2suzLZr5Hi64rURpDYdMW0pv+Uf17EYk2Rd428Lx4tLsnjGJzYKDM/6A==",
			"dev": true,
			"license": "MIT",
			"dependencies": {
				"@babel/types": "^7.24.7"
			},
			"engines": {
				"node": ">=6.9.0"
			}
		},
		"node_modules/@babel/helper-plugin-utils": {
			"version": "7.24.8",
			"resolved": "https://registry.npmjs.org/@babel/helper-plugin-utils/-/helper-plugin-utils-7.24.8.tgz",
			"integrity": "sha512-FFWx5142D8h2Mgr/iPVGH5G7w6jDn4jUSpZTyDnQO0Yn7Ks2Kuz6Pci8H6MPCoUJegd/UZQ3tAvfLCxQSnWWwg==",
			"dev": true,
			"license": "MIT",
			"engines": {
				"node": ">=6.9.0"
			}
		},
		"node_modules/@babel/helper-remap-async-to-generator": {
			"version": "7.25.0",
			"resolved": "https://registry.npmjs.org/@babel/helper-remap-async-to-generator/-/helper-remap-async-to-generator-7.25.0.tgz",
			"integrity": "sha512-NhavI2eWEIz/H9dbrG0TuOicDhNexze43i5z7lEqwYm0WEZVTwnPpA0EafUTP7+6/W79HWIP2cTe3Z5NiSTVpw==",
			"dev": true,
			"license": "MIT",
			"dependencies": {
				"@babel/helper-annotate-as-pure": "^7.24.7",
				"@babel/helper-wrap-function": "^7.25.0",
				"@babel/traverse": "^7.25.0"
			},
			"engines": {
				"node": ">=6.9.0"
			},
			"peerDependencies": {
				"@babel/core": "^7.0.0"
			}
		},
		"node_modules/@babel/helper-replace-supers": {
			"version": "7.25.0",
			"resolved": "https://registry.npmjs.org/@babel/helper-replace-supers/-/helper-replace-supers-7.25.0.tgz",
			"integrity": "sha512-q688zIvQVYtZu+i2PsdIu/uWGRpfxzr5WESsfpShfZECkO+d2o+WROWezCi/Q6kJ0tfPa5+pUGUlfx2HhrA3Bg==",
			"dev": true,
			"license": "MIT",
			"dependencies": {
				"@babel/helper-member-expression-to-functions": "^7.24.8",
				"@babel/helper-optimise-call-expression": "^7.24.7",
				"@babel/traverse": "^7.25.0"
			},
			"engines": {
				"node": ">=6.9.0"
			},
			"peerDependencies": {
				"@babel/core": "^7.0.0"
			}
		},
		"node_modules/@babel/helper-simple-access": {
			"version": "7.24.7",
			"resolved": "https://registry.npmjs.org/@babel/helper-simple-access/-/helper-simple-access-7.24.7.tgz",
			"integrity": "sha512-zBAIvbCMh5Ts+b86r/CjU+4XGYIs+R1j951gxI3KmmxBMhCg4oQMsv6ZXQ64XOm/cvzfU1FmoCyt6+owc5QMYg==",
			"dev": true,
			"license": "MIT",
			"dependencies": {
				"@babel/traverse": "^7.24.7",
				"@babel/types": "^7.24.7"
			},
			"engines": {
				"node": ">=6.9.0"
			}
		},
		"node_modules/@babel/helper-skip-transparent-expression-wrappers": {
			"version": "7.24.7",
			"resolved": "https://registry.npmjs.org/@babel/helper-skip-transparent-expression-wrappers/-/helper-skip-transparent-expression-wrappers-7.24.7.tgz",
			"integrity": "sha512-IO+DLT3LQUElMbpzlatRASEyQtfhSE0+m465v++3jyyXeBTBUjtVZg28/gHeV5mrTJqvEKhKroBGAvhW+qPHiQ==",
			"dev": true,
			"license": "MIT",
			"dependencies": {
				"@babel/traverse": "^7.24.7",
				"@babel/types": "^7.24.7"
			},
			"engines": {
				"node": ">=6.9.0"
			}
		},
		"node_modules/@babel/helper-split-export-declaration": {
			"version": "7.24.7",
			"resolved": "https://registry.npmjs.org/@babel/helper-split-export-declaration/-/helper-split-export-declaration-7.24.7.tgz",
			"integrity": "sha512-oy5V7pD+UvfkEATUKvIjvIAH/xCzfsFVw7ygW2SI6NClZzquT+mwdTfgfdbUiceh6iQO0CHtCPsyze/MZ2YbAA==",
			"dev": true,
			"license": "MIT",
			"dependencies": {
				"@babel/types": "^7.24.7"
			},
			"engines": {
				"node": ">=6.9.0"
			}
		},
		"node_modules/@babel/helper-string-parser": {
			"version": "7.24.8",
			"resolved": "https://registry.npmjs.org/@babel/helper-string-parser/-/helper-string-parser-7.24.8.tgz",
			"integrity": "sha512-pO9KhhRcuUyGnJWwyEgnRJTSIZHiT+vMD0kPeD+so0l7mxkMT19g3pjY9GTnHySck/hDzq+dtW/4VgnMkippsQ==",
			"dev": true,
			"license": "MIT",
			"engines": {
				"node": ">=6.9.0"
			}
		},
		"node_modules/@babel/helper-validator-identifier": {
			"version": "7.24.7",
			"resolved": "https://registry.npmjs.org/@babel/helper-validator-identifier/-/helper-validator-identifier-7.24.7.tgz",
			"integrity": "sha512-rR+PBcQ1SMQDDyF6X0wxtG8QyLCgUB0eRAGguqRLfkCA87l7yAP7ehq8SNj96OOGTO8OBV70KhuFYcIkHXOg0w==",
			"dev": true,
			"license": "MIT",
			"engines": {
				"node": ">=6.9.0"
			}
		},
		"node_modules/@babel/helper-validator-option": {
			"version": "7.24.8",
			"resolved": "https://registry.npmjs.org/@babel/helper-validator-option/-/helper-validator-option-7.24.8.tgz",
			"integrity": "sha512-xb8t9tD1MHLungh/AIoWYN+gVHaB9kwlu8gffXGSt3FFEIT7RjS+xWbc2vUD1UTZdIpKj/ab3rdqJ7ufngyi2Q==",
			"dev": true,
			"license": "MIT",
			"engines": {
				"node": ">=6.9.0"
			}
		},
		"node_modules/@babel/helper-wrap-function": {
			"version": "7.25.0",
			"resolved": "https://registry.npmjs.org/@babel/helper-wrap-function/-/helper-wrap-function-7.25.0.tgz",
			"integrity": "sha512-s6Q1ebqutSiZnEjaofc/UKDyC4SbzV5n5SrA2Gq8UawLycr3i04f1dX4OzoQVnexm6aOCh37SQNYlJ/8Ku+PMQ==",
			"dev": true,
			"license": "MIT",
			"dependencies": {
				"@babel/template": "^7.25.0",
				"@babel/traverse": "^7.25.0",
				"@babel/types": "^7.25.0"
			},
			"engines": {
				"node": ">=6.9.0"
			}
		},
		"node_modules/@babel/helpers": {
			"version": "7.25.6",
			"resolved": "https://registry.npmjs.org/@babel/helpers/-/helpers-7.25.6.tgz",
			"integrity": "sha512-Xg0tn4HcfTijTwfDwYlvVCl43V6h4KyVVX2aEm4qdO/PC6L2YvzLHFdmxhoeSA3eslcE6+ZVXHgWwopXYLNq4Q==",
			"dev": true,
			"license": "MIT",
			"dependencies": {
				"@babel/template": "^7.25.0",
				"@babel/types": "^7.25.6"
			},
			"engines": {
				"node": ">=6.9.0"
			}
		},
		"node_modules/@babel/highlight": {
			"version": "7.24.7",
			"resolved": "https://registry.npmjs.org/@babel/highlight/-/highlight-7.24.7.tgz",
			"integrity": "sha512-EStJpq4OuY8xYfhGVXngigBJRWxftKX9ksiGDnmlY3o7B/V7KIAc9X4oiK87uPJSc/vs5L869bem5fhZa8caZw==",
			"dev": true,
			"license": "MIT",
			"dependencies": {
				"@babel/helper-validator-identifier": "^7.24.7",
				"chalk": "^2.4.2",
				"js-tokens": "^4.0.0",
				"picocolors": "^1.0.0"
			},
			"engines": {
				"node": ">=6.9.0"
			}
		},
		"node_modules/@babel/parser": {
			"version": "7.25.6",
			"resolved": "https://registry.npmjs.org/@babel/parser/-/parser-7.25.6.tgz",
			"integrity": "sha512-trGdfBdbD0l1ZPmcJ83eNxB9rbEax4ALFTF7fN386TMYbeCQbyme5cOEXQhbGXKebwGaB/J52w1mrklMcbgy6Q==",
			"dev": true,
			"license": "MIT",
			"dependencies": {
				"@babel/types": "^7.25.6"
			},
			"bin": {
				"parser": "bin/babel-parser.js"
			},
			"engines": {
				"node": ">=6.0.0"
			}
		},
		"node_modules/@babel/plugin-bugfix-firefox-class-in-computed-class-key": {
			"version": "7.25.3",
			"resolved": "https://registry.npmjs.org/@babel/plugin-bugfix-firefox-class-in-computed-class-key/-/plugin-bugfix-firefox-class-in-computed-class-key-7.25.3.tgz",
			"integrity": "sha512-wUrcsxZg6rqBXG05HG1FPYgsP6EvwF4WpBbxIpWIIYnH8wG0gzx3yZY3dtEHas4sTAOGkbTsc9EGPxwff8lRoA==",
			"dev": true,
			"license": "MIT",
			"dependencies": {
				"@babel/helper-plugin-utils": "^7.24.8",
				"@babel/traverse": "^7.25.3"
			},
			"engines": {
				"node": ">=6.9.0"
			},
			"peerDependencies": {
				"@babel/core": "^7.0.0"
			}
		},
		"node_modules/@babel/plugin-bugfix-safari-class-field-initializer-scope": {
			"version": "7.25.0",
			"resolved": "https://registry.npmjs.org/@babel/plugin-bugfix-safari-class-field-initializer-scope/-/plugin-bugfix-safari-class-field-initializer-scope-7.25.0.tgz",
			"integrity": "sha512-Bm4bH2qsX880b/3ziJ8KD711LT7z4u8CFudmjqle65AZj/HNUFhEf90dqYv6O86buWvSBmeQDjv0Tn2aF/bIBA==",
			"dev": true,
			"license": "MIT",
			"dependencies": {
				"@babel/helper-plugin-utils": "^7.24.8"
			},
			"engines": {
				"node": ">=6.9.0"
			},
			"peerDependencies": {
				"@babel/core": "^7.0.0"
			}
		},
		"node_modules/@babel/plugin-bugfix-safari-id-destructuring-collision-in-function-expression": {
			"version": "7.25.0",
			"resolved": "https://registry.npmjs.org/@babel/plugin-bugfix-safari-id-destructuring-collision-in-function-expression/-/plugin-bugfix-safari-id-destructuring-collision-in-function-expression-7.25.0.tgz",
			"integrity": "sha512-lXwdNZtTmeVOOFtwM/WDe7yg1PL8sYhRk/XH0FzbR2HDQ0xC+EnQ/JHeoMYSavtU115tnUk0q9CDyq8si+LMAA==",
			"dev": true,
			"license": "MIT",
			"dependencies": {
				"@babel/helper-plugin-utils": "^7.24.8"
			},
			"engines": {
				"node": ">=6.9.0"
			},
			"peerDependencies": {
				"@babel/core": "^7.0.0"
			}
		},
		"node_modules/@babel/plugin-bugfix-v8-spread-parameters-in-optional-chaining": {
			"version": "7.24.7",
			"resolved": "https://registry.npmjs.org/@babel/plugin-bugfix-v8-spread-parameters-in-optional-chaining/-/plugin-bugfix-v8-spread-parameters-in-optional-chaining-7.24.7.tgz",
			"integrity": "sha512-+izXIbke1T33mY4MSNnrqhPXDz01WYhEf3yF5NbnUtkiNnm+XBZJl3kNfoK6NKmYlz/D07+l2GWVK/QfDkNCuQ==",
			"dev": true,
			"license": "MIT",
			"dependencies": {
				"@babel/helper-plugin-utils": "^7.24.7",
				"@babel/helper-skip-transparent-expression-wrappers": "^7.24.7",
				"@babel/plugin-transform-optional-chaining": "^7.24.7"
			},
			"engines": {
				"node": ">=6.9.0"
			},
			"peerDependencies": {
				"@babel/core": "^7.13.0"
			}
		},
		"node_modules/@babel/plugin-bugfix-v8-static-class-fields-redefine-readonly": {
			"version": "7.25.0",
			"resolved": "https://registry.npmjs.org/@babel/plugin-bugfix-v8-static-class-fields-redefine-readonly/-/plugin-bugfix-v8-static-class-fields-redefine-readonly-7.25.0.tgz",
			"integrity": "sha512-tggFrk1AIShG/RUQbEwt2Tr/E+ObkfwrPjR6BjbRvsx24+PSjK8zrq0GWPNCjo8qpRx4DuJzlcvWJqlm+0h3kw==",
			"dev": true,
			"license": "MIT",
			"dependencies": {
				"@babel/helper-plugin-utils": "^7.24.8",
				"@babel/traverse": "^7.25.0"
			},
			"engines": {
				"node": ">=6.9.0"
			},
			"peerDependencies": {
				"@babel/core": "^7.0.0"
			}
		},
		"node_modules/@babel/plugin-proposal-private-property-in-object": {
			"version": "7.21.0-placeholder-for-preset-env.2",
			"resolved": "https://registry.npmjs.org/@babel/plugin-proposal-private-property-in-object/-/plugin-proposal-private-property-in-object-7.21.0-placeholder-for-preset-env.2.tgz",
			"integrity": "sha512-SOSkfJDddaM7mak6cPEpswyTRnuRltl429hMraQEglW+OkovnCzsiszTmsrlY//qLFjCpQDFRvjdm2wA5pPm9w==",
			"dev": true,
			"license": "MIT",
			"engines": {
				"node": ">=6.9.0"
			},
			"peerDependencies": {
				"@babel/core": "^7.0.0-0"
			}
		},
		"node_modules/@babel/plugin-syntax-async-generators": {
			"version": "7.8.4",
			"resolved": "https://registry.npmjs.org/@babel/plugin-syntax-async-generators/-/plugin-syntax-async-generators-7.8.4.tgz",
			"integrity": "sha512-tycmZxkGfZaxhMRbXlPXuVFpdWlXpir2W4AMhSJgRKzk/eDlIXOhb2LHWoLpDF7TEHylV5zNhykX6KAgHJmTNw==",
			"dev": true,
			"license": "MIT",
			"dependencies": {
				"@babel/helper-plugin-utils": "^7.8.0"
			},
			"peerDependencies": {
				"@babel/core": "^7.0.0-0"
			}
		},
		"node_modules/@babel/plugin-syntax-class-properties": {
			"version": "7.12.13",
			"resolved": "https://registry.npmjs.org/@babel/plugin-syntax-class-properties/-/plugin-syntax-class-properties-7.12.13.tgz",
			"integrity": "sha512-fm4idjKla0YahUNgFNLCB0qySdsoPiZP3iQE3rky0mBUtMZ23yDJ9SJdg6dXTSDnulOVqiF3Hgr9nbXvXTQZYA==",
			"dev": true,
			"license": "MIT",
			"dependencies": {
				"@babel/helper-plugin-utils": "^7.12.13"
			},
			"peerDependencies": {
				"@babel/core": "^7.0.0-0"
			}
		},
		"node_modules/@babel/plugin-syntax-class-static-block": {
			"version": "7.14.5",
			"resolved": "https://registry.npmjs.org/@babel/plugin-syntax-class-static-block/-/plugin-syntax-class-static-block-7.14.5.tgz",
			"integrity": "sha512-b+YyPmr6ldyNnM6sqYeMWE+bgJcJpO6yS4QD7ymxgH34GBPNDM/THBh8iunyvKIZztiwLH4CJZ0RxTk9emgpjw==",
			"dev": true,
			"license": "MIT",
			"dependencies": {
				"@babel/helper-plugin-utils": "^7.14.5"
			},
			"engines": {
				"node": ">=6.9.0"
			},
			"peerDependencies": {
				"@babel/core": "^7.0.0-0"
			}
		},
		"node_modules/@babel/plugin-syntax-dynamic-import": {
			"version": "7.8.3",
			"resolved": "https://registry.npmjs.org/@babel/plugin-syntax-dynamic-import/-/plugin-syntax-dynamic-import-7.8.3.tgz",
			"integrity": "sha512-5gdGbFon+PszYzqs83S3E5mpi7/y/8M9eC90MRTZfduQOYW76ig6SOSPNe41IG5LoP3FGBn2N0RjVDSQiS94kQ==",
			"dev": true,
			"license": "MIT",
			"dependencies": {
				"@babel/helper-plugin-utils": "^7.8.0"
			},
			"peerDependencies": {
				"@babel/core": "^7.0.0-0"
			}
		},
		"node_modules/@babel/plugin-syntax-export-namespace-from": {
			"version": "7.8.3",
			"resolved": "https://registry.npmjs.org/@babel/plugin-syntax-export-namespace-from/-/plugin-syntax-export-namespace-from-7.8.3.tgz",
			"integrity": "sha512-MXf5laXo6c1IbEbegDmzGPwGNTsHZmEy6QGznu5Sh2UCWvueywb2ee+CCE4zQiZstxU9BMoQO9i6zUFSY0Kj0Q==",
			"dev": true,
			"license": "MIT",
			"dependencies": {
				"@babel/helper-plugin-utils": "^7.8.3"
			},
			"peerDependencies": {
				"@babel/core": "^7.0.0-0"
			}
		},
		"node_modules/@babel/plugin-syntax-import-assertions": {
			"version": "7.25.6",
			"resolved": "https://registry.npmjs.org/@babel/plugin-syntax-import-assertions/-/plugin-syntax-import-assertions-7.25.6.tgz",
			"integrity": "sha512-aABl0jHw9bZ2karQ/uUD6XP4u0SG22SJrOHFoL6XB1R7dTovOP4TzTlsxOYC5yQ1pdscVK2JTUnF6QL3ARoAiQ==",
			"dev": true,
			"license": "MIT",
			"dependencies": {
				"@babel/helper-plugin-utils": "^7.24.8"
			},
			"engines": {
				"node": ">=6.9.0"
			},
			"peerDependencies": {
				"@babel/core": "^7.0.0-0"
			}
		},
		"node_modules/@babel/plugin-syntax-import-attributes": {
			"version": "7.24.7",
			"resolved": "https://registry.npmjs.org/@babel/plugin-syntax-import-attributes/-/plugin-syntax-import-attributes-7.24.7.tgz",
			"integrity": "sha512-hbX+lKKeUMGihnK8nvKqmXBInriT3GVjzXKFriV3YC6APGxMbP8RZNFwy91+hocLXq90Mta+HshoB31802bb8A==",
			"dev": true,
			"license": "MIT",
			"dependencies": {
				"@babel/helper-plugin-utils": "^7.24.7"
			},
			"engines": {
				"node": ">=6.9.0"
			},
			"peerDependencies": {
				"@babel/core": "^7.0.0-0"
			}
		},
		"node_modules/@babel/plugin-syntax-import-meta": {
			"version": "7.10.4",
			"resolved": "https://registry.npmjs.org/@babel/plugin-syntax-import-meta/-/plugin-syntax-import-meta-7.10.4.tgz",
			"integrity": "sha512-Yqfm+XDx0+Prh3VSeEQCPU81yC+JWZ2pDPFSS4ZdpfZhp4MkFMaDC1UqseovEKwSUpnIL7+vK+Clp7bfh0iD7g==",
			"dev": true,
			"license": "MIT",
			"dependencies": {
				"@babel/helper-plugin-utils": "^7.10.4"
			},
			"peerDependencies": {
				"@babel/core": "^7.0.0-0"
			}
		},
		"node_modules/@babel/plugin-syntax-json-strings": {
			"version": "7.8.3",
			"resolved": "https://registry.npmjs.org/@babel/plugin-syntax-json-strings/-/plugin-syntax-json-strings-7.8.3.tgz",
			"integrity": "sha512-lY6kdGpWHvjoe2vk4WrAapEuBR69EMxZl+RoGRhrFGNYVK8mOPAW8VfbT/ZgrFbXlDNiiaxQnAtgVCZ6jv30EA==",
			"dev": true,
			"license": "MIT",
			"dependencies": {
				"@babel/helper-plugin-utils": "^7.8.0"
			},
			"peerDependencies": {
				"@babel/core": "^7.0.0-0"
			}
		},
		"node_modules/@babel/plugin-syntax-logical-assignment-operators": {
			"version": "7.10.4",
			"resolved": "https://registry.npmjs.org/@babel/plugin-syntax-logical-assignment-operators/-/plugin-syntax-logical-assignment-operators-7.10.4.tgz",
			"integrity": "sha512-d8waShlpFDinQ5MtvGU9xDAOzKH47+FFoney2baFIoMr952hKOLp1HR7VszoZvOsV/4+RRszNY7D17ba0te0ig==",
			"dev": true,
			"license": "MIT",
			"dependencies": {
				"@babel/helper-plugin-utils": "^7.10.4"
			},
			"peerDependencies": {
				"@babel/core": "^7.0.0-0"
			}
		},
		"node_modules/@babel/plugin-syntax-nullish-coalescing-operator": {
			"version": "7.8.3",
			"resolved": "https://registry.npmjs.org/@babel/plugin-syntax-nullish-coalescing-operator/-/plugin-syntax-nullish-coalescing-operator-7.8.3.tgz",
			"integrity": "sha512-aSff4zPII1u2QD7y+F8oDsz19ew4IGEJg9SVW+bqwpwtfFleiQDMdzA/R+UlWDzfnHFCxxleFT0PMIrR36XLNQ==",
			"dev": true,
			"license": "MIT",
			"dependencies": {
				"@babel/helper-plugin-utils": "^7.8.0"
			},
			"peerDependencies": {
				"@babel/core": "^7.0.0-0"
			}
		},
		"node_modules/@babel/plugin-syntax-numeric-separator": {
			"version": "7.10.4",
			"resolved": "https://registry.npmjs.org/@babel/plugin-syntax-numeric-separator/-/plugin-syntax-numeric-separator-7.10.4.tgz",
			"integrity": "sha512-9H6YdfkcK/uOnY/K7/aA2xpzaAgkQn37yzWUMRK7OaPOqOpGS1+n0H5hxT9AUw9EsSjPW8SVyMJwYRtWs3X3ug==",
			"dev": true,
			"license": "MIT",
			"dependencies": {
				"@babel/helper-plugin-utils": "^7.10.4"
			},
			"peerDependencies": {
				"@babel/core": "^7.0.0-0"
			}
		},
		"node_modules/@babel/plugin-syntax-object-rest-spread": {
			"version": "7.8.3",
			"resolved": "https://registry.npmjs.org/@babel/plugin-syntax-object-rest-spread/-/plugin-syntax-object-rest-spread-7.8.3.tgz",
			"integrity": "sha512-XoqMijGZb9y3y2XskN+P1wUGiVwWZ5JmoDRwx5+3GmEplNyVM2s2Dg8ILFQm8rWM48orGy5YpI5Bl8U1y7ydlA==",
			"dev": true,
			"license": "MIT",
			"dependencies": {
				"@babel/helper-plugin-utils": "^7.8.0"
			},
			"peerDependencies": {
				"@babel/core": "^7.0.0-0"
			}
		},
		"node_modules/@babel/plugin-syntax-optional-catch-binding": {
			"version": "7.8.3",
			"resolved": "https://registry.npmjs.org/@babel/plugin-syntax-optional-catch-binding/-/plugin-syntax-optional-catch-binding-7.8.3.tgz",
			"integrity": "sha512-6VPD0Pc1lpTqw0aKoeRTMiB+kWhAoT24PA+ksWSBrFtl5SIRVpZlwN3NNPQjehA2E/91FV3RjLWoVTglWcSV3Q==",
			"dev": true,
			"license": "MIT",
			"dependencies": {
				"@babel/helper-plugin-utils": "^7.8.0"
			},
			"peerDependencies": {
				"@babel/core": "^7.0.0-0"
			}
		},
		"node_modules/@babel/plugin-syntax-optional-chaining": {
			"version": "7.8.3",
			"resolved": "https://registry.npmjs.org/@babel/plugin-syntax-optional-chaining/-/plugin-syntax-optional-chaining-7.8.3.tgz",
			"integrity": "sha512-KoK9ErH1MBlCPxV0VANkXW2/dw4vlbGDrFgz8bmUsBGYkFRcbRwMh6cIJubdPrkxRwuGdtCk0v/wPTKbQgBjkg==",
			"dev": true,
			"license": "MIT",
			"dependencies": {
				"@babel/helper-plugin-utils": "^7.8.0"
			},
			"peerDependencies": {
				"@babel/core": "^7.0.0-0"
			}
		},
		"node_modules/@babel/plugin-syntax-private-property-in-object": {
			"version": "7.14.5",
			"resolved": "https://registry.npmjs.org/@babel/plugin-syntax-private-property-in-object/-/plugin-syntax-private-property-in-object-7.14.5.tgz",
			"integrity": "sha512-0wVnp9dxJ72ZUJDV27ZfbSj6iHLoytYZmh3rFcxNnvsJF3ktkzLDZPy/mA17HGsaQT3/DQsWYX1f1QGWkCoVUg==",
			"dev": true,
			"license": "MIT",
			"dependencies": {
				"@babel/helper-plugin-utils": "^7.14.5"
			},
			"engines": {
				"node": ">=6.9.0"
			},
			"peerDependencies": {
				"@babel/core": "^7.0.0-0"
			}
		},
		"node_modules/@babel/plugin-syntax-top-level-await": {
			"version": "7.14.5",
			"resolved": "https://registry.npmjs.org/@babel/plugin-syntax-top-level-await/-/plugin-syntax-top-level-await-7.14.5.tgz",
			"integrity": "sha512-hx++upLv5U1rgYfwe1xBQUhRmU41NEvpUvrp8jkrSCdvGSnM5/qdRMtylJ6PG5OFkBaHkbTAKTnd3/YyESRHFw==",
			"dev": true,
			"license": "MIT",
			"dependencies": {
				"@babel/helper-plugin-utils": "^7.14.5"
			},
			"engines": {
				"node": ">=6.9.0"
			},
			"peerDependencies": {
				"@babel/core": "^7.0.0-0"
			}
		},
		"node_modules/@babel/plugin-syntax-unicode-sets-regex": {
			"version": "7.18.6",
			"resolved": "https://registry.npmjs.org/@babel/plugin-syntax-unicode-sets-regex/-/plugin-syntax-unicode-sets-regex-7.18.6.tgz",
			"integrity": "sha512-727YkEAPwSIQTv5im8QHz3upqp92JTWhidIC81Tdx4VJYIte/VndKf1qKrfnnhPLiPghStWfvC/iFaMCQu7Nqg==",
			"dev": true,
			"license": "MIT",
			"dependencies": {
				"@babel/helper-create-regexp-features-plugin": "^7.18.6",
				"@babel/helper-plugin-utils": "^7.18.6"
			},
			"engines": {
				"node": ">=6.9.0"
			},
			"peerDependencies": {
				"@babel/core": "^7.0.0"
			}
		},
		"node_modules/@babel/plugin-transform-arrow-functions": {
			"version": "7.24.7",
			"resolved": "https://registry.npmjs.org/@babel/plugin-transform-arrow-functions/-/plugin-transform-arrow-functions-7.24.7.tgz",
			"integrity": "sha512-Dt9LQs6iEY++gXUwY03DNFat5C2NbO48jj+j/bSAz6b3HgPs39qcPiYt77fDObIcFwj3/C2ICX9YMwGflUoSHQ==",
			"dev": true,
			"license": "MIT",
			"dependencies": {
				"@babel/helper-plugin-utils": "^7.24.7"
			},
			"engines": {
				"node": ">=6.9.0"
			},
			"peerDependencies": {
				"@babel/core": "^7.0.0-0"
			}
		},
		"node_modules/@babel/plugin-transform-async-generator-functions": {
			"version": "7.25.0",
			"resolved": "https://registry.npmjs.org/@babel/plugin-transform-async-generator-functions/-/plugin-transform-async-generator-functions-7.25.0.tgz",
			"integrity": "sha512-uaIi2FdqzjpAMvVqvB51S42oC2JEVgh0LDsGfZVDysWE8LrJtQC2jvKmOqEYThKyB7bDEb7BP1GYWDm7tABA0Q==",
			"dev": true,
			"license": "MIT",
			"dependencies": {
				"@babel/helper-plugin-utils": "^7.24.8",
				"@babel/helper-remap-async-to-generator": "^7.25.0",
				"@babel/plugin-syntax-async-generators": "^7.8.4",
				"@babel/traverse": "^7.25.0"
			},
			"engines": {
				"node": ">=6.9.0"
			},
			"peerDependencies": {
				"@babel/core": "^7.0.0-0"
			}
		},
		"node_modules/@babel/plugin-transform-async-to-generator": {
			"version": "7.24.7",
			"resolved": "https://registry.npmjs.org/@babel/plugin-transform-async-to-generator/-/plugin-transform-async-to-generator-7.24.7.tgz",
			"integrity": "sha512-SQY01PcJfmQ+4Ash7NE+rpbLFbmqA2GPIgqzxfFTL4t1FKRq4zTms/7htKpoCUI9OcFYgzqfmCdH53s6/jn5fA==",
			"dev": true,
			"license": "MIT",
			"dependencies": {
				"@babel/helper-module-imports": "^7.24.7",
				"@babel/helper-plugin-utils": "^7.24.7",
				"@babel/helper-remap-async-to-generator": "^7.24.7"
			},
			"engines": {
				"node": ">=6.9.0"
			},
			"peerDependencies": {
				"@babel/core": "^7.0.0-0"
			}
		},
		"node_modules/@babel/plugin-transform-block-scoped-functions": {
			"version": "7.24.7",
			"resolved": "https://registry.npmjs.org/@babel/plugin-transform-block-scoped-functions/-/plugin-transform-block-scoped-functions-7.24.7.tgz",
			"integrity": "sha512-yO7RAz6EsVQDaBH18IDJcMB1HnrUn2FJ/Jslc/WtPPWcjhpUJXU/rjbwmluzp7v/ZzWcEhTMXELnnsz8djWDwQ==",
			"dev": true,
			"license": "MIT",
			"dependencies": {
				"@babel/helper-plugin-utils": "^7.24.7"
			},
			"engines": {
				"node": ">=6.9.0"
			},
			"peerDependencies": {
				"@babel/core": "^7.0.0-0"
			}
		},
		"node_modules/@babel/plugin-transform-block-scoping": {
			"version": "7.25.0",
			"resolved": "https://registry.npmjs.org/@babel/plugin-transform-block-scoping/-/plugin-transform-block-scoping-7.25.0.tgz",
			"integrity": "sha512-yBQjYoOjXlFv9nlXb3f1casSHOZkWr29NX+zChVanLg5Nc157CrbEX9D7hxxtTpuFy7Q0YzmmWfJxzvps4kXrQ==",
			"dev": true,
			"license": "MIT",
			"dependencies": {
				"@babel/helper-plugin-utils": "^7.24.8"
			},
			"engines": {
				"node": ">=6.9.0"
			},
			"peerDependencies": {
				"@babel/core": "^7.0.0-0"
			}
		},
		"node_modules/@babel/plugin-transform-class-properties": {
			"version": "7.25.4",
			"resolved": "https://registry.npmjs.org/@babel/plugin-transform-class-properties/-/plugin-transform-class-properties-7.25.4.tgz",
			"integrity": "sha512-nZeZHyCWPfjkdU5pA/uHiTaDAFUEqkpzf1YoQT2NeSynCGYq9rxfyI3XpQbfx/a0hSnFH6TGlEXvae5Vi7GD8g==",
			"dev": true,
			"license": "MIT",
			"dependencies": {
				"@babel/helper-create-class-features-plugin": "^7.25.4",
				"@babel/helper-plugin-utils": "^7.24.8"
			},
			"engines": {
				"node": ">=6.9.0"
			},
			"peerDependencies": {
				"@babel/core": "^7.0.0-0"
			}
		},
		"node_modules/@babel/plugin-transform-class-static-block": {
			"version": "7.24.7",
			"resolved": "https://registry.npmjs.org/@babel/plugin-transform-class-static-block/-/plugin-transform-class-static-block-7.24.7.tgz",
			"integrity": "sha512-HMXK3WbBPpZQufbMG4B46A90PkuuhN9vBCb5T8+VAHqvAqvcLi+2cKoukcpmUYkszLhScU3l1iudhrks3DggRQ==",
			"dev": true,
			"license": "MIT",
			"dependencies": {
				"@babel/helper-create-class-features-plugin": "^7.24.7",
				"@babel/helper-plugin-utils": "^7.24.7",
				"@babel/plugin-syntax-class-static-block": "^7.14.5"
			},
			"engines": {
				"node": ">=6.9.0"
			},
			"peerDependencies": {
				"@babel/core": "^7.12.0"
			}
		},
		"node_modules/@babel/plugin-transform-classes": {
			"version": "7.25.4",
			"resolved": "https://registry.npmjs.org/@babel/plugin-transform-classes/-/plugin-transform-classes-7.25.4.tgz",
			"integrity": "sha512-oexUfaQle2pF/b6E0dwsxQtAol9TLSO88kQvym6HHBWFliV2lGdrPieX+WgMRLSJDVzdYywk7jXbLPuO2KLTLg==",
			"dev": true,
			"license": "MIT",
			"dependencies": {
				"@babel/helper-annotate-as-pure": "^7.24.7",
				"@babel/helper-compilation-targets": "^7.25.2",
				"@babel/helper-plugin-utils": "^7.24.8",
				"@babel/helper-replace-supers": "^7.25.0",
				"@babel/traverse": "^7.25.4",
				"globals": "^11.1.0"
			},
			"engines": {
				"node": ">=6.9.0"
			},
			"peerDependencies": {
				"@babel/core": "^7.0.0-0"
			}
		},
		"node_modules/@babel/plugin-transform-computed-properties": {
			"version": "7.24.7",
			"resolved": "https://registry.npmjs.org/@babel/plugin-transform-computed-properties/-/plugin-transform-computed-properties-7.24.7.tgz",
			"integrity": "sha512-25cS7v+707Gu6Ds2oY6tCkUwsJ9YIDbggd9+cu9jzzDgiNq7hR/8dkzxWfKWnTic26vsI3EsCXNd4iEB6e8esQ==",
			"dev": true,
			"license": "MIT",
			"dependencies": {
				"@babel/helper-plugin-utils": "^7.24.7",
				"@babel/template": "^7.24.7"
			},
			"engines": {
				"node": ">=6.9.0"
			},
			"peerDependencies": {
				"@babel/core": "^7.0.0-0"
			}
		},
		"node_modules/@babel/plugin-transform-destructuring": {
			"version": "7.24.8",
			"resolved": "https://registry.npmjs.org/@babel/plugin-transform-destructuring/-/plugin-transform-destructuring-7.24.8.tgz",
			"integrity": "sha512-36e87mfY8TnRxc7yc6M9g9gOB7rKgSahqkIKwLpz4Ppk2+zC2Cy1is0uwtuSG6AE4zlTOUa+7JGz9jCJGLqQFQ==",
			"dev": true,
			"license": "MIT",
			"dependencies": {
				"@babel/helper-plugin-utils": "^7.24.8"
			},
			"engines": {
				"node": ">=6.9.0"
			},
			"peerDependencies": {
				"@babel/core": "^7.0.0-0"
			}
		},
		"node_modules/@babel/plugin-transform-dotall-regex": {
			"version": "7.24.7",
			"resolved": "https://registry.npmjs.org/@babel/plugin-transform-dotall-regex/-/plugin-transform-dotall-regex-7.24.7.tgz",
			"integrity": "sha512-ZOA3W+1RRTSWvyqcMJDLqbchh7U4NRGqwRfFSVbOLS/ePIP4vHB5e8T8eXcuqyN1QkgKyj5wuW0lcS85v4CrSw==",
			"dev": true,
			"license": "MIT",
			"dependencies": {
				"@babel/helper-create-regexp-features-plugin": "^7.24.7",
				"@babel/helper-plugin-utils": "^7.24.7"
			},
			"engines": {
				"node": ">=6.9.0"
			},
			"peerDependencies": {
				"@babel/core": "^7.0.0-0"
			}
		},
		"node_modules/@babel/plugin-transform-duplicate-keys": {
			"version": "7.24.7",
			"resolved": "https://registry.npmjs.org/@babel/plugin-transform-duplicate-keys/-/plugin-transform-duplicate-keys-7.24.7.tgz",
			"integrity": "sha512-JdYfXyCRihAe46jUIliuL2/s0x0wObgwwiGxw/UbgJBr20gQBThrokO4nYKgWkD7uBaqM7+9x5TU7NkExZJyzw==",
			"dev": true,
			"license": "MIT",
			"dependencies": {
				"@babel/helper-plugin-utils": "^7.24.7"
			},
			"engines": {
				"node": ">=6.9.0"
			},
			"peerDependencies": {
				"@babel/core": "^7.0.0-0"
			}
		},
		"node_modules/@babel/plugin-transform-duplicate-named-capturing-groups-regex": {
			"version": "7.25.0",
			"resolved": "https://registry.npmjs.org/@babel/plugin-transform-duplicate-named-capturing-groups-regex/-/plugin-transform-duplicate-named-capturing-groups-regex-7.25.0.tgz",
			"integrity": "sha512-YLpb4LlYSc3sCUa35un84poXoraOiQucUTTu8X1j18JV+gNa8E0nyUf/CjZ171IRGr4jEguF+vzJU66QZhn29g==",
			"dev": true,
			"license": "MIT",
			"dependencies": {
				"@babel/helper-create-regexp-features-plugin": "^7.25.0",
				"@babel/helper-plugin-utils": "^7.24.8"
			},
			"engines": {
				"node": ">=6.9.0"
			},
			"peerDependencies": {
				"@babel/core": "^7.0.0"
			}
		},
		"node_modules/@babel/plugin-transform-dynamic-import": {
			"version": "7.24.7",
			"resolved": "https://registry.npmjs.org/@babel/plugin-transform-dynamic-import/-/plugin-transform-dynamic-import-7.24.7.tgz",
			"integrity": "sha512-sc3X26PhZQDb3JhORmakcbvkeInvxz+A8oda99lj7J60QRuPZvNAk9wQlTBS1ZynelDrDmTU4pw1tyc5d5ZMUg==",
			"dev": true,
			"license": "MIT",
			"dependencies": {
				"@babel/helper-plugin-utils": "^7.24.7",
				"@babel/plugin-syntax-dynamic-import": "^7.8.3"
			},
			"engines": {
				"node": ">=6.9.0"
			},
			"peerDependencies": {
				"@babel/core": "^7.0.0-0"
			}
		},
		"node_modules/@babel/plugin-transform-exponentiation-operator": {
			"version": "7.24.7",
			"resolved": "https://registry.npmjs.org/@babel/plugin-transform-exponentiation-operator/-/plugin-transform-exponentiation-operator-7.24.7.tgz",
			"integrity": "sha512-Rqe/vSc9OYgDajNIK35u7ot+KeCoetqQYFXM4Epf7M7ez3lWlOjrDjrwMei6caCVhfdw+mIKD4cgdGNy5JQotQ==",
			"dev": true,
			"license": "MIT",
			"dependencies": {
				"@babel/helper-builder-binary-assignment-operator-visitor": "^7.24.7",
				"@babel/helper-plugin-utils": "^7.24.7"
			},
			"engines": {
				"node": ">=6.9.0"
			},
			"peerDependencies": {
				"@babel/core": "^7.0.0-0"
			}
		},
		"node_modules/@babel/plugin-transform-export-namespace-from": {
			"version": "7.24.7",
			"resolved": "https://registry.npmjs.org/@babel/plugin-transform-export-namespace-from/-/plugin-transform-export-namespace-from-7.24.7.tgz",
			"integrity": "sha512-v0K9uNYsPL3oXZ/7F9NNIbAj2jv1whUEtyA6aujhekLs56R++JDQuzRcP2/z4WX5Vg/c5lE9uWZA0/iUoFhLTA==",
			"dev": true,
			"license": "MIT",
			"dependencies": {
				"@babel/helper-plugin-utils": "^7.24.7",
				"@babel/plugin-syntax-export-namespace-from": "^7.8.3"
			},
			"engines": {
				"node": ">=6.9.0"
			},
			"peerDependencies": {
				"@babel/core": "^7.0.0-0"
			}
		},
		"node_modules/@babel/plugin-transform-for-of": {
			"version": "7.24.7",
			"resolved": "https://registry.npmjs.org/@babel/plugin-transform-for-of/-/plugin-transform-for-of-7.24.7.tgz",
			"integrity": "sha512-wo9ogrDG1ITTTBsy46oGiN1dS9A7MROBTcYsfS8DtsImMkHk9JXJ3EWQM6X2SUw4x80uGPlwj0o00Uoc6nEE3g==",
			"dev": true,
			"license": "MIT",
			"dependencies": {
				"@babel/helper-plugin-utils": "^7.24.7",
				"@babel/helper-skip-transparent-expression-wrappers": "^7.24.7"
			},
			"engines": {
				"node": ">=6.9.0"
			},
			"peerDependencies": {
				"@babel/core": "^7.0.0-0"
			}
		},
		"node_modules/@babel/plugin-transform-function-name": {
			"version": "7.25.1",
			"resolved": "https://registry.npmjs.org/@babel/plugin-transform-function-name/-/plugin-transform-function-name-7.25.1.tgz",
			"integrity": "sha512-TVVJVdW9RKMNgJJlLtHsKDTydjZAbwIsn6ySBPQaEAUU5+gVvlJt/9nRmqVbsV/IBanRjzWoaAQKLoamWVOUuA==",
			"dev": true,
			"license": "MIT",
			"dependencies": {
				"@babel/helper-compilation-targets": "^7.24.8",
				"@babel/helper-plugin-utils": "^7.24.8",
				"@babel/traverse": "^7.25.1"
			},
			"engines": {
				"node": ">=6.9.0"
			},
			"peerDependencies": {
				"@babel/core": "^7.0.0-0"
			}
		},
		"node_modules/@babel/plugin-transform-json-strings": {
			"version": "7.24.7",
			"resolved": "https://registry.npmjs.org/@babel/plugin-transform-json-strings/-/plugin-transform-json-strings-7.24.7.tgz",
			"integrity": "sha512-2yFnBGDvRuxAaE/f0vfBKvtnvvqU8tGpMHqMNpTN2oWMKIR3NqFkjaAgGwawhqK/pIN2T3XdjGPdaG0vDhOBGw==",
			"dev": true,
			"license": "MIT",
			"dependencies": {
				"@babel/helper-plugin-utils": "^7.24.7",
				"@babel/plugin-syntax-json-strings": "^7.8.3"
			},
			"engines": {
				"node": ">=6.9.0"
			},
			"peerDependencies": {
				"@babel/core": "^7.0.0-0"
			}
		},
		"node_modules/@babel/plugin-transform-literals": {
			"version": "7.25.2",
			"resolved": "https://registry.npmjs.org/@babel/plugin-transform-literals/-/plugin-transform-literals-7.25.2.tgz",
			"integrity": "sha512-HQI+HcTbm9ur3Z2DkO+jgESMAMcYLuN/A7NRw9juzxAezN9AvqvUTnpKP/9kkYANz6u7dFlAyOu44ejuGySlfw==",
			"dev": true,
			"license": "MIT",
			"dependencies": {
				"@babel/helper-plugin-utils": "^7.24.8"
			},
			"engines": {
				"node": ">=6.9.0"
			},
			"peerDependencies": {
				"@babel/core": "^7.0.0-0"
			}
		},
		"node_modules/@babel/plugin-transform-logical-assignment-operators": {
			"version": "7.24.7",
			"resolved": "https://registry.npmjs.org/@babel/plugin-transform-logical-assignment-operators/-/plugin-transform-logical-assignment-operators-7.24.7.tgz",
			"integrity": "sha512-4D2tpwlQ1odXmTEIFWy9ELJcZHqrStlzK/dAOWYyxX3zT0iXQB6banjgeOJQXzEc4S0E0a5A+hahxPaEFYftsw==",
			"dev": true,
			"license": "MIT",
			"dependencies": {
				"@babel/helper-plugin-utils": "^7.24.7",
				"@babel/plugin-syntax-logical-assignment-operators": "^7.10.4"
			},
			"engines": {
				"node": ">=6.9.0"
			},
			"peerDependencies": {
				"@babel/core": "^7.0.0-0"
			}
		},
		"node_modules/@babel/plugin-transform-member-expression-literals": {
			"version": "7.24.7",
			"resolved": "https://registry.npmjs.org/@babel/plugin-transform-member-expression-literals/-/plugin-transform-member-expression-literals-7.24.7.tgz",
			"integrity": "sha512-T/hRC1uqrzXMKLQ6UCwMT85S3EvqaBXDGf0FaMf4446Qx9vKwlghvee0+uuZcDUCZU5RuNi4781UQ7R308zzBw==",
			"dev": true,
			"license": "MIT",
			"dependencies": {
				"@babel/helper-plugin-utils": "^7.24.7"
			},
			"engines": {
				"node": ">=6.9.0"
			},
			"peerDependencies": {
				"@babel/core": "^7.0.0-0"
			}
		},
		"node_modules/@babel/plugin-transform-modules-amd": {
			"version": "7.24.7",
			"resolved": "https://registry.npmjs.org/@babel/plugin-transform-modules-amd/-/plugin-transform-modules-amd-7.24.7.tgz",
			"integrity": "sha512-9+pB1qxV3vs/8Hdmz/CulFB8w2tuu6EB94JZFsjdqxQokwGa9Unap7Bo2gGBGIvPmDIVvQrom7r5m/TCDMURhg==",
			"dev": true,
			"license": "MIT",
			"dependencies": {
				"@babel/helper-module-transforms": "^7.24.7",
				"@babel/helper-plugin-utils": "^7.24.7"
			},
			"engines": {
				"node": ">=6.9.0"
			},
			"peerDependencies": {
				"@babel/core": "^7.0.0-0"
			}
		},
		"node_modules/@babel/plugin-transform-modules-commonjs": {
			"version": "7.24.8",
			"resolved": "https://registry.npmjs.org/@babel/plugin-transform-modules-commonjs/-/plugin-transform-modules-commonjs-7.24.8.tgz",
			"integrity": "sha512-WHsk9H8XxRs3JXKWFiqtQebdh9b/pTk4EgueygFzYlTKAg0Ud985mSevdNjdXdFBATSKVJGQXP1tv6aGbssLKA==",
			"dev": true,
			"license": "MIT",
			"dependencies": {
				"@babel/helper-module-transforms": "^7.24.8",
				"@babel/helper-plugin-utils": "^7.24.8",
				"@babel/helper-simple-access": "^7.24.7"
			},
			"engines": {
				"node": ">=6.9.0"
			},
			"peerDependencies": {
				"@babel/core": "^7.0.0-0"
			}
		},
		"node_modules/@babel/plugin-transform-modules-systemjs": {
			"version": "7.25.0",
			"resolved": "https://registry.npmjs.org/@babel/plugin-transform-modules-systemjs/-/plugin-transform-modules-systemjs-7.25.0.tgz",
			"integrity": "sha512-YPJfjQPDXxyQWg/0+jHKj1llnY5f/R6a0p/vP4lPymxLu7Lvl4k2WMitqi08yxwQcCVUUdG9LCUj4TNEgAp3Jw==",
			"dev": true,
			"license": "MIT",
			"dependencies": {
				"@babel/helper-module-transforms": "^7.25.0",
				"@babel/helper-plugin-utils": "^7.24.8",
				"@babel/helper-validator-identifier": "^7.24.7",
				"@babel/traverse": "^7.25.0"
			},
			"engines": {
				"node": ">=6.9.0"
			},
			"peerDependencies": {
				"@babel/core": "^7.0.0-0"
			}
		},
		"node_modules/@babel/plugin-transform-modules-umd": {
			"version": "7.24.7",
			"resolved": "https://registry.npmjs.org/@babel/plugin-transform-modules-umd/-/plugin-transform-modules-umd-7.24.7.tgz",
			"integrity": "sha512-3aytQvqJ/h9z4g8AsKPLvD4Zqi2qT+L3j7XoFFu1XBlZWEl2/1kWnhmAbxpLgPrHSY0M6UA02jyTiwUVtiKR6A==",
			"dev": true,
			"license": "MIT",
			"dependencies": {
				"@babel/helper-module-transforms": "^7.24.7",
				"@babel/helper-plugin-utils": "^7.24.7"
			},
			"engines": {
				"node": ">=6.9.0"
			},
			"peerDependencies": {
				"@babel/core": "^7.0.0-0"
			}
		},
		"node_modules/@babel/plugin-transform-named-capturing-groups-regex": {
			"version": "7.24.7",
			"resolved": "https://registry.npmjs.org/@babel/plugin-transform-named-capturing-groups-regex/-/plugin-transform-named-capturing-groups-regex-7.24.7.tgz",
			"integrity": "sha512-/jr7h/EWeJtk1U/uz2jlsCioHkZk1JJZVcc8oQsJ1dUlaJD83f4/6Zeh2aHt9BIFokHIsSeDfhUmju0+1GPd6g==",
			"dev": true,
			"license": "MIT",
			"dependencies": {
				"@babel/helper-create-regexp-features-plugin": "^7.24.7",
				"@babel/helper-plugin-utils": "^7.24.7"
			},
			"engines": {
				"node": ">=6.9.0"
			},
			"peerDependencies": {
				"@babel/core": "^7.0.0"
			}
		},
		"node_modules/@babel/plugin-transform-new-target": {
			"version": "7.24.7",
			"resolved": "https://registry.npmjs.org/@babel/plugin-transform-new-target/-/plugin-transform-new-target-7.24.7.tgz",
			"integrity": "sha512-RNKwfRIXg4Ls/8mMTza5oPF5RkOW8Wy/WgMAp1/F1yZ8mMbtwXW+HDoJiOsagWrAhI5f57Vncrmr9XeT4CVapA==",
			"dev": true,
			"license": "MIT",
			"dependencies": {
				"@babel/helper-plugin-utils": "^7.24.7"
			},
			"engines": {
				"node": ">=6.9.0"
			},
			"peerDependencies": {
				"@babel/core": "^7.0.0-0"
			}
		},
		"node_modules/@babel/plugin-transform-nullish-coalescing-operator": {
			"version": "7.24.7",
			"resolved": "https://registry.npmjs.org/@babel/plugin-transform-nullish-coalescing-operator/-/plugin-transform-nullish-coalescing-operator-7.24.7.tgz",
			"integrity": "sha512-Ts7xQVk1OEocqzm8rHMXHlxvsfZ0cEF2yomUqpKENHWMF4zKk175Y4q8H5knJes6PgYad50uuRmt3UJuhBw8pQ==",
			"dev": true,
			"license": "MIT",
			"dependencies": {
				"@babel/helper-plugin-utils": "^7.24.7",
				"@babel/plugin-syntax-nullish-coalescing-operator": "^7.8.3"
			},
			"engines": {
				"node": ">=6.9.0"
			},
			"peerDependencies": {
				"@babel/core": "^7.0.0-0"
			}
		},
		"node_modules/@babel/plugin-transform-numeric-separator": {
			"version": "7.24.7",
			"resolved": "https://registry.npmjs.org/@babel/plugin-transform-numeric-separator/-/plugin-transform-numeric-separator-7.24.7.tgz",
			"integrity": "sha512-e6q1TiVUzvH9KRvicuxdBTUj4AdKSRwzIyFFnfnezpCfP2/7Qmbb8qbU2j7GODbl4JMkblitCQjKYUaX/qkkwA==",
			"dev": true,
			"license": "MIT",
			"dependencies": {
				"@babel/helper-plugin-utils": "^7.24.7",
				"@babel/plugin-syntax-numeric-separator": "^7.10.4"
			},
			"engines": {
				"node": ">=6.9.0"
			},
			"peerDependencies": {
				"@babel/core": "^7.0.0-0"
			}
		},
		"node_modules/@babel/plugin-transform-object-rest-spread": {
			"version": "7.24.7",
			"resolved": "https://registry.npmjs.org/@babel/plugin-transform-object-rest-spread/-/plugin-transform-object-rest-spread-7.24.7.tgz",
			"integrity": "sha512-4QrHAr0aXQCEFni2q4DqKLD31n2DL+RxcwnNjDFkSG0eNQ/xCavnRkfCUjsyqGC2OviNJvZOF/mQqZBw7i2C5Q==",
			"dev": true,
			"license": "MIT",
			"dependencies": {
				"@babel/helper-compilation-targets": "^7.24.7",
				"@babel/helper-plugin-utils": "^7.24.7",
				"@babel/plugin-syntax-object-rest-spread": "^7.8.3",
				"@babel/plugin-transform-parameters": "^7.24.7"
			},
			"engines": {
				"node": ">=6.9.0"
			},
			"peerDependencies": {
				"@babel/core": "^7.0.0-0"
			}
		},
		"node_modules/@babel/plugin-transform-object-super": {
			"version": "7.24.7",
			"resolved": "https://registry.npmjs.org/@babel/plugin-transform-object-super/-/plugin-transform-object-super-7.24.7.tgz",
			"integrity": "sha512-A/vVLwN6lBrMFmMDmPPz0jnE6ZGx7Jq7d6sT/Ev4H65RER6pZ+kczlf1DthF5N0qaPHBsI7UXiE8Zy66nmAovg==",
			"dev": true,
			"license": "MIT",
			"dependencies": {
				"@babel/helper-plugin-utils": "^7.24.7",
				"@babel/helper-replace-supers": "^7.24.7"
			},
			"engines": {
				"node": ">=6.9.0"
			},
			"peerDependencies": {
				"@babel/core": "^7.0.0-0"
			}
		},
		"node_modules/@babel/plugin-transform-optional-catch-binding": {
			"version": "7.24.7",
			"resolved": "https://registry.npmjs.org/@babel/plugin-transform-optional-catch-binding/-/plugin-transform-optional-catch-binding-7.24.7.tgz",
			"integrity": "sha512-uLEndKqP5BfBbC/5jTwPxLh9kqPWWgzN/f8w6UwAIirAEqiIVJWWY312X72Eub09g5KF9+Zn7+hT7sDxmhRuKA==",
			"dev": true,
			"license": "MIT",
			"dependencies": {
				"@babel/helper-plugin-utils": "^7.24.7",
				"@babel/plugin-syntax-optional-catch-binding": "^7.8.3"
			},
			"engines": {
				"node": ">=6.9.0"
			},
			"peerDependencies": {
				"@babel/core": "^7.0.0-0"
			}
		},
		"node_modules/@babel/plugin-transform-optional-chaining": {
			"version": "7.24.8",
			"resolved": "https://registry.npmjs.org/@babel/plugin-transform-optional-chaining/-/plugin-transform-optional-chaining-7.24.8.tgz",
			"integrity": "sha512-5cTOLSMs9eypEy8JUVvIKOu6NgvbJMnpG62VpIHrTmROdQ+L5mDAaI40g25k5vXti55JWNX5jCkq3HZxXBQANw==",
			"dev": true,
			"license": "MIT",
			"dependencies": {
				"@babel/helper-plugin-utils": "^7.24.8",
				"@babel/helper-skip-transparent-expression-wrappers": "^7.24.7",
				"@babel/plugin-syntax-optional-chaining": "^7.8.3"
			},
			"engines": {
				"node": ">=6.9.0"
			},
			"peerDependencies": {
				"@babel/core": "^7.0.0-0"
			}
		},
		"node_modules/@babel/plugin-transform-parameters": {
			"version": "7.24.7",
			"resolved": "https://registry.npmjs.org/@babel/plugin-transform-parameters/-/plugin-transform-parameters-7.24.7.tgz",
			"integrity": "sha512-yGWW5Rr+sQOhK0Ot8hjDJuxU3XLRQGflvT4lhlSY0DFvdb3TwKaY26CJzHtYllU0vT9j58hc37ndFPsqT1SrzA==",
			"dev": true,
			"license": "MIT",
			"dependencies": {
				"@babel/helper-plugin-utils": "^7.24.7"
			},
			"engines": {
				"node": ">=6.9.0"
			},
			"peerDependencies": {
				"@babel/core": "^7.0.0-0"
			}
		},
		"node_modules/@babel/plugin-transform-private-methods": {
			"version": "7.25.4",
			"resolved": "https://registry.npmjs.org/@babel/plugin-transform-private-methods/-/plugin-transform-private-methods-7.25.4.tgz",
			"integrity": "sha512-ao8BG7E2b/URaUQGqN3Tlsg+M3KlHY6rJ1O1gXAEUnZoyNQnvKyH87Kfg+FoxSeyWUB8ISZZsC91C44ZuBFytw==",
			"dev": true,
			"license": "MIT",
			"dependencies": {
				"@babel/helper-create-class-features-plugin": "^7.25.4",
				"@babel/helper-plugin-utils": "^7.24.8"
			},
			"engines": {
				"node": ">=6.9.0"
			},
			"peerDependencies": {
				"@babel/core": "^7.0.0-0"
			}
		},
		"node_modules/@babel/plugin-transform-private-property-in-object": {
			"version": "7.24.7",
			"resolved": "https://registry.npmjs.org/@babel/plugin-transform-private-property-in-object/-/plugin-transform-private-property-in-object-7.24.7.tgz",
			"integrity": "sha512-9z76mxwnwFxMyxZWEgdgECQglF2Q7cFLm0kMf8pGwt+GSJsY0cONKj/UuO4bOH0w/uAel3ekS4ra5CEAyJRmDA==",
			"dev": true,
			"license": "MIT",
			"dependencies": {
				"@babel/helper-annotate-as-pure": "^7.24.7",
				"@babel/helper-create-class-features-plugin": "^7.24.7",
				"@babel/helper-plugin-utils": "^7.24.7",
				"@babel/plugin-syntax-private-property-in-object": "^7.14.5"
			},
			"engines": {
				"node": ">=6.9.0"
			},
			"peerDependencies": {
				"@babel/core": "^7.0.0-0"
			}
		},
		"node_modules/@babel/plugin-transform-property-literals": {
			"version": "7.24.7",
			"resolved": "https://registry.npmjs.org/@babel/plugin-transform-property-literals/-/plugin-transform-property-literals-7.24.7.tgz",
			"integrity": "sha512-EMi4MLQSHfd2nrCqQEWxFdha2gBCqU4ZcCng4WBGZ5CJL4bBRW0ptdqqDdeirGZcpALazVVNJqRmsO8/+oNCBA==",
			"dev": true,
			"license": "MIT",
			"dependencies": {
				"@babel/helper-plugin-utils": "^7.24.7"
			},
			"engines": {
				"node": ">=6.9.0"
			},
			"peerDependencies": {
				"@babel/core": "^7.0.0-0"
			}
		},
		"node_modules/@babel/plugin-transform-regenerator": {
			"version": "7.24.7",
			"resolved": "https://registry.npmjs.org/@babel/plugin-transform-regenerator/-/plugin-transform-regenerator-7.24.7.tgz",
			"integrity": "sha512-lq3fvXPdimDrlg6LWBoqj+r/DEWgONuwjuOuQCSYgRroXDH/IdM1C0IZf59fL5cHLpjEH/O6opIRBbqv7ELnuA==",
			"dev": true,
			"license": "MIT",
			"dependencies": {
				"@babel/helper-plugin-utils": "^7.24.7",
				"regenerator-transform": "^0.15.2"
			},
			"engines": {
				"node": ">=6.9.0"
			},
			"peerDependencies": {
				"@babel/core": "^7.0.0-0"
			}
		},
		"node_modules/@babel/plugin-transform-reserved-words": {
			"version": "7.24.7",
			"resolved": "https://registry.npmjs.org/@babel/plugin-transform-reserved-words/-/plugin-transform-reserved-words-7.24.7.tgz",
			"integrity": "sha512-0DUq0pHcPKbjFZCfTss/pGkYMfy3vFWydkUBd9r0GHpIyfs2eCDENvqadMycRS9wZCXR41wucAfJHJmwA0UmoQ==",
			"dev": true,
			"license": "MIT",
			"dependencies": {
				"@babel/helper-plugin-utils": "^7.24.7"
			},
			"engines": {
				"node": ">=6.9.0"
			},
			"peerDependencies": {
				"@babel/core": "^7.0.0-0"
			}
		},
		"node_modules/@babel/plugin-transform-runtime": {
			"version": "7.24.7",
			"resolved": "https://registry.npmjs.org/@babel/plugin-transform-runtime/-/plugin-transform-runtime-7.24.7.tgz",
			"integrity": "sha512-YqXjrk4C+a1kZjewqt+Mmu2UuV1s07y8kqcUf4qYLnoqemhR4gRQikhdAhSVJioMjVTu6Mo6pAbaypEA3jY6fw==",
			"dev": true,
			"license": "MIT",
			"dependencies": {
				"@babel/helper-module-imports": "^7.24.7",
				"@babel/helper-plugin-utils": "^7.24.7",
				"babel-plugin-polyfill-corejs2": "^0.4.10",
				"babel-plugin-polyfill-corejs3": "^0.10.1",
				"babel-plugin-polyfill-regenerator": "^0.6.1",
				"semver": "^6.3.1"
			},
			"engines": {
				"node": ">=6.9.0"
			},
			"peerDependencies": {
				"@babel/core": "^7.0.0-0"
			}
		},
		"node_modules/@babel/plugin-transform-runtime/node_modules/semver": {
			"version": "6.3.1",
			"resolved": "https://registry.npmjs.org/semver/-/semver-6.3.1.tgz",
			"integrity": "sha512-BR7VvDCVHO+q2xBEWskxS6DJE1qRnb7DxzUrogb71CWoSficBxYsiAGd+Kl0mmq/MprG9yArRkyrQxTO6XjMzA==",
			"dev": true,
			"license": "ISC",
			"bin": {
				"semver": "bin/semver.js"
			}
		},
		"node_modules/@babel/plugin-transform-shorthand-properties": {
			"version": "7.24.7",
			"resolved": "https://registry.npmjs.org/@babel/plugin-transform-shorthand-properties/-/plugin-transform-shorthand-properties-7.24.7.tgz",
			"integrity": "sha512-KsDsevZMDsigzbA09+vacnLpmPH4aWjcZjXdyFKGzpplxhbeB4wYtury3vglQkg6KM/xEPKt73eCjPPf1PgXBA==",
			"dev": true,
			"license": "MIT",
			"dependencies": {
				"@babel/helper-plugin-utils": "^7.24.7"
			},
			"engines": {
				"node": ">=6.9.0"
			},
			"peerDependencies": {
				"@babel/core": "^7.0.0-0"
			}
		},
		"node_modules/@babel/plugin-transform-spread": {
			"version": "7.24.7",
			"resolved": "https://registry.npmjs.org/@babel/plugin-transform-spread/-/plugin-transform-spread-7.24.7.tgz",
			"integrity": "sha512-x96oO0I09dgMDxJaANcRyD4ellXFLLiWhuwDxKZX5g2rWP1bTPkBSwCYv96VDXVT1bD9aPj8tppr5ITIh8hBng==",
			"dev": true,
			"license": "MIT",
			"dependencies": {
				"@babel/helper-plugin-utils": "^7.24.7",
				"@babel/helper-skip-transparent-expression-wrappers": "^7.24.7"
			},
			"engines": {
				"node": ">=6.9.0"
			},
			"peerDependencies": {
				"@babel/core": "^7.0.0-0"
			}
		},
		"node_modules/@babel/plugin-transform-sticky-regex": {
			"version": "7.24.7",
			"resolved": "https://registry.npmjs.org/@babel/plugin-transform-sticky-regex/-/plugin-transform-sticky-regex-7.24.7.tgz",
			"integrity": "sha512-kHPSIJc9v24zEml5geKg9Mjx5ULpfncj0wRpYtxbvKyTtHCYDkVE3aHQ03FrpEo4gEe2vrJJS1Y9CJTaThA52g==",
			"dev": true,
			"license": "MIT",
			"dependencies": {
				"@babel/helper-plugin-utils": "^7.24.7"
			},
			"engines": {
				"node": ">=6.9.0"
			},
			"peerDependencies": {
				"@babel/core": "^7.0.0-0"
			}
		},
		"node_modules/@babel/plugin-transform-template-literals": {
			"version": "7.24.7",
			"resolved": "https://registry.npmjs.org/@babel/plugin-transform-template-literals/-/plugin-transform-template-literals-7.24.7.tgz",
			"integrity": "sha512-AfDTQmClklHCOLxtGoP7HkeMw56k1/bTQjwsfhL6pppo/M4TOBSq+jjBUBLmV/4oeFg4GWMavIl44ZeCtmmZTw==",
			"dev": true,
			"license": "MIT",
			"dependencies": {
				"@babel/helper-plugin-utils": "^7.24.7"
			},
			"engines": {
				"node": ">=6.9.0"
			},
			"peerDependencies": {
				"@babel/core": "^7.0.0-0"
			}
		},
		"node_modules/@babel/plugin-transform-typeof-symbol": {
			"version": "7.24.8",
			"resolved": "https://registry.npmjs.org/@babel/plugin-transform-typeof-symbol/-/plugin-transform-typeof-symbol-7.24.8.tgz",
			"integrity": "sha512-adNTUpDCVnmAE58VEqKlAA6ZBlNkMnWD0ZcW76lyNFN3MJniyGFZfNwERVk8Ap56MCnXztmDr19T4mPTztcuaw==",
			"dev": true,
			"license": "MIT",
			"dependencies": {
				"@babel/helper-plugin-utils": "^7.24.8"
			},
			"engines": {
				"node": ">=6.9.0"
			},
			"peerDependencies": {
				"@babel/core": "^7.0.0-0"
			}
		},
		"node_modules/@babel/plugin-transform-unicode-escapes": {
			"version": "7.24.7",
			"resolved": "https://registry.npmjs.org/@babel/plugin-transform-unicode-escapes/-/plugin-transform-unicode-escapes-7.24.7.tgz",
			"integrity": "sha512-U3ap1gm5+4edc2Q/P+9VrBNhGkfnf+8ZqppY71Bo/pzZmXhhLdqgaUl6cuB07O1+AQJtCLfaOmswiNbSQ9ivhw==",
			"dev": true,
			"license": "MIT",
			"dependencies": {
				"@babel/helper-plugin-utils": "^7.24.7"
			},
			"engines": {
				"node": ">=6.9.0"
			},
			"peerDependencies": {
				"@babel/core": "^7.0.0-0"
			}
		},
		"node_modules/@babel/plugin-transform-unicode-property-regex": {
			"version": "7.24.7",
			"resolved": "https://registry.npmjs.org/@babel/plugin-transform-unicode-property-regex/-/plugin-transform-unicode-property-regex-7.24.7.tgz",
			"integrity": "sha512-uH2O4OV5M9FZYQrwc7NdVmMxQJOCCzFeYudlZSzUAHRFeOujQefa92E74TQDVskNHCzOXoigEuoyzHDhaEaK5w==",
			"dev": true,
			"license": "MIT",
			"dependencies": {
				"@babel/helper-create-regexp-features-plugin": "^7.24.7",
				"@babel/helper-plugin-utils": "^7.24.7"
			},
			"engines": {
				"node": ">=6.9.0"
			},
			"peerDependencies": {
				"@babel/core": "^7.0.0-0"
			}
		},
		"node_modules/@babel/plugin-transform-unicode-regex": {
			"version": "7.24.7",
			"resolved": "https://registry.npmjs.org/@babel/plugin-transform-unicode-regex/-/plugin-transform-unicode-regex-7.24.7.tgz",
			"integrity": "sha512-hlQ96MBZSAXUq7ltkjtu3FJCCSMx/j629ns3hA3pXnBXjanNP0LHi+JpPeA81zaWgVK1VGH95Xuy7u0RyQ8kMg==",
			"dev": true,
			"license": "MIT",
			"dependencies": {
				"@babel/helper-create-regexp-features-plugin": "^7.24.7",
				"@babel/helper-plugin-utils": "^7.24.7"
			},
			"engines": {
				"node": ">=6.9.0"
			},
			"peerDependencies": {
				"@babel/core": "^7.0.0-0"
			}
		},
		"node_modules/@babel/plugin-transform-unicode-sets-regex": {
			"version": "7.25.4",
			"resolved": "https://registry.npmjs.org/@babel/plugin-transform-unicode-sets-regex/-/plugin-transform-unicode-sets-regex-7.25.4.tgz",
			"integrity": "sha512-qesBxiWkgN1Q+31xUE9RcMk79eOXXDCv6tfyGMRSs4RGlioSg2WVyQAm07k726cSE56pa+Kb0y9epX2qaXzTvA==",
			"dev": true,
			"license": "MIT",
			"dependencies": {
				"@babel/helper-create-regexp-features-plugin": "^7.25.2",
				"@babel/helper-plugin-utils": "^7.24.8"
			},
			"engines": {
				"node": ">=6.9.0"
			},
			"peerDependencies": {
				"@babel/core": "^7.0.0"
			}
		},
		"node_modules/@babel/preset-env": {
			"version": "7.25.3",
			"resolved": "https://registry.npmjs.org/@babel/preset-env/-/preset-env-7.25.3.tgz",
			"integrity": "sha512-QsYW7UeAaXvLPX9tdVliMJE7MD7M6MLYVTovRTIwhoYQVFHR1rM4wO8wqAezYi3/BpSD+NzVCZ69R6smWiIi8g==",
			"dev": true,
			"license": "MIT",
			"dependencies": {
				"@babel/compat-data": "^7.25.2",
				"@babel/helper-compilation-targets": "^7.25.2",
				"@babel/helper-plugin-utils": "^7.24.8",
				"@babel/helper-validator-option": "^7.24.8",
				"@babel/plugin-bugfix-firefox-class-in-computed-class-key": "^7.25.3",
				"@babel/plugin-bugfix-safari-class-field-initializer-scope": "^7.25.0",
				"@babel/plugin-bugfix-safari-id-destructuring-collision-in-function-expression": "^7.25.0",
				"@babel/plugin-bugfix-v8-spread-parameters-in-optional-chaining": "^7.24.7",
				"@babel/plugin-bugfix-v8-static-class-fields-redefine-readonly": "^7.25.0",
				"@babel/plugin-proposal-private-property-in-object": "7.21.0-placeholder-for-preset-env.2",
				"@babel/plugin-syntax-async-generators": "^7.8.4",
				"@babel/plugin-syntax-class-properties": "^7.12.13",
				"@babel/plugin-syntax-class-static-block": "^7.14.5",
				"@babel/plugin-syntax-dynamic-import": "^7.8.3",
				"@babel/plugin-syntax-export-namespace-from": "^7.8.3",
				"@babel/plugin-syntax-import-assertions": "^7.24.7",
				"@babel/plugin-syntax-import-attributes": "^7.24.7",
				"@babel/plugin-syntax-import-meta": "^7.10.4",
				"@babel/plugin-syntax-json-strings": "^7.8.3",
				"@babel/plugin-syntax-logical-assignment-operators": "^7.10.4",
				"@babel/plugin-syntax-nullish-coalescing-operator": "^7.8.3",
				"@babel/plugin-syntax-numeric-separator": "^7.10.4",
				"@babel/plugin-syntax-object-rest-spread": "^7.8.3",
				"@babel/plugin-syntax-optional-catch-binding": "^7.8.3",
				"@babel/plugin-syntax-optional-chaining": "^7.8.3",
				"@babel/plugin-syntax-private-property-in-object": "^7.14.5",
				"@babel/plugin-syntax-top-level-await": "^7.14.5",
				"@babel/plugin-syntax-unicode-sets-regex": "^7.18.6",
				"@babel/plugin-transform-arrow-functions": "^7.24.7",
				"@babel/plugin-transform-async-generator-functions": "^7.25.0",
				"@babel/plugin-transform-async-to-generator": "^7.24.7",
				"@babel/plugin-transform-block-scoped-functions": "^7.24.7",
				"@babel/plugin-transform-block-scoping": "^7.25.0",
				"@babel/plugin-transform-class-properties": "^7.24.7",
				"@babel/plugin-transform-class-static-block": "^7.24.7",
				"@babel/plugin-transform-classes": "^7.25.0",
				"@babel/plugin-transform-computed-properties": "^7.24.7",
				"@babel/plugin-transform-destructuring": "^7.24.8",
				"@babel/plugin-transform-dotall-regex": "^7.24.7",
				"@babel/plugin-transform-duplicate-keys": "^7.24.7",
				"@babel/plugin-transform-duplicate-named-capturing-groups-regex": "^7.25.0",
				"@babel/plugin-transform-dynamic-import": "^7.24.7",
				"@babel/plugin-transform-exponentiation-operator": "^7.24.7",
				"@babel/plugin-transform-export-namespace-from": "^7.24.7",
				"@babel/plugin-transform-for-of": "^7.24.7",
				"@babel/plugin-transform-function-name": "^7.25.1",
				"@babel/plugin-transform-json-strings": "^7.24.7",
				"@babel/plugin-transform-literals": "^7.25.2",
				"@babel/plugin-transform-logical-assignment-operators": "^7.24.7",
				"@babel/plugin-transform-member-expression-literals": "^7.24.7",
				"@babel/plugin-transform-modules-amd": "^7.24.7",
				"@babel/plugin-transform-modules-commonjs": "^7.24.8",
				"@babel/plugin-transform-modules-systemjs": "^7.25.0",
				"@babel/plugin-transform-modules-umd": "^7.24.7",
				"@babel/plugin-transform-named-capturing-groups-regex": "^7.24.7",
				"@babel/plugin-transform-new-target": "^7.24.7",
				"@babel/plugin-transform-nullish-coalescing-operator": "^7.24.7",
				"@babel/plugin-transform-numeric-separator": "^7.24.7",
				"@babel/plugin-transform-object-rest-spread": "^7.24.7",
				"@babel/plugin-transform-object-super": "^7.24.7",
				"@babel/plugin-transform-optional-catch-binding": "^7.24.7",
				"@babel/plugin-transform-optional-chaining": "^7.24.8",
				"@babel/plugin-transform-parameters": "^7.24.7",
				"@babel/plugin-transform-private-methods": "^7.24.7",
				"@babel/plugin-transform-private-property-in-object": "^7.24.7",
				"@babel/plugin-transform-property-literals": "^7.24.7",
				"@babel/plugin-transform-regenerator": "^7.24.7",
				"@babel/plugin-transform-reserved-words": "^7.24.7",
				"@babel/plugin-transform-shorthand-properties": "^7.24.7",
				"@babel/plugin-transform-spread": "^7.24.7",
				"@babel/plugin-transform-sticky-regex": "^7.24.7",
				"@babel/plugin-transform-template-literals": "^7.24.7",
				"@babel/plugin-transform-typeof-symbol": "^7.24.8",
				"@babel/plugin-transform-unicode-escapes": "^7.24.7",
				"@babel/plugin-transform-unicode-property-regex": "^7.24.7",
				"@babel/plugin-transform-unicode-regex": "^7.24.7",
				"@babel/plugin-transform-unicode-sets-regex": "^7.24.7",
				"@babel/preset-modules": "0.1.6-no-external-plugins",
				"babel-plugin-polyfill-corejs2": "^0.4.10",
				"babel-plugin-polyfill-corejs3": "^0.10.4",
				"babel-plugin-polyfill-regenerator": "^0.6.1",
				"core-js-compat": "^3.37.1",
				"semver": "^6.3.1"
			},
			"engines": {
				"node": ">=6.9.0"
			},
			"peerDependencies": {
				"@babel/core": "^7.0.0-0"
			}
		},
		"node_modules/@babel/preset-env/node_modules/semver": {
			"version": "6.3.1",
			"resolved": "https://registry.npmjs.org/semver/-/semver-6.3.1.tgz",
			"integrity": "sha512-BR7VvDCVHO+q2xBEWskxS6DJE1qRnb7DxzUrogb71CWoSficBxYsiAGd+Kl0mmq/MprG9yArRkyrQxTO6XjMzA==",
			"dev": true,
			"license": "ISC",
			"bin": {
				"semver": "bin/semver.js"
			}
		},
		"node_modules/@babel/preset-modules": {
			"version": "0.1.6-no-external-plugins",
			"resolved": "https://registry.npmjs.org/@babel/preset-modules/-/preset-modules-0.1.6-no-external-plugins.tgz",
			"integrity": "sha512-HrcgcIESLm9aIR842yhJ5RWan/gebQUJ6E/E5+rf0y9o6oj7w0Br+sWuL6kEQ/o/AdfvR1Je9jG18/gnpwjEyA==",
			"dev": true,
			"license": "MIT",
			"dependencies": {
				"@babel/helper-plugin-utils": "^7.0.0",
				"@babel/types": "^7.4.4",
				"esutils": "^2.0.2"
			},
			"peerDependencies": {
				"@babel/core": "^7.0.0-0 || ^8.0.0-0 <8.0.0"
			}
		},
		"node_modules/@babel/regjsgen": {
			"version": "0.8.0",
			"resolved": "https://registry.npmjs.org/@babel/regjsgen/-/regjsgen-0.8.0.tgz",
			"integrity": "sha512-x/rqGMdzj+fWZvCOYForTghzbtqPDZ5gPwaoNGHdgDfF2QA/XZbCBp4Moo5scrkAMPhB7z26XM/AaHuIJdgauA==",
			"dev": true,
			"license": "MIT"
		},
		"node_modules/@babel/runtime": {
			"version": "7.25.0",
			"resolved": "https://registry.npmjs.org/@babel/runtime/-/runtime-7.25.0.tgz",
			"integrity": "sha512-7dRy4DwXwtzBrPbZflqxnvfxLF8kdZXPkhymtDeFoFqE6ldzjQFgYTtYIFARcLEYDrqfBfYcZt1WqFxRoyC9Rw==",
			"dev": true,
			"license": "MIT",
			"dependencies": {
				"regenerator-runtime": "^0.14.0"
			},
			"engines": {
				"node": ">=6.9.0"
			}
		},
		"node_modules/@babel/template": {
			"version": "7.25.0",
			"resolved": "https://registry.npmjs.org/@babel/template/-/template-7.25.0.tgz",
			"integrity": "sha512-aOOgh1/5XzKvg1jvVz7AVrx2piJ2XBi227DHmbY6y+bM9H2FlN+IfecYu4Xl0cNiiVejlsCri89LUsbj8vJD9Q==",
			"dev": true,
			"license": "MIT",
			"dependencies": {
				"@babel/code-frame": "^7.24.7",
				"@babel/parser": "^7.25.0",
				"@babel/types": "^7.25.0"
			},
			"engines": {
				"node": ">=6.9.0"
			}
		},
		"node_modules/@babel/traverse": {
			"version": "7.25.6",
			"resolved": "https://registry.npmjs.org/@babel/traverse/-/traverse-7.25.6.tgz",
			"integrity": "sha512-9Vrcx5ZW6UwK5tvqsj0nGpp/XzqthkT0dqIc9g1AdtygFToNtTF67XzYS//dm+SAK9cp3B9R4ZO/46p63SCjlQ==",
			"dev": true,
			"license": "MIT",
			"dependencies": {
				"@babel/code-frame": "^7.24.7",
				"@babel/generator": "^7.25.6",
				"@babel/parser": "^7.25.6",
				"@babel/template": "^7.25.0",
				"@babel/types": "^7.25.6",
				"debug": "^4.3.1",
				"globals": "^11.1.0"
			},
			"engines": {
				"node": ">=6.9.0"
			}
		},
		"node_modules/@babel/traverse/node_modules/@babel/generator": {
			"version": "7.25.6",
			"resolved": "https://registry.npmjs.org/@babel/generator/-/generator-7.25.6.tgz",
			"integrity": "sha512-VPC82gr1seXOpkjAAKoLhP50vx4vGNlF4msF64dSFq1P8RfB+QAuJWGHPXXPc8QyfVWwwB/TNNU4+ayZmHNbZw==",
			"dev": true,
			"license": "MIT",
			"dependencies": {
				"@babel/types": "^7.25.6",
				"@jridgewell/gen-mapping": "^0.3.5",
				"@jridgewell/trace-mapping": "^0.3.25",
				"jsesc": "^2.5.1"
			},
			"engines": {
				"node": ">=6.9.0"
			}
		},
		"node_modules/@babel/types": {
			"version": "7.25.6",
			"resolved": "https://registry.npmjs.org/@babel/types/-/types-7.25.6.tgz",
			"integrity": "sha512-/l42B1qxpG6RdfYf343Uw1vmDjeNhneUXtzhojE7pDgfpEypmRhI6j1kr17XCVv4Cgl9HdAiQY2x0GwKm7rWCw==",
			"dev": true,
			"license": "MIT",
			"dependencies": {
				"@babel/helper-string-parser": "^7.24.8",
				"@babel/helper-validator-identifier": "^7.24.7",
				"to-fast-properties": "^2.0.0"
			},
			"engines": {
				"node": ">=6.9.0"
			}
		},
		"node_modules/@discoveryjs/json-ext": {
			"version": "0.6.1",
			"resolved": "https://registry.npmjs.org/@discoveryjs/json-ext/-/json-ext-0.6.1.tgz",
			"integrity": "sha512-boghen8F0Q8D+0/Q1/1r6DUEieUJ8w2a1gIknExMSHBsJFOr2+0KUfHiVYBvucPwl3+RU5PFBK833FjFCh3BhA==",
			"dev": true,
			"license": "MIT",
			"engines": {
				"node": ">=14.17.0"
			}
		},
		"node_modules/@esbuild/aix-ppc64": {
			"version": "0.23.0",
			"resolved": "https://registry.npmjs.org/@esbuild/aix-ppc64/-/aix-ppc64-0.23.0.tgz",
			"integrity": "sha512-3sG8Zwa5fMcA9bgqB8AfWPQ+HFke6uD3h1s3RIwUNK8EG7a4buxvuFTs3j1IMs2NXAk9F30C/FF4vxRgQCcmoQ==",
			"cpu": [
				"ppc64"
			],
			"dev": true,
			"license": "MIT",
			"optional": true,
			"os": [
				"aix"
			],
			"engines": {
				"node": ">=18"
			}
		},
		"node_modules/@esbuild/android-arm": {
			"version": "0.23.0",
			"resolved": "https://registry.npmjs.org/@esbuild/android-arm/-/android-arm-0.23.0.tgz",
			"integrity": "sha512-+KuOHTKKyIKgEEqKbGTK8W7mPp+hKinbMBeEnNzjJGyFcWsfrXjSTNluJHCY1RqhxFurdD8uNXQDei7qDlR6+g==",
			"cpu": [
				"arm"
			],
			"dev": true,
			"license": "MIT",
			"optional": true,
			"os": [
				"android"
			],
			"engines": {
				"node": ">=18"
			}
		},
		"node_modules/@esbuild/android-arm64": {
			"version": "0.23.0",
			"resolved": "https://registry.npmjs.org/@esbuild/android-arm64/-/android-arm64-0.23.0.tgz",
			"integrity": "sha512-EuHFUYkAVfU4qBdyivULuu03FhJO4IJN9PGuABGrFy4vUuzk91P2d+npxHcFdpUnfYKy0PuV+n6bKIpHOB3prQ==",
			"cpu": [
				"arm64"
			],
			"dev": true,
			"license": "MIT",
			"optional": true,
			"os": [
				"android"
			],
			"engines": {
				"node": ">=18"
			}
		},
		"node_modules/@esbuild/android-x64": {
			"version": "0.23.0",
			"resolved": "https://registry.npmjs.org/@esbuild/android-x64/-/android-x64-0.23.0.tgz",
			"integrity": "sha512-WRrmKidLoKDl56LsbBMhzTTBxrsVwTKdNbKDalbEZr0tcsBgCLbEtoNthOW6PX942YiYq8HzEnb4yWQMLQuipQ==",
			"cpu": [
				"x64"
			],
			"dev": true,
			"license": "MIT",
			"optional": true,
			"os": [
				"android"
			],
			"engines": {
				"node": ">=18"
			}
		},
		"node_modules/@esbuild/darwin-arm64": {
			"version": "0.23.0",
			"resolved": "https://registry.npmjs.org/@esbuild/darwin-arm64/-/darwin-arm64-0.23.0.tgz",
			"integrity": "sha512-YLntie/IdS31H54Ogdn+v50NuoWF5BDkEUFpiOChVa9UnKpftgwzZRrI4J132ETIi+D8n6xh9IviFV3eXdxfow==",
			"cpu": [
				"arm64"
			],
			"dev": true,
			"license": "MIT",
			"optional": true,
			"os": [
				"darwin"
			],
			"engines": {
				"node": ">=18"
			}
		},
		"node_modules/@esbuild/darwin-x64": {
			"version": "0.23.0",
			"resolved": "https://registry.npmjs.org/@esbuild/darwin-x64/-/darwin-x64-0.23.0.tgz",
			"integrity": "sha512-IMQ6eme4AfznElesHUPDZ+teuGwoRmVuuixu7sv92ZkdQcPbsNHzutd+rAfaBKo8YK3IrBEi9SLLKWJdEvJniQ==",
			"cpu": [
				"x64"
			],
			"dev": true,
			"license": "MIT",
			"optional": true,
			"os": [
				"darwin"
			],
			"engines": {
				"node": ">=18"
			}
		},
		"node_modules/@esbuild/freebsd-arm64": {
			"version": "0.23.0",
			"resolved": "https://registry.npmjs.org/@esbuild/freebsd-arm64/-/freebsd-arm64-0.23.0.tgz",
			"integrity": "sha512-0muYWCng5vqaxobq6LB3YNtevDFSAZGlgtLoAc81PjUfiFz36n4KMpwhtAd4he8ToSI3TGyuhyx5xmiWNYZFyw==",
			"cpu": [
				"arm64"
			],
			"dev": true,
			"license": "MIT",
			"optional": true,
			"os": [
				"freebsd"
			],
			"engines": {
				"node": ">=18"
			}
		},
		"node_modules/@esbuild/freebsd-x64": {
			"version": "0.23.0",
			"resolved": "https://registry.npmjs.org/@esbuild/freebsd-x64/-/freebsd-x64-0.23.0.tgz",
			"integrity": "sha512-XKDVu8IsD0/q3foBzsXGt/KjD/yTKBCIwOHE1XwiXmrRwrX6Hbnd5Eqn/WvDekddK21tfszBSrE/WMaZh+1buQ==",
			"cpu": [
				"x64"
			],
			"dev": true,
			"license": "MIT",
			"optional": true,
			"os": [
				"freebsd"
			],
			"engines": {
				"node": ">=18"
			}
		},
		"node_modules/@esbuild/linux-arm": {
			"version": "0.23.0",
			"resolved": "https://registry.npmjs.org/@esbuild/linux-arm/-/linux-arm-0.23.0.tgz",
			"integrity": "sha512-SEELSTEtOFu5LPykzA395Mc+54RMg1EUgXP+iw2SJ72+ooMwVsgfuwXo5Fn0wXNgWZsTVHwY2cg4Vi/bOD88qw==",
			"cpu": [
				"arm"
			],
			"dev": true,
			"license": "MIT",
			"optional": true,
			"os": [
				"linux"
			],
			"engines": {
				"node": ">=18"
			}
		},
		"node_modules/@esbuild/linux-arm64": {
			"version": "0.23.0",
			"resolved": "https://registry.npmjs.org/@esbuild/linux-arm64/-/linux-arm64-0.23.0.tgz",
			"integrity": "sha512-j1t5iG8jE7BhonbsEg5d9qOYcVZv/Rv6tghaXM/Ug9xahM0nX/H2gfu6X6z11QRTMT6+aywOMA8TDkhPo8aCGw==",
			"cpu": [
				"arm64"
			],
			"dev": true,
			"license": "MIT",
			"optional": true,
			"os": [
				"linux"
			],
			"engines": {
				"node": ">=18"
			}
		},
		"node_modules/@esbuild/linux-ia32": {
			"version": "0.23.0",
			"resolved": "https://registry.npmjs.org/@esbuild/linux-ia32/-/linux-ia32-0.23.0.tgz",
			"integrity": "sha512-P7O5Tkh2NbgIm2R6x1zGJJsnacDzTFcRWZyTTMgFdVit6E98LTxO+v8LCCLWRvPrjdzXHx9FEOA8oAZPyApWUA==",
			"cpu": [
				"ia32"
			],
			"dev": true,
			"license": "MIT",
			"optional": true,
			"os": [
				"linux"
			],
			"engines": {
				"node": ">=18"
			}
		},
		"node_modules/@esbuild/linux-loong64": {
			"version": "0.23.0",
			"resolved": "https://registry.npmjs.org/@esbuild/linux-loong64/-/linux-loong64-0.23.0.tgz",
			"integrity": "sha512-InQwepswq6urikQiIC/kkx412fqUZudBO4SYKu0N+tGhXRWUqAx+Q+341tFV6QdBifpjYgUndV1hhMq3WeJi7A==",
			"cpu": [
				"loong64"
			],
			"dev": true,
			"license": "MIT",
			"optional": true,
			"os": [
				"linux"
			],
			"engines": {
				"node": ">=18"
			}
		},
		"node_modules/@esbuild/linux-mips64el": {
			"version": "0.23.0",
			"resolved": "https://registry.npmjs.org/@esbuild/linux-mips64el/-/linux-mips64el-0.23.0.tgz",
			"integrity": "sha512-J9rflLtqdYrxHv2FqXE2i1ELgNjT+JFURt/uDMoPQLcjWQA5wDKgQA4t/dTqGa88ZVECKaD0TctwsUfHbVoi4w==",
			"cpu": [
				"mips64el"
			],
			"dev": true,
			"license": "MIT",
			"optional": true,
			"os": [
				"linux"
			],
			"engines": {
				"node": ">=18"
			}
		},
		"node_modules/@esbuild/linux-ppc64": {
			"version": "0.23.0",
			"resolved": "https://registry.npmjs.org/@esbuild/linux-ppc64/-/linux-ppc64-0.23.0.tgz",
			"integrity": "sha512-cShCXtEOVc5GxU0fM+dsFD10qZ5UpcQ8AM22bYj0u/yaAykWnqXJDpd77ublcX6vdDsWLuweeuSNZk4yUxZwtw==",
			"cpu": [
				"ppc64"
			],
			"dev": true,
			"license": "MIT",
			"optional": true,
			"os": [
				"linux"
			],
			"engines": {
				"node": ">=18"
			}
		},
		"node_modules/@esbuild/linux-riscv64": {
			"version": "0.23.0",
			"resolved": "https://registry.npmjs.org/@esbuild/linux-riscv64/-/linux-riscv64-0.23.0.tgz",
			"integrity": "sha512-HEtaN7Y5UB4tZPeQmgz/UhzoEyYftbMXrBCUjINGjh3uil+rB/QzzpMshz3cNUxqXN7Vr93zzVtpIDL99t9aRw==",
			"cpu": [
				"riscv64"
			],
			"dev": true,
			"license": "MIT",
			"optional": true,
			"os": [
				"linux"
			],
			"engines": {
				"node": ">=18"
			}
		},
		"node_modules/@esbuild/linux-s390x": {
			"version": "0.23.0",
			"resolved": "https://registry.npmjs.org/@esbuild/linux-s390x/-/linux-s390x-0.23.0.tgz",
			"integrity": "sha512-WDi3+NVAuyjg/Wxi+o5KPqRbZY0QhI9TjrEEm+8dmpY9Xir8+HE/HNx2JoLckhKbFopW0RdO2D72w8trZOV+Wg==",
			"cpu": [
				"s390x"
			],
			"dev": true,
			"license": "MIT",
			"optional": true,
			"os": [
				"linux"
			],
			"engines": {
				"node": ">=18"
			}
		},
		"node_modules/@esbuild/linux-x64": {
			"version": "0.23.0",
			"resolved": "https://registry.npmjs.org/@esbuild/linux-x64/-/linux-x64-0.23.0.tgz",
			"integrity": "sha512-a3pMQhUEJkITgAw6e0bWA+F+vFtCciMjW/LPtoj99MhVt+Mfb6bbL9hu2wmTZgNd994qTAEw+U/r6k3qHWWaOQ==",
			"cpu": [
				"x64"
			],
			"dev": true,
			"license": "MIT",
			"optional": true,
			"os": [
				"linux"
			],
			"engines": {
				"node": ">=18"
			}
		},
		"node_modules/@esbuild/netbsd-x64": {
			"version": "0.23.0",
			"resolved": "https://registry.npmjs.org/@esbuild/netbsd-x64/-/netbsd-x64-0.23.0.tgz",
			"integrity": "sha512-cRK+YDem7lFTs2Q5nEv/HHc4LnrfBCbH5+JHu6wm2eP+d8OZNoSMYgPZJq78vqQ9g+9+nMuIsAO7skzphRXHyw==",
			"cpu": [
				"x64"
			],
			"dev": true,
			"license": "MIT",
			"optional": true,
			"os": [
				"netbsd"
			],
			"engines": {
				"node": ">=18"
			}
		},
		"node_modules/@esbuild/openbsd-arm64": {
			"version": "0.23.0",
			"resolved": "https://registry.npmjs.org/@esbuild/openbsd-arm64/-/openbsd-arm64-0.23.0.tgz",
			"integrity": "sha512-suXjq53gERueVWu0OKxzWqk7NxiUWSUlrxoZK7usiF50C6ipColGR5qie2496iKGYNLhDZkPxBI3erbnYkU0rQ==",
			"cpu": [
				"arm64"
			],
			"dev": true,
			"license": "MIT",
			"optional": true,
			"os": [
				"openbsd"
			],
			"engines": {
				"node": ">=18"
			}
		},
		"node_modules/@esbuild/openbsd-x64": {
			"version": "0.23.0",
			"resolved": "https://registry.npmjs.org/@esbuild/openbsd-x64/-/openbsd-x64-0.23.0.tgz",
			"integrity": "sha512-6p3nHpby0DM/v15IFKMjAaayFhqnXV52aEmv1whZHX56pdkK+MEaLoQWj+H42ssFarP1PcomVhbsR4pkz09qBg==",
			"cpu": [
				"x64"
			],
			"dev": true,
			"license": "MIT",
			"optional": true,
			"os": [
				"openbsd"
			],
			"engines": {
				"node": ">=18"
			}
		},
		"node_modules/@esbuild/sunos-x64": {
			"version": "0.23.0",
			"resolved": "https://registry.npmjs.org/@esbuild/sunos-x64/-/sunos-x64-0.23.0.tgz",
			"integrity": "sha512-BFelBGfrBwk6LVrmFzCq1u1dZbG4zy/Kp93w2+y83Q5UGYF1d8sCzeLI9NXjKyujjBBniQa8R8PzLFAUrSM9OA==",
			"cpu": [
				"x64"
			],
			"dev": true,
			"license": "MIT",
			"optional": true,
			"os": [
				"sunos"
			],
			"engines": {
				"node": ">=18"
			}
		},
		"node_modules/@esbuild/win32-arm64": {
			"version": "0.23.0",
			"resolved": "https://registry.npmjs.org/@esbuild/win32-arm64/-/win32-arm64-0.23.0.tgz",
			"integrity": "sha512-lY6AC8p4Cnb7xYHuIxQ6iYPe6MfO2CC43XXKo9nBXDb35krYt7KGhQnOkRGar5psxYkircpCqfbNDB4uJbS2jQ==",
			"cpu": [
				"arm64"
			],
			"dev": true,
			"license": "MIT",
			"optional": true,
			"os": [
				"win32"
			],
			"engines": {
				"node": ">=18"
			}
		},
		"node_modules/@esbuild/win32-ia32": {
			"version": "0.23.0",
			"resolved": "https://registry.npmjs.org/@esbuild/win32-ia32/-/win32-ia32-0.23.0.tgz",
			"integrity": "sha512-7L1bHlOTcO4ByvI7OXVI5pNN6HSu6pUQq9yodga8izeuB1KcT2UkHaH6118QJwopExPn0rMHIseCTx1CRo/uNA==",
			"cpu": [
				"ia32"
			],
			"dev": true,
			"license": "MIT",
			"optional": true,
			"os": [
				"win32"
			],
			"engines": {
				"node": ">=18"
			}
		},
		"node_modules/@esbuild/win32-x64": {
			"version": "0.23.0",
			"resolved": "https://registry.npmjs.org/@esbuild/win32-x64/-/win32-x64-0.23.0.tgz",
			"integrity": "sha512-Arm+WgUFLUATuoxCJcahGuk6Yj9Pzxd6l11Zb/2aAuv5kWWvvfhLFo2fni4uSK5vzlUdCGZ/BdV5tH8klj8p8g==",
			"cpu": [
				"x64"
			],
			"dev": true,
			"license": "MIT",
			"optional": true,
			"os": [
				"win32"
			],
			"engines": {
				"node": ">=18"
			}
		},
		"node_modules/@floating-ui/core": {
			"version": "1.6.7",
			"resolved": "https://registry.npmjs.org/@floating-ui/core/-/core-1.6.7.tgz",
			"integrity": "sha512-yDzVT/Lm101nQ5TCVeK65LtdN7Tj4Qpr9RTXJ2vPFLqtLxwOrpoxAHAJI8J3yYWUc40J0BDBheaitK5SJmno2g==",
			"dev": true,
			"license": "MIT",
			"dependencies": {
				"@floating-ui/utils": "^0.2.7"
			}
		},
		"node_modules/@floating-ui/dom": {
			"version": "1.6.10",
			"resolved": "https://registry.npmjs.org/@floating-ui/dom/-/dom-1.6.10.tgz",
			"integrity": "sha512-fskgCFv8J8OamCmyun8MfjB1Olfn+uZKjOKZ0vhYF3gRmEUXcGOjxWL8bBr7i4kIuPZ2KD2S3EUIOxnjC8kl2A==",
			"dev": true,
			"license": "MIT",
			"dependencies": {
				"@floating-ui/core": "^1.6.0",
				"@floating-ui/utils": "^0.2.7"
			}
		},
		"node_modules/@floating-ui/utils": {
			"version": "0.2.7",
			"resolved": "https://registry.npmjs.org/@floating-ui/utils/-/utils-0.2.7.tgz",
			"integrity": "sha512-X8R8Oj771YRl/w+c1HqAC1szL8zWQRwFvgDwT129k9ACdBoud/+/rX9V0qiMl6LWUdP9voC2nDVZYPMQQsb6eA==",
			"dev": true,
			"license": "MIT"
		},
		"node_modules/@inquirer/checkbox": {
			"version": "2.4.7",
			"resolved": "https://registry.npmjs.org/@inquirer/checkbox/-/checkbox-2.4.7.tgz",
			"integrity": "sha512-5YwCySyV1UEgqzz34gNsC38eKxRBtlRDpJLlKcRtTjlYA/yDKuc1rfw+hjw+2WJxbAZtaDPsRl5Zk7J14SBoBw==",
			"dev": true,
			"license": "MIT",
			"dependencies": {
				"@inquirer/core": "^9.0.10",
				"@inquirer/figures": "^1.0.5",
				"@inquirer/type": "^1.5.2",
				"ansi-escapes": "^4.3.2",
				"yoctocolors-cjs": "^2.1.2"
			},
			"engines": {
				"node": ">=18"
			}
		},
		"node_modules/@inquirer/confirm": {
			"version": "3.1.22",
			"resolved": "https://registry.npmjs.org/@inquirer/confirm/-/confirm-3.1.22.tgz",
			"integrity": "sha512-gsAKIOWBm2Q87CDfs9fEo7wJT3fwWIJfnDGMn9Qy74gBnNFOACDNfhUzovubbJjWnKLGBln7/NcSmZwj5DuEXg==",
			"dev": true,
			"license": "MIT",
			"dependencies": {
				"@inquirer/core": "^9.0.10",
				"@inquirer/type": "^1.5.2"
			},
			"engines": {
				"node": ">=18"
			}
		},
		"node_modules/@inquirer/core": {
			"version": "9.0.10",
			"resolved": "https://registry.npmjs.org/@inquirer/core/-/core-9.0.10.tgz",
			"integrity": "sha512-TdESOKSVwf6+YWDz8GhS6nKscwzkIyakEzCLJ5Vh6O3Co2ClhCJ0A4MG909MUWfaWdpJm7DE45ii51/2Kat9tA==",
			"dev": true,
			"license": "MIT",
			"dependencies": {
				"@inquirer/figures": "^1.0.5",
				"@inquirer/type": "^1.5.2",
				"@types/mute-stream": "^0.0.4",
				"@types/node": "^22.1.0",
				"@types/wrap-ansi": "^3.0.0",
				"ansi-escapes": "^4.3.2",
				"cli-spinners": "^2.9.2",
				"cli-width": "^4.1.0",
				"mute-stream": "^1.0.0",
				"signal-exit": "^4.1.0",
				"strip-ansi": "^6.0.1",
				"wrap-ansi": "^6.2.0",
				"yoctocolors-cjs": "^2.1.2"
			},
			"engines": {
				"node": ">=18"
			}
		},
		"node_modules/@inquirer/editor": {
			"version": "2.1.22",
			"resolved": "https://registry.npmjs.org/@inquirer/editor/-/editor-2.1.22.tgz",
			"integrity": "sha512-K1QwTu7GCK+nKOVRBp5HY9jt3DXOfPGPr6WRDrPImkcJRelG9UTx2cAtK1liXmibRrzJlTWOwqgWT3k2XnS62w==",
			"dev": true,
			"license": "MIT",
			"dependencies": {
				"@inquirer/core": "^9.0.10",
				"@inquirer/type": "^1.5.2",
				"external-editor": "^3.1.0"
			},
			"engines": {
				"node": ">=18"
			}
		},
		"node_modules/@inquirer/expand": {
			"version": "2.1.22",
			"resolved": "https://registry.npmjs.org/@inquirer/expand/-/expand-2.1.22.tgz",
			"integrity": "sha512-wTZOBkzH+ItPuZ3ZPa9lynBsdMp6kQ9zbjVPYEtSBG7UulGjg2kQiAnUjgyG4SlntpTce5bOmXAPvE4sguXjpA==",
			"dev": true,
			"license": "MIT",
			"dependencies": {
				"@inquirer/core": "^9.0.10",
				"@inquirer/type": "^1.5.2",
				"yoctocolors-cjs": "^2.1.2"
			},
			"engines": {
				"node": ">=18"
			}
		},
		"node_modules/@inquirer/figures": {
			"version": "1.0.5",
			"resolved": "https://registry.npmjs.org/@inquirer/figures/-/figures-1.0.5.tgz",
			"integrity": "sha512-79hP/VWdZ2UVc9bFGJnoQ/lQMpL74mGgzSYX1xUqCVk7/v73vJCMw1VuyWN1jGkZ9B3z7THAbySqGbCNefcjfA==",
			"dev": true,
			"license": "MIT",
			"engines": {
				"node": ">=18"
			}
		},
		"node_modules/@inquirer/input": {
			"version": "2.2.9",
			"resolved": "https://registry.npmjs.org/@inquirer/input/-/input-2.2.9.tgz",
			"integrity": "sha512-7Z6N+uzkWM7+xsE+3rJdhdG/+mQgejOVqspoW+w0AbSZnL6nq5tGMEVASaYVWbkoSzecABWwmludO2evU3d31g==",
			"dev": true,
			"license": "MIT",
			"dependencies": {
				"@inquirer/core": "^9.0.10",
				"@inquirer/type": "^1.5.2"
			},
			"engines": {
				"node": ">=18"
			}
		},
		"node_modules/@inquirer/number": {
			"version": "1.0.10",
			"resolved": "https://registry.npmjs.org/@inquirer/number/-/number-1.0.10.tgz",
			"integrity": "sha512-kWTxRF8zHjQOn2TJs+XttLioBih6bdc5CcosXIzZsrTY383PXI35DuhIllZKu7CdXFi2rz2BWPN9l0dPsvrQOA==",
			"dev": true,
			"license": "MIT",
			"dependencies": {
				"@inquirer/core": "^9.0.10",
				"@inquirer/type": "^1.5.2"
			},
			"engines": {
				"node": ">=18"
			}
		},
		"node_modules/@inquirer/password": {
			"version": "2.1.22",
			"resolved": "https://registry.npmjs.org/@inquirer/password/-/password-2.1.22.tgz",
			"integrity": "sha512-5Fxt1L9vh3rAKqjYwqsjU4DZsEvY/2Gll+QkqR4yEpy6wvzLxdSgFhUcxfDAOtO4BEoTreWoznC0phagwLU5Kw==",
			"dev": true,
			"license": "MIT",
			"dependencies": {
				"@inquirer/core": "^9.0.10",
				"@inquirer/type": "^1.5.2",
				"ansi-escapes": "^4.3.2"
			},
			"engines": {
				"node": ">=18"
			}
		},
		"node_modules/@inquirer/prompts": {
			"version": "5.3.8",
			"resolved": "https://registry.npmjs.org/@inquirer/prompts/-/prompts-5.3.8.tgz",
			"integrity": "sha512-b2BudQY/Si4Y2a0PdZZL6BeJtl8llgeZa7U2j47aaJSCeAl1e4UI7y8a9bSkO3o/ZbZrgT5muy/34JbsjfIWxA==",
			"dev": true,
			"license": "MIT",
			"dependencies": {
				"@inquirer/checkbox": "^2.4.7",
				"@inquirer/confirm": "^3.1.22",
				"@inquirer/editor": "^2.1.22",
				"@inquirer/expand": "^2.1.22",
				"@inquirer/input": "^2.2.9",
				"@inquirer/number": "^1.0.10",
				"@inquirer/password": "^2.1.22",
				"@inquirer/rawlist": "^2.2.4",
				"@inquirer/search": "^1.0.7",
				"@inquirer/select": "^2.4.7"
			},
			"engines": {
				"node": ">=18"
			}
		},
		"node_modules/@inquirer/rawlist": {
			"version": "2.2.4",
			"resolved": "https://registry.npmjs.org/@inquirer/rawlist/-/rawlist-2.2.4.tgz",
			"integrity": "sha512-pb6w9pWrm7EfnYDgQObOurh2d2YH07+eDo3xQBsNAM2GRhliz6wFXGi1thKQ4bN6B0xDd6C3tBsjdr3obsCl3Q==",
			"dev": true,
			"license": "MIT",
			"dependencies": {
				"@inquirer/core": "^9.0.10",
				"@inquirer/type": "^1.5.2",
				"yoctocolors-cjs": "^2.1.2"
			},
			"engines": {
				"node": ">=18"
			}
		},
		"node_modules/@inquirer/search": {
			"version": "1.0.7",
			"resolved": "https://registry.npmjs.org/@inquirer/search/-/search-1.0.7.tgz",
			"integrity": "sha512-p1wpV+3gd1eST/o5N3yQpYEdFNCzSP0Klrl+5bfD3cTTz8BGG6nf4Z07aBW0xjlKIj1Rp0y3x/X4cZYi6TfcLw==",
			"dev": true,
			"license": "MIT",
			"dependencies": {
				"@inquirer/core": "^9.0.10",
				"@inquirer/figures": "^1.0.5",
				"@inquirer/type": "^1.5.2",
				"yoctocolors-cjs": "^2.1.2"
			},
			"engines": {
				"node": ">=18"
			}
		},
		"node_modules/@inquirer/select": {
			"version": "2.4.7",
			"resolved": "https://registry.npmjs.org/@inquirer/select/-/select-2.4.7.tgz",
			"integrity": "sha512-JH7XqPEkBpNWp3gPCqWqY8ECbyMoFcCZANlL6pV9hf59qK6dGmkOlx1ydyhY+KZ0c5X74+W6Mtp+nm2QX0/MAQ==",
			"dev": true,
			"license": "MIT",
			"dependencies": {
				"@inquirer/core": "^9.0.10",
				"@inquirer/figures": "^1.0.5",
				"@inquirer/type": "^1.5.2",
				"ansi-escapes": "^4.3.2",
				"yoctocolors-cjs": "^2.1.2"
			},
			"engines": {
				"node": ">=18"
			}
		},
		"node_modules/@inquirer/type": {
			"version": "1.5.2",
			"resolved": "https://registry.npmjs.org/@inquirer/type/-/type-1.5.2.tgz",
			"integrity": "sha512-w9qFkumYDCNyDZmNQjf/n6qQuvQ4dMC3BJesY4oF+yr0CxR5vxujflAVeIcS6U336uzi9GM0kAfZlLrZ9UTkpA==",
			"dev": true,
			"license": "MIT",
			"dependencies": {
				"mute-stream": "^1.0.0"
			},
			"engines": {
				"node": ">=18"
			}
		},
		"node_modules/@isaacs/cliui": {
			"version": "8.0.2",
			"resolved": "https://registry.npmjs.org/@isaacs/cliui/-/cliui-8.0.2.tgz",
			"integrity": "sha512-O8jcjabXaleOG9DQ0+ARXWZBTfnP4WNAqzuiJK7ll44AmxGKv/J2M4TPjxjY3znBCfvBXFzucm1twdyFybFqEA==",
			"dev": true,
			"license": "ISC",
			"dependencies": {
				"string-width": "^5.1.2",
				"string-width-cjs": "npm:string-width@^4.2.0",
				"strip-ansi": "^7.0.1",
				"strip-ansi-cjs": "npm:strip-ansi@^6.0.1",
				"wrap-ansi": "^8.1.0",
				"wrap-ansi-cjs": "npm:wrap-ansi@^7.0.0"
			},
			"engines": {
				"node": ">=12"
			}
		},
		"node_modules/@isaacs/cliui/node_modules/ansi-regex": {
			"version": "6.0.1",
			"resolved": "https://registry.npmjs.org/ansi-regex/-/ansi-regex-6.0.1.tgz",
			"integrity": "sha512-n5M855fKb2SsfMIiFFoVrABHJC8QtHwVx+mHWP3QcEqBHYienj5dHSgjbxtC0WEZXYt4wcD6zrQElDPhFuZgfA==",
			"dev": true,
			"license": "MIT",
			"engines": {
				"node": ">=12"
			},
			"funding": {
				"url": "https://github.com/chalk/ansi-regex?sponsor=1"
			}
		},
		"node_modules/@isaacs/cliui/node_modules/ansi-styles": {
			"version": "6.2.1",
			"resolved": "https://registry.npmjs.org/ansi-styles/-/ansi-styles-6.2.1.tgz",
			"integrity": "sha512-bN798gFfQX+viw3R7yrGWRqnrN2oRkEkUjjl4JNn4E8GxxbjtG3FbrEIIY3l8/hrwUwIeCZvi4QuOTP4MErVug==",
			"dev": true,
			"license": "MIT",
			"engines": {
				"node": ">=12"
			},
			"funding": {
				"url": "https://github.com/chalk/ansi-styles?sponsor=1"
			}
		},
		"node_modules/@isaacs/cliui/node_modules/emoji-regex": {
			"version": "9.2.2",
			"resolved": "https://registry.npmjs.org/emoji-regex/-/emoji-regex-9.2.2.tgz",
			"integrity": "sha512-L18DaJsXSUk2+42pv8mLs5jJT2hqFkFE4j21wOmgbUqsZ2hL72NsUU785g9RXgo3s0ZNgVl42TiHp3ZtOv/Vyg==",
			"dev": true,
			"license": "MIT"
		},
		"node_modules/@isaacs/cliui/node_modules/string-width": {
			"version": "5.1.2",
			"resolved": "https://registry.npmjs.org/string-width/-/string-width-5.1.2.tgz",
			"integrity": "sha512-HnLOCR3vjcY8beoNLtcjZ5/nxn2afmME6lhrDrebokqMap+XbeW8n9TXpPDOqdGK5qcI3oT0GKTW6wC7EMiVqA==",
			"dev": true,
			"license": "MIT",
			"dependencies": {
				"eastasianwidth": "^0.2.0",
				"emoji-regex": "^9.2.2",
				"strip-ansi": "^7.0.1"
			},
			"engines": {
				"node": ">=12"
			},
			"funding": {
				"url": "https://github.com/sponsors/sindresorhus"
			}
		},
		"node_modules/@isaacs/cliui/node_modules/strip-ansi": {
			"version": "7.1.0",
			"resolved": "https://registry.npmjs.org/strip-ansi/-/strip-ansi-7.1.0.tgz",
			"integrity": "sha512-iq6eVVI64nQQTRYq2KtEg2d2uU7LElhTJwsH4YzIHZshxlgZms/wIc4VoDQTlG/IvVIrBKG06CrZnp0qv7hkcQ==",
			"dev": true,
			"license": "MIT",
			"dependencies": {
				"ansi-regex": "^6.0.1"
			},
			"engines": {
				"node": ">=12"
			},
			"funding": {
				"url": "https://github.com/chalk/strip-ansi?sponsor=1"
			}
		},
		"node_modules/@isaacs/cliui/node_modules/wrap-ansi": {
			"version": "8.1.0",
			"resolved": "https://registry.npmjs.org/wrap-ansi/-/wrap-ansi-8.1.0.tgz",
			"integrity": "sha512-si7QWI6zUMq56bESFvagtmzMdGOtoxfR+Sez11Mobfc7tm+VkUckk9bW2UeffTGVUbOksxmSw0AA2gs8g71NCQ==",
			"dev": true,
			"license": "MIT",
			"dependencies": {
				"ansi-styles": "^6.1.0",
				"string-width": "^5.0.1",
				"strip-ansi": "^7.0.1"
			},
			"engines": {
				"node": ">=12"
			},
			"funding": {
				"url": "https://github.com/chalk/wrap-ansi?sponsor=1"
			}
		},
		"node_modules/@istanbuljs/schema": {
			"version": "0.1.3",
			"resolved": "https://registry.npmjs.org/@istanbuljs/schema/-/schema-0.1.3.tgz",
			"integrity": "sha512-ZXRY4jNvVgSVQ8DL3LTcakaAtXwTVUxE81hslsyD2AtoXW/wVob10HkOJ1X/pAlcI7D+2YoZKg5do8G/w6RYgA==",
			"dev": true,
			"license": "MIT",
			"engines": {
				"node": ">=8"
			}
		},
		"node_modules/@jridgewell/gen-mapping": {
			"version": "0.3.5",
			"resolved": "https://registry.npmjs.org/@jridgewell/gen-mapping/-/gen-mapping-0.3.5.tgz",
			"integrity": "sha512-IzL8ZoEDIBRWEzlCcRhOaCupYyN5gdIK+Q6fbFdPDg6HqX6jpkItn7DFIpW9LQzXG6Df9sA7+OKnq0qlz/GaQg==",
			"dev": true,
			"license": "MIT",
			"dependencies": {
				"@jridgewell/set-array": "^1.2.1",
				"@jridgewell/sourcemap-codec": "^1.4.10",
				"@jridgewell/trace-mapping": "^0.3.24"
			},
			"engines": {
				"node": ">=6.0.0"
			}
		},
		"node_modules/@jridgewell/resolve-uri": {
			"version": "3.1.2",
			"resolved": "https://registry.npmjs.org/@jridgewell/resolve-uri/-/resolve-uri-3.1.2.tgz",
			"integrity": "sha512-bRISgCIjP20/tbWSPWMEi54QVPRZExkuD9lJL+UIxUKtwVJA8wW1Trb1jMs1RFXo1CBTNZ/5hpC9QvmKWdopKw==",
			"dev": true,
			"license": "MIT",
			"engines": {
				"node": ">=6.0.0"
			}
		},
		"node_modules/@jridgewell/set-array": {
			"version": "1.2.1",
			"resolved": "https://registry.npmjs.org/@jridgewell/set-array/-/set-array-1.2.1.tgz",
			"integrity": "sha512-R8gLRTZeyp03ymzP/6Lil/28tGeGEzhx1q2k703KGWRAI1VdvPIXdG70VJc2pAMw3NA6JKL5hhFu1sJX0Mnn/A==",
			"dev": true,
			"license": "MIT",
			"engines": {
				"node": ">=6.0.0"
			}
		},
		"node_modules/@jridgewell/source-map": {
			"version": "0.3.6",
			"resolved": "https://registry.npmjs.org/@jridgewell/source-map/-/source-map-0.3.6.tgz",
			"integrity": "sha512-1ZJTZebgqllO79ue2bm3rIGud/bOe0pP5BjSRCRxxYkEZS8STV7zN84UBbiYu7jy+eCKSnVIUgoWWE/tt+shMQ==",
			"dev": true,
			"license": "MIT",
			"dependencies": {
				"@jridgewell/gen-mapping": "^0.3.5",
				"@jridgewell/trace-mapping": "^0.3.25"
			}
		},
		"node_modules/@jridgewell/sourcemap-codec": {
			"version": "1.5.0",
			"resolved": "https://registry.npmjs.org/@jridgewell/sourcemap-codec/-/sourcemap-codec-1.5.0.tgz",
			"integrity": "sha512-gv3ZRaISU3fjPAgNsriBRqGWQL6quFx04YMPW/zD8XMLsU32mhCCbfbO6KZFLjvYpCZ8zyDEgqsgf+PwPaM7GQ==",
			"dev": true,
			"license": "MIT"
		},
		"node_modules/@jridgewell/trace-mapping": {
			"version": "0.3.25",
			"resolved": "https://registry.npmjs.org/@jridgewell/trace-mapping/-/trace-mapping-0.3.25.tgz",
			"integrity": "sha512-vNk6aEwybGtawWmy/PzwnGDOjCkLWSD2wqvjGGAgOAwCGWySYXfYoxt00IJkTF+8Lb57DwOb3Aa0o9CApepiYQ==",
			"dev": true,
			"license": "MIT",
			"dependencies": {
				"@jridgewell/resolve-uri": "^3.1.0",
				"@jridgewell/sourcemap-codec": "^1.4.14"
			}
		},
		"node_modules/@jsonjoy.com/base64": {
			"version": "1.1.2",
			"resolved": "https://registry.npmjs.org/@jsonjoy.com/base64/-/base64-1.1.2.tgz",
			"integrity": "sha512-q6XAnWQDIMA3+FTiOYajoYqySkO+JSat0ytXGSuRdq9uXE7o92gzuQwQM14xaCRlBLGq3v5miDGC4vkVTn54xA==",
			"dev": true,
			"license": "Apache-2.0",
			"engines": {
				"node": ">=10.0"
			},
			"funding": {
				"type": "github",
				"url": "https://github.com/sponsors/streamich"
			},
			"peerDependencies": {
				"tslib": "2"
			}
		},
		"node_modules/@jsonjoy.com/json-pack": {
			"version": "1.1.0",
			"resolved": "https://registry.npmjs.org/@jsonjoy.com/json-pack/-/json-pack-1.1.0.tgz",
			"integrity": "sha512-zlQONA+msXPPwHWZMKFVS78ewFczIll5lXiVPwFPCZUsrOKdxc2AvxU1HoNBmMRhqDZUR9HkC3UOm+6pME6Xsg==",
			"dev": true,
			"license": "Apache-2.0",
			"dependencies": {
				"@jsonjoy.com/base64": "^1.1.1",
				"@jsonjoy.com/util": "^1.1.2",
				"hyperdyperid": "^1.2.0",
				"thingies": "^1.20.0"
			},
			"engines": {
				"node": ">=10.0"
			},
			"funding": {
				"type": "github",
				"url": "https://github.com/sponsors/streamich"
			},
			"peerDependencies": {
				"tslib": "2"
			}
		},
		"node_modules/@jsonjoy.com/util": {
			"version": "1.3.0",
			"resolved": "https://registry.npmjs.org/@jsonjoy.com/util/-/util-1.3.0.tgz",
			"integrity": "sha512-Cebt4Vk7k1xHy87kHY7KSPLT77A7Ev7IfOblyLZhtYEhrdQ6fX4EoLq3xOQ3O/DRMEh2ok5nyC180E+ABS8Wmw==",
			"dev": true,
			"license": "Apache-2.0",
			"engines": {
				"node": ">=10.0"
			},
			"funding": {
				"type": "github",
				"url": "https://github.com/sponsors/streamich"
			},
			"peerDependencies": {
				"tslib": "2"
			}
		},
		"node_modules/@leichtgewicht/ip-codec": {
			"version": "2.0.5",
			"resolved": "https://registry.npmjs.org/@leichtgewicht/ip-codec/-/ip-codec-2.0.5.tgz",
			"integrity": "sha512-Vo+PSpZG2/fmgmiNzYK9qWRh8h/CHrwD0mo1h1DzL4yzHNSfWYujGTYsWGreD000gcgmZ7K4Ys6Tx9TxtsKdDw==",
			"dev": true,
			"license": "MIT"
		},
		"node_modules/@listr2/prompt-adapter-inquirer": {
			"version": "2.0.15",
			"resolved": "https://registry.npmjs.org/@listr2/prompt-adapter-inquirer/-/prompt-adapter-inquirer-2.0.15.tgz",
			"integrity": "sha512-MZrGem/Ujjd4cPTLYDfCZK2iKKeiO/8OX13S6jqxldLs0Prf2aGqVlJ77nMBqMv7fzqgXEgjrNHLXcKR8l9lOg==",
			"dev": true,
			"license": "MIT",
			"dependencies": {
				"@inquirer/type": "^1.5.1"
			},
			"engines": {
				"node": ">=18.0.0"
			},
			"peerDependencies": {
				"@inquirer/prompts": ">= 3 < 6"
			}
		},
		"node_modules/@lmdb/lmdb-darwin-arm64": {
			"version": "3.0.13",
			"resolved": "https://registry.npmjs.org/@lmdb/lmdb-darwin-arm64/-/lmdb-darwin-arm64-3.0.13.tgz",
			"integrity": "sha512-uiKPB0Fv6WEEOZjruu9a6wnW/8jrjzlZbxXscMB8kuCJ1k6kHpcBnuvaAWcqhbI7rqX5GKziwWEdD+wi2gNLfA==",
			"cpu": [
				"arm64"
			],
			"dev": true,
			"license": "MIT",
			"optional": true,
			"os": [
				"darwin"
			]
		},
		"node_modules/@lmdb/lmdb-darwin-x64": {
			"version": "3.0.13",
			"resolved": "https://registry.npmjs.org/@lmdb/lmdb-darwin-x64/-/lmdb-darwin-x64-3.0.13.tgz",
			"integrity": "sha512-bEVIIfK5mSQoG1R19qA+fJOvCB+0wVGGnXHT3smchBVahYBdlPn2OsZZKzlHWfb1E+PhLBmYfqB5zQXFP7hJig==",
			"cpu": [
				"x64"
			],
			"dev": true,
			"license": "MIT",
			"optional": true,
			"os": [
				"darwin"
			]
		},
		"node_modules/@lmdb/lmdb-linux-arm": {
			"version": "3.0.13",
			"resolved": "https://registry.npmjs.org/@lmdb/lmdb-linux-arm/-/lmdb-linux-arm-3.0.13.tgz",
			"integrity": "sha512-Yml1KlMzOnXj/tnW7yX8U78iAzTk39aILYvCPbqeewAq1kSzl+w59k/fiVkTBfvDi/oW/5YRxL+Fq+Y1Fr1r2Q==",
			"cpu": [
				"arm"
			],
			"dev": true,
			"license": "MIT",
			"optional": true,
			"os": [
				"linux"
			]
		},
		"node_modules/@lmdb/lmdb-linux-arm64": {
			"version": "3.0.13",
			"resolved": "https://registry.npmjs.org/@lmdb/lmdb-linux-arm64/-/lmdb-linux-arm64-3.0.13.tgz",
			"integrity": "sha512-afbVrsMgZ9dUTNUchFpj5VkmJRxvht/u335jUJ7o23YTbNbnpmXif3VKQGCtnjSh+CZaqm6N3CPG8KO3zwyZ1Q==",
			"cpu": [
				"arm64"
			],
			"dev": true,
			"license": "MIT",
			"optional": true,
			"os": [
				"linux"
			]
		},
		"node_modules/@lmdb/lmdb-linux-x64": {
			"version": "3.0.13",
			"resolved": "https://registry.npmjs.org/@lmdb/lmdb-linux-x64/-/lmdb-linux-x64-3.0.13.tgz",
			"integrity": "sha512-vOtxu0xC0SLdQ2WRXg8Qgd8T32ak4SPqk5zjItRszrJk2BdeXqfGxBJbP7o4aOvSPSmSSv46Lr1EP4HXU8v7Kg==",
			"cpu": [
				"x64"
			],
			"dev": true,
			"license": "MIT",
			"optional": true,
			"os": [
				"linux"
			]
		},
		"node_modules/@lmdb/lmdb-win32-x64": {
			"version": "3.0.13",
			"resolved": "https://registry.npmjs.org/@lmdb/lmdb-win32-x64/-/lmdb-win32-x64-3.0.13.tgz",
			"integrity": "sha512-UCrMJQY/gJnOl3XgbWRZZUvGGBuKy6i0YNSptgMzHBjs+QYDYR1Mt/RLTOPy4fzzves65O1EDmlL//OzEqoLlA==",
			"cpu": [
				"x64"
			],
			"dev": true,
			"license": "MIT",
			"optional": true,
			"os": [
				"win32"
			]
		},
		"node_modules/@msgpackr-extract/msgpackr-extract-darwin-arm64": {
			"version": "3.0.3",
			"resolved": "https://registry.npmjs.org/@msgpackr-extract/msgpackr-extract-darwin-arm64/-/msgpackr-extract-darwin-arm64-3.0.3.tgz",
			"integrity": "sha512-QZHtlVgbAdy2zAqNA9Gu1UpIuI8Xvsd1v8ic6B2pZmeFnFcMWiPLfWXh7TVw4eGEZ/C9TH281KwhVoeQUKbyjw==",
			"cpu": [
				"arm64"
			],
			"dev": true,
			"license": "MIT",
			"optional": true,
			"os": [
				"darwin"
			]
		},
		"node_modules/@msgpackr-extract/msgpackr-extract-darwin-x64": {
			"version": "3.0.3",
			"resolved": "https://registry.npmjs.org/@msgpackr-extract/msgpackr-extract-darwin-x64/-/msgpackr-extract-darwin-x64-3.0.3.tgz",
			"integrity": "sha512-mdzd3AVzYKuUmiWOQ8GNhl64/IoFGol569zNRdkLReh6LRLHOXxU4U8eq0JwaD8iFHdVGqSy4IjFL4reoWCDFw==",
			"cpu": [
				"x64"
			],
			"dev": true,
			"license": "MIT",
			"optional": true,
			"os": [
				"darwin"
			]
		},
		"node_modules/@msgpackr-extract/msgpackr-extract-linux-arm": {
			"version": "3.0.3",
			"resolved": "https://registry.npmjs.org/@msgpackr-extract/msgpackr-extract-linux-arm/-/msgpackr-extract-linux-arm-3.0.3.tgz",
			"integrity": "sha512-fg0uy/dG/nZEXfYilKoRe7yALaNmHoYeIoJuJ7KJ+YyU2bvY8vPv27f7UKhGRpY6euFYqEVhxCFZgAUNQBM3nw==",
			"cpu": [
				"arm"
			],
			"dev": true,
			"license": "MIT",
			"optional": true,
			"os": [
				"linux"
			]
		},
		"node_modules/@msgpackr-extract/msgpackr-extract-linux-arm64": {
			"version": "3.0.3",
			"resolved": "https://registry.npmjs.org/@msgpackr-extract/msgpackr-extract-linux-arm64/-/msgpackr-extract-linux-arm64-3.0.3.tgz",
			"integrity": "sha512-YxQL+ax0XqBJDZiKimS2XQaf+2wDGVa1enVRGzEvLLVFeqa5kx2bWbtcSXgsxjQB7nRqqIGFIcLteF/sHeVtQg==",
			"cpu": [
				"arm64"
			],
			"dev": true,
			"license": "MIT",
			"optional": true,
			"os": [
				"linux"
			]
		},
		"node_modules/@msgpackr-extract/msgpackr-extract-linux-x64": {
			"version": "3.0.3",
			"resolved": "https://registry.npmjs.org/@msgpackr-extract/msgpackr-extract-linux-x64/-/msgpackr-extract-linux-x64-3.0.3.tgz",
			"integrity": "sha512-cvwNfbP07pKUfq1uH+S6KJ7dT9K8WOE4ZiAcsrSes+UY55E/0jLYc+vq+DO7jlmqRb5zAggExKm0H7O/CBaesg==",
			"cpu": [
				"x64"
			],
			"dev": true,
			"license": "MIT",
			"optional": true,
			"os": [
				"linux"
			]
		},
		"node_modules/@msgpackr-extract/msgpackr-extract-win32-x64": {
			"version": "3.0.3",
			"resolved": "https://registry.npmjs.org/@msgpackr-extract/msgpackr-extract-win32-x64/-/msgpackr-extract-win32-x64-3.0.3.tgz",
			"integrity": "sha512-x0fWaQtYp4E6sktbsdAqnehxDgEc/VwM7uLsRCYWaiGu0ykYdZPiS8zCWdnjHwyiumousxfBm4SO31eXqwEZhQ==",
			"cpu": [
				"x64"
			],
			"dev": true,
			"license": "MIT",
			"optional": true,
			"os": [
				"win32"
			]
		},
		"node_modules/@ngtools/webpack": {
			"version": "18.2.2",
			"resolved": "https://registry.npmjs.org/@ngtools/webpack/-/webpack-18.2.2.tgz",
			"integrity": "sha512-YhADmc+lVjLt3kze07A+yLry2yzcghdclu+7D3EDfa6fG2Pk33HK3MY2I0Z0BO+Ivoq7cV7yxm+naR+Od0Y5ng==",
			"dev": true,
			"license": "MIT",
			"engines": {
				"node": "^18.19.1 || ^20.11.1 || >=22.0.0",
				"npm": "^6.11.0 || ^7.5.6 || >=8.0.0",
				"yarn": ">= 1.13.0"
			},
			"peerDependencies": {
				"@angular/compiler-cli": "^18.0.0",
				"typescript": ">=5.4 <5.6",
				"webpack": "^5.54.0"
			}
		},
		"node_modules/@nodelib/fs.scandir": {
			"version": "2.1.5",
			"resolved": "https://registry.npmjs.org/@nodelib/fs.scandir/-/fs.scandir-2.1.5.tgz",
			"integrity": "sha512-vq24Bq3ym5HEQm2NKCr3yXDwjc7vTsEThRDnkp2DK9p1uqLR+DHurm/NOTo0KG7HYHU7eppKZj3MyqYuMBf62g==",
			"dev": true,
			"license": "MIT",
			"dependencies": {
				"@nodelib/fs.stat": "2.0.5",
				"run-parallel": "^1.1.9"
			},
			"engines": {
				"node": ">= 8"
			}
		},
		"node_modules/@nodelib/fs.stat": {
			"version": "2.0.5",
			"resolved": "https://registry.npmjs.org/@nodelib/fs.stat/-/fs.stat-2.0.5.tgz",
			"integrity": "sha512-RkhPPp2zrqDAQA/2jNhnztcPAlv64XdhIp7a7454A5ovI7Bukxgt7MX7udwAu3zg1DcpPU0rz3VV1SeaqvY4+A==",
			"dev": true,
			"license": "MIT",
			"engines": {
				"node": ">= 8"
			}
		},
		"node_modules/@nodelib/fs.walk": {
			"version": "1.2.8",
			"resolved": "https://registry.npmjs.org/@nodelib/fs.walk/-/fs.walk-1.2.8.tgz",
			"integrity": "sha512-oGB+UxlgWcgQkgwo8GcEGwemoTFt3FIO9ababBmaGwXIoBKZ+GTy0pP185beGg7Llih/NSHSV2XAs1lnznocSg==",
			"dev": true,
			"license": "MIT",
			"dependencies": {
				"@nodelib/fs.scandir": "2.1.5",
				"fastq": "^1.6.0"
			},
			"engines": {
				"node": ">= 8"
			}
		},
		"node_modules/@npmcli/agent": {
			"version": "2.2.2",
			"resolved": "https://registry.npmjs.org/@npmcli/agent/-/agent-2.2.2.tgz",
			"integrity": "sha512-OrcNPXdpSl9UX7qPVRWbmWMCSXrcDa2M9DvrbOTj7ao1S4PlqVFYv9/yLKMkrJKZ/V5A/kDBC690or307i26Og==",
			"dev": true,
			"license": "ISC",
			"dependencies": {
				"agent-base": "^7.1.0",
				"http-proxy-agent": "^7.0.0",
				"https-proxy-agent": "^7.0.1",
				"lru-cache": "^10.0.1",
				"socks-proxy-agent": "^8.0.3"
			},
			"engines": {
				"node": "^16.14.0 || >=18.0.0"
			}
		},
		"node_modules/@npmcli/agent/node_modules/lru-cache": {
			"version": "10.4.3",
			"resolved": "https://registry.npmjs.org/lru-cache/-/lru-cache-10.4.3.tgz",
			"integrity": "sha512-JNAzZcXrCt42VGLuYz0zfAzDfAvJWW6AfYlDBQyDV5DClI2m5sAmK+OIO7s59XfsRsWHp02jAJrRadPRGTt6SQ==",
			"dev": true,
			"license": "ISC"
		},
		"node_modules/@npmcli/fs": {
			"version": "3.1.1",
			"resolved": "https://registry.npmjs.org/@npmcli/fs/-/fs-3.1.1.tgz",
			"integrity": "sha512-q9CRWjpHCMIh5sVyefoD1cA7PkvILqCZsnSOEUUivORLjxCO/Irmue2DprETiNgEqktDBZaM1Bi+jrarx1XdCg==",
			"dev": true,
			"license": "ISC",
			"dependencies": {
				"semver": "^7.3.5"
			},
			"engines": {
				"node": "^14.17.0 || ^16.13.0 || >=18.0.0"
			}
		},
		"node_modules/@npmcli/git": {
			"version": "5.0.8",
			"resolved": "https://registry.npmjs.org/@npmcli/git/-/git-5.0.8.tgz",
			"integrity": "sha512-liASfw5cqhjNW9UFd+ruwwdEf/lbOAQjLL2XY2dFW/bkJheXDYZgOyul/4gVvEV4BWkTXjYGmDqMw9uegdbJNQ==",
			"dev": true,
			"license": "ISC",
			"dependencies": {
				"@npmcli/promise-spawn": "^7.0.0",
				"ini": "^4.1.3",
				"lru-cache": "^10.0.1",
				"npm-pick-manifest": "^9.0.0",
				"proc-log": "^4.0.0",
				"promise-inflight": "^1.0.1",
				"promise-retry": "^2.0.1",
				"semver": "^7.3.5",
				"which": "^4.0.0"
			},
			"engines": {
				"node": "^16.14.0 || >=18.0.0"
			}
		},
		"node_modules/@npmcli/git/node_modules/lru-cache": {
			"version": "10.4.3",
			"resolved": "https://registry.npmjs.org/lru-cache/-/lru-cache-10.4.3.tgz",
			"integrity": "sha512-JNAzZcXrCt42VGLuYz0zfAzDfAvJWW6AfYlDBQyDV5DClI2m5sAmK+OIO7s59XfsRsWHp02jAJrRadPRGTt6SQ==",
			"dev": true,
			"license": "ISC"
		},
		"node_modules/@npmcli/installed-package-contents": {
			"version": "2.1.0",
			"resolved": "https://registry.npmjs.org/@npmcli/installed-package-contents/-/installed-package-contents-2.1.0.tgz",
			"integrity": "sha512-c8UuGLeZpm69BryRykLuKRyKFZYJsZSCT4aVY5ds4omyZqJ172ApzgfKJ5eV/r3HgLdUYgFVe54KSFVjKoe27w==",
			"dev": true,
			"license": "ISC",
			"dependencies": {
				"npm-bundled": "^3.0.0",
				"npm-normalize-package-bin": "^3.0.0"
			},
			"bin": {
				"installed-package-contents": "bin/index.js"
			},
			"engines": {
				"node": "^14.17.0 || ^16.13.0 || >=18.0.0"
			}
		},
		"node_modules/@npmcli/node-gyp": {
			"version": "3.0.0",
			"resolved": "https://registry.npmjs.org/@npmcli/node-gyp/-/node-gyp-3.0.0.tgz",
			"integrity": "sha512-gp8pRXC2oOxu0DUE1/M3bYtb1b3/DbJ5aM113+XJBgfXdussRAsX0YOrOhdd8WvnAR6auDBvJomGAkLKA5ydxA==",
			"dev": true,
			"license": "ISC",
			"engines": {
				"node": "^14.17.0 || ^16.13.0 || >=18.0.0"
			}
		},
		"node_modules/@npmcli/package-json": {
			"version": "5.2.0",
			"resolved": "https://registry.npmjs.org/@npmcli/package-json/-/package-json-5.2.0.tgz",
			"integrity": "sha512-qe/kiqqkW0AGtvBjL8TJKZk/eBBSpnJkUWvHdQ9jM2lKHXRYYJuyNpJPlJw3c8QjC2ow6NZYiLExhUaeJelbxQ==",
			"dev": true,
			"license": "ISC",
			"dependencies": {
				"@npmcli/git": "^5.0.0",
				"glob": "^10.2.2",
				"hosted-git-info": "^7.0.0",
				"json-parse-even-better-errors": "^3.0.0",
				"normalize-package-data": "^6.0.0",
				"proc-log": "^4.0.0",
				"semver": "^7.5.3"
			},
			"engines": {
				"node": "^16.14.0 || >=18.0.0"
			}
		},
		"node_modules/@npmcli/promise-spawn": {
			"version": "7.0.2",
			"resolved": "https://registry.npmjs.org/@npmcli/promise-spawn/-/promise-spawn-7.0.2.tgz",
			"integrity": "sha512-xhfYPXoV5Dy4UkY0D+v2KkwvnDfiA/8Mt3sWCGI/hM03NsYIH8ZaG6QzS9x7pje5vHZBZJ2v6VRFVTWACnqcmQ==",
			"dev": true,
			"license": "ISC",
			"dependencies": {
				"which": "^4.0.0"
			},
			"engines": {
				"node": "^16.14.0 || >=18.0.0"
			}
		},
		"node_modules/@npmcli/redact": {
			"version": "2.0.1",
			"resolved": "https://registry.npmjs.org/@npmcli/redact/-/redact-2.0.1.tgz",
			"integrity": "sha512-YgsR5jCQZhVmTJvjduTOIHph0L73pK8xwMVaDY0PatySqVM9AZj93jpoXYSJqfHFxFkN9dmqTw6OiqExsS3LPw==",
			"dev": true,
			"license": "ISC",
			"engines": {
				"node": "^16.14.0 || >=18.0.0"
			}
		},
		"node_modules/@npmcli/run-script": {
			"version": "8.1.0",
			"resolved": "https://registry.npmjs.org/@npmcli/run-script/-/run-script-8.1.0.tgz",
			"integrity": "sha512-y7efHHwghQfk28G2z3tlZ67pLG0XdfYbcVG26r7YIXALRsrVQcTq4/tdenSmdOrEsNahIYA/eh8aEVROWGFUDg==",
			"dev": true,
			"license": "ISC",
			"dependencies": {
				"@npmcli/node-gyp": "^3.0.0",
				"@npmcli/package-json": "^5.0.0",
				"@npmcli/promise-spawn": "^7.0.0",
				"node-gyp": "^10.0.0",
				"proc-log": "^4.0.0",
				"which": "^4.0.0"
			},
			"engines": {
				"node": "^16.14.0 || >=18.0.0"
			}
		},
		"node_modules/@pkgjs/parseargs": {
			"version": "0.11.0",
			"resolved": "https://registry.npmjs.org/@pkgjs/parseargs/-/parseargs-0.11.0.tgz",
			"integrity": "sha512-+1VkjdD0QBLPodGrJUeqarH8VAIvQODIbwh9XpP5Syisf7YoQgsJKPNFoqqLQlu+VQ/tVSshMR6loPMn8U+dPg==",
			"dev": true,
			"license": "MIT",
			"optional": true,
			"engines": {
				"node": ">=14"
			}
		},
		"node_modules/@rollup/rollup-android-arm-eabi": {
			"version": "4.20.0",
			"resolved": "https://registry.npmjs.org/@rollup/rollup-android-arm-eabi/-/rollup-android-arm-eabi-4.20.0.tgz",
			"integrity": "sha512-TSpWzflCc4VGAUJZlPpgAJE1+V60MePDQnBd7PPkpuEmOy8i87aL6tinFGKBFKuEDikYpig72QzdT3QPYIi+oA==",
			"cpu": [
				"arm"
			],
			"dev": true,
			"license": "MIT",
			"optional": true,
			"os": [
				"android"
			]
		},
		"node_modules/@rollup/rollup-android-arm64": {
			"version": "4.20.0",
			"resolved": "https://registry.npmjs.org/@rollup/rollup-android-arm64/-/rollup-android-arm64-4.20.0.tgz",
			"integrity": "sha512-u00Ro/nok7oGzVuh/FMYfNoGqxU5CPWz1mxV85S2w9LxHR8OoMQBuSk+3BKVIDYgkpeOET5yXkx90OYFc+ytpQ==",
			"cpu": [
				"arm64"
			],
			"dev": true,
			"license": "MIT",
			"optional": true,
			"os": [
				"android"
			]
		},
		"node_modules/@rollup/rollup-darwin-arm64": {
			"version": "4.20.0",
			"resolved": "https://registry.npmjs.org/@rollup/rollup-darwin-arm64/-/rollup-darwin-arm64-4.20.0.tgz",
			"integrity": "sha512-uFVfvzvsdGtlSLuL0ZlvPJvl6ZmrH4CBwLGEFPe7hUmf7htGAN+aXo43R/V6LATyxlKVC/m6UsLb7jbG+LG39Q==",
			"cpu": [
				"arm64"
			],
			"dev": true,
			"license": "MIT",
			"optional": true,
			"os": [
				"darwin"
			]
		},
		"node_modules/@rollup/rollup-darwin-x64": {
			"version": "4.20.0",
			"resolved": "https://registry.npmjs.org/@rollup/rollup-darwin-x64/-/rollup-darwin-x64-4.20.0.tgz",
			"integrity": "sha512-xbrMDdlev53vNXexEa6l0LffojxhqDTBeL+VUxuuIXys4x6xyvbKq5XqTXBCEUA8ty8iEJblHvFaWRJTk/icAQ==",
			"cpu": [
				"x64"
			],
			"dev": true,
			"license": "MIT",
			"optional": true,
			"os": [
				"darwin"
			]
		},
		"node_modules/@rollup/rollup-linux-arm-gnueabihf": {
			"version": "4.20.0",
			"resolved": "https://registry.npmjs.org/@rollup/rollup-linux-arm-gnueabihf/-/rollup-linux-arm-gnueabihf-4.20.0.tgz",
			"integrity": "sha512-jMYvxZwGmoHFBTbr12Xc6wOdc2xA5tF5F2q6t7Rcfab68TT0n+r7dgawD4qhPEvasDsVpQi+MgDzj2faOLsZjA==",
			"cpu": [
				"arm"
			],
			"dev": true,
			"license": "MIT",
			"optional": true,
			"os": [
				"linux"
			]
		},
		"node_modules/@rollup/rollup-linux-arm-musleabihf": {
			"version": "4.20.0",
			"resolved": "https://registry.npmjs.org/@rollup/rollup-linux-arm-musleabihf/-/rollup-linux-arm-musleabihf-4.20.0.tgz",
			"integrity": "sha512-1asSTl4HKuIHIB1GcdFHNNZhxAYEdqML/MW4QmPS4G0ivbEcBr1JKlFLKsIRqjSwOBkdItn3/ZDlyvZ/N6KPlw==",
			"cpu": [
				"arm"
			],
			"dev": true,
			"license": "MIT",
			"optional": true,
			"os": [
				"linux"
			]
		},
		"node_modules/@rollup/rollup-linux-arm64-gnu": {
			"version": "4.20.0",
			"resolved": "https://registry.npmjs.org/@rollup/rollup-linux-arm64-gnu/-/rollup-linux-arm64-gnu-4.20.0.tgz",
			"integrity": "sha512-COBb8Bkx56KldOYJfMf6wKeYJrtJ9vEgBRAOkfw6Ens0tnmzPqvlpjZiLgkhg6cA3DGzCmLmmd319pmHvKWWlQ==",
			"cpu": [
				"arm64"
			],
			"dev": true,
			"license": "MIT",
			"optional": true,
			"os": [
				"linux"
			]
		},
		"node_modules/@rollup/rollup-linux-arm64-musl": {
			"version": "4.20.0",
			"resolved": "https://registry.npmjs.org/@rollup/rollup-linux-arm64-musl/-/rollup-linux-arm64-musl-4.20.0.tgz",
			"integrity": "sha512-+it+mBSyMslVQa8wSPvBx53fYuZK/oLTu5RJoXogjk6x7Q7sz1GNRsXWjn6SwyJm8E/oMjNVwPhmNdIjwP135Q==",
			"cpu": [
				"arm64"
			],
			"dev": true,
			"license": "MIT",
			"optional": true,
			"os": [
				"linux"
			]
		},
		"node_modules/@rollup/rollup-linux-powerpc64le-gnu": {
			"version": "4.20.0",
			"resolved": "https://registry.npmjs.org/@rollup/rollup-linux-powerpc64le-gnu/-/rollup-linux-powerpc64le-gnu-4.20.0.tgz",
			"integrity": "sha512-yAMvqhPfGKsAxHN8I4+jE0CpLWD8cv4z7CK7BMmhjDuz606Q2tFKkWRY8bHR9JQXYcoLfopo5TTqzxgPUjUMfw==",
			"cpu": [
				"ppc64"
			],
			"dev": true,
			"license": "MIT",
			"optional": true,
			"os": [
				"linux"
			]
		},
		"node_modules/@rollup/rollup-linux-riscv64-gnu": {
			"version": "4.20.0",
			"resolved": "https://registry.npmjs.org/@rollup/rollup-linux-riscv64-gnu/-/rollup-linux-riscv64-gnu-4.20.0.tgz",
			"integrity": "sha512-qmuxFpfmi/2SUkAw95TtNq/w/I7Gpjurx609OOOV7U4vhvUhBcftcmXwl3rqAek+ADBwSjIC4IVNLiszoj3dPA==",
			"cpu": [
				"riscv64"
			],
			"dev": true,
			"license": "MIT",
			"optional": true,
			"os": [
				"linux"
			]
		},
		"node_modules/@rollup/rollup-linux-s390x-gnu": {
			"version": "4.20.0",
			"resolved": "https://registry.npmjs.org/@rollup/rollup-linux-s390x-gnu/-/rollup-linux-s390x-gnu-4.20.0.tgz",
			"integrity": "sha512-I0BtGXddHSHjV1mqTNkgUZLnS3WtsqebAXv11D5BZE/gfw5KoyXSAXVqyJximQXNvNzUo4GKlCK/dIwXlz+jlg==",
			"cpu": [
				"s390x"
			],
			"dev": true,
			"license": "MIT",
			"optional": true,
			"os": [
				"linux"
			]
		},
		"node_modules/@rollup/rollup-linux-x64-gnu": {
			"version": "4.20.0",
			"resolved": "https://registry.npmjs.org/@rollup/rollup-linux-x64-gnu/-/rollup-linux-x64-gnu-4.20.0.tgz",
			"integrity": "sha512-y+eoL2I3iphUg9tN9GB6ku1FA8kOfmF4oUEWhztDJ4KXJy1agk/9+pejOuZkNFhRwHAOxMsBPLbXPd6mJiCwew==",
			"cpu": [
				"x64"
			],
			"dev": true,
			"license": "MIT",
			"optional": true,
			"os": [
				"linux"
			]
		},
		"node_modules/@rollup/rollup-linux-x64-musl": {
			"version": "4.20.0",
			"resolved": "https://registry.npmjs.org/@rollup/rollup-linux-x64-musl/-/rollup-linux-x64-musl-4.20.0.tgz",
			"integrity": "sha512-hM3nhW40kBNYUkZb/r9k2FKK+/MnKglX7UYd4ZUy5DJs8/sMsIbqWK2piZtVGE3kcXVNj3B2IrUYROJMMCikNg==",
			"cpu": [
				"x64"
			],
			"dev": true,
			"license": "MIT",
			"optional": true,
			"os": [
				"linux"
			]
		},
		"node_modules/@rollup/rollup-win32-arm64-msvc": {
			"version": "4.20.0",
			"resolved": "https://registry.npmjs.org/@rollup/rollup-win32-arm64-msvc/-/rollup-win32-arm64-msvc-4.20.0.tgz",
			"integrity": "sha512-psegMvP+Ik/Bg7QRJbv8w8PAytPA7Uo8fpFjXyCRHWm6Nt42L+JtoqH8eDQ5hRP7/XW2UiIriy1Z46jf0Oa1kA==",
			"cpu": [
				"arm64"
			],
			"dev": true,
			"license": "MIT",
			"optional": true,
			"os": [
				"win32"
			]
		},
		"node_modules/@rollup/rollup-win32-ia32-msvc": {
			"version": "4.20.0",
			"resolved": "https://registry.npmjs.org/@rollup/rollup-win32-ia32-msvc/-/rollup-win32-ia32-msvc-4.20.0.tgz",
			"integrity": "sha512-GabekH3w4lgAJpVxkk7hUzUf2hICSQO0a/BLFA11/RMxQT92MabKAqyubzDZmMOC/hcJNlc+rrypzNzYl4Dx7A==",
			"cpu": [
				"ia32"
			],
			"dev": true,
			"license": "MIT",
			"optional": true,
			"os": [
				"win32"
			]
		},
		"node_modules/@rollup/rollup-win32-x64-msvc": {
			"version": "4.20.0",
			"resolved": "https://registry.npmjs.org/@rollup/rollup-win32-x64-msvc/-/rollup-win32-x64-msvc-4.20.0.tgz",
			"integrity": "sha512-aJ1EJSuTdGnM6qbVC4B5DSmozPTqIag9fSzXRNNo+humQLG89XpPgdt16Ia56ORD7s+H8Pmyx44uczDQ0yDzpg==",
			"cpu": [
				"x64"
			],
			"dev": true,
			"license": "MIT",
			"optional": true,
			"os": [
				"win32"
			]
		},
		"node_modules/@schematics/angular": {
			"version": "18.2.2",
			"resolved": "https://registry.npmjs.org/@schematics/angular/-/angular-18.2.2.tgz",
			"integrity": "sha512-0uPA1kQ38RnbNrzMlveX/QAqQIDu2INl5IYd3EUbJZRfYSp1VVyOSyuIBJ+1iUl5Y5VUa2uylaVZXhFdKWprXw==",
			"dev": true,
			"license": "MIT",
			"dependencies": {
				"@angular-devkit/core": "18.2.2",
				"@angular-devkit/schematics": "18.2.2",
				"jsonc-parser": "3.3.1"
			},
			"engines": {
				"node": "^18.19.1 || ^20.11.1 || >=22.0.0",
				"npm": "^6.11.0 || ^7.5.6 || >=8.0.0",
				"yarn": ">= 1.13.0"
			}
		},
		"node_modules/@sigstore/bundle": {
			"version": "2.3.2",
			"resolved": "https://registry.npmjs.org/@sigstore/bundle/-/bundle-2.3.2.tgz",
			"integrity": "sha512-wueKWDk70QixNLB363yHc2D2ItTgYiMTdPwK8D9dKQMR3ZQ0c35IxP5xnwQ8cNLoCgCRcHf14kE+CLIvNX1zmA==",
			"dev": true,
			"license": "Apache-2.0",
			"dependencies": {
				"@sigstore/protobuf-specs": "^0.3.2"
			},
			"engines": {
				"node": "^16.14.0 || >=18.0.0"
			}
		},
		"node_modules/@sigstore/core": {
			"version": "1.1.0",
			"resolved": "https://registry.npmjs.org/@sigstore/core/-/core-1.1.0.tgz",
			"integrity": "sha512-JzBqdVIyqm2FRQCulY6nbQzMpJJpSiJ8XXWMhtOX9eKgaXXpfNOF53lzQEjIydlStnd/eFtuC1dW4VYdD93oRg==",
			"dev": true,
			"license": "Apache-2.0",
			"engines": {
				"node": "^16.14.0 || >=18.0.0"
			}
		},
		"node_modules/@sigstore/protobuf-specs": {
			"version": "0.3.2",
			"resolved": "https://registry.npmjs.org/@sigstore/protobuf-specs/-/protobuf-specs-0.3.2.tgz",
			"integrity": "sha512-c6B0ehIWxMI8wiS/bj6rHMPqeFvngFV7cDU/MY+B16P9Z3Mp9k8L93eYZ7BYzSickzuqAQqAq0V956b3Ju6mLw==",
			"dev": true,
			"license": "Apache-2.0",
			"engines": {
				"node": "^16.14.0 || >=18.0.0"
			}
		},
		"node_modules/@sigstore/sign": {
			"version": "2.3.2",
			"resolved": "https://registry.npmjs.org/@sigstore/sign/-/sign-2.3.2.tgz",
			"integrity": "sha512-5Vz5dPVuunIIvC5vBb0APwo7qKA4G9yM48kPWJT+OEERs40md5GoUR1yedwpekWZ4m0Hhw44m6zU+ObsON+iDA==",
			"dev": true,
			"license": "Apache-2.0",
			"dependencies": {
				"@sigstore/bundle": "^2.3.2",
				"@sigstore/core": "^1.0.0",
				"@sigstore/protobuf-specs": "^0.3.2",
				"make-fetch-happen": "^13.0.1",
				"proc-log": "^4.2.0",
				"promise-retry": "^2.0.1"
			},
			"engines": {
				"node": "^16.14.0 || >=18.0.0"
			}
		},
		"node_modules/@sigstore/tuf": {
			"version": "2.3.4",
			"resolved": "https://registry.npmjs.org/@sigstore/tuf/-/tuf-2.3.4.tgz",
			"integrity": "sha512-44vtsveTPUpqhm9NCrbU8CWLe3Vck2HO1PNLw7RIajbB7xhtn5RBPm1VNSCMwqGYHhDsBJG8gDF0q4lgydsJvw==",
			"dev": true,
			"license": "Apache-2.0",
			"dependencies": {
				"@sigstore/protobuf-specs": "^0.3.2",
				"tuf-js": "^2.2.1"
			},
			"engines": {
				"node": "^16.14.0 || >=18.0.0"
			}
		},
		"node_modules/@sigstore/verify": {
			"version": "1.2.1",
			"resolved": "https://registry.npmjs.org/@sigstore/verify/-/verify-1.2.1.tgz",
			"integrity": "sha512-8iKx79/F73DKbGfRf7+t4dqrc0bRr0thdPrxAtCKWRm/F0tG71i6O1rvlnScncJLLBZHn3h8M3c1BSUAb9yu8g==",
			"dev": true,
			"license": "Apache-2.0",
			"dependencies": {
				"@sigstore/bundle": "^2.3.2",
				"@sigstore/core": "^1.1.0",
				"@sigstore/protobuf-specs": "^0.3.2"
			},
			"engines": {
				"node": "^16.14.0 || >=18.0.0"
			}
		},
		"node_modules/@sindresorhus/merge-streams": {
			"version": "2.3.0",
			"resolved": "https://registry.npmjs.org/@sindresorhus/merge-streams/-/merge-streams-2.3.0.tgz",
			"integrity": "sha512-LtoMMhxAlorcGhmFYI+LhPgbPZCkgP6ra1YL604EeF6U98pLlQ3iWIGMdWSC+vWmPBWBNgmDBAhnAobLROJmwg==",
			"dev": true,
			"license": "MIT",
			"engines": {
				"node": ">=18"
			},
			"funding": {
				"url": "https://github.com/sponsors/sindresorhus"
			}
		},
		"node_modules/@tufjs/canonical-json": {
			"version": "2.0.0",
			"resolved": "https://registry.npmjs.org/@tufjs/canonical-json/-/canonical-json-2.0.0.tgz",
			"integrity": "sha512-yVtV8zsdo8qFHe+/3kw81dSLyF7D576A5cCFCi4X7B39tWT7SekaEFUnvnWJHz+9qO7qJTah1JbrDjWKqFtdWA==",
			"dev": true,
			"license": "MIT",
			"engines": {
				"node": "^16.14.0 || >=18.0.0"
			}
		},
		"node_modules/@tufjs/models": {
			"version": "2.0.1",
			"resolved": "https://registry.npmjs.org/@tufjs/models/-/models-2.0.1.tgz",
			"integrity": "sha512-92F7/SFyufn4DXsha9+QfKnN03JGqtMFMXgSHbZOo8JG59WkTni7UzAouNQDf7AuP9OAMxVOPQcqG3sB7w+kkg==",
			"dev": true,
			"license": "MIT",
			"dependencies": {
				"@tufjs/canonical-json": "2.0.0",
				"minimatch": "^9.0.4"
			},
			"engines": {
				"node": "^16.14.0 || >=18.0.0"
			}
		},
		"node_modules/@types/body-parser": {
			"version": "1.19.5",
			"resolved": "https://registry.npmjs.org/@types/body-parser/-/body-parser-1.19.5.tgz",
			"integrity": "sha512-fB3Zu92ucau0iQ0JMCFQE7b/dv8Ot07NI3KaZIkIUNXq82k4eBAqUaneXfleGY9JWskeS9y+u0nXMyspcuQrCg==",
			"dev": true,
			"license": "MIT",
			"dependencies": {
				"@types/connect": "*",
				"@types/node": "*"
			}
		},
		"node_modules/@types/bonjour": {
			"version": "3.5.13",
			"resolved": "https://registry.npmjs.org/@types/bonjour/-/bonjour-3.5.13.tgz",
			"integrity": "sha512-z9fJ5Im06zvUL548KvYNecEVlA7cVDkGUi6kZusb04mpyEFKCIZJvloCcmpmLaIahDpOQGHaHmG6imtPMmPXGQ==",
			"dev": true,
			"license": "MIT",
			"dependencies": {
				"@types/node": "*"
			}
		},
		"node_modules/@types/connect": {
			"version": "3.4.38",
			"resolved": "https://registry.npmjs.org/@types/connect/-/connect-3.4.38.tgz",
			"integrity": "sha512-K6uROf1LD88uDQqJCktA4yzL1YYAK6NgfsI0v/mTgyPKWsX1CnJ0XPSDhViejru1GcRkLWb8RlzFYJRqGUbaug==",
			"dev": true,
			"license": "MIT",
			"dependencies": {
				"@types/node": "*"
			}
		},
		"node_modules/@types/connect-history-api-fallback": {
			"version": "1.5.4",
			"resolved": "https://registry.npmjs.org/@types/connect-history-api-fallback/-/connect-history-api-fallback-1.5.4.tgz",
			"integrity": "sha512-n6Cr2xS1h4uAulPRdlw6Jl6s1oG8KrVilPN2yUITEs+K48EzMJJ3W1xy8K5eWuFvjp3R74AOIGSmp2UfBJ8HFw==",
			"dev": true,
			"license": "MIT",
			"dependencies": {
				"@types/express-serve-static-core": "*",
				"@types/node": "*"
			}
		},
		"node_modules/@types/estree": {
			"version": "1.0.5",
			"resolved": "https://registry.npmjs.org/@types/estree/-/estree-1.0.5.tgz",
			"integrity": "sha512-/kYRxGDLWzHOB7q+wtSUQlFrtcdUccpfy+X+9iMBpHK8QLLhx2wIPYuS5DYtR9Wa/YlZAbIovy7qVdB1Aq6Lyw==",
			"dev": true,
			"license": "MIT"
		},
		"node_modules/@types/express": {
			"version": "4.17.21",
			"resolved": "https://registry.npmjs.org/@types/express/-/express-4.17.21.tgz",
			"integrity": "sha512-ejlPM315qwLpaQlQDTjPdsUFSc6ZsP4AN6AlWnogPjQ7CVi7PYF3YVz+CY3jE2pwYf7E/7HlDAN0rV2GxTG0HQ==",
			"dev": true,
			"license": "MIT",
			"dependencies": {
				"@types/body-parser": "*",
				"@types/express-serve-static-core": "^4.17.33",
				"@types/qs": "*",
				"@types/serve-static": "*"
			}
		},
		"node_modules/@types/express-serve-static-core": {
			"version": "4.19.5",
			"resolved": "https://registry.npmjs.org/@types/express-serve-static-core/-/express-serve-static-core-4.19.5.tgz",
			"integrity": "sha512-y6W03tvrACO72aijJ5uF02FRq5cgDR9lUxddQ8vyF+GvmjJQqbzDcJngEjURc+ZsG31VI3hODNZJ2URj86pzmg==",
			"dev": true,
			"license": "MIT",
			"dependencies": {
				"@types/node": "*",
				"@types/qs": "*",
				"@types/range-parser": "*",
				"@types/send": "*"
			}
		},
		"node_modules/@types/http-errors": {
			"version": "2.0.4",
			"resolved": "https://registry.npmjs.org/@types/http-errors/-/http-errors-2.0.4.tgz",
			"integrity": "sha512-D0CFMMtydbJAegzOyHjtiKPLlvnm3iTZyZRSZoLq2mRhDdmLfIWOCYPfQJ4cu2erKghU++QvjcUjp/5h7hESpA==",
			"dev": true,
			"license": "MIT"
		},
		"node_modules/@types/http-proxy": {
			"version": "1.17.15",
			"resolved": "https://registry.npmjs.org/@types/http-proxy/-/http-proxy-1.17.15.tgz",
			"integrity": "sha512-25g5atgiVNTIv0LBDTg1H74Hvayx0ajtJPLLcYE3whFv75J0pWNtOBzaXJQgDTmrX1bx5U9YC2w/n65BN1HwRQ==",
			"dev": true,
			"license": "MIT",
			"dependencies": {
				"@types/node": "*"
			}
		},
		"node_modules/@types/json-schema": {
			"version": "7.0.15",
			"resolved": "https://registry.npmjs.org/@types/json-schema/-/json-schema-7.0.15.tgz",
			"integrity": "sha512-5+fP8P8MFNC+AyZCDxrB2pkZFPGzqQWUzpSeuuVLvm8VMcorNYavBqoFcxK8bQz4Qsbn4oUEEem4wDLfcysGHA==",
			"dev": true,
			"license": "MIT"
		},
		"node_modules/@types/mime": {
			"version": "1.3.5",
			"resolved": "https://registry.npmjs.org/@types/mime/-/mime-1.3.5.tgz",
			"integrity": "sha512-/pyBZWSLD2n0dcHE3hq8s8ZvcETHtEuF+3E7XVt0Ig2nvsVQXdghHVcEkIWjy9A0wKfTn97a/PSDYohKIlnP/w==",
			"dev": true,
			"license": "MIT"
		},
		"node_modules/@types/mute-stream": {
			"version": "0.0.4",
			"resolved": "https://registry.npmjs.org/@types/mute-stream/-/mute-stream-0.0.4.tgz",
			"integrity": "sha512-CPM9nzrCPPJHQNA9keH9CVkVI+WR5kMa+7XEs5jcGQ0VoAGnLv242w8lIVgwAEfmE4oufJRaTc9PNLQl0ioAow==",
			"dev": true,
			"license": "MIT",
			"dependencies": {
				"@types/node": "*"
			}
		},
		"node_modules/@types/node": {
			"version": "22.5.2",
			"resolved": "https://registry.npmjs.org/@types/node/-/node-22.5.2.tgz",
			"integrity": "sha512-acJsPTEqYqulZS/Yp/S3GgeE6GZ0qYODUR8aVr/DkhHQ8l9nd4j5x1/ZJy9/gHrRlFMqkO6i0I3E27Alu4jjPg==",
			"dev": true,
			"license": "MIT",
			"dependencies": {
				"undici-types": "~6.19.2"
			}
		},
		"node_modules/@types/node-forge": {
			"version": "1.3.11",
			"resolved": "https://registry.npmjs.org/@types/node-forge/-/node-forge-1.3.11.tgz",
			"integrity": "sha512-FQx220y22OKNTqaByeBGqHWYz4cl94tpcxeFdvBo3wjG6XPBuZ0BNgNZRV5J5TFmmcsJ4IzsLkmGRiQbnYsBEQ==",
			"dev": true,
			"license": "MIT",
			"dependencies": {
				"@types/node": "*"
			}
		},
		"node_modules/@types/qs": {
			"version": "6.9.15",
			"resolved": "https://registry.npmjs.org/@types/qs/-/qs-6.9.15.tgz",
			"integrity": "sha512-uXHQKES6DQKKCLh441Xv/dwxOq1TVS3JPUMlEqoEglvlhR6Mxnlew/Xq/LRVHpLyk7iK3zODe1qYHIMltO7XGg==",
			"dev": true,
			"license": "MIT"
		},
		"node_modules/@types/range-parser": {
			"version": "1.2.7",
			"resolved": "https://registry.npmjs.org/@types/range-parser/-/range-parser-1.2.7.tgz",
			"integrity": "sha512-hKormJbkJqzQGhziax5PItDUTMAM9uE2XXQmM37dyd4hVM+5aVl7oVxMVUiVQn2oCQFN/LKCZdvSM0pFRqbSmQ==",
			"dev": true,
			"license": "MIT"
		},
		"node_modules/@types/retry": {
			"version": "0.12.2",
			"resolved": "https://registry.npmjs.org/@types/retry/-/retry-0.12.2.tgz",
			"integrity": "sha512-XISRgDJ2Tc5q4TRqvgJtzsRkFYNJzZrhTdtMoGVBttwzzQJkPnS3WWTFc7kuDRoPtPakl+T+OfdEUjYJj7Jbow==",
			"dev": true,
			"license": "MIT"
		},
		"node_modules/@types/send": {
			"version": "0.17.4",
			"resolved": "https://registry.npmjs.org/@types/send/-/send-0.17.4.tgz",
			"integrity": "sha512-x2EM6TJOybec7c52BX0ZspPodMsQUd5L6PRwOunVyVUhXiBSKf3AezDL8Dgvgt5o0UfKNfuA0eMLr2wLT4AiBA==",
			"dev": true,
			"license": "MIT",
			"dependencies": {
				"@types/mime": "^1",
				"@types/node": "*"
			}
		},
		"node_modules/@types/serve-index": {
			"version": "1.9.4",
			"resolved": "https://registry.npmjs.org/@types/serve-index/-/serve-index-1.9.4.tgz",
			"integrity": "sha512-qLpGZ/c2fhSs5gnYsQxtDEq3Oy8SXPClIXkW5ghvAvsNuVSA8k+gCONcUCS/UjLEYvYps+e8uBtfgXgvhwfNug==",
			"dev": true,
			"license": "MIT",
			"dependencies": {
				"@types/express": "*"
			}
		},
		"node_modules/@types/serve-static": {
			"version": "1.15.7",
			"resolved": "https://registry.npmjs.org/@types/serve-static/-/serve-static-1.15.7.tgz",
			"integrity": "sha512-W8Ym+h8nhuRwaKPaDw34QUkwsGi6Rc4yYqvKFo5rm2FUEhCFbzVWrxXUxuKK8TASjWsysJY0nsmNCGhCOIsrOw==",
			"dev": true,
			"license": "MIT",
			"dependencies": {
				"@types/http-errors": "*",
				"@types/node": "*",
				"@types/send": "*"
			}
		},
		"node_modules/@types/sockjs": {
			"version": "0.3.36",
			"resolved": "https://registry.npmjs.org/@types/sockjs/-/sockjs-0.3.36.tgz",
			"integrity": "sha512-MK9V6NzAS1+Ud7JV9lJLFqW85VbC9dq3LmwZCuBe4wBDgKC0Kj/jd8Xl+nSviU+Qc3+m7umHHyHg//2KSa0a0Q==",
			"dev": true,
			"license": "MIT",
			"dependencies": {
				"@types/node": "*"
			}
		},
		"node_modules/@types/wrap-ansi": {
			"version": "3.0.0",
			"resolved": "https://registry.npmjs.org/@types/wrap-ansi/-/wrap-ansi-3.0.0.tgz",
			"integrity": "sha512-ltIpx+kM7g/MLRZfkbL7EsCEjfzCcScLpkg37eXEtx5kmrAKBkTJwd1GIAjDSL8wTpM6Hzn5YO4pSb91BEwu1g==",
			"dev": true,
			"license": "MIT"
		},
		"node_modules/@types/ws": {
			"version": "8.5.12",
			"resolved": "https://registry.npmjs.org/@types/ws/-/ws-8.5.12.tgz",
			"integrity": "sha512-3tPRkv1EtkDpzlgyKyI8pGsGZAGPEaXeu0DOj5DI25Ja91bdAYddYHbADRYVrZMRbfW+1l5YwXVDKohDJNQxkQ==",
			"dev": true,
			"license": "MIT",
			"dependencies": {
				"@types/node": "*"
			}
		},
		"node_modules/@vitejs/plugin-basic-ssl": {
			"version": "1.1.0",
			"resolved": "https://registry.npmjs.org/@vitejs/plugin-basic-ssl/-/plugin-basic-ssl-1.1.0.tgz",
			"integrity": "sha512-wO4Dk/rm8u7RNhOf95ZzcEmC9rYOncYgvq4z3duaJrCgjN8BxAnDVyndanfcJZ0O6XZzHz6Q0hTimxTg8Y9g/A==",
			"dev": true,
			"license": "MIT",
			"engines": {
				"node": ">=14.6.0"
			},
			"peerDependencies": {
				"vite": "^3.0.0 || ^4.0.0 || ^5.0.0"
			}
		},
		"node_modules/@webassemblyjs/ast": {
			"version": "1.12.1",
			"resolved": "https://registry.npmjs.org/@webassemblyjs/ast/-/ast-1.12.1.tgz",
			"integrity": "sha512-EKfMUOPRRUTy5UII4qJDGPpqfwjOmZ5jeGFwid9mnoqIFK+e0vqoi1qH56JpmZSzEL53jKnNzScdmftJyG5xWg==",
			"dev": true,
			"license": "MIT",
			"dependencies": {
				"@webassemblyjs/helper-numbers": "1.11.6",
				"@webassemblyjs/helper-wasm-bytecode": "1.11.6"
			}
		},
		"node_modules/@webassemblyjs/floating-point-hex-parser": {
			"version": "1.11.6",
			"resolved": "https://registry.npmjs.org/@webassemblyjs/floating-point-hex-parser/-/floating-point-hex-parser-1.11.6.tgz",
			"integrity": "sha512-ejAj9hfRJ2XMsNHk/v6Fu2dGS+i4UaXBXGemOfQ/JfQ6mdQg/WXtwleQRLLS4OvfDhv8rYnVwH27YJLMyYsxhw==",
			"dev": true,
			"license": "MIT"
		},
		"node_modules/@webassemblyjs/helper-api-error": {
			"version": "1.11.6",
			"resolved": "https://registry.npmjs.org/@webassemblyjs/helper-api-error/-/helper-api-error-1.11.6.tgz",
			"integrity": "sha512-o0YkoP4pVu4rN8aTJgAyj9hC2Sv5UlkzCHhxqWj8butaLvnpdc2jOwh4ewE6CX0txSfLn/UYaV/pheS2Txg//Q==",
			"dev": true,
			"license": "MIT"
		},
		"node_modules/@webassemblyjs/helper-buffer": {
			"version": "1.12.1",
			"resolved": "https://registry.npmjs.org/@webassemblyjs/helper-buffer/-/helper-buffer-1.12.1.tgz",
			"integrity": "sha512-nzJwQw99DNDKr9BVCOZcLuJJUlqkJh+kVzVl6Fmq/tI5ZtEyWT1KZMyOXltXLZJmDtvLCDgwsyrkohEtopTXCw==",
			"dev": true,
			"license": "MIT"
		},
		"node_modules/@webassemblyjs/helper-numbers": {
			"version": "1.11.6",
			"resolved": "https://registry.npmjs.org/@webassemblyjs/helper-numbers/-/helper-numbers-1.11.6.tgz",
			"integrity": "sha512-vUIhZ8LZoIWHBohiEObxVm6hwP034jwmc9kuq5GdHZH0wiLVLIPcMCdpJzG4C11cHoQ25TFIQj9kaVADVX7N3g==",
			"dev": true,
			"license": "MIT",
			"dependencies": {
				"@webassemblyjs/floating-point-hex-parser": "1.11.6",
				"@webassemblyjs/helper-api-error": "1.11.6",
				"@xtuc/long": "4.2.2"
			}
		},
		"node_modules/@webassemblyjs/helper-wasm-bytecode": {
			"version": "1.11.6",
			"resolved": "https://registry.npmjs.org/@webassemblyjs/helper-wasm-bytecode/-/helper-wasm-bytecode-1.11.6.tgz",
			"integrity": "sha512-sFFHKwcmBprO9e7Icf0+gddyWYDViL8bpPjJJl0WHxCdETktXdmtWLGVzoHbqUcY4Be1LkNfwTmXOJUFZYSJdA==",
			"dev": true,
			"license": "MIT"
		},
		"node_modules/@webassemblyjs/helper-wasm-section": {
			"version": "1.12.1",
			"resolved": "https://registry.npmjs.org/@webassemblyjs/helper-wasm-section/-/helper-wasm-section-1.12.1.tgz",
			"integrity": "sha512-Jif4vfB6FJlUlSbgEMHUyk1j234GTNG9dBJ4XJdOySoj518Xj0oGsNi59cUQF4RRMS9ouBUxDDdyBVfPTypa5g==",
			"dev": true,
			"license": "MIT",
			"dependencies": {
				"@webassemblyjs/ast": "1.12.1",
				"@webassemblyjs/helper-buffer": "1.12.1",
				"@webassemblyjs/helper-wasm-bytecode": "1.11.6",
				"@webassemblyjs/wasm-gen": "1.12.1"
			}
		},
		"node_modules/@webassemblyjs/ieee754": {
			"version": "1.11.6",
			"resolved": "https://registry.npmjs.org/@webassemblyjs/ieee754/-/ieee754-1.11.6.tgz",
			"integrity": "sha512-LM4p2csPNvbij6U1f19v6WR56QZ8JcHg3QIJTlSwzFcmx6WSORicYj6I63f9yU1kEUtrpG+kjkiIAkevHpDXrg==",
			"dev": true,
			"license": "MIT",
			"dependencies": {
				"@xtuc/ieee754": "^1.2.0"
			}
		},
		"node_modules/@webassemblyjs/leb128": {
			"version": "1.11.6",
			"resolved": "https://registry.npmjs.org/@webassemblyjs/leb128/-/leb128-1.11.6.tgz",
			"integrity": "sha512-m7a0FhE67DQXgouf1tbN5XQcdWoNgaAuoULHIfGFIEVKA6tu/edls6XnIlkmS6FrXAquJRPni3ZZKjw6FSPjPQ==",
			"dev": true,
			"license": "Apache-2.0",
			"dependencies": {
				"@xtuc/long": "4.2.2"
			}
		},
		"node_modules/@webassemblyjs/utf8": {
			"version": "1.11.6",
			"resolved": "https://registry.npmjs.org/@webassemblyjs/utf8/-/utf8-1.11.6.tgz",
			"integrity": "sha512-vtXf2wTQ3+up9Zsg8sa2yWiQpzSsMyXj0qViVP6xKGCUT8p8YJ6HqI7l5eCnWx1T/FYdsv07HQs2wTFbbof/RA==",
			"dev": true,
			"license": "MIT"
		},
		"node_modules/@webassemblyjs/wasm-edit": {
			"version": "1.12.1",
			"resolved": "https://registry.npmjs.org/@webassemblyjs/wasm-edit/-/wasm-edit-1.12.1.tgz",
			"integrity": "sha512-1DuwbVvADvS5mGnXbE+c9NfA8QRcZ6iKquqjjmR10k6o+zzsRVesil54DKexiowcFCPdr/Q0qaMgB01+SQ1u6g==",
			"dev": true,
			"license": "MIT",
			"dependencies": {
				"@webassemblyjs/ast": "1.12.1",
				"@webassemblyjs/helper-buffer": "1.12.1",
				"@webassemblyjs/helper-wasm-bytecode": "1.11.6",
				"@webassemblyjs/helper-wasm-section": "1.12.1",
				"@webassemblyjs/wasm-gen": "1.12.1",
				"@webassemblyjs/wasm-opt": "1.12.1",
				"@webassemblyjs/wasm-parser": "1.12.1",
				"@webassemblyjs/wast-printer": "1.12.1"
			}
		},
		"node_modules/@webassemblyjs/wasm-gen": {
			"version": "1.12.1",
			"resolved": "https://registry.npmjs.org/@webassemblyjs/wasm-gen/-/wasm-gen-1.12.1.tgz",
			"integrity": "sha512-TDq4Ojh9fcohAw6OIMXqiIcTq5KUXTGRkVxbSo1hQnSy6lAM5GSdfwWeSxpAo0YzgsgF182E/U0mDNhuA0tW7w==",
			"dev": true,
			"license": "MIT",
			"dependencies": {
				"@webassemblyjs/ast": "1.12.1",
				"@webassemblyjs/helper-wasm-bytecode": "1.11.6",
				"@webassemblyjs/ieee754": "1.11.6",
				"@webassemblyjs/leb128": "1.11.6",
				"@webassemblyjs/utf8": "1.11.6"
			}
		},
		"node_modules/@webassemblyjs/wasm-opt": {
			"version": "1.12.1",
			"resolved": "https://registry.npmjs.org/@webassemblyjs/wasm-opt/-/wasm-opt-1.12.1.tgz",
			"integrity": "sha512-Jg99j/2gG2iaz3hijw857AVYekZe2SAskcqlWIZXjji5WStnOpVoat3gQfT/Q5tb2djnCjBtMocY/Su1GfxPBg==",
			"dev": true,
			"license": "MIT",
			"dependencies": {
				"@webassemblyjs/ast": "1.12.1",
				"@webassemblyjs/helper-buffer": "1.12.1",
				"@webassemblyjs/wasm-gen": "1.12.1",
				"@webassemblyjs/wasm-parser": "1.12.1"
			}
		},
		"node_modules/@webassemblyjs/wasm-parser": {
			"version": "1.12.1",
			"resolved": "https://registry.npmjs.org/@webassemblyjs/wasm-parser/-/wasm-parser-1.12.1.tgz",
			"integrity": "sha512-xikIi7c2FHXysxXe3COrVUPSheuBtpcfhbpFj4gmu7KRLYOzANztwUU0IbsqvMqzuNK2+glRGWCEqZo1WCLyAQ==",
			"dev": true,
			"license": "MIT",
			"dependencies": {
				"@webassemblyjs/ast": "1.12.1",
				"@webassemblyjs/helper-api-error": "1.11.6",
				"@webassemblyjs/helper-wasm-bytecode": "1.11.6",
				"@webassemblyjs/ieee754": "1.11.6",
				"@webassemblyjs/leb128": "1.11.6",
				"@webassemblyjs/utf8": "1.11.6"
			}
		},
		"node_modules/@webassemblyjs/wast-printer": {
			"version": "1.12.1",
			"resolved": "https://registry.npmjs.org/@webassemblyjs/wast-printer/-/wast-printer-1.12.1.tgz",
			"integrity": "sha512-+X4WAlOisVWQMikjbcvY2e0rwPsKQ9F688lksZhBcPycBBuii3O7m8FACbDMWDojpAqvjIncrG8J0XHKyQfVeA==",
			"dev": true,
			"license": "MIT",
			"dependencies": {
				"@webassemblyjs/ast": "1.12.1",
				"@xtuc/long": "4.2.2"
			}
		},
		"node_modules/@xtuc/ieee754": {
			"version": "1.2.0",
			"resolved": "https://registry.npmjs.org/@xtuc/ieee754/-/ieee754-1.2.0.tgz",
			"integrity": "sha512-DX8nKgqcGwsc0eJSqYt5lwP4DH5FlHnmuWWBRy7X0NcaGR0ZtuyeESgMwTYVEtxmsNGY+qit4QYT/MIYTOTPeA==",
			"dev": true,
			"license": "BSD-3-Clause"
		},
		"node_modules/@xtuc/long": {
			"version": "4.2.2",
			"resolved": "https://registry.npmjs.org/@xtuc/long/-/long-4.2.2.tgz",
			"integrity": "sha512-NuHqBY1PB/D8xU6s/thBgOAiAP7HOYDQ32+BFZILJ8ivkUkAHQnWfn6WhL79Owj1qmUnoN/YPhktdIoucipkAQ==",
			"dev": true,
			"license": "Apache-2.0"
		},
		"node_modules/@yarnpkg/lockfile": {
			"version": "1.1.0",
			"resolved": "https://registry.npmjs.org/@yarnpkg/lockfile/-/lockfile-1.1.0.tgz",
			"integrity": "sha512-GpSwvyXOcOOlV70vbnzjj4fW5xW/FdUF6nQEt1ENy7m4ZCczi1+/buVUPAqmGfqznsORNFzUMjctTIp8a9tuCQ==",
			"dev": true,
			"license": "BSD-2-Clause"
		},
		"node_modules/abbrev": {
			"version": "2.0.0",
			"resolved": "https://registry.npmjs.org/abbrev/-/abbrev-2.0.0.tgz",
			"integrity": "sha512-6/mh1E2u2YgEsCHdY0Yx5oW+61gZU+1vXaoiHHrpKeuRNNgFvS+/jrwHiQhB5apAf5oB7UB7E19ol2R2LKH8hQ==",
			"dev": true,
			"license": "ISC",
			"engines": {
				"node": "^14.17.0 || ^16.13.0 || >=18.0.0"
			}
		},
		"node_modules/accepts": {
			"version": "1.3.8",
			"resolved": "https://registry.npmjs.org/accepts/-/accepts-1.3.8.tgz",
			"integrity": "sha512-PYAthTa2m2VKxuvSD3DPC/Gy+U+sOA1LAuT8mkmRuvw+NACSaeXEQ+NHcVF7rONl6qcaxV3Uuemwawk+7+SJLw==",
			"dev": true,
			"license": "MIT",
			"dependencies": {
				"mime-types": "~2.1.34",
				"negotiator": "0.6.3"
			},
			"engines": {
				"node": ">= 0.6"
			}
		},
		"node_modules/acorn": {
			"version": "8.12.1",
			"resolved": "https://registry.npmjs.org/acorn/-/acorn-8.12.1.tgz",
			"integrity": "sha512-tcpGyI9zbizT9JbV6oYE477V6mTlXvvi0T0G3SNIYE2apm/G5huBa1+K89VGeovbg+jycCrfhl3ADxErOuO6Jg==",
			"dev": true,
			"license": "MIT",
			"bin": {
				"acorn": "bin/acorn"
			},
			"engines": {
				"node": ">=0.4.0"
			}
		},
		"node_modules/acorn-import-attributes": {
			"version": "1.9.5",
			"resolved": "https://registry.npmjs.org/acorn-import-attributes/-/acorn-import-attributes-1.9.5.tgz",
			"integrity": "sha512-n02Vykv5uA3eHGM/Z2dQrcD56kL8TyDb2p1+0P83PClMnC/nc+anbQRhIOWnSq4Ke/KvDPrY3C9hDtC/A3eHnQ==",
			"dev": true,
			"license": "MIT",
			"peerDependencies": {
				"acorn": "^8"
			}
		},
		"node_modules/adjust-sourcemap-loader": {
			"version": "4.0.0",
			"resolved": "https://registry.npmjs.org/adjust-sourcemap-loader/-/adjust-sourcemap-loader-4.0.0.tgz",
			"integrity": "sha512-OXwN5b9pCUXNQHJpwwD2qP40byEmSgzj8B4ydSN0uMNYWiFmJ6x6KwUllMmfk8Rwu/HJDFR7U8ubsWBoN0Xp0A==",
			"dev": true,
			"license": "MIT",
			"dependencies": {
				"loader-utils": "^2.0.0",
				"regex-parser": "^2.2.11"
			},
			"engines": {
				"node": ">=8.9"
			}
		},
		"node_modules/adjust-sourcemap-loader/node_modules/loader-utils": {
			"version": "2.0.4",
			"resolved": "https://registry.npmjs.org/loader-utils/-/loader-utils-2.0.4.tgz",
			"integrity": "sha512-xXqpXoINfFhgua9xiqD8fPFHgkoq1mmmpE92WlDbm9rNRd/EbRb+Gqf908T2DMfuHjjJlksiK2RbHVOdD/MqSw==",
			"dev": true,
			"license": "MIT",
			"dependencies": {
				"big.js": "^5.2.2",
				"emojis-list": "^3.0.0",
				"json5": "^2.1.2"
			},
			"engines": {
				"node": ">=8.9.0"
			}
		},
		"node_modules/agent-base": {
			"version": "7.1.1",
			"resolved": "https://registry.npmjs.org/agent-base/-/agent-base-7.1.1.tgz",
			"integrity": "sha512-H0TSyFNDMomMNJQBn8wFV5YC/2eJ+VXECwOadZJT554xP6cODZHPX3H9QMQECxvrgiSOP1pHjy1sMWQVYJOUOA==",
			"dev": true,
			"license": "MIT",
			"dependencies": {
				"debug": "^4.3.4"
			},
			"engines": {
				"node": ">= 14"
			}
		},
		"node_modules/aggregate-error": {
			"version": "3.1.0",
			"resolved": "https://registry.npmjs.org/aggregate-error/-/aggregate-error-3.1.0.tgz",
			"integrity": "sha512-4I7Td01quW/RpocfNayFdFVk1qSuoh0E7JrbRJ16nH01HhKFQ88INq9Sd+nd72zqRySlr9BmDA8xlEJ6vJMrYA==",
			"dev": true,
			"license": "MIT",
			"dependencies": {
				"clean-stack": "^2.0.0",
				"indent-string": "^4.0.0"
			},
			"engines": {
				"node": ">=8"
			}
		},
		"node_modules/ajv": {
			"version": "8.17.1",
			"resolved": "https://registry.npmjs.org/ajv/-/ajv-8.17.1.tgz",
			"integrity": "sha512-B/gBuNg5SiMTrPkC+A2+cW0RszwxYmn6VYxB/inlBStS5nx6xHIt/ehKRhIMhqusl7a8LjQoZnjCs5vhwxOQ1g==",
			"dev": true,
			"license": "MIT",
			"dependencies": {
				"fast-deep-equal": "^3.1.3",
				"fast-uri": "^3.0.1",
				"json-schema-traverse": "^1.0.0",
				"require-from-string": "^2.0.2"
			},
			"funding": {
				"type": "github",
				"url": "https://github.com/sponsors/epoberezkin"
			}
		},
		"node_modules/ajv-formats": {
			"version": "3.0.1",
			"resolved": "https://registry.npmjs.org/ajv-formats/-/ajv-formats-3.0.1.tgz",
			"integrity": "sha512-8iUql50EUR+uUcdRQ3HDqa6EVyo3docL8g5WJ3FNcWmu62IbkGUue/pEyLBW8VGKKucTPgqeks4fIU1DA4yowQ==",
			"dev": true,
			"license": "MIT",
			"dependencies": {
				"ajv": "^8.0.0"
			},
			"peerDependencies": {
				"ajv": "^8.0.0"
			},
			"peerDependenciesMeta": {
				"ajv": {
					"optional": true
				}
			}
		},
		"node_modules/ajv-keywords": {
			"version": "5.1.0",
			"resolved": "https://registry.npmjs.org/ajv-keywords/-/ajv-keywords-5.1.0.tgz",
			"integrity": "sha512-YCS/JNFAUyr5vAuhk1DWm1CBxRHW9LbJ2ozWeemrIqpbsqKjHVxYPyi5GC0rjZIT5JxJ3virVTS8wk4i/Z+krw==",
			"dev": true,
			"license": "MIT",
			"dependencies": {
				"fast-deep-equal": "^3.1.3"
			},
			"peerDependencies": {
				"ajv": "^8.8.2"
			}
		},
		"node_modules/ansi-colors": {
			"version": "4.1.3",
			"resolved": "https://registry.npmjs.org/ansi-colors/-/ansi-colors-4.1.3.tgz",
			"integrity": "sha512-/6w/C21Pm1A7aZitlI5Ni/2J6FFQN8i1Cvz3kHABAAbw93v/NlvKdVOqz7CCWz/3iv/JplRSEEZ83XION15ovw==",
			"dev": true,
			"license": "MIT",
			"engines": {
				"node": ">=6"
			}
		},
		"node_modules/ansi-escapes": {
			"version": "4.3.2",
			"resolved": "https://registry.npmjs.org/ansi-escapes/-/ansi-escapes-4.3.2.tgz",
			"integrity": "sha512-gKXj5ALrKWQLsYG9jlTRmR/xKluxHV+Z9QEwNIgCfM1/uwPMCuzVVnh5mwTd+OuBZcwSIMbqssNWRm1lE51QaQ==",
			"dev": true,
			"license": "MIT",
			"dependencies": {
				"type-fest": "^0.21.3"
			},
			"engines": {
				"node": ">=8"
			},
			"funding": {
				"url": "https://github.com/sponsors/sindresorhus"
			}
		},
		"node_modules/ansi-html-community": {
			"version": "0.0.8",
			"resolved": "https://registry.npmjs.org/ansi-html-community/-/ansi-html-community-0.0.8.tgz",
			"integrity": "sha512-1APHAyr3+PCamwNw3bXCPp4HFLONZt/yIH0sZp0/469KWNTEy+qN5jQ3GVX6DMZ1UXAi34yVwtTeaG/HpBuuzw==",
			"dev": true,
			"engines": [
				"node >= 0.8.0"
			],
			"license": "Apache-2.0",
			"bin": {
				"ansi-html": "bin/ansi-html"
			}
		},
		"node_modules/ansi-regex": {
			"version": "5.0.1",
			"resolved": "https://registry.npmjs.org/ansi-regex/-/ansi-regex-5.0.1.tgz",
			"integrity": "sha512-quJQXlTSUGL2LH9SUXo8VwsY4soanhgo6LNSm84E1LBcE8s3O0wpdiRzyR9z/ZZJMlMWv37qOOb9pdJlMUEKFQ==",
			"dev": true,
			"license": "MIT",
			"engines": {
				"node": ">=8"
			}
		},
		"node_modules/ansi-styles": {
			"version": "3.2.1",
			"resolved": "https://registry.npmjs.org/ansi-styles/-/ansi-styles-3.2.1.tgz",
			"integrity": "sha512-VT0ZI6kZRdTh8YyJw3SMbYm/u+NqfsAxEpWO0Pf9sq8/e94WxxOpPKx9FR1FlyCtOVDNOQ+8ntlqFxiRc+r5qA==",
			"dev": true,
			"license": "MIT",
			"dependencies": {
				"color-convert": "^1.9.0"
			},
			"engines": {
				"node": ">=4"
			}
		},
		"node_modules/any-promise": {
			"version": "1.3.0",
			"resolved": "https://registry.npmjs.org/any-promise/-/any-promise-1.3.0.tgz",
			"integrity": "sha512-7UvmKalWRt1wgjL1RrGxoSJW/0QZFIegpeGvZG9kjp8vrRu55XTHbwnqq2GpXm9uLbcuhxm3IqX9OB4MZR1b2A==",
			"dev": true,
			"license": "MIT"
		},
		"node_modules/anymatch": {
			"version": "3.1.3",
			"resolved": "https://registry.npmjs.org/anymatch/-/anymatch-3.1.3.tgz",
			"integrity": "sha512-KMReFUr0B4t+D+OBkjR3KYqvocp2XaSzO55UcB6mgQMd3KbcE+mWTyvVV7D/zsdEbNnV6acZUutkiHQXvTr1Rw==",
			"dev": true,
			"license": "ISC",
			"dependencies": {
				"normalize-path": "^3.0.0",
				"picomatch": "^2.0.4"
			},
			"engines": {
				"node": ">= 8"
			}
		},
		"node_modules/anymatch/node_modules/picomatch": {
			"version": "2.3.1",
			"resolved": "https://registry.npmjs.org/picomatch/-/picomatch-2.3.1.tgz",
			"integrity": "sha512-JU3teHTNjmE2VCGFzuY8EXzCDVwEqB2a8fsIvwaStHhAWJEeVd1o1QD80CU6+ZdEXXSLbSsuLwJjkCBWqRQUVA==",
			"dev": true,
			"license": "MIT",
			"engines": {
				"node": ">=8.6"
			},
			"funding": {
				"url": "https://github.com/sponsors/jonschlinkert"
			}
		},
		"node_modules/arg": {
			"version": "5.0.2",
			"resolved": "https://registry.npmjs.org/arg/-/arg-5.0.2.tgz",
			"integrity": "sha512-PYjyFOLKQ9y57JvQ6QLo8dAgNqswh8M1RMJYdQduT6xbWSgK36P/Z/v+p888pM69jMMfS8Xd8F6I1kQ/I9HUGg==",
			"dev": true,
			"license": "MIT"
		},
		"node_modules/argparse": {
			"version": "2.0.1",
			"resolved": "https://registry.npmjs.org/argparse/-/argparse-2.0.1.tgz",
			"integrity": "sha512-8+9WqebbFzpX9OR+Wa6O29asIogeRMzcGtAINdpMHHyAg10f05aSFVBbcEqGf/PXw1EjAZ+q2/bEBg3DvurK3Q==",
			"dev": true,
			"license": "Python-2.0"
		},
		"node_modules/array-flatten": {
			"version": "1.1.1",
			"resolved": "https://registry.npmjs.org/array-flatten/-/array-flatten-1.1.1.tgz",
			"integrity": "sha512-PCVAQswWemu6UdxsDFFX/+gVeYqKAod3D3UVm91jHwynguOwAvYPhx8nNlM++NqRcK6CxxpUafjmhIdKiHibqg==",
			"dev": true,
			"license": "MIT"
		},
		"node_modules/autoprefixer": {
			"version": "10.4.20",
			"resolved": "https://registry.npmjs.org/autoprefixer/-/autoprefixer-10.4.20.tgz",
			"integrity": "sha512-XY25y5xSv/wEoqzDyXXME4AFfkZI0P23z6Fs3YgymDnKJkCGOnkL0iTxCa85UTqaSgfcqyf3UA6+c7wUvx/16g==",
			"dev": true,
			"funding": [
				{
					"type": "opencollective",
					"url": "https://opencollective.com/postcss/"
				},
				{
					"type": "tidelift",
					"url": "https://tidelift.com/funding/github/npm/autoprefixer"
				},
				{
					"type": "github",
					"url": "https://github.com/sponsors/ai"
				}
			],
			"license": "MIT",
			"dependencies": {
				"browserslist": "^4.23.3",
				"caniuse-lite": "^1.0.30001646",
				"fraction.js": "^4.3.7",
				"normalize-range": "^0.1.2",
				"picocolors": "^1.0.1",
				"postcss-value-parser": "^4.2.0"
			},
			"bin": {
				"autoprefixer": "bin/autoprefixer"
			},
			"engines": {
				"node": "^10 || ^12 || >=14"
			},
			"peerDependencies": {
				"postcss": "^8.1.0"
			}
		},
		"node_modules/babel-loader": {
			"version": "9.1.3",
			"resolved": "https://registry.npmjs.org/babel-loader/-/babel-loader-9.1.3.tgz",
			"integrity": "sha512-xG3ST4DglodGf8qSwv0MdeWLhrDsw/32QMdTO5T1ZIp9gQur0HkCyFs7Awskr10JKXFXwpAhiCuYX5oGXnRGbw==",
			"dev": true,
			"license": "MIT",
			"dependencies": {
				"find-cache-dir": "^4.0.0",
				"schema-utils": "^4.0.0"
			},
			"engines": {
				"node": ">= 14.15.0"
			},
			"peerDependencies": {
				"@babel/core": "^7.12.0",
				"webpack": ">=5"
			}
		},
		"node_modules/babel-plugin-polyfill-corejs2": {
			"version": "0.4.11",
			"resolved": "https://registry.npmjs.org/babel-plugin-polyfill-corejs2/-/babel-plugin-polyfill-corejs2-0.4.11.tgz",
			"integrity": "sha512-sMEJ27L0gRHShOh5G54uAAPaiCOygY/5ratXuiyb2G46FmlSpc9eFCzYVyDiPxfNbwzA7mYahmjQc5q+CZQ09Q==",
			"dev": true,
			"license": "MIT",
			"dependencies": {
				"@babel/compat-data": "^7.22.6",
				"@babel/helper-define-polyfill-provider": "^0.6.2",
				"semver": "^6.3.1"
			},
			"peerDependencies": {
				"@babel/core": "^7.4.0 || ^8.0.0-0 <8.0.0"
			}
		},
		"node_modules/babel-plugin-polyfill-corejs2/node_modules/semver": {
			"version": "6.3.1",
			"resolved": "https://registry.npmjs.org/semver/-/semver-6.3.1.tgz",
			"integrity": "sha512-BR7VvDCVHO+q2xBEWskxS6DJE1qRnb7DxzUrogb71CWoSficBxYsiAGd+Kl0mmq/MprG9yArRkyrQxTO6XjMzA==",
			"dev": true,
			"license": "ISC",
			"bin": {
				"semver": "bin/semver.js"
			}
		},
		"node_modules/babel-plugin-polyfill-corejs3": {
			"version": "0.10.6",
			"resolved": "https://registry.npmjs.org/babel-plugin-polyfill-corejs3/-/babel-plugin-polyfill-corejs3-0.10.6.tgz",
			"integrity": "sha512-b37+KR2i/khY5sKmWNVQAnitvquQbNdWy6lJdsr0kmquCKEEUgMKK4SboVM3HtfnZilfjr4MMQ7vY58FVWDtIA==",
			"dev": true,
			"license": "MIT",
			"dependencies": {
				"@babel/helper-define-polyfill-provider": "^0.6.2",
				"core-js-compat": "^3.38.0"
			},
			"peerDependencies": {
				"@babel/core": "^7.4.0 || ^8.0.0-0 <8.0.0"
			}
		},
		"node_modules/babel-plugin-polyfill-regenerator": {
			"version": "0.6.2",
			"resolved": "https://registry.npmjs.org/babel-plugin-polyfill-regenerator/-/babel-plugin-polyfill-regenerator-0.6.2.tgz",
			"integrity": "sha512-2R25rQZWP63nGwaAswvDazbPXfrM3HwVoBXK6HcqeKrSrL/JqcC/rDcf95l4r7LXLyxDXc8uQDa064GubtCABg==",
			"dev": true,
			"license": "MIT",
			"dependencies": {
				"@babel/helper-define-polyfill-provider": "^0.6.2"
			},
			"peerDependencies": {
				"@babel/core": "^7.4.0 || ^8.0.0-0 <8.0.0"
			}
		},
		"node_modules/balanced-match": {
			"version": "1.0.2",
			"resolved": "https://registry.npmjs.org/balanced-match/-/balanced-match-1.0.2.tgz",
			"integrity": "sha512-3oSeUO0TMV67hN1AmbXsK4yaqU7tjiHlbxRDZOpH0KW9+CeX4bRAaX0Anxt0tx2MrpRpWwQaPwIlISEJhYU5Pw==",
			"dev": true,
			"license": "MIT"
		},
		"node_modules/base64-js": {
			"version": "1.5.1",
			"resolved": "https://registry.npmjs.org/base64-js/-/base64-js-1.5.1.tgz",
			"integrity": "sha512-AKpaYlHn8t4SVbOHCy+b5+KKgvR4vrsD8vbvrbiQJps7fKDTkjkDry6ji0rUJjC0kzbNePLwzxq8iypo41qeWA==",
			"dev": true,
			"funding": [
				{
					"type": "github",
					"url": "https://github.com/sponsors/feross"
				},
				{
					"type": "patreon",
					"url": "https://www.patreon.com/feross"
				},
				{
					"type": "consulting",
					"url": "https://feross.org/support"
				}
			],
			"license": "MIT"
		},
		"node_modules/batch": {
			"version": "0.6.1",
			"resolved": "https://registry.npmjs.org/batch/-/batch-0.6.1.tgz",
			"integrity": "sha512-x+VAiMRL6UPkx+kudNvxTl6hB2XNNCG2r+7wixVfIYwu/2HKRXimwQyaumLjMveWvT2Hkd/cAJw+QBMfJ/EKVw==",
			"dev": true,
			"license": "MIT"
		},
		"node_modules/big.js": {
			"version": "5.2.2",
			"resolved": "https://registry.npmjs.org/big.js/-/big.js-5.2.2.tgz",
			"integrity": "sha512-vyL2OymJxmarO8gxMr0mhChsO9QGwhynfuu4+MHTAW6czfq9humCB7rKpUjDd9YUiDPU4mzpyupFSvOClAwbmQ==",
			"dev": true,
			"license": "MIT",
			"engines": {
				"node": "*"
			}
		},
		"node_modules/binary-extensions": {
			"version": "2.3.0",
			"resolved": "https://registry.npmjs.org/binary-extensions/-/binary-extensions-2.3.0.tgz",
			"integrity": "sha512-Ceh+7ox5qe7LJuLHoY0feh3pHuUDHAcRUeyL2VYghZwfpkNIy/+8Ocg0a3UuSoYzavmylwuLWQOf3hl0jjMMIw==",
			"dev": true,
			"license": "MIT",
			"engines": {
				"node": ">=8"
			},
			"funding": {
				"url": "https://github.com/sponsors/sindresorhus"
			}
		},
		"node_modules/bl": {
			"version": "4.1.0",
			"resolved": "https://registry.npmjs.org/bl/-/bl-4.1.0.tgz",
			"integrity": "sha512-1W07cM9gS6DcLperZfFSj+bWLtaPGSOHWhPiGzXmvVJbRLdG82sH/Kn8EtW1VqWVA54AKf2h5k5BbnIbwF3h6w==",
			"dev": true,
			"license": "MIT",
			"dependencies": {
				"buffer": "^5.5.0",
				"inherits": "^2.0.4",
				"readable-stream": "^3.4.0"
			}
		},
		"node_modules/body-parser": {
			"version": "1.20.2",
			"resolved": "https://registry.npmjs.org/body-parser/-/body-parser-1.20.2.tgz",
			"integrity": "sha512-ml9pReCu3M61kGlqoTm2umSXTlRTuGTx0bfYj+uIUKKYycG5NtSbeetV3faSU6R7ajOPw0g/J1PvK4qNy7s5bA==",
			"dev": true,
			"license": "MIT",
			"dependencies": {
				"bytes": "3.1.2",
				"content-type": "~1.0.5",
				"debug": "2.6.9",
				"depd": "2.0.0",
				"destroy": "1.2.0",
				"http-errors": "2.0.0",
				"iconv-lite": "0.4.24",
				"on-finished": "2.4.1",
				"qs": "6.11.0",
				"raw-body": "2.5.2",
				"type-is": "~1.6.18",
				"unpipe": "1.0.0"
			},
			"engines": {
				"node": ">= 0.8",
				"npm": "1.2.8000 || >= 1.4.16"
			}
		},
		"node_modules/body-parser/node_modules/bytes": {
			"version": "3.1.2",
			"resolved": "https://registry.npmjs.org/bytes/-/bytes-3.1.2.tgz",
			"integrity": "sha512-/Nf7TyzTx6S3yRJObOAV7956r8cr2+Oj8AC5dt8wSP3BQAoeX58NoHyCU8P8zGkNXStjTSi6fzO6F0pBdcYbEg==",
			"dev": true,
			"license": "MIT",
			"engines": {
				"node": ">= 0.8"
			}
		},
		"node_modules/body-parser/node_modules/debug": {
			"version": "2.6.9",
			"resolved": "https://registry.npmjs.org/debug/-/debug-2.6.9.tgz",
			"integrity": "sha512-bC7ElrdJaJnPbAP+1EotYvqZsb3ecl5wi6Bfi6BJTUcNowp6cvspg0jXznRTKDjm/E7AdgFBVeAPVMNcKGsHMA==",
			"dev": true,
			"license": "MIT",
			"dependencies": {
				"ms": "2.0.0"
			}
		},
		"node_modules/body-parser/node_modules/ms": {
			"version": "2.0.0",
			"resolved": "https://registry.npmjs.org/ms/-/ms-2.0.0.tgz",
			"integrity": "sha512-Tpp60P6IUJDTuOq/5Z8cdskzJujfwqfOTkrwIwj7IRISpnkJnT6SyJ4PCPnGMoFjC9ddhal5KVIYtAt97ix05A==",
			"dev": true,
			"license": "MIT"
		},
		"node_modules/bonjour-service": {
			"version": "1.2.1",
			"resolved": "https://registry.npmjs.org/bonjour-service/-/bonjour-service-1.2.1.tgz",
			"integrity": "sha512-oSzCS2zV14bh2kji6vNe7vrpJYCHGvcZnlffFQ1MEoX/WOeQ/teD8SYWKR942OI3INjq8OMNJlbPK5LLLUxFDw==",
			"dev": true,
			"license": "MIT",
			"dependencies": {
				"fast-deep-equal": "^3.1.3",
				"multicast-dns": "^7.2.5"
			}
		},
		"node_modules/boolbase": {
			"version": "1.0.0",
			"resolved": "https://registry.npmjs.org/boolbase/-/boolbase-1.0.0.tgz",
			"integrity": "sha512-JZOSA7Mo9sNGB8+UjSgzdLtokWAky1zbztM3WRLCbZ70/3cTANmQmOdR7y2g+J0e2WXywy1yS468tY+IruqEww==",
			"dev": true,
			"license": "ISC"
		},
		"node_modules/brace-expansion": {
			"version": "2.0.1",
			"resolved": "https://registry.npmjs.org/brace-expansion/-/brace-expansion-2.0.1.tgz",
			"integrity": "sha512-XnAIvQ8eM+kC6aULx6wuQiwVsnzsi9d3WxzV3FpWTGA19F621kwdbsAcFKXgKUHZWsy+mY6iL1sHTxWEFCytDA==",
			"dev": true,
			"license": "MIT",
			"dependencies": {
				"balanced-match": "^1.0.0"
			}
		},
		"node_modules/braces": {
			"version": "3.0.3",
			"resolved": "https://registry.npmjs.org/braces/-/braces-3.0.3.tgz",
			"integrity": "sha512-yQbXgO/OSZVD2IsiLlro+7Hf6Q18EJrKSEsdoMzKePKXct3gvD8oLcOQdIzGupr5Fj+EDe8gO/lxc1BzfMpxvA==",
			"dev": true,
			"license": "MIT",
			"dependencies": {
				"fill-range": "^7.1.1"
			},
			"engines": {
				"node": ">=8"
			}
		},
		"node_modules/browserslist": {
			"version": "4.23.3",
			"resolved": "https://registry.npmjs.org/browserslist/-/browserslist-4.23.3.tgz",
			"integrity": "sha512-btwCFJVjI4YWDNfau8RhZ+B1Q/VLoUITrm3RlP6y1tYGWIOa+InuYiRGXUBXo8nA1qKmHMyLB/iVQg5TT4eFoA==",
			"dev": true,
			"funding": [
				{
					"type": "opencollective",
					"url": "https://opencollective.com/browserslist"
				},
				{
					"type": "tidelift",
					"url": "https://tidelift.com/funding/github/npm/browserslist"
				},
				{
					"type": "github",
					"url": "https://github.com/sponsors/ai"
				}
			],
			"license": "MIT",
			"dependencies": {
				"caniuse-lite": "^1.0.30001646",
				"electron-to-chromium": "^1.5.4",
				"node-releases": "^2.0.18",
				"update-browserslist-db": "^1.1.0"
			},
			"bin": {
				"browserslist": "cli.js"
			},
			"engines": {
				"node": "^6 || ^7 || ^8 || ^9 || ^10 || ^11 || ^12 || >=13.7"
			}
		},
		"node_modules/buffer": {
			"version": "5.7.1",
			"resolved": "https://registry.npmjs.org/buffer/-/buffer-5.7.1.tgz",
			"integrity": "sha512-EHcyIPBQ4BSGlvjB16k5KgAJ27CIsHY/2JBmCRReo48y9rQ3MaUzWX3KVlBa4U7MyX02HdVj0K7C3WaB3ju7FQ==",
			"dev": true,
			"funding": [
				{
					"type": "github",
					"url": "https://github.com/sponsors/feross"
				},
				{
					"type": "patreon",
					"url": "https://www.patreon.com/feross"
				},
				{
					"type": "consulting",
					"url": "https://feross.org/support"
				}
			],
			"license": "MIT",
			"dependencies": {
				"base64-js": "^1.3.1",
				"ieee754": "^1.1.13"
			}
		},
		"node_modules/buffer-from": {
			"version": "1.1.2",
			"resolved": "https://registry.npmjs.org/buffer-from/-/buffer-from-1.1.2.tgz",
			"integrity": "sha512-E+XQCRwSbaaiChtv6k6Dwgc+bx+Bs6vuKJHHl5kox/BaKbhiXzqQOwK4cO22yElGp2OCmjwVhT3HmxgyPGnJfQ==",
			"dev": true,
			"license": "MIT"
		},
		"node_modules/bundle-name": {
			"version": "4.1.0",
			"resolved": "https://registry.npmjs.org/bundle-name/-/bundle-name-4.1.0.tgz",
			"integrity": "sha512-tjwM5exMg6BGRI+kNmTntNsvdZS1X8BFYS6tnJ2hdH0kVxM6/eVZ2xy+FqStSWvYmtfFMDLIxurorHwDKfDz5Q==",
			"dev": true,
			"license": "MIT",
			"dependencies": {
				"run-applescript": "^7.0.0"
			},
			"engines": {
				"node": ">=18"
			},
			"funding": {
				"url": "https://github.com/sponsors/sindresorhus"
			}
		},
		"node_modules/bytes": {
			"version": "3.0.0",
			"resolved": "https://registry.npmjs.org/bytes/-/bytes-3.0.0.tgz",
			"integrity": "sha512-pMhOfFDPiv9t5jjIXkHosWmkSyQbvsgEVNkz0ERHbuLh2T/7j4Mqqpz523Fe8MVY89KC6Sh/QfS2sM+SjgFDcw==",
			"dev": true,
			"license": "MIT",
			"engines": {
				"node": ">= 0.8"
			}
		},
		"node_modules/cacache": {
			"version": "18.0.4",
			"resolved": "https://registry.npmjs.org/cacache/-/cacache-18.0.4.tgz",
			"integrity": "sha512-B+L5iIa9mgcjLbliir2th36yEwPftrzteHYujzsx3dFP/31GCHcIeS8f5MGd80odLOjaOvSpU3EEAmRQptkxLQ==",
			"dev": true,
			"license": "ISC",
			"dependencies": {
				"@npmcli/fs": "^3.1.0",
				"fs-minipass": "^3.0.0",
				"glob": "^10.2.2",
				"lru-cache": "^10.0.1",
				"minipass": "^7.0.3",
				"minipass-collect": "^2.0.1",
				"minipass-flush": "^1.0.5",
				"minipass-pipeline": "^1.2.4",
				"p-map": "^4.0.0",
				"ssri": "^10.0.0",
				"tar": "^6.1.11",
				"unique-filename": "^3.0.0"
			},
			"engines": {
				"node": "^16.14.0 || >=18.0.0"
			}
		},
		"node_modules/cacache/node_modules/lru-cache": {
			"version": "10.4.3",
			"resolved": "https://registry.npmjs.org/lru-cache/-/lru-cache-10.4.3.tgz",
			"integrity": "sha512-JNAzZcXrCt42VGLuYz0zfAzDfAvJWW6AfYlDBQyDV5DClI2m5sAmK+OIO7s59XfsRsWHp02jAJrRadPRGTt6SQ==",
			"dev": true,
			"license": "ISC"
		},
		"node_modules/call-bind": {
			"version": "1.0.7",
			"resolved": "https://registry.npmjs.org/call-bind/-/call-bind-1.0.7.tgz",
			"integrity": "sha512-GHTSNSYICQ7scH7sZ+M2rFopRoLh8t2bLSW6BbgrtLsahOIB5iyAVJf9GjWK3cYTDaMj4XdBpM1cA6pIS0Kv2w==",
			"dev": true,
			"license": "MIT",
			"dependencies": {
				"es-define-property": "^1.0.0",
				"es-errors": "^1.3.0",
				"function-bind": "^1.1.2",
				"get-intrinsic": "^1.2.4",
				"set-function-length": "^1.2.1"
			},
			"engines": {
				"node": ">= 0.4"
			},
			"funding": {
				"url": "https://github.com/sponsors/ljharb"
			}
		},
		"node_modules/callsites": {
			"version": "3.1.0",
			"resolved": "https://registry.npmjs.org/callsites/-/callsites-3.1.0.tgz",
			"integrity": "sha512-P8BjAsXvZS+VIDUI11hHCQEv74YT67YUi5JJFNWIqL235sBmjX4+qx9Muvls5ivyNENctx46xQLQ3aTuE7ssaQ==",
			"dev": true,
			"license": "MIT",
			"engines": {
				"node": ">=6"
			}
		},
		"node_modules/camelcase-css": {
			"version": "2.0.1",
			"resolved": "https://registry.npmjs.org/camelcase-css/-/camelcase-css-2.0.1.tgz",
			"integrity": "sha512-QOSvevhslijgYwRx6Rv7zKdMF8lbRmx+uQGx2+vDc+KI/eBnsy9kit5aj23AgGu3pa4t9AgwbnXWqS+iOY+2aA==",
			"dev": true,
			"license": "MIT",
			"engines": {
				"node": ">= 6"
			}
		},
		"node_modules/caniuse-lite": {
			"version": "1.0.30001655",
			"resolved": "https://registry.npmjs.org/caniuse-lite/-/caniuse-lite-1.0.30001655.tgz",
			"integrity": "sha512-jRGVy3iSGO5Uutn2owlb5gR6qsGngTw9ZTb4ali9f3glshcNmJ2noam4Mo9zia5P9Dk3jNNydy7vQjuE5dQmfg==",
			"dev": true,
			"funding": [
				{
					"type": "opencollective",
					"url": "https://opencollective.com/browserslist"
				},
				{
					"type": "tidelift",
					"url": "https://tidelift.com/funding/github/npm/caniuse-lite"
				},
				{
					"type": "github",
					"url": "https://github.com/sponsors/ai"
				}
			],
			"license": "CC-BY-4.0"
		},
		"node_modules/chalk": {
			"version": "2.4.2",
			"resolved": "https://registry.npmjs.org/chalk/-/chalk-2.4.2.tgz",
			"integrity": "sha512-Mti+f9lpJNcwF4tWV8/OrTTtF1gZi+f8FqlyAdouralcFWFQWF2+NgCHShjkCb+IFBLq9buZwE1xckQU4peSuQ==",
			"dev": true,
			"license": "MIT",
			"dependencies": {
				"ansi-styles": "^3.2.1",
				"escape-string-regexp": "^1.0.5",
				"supports-color": "^5.3.0"
			},
			"engines": {
				"node": ">=4"
			}
		},
		"node_modules/chardet": {
			"version": "0.7.0",
			"resolved": "https://registry.npmjs.org/chardet/-/chardet-0.7.0.tgz",
			"integrity": "sha512-mT8iDcrh03qDGRRmoA2hmBJnxpllMR+0/0qlzjqZES6NdiWDcZkCNAk4rPFZ9Q85r27unkiNNg8ZOiwZXBHwcA==",
			"dev": true,
			"license": "MIT"
		},
		"node_modules/chokidar": {
			"version": "3.6.0",
			"resolved": "https://registry.npmjs.org/chokidar/-/chokidar-3.6.0.tgz",
			"integrity": "sha512-7VT13fmjotKpGipCW9JEQAusEPE+Ei8nl6/g4FBAmIm0GOOLMua9NDDo/DWp0ZAxCr3cPq5ZpBqmPAQgDda2Pw==",
			"dev": true,
			"license": "MIT",
			"dependencies": {
				"anymatch": "~3.1.2",
				"braces": "~3.0.2",
				"glob-parent": "~5.1.2",
				"is-binary-path": "~2.1.0",
				"is-glob": "~4.0.1",
				"normalize-path": "~3.0.0",
				"readdirp": "~3.6.0"
			},
			"engines": {
				"node": ">= 8.10.0"
			},
			"funding": {
				"url": "https://paulmillr.com/funding/"
			},
			"optionalDependencies": {
				"fsevents": "~2.3.2"
			}
		},
		"node_modules/chownr": {
			"version": "2.0.0",
			"resolved": "https://registry.npmjs.org/chownr/-/chownr-2.0.0.tgz",
			"integrity": "sha512-bIomtDF5KGpdogkLd9VspvFzk9KfpyyGlS8YFVZl7TGPBHL5snIOnxeshwVgPteQ9b4Eydl+pVbIyE1DcvCWgQ==",
			"dev": true,
			"license": "ISC",
			"engines": {
				"node": ">=10"
			}
		},
		"node_modules/chrome-trace-event": {
			"version": "1.0.4",
			"resolved": "https://registry.npmjs.org/chrome-trace-event/-/chrome-trace-event-1.0.4.tgz",
			"integrity": "sha512-rNjApaLzuwaOTjCiT8lSDdGN1APCiqkChLMJxJPWLunPAt5fy8xgU9/jNOchV84wfIxrA0lRQB7oCT8jrn/wrQ==",
			"dev": true,
			"license": "MIT",
			"engines": {
				"node": ">=6.0"
			}
		},
		"node_modules/clean-stack": {
			"version": "2.2.0",
			"resolved": "https://registry.npmjs.org/clean-stack/-/clean-stack-2.2.0.tgz",
			"integrity": "sha512-4diC9HaTE+KRAMWhDhrGOECgWZxoevMc5TlkObMqNSsVU62PYzXZ/SMTjzyGAFF1YusgxGcSWTEXBhp0CPwQ1A==",
			"dev": true,
			"license": "MIT",
			"engines": {
				"node": ">=6"
			}
		},
		"node_modules/cli-cursor": {
			"version": "5.0.0",
			"resolved": "https://registry.npmjs.org/cli-cursor/-/cli-cursor-5.0.0.tgz",
			"integrity": "sha512-aCj4O5wKyszjMmDT4tZj93kxyydN/K5zPWSCe6/0AV/AA1pqe5ZBIw0a2ZfPQV7lL5/yb5HsUreJ6UFAF1tEQw==",
			"dev": true,
			"license": "MIT",
			"dependencies": {
				"restore-cursor": "^5.0.0"
			},
			"engines": {
				"node": ">=18"
			},
			"funding": {
				"url": "https://github.com/sponsors/sindresorhus"
			}
		},
		"node_modules/cli-spinners": {
			"version": "2.9.2",
			"resolved": "https://registry.npmjs.org/cli-spinners/-/cli-spinners-2.9.2.tgz",
			"integrity": "sha512-ywqV+5MmyL4E7ybXgKys4DugZbX0FC6LnwrhjuykIjnK9k8OQacQ7axGKnjDXWNhns0xot3bZI5h55H8yo9cJg==",
			"dev": true,
			"license": "MIT",
			"engines": {
				"node": ">=6"
			},
			"funding": {
				"url": "https://github.com/sponsors/sindresorhus"
			}
		},
		"node_modules/cli-truncate": {
			"version": "4.0.0",
			"resolved": "https://registry.npmjs.org/cli-truncate/-/cli-truncate-4.0.0.tgz",
			"integrity": "sha512-nPdaFdQ0h/GEigbPClz11D0v/ZJEwxmeVZGeMo3Z5StPtUTkA9o1lD6QwoirYiSDzbcwn2XcjwmCp68W1IS4TA==",
			"dev": true,
			"license": "MIT",
			"dependencies": {
				"slice-ansi": "^5.0.0",
				"string-width": "^7.0.0"
			},
			"engines": {
				"node": ">=18"
			},
			"funding": {
				"url": "https://github.com/sponsors/sindresorhus"
			}
		},
		"node_modules/cli-width": {
			"version": "4.1.0",
			"resolved": "https://registry.npmjs.org/cli-width/-/cli-width-4.1.0.tgz",
			"integrity": "sha512-ouuZd4/dm2Sw5Gmqy6bGyNNNe1qt9RpmxveLSO7KcgsTnU7RXfsw+/bukWGo1abgBiMAic068rclZsO4IWmmxQ==",
			"dev": true,
			"license": "ISC",
			"engines": {
				"node": ">= 12"
			}
		},
		"node_modules/cliui": {
			"version": "8.0.1",
			"resolved": "https://registry.npmjs.org/cliui/-/cliui-8.0.1.tgz",
			"integrity": "sha512-BSeNnyus75C4//NQ9gQt1/csTXyo/8Sb+afLAkzAptFuMsod9HFokGNudZpi/oQV73hnVK+sR+5PVRMd+Dr7YQ==",
			"dev": true,
			"license": "ISC",
			"dependencies": {
				"string-width": "^4.2.0",
				"strip-ansi": "^6.0.1",
				"wrap-ansi": "^7.0.0"
			},
			"engines": {
				"node": ">=12"
			}
		},
		"node_modules/cliui/node_modules/ansi-styles": {
			"version": "4.3.0",
			"resolved": "https://registry.npmjs.org/ansi-styles/-/ansi-styles-4.3.0.tgz",
			"integrity": "sha512-zbB9rCJAT1rbjiVDb2hqKFHNYLxgtk8NURxZ3IZwD3F6NtxbXZQCnnSi1Lkx+IDohdPlFp222wVALIheZJQSEg==",
			"dev": true,
			"license": "MIT",
			"dependencies": {
				"color-convert": "^2.0.1"
			},
			"engines": {
				"node": ">=8"
			},
			"funding": {
				"url": "https://github.com/chalk/ansi-styles?sponsor=1"
			}
		},
		"node_modules/cliui/node_modules/color-convert": {
			"version": "2.0.1",
			"resolved": "https://registry.npmjs.org/color-convert/-/color-convert-2.0.1.tgz",
			"integrity": "sha512-RRECPsj7iu/xb5oKYcsFHSppFNnsj/52OVTRKb4zP5onXwVF3zVmmToNcOfGC+CRDpfK/U584fMg38ZHCaElKQ==",
			"dev": true,
			"license": "MIT",
			"dependencies": {
				"color-name": "~1.1.4"
			},
			"engines": {
				"node": ">=7.0.0"
			}
		},
		"node_modules/cliui/node_modules/color-name": {
			"version": "1.1.4",
			"resolved": "https://registry.npmjs.org/color-name/-/color-name-1.1.4.tgz",
			"integrity": "sha512-dOy+3AuW3a2wNbZHIuMZpTcgjGuLU/uBL/ubcZF9OXbDo8ff4O8yVp5Bf0efS8uEoYo5q4Fx7dY9OgQGXgAsQA==",
			"dev": true,
			"license": "MIT"
		},
		"node_modules/cliui/node_modules/emoji-regex": {
			"version": "8.0.0",
			"resolved": "https://registry.npmjs.org/emoji-regex/-/emoji-regex-8.0.0.tgz",
			"integrity": "sha512-MSjYzcWNOA0ewAHpz0MxpYFvwg6yjy1NG3xteoqz644VCo/RPgnr1/GGt+ic3iJTzQ8Eu3TdM14SawnVUmGE6A==",
			"dev": true,
			"license": "MIT"
		},
		"node_modules/cliui/node_modules/is-fullwidth-code-point": {
			"version": "3.0.0",
			"resolved": "https://registry.npmjs.org/is-fullwidth-code-point/-/is-fullwidth-code-point-3.0.0.tgz",
			"integrity": "sha512-zymm5+u+sCsSWyD9qNaejV3DFvhCKclKdizYaJUuHA83RLjb7nSuGnddCHGv0hk+KY7BMAlsWeK4Ueg6EV6XQg==",
			"dev": true,
			"license": "MIT",
			"engines": {
				"node": ">=8"
			}
		},
		"node_modules/cliui/node_modules/string-width": {
			"version": "4.2.3",
			"resolved": "https://registry.npmjs.org/string-width/-/string-width-4.2.3.tgz",
			"integrity": "sha512-wKyQRQpjJ0sIp62ErSZdGsjMJWsap5oRNihHhu6G7JVO/9jIB6UyevL+tXuOqrng8j/cxKTWyWUwvSTriiZz/g==",
			"dev": true,
			"license": "MIT",
			"dependencies": {
				"emoji-regex": "^8.0.0",
				"is-fullwidth-code-point": "^3.0.0",
				"strip-ansi": "^6.0.1"
			},
			"engines": {
				"node": ">=8"
			}
		},
		"node_modules/cliui/node_modules/wrap-ansi": {
			"version": "7.0.0",
			"resolved": "https://registry.npmjs.org/wrap-ansi/-/wrap-ansi-7.0.0.tgz",
			"integrity": "sha512-YVGIj2kamLSTxw6NsZjoBxfSwsn0ycdesmc4p+Q21c5zPuZ1pl+NfxVdxPtdHvmNVOQ6XSYG4AUtyt/Fi7D16Q==",
			"dev": true,
			"license": "MIT",
			"dependencies": {
				"ansi-styles": "^4.0.0",
				"string-width": "^4.1.0",
				"strip-ansi": "^6.0.0"
			},
			"engines": {
				"node": ">=10"
			},
			"funding": {
				"url": "https://github.com/chalk/wrap-ansi?sponsor=1"
			}
		},
		"node_modules/clone": {
			"version": "1.0.4",
			"resolved": "https://registry.npmjs.org/clone/-/clone-1.0.4.tgz",
			"integrity": "sha512-JQHZ2QMW6l3aH/j6xCqQThY/9OH4D/9ls34cgkUBiEeocRTU04tHfKPBsUK1PqZCUQM7GiA0IIXJSuXHI64Kbg==",
			"dev": true,
			"license": "MIT",
			"engines": {
				"node": ">=0.8"
			}
		},
		"node_modules/clone-deep": {
			"version": "4.0.1",
			"resolved": "https://registry.npmjs.org/clone-deep/-/clone-deep-4.0.1.tgz",
			"integrity": "sha512-neHB9xuzh/wk0dIHweyAXv2aPGZIVk3pLMe+/RNzINf17fe0OG96QroktYAUm7SM1PBnzTabaLboqqxDyMU+SQ==",
			"dev": true,
			"license": "MIT",
			"dependencies": {
				"is-plain-object": "^2.0.4",
				"kind-of": "^6.0.2",
				"shallow-clone": "^3.0.0"
			},
			"engines": {
				"node": ">=6"
			}
		},
		"node_modules/color-convert": {
			"version": "1.9.3",
			"resolved": "https://registry.npmjs.org/color-convert/-/color-convert-1.9.3.tgz",
			"integrity": "sha512-QfAUtd+vFdAtFQcC8CCyYt1fYWxSqAiK2cSD6zDB8N3cpsEBAvRxp9zOGg6G/SHHJYAT88/az/IuDGALsNVbGg==",
			"dev": true,
			"license": "MIT",
			"dependencies": {
				"color-name": "1.1.3"
			}
		},
		"node_modules/color-name": {
			"version": "1.1.3",
			"resolved": "https://registry.npmjs.org/color-name/-/color-name-1.1.3.tgz",
			"integrity": "sha512-72fSenhMw2HZMTVHeCA9KCmpEIbzWiQsjN+BHcBbS9vr1mtt+vJjPdksIBNUmKAW8TFUDPJK5SUU3QhE9NEXDw==",
			"dev": true,
			"license": "MIT"
		},
		"node_modules/colorette": {
			"version": "2.0.20",
			"resolved": "https://registry.npmjs.org/colorette/-/colorette-2.0.20.tgz",
			"integrity": "sha512-IfEDxwoWIjkeXL1eXcDiow4UbKjhLdq6/EuSVR9GMN7KVH3r9gQ83e73hsz1Nd1T3ijd5xv1wcWRYO+D6kCI2w==",
			"dev": true,
			"license": "MIT"
		},
		"node_modules/commander": {
			"version": "4.1.1",
			"resolved": "https://registry.npmjs.org/commander/-/commander-4.1.1.tgz",
			"integrity": "sha512-NOKm8xhkzAjzFx8B2v5OAHT+u5pRQc2UCa2Vq9jYL/31o2wi9mxBA7LIFs3sV5VSC49z6pEhfbMULvShKj26WA==",
			"dev": true,
			"license": "MIT",
			"engines": {
				"node": ">= 6"
			}
		},
		"node_modules/common-path-prefix": {
			"version": "3.0.0",
			"resolved": "https://registry.npmjs.org/common-path-prefix/-/common-path-prefix-3.0.0.tgz",
			"integrity": "sha512-QE33hToZseCH3jS0qN96O/bSh3kaw/h+Tq7ngyY9eWDUnTlTNUyqfqvCXioLe5Na5jFsL78ra/wuBU4iuEgd4w==",
			"dev": true,
			"license": "ISC"
		},
		"node_modules/compressible": {
			"version": "2.0.18",
			"resolved": "https://registry.npmjs.org/compressible/-/compressible-2.0.18.tgz",
			"integrity": "sha512-AF3r7P5dWxL8MxyITRMlORQNaOA2IkAFaTr4k7BUumjPtRpGDTZpl0Pb1XCO6JeDCBdp126Cgs9sMxqSjgYyRg==",
			"dev": true,
			"license": "MIT",
			"dependencies": {
				"mime-db": ">= 1.43.0 < 2"
			},
			"engines": {
				"node": ">= 0.6"
			}
		},
		"node_modules/compression": {
			"version": "1.7.4",
			"resolved": "https://registry.npmjs.org/compression/-/compression-1.7.4.tgz",
			"integrity": "sha512-jaSIDzP9pZVS4ZfQ+TzvtiWhdpFhE2RDHz8QJkpX9SIpLq88VueF5jJw6t+6CUQcAoA6t+x89MLrWAqpfDE8iQ==",
			"dev": true,
			"license": "MIT",
			"dependencies": {
				"accepts": "~1.3.5",
				"bytes": "3.0.0",
				"compressible": "~2.0.16",
				"debug": "2.6.9",
				"on-headers": "~1.0.2",
				"safe-buffer": "5.1.2",
				"vary": "~1.1.2"
			},
			"engines": {
				"node": ">= 0.8.0"
			}
		},
		"node_modules/compression/node_modules/debug": {
			"version": "2.6.9",
			"resolved": "https://registry.npmjs.org/debug/-/debug-2.6.9.tgz",
			"integrity": "sha512-bC7ElrdJaJnPbAP+1EotYvqZsb3ecl5wi6Bfi6BJTUcNowp6cvspg0jXznRTKDjm/E7AdgFBVeAPVMNcKGsHMA==",
			"dev": true,
			"license": "MIT",
			"dependencies": {
				"ms": "2.0.0"
			}
		},
		"node_modules/compression/node_modules/ms": {
			"version": "2.0.0",
			"resolved": "https://registry.npmjs.org/ms/-/ms-2.0.0.tgz",
			"integrity": "sha512-Tpp60P6IUJDTuOq/5Z8cdskzJujfwqfOTkrwIwj7IRISpnkJnT6SyJ4PCPnGMoFjC9ddhal5KVIYtAt97ix05A==",
			"dev": true,
			"license": "MIT"
		},
		"node_modules/compression/node_modules/safe-buffer": {
			"version": "5.1.2",
			"resolved": "https://registry.npmjs.org/safe-buffer/-/safe-buffer-5.1.2.tgz",
			"integrity": "sha512-Gd2UZBJDkXlY7GbJxfsE8/nvKkUEU1G38c1siN6QP6a9PT9MmHB8GnpscSmMJSoF8LOIrt8ud/wPtojys4G6+g==",
			"dev": true,
			"license": "MIT"
		},
		"node_modules/connect-history-api-fallback": {
			"version": "2.0.0",
			"resolved": "https://registry.npmjs.org/connect-history-api-fallback/-/connect-history-api-fallback-2.0.0.tgz",
			"integrity": "sha512-U73+6lQFmfiNPrYbXqr6kZ1i1wiRqXnp2nhMsINseWXO8lDau0LGEffJ8kQi4EjLZympVgRdvqjAgiZ1tgzDDA==",
			"dev": true,
			"license": "MIT",
			"engines": {
				"node": ">=0.8"
			}
		},
		"node_modules/content-disposition": {
			"version": "0.5.4",
			"resolved": "https://registry.npmjs.org/content-disposition/-/content-disposition-0.5.4.tgz",
			"integrity": "sha512-FveZTNuGw04cxlAiWbzi6zTAL/lhehaWbTtgluJh4/E95DqMwTmha3KZN1aAWA8cFIhHzMZUvLevkw5Rqk+tSQ==",
			"dev": true,
			"license": "MIT",
			"dependencies": {
				"safe-buffer": "5.2.1"
			},
			"engines": {
				"node": ">= 0.6"
			}
		},
		"node_modules/content-type": {
			"version": "1.0.5",
			"resolved": "https://registry.npmjs.org/content-type/-/content-type-1.0.5.tgz",
			"integrity": "sha512-nTjqfcBFEipKdXCv4YDQWCfmcLZKm81ldF0pAopTvyrFGVbcR6P/VAAd5G7N+0tTr8QqiU0tFadD6FK4NtJwOA==",
			"dev": true,
			"license": "MIT",
			"engines": {
				"node": ">= 0.6"
			}
		},
		"node_modules/convert-source-map": {
			"version": "1.9.0",
			"resolved": "https://registry.npmjs.org/convert-source-map/-/convert-source-map-1.9.0.tgz",
			"integrity": "sha512-ASFBup0Mz1uyiIjANan1jzLQami9z1PoYSZCiiYW2FczPbenXc45FZdBZLzOT+r6+iciuEModtmCti+hjaAk0A==",
			"dev": true,
			"license": "MIT"
		},
		"node_modules/cookie": {
			"version": "0.6.0",
			"resolved": "https://registry.npmjs.org/cookie/-/cookie-0.6.0.tgz",
			"integrity": "sha512-U71cyTamuh1CRNCfpGY6to28lxvNwPG4Guz/EVjgf3Jmzv0vlDp1atT9eS5dDjMYHucpHbWns6Lwf3BKz6svdw==",
			"dev": true,
			"license": "MIT",
			"engines": {
				"node": ">= 0.6"
			}
		},
		"node_modules/cookie-signature": {
			"version": "1.0.6",
			"resolved": "https://registry.npmjs.org/cookie-signature/-/cookie-signature-1.0.6.tgz",
			"integrity": "sha512-QADzlaHc8icV8I7vbaJXJwod9HWYp8uCqf1xa4OfNu1T7JVxQIrUgOWtHdNDtPiywmFbiS12VjotIXLrKM3orQ==",
			"dev": true,
			"license": "MIT"
		},
		"node_modules/copy-anything": {
			"version": "2.0.6",
			"resolved": "https://registry.npmjs.org/copy-anything/-/copy-anything-2.0.6.tgz",
			"integrity": "sha512-1j20GZTsvKNkc4BY3NpMOM8tt///wY3FpIzozTOFO2ffuZcV61nojHXVKIy3WM+7ADCy5FVhdZYHYDdgTU0yJw==",
			"dev": true,
			"license": "MIT",
			"dependencies": {
				"is-what": "^3.14.1"
			},
			"funding": {
				"url": "https://github.com/sponsors/mesqueeb"
			}
		},
		"node_modules/copy-webpack-plugin": {
			"version": "12.0.2",
			"resolved": "https://registry.npmjs.org/copy-webpack-plugin/-/copy-webpack-plugin-12.0.2.tgz",
			"integrity": "sha512-SNwdBeHyII+rWvee/bTnAYyO8vfVdcSTud4EIb6jcZ8inLeWucJE0DnxXQBjlQ5zlteuuvooGQy3LIyGxhvlOA==",
			"dev": true,
			"license": "MIT",
			"dependencies": {
				"fast-glob": "^3.3.2",
				"glob-parent": "^6.0.1",
				"globby": "^14.0.0",
				"normalize-path": "^3.0.0",
				"schema-utils": "^4.2.0",
				"serialize-javascript": "^6.0.2"
			},
			"engines": {
				"node": ">= 18.12.0"
			},
			"funding": {
				"type": "opencollective",
				"url": "https://opencollective.com/webpack"
			},
			"peerDependencies": {
				"webpack": "^5.1.0"
			}
		},
		"node_modules/copy-webpack-plugin/node_modules/glob-parent": {
			"version": "6.0.2",
			"resolved": "https://registry.npmjs.org/glob-parent/-/glob-parent-6.0.2.tgz",
			"integrity": "sha512-XxwI8EOhVQgWp6iDL+3b0r86f4d6AX6zSU55HfB4ydCEuXLXc5FcYeOu+nnGftS4TEju/11rt4KJPTMgbfmv4A==",
			"dev": true,
			"license": "ISC",
			"dependencies": {
				"is-glob": "^4.0.3"
			},
			"engines": {
				"node": ">=10.13.0"
			}
		},
		"node_modules/core-js-compat": {
			"version": "3.38.1",
			"resolved": "https://registry.npmjs.org/core-js-compat/-/core-js-compat-3.38.1.tgz",
			"integrity": "sha512-JRH6gfXxGmrzF3tZ57lFx97YARxCXPaMzPo6jELZhv88pBH5VXpQ+y0znKGlFnzuaihqhLbefxSJxWJMPtfDzw==",
			"dev": true,
			"license": "MIT",
			"dependencies": {
				"browserslist": "^4.23.3"
			},
			"funding": {
				"type": "opencollective",
				"url": "https://opencollective.com/core-js"
			}
		},
		"node_modules/core-util-is": {
			"version": "1.0.3",
			"resolved": "https://registry.npmjs.org/core-util-is/-/core-util-is-1.0.3.tgz",
			"integrity": "sha512-ZQBvi1DcpJ4GDqanjucZ2Hj3wEO5pZDS89BWbkcrvdxksJorwUDDZamX9ldFkp9aw2lmBDLgkObEA4DWNJ9FYQ==",
			"dev": true,
			"license": "MIT"
		},
		"node_modules/cosmiconfig": {
			"version": "9.0.0",
			"resolved": "https://registry.npmjs.org/cosmiconfig/-/cosmiconfig-9.0.0.tgz",
			"integrity": "sha512-itvL5h8RETACmOTFc4UfIyB2RfEHi71Ax6E/PivVxq9NseKbOWpeyHEOIbmAw1rs8Ak0VursQNww7lf7YtUwzg==",
			"dev": true,
			"license": "MIT",
			"dependencies": {
				"env-paths": "^2.2.1",
				"import-fresh": "^3.3.0",
				"js-yaml": "^4.1.0",
				"parse-json": "^5.2.0"
			},
			"engines": {
				"node": ">=14"
			},
			"funding": {
				"url": "https://github.com/sponsors/d-fischer"
			},
			"peerDependencies": {
				"typescript": ">=4.9.5"
			},
			"peerDependenciesMeta": {
				"typescript": {
					"optional": true
				}
			}
		},
		"node_modules/critters": {
			"version": "0.0.24",
			"resolved": "https://registry.npmjs.org/critters/-/critters-0.0.24.tgz",
			"integrity": "sha512-Oyqew0FGM0wYUSNqR0L6AteO5MpMoUU0rhKRieXeiKs+PmRTxiJMyaunYB2KF6fQ3dzChXKCpbFOEJx3OQ1v/Q==",
			"dev": true,
			"license": "Apache-2.0",
			"dependencies": {
				"chalk": "^4.1.0",
				"css-select": "^5.1.0",
				"dom-serializer": "^2.0.0",
				"domhandler": "^5.0.2",
				"htmlparser2": "^8.0.2",
				"postcss": "^8.4.23",
				"postcss-media-query-parser": "^0.2.3"
			}
		},
		"node_modules/critters/node_modules/ansi-styles": {
			"version": "4.3.0",
			"resolved": "https://registry.npmjs.org/ansi-styles/-/ansi-styles-4.3.0.tgz",
			"integrity": "sha512-zbB9rCJAT1rbjiVDb2hqKFHNYLxgtk8NURxZ3IZwD3F6NtxbXZQCnnSi1Lkx+IDohdPlFp222wVALIheZJQSEg==",
			"dev": true,
			"license": "MIT",
			"dependencies": {
				"color-convert": "^2.0.1"
			},
			"engines": {
				"node": ">=8"
			},
			"funding": {
				"url": "https://github.com/chalk/ansi-styles?sponsor=1"
			}
		},
		"node_modules/critters/node_modules/chalk": {
			"version": "4.1.2",
			"resolved": "https://registry.npmjs.org/chalk/-/chalk-4.1.2.tgz",
			"integrity": "sha512-oKnbhFyRIXpUuez8iBMmyEa4nbj4IOQyuhc/wy9kY7/WVPcwIO9VA668Pu8RkO7+0G76SLROeyw9CpQ061i4mA==",
			"dev": true,
			"license": "MIT",
			"dependencies": {
				"ansi-styles": "^4.1.0",
				"supports-color": "^7.1.0"
			},
			"engines": {
				"node": ">=10"
			},
			"funding": {
				"url": "https://github.com/chalk/chalk?sponsor=1"
			}
		},
		"node_modules/critters/node_modules/color-convert": {
			"version": "2.0.1",
			"resolved": "https://registry.npmjs.org/color-convert/-/color-convert-2.0.1.tgz",
			"integrity": "sha512-RRECPsj7iu/xb5oKYcsFHSppFNnsj/52OVTRKb4zP5onXwVF3zVmmToNcOfGC+CRDpfK/U584fMg38ZHCaElKQ==",
			"dev": true,
			"license": "MIT",
			"dependencies": {
				"color-name": "~1.1.4"
			},
			"engines": {
				"node": ">=7.0.0"
			}
		},
		"node_modules/critters/node_modules/color-name": {
			"version": "1.1.4",
			"resolved": "https://registry.npmjs.org/color-name/-/color-name-1.1.4.tgz",
			"integrity": "sha512-dOy+3AuW3a2wNbZHIuMZpTcgjGuLU/uBL/ubcZF9OXbDo8ff4O8yVp5Bf0efS8uEoYo5q4Fx7dY9OgQGXgAsQA==",
			"dev": true,
			"license": "MIT"
		},
		"node_modules/critters/node_modules/has-flag": {
			"version": "4.0.0",
			"resolved": "https://registry.npmjs.org/has-flag/-/has-flag-4.0.0.tgz",
			"integrity": "sha512-EykJT/Q1KjTWctppgIAgfSO0tKVuZUjhgMr17kqTumMl6Afv3EISleU7qZUzoXDFTAHTDC4NOoG/ZxU3EvlMPQ==",
			"dev": true,
			"license": "MIT",
			"engines": {
				"node": ">=8"
			}
		},
		"node_modules/critters/node_modules/supports-color": {
			"version": "7.2.0",
			"resolved": "https://registry.npmjs.org/supports-color/-/supports-color-7.2.0.tgz",
			"integrity": "sha512-qpCAvRl9stuOHveKsn7HncJRvv501qIacKzQlO/+Lwxc9+0q2wLyv4Dfvt80/DPn2pqOBsJdDiogXGR9+OvwRw==",
			"dev": true,
			"license": "MIT",
			"dependencies": {
				"has-flag": "^4.0.0"
			},
			"engines": {
				"node": ">=8"
			}
		},
		"node_modules/cross-spawn": {
			"version": "7.0.3",
			"resolved": "https://registry.npmjs.org/cross-spawn/-/cross-spawn-7.0.3.tgz",
			"integrity": "sha512-iRDPJKUPVEND7dHPO8rkbOnPpyDygcDFtWjpeWNCgy8WP2rXcxXL8TskReQl6OrB2G7+UJrags1q15Fudc7G6w==",
			"dev": true,
			"license": "MIT",
			"dependencies": {
				"path-key": "^3.1.0",
				"shebang-command": "^2.0.0",
				"which": "^2.0.1"
			},
			"engines": {
				"node": ">= 8"
			}
		},
		"node_modules/cross-spawn/node_modules/isexe": {
			"version": "2.0.0",
			"resolved": "https://registry.npmjs.org/isexe/-/isexe-2.0.0.tgz",
			"integrity": "sha512-RHxMLp9lnKHGHRng9QFhRCMbYAcVpn69smSGcq3f36xjgVVWThj4qqLbTLlq7Ssj8B+fIQ1EuCEGI2lKsyQeIw==",
			"dev": true,
			"license": "ISC"
		},
		"node_modules/cross-spawn/node_modules/which": {
			"version": "2.0.2",
			"resolved": "https://registry.npmjs.org/which/-/which-2.0.2.tgz",
			"integrity": "sha512-BLI3Tl1TW3Pvl70l3yq3Y64i+awpwXqsGBYWkkqMtnbXgrMD+yj7rhW0kuEDxzJaYXGjEW5ogapKNMEKNMjibA==",
			"dev": true,
			"license": "ISC",
			"dependencies": {
				"isexe": "^2.0.0"
			},
			"bin": {
				"node-which": "bin/node-which"
			},
			"engines": {
				"node": ">= 8"
			}
		},
		"node_modules/css-loader": {
			"version": "7.1.2",
			"resolved": "https://registry.npmjs.org/css-loader/-/css-loader-7.1.2.tgz",
			"integrity": "sha512-6WvYYn7l/XEGN8Xu2vWFt9nVzrCn39vKyTEFf/ExEyoksJjjSZV/0/35XPlMbpnr6VGhZIUg5yJrL8tGfes/FA==",
			"dev": true,
			"license": "MIT",
			"dependencies": {
				"icss-utils": "^5.1.0",
				"postcss": "^8.4.33",
				"postcss-modules-extract-imports": "^3.1.0",
				"postcss-modules-local-by-default": "^4.0.5",
				"postcss-modules-scope": "^3.2.0",
				"postcss-modules-values": "^4.0.0",
				"postcss-value-parser": "^4.2.0",
				"semver": "^7.5.4"
			},
			"engines": {
				"node": ">= 18.12.0"
			},
			"funding": {
				"type": "opencollective",
				"url": "https://opencollective.com/webpack"
			},
			"peerDependencies": {
				"@rspack/core": "0.x || 1.x",
				"webpack": "^5.27.0"
			},
			"peerDependenciesMeta": {
				"@rspack/core": {
					"optional": true
				},
				"webpack": {
					"optional": true
				}
			}
		},
		"node_modules/css-select": {
			"version": "5.1.0",
			"resolved": "https://registry.npmjs.org/css-select/-/css-select-5.1.0.tgz",
			"integrity": "sha512-nwoRF1rvRRnnCqqY7updORDsuqKzqYJ28+oSMaJMMgOauh3fvwHqMS7EZpIPqK8GL+g9mKxF1vP/ZjSeNjEVHg==",
			"dev": true,
			"license": "BSD-2-Clause",
			"dependencies": {
				"boolbase": "^1.0.0",
				"css-what": "^6.1.0",
				"domhandler": "^5.0.2",
				"domutils": "^3.0.1",
				"nth-check": "^2.0.1"
			},
			"funding": {
				"url": "https://github.com/sponsors/fb55"
			}
		},
		"node_modules/css-selector-tokenizer": {
			"version": "0.8.0",
			"resolved": "https://registry.npmjs.org/css-selector-tokenizer/-/css-selector-tokenizer-0.8.0.tgz",
			"integrity": "sha512-Jd6Ig3/pe62/qe5SBPTN8h8LeUg/pT4lLgtavPf7updwwHpvFzxvOQBHYj2LZDMjUnBzgvIUSjRcf6oT5HzHFg==",
			"dev": true,
			"license": "MIT",
			"dependencies": {
				"cssesc": "^3.0.0",
				"fastparse": "^1.1.2"
			}
		},
		"node_modules/css-what": {
			"version": "6.1.0",
			"resolved": "https://registry.npmjs.org/css-what/-/css-what-6.1.0.tgz",
			"integrity": "sha512-HTUrgRJ7r4dsZKU6GjmpfRK1O76h97Z8MfS1G0FozR+oF2kG6Vfe8JE6zwrkbxigziPHinCJ+gCPjA9EaBDtRw==",
			"dev": true,
			"license": "BSD-2-Clause",
			"engines": {
				"node": ">= 6"
			},
			"funding": {
				"url": "https://github.com/sponsors/fb55"
			}
		},
		"node_modules/cssesc": {
			"version": "3.0.0",
			"resolved": "https://registry.npmjs.org/cssesc/-/cssesc-3.0.0.tgz",
			"integrity": "sha512-/Tb/JcjK111nNScGob5MNtsntNM1aCNUDipB/TkwZFhyDrrE47SOx/18wF2bbjgc3ZzCSKW1T5nt5EbFoAz/Vg==",
			"dev": true,
			"license": "MIT",
			"bin": {
				"cssesc": "bin/cssesc"
			},
			"engines": {
				"node": ">=4"
			}
		},
		"node_modules/culori": {
			"version": "3.3.0",
			"resolved": "https://registry.npmjs.org/culori/-/culori-3.3.0.tgz",
			"integrity": "sha512-pHJg+jbuFsCjz9iclQBqyL3B2HLCBF71BwVNujUYEvCeQMvV97R59MNK3R2+jgJ3a1fcZgI9B3vYgz8lzr/BFQ==",
			"dev": true,
			"license": "MIT",
			"engines": {
				"node": "^12.20.0 || ^14.13.1 || >=16.0.0"
			}
		},
		"node_modules/daisyui": {
			"version": "4.12.10",
			"resolved": "https://registry.npmjs.org/daisyui/-/daisyui-4.12.10.tgz",
			"integrity": "sha512-jp1RAuzbHhGdXmn957Z2XsTZStXGHzFfF0FgIOZj3Wv9sH7OZgLfXTRZNfKVYxltGUOBsG1kbWAdF5SrqjebvA==",
			"dev": true,
			"license": "MIT",
			"dependencies": {
				"css-selector-tokenizer": "^0.8",
				"culori": "^3",
				"picocolors": "^1",
				"postcss-js": "^4"
			},
			"engines": {
				"node": ">=16.9.0"
			},
			"funding": {
				"type": "opencollective",
				"url": "https://opencollective.com/daisyui"
			}
		},
		"node_modules/debug": {
			"version": "4.3.6",
			"resolved": "https://registry.npmjs.org/debug/-/debug-4.3.6.tgz",
			"integrity": "sha512-O/09Bd4Z1fBrU4VzkhFqVgpPzaGbw6Sm9FEkBT1A/YBXQFGuuSxa1dN2nxgxS34JmKXqYx8CZAwEVoJFImUXIg==",
			"dev": true,
			"license": "MIT",
			"dependencies": {
				"ms": "2.1.2"
			},
			"engines": {
				"node": ">=6.0"
			},
			"peerDependenciesMeta": {
				"supports-color": {
					"optional": true
				}
			}
		},
		"node_modules/default-browser": {
			"version": "5.2.1",
			"resolved": "https://registry.npmjs.org/default-browser/-/default-browser-5.2.1.tgz",
			"integrity": "sha512-WY/3TUME0x3KPYdRRxEJJvXRHV4PyPoUsxtZa78lwItwRQRHhd2U9xOscaT/YTf8uCXIAjeJOFBVEh/7FtD8Xg==",
			"dev": true,
			"license": "MIT",
			"dependencies": {
				"bundle-name": "^4.1.0",
				"default-browser-id": "^5.0.0"
			},
			"engines": {
				"node": ">=18"
			},
			"funding": {
				"url": "https://github.com/sponsors/sindresorhus"
			}
		},
		"node_modules/default-browser-id": {
			"version": "5.0.0",
			"resolved": "https://registry.npmjs.org/default-browser-id/-/default-browser-id-5.0.0.tgz",
			"integrity": "sha512-A6p/pu/6fyBcA1TRz/GqWYPViplrftcW2gZC9q79ngNCKAeR/X3gcEdXQHl4KNXV+3wgIJ1CPkJQ3IHM6lcsyA==",
			"dev": true,
			"license": "MIT",
			"engines": {
				"node": ">=18"
			},
			"funding": {
				"url": "https://github.com/sponsors/sindresorhus"
			}
		},
		"node_modules/default-gateway": {
			"version": "6.0.3",
			"resolved": "https://registry.npmjs.org/default-gateway/-/default-gateway-6.0.3.tgz",
			"integrity": "sha512-fwSOJsbbNzZ/CUFpqFBqYfYNLj1NbMPm8MMCIzHjC83iSJRBEGmDUxU+WP661BaBQImeC2yHwXtz+P/O9o+XEg==",
			"dev": true,
			"license": "BSD-2-Clause",
			"dependencies": {
				"execa": "^5.0.0"
			},
			"engines": {
				"node": ">= 10"
			}
		},
		"node_modules/defaults": {
			"version": "1.0.4",
			"resolved": "https://registry.npmjs.org/defaults/-/defaults-1.0.4.tgz",
			"integrity": "sha512-eFuaLoy/Rxalv2kr+lqMlUnrDWV+3j4pljOIJgLIhI058IQfWJ7vXhyEIHu+HtC738klGALYxOKDO0bQP3tg8A==",
			"dev": true,
			"license": "MIT",
			"dependencies": {
				"clone": "^1.0.2"
			},
			"funding": {
				"url": "https://github.com/sponsors/sindresorhus"
			}
		},
		"node_modules/define-data-property": {
			"version": "1.1.4",
			"resolved": "https://registry.npmjs.org/define-data-property/-/define-data-property-1.1.4.tgz",
			"integrity": "sha512-rBMvIzlpA8v6E+SJZoo++HAYqsLrkg7MSfIinMPFhmkorw7X+dOXVJQs+QT69zGkzMyfDnIMN2Wid1+NbL3T+A==",
			"dev": true,
			"license": "MIT",
			"dependencies": {
				"es-define-property": "^1.0.0",
				"es-errors": "^1.3.0",
				"gopd": "^1.0.1"
			},
			"engines": {
				"node": ">= 0.4"
			},
			"funding": {
				"url": "https://github.com/sponsors/ljharb"
			}
		},
		"node_modules/define-lazy-prop": {
			"version": "3.0.0",
			"resolved": "https://registry.npmjs.org/define-lazy-prop/-/define-lazy-prop-3.0.0.tgz",
			"integrity": "sha512-N+MeXYoqr3pOgn8xfyRPREN7gHakLYjhsHhWGT3fWAiL4IkAt0iDw14QiiEm2bE30c5XX5q0FtAA3CK5f9/BUg==",
			"dev": true,
			"license": "MIT",
			"engines": {
				"node": ">=12"
			},
			"funding": {
				"url": "https://github.com/sponsors/sindresorhus"
			}
		},
		"node_modules/depd": {
			"version": "2.0.0",
			"resolved": "https://registry.npmjs.org/depd/-/depd-2.0.0.tgz",
			"integrity": "sha512-g7nH6P6dyDioJogAAGprGpCtVImJhpPk/roCzdb3fIh61/s/nPsfR6onyMwkCAR/OlC3yBC0lESvUoQEAssIrw==",
			"dev": true,
			"license": "MIT",
			"engines": {
				"node": ">= 0.8"
			}
		},
		"node_modules/destroy": {
			"version": "1.2.0",
			"resolved": "https://registry.npmjs.org/destroy/-/destroy-1.2.0.tgz",
			"integrity": "sha512-2sJGJTaXIIaR1w4iJSNoN0hnMY7Gpc/n8D4qSCJw8QqFWXf7cuAgnEHxBpweaVcPevC2l3KpjYCx3NypQQgaJg==",
			"dev": true,
			"license": "MIT",
			"engines": {
				"node": ">= 0.8",
				"npm": "1.2.8000 || >= 1.4.16"
			}
		},
		"node_modules/detect-libc": {
			"version": "2.0.3",
			"resolved": "https://registry.npmjs.org/detect-libc/-/detect-libc-2.0.3.tgz",
			"integrity": "sha512-bwy0MGW55bG41VqxxypOsdSdGqLwXPI/focwgTYCFMbdUiBAxLg9CFzG08sz2aqzknwiX7Hkl0bQENjg8iLByw==",
			"dev": true,
			"license": "Apache-2.0",
			"engines": {
				"node": ">=8"
			}
		},
		"node_modules/detect-node": {
			"version": "2.1.0",
			"resolved": "https://registry.npmjs.org/detect-node/-/detect-node-2.1.0.tgz",
			"integrity": "sha512-T0NIuQpnTvFDATNuHN5roPwSBG83rFsuO+MXXH9/3N1eFbn4wcPjttvjMLEPWJ0RGUYgQE7cGgS3tNxbqCGM7g==",
			"dev": true,
			"license": "MIT"
		},
		"node_modules/didyoumean": {
			"version": "1.2.2",
			"resolved": "https://registry.npmjs.org/didyoumean/-/didyoumean-1.2.2.tgz",
			"integrity": "sha512-gxtyfqMg7GKyhQmb056K7M3xszy/myH8w+B4RT+QXBQsvAOdc3XymqDDPHx1BgPgsdAA5SIifona89YtRATDzw==",
			"dev": true,
			"license": "Apache-2.0"
		},
		"node_modules/dlv": {
			"version": "1.1.3",
			"resolved": "https://registry.npmjs.org/dlv/-/dlv-1.1.3.tgz",
			"integrity": "sha512-+HlytyjlPKnIG8XuRG8WvmBP8xs8P71y+SKKS6ZXWoEgLuePxtDoUEiH7WkdePWrQ5JBpE6aoVqfZfJUQkjXwA==",
			"dev": true,
			"license": "MIT"
		},
		"node_modules/dns-packet": {
			"version": "5.6.1",
			"resolved": "https://registry.npmjs.org/dns-packet/-/dns-packet-5.6.1.tgz",
			"integrity": "sha512-l4gcSouhcgIKRvyy99RNVOgxXiicE+2jZoNmaNmZ6JXiGajBOJAesk1OBlJuM5k2c+eudGdLxDqXuPCKIj6kpw==",
			"dev": true,
			"license": "MIT",
			"dependencies": {
				"@leichtgewicht/ip-codec": "^2.0.1"
			},
			"engines": {
				"node": ">=6"
			}
		},
		"node_modules/dom-serializer": {
			"version": "2.0.0",
			"resolved": "https://registry.npmjs.org/dom-serializer/-/dom-serializer-2.0.0.tgz",
			"integrity": "sha512-wIkAryiqt/nV5EQKqQpo3SToSOV9J0DnbJqwK7Wv/Trc92zIAYZ4FlMu+JPFW1DfGFt81ZTCGgDEabffXeLyJg==",
			"dev": true,
			"license": "MIT",
			"dependencies": {
				"domelementtype": "^2.3.0",
				"domhandler": "^5.0.2",
				"entities": "^4.2.0"
			},
			"funding": {
				"url": "https://github.com/cheeriojs/dom-serializer?sponsor=1"
			}
		},
		"node_modules/domelementtype": {
			"version": "2.3.0",
			"resolved": "https://registry.npmjs.org/domelementtype/-/domelementtype-2.3.0.tgz",
			"integrity": "sha512-OLETBj6w0OsagBwdXnPdN0cnMfF9opN69co+7ZrbfPGrdpPVNBUj02spi6B1N7wChLQiPn4CSH/zJvXw56gmHw==",
			"dev": true,
			"funding": [
				{
					"type": "github",
					"url": "https://github.com/sponsors/fb55"
				}
			],
			"license": "BSD-2-Clause"
		},
		"node_modules/domhandler": {
			"version": "5.0.3",
			"resolved": "https://registry.npmjs.org/domhandler/-/domhandler-5.0.3.tgz",
			"integrity": "sha512-cgwlv/1iFQiFnU96XXgROh8xTeetsnJiDsTc7TYCLFd9+/WNkIqPTxiM/8pSd8VIrhXGTf1Ny1q1hquVqDJB5w==",
			"dev": true,
			"license": "BSD-2-Clause",
			"dependencies": {
				"domelementtype": "^2.3.0"
			},
			"engines": {
				"node": ">= 4"
			},
			"funding": {
				"url": "https://github.com/fb55/domhandler?sponsor=1"
			}
		},
		"node_modules/domutils": {
			"version": "3.1.0",
			"resolved": "https://registry.npmjs.org/domutils/-/domutils-3.1.0.tgz",
			"integrity": "sha512-H78uMmQtI2AhgDJjWeQmHwJJ2bLPD3GMmO7Zja/ZZh84wkm+4ut+IUnUdRa8uCGX88DiVx1j6FRe1XfxEgjEZA==",
			"dev": true,
			"license": "BSD-2-Clause",
			"dependencies": {
				"dom-serializer": "^2.0.0",
				"domelementtype": "^2.3.0",
				"domhandler": "^5.0.3"
			},
			"funding": {
				"url": "https://github.com/fb55/domutils?sponsor=1"
			}
		},
		"node_modules/eastasianwidth": {
			"version": "0.2.0",
			"resolved": "https://registry.npmjs.org/eastasianwidth/-/eastasianwidth-0.2.0.tgz",
			"integrity": "sha512-I88TYZWc9XiYHRQ4/3c5rjjfgkjhLyW2luGIheGERbNQ6OY7yTybanSpDXZa8y7VUP9YmDcYa+eyq4ca7iLqWA==",
			"dev": true,
			"license": "MIT"
		},
		"node_modules/ee-first": {
			"version": "1.1.1",
			"resolved": "https://registry.npmjs.org/ee-first/-/ee-first-1.1.1.tgz",
			"integrity": "sha512-WMwm9LhRUo+WUaRN+vRuETqG89IgZphVSNkdFgeb6sS/E4OrDIN7t48CAewSHXc6C8lefD8KKfr5vY61brQlow==",
			"dev": true,
			"license": "MIT"
		},
		"node_modules/electron-to-chromium": {
			"version": "1.5.13",
			"resolved": "https://registry.npmjs.org/electron-to-chromium/-/electron-to-chromium-1.5.13.tgz",
			"integrity": "sha512-lbBcvtIJ4J6sS4tb5TLp1b4LyfCdMkwStzXPyAgVgTRAsep4bvrAGaBOP7ZJtQMNJpSQ9SqG4brWOroNaQtm7Q==",
			"dev": true,
			"license": "ISC"
		},
		"node_modules/emoji-regex": {
			"version": "10.4.0",
			"resolved": "https://registry.npmjs.org/emoji-regex/-/emoji-regex-10.4.0.tgz",
			"integrity": "sha512-EC+0oUMY1Rqm4O6LLrgjtYDvcVYTy7chDnM4Q7030tP4Kwj3u/pR6gP9ygnp2CJMK5Gq+9Q2oqmrFJAz01DXjw==",
			"dev": true,
			"license": "MIT"
		},
		"node_modules/emojis-list": {
			"version": "3.0.0",
			"resolved": "https://registry.npmjs.org/emojis-list/-/emojis-list-3.0.0.tgz",
			"integrity": "sha512-/kyM18EfinwXZbno9FyUGeFh87KC8HRQBQGildHZbEuRyWFOmv1U10o9BBp8XVZDVNNuQKyIGIu5ZYAAXJ0V2Q==",
			"dev": true,
			"license": "MIT",
			"engines": {
				"node": ">= 4"
			}
		},
		"node_modules/encodeurl": {
			"version": "1.0.2",
			"resolved": "https://registry.npmjs.org/encodeurl/-/encodeurl-1.0.2.tgz",
			"integrity": "sha512-TPJXq8JqFaVYm2CWmPvnP2Iyo4ZSM7/QKcSmuMLDObfpH5fi7RUGmd/rTDf+rut/saiDiQEeVTNgAmJEdAOx0w==",
			"dev": true,
			"license": "MIT",
			"engines": {
				"node": ">= 0.8"
			}
		},
		"node_modules/encoding": {
			"version": "0.1.13",
			"resolved": "https://registry.npmjs.org/encoding/-/encoding-0.1.13.tgz",
			"integrity": "sha512-ETBauow1T35Y/WZMkio9jiM0Z5xjHHmJ4XmjZOq1l/dXz3lr2sRn87nJy20RupqSh1F2m3HHPSp8ShIPQJrJ3A==",
			"dev": true,
			"license": "MIT",
			"optional": true,
			"dependencies": {
				"iconv-lite": "^0.6.2"
			}
		},
		"node_modules/encoding/node_modules/iconv-lite": {
			"version": "0.6.3",
			"resolved": "https://registry.npmjs.org/iconv-lite/-/iconv-lite-0.6.3.tgz",
			"integrity": "sha512-4fCk79wshMdzMp2rH06qWrJE4iolqLhCUH+OiuIgU++RB0+94NlDL81atO7GX55uUKueo0txHNtvEyI6D7WdMw==",
			"dev": true,
			"license": "MIT",
			"optional": true,
			"dependencies": {
				"safer-buffer": ">= 2.1.2 < 3.0.0"
			},
			"engines": {
				"node": ">=0.10.0"
			}
		},
		"node_modules/enhanced-resolve": {
			"version": "5.17.1",
			"resolved": "https://registry.npmjs.org/enhanced-resolve/-/enhanced-resolve-5.17.1.tgz",
			"integrity": "sha512-LMHl3dXhTcfv8gM4kEzIUeTQ+7fpdA0l2tUf34BddXPkz2A5xJ5L/Pchd5BL6rdccM9QGvu0sWZzK1Z1t4wwyg==",
			"dev": true,
			"license": "MIT",
			"dependencies": {
				"graceful-fs": "^4.2.4",
				"tapable": "^2.2.0"
			},
			"engines": {
				"node": ">=10.13.0"
			}
		},
		"node_modules/entities": {
			"version": "4.5.0",
			"resolved": "https://registry.npmjs.org/entities/-/entities-4.5.0.tgz",
			"integrity": "sha512-V0hjH4dGPh9Ao5p0MoRY6BVqtwCjhz6vI5LT8AJ55H+4g9/4vbHx1I54fS0XuclLhDHArPQCiMjDxjaL8fPxhw==",
			"dev": true,
			"license": "BSD-2-Clause",
			"engines": {
				"node": ">=0.12"
			},
			"funding": {
				"url": "https://github.com/fb55/entities?sponsor=1"
			}
		},
		"node_modules/env-paths": {
			"version": "2.2.1",
			"resolved": "https://registry.npmjs.org/env-paths/-/env-paths-2.2.1.tgz",
			"integrity": "sha512-+h1lkLKhZMTYjog1VEpJNG7NZJWcuc2DDk/qsqSTRRCOXiLjeQ1d1/udrUGhqMxUgAlwKNZ0cf2uqan5GLuS2A==",
			"dev": true,
			"license": "MIT",
			"engines": {
				"node": ">=6"
			}
		},
		"node_modules/environment": {
			"version": "1.1.0",
			"resolved": "https://registry.npmjs.org/environment/-/environment-1.1.0.tgz",
			"integrity": "sha512-xUtoPkMggbz0MPyPiIWr1Kp4aeWJjDZ6SMvURhimjdZgsRuDplF5/s9hcgGhyXMhs+6vpnuoiZ2kFiu3FMnS8Q==",
			"dev": true,
			"license": "MIT",
			"engines": {
				"node": ">=18"
			},
			"funding": {
				"url": "https://github.com/sponsors/sindresorhus"
			}
		},
		"node_modules/err-code": {
			"version": "2.0.3",
			"resolved": "https://registry.npmjs.org/err-code/-/err-code-2.0.3.tgz",
			"integrity": "sha512-2bmlRpNKBxT/CRmPOlyISQpNj+qSeYvcym/uT0Jx2bMOlKLtSy1ZmLuVxSEKKyor/N5yhvp/ZiG1oE3DEYMSFA==",
			"dev": true,
			"license": "MIT"
		},
		"node_modules/errno": {
			"version": "0.1.8",
			"resolved": "https://registry.npmjs.org/errno/-/errno-0.1.8.tgz",
			"integrity": "sha512-dJ6oBr5SQ1VSd9qkk7ByRgb/1SH4JZjCHSW/mr63/QcXO9zLVxvJ6Oy13nio03rxpSnVDDjFor75SjVeZWPW/A==",
			"dev": true,
			"license": "MIT",
			"optional": true,
			"dependencies": {
				"prr": "~1.0.1"
			},
			"bin": {
				"errno": "cli.js"
			}
		},
		"node_modules/error-ex": {
			"version": "1.3.2",
			"resolved": "https://registry.npmjs.org/error-ex/-/error-ex-1.3.2.tgz",
			"integrity": "sha512-7dFHNmqeFSEt2ZBsCriorKnn3Z2pj+fd9kmI6QoWw4//DL+icEBfc0U7qJCisqrTsKTjw4fNFy2pW9OqStD84g==",
			"dev": true,
			"license": "MIT",
			"dependencies": {
				"is-arrayish": "^0.2.1"
			}
		},
		"node_modules/es-define-property": {
			"version": "1.0.0",
			"resolved": "https://registry.npmjs.org/es-define-property/-/es-define-property-1.0.0.tgz",
			"integrity": "sha512-jxayLKShrEqqzJ0eumQbVhTYQM27CfT1T35+gCgDFoL82JLsXqTJ76zv6A0YLOgEnLUMvLzsDsGIrl8NFpT2gQ==",
			"dev": true,
			"license": "MIT",
			"dependencies": {
				"get-intrinsic": "^1.2.4"
			},
			"engines": {
				"node": ">= 0.4"
			}
		},
		"node_modules/es-errors": {
			"version": "1.3.0",
			"resolved": "https://registry.npmjs.org/es-errors/-/es-errors-1.3.0.tgz",
			"integrity": "sha512-Zf5H2Kxt2xjTvbJvP2ZWLEICxA6j+hAmMzIlypy4xcBg1vKVnx89Wy0GbS+kf5cwCVFFzdCFh2XSCFNULS6csw==",
			"dev": true,
			"license": "MIT",
			"engines": {
				"node": ">= 0.4"
			}
		},
		"node_modules/es-module-lexer": {
			"version": "1.5.4",
			"resolved": "https://registry.npmjs.org/es-module-lexer/-/es-module-lexer-1.5.4.tgz",
			"integrity": "sha512-MVNK56NiMrOwitFB7cqDwq0CQutbw+0BvLshJSse0MUNU+y1FC3bUS/AQg7oUng+/wKrrki7JfmwtVHkVfPLlw==",
			"dev": true,
			"license": "MIT"
		},
		"node_modules/esbuild": {
			"version": "0.23.0",
			"resolved": "https://registry.npmjs.org/esbuild/-/esbuild-0.23.0.tgz",
			"integrity": "sha512-1lvV17H2bMYda/WaFb2jLPeHU3zml2k4/yagNMG8Q/YtfMjCwEUZa2eXXMgZTVSL5q1n4H7sQ0X6CdJDqqeCFA==",
			"dev": true,
			"hasInstallScript": true,
			"license": "MIT",
			"bin": {
				"esbuild": "bin/esbuild"
			},
			"engines": {
				"node": ">=18"
			},
			"optionalDependencies": {
				"@esbuild/aix-ppc64": "0.23.0",
				"@esbuild/android-arm": "0.23.0",
				"@esbuild/android-arm64": "0.23.0",
				"@esbuild/android-x64": "0.23.0",
				"@esbuild/darwin-arm64": "0.23.0",
				"@esbuild/darwin-x64": "0.23.0",
				"@esbuild/freebsd-arm64": "0.23.0",
				"@esbuild/freebsd-x64": "0.23.0",
				"@esbuild/linux-arm": "0.23.0",
				"@esbuild/linux-arm64": "0.23.0",
				"@esbuild/linux-ia32": "0.23.0",
				"@esbuild/linux-loong64": "0.23.0",
				"@esbuild/linux-mips64el": "0.23.0",
				"@esbuild/linux-ppc64": "0.23.0",
				"@esbuild/linux-riscv64": "0.23.0",
				"@esbuild/linux-s390x": "0.23.0",
				"@esbuild/linux-x64": "0.23.0",
				"@esbuild/netbsd-x64": "0.23.0",
				"@esbuild/openbsd-arm64": "0.23.0",
				"@esbuild/openbsd-x64": "0.23.0",
				"@esbuild/sunos-x64": "0.23.0",
				"@esbuild/win32-arm64": "0.23.0",
				"@esbuild/win32-ia32": "0.23.0",
				"@esbuild/win32-x64": "0.23.0"
			}
		},
		"node_modules/esbuild-wasm": {
			"version": "0.23.0",
			"resolved": "https://registry.npmjs.org/esbuild-wasm/-/esbuild-wasm-0.23.0.tgz",
			"integrity": "sha512-6jP8UmWy6R6TUUV8bMuC3ZyZ6lZKI56x0tkxyCIqWwRRJ/DgeQKneh/Oid5EoGoPFLrGNkz47ZEtWAYuiY/u9g==",
			"dev": true,
			"license": "MIT",
			"bin": {
				"esbuild": "bin/esbuild"
			},
			"engines": {
				"node": ">=18"
			}
		},
		"node_modules/escalade": {
			"version": "3.2.0",
			"resolved": "https://registry.npmjs.org/escalade/-/escalade-3.2.0.tgz",
			"integrity": "sha512-WUj2qlxaQtO4g6Pq5c29GTcWGDyd8itL8zTlipgECz3JesAiiOKotd8JU6otB3PACgG6xkJUyVhboMS+bje/jA==",
			"dev": true,
			"license": "MIT",
			"engines": {
				"node": ">=6"
			}
		},
		"node_modules/escape-html": {
			"version": "1.0.3",
			"resolved": "https://registry.npmjs.org/escape-html/-/escape-html-1.0.3.tgz",
			"integrity": "sha512-NiSupZ4OeuGwr68lGIeym/ksIZMJodUGOSCZ/FSnTxcrekbvqrgdUxlJOMpijaKZVjAJrWrGs/6Jy8OMuyj9ow==",
			"dev": true,
			"license": "MIT"
		},
		"node_modules/escape-string-regexp": {
			"version": "1.0.5",
			"resolved": "https://registry.npmjs.org/escape-string-regexp/-/escape-string-regexp-1.0.5.tgz",
			"integrity": "sha512-vbRorB5FUQWvla16U8R/qgaFIya2qGzwDrNmCZuYKrbdSUMG6I1ZCGQRefkRVhuOkIGVne7BQ35DSfo1qvJqFg==",
			"dev": true,
			"license": "MIT",
			"engines": {
				"node": ">=0.8.0"
			}
		},
		"node_modules/eslint-scope": {
			"version": "5.1.1",
			"resolved": "https://registry.npmjs.org/eslint-scope/-/eslint-scope-5.1.1.tgz",
			"integrity": "sha512-2NxwbF/hZ0KpepYN0cNbo+FN6XoK7GaHlQhgx/hIZl6Va0bF45RQOOwhLIy8lQDbuCiadSLCBnH2CFYquit5bw==",
			"dev": true,
			"license": "BSD-2-Clause",
			"dependencies": {
				"esrecurse": "^4.3.0",
				"estraverse": "^4.1.1"
			},
			"engines": {
				"node": ">=8.0.0"
			}
		},
		"node_modules/esrecurse": {
			"version": "4.3.0",
			"resolved": "https://registry.npmjs.org/esrecurse/-/esrecurse-4.3.0.tgz",
			"integrity": "sha512-KmfKL3b6G+RXvP8N1vr3Tq1kL/oCFgn2NYXEtqP8/L3pKapUA4G8cFVaoF3SU323CD4XypR/ffioHmkti6/Tag==",
			"dev": true,
			"license": "BSD-2-Clause",
			"dependencies": {
				"estraverse": "^5.2.0"
			},
			"engines": {
				"node": ">=4.0"
			}
		},
		"node_modules/esrecurse/node_modules/estraverse": {
			"version": "5.3.0",
			"resolved": "https://registry.npmjs.org/estraverse/-/estraverse-5.3.0.tgz",
			"integrity": "sha512-MMdARuVEQziNTeJD8DgMqmhwR11BRQ/cBP+pLtYdSTnf3MIO8fFeiINEbX36ZdNlfU/7A9f3gUw49B3oQsvwBA==",
			"dev": true,
			"license": "BSD-2-Clause",
			"engines": {
				"node": ">=4.0"
			}
		},
		"node_modules/estraverse": {
			"version": "4.3.0",
			"resolved": "https://registry.npmjs.org/estraverse/-/estraverse-4.3.0.tgz",
			"integrity": "sha512-39nnKffWz8xN1BU/2c79n9nB9HDzo0niYUqx6xyqUnyoAnQyyWpOTdZEeiCch8BBu515t4wp9ZmgVfVhn9EBpw==",
			"dev": true,
			"license": "BSD-2-Clause",
			"engines": {
				"node": ">=4.0"
			}
		},
		"node_modules/esutils": {
			"version": "2.0.3",
			"resolved": "https://registry.npmjs.org/esutils/-/esutils-2.0.3.tgz",
			"integrity": "sha512-kVscqXk4OCp68SZ0dkgEKVi6/8ij300KBWTJq32P/dYeWTSwK41WyTxalN1eRmA5Z9UU/LX9D7FWSmV9SAYx6g==",
			"dev": true,
			"license": "BSD-2-Clause",
			"engines": {
				"node": ">=0.10.0"
			}
		},
		"node_modules/etag": {
			"version": "1.8.1",
			"resolved": "https://registry.npmjs.org/etag/-/etag-1.8.1.tgz",
			"integrity": "sha512-aIL5Fx7mawVa300al2BnEE4iNvo1qETxLrPI/o05L7z6go7fCw1J6EQmbK4FmJ2AS7kgVF/KEZWufBfdClMcPg==",
			"dev": true,
			"license": "MIT",
			"engines": {
				"node": ">= 0.6"
			}
		},
		"node_modules/eventemitter3": {
			"version": "4.0.7",
			"resolved": "https://registry.npmjs.org/eventemitter3/-/eventemitter3-4.0.7.tgz",
			"integrity": "sha512-8guHBZCwKnFhYdHr2ysuRWErTwhoN2X8XELRlrRwpmfeY2jjuUN4taQMsULKUVo1K4DvZl+0pgfyoysHxvmvEw==",
			"dev": true,
			"license": "MIT"
		},
		"node_modules/events": {
			"version": "3.3.0",
			"resolved": "https://registry.npmjs.org/events/-/events-3.3.0.tgz",
			"integrity": "sha512-mQw+2fkQbALzQ7V0MY0IqdnXNOeTtP4r0lN9z7AAawCXgqea7bDii20AYrIBrFd/Hx0M2Ocz6S111CaFkUcb0Q==",
			"dev": true,
			"license": "MIT",
			"engines": {
				"node": ">=0.8.x"
			}
		},
		"node_modules/execa": {
			"version": "5.1.1",
			"resolved": "https://registry.npmjs.org/execa/-/execa-5.1.1.tgz",
			"integrity": "sha512-8uSpZZocAZRBAPIEINJj3Lo9HyGitllczc27Eh5YYojjMFMn8yHMDMaUHE2Jqfq05D/wucwI4JGURyXt1vchyg==",
			"dev": true,
			"license": "MIT",
			"dependencies": {
				"cross-spawn": "^7.0.3",
				"get-stream": "^6.0.0",
				"human-signals": "^2.1.0",
				"is-stream": "^2.0.0",
				"merge-stream": "^2.0.0",
				"npm-run-path": "^4.0.1",
				"onetime": "^5.1.2",
				"signal-exit": "^3.0.3",
				"strip-final-newline": "^2.0.0"
			},
			"engines": {
				"node": ">=10"
			},
			"funding": {
				"url": "https://github.com/sindresorhus/execa?sponsor=1"
			}
		},
		"node_modules/execa/node_modules/onetime": {
			"version": "5.1.2",
			"resolved": "https://registry.npmjs.org/onetime/-/onetime-5.1.2.tgz",
			"integrity": "sha512-kbpaSSGJTWdAY5KPVeMOKXSrPtr8C8C7wodJbcsd51jRnmD+GZu8Y0VoU6Dm5Z4vWr0Ig/1NKuWRKf7j5aaYSg==",
			"dev": true,
			"license": "MIT",
			"dependencies": {
				"mimic-fn": "^2.1.0"
			},
			"engines": {
				"node": ">=6"
			},
			"funding": {
				"url": "https://github.com/sponsors/sindresorhus"
			}
		},
		"node_modules/execa/node_modules/signal-exit": {
			"version": "3.0.7",
			"resolved": "https://registry.npmjs.org/signal-exit/-/signal-exit-3.0.7.tgz",
			"integrity": "sha512-wnD2ZE+l+SPC/uoS0vXeE9L1+0wuaMqKlfz9AMUo38JsyLSBWSFcHR1Rri62LZc12vLr1gb3jl7iwQhgwpAbGQ==",
			"dev": true,
			"license": "ISC"
		},
		"node_modules/exponential-backoff": {
			"version": "3.1.1",
			"resolved": "https://registry.npmjs.org/exponential-backoff/-/exponential-backoff-3.1.1.tgz",
			"integrity": "sha512-dX7e/LHVJ6W3DE1MHWi9S1EYzDESENfLrYohG2G++ovZrYOkm4Knwa0mc1cn84xJOR4KEU0WSchhLbd0UklbHw==",
			"dev": true,
			"license": "Apache-2.0"
		},
		"node_modules/express": {
			"version": "4.19.2",
			"resolved": "https://registry.npmjs.org/express/-/express-4.19.2.tgz",
			"integrity": "sha512-5T6nhjsT+EOMzuck8JjBHARTHfMht0POzlA60WV2pMD3gyXw2LZnZ+ueGdNxG+0calOJcWKbpFcuzLZ91YWq9Q==",
			"dev": true,
			"license": "MIT",
			"dependencies": {
				"accepts": "~1.3.8",
				"array-flatten": "1.1.1",
				"body-parser": "1.20.2",
				"content-disposition": "0.5.4",
				"content-type": "~1.0.4",
				"cookie": "0.6.0",
				"cookie-signature": "1.0.6",
				"debug": "2.6.9",
				"depd": "2.0.0",
				"encodeurl": "~1.0.2",
				"escape-html": "~1.0.3",
				"etag": "~1.8.1",
				"finalhandler": "1.2.0",
				"fresh": "0.5.2",
				"http-errors": "2.0.0",
				"merge-descriptors": "1.0.1",
				"methods": "~1.1.2",
				"on-finished": "2.4.1",
				"parseurl": "~1.3.3",
				"path-to-regexp": "0.1.7",
				"proxy-addr": "~2.0.7",
				"qs": "6.11.0",
				"range-parser": "~1.2.1",
				"safe-buffer": "5.2.1",
				"send": "0.18.0",
				"serve-static": "1.15.0",
				"setprototypeof": "1.2.0",
				"statuses": "2.0.1",
				"type-is": "~1.6.18",
				"utils-merge": "1.0.1",
				"vary": "~1.1.2"
			},
			"engines": {
				"node": ">= 0.10.0"
			}
		},
		"node_modules/express/node_modules/debug": {
			"version": "2.6.9",
			"resolved": "https://registry.npmjs.org/debug/-/debug-2.6.9.tgz",
			"integrity": "sha512-bC7ElrdJaJnPbAP+1EotYvqZsb3ecl5wi6Bfi6BJTUcNowp6cvspg0jXznRTKDjm/E7AdgFBVeAPVMNcKGsHMA==",
			"dev": true,
			"license": "MIT",
			"dependencies": {
				"ms": "2.0.0"
			}
		},
		"node_modules/express/node_modules/ms": {
			"version": "2.0.0",
			"resolved": "https://registry.npmjs.org/ms/-/ms-2.0.0.tgz",
			"integrity": "sha512-Tpp60P6IUJDTuOq/5Z8cdskzJujfwqfOTkrwIwj7IRISpnkJnT6SyJ4PCPnGMoFjC9ddhal5KVIYtAt97ix05A==",
			"dev": true,
			"license": "MIT"
		},
		"node_modules/external-editor": {
			"version": "3.1.0",
			"resolved": "https://registry.npmjs.org/external-editor/-/external-editor-3.1.0.tgz",
			"integrity": "sha512-hMQ4CX1p1izmuLYyZqLMO/qGNw10wSv9QDCPfzXfyFrOaCSSoRfqE1Kf1s5an66J5JZC62NewG+mK49jOCtQew==",
			"dev": true,
			"license": "MIT",
			"dependencies": {
				"chardet": "^0.7.0",
				"iconv-lite": "^0.4.24",
				"tmp": "^0.0.33"
			},
			"engines": {
				"node": ">=4"
			}
		},
		"node_modules/fast-deep-equal": {
			"version": "3.1.3",
			"resolved": "https://registry.npmjs.org/fast-deep-equal/-/fast-deep-equal-3.1.3.tgz",
			"integrity": "sha512-f3qQ9oQy9j2AhBe/H9VC91wLmKBCCU/gDOnKNAYG5hswO7BLKj09Hc5HYNz9cGI++xlpDCIgDaitVs03ATR84Q==",
			"dev": true,
			"license": "MIT"
		},
		"node_modules/fast-glob": {
			"version": "3.3.2",
			"resolved": "https://registry.npmjs.org/fast-glob/-/fast-glob-3.3.2.tgz",
			"integrity": "sha512-oX2ruAFQwf/Orj8m737Y5adxDQO0LAB7/S5MnxCdTNDd4p6BsyIVsv9JQsATbTSq8KHRpLwIHbVlUNatxd+1Ow==",
			"dev": true,
			"license": "MIT",
			"dependencies": {
				"@nodelib/fs.stat": "^2.0.2",
				"@nodelib/fs.walk": "^1.2.3",
				"glob-parent": "^5.1.2",
				"merge2": "^1.3.0",
				"micromatch": "^4.0.4"
			},
			"engines": {
				"node": ">=8.6.0"
			}
		},
		"node_modules/fast-json-stable-stringify": {
			"version": "2.1.0",
			"resolved": "https://registry.npmjs.org/fast-json-stable-stringify/-/fast-json-stable-stringify-2.1.0.tgz",
			"integrity": "sha512-lhd/wF+Lk98HZoTCtlVraHtfh5XYijIjalXck7saUtuanSDyLMxnHhSXEDJqHxD7msR8D0uCmqlkwjCV8xvwHw==",
			"dev": true,
			"license": "MIT"
		},
		"node_modules/fast-uri": {
			"version": "3.0.1",
			"resolved": "https://registry.npmjs.org/fast-uri/-/fast-uri-3.0.1.tgz",
			"integrity": "sha512-MWipKbbYiYI0UC7cl8m/i/IWTqfC8YXsqjzybjddLsFjStroQzsHXkc73JutMvBiXmOvapk+axIl79ig5t55Bw==",
			"dev": true,
			"license": "MIT"
		},
		"node_modules/fastparse": {
			"version": "1.1.2",
			"resolved": "https://registry.npmjs.org/fastparse/-/fastparse-1.1.2.tgz",
			"integrity": "sha512-483XLLxTVIwWK3QTrMGRqUfUpoOs/0hbQrl2oz4J0pAcm3A3bu84wxTFqGqkJzewCLdME38xJLJAxBABfQT8sQ==",
			"dev": true,
			"license": "MIT"
		},
		"node_modules/fastq": {
			"version": "1.17.1",
			"resolved": "https://registry.npmjs.org/fastq/-/fastq-1.17.1.tgz",
			"integrity": "sha512-sRVD3lWVIXWg6By68ZN7vho9a1pQcN/WBFaAAsDDFzlJjvoGx0P8z7V1t72grFJfJhu3YPZBuu25f7Kaw2jN1w==",
			"dev": true,
			"license": "ISC",
			"dependencies": {
				"reusify": "^1.0.4"
			}
		},
		"node_modules/faye-websocket": {
			"version": "0.11.4",
			"resolved": "https://registry.npmjs.org/faye-websocket/-/faye-websocket-0.11.4.tgz",
			"integrity": "sha512-CzbClwlXAuiRQAlUyfqPgvPoNKTckTPGfwZV4ZdAhVcP2lh9KUxJg2b5GkE7XbjKQ3YJnQ9z6D9ntLAlB+tP8g==",
			"dev": true,
			"license": "Apache-2.0",
			"dependencies": {
				"websocket-driver": ">=0.5.1"
			},
			"engines": {
				"node": ">=0.8.0"
			}
		},
		"node_modules/fill-range": {
			"version": "7.1.1",
			"resolved": "https://registry.npmjs.org/fill-range/-/fill-range-7.1.1.tgz",
			"integrity": "sha512-YsGpe3WHLK8ZYi4tWDg2Jy3ebRz2rXowDxnld4bkQB00cc/1Zw9AWnC0i9ztDJitivtQvaI9KaLyKrc+hBW0yg==",
			"dev": true,
			"license": "MIT",
			"dependencies": {
				"to-regex-range": "^5.0.1"
			},
			"engines": {
				"node": ">=8"
			}
		},
		"node_modules/finalhandler": {
			"version": "1.2.0",
			"resolved": "https://registry.npmjs.org/finalhandler/-/finalhandler-1.2.0.tgz",
			"integrity": "sha512-5uXcUVftlQMFnWC9qu/svkWv3GTd2PfUhK/3PLkYNAe7FbqJMt3515HaxE6eRL74GdsriiwujiawdaB1BpEISg==",
			"dev": true,
			"license": "MIT",
			"dependencies": {
				"debug": "2.6.9",
				"encodeurl": "~1.0.2",
				"escape-html": "~1.0.3",
				"on-finished": "2.4.1",
				"parseurl": "~1.3.3",
				"statuses": "2.0.1",
				"unpipe": "~1.0.0"
			},
			"engines": {
				"node": ">= 0.8"
			}
		},
		"node_modules/finalhandler/node_modules/debug": {
			"version": "2.6.9",
			"resolved": "https://registry.npmjs.org/debug/-/debug-2.6.9.tgz",
			"integrity": "sha512-bC7ElrdJaJnPbAP+1EotYvqZsb3ecl5wi6Bfi6BJTUcNowp6cvspg0jXznRTKDjm/E7AdgFBVeAPVMNcKGsHMA==",
			"dev": true,
			"license": "MIT",
			"dependencies": {
				"ms": "2.0.0"
			}
		},
		"node_modules/finalhandler/node_modules/ms": {
			"version": "2.0.0",
			"resolved": "https://registry.npmjs.org/ms/-/ms-2.0.0.tgz",
			"integrity": "sha512-Tpp60P6IUJDTuOq/5Z8cdskzJujfwqfOTkrwIwj7IRISpnkJnT6SyJ4PCPnGMoFjC9ddhal5KVIYtAt97ix05A==",
			"dev": true,
			"license": "MIT"
		},
		"node_modules/find-cache-dir": {
			"version": "4.0.0",
			"resolved": "https://registry.npmjs.org/find-cache-dir/-/find-cache-dir-4.0.0.tgz",
			"integrity": "sha512-9ZonPT4ZAK4a+1pUPVPZJapbi7O5qbbJPdYw/NOQWZZbVLdDTYM3A4R9z/DpAM08IDaFGsvPgiGZ82WEwUDWjg==",
			"dev": true,
			"license": "MIT",
			"dependencies": {
				"common-path-prefix": "^3.0.0",
				"pkg-dir": "^7.0.0"
			},
			"engines": {
				"node": ">=14.16"
			},
			"funding": {
				"url": "https://github.com/sponsors/sindresorhus"
			}
		},
		"node_modules/find-up": {
			"version": "6.3.0",
			"resolved": "https://registry.npmjs.org/find-up/-/find-up-6.3.0.tgz",
			"integrity": "sha512-v2ZsoEuVHYy8ZIlYqwPe/39Cy+cFDzp4dXPaxNvkEuouymu+2Jbz0PxpKarJHYJTmv2HWT3O382qY8l4jMWthw==",
			"dev": true,
			"license": "MIT",
			"dependencies": {
				"locate-path": "^7.1.0",
				"path-exists": "^5.0.0"
			},
			"engines": {
				"node": "^12.20.0 || ^14.13.1 || >=16.0.0"
			},
			"funding": {
				"url": "https://github.com/sponsors/sindresorhus"
			}
		},
		"node_modules/flat": {
			"version": "5.0.2",
			"resolved": "https://registry.npmjs.org/flat/-/flat-5.0.2.tgz",
			"integrity": "sha512-b6suED+5/3rTpUBdG1gupIl8MPFCAMA0QXwmljLhvCUKcUvdE4gWky9zpuGCcXHOsz4J9wPGNWq6OKpmIzz3hQ==",
			"dev": true,
			"license": "BSD-3-Clause",
			"bin": {
				"flat": "cli.js"
			}
		},
		"node_modules/follow-redirects": {
			"version": "1.15.6",
			"resolved": "https://registry.npmjs.org/follow-redirects/-/follow-redirects-1.15.6.tgz",
			"integrity": "sha512-wWN62YITEaOpSK584EZXJafH1AGpO8RVgElfkuXbTOrPX4fIfOyEpW/CsiNd8JdYrAoOvafRTOEnvsO++qCqFA==",
			"dev": true,
			"funding": [
				{
					"type": "individual",
					"url": "https://github.com/sponsors/RubenVerborgh"
				}
			],
			"license": "MIT",
			"engines": {
				"node": ">=4.0"
			},
			"peerDependenciesMeta": {
				"debug": {
					"optional": true
				}
			}
		},
		"node_modules/foreground-child": {
			"version": "3.3.0",
			"resolved": "https://registry.npmjs.org/foreground-child/-/foreground-child-3.3.0.tgz",
			"integrity": "sha512-Ld2g8rrAyMYFXBhEqMz8ZAHBi4J4uS1i/CxGMDnjyFWddMXLVcDp051DZfu+t7+ab7Wv6SMqpWmyFIj5UbfFvg==",
			"dev": true,
			"license": "ISC",
			"dependencies": {
				"cross-spawn": "^7.0.0",
				"signal-exit": "^4.0.1"
			},
			"engines": {
				"node": ">=14"
			},
			"funding": {
				"url": "https://github.com/sponsors/isaacs"
			}
		},
		"node_modules/forwarded": {
			"version": "0.2.0",
			"resolved": "https://registry.npmjs.org/forwarded/-/forwarded-0.2.0.tgz",
			"integrity": "sha512-buRG0fpBtRHSTCOASe6hD258tEubFoRLb4ZNA6NxMVHNw2gOcwHo9wyablzMzOA5z9xA9L1KNjk/Nt6MT9aYow==",
			"dev": true,
			"license": "MIT",
			"engines": {
				"node": ">= 0.6"
			}
		},
		"node_modules/fraction.js": {
			"version": "4.3.7",
			"resolved": "https://registry.npmjs.org/fraction.js/-/fraction.js-4.3.7.tgz",
			"integrity": "sha512-ZsDfxO51wGAXREY55a7la9LScWpwv9RxIrYABrlvOFBlH/ShPnrtsXeuUIfXKKOVicNxQ+o8JTbJvjS4M89yew==",
			"dev": true,
			"license": "MIT",
			"engines": {
				"node": "*"
			},
			"funding": {
				"type": "patreon",
				"url": "https://github.com/sponsors/rawify"
			}
		},
		"node_modules/fresh": {
			"version": "0.5.2",
			"resolved": "https://registry.npmjs.org/fresh/-/fresh-0.5.2.tgz",
			"integrity": "sha512-zJ2mQYM18rEFOudeV4GShTGIQ7RbzA7ozbU9I/XBpm7kqgMywgmylMwXHxZJmkVoYkna9d2pVXVXPdYTP9ej8Q==",
			"dev": true,
			"license": "MIT",
			"engines": {
				"node": ">= 0.6"
			}
		},
		"node_modules/fs-minipass": {
			"version": "3.0.3",
			"resolved": "https://registry.npmjs.org/fs-minipass/-/fs-minipass-3.0.3.tgz",
			"integrity": "sha512-XUBA9XClHbnJWSfBzjkm6RvPsyg3sryZt06BEQoXcF7EK/xpGaQYJgQKDJSUH5SGZ76Y7pFx1QBnXz09rU5Fbw==",
			"dev": true,
			"license": "ISC",
			"dependencies": {
				"minipass": "^7.0.3"
			},
			"engines": {
				"node": "^14.17.0 || ^16.13.0 || >=18.0.0"
			}
		},
		"node_modules/fsevents": {
			"version": "2.3.3",
			"resolved": "https://registry.npmjs.org/fsevents/-/fsevents-2.3.3.tgz",
			"integrity": "sha512-5xoDfX+fL7faATnagmWPpbFtwh/R77WmMMqqHGS65C3vvB0YHrgF+B1YmZ3441tMj5n63k0212XNoJwzlhffQw==",
			"dev": true,
			"hasInstallScript": true,
			"license": "MIT",
			"optional": true,
			"os": [
				"darwin"
			],
			"engines": {
				"node": "^8.16.0 || ^10.6.0 || >=11.0.0"
			}
		},
		"node_modules/function-bind": {
			"version": "1.1.2",
			"resolved": "https://registry.npmjs.org/function-bind/-/function-bind-1.1.2.tgz",
			"integrity": "sha512-7XHNxH7qX9xG5mIwxkhumTox/MIRNcOgDrxWsMt2pAr23WHp6MrRlN7FBSFpCpr+oVO0F744iUgR82nJMfG2SA==",
			"dev": true,
			"license": "MIT",
			"funding": {
				"url": "https://github.com/sponsors/ljharb"
			}
		},
		"node_modules/gensync": {
			"version": "1.0.0-beta.2",
			"resolved": "https://registry.npmjs.org/gensync/-/gensync-1.0.0-beta.2.tgz",
			"integrity": "sha512-3hN7NaskYvMDLQY55gnW3NQ+mesEAepTqlg+VEbj7zzqEMBVNhzcGYYeqFo/TlYz6eQiFcp1HcsCZO+nGgS8zg==",
			"dev": true,
			"license": "MIT",
			"engines": {
				"node": ">=6.9.0"
			}
		},
		"node_modules/get-caller-file": {
			"version": "2.0.5",
			"resolved": "https://registry.npmjs.org/get-caller-file/-/get-caller-file-2.0.5.tgz",
			"integrity": "sha512-DyFP3BM/3YHTQOCUL/w0OZHR0lpKeGrxotcHWcqNEdnltqFwXVfhEBQ94eIo34AfQpo0rGki4cyIiftY06h2Fg==",
			"dev": true,
			"license": "ISC",
			"engines": {
				"node": "6.* || 8.* || >= 10.*"
			}
		},
		"node_modules/get-east-asian-width": {
			"version": "1.2.0",
			"resolved": "https://registry.npmjs.org/get-east-asian-width/-/get-east-asian-width-1.2.0.tgz",
			"integrity": "sha512-2nk+7SIVb14QrgXFHcm84tD4bKQz0RxPuMT8Ag5KPOq7J5fEmAg0UbXdTOSHqNuHSU28k55qnceesxXRZGzKWA==",
			"dev": true,
			"license": "MIT",
			"engines": {
				"node": ">=18"
			},
			"funding": {
				"url": "https://github.com/sponsors/sindresorhus"
			}
		},
		"node_modules/get-intrinsic": {
			"version": "1.2.4",
			"resolved": "https://registry.npmjs.org/get-intrinsic/-/get-intrinsic-1.2.4.tgz",
			"integrity": "sha512-5uYhsJH8VJBTv7oslg4BznJYhDoRI6waYCxMmCdnTrcCrHA/fCFKoTFz2JKKE0HdDFUF7/oQuhzumXJK7paBRQ==",
			"dev": true,
			"license": "MIT",
			"dependencies": {
				"es-errors": "^1.3.0",
				"function-bind": "^1.1.2",
				"has-proto": "^1.0.1",
				"has-symbols": "^1.0.3",
				"hasown": "^2.0.0"
			},
			"engines": {
				"node": ">= 0.4"
			},
			"funding": {
				"url": "https://github.com/sponsors/ljharb"
			}
		},
		"node_modules/get-stream": {
			"version": "6.0.1",
			"resolved": "https://registry.npmjs.org/get-stream/-/get-stream-6.0.1.tgz",
			"integrity": "sha512-ts6Wi+2j3jQjqi70w5AlN8DFnkSwC+MqmxEzdEALB2qXZYV3X/b1CTfgPLGJNMeAWxdPfU8FO1ms3NUfaHCPYg==",
			"dev": true,
			"license": "MIT",
			"engines": {
				"node": ">=10"
			},
			"funding": {
				"url": "https://github.com/sponsors/sindresorhus"
			}
		},
		"node_modules/glob": {
			"version": "10.4.5",
			"resolved": "https://registry.npmjs.org/glob/-/glob-10.4.5.tgz",
			"integrity": "sha512-7Bv8RF0k6xjo7d4A/PxYLbUCfb6c+Vpd2/mB2yRDlew7Jb5hEXiCD9ibfO7wpk8i4sevK6DFny9h7EYbM3/sHg==",
			"dev": true,
			"license": "ISC",
			"dependencies": {
				"foreground-child": "^3.1.0",
				"jackspeak": "^3.1.2",
				"minimatch": "^9.0.4",
				"minipass": "^7.1.2",
				"package-json-from-dist": "^1.0.0",
				"path-scurry": "^1.11.1"
			},
			"bin": {
				"glob": "dist/esm/bin.mjs"
			},
			"funding": {
				"url": "https://github.com/sponsors/isaacs"
			}
		},
		"node_modules/glob-parent": {
			"version": "5.1.2",
			"resolved": "https://registry.npmjs.org/glob-parent/-/glob-parent-5.1.2.tgz",
			"integrity": "sha512-AOIgSQCepiJYwP3ARnGx+5VnTu2HBYdzbGP45eLw1vr3zB3vZLeyed1sC9hnbcOc9/SrMyM5RPQrkGz4aS9Zow==",
			"dev": true,
			"license": "ISC",
			"dependencies": {
				"is-glob": "^4.0.1"
			},
			"engines": {
				"node": ">= 6"
			}
		},
		"node_modules/glob-to-regexp": {
			"version": "0.4.1",
			"resolved": "https://registry.npmjs.org/glob-to-regexp/-/glob-to-regexp-0.4.1.tgz",
			"integrity": "sha512-lkX1HJXwyMcprw/5YUZc2s7DrpAiHB21/V+E1rHUrVNokkvB6bqMzT0VfV6/86ZNabt1k14YOIaT7nDvOX3Iiw==",
			"dev": true,
			"license": "BSD-2-Clause"
		},
		"node_modules/globals": {
			"version": "11.12.0",
			"resolved": "https://registry.npmjs.org/globals/-/globals-11.12.0.tgz",
			"integrity": "sha512-WOBp/EEGUiIsJSp7wcv/y6MO+lV9UoncWqxuFfm8eBwzWNgyfBd6Gz+IeKQ9jCmyhoH99g15M3T+QaVHFjizVA==",
			"dev": true,
			"license": "MIT",
			"engines": {
				"node": ">=4"
			}
		},
		"node_modules/globby": {
			"version": "14.0.2",
			"resolved": "https://registry.npmjs.org/globby/-/globby-14.0.2.tgz",
			"integrity": "sha512-s3Fq41ZVh7vbbe2PN3nrW7yC7U7MFVc5c98/iTl9c2GawNMKx/J648KQRW6WKkuU8GIbbh2IXfIRQjOZnXcTnw==",
			"dev": true,
			"license": "MIT",
			"dependencies": {
				"@sindresorhus/merge-streams": "^2.1.0",
				"fast-glob": "^3.3.2",
				"ignore": "^5.2.4",
				"path-type": "^5.0.0",
				"slash": "^5.1.0",
				"unicorn-magic": "^0.1.0"
			},
			"engines": {
				"node": ">=18"
			},
			"funding": {
				"url": "https://github.com/sponsors/sindresorhus"
			}
		},
		"node_modules/gopd": {
			"version": "1.0.1",
			"resolved": "https://registry.npmjs.org/gopd/-/gopd-1.0.1.tgz",
			"integrity": "sha512-d65bNlIadxvpb/A2abVdlqKqV563juRnZ1Wtk6s1sIR8uNsXR70xqIzVqxVf1eTqDunwT2MkczEeaezCKTZhwA==",
			"dev": true,
			"license": "MIT",
			"dependencies": {
				"get-intrinsic": "^1.1.3"
			},
			"funding": {
				"url": "https://github.com/sponsors/ljharb"
			}
		},
		"node_modules/graceful-fs": {
			"version": "4.2.11",
			"resolved": "https://registry.npmjs.org/graceful-fs/-/graceful-fs-4.2.11.tgz",
			"integrity": "sha512-RbJ5/jmFcNNCcDV5o9eTnBLJ/HszWV0P73bc+Ff4nS/rJj+YaS6IGyiOL0VoBYX+l1Wrl3k63h/KrH+nhJ0XvQ==",
			"dev": true,
			"license": "ISC"
		},
		"node_modules/handle-thing": {
			"version": "2.0.1",
			"resolved": "https://registry.npmjs.org/handle-thing/-/handle-thing-2.0.1.tgz",
			"integrity": "sha512-9Qn4yBxelxoh2Ow62nP+Ka/kMnOXRi8BXnRaUwezLNhqelnN49xKz4F/dPP8OYLxLxq6JDtZb2i9XznUQbNPTg==",
			"dev": true,
			"license": "MIT"
		},
		"node_modules/has-flag": {
			"version": "3.0.0",
			"resolved": "https://registry.npmjs.org/has-flag/-/has-flag-3.0.0.tgz",
			"integrity": "sha512-sKJf1+ceQBr4SMkvQnBDNDtf4TXpVhVGateu0t918bl30FnbE2m4vNLX+VWe/dpjlb+HugGYzW7uQXH98HPEYw==",
			"dev": true,
			"license": "MIT",
			"engines": {
				"node": ">=4"
			}
		},
		"node_modules/has-property-descriptors": {
			"version": "1.0.2",
			"resolved": "https://registry.npmjs.org/has-property-descriptors/-/has-property-descriptors-1.0.2.tgz",
			"integrity": "sha512-55JNKuIW+vq4Ke1BjOTjM2YctQIvCT7GFzHwmfZPGo5wnrgkid0YQtnAleFSqumZm4az3n2BS+erby5ipJdgrg==",
			"dev": true,
			"license": "MIT",
			"dependencies": {
				"es-define-property": "^1.0.0"
			},
			"funding": {
				"url": "https://github.com/sponsors/ljharb"
			}
		},
		"node_modules/has-proto": {
			"version": "1.0.3",
			"resolved": "https://registry.npmjs.org/has-proto/-/has-proto-1.0.3.tgz",
			"integrity": "sha512-SJ1amZAJUiZS+PhsVLf5tGydlaVB8EdFpaSO4gmiUKUOxk8qzn5AIy4ZeJUmh22znIdk/uMAUT2pl3FxzVUH+Q==",
			"dev": true,
			"license": "MIT",
			"engines": {
				"node": ">= 0.4"
			},
			"funding": {
				"url": "https://github.com/sponsors/ljharb"
			}
		},
		"node_modules/has-symbols": {
			"version": "1.0.3",
			"resolved": "https://registry.npmjs.org/has-symbols/-/has-symbols-1.0.3.tgz",
			"integrity": "sha512-l3LCuF6MgDNwTDKkdYGEihYjt5pRPbEg46rtlmnSPlUbgmB8LOIrKJbYYFBSbnPaJexMKtiPO8hmeRjRz2Td+A==",
			"dev": true,
			"license": "MIT",
			"engines": {
				"node": ">= 0.4"
			},
			"funding": {
				"url": "https://github.com/sponsors/ljharb"
			}
		},
		"node_modules/hasown": {
			"version": "2.0.2",
			"resolved": "https://registry.npmjs.org/hasown/-/hasown-2.0.2.tgz",
			"integrity": "sha512-0hJU9SCPvmMzIBdZFqNPXWa6dqh7WdH0cII9y+CyS8rG3nL48Bclra9HmKhVVUHyPWNH5Y7xDwAB7bfgSjkUMQ==",
			"dev": true,
			"license": "MIT",
			"dependencies": {
				"function-bind": "^1.1.2"
			},
			"engines": {
				"node": ">= 0.4"
			}
		},
		"node_modules/hosted-git-info": {
			"version": "7.0.2",
			"resolved": "https://registry.npmjs.org/hosted-git-info/-/hosted-git-info-7.0.2.tgz",
			"integrity": "sha512-puUZAUKT5m8Zzvs72XWy3HtvVbTWljRE66cP60bxJzAqf2DgICo7lYTY2IHUmLnNpjYvw5bvmoHvPc0QO2a62w==",
			"dev": true,
			"license": "ISC",
			"dependencies": {
				"lru-cache": "^10.0.1"
			},
			"engines": {
				"node": "^16.14.0 || >=18.0.0"
			}
		},
		"node_modules/hosted-git-info/node_modules/lru-cache": {
			"version": "10.4.3",
			"resolved": "https://registry.npmjs.org/lru-cache/-/lru-cache-10.4.3.tgz",
			"integrity": "sha512-JNAzZcXrCt42VGLuYz0zfAzDfAvJWW6AfYlDBQyDV5DClI2m5sAmK+OIO7s59XfsRsWHp02jAJrRadPRGTt6SQ==",
			"dev": true,
			"license": "ISC"
		},
		"node_modules/hpack.js": {
			"version": "2.1.6",
			"resolved": "https://registry.npmjs.org/hpack.js/-/hpack.js-2.1.6.tgz",
			"integrity": "sha512-zJxVehUdMGIKsRaNt7apO2Gqp0BdqW5yaiGHXXmbpvxgBYVZnAql+BJb4RO5ad2MgpbZKn5G6nMnegrH1FcNYQ==",
			"dev": true,
			"license": "MIT",
			"dependencies": {
				"inherits": "^2.0.1",
				"obuf": "^1.0.0",
				"readable-stream": "^2.0.1",
				"wbuf": "^1.1.0"
			}
		},
		"node_modules/hpack.js/node_modules/readable-stream": {
			"version": "2.3.8",
			"resolved": "https://registry.npmjs.org/readable-stream/-/readable-stream-2.3.8.tgz",
			"integrity": "sha512-8p0AUk4XODgIewSi0l8Epjs+EVnWiK7NoDIEGU0HhE7+ZyY8D1IMY7odu5lRrFXGg71L15KG8QrPmum45RTtdA==",
			"dev": true,
			"license": "MIT",
			"dependencies": {
				"core-util-is": "~1.0.0",
				"inherits": "~2.0.3",
				"isarray": "~1.0.0",
				"process-nextick-args": "~2.0.0",
				"safe-buffer": "~5.1.1",
				"string_decoder": "~1.1.1",
				"util-deprecate": "~1.0.1"
			}
		},
		"node_modules/hpack.js/node_modules/safe-buffer": {
			"version": "5.1.2",
			"resolved": "https://registry.npmjs.org/safe-buffer/-/safe-buffer-5.1.2.tgz",
			"integrity": "sha512-Gd2UZBJDkXlY7GbJxfsE8/nvKkUEU1G38c1siN6QP6a9PT9MmHB8GnpscSmMJSoF8LOIrt8ud/wPtojys4G6+g==",
			"dev": true,
			"license": "MIT"
		},
		"node_modules/hpack.js/node_modules/string_decoder": {
			"version": "1.1.1",
			"resolved": "https://registry.npmjs.org/string_decoder/-/string_decoder-1.1.1.tgz",
			"integrity": "sha512-n/ShnvDi6FHbbVfviro+WojiFzv+s8MPMHBczVePfUpDJLwoLT0ht1l4YwBCbi8pJAveEEdnkHyPyTP/mzRfwg==",
			"dev": true,
			"license": "MIT",
			"dependencies": {
				"safe-buffer": "~5.1.0"
			}
		},
		"node_modules/html-entities": {
			"version": "2.5.2",
			"resolved": "https://registry.npmjs.org/html-entities/-/html-entities-2.5.2.tgz",
			"integrity": "sha512-K//PSRMQk4FZ78Kyau+mZurHn3FH0Vwr+H36eE0rPbeYkRRi9YxceYPhuN60UwWorxyKHhqoAJl2OFKa4BVtaA==",
			"dev": true,
			"funding": [
				{
					"type": "github",
					"url": "https://github.com/sponsors/mdevils"
				},
				{
					"type": "patreon",
					"url": "https://patreon.com/mdevils"
				}
			],
			"license": "MIT"
		},
		"node_modules/htmlparser2": {
			"version": "8.0.2",
			"resolved": "https://registry.npmjs.org/htmlparser2/-/htmlparser2-8.0.2.tgz",
			"integrity": "sha512-GYdjWKDkbRLkZ5geuHs5NY1puJ+PXwP7+fHPRz06Eirsb9ugf6d8kkXav6ADhcODhFFPMIXyxkxSuMf3D6NCFA==",
			"dev": true,
			"funding": [
				"https://github.com/fb55/htmlparser2?sponsor=1",
				{
					"type": "github",
					"url": "https://github.com/sponsors/fb55"
				}
			],
			"license": "MIT",
			"dependencies": {
				"domelementtype": "^2.3.0",
				"domhandler": "^5.0.3",
				"domutils": "^3.0.1",
				"entities": "^4.4.0"
			}
		},
		"node_modules/http-cache-semantics": {
			"version": "4.1.1",
			"resolved": "https://registry.npmjs.org/http-cache-semantics/-/http-cache-semantics-4.1.1.tgz",
			"integrity": "sha512-er295DKPVsV82j5kw1Gjt+ADA/XYHsajl82cGNQG2eyoPkvgUhX+nDIyelzhIWbbsXP39EHcI6l5tYs2FYqYXQ==",
			"dev": true,
			"license": "BSD-2-Clause"
		},
		"node_modules/http-deceiver": {
			"version": "1.2.7",
			"resolved": "https://registry.npmjs.org/http-deceiver/-/http-deceiver-1.2.7.tgz",
			"integrity": "sha512-LmpOGxTfbpgtGVxJrj5k7asXHCgNZp5nLfp+hWc8QQRqtb7fUy6kRY3BO1h9ddF6yIPYUARgxGOwB42DnxIaNw==",
			"dev": true,
			"license": "MIT"
		},
		"node_modules/http-errors": {
			"version": "2.0.0",
			"resolved": "https://registry.npmjs.org/http-errors/-/http-errors-2.0.0.tgz",
			"integrity": "sha512-FtwrG/euBzaEjYeRqOgly7G0qviiXoJWnvEH2Z1plBdXgbyjv34pHTSb9zoeHMyDy33+DWy5Wt9Wo+TURtOYSQ==",
			"dev": true,
			"license": "MIT",
			"dependencies": {
				"depd": "2.0.0",
				"inherits": "2.0.4",
				"setprototypeof": "1.2.0",
				"statuses": "2.0.1",
				"toidentifier": "1.0.1"
			},
			"engines": {
				"node": ">= 0.8"
			}
		},
		"node_modules/http-parser-js": {
			"version": "0.5.8",
			"resolved": "https://registry.npmjs.org/http-parser-js/-/http-parser-js-0.5.8.tgz",
			"integrity": "sha512-SGeBX54F94Wgu5RH3X5jsDtf4eHyRogWX1XGT3b4HuW3tQPM4AaBzoUji/4AAJNXCEOWZ5O0DgZmJw1947gD5Q==",
			"dev": true,
			"license": "MIT"
		},
		"node_modules/http-proxy": {
			"version": "1.18.1",
			"resolved": "https://registry.npmjs.org/http-proxy/-/http-proxy-1.18.1.tgz",
			"integrity": "sha512-7mz/721AbnJwIVbnaSv1Cz3Am0ZLT/UBwkC92VlxhXv/k/BBQfM2fXElQNC27BVGr0uwUpplYPQM9LnaBMR5NQ==",
			"dev": true,
			"license": "MIT",
			"dependencies": {
				"eventemitter3": "^4.0.0",
				"follow-redirects": "^1.0.0",
				"requires-port": "^1.0.0"
			},
			"engines": {
				"node": ">=8.0.0"
			}
		},
		"node_modules/http-proxy-agent": {
			"version": "7.0.2",
			"resolved": "https://registry.npmjs.org/http-proxy-agent/-/http-proxy-agent-7.0.2.tgz",
			"integrity": "sha512-T1gkAiYYDWYx3V5Bmyu7HcfcvL7mUrTWiM6yOfa3PIphViJ/gFPbvidQ+veqSOHci/PxBcDabeUNCzpOODJZig==",
			"dev": true,
			"license": "MIT",
			"dependencies": {
				"agent-base": "^7.1.0",
				"debug": "^4.3.4"
			},
			"engines": {
				"node": ">= 14"
			}
		},
		"node_modules/http-proxy-middleware": {
			"version": "3.0.0",
			"resolved": "https://registry.npmjs.org/http-proxy-middleware/-/http-proxy-middleware-3.0.0.tgz",
			"integrity": "sha512-36AV1fIaI2cWRzHo+rbcxhe3M3jUDCNzc4D5zRl57sEWRAxdXYtw7FSQKYY6PDKssiAKjLYypbssHk+xs/kMXw==",
			"dev": true,
			"license": "MIT",
			"dependencies": {
				"@types/http-proxy": "^1.17.10",
				"debug": "^4.3.4",
				"http-proxy": "^1.18.1",
				"is-glob": "^4.0.1",
				"is-plain-obj": "^3.0.0",
				"micromatch": "^4.0.5"
			},
			"engines": {
				"node": "^14.15.0 || ^16.10.0 || >=18.0.0"
			}
		},
		"node_modules/https-proxy-agent": {
			"version": "7.0.5",
			"resolved": "https://registry.npmjs.org/https-proxy-agent/-/https-proxy-agent-7.0.5.tgz",
			"integrity": "sha512-1e4Wqeblerz+tMKPIq2EMGiiWW1dIjZOksyHWSUm1rmuvw/how9hBHZ38lAGj5ID4Ik6EdkOw7NmWPy6LAwalw==",
			"dev": true,
			"license": "MIT",
			"dependencies": {
				"agent-base": "^7.0.2",
				"debug": "4"
			},
			"engines": {
				"node": ">= 14"
			}
		},
		"node_modules/human-signals": {
			"version": "2.1.0",
			"resolved": "https://registry.npmjs.org/human-signals/-/human-signals-2.1.0.tgz",
			"integrity": "sha512-B4FFZ6q/T2jhhksgkbEW3HBvWIfDW85snkQgawt07S7J5QXTk6BkNV+0yAeZrM5QpMAdYlocGoljn0sJ/WQkFw==",
			"dev": true,
			"license": "Apache-2.0",
			"engines": {
				"node": ">=10.17.0"
			}
		},
		"node_modules/hyperdyperid": {
			"version": "1.2.0",
			"resolved": "https://registry.npmjs.org/hyperdyperid/-/hyperdyperid-1.2.0.tgz",
			"integrity": "sha512-Y93lCzHYgGWdrJ66yIktxiaGULYc6oGiABxhcO5AufBeOyoIdZF7bIfLaOrbM0iGIOXQQgxxRrFEnb+Y6w1n4A==",
			"dev": true,
			"license": "MIT",
			"engines": {
				"node": ">=10.18"
			}
		},
		"node_modules/iconv-lite": {
			"version": "0.4.24",
			"resolved": "https://registry.npmjs.org/iconv-lite/-/iconv-lite-0.4.24.tgz",
			"integrity": "sha512-v3MXnZAcvnywkTUEZomIActle7RXXeedOR31wwl7VlyoXO4Qi9arvSenNQWne1TcRwhCL1HwLI21bEqdpj8/rA==",
			"dev": true,
			"license": "MIT",
			"dependencies": {
				"safer-buffer": ">= 2.1.2 < 3"
			},
			"engines": {
				"node": ">=0.10.0"
			}
		},
		"node_modules/icss-utils": {
			"version": "5.1.0",
			"resolved": "https://registry.npmjs.org/icss-utils/-/icss-utils-5.1.0.tgz",
			"integrity": "sha512-soFhflCVWLfRNOPU3iv5Z9VUdT44xFRbzjLsEzSr5AQmgqPMTHdU3PMT1Cf1ssx8fLNJDA1juftYl+PUcv3MqA==",
			"dev": true,
			"license": "ISC",
			"engines": {
				"node": "^10 || ^12 || >= 14"
			},
			"peerDependencies": {
				"postcss": "^8.1.0"
			}
		},
		"node_modules/ieee754": {
			"version": "1.2.1",
			"resolved": "https://registry.npmjs.org/ieee754/-/ieee754-1.2.1.tgz",
			"integrity": "sha512-dcyqhDvX1C46lXZcVqCpK+FtMRQVdIMN6/Df5js2zouUsqG7I6sFxitIC+7KYK29KdXOLHdu9zL4sFnoVQnqaA==",
			"dev": true,
			"funding": [
				{
					"type": "github",
					"url": "https://github.com/sponsors/feross"
				},
				{
					"type": "patreon",
					"url": "https://www.patreon.com/feross"
				},
				{
					"type": "consulting",
					"url": "https://feross.org/support"
				}
			],
			"license": "BSD-3-Clause"
		},
		"node_modules/ignore": {
			"version": "5.3.2",
			"resolved": "https://registry.npmjs.org/ignore/-/ignore-5.3.2.tgz",
			"integrity": "sha512-hsBTNUqQTDwkWtcdYI2i06Y/nUBEsNEDJKjWdigLvegy8kDuJAS8uRlpkkcQpyEXL0Z/pjDy5HBmMjRCJ2gq+g==",
			"dev": true,
			"license": "MIT",
			"engines": {
				"node": ">= 4"
			}
		},
		"node_modules/ignore-walk": {
			"version": "6.0.5",
			"resolved": "https://registry.npmjs.org/ignore-walk/-/ignore-walk-6.0.5.tgz",
			"integrity": "sha512-VuuG0wCnjhnylG1ABXT3dAuIpTNDs/G8jlpmwXY03fXoXy/8ZK8/T+hMzt8L4WnrLCJgdybqgPagnF/f97cg3A==",
			"dev": true,
			"license": "ISC",
			"dependencies": {
				"minimatch": "^9.0.0"
			},
			"engines": {
				"node": "^14.17.0 || ^16.13.0 || >=18.0.0"
			}
		},
		"node_modules/image-size": {
			"version": "0.5.5",
			"resolved": "https://registry.npmjs.org/image-size/-/image-size-0.5.5.tgz",
			"integrity": "sha512-6TDAlDPZxUFCv+fuOkIoXT/V/f3Qbq8e37p+YOiYrUv3v9cc3/6x78VdfPgFVaB9dZYeLUfKgHRebpkm/oP2VQ==",
			"dev": true,
			"license": "MIT",
			"optional": true,
			"bin": {
				"image-size": "bin/image-size.js"
			},
			"engines": {
				"node": ">=0.10.0"
			}
		},
		"node_modules/immutable": {
			"version": "4.3.7",
			"resolved": "https://registry.npmjs.org/immutable/-/immutable-4.3.7.tgz",
			"integrity": "sha512-1hqclzwYwjRDFLjcFxOM5AYkkG0rpFPpr1RLPMEuGczoS7YA8gLhy8SWXYRAA/XwfEHpfo3cw5JGioS32fnMRw==",
			"dev": true,
			"license": "MIT"
		},
		"node_modules/import-fresh": {
			"version": "3.3.0",
			"resolved": "https://registry.npmjs.org/import-fresh/-/import-fresh-3.3.0.tgz",
			"integrity": "sha512-veYYhQa+D1QBKznvhUHxb8faxlrwUnxseDAbAp457E0wLNio2bOSKnjYDhMj+YiAq61xrMGhQk9iXVk5FzgQMw==",
			"dev": true,
			"license": "MIT",
			"dependencies": {
				"parent-module": "^1.0.0",
				"resolve-from": "^4.0.0"
			},
			"engines": {
				"node": ">=6"
			},
			"funding": {
				"url": "https://github.com/sponsors/sindresorhus"
			}
		},
		"node_modules/imurmurhash": {
			"version": "0.1.4",
			"resolved": "https://registry.npmjs.org/imurmurhash/-/imurmurhash-0.1.4.tgz",
			"integrity": "sha512-JmXMZ6wuvDmLiHEml9ykzqO6lwFbof0GG4IkcGaENdCRDDmMVnny7s5HsIgHCbaq0w2MyPhDqkhTUgS2LU2PHA==",
			"dev": true,
			"license": "MIT",
			"engines": {
				"node": ">=0.8.19"
			}
		},
		"node_modules/indent-string": {
			"version": "4.0.0",
			"resolved": "https://registry.npmjs.org/indent-string/-/indent-string-4.0.0.tgz",
			"integrity": "sha512-EdDDZu4A2OyIK7Lr/2zG+w5jmbuk1DVBnEwREQvBzspBJkCEbRa8GxU1lghYcaGJCnRWibjDXlq779X1/y5xwg==",
			"dev": true,
			"license": "MIT",
			"engines": {
				"node": ">=8"
			}
		},
		"node_modules/inherits": {
			"version": "2.0.4",
			"resolved": "https://registry.npmjs.org/inherits/-/inherits-2.0.4.tgz",
			"integrity": "sha512-k/vGaX4/Yla3WzyMCvTQOXYeIHvqOKtnqBduzTHpzpQZzAskKMhZ2K+EnBiSM9zGSoIFeMpXKxa4dYeZIQqewQ==",
			"dev": true,
			"license": "ISC"
		},
		"node_modules/ini": {
			"version": "4.1.3",
			"resolved": "https://registry.npmjs.org/ini/-/ini-4.1.3.tgz",
			"integrity": "sha512-X7rqawQBvfdjS10YU1y1YVreA3SsLrW9dX2CewP2EbBJM4ypVNLDkO5y04gejPwKIY9lR+7r9gn3rFPt/kmWFg==",
			"dev": true,
			"license": "ISC",
			"engines": {
				"node": "^14.17.0 || ^16.13.0 || >=18.0.0"
			}
		},
		"node_modules/ip-address": {
			"version": "9.0.5",
			"resolved": "https://registry.npmjs.org/ip-address/-/ip-address-9.0.5.tgz",
			"integrity": "sha512-zHtQzGojZXTwZTHQqra+ETKd4Sn3vgi7uBmlPoXVWZqYvuKmtI0l/VZTjqGmJY9x88GGOaZ9+G9ES8hC4T4X8g==",
			"dev": true,
			"license": "MIT",
			"dependencies": {
				"jsbn": "1.1.0",
				"sprintf-js": "^1.1.3"
			},
			"engines": {
				"node": ">= 12"
			}
		},
		"node_modules/ipaddr.js": {
			"version": "2.2.0",
			"resolved": "https://registry.npmjs.org/ipaddr.js/-/ipaddr.js-2.2.0.tgz",
			"integrity": "sha512-Ag3wB2o37wslZS19hZqorUnrnzSkpOVy+IiiDEiTqNubEYpYuHWIf6K4psgN2ZWKExS4xhVCrRVfb/wfW8fWJA==",
			"dev": true,
			"license": "MIT",
			"engines": {
				"node": ">= 10"
			}
		},
		"node_modules/is-arrayish": {
			"version": "0.2.1",
			"resolved": "https://registry.npmjs.org/is-arrayish/-/is-arrayish-0.2.1.tgz",
			"integrity": "sha512-zz06S8t0ozoDXMG+ube26zeCTNXcKIPJZJi8hBrF4idCLms4CG9QtK7qBl1boi5ODzFpjswb5JPmHCbMpjaYzg==",
			"dev": true,
			"license": "MIT"
		},
		"node_modules/is-binary-path": {
			"version": "2.1.0",
			"resolved": "https://registry.npmjs.org/is-binary-path/-/is-binary-path-2.1.0.tgz",
			"integrity": "sha512-ZMERYes6pDydyuGidse7OsHxtbI7WVeUEozgR/g7rd0xUimYNlvZRE/K2MgZTjWy725IfelLeVcEM97mmtRGXw==",
			"dev": true,
			"license": "MIT",
			"dependencies": {
				"binary-extensions": "^2.0.0"
			},
			"engines": {
				"node": ">=8"
			}
		},
		"node_modules/is-core-module": {
			"version": "2.15.1",
			"resolved": "https://registry.npmjs.org/is-core-module/-/is-core-module-2.15.1.tgz",
			"integrity": "sha512-z0vtXSwucUJtANQWldhbtbt7BnL0vxiFjIdDLAatwhDYty2bad6s+rijD6Ri4YuYJubLzIJLUidCh09e1djEVQ==",
			"dev": true,
			"license": "MIT",
			"dependencies": {
				"hasown": "^2.0.2"
			},
			"engines": {
				"node": ">= 0.4"
			},
			"funding": {
				"url": "https://github.com/sponsors/ljharb"
			}
		},
		"node_modules/is-docker": {
			"version": "3.0.0",
			"resolved": "https://registry.npmjs.org/is-docker/-/is-docker-3.0.0.tgz",
			"integrity": "sha512-eljcgEDlEns/7AXFosB5K/2nCM4P7FQPkGc/DWLy5rmFEWvZayGrik1d9/QIY5nJ4f9YsVvBkA6kJpHn9rISdQ==",
			"dev": true,
			"license": "MIT",
			"bin": {
				"is-docker": "cli.js"
			},
			"engines": {
				"node": "^12.20.0 || ^14.13.1 || >=16.0.0"
			},
			"funding": {
				"url": "https://github.com/sponsors/sindresorhus"
			}
		},
		"node_modules/is-extglob": {
			"version": "2.1.1",
			"resolved": "https://registry.npmjs.org/is-extglob/-/is-extglob-2.1.1.tgz",
			"integrity": "sha512-SbKbANkN603Vi4jEZv49LeVJMn4yGwsbzZworEoyEiutsN3nJYdbO36zfhGJ6QEDpOZIFkDtnq5JRxmvl3jsoQ==",
			"dev": true,
			"license": "MIT",
			"engines": {
				"node": ">=0.10.0"
			}
		},
		"node_modules/is-fullwidth-code-point": {
			"version": "4.0.0",
			"resolved": "https://registry.npmjs.org/is-fullwidth-code-point/-/is-fullwidth-code-point-4.0.0.tgz",
			"integrity": "sha512-O4L094N2/dZ7xqVdrXhh9r1KODPJpFms8B5sGdJLPy664AgvXsreZUyCQQNItZRDlYug4xStLjNp/sz3HvBowQ==",
			"dev": true,
			"license": "MIT",
			"engines": {
				"node": ">=12"
			},
			"funding": {
				"url": "https://github.com/sponsors/sindresorhus"
			}
		},
		"node_modules/is-glob": {
			"version": "4.0.3",
			"resolved": "https://registry.npmjs.org/is-glob/-/is-glob-4.0.3.tgz",
			"integrity": "sha512-xelSayHH36ZgE7ZWhli7pW34hNbNl8Ojv5KVmkJD4hBdD3th8Tfk9vYasLM+mXWOZhFkgZfxhLSnrwRr4elSSg==",
			"dev": true,
			"license": "MIT",
			"dependencies": {
				"is-extglob": "^2.1.1"
			},
			"engines": {
				"node": ">=0.10.0"
			}
		},
		"node_modules/is-inside-container": {
			"version": "1.0.0",
			"resolved": "https://registry.npmjs.org/is-inside-container/-/is-inside-container-1.0.0.tgz",
			"integrity": "sha512-KIYLCCJghfHZxqjYBE7rEy0OBuTd5xCHS7tHVgvCLkx7StIoaxwNW3hCALgEUjFfeRk+MG/Qxmp/vtETEF3tRA==",
			"dev": true,
			"license": "MIT",
			"dependencies": {
				"is-docker": "^3.0.0"
			},
			"bin": {
				"is-inside-container": "cli.js"
			},
			"engines": {
				"node": ">=14.16"
			},
			"funding": {
				"url": "https://github.com/sponsors/sindresorhus"
			}
		},
		"node_modules/is-interactive": {
			"version": "1.0.0",
			"resolved": "https://registry.npmjs.org/is-interactive/-/is-interactive-1.0.0.tgz",
			"integrity": "sha512-2HvIEKRoqS62guEC+qBjpvRubdX910WCMuJTZ+I9yvqKU2/12eSL549HMwtabb4oupdj2sMP50k+XJfB/8JE6w==",
			"dev": true,
			"license": "MIT",
			"engines": {
				"node": ">=8"
			}
		},
		"node_modules/is-lambda": {
			"version": "1.0.1",
			"resolved": "https://registry.npmjs.org/is-lambda/-/is-lambda-1.0.1.tgz",
			"integrity": "sha512-z7CMFGNrENq5iFB9Bqo64Xk6Y9sg+epq1myIcdHaGnbMTYOxvzsEtdYqQUylB7LxfkvgrrjP32T6Ywciio9UIQ==",
			"dev": true,
			"license": "MIT"
		},
		"node_modules/is-network-error": {
			"version": "1.1.0",
			"resolved": "https://registry.npmjs.org/is-network-error/-/is-network-error-1.1.0.tgz",
			"integrity": "sha512-tUdRRAnhT+OtCZR/LxZelH/C7QtjtFrTu5tXCA8pl55eTUElUHT+GPYV8MBMBvea/j+NxQqVt3LbWMRir7Gx9g==",
			"dev": true,
			"license": "MIT",
			"engines": {
				"node": ">=16"
			},
			"funding": {
				"url": "https://github.com/sponsors/sindresorhus"
			}
		},
		"node_modules/is-number": {
			"version": "7.0.0",
			"resolved": "https://registry.npmjs.org/is-number/-/is-number-7.0.0.tgz",
			"integrity": "sha512-41Cifkg6e8TylSpdtTpeLVMqvSBEVzTttHvERD741+pnZ8ANv0004MRL43QKPDlK9cGvNp6NZWZUBlbGXYxxng==",
			"dev": true,
			"license": "MIT",
			"engines": {
				"node": ">=0.12.0"
			}
		},
		"node_modules/is-plain-obj": {
			"version": "3.0.0",
			"resolved": "https://registry.npmjs.org/is-plain-obj/-/is-plain-obj-3.0.0.tgz",
			"integrity": "sha512-gwsOE28k+23GP1B6vFl1oVh/WOzmawBrKwo5Ev6wMKzPkaXaCDIQKzLnvsA42DRlbVTWorkgTKIviAKCWkfUwA==",
			"dev": true,
			"license": "MIT",
			"engines": {
				"node": ">=10"
			},
			"funding": {
				"url": "https://github.com/sponsors/sindresorhus"
			}
		},
		"node_modules/is-plain-object": {
			"version": "2.0.4",
			"resolved": "https://registry.npmjs.org/is-plain-object/-/is-plain-object-2.0.4.tgz",
			"integrity": "sha512-h5PpgXkWitc38BBMYawTYMWJHFZJVnBquFE57xFpjB8pJFiF6gZ+bU+WyI/yqXiFR5mdLsgYNaPe8uao6Uv9Og==",
			"dev": true,
			"license": "MIT",
			"dependencies": {
				"isobject": "^3.0.1"
			},
			"engines": {
				"node": ">=0.10.0"
			}
		},
		"node_modules/is-stream": {
			"version": "2.0.1",
			"resolved": "https://registry.npmjs.org/is-stream/-/is-stream-2.0.1.tgz",
			"integrity": "sha512-hFoiJiTl63nn+kstHGBtewWSKnQLpyb155KHheA1l39uvtO9nWIop1p3udqPcUd/xbF1VLMO4n7OI6p7RbngDg==",
			"dev": true,
			"license": "MIT",
			"engines": {
				"node": ">=8"
			},
			"funding": {
				"url": "https://github.com/sponsors/sindresorhus"
			}
		},
		"node_modules/is-unicode-supported": {
			"version": "0.1.0",
			"resolved": "https://registry.npmjs.org/is-unicode-supported/-/is-unicode-supported-0.1.0.tgz",
			"integrity": "sha512-knxG2q4UC3u8stRGyAVJCOdxFmv5DZiRcdlIaAQXAbSfJya+OhopNotLQrstBhququ4ZpuKbDc/8S6mgXgPFPw==",
			"dev": true,
			"license": "MIT",
			"engines": {
				"node": ">=10"
			},
			"funding": {
				"url": "https://github.com/sponsors/sindresorhus"
			}
		},
		"node_modules/is-what": {
			"version": "3.14.1",
			"resolved": "https://registry.npmjs.org/is-what/-/is-what-3.14.1.tgz",
			"integrity": "sha512-sNxgpk9793nzSs7bA6JQJGeIuRBQhAaNGG77kzYQgMkrID+lS6SlK07K5LaptscDlSaIgH+GPFzf+d75FVxozA==",
			"dev": true,
			"license": "MIT"
		},
		"node_modules/is-wsl": {
			"version": "3.1.0",
			"resolved": "https://registry.npmjs.org/is-wsl/-/is-wsl-3.1.0.tgz",
			"integrity": "sha512-UcVfVfaK4Sc4m7X3dUSoHoozQGBEFeDC+zVo06t98xe8CzHSZZBekNXH+tu0NalHolcJ/QAGqS46Hef7QXBIMw==",
			"dev": true,
			"license": "MIT",
			"dependencies": {
				"is-inside-container": "^1.0.0"
			},
			"engines": {
				"node": ">=16"
			},
			"funding": {
				"url": "https://github.com/sponsors/sindresorhus"
			}
		},
		"node_modules/isarray": {
			"version": "1.0.0",
			"resolved": "https://registry.npmjs.org/isarray/-/isarray-1.0.0.tgz",
			"integrity": "sha512-VLghIWNM6ELQzo7zwmcg0NmTVyWKYjvIeM83yjp0wRDTmUnrM678fQbcKBo6n2CJEF0szoG//ytg+TKla89ALQ==",
			"dev": true,
			"license": "MIT"
		},
		"node_modules/isexe": {
			"version": "3.1.1",
			"resolved": "https://registry.npmjs.org/isexe/-/isexe-3.1.1.tgz",
			"integrity": "sha512-LpB/54B+/2J5hqQ7imZHfdU31OlgQqx7ZicVlkm9kzg9/w8GKLEcFfJl/t7DCEDueOyBAD6zCCwTO6Fzs0NoEQ==",
			"dev": true,
			"license": "ISC",
			"engines": {
				"node": ">=16"
			}
		},
		"node_modules/isobject": {
			"version": "3.0.1",
			"resolved": "https://registry.npmjs.org/isobject/-/isobject-3.0.1.tgz",
			"integrity": "sha512-WhB9zCku7EGTj/HQQRz5aUQEUeoQZH2bWcltRErOpymJ4boYE6wL9Tbr23krRPSZ+C5zqNSrSw+Cc7sZZ4b7vg==",
			"dev": true,
			"license": "MIT",
			"engines": {
				"node": ">=0.10.0"
			}
		},
		"node_modules/istanbul-lib-coverage": {
			"version": "3.2.2",
			"resolved": "https://registry.npmjs.org/istanbul-lib-coverage/-/istanbul-lib-coverage-3.2.2.tgz",
			"integrity": "sha512-O8dpsF+r0WV/8MNRKfnmrtCWhuKjxrq2w+jpzBL5UZKTi2LeVWnWOmWRxFlesJONmc+wLAGvKQZEOanko0LFTg==",
			"dev": true,
			"license": "BSD-3-Clause",
			"engines": {
				"node": ">=8"
			}
		},
		"node_modules/istanbul-lib-instrument": {
			"version": "6.0.3",
			"resolved": "https://registry.npmjs.org/istanbul-lib-instrument/-/istanbul-lib-instrument-6.0.3.tgz",
			"integrity": "sha512-Vtgk7L/R2JHyyGW07spoFlB8/lpjiOLTjMdms6AFMraYt3BaJauod/NGrfnVG/y4Ix1JEuMRPDPEj2ua+zz1/Q==",
			"dev": true,
			"license": "BSD-3-Clause",
			"dependencies": {
				"@babel/core": "^7.23.9",
				"@babel/parser": "^7.23.9",
				"@istanbuljs/schema": "^0.1.3",
				"istanbul-lib-coverage": "^3.2.0",
				"semver": "^7.5.4"
			},
			"engines": {
				"node": ">=10"
			}
		},
		"node_modules/jackspeak": {
			"version": "3.4.3",
			"resolved": "https://registry.npmjs.org/jackspeak/-/jackspeak-3.4.3.tgz",
			"integrity": "sha512-OGlZQpz2yfahA/Rd1Y8Cd9SIEsqvXkLVoSw/cgwhnhFMDbsQFeZYoJJ7bIZBS9BcamUW96asq/npPWugM+RQBw==",
			"dev": true,
			"license": "BlueOak-1.0.0",
			"dependencies": {
				"@isaacs/cliui": "^8.0.2"
			},
			"funding": {
				"url": "https://github.com/sponsors/isaacs"
			},
			"optionalDependencies": {
				"@pkgjs/parseargs": "^0.11.0"
			}
		},
		"node_modules/jest-worker": {
			"version": "27.5.1",
			"resolved": "https://registry.npmjs.org/jest-worker/-/jest-worker-27.5.1.tgz",
			"integrity": "sha512-7vuh85V5cdDofPyxn58nrPjBktZo0u9x1g8WtjQol+jZDaE+fhN+cIvTj11GndBnMnyfrUOG1sZQxCdjKh+DKg==",
			"dev": true,
			"license": "MIT",
			"dependencies": {
				"@types/node": "*",
				"merge-stream": "^2.0.0",
				"supports-color": "^8.0.0"
			},
			"engines": {
				"node": ">= 10.13.0"
			}
		},
		"node_modules/jest-worker/node_modules/has-flag": {
			"version": "4.0.0",
			"resolved": "https://registry.npmjs.org/has-flag/-/has-flag-4.0.0.tgz",
			"integrity": "sha512-EykJT/Q1KjTWctppgIAgfSO0tKVuZUjhgMr17kqTumMl6Afv3EISleU7qZUzoXDFTAHTDC4NOoG/ZxU3EvlMPQ==",
			"dev": true,
			"license": "MIT",
			"engines": {
				"node": ">=8"
			}
		},
		"node_modules/jest-worker/node_modules/supports-color": {
			"version": "8.1.1",
			"resolved": "https://registry.npmjs.org/supports-color/-/supports-color-8.1.1.tgz",
			"integrity": "sha512-MpUEN2OodtUzxvKQl72cUF7RQ5EiHsGvSsVG0ia9c5RbWGL2CI4C7EpPS8UTBIplnlzZiNuV56w+FuNxy3ty2Q==",
			"dev": true,
			"license": "MIT",
			"dependencies": {
				"has-flag": "^4.0.0"
			},
			"engines": {
				"node": ">=10"
			},
			"funding": {
				"url": "https://github.com/chalk/supports-color?sponsor=1"
			}
		},
		"node_modules/jiti": {
			"version": "1.21.6",
			"resolved": "https://registry.npmjs.org/jiti/-/jiti-1.21.6.tgz",
			"integrity": "sha512-2yTgeWTWzMWkHu6Jp9NKgePDaYHbntiwvYuuJLbbN9vl7DC9DvXKOB2BC3ZZ92D3cvV/aflH0osDfwpHepQ53w==",
			"dev": true,
			"license": "MIT",
			"bin": {
				"jiti": "bin/jiti.js"
			}
		},
		"node_modules/js-tokens": {
			"version": "4.0.0",
			"resolved": "https://registry.npmjs.org/js-tokens/-/js-tokens-4.0.0.tgz",
			"integrity": "sha512-RdJUflcE3cUzKiMqQgsCu06FPu9UdIJO0beYbPhHN4k6apgJtifcoCtT9bcxOpYBtpD2kCM6Sbzg4CausW/PKQ==",
			"dev": true,
			"license": "MIT"
		},
		"node_modules/js-yaml": {
			"version": "4.1.0",
			"resolved": "https://registry.npmjs.org/js-yaml/-/js-yaml-4.1.0.tgz",
			"integrity": "sha512-wpxZs9NoxZaJESJGIZTyDEaYpl0FKSA+FB9aJiyemKhMwkxQg63h4T1KJgUGHpTqPDNRcmmYLugrRjJlBtWvRA==",
			"dev": true,
			"license": "MIT",
			"dependencies": {
				"argparse": "^2.0.1"
			},
			"bin": {
				"js-yaml": "bin/js-yaml.js"
			}
		},
		"node_modules/jsbn": {
			"version": "1.1.0",
			"resolved": "https://registry.npmjs.org/jsbn/-/jsbn-1.1.0.tgz",
			"integrity": "sha512-4bYVV3aAMtDTTu4+xsDYa6sy9GyJ69/amsu9sYF2zqjiEoZA5xJi3BrfX3uY+/IekIu7MwdObdbDWpoZdBv3/A==",
			"dev": true,
			"license": "MIT"
		},
		"node_modules/jsesc": {
			"version": "2.5.2",
			"resolved": "https://registry.npmjs.org/jsesc/-/jsesc-2.5.2.tgz",
			"integrity": "sha512-OYu7XEzjkCQ3C5Ps3QIZsQfNpqoJyZZA99wd9aWd05NCtC5pWOkShK2mkL6HXQR6/Cy2lbNdPlZBpuQHXE63gA==",
			"dev": true,
			"license": "MIT",
			"bin": {
				"jsesc": "bin/jsesc"
			},
			"engines": {
				"node": ">=4"
			}
		},
		"node_modules/json-parse-even-better-errors": {
			"version": "3.0.2",
			"resolved": "https://registry.npmjs.org/json-parse-even-better-errors/-/json-parse-even-better-errors-3.0.2.tgz",
			"integrity": "sha512-fi0NG4bPjCHunUJffmLd0gxssIgkNmArMvis4iNah6Owg1MCJjWhEcDLmsK6iGkJq3tHwbDkTlce70/tmXN4cQ==",
			"dev": true,
			"license": "MIT",
			"engines": {
				"node": "^14.17.0 || ^16.13.0 || >=18.0.0"
			}
		},
		"node_modules/json-schema-traverse": {
			"version": "1.0.0",
			"resolved": "https://registry.npmjs.org/json-schema-traverse/-/json-schema-traverse-1.0.0.tgz",
			"integrity": "sha512-NM8/P9n3XjXhIZn1lLhkFaACTOURQXjWhV4BA/RnOv8xvgqtqpAX9IO4mRQxSx1Rlo4tqzeqb0sOlruaOy3dug==",
			"dev": true,
			"license": "MIT"
		},
		"node_modules/json5": {
			"version": "2.2.3",
			"resolved": "https://registry.npmjs.org/json5/-/json5-2.2.3.tgz",
			"integrity": "sha512-XmOWe7eyHYH14cLdVPoyg+GOH3rYX++KpzrylJwSW98t3Nk+U8XOl8FWKOgwtzdb8lXGf6zYwDUzeHMWfxasyg==",
			"dev": true,
			"license": "MIT",
			"bin": {
				"json5": "lib/cli.js"
			},
			"engines": {
				"node": ">=6"
			}
		},
		"node_modules/jsonc-parser": {
			"version": "3.3.1",
			"resolved": "https://registry.npmjs.org/jsonc-parser/-/jsonc-parser-3.3.1.tgz",
			"integrity": "sha512-HUgH65KyejrUFPvHFPbqOY0rsFip3Bo5wb4ngvdi1EpCYWUQDC5V+Y7mZws+DLkr4M//zQJoanu1SP+87Dv1oQ==",
			"dev": true,
			"license": "MIT"
		},
		"node_modules/jsonparse": {
			"version": "1.3.1",
			"resolved": "https://registry.npmjs.org/jsonparse/-/jsonparse-1.3.1.tgz",
			"integrity": "sha512-POQXvpdL69+CluYsillJ7SUhKvytYjW9vG/GKpnf+xP8UWgYEM/RaMzHHofbALDiKbbP1W8UEYmgGl39WkPZsg==",
			"dev": true,
			"engines": [
				"node >= 0.2.0"
			],
			"license": "MIT"
		},
		"node_modules/karma-source-map-support": {
			"version": "1.4.0",
			"resolved": "https://registry.npmjs.org/karma-source-map-support/-/karma-source-map-support-1.4.0.tgz",
			"integrity": "sha512-RsBECncGO17KAoJCYXjv+ckIz+Ii9NCi+9enk+rq6XC81ezYkb4/RHE6CTXdA7IOJqoF3wcaLfVG0CPmE5ca6A==",
			"dev": true,
			"license": "MIT",
			"dependencies": {
				"source-map-support": "^0.5.5"
			}
		},
		"node_modules/kind-of": {
			"version": "6.0.3",
			"resolved": "https://registry.npmjs.org/kind-of/-/kind-of-6.0.3.tgz",
			"integrity": "sha512-dcS1ul+9tmeD95T+x28/ehLgd9mENa3LsvDTtzm3vyBEO7RPptvAD+t44WVXaUjTBRcrpFeFlC8WCruUR456hw==",
			"dev": true,
			"license": "MIT",
			"engines": {
				"node": ">=0.10.0"
			}
		},
		"node_modules/launch-editor": {
			"version": "2.8.1",
			"resolved": "https://registry.npmjs.org/launch-editor/-/launch-editor-2.8.1.tgz",
			"integrity": "sha512-elBx2l/tp9z99X5H/qev8uyDywVh0VXAwEbjk8kJhnc5grOFkGh7aW6q55me9xnYbss261XtnUrysZ+XvGbhQA==",
			"dev": true,
			"license": "MIT",
			"dependencies": {
				"picocolors": "^1.0.0",
				"shell-quote": "^1.8.1"
			}
		},
		"node_modules/less": {
			"version": "4.2.0",
			"resolved": "https://registry.npmjs.org/less/-/less-4.2.0.tgz",
			"integrity": "sha512-P3b3HJDBtSzsXUl0im2L7gTO5Ubg8mEN6G8qoTS77iXxXX4Hvu4Qj540PZDvQ8V6DmX6iXo98k7Md0Cm1PrLaA==",
			"dev": true,
			"license": "Apache-2.0",
			"dependencies": {
				"copy-anything": "^2.0.1",
				"parse-node-version": "^1.0.1",
				"tslib": "^2.3.0"
			},
			"bin": {
				"lessc": "bin/lessc"
			},
			"engines": {
				"node": ">=6"
			},
			"optionalDependencies": {
				"errno": "^0.1.1",
				"graceful-fs": "^4.1.2",
				"image-size": "~0.5.0",
				"make-dir": "^2.1.0",
				"mime": "^1.4.1",
				"needle": "^3.1.0",
				"source-map": "~0.6.0"
			}
		},
		"node_modules/less-loader": {
			"version": "12.2.0",
			"resolved": "https://registry.npmjs.org/less-loader/-/less-loader-12.2.0.tgz",
			"integrity": "sha512-MYUxjSQSBUQmowc0l5nPieOYwMzGPUaTzB6inNW/bdPEG9zOL3eAAD1Qw5ZxSPk7we5dMojHwNODYMV1hq4EVg==",
			"dev": true,
			"license": "MIT",
			"engines": {
				"node": ">= 18.12.0"
			},
			"funding": {
				"type": "opencollective",
				"url": "https://opencollective.com/webpack"
			},
			"peerDependencies": {
				"@rspack/core": "0.x || 1.x",
				"less": "^3.5.0 || ^4.0.0",
				"webpack": "^5.0.0"
			},
			"peerDependenciesMeta": {
				"@rspack/core": {
					"optional": true
				},
				"webpack": {
					"optional": true
				}
			}
		},
		"node_modules/less/node_modules/source-map": {
			"version": "0.6.1",
			"resolved": "https://registry.npmjs.org/source-map/-/source-map-0.6.1.tgz",
			"integrity": "sha512-UjgapumWlbMhkBgzT7Ykc5YXUT46F0iKu8SGXq0bcwP5dz/h0Plj6enJqjz1Zbq2l5WaqYnrVbwWOWMyF3F47g==",
			"dev": true,
			"license": "BSD-3-Clause",
			"optional": true,
			"engines": {
				"node": ">=0.10.0"
			}
		},
		"node_modules/license-webpack-plugin": {
			"version": "4.0.2",
			"resolved": "https://registry.npmjs.org/license-webpack-plugin/-/license-webpack-plugin-4.0.2.tgz",
			"integrity": "sha512-771TFWFD70G1wLTC4oU2Cw4qvtmNrIw+wRvBtn+okgHl7slJVi7zfNcdmqDL72BojM30VNJ2UHylr1o77U37Jw==",
			"dev": true,
			"license": "ISC",
			"dependencies": {
				"webpack-sources": "^3.0.0"
			},
			"peerDependenciesMeta": {
				"webpack": {
					"optional": true
				},
				"webpack-sources": {
					"optional": true
				}
			}
		},
		"node_modules/lilconfig": {
			"version": "2.1.0",
			"resolved": "https://registry.npmjs.org/lilconfig/-/lilconfig-2.1.0.tgz",
			"integrity": "sha512-utWOt/GHzuUxnLKxB6dk81RoOeoNeHgbrXiuGk4yyF5qlRz+iIVWu56E2fqGHFrXz0QNUhLB/8nKqvRH66JKGQ==",
			"dev": true,
			"license": "MIT",
			"engines": {
				"node": ">=10"
			}
		},
		"node_modules/lines-and-columns": {
			"version": "1.2.4",
			"resolved": "https://registry.npmjs.org/lines-and-columns/-/lines-and-columns-1.2.4.tgz",
			"integrity": "sha512-7ylylesZQ/PV29jhEDl3Ufjo6ZX7gCqJr5F7PKrqc93v7fzSymt1BpwEU8nAUXs8qzzvqhbjhK5QZg6Mt/HkBg==",
			"dev": true,
			"license": "MIT"
		},
		"node_modules/listr2": {
			"version": "8.2.4",
			"resolved": "https://registry.npmjs.org/listr2/-/listr2-8.2.4.tgz",
			"integrity": "sha512-opevsywziHd3zHCVQGAj8zu+Z3yHNkkoYhWIGnq54RrCVwLz0MozotJEDnKsIBLvkfLGN6BLOyAeRrYI0pKA4g==",
			"dev": true,
			"license": "MIT",
			"dependencies": {
				"cli-truncate": "^4.0.0",
				"colorette": "^2.0.20",
				"eventemitter3": "^5.0.1",
				"log-update": "^6.1.0",
				"rfdc": "^1.4.1",
				"wrap-ansi": "^9.0.0"
			},
			"engines": {
				"node": ">=18.0.0"
			}
		},
		"node_modules/listr2/node_modules/ansi-regex": {
			"version": "6.0.1",
			"resolved": "https://registry.npmjs.org/ansi-regex/-/ansi-regex-6.0.1.tgz",
			"integrity": "sha512-n5M855fKb2SsfMIiFFoVrABHJC8QtHwVx+mHWP3QcEqBHYienj5dHSgjbxtC0WEZXYt4wcD6zrQElDPhFuZgfA==",
			"dev": true,
			"license": "MIT",
			"engines": {
				"node": ">=12"
			},
			"funding": {
				"url": "https://github.com/chalk/ansi-regex?sponsor=1"
			}
		},
		"node_modules/listr2/node_modules/ansi-styles": {
			"version": "6.2.1",
			"resolved": "https://registry.npmjs.org/ansi-styles/-/ansi-styles-6.2.1.tgz",
			"integrity": "sha512-bN798gFfQX+viw3R7yrGWRqnrN2oRkEkUjjl4JNn4E8GxxbjtG3FbrEIIY3l8/hrwUwIeCZvi4QuOTP4MErVug==",
			"dev": true,
			"license": "MIT",
			"engines": {
				"node": ">=12"
			},
			"funding": {
				"url": "https://github.com/chalk/ansi-styles?sponsor=1"
			}
		},
		"node_modules/listr2/node_modules/eventemitter3": {
			"version": "5.0.1",
			"resolved": "https://registry.npmjs.org/eventemitter3/-/eventemitter3-5.0.1.tgz",
			"integrity": "sha512-GWkBvjiSZK87ELrYOSESUYeVIc9mvLLf/nXalMOS5dYrgZq9o5OVkbZAVM06CVxYsCwH9BDZFPlQTlPA1j4ahA==",
			"dev": true,
			"license": "MIT"
		},
		"node_modules/listr2/node_modules/strip-ansi": {
			"version": "7.1.0",
			"resolved": "https://registry.npmjs.org/strip-ansi/-/strip-ansi-7.1.0.tgz",
			"integrity": "sha512-iq6eVVI64nQQTRYq2KtEg2d2uU7LElhTJwsH4YzIHZshxlgZms/wIc4VoDQTlG/IvVIrBKG06CrZnp0qv7hkcQ==",
			"dev": true,
			"license": "MIT",
			"dependencies": {
				"ansi-regex": "^6.0.1"
			},
			"engines": {
				"node": ">=12"
			},
			"funding": {
				"url": "https://github.com/chalk/strip-ansi?sponsor=1"
			}
		},
		"node_modules/listr2/node_modules/wrap-ansi": {
			"version": "9.0.0",
			"resolved": "https://registry.npmjs.org/wrap-ansi/-/wrap-ansi-9.0.0.tgz",
			"integrity": "sha512-G8ura3S+3Z2G+mkgNRq8dqaFZAuxfsxpBB8OCTGRTCtp+l/v9nbFNmCUP1BZMts3G1142MsZfn6eeUKrr4PD1Q==",
			"dev": true,
			"license": "MIT",
			"dependencies": {
				"ansi-styles": "^6.2.1",
				"string-width": "^7.0.0",
				"strip-ansi": "^7.1.0"
			},
			"engines": {
				"node": ">=18"
			},
			"funding": {
				"url": "https://github.com/chalk/wrap-ansi?sponsor=1"
			}
		},
		"node_modules/lmdb": {
			"version": "3.0.13",
			"resolved": "https://registry.npmjs.org/lmdb/-/lmdb-3.0.13.tgz",
			"integrity": "sha512-UGe+BbaSUQtAMZobTb4nHvFMrmvuAQKSeaqAX2meTEQjfsbpl5sxdHD8T72OnwD4GU9uwNhYXIVe4QGs8N9Zyw==",
			"dev": true,
			"hasInstallScript": true,
			"license": "MIT",
			"dependencies": {
				"msgpackr": "^1.10.2",
				"node-addon-api": "^6.1.0",
				"node-gyp-build-optional-packages": "5.2.2",
				"ordered-binary": "^1.4.1",
				"weak-lru-cache": "^1.2.2"
			},
			"bin": {
				"download-lmdb-prebuilds": "bin/download-prebuilds.js"
			},
			"optionalDependencies": {
				"@lmdb/lmdb-darwin-arm64": "3.0.13",
				"@lmdb/lmdb-darwin-x64": "3.0.13",
				"@lmdb/lmdb-linux-arm": "3.0.13",
				"@lmdb/lmdb-linux-arm64": "3.0.13",
				"@lmdb/lmdb-linux-x64": "3.0.13",
				"@lmdb/lmdb-win32-x64": "3.0.13"
			}
		},
		"node_modules/loader-runner": {
			"version": "4.3.0",
			"resolved": "https://registry.npmjs.org/loader-runner/-/loader-runner-4.3.0.tgz",
			"integrity": "sha512-3R/1M+yS3j5ou80Me59j7F9IMs4PXs3VqRrm0TU3AbKPxlmpoY1TNscJV/oGJXo8qCatFGTfDbY6W6ipGOYXfg==",
			"dev": true,
			"license": "MIT",
			"engines": {
				"node": ">=6.11.5"
			}
		},
		"node_modules/loader-utils": {
			"version": "3.3.1",
			"resolved": "https://registry.npmjs.org/loader-utils/-/loader-utils-3.3.1.tgz",
			"integrity": "sha512-FMJTLMXfCLMLfJxcX9PFqX5qD88Z5MRGaZCVzfuqeZSPsyiBzs+pahDQjbIWz2QIzPZz0NX9Zy4FX3lmK6YHIg==",
			"dev": true,
			"license": "MIT",
			"engines": {
				"node": ">= 12.13.0"
			}
		},
		"node_modules/locate-path": {
			"version": "7.2.0",
			"resolved": "https://registry.npmjs.org/locate-path/-/locate-path-7.2.0.tgz",
			"integrity": "sha512-gvVijfZvn7R+2qyPX8mAuKcFGDf6Nc61GdvGafQsHL0sBIxfKzA+usWn4GFC/bk+QdwPUD4kWFJLhElipq+0VA==",
			"dev": true,
			"license": "MIT",
			"dependencies": {
				"p-locate": "^6.0.0"
			},
			"engines": {
				"node": "^12.20.0 || ^14.13.1 || >=16.0.0"
			},
			"funding": {
				"url": "https://github.com/sponsors/sindresorhus"
			}
		},
		"node_modules/lodash.debounce": {
			"version": "4.0.8",
			"resolved": "https://registry.npmjs.org/lodash.debounce/-/lodash.debounce-4.0.8.tgz",
			"integrity": "sha512-FT1yDzDYEoYWhnSGnpE/4Kj1fLZkDFyqRb7fNt6FdYOSxlUWAtp42Eh6Wb0rGIv/m9Bgo7x4GhQbm5Ys4SG5ow==",
			"dev": true,
			"license": "MIT"
		},
		"node_modules/log-symbols": {
			"version": "4.1.0",
			"resolved": "https://registry.npmjs.org/log-symbols/-/log-symbols-4.1.0.tgz",
			"integrity": "sha512-8XPvpAA8uyhfteu8pIvQxpJZ7SYYdpUivZpGy6sFsBuKRY/7rQGavedeB8aK+Zkyq6upMFVL/9AW6vOYzfRyLg==",
			"dev": true,
			"license": "MIT",
			"dependencies": {
				"chalk": "^4.1.0",
				"is-unicode-supported": "^0.1.0"
			},
			"engines": {
				"node": ">=10"
			},
			"funding": {
				"url": "https://github.com/sponsors/sindresorhus"
			}
		},
		"node_modules/log-symbols/node_modules/ansi-styles": {
			"version": "4.3.0",
			"resolved": "https://registry.npmjs.org/ansi-styles/-/ansi-styles-4.3.0.tgz",
			"integrity": "sha512-zbB9rCJAT1rbjiVDb2hqKFHNYLxgtk8NURxZ3IZwD3F6NtxbXZQCnnSi1Lkx+IDohdPlFp222wVALIheZJQSEg==",
			"dev": true,
			"license": "MIT",
			"dependencies": {
				"color-convert": "^2.0.1"
			},
			"engines": {
				"node": ">=8"
			},
			"funding": {
				"url": "https://github.com/chalk/ansi-styles?sponsor=1"
			}
		},
		"node_modules/log-symbols/node_modules/chalk": {
			"version": "4.1.2",
			"resolved": "https://registry.npmjs.org/chalk/-/chalk-4.1.2.tgz",
			"integrity": "sha512-oKnbhFyRIXpUuez8iBMmyEa4nbj4IOQyuhc/wy9kY7/WVPcwIO9VA668Pu8RkO7+0G76SLROeyw9CpQ061i4mA==",
			"dev": true,
			"license": "MIT",
			"dependencies": {
				"ansi-styles": "^4.1.0",
				"supports-color": "^7.1.0"
			},
			"engines": {
				"node": ">=10"
			},
			"funding": {
				"url": "https://github.com/chalk/chalk?sponsor=1"
			}
		},
		"node_modules/log-symbols/node_modules/color-convert": {
			"version": "2.0.1",
			"resolved": "https://registry.npmjs.org/color-convert/-/color-convert-2.0.1.tgz",
			"integrity": "sha512-RRECPsj7iu/xb5oKYcsFHSppFNnsj/52OVTRKb4zP5onXwVF3zVmmToNcOfGC+CRDpfK/U584fMg38ZHCaElKQ==",
			"dev": true,
			"license": "MIT",
			"dependencies": {
				"color-name": "~1.1.4"
			},
			"engines": {
				"node": ">=7.0.0"
			}
		},
		"node_modules/log-symbols/node_modules/color-name": {
			"version": "1.1.4",
			"resolved": "https://registry.npmjs.org/color-name/-/color-name-1.1.4.tgz",
			"integrity": "sha512-dOy+3AuW3a2wNbZHIuMZpTcgjGuLU/uBL/ubcZF9OXbDo8ff4O8yVp5Bf0efS8uEoYo5q4Fx7dY9OgQGXgAsQA==",
			"dev": true,
			"license": "MIT"
		},
		"node_modules/log-symbols/node_modules/has-flag": {
			"version": "4.0.0",
			"resolved": "https://registry.npmjs.org/has-flag/-/has-flag-4.0.0.tgz",
			"integrity": "sha512-EykJT/Q1KjTWctppgIAgfSO0tKVuZUjhgMr17kqTumMl6Afv3EISleU7qZUzoXDFTAHTDC4NOoG/ZxU3EvlMPQ==",
			"dev": true,
			"license": "MIT",
			"engines": {
				"node": ">=8"
			}
		},
		"node_modules/log-symbols/node_modules/supports-color": {
			"version": "7.2.0",
			"resolved": "https://registry.npmjs.org/supports-color/-/supports-color-7.2.0.tgz",
			"integrity": "sha512-qpCAvRl9stuOHveKsn7HncJRvv501qIacKzQlO/+Lwxc9+0q2wLyv4Dfvt80/DPn2pqOBsJdDiogXGR9+OvwRw==",
			"dev": true,
			"license": "MIT",
			"dependencies": {
				"has-flag": "^4.0.0"
			},
			"engines": {
				"node": ">=8"
			}
		},
		"node_modules/log-update": {
			"version": "6.1.0",
			"resolved": "https://registry.npmjs.org/log-update/-/log-update-6.1.0.tgz",
			"integrity": "sha512-9ie8ItPR6tjY5uYJh8K/Zrv/RMZ5VOlOWvtZdEHYSTFKZfIBPQa9tOAEeAWhd+AnIneLJ22w5fjOYtoutpWq5w==",
			"dev": true,
			"license": "MIT",
			"dependencies": {
				"ansi-escapes": "^7.0.0",
				"cli-cursor": "^5.0.0",
				"slice-ansi": "^7.1.0",
				"strip-ansi": "^7.1.0",
				"wrap-ansi": "^9.0.0"
			},
			"engines": {
				"node": ">=18"
			},
			"funding": {
				"url": "https://github.com/sponsors/sindresorhus"
			}
		},
		"node_modules/log-update/node_modules/ansi-escapes": {
			"version": "7.0.0",
			"resolved": "https://registry.npmjs.org/ansi-escapes/-/ansi-escapes-7.0.0.tgz",
			"integrity": "sha512-GdYO7a61mR0fOlAsvC9/rIHf7L96sBc6dEWzeOu+KAea5bZyQRPIpojrVoI4AXGJS/ycu/fBTdLrUkA4ODrvjw==",
			"dev": true,
			"license": "MIT",
			"dependencies": {
				"environment": "^1.0.0"
			},
			"engines": {
				"node": ">=18"
			},
			"funding": {
				"url": "https://github.com/sponsors/sindresorhus"
			}
		},
		"node_modules/log-update/node_modules/ansi-regex": {
			"version": "6.0.1",
			"resolved": "https://registry.npmjs.org/ansi-regex/-/ansi-regex-6.0.1.tgz",
			"integrity": "sha512-n5M855fKb2SsfMIiFFoVrABHJC8QtHwVx+mHWP3QcEqBHYienj5dHSgjbxtC0WEZXYt4wcD6zrQElDPhFuZgfA==",
			"dev": true,
			"license": "MIT",
			"engines": {
				"node": ">=12"
			},
			"funding": {
				"url": "https://github.com/chalk/ansi-regex?sponsor=1"
			}
		},
		"node_modules/log-update/node_modules/ansi-styles": {
			"version": "6.2.1",
			"resolved": "https://registry.npmjs.org/ansi-styles/-/ansi-styles-6.2.1.tgz",
			"integrity": "sha512-bN798gFfQX+viw3R7yrGWRqnrN2oRkEkUjjl4JNn4E8GxxbjtG3FbrEIIY3l8/hrwUwIeCZvi4QuOTP4MErVug==",
			"dev": true,
			"license": "MIT",
			"engines": {
				"node": ">=12"
			},
			"funding": {
				"url": "https://github.com/chalk/ansi-styles?sponsor=1"
			}
		},
		"node_modules/log-update/node_modules/is-fullwidth-code-point": {
			"version": "5.0.0",
			"resolved": "https://registry.npmjs.org/is-fullwidth-code-point/-/is-fullwidth-code-point-5.0.0.tgz",
			"integrity": "sha512-OVa3u9kkBbw7b8Xw5F9P+D/T9X+Z4+JruYVNapTjPYZYUznQ5YfWeFkOj606XYYW8yugTfC8Pj0hYqvi4ryAhA==",
			"dev": true,
			"license": "MIT",
			"dependencies": {
				"get-east-asian-width": "^1.0.0"
			},
			"engines": {
				"node": ">=18"
			},
			"funding": {
				"url": "https://github.com/sponsors/sindresorhus"
			}
		},
		"node_modules/log-update/node_modules/slice-ansi": {
			"version": "7.1.0",
			"resolved": "https://registry.npmjs.org/slice-ansi/-/slice-ansi-7.1.0.tgz",
			"integrity": "sha512-bSiSngZ/jWeX93BqeIAbImyTbEihizcwNjFoRUIY/T1wWQsfsm2Vw1agPKylXvQTU7iASGdHhyqRlqQzfz+Htg==",
			"dev": true,
			"license": "MIT",
			"dependencies": {
				"ansi-styles": "^6.2.1",
				"is-fullwidth-code-point": "^5.0.0"
			},
			"engines": {
				"node": ">=18"
			},
			"funding": {
				"url": "https://github.com/chalk/slice-ansi?sponsor=1"
			}
		},
		"node_modules/log-update/node_modules/strip-ansi": {
			"version": "7.1.0",
			"resolved": "https://registry.npmjs.org/strip-ansi/-/strip-ansi-7.1.0.tgz",
			"integrity": "sha512-iq6eVVI64nQQTRYq2KtEg2d2uU7LElhTJwsH4YzIHZshxlgZms/wIc4VoDQTlG/IvVIrBKG06CrZnp0qv7hkcQ==",
			"dev": true,
			"license": "MIT",
			"dependencies": {
				"ansi-regex": "^6.0.1"
			},
			"engines": {
				"node": ">=12"
			},
			"funding": {
				"url": "https://github.com/chalk/strip-ansi?sponsor=1"
			}
		},
		"node_modules/log-update/node_modules/wrap-ansi": {
			"version": "9.0.0",
			"resolved": "https://registry.npmjs.org/wrap-ansi/-/wrap-ansi-9.0.0.tgz",
			"integrity": "sha512-G8ura3S+3Z2G+mkgNRq8dqaFZAuxfsxpBB8OCTGRTCtp+l/v9nbFNmCUP1BZMts3G1142MsZfn6eeUKrr4PD1Q==",
			"dev": true,
			"license": "MIT",
			"dependencies": {
				"ansi-styles": "^6.2.1",
				"string-width": "^7.0.0",
				"strip-ansi": "^7.1.0"
			},
			"engines": {
				"node": ">=18"
			},
			"funding": {
				"url": "https://github.com/chalk/wrap-ansi?sponsor=1"
			}
		},
		"node_modules/lru-cache": {
			"version": "5.1.1",
			"resolved": "https://registry.npmjs.org/lru-cache/-/lru-cache-5.1.1.tgz",
			"integrity": "sha512-KpNARQA3Iwv+jTA0utUVVbrh+Jlrr1Fv0e56GGzAFOXN7dk/FviaDW8LHmK52DlcH4WP2n6gI8vN1aesBFgo9w==",
			"dev": true,
			"license": "ISC",
			"dependencies": {
				"yallist": "^3.0.2"
			}
		},
		"node_modules/magic-string": {
			"version": "0.30.11",
			"resolved": "https://registry.npmjs.org/magic-string/-/magic-string-0.30.11.tgz",
			"integrity": "sha512-+Wri9p0QHMy+545hKww7YAu5NyzF8iomPL/RQazugQ9+Ez4Ic3mERMd8ZTX5rfK944j+560ZJi8iAwgak1Ac7A==",
			"dev": true,
			"license": "MIT",
			"dependencies": {
				"@jridgewell/sourcemap-codec": "^1.5.0"
			}
		},
		"node_modules/make-dir": {
			"version": "2.1.0",
			"resolved": "https://registry.npmjs.org/make-dir/-/make-dir-2.1.0.tgz",
			"integrity": "sha512-LS9X+dc8KLxXCb8dni79fLIIUA5VyZoyjSMCwTluaXA0o27cCK0bhXkpgw+sTXVpPy/lSO57ilRixqk0vDmtRA==",
			"dev": true,
			"license": "MIT",
			"optional": true,
			"dependencies": {
				"pify": "^4.0.1",
				"semver": "^5.6.0"
			},
			"engines": {
				"node": ">=6"
			}
		},
		"node_modules/make-dir/node_modules/semver": {
			"version": "5.7.2",
			"resolved": "https://registry.npmjs.org/semver/-/semver-5.7.2.tgz",
			"integrity": "sha512-cBznnQ9KjJqU67B52RMC65CMarK2600WFnbkcaiwWq3xy/5haFJlshgnpjovMVJ+Hff49d8GEn0b87C5pDQ10g==",
			"dev": true,
			"license": "ISC",
			"optional": true,
			"bin": {
				"semver": "bin/semver"
			}
		},
		"node_modules/make-fetch-happen": {
			"version": "13.0.1",
			"resolved": "https://registry.npmjs.org/make-fetch-happen/-/make-fetch-happen-13.0.1.tgz",
			"integrity": "sha512-cKTUFc/rbKUd/9meOvgrpJ2WrNzymt6jfRDdwg5UCnVzv9dTpEj9JS5m3wtziXVCjluIXyL8pcaukYqezIzZQA==",
			"dev": true,
			"license": "ISC",
			"dependencies": {
				"@npmcli/agent": "^2.0.0",
				"cacache": "^18.0.0",
				"http-cache-semantics": "^4.1.1",
				"is-lambda": "^1.0.1",
				"minipass": "^7.0.2",
				"minipass-fetch": "^3.0.0",
				"minipass-flush": "^1.0.5",
				"minipass-pipeline": "^1.2.4",
				"negotiator": "^0.6.3",
				"proc-log": "^4.2.0",
				"promise-retry": "^2.0.1",
				"ssri": "^10.0.0"
			},
			"engines": {
				"node": "^16.14.0 || >=18.0.0"
			}
		},
		"node_modules/media-typer": {
			"version": "0.3.0",
			"resolved": "https://registry.npmjs.org/media-typer/-/media-typer-0.3.0.tgz",
			"integrity": "sha512-dq+qelQ9akHpcOl/gUVRTxVIOkAJ1wR3QAvb4RsVjS8oVoFjDGTc679wJYmUmknUF5HwMLOgb5O+a3KxfWapPQ==",
			"dev": true,
			"license": "MIT",
			"engines": {
				"node": ">= 0.6"
			}
		},
		"node_modules/memfs": {
			"version": "4.11.1",
			"resolved": "https://registry.npmjs.org/memfs/-/memfs-4.11.1.tgz",
			"integrity": "sha512-LZcMTBAgqUUKNXZagcZxvXXfgF1bHX7Y7nQ0QyEiNbRJgE29GhgPd8Yna1VQcLlPiHt/5RFJMWYN9Uv/VPNvjQ==",
			"dev": true,
			"license": "Apache-2.0",
			"dependencies": {
				"@jsonjoy.com/json-pack": "^1.0.3",
				"@jsonjoy.com/util": "^1.3.0",
				"tree-dump": "^1.0.1",
				"tslib": "^2.0.0"
			},
			"engines": {
				"node": ">= 4.0.0"
			},
			"funding": {
				"type": "github",
				"url": "https://github.com/sponsors/streamich"
			}
		},
		"node_modules/merge-descriptors": {
			"version": "1.0.1",
			"resolved": "https://registry.npmjs.org/merge-descriptors/-/merge-descriptors-1.0.1.tgz",
			"integrity": "sha512-cCi6g3/Zr1iqQi6ySbseM1Xvooa98N0w31jzUYrXPX2xqObmFGHJ0tQ5u74H3mVh7wLouTseZyYIq39g8cNp1w==",
			"dev": true,
			"license": "MIT"
		},
		"node_modules/merge-stream": {
			"version": "2.0.0",
			"resolved": "https://registry.npmjs.org/merge-stream/-/merge-stream-2.0.0.tgz",
			"integrity": "sha512-abv/qOcuPfk3URPfDzmZU1LKmuw8kT+0nIHvKrKgFrwifol/doWcdA4ZqsWQ8ENrFKkd67Mfpo/LovbIUsbt3w==",
			"dev": true,
			"license": "MIT"
		},
		"node_modules/merge2": {
			"version": "1.4.1",
			"resolved": "https://registry.npmjs.org/merge2/-/merge2-1.4.1.tgz",
			"integrity": "sha512-8q7VEgMJW4J8tcfVPy8g09NcQwZdbwFEqhe/WZkoIzjn/3TGDwtOCYtXGxA3O8tPzpczCCDgv+P2P5y00ZJOOg==",
			"dev": true,
			"license": "MIT",
			"engines": {
				"node": ">= 8"
			}
		},
		"node_modules/methods": {
			"version": "1.1.2",
			"resolved": "https://registry.npmjs.org/methods/-/methods-1.1.2.tgz",
			"integrity": "sha512-iclAHeNqNm68zFtnZ0e+1L2yUIdvzNoauKU4WBA3VvH/vPFieF7qfRlwUZU+DA9P9bPXIS90ulxoUoCH23sV2w==",
			"dev": true,
			"license": "MIT",
			"engines": {
				"node": ">= 0.6"
			}
		},
		"node_modules/micromatch": {
			"version": "4.0.8",
			"resolved": "https://registry.npmjs.org/micromatch/-/micromatch-4.0.8.tgz",
			"integrity": "sha512-PXwfBhYu0hBCPw8Dn0E+WDYb7af3dSLVWKi3HGv84IdF4TyFoC0ysxFd0Goxw7nSv4T/PzEJQxsYsEiFCKo2BA==",
			"dev": true,
			"license": "MIT",
			"dependencies": {
				"braces": "^3.0.3",
				"picomatch": "^2.3.1"
			},
			"engines": {
				"node": ">=8.6"
			}
		},
		"node_modules/micromatch/node_modules/picomatch": {
			"version": "2.3.1",
			"resolved": "https://registry.npmjs.org/picomatch/-/picomatch-2.3.1.tgz",
			"integrity": "sha512-JU3teHTNjmE2VCGFzuY8EXzCDVwEqB2a8fsIvwaStHhAWJEeVd1o1QD80CU6+ZdEXXSLbSsuLwJjkCBWqRQUVA==",
			"dev": true,
			"license": "MIT",
			"engines": {
				"node": ">=8.6"
			},
			"funding": {
				"url": "https://github.com/sponsors/jonschlinkert"
			}
		},
		"node_modules/mime": {
			"version": "1.6.0",
			"resolved": "https://registry.npmjs.org/mime/-/mime-1.6.0.tgz",
			"integrity": "sha512-x0Vn8spI+wuJ1O6S7gnbaQg8Pxh4NNHb7KSINmEWKiPE4RKOplvijn+NkmYmmRgP68mc70j2EbeTFRsrswaQeg==",
			"dev": true,
			"license": "MIT",
			"bin": {
				"mime": "cli.js"
			},
			"engines": {
				"node": ">=4"
			}
		},
		"node_modules/mime-db": {
			"version": "1.52.0",
			"resolved": "https://registry.npmjs.org/mime-db/-/mime-db-1.52.0.tgz",
			"integrity": "sha512-sPU4uV7dYlvtWJxwwxHD0PuihVNiE7TyAbQ5SWxDCB9mUYvOgroQOwYQQOKPJ8CIbE+1ETVlOoK1UC2nU3gYvg==",
			"dev": true,
			"license": "MIT",
			"engines": {
				"node": ">= 0.6"
			}
		},
		"node_modules/mime-types": {
			"version": "2.1.35",
			"resolved": "https://registry.npmjs.org/mime-types/-/mime-types-2.1.35.tgz",
			"integrity": "sha512-ZDY+bPm5zTTF+YpCrAU9nK0UgICYPT0QtT1NZWFv4s++TNkcgVaT0g6+4R2uI4MjQjzysHB1zxuWL50hzaeXiw==",
			"dev": true,
			"license": "MIT",
			"dependencies": {
				"mime-db": "1.52.0"
			},
			"engines": {
				"node": ">= 0.6"
			}
		},
		"node_modules/mimic-fn": {
			"version": "2.1.0",
			"resolved": "https://registry.npmjs.org/mimic-fn/-/mimic-fn-2.1.0.tgz",
			"integrity": "sha512-OqbOk5oEQeAZ8WXWydlu9HJjz9WVdEIvamMCcXmuqUYjTknH/sqsWvhQ3vgwKFRR1HpjvNBKQ37nbJgYzGqGcg==",
			"dev": true,
			"license": "MIT",
			"engines": {
				"node": ">=6"
			}
		},
		"node_modules/mimic-function": {
			"version": "5.0.1",
			"resolved": "https://registry.npmjs.org/mimic-function/-/mimic-function-5.0.1.tgz",
			"integrity": "sha512-VP79XUPxV2CigYP3jWwAUFSku2aKqBH7uTAapFWCBqutsbmDo96KY5o8uh6U+/YSIn5OxJnXp73beVkpqMIGhA==",
			"dev": true,
			"license": "MIT",
			"engines": {
				"node": ">=18"
			},
			"funding": {
				"url": "https://github.com/sponsors/sindresorhus"
			}
		},
		"node_modules/mini-css-extract-plugin": {
			"version": "2.9.0",
			"resolved": "https://registry.npmjs.org/mini-css-extract-plugin/-/mini-css-extract-plugin-2.9.0.tgz",
			"integrity": "sha512-Zs1YsZVfemekSZG+44vBsYTLQORkPMwnlv+aehcxK/NLKC+EGhDB39/YePYYqx/sTk6NnYpuqikhSn7+JIevTA==",
			"dev": true,
			"license": "MIT",
			"dependencies": {
				"schema-utils": "^4.0.0",
				"tapable": "^2.2.1"
			},
			"engines": {
				"node": ">= 12.13.0"
			},
			"funding": {
				"type": "opencollective",
				"url": "https://opencollective.com/webpack"
			},
			"peerDependencies": {
				"webpack": "^5.0.0"
			}
		},
		"node_modules/minimalistic-assert": {
			"version": "1.0.1",
			"resolved": "https://registry.npmjs.org/minimalistic-assert/-/minimalistic-assert-1.0.1.tgz",
			"integrity": "sha512-UtJcAD4yEaGtjPezWuO9wC4nwUnVH/8/Im3yEHQP4b67cXlD/Qr9hdITCU1xDbSEXg2XKNaP8jsReV7vQd00/A==",
			"dev": true,
			"license": "ISC"
		},
		"node_modules/minimatch": {
			"version": "9.0.5",
			"resolved": "https://registry.npmjs.org/minimatch/-/minimatch-9.0.5.tgz",
			"integrity": "sha512-G6T0ZX48xgozx7587koeX9Ys2NYy6Gmv//P89sEte9V9whIapMNF4idKxnW2QtCcLiTWlb/wfCabAtAFWhhBow==",
			"dev": true,
			"license": "ISC",
			"dependencies": {
				"brace-expansion": "^2.0.1"
			},
			"engines": {
				"node": ">=16 || 14 >=14.17"
			},
			"funding": {
				"url": "https://github.com/sponsors/isaacs"
			}
		},
		"node_modules/minipass": {
			"version": "7.1.2",
			"resolved": "https://registry.npmjs.org/minipass/-/minipass-7.1.2.tgz",
			"integrity": "sha512-qOOzS1cBTWYF4BH8fVePDBOO9iptMnGUEZwNc/cMWnTV2nVLZ7VoNWEPHkYczZA0pdoA7dl6e7FL659nX9S2aw==",
			"dev": true,
			"license": "ISC",
			"engines": {
				"node": ">=16 || 14 >=14.17"
			}
		},
		"node_modules/minipass-collect": {
			"version": "2.0.1",
			"resolved": "https://registry.npmjs.org/minipass-collect/-/minipass-collect-2.0.1.tgz",
			"integrity": "sha512-D7V8PO9oaz7PWGLbCACuI1qEOsq7UKfLotx/C0Aet43fCUB/wfQ7DYeq2oR/svFJGYDHPr38SHATeaj/ZoKHKw==",
			"dev": true,
			"license": "ISC",
			"dependencies": {
				"minipass": "^7.0.3"
			},
			"engines": {
				"node": ">=16 || 14 >=14.17"
			}
		},
		"node_modules/minipass-fetch": {
			"version": "3.0.5",
			"resolved": "https://registry.npmjs.org/minipass-fetch/-/minipass-fetch-3.0.5.tgz",
			"integrity": "sha512-2N8elDQAtSnFV0Dk7gt15KHsS0Fyz6CbYZ360h0WTYV1Ty46li3rAXVOQj1THMNLdmrD9Vt5pBPtWtVkpwGBqg==",
			"dev": true,
			"license": "MIT",
			"dependencies": {
				"minipass": "^7.0.3",
				"minipass-sized": "^1.0.3",
				"minizlib": "^2.1.2"
			},
			"engines": {
				"node": "^14.17.0 || ^16.13.0 || >=18.0.0"
			},
			"optionalDependencies": {
				"encoding": "^0.1.13"
			}
		},
		"node_modules/minipass-flush": {
			"version": "1.0.5",
			"resolved": "https://registry.npmjs.org/minipass-flush/-/minipass-flush-1.0.5.tgz",
			"integrity": "sha512-JmQSYYpPUqX5Jyn1mXaRwOda1uQ8HP5KAT/oDSLCzt1BYRhQU0/hDtsB1ufZfEEzMZ9aAVmsBw8+FWsIXlClWw==",
			"dev": true,
			"license": "ISC",
			"dependencies": {
				"minipass": "^3.0.0"
			},
			"engines": {
				"node": ">= 8"
			}
		},
		"node_modules/minipass-flush/node_modules/minipass": {
			"version": "3.3.6",
			"resolved": "https://registry.npmjs.org/minipass/-/minipass-3.3.6.tgz",
			"integrity": "sha512-DxiNidxSEK+tHG6zOIklvNOwm3hvCrbUrdtzY74U6HKTJxvIDfOUL5W5P2Ghd3DTkhhKPYGqeNUIh5qcM4YBfw==",
			"dev": true,
			"license": "ISC",
			"dependencies": {
				"yallist": "^4.0.0"
			},
			"engines": {
				"node": ">=8"
			}
		},
		"node_modules/minipass-flush/node_modules/yallist": {
			"version": "4.0.0",
			"resolved": "https://registry.npmjs.org/yallist/-/yallist-4.0.0.tgz",
			"integrity": "sha512-3wdGidZyq5PB084XLES5TpOSRA3wjXAlIWMhum2kRcv/41Sn2emQ0dycQW4uZXLejwKvg6EsvbdlVL+FYEct7A==",
			"dev": true,
			"license": "ISC"
		},
		"node_modules/minipass-pipeline": {
			"version": "1.2.4",
			"resolved": "https://registry.npmjs.org/minipass-pipeline/-/minipass-pipeline-1.2.4.tgz",
			"integrity": "sha512-xuIq7cIOt09RPRJ19gdi4b+RiNvDFYe5JH+ggNvBqGqpQXcru3PcRmOZuHBKWK1Txf9+cQ+HMVN4d6z46LZP7A==",
			"dev": true,
			"license": "ISC",
			"dependencies": {
				"minipass": "^3.0.0"
			},
			"engines": {
				"node": ">=8"
			}
		},
		"node_modules/minipass-pipeline/node_modules/minipass": {
			"version": "3.3.6",
			"resolved": "https://registry.npmjs.org/minipass/-/minipass-3.3.6.tgz",
			"integrity": "sha512-DxiNidxSEK+tHG6zOIklvNOwm3hvCrbUrdtzY74U6HKTJxvIDfOUL5W5P2Ghd3DTkhhKPYGqeNUIh5qcM4YBfw==",
			"dev": true,
			"license": "ISC",
			"dependencies": {
				"yallist": "^4.0.0"
			},
			"engines": {
				"node": ">=8"
			}
		},
		"node_modules/minipass-pipeline/node_modules/yallist": {
			"version": "4.0.0",
			"resolved": "https://registry.npmjs.org/yallist/-/yallist-4.0.0.tgz",
			"integrity": "sha512-3wdGidZyq5PB084XLES5TpOSRA3wjXAlIWMhum2kRcv/41Sn2emQ0dycQW4uZXLejwKvg6EsvbdlVL+FYEct7A==",
			"dev": true,
			"license": "ISC"
		},
		"node_modules/minipass-sized": {
			"version": "1.0.3",
			"resolved": "https://registry.npmjs.org/minipass-sized/-/minipass-sized-1.0.3.tgz",
			"integrity": "sha512-MbkQQ2CTiBMlA2Dm/5cY+9SWFEN8pzzOXi6rlM5Xxq0Yqbda5ZQy9sU75a673FE9ZK0Zsbr6Y5iP6u9nktfg2g==",
			"dev": true,
			"license": "ISC",
			"dependencies": {
				"minipass": "^3.0.0"
			},
			"engines": {
				"node": ">=8"
			}
		},
		"node_modules/minipass-sized/node_modules/minipass": {
			"version": "3.3.6",
			"resolved": "https://registry.npmjs.org/minipass/-/minipass-3.3.6.tgz",
			"integrity": "sha512-DxiNidxSEK+tHG6zOIklvNOwm3hvCrbUrdtzY74U6HKTJxvIDfOUL5W5P2Ghd3DTkhhKPYGqeNUIh5qcM4YBfw==",
			"dev": true,
			"license": "ISC",
			"dependencies": {
				"yallist": "^4.0.0"
			},
			"engines": {
				"node": ">=8"
			}
		},
		"node_modules/minipass-sized/node_modules/yallist": {
			"version": "4.0.0",
			"resolved": "https://registry.npmjs.org/yallist/-/yallist-4.0.0.tgz",
			"integrity": "sha512-3wdGidZyq5PB084XLES5TpOSRA3wjXAlIWMhum2kRcv/41Sn2emQ0dycQW4uZXLejwKvg6EsvbdlVL+FYEct7A==",
			"dev": true,
			"license": "ISC"
		},
		"node_modules/minizlib": {
			"version": "2.1.2",
			"resolved": "https://registry.npmjs.org/minizlib/-/minizlib-2.1.2.tgz",
			"integrity": "sha512-bAxsR8BVfj60DWXHE3u30oHzfl4G7khkSuPW+qvpd7jFRHm7dLxOjUk1EHACJ/hxLY8phGJ0YhYHZo7jil7Qdg==",
			"dev": true,
			"license": "MIT",
			"dependencies": {
				"minipass": "^3.0.0",
				"yallist": "^4.0.0"
			},
			"engines": {
				"node": ">= 8"
			}
		},
		"node_modules/minizlib/node_modules/minipass": {
			"version": "3.3.6",
			"resolved": "https://registry.npmjs.org/minipass/-/minipass-3.3.6.tgz",
			"integrity": "sha512-DxiNidxSEK+tHG6zOIklvNOwm3hvCrbUrdtzY74U6HKTJxvIDfOUL5W5P2Ghd3DTkhhKPYGqeNUIh5qcM4YBfw==",
			"dev": true,
			"license": "ISC",
			"dependencies": {
				"yallist": "^4.0.0"
			},
			"engines": {
				"node": ">=8"
			}
		},
		"node_modules/minizlib/node_modules/yallist": {
			"version": "4.0.0",
			"resolved": "https://registry.npmjs.org/yallist/-/yallist-4.0.0.tgz",
			"integrity": "sha512-3wdGidZyq5PB084XLES5TpOSRA3wjXAlIWMhum2kRcv/41Sn2emQ0dycQW4uZXLejwKvg6EsvbdlVL+FYEct7A==",
			"dev": true,
			"license": "ISC"
		},
		"node_modules/mkdirp": {
			"version": "1.0.4",
			"resolved": "https://registry.npmjs.org/mkdirp/-/mkdirp-1.0.4.tgz",
			"integrity": "sha512-vVqVZQyf3WLx2Shd0qJ9xuvqgAyKPLAiqITEtqW0oIUjzo3PePDd6fW9iFz30ef7Ysp/oiWqbhszeGWW2T6Gzw==",
			"dev": true,
			"license": "MIT",
			"bin": {
				"mkdirp": "bin/cmd.js"
			},
			"engines": {
				"node": ">=10"
			}
		},
		"node_modules/mrmime": {
			"version": "2.0.0",
			"resolved": "https://registry.npmjs.org/mrmime/-/mrmime-2.0.0.tgz",
			"integrity": "sha512-eu38+hdgojoyq63s+yTpN4XMBdt5l8HhMhc4VKLO9KM5caLIBvUm4thi7fFaxyTmCKeNnXZ5pAlBwCUnhA09uw==",
			"dev": true,
			"license": "MIT",
			"engines": {
				"node": ">=10"
			}
		},
		"node_modules/ms": {
			"version": "2.1.2",
			"resolved": "https://registry.npmjs.org/ms/-/ms-2.1.2.tgz",
			"integrity": "sha512-sGkPx+VjMtmA6MX27oA4FBFELFCZZ4S4XqeGOXCv68tT+jb3vk/RyaKWP0PTKyWtmLSM0b+adUTEvbs1PEaH2w==",
			"dev": true,
			"license": "MIT"
		},
		"node_modules/msgpackr": {
			"version": "1.11.0",
			"resolved": "https://registry.npmjs.org/msgpackr/-/msgpackr-1.11.0.tgz",
			"integrity": "sha512-I8qXuuALqJe5laEBYoFykChhSXLikZmUhccjGsPuSJ/7uPip2TJ7lwdIQwWSAi0jGZDXv4WOP8Qg65QZRuXxXw==",
			"dev": true,
			"license": "MIT",
			"optionalDependencies": {
				"msgpackr-extract": "^3.0.2"
			}
		},
		"node_modules/msgpackr-extract": {
			"version": "3.0.3",
			"resolved": "https://registry.npmjs.org/msgpackr-extract/-/msgpackr-extract-3.0.3.tgz",
			"integrity": "sha512-P0efT1C9jIdVRefqjzOQ9Xml57zpOXnIuS+csaB4MdZbTdmGDLo8XhzBG1N7aO11gKDDkJvBLULeFTo46wwreA==",
			"dev": true,
			"hasInstallScript": true,
			"license": "MIT",
			"optional": true,
			"dependencies": {
				"node-gyp-build-optional-packages": "5.2.2"
			},
			"bin": {
				"download-msgpackr-prebuilds": "bin/download-prebuilds.js"
			},
			"optionalDependencies": {
				"@msgpackr-extract/msgpackr-extract-darwin-arm64": "3.0.3",
				"@msgpackr-extract/msgpackr-extract-darwin-x64": "3.0.3",
				"@msgpackr-extract/msgpackr-extract-linux-arm": "3.0.3",
				"@msgpackr-extract/msgpackr-extract-linux-arm64": "3.0.3",
				"@msgpackr-extract/msgpackr-extract-linux-x64": "3.0.3",
				"@msgpackr-extract/msgpackr-extract-win32-x64": "3.0.3"
			}
		},
		"node_modules/multicast-dns": {
			"version": "7.2.5",
			"resolved": "https://registry.npmjs.org/multicast-dns/-/multicast-dns-7.2.5.tgz",
			"integrity": "sha512-2eznPJP8z2BFLX50tf0LuODrpINqP1RVIm/CObbTcBRITQgmC/TjcREF1NeTBzIcR5XO/ukWo+YHOjBbFwIupg==",
			"dev": true,
			"license": "MIT",
			"dependencies": {
				"dns-packet": "^5.2.2",
				"thunky": "^1.0.2"
			},
			"bin": {
				"multicast-dns": "cli.js"
			}
		},
		"node_modules/mute-stream": {
			"version": "1.0.0",
			"resolved": "https://registry.npmjs.org/mute-stream/-/mute-stream-1.0.0.tgz",
			"integrity": "sha512-avsJQhyd+680gKXyG/sQc0nXaC6rBkPOfyHYcFb9+hdkqQkR9bdnkJ0AMZhke0oesPqIO+mFFJ+IdBc7mst4IA==",
			"dev": true,
			"license": "ISC",
			"engines": {
				"node": "^14.17.0 || ^16.13.0 || >=18.0.0"
			}
		},
		"node_modules/mz": {
			"version": "2.7.0",
			"resolved": "https://registry.npmjs.org/mz/-/mz-2.7.0.tgz",
			"integrity": "sha512-z81GNO7nnYMEhrGh9LeymoE4+Yr0Wn5McHIZMK5cfQCl+NDX08sCZgUc9/6MHni9IWuFLm1Z3HTCXu2z9fN62Q==",
			"dev": true,
			"license": "MIT",
			"dependencies": {
				"any-promise": "^1.0.0",
				"object-assign": "^4.0.1",
				"thenify-all": "^1.0.0"
			}
		},
		"node_modules/nanoid": {
			"version": "3.3.7",
			"resolved": "https://registry.npmjs.org/nanoid/-/nanoid-3.3.7.tgz",
			"integrity": "sha512-eSRppjcPIatRIMC1U6UngP8XFcz8MQWGQdt1MTBQ7NaAmvXDfvNxbvWV3x2y6CdEUciCSsDHDQZbhYaB8QEo2g==",
			"dev": true,
			"funding": [
				{
					"type": "github",
					"url": "https://github.com/sponsors/ai"
				}
			],
			"license": "MIT",
			"bin": {
				"nanoid": "bin/nanoid.cjs"
			},
			"engines": {
				"node": "^10 || ^12 || ^13.7 || ^14 || >=15.0.1"
			}
		},
		"node_modules/needle": {
			"version": "3.3.1",
			"resolved": "https://registry.npmjs.org/needle/-/needle-3.3.1.tgz",
			"integrity": "sha512-6k0YULvhpw+RoLNiQCRKOl09Rv1dPLr8hHnVjHqdolKwDrdNyk+Hmrthi4lIGPPz3r39dLx0hsF5s40sZ3Us4Q==",
			"dev": true,
			"license": "MIT",
			"optional": true,
			"dependencies": {
				"iconv-lite": "^0.6.3",
				"sax": "^1.2.4"
			},
			"bin": {
				"needle": "bin/needle"
			},
			"engines": {
				"node": ">= 4.4.x"
			}
		},
		"node_modules/needle/node_modules/iconv-lite": {
			"version": "0.6.3",
			"resolved": "https://registry.npmjs.org/iconv-lite/-/iconv-lite-0.6.3.tgz",
			"integrity": "sha512-4fCk79wshMdzMp2rH06qWrJE4iolqLhCUH+OiuIgU++RB0+94NlDL81atO7GX55uUKueo0txHNtvEyI6D7WdMw==",
			"dev": true,
			"license": "MIT",
			"optional": true,
			"dependencies": {
				"safer-buffer": ">= 2.1.2 < 3.0.0"
			},
			"engines": {
				"node": ">=0.10.0"
			}
		},
		"node_modules/negotiator": {
			"version": "0.6.3",
			"resolved": "https://registry.npmjs.org/negotiator/-/negotiator-0.6.3.tgz",
			"integrity": "sha512-+EUsqGPLsM+j/zdChZjsnX51g4XrHFOIXwfnCVPGlQk/k5giakcKsuxCObBRu6DSm9opw/O6slWbJdghQM4bBg==",
			"dev": true,
			"license": "MIT",
			"engines": {
				"node": ">= 0.6"
			}
		},
		"node_modules/neo-async": {
			"version": "2.6.2",
			"resolved": "https://registry.npmjs.org/neo-async/-/neo-async-2.6.2.tgz",
			"integrity": "sha512-Yd3UES5mWCSqR+qNT93S3UoYUkqAZ9lLg8a7g9rimsWmYGK8cVToA4/sF3RrshdyV3sAGMXVUmpMYOw+dLpOuw==",
			"dev": true,
			"license": "MIT"
		},
		"node_modules/nice-napi": {
			"version": "1.0.2",
			"resolved": "https://registry.npmjs.org/nice-napi/-/nice-napi-1.0.2.tgz",
			"integrity": "sha512-px/KnJAJZf5RuBGcfD+Sp2pAKq0ytz8j+1NehvgIGFkvtvFrDM3T8E4x/JJODXK9WZow8RRGrbA9QQ3hs+pDhA==",
			"dev": true,
			"hasInstallScript": true,
			"license": "MIT",
			"optional": true,
			"os": [
				"!win32"
			],
			"dependencies": {
				"node-addon-api": "^3.0.0",
				"node-gyp-build": "^4.2.2"
			}
		},
		"node_modules/nice-napi/node_modules/node-addon-api": {
			"version": "3.2.1",
			"resolved": "https://registry.npmjs.org/node-addon-api/-/node-addon-api-3.2.1.tgz",
			"integrity": "sha512-mmcei9JghVNDYydghQmeDX8KoAm0FAiYyIcUt/N4nhyAipB17pllZQDOJD2fotxABnt4Mdz+dKTO7eftLg4d0A==",
			"dev": true,
			"license": "MIT",
			"optional": true
		},
		"node_modules/node-addon-api": {
			"version": "6.1.0",
			"resolved": "https://registry.npmjs.org/node-addon-api/-/node-addon-api-6.1.0.tgz",
			"integrity": "sha512-+eawOlIgy680F0kBzPUNFhMZGtJ1YmqM6l4+Crf4IkImjYrO/mqPwRMh352g23uIaQKFItcQ64I7KMaJxHgAVA==",
			"dev": true,
			"license": "MIT"
		},
		"node_modules/node-forge": {
			"version": "1.3.1",
			"resolved": "https://registry.npmjs.org/node-forge/-/node-forge-1.3.1.tgz",
			"integrity": "sha512-dPEtOeMvF9VMcYV/1Wb8CPoVAXtp6MKMlcbAt4ddqmGqUJ6fQZFXkNZNkNlfevtNkGtaSoXf/vNNNSvgrdXwtA==",
			"dev": true,
			"license": "(BSD-3-Clause OR GPL-2.0)",
			"engines": {
				"node": ">= 6.13.0"
			}
		},
		"node_modules/node-gyp": {
			"version": "10.2.0",
			"resolved": "https://registry.npmjs.org/node-gyp/-/node-gyp-10.2.0.tgz",
			"integrity": "sha512-sp3FonBAaFe4aYTcFdZUn2NYkbP7xroPGYvQmP4Nl5PxamznItBnNCgjrVTKrEfQynInMsJvZrdmqUnysCJ8rw==",
			"dev": true,
			"license": "MIT",
			"dependencies": {
				"env-paths": "^2.2.0",
				"exponential-backoff": "^3.1.1",
				"glob": "^10.3.10",
				"graceful-fs": "^4.2.6",
				"make-fetch-happen": "^13.0.0",
				"nopt": "^7.0.0",
				"proc-log": "^4.1.0",
				"semver": "^7.3.5",
				"tar": "^6.2.1",
				"which": "^4.0.0"
			},
			"bin": {
				"node-gyp": "bin/node-gyp.js"
			},
			"engines": {
				"node": "^16.14.0 || >=18.0.0"
			}
		},
		"node_modules/node-gyp-build": {
			"version": "4.8.2",
			"resolved": "https://registry.npmjs.org/node-gyp-build/-/node-gyp-build-4.8.2.tgz",
			"integrity": "sha512-IRUxE4BVsHWXkV/SFOut4qTlagw2aM8T5/vnTsmrHJvVoKueJHRc/JaFND7QDDc61kLYUJ6qlZM3sqTSyx2dTw==",
			"dev": true,
			"license": "MIT",
			"optional": true,
			"bin": {
				"node-gyp-build": "bin.js",
				"node-gyp-build-optional": "optional.js",
				"node-gyp-build-test": "build-test.js"
			}
		},
		"node_modules/node-gyp-build-optional-packages": {
			"version": "5.2.2",
			"resolved": "https://registry.npmjs.org/node-gyp-build-optional-packages/-/node-gyp-build-optional-packages-5.2.2.tgz",
			"integrity": "sha512-s+w+rBWnpTMwSFbaE0UXsRlg7hU4FjekKU4eyAih5T8nJuNZT1nNsskXpxmeqSK9UzkBl6UgRlnKc8hz8IEqOw==",
			"dev": true,
			"license": "MIT",
			"dependencies": {
				"detect-libc": "^2.0.1"
			},
			"bin": {
				"node-gyp-build-optional-packages": "bin.js",
				"node-gyp-build-optional-packages-optional": "optional.js",
				"node-gyp-build-optional-packages-test": "build-test.js"
			}
		},
		"node_modules/node-releases": {
			"version": "2.0.18",
			"resolved": "https://registry.npmjs.org/node-releases/-/node-releases-2.0.18.tgz",
			"integrity": "sha512-d9VeXT4SJ7ZeOqGX6R5EM022wpL+eWPooLI+5UpWn2jCT1aosUQEhQP214x33Wkwx3JQMvIm+tIoVOdodFS40g==",
			"dev": true,
			"license": "MIT"
		},
		"node_modules/nopt": {
			"version": "7.2.1",
			"resolved": "https://registry.npmjs.org/nopt/-/nopt-7.2.1.tgz",
			"integrity": "sha512-taM24ViiimT/XntxbPyJQzCG+p4EKOpgD3mxFwW38mGjVUrfERQOeY4EDHjdnptttfHuHQXFx+lTP08Q+mLa/w==",
			"dev": true,
			"license": "ISC",
			"dependencies": {
				"abbrev": "^2.0.0"
			},
			"bin": {
				"nopt": "bin/nopt.js"
			},
			"engines": {
				"node": "^14.17.0 || ^16.13.0 || >=18.0.0"
			}
		},
		"node_modules/normalize-package-data": {
			"version": "6.0.2",
			"resolved": "https://registry.npmjs.org/normalize-package-data/-/normalize-package-data-6.0.2.tgz",
			"integrity": "sha512-V6gygoYb/5EmNI+MEGrWkC+e6+Rr7mTmfHrxDbLzxQogBkgzo76rkok0Am6thgSF7Mv2nLOajAJj5vDJZEFn7g==",
			"dev": true,
			"license": "BSD-2-Clause",
			"dependencies": {
				"hosted-git-info": "^7.0.0",
				"semver": "^7.3.5",
				"validate-npm-package-license": "^3.0.4"
			},
			"engines": {
				"node": "^16.14.0 || >=18.0.0"
			}
		},
		"node_modules/normalize-path": {
			"version": "3.0.0",
			"resolved": "https://registry.npmjs.org/normalize-path/-/normalize-path-3.0.0.tgz",
			"integrity": "sha512-6eZs5Ls3WtCisHWp9S2GUy8dqkpGi4BVSz3GaqiE6ezub0512ESztXUwUB6C6IKbQkY2Pnb/mD4WYojCRwcwLA==",
			"dev": true,
			"license": "MIT",
			"engines": {
				"node": ">=0.10.0"
			}
		},
		"node_modules/normalize-range": {
			"version": "0.1.2",
			"resolved": "https://registry.npmjs.org/normalize-range/-/normalize-range-0.1.2.tgz",
			"integrity": "sha512-bdok/XvKII3nUpklnV6P2hxtMNrCboOjAcyBuQnWEhO665FwrSNRxU+AqpsyvO6LgGYPspN+lu5CLtw4jPRKNA==",
			"dev": true,
			"license": "MIT",
			"engines": {
				"node": ">=0.10.0"
			}
		},
		"node_modules/npm-bundled": {
			"version": "3.0.1",
			"resolved": "https://registry.npmjs.org/npm-bundled/-/npm-bundled-3.0.1.tgz",
			"integrity": "sha512-+AvaheE/ww1JEwRHOrn4WHNzOxGtVp+adrg2AeZS/7KuxGUYFuBta98wYpfHBbJp6Tg6j1NKSEVHNcfZzJHQwQ==",
			"dev": true,
			"license": "ISC",
			"dependencies": {
				"npm-normalize-package-bin": "^3.0.0"
			},
			"engines": {
				"node": "^14.17.0 || ^16.13.0 || >=18.0.0"
			}
		},
		"node_modules/npm-install-checks": {
			"version": "6.3.0",
			"resolved": "https://registry.npmjs.org/npm-install-checks/-/npm-install-checks-6.3.0.tgz",
			"integrity": "sha512-W29RiK/xtpCGqn6f3ixfRYGk+zRyr+Ew9F2E20BfXxT5/euLdA/Nm7fO7OeTGuAmTs30cpgInyJ0cYe708YTZw==",
			"dev": true,
			"license": "BSD-2-Clause",
			"dependencies": {
				"semver": "^7.1.1"
			},
			"engines": {
				"node": "^14.17.0 || ^16.13.0 || >=18.0.0"
			}
		},
		"node_modules/npm-normalize-package-bin": {
			"version": "3.0.1",
			"resolved": "https://registry.npmjs.org/npm-normalize-package-bin/-/npm-normalize-package-bin-3.0.1.tgz",
			"integrity": "sha512-dMxCf+zZ+3zeQZXKxmyuCKlIDPGuv8EF940xbkC4kQVDTtqoh6rJFO+JTKSA6/Rwi0getWmtuy4Itup0AMcaDQ==",
			"dev": true,
			"license": "ISC",
			"engines": {
				"node": "^14.17.0 || ^16.13.0 || >=18.0.0"
			}
		},
		"node_modules/npm-package-arg": {
			"version": "11.0.3",
			"resolved": "https://registry.npmjs.org/npm-package-arg/-/npm-package-arg-11.0.3.tgz",
			"integrity": "sha512-sHGJy8sOC1YraBywpzQlIKBE4pBbGbiF95U6Auspzyem956E0+FtDtsx1ZxlOJkQCZ1AFXAY/yuvtFYrOxF+Bw==",
			"dev": true,
			"license": "ISC",
			"dependencies": {
				"hosted-git-info": "^7.0.0",
				"proc-log": "^4.0.0",
				"semver": "^7.3.5",
				"validate-npm-package-name": "^5.0.0"
			},
			"engines": {
				"node": "^16.14.0 || >=18.0.0"
			}
		},
		"node_modules/npm-packlist": {
			"version": "8.0.2",
			"resolved": "https://registry.npmjs.org/npm-packlist/-/npm-packlist-8.0.2.tgz",
			"integrity": "sha512-shYrPFIS/JLP4oQmAwDyk5HcyysKW8/JLTEA32S0Z5TzvpaeeX2yMFfoK1fjEBnCBvVyIB/Jj/GBFdm0wsgzbA==",
			"dev": true,
			"license": "ISC",
			"dependencies": {
				"ignore-walk": "^6.0.4"
			},
			"engines": {
				"node": "^14.17.0 || ^16.13.0 || >=18.0.0"
			}
		},
		"node_modules/npm-pick-manifest": {
			"version": "9.1.0",
			"resolved": "https://registry.npmjs.org/npm-pick-manifest/-/npm-pick-manifest-9.1.0.tgz",
			"integrity": "sha512-nkc+3pIIhqHVQr085X9d2JzPzLyjzQS96zbruppqC9aZRm/x8xx6xhI98gHtsfELP2bE+loHq8ZaHFHhe+NauA==",
			"dev": true,
			"license": "ISC",
			"dependencies": {
				"npm-install-checks": "^6.0.0",
				"npm-normalize-package-bin": "^3.0.0",
				"npm-package-arg": "^11.0.0",
				"semver": "^7.3.5"
			},
			"engines": {
				"node": "^16.14.0 || >=18.0.0"
			}
		},
		"node_modules/npm-registry-fetch": {
			"version": "17.1.0",
			"resolved": "https://registry.npmjs.org/npm-registry-fetch/-/npm-registry-fetch-17.1.0.tgz",
			"integrity": "sha512-5+bKQRH0J1xG1uZ1zMNvxW0VEyoNWgJpY9UDuluPFLKDfJ9u2JmmjmTJV1srBGQOROfdBMiVvnH2Zvpbm+xkVA==",
			"dev": true,
			"license": "ISC",
			"dependencies": {
				"@npmcli/redact": "^2.0.0",
				"jsonparse": "^1.3.1",
				"make-fetch-happen": "^13.0.0",
				"minipass": "^7.0.2",
				"minipass-fetch": "^3.0.0",
				"minizlib": "^2.1.2",
				"npm-package-arg": "^11.0.0",
				"proc-log": "^4.0.0"
			},
			"engines": {
				"node": "^16.14.0 || >=18.0.0"
			}
		},
		"node_modules/npm-run-path": {
			"version": "4.0.1",
			"resolved": "https://registry.npmjs.org/npm-run-path/-/npm-run-path-4.0.1.tgz",
			"integrity": "sha512-S48WzZW777zhNIrn7gxOlISNAqi9ZC/uQFnRdbeIHhZhCA6UqpkOT8T1G7BvfdgP4Er8gF4sUbaS0i7QvIfCWw==",
			"dev": true,
			"license": "MIT",
			"dependencies": {
				"path-key": "^3.0.0"
			},
			"engines": {
				"node": ">=8"
			}
		},
		"node_modules/nth-check": {
			"version": "2.1.1",
			"resolved": "https://registry.npmjs.org/nth-check/-/nth-check-2.1.1.tgz",
			"integrity": "sha512-lqjrjmaOoAnWfMmBPL+XNnynZh2+swxiX3WUE0s4yEHI6m+AwrK2UZOimIRl3X/4QctVqS8AiZjFqyOGrMXb/w==",
			"dev": true,
			"license": "BSD-2-Clause",
			"dependencies": {
				"boolbase": "^1.0.0"
			},
			"funding": {
				"url": "https://github.com/fb55/nth-check?sponsor=1"
			}
		},
		"node_modules/object-assign": {
			"version": "4.1.1",
			"resolved": "https://registry.npmjs.org/object-assign/-/object-assign-4.1.1.tgz",
			"integrity": "sha512-rJgTQnkUnH1sFw8yT6VSU3zD3sWmu6sZhIseY8VX+GRu3P6F7Fu+JNDoXfklElbLJSnc3FUQHVe4cU5hj+BcUg==",
			"dev": true,
			"license": "MIT",
			"engines": {
				"node": ">=0.10.0"
			}
		},
		"node_modules/object-hash": {
			"version": "3.0.0",
			"resolved": "https://registry.npmjs.org/object-hash/-/object-hash-3.0.0.tgz",
			"integrity": "sha512-RSn9F68PjH9HqtltsSnqYC1XXoWe9Bju5+213R98cNGttag9q9yAOTzdbsqvIa7aNm5WffBZFpWYr2aWrklWAw==",
			"dev": true,
			"license": "MIT",
			"engines": {
				"node": ">= 6"
			}
		},
		"node_modules/object-inspect": {
			"version": "1.13.2",
			"resolved": "https://registry.npmjs.org/object-inspect/-/object-inspect-1.13.2.tgz",
			"integrity": "sha512-IRZSRuzJiynemAXPYtPe5BoI/RESNYR7TYm50MC5Mqbd3Jmw5y790sErYw3V6SryFJD64b74qQQs9wn5Bg/k3g==",
			"dev": true,
			"license": "MIT",
			"engines": {
				"node": ">= 0.4"
			},
			"funding": {
				"url": "https://github.com/sponsors/ljharb"
			}
		},
		"node_modules/obuf": {
			"version": "1.1.2",
			"resolved": "https://registry.npmjs.org/obuf/-/obuf-1.1.2.tgz",
			"integrity": "sha512-PX1wu0AmAdPqOL1mWhqmlOd8kOIZQwGZw6rh7uby9fTc5lhaOWFLX3I6R1hrF9k3zUY40e6igsLGkDXK92LJNg==",
			"dev": true,
			"license": "MIT"
		},
		"node_modules/on-finished": {
			"version": "2.4.1",
			"resolved": "https://registry.npmjs.org/on-finished/-/on-finished-2.4.1.tgz",
			"integrity": "sha512-oVlzkg3ENAhCk2zdv7IJwd/QUD4z2RxRwpkcGY8psCVcCYZNq4wYnVWALHM+brtuJjePWiYF/ClmuDr8Ch5+kg==",
			"dev": true,
			"license": "MIT",
			"dependencies": {
				"ee-first": "1.1.1"
			},
			"engines": {
				"node": ">= 0.8"
			}
		},
		"node_modules/on-headers": {
			"version": "1.0.2",
			"resolved": "https://registry.npmjs.org/on-headers/-/on-headers-1.0.2.tgz",
			"integrity": "sha512-pZAE+FJLoyITytdqK0U5s+FIpjN0JP3OzFi/u8Rx+EV5/W+JTWGXG8xFzevE7AjBfDqHv/8vL8qQsIhHnqRkrA==",
			"dev": true,
			"license": "MIT",
			"engines": {
				"node": ">= 0.8"
			}
		},
		"node_modules/onetime": {
			"version": "7.0.0",
			"resolved": "https://registry.npmjs.org/onetime/-/onetime-7.0.0.tgz",
			"integrity": "sha512-VXJjc87FScF88uafS3JllDgvAm+c/Slfz06lorj2uAY34rlUu0Nt+v8wreiImcrgAjjIHp1rXpTDlLOGw29WwQ==",
			"dev": true,
			"license": "MIT",
			"dependencies": {
				"mimic-function": "^5.0.0"
			},
			"engines": {
				"node": ">=18"
			},
			"funding": {
				"url": "https://github.com/sponsors/sindresorhus"
			}
		},
		"node_modules/open": {
			"version": "10.1.0",
			"resolved": "https://registry.npmjs.org/open/-/open-10.1.0.tgz",
			"integrity": "sha512-mnkeQ1qP5Ue2wd+aivTD3NHd/lZ96Lu0jgf0pwktLPtx6cTZiH7tyeGRRHs0zX0rbrahXPnXlUnbeXyaBBuIaw==",
			"dev": true,
			"license": "MIT",
			"dependencies": {
				"default-browser": "^5.2.1",
				"define-lazy-prop": "^3.0.0",
				"is-inside-container": "^1.0.0",
				"is-wsl": "^3.1.0"
			},
			"engines": {
				"node": ">=18"
			},
			"funding": {
				"url": "https://github.com/sponsors/sindresorhus"
			}
		},
		"node_modules/ora": {
			"version": "5.4.1",
			"resolved": "https://registry.npmjs.org/ora/-/ora-5.4.1.tgz",
			"integrity": "sha512-5b6Y85tPxZZ7QytO+BQzysW31HJku27cRIlkbAXaNx+BdcVi+LlRFmVXzeF6a7JCwJpyw5c4b+YSVImQIrBpuQ==",
			"dev": true,
			"license": "MIT",
			"dependencies": {
				"bl": "^4.1.0",
				"chalk": "^4.1.0",
				"cli-cursor": "^3.1.0",
				"cli-spinners": "^2.5.0",
				"is-interactive": "^1.0.0",
				"is-unicode-supported": "^0.1.0",
				"log-symbols": "^4.1.0",
				"strip-ansi": "^6.0.0",
				"wcwidth": "^1.0.1"
			},
			"engines": {
				"node": ">=10"
			},
			"funding": {
				"url": "https://github.com/sponsors/sindresorhus"
			}
		},
		"node_modules/ora/node_modules/ansi-styles": {
			"version": "4.3.0",
			"resolved": "https://registry.npmjs.org/ansi-styles/-/ansi-styles-4.3.0.tgz",
			"integrity": "sha512-zbB9rCJAT1rbjiVDb2hqKFHNYLxgtk8NURxZ3IZwD3F6NtxbXZQCnnSi1Lkx+IDohdPlFp222wVALIheZJQSEg==",
			"dev": true,
			"license": "MIT",
			"dependencies": {
				"color-convert": "^2.0.1"
			},
			"engines": {
				"node": ">=8"
			},
			"funding": {
				"url": "https://github.com/chalk/ansi-styles?sponsor=1"
			}
		},
		"node_modules/ora/node_modules/chalk": {
			"version": "4.1.2",
			"resolved": "https://registry.npmjs.org/chalk/-/chalk-4.1.2.tgz",
			"integrity": "sha512-oKnbhFyRIXpUuez8iBMmyEa4nbj4IOQyuhc/wy9kY7/WVPcwIO9VA668Pu8RkO7+0G76SLROeyw9CpQ061i4mA==",
			"dev": true,
			"license": "MIT",
			"dependencies": {
				"ansi-styles": "^4.1.0",
				"supports-color": "^7.1.0"
			},
			"engines": {
				"node": ">=10"
			},
			"funding": {
				"url": "https://github.com/chalk/chalk?sponsor=1"
			}
		},
		"node_modules/ora/node_modules/cli-cursor": {
			"version": "3.1.0",
			"resolved": "https://registry.npmjs.org/cli-cursor/-/cli-cursor-3.1.0.tgz",
			"integrity": "sha512-I/zHAwsKf9FqGoXM4WWRACob9+SNukZTd94DWF57E4toouRulbCxcUh6RKUEOQlYTHJnzkPMySvPNaaSLNfLZw==",
			"dev": true,
			"license": "MIT",
			"dependencies": {
				"restore-cursor": "^3.1.0"
			},
			"engines": {
				"node": ">=8"
			}
		},
		"node_modules/ora/node_modules/color-convert": {
			"version": "2.0.1",
			"resolved": "https://registry.npmjs.org/color-convert/-/color-convert-2.0.1.tgz",
			"integrity": "sha512-RRECPsj7iu/xb5oKYcsFHSppFNnsj/52OVTRKb4zP5onXwVF3zVmmToNcOfGC+CRDpfK/U584fMg38ZHCaElKQ==",
			"dev": true,
			"license": "MIT",
			"dependencies": {
				"color-name": "~1.1.4"
			},
			"engines": {
				"node": ">=7.0.0"
			}
		},
		"node_modules/ora/node_modules/color-name": {
			"version": "1.1.4",
			"resolved": "https://registry.npmjs.org/color-name/-/color-name-1.1.4.tgz",
			"integrity": "sha512-dOy+3AuW3a2wNbZHIuMZpTcgjGuLU/uBL/ubcZF9OXbDo8ff4O8yVp5Bf0efS8uEoYo5q4Fx7dY9OgQGXgAsQA==",
			"dev": true,
			"license": "MIT"
		},
		"node_modules/ora/node_modules/has-flag": {
			"version": "4.0.0",
			"resolved": "https://registry.npmjs.org/has-flag/-/has-flag-4.0.0.tgz",
			"integrity": "sha512-EykJT/Q1KjTWctppgIAgfSO0tKVuZUjhgMr17kqTumMl6Afv3EISleU7qZUzoXDFTAHTDC4NOoG/ZxU3EvlMPQ==",
			"dev": true,
			"license": "MIT",
			"engines": {
				"node": ">=8"
			}
		},
		"node_modules/ora/node_modules/onetime": {
			"version": "5.1.2",
			"resolved": "https://registry.npmjs.org/onetime/-/onetime-5.1.2.tgz",
			"integrity": "sha512-kbpaSSGJTWdAY5KPVeMOKXSrPtr8C8C7wodJbcsd51jRnmD+GZu8Y0VoU6Dm5Z4vWr0Ig/1NKuWRKf7j5aaYSg==",
			"dev": true,
			"license": "MIT",
			"dependencies": {
				"mimic-fn": "^2.1.0"
			},
			"engines": {
				"node": ">=6"
			},
			"funding": {
				"url": "https://github.com/sponsors/sindresorhus"
			}
		},
		"node_modules/ora/node_modules/restore-cursor": {
			"version": "3.1.0",
			"resolved": "https://registry.npmjs.org/restore-cursor/-/restore-cursor-3.1.0.tgz",
			"integrity": "sha512-l+sSefzHpj5qimhFSE5a8nufZYAM3sBSVMAPtYkmC+4EH2anSGaEMXSD0izRQbu9nfyQ9y5JrVmp7E8oZrUjvA==",
			"dev": true,
			"license": "MIT",
			"dependencies": {
				"onetime": "^5.1.0",
				"signal-exit": "^3.0.2"
			},
			"engines": {
				"node": ">=8"
			}
		},
		"node_modules/ora/node_modules/signal-exit": {
			"version": "3.0.7",
			"resolved": "https://registry.npmjs.org/signal-exit/-/signal-exit-3.0.7.tgz",
			"integrity": "sha512-wnD2ZE+l+SPC/uoS0vXeE9L1+0wuaMqKlfz9AMUo38JsyLSBWSFcHR1Rri62LZc12vLr1gb3jl7iwQhgwpAbGQ==",
			"dev": true,
			"license": "ISC"
		},
		"node_modules/ora/node_modules/supports-color": {
			"version": "7.2.0",
			"resolved": "https://registry.npmjs.org/supports-color/-/supports-color-7.2.0.tgz",
			"integrity": "sha512-qpCAvRl9stuOHveKsn7HncJRvv501qIacKzQlO/+Lwxc9+0q2wLyv4Dfvt80/DPn2pqOBsJdDiogXGR9+OvwRw==",
			"dev": true,
			"license": "MIT",
			"dependencies": {
				"has-flag": "^4.0.0"
			},
			"engines": {
				"node": ">=8"
			}
		},
		"node_modules/ordered-binary": {
			"version": "1.5.1",
			"resolved": "https://registry.npmjs.org/ordered-binary/-/ordered-binary-1.5.1.tgz",
			"integrity": "sha512-5VyHfHY3cd0iza71JepYG50My+YUbrFtGoUz2ooEydPyPM7Aai/JW098juLr+RG6+rDJuzNNTsEQu2DZa1A41A==",
			"dev": true,
			"license": "MIT"
		},
		"node_modules/os-tmpdir": {
			"version": "1.0.2",
			"resolved": "https://registry.npmjs.org/os-tmpdir/-/os-tmpdir-1.0.2.tgz",
			"integrity": "sha512-D2FR03Vir7FIu45XBY20mTb+/ZSWB00sjU9jdQXt83gDrI4Ztz5Fs7/yy74g2N5SVQY4xY1qDr4rNddwYRVX0g==",
			"dev": true,
			"license": "MIT",
			"engines": {
				"node": ">=0.10.0"
			}
		},
		"node_modules/p-limit": {
			"version": "4.0.0",
			"resolved": "https://registry.npmjs.org/p-limit/-/p-limit-4.0.0.tgz",
			"integrity": "sha512-5b0R4txpzjPWVw/cXXUResoD4hb6U/x9BH08L7nw+GN1sezDzPdxeRvpc9c433fZhBan/wusjbCsqwqm4EIBIQ==",
			"dev": true,
			"license": "MIT",
			"dependencies": {
				"yocto-queue": "^1.0.0"
			},
			"engines": {
				"node": "^12.20.0 || ^14.13.1 || >=16.0.0"
			},
			"funding": {
				"url": "https://github.com/sponsors/sindresorhus"
			}
		},
		"node_modules/p-locate": {
			"version": "6.0.0",
			"resolved": "https://registry.npmjs.org/p-locate/-/p-locate-6.0.0.tgz",
			"integrity": "sha512-wPrq66Llhl7/4AGC6I+cqxT07LhXvWL08LNXz1fENOw0Ap4sRZZ/gZpTTJ5jpurzzzfS2W/Ge9BY3LgLjCShcw==",
			"dev": true,
			"license": "MIT",
			"dependencies": {
				"p-limit": "^4.0.0"
			},
			"engines": {
				"node": "^12.20.0 || ^14.13.1 || >=16.0.0"
			},
			"funding": {
				"url": "https://github.com/sponsors/sindresorhus"
			}
		},
		"node_modules/p-map": {
			"version": "4.0.0",
			"resolved": "https://registry.npmjs.org/p-map/-/p-map-4.0.0.tgz",
			"integrity": "sha512-/bjOqmgETBYB5BoEeGVea8dmvHb2m9GLy1E9W43yeyfP6QQCZGFNa+XRceJEuDB6zqr+gKpIAmlLebMpykw/MQ==",
			"dev": true,
			"license": "MIT",
			"dependencies": {
				"aggregate-error": "^3.0.0"
			},
			"engines": {
				"node": ">=10"
			},
			"funding": {
				"url": "https://github.com/sponsors/sindresorhus"
			}
		},
		"node_modules/p-retry": {
			"version": "6.2.0",
			"resolved": "https://registry.npmjs.org/p-retry/-/p-retry-6.2.0.tgz",
			"integrity": "sha512-JA6nkq6hKyWLLasXQXUrO4z8BUZGUt/LjlJxx8Gb2+2ntodU/SS63YZ8b0LUTbQ8ZB9iwOfhEPhg4ykKnn2KsA==",
			"dev": true,
			"license": "MIT",
			"dependencies": {
				"@types/retry": "0.12.2",
				"is-network-error": "^1.0.0",
				"retry": "^0.13.1"
			},
			"engines": {
				"node": ">=16.17"
			},
			"funding": {
				"url": "https://github.com/sponsors/sindresorhus"
			}
		},
		"node_modules/p-retry/node_modules/retry": {
			"version": "0.13.1",
			"resolved": "https://registry.npmjs.org/retry/-/retry-0.13.1.tgz",
			"integrity": "sha512-XQBQ3I8W1Cge0Seh+6gjj03LbmRFWuoszgK9ooCpwYIrhhoO80pfq4cUkU5DkknwfOfFteRwlZ56PYOGYyFWdg==",
			"dev": true,
			"license": "MIT",
			"engines": {
				"node": ">= 4"
			}
		},
		"node_modules/package-json-from-dist": {
			"version": "1.0.0",
			"resolved": "https://registry.npmjs.org/package-json-from-dist/-/package-json-from-dist-1.0.0.tgz",
			"integrity": "sha512-dATvCeZN/8wQsGywez1mzHtTlP22H8OEfPrVMLNr4/eGa+ijtLn/6M5f0dY8UKNrC2O9UCU6SSoG3qRKnt7STw==",
			"dev": true,
			"license": "BlueOak-1.0.0"
		},
		"node_modules/pacote": {
			"version": "18.0.6",
			"resolved": "https://registry.npmjs.org/pacote/-/pacote-18.0.6.tgz",
			"integrity": "sha512-+eK3G27SMwsB8kLIuj4h1FUhHtwiEUo21Tw8wNjmvdlpOEr613edv+8FUsTj/4F/VN5ywGE19X18N7CC2EJk6A==",
			"dev": true,
			"license": "ISC",
			"dependencies": {
				"@npmcli/git": "^5.0.0",
				"@npmcli/installed-package-contents": "^2.0.1",
				"@npmcli/package-json": "^5.1.0",
				"@npmcli/promise-spawn": "^7.0.0",
				"@npmcli/run-script": "^8.0.0",
				"cacache": "^18.0.0",
				"fs-minipass": "^3.0.0",
				"minipass": "^7.0.2",
				"npm-package-arg": "^11.0.0",
				"npm-packlist": "^8.0.0",
				"npm-pick-manifest": "^9.0.0",
				"npm-registry-fetch": "^17.0.0",
				"proc-log": "^4.0.0",
				"promise-retry": "^2.0.1",
				"sigstore": "^2.2.0",
				"ssri": "^10.0.0",
				"tar": "^6.1.11"
			},
			"bin": {
				"pacote": "bin/index.js"
			},
			"engines": {
				"node": "^16.14.0 || >=18.0.0"
			}
		},
		"node_modules/parent-module": {
			"version": "1.0.1",
			"resolved": "https://registry.npmjs.org/parent-module/-/parent-module-1.0.1.tgz",
			"integrity": "sha512-GQ2EWRpQV8/o+Aw8YqtfZZPfNRWZYkbidE9k5rpl/hC3vtHHBfGm2Ifi6qWV+coDGkrUKZAxE3Lot5kcsRlh+g==",
			"dev": true,
			"license": "MIT",
			"dependencies": {
				"callsites": "^3.0.0"
			},
			"engines": {
				"node": ">=6"
			}
		},
		"node_modules/parse-json": {
			"version": "5.2.0",
			"resolved": "https://registry.npmjs.org/parse-json/-/parse-json-5.2.0.tgz",
			"integrity": "sha512-ayCKvm/phCGxOkYRSCM82iDwct8/EonSEgCSxWxD7ve6jHggsFl4fZVQBPRNgQoKiuV/odhFrGzQXZwbifC8Rg==",
			"dev": true,
			"license": "MIT",
			"dependencies": {
				"@babel/code-frame": "^7.0.0",
				"error-ex": "^1.3.1",
				"json-parse-even-better-errors": "^2.3.0",
				"lines-and-columns": "^1.1.6"
			},
			"engines": {
				"node": ">=8"
			},
			"funding": {
				"url": "https://github.com/sponsors/sindresorhus"
			}
		},
		"node_modules/parse-json/node_modules/json-parse-even-better-errors": {
			"version": "2.3.1",
			"resolved": "https://registry.npmjs.org/json-parse-even-better-errors/-/json-parse-even-better-errors-2.3.1.tgz",
			"integrity": "sha512-xyFwyhro/JEof6Ghe2iz2NcXoj2sloNsWr/XsERDK/oiPCfaNhl5ONfp+jQdAZRQQ0IJWNzH9zIZF7li91kh2w==",
			"dev": true,
			"license": "MIT"
		},
		"node_modules/parse-node-version": {
			"version": "1.0.1",
			"resolved": "https://registry.npmjs.org/parse-node-version/-/parse-node-version-1.0.1.tgz",
			"integrity": "sha512-3YHlOa/JgH6Mnpr05jP9eDG254US9ek25LyIxZlDItp2iJtwyaXQb57lBYLdT3MowkUFYEV2XXNAYIPlESvJlA==",
			"dev": true,
			"license": "MIT",
			"engines": {
				"node": ">= 0.10"
			}
		},
		"node_modules/parse5": {
			"version": "7.1.2",
			"resolved": "https://registry.npmjs.org/parse5/-/parse5-7.1.2.tgz",
			"integrity": "sha512-Czj1WaSVpaoj0wbhMzLmWD69anp2WH7FXMB9n1Sy8/ZFF9jolSQVMu1Ij5WIyGmcBmhk7EOndpO4mIpihVqAXw==",
			"dev": true,
			"license": "MIT",
			"dependencies": {
				"entities": "^4.4.0"
			},
			"funding": {
				"url": "https://github.com/inikulin/parse5?sponsor=1"
			}
		},
		"node_modules/parse5-html-rewriting-stream": {
			"version": "7.0.0",
			"resolved": "https://registry.npmjs.org/parse5-html-rewriting-stream/-/parse5-html-rewriting-stream-7.0.0.tgz",
			"integrity": "sha512-mazCyGWkmCRWDI15Zp+UiCqMp/0dgEmkZRvhlsqqKYr4SsVm/TvnSpD9fCvqCA2zoWJcfRym846ejWBBHRiYEg==",
			"dev": true,
			"license": "MIT",
			"dependencies": {
				"entities": "^4.3.0",
				"parse5": "^7.0.0",
				"parse5-sax-parser": "^7.0.0"
			},
			"funding": {
				"url": "https://github.com/inikulin/parse5?sponsor=1"
			}
		},
		"node_modules/parse5-sax-parser": {
			"version": "7.0.0",
			"resolved": "https://registry.npmjs.org/parse5-sax-parser/-/parse5-sax-parser-7.0.0.tgz",
			"integrity": "sha512-5A+v2SNsq8T6/mG3ahcz8ZtQ0OUFTatxPbeidoMB7tkJSGDY3tdfl4MHovtLQHkEn5CGxijNWRQHhRQ6IRpXKg==",
			"dev": true,
			"license": "MIT",
			"dependencies": {
				"parse5": "^7.0.0"
			},
			"funding": {
				"url": "https://github.com/inikulin/parse5?sponsor=1"
			}
		},
		"node_modules/parseurl": {
			"version": "1.3.3",
			"resolved": "https://registry.npmjs.org/parseurl/-/parseurl-1.3.3.tgz",
			"integrity": "sha512-CiyeOxFT/JZyN5m0z9PfXw4SCBJ6Sygz1Dpl0wqjlhDEGGBP1GnsUVEL0p63hoG1fcj3fHynXi9NYO4nWOL+qQ==",
			"dev": true,
			"license": "MIT",
			"engines": {
				"node": ">= 0.8"
			}
		},
		"node_modules/path-exists": {
			"version": "5.0.0",
			"resolved": "https://registry.npmjs.org/path-exists/-/path-exists-5.0.0.tgz",
			"integrity": "sha512-RjhtfwJOxzcFmNOi6ltcbcu4Iu+FL3zEj83dk4kAS+fVpTxXLO1b38RvJgT/0QwvV/L3aY9TAnyv0EOqW4GoMQ==",
			"dev": true,
			"license": "MIT",
			"engines": {
				"node": "^12.20.0 || ^14.13.1 || >=16.0.0"
			}
		},
		"node_modules/path-key": {
			"version": "3.1.1",
			"resolved": "https://registry.npmjs.org/path-key/-/path-key-3.1.1.tgz",
			"integrity": "sha512-ojmeN0qd+y0jszEtoY48r0Peq5dwMEkIlCOu6Q5f41lfkswXuKtYrhgoTpLnyIcHm24Uhqx+5Tqm2InSwLhE6Q==",
			"dev": true,
			"license": "MIT",
			"engines": {
				"node": ">=8"
			}
		},
		"node_modules/path-parse": {
			"version": "1.0.7",
			"resolved": "https://registry.npmjs.org/path-parse/-/path-parse-1.0.7.tgz",
			"integrity": "sha512-LDJzPVEEEPR+y48z93A0Ed0yXb8pAByGWo/k5YYdYgpY2/2EsOsksJrq7lOHxryrVOn1ejG6oAp8ahvOIQD8sw==",
			"dev": true,
			"license": "MIT"
		},
		"node_modules/path-scurry": {
			"version": "1.11.1",
			"resolved": "https://registry.npmjs.org/path-scurry/-/path-scurry-1.11.1.tgz",
			"integrity": "sha512-Xa4Nw17FS9ApQFJ9umLiJS4orGjm7ZzwUrwamcGQuHSzDyth9boKDaycYdDcZDuqYATXw4HFXgaqWTctW/v1HA==",
			"dev": true,
			"license": "BlueOak-1.0.0",
			"dependencies": {
				"lru-cache": "^10.2.0",
				"minipass": "^5.0.0 || ^6.0.2 || ^7.0.0"
			},
			"engines": {
				"node": ">=16 || 14 >=14.18"
			},
			"funding": {
				"url": "https://github.com/sponsors/isaacs"
			}
		},
		"node_modules/path-scurry/node_modules/lru-cache": {
			"version": "10.4.3",
			"resolved": "https://registry.npmjs.org/lru-cache/-/lru-cache-10.4.3.tgz",
			"integrity": "sha512-JNAzZcXrCt42VGLuYz0zfAzDfAvJWW6AfYlDBQyDV5DClI2m5sAmK+OIO7s59XfsRsWHp02jAJrRadPRGTt6SQ==",
			"dev": true,
			"license": "ISC"
		},
		"node_modules/path-to-regexp": {
			"version": "0.1.7",
			"resolved": "https://registry.npmjs.org/path-to-regexp/-/path-to-regexp-0.1.7.tgz",
			"integrity": "sha512-5DFkuoqlv1uYQKxy8omFBeJPQcdoE07Kv2sferDCrAq1ohOU+MSDswDIbnx3YAM60qIOnYa53wBhXW0EbMonrQ==",
			"dev": true,
			"license": "MIT"
		},
		"node_modules/path-type": {
			"version": "5.0.0",
			"resolved": "https://registry.npmjs.org/path-type/-/path-type-5.0.0.tgz",
			"integrity": "sha512-5HviZNaZcfqP95rwpv+1HDgUamezbqdSYTyzjTvwtJSnIH+3vnbmWsItli8OFEndS984VT55M3jduxZbX351gg==",
			"dev": true,
			"license": "MIT",
			"engines": {
				"node": ">=12"
			},
			"funding": {
				"url": "https://github.com/sponsors/sindresorhus"
			}
		},
		"node_modules/picocolors": {
			"version": "1.0.1",
			"resolved": "https://registry.npmjs.org/picocolors/-/picocolors-1.0.1.tgz",
			"integrity": "sha512-anP1Z8qwhkbmu7MFP5iTt+wQKXgwzf7zTyGlcdzabySa9vd0Xt392U0rVmz9poOaBj0uHJKyyo9/upk0HrEQew==",
			"dev": true,
			"license": "ISC"
		},
		"node_modules/picomatch": {
			"version": "4.0.2",
			"resolved": "https://registry.npmjs.org/picomatch/-/picomatch-4.0.2.tgz",
			"integrity": "sha512-M7BAV6Rlcy5u+m6oPhAPFgJTzAioX/6B0DxyvDlo9l8+T3nLKbrczg2WLUyzd45L8RqfUMyGPzekbMvX2Ldkwg==",
			"dev": true,
			"license": "MIT",
			"engines": {
				"node": ">=12"
			},
			"funding": {
				"url": "https://github.com/sponsors/jonschlinkert"
			}
		},
		"node_modules/pify": {
			"version": "4.0.1",
			"resolved": "https://registry.npmjs.org/pify/-/pify-4.0.1.tgz",
			"integrity": "sha512-uB80kBFb/tfd68bVleG9T5GGsGPjJrLAUpR5PZIrhBnIaRTQRjqdJSsIKkOP6OAIFbj7GOrcudc5pNjZ+geV2g==",
			"dev": true,
			"license": "MIT",
			"optional": true,
			"engines": {
				"node": ">=6"
			}
		},
		"node_modules/pirates": {
			"version": "4.0.6",
			"resolved": "https://registry.npmjs.org/pirates/-/pirates-4.0.6.tgz",
			"integrity": "sha512-saLsH7WeYYPiD25LDuLRRY/i+6HaPYr6G1OUlN39otzkSTxKnubR9RTxS3/Kk50s1g2JTgFwWQDQyplC5/SHZg==",
			"dev": true,
			"license": "MIT",
			"engines": {
				"node": ">= 6"
			}
		},
		"node_modules/piscina": {
			"version": "4.6.1",
			"resolved": "https://registry.npmjs.org/piscina/-/piscina-4.6.1.tgz",
			"integrity": "sha512-z30AwWGtQE+Apr+2WBZensP2lIvwoaMcOPkQlIEmSGMJNUvaYACylPYrQM6wSdUNJlnDVMSpLv7xTMJqlVshOA==",
			"dev": true,
			"license": "MIT",
			"optionalDependencies": {
				"nice-napi": "^1.0.2"
			}
		},
		"node_modules/pkg-dir": {
			"version": "7.0.0",
			"resolved": "https://registry.npmjs.org/pkg-dir/-/pkg-dir-7.0.0.tgz",
			"integrity": "sha512-Ie9z/WINcxxLp27BKOCHGde4ITq9UklYKDzVo1nhk5sqGEXU3FpkwP5GM2voTGJkGd9B3Otl+Q4uwSOeSUtOBA==",
			"dev": true,
			"license": "MIT",
			"dependencies": {
				"find-up": "^6.3.0"
			},
			"engines": {
				"node": ">=14.16"
			},
			"funding": {
				"url": "https://github.com/sponsors/sindresorhus"
			}
		},
		"node_modules/postcss": {
			"version": "8.4.43",
			"resolved": "https://registry.npmjs.org/postcss/-/postcss-8.4.43.tgz",
			"integrity": "sha512-gJAQVYbh5R3gYm33FijzCZj7CHyQ3hWMgJMprLUlIYqCwTeZhBQ19wp0e9mA25BUbEvY5+EXuuaAjqQsrBxQBQ==",
			"dev": true,
			"funding": [
				{
					"type": "opencollective",
					"url": "https://opencollective.com/postcss/"
				},
				{
					"type": "tidelift",
					"url": "https://tidelift.com/funding/github/npm/postcss"
				},
				{
					"type": "github",
					"url": "https://github.com/sponsors/ai"
				}
			],
			"license": "MIT",
			"dependencies": {
				"nanoid": "^3.3.7",
				"picocolors": "^1.0.1",
				"source-map-js": "^1.2.0"
			},
			"engines": {
				"node": "^10 || ^12 || >=14"
			}
		},
		"node_modules/postcss-import": {
			"version": "15.1.0",
			"resolved": "https://registry.npmjs.org/postcss-import/-/postcss-import-15.1.0.tgz",
			"integrity": "sha512-hpr+J05B2FVYUAXHeK1YyI267J/dDDhMU6B6civm8hSY1jYJnBXxzKDKDswzJmtLHryrjhnDjqqp/49t8FALew==",
			"dev": true,
			"license": "MIT",
			"dependencies": {
				"postcss-value-parser": "^4.0.0",
				"read-cache": "^1.0.0",
				"resolve": "^1.1.7"
			},
			"engines": {
				"node": ">=14.0.0"
			},
			"peerDependencies": {
				"postcss": "^8.0.0"
			}
		},
		"node_modules/postcss-js": {
			"version": "4.0.1",
			"resolved": "https://registry.npmjs.org/postcss-js/-/postcss-js-4.0.1.tgz",
			"integrity": "sha512-dDLF8pEO191hJMtlHFPRa8xsizHaM82MLfNkUHdUtVEV3tgTp5oj+8qbEqYM57SLfc74KSbw//4SeJma2LRVIw==",
			"dev": true,
			"license": "MIT",
			"dependencies": {
				"camelcase-css": "^2.0.1"
			},
			"engines": {
				"node": "^12 || ^14 || >= 16"
			},
			"funding": {
				"type": "opencollective",
				"url": "https://opencollective.com/postcss/"
			},
			"peerDependencies": {
				"postcss": "^8.4.21"
			}
		},
		"node_modules/postcss-load-config": {
			"version": "4.0.2",
			"resolved": "https://registry.npmjs.org/postcss-load-config/-/postcss-load-config-4.0.2.tgz",
			"integrity": "sha512-bSVhyJGL00wMVoPUzAVAnbEoWyqRxkjv64tUl427SKnPrENtq6hJwUojroMz2VB+Q1edmi4IfrAPpami5VVgMQ==",
			"dev": true,
			"funding": [
				{
					"type": "opencollective",
					"url": "https://opencollective.com/postcss/"
				},
				{
					"type": "github",
					"url": "https://github.com/sponsors/ai"
				}
			],
			"license": "MIT",
			"dependencies": {
				"lilconfig": "^3.0.0",
				"yaml": "^2.3.4"
			},
			"engines": {
				"node": ">= 14"
			},
			"peerDependencies": {
				"postcss": ">=8.0.9",
				"ts-node": ">=9.0.0"
			},
			"peerDependenciesMeta": {
				"postcss": {
					"optional": true
				},
				"ts-node": {
					"optional": true
				}
			}
		},
		"node_modules/postcss-load-config/node_modules/lilconfig": {
			"version": "3.1.2",
			"resolved": "https://registry.npmjs.org/lilconfig/-/lilconfig-3.1.2.tgz",
			"integrity": "sha512-eop+wDAvpItUys0FWkHIKeC9ybYrTGbU41U5K7+bttZZeohvnY7M9dZ5kB21GNWiFT2q1OoPTvncPCgSOVO5ow==",
			"dev": true,
			"license": "MIT",
			"engines": {
				"node": ">=14"
			},
			"funding": {
				"url": "https://github.com/sponsors/antonk52"
			}
		},
		"node_modules/postcss-loader": {
			"version": "8.1.1",
			"resolved": "https://registry.npmjs.org/postcss-loader/-/postcss-loader-8.1.1.tgz",
			"integrity": "sha512-0IeqyAsG6tYiDRCYKQJLAmgQr47DX6N7sFSWvQxt6AcupX8DIdmykuk/o/tx0Lze3ErGHJEp5OSRxrelC6+NdQ==",
			"dev": true,
			"license": "MIT",
			"dependencies": {
				"cosmiconfig": "^9.0.0",
				"jiti": "^1.20.0",
				"semver": "^7.5.4"
			},
			"engines": {
				"node": ">= 18.12.0"
			},
			"funding": {
				"type": "opencollective",
				"url": "https://opencollective.com/webpack"
			},
			"peerDependencies": {
				"@rspack/core": "0.x || 1.x",
				"postcss": "^7.0.0 || ^8.0.1",
				"webpack": "^5.0.0"
			},
			"peerDependenciesMeta": {
				"@rspack/core": {
					"optional": true
				},
				"webpack": {
					"optional": true
				}
			}
		},
		"node_modules/postcss-media-query-parser": {
			"version": "0.2.3",
			"resolved": "https://registry.npmjs.org/postcss-media-query-parser/-/postcss-media-query-parser-0.2.3.tgz",
			"integrity": "sha512-3sOlxmbKcSHMjlUXQZKQ06jOswE7oVkXPxmZdoB1r5l0q6gTFTQSHxNxOrCccElbW7dxNytifNEo8qidX2Vsig==",
			"dev": true,
			"license": "MIT"
		},
		"node_modules/postcss-modules-extract-imports": {
			"version": "3.1.0",
			"resolved": "https://registry.npmjs.org/postcss-modules-extract-imports/-/postcss-modules-extract-imports-3.1.0.tgz",
			"integrity": "sha512-k3kNe0aNFQDAZGbin48pL2VNidTF0w4/eASDsxlyspobzU3wZQLOGj7L9gfRe0Jo9/4uud09DsjFNH7winGv8Q==",
			"dev": true,
			"license": "ISC",
			"engines": {
				"node": "^10 || ^12 || >= 14"
			},
			"peerDependencies": {
				"postcss": "^8.1.0"
			}
		},
		"node_modules/postcss-modules-local-by-default": {
			"version": "4.0.5",
			"resolved": "https://registry.npmjs.org/postcss-modules-local-by-default/-/postcss-modules-local-by-default-4.0.5.tgz",
			"integrity": "sha512-6MieY7sIfTK0hYfafw1OMEG+2bg8Q1ocHCpoWLqOKj3JXlKu4G7btkmM/B7lFubYkYWmRSPLZi5chid63ZaZYw==",
			"dev": true,
			"license": "MIT",
			"dependencies": {
				"icss-utils": "^5.0.0",
				"postcss-selector-parser": "^6.0.2",
				"postcss-value-parser": "^4.1.0"
			},
			"engines": {
				"node": "^10 || ^12 || >= 14"
			},
			"peerDependencies": {
				"postcss": "^8.1.0"
			}
		},
		"node_modules/postcss-modules-scope": {
			"version": "3.2.0",
			"resolved": "https://registry.npmjs.org/postcss-modules-scope/-/postcss-modules-scope-3.2.0.tgz",
			"integrity": "sha512-oq+g1ssrsZOsx9M96c5w8laRmvEu9C3adDSjI8oTcbfkrTE8hx/zfyobUoWIxaKPO8bt6S62kxpw5GqypEw1QQ==",
			"dev": true,
			"license": "ISC",
			"dependencies": {
				"postcss-selector-parser": "^6.0.4"
			},
			"engines": {
				"node": "^10 || ^12 || >= 14"
			},
			"peerDependencies": {
				"postcss": "^8.1.0"
			}
		},
		"node_modules/postcss-modules-values": {
			"version": "4.0.0",
			"resolved": "https://registry.npmjs.org/postcss-modules-values/-/postcss-modules-values-4.0.0.tgz",
			"integrity": "sha512-RDxHkAiEGI78gS2ofyvCsu7iycRv7oqw5xMWn9iMoR0N/7mf9D50ecQqUo5BZ9Zh2vH4bCUR/ktCqbB9m8vJjQ==",
			"dev": true,
			"license": "ISC",
			"dependencies": {
				"icss-utils": "^5.0.0"
			},
			"engines": {
				"node": "^10 || ^12 || >= 14"
			},
			"peerDependencies": {
				"postcss": "^8.1.0"
			}
		},
		"node_modules/postcss-nested": {
			"version": "6.2.0",
			"resolved": "https://registry.npmjs.org/postcss-nested/-/postcss-nested-6.2.0.tgz",
			"integrity": "sha512-HQbt28KulC5AJzG+cZtj9kvKB93CFCdLvog1WFLf1D+xmMvPGlBstkpTEZfK5+AN9hfJocyBFCNiqyS48bpgzQ==",
			"dev": true,
			"funding": [
				{
					"type": "opencollective",
					"url": "https://opencollective.com/postcss/"
				},
				{
					"type": "github",
					"url": "https://github.com/sponsors/ai"
				}
			],
			"license": "MIT",
			"dependencies": {
				"postcss-selector-parser": "^6.1.1"
			},
			"engines": {
				"node": ">=12.0"
			},
			"peerDependencies": {
				"postcss": "^8.2.14"
			}
		},
		"node_modules/postcss-selector-parser": {
			"version": "6.1.2",
			"resolved": "https://registry.npmjs.org/postcss-selector-parser/-/postcss-selector-parser-6.1.2.tgz",
			"integrity": "sha512-Q8qQfPiZ+THO/3ZrOrO0cJJKfpYCagtMUkXbnEfmgUjwXg6z/WBeOyS9APBBPCTSiDV+s4SwQGu8yFsiMRIudg==",
			"dev": true,
			"license": "MIT",
			"dependencies": {
				"cssesc": "^3.0.0",
				"util-deprecate": "^1.0.2"
			},
			"engines": {
				"node": ">=4"
			}
		},
		"node_modules/postcss-value-parser": {
			"version": "4.2.0",
			"resolved": "https://registry.npmjs.org/postcss-value-parser/-/postcss-value-parser-4.2.0.tgz",
			"integrity": "sha512-1NNCs6uurfkVbeXG4S8JFT9t19m45ICnif8zWLd5oPSZ50QnwMfK+H3jv408d4jw/7Bttv5axS5IiHoLaVNHeQ==",
			"dev": true,
			"license": "MIT"
		},
		"node_modules/proc-log": {
			"version": "4.2.0",
			"resolved": "https://registry.npmjs.org/proc-log/-/proc-log-4.2.0.tgz",
			"integrity": "sha512-g8+OnU/L2v+wyiVK+D5fA34J7EH8jZ8DDlvwhRCMxmMj7UCBvxiO1mGeN+36JXIKF4zevU4kRBd8lVgG9vLelA==",
			"dev": true,
			"license": "ISC",
			"engines": {
				"node": "^14.17.0 || ^16.13.0 || >=18.0.0"
			}
		},
		"node_modules/process-nextick-args": {
			"version": "2.0.1",
			"resolved": "https://registry.npmjs.org/process-nextick-args/-/process-nextick-args-2.0.1.tgz",
			"integrity": "sha512-3ouUOpQhtgrbOa17J7+uxOTpITYWaGP7/AhoR3+A+/1e9skrzelGi/dXzEYyvbxubEF6Wn2ypscTKiKJFFn1ag==",
			"dev": true,
			"license": "MIT"
		},
		"node_modules/promise-inflight": {
			"version": "1.0.1",
			"resolved": "https://registry.npmjs.org/promise-inflight/-/promise-inflight-1.0.1.tgz",
			"integrity": "sha512-6zWPyEOFaQBJYcGMHBKTKJ3u6TBsnMFOIZSa6ce1e/ZrrsOlnHRHbabMjLiBYKp+n44X9eUI6VUPaukCXHuG4g==",
			"dev": true,
			"license": "ISC"
		},
		"node_modules/promise-retry": {
			"version": "2.0.1",
			"resolved": "https://registry.npmjs.org/promise-retry/-/promise-retry-2.0.1.tgz",
			"integrity": "sha512-y+WKFlBR8BGXnsNlIHFGPZmyDf3DFMoLhaflAnyZgV6rG6xu+JwesTo2Q9R6XwYmtmwAFCkAk3e35jEdoeh/3g==",
			"dev": true,
			"license": "MIT",
			"dependencies": {
				"err-code": "^2.0.2",
				"retry": "^0.12.0"
			},
			"engines": {
				"node": ">=10"
			}
		},
		"node_modules/proxy-addr": {
			"version": "2.0.7",
			"resolved": "https://registry.npmjs.org/proxy-addr/-/proxy-addr-2.0.7.tgz",
			"integrity": "sha512-llQsMLSUDUPT44jdrU/O37qlnifitDP+ZwrmmZcoSKyLKvtZxpyV0n2/bD/N4tBAAZ/gJEdZU7KMraoK1+XYAg==",
			"dev": true,
			"license": "MIT",
			"dependencies": {
				"forwarded": "0.2.0",
				"ipaddr.js": "1.9.1"
			},
			"engines": {
				"node": ">= 0.10"
			}
		},
		"node_modules/proxy-addr/node_modules/ipaddr.js": {
			"version": "1.9.1",
			"resolved": "https://registry.npmjs.org/ipaddr.js/-/ipaddr.js-1.9.1.tgz",
			"integrity": "sha512-0KI/607xoxSToH7GjN1FfSbLoU0+btTicjsQSWQlh/hZykN8KpmMf7uYwPW3R+akZ6R/w18ZlXSHBYXiYUPO3g==",
			"dev": true,
			"license": "MIT",
			"engines": {
				"node": ">= 0.10"
			}
		},
		"node_modules/prr": {
			"version": "1.0.1",
			"resolved": "https://registry.npmjs.org/prr/-/prr-1.0.1.tgz",
			"integrity": "sha512-yPw4Sng1gWghHQWj0B3ZggWUm4qVbPwPFcRG8KyxiU7J2OHFSoEHKS+EZ3fv5l1t9CyCiop6l/ZYeWbrgoQejw==",
			"dev": true,
			"license": "MIT",
			"optional": true
		},
		"node_modules/punycode": {
			"version": "2.3.1",
			"resolved": "https://registry.npmjs.org/punycode/-/punycode-2.3.1.tgz",
			"integrity": "sha512-vYt7UD1U9Wg6138shLtLOvdAu+8DsC/ilFtEVHcH+wydcSpNE20AfSOduf6MkRFahL5FY7X1oU7nKVZFtfq8Fg==",
			"dev": true,
			"license": "MIT",
			"engines": {
				"node": ">=6"
			}
		},
		"node_modules/qs": {
			"version": "6.11.0",
			"resolved": "https://registry.npmjs.org/qs/-/qs-6.11.0.tgz",
			"integrity": "sha512-MvjoMCJwEarSbUYk5O+nmoSzSutSsTwF85zcHPQ9OrlFoZOYIjaqBAJIqIXjptyD5vThxGq52Xu/MaJzRkIk4Q==",
			"dev": true,
			"license": "BSD-3-Clause",
			"dependencies": {
				"side-channel": "^1.0.4"
			},
			"engines": {
				"node": ">=0.6"
			},
			"funding": {
				"url": "https://github.com/sponsors/ljharb"
			}
		},
		"node_modules/queue-microtask": {
			"version": "1.2.3",
			"resolved": "https://registry.npmjs.org/queue-microtask/-/queue-microtask-1.2.3.tgz",
			"integrity": "sha512-NuaNSa6flKT5JaSYQzJok04JzTL1CA6aGhv5rfLW3PgqA+M2ChpZQnAC8h8i4ZFkBS8X5RqkDBHA7r4hej3K9A==",
			"dev": true,
			"funding": [
				{
					"type": "github",
					"url": "https://github.com/sponsors/feross"
				},
				{
					"type": "patreon",
					"url": "https://www.patreon.com/feross"
				},
				{
					"type": "consulting",
					"url": "https://feross.org/support"
				}
			],
			"license": "MIT"
		},
		"node_modules/randombytes": {
			"version": "2.1.0",
			"resolved": "https://registry.npmjs.org/randombytes/-/randombytes-2.1.0.tgz",
			"integrity": "sha512-vYl3iOX+4CKUWuxGi9Ukhie6fsqXqS9FE2Zaic4tNFD2N2QQaXOMFbuKK4QmDHC0JO6B1Zp41J0LpT0oR68amQ==",
			"dev": true,
			"license": "MIT",
			"dependencies": {
				"safe-buffer": "^5.1.0"
			}
		},
		"node_modules/range-parser": {
			"version": "1.2.1",
			"resolved": "https://registry.npmjs.org/range-parser/-/range-parser-1.2.1.tgz",
			"integrity": "sha512-Hrgsx+orqoygnmhFbKaHE6c296J+HTAQXoxEF6gNupROmmGJRoyzfG3ccAveqCBrwr/2yxQ5BVd/GTl5agOwSg==",
			"dev": true,
			"license": "MIT",
			"engines": {
				"node": ">= 0.6"
			}
		},
		"node_modules/raw-body": {
			"version": "2.5.2",
			"resolved": "https://registry.npmjs.org/raw-body/-/raw-body-2.5.2.tgz",
			"integrity": "sha512-8zGqypfENjCIqGhgXToC8aB2r7YrBX+AQAfIPs/Mlk+BtPTztOvTS01NRW/3Eh60J+a48lt8qsCzirQ6loCVfA==",
			"dev": true,
			"license": "MIT",
			"dependencies": {
				"bytes": "3.1.2",
				"http-errors": "2.0.0",
				"iconv-lite": "0.4.24",
				"unpipe": "1.0.0"
			},
			"engines": {
				"node": ">= 0.8"
			}
		},
		"node_modules/raw-body/node_modules/bytes": {
			"version": "3.1.2",
			"resolved": "https://registry.npmjs.org/bytes/-/bytes-3.1.2.tgz",
			"integrity": "sha512-/Nf7TyzTx6S3yRJObOAV7956r8cr2+Oj8AC5dt8wSP3BQAoeX58NoHyCU8P8zGkNXStjTSi6fzO6F0pBdcYbEg==",
			"dev": true,
			"license": "MIT",
			"engines": {
				"node": ">= 0.8"
			}
		},
		"node_modules/read-cache": {
			"version": "1.0.0",
			"resolved": "https://registry.npmjs.org/read-cache/-/read-cache-1.0.0.tgz",
			"integrity": "sha512-Owdv/Ft7IjOgm/i0xvNDZ1LrRANRfew4b2prF3OWMQLxLfu3bS8FVhCsrSCMK4lR56Y9ya+AThoTpDCTxCmpRA==",
			"dev": true,
			"license": "MIT",
			"dependencies": {
				"pify": "^2.3.0"
			}
		},
		"node_modules/read-cache/node_modules/pify": {
			"version": "2.3.0",
			"resolved": "https://registry.npmjs.org/pify/-/pify-2.3.0.tgz",
			"integrity": "sha512-udgsAY+fTnvv7kI7aaxbqwWNb0AHiB0qBO89PZKPkoTmGOgdbrHDKD+0B2X4uTfJ/FT1R09r9gTsjUjNJotuog==",
			"dev": true,
			"license": "MIT",
			"engines": {
				"node": ">=0.10.0"
			}
		},
		"node_modules/readable-stream": {
			"version": "3.6.2",
			"resolved": "https://registry.npmjs.org/readable-stream/-/readable-stream-3.6.2.tgz",
			"integrity": "sha512-9u/sniCrY3D5WdsERHzHE4G2YCXqoG5FTHUiCC4SIbr6XcLZBY05ya9EKjYek9O5xOAwjGq+1JdGBAS7Q9ScoA==",
			"dev": true,
			"license": "MIT",
			"dependencies": {
				"inherits": "^2.0.3",
				"string_decoder": "^1.1.1",
				"util-deprecate": "^1.0.1"
			},
			"engines": {
				"node": ">= 6"
			}
		},
		"node_modules/readdirp": {
			"version": "3.6.0",
			"resolved": "https://registry.npmjs.org/readdirp/-/readdirp-3.6.0.tgz",
			"integrity": "sha512-hOS089on8RduqdbhvQ5Z37A0ESjsqz6qnRcffsMU3495FuTdqSm+7bhJ29JvIOsBDEEnan5DPu9t3To9VRlMzA==",
			"dev": true,
			"license": "MIT",
			"dependencies": {
				"picomatch": "^2.2.1"
			},
			"engines": {
				"node": ">=8.10.0"
			}
		},
		"node_modules/readdirp/node_modules/picomatch": {
			"version": "2.3.1",
			"resolved": "https://registry.npmjs.org/picomatch/-/picomatch-2.3.1.tgz",
			"integrity": "sha512-JU3teHTNjmE2VCGFzuY8EXzCDVwEqB2a8fsIvwaStHhAWJEeVd1o1QD80CU6+ZdEXXSLbSsuLwJjkCBWqRQUVA==",
			"dev": true,
			"license": "MIT",
			"engines": {
				"node": ">=8.6"
			},
			"funding": {
				"url": "https://github.com/sponsors/jonschlinkert"
			}
		},
		"node_modules/reflect-metadata": {
			"version": "0.2.2",
			"resolved": "https://registry.npmjs.org/reflect-metadata/-/reflect-metadata-0.2.2.tgz",
			"integrity": "sha512-urBwgfrvVP/eAyXx4hluJivBKzuEbSQs9rKWCrCkbSxNv8mxPcUZKeuoF3Uy4mJl3Lwprp6yy5/39VWigZ4K6Q==",
			"dev": true,
			"license": "Apache-2.0"
		},
		"node_modules/regenerate": {
			"version": "1.4.2",
			"resolved": "https://registry.npmjs.org/regenerate/-/regenerate-1.4.2.tgz",
			"integrity": "sha512-zrceR/XhGYU/d/opr2EKO7aRHUeiBI8qjtfHqADTwZd6Szfy16la6kqD0MIUs5z5hx6AaKa+PixpPrR289+I0A==",
			"dev": true,
			"license": "MIT"
		},
		"node_modules/regenerate-unicode-properties": {
			"version": "10.1.1",
			"resolved": "https://registry.npmjs.org/regenerate-unicode-properties/-/regenerate-unicode-properties-10.1.1.tgz",
			"integrity": "sha512-X007RyZLsCJVVrjgEFVpLUTZwyOZk3oiL75ZcuYjlIWd6rNJtOjkBwQc5AsRrpbKVkxN6sklw/k/9m2jJYOf8Q==",
			"dev": true,
			"license": "MIT",
			"dependencies": {
				"regenerate": "^1.4.2"
			},
			"engines": {
				"node": ">=4"
			}
		},
		"node_modules/regenerator-runtime": {
			"version": "0.14.1",
			"resolved": "https://registry.npmjs.org/regenerator-runtime/-/regenerator-runtime-0.14.1.tgz",
			"integrity": "sha512-dYnhHh0nJoMfnkZs6GmmhFknAGRrLznOu5nc9ML+EJxGvrx6H7teuevqVqCuPcPK//3eDrrjQhehXVx9cnkGdw==",
			"dev": true,
			"license": "MIT"
		},
		"node_modules/regenerator-transform": {
			"version": "0.15.2",
			"resolved": "https://registry.npmjs.org/regenerator-transform/-/regenerator-transform-0.15.2.tgz",
			"integrity": "sha512-hfMp2BoF0qOk3uc5V20ALGDS2ddjQaLrdl7xrGXvAIow7qeWRM2VA2HuCHkUKk9slq3VwEwLNK3DFBqDfPGYtg==",
			"dev": true,
			"license": "MIT",
			"dependencies": {
				"@babel/runtime": "^7.8.4"
			}
		},
		"node_modules/regex-parser": {
			"version": "2.3.0",
			"resolved": "https://registry.npmjs.org/regex-parser/-/regex-parser-2.3.0.tgz",
			"integrity": "sha512-TVILVSz2jY5D47F4mA4MppkBrafEaiUWJO/TcZHEIuI13AqoZMkK1WMA4Om1YkYbTx+9Ki1/tSUXbceyr9saRg==",
			"dev": true,
			"license": "MIT"
		},
		"node_modules/regexpu-core": {
			"version": "5.3.2",
			"resolved": "https://registry.npmjs.org/regexpu-core/-/regexpu-core-5.3.2.tgz",
			"integrity": "sha512-RAM5FlZz+Lhmo7db9L298p2vHP5ZywrVXmVXpmAD9GuL5MPH6t9ROw1iA/wfHkQ76Qe7AaPF0nGuim96/IrQMQ==",
			"dev": true,
			"license": "MIT",
			"dependencies": {
				"@babel/regjsgen": "^0.8.0",
				"regenerate": "^1.4.2",
				"regenerate-unicode-properties": "^10.1.0",
				"regjsparser": "^0.9.1",
				"unicode-match-property-ecmascript": "^2.0.0",
				"unicode-match-property-value-ecmascript": "^2.1.0"
			},
			"engines": {
				"node": ">=4"
			}
		},
		"node_modules/regjsparser": {
			"version": "0.9.1",
			"resolved": "https://registry.npmjs.org/regjsparser/-/regjsparser-0.9.1.tgz",
			"integrity": "sha512-dQUtn90WanSNl+7mQKcXAgZxvUe7Z0SqXlgzv0za4LwiUhyzBC58yQO3liFoUgu8GiJVInAhJjkj1N0EtQ5nkQ==",
			"dev": true,
			"license": "BSD-2-Clause",
			"dependencies": {
				"jsesc": "~0.5.0"
			},
			"bin": {
				"regjsparser": "bin/parser"
			}
		},
		"node_modules/regjsparser/node_modules/jsesc": {
			"version": "0.5.0",
			"resolved": "https://registry.npmjs.org/jsesc/-/jsesc-0.5.0.tgz",
			"integrity": "sha512-uZz5UnB7u4T9LvwmFqXii7pZSouaRPorGs5who1Ip7VO0wxanFvBL7GkM6dTHlgX+jhBApRetaWpnDabOeTcnA==",
			"dev": true,
			"bin": {
				"jsesc": "bin/jsesc"
			}
		},
		"node_modules/require-directory": {
			"version": "2.1.1",
			"resolved": "https://registry.npmjs.org/require-directory/-/require-directory-2.1.1.tgz",
			"integrity": "sha512-fGxEI7+wsG9xrvdjsrlmL22OMTTiHRwAMroiEeMgq8gzoLC/PQr7RsRDSTLUg/bZAZtF+TVIkHc6/4RIKrui+Q==",
			"dev": true,
			"license": "MIT",
			"engines": {
				"node": ">=0.10.0"
			}
		},
		"node_modules/require-from-string": {
			"version": "2.0.2",
			"resolved": "https://registry.npmjs.org/require-from-string/-/require-from-string-2.0.2.tgz",
			"integrity": "sha512-Xf0nWe6RseziFMu+Ap9biiUbmplq6S9/p+7w7YXP/JBHhrUDDUhwa+vANyubuqfZWTveU//DYVGsDG7RKL/vEw==",
			"dev": true,
			"license": "MIT",
			"engines": {
				"node": ">=0.10.0"
			}
		},
		"node_modules/requires-port": {
			"version": "1.0.0",
			"resolved": "https://registry.npmjs.org/requires-port/-/requires-port-1.0.0.tgz",
			"integrity": "sha512-KigOCHcocU3XODJxsu8i/j8T9tzT4adHiecwORRQ0ZZFcp7ahwXuRU1m+yuO90C5ZUyGeGfocHDI14M3L3yDAQ==",
			"dev": true,
			"license": "MIT"
		},
		"node_modules/resolve": {
			"version": "1.22.8",
			"resolved": "https://registry.npmjs.org/resolve/-/resolve-1.22.8.tgz",
			"integrity": "sha512-oKWePCxqpd6FlLvGV1VU0x7bkPmmCNolxzjMf4NczoDnQcIWrAF+cPtZn5i6n+RfD2d9i0tzpKnG6Yk168yIyw==",
			"dev": true,
			"license": "MIT",
			"dependencies": {
				"is-core-module": "^2.13.0",
				"path-parse": "^1.0.7",
				"supports-preserve-symlinks-flag": "^1.0.0"
			},
			"bin": {
				"resolve": "bin/resolve"
			},
			"funding": {
				"url": "https://github.com/sponsors/ljharb"
			}
		},
		"node_modules/resolve-from": {
			"version": "4.0.0",
			"resolved": "https://registry.npmjs.org/resolve-from/-/resolve-from-4.0.0.tgz",
			"integrity": "sha512-pb/MYmXstAkysRFx8piNI1tGFNQIFA3vkE3Gq4EuA1dF6gHp/+vgZqsCGJapvy8N3Q+4o7FwvquPJcnZ7RYy4g==",
			"dev": true,
			"license": "MIT",
			"engines": {
				"node": ">=4"
			}
		},
		"node_modules/resolve-url-loader": {
			"version": "5.0.0",
			"resolved": "https://registry.npmjs.org/resolve-url-loader/-/resolve-url-loader-5.0.0.tgz",
			"integrity": "sha512-uZtduh8/8srhBoMx//5bwqjQ+rfYOUq8zC9NrMUGtjBiGTtFJM42s58/36+hTqeqINcnYe08Nj3LkK9lW4N8Xg==",
			"dev": true,
			"license": "MIT",
			"dependencies": {
				"adjust-sourcemap-loader": "^4.0.0",
				"convert-source-map": "^1.7.0",
				"loader-utils": "^2.0.0",
				"postcss": "^8.2.14",
				"source-map": "0.6.1"
			},
			"engines": {
				"node": ">=12"
			}
		},
		"node_modules/resolve-url-loader/node_modules/loader-utils": {
			"version": "2.0.4",
			"resolved": "https://registry.npmjs.org/loader-utils/-/loader-utils-2.0.4.tgz",
			"integrity": "sha512-xXqpXoINfFhgua9xiqD8fPFHgkoq1mmmpE92WlDbm9rNRd/EbRb+Gqf908T2DMfuHjjJlksiK2RbHVOdD/MqSw==",
			"dev": true,
			"license": "MIT",
			"dependencies": {
				"big.js": "^5.2.2",
				"emojis-list": "^3.0.0",
				"json5": "^2.1.2"
			},
			"engines": {
				"node": ">=8.9.0"
			}
		},
		"node_modules/resolve-url-loader/node_modules/source-map": {
			"version": "0.6.1",
			"resolved": "https://registry.npmjs.org/source-map/-/source-map-0.6.1.tgz",
			"integrity": "sha512-UjgapumWlbMhkBgzT7Ykc5YXUT46F0iKu8SGXq0bcwP5dz/h0Plj6enJqjz1Zbq2l5WaqYnrVbwWOWMyF3F47g==",
			"dev": true,
			"license": "BSD-3-Clause",
			"engines": {
				"node": ">=0.10.0"
			}
		},
		"node_modules/restore-cursor": {
			"version": "5.1.0",
			"resolved": "https://registry.npmjs.org/restore-cursor/-/restore-cursor-5.1.0.tgz",
			"integrity": "sha512-oMA2dcrw6u0YfxJQXm342bFKX/E4sG9rbTzO9ptUcR/e8A33cHuvStiYOwH7fszkZlZ1z/ta9AAoPk2F4qIOHA==",
			"dev": true,
			"license": "MIT",
			"dependencies": {
				"onetime": "^7.0.0",
				"signal-exit": "^4.1.0"
			},
			"engines": {
				"node": ">=18"
			},
			"funding": {
				"url": "https://github.com/sponsors/sindresorhus"
			}
		},
		"node_modules/retry": {
			"version": "0.12.0",
			"resolved": "https://registry.npmjs.org/retry/-/retry-0.12.0.tgz",
			"integrity": "sha512-9LkiTwjUh6rT555DtE9rTX+BKByPfrMzEAtnlEtdEwr3Nkffwiihqe2bWADg+OQRjt9gl6ICdmB/ZFDCGAtSow==",
			"dev": true,
			"license": "MIT",
			"engines": {
				"node": ">= 4"
			}
		},
		"node_modules/reusify": {
			"version": "1.0.4",
			"resolved": "https://registry.npmjs.org/reusify/-/reusify-1.0.4.tgz",
			"integrity": "sha512-U9nH88a3fc/ekCF1l0/UP1IosiuIjyTh7hBvXVMHYgVcfGvt897Xguj2UOLDeI5BG2m7/uwyaLVT6fbtCwTyzw==",
			"dev": true,
			"license": "MIT",
			"engines": {
				"iojs": ">=1.0.0",
				"node": ">=0.10.0"
			}
		},
		"node_modules/rfdc": {
			"version": "1.4.1",
			"resolved": "https://registry.npmjs.org/rfdc/-/rfdc-1.4.1.tgz",
			"integrity": "sha512-q1b3N5QkRUWUl7iyylaaj3kOpIT0N2i9MqIEQXP73GVsN9cw3fdx8X63cEmWhJGi2PPCF23Ijp7ktmd39rawIA==",
			"dev": true,
			"license": "MIT"
		},
		"node_modules/rimraf": {
			"version": "5.0.10",
			"resolved": "https://registry.npmjs.org/rimraf/-/rimraf-5.0.10.tgz",
			"integrity": "sha512-l0OE8wL34P4nJH/H2ffoaniAokM2qSmrtXHmlpvYr5AVVX8msAyW0l8NVJFDxlSK4u3Uh/f41cQheDVdnYijwQ==",
			"dev": true,
			"license": "ISC",
			"dependencies": {
				"glob": "^10.3.7"
			},
			"bin": {
				"rimraf": "dist/esm/bin.mjs"
			},
			"funding": {
				"url": "https://github.com/sponsors/isaacs"
			}
		},
		"node_modules/rollup": {
			"version": "4.20.0",
			"resolved": "https://registry.npmjs.org/rollup/-/rollup-4.20.0.tgz",
			"integrity": "sha512-6rbWBChcnSGzIlXeIdNIZTopKYad8ZG8ajhl78lGRLsI2rX8IkaotQhVas2Ma+GPxJav19wrSzvRvuiv0YKzWw==",
			"dev": true,
			"license": "MIT",
			"dependencies": {
				"@types/estree": "1.0.5"
			},
			"bin": {
				"rollup": "dist/bin/rollup"
			},
			"engines": {
				"node": ">=18.0.0",
				"npm": ">=8.0.0"
			},
			"optionalDependencies": {
				"@rollup/rollup-android-arm-eabi": "4.20.0",
				"@rollup/rollup-android-arm64": "4.20.0",
				"@rollup/rollup-darwin-arm64": "4.20.0",
				"@rollup/rollup-darwin-x64": "4.20.0",
				"@rollup/rollup-linux-arm-gnueabihf": "4.20.0",
				"@rollup/rollup-linux-arm-musleabihf": "4.20.0",
				"@rollup/rollup-linux-arm64-gnu": "4.20.0",
				"@rollup/rollup-linux-arm64-musl": "4.20.0",
				"@rollup/rollup-linux-powerpc64le-gnu": "4.20.0",
				"@rollup/rollup-linux-riscv64-gnu": "4.20.0",
				"@rollup/rollup-linux-s390x-gnu": "4.20.0",
				"@rollup/rollup-linux-x64-gnu": "4.20.0",
				"@rollup/rollup-linux-x64-musl": "4.20.0",
				"@rollup/rollup-win32-arm64-msvc": "4.20.0",
				"@rollup/rollup-win32-ia32-msvc": "4.20.0",
				"@rollup/rollup-win32-x64-msvc": "4.20.0",
				"fsevents": "~2.3.2"
			}
		},
		"node_modules/run-applescript": {
			"version": "7.0.0",
			"resolved": "https://registry.npmjs.org/run-applescript/-/run-applescript-7.0.0.tgz",
			"integrity": "sha512-9by4Ij99JUr/MCFBUkDKLWK3G9HVXmabKz9U5MlIAIuvuzkiOicRYs8XJLxX+xahD+mLiiCYDqF9dKAgtzKP1A==",
			"dev": true,
			"license": "MIT",
			"engines": {
				"node": ">=18"
			},
			"funding": {
				"url": "https://github.com/sponsors/sindresorhus"
			}
		},
		"node_modules/run-parallel": {
			"version": "1.2.0",
			"resolved": "https://registry.npmjs.org/run-parallel/-/run-parallel-1.2.0.tgz",
			"integrity": "sha512-5l4VyZR86LZ/lDxZTR6jqL8AFE2S0IFLMP26AbjsLVADxHdhB/c0GUsH+y39UfCi3dzz8OlQuPmnaJOMoDHQBA==",
			"dev": true,
			"funding": [
				{
					"type": "github",
					"url": "https://github.com/sponsors/feross"
				},
				{
					"type": "patreon",
					"url": "https://www.patreon.com/feross"
				},
				{
					"type": "consulting",
					"url": "https://feross.org/support"
				}
			],
			"license": "MIT",
			"dependencies": {
				"queue-microtask": "^1.2.2"
			}
		},
		"node_modules/rxjs": {
			"version": "7.8.1",
			"resolved": "https://registry.npmjs.org/rxjs/-/rxjs-7.8.1.tgz",
			"integrity": "sha512-AA3TVj+0A2iuIoQkWEK/tqFjBq2j+6PO6Y0zJcvzLAFhEFIO3HL0vls9hWLncZbAAbK0mar7oZ4V079I/qPMxg==",
			"dev": true,
			"license": "Apache-2.0",
			"dependencies": {
				"tslib": "^2.1.0"
			}
		},
		"node_modules/safe-buffer": {
			"version": "5.2.1",
			"resolved": "https://registry.npmjs.org/safe-buffer/-/safe-buffer-5.2.1.tgz",
			"integrity": "sha512-rp3So07KcdmmKbGvgaNxQSJr7bGVSVk5S9Eq1F+ppbRo70+YeaDxkw5Dd8NPN+GD6bjnYm2VuPuCXmpuYvmCXQ==",
			"dev": true,
			"funding": [
				{
					"type": "github",
					"url": "https://github.com/sponsors/feross"
				},
				{
					"type": "patreon",
					"url": "https://www.patreon.com/feross"
				},
				{
					"type": "consulting",
					"url": "https://feross.org/support"
				}
			],
			"license": "MIT"
		},
		"node_modules/safer-buffer": {
			"version": "2.1.2",
			"resolved": "https://registry.npmjs.org/safer-buffer/-/safer-buffer-2.1.2.tgz",
			"integrity": "sha512-YZo3K82SD7Riyi0E1EQPojLz7kpepnSQI9IyPbHHg1XXXevb5dJI7tpyN2ADxGcQbHG7vcyRHk0cbwqcQriUtg==",
			"dev": true,
			"license": "MIT"
		},
		"node_modules/sass": {
			"version": "1.77.6",
			"resolved": "https://registry.npmjs.org/sass/-/sass-1.77.6.tgz",
			"integrity": "sha512-ByXE1oLD79GVq9Ht1PeHWCPMPB8XHpBuz1r85oByKHjZY6qV6rWnQovQzXJXuQ/XyE1Oj3iPk3lo28uzaRA2/Q==",
			"dev": true,
			"license": "MIT",
			"dependencies": {
				"chokidar": ">=3.0.0 <4.0.0",
				"immutable": "^4.0.0",
				"source-map-js": ">=0.6.2 <2.0.0"
			},
			"bin": {
				"sass": "sass.js"
			},
			"engines": {
				"node": ">=14.0.0"
			}
		},
		"node_modules/sass-loader": {
			"version": "16.0.0",
			"resolved": "https://registry.npmjs.org/sass-loader/-/sass-loader-16.0.0.tgz",
			"integrity": "sha512-n13Z+3rU9A177dk4888czcVFiC8CL9dii4qpXWUg3YIIgZEvi9TCFKjOQcbK0kJM7DJu9VucrZFddvNfYCPwtw==",
			"dev": true,
			"license": "MIT",
			"dependencies": {
				"neo-async": "^2.6.2"
			},
			"engines": {
				"node": ">= 18.12.0"
			},
			"funding": {
				"type": "opencollective",
				"url": "https://opencollective.com/webpack"
			},
			"peerDependencies": {
				"@rspack/core": "0.x || 1.x",
				"node-sass": "^4.0.0 || ^5.0.0 || ^6.0.0 || ^7.0.0 || ^8.0.0 || ^9.0.0",
				"sass": "^1.3.0",
				"sass-embedded": "*",
				"webpack": "^5.0.0"
			},
			"peerDependenciesMeta": {
				"@rspack/core": {
					"optional": true
				},
				"node-sass": {
					"optional": true
				},
				"sass": {
					"optional": true
				},
				"sass-embedded": {
					"optional": true
				},
				"webpack": {
					"optional": true
				}
			}
		},
		"node_modules/sax": {
			"version": "1.4.1",
			"resolved": "https://registry.npmjs.org/sax/-/sax-1.4.1.tgz",
			"integrity": "sha512-+aWOz7yVScEGoKNd4PA10LZ8sk0A/z5+nXQG5giUO5rprX9jgYsTdov9qCchZiPIZezbZH+jRut8nPodFAX4Jg==",
			"dev": true,
			"license": "ISC",
			"optional": true
		},
		"node_modules/schema-utils": {
			"version": "4.2.0",
			"resolved": "https://registry.npmjs.org/schema-utils/-/schema-utils-4.2.0.tgz",
			"integrity": "sha512-L0jRsrPpjdckP3oPug3/VxNKt2trR8TcabrM6FOAAlvC/9Phcmm+cuAgTlxBqdBR1WJx7Naj9WHw+aOmheSVbw==",
			"dev": true,
			"license": "MIT",
			"dependencies": {
				"@types/json-schema": "^7.0.9",
				"ajv": "^8.9.0",
				"ajv-formats": "^2.1.1",
				"ajv-keywords": "^5.1.0"
			},
			"engines": {
				"node": ">= 12.13.0"
			},
			"funding": {
				"type": "opencollective",
				"url": "https://opencollective.com/webpack"
			}
		},
		"node_modules/schema-utils/node_modules/ajv-formats": {
			"version": "2.1.1",
			"resolved": "https://registry.npmjs.org/ajv-formats/-/ajv-formats-2.1.1.tgz",
			"integrity": "sha512-Wx0Kx52hxE7C18hkMEggYlEifqWZtYaRgouJor+WMdPnQyEK13vgEWyVNup7SoeeoLMsr4kf5h6dOW11I15MUA==",
			"dev": true,
			"license": "MIT",
			"dependencies": {
				"ajv": "^8.0.0"
			},
			"peerDependencies": {
				"ajv": "^8.0.0"
			},
			"peerDependenciesMeta": {
				"ajv": {
					"optional": true
				}
			}
		},
		"node_modules/select-hose": {
			"version": "2.0.0",
			"resolved": "https://registry.npmjs.org/select-hose/-/select-hose-2.0.0.tgz",
			"integrity": "sha512-mEugaLK+YfkijB4fx0e6kImuJdCIt2LxCRcbEYPqRGCs4F2ogyfZU5IAZRdjCP8JPq2AtdNoC/Dux63d9Kiryg==",
			"dev": true,
			"license": "MIT"
		},
		"node_modules/selfsigned": {
			"version": "2.4.1",
			"resolved": "https://registry.npmjs.org/selfsigned/-/selfsigned-2.4.1.tgz",
			"integrity": "sha512-th5B4L2U+eGLq1TVh7zNRGBapioSORUeymIydxgFpwww9d2qyKvtuPU2jJuHvYAwwqi2Y596QBL3eEqcPEYL8Q==",
			"dev": true,
			"license": "MIT",
			"dependencies": {
				"@types/node-forge": "^1.3.0",
				"node-forge": "^1"
			},
			"engines": {
				"node": ">=10"
			}
		},
		"node_modules/semver": {
			"version": "7.6.3",
			"resolved": "https://registry.npmjs.org/semver/-/semver-7.6.3.tgz",
			"integrity": "sha512-oVekP1cKtI+CTDvHWYFUcMtsK/00wmAEfyqKfNdARm8u1wNVhSgaX7A8d4UuIlUI5e84iEwOhs7ZPYRmzU9U6A==",
			"dev": true,
			"license": "ISC",
			"bin": {
				"semver": "bin/semver.js"
			},
			"engines": {
				"node": ">=10"
			}
		},
		"node_modules/send": {
			"version": "0.18.0",
			"resolved": "https://registry.npmjs.org/send/-/send-0.18.0.tgz",
			"integrity": "sha512-qqWzuOjSFOuqPjFe4NOsMLafToQQwBSOEpS+FwEt3A2V3vKubTquT3vmLTQpFgMXp8AlFWFuP1qKaJZOtPpVXg==",
			"dev": true,
			"license": "MIT",
			"dependencies": {
				"debug": "2.6.9",
				"depd": "2.0.0",
				"destroy": "1.2.0",
				"encodeurl": "~1.0.2",
				"escape-html": "~1.0.3",
				"etag": "~1.8.1",
				"fresh": "0.5.2",
				"http-errors": "2.0.0",
				"mime": "1.6.0",
				"ms": "2.1.3",
				"on-finished": "2.4.1",
				"range-parser": "~1.2.1",
				"statuses": "2.0.1"
			},
			"engines": {
				"node": ">= 0.8.0"
			}
		},
		"node_modules/send/node_modules/debug": {
			"version": "2.6.9",
			"resolved": "https://registry.npmjs.org/debug/-/debug-2.6.9.tgz",
			"integrity": "sha512-bC7ElrdJaJnPbAP+1EotYvqZsb3ecl5wi6Bfi6BJTUcNowp6cvspg0jXznRTKDjm/E7AdgFBVeAPVMNcKGsHMA==",
			"dev": true,
			"license": "MIT",
			"dependencies": {
				"ms": "2.0.0"
			}
		},
		"node_modules/send/node_modules/debug/node_modules/ms": {
			"version": "2.0.0",
			"resolved": "https://registry.npmjs.org/ms/-/ms-2.0.0.tgz",
			"integrity": "sha512-Tpp60P6IUJDTuOq/5Z8cdskzJujfwqfOTkrwIwj7IRISpnkJnT6SyJ4PCPnGMoFjC9ddhal5KVIYtAt97ix05A==",
			"dev": true,
			"license": "MIT"
		},
		"node_modules/send/node_modules/ms": {
			"version": "2.1.3",
			"resolved": "https://registry.npmjs.org/ms/-/ms-2.1.3.tgz",
			"integrity": "sha512-6FlzubTLZG3J2a/NVCAleEhjzq5oxgHyaCU9yYXvcLsvoVaHJq/s5xXI6/XXP6tz7R9xAOtHnSO/tXtF3WRTlA==",
			"dev": true,
			"license": "MIT"
		},
		"node_modules/serialize-javascript": {
			"version": "6.0.2",
			"resolved": "https://registry.npmjs.org/serialize-javascript/-/serialize-javascript-6.0.2.tgz",
			"integrity": "sha512-Saa1xPByTTq2gdeFZYLLo+RFE35NHZkAbqZeWNd3BpzppeVisAqpDjcp8dyf6uIvEqJRd46jemmyA4iFIeVk8g==",
			"dev": true,
			"license": "BSD-3-Clause",
			"dependencies": {
				"randombytes": "^2.1.0"
			}
		},
		"node_modules/serve-index": {
			"version": "1.9.1",
			"resolved": "https://registry.npmjs.org/serve-index/-/serve-index-1.9.1.tgz",
			"integrity": "sha512-pXHfKNP4qujrtteMrSBb0rc8HJ9Ms/GrXwcUtUtD5s4ewDJI8bT3Cz2zTVRMKtri49pLx2e0Ya8ziP5Ya2pZZw==",
			"dev": true,
			"license": "MIT",
			"dependencies": {
				"accepts": "~1.3.4",
				"batch": "0.6.1",
				"debug": "2.6.9",
				"escape-html": "~1.0.3",
				"http-errors": "~1.6.2",
				"mime-types": "~2.1.17",
				"parseurl": "~1.3.2"
			},
			"engines": {
				"node": ">= 0.8.0"
			}
		},
		"node_modules/serve-index/node_modules/debug": {
			"version": "2.6.9",
			"resolved": "https://registry.npmjs.org/debug/-/debug-2.6.9.tgz",
			"integrity": "sha512-bC7ElrdJaJnPbAP+1EotYvqZsb3ecl5wi6Bfi6BJTUcNowp6cvspg0jXznRTKDjm/E7AdgFBVeAPVMNcKGsHMA==",
			"dev": true,
			"license": "MIT",
			"dependencies": {
				"ms": "2.0.0"
			}
		},
		"node_modules/serve-index/node_modules/depd": {
			"version": "1.1.2",
			"resolved": "https://registry.npmjs.org/depd/-/depd-1.1.2.tgz",
			"integrity": "sha512-7emPTl6Dpo6JRXOXjLRxck+FlLRX5847cLKEn00PLAgc3g2hTZZgr+e4c2v6QpSmLeFP3n5yUo7ft6avBK/5jQ==",
			"dev": true,
			"license": "MIT",
			"engines": {
				"node": ">= 0.6"
			}
		},
		"node_modules/serve-index/node_modules/http-errors": {
			"version": "1.6.3",
			"resolved": "https://registry.npmjs.org/http-errors/-/http-errors-1.6.3.tgz",
			"integrity": "sha512-lks+lVC8dgGyh97jxvxeYTWQFvh4uw4yC12gVl63Cg30sjPX4wuGcdkICVXDAESr6OJGjqGA8Iz5mkeN6zlD7A==",
			"dev": true,
			"license": "MIT",
			"dependencies": {
				"depd": "~1.1.2",
				"inherits": "2.0.3",
				"setprototypeof": "1.1.0",
				"statuses": ">= 1.4.0 < 2"
			},
			"engines": {
				"node": ">= 0.6"
			}
		},
		"node_modules/serve-index/node_modules/inherits": {
			"version": "2.0.3",
			"resolved": "https://registry.npmjs.org/inherits/-/inherits-2.0.3.tgz",
			"integrity": "sha512-x00IRNXNy63jwGkJmzPigoySHbaqpNuzKbBOmzK+g2OdZpQ9w+sxCN+VSB3ja7IAge2OP2qpfxTjeNcyjmW1uw==",
			"dev": true,
			"license": "ISC"
		},
		"node_modules/serve-index/node_modules/ms": {
			"version": "2.0.0",
			"resolved": "https://registry.npmjs.org/ms/-/ms-2.0.0.tgz",
			"integrity": "sha512-Tpp60P6IUJDTuOq/5Z8cdskzJujfwqfOTkrwIwj7IRISpnkJnT6SyJ4PCPnGMoFjC9ddhal5KVIYtAt97ix05A==",
			"dev": true,
			"license": "MIT"
		},
		"node_modules/serve-index/node_modules/setprototypeof": {
			"version": "1.1.0",
			"resolved": "https://registry.npmjs.org/setprototypeof/-/setprototypeof-1.1.0.tgz",
			"integrity": "sha512-BvE/TwpZX4FXExxOxZyRGQQv651MSwmWKZGqvmPcRIjDqWub67kTKuIMx43cZZrS/cBBzwBcNDWoFxt2XEFIpQ==",
			"dev": true,
			"license": "ISC"
		},
		"node_modules/serve-index/node_modules/statuses": {
			"version": "1.5.0",
			"resolved": "https://registry.npmjs.org/statuses/-/statuses-1.5.0.tgz",
			"integrity": "sha512-OpZ3zP+jT1PI7I8nemJX4AKmAX070ZkYPVWV/AaKTJl+tXCTGyVdC1a4SL8RUQYEwk/f34ZX8UTykN68FwrqAA==",
			"dev": true,
			"license": "MIT",
			"engines": {
				"node": ">= 0.6"
			}
		},
		"node_modules/serve-static": {
			"version": "1.15.0",
			"resolved": "https://registry.npmjs.org/serve-static/-/serve-static-1.15.0.tgz",
			"integrity": "sha512-XGuRDNjXUijsUL0vl6nSD7cwURuzEgglbOaFuZM9g3kwDXOWVTck0jLzjPzGD+TazWbboZYu52/9/XPdUgne9g==",
			"dev": true,
			"license": "MIT",
			"dependencies": {
				"encodeurl": "~1.0.2",
				"escape-html": "~1.0.3",
				"parseurl": "~1.3.3",
				"send": "0.18.0"
			},
			"engines": {
				"node": ">= 0.8.0"
			}
		},
		"node_modules/set-function-length": {
			"version": "1.2.2",
			"resolved": "https://registry.npmjs.org/set-function-length/-/set-function-length-1.2.2.tgz",
			"integrity": "sha512-pgRc4hJ4/sNjWCSS9AmnS40x3bNMDTknHgL5UaMBTMyJnU90EgWh1Rz+MC9eFu4BuN/UwZjKQuY/1v3rM7HMfg==",
			"dev": true,
			"license": "MIT",
			"dependencies": {
				"define-data-property": "^1.1.4",
				"es-errors": "^1.3.0",
				"function-bind": "^1.1.2",
				"get-intrinsic": "^1.2.4",
				"gopd": "^1.0.1",
				"has-property-descriptors": "^1.0.2"
			},
			"engines": {
				"node": ">= 0.4"
			}
		},
		"node_modules/setprototypeof": {
			"version": "1.2.0",
			"resolved": "https://registry.npmjs.org/setprototypeof/-/setprototypeof-1.2.0.tgz",
			"integrity": "sha512-E5LDX7Wrp85Kil5bhZv46j8jOeboKq5JMmYM3gVGdGH8xFpPWXUMsNrlODCrkoxMEeNi/XZIwuRvY4XNwYMJpw==",
			"dev": true,
			"license": "ISC"
		},
		"node_modules/shallow-clone": {
			"version": "3.0.1",
			"resolved": "https://registry.npmjs.org/shallow-clone/-/shallow-clone-3.0.1.tgz",
			"integrity": "sha512-/6KqX+GVUdqPuPPd2LxDDxzX6CAbjJehAAOKlNpqqUpAqPM6HeL8f+o3a+JsyGjn2lv0WY8UsTgUJjU9Ok55NA==",
			"dev": true,
			"license": "MIT",
			"dependencies": {
				"kind-of": "^6.0.2"
			},
			"engines": {
				"node": ">=8"
			}
		},
		"node_modules/shebang-command": {
			"version": "2.0.0",
			"resolved": "https://registry.npmjs.org/shebang-command/-/shebang-command-2.0.0.tgz",
			"integrity": "sha512-kHxr2zZpYtdmrN1qDjrrX/Z1rR1kG8Dx+gkpK1G4eXmvXswmcE1hTWBWYUzlraYw1/yZp6YuDY77YtvbN0dmDA==",
			"dev": true,
			"license": "MIT",
			"dependencies": {
				"shebang-regex": "^3.0.0"
			},
			"engines": {
				"node": ">=8"
			}
		},
		"node_modules/shebang-regex": {
			"version": "3.0.0",
			"resolved": "https://registry.npmjs.org/shebang-regex/-/shebang-regex-3.0.0.tgz",
			"integrity": "sha512-7++dFhtcx3353uBaq8DDR4NuxBetBzC7ZQOhmTQInHEd6bSrXdiEyzCvG07Z44UYdLShWUyXt5M/yhz8ekcb1A==",
			"dev": true,
			"license": "MIT",
			"engines": {
				"node": ">=8"
			}
		},
		"node_modules/shell-quote": {
			"version": "1.8.1",
			"resolved": "https://registry.npmjs.org/shell-quote/-/shell-quote-1.8.1.tgz",
			"integrity": "sha512-6j1W9l1iAs/4xYBI1SYOVZyFcCis9b4KCLQ8fgAGG07QvzaRLVVRQvAy85yNmmZSjYjg4MWh4gNvlPujU/5LpA==",
			"dev": true,
			"license": "MIT",
			"funding": {
				"url": "https://github.com/sponsors/ljharb"
			}
		},
		"node_modules/side-channel": {
			"version": "1.0.6",
			"resolved": "https://registry.npmjs.org/side-channel/-/side-channel-1.0.6.tgz",
			"integrity": "sha512-fDW/EZ6Q9RiO8eFG8Hj+7u/oW+XrPTIChwCOM2+th2A6OblDtYYIpve9m+KvI9Z4C9qSEXlaGR6bTEYHReuglA==",
			"dev": true,
			"license": "MIT",
			"dependencies": {
				"call-bind": "^1.0.7",
				"es-errors": "^1.3.0",
				"get-intrinsic": "^1.2.4",
				"object-inspect": "^1.13.1"
			},
			"engines": {
				"node": ">= 0.4"
			},
			"funding": {
				"url": "https://github.com/sponsors/ljharb"
			}
		},
		"node_modules/signal-exit": {
			"version": "4.1.0",
			"resolved": "https://registry.npmjs.org/signal-exit/-/signal-exit-4.1.0.tgz",
			"integrity": "sha512-bzyZ1e88w9O1iNJbKnOlvYTrWPDl46O1bG0D3XInv+9tkPrxrN8jUUTiFlDkkmKWgn1M6CfIA13SuGqOa9Korw==",
			"dev": true,
			"license": "ISC",
			"engines": {
				"node": ">=14"
			},
			"funding": {
				"url": "https://github.com/sponsors/isaacs"
			}
		},
		"node_modules/sigstore": {
			"version": "2.3.1",
			"resolved": "https://registry.npmjs.org/sigstore/-/sigstore-2.3.1.tgz",
			"integrity": "sha512-8G+/XDU8wNsJOQS5ysDVO0Etg9/2uA5gR9l4ZwijjlwxBcrU6RPfwi2+jJmbP+Ap1Hlp/nVAaEO4Fj22/SL2gQ==",
			"dev": true,
			"license": "Apache-2.0",
			"dependencies": {
				"@sigstore/bundle": "^2.3.2",
				"@sigstore/core": "^1.0.0",
				"@sigstore/protobuf-specs": "^0.3.2",
				"@sigstore/sign": "^2.3.2",
				"@sigstore/tuf": "^2.3.4",
				"@sigstore/verify": "^1.2.1"
			},
			"engines": {
				"node": "^16.14.0 || >=18.0.0"
			}
		},
		"node_modules/slash": {
			"version": "5.1.0",
			"resolved": "https://registry.npmjs.org/slash/-/slash-5.1.0.tgz",
			"integrity": "sha512-ZA6oR3T/pEyuqwMgAKT0/hAv8oAXckzbkmR0UkUosQ+Mc4RxGoJkRmwHgHufaenlyAgE1Mxgpdcrf75y6XcnDg==",
			"dev": true,
			"license": "MIT",
			"engines": {
				"node": ">=14.16"
			},
			"funding": {
				"url": "https://github.com/sponsors/sindresorhus"
			}
		},
		"node_modules/slice-ansi": {
			"version": "5.0.0",
			"resolved": "https://registry.npmjs.org/slice-ansi/-/slice-ansi-5.0.0.tgz",
			"integrity": "sha512-FC+lgizVPfie0kkhqUScwRu1O/lF6NOgJmlCgK+/LYxDCTk8sGelYaHDhFcDN+Sn3Cv+3VSa4Byeo+IMCzpMgQ==",
			"dev": true,
			"license": "MIT",
			"dependencies": {
				"ansi-styles": "^6.0.0",
				"is-fullwidth-code-point": "^4.0.0"
			},
			"engines": {
				"node": ">=12"
			},
			"funding": {
				"url": "https://github.com/chalk/slice-ansi?sponsor=1"
			}
		},
		"node_modules/slice-ansi/node_modules/ansi-styles": {
			"version": "6.2.1",
			"resolved": "https://registry.npmjs.org/ansi-styles/-/ansi-styles-6.2.1.tgz",
			"integrity": "sha512-bN798gFfQX+viw3R7yrGWRqnrN2oRkEkUjjl4JNn4E8GxxbjtG3FbrEIIY3l8/hrwUwIeCZvi4QuOTP4MErVug==",
			"dev": true,
			"license": "MIT",
			"engines": {
				"node": ">=12"
			},
			"funding": {
				"url": "https://github.com/chalk/ansi-styles?sponsor=1"
			}
		},
		"node_modules/smart-buffer": {
			"version": "4.2.0",
			"resolved": "https://registry.npmjs.org/smart-buffer/-/smart-buffer-4.2.0.tgz",
			"integrity": "sha512-94hK0Hh8rPqQl2xXc3HsaBoOXKV20MToPkcXvwbISWLEs+64sBq5kFgn2kJDHb1Pry9yrP0dxrCI9RRci7RXKg==",
			"dev": true,
			"license": "MIT",
			"engines": {
				"node": ">= 6.0.0",
				"npm": ">= 3.0.0"
			}
		},
		"node_modules/sockjs": {
			"version": "0.3.24",
			"resolved": "https://registry.npmjs.org/sockjs/-/sockjs-0.3.24.tgz",
			"integrity": "sha512-GJgLTZ7vYb/JtPSSZ10hsOYIvEYsjbNU+zPdIHcUaWVNUEPivzxku31865sSSud0Da0W4lEeOPlmw93zLQchuQ==",
			"dev": true,
			"license": "MIT",
			"dependencies": {
				"faye-websocket": "^0.11.3",
				"uuid": "^8.3.2",
				"websocket-driver": "^0.7.4"
			}
		},
		"node_modules/socks": {
			"version": "2.8.3",
			"resolved": "https://registry.npmjs.org/socks/-/socks-2.8.3.tgz",
			"integrity": "sha512-l5x7VUUWbjVFbafGLxPWkYsHIhEvmF85tbIeFZWc8ZPtoMyybuEhL7Jye/ooC4/d48FgOjSJXgsF/AJPYCW8Zw==",
			"dev": true,
			"license": "MIT",
			"dependencies": {
				"ip-address": "^9.0.5",
				"smart-buffer": "^4.2.0"
			},
			"engines": {
				"node": ">= 10.0.0",
				"npm": ">= 3.0.0"
			}
		},
		"node_modules/socks-proxy-agent": {
			"version": "8.0.4",
			"resolved": "https://registry.npmjs.org/socks-proxy-agent/-/socks-proxy-agent-8.0.4.tgz",
			"integrity": "sha512-GNAq/eg8Udq2x0eNiFkr9gRg5bA7PXEWagQdeRX4cPSG+X/8V38v637gim9bjFptMk1QWsCTr0ttrJEiXbNnRw==",
			"dev": true,
			"license": "MIT",
			"dependencies": {
				"agent-base": "^7.1.1",
				"debug": "^4.3.4",
				"socks": "^2.8.3"
			},
			"engines": {
				"node": ">= 14"
			}
		},
		"node_modules/source-map": {
			"version": "0.7.4",
			"resolved": "https://registry.npmjs.org/source-map/-/source-map-0.7.4.tgz",
			"integrity": "sha512-l3BikUxvPOcn5E74dZiq5BGsTb5yEwhaTSzccU6t4sDOH8NWJCstKO5QT2CvtFoK6F0saL7p9xHAqHOlCPJygA==",
			"dev": true,
			"license": "BSD-3-Clause",
			"engines": {
				"node": ">= 8"
			}
		},
		"node_modules/source-map-js": {
			"version": "1.2.0",
			"resolved": "https://registry.npmjs.org/source-map-js/-/source-map-js-1.2.0.tgz",
			"integrity": "sha512-itJW8lvSA0TXEphiRoawsCksnlf8SyvmFzIhltqAHluXd88pkCd+cXJVHTDwdCr0IzwptSm035IHQktUu1QUMg==",
			"dev": true,
			"license": "BSD-3-Clause",
			"engines": {
				"node": ">=0.10.0"
			}
		},
		"node_modules/source-map-loader": {
			"version": "5.0.0",
			"resolved": "https://registry.npmjs.org/source-map-loader/-/source-map-loader-5.0.0.tgz",
			"integrity": "sha512-k2Dur7CbSLcAH73sBcIkV5xjPV4SzqO1NJ7+XaQl8if3VODDUj3FNchNGpqgJSKbvUfJuhVdv8K2Eu8/TNl2eA==",
			"dev": true,
			"license": "MIT",
			"dependencies": {
				"iconv-lite": "^0.6.3",
				"source-map-js": "^1.0.2"
			},
			"engines": {
				"node": ">= 18.12.0"
			},
			"funding": {
				"type": "opencollective",
				"url": "https://opencollective.com/webpack"
			},
			"peerDependencies": {
				"webpack": "^5.72.1"
			}
		},
		"node_modules/source-map-loader/node_modules/iconv-lite": {
			"version": "0.6.3",
			"resolved": "https://registry.npmjs.org/iconv-lite/-/iconv-lite-0.6.3.tgz",
			"integrity": "sha512-4fCk79wshMdzMp2rH06qWrJE4iolqLhCUH+OiuIgU++RB0+94NlDL81atO7GX55uUKueo0txHNtvEyI6D7WdMw==",
			"dev": true,
			"license": "MIT",
			"dependencies": {
				"safer-buffer": ">= 2.1.2 < 3.0.0"
			},
			"engines": {
				"node": ">=0.10.0"
			}
		},
		"node_modules/source-map-support": {
			"version": "0.5.21",
			"resolved": "https://registry.npmjs.org/source-map-support/-/source-map-support-0.5.21.tgz",
			"integrity": "sha512-uBHU3L3czsIyYXKX88fdrGovxdSCoTGDRZ6SYXtSRxLZUzHg5P/66Ht6uoUlHu9EZod+inXhKo3qQgwXUT/y1w==",
			"dev": true,
			"license": "MIT",
			"dependencies": {
				"buffer-from": "^1.0.0",
				"source-map": "^0.6.0"
			}
		},
		"node_modules/source-map-support/node_modules/source-map": {
			"version": "0.6.1",
			"resolved": "https://registry.npmjs.org/source-map/-/source-map-0.6.1.tgz",
			"integrity": "sha512-UjgapumWlbMhkBgzT7Ykc5YXUT46F0iKu8SGXq0bcwP5dz/h0Plj6enJqjz1Zbq2l5WaqYnrVbwWOWMyF3F47g==",
			"dev": true,
			"license": "BSD-3-Clause",
			"engines": {
				"node": ">=0.10.0"
			}
		},
		"node_modules/spdx-correct": {
			"version": "3.2.0",
			"resolved": "https://registry.npmjs.org/spdx-correct/-/spdx-correct-3.2.0.tgz",
			"integrity": "sha512-kN9dJbvnySHULIluDHy32WHRUu3Og7B9sbY7tsFLctQkIqnMh3hErYgdMjTYuqmcXX+lK5T1lnUt3G7zNswmZA==",
			"dev": true,
			"license": "Apache-2.0",
			"dependencies": {
				"spdx-expression-parse": "^3.0.0",
				"spdx-license-ids": "^3.0.0"
			}
		},
		"node_modules/spdx-exceptions": {
			"version": "2.5.0",
			"resolved": "https://registry.npmjs.org/spdx-exceptions/-/spdx-exceptions-2.5.0.tgz",
			"integrity": "sha512-PiU42r+xO4UbUS1buo3LPJkjlO7430Xn5SVAhdpzzsPHsjbYVflnnFdATgabnLude+Cqu25p6N+g2lw/PFsa4w==",
			"dev": true,
			"license": "CC-BY-3.0"
		},
		"node_modules/spdx-expression-parse": {
			"version": "3.0.1",
			"resolved": "https://registry.npmjs.org/spdx-expression-parse/-/spdx-expression-parse-3.0.1.tgz",
			"integrity": "sha512-cbqHunsQWnJNE6KhVSMsMeH5H/L9EpymbzqTQ3uLwNCLZ1Q481oWaofqH7nO6V07xlXwY6PhQdQ2IedWx/ZK4Q==",
			"dev": true,
			"license": "MIT",
			"dependencies": {
				"spdx-exceptions": "^2.1.0",
				"spdx-license-ids": "^3.0.0"
			}
		},
		"node_modules/spdx-license-ids": {
			"version": "3.0.20",
			"resolved": "https://registry.npmjs.org/spdx-license-ids/-/spdx-license-ids-3.0.20.tgz",
			"integrity": "sha512-jg25NiDV/1fLtSgEgyvVyDunvaNHbuwF9lfNV17gSmPFAlYzdfNBlLtLzXTevwkPj7DhGbmN9VnmJIgLnhvaBw==",
			"dev": true,
			"license": "CC0-1.0"
		},
		"node_modules/spdy": {
			"version": "4.0.2",
			"resolved": "https://registry.npmjs.org/spdy/-/spdy-4.0.2.tgz",
			"integrity": "sha512-r46gZQZQV+Kl9oItvl1JZZqJKGr+oEkB08A6BzkiR7593/7IbtuncXHd2YoYeTsG4157ZssMu9KYvUHLcjcDoA==",
			"dev": true,
			"license": "MIT",
			"dependencies": {
				"debug": "^4.1.0",
				"handle-thing": "^2.0.0",
				"http-deceiver": "^1.2.7",
				"select-hose": "^2.0.0",
				"spdy-transport": "^3.0.0"
			},
			"engines": {
				"node": ">=6.0.0"
			}
		},
		"node_modules/spdy-transport": {
			"version": "3.0.0",
			"resolved": "https://registry.npmjs.org/spdy-transport/-/spdy-transport-3.0.0.tgz",
			"integrity": "sha512-hsLVFE5SjA6TCisWeJXFKniGGOpBgMLmerfO2aCyCU5s7nJ/rpAepqmFifv/GCbSbueEeAJJnmSQ2rKC/g8Fcw==",
			"dev": true,
			"license": "MIT",
			"dependencies": {
				"debug": "^4.1.0",
				"detect-node": "^2.0.4",
				"hpack.js": "^2.1.6",
				"obuf": "^1.1.2",
				"readable-stream": "^3.0.6",
				"wbuf": "^1.7.3"
			}
		},
		"node_modules/sprintf-js": {
			"version": "1.1.3",
			"resolved": "https://registry.npmjs.org/sprintf-js/-/sprintf-js-1.1.3.tgz",
			"integrity": "sha512-Oo+0REFV59/rz3gfJNKQiBlwfHaSESl1pcGyABQsnnIfWOFt6JNj5gCog2U6MLZ//IGYD+nA8nI+mTShREReaA==",
			"dev": true,
			"license": "BSD-3-Clause"
		},
		"node_modules/ssri": {
			"version": "10.0.6",
			"resolved": "https://registry.npmjs.org/ssri/-/ssri-10.0.6.tgz",
			"integrity": "sha512-MGrFH9Z4NP9Iyhqn16sDtBpRRNJ0Y2hNa6D65h736fVSaPCHr4DM4sWUNvVaSuC+0OBGhwsrydQwmgfg5LncqQ==",
			"dev": true,
			"license": "ISC",
			"dependencies": {
				"minipass": "^7.0.3"
			},
			"engines": {
				"node": "^14.17.0 || ^16.13.0 || >=18.0.0"
			}
		},
		"node_modules/statuses": {
			"version": "2.0.1",
			"resolved": "https://registry.npmjs.org/statuses/-/statuses-2.0.1.tgz",
			"integrity": "sha512-RwNA9Z/7PrK06rYLIzFMlaF+l73iwpzsqRIFgbMLbTcLD6cOao82TaWefPXQvB2fOC4AjuYSEndS7N/mTCbkdQ==",
			"dev": true,
			"license": "MIT",
			"engines": {
				"node": ">= 0.8"
			}
		},
		"node_modules/string_decoder": {
			"version": "1.3.0",
			"resolved": "https://registry.npmjs.org/string_decoder/-/string_decoder-1.3.0.tgz",
			"integrity": "sha512-hkRX8U1WjJFd8LsDJ2yQ/wWWxaopEsABU1XfkM8A+j0+85JAGppt16cr1Whg6KIbb4okU6Mql6BOj+uup/wKeA==",
			"dev": true,
			"license": "MIT",
			"dependencies": {
				"safe-buffer": "~5.2.0"
			}
		},
		"node_modules/string-width": {
			"version": "7.2.0",
			"resolved": "https://registry.npmjs.org/string-width/-/string-width-7.2.0.tgz",
			"integrity": "sha512-tsaTIkKW9b4N+AEj+SVA+WhJzV7/zMhcSu78mLKWSk7cXMOSHsBKFWUs0fWwq8QyK3MgJBQRX6Gbi4kYbdvGkQ==",
			"dev": true,
			"license": "MIT",
			"dependencies": {
				"emoji-regex": "^10.3.0",
				"get-east-asian-width": "^1.0.0",
				"strip-ansi": "^7.1.0"
			},
			"engines": {
				"node": ">=18"
			},
			"funding": {
				"url": "https://github.com/sponsors/sindresorhus"
			}
		},
		"node_modules/string-width-cjs": {
			"name": "string-width",
			"version": "4.2.3",
			"resolved": "https://registry.npmjs.org/string-width/-/string-width-4.2.3.tgz",
			"integrity": "sha512-wKyQRQpjJ0sIp62ErSZdGsjMJWsap5oRNihHhu6G7JVO/9jIB6UyevL+tXuOqrng8j/cxKTWyWUwvSTriiZz/g==",
			"dev": true,
			"license": "MIT",
			"dependencies": {
				"emoji-regex": "^8.0.0",
				"is-fullwidth-code-point": "^3.0.0",
				"strip-ansi": "^6.0.1"
			},
			"engines": {
				"node": ">=8"
			}
		},
		"node_modules/string-width-cjs/node_modules/emoji-regex": {
			"version": "8.0.0",
			"resolved": "https://registry.npmjs.org/emoji-regex/-/emoji-regex-8.0.0.tgz",
			"integrity": "sha512-MSjYzcWNOA0ewAHpz0MxpYFvwg6yjy1NG3xteoqz644VCo/RPgnr1/GGt+ic3iJTzQ8Eu3TdM14SawnVUmGE6A==",
			"dev": true,
			"license": "MIT"
		},
		"node_modules/string-width-cjs/node_modules/is-fullwidth-code-point": {
			"version": "3.0.0",
			"resolved": "https://registry.npmjs.org/is-fullwidth-code-point/-/is-fullwidth-code-point-3.0.0.tgz",
			"integrity": "sha512-zymm5+u+sCsSWyD9qNaejV3DFvhCKclKdizYaJUuHA83RLjb7nSuGnddCHGv0hk+KY7BMAlsWeK4Ueg6EV6XQg==",
			"dev": true,
			"license": "MIT",
			"engines": {
				"node": ">=8"
			}
		},
		"node_modules/string-width/node_modules/ansi-regex": {
			"version": "6.0.1",
			"resolved": "https://registry.npmjs.org/ansi-regex/-/ansi-regex-6.0.1.tgz",
			"integrity": "sha512-n5M855fKb2SsfMIiFFoVrABHJC8QtHwVx+mHWP3QcEqBHYienj5dHSgjbxtC0WEZXYt4wcD6zrQElDPhFuZgfA==",
			"dev": true,
			"license": "MIT",
			"engines": {
				"node": ">=12"
			},
			"funding": {
				"url": "https://github.com/chalk/ansi-regex?sponsor=1"
			}
		},
		"node_modules/string-width/node_modules/strip-ansi": {
			"version": "7.1.0",
			"resolved": "https://registry.npmjs.org/strip-ansi/-/strip-ansi-7.1.0.tgz",
			"integrity": "sha512-iq6eVVI64nQQTRYq2KtEg2d2uU7LElhTJwsH4YzIHZshxlgZms/wIc4VoDQTlG/IvVIrBKG06CrZnp0qv7hkcQ==",
			"dev": true,
			"license": "MIT",
			"dependencies": {
				"ansi-regex": "^6.0.1"
			},
			"engines": {
				"node": ">=12"
			},
			"funding": {
				"url": "https://github.com/chalk/strip-ansi?sponsor=1"
			}
		},
		"node_modules/strip-ansi": {
			"version": "6.0.1",
			"resolved": "https://registry.npmjs.org/strip-ansi/-/strip-ansi-6.0.1.tgz",
			"integrity": "sha512-Y38VPSHcqkFrCpFnQ9vuSXmquuv5oXOKpGeT6aGrr3o3Gc9AlVa6JBfUSOCnbxGGZF+/0ooI7KrPuUSztUdU5A==",
			"dev": true,
			"license": "MIT",
			"dependencies": {
				"ansi-regex": "^5.0.1"
			},
			"engines": {
				"node": ">=8"
			}
		},
		"node_modules/strip-ansi-cjs": {
			"name": "strip-ansi",
			"version": "6.0.1",
			"resolved": "https://registry.npmjs.org/strip-ansi/-/strip-ansi-6.0.1.tgz",
			"integrity": "sha512-Y38VPSHcqkFrCpFnQ9vuSXmquuv5oXOKpGeT6aGrr3o3Gc9AlVa6JBfUSOCnbxGGZF+/0ooI7KrPuUSztUdU5A==",
			"dev": true,
			"license": "MIT",
			"dependencies": {
				"ansi-regex": "^5.0.1"
			},
			"engines": {
				"node": ">=8"
			}
		},
		"node_modules/strip-final-newline": {
			"version": "2.0.0",
			"resolved": "https://registry.npmjs.org/strip-final-newline/-/strip-final-newline-2.0.0.tgz",
			"integrity": "sha512-BrpvfNAE3dcvq7ll3xVumzjKjZQ5tI1sEUIKr3Uoks0XUl45St3FlatVqef9prk4jRDzhW6WZg+3bk93y6pLjA==",
			"dev": true,
			"license": "MIT",
			"engines": {
				"node": ">=6"
			}
		},
		"node_modules/sucrase": {
			"version": "3.35.0",
			"resolved": "https://registry.npmjs.org/sucrase/-/sucrase-3.35.0.tgz",
			"integrity": "sha512-8EbVDiu9iN/nESwxeSxDKe0dunta1GOlHufmSSXxMD2z2/tMZpDMpvXQGsc+ajGo8y2uYUmixaSRUc/QPoQ0GA==",
			"dev": true,
			"license": "MIT",
			"dependencies": {
				"@jridgewell/gen-mapping": "^0.3.2",
				"commander": "^4.0.0",
				"glob": "^10.3.10",
				"lines-and-columns": "^1.1.6",
				"mz": "^2.7.0",
				"pirates": "^4.0.1",
				"ts-interface-checker": "^0.1.9"
			},
			"bin": {
				"sucrase": "bin/sucrase",
				"sucrase-node": "bin/sucrase-node"
			},
			"engines": {
				"node": ">=16 || 14 >=14.17"
			}
		},
		"node_modules/supports-color": {
			"version": "5.5.0",
			"resolved": "https://registry.npmjs.org/supports-color/-/supports-color-5.5.0.tgz",
			"integrity": "sha512-QjVjwdXIt408MIiAqCX4oUKsgU2EqAGzs2Ppkm4aQYbjm+ZEWEcW4SfFNTr4uMNZma0ey4f5lgLrkB0aX0QMow==",
			"dev": true,
			"license": "MIT",
			"dependencies": {
				"has-flag": "^3.0.0"
			},
			"engines": {
				"node": ">=4"
			}
		},
		"node_modules/supports-preserve-symlinks-flag": {
			"version": "1.0.0",
			"resolved": "https://registry.npmjs.org/supports-preserve-symlinks-flag/-/supports-preserve-symlinks-flag-1.0.0.tgz",
			"integrity": "sha512-ot0WnXS9fgdkgIcePe6RHNk1WA8+muPa6cSjeR3V8K27q9BB1rTE3R1p7Hv0z1ZyAc8s6Vvv8DIyWf681MAt0w==",
			"dev": true,
			"license": "MIT",
			"engines": {
				"node": ">= 0.4"
			},
			"funding": {
				"url": "https://github.com/sponsors/ljharb"
			}
		},
		"node_modules/symbol-observable": {
			"version": "4.0.0",
			"resolved": "https://registry.npmjs.org/symbol-observable/-/symbol-observable-4.0.0.tgz",
			"integrity": "sha512-b19dMThMV4HVFynSAM1++gBHAbk2Tc/osgLIBZMKsyqh34jb2e8Os7T6ZW/Bt3pJFdBTd2JwAnAAEQV7rSNvcQ==",
			"dev": true,
			"license": "MIT",
			"engines": {
				"node": ">=0.10"
			}
		},
		"node_modules/tailwindcss": {
			"version": "3.4.10",
			"resolved": "https://registry.npmjs.org/tailwindcss/-/tailwindcss-3.4.10.tgz",
			"integrity": "sha512-KWZkVPm7yJRhdu4SRSl9d4AK2wM3a50UsvgHZO7xY77NQr2V+fIrEuoDGQcbvswWvFGbS2f6e+jC/6WJm1Dl0w==",
			"dev": true,
			"license": "MIT",
			"dependencies": {
				"@alloc/quick-lru": "^5.2.0",
				"arg": "^5.0.2",
				"chokidar": "^3.5.3",
				"didyoumean": "^1.2.2",
				"dlv": "^1.1.3",
				"fast-glob": "^3.3.0",
				"glob-parent": "^6.0.2",
				"is-glob": "^4.0.3",
				"jiti": "^1.21.0",
				"lilconfig": "^2.1.0",
				"micromatch": "^4.0.5",
				"normalize-path": "^3.0.0",
				"object-hash": "^3.0.0",
				"picocolors": "^1.0.0",
				"postcss": "^8.4.23",
				"postcss-import": "^15.1.0",
				"postcss-js": "^4.0.1",
				"postcss-load-config": "^4.0.1",
				"postcss-nested": "^6.0.1",
				"postcss-selector-parser": "^6.0.11",
				"resolve": "^1.22.2",
				"sucrase": "^3.32.0"
			},
			"bin": {
				"tailwind": "lib/cli.js",
				"tailwindcss": "lib/cli.js"
			},
			"engines": {
				"node": ">=14.0.0"
			}
		},
		"node_modules/tailwindcss/node_modules/glob-parent": {
			"version": "6.0.2",
			"resolved": "https://registry.npmjs.org/glob-parent/-/glob-parent-6.0.2.tgz",
			"integrity": "sha512-XxwI8EOhVQgWp6iDL+3b0r86f4d6AX6zSU55HfB4ydCEuXLXc5FcYeOu+nnGftS4TEju/11rt4KJPTMgbfmv4A==",
			"dev": true,
			"license": "ISC",
			"dependencies": {
				"is-glob": "^4.0.3"
			},
			"engines": {
				"node": ">=10.13.0"
			}
		},
		"node_modules/tapable": {
			"version": "2.2.1",
			"resolved": "https://registry.npmjs.org/tapable/-/tapable-2.2.1.tgz",
			"integrity": "sha512-GNzQvQTOIP6RyTfE2Qxb8ZVlNmw0n88vp1szwWRimP02mnTsx3Wtn5qRdqY9w2XduFNUgvOwhNnQsjwCp+kqaQ==",
			"dev": true,
			"license": "MIT",
			"engines": {
				"node": ">=6"
			}
		},
		"node_modules/tar": {
			"version": "6.2.1",
			"resolved": "https://registry.npmjs.org/tar/-/tar-6.2.1.tgz",
			"integrity": "sha512-DZ4yORTwrbTj/7MZYq2w+/ZFdI6OZ/f9SFHR+71gIVUZhOQPHzVCLpvRnPgyaMpfWxxk/4ONva3GQSyNIKRv6A==",
			"dev": true,
			"license": "ISC",
			"dependencies": {
				"chownr": "^2.0.0",
				"fs-minipass": "^2.0.0",
				"minipass": "^5.0.0",
				"minizlib": "^2.1.1",
				"mkdirp": "^1.0.3",
				"yallist": "^4.0.0"
			},
			"engines": {
				"node": ">=10"
			}
		},
		"node_modules/tar/node_modules/fs-minipass": {
			"version": "2.1.0",
			"resolved": "https://registry.npmjs.org/fs-minipass/-/fs-minipass-2.1.0.tgz",
			"integrity": "sha512-V/JgOLFCS+R6Vcq0slCuaeWEdNC3ouDlJMNIsacH2VtALiu9mV4LPrHc5cDl8k5aw6J8jwgWWpiTo5RYhmIzvg==",
			"dev": true,
			"license": "ISC",
			"dependencies": {
				"minipass": "^3.0.0"
			},
			"engines": {
				"node": ">= 8"
			}
		},
		"node_modules/tar/node_modules/fs-minipass/node_modules/minipass": {
			"version": "3.3.6",
			"resolved": "https://registry.npmjs.org/minipass/-/minipass-3.3.6.tgz",
			"integrity": "sha512-DxiNidxSEK+tHG6zOIklvNOwm3hvCrbUrdtzY74U6HKTJxvIDfOUL5W5P2Ghd3DTkhhKPYGqeNUIh5qcM4YBfw==",
			"dev": true,
			"license": "ISC",
			"dependencies": {
				"yallist": "^4.0.0"
			},
			"engines": {
				"node": ">=8"
			}
		},
		"node_modules/tar/node_modules/minipass": {
			"version": "5.0.0",
			"resolved": "https://registry.npmjs.org/minipass/-/minipass-5.0.0.tgz",
			"integrity": "sha512-3FnjYuehv9k6ovOEbyOswadCDPX1piCfhV8ncmYtHOjuPwylVWsghTLo7rabjC3Rx5xD4HDx8Wm1xnMF7S5qFQ==",
			"dev": true,
			"license": "ISC",
			"engines": {
				"node": ">=8"
			}
		},
		"node_modules/tar/node_modules/yallist": {
			"version": "4.0.0",
			"resolved": "https://registry.npmjs.org/yallist/-/yallist-4.0.0.tgz",
			"integrity": "sha512-3wdGidZyq5PB084XLES5TpOSRA3wjXAlIWMhum2kRcv/41Sn2emQ0dycQW4uZXLejwKvg6EsvbdlVL+FYEct7A==",
			"dev": true,
			"license": "ISC"
		},
		"node_modules/terser": {
			"version": "5.31.6",
			"resolved": "https://registry.npmjs.org/terser/-/terser-5.31.6.tgz",
			"integrity": "sha512-PQ4DAriWzKj+qgehQ7LK5bQqCFNMmlhjR2PFFLuqGCpuCAauxemVBWwWOxo3UIwWQx8+Pr61Df++r76wDmkQBg==",
			"dev": true,
			"license": "BSD-2-Clause",
			"dependencies": {
				"@jridgewell/source-map": "^0.3.3",
				"acorn": "^8.8.2",
				"commander": "^2.20.0",
				"source-map-support": "~0.5.20"
			},
			"bin": {
				"terser": "bin/terser"
			},
			"engines": {
				"node": ">=10"
			}
		},
		"node_modules/terser-webpack-plugin": {
			"version": "5.3.10",
			"resolved": "https://registry.npmjs.org/terser-webpack-plugin/-/terser-webpack-plugin-5.3.10.tgz",
			"integrity": "sha512-BKFPWlPDndPs+NGGCr1U59t0XScL5317Y0UReNrHaw9/FwhPENlq6bfgs+4yPfyP51vqC1bQ4rp1EfXW5ZSH9w==",
			"dev": true,
			"license": "MIT",
			"dependencies": {
				"@jridgewell/trace-mapping": "^0.3.20",
				"jest-worker": "^27.4.5",
				"schema-utils": "^3.1.1",
				"serialize-javascript": "^6.0.1",
				"terser": "^5.26.0"
			},
			"engines": {
				"node": ">= 10.13.0"
			},
			"funding": {
				"type": "opencollective",
				"url": "https://opencollective.com/webpack"
			},
			"peerDependencies": {
				"webpack": "^5.1.0"
			},
			"peerDependenciesMeta": {
				"@swc/core": {
					"optional": true
				},
				"esbuild": {
					"optional": true
				},
				"uglify-js": {
					"optional": true
				}
			}
		},
		"node_modules/terser-webpack-plugin/node_modules/ajv": {
			"version": "6.12.6",
			"resolved": "https://registry.npmjs.org/ajv/-/ajv-6.12.6.tgz",
			"integrity": "sha512-j3fVLgvTo527anyYyJOGTYJbG+vnnQYvE0m5mmkc1TK+nxAppkCLMIL0aZ4dblVCNoGShhm+kzE4ZUykBoMg4g==",
			"dev": true,
			"license": "MIT",
			"dependencies": {
				"fast-deep-equal": "^3.1.1",
				"fast-json-stable-stringify": "^2.0.0",
				"json-schema-traverse": "^0.4.1",
				"uri-js": "^4.2.2"
			},
			"funding": {
				"type": "github",
				"url": "https://github.com/sponsors/epoberezkin"
			}
		},
		"node_modules/terser-webpack-plugin/node_modules/ajv-keywords": {
			"version": "3.5.2",
			"resolved": "https://registry.npmjs.org/ajv-keywords/-/ajv-keywords-3.5.2.tgz",
			"integrity": "sha512-5p6WTN0DdTGVQk6VjcEju19IgaHudalcfabD7yhDGeA6bcQnmL+CpveLJq/3hvfwd1aof6L386Ougkx6RfyMIQ==",
			"dev": true,
			"license": "MIT",
			"peerDependencies": {
				"ajv": "^6.9.1"
			}
		},
		"node_modules/terser-webpack-plugin/node_modules/json-schema-traverse": {
			"version": "0.4.1",
			"resolved": "https://registry.npmjs.org/json-schema-traverse/-/json-schema-traverse-0.4.1.tgz",
			"integrity": "sha512-xbbCH5dCYU5T8LcEhhuh7HJ88HXuW3qsI3Y0zOZFKfZEHcpWiHU/Jxzk629Brsab/mMiHQti9wMP+845RPe3Vg==",
			"dev": true,
			"license": "MIT"
		},
		"node_modules/terser-webpack-plugin/node_modules/schema-utils": {
			"version": "3.3.0",
			"resolved": "https://registry.npmjs.org/schema-utils/-/schema-utils-3.3.0.tgz",
			"integrity": "sha512-pN/yOAvcC+5rQ5nERGuwrjLlYvLTbCibnZ1I7B1LaiAz9BRBlE9GMgE/eqV30P7aJQUf7Ddimy/RsbYO/GrVGg==",
			"dev": true,
			"license": "MIT",
			"dependencies": {
				"@types/json-schema": "^7.0.8",
				"ajv": "^6.12.5",
				"ajv-keywords": "^3.5.2"
			},
			"engines": {
				"node": ">= 10.13.0"
			},
			"funding": {
				"type": "opencollective",
				"url": "https://opencollective.com/webpack"
			}
		},
		"node_modules/terser/node_modules/commander": {
			"version": "2.20.3",
			"resolved": "https://registry.npmjs.org/commander/-/commander-2.20.3.tgz",
			"integrity": "sha512-GpVkmM8vF2vQUkj2LvZmD35JxeJOLCwJ9cUkugyk2nuhbv3+mJvpLYYt+0+USMxE+oj+ey/lJEnhZw75x/OMcQ==",
			"dev": true,
			"license": "MIT"
		},
		"node_modules/thenify": {
			"version": "3.3.1",
			"resolved": "https://registry.npmjs.org/thenify/-/thenify-3.3.1.tgz",
			"integrity": "sha512-RVZSIV5IG10Hk3enotrhvz0T9em6cyHBLkH/YAZuKqd8hRkKhSfCGIcP2KUY0EPxndzANBmNllzWPwak+bheSw==",
			"dev": true,
			"license": "MIT",
			"dependencies": {
				"any-promise": "^1.0.0"
			}
		},
		"node_modules/thenify-all": {
			"version": "1.6.0",
			"resolved": "https://registry.npmjs.org/thenify-all/-/thenify-all-1.6.0.tgz",
			"integrity": "sha512-RNxQH/qI8/t3thXJDwcstUO4zeqo64+Uy/+sNVRBx4Xn2OX+OZ9oP+iJnNFqplFra2ZUVeKCSa2oVWi3T4uVmA==",
			"dev": true,
			"license": "MIT",
			"dependencies": {
				"thenify": ">= 3.1.0 < 4"
			},
			"engines": {
				"node": ">=0.8"
			}
		},
		"node_modules/thingies": {
			"version": "1.21.0",
			"resolved": "https://registry.npmjs.org/thingies/-/thingies-1.21.0.tgz",
			"integrity": "sha512-hsqsJsFMsV+aD4s3CWKk85ep/3I9XzYV/IXaSouJMYIoDlgyi11cBhsqYe9/geRfB0YIikBQg6raRaM+nIMP9g==",
			"dev": true,
			"license": "Unlicense",
			"engines": {
				"node": ">=10.18"
			},
			"peerDependencies": {
				"tslib": "^2"
			}
		},
		"node_modules/thunky": {
			"version": "1.1.0",
			"resolved": "https://registry.npmjs.org/thunky/-/thunky-1.1.0.tgz",
			"integrity": "sha512-eHY7nBftgThBqOyHGVN+l8gF0BucP09fMo0oO/Lb0w1OF80dJv+lDVpXG60WMQvkcxAkNybKsrEIE3ZtKGmPrA==",
			"dev": true,
			"license": "MIT"
		},
		"node_modules/tmp": {
			"version": "0.0.33",
			"resolved": "https://registry.npmjs.org/tmp/-/tmp-0.0.33.tgz",
			"integrity": "sha512-jRCJlojKnZ3addtTOjdIqoRuPEKBvNXcGYqzO6zWZX8KfKEpnGY5jfggJQ3EjKuu8D4bJRr0y+cYJFmYbImXGw==",
			"dev": true,
			"license": "MIT",
			"dependencies": {
				"os-tmpdir": "~1.0.2"
			},
			"engines": {
				"node": ">=0.6.0"
			}
		},
		"node_modules/to-fast-properties": {
			"version": "2.0.0",
			"resolved": "https://registry.npmjs.org/to-fast-properties/-/to-fast-properties-2.0.0.tgz",
			"integrity": "sha512-/OaKK0xYrs3DmxRYqL/yDc+FxFUVYhDlXMhRmv3z915w2HF1tnN1omB354j8VUGO/hbRzyD6Y3sA7v7GS/ceog==",
			"dev": true,
			"license": "MIT",
			"engines": {
				"node": ">=4"
			}
		},
		"node_modules/to-regex-range": {
			"version": "5.0.1",
			"resolved": "https://registry.npmjs.org/to-regex-range/-/to-regex-range-5.0.1.tgz",
			"integrity": "sha512-65P7iz6X5yEr1cwcgvQxbbIw7Uk3gOy5dIdtZ4rDveLqhrdJP+Li/Hx6tyK0NEb+2GCyneCMJiGqrADCSNk8sQ==",
			"dev": true,
			"license": "MIT",
			"dependencies": {
				"is-number": "^7.0.0"
			},
			"engines": {
				"node": ">=8.0"
			}
		},
		"node_modules/toidentifier": {
			"version": "1.0.1",
			"resolved": "https://registry.npmjs.org/toidentifier/-/toidentifier-1.0.1.tgz",
			"integrity": "sha512-o5sSPKEkg/DIQNmH43V0/uerLrpzVedkUh8tGNvaeXpfpuwjKenlSox/2O/BTlZUtEe+JG7s5YhEz608PlAHRA==",
			"dev": true,
			"license": "MIT",
			"engines": {
				"node": ">=0.6"
			}
		},
		"node_modules/tree-dump": {
			"version": "1.0.2",
			"resolved": "https://registry.npmjs.org/tree-dump/-/tree-dump-1.0.2.tgz",
			"integrity": "sha512-dpev9ABuLWdEubk+cIaI9cHwRNNDjkBBLXTwI4UCUFdQ5xXKqNXoK4FEciw/vxf+NQ7Cb7sGUyeUtORvHIdRXQ==",
			"dev": true,
			"license": "Apache-2.0",
			"engines": {
				"node": ">=10.0"
			},
			"funding": {
				"type": "github",
				"url": "https://github.com/sponsors/streamich"
			},
			"peerDependencies": {
				"tslib": "2"
			}
		},
		"node_modules/tree-kill": {
			"version": "1.2.2",
			"resolved": "https://registry.npmjs.org/tree-kill/-/tree-kill-1.2.2.tgz",
			"integrity": "sha512-L0Orpi8qGpRG//Nd+H90vFB+3iHnue1zSSGmNOOCh1GLJ7rUKVwV2HvijphGQS2UmhUZewS9VgvxYIdgr+fG1A==",
			"dev": true,
			"license": "MIT",
			"bin": {
				"tree-kill": "cli.js"
			}
		},
		"node_modules/ts-interface-checker": {
			"version": "0.1.13",
			"resolved": "https://registry.npmjs.org/ts-interface-checker/-/ts-interface-checker-0.1.13.tgz",
			"integrity": "sha512-Y/arvbn+rrz3JCKl9C4kVNfTfSm2/mEp5FSz5EsZSANGPSlQrpRI5M4PKF+mJnE52jOO90PnPSc3Ur3bTQw0gA==",
			"dev": true,
			"license": "Apache-2.0"
		},
		"node_modules/tslib": {
			"version": "2.7.0",
			"resolved": "https://registry.npmjs.org/tslib/-/tslib-2.7.0.tgz",
			"integrity": "sha512-gLXCKdN1/j47AiHiOkJN69hJmcbGTHI0ImLmbYLHykhgeN0jVGola9yVjFgzCUklsZQMW55o+dW7IXv3RCXDzA==",
			"dev": true,
			"license": "0BSD"
		},
		"node_modules/tuf-js": {
			"version": "2.2.1",
			"resolved": "https://registry.npmjs.org/tuf-js/-/tuf-js-2.2.1.tgz",
			"integrity": "sha512-GwIJau9XaA8nLVbUXsN3IlFi7WmQ48gBUrl3FTkkL/XLu/POhBzfmX9hd33FNMX1qAsfl6ozO1iMmW9NC8YniA==",
			"dev": true,
			"license": "MIT",
			"dependencies": {
				"@tufjs/models": "2.0.1",
				"debug": "^4.3.4",
				"make-fetch-happen": "^13.0.1"
			},
			"engines": {
				"node": "^16.14.0 || >=18.0.0"
			}
		},
		"node_modules/type-fest": {
			"version": "0.21.3",
			"resolved": "https://registry.npmjs.org/type-fest/-/type-fest-0.21.3.tgz",
			"integrity": "sha512-t0rzBq87m3fVcduHDUFhKmyyX+9eo6WQjZvf51Ea/M0Q7+T374Jp1aUiyUl0GKxp8M/OETVHSDvmkyPgvX+X2w==",
			"dev": true,
			"license": "(MIT OR CC0-1.0)",
			"engines": {
				"node": ">=10"
			},
			"funding": {
				"url": "https://github.com/sponsors/sindresorhus"
			}
		},
		"node_modules/type-is": {
			"version": "1.6.18",
			"resolved": "https://registry.npmjs.org/type-is/-/type-is-1.6.18.tgz",
			"integrity": "sha512-TkRKr9sUTxEH8MdfuCSP7VizJyzRNMjj2J2do2Jr3Kym598JVdEksuzPQCnlFPW4ky9Q+iA+ma9BGm06XQBy8g==",
			"dev": true,
			"license": "MIT",
			"dependencies": {
				"media-typer": "0.3.0",
				"mime-types": "~2.1.24"
			},
			"engines": {
				"node": ">= 0.6"
			}
		},
		"node_modules/typed-assert": {
			"version": "1.0.9",
			"resolved": "https://registry.npmjs.org/typed-assert/-/typed-assert-1.0.9.tgz",
			"integrity": "sha512-KNNZtayBCtmnNmbo5mG47p1XsCyrx6iVqomjcZnec/1Y5GGARaxPs6r49RnSPeUP3YjNYiU9sQHAtY4BBvnZwg==",
			"dev": true,
			"license": "MIT"
		},
		"node_modules/typescript": {
			"version": "5.5.4",
			"resolved": "https://registry.npmjs.org/typescript/-/typescript-5.5.4.tgz",
			"integrity": "sha512-Mtq29sKDAEYP7aljRgtPOpTvOfbwRWlS6dPRzwjdE+C0R4brX/GUyhHSecbHMFLNBLcJIPt9nl9yG5TZ1weH+Q==",
			"dev": true,
			"license": "Apache-2.0",
			"bin": {
				"tsc": "bin/tsc",
				"tsserver": "bin/tsserver"
			},
			"engines": {
				"node": ">=14.17"
			}
		},
		"node_modules/undici-types": {
			"version": "6.19.8",
			"resolved": "https://registry.npmjs.org/undici-types/-/undici-types-6.19.8.tgz",
			"integrity": "sha512-ve2KP6f/JnbPBFyobGHuerC9g1FYGn/F8n1LWTwNxCEzd6IfqTwUQcNXgEtmmQ6DlRrC1hrSrBnCZPokRrDHjw==",
			"dev": true,
			"license": "MIT"
		},
		"node_modules/unicode-canonical-property-names-ecmascript": {
			"version": "2.0.0",
			"resolved": "https://registry.npmjs.org/unicode-canonical-property-names-ecmascript/-/unicode-canonical-property-names-ecmascript-2.0.0.tgz",
			"integrity": "sha512-yY5PpDlfVIU5+y/BSCxAJRBIS1Zc2dDG3Ujq+sR0U+JjUevW2JhocOF+soROYDSaAezOzOKuyyixhD6mBknSmQ==",
			"dev": true,
			"license": "MIT",
			"engines": {
				"node": ">=4"
			}
		},
		"node_modules/unicode-match-property-ecmascript": {
			"version": "2.0.0",
			"resolved": "https://registry.npmjs.org/unicode-match-property-ecmascript/-/unicode-match-property-ecmascript-2.0.0.tgz",
			"integrity": "sha512-5kaZCrbp5mmbz5ulBkDkbY0SsPOjKqVS35VpL9ulMPfSl0J0Xsm+9Evphv9CoIZFwre7aJoa94AY6seMKGVN5Q==",
			"dev": true,
			"license": "MIT",
			"dependencies": {
				"unicode-canonical-property-names-ecmascript": "^2.0.0",
				"unicode-property-aliases-ecmascript": "^2.0.0"
			},
			"engines": {
				"node": ">=4"
			}
		},
		"node_modules/unicode-match-property-value-ecmascript": {
			"version": "2.1.0",
			"resolved": "https://registry.npmjs.org/unicode-match-property-value-ecmascript/-/unicode-match-property-value-ecmascript-2.1.0.tgz",
			"integrity": "sha512-qxkjQt6qjg/mYscYMC0XKRn3Rh0wFPlfxB0xkt9CfyTvpX1Ra0+rAmdX2QyAobptSEvuy4RtpPRui6XkV+8wjA==",
			"dev": true,
			"license": "MIT",
			"engines": {
				"node": ">=4"
			}
		},
		"node_modules/unicode-property-aliases-ecmascript": {
			"version": "2.1.0",
			"resolved": "https://registry.npmjs.org/unicode-property-aliases-ecmascript/-/unicode-property-aliases-ecmascript-2.1.0.tgz",
			"integrity": "sha512-6t3foTQI9qne+OZoVQB/8x8rk2k1eVy1gRXhV3oFQ5T6R1dqQ1xtin3XqSlx3+ATBkliTaR/hHyJBm+LVPNM8w==",
			"dev": true,
			"license": "MIT",
			"engines": {
				"node": ">=4"
			}
		},
		"node_modules/unicorn-magic": {
			"version": "0.1.0",
			"resolved": "https://registry.npmjs.org/unicorn-magic/-/unicorn-magic-0.1.0.tgz",
			"integrity": "sha512-lRfVq8fE8gz6QMBuDM6a+LO3IAzTi05H6gCVaUpir2E1Rwpo4ZUog45KpNXKC/Mn3Yb9UDuHumeFTo9iV/D9FQ==",
			"dev": true,
			"license": "MIT",
			"engines": {
				"node": ">=18"
			},
			"funding": {
				"url": "https://github.com/sponsors/sindresorhus"
			}
		},
		"node_modules/unique-filename": {
			"version": "3.0.0",
			"resolved": "https://registry.npmjs.org/unique-filename/-/unique-filename-3.0.0.tgz",
			"integrity": "sha512-afXhuC55wkAmZ0P18QsVE6kp8JaxrEokN2HGIoIVv2ijHQd419H0+6EigAFcIzXeMIkcIkNBpB3L/DXB3cTS/g==",
			"dev": true,
			"license": "ISC",
			"dependencies": {
				"unique-slug": "^4.0.0"
			},
			"engines": {
				"node": "^14.17.0 || ^16.13.0 || >=18.0.0"
			}
		},
		"node_modules/unique-slug": {
			"version": "4.0.0",
			"resolved": "https://registry.npmjs.org/unique-slug/-/unique-slug-4.0.0.tgz",
			"integrity": "sha512-WrcA6AyEfqDX5bWige/4NQfPZMtASNVxdmWR76WESYQVAACSgWcR6e9i0mofqqBxYFtL4oAxPIptY73/0YE1DQ==",
			"dev": true,
			"license": "ISC",
			"dependencies": {
				"imurmurhash": "^0.1.4"
			},
			"engines": {
				"node": "^14.17.0 || ^16.13.0 || >=18.0.0"
			}
		},
		"node_modules/unpipe": {
			"version": "1.0.0",
			"resolved": "https://registry.npmjs.org/unpipe/-/unpipe-1.0.0.tgz",
			"integrity": "sha512-pjy2bYhSsufwWlKwPc+l3cN7+wuJlK6uz0YdJEOlQDbl6jo/YlPi4mb8agUkVC8BF7V8NuzeyPNqRksA3hztKQ==",
			"dev": true,
			"license": "MIT",
			"engines": {
				"node": ">= 0.8"
			}
		},
		"node_modules/update-browserslist-db": {
			"version": "1.1.0",
			"resolved": "https://registry.npmjs.org/update-browserslist-db/-/update-browserslist-db-1.1.0.tgz",
			"integrity": "sha512-EdRAaAyk2cUE1wOf2DkEhzxqOQvFOoRJFNS6NeyJ01Gp2beMRpBAINjM2iDXE3KCuKhwnvHIQCJm6ThL2Z+HzQ==",
			"dev": true,
			"funding": [
				{
					"type": "opencollective",
					"url": "https://opencollective.com/browserslist"
				},
				{
					"type": "tidelift",
					"url": "https://tidelift.com/funding/github/npm/browserslist"
				},
				{
					"type": "github",
					"url": "https://github.com/sponsors/ai"
				}
			],
			"license": "MIT",
			"dependencies": {
				"escalade": "^3.1.2",
				"picocolors": "^1.0.1"
			},
			"bin": {
				"update-browserslist-db": "cli.js"
			},
			"peerDependencies": {
				"browserslist": ">= 4.21.0"
			}
		},
		"node_modules/uri-js": {
			"version": "4.4.1",
			"resolved": "https://registry.npmjs.org/uri-js/-/uri-js-4.4.1.tgz",
			"integrity": "sha512-7rKUyy33Q1yc98pQ1DAmLtwX109F7TIfWlW1Ydo8Wl1ii1SeHieeh0HHfPeL2fMXK6z0s8ecKs9frCuLJvndBg==",
			"dev": true,
			"license": "BSD-2-Clause",
			"dependencies": {
				"punycode": "^2.1.0"
			}
		},
		"node_modules/util-deprecate": {
			"version": "1.0.2",
			"resolved": "https://registry.npmjs.org/util-deprecate/-/util-deprecate-1.0.2.tgz",
			"integrity": "sha512-EPD5q1uXyFxJpCrLnCc1nHnq3gOa6DZBocAIiI2TaSCA7VCJ1UJDMagCzIkXNsUYfD1daK//LTEQ8xiIbrHtcw==",
			"dev": true,
			"license": "MIT"
		},
		"node_modules/utils-merge": {
			"version": "1.0.1",
			"resolved": "https://registry.npmjs.org/utils-merge/-/utils-merge-1.0.1.tgz",
			"integrity": "sha512-pMZTvIkT1d+TFGvDOqodOclx0QWkkgi6Tdoa8gC8ffGAAqz9pzPTZWAybbsHHoED/ztMtkv/VoYTYyShUn81hA==",
			"dev": true,
			"license": "MIT",
			"engines": {
				"node": ">= 0.4.0"
			}
		},
		"node_modules/uuid": {
			"version": "8.3.2",
			"resolved": "https://registry.npmjs.org/uuid/-/uuid-8.3.2.tgz",
			"integrity": "sha512-+NYs2QeMWy+GWFOEm9xnn6HCDp0l7QBD7ml8zLUmJ+93Q5NF0NocErnwkTkXVFNiX3/fpC6afS8Dhb/gz7R7eg==",
			"dev": true,
			"license": "MIT",
			"bin": {
				"uuid": "dist/bin/uuid"
			}
		},
		"node_modules/validate-npm-package-license": {
			"version": "3.0.4",
			"resolved": "https://registry.npmjs.org/validate-npm-package-license/-/validate-npm-package-license-3.0.4.tgz",
			"integrity": "sha512-DpKm2Ui/xN7/HQKCtpZxoRWBhZ9Z0kqtygG8XCgNQ8ZlDnxuQmWhj566j8fN4Cu3/JmbhsDo7fcAJq4s9h27Ew==",
			"dev": true,
			"license": "Apache-2.0",
			"dependencies": {
				"spdx-correct": "^3.0.0",
				"spdx-expression-parse": "^3.0.0"
			}
		},
		"node_modules/validate-npm-package-name": {
			"version": "5.0.1",
			"resolved": "https://registry.npmjs.org/validate-npm-package-name/-/validate-npm-package-name-5.0.1.tgz",
			"integrity": "sha512-OljLrQ9SQdOUqTaQxqL5dEfZWrXExyyWsozYlAWFawPVNuD83igl7uJD2RTkNMbniIYgt8l81eCJGIdQF7avLQ==",
			"dev": true,
			"license": "ISC",
			"engines": {
				"node": "^14.17.0 || ^16.13.0 || >=18.0.0"
			}
		},
		"node_modules/vary": {
			"version": "1.1.2",
			"resolved": "https://registry.npmjs.org/vary/-/vary-1.1.2.tgz",
			"integrity": "sha512-BNGbWLfd0eUPabhkXUVm0j8uuvREyTh5ovRa/dyow/BqAbZJyC+5fU+IzQOzmAKzYqYRAISoRhdQr3eIZ/PXqg==",
			"dev": true,
			"license": "MIT",
			"engines": {
				"node": ">= 0.8"
			}
		},
		"node_modules/vite": {
			"version": "5.4.0",
			"resolved": "https://registry.npmjs.org/vite/-/vite-5.4.0.tgz",
			"integrity": "sha512-5xokfMX0PIiwCMCMb9ZJcMyh5wbBun0zUzKib+L65vAZ8GY9ePZMXxFrHbr/Kyll2+LSCY7xtERPpxkBDKngwg==",
			"dev": true,
			"license": "MIT",
			"dependencies": {
				"esbuild": "^0.21.3",
				"postcss": "^8.4.40",
				"rollup": "^4.13.0"
			},
			"bin": {
				"vite": "bin/vite.js"
			},
			"engines": {
				"node": "^18.0.0 || >=20.0.0"
			},
			"funding": {
				"url": "https://github.com/vitejs/vite?sponsor=1"
			},
			"optionalDependencies": {
				"fsevents": "~2.3.3"
			},
			"peerDependencies": {
				"@types/node": "^18.0.0 || >=20.0.0",
				"less": "*",
				"lightningcss": "^1.21.0",
				"sass": "*",
				"sass-embedded": "*",
				"stylus": "*",
				"sugarss": "*",
				"terser": "^5.4.0"
			},
			"peerDependenciesMeta": {
				"@types/node": {
					"optional": true
				},
				"less": {
					"optional": true
				},
				"lightningcss": {
					"optional": true
				},
				"sass": {
					"optional": true
				},
				"sass-embedded": {
					"optional": true
				},
				"stylus": {
					"optional": true
				},
				"sugarss": {
					"optional": true
				},
				"terser": {
					"optional": true
				}
			}
		},
		"node_modules/vite/node_modules/@esbuild/aix-ppc64": {
			"version": "0.21.5",
			"resolved": "https://registry.npmjs.org/@esbuild/aix-ppc64/-/aix-ppc64-0.21.5.tgz",
			"integrity": "sha512-1SDgH6ZSPTlggy1yI6+Dbkiz8xzpHJEVAlF/AM1tHPLsf5STom9rwtjE4hKAF20FfXXNTFqEYXyJNWh1GiZedQ==",
			"cpu": [
				"ppc64"
			],
			"dev": true,
			"license": "MIT",
			"optional": true,
			"os": [
				"aix"
			],
			"engines": {
				"node": ">=12"
			}
		},
		"node_modules/vite/node_modules/@esbuild/android-arm": {
			"version": "0.21.5",
			"resolved": "https://registry.npmjs.org/@esbuild/android-arm/-/android-arm-0.21.5.tgz",
			"integrity": "sha512-vCPvzSjpPHEi1siZdlvAlsPxXl7WbOVUBBAowWug4rJHb68Ox8KualB+1ocNvT5fjv6wpkX6o/iEpbDrf68zcg==",
			"cpu": [
				"arm"
			],
			"dev": true,
			"license": "MIT",
			"optional": true,
			"os": [
				"android"
			],
			"engines": {
				"node": ">=12"
			}
		},
		"node_modules/vite/node_modules/@esbuild/android-arm64": {
			"version": "0.21.5",
			"resolved": "https://registry.npmjs.org/@esbuild/android-arm64/-/android-arm64-0.21.5.tgz",
			"integrity": "sha512-c0uX9VAUBQ7dTDCjq+wdyGLowMdtR/GoC2U5IYk/7D1H1JYC0qseD7+11iMP2mRLN9RcCMRcjC4YMclCzGwS/A==",
			"cpu": [
				"arm64"
			],
			"dev": true,
			"license": "MIT",
			"optional": true,
			"os": [
				"android"
			],
			"engines": {
				"node": ">=12"
			}
		},
		"node_modules/vite/node_modules/@esbuild/android-x64": {
			"version": "0.21.5",
			"resolved": "https://registry.npmjs.org/@esbuild/android-x64/-/android-x64-0.21.5.tgz",
			"integrity": "sha512-D7aPRUUNHRBwHxzxRvp856rjUHRFW1SdQATKXH2hqA0kAZb1hKmi02OpYRacl0TxIGz/ZmXWlbZgjwWYaCakTA==",
			"cpu": [
				"x64"
			],
			"dev": true,
			"license": "MIT",
			"optional": true,
			"os": [
				"android"
			],
			"engines": {
				"node": ">=12"
			}
		},
		"node_modules/vite/node_modules/@esbuild/darwin-arm64": {
			"version": "0.21.5",
			"resolved": "https://registry.npmjs.org/@esbuild/darwin-arm64/-/darwin-arm64-0.21.5.tgz",
			"integrity": "sha512-DwqXqZyuk5AiWWf3UfLiRDJ5EDd49zg6O9wclZ7kUMv2WRFr4HKjXp/5t8JZ11QbQfUS6/cRCKGwYhtNAY88kQ==",
			"cpu": [
				"arm64"
			],
			"dev": true,
			"license": "MIT",
			"optional": true,
			"os": [
				"darwin"
			],
			"engines": {
				"node": ">=12"
			}
		},
		"node_modules/vite/node_modules/@esbuild/darwin-x64": {
			"version": "0.21.5",
			"resolved": "https://registry.npmjs.org/@esbuild/darwin-x64/-/darwin-x64-0.21.5.tgz",
			"integrity": "sha512-se/JjF8NlmKVG4kNIuyWMV/22ZaerB+qaSi5MdrXtd6R08kvs2qCN4C09miupktDitvh8jRFflwGFBQcxZRjbw==",
			"cpu": [
				"x64"
			],
			"dev": true,
			"license": "MIT",
			"optional": true,
			"os": [
				"darwin"
			],
			"engines": {
				"node": ">=12"
			}
		},
		"node_modules/vite/node_modules/@esbuild/freebsd-arm64": {
			"version": "0.21.5",
			"resolved": "https://registry.npmjs.org/@esbuild/freebsd-arm64/-/freebsd-arm64-0.21.5.tgz",
			"integrity": "sha512-5JcRxxRDUJLX8JXp/wcBCy3pENnCgBR9bN6JsY4OmhfUtIHe3ZW0mawA7+RDAcMLrMIZaf03NlQiX9DGyB8h4g==",
			"cpu": [
				"arm64"
			],
			"dev": true,
			"license": "MIT",
			"optional": true,
			"os": [
				"freebsd"
			],
			"engines": {
				"node": ">=12"
			}
		},
		"node_modules/vite/node_modules/@esbuild/freebsd-x64": {
			"version": "0.21.5",
			"resolved": "https://registry.npmjs.org/@esbuild/freebsd-x64/-/freebsd-x64-0.21.5.tgz",
			"integrity": "sha512-J95kNBj1zkbMXtHVH29bBriQygMXqoVQOQYA+ISs0/2l3T9/kj42ow2mpqerRBxDJnmkUDCaQT/dfNXWX/ZZCQ==",
			"cpu": [
				"x64"
			],
			"dev": true,
			"license": "MIT",
			"optional": true,
			"os": [
				"freebsd"
			],
			"engines": {
				"node": ">=12"
			}
		},
		"node_modules/vite/node_modules/@esbuild/linux-arm": {
			"version": "0.21.5",
			"resolved": "https://registry.npmjs.org/@esbuild/linux-arm/-/linux-arm-0.21.5.tgz",
			"integrity": "sha512-bPb5AHZtbeNGjCKVZ9UGqGwo8EUu4cLq68E95A53KlxAPRmUyYv2D6F0uUI65XisGOL1hBP5mTronbgo+0bFcA==",
			"cpu": [
				"arm"
			],
			"dev": true,
			"license": "MIT",
			"optional": true,
			"os": [
				"linux"
			],
			"engines": {
				"node": ">=12"
			}
		},
		"node_modules/vite/node_modules/@esbuild/linux-arm64": {
			"version": "0.21.5",
			"resolved": "https://registry.npmjs.org/@esbuild/linux-arm64/-/linux-arm64-0.21.5.tgz",
			"integrity": "sha512-ibKvmyYzKsBeX8d8I7MH/TMfWDXBF3db4qM6sy+7re0YXya+K1cem3on9XgdT2EQGMu4hQyZhan7TeQ8XkGp4Q==",
			"cpu": [
				"arm64"
			],
			"dev": true,
			"license": "MIT",
			"optional": true,
			"os": [
				"linux"
			],
			"engines": {
				"node": ">=12"
			}
		},
		"node_modules/vite/node_modules/@esbuild/linux-ia32": {
			"version": "0.21.5",
			"resolved": "https://registry.npmjs.org/@esbuild/linux-ia32/-/linux-ia32-0.21.5.tgz",
			"integrity": "sha512-YvjXDqLRqPDl2dvRODYmmhz4rPeVKYvppfGYKSNGdyZkA01046pLWyRKKI3ax8fbJoK5QbxblURkwK/MWY18Tg==",
			"cpu": [
				"ia32"
			],
			"dev": true,
			"license": "MIT",
			"optional": true,
			"os": [
				"linux"
			],
			"engines": {
				"node": ">=12"
			}
		},
		"node_modules/vite/node_modules/@esbuild/linux-loong64": {
			"version": "0.21.5",
			"resolved": "https://registry.npmjs.org/@esbuild/linux-loong64/-/linux-loong64-0.21.5.tgz",
			"integrity": "sha512-uHf1BmMG8qEvzdrzAqg2SIG/02+4/DHB6a9Kbya0XDvwDEKCoC8ZRWI5JJvNdUjtciBGFQ5PuBlpEOXQj+JQSg==",
			"cpu": [
				"loong64"
			],
			"dev": true,
			"license": "MIT",
			"optional": true,
			"os": [
				"linux"
			],
			"engines": {
				"node": ">=12"
			}
		},
		"node_modules/vite/node_modules/@esbuild/linux-mips64el": {
			"version": "0.21.5",
			"resolved": "https://registry.npmjs.org/@esbuild/linux-mips64el/-/linux-mips64el-0.21.5.tgz",
			"integrity": "sha512-IajOmO+KJK23bj52dFSNCMsz1QP1DqM6cwLUv3W1QwyxkyIWecfafnI555fvSGqEKwjMXVLokcV5ygHW5b3Jbg==",
			"cpu": [
				"mips64el"
			],
			"dev": true,
			"license": "MIT",
			"optional": true,
			"os": [
				"linux"
			],
			"engines": {
				"node": ">=12"
			}
		},
		"node_modules/vite/node_modules/@esbuild/linux-ppc64": {
			"version": "0.21.5",
			"resolved": "https://registry.npmjs.org/@esbuild/linux-ppc64/-/linux-ppc64-0.21.5.tgz",
			"integrity": "sha512-1hHV/Z4OEfMwpLO8rp7CvlhBDnjsC3CttJXIhBi+5Aj5r+MBvy4egg7wCbe//hSsT+RvDAG7s81tAvpL2XAE4w==",
			"cpu": [
				"ppc64"
			],
			"dev": true,
			"license": "MIT",
			"optional": true,
			"os": [
				"linux"
			],
			"engines": {
				"node": ">=12"
			}
		},
		"node_modules/vite/node_modules/@esbuild/linux-riscv64": {
			"version": "0.21.5",
			"resolved": "https://registry.npmjs.org/@esbuild/linux-riscv64/-/linux-riscv64-0.21.5.tgz",
			"integrity": "sha512-2HdXDMd9GMgTGrPWnJzP2ALSokE/0O5HhTUvWIbD3YdjME8JwvSCnNGBnTThKGEB91OZhzrJ4qIIxk/SBmyDDA==",
			"cpu": [
				"riscv64"
			],
			"dev": true,
			"license": "MIT",
			"optional": true,
			"os": [
				"linux"
			],
			"engines": {
				"node": ">=12"
			}
		},
		"node_modules/vite/node_modules/@esbuild/linux-s390x": {
			"version": "0.21.5",
			"resolved": "https://registry.npmjs.org/@esbuild/linux-s390x/-/linux-s390x-0.21.5.tgz",
			"integrity": "sha512-zus5sxzqBJD3eXxwvjN1yQkRepANgxE9lgOW2qLnmr8ikMTphkjgXu1HR01K4FJg8h1kEEDAqDcZQtbrRnB41A==",
			"cpu": [
				"s390x"
			],
			"dev": true,
			"license": "MIT",
			"optional": true,
			"os": [
				"linux"
			],
			"engines": {
				"node": ">=12"
			}
		},
		"node_modules/vite/node_modules/@esbuild/linux-x64": {
			"version": "0.21.5",
			"resolved": "https://registry.npmjs.org/@esbuild/linux-x64/-/linux-x64-0.21.5.tgz",
			"integrity": "sha512-1rYdTpyv03iycF1+BhzrzQJCdOuAOtaqHTWJZCWvijKD2N5Xu0TtVC8/+1faWqcP9iBCWOmjmhoH94dH82BxPQ==",
			"cpu": [
				"x64"
			],
			"dev": true,
			"license": "MIT",
			"optional": true,
			"os": [
				"linux"
			],
			"engines": {
				"node": ">=12"
			}
		},
		"node_modules/vite/node_modules/@esbuild/netbsd-x64": {
			"version": "0.21.5",
			"resolved": "https://registry.npmjs.org/@esbuild/netbsd-x64/-/netbsd-x64-0.21.5.tgz",
			"integrity": "sha512-Woi2MXzXjMULccIwMnLciyZH4nCIMpWQAs049KEeMvOcNADVxo0UBIQPfSmxB3CWKedngg7sWZdLvLczpe0tLg==",
			"cpu": [
				"x64"
			],
			"dev": true,
			"license": "MIT",
			"optional": true,
			"os": [
				"netbsd"
			],
			"engines": {
				"node": ">=12"
			}
		},
		"node_modules/vite/node_modules/@esbuild/openbsd-x64": {
			"version": "0.21.5",
			"resolved": "https://registry.npmjs.org/@esbuild/openbsd-x64/-/openbsd-x64-0.21.5.tgz",
			"integrity": "sha512-HLNNw99xsvx12lFBUwoT8EVCsSvRNDVxNpjZ7bPn947b8gJPzeHWyNVhFsaerc0n3TsbOINvRP2byTZ5LKezow==",
			"cpu": [
				"x64"
			],
			"dev": true,
			"license": "MIT",
			"optional": true,
			"os": [
				"openbsd"
			],
			"engines": {
				"node": ">=12"
			}
		},
		"node_modules/vite/node_modules/@esbuild/sunos-x64": {
			"version": "0.21.5",
			"resolved": "https://registry.npmjs.org/@esbuild/sunos-x64/-/sunos-x64-0.21.5.tgz",
			"integrity": "sha512-6+gjmFpfy0BHU5Tpptkuh8+uw3mnrvgs+dSPQXQOv3ekbordwnzTVEb4qnIvQcYXq6gzkyTnoZ9dZG+D4garKg==",
			"cpu": [
				"x64"
			],
			"dev": true,
			"license": "MIT",
			"optional": true,
			"os": [
				"sunos"
			],
			"engines": {
				"node": ">=12"
			}
		},
		"node_modules/vite/node_modules/@esbuild/win32-arm64": {
			"version": "0.21.5",
			"resolved": "https://registry.npmjs.org/@esbuild/win32-arm64/-/win32-arm64-0.21.5.tgz",
			"integrity": "sha512-Z0gOTd75VvXqyq7nsl93zwahcTROgqvuAcYDUr+vOv8uHhNSKROyU961kgtCD1e95IqPKSQKH7tBTslnS3tA8A==",
			"cpu": [
				"arm64"
			],
			"dev": true,
			"license": "MIT",
			"optional": true,
			"os": [
				"win32"
			],
			"engines": {
				"node": ">=12"
			}
		},
		"node_modules/vite/node_modules/@esbuild/win32-ia32": {
			"version": "0.21.5",
			"resolved": "https://registry.npmjs.org/@esbuild/win32-ia32/-/win32-ia32-0.21.5.tgz",
			"integrity": "sha512-SWXFF1CL2RVNMaVs+BBClwtfZSvDgtL//G/smwAc5oVK/UPu2Gu9tIaRgFmYFFKrmg3SyAjSrElf0TiJ1v8fYA==",
			"cpu": [
				"ia32"
			],
			"dev": true,
			"license": "MIT",
			"optional": true,
			"os": [
				"win32"
			],
			"engines": {
				"node": ">=12"
			}
		},
		"node_modules/vite/node_modules/@esbuild/win32-x64": {
			"version": "0.21.5",
			"resolved": "https://registry.npmjs.org/@esbuild/win32-x64/-/win32-x64-0.21.5.tgz",
			"integrity": "sha512-tQd/1efJuzPC6rCFwEvLtci/xNFcTZknmXs98FYDfGE4wP9ClFV98nyKrzJKVPMhdDnjzLhdUyMX4PsQAPjwIw==",
			"cpu": [
				"x64"
			],
			"dev": true,
			"license": "MIT",
			"optional": true,
			"os": [
				"win32"
			],
			"engines": {
				"node": ">=12"
			}
		},
		"node_modules/vite/node_modules/esbuild": {
			"version": "0.21.5",
			"resolved": "https://registry.npmjs.org/esbuild/-/esbuild-0.21.5.tgz",
			"integrity": "sha512-mg3OPMV4hXywwpoDxu3Qda5xCKQi+vCTZq8S9J/EpkhB2HzKXq4SNFZE3+NK93JYxc8VMSep+lOUSC/RVKaBqw==",
			"dev": true,
			"hasInstallScript": true,
			"license": "MIT",
			"bin": {
				"esbuild": "bin/esbuild"
			},
			"engines": {
				"node": ">=12"
			},
			"optionalDependencies": {
				"@esbuild/aix-ppc64": "0.21.5",
				"@esbuild/android-arm": "0.21.5",
				"@esbuild/android-arm64": "0.21.5",
				"@esbuild/android-x64": "0.21.5",
				"@esbuild/darwin-arm64": "0.21.5",
				"@esbuild/darwin-x64": "0.21.5",
				"@esbuild/freebsd-arm64": "0.21.5",
				"@esbuild/freebsd-x64": "0.21.5",
				"@esbuild/linux-arm": "0.21.5",
				"@esbuild/linux-arm64": "0.21.5",
				"@esbuild/linux-ia32": "0.21.5",
				"@esbuild/linux-loong64": "0.21.5",
				"@esbuild/linux-mips64el": "0.21.5",
				"@esbuild/linux-ppc64": "0.21.5",
				"@esbuild/linux-riscv64": "0.21.5",
				"@esbuild/linux-s390x": "0.21.5",
				"@esbuild/linux-x64": "0.21.5",
				"@esbuild/netbsd-x64": "0.21.5",
				"@esbuild/openbsd-x64": "0.21.5",
				"@esbuild/sunos-x64": "0.21.5",
				"@esbuild/win32-arm64": "0.21.5",
				"@esbuild/win32-ia32": "0.21.5",
				"@esbuild/win32-x64": "0.21.5"
			}
		},
		"node_modules/watchpack": {
			"version": "2.4.1",
			"resolved": "https://registry.npmjs.org/watchpack/-/watchpack-2.4.1.tgz",
			"integrity": "sha512-8wrBCMtVhqcXP2Sup1ctSkga6uc2Bx0IIvKyT7yTFier5AXHooSI+QyQQAtTb7+E0IUCCKyTFmXqdqgum2XWGg==",
			"dev": true,
			"license": "MIT",
			"dependencies": {
				"glob-to-regexp": "^0.4.1",
				"graceful-fs": "^4.1.2"
			},
			"engines": {
				"node": ">=10.13.0"
			}
		},
		"node_modules/wbuf": {
			"version": "1.7.3",
			"resolved": "https://registry.npmjs.org/wbuf/-/wbuf-1.7.3.tgz",
			"integrity": "sha512-O84QOnr0icsbFGLS0O3bI5FswxzRr8/gHwWkDlQFskhSPryQXvrTMxjxGP4+iWYoauLoBvfDpkrOauZ+0iZpDA==",
			"dev": true,
			"license": "MIT",
			"dependencies": {
				"minimalistic-assert": "^1.0.0"
			}
		},
		"node_modules/wcwidth": {
			"version": "1.0.1",
			"resolved": "https://registry.npmjs.org/wcwidth/-/wcwidth-1.0.1.tgz",
			"integrity": "sha512-XHPEwS0q6TaxcvG85+8EYkbiCux2XtWG2mkc47Ng2A77BQu9+DqIOJldST4HgPkuea7dvKSj5VgX3P1d4rW8Tg==",
			"dev": true,
			"license": "MIT",
			"dependencies": {
				"defaults": "^1.0.3"
			}
		},
		"node_modules/weak-lru-cache": {
			"version": "1.2.2",
			"resolved": "https://registry.npmjs.org/weak-lru-cache/-/weak-lru-cache-1.2.2.tgz",
			"integrity": "sha512-DEAoo25RfSYMuTGc9vPJzZcZullwIqRDSI9LOy+fkCJPi6hykCnfKaXTuPBDuXAUcqHXyOgFtHNp/kB2FjYHbw==",
			"dev": true,
			"license": "MIT"
		},
		"node_modules/webpack": {
			"version": "5.94.0",
			"resolved": "https://registry.npmjs.org/webpack/-/webpack-5.94.0.tgz",
			"integrity": "sha512-KcsGn50VT+06JH/iunZJedYGUJS5FGjow8wb9c0v5n1Om8O1g4L6LjtfxwlXIATopoQu+vOXXa7gYisWxCoPyg==",
			"dev": true,
			"license": "MIT",
			"dependencies": {
				"@types/estree": "^1.0.5",
				"@webassemblyjs/ast": "^1.12.1",
				"@webassemblyjs/wasm-edit": "^1.12.1",
				"@webassemblyjs/wasm-parser": "^1.12.1",
				"acorn": "^8.7.1",
				"acorn-import-attributes": "^1.9.5",
				"browserslist": "^4.21.10",
				"chrome-trace-event": "^1.0.2",
				"enhanced-resolve": "^5.17.1",
				"es-module-lexer": "^1.2.1",
				"eslint-scope": "5.1.1",
				"events": "^3.2.0",
				"glob-to-regexp": "^0.4.1",
				"graceful-fs": "^4.2.11",
				"json-parse-even-better-errors": "^2.3.1",
				"loader-runner": "^4.2.0",
				"mime-types": "^2.1.27",
				"neo-async": "^2.6.2",
				"schema-utils": "^3.2.0",
				"tapable": "^2.1.1",
				"terser-webpack-plugin": "^5.3.10",
				"watchpack": "^2.4.1",
				"webpack-sources": "^3.2.3"
			},
			"bin": {
				"webpack": "bin/webpack.js"
			},
			"engines": {
				"node": ">=10.13.0"
			},
			"funding": {
				"type": "opencollective",
				"url": "https://opencollective.com/webpack"
			},
			"peerDependenciesMeta": {
				"webpack-cli": {
					"optional": true
				}
			}
		},
		"node_modules/webpack-dev-middleware": {
			"version": "7.3.0",
			"resolved": "https://registry.npmjs.org/webpack-dev-middleware/-/webpack-dev-middleware-7.3.0.tgz",
			"integrity": "sha512-xD2qnNew+F6KwOGZR7kWdbIou/ud7cVqLEXeK1q0nHcNsX/u7ul/fSdlOTX4ntSL5FNFy7ZJJXbf0piF591JYw==",
			"dev": true,
			"license": "MIT",
			"dependencies": {
				"colorette": "^2.0.10",
				"memfs": "^4.6.0",
				"mime-types": "^2.1.31",
				"on-finished": "^2.4.1",
				"range-parser": "^1.2.1",
				"schema-utils": "^4.0.0"
			},
			"engines": {
				"node": ">= 18.12.0"
			},
			"funding": {
				"type": "opencollective",
				"url": "https://opencollective.com/webpack"
			},
			"peerDependencies": {
				"webpack": "^5.0.0"
			},
			"peerDependenciesMeta": {
				"webpack": {
					"optional": true
				}
			}
		},
		"node_modules/webpack-dev-server": {
			"version": "5.0.4",
			"resolved": "https://registry.npmjs.org/webpack-dev-server/-/webpack-dev-server-5.0.4.tgz",
			"integrity": "sha512-dljXhUgx3HqKP2d8J/fUMvhxGhzjeNVarDLcbO/EWMSgRizDkxHQDZQaLFL5VJY9tRBj2Gz+rvCEYYvhbqPHNA==",
			"dev": true,
			"license": "MIT",
			"dependencies": {
				"@types/bonjour": "^3.5.13",
				"@types/connect-history-api-fallback": "^1.5.4",
				"@types/express": "^4.17.21",
				"@types/serve-index": "^1.9.4",
				"@types/serve-static": "^1.15.5",
				"@types/sockjs": "^0.3.36",
				"@types/ws": "^8.5.10",
				"ansi-html-community": "^0.0.8",
				"bonjour-service": "^1.2.1",
				"chokidar": "^3.6.0",
				"colorette": "^2.0.10",
				"compression": "^1.7.4",
				"connect-history-api-fallback": "^2.0.0",
				"default-gateway": "^6.0.3",
				"express": "^4.17.3",
				"graceful-fs": "^4.2.6",
				"html-entities": "^2.4.0",
				"http-proxy-middleware": "^2.0.3",
				"ipaddr.js": "^2.1.0",
				"launch-editor": "^2.6.1",
				"open": "^10.0.3",
				"p-retry": "^6.2.0",
				"rimraf": "^5.0.5",
				"schema-utils": "^4.2.0",
				"selfsigned": "^2.4.1",
				"serve-index": "^1.9.1",
				"sockjs": "^0.3.24",
				"spdy": "^4.0.2",
				"webpack-dev-middleware": "^7.1.0",
				"ws": "^8.16.0"
			},
			"bin": {
				"webpack-dev-server": "bin/webpack-dev-server.js"
			},
			"engines": {
				"node": ">= 18.12.0"
			},
			"funding": {
				"type": "opencollective",
				"url": "https://opencollective.com/webpack"
			},
			"peerDependencies": {
				"webpack": "^5.0.0"
			},
			"peerDependenciesMeta": {
				"webpack": {
					"optional": true
				},
				"webpack-cli": {
					"optional": true
				}
			}
		},
		"node_modules/webpack-dev-server/node_modules/http-proxy-middleware": {
			"version": "2.0.6",
			"resolved": "https://registry.npmjs.org/http-proxy-middleware/-/http-proxy-middleware-2.0.6.tgz",
			"integrity": "sha512-ya/UeJ6HVBYxrgYotAZo1KvPWlgB48kUJLDePFeneHsVujFaW5WNj2NgWCAE//B1Dl02BIfYlpNgBy8Kf8Rjmw==",
			"dev": true,
			"license": "MIT",
			"dependencies": {
				"@types/http-proxy": "^1.17.8",
				"http-proxy": "^1.18.1",
				"is-glob": "^4.0.1",
				"is-plain-obj": "^3.0.0",
				"micromatch": "^4.0.2"
			},
			"engines": {
				"node": ">=12.0.0"
			},
			"peerDependencies": {
				"@types/express": "^4.17.13"
			},
			"peerDependenciesMeta": {
				"@types/express": {
					"optional": true
				}
			}
		},
		"node_modules/webpack-merge": {
			"version": "6.0.1",
			"resolved": "https://registry.npmjs.org/webpack-merge/-/webpack-merge-6.0.1.tgz",
			"integrity": "sha512-hXXvrjtx2PLYx4qruKl+kyRSLc52V+cCvMxRjmKwoA+CBbbF5GfIBtR6kCvl0fYGqTUPKB+1ktVmTHqMOzgCBg==",
			"dev": true,
			"license": "MIT",
			"dependencies": {
				"clone-deep": "^4.0.1",
				"flat": "^5.0.2",
				"wildcard": "^2.0.1"
			},
			"engines": {
				"node": ">=18.0.0"
			}
		},
		"node_modules/webpack-sources": {
			"version": "3.2.3",
			"resolved": "https://registry.npmjs.org/webpack-sources/-/webpack-sources-3.2.3.tgz",
			"integrity": "sha512-/DyMEOrDgLKKIG0fmvtz+4dUX/3Ghozwgm6iPp8KRhvn+eQf9+Q7GWxVNMk3+uCPWfdXYC4ExGBckIXdFEfH1w==",
			"dev": true,
			"license": "MIT",
			"engines": {
				"node": ">=10.13.0"
			}
		},
		"node_modules/webpack-subresource-integrity": {
			"version": "5.1.0",
			"resolved": "https://registry.npmjs.org/webpack-subresource-integrity/-/webpack-subresource-integrity-5.1.0.tgz",
			"integrity": "sha512-sacXoX+xd8r4WKsy9MvH/q/vBtEHr86cpImXwyg74pFIpERKt6FmB8cXpeuh0ZLgclOlHI4Wcll7+R5L02xk9Q==",
			"dev": true,
			"license": "MIT",
			"dependencies": {
				"typed-assert": "^1.0.8"
			},
			"engines": {
				"node": ">= 12"
			},
			"peerDependencies": {
				"html-webpack-plugin": ">= 5.0.0-beta.1 < 6",
				"webpack": "^5.12.0"
			},
			"peerDependenciesMeta": {
				"html-webpack-plugin": {
					"optional": true
				}
			}
		},
		"node_modules/webpack/node_modules/ajv": {
			"version": "6.12.6",
			"resolved": "https://registry.npmjs.org/ajv/-/ajv-6.12.6.tgz",
			"integrity": "sha512-j3fVLgvTo527anyYyJOGTYJbG+vnnQYvE0m5mmkc1TK+nxAppkCLMIL0aZ4dblVCNoGShhm+kzE4ZUykBoMg4g==",
			"dev": true,
			"license": "MIT",
			"dependencies": {
				"fast-deep-equal": "^3.1.1",
				"fast-json-stable-stringify": "^2.0.0",
				"json-schema-traverse": "^0.4.1",
				"uri-js": "^4.2.2"
			},
			"funding": {
				"type": "github",
				"url": "https://github.com/sponsors/epoberezkin"
			}
		},
		"node_modules/webpack/node_modules/ajv-keywords": {
			"version": "3.5.2",
			"resolved": "https://registry.npmjs.org/ajv-keywords/-/ajv-keywords-3.5.2.tgz",
			"integrity": "sha512-5p6WTN0DdTGVQk6VjcEju19IgaHudalcfabD7yhDGeA6bcQnmL+CpveLJq/3hvfwd1aof6L386Ougkx6RfyMIQ==",
			"dev": true,
			"license": "MIT",
			"peerDependencies": {
				"ajv": "^6.9.1"
			}
		},
		"node_modules/webpack/node_modules/json-parse-even-better-errors": {
			"version": "2.3.1",
			"resolved": "https://registry.npmjs.org/json-parse-even-better-errors/-/json-parse-even-better-errors-2.3.1.tgz",
			"integrity": "sha512-xyFwyhro/JEof6Ghe2iz2NcXoj2sloNsWr/XsERDK/oiPCfaNhl5ONfp+jQdAZRQQ0IJWNzH9zIZF7li91kh2w==",
			"dev": true,
			"license": "MIT"
		},
		"node_modules/webpack/node_modules/json-schema-traverse": {
			"version": "0.4.1",
			"resolved": "https://registry.npmjs.org/json-schema-traverse/-/json-schema-traverse-0.4.1.tgz",
			"integrity": "sha512-xbbCH5dCYU5T8LcEhhuh7HJ88HXuW3qsI3Y0zOZFKfZEHcpWiHU/Jxzk629Brsab/mMiHQti9wMP+845RPe3Vg==",
			"dev": true,
			"license": "MIT"
		},
		"node_modules/webpack/node_modules/schema-utils": {
			"version": "3.3.0",
			"resolved": "https://registry.npmjs.org/schema-utils/-/schema-utils-3.3.0.tgz",
			"integrity": "sha512-pN/yOAvcC+5rQ5nERGuwrjLlYvLTbCibnZ1I7B1LaiAz9BRBlE9GMgE/eqV30P7aJQUf7Ddimy/RsbYO/GrVGg==",
			"dev": true,
			"license": "MIT",
			"dependencies": {
				"@types/json-schema": "^7.0.8",
				"ajv": "^6.12.5",
				"ajv-keywords": "^3.5.2"
			},
			"engines": {
				"node": ">= 10.13.0"
			},
			"funding": {
				"type": "opencollective",
				"url": "https://opencollective.com/webpack"
			}
		},
		"node_modules/websocket-driver": {
			"version": "0.7.4",
			"resolved": "https://registry.npmjs.org/websocket-driver/-/websocket-driver-0.7.4.tgz",
			"integrity": "sha512-b17KeDIQVjvb0ssuSDF2cYXSg2iztliJ4B9WdsuB6J952qCPKmnVq4DyW5motImXHDC1cBT/1UezrJVsKw5zjg==",
			"dev": true,
			"license": "Apache-2.0",
			"dependencies": {
				"http-parser-js": ">=0.5.1",
				"safe-buffer": ">=5.1.0",
				"websocket-extensions": ">=0.1.1"
			},
			"engines": {
				"node": ">=0.8.0"
			}
		},
		"node_modules/websocket-extensions": {
			"version": "0.1.4",
			"resolved": "https://registry.npmjs.org/websocket-extensions/-/websocket-extensions-0.1.4.tgz",
			"integrity": "sha512-OqedPIGOfsDlo31UNwYbCFMSaO9m9G/0faIHj5/dZFDMFqPTcx6UwqyOy3COEaEOg/9VsGIpdqn62W5KhoKSpg==",
			"dev": true,
			"license": "Apache-2.0",
			"engines": {
				"node": ">=0.8.0"
			}
		},
		"node_modules/which": {
			"version": "4.0.0",
			"resolved": "https://registry.npmjs.org/which/-/which-4.0.0.tgz",
			"integrity": "sha512-GlaYyEb07DPxYCKhKzplCWBJtvxZcZMrL+4UkrTSJHHPyZU4mYYTv3qaOe77H7EODLSSopAUFAc6W8U4yqvscg==",
			"dev": true,
			"license": "ISC",
			"dependencies": {
				"isexe": "^3.1.1"
			},
			"bin": {
				"node-which": "bin/which.js"
			},
			"engines": {
				"node": "^16.13.0 || >=18.0.0"
			}
		},
		"node_modules/wildcard": {
			"version": "2.0.1",
			"resolved": "https://registry.npmjs.org/wildcard/-/wildcard-2.0.1.tgz",
			"integrity": "sha512-CC1bOL87PIWSBhDcTrdeLo6eGT7mCFtrg0uIJtqJUFyK+eJnzl8A1niH56uu7KMa5XFrtiV+AQuHO3n7DsHnLQ==",
			"dev": true,
			"license": "MIT"
		},
		"node_modules/wrap-ansi": {
			"version": "6.2.0",
			"resolved": "https://registry.npmjs.org/wrap-ansi/-/wrap-ansi-6.2.0.tgz",
			"integrity": "sha512-r6lPcBGxZXlIcymEu7InxDMhdW0KDxpLgoFLcguasxCaJ/SOIZwINatK9KY/tf+ZrlywOKU0UDj3ATXUBfxJXA==",
			"dev": true,
			"license": "MIT",
			"dependencies": {
				"ansi-styles": "^4.0.0",
				"string-width": "^4.1.0",
				"strip-ansi": "^6.0.0"
			},
			"engines": {
				"node": ">=8"
			}
		},
		"node_modules/wrap-ansi-cjs": {
			"name": "wrap-ansi",
			"version": "7.0.0",
			"resolved": "https://registry.npmjs.org/wrap-ansi/-/wrap-ansi-7.0.0.tgz",
			"integrity": "sha512-YVGIj2kamLSTxw6NsZjoBxfSwsn0ycdesmc4p+Q21c5zPuZ1pl+NfxVdxPtdHvmNVOQ6XSYG4AUtyt/Fi7D16Q==",
			"dev": true,
			"license": "MIT",
			"dependencies": {
				"ansi-styles": "^4.0.0",
				"string-width": "^4.1.0",
				"strip-ansi": "^6.0.0"
			},
			"engines": {
				"node": ">=10"
			},
			"funding": {
				"url": "https://github.com/chalk/wrap-ansi?sponsor=1"
			}
		},
		"node_modules/wrap-ansi-cjs/node_modules/ansi-styles": {
			"version": "4.3.0",
			"resolved": "https://registry.npmjs.org/ansi-styles/-/ansi-styles-4.3.0.tgz",
			"integrity": "sha512-zbB9rCJAT1rbjiVDb2hqKFHNYLxgtk8NURxZ3IZwD3F6NtxbXZQCnnSi1Lkx+IDohdPlFp222wVALIheZJQSEg==",
			"dev": true,
			"license": "MIT",
			"dependencies": {
				"color-convert": "^2.0.1"
			},
			"engines": {
				"node": ">=8"
			},
			"funding": {
				"url": "https://github.com/chalk/ansi-styles?sponsor=1"
			}
		},
		"node_modules/wrap-ansi-cjs/node_modules/color-convert": {
			"version": "2.0.1",
			"resolved": "https://registry.npmjs.org/color-convert/-/color-convert-2.0.1.tgz",
			"integrity": "sha512-RRECPsj7iu/xb5oKYcsFHSppFNnsj/52OVTRKb4zP5onXwVF3zVmmToNcOfGC+CRDpfK/U584fMg38ZHCaElKQ==",
			"dev": true,
			"license": "MIT",
			"dependencies": {
				"color-name": "~1.1.4"
			},
			"engines": {
				"node": ">=7.0.0"
			}
		},
		"node_modules/wrap-ansi-cjs/node_modules/color-name": {
			"version": "1.1.4",
			"resolved": "https://registry.npmjs.org/color-name/-/color-name-1.1.4.tgz",
			"integrity": "sha512-dOy+3AuW3a2wNbZHIuMZpTcgjGuLU/uBL/ubcZF9OXbDo8ff4O8yVp5Bf0efS8uEoYo5q4Fx7dY9OgQGXgAsQA==",
			"dev": true,
			"license": "MIT"
		},
		"node_modules/wrap-ansi-cjs/node_modules/emoji-regex": {
			"version": "8.0.0",
			"resolved": "https://registry.npmjs.org/emoji-regex/-/emoji-regex-8.0.0.tgz",
			"integrity": "sha512-MSjYzcWNOA0ewAHpz0MxpYFvwg6yjy1NG3xteoqz644VCo/RPgnr1/GGt+ic3iJTzQ8Eu3TdM14SawnVUmGE6A==",
			"dev": true,
			"license": "MIT"
		},
		"node_modules/wrap-ansi-cjs/node_modules/is-fullwidth-code-point": {
			"version": "3.0.0",
			"resolved": "https://registry.npmjs.org/is-fullwidth-code-point/-/is-fullwidth-code-point-3.0.0.tgz",
			"integrity": "sha512-zymm5+u+sCsSWyD9qNaejV3DFvhCKclKdizYaJUuHA83RLjb7nSuGnddCHGv0hk+KY7BMAlsWeK4Ueg6EV6XQg==",
			"dev": true,
			"license": "MIT",
			"engines": {
				"node": ">=8"
			}
		},
		"node_modules/wrap-ansi-cjs/node_modules/string-width": {
			"version": "4.2.3",
			"resolved": "https://registry.npmjs.org/string-width/-/string-width-4.2.3.tgz",
			"integrity": "sha512-wKyQRQpjJ0sIp62ErSZdGsjMJWsap5oRNihHhu6G7JVO/9jIB6UyevL+tXuOqrng8j/cxKTWyWUwvSTriiZz/g==",
			"dev": true,
			"license": "MIT",
			"dependencies": {
				"emoji-regex": "^8.0.0",
				"is-fullwidth-code-point": "^3.0.0",
				"strip-ansi": "^6.0.1"
			},
			"engines": {
				"node": ">=8"
			}
		},
		"node_modules/wrap-ansi/node_modules/ansi-styles": {
			"version": "4.3.0",
			"resolved": "https://registry.npmjs.org/ansi-styles/-/ansi-styles-4.3.0.tgz",
			"integrity": "sha512-zbB9rCJAT1rbjiVDb2hqKFHNYLxgtk8NURxZ3IZwD3F6NtxbXZQCnnSi1Lkx+IDohdPlFp222wVALIheZJQSEg==",
			"dev": true,
			"license": "MIT",
			"dependencies": {
				"color-convert": "^2.0.1"
			},
			"engines": {
				"node": ">=8"
			},
			"funding": {
				"url": "https://github.com/chalk/ansi-styles?sponsor=1"
			}
		},
		"node_modules/wrap-ansi/node_modules/color-convert": {
			"version": "2.0.1",
			"resolved": "https://registry.npmjs.org/color-convert/-/color-convert-2.0.1.tgz",
			"integrity": "sha512-RRECPsj7iu/xb5oKYcsFHSppFNnsj/52OVTRKb4zP5onXwVF3zVmmToNcOfGC+CRDpfK/U584fMg38ZHCaElKQ==",
			"dev": true,
			"license": "MIT",
			"dependencies": {
				"color-name": "~1.1.4"
			},
			"engines": {
				"node": ">=7.0.0"
			}
		},
		"node_modules/wrap-ansi/node_modules/color-name": {
			"version": "1.1.4",
			"resolved": "https://registry.npmjs.org/color-name/-/color-name-1.1.4.tgz",
			"integrity": "sha512-dOy+3AuW3a2wNbZHIuMZpTcgjGuLU/uBL/ubcZF9OXbDo8ff4O8yVp5Bf0efS8uEoYo5q4Fx7dY9OgQGXgAsQA==",
			"dev": true,
			"license": "MIT"
		},
		"node_modules/wrap-ansi/node_modules/emoji-regex": {
			"version": "8.0.0",
			"resolved": "https://registry.npmjs.org/emoji-regex/-/emoji-regex-8.0.0.tgz",
			"integrity": "sha512-MSjYzcWNOA0ewAHpz0MxpYFvwg6yjy1NG3xteoqz644VCo/RPgnr1/GGt+ic3iJTzQ8Eu3TdM14SawnVUmGE6A==",
			"dev": true,
			"license": "MIT"
		},
		"node_modules/wrap-ansi/node_modules/is-fullwidth-code-point": {
			"version": "3.0.0",
			"resolved": "https://registry.npmjs.org/is-fullwidth-code-point/-/is-fullwidth-code-point-3.0.0.tgz",
			"integrity": "sha512-zymm5+u+sCsSWyD9qNaejV3DFvhCKclKdizYaJUuHA83RLjb7nSuGnddCHGv0hk+KY7BMAlsWeK4Ueg6EV6XQg==",
			"dev": true,
			"license": "MIT",
			"engines": {
				"node": ">=8"
			}
		},
		"node_modules/wrap-ansi/node_modules/string-width": {
			"version": "4.2.3",
			"resolved": "https://registry.npmjs.org/string-width/-/string-width-4.2.3.tgz",
			"integrity": "sha512-wKyQRQpjJ0sIp62ErSZdGsjMJWsap5oRNihHhu6G7JVO/9jIB6UyevL+tXuOqrng8j/cxKTWyWUwvSTriiZz/g==",
			"dev": true,
			"license": "MIT",
			"dependencies": {
				"emoji-regex": "^8.0.0",
				"is-fullwidth-code-point": "^3.0.0",
				"strip-ansi": "^6.0.1"
			},
			"engines": {
				"node": ">=8"
			}
		},
		"node_modules/ws": {
			"version": "8.18.0",
			"resolved": "https://registry.npmjs.org/ws/-/ws-8.18.0.tgz",
			"integrity": "sha512-8VbfWfHLbbwu3+N6OKsOMpBdT4kXPDDB9cJk2bJ6mh9ucxdlnNvH1e+roYkKmN9Nxw2yjz7VzeO9oOz2zJ04Pw==",
			"dev": true,
			"license": "MIT",
			"engines": {
				"node": ">=10.0.0"
			},
			"peerDependencies": {
				"bufferutil": "^4.0.1",
				"utf-8-validate": ">=5.0.2"
			},
			"peerDependenciesMeta": {
				"bufferutil": {
					"optional": true
				},
				"utf-8-validate": {
					"optional": true
				}
			}
		},
		"node_modules/y18n": {
			"version": "5.0.8",
			"resolved": "https://registry.npmjs.org/y18n/-/y18n-5.0.8.tgz",
			"integrity": "sha512-0pfFzegeDWJHJIAmTLRP2DwHjdF5s7jo9tuztdQxAhINCdvS+3nGINqPd00AphqJR/0LhANUS6/+7SCb98YOfA==",
			"dev": true,
			"license": "ISC",
			"engines": {
				"node": ">=10"
			}
		},
		"node_modules/yallist": {
			"version": "3.1.1",
			"resolved": "https://registry.npmjs.org/yallist/-/yallist-3.1.1.tgz",
			"integrity": "sha512-a4UGQaWPH59mOXUYnAG2ewncQS4i4F43Tv3JoAM+s2VDAmS9NsK8GpDMLrCHPksFT7h3K6TOoUNn2pb7RoXx4g==",
			"dev": true,
			"license": "ISC"
		},
		"node_modules/yaml": {
			"version": "2.5.0",
			"resolved": "https://registry.npmjs.org/yaml/-/yaml-2.5.0.tgz",
			"integrity": "sha512-2wWLbGbYDiSqqIKoPjar3MPgB94ErzCtrNE1FdqGuaO0pi2JGjmE8aW8TDZwzU7vuxcGRdL/4gPQwQ7hD5AMSw==",
			"dev": true,
			"license": "ISC",
			"bin": {
				"yaml": "bin.mjs"
			},
			"engines": {
				"node": ">= 14"
			}
		},
		"node_modules/yargs": {
			"version": "17.7.2",
			"resolved": "https://registry.npmjs.org/yargs/-/yargs-17.7.2.tgz",
			"integrity": "sha512-7dSzzRQ++CKnNI/krKnYRV7JKKPUXMEh61soaHKg9mrWEhzFWhFnxPxGl+69cD1Ou63C13NUPCnmIcrvqCuM6w==",
			"dev": true,
			"license": "MIT",
			"dependencies": {
				"cliui": "^8.0.1",
				"escalade": "^3.1.1",
				"get-caller-file": "^2.0.5",
				"require-directory": "^2.1.1",
				"string-width": "^4.2.3",
				"y18n": "^5.0.5",
				"yargs-parser": "^21.1.1"
			},
			"engines": {
				"node": ">=12"
			}
		},
		"node_modules/yargs-parser": {
			"version": "21.1.1",
			"resolved": "https://registry.npmjs.org/yargs-parser/-/yargs-parser-21.1.1.tgz",
			"integrity": "sha512-tVpsJW7DdjecAiFpbIB1e3qxIQsE6NoPc5/eTdrbbIC4h0LVsWhnoa3g+m2HclBIujHzsxZ4VJVA+GUuc2/LBw==",
			"dev": true,
			"license": "ISC",
			"engines": {
				"node": ">=12"
			}
		},
		"node_modules/yargs/node_modules/emoji-regex": {
			"version": "8.0.0",
			"resolved": "https://registry.npmjs.org/emoji-regex/-/emoji-regex-8.0.0.tgz",
			"integrity": "sha512-MSjYzcWNOA0ewAHpz0MxpYFvwg6yjy1NG3xteoqz644VCo/RPgnr1/GGt+ic3iJTzQ8Eu3TdM14SawnVUmGE6A==",
			"dev": true,
			"license": "MIT"
		},
		"node_modules/yargs/node_modules/is-fullwidth-code-point": {
			"version": "3.0.0",
			"resolved": "https://registry.npmjs.org/is-fullwidth-code-point/-/is-fullwidth-code-point-3.0.0.tgz",
			"integrity": "sha512-zymm5+u+sCsSWyD9qNaejV3DFvhCKclKdizYaJUuHA83RLjb7nSuGnddCHGv0hk+KY7BMAlsWeK4Ueg6EV6XQg==",
			"dev": true,
			"license": "MIT",
			"engines": {
				"node": ">=8"
			}
		},
		"node_modules/yargs/node_modules/string-width": {
			"version": "4.2.3",
			"resolved": "https://registry.npmjs.org/string-width/-/string-width-4.2.3.tgz",
			"integrity": "sha512-wKyQRQpjJ0sIp62ErSZdGsjMJWsap5oRNihHhu6G7JVO/9jIB6UyevL+tXuOqrng8j/cxKTWyWUwvSTriiZz/g==",
			"dev": true,
			"license": "MIT",
			"dependencies": {
				"emoji-regex": "^8.0.0",
				"is-fullwidth-code-point": "^3.0.0",
				"strip-ansi": "^6.0.1"
			},
			"engines": {
				"node": ">=8"
			}
		},
		"node_modules/yocto-queue": {
			"version": "1.1.1",
			"resolved": "https://registry.npmjs.org/yocto-queue/-/yocto-queue-1.1.1.tgz",
			"integrity": "sha512-b4JR1PFR10y1mKjhHY9LaGo6tmrgjit7hxVIeAmyMw3jegXR4dhYqLaQF5zMXZxY7tLpMyJeLjr1C4rLmkVe8g==",
			"dev": true,
			"license": "MIT",
			"engines": {
				"node": ">=12.20"
			},
			"funding": {
				"url": "https://github.com/sponsors/sindresorhus"
			}
		},
		"node_modules/yoctocolors-cjs": {
			"version": "2.1.2",
			"resolved": "https://registry.npmjs.org/yoctocolors-cjs/-/yoctocolors-cjs-2.1.2.tgz",
			"integrity": "sha512-cYVsTjKl8b+FrnidjibDWskAv7UKOfcwaVZdp/it9n1s9fU3IkgDbhdIRKCW4JDsAlECJY0ytoVPT3sK6kideA==",
			"dev": true,
			"license": "MIT",
			"engines": {
				"node": ">=18"
			},
			"funding": {
				"url": "https://github.com/sponsors/sindresorhus"
			}
		},
		"node_modules/zone.js": {
			"version": "0.14.10",
			"resolved": "https://registry.npmjs.org/zone.js/-/zone.js-0.14.10.tgz",
			"integrity": "sha512-YGAhaO7J5ywOXW6InXNlLmfU194F8lVgu7bRntUF3TiG8Y3nBK0x1UJJuHUP/e8IyihkjCYqhCScpSwnlaSRkQ==",
			"dev": true,
			"license": "MIT"
		}
	}
}
`;export{t as default};