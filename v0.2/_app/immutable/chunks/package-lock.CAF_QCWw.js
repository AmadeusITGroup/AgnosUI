const t=`{
	"name": "agnos-ui-angular-stackblitz-demo",
	"lockfileVersion": 3,
	"requires": true,
	"packages": {
		"": {
			"name": "agnos-ui-angular-stackblitz-demo",
			"devDependencies": {
				"@amadeus-it-group/tansu": "1.0.0",
				"@angular-devkit/build-angular": "~17.2.2",
				"@angular/animations": "~17.2.3",
				"@angular/cli": "~17.2.2",
				"@angular/common": "~17.2.3",
				"@angular/compiler": "~17.2.3",
				"@angular/compiler-cli": "~17.2.3",
				"@angular/core": "~17.2.3",
				"@angular/forms": "~17.2.3",
				"@angular/platform-browser": "~17.2.3",
				"@angular/platform-browser-dynamic": "~17.2.3",
				"@angular/router": "~17.2.3",
				"@floating-ui/dom": "^1.6.3",
				"bootstrap-icons": "^1.11.3",
				"rxjs": "^7.8.1",
				"tslib": "^2.6.2",
				"typescript": "~5.3.3",
				"zone.js": "~0.14.4"
			}
		},
		"node_modules/@amadeus-it-group/tansu": {
			"version": "1.0.0",
			"resolved": "https://registry.npmjs.org/@amadeus-it-group/tansu/-/tansu-1.0.0.tgz",
			"integrity": "sha512-JXR89NVtWT8rn7prB9j7/x/n/IxiWJEXhRWztyocrzb+M9hEhvIESeIE3mpSbrWRmDTyWvdpDCnOvKJ5/W8APQ==",
			"dev": true
		},
		"node_modules/@ampproject/remapping": {
			"version": "2.2.1",
			"resolved": "https://registry.npmjs.org/@ampproject/remapping/-/remapping-2.2.1.tgz",
			"integrity": "sha512-lFMjJTrFL3j7L9yBxwYfCq2k6qqwHyzuUl/XBnif78PWTJYyL/dfowQHWE3sp6U6ZzqWiiIZnpTMO96zhkjwtg==",
			"dev": true,
			"dependencies": {
				"@jridgewell/gen-mapping": "^0.3.0",
				"@jridgewell/trace-mapping": "^0.3.9"
			},
			"engines": {
				"node": ">=6.0.0"
			}
		},
		"node_modules/@angular-devkit/architect": {
			"version": "0.1702.2",
			"resolved": "https://registry.npmjs.org/@angular-devkit/architect/-/architect-0.1702.2.tgz",
			"integrity": "sha512-qBvif8/NquFUqVQgs4U+8wXh/rQZv+YlYwg6eDZly1bIaTd/k9spko/seTtNT1OpK/Be+GLo5IbiQ7i2SON3iQ==",
			"dev": true,
			"dependencies": {
				"@angular-devkit/core": "17.2.2",
				"rxjs": "7.8.1"
			},
			"engines": {
				"node": "^18.13.0 || >=20.9.0",
				"npm": "^6.11.0 || ^7.5.6 || >=8.0.0",
				"yarn": ">= 1.13.0"
			}
		},
		"node_modules/@angular-devkit/build-angular": {
			"version": "17.2.2",
			"resolved": "https://registry.npmjs.org/@angular-devkit/build-angular/-/build-angular-17.2.2.tgz",
			"integrity": "sha512-K55xBiWBfxD4wmxLR2viOPbBryOk6YaZeNr72IMkp1yIrIy1BES6LDJi7R9fDW7+TprqZdM4B91Tkc+BCwYQzQ==",
			"dev": true,
			"dependencies": {
				"@ampproject/remapping": "2.2.1",
				"@angular-devkit/architect": "0.1702.2",
				"@angular-devkit/build-webpack": "0.1702.2",
				"@angular-devkit/core": "17.2.2",
				"@babel/core": "7.23.9",
				"@babel/generator": "7.23.6",
				"@babel/helper-annotate-as-pure": "7.22.5",
				"@babel/helper-split-export-declaration": "7.22.6",
				"@babel/plugin-transform-async-generator-functions": "7.23.9",
				"@babel/plugin-transform-async-to-generator": "7.23.3",
				"@babel/plugin-transform-runtime": "7.23.9",
				"@babel/preset-env": "7.23.9",
				"@babel/runtime": "7.23.9",
				"@discoveryjs/json-ext": "0.5.7",
				"@ngtools/webpack": "17.2.2",
				"@vitejs/plugin-basic-ssl": "1.1.0",
				"ansi-colors": "4.1.3",
				"autoprefixer": "10.4.17",
				"babel-loader": "9.1.3",
				"babel-plugin-istanbul": "6.1.1",
				"browserslist": "^4.21.5",
				"copy-webpack-plugin": "11.0.0",
				"critters": "0.0.20",
				"css-loader": "6.10.0",
				"esbuild-wasm": "0.20.0",
				"fast-glob": "3.3.2",
				"http-proxy-middleware": "2.0.6",
				"https-proxy-agent": "7.0.2",
				"inquirer": "9.2.14",
				"jsonc-parser": "3.2.1",
				"karma-source-map-support": "1.4.0",
				"less": "4.2.0",
				"less-loader": "11.1.0",
				"license-webpack-plugin": "4.0.2",
				"loader-utils": "3.2.1",
				"magic-string": "0.30.7",
				"mini-css-extract-plugin": "2.8.0",
				"mrmime": "2.0.0",
				"open": "8.4.2",
				"ora": "5.4.1",
				"parse5-html-rewriting-stream": "7.0.0",
				"picomatch": "4.0.1",
				"piscina": "4.3.1",
				"postcss": "8.4.35",
				"postcss-loader": "8.1.0",
				"resolve-url-loader": "5.0.0",
				"rxjs": "7.8.1",
				"sass": "1.70.0",
				"sass-loader": "14.1.0",
				"semver": "7.6.0",
				"source-map-loader": "5.0.0",
				"source-map-support": "0.5.21",
				"terser": "5.27.0",
				"tree-kill": "1.2.2",
				"tslib": "2.6.2",
				"undici": "6.6.2",
				"vite": "5.0.12",
				"watchpack": "2.4.0",
				"webpack": "5.90.1",
				"webpack-dev-middleware": "6.1.1",
				"webpack-dev-server": "4.15.1",
				"webpack-merge": "5.10.0",
				"webpack-subresource-integrity": "5.1.0"
			},
			"engines": {
				"node": "^18.13.0 || >=20.9.0",
				"npm": "^6.11.0 || ^7.5.6 || >=8.0.0",
				"yarn": ">= 1.13.0"
			},
			"optionalDependencies": {
				"esbuild": "0.20.0"
			},
			"peerDependencies": {
				"@angular/compiler-cli": "^17.0.0",
				"@angular/localize": "^17.0.0",
				"@angular/platform-server": "^17.0.0",
				"@angular/service-worker": "^17.0.0",
				"@web/test-runner": "^0.18.0",
				"browser-sync": "^3.0.2",
				"jest": "^29.5.0",
				"jest-environment-jsdom": "^29.5.0",
				"karma": "^6.3.0",
				"ng-packagr": "^17.0.0",
				"protractor": "^7.0.0",
				"tailwindcss": "^2.0.0 || ^3.0.0",
				"typescript": ">=5.2 <5.4"
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
		"node_modules/@angular-devkit/build-webpack": {
			"version": "0.1702.2",
			"resolved": "https://registry.npmjs.org/@angular-devkit/build-webpack/-/build-webpack-0.1702.2.tgz",
			"integrity": "sha512-+c7rHD2Se1VD9i9uPEYHqhq8hTnsUAn5LfeJCLS8g7FU8T42tDSC/k1qWxHp7d99kf7ecg2BvYcZDlYaBUnl3A==",
			"dev": true,
			"dependencies": {
				"@angular-devkit/architect": "0.1702.2",
				"rxjs": "7.8.1"
			},
			"engines": {
				"node": "^18.13.0 || >=20.9.0",
				"npm": "^6.11.0 || ^7.5.6 || >=8.0.0",
				"yarn": ">= 1.13.0"
			},
			"peerDependencies": {
				"webpack": "^5.30.0",
				"webpack-dev-server": "^4.0.0"
			}
		},
		"node_modules/@angular-devkit/core": {
			"version": "17.2.2",
			"resolved": "https://registry.npmjs.org/@angular-devkit/core/-/core-17.2.2.tgz",
			"integrity": "sha512-bKMi6bBkEeN4a3qTxCykhrAvE0ESHhKO38Qh1bN/8QSyvKVAEyVAVls5W9IN5GKRHvXgEn9aw+DSzRnPpy9nyw==",
			"dev": true,
			"dependencies": {
				"ajv": "8.12.0",
				"ajv-formats": "2.1.1",
				"jsonc-parser": "3.2.1",
				"picomatch": "4.0.1",
				"rxjs": "7.8.1",
				"source-map": "0.7.4"
			},
			"engines": {
				"node": "^18.13.0 || >=20.9.0",
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
			"version": "17.2.2",
			"resolved": "https://registry.npmjs.org/@angular-devkit/schematics/-/schematics-17.2.2.tgz",
			"integrity": "sha512-t6dBhHvto9BEIo+Kew0+YyIS3TV1SEd4MActUk+zF4NNQyJ8wRUHL+8glUKB6ZWPyCTYSinJ+QKn/3yytELTHg==",
			"dev": true,
			"dependencies": {
				"@angular-devkit/core": "17.2.2",
				"jsonc-parser": "3.2.1",
				"magic-string": "0.30.7",
				"ora": "5.4.1",
				"rxjs": "7.8.1"
			},
			"engines": {
				"node": "^18.13.0 || >=20.9.0",
				"npm": "^6.11.0 || ^7.5.6 || >=8.0.0",
				"yarn": ">= 1.13.0"
			}
		},
		"node_modules/@angular/animations": {
			"version": "17.2.3",
			"resolved": "https://registry.npmjs.org/@angular/animations/-/animations-17.2.3.tgz",
			"integrity": "sha512-eQcN6hC/dXISEYC/TjRuQJgfdZieBROBlXrS+BxRbsy9T4/QeKxChC3yiNxTmdxl5mvjLKvQTXHR8X0AWc07/Q==",
			"dev": true,
			"dependencies": {
				"tslib": "^2.3.0"
			},
			"engines": {
				"node": "^18.13.0 || >=20.9.0"
			},
			"peerDependencies": {
				"@angular/core": "17.2.3"
			}
		},
		"node_modules/@angular/cli": {
			"version": "17.2.2",
			"resolved": "https://registry.npmjs.org/@angular/cli/-/cli-17.2.2.tgz",
			"integrity": "sha512-cGGOnOTjU1bHBAU+5LMR1vfjUSmIY204pUcRAHu6xq1Qp8jm0Wf1lYOG1KrzpDezKa8d0WZe6FIVlxsCZRRYSw==",
			"dev": true,
			"dependencies": {
				"@angular-devkit/architect": "0.1702.2",
				"@angular-devkit/core": "17.2.2",
				"@angular-devkit/schematics": "17.2.2",
				"@schematics/angular": "17.2.2",
				"@yarnpkg/lockfile": "1.1.0",
				"ansi-colors": "4.1.3",
				"ini": "4.1.1",
				"inquirer": "9.2.14",
				"jsonc-parser": "3.2.1",
				"npm-package-arg": "11.0.1",
				"npm-pick-manifest": "9.0.0",
				"open": "8.4.2",
				"ora": "5.4.1",
				"pacote": "17.0.6",
				"resolve": "1.22.8",
				"semver": "7.6.0",
				"symbol-observable": "4.0.0",
				"yargs": "17.7.2"
			},
			"bin": {
				"ng": "bin/ng.js"
			},
			"engines": {
				"node": "^18.13.0 || >=20.9.0",
				"npm": "^6.11.0 || ^7.5.6 || >=8.0.0",
				"yarn": ">= 1.13.0"
			}
		},
		"node_modules/@angular/common": {
			"version": "17.2.3",
			"resolved": "https://registry.npmjs.org/@angular/common/-/common-17.2.3.tgz",
			"integrity": "sha512-XR3rWS4W7/+RknyJMUUo9E81mSeyUznpclqTZ+Hy7+i4Naeso0qcRaIyr6JJmB5UGvlnfT1MlH9Fj78Dc80NEw==",
			"dev": true,
			"dependencies": {
				"tslib": "^2.3.0"
			},
			"engines": {
				"node": "^18.13.0 || >=20.9.0"
			},
			"peerDependencies": {
				"@angular/core": "17.2.3",
				"rxjs": "^6.5.3 || ^7.4.0"
			}
		},
		"node_modules/@angular/compiler": {
			"version": "17.2.3",
			"resolved": "https://registry.npmjs.org/@angular/compiler/-/compiler-17.2.3.tgz",
			"integrity": "sha512-U2okLZ+4ipD5zTv32pMp+RsrM3kkP0XneSsIMPRpYZZfKgfnGLIwkRx6FoVoBwByugng6lBG/PiIe8DhRU/HFg==",
			"dev": true,
			"dependencies": {
				"tslib": "^2.3.0"
			},
			"engines": {
				"node": "^18.13.0 || >=20.9.0"
			},
			"peerDependencies": {
				"@angular/core": "17.2.3"
			},
			"peerDependenciesMeta": {
				"@angular/core": {
					"optional": true
				}
			}
		},
		"node_modules/@angular/compiler-cli": {
			"version": "17.2.3",
			"resolved": "https://registry.npmjs.org/@angular/compiler-cli/-/compiler-cli-17.2.3.tgz",
			"integrity": "sha512-mATybangypneXwO270VQeIw3N0avzc2Lpvdb8nm9WZYj23AcTUzpUUKOn63HtJdwMT5J2GjkyZFSRXisiPmpkA==",
			"dev": true,
			"dependencies": {
				"@babel/core": "7.23.9",
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
				"node": "^18.13.0 || >=20.9.0"
			},
			"peerDependencies": {
				"@angular/compiler": "17.2.3",
				"typescript": ">=5.2 <5.4"
			}
		},
		"node_modules/@angular/core": {
			"version": "17.2.3",
			"resolved": "https://registry.npmjs.org/@angular/core/-/core-17.2.3.tgz",
			"integrity": "sha512-DU+RdUB4E4I489R2P2hOrgkCDJNXlVaTzYixpgeDnuldCIYM0MatEzjor9DYNL3EDCayHF+M4HlVOcn6T/IVPQ==",
			"dev": true,
			"dependencies": {
				"tslib": "^2.3.0"
			},
			"engines": {
				"node": "^18.13.0 || >=20.9.0"
			},
			"peerDependencies": {
				"rxjs": "^6.5.3 || ^7.4.0",
				"zone.js": "~0.14.0"
			}
		},
		"node_modules/@angular/forms": {
			"version": "17.2.3",
			"resolved": "https://registry.npmjs.org/@angular/forms/-/forms-17.2.3.tgz",
			"integrity": "sha512-v+/6pimht808F5XpmVTNV4/109s+A7m3nadQP97qvIDsrtwrPPZR7cST+DRioG2C41VwtjXM0HVbIon/3ydo6A==",
			"dev": true,
			"dependencies": {
				"tslib": "^2.3.0"
			},
			"engines": {
				"node": "^18.13.0 || >=20.9.0"
			},
			"peerDependencies": {
				"@angular/common": "17.2.3",
				"@angular/core": "17.2.3",
				"@angular/platform-browser": "17.2.3",
				"rxjs": "^6.5.3 || ^7.4.0"
			}
		},
		"node_modules/@angular/platform-browser": {
			"version": "17.2.3",
			"resolved": "https://registry.npmjs.org/@angular/platform-browser/-/platform-browser-17.2.3.tgz",
			"integrity": "sha512-bFi+H8avyCjwSBy+zpOKmqx852MRH8fkuZa4XgwKCPJRay8BfSCjHdtIo3eokUNPMu9JsyXM7HYKIfzLu5y6LA==",
			"dev": true,
			"dependencies": {
				"tslib": "^2.3.0"
			},
			"engines": {
				"node": "^18.13.0 || >=20.9.0"
			},
			"peerDependencies": {
				"@angular/animations": "17.2.3",
				"@angular/common": "17.2.3",
				"@angular/core": "17.2.3"
			},
			"peerDependenciesMeta": {
				"@angular/animations": {
					"optional": true
				}
			}
		},
		"node_modules/@angular/platform-browser-dynamic": {
			"version": "17.2.3",
			"resolved": "https://registry.npmjs.org/@angular/platform-browser-dynamic/-/platform-browser-dynamic-17.2.3.tgz",
			"integrity": "sha512-K8CsHbmG2nvV1jrNN9PYxyA0zJNoIWp+qf2udvPhG8rJ+Pyw61qmptrarpQUUkr8ONOtjwtOsnKa9/w+15nExw==",
			"dev": true,
			"dependencies": {
				"tslib": "^2.3.0"
			},
			"engines": {
				"node": "^18.13.0 || >=20.9.0"
			},
			"peerDependencies": {
				"@angular/common": "17.2.3",
				"@angular/compiler": "17.2.3",
				"@angular/core": "17.2.3",
				"@angular/platform-browser": "17.2.3"
			}
		},
		"node_modules/@angular/router": {
			"version": "17.2.3",
			"resolved": "https://registry.npmjs.org/@angular/router/-/router-17.2.3.tgz",
			"integrity": "sha512-8UPjMzI98xZ6cDNm0MzHd9hFq6aOQJGmgxKDUPIG2h74glRwwbiewpo5hPo2EGIF8BLvQmmAm9ytr5zesHu0cg==",
			"dev": true,
			"dependencies": {
				"tslib": "^2.3.0"
			},
			"engines": {
				"node": "^18.13.0 || >=20.9.0"
			},
			"peerDependencies": {
				"@angular/common": "17.2.3",
				"@angular/core": "17.2.3",
				"@angular/platform-browser": "17.2.3",
				"rxjs": "^6.5.3 || ^7.4.0"
			}
		},
		"node_modules/@babel/code-frame": {
			"version": "7.23.5",
			"resolved": "https://registry.npmjs.org/@babel/code-frame/-/code-frame-7.23.5.tgz",
			"integrity": "sha512-CgH3s1a96LipHCmSUmYFPwY7MNx8C3avkq7i4Wl3cfa662ldtUe4VM1TPXX70pfmrlWTb6jLqTYrZyT2ZTJBgA==",
			"dev": true,
			"dependencies": {
				"@babel/highlight": "^7.23.4",
				"chalk": "^2.4.2"
			},
			"engines": {
				"node": ">=6.9.0"
			}
		},
		"node_modules/@babel/compat-data": {
			"version": "7.23.5",
			"resolved": "https://registry.npmjs.org/@babel/compat-data/-/compat-data-7.23.5.tgz",
			"integrity": "sha512-uU27kfDRlhfKl+w1U6vp16IuvSLtjAxdArVXPa9BvLkrr7CYIsxH5adpHObeAGY/41+syctUWOZ140a2Rvkgjw==",
			"dev": true,
			"engines": {
				"node": ">=6.9.0"
			}
		},
		"node_modules/@babel/core": {
			"version": "7.23.9",
			"resolved": "https://registry.npmjs.org/@babel/core/-/core-7.23.9.tgz",
			"integrity": "sha512-5q0175NOjddqpvvzU+kDiSOAk4PfdO6FvwCWoQ6RO7rTzEe8vlo+4HVfcnAREhD4npMs0e9uZypjTwzZPCf/cw==",
			"dev": true,
			"dependencies": {
				"@ampproject/remapping": "^2.2.0",
				"@babel/code-frame": "^7.23.5",
				"@babel/generator": "^7.23.6",
				"@babel/helper-compilation-targets": "^7.23.6",
				"@babel/helper-module-transforms": "^7.23.3",
				"@babel/helpers": "^7.23.9",
				"@babel/parser": "^7.23.9",
				"@babel/template": "^7.23.9",
				"@babel/traverse": "^7.23.9",
				"@babel/types": "^7.23.9",
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
			"dev": true
		},
		"node_modules/@babel/core/node_modules/semver": {
			"version": "6.3.1",
			"resolved": "https://registry.npmjs.org/semver/-/semver-6.3.1.tgz",
			"integrity": "sha512-BR7VvDCVHO+q2xBEWskxS6DJE1qRnb7DxzUrogb71CWoSficBxYsiAGd+Kl0mmq/MprG9yArRkyrQxTO6XjMzA==",
			"dev": true,
			"bin": {
				"semver": "bin/semver.js"
			}
		},
		"node_modules/@babel/generator": {
			"version": "7.23.6",
			"resolved": "https://registry.npmjs.org/@babel/generator/-/generator-7.23.6.tgz",
			"integrity": "sha512-qrSfCYxYQB5owCmGLbl8XRpX1ytXlpueOb0N0UmQwA073KZxejgQTzAmJezxvpwQD9uGtK2shHdi55QT+MbjIw==",
			"dev": true,
			"dependencies": {
				"@babel/types": "^7.23.6",
				"@jridgewell/gen-mapping": "^0.3.2",
				"@jridgewell/trace-mapping": "^0.3.17",
				"jsesc": "^2.5.1"
			},
			"engines": {
				"node": ">=6.9.0"
			}
		},
		"node_modules/@babel/helper-annotate-as-pure": {
			"version": "7.22.5",
			"resolved": "https://registry.npmjs.org/@babel/helper-annotate-as-pure/-/helper-annotate-as-pure-7.22.5.tgz",
			"integrity": "sha512-LvBTxu8bQSQkcyKOU+a1btnNFQ1dMAd0R6PyW3arXes06F6QLWLIrd681bxRPIXlrMGR3XYnW9JyML7dP3qgxg==",
			"dev": true,
			"dependencies": {
				"@babel/types": "^7.22.5"
			},
			"engines": {
				"node": ">=6.9.0"
			}
		},
		"node_modules/@babel/helper-builder-binary-assignment-operator-visitor": {
			"version": "7.22.15",
			"resolved": "https://registry.npmjs.org/@babel/helper-builder-binary-assignment-operator-visitor/-/helper-builder-binary-assignment-operator-visitor-7.22.15.tgz",
			"integrity": "sha512-QkBXwGgaoC2GtGZRoma6kv7Szfv06khvhFav67ZExau2RaXzy8MpHSMO2PNoP2XtmQphJQRHFfg77Bq731Yizw==",
			"dev": true,
			"dependencies": {
				"@babel/types": "^7.22.15"
			},
			"engines": {
				"node": ">=6.9.0"
			}
		},
		"node_modules/@babel/helper-compilation-targets": {
			"version": "7.23.6",
			"resolved": "https://registry.npmjs.org/@babel/helper-compilation-targets/-/helper-compilation-targets-7.23.6.tgz",
			"integrity": "sha512-9JB548GZoQVmzrFgp8o7KxdgkTGm6xs9DW0o/Pim72UDjzr5ObUQ6ZzYPqA+g9OTS2bBQoctLJrky0RDCAWRgQ==",
			"dev": true,
			"dependencies": {
				"@babel/compat-data": "^7.23.5",
				"@babel/helper-validator-option": "^7.23.5",
				"browserslist": "^4.22.2",
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
			"bin": {
				"semver": "bin/semver.js"
			}
		},
		"node_modules/@babel/helper-create-class-features-plugin": {
			"version": "7.24.0",
			"resolved": "https://registry.npmjs.org/@babel/helper-create-class-features-plugin/-/helper-create-class-features-plugin-7.24.0.tgz",
			"integrity": "sha512-QAH+vfvts51BCsNZ2PhY6HAggnlS6omLLFTsIpeqZk/MmJ6cW7tgz5yRv0fMJThcr6FmbMrENh1RgrWPTYA76g==",
			"dev": true,
			"dependencies": {
				"@babel/helper-annotate-as-pure": "^7.22.5",
				"@babel/helper-environment-visitor": "^7.22.20",
				"@babel/helper-function-name": "^7.23.0",
				"@babel/helper-member-expression-to-functions": "^7.23.0",
				"@babel/helper-optimise-call-expression": "^7.22.5",
				"@babel/helper-replace-supers": "^7.22.20",
				"@babel/helper-skip-transparent-expression-wrappers": "^7.22.5",
				"@babel/helper-split-export-declaration": "^7.22.6",
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
			"bin": {
				"semver": "bin/semver.js"
			}
		},
		"node_modules/@babel/helper-create-regexp-features-plugin": {
			"version": "7.22.15",
			"resolved": "https://registry.npmjs.org/@babel/helper-create-regexp-features-plugin/-/helper-create-regexp-features-plugin-7.22.15.tgz",
			"integrity": "sha512-29FkPLFjn4TPEa3RE7GpW+qbE8tlsu3jntNYNfcGsc49LphF1PQIiD+vMZ1z1xVOKt+93khA9tc2JBs3kBjA7w==",
			"dev": true,
			"dependencies": {
				"@babel/helper-annotate-as-pure": "^7.22.5",
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
			"bin": {
				"semver": "bin/semver.js"
			}
		},
		"node_modules/@babel/helper-define-polyfill-provider": {
			"version": "0.5.0",
			"resolved": "https://registry.npmjs.org/@babel/helper-define-polyfill-provider/-/helper-define-polyfill-provider-0.5.0.tgz",
			"integrity": "sha512-NovQquuQLAQ5HuyjCz7WQP9MjRj7dx++yspwiyUiGl9ZyadHRSql1HZh5ogRd8W8w6YM6EQ/NTB8rgjLt5W65Q==",
			"dev": true,
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
		"node_modules/@babel/helper-environment-visitor": {
			"version": "7.22.20",
			"resolved": "https://registry.npmjs.org/@babel/helper-environment-visitor/-/helper-environment-visitor-7.22.20.tgz",
			"integrity": "sha512-zfedSIzFhat/gFhWfHtgWvlec0nqB9YEIVrpuwjruLlXfUSnA8cJB0miHKwqDnQ7d32aKo2xt88/xZptwxbfhA==",
			"dev": true,
			"engines": {
				"node": ">=6.9.0"
			}
		},
		"node_modules/@babel/helper-function-name": {
			"version": "7.23.0",
			"resolved": "https://registry.npmjs.org/@babel/helper-function-name/-/helper-function-name-7.23.0.tgz",
			"integrity": "sha512-OErEqsrxjZTJciZ4Oo+eoZqeW9UIiOcuYKRJA4ZAgV9myA+pOXhhmpfNCKjEH/auVfEYVFJ6y1Tc4r0eIApqiw==",
			"dev": true,
			"dependencies": {
				"@babel/template": "^7.22.15",
				"@babel/types": "^7.23.0"
			},
			"engines": {
				"node": ">=6.9.0"
			}
		},
		"node_modules/@babel/helper-hoist-variables": {
			"version": "7.22.5",
			"resolved": "https://registry.npmjs.org/@babel/helper-hoist-variables/-/helper-hoist-variables-7.22.5.tgz",
			"integrity": "sha512-wGjk9QZVzvknA6yKIUURb8zY3grXCcOZt+/7Wcy8O2uctxhplmUPkOdlgoNhmdVee2c92JXbf1xpMtVNbfoxRw==",
			"dev": true,
			"dependencies": {
				"@babel/types": "^7.22.5"
			},
			"engines": {
				"node": ">=6.9.0"
			}
		},
		"node_modules/@babel/helper-member-expression-to-functions": {
			"version": "7.23.0",
			"resolved": "https://registry.npmjs.org/@babel/helper-member-expression-to-functions/-/helper-member-expression-to-functions-7.23.0.tgz",
			"integrity": "sha512-6gfrPwh7OuT6gZyJZvd6WbTfrqAo7vm4xCzAXOusKqq/vWdKXphTpj5klHKNmRUU6/QRGlBsyU9mAIPaWHlqJA==",
			"dev": true,
			"dependencies": {
				"@babel/types": "^7.23.0"
			},
			"engines": {
				"node": ">=6.9.0"
			}
		},
		"node_modules/@babel/helper-module-imports": {
			"version": "7.22.15",
			"resolved": "https://registry.npmjs.org/@babel/helper-module-imports/-/helper-module-imports-7.22.15.tgz",
			"integrity": "sha512-0pYVBnDKZO2fnSPCrgM/6WMc7eS20Fbok+0r88fp+YtWVLZrp4CkafFGIp+W0VKw4a22sgebPT99y+FDNMdP4w==",
			"dev": true,
			"dependencies": {
				"@babel/types": "^7.22.15"
			},
			"engines": {
				"node": ">=6.9.0"
			}
		},
		"node_modules/@babel/helper-module-transforms": {
			"version": "7.23.3",
			"resolved": "https://registry.npmjs.org/@babel/helper-module-transforms/-/helper-module-transforms-7.23.3.tgz",
			"integrity": "sha512-7bBs4ED9OmswdfDzpz4MpWgSrV7FXlc3zIagvLFjS5H+Mk7Snr21vQ6QwrsoCGMfNC4e4LQPdoULEt4ykz0SRQ==",
			"dev": true,
			"dependencies": {
				"@babel/helper-environment-visitor": "^7.22.20",
				"@babel/helper-module-imports": "^7.22.15",
				"@babel/helper-simple-access": "^7.22.5",
				"@babel/helper-split-export-declaration": "^7.22.6",
				"@babel/helper-validator-identifier": "^7.22.20"
			},
			"engines": {
				"node": ">=6.9.0"
			},
			"peerDependencies": {
				"@babel/core": "^7.0.0"
			}
		},
		"node_modules/@babel/helper-optimise-call-expression": {
			"version": "7.22.5",
			"resolved": "https://registry.npmjs.org/@babel/helper-optimise-call-expression/-/helper-optimise-call-expression-7.22.5.tgz",
			"integrity": "sha512-HBwaojN0xFRx4yIvpwGqxiV2tUfl7401jlok564NgB9EHS1y6QT17FmKWm4ztqjeVdXLuC4fSvHc5ePpQjoTbw==",
			"dev": true,
			"dependencies": {
				"@babel/types": "^7.22.5"
			},
			"engines": {
				"node": ">=6.9.0"
			}
		},
		"node_modules/@babel/helper-plugin-utils": {
			"version": "7.24.0",
			"resolved": "https://registry.npmjs.org/@babel/helper-plugin-utils/-/helper-plugin-utils-7.24.0.tgz",
			"integrity": "sha512-9cUznXMG0+FxRuJfvL82QlTqIzhVW9sL0KjMPHhAOOvpQGL8QtdxnBKILjBqxlHyliz0yCa1G903ZXI/FuHy2w==",
			"dev": true,
			"engines": {
				"node": ">=6.9.0"
			}
		},
		"node_modules/@babel/helper-remap-async-to-generator": {
			"version": "7.22.20",
			"resolved": "https://registry.npmjs.org/@babel/helper-remap-async-to-generator/-/helper-remap-async-to-generator-7.22.20.tgz",
			"integrity": "sha512-pBGyV4uBqOns+0UvhsTO8qgl8hO89PmiDYv+/COyp1aeMcmfrfruz+/nCMFiYyFF/Knn0yfrC85ZzNFjembFTw==",
			"dev": true,
			"dependencies": {
				"@babel/helper-annotate-as-pure": "^7.22.5",
				"@babel/helper-environment-visitor": "^7.22.20",
				"@babel/helper-wrap-function": "^7.22.20"
			},
			"engines": {
				"node": ">=6.9.0"
			},
			"peerDependencies": {
				"@babel/core": "^7.0.0"
			}
		},
		"node_modules/@babel/helper-replace-supers": {
			"version": "7.22.20",
			"resolved": "https://registry.npmjs.org/@babel/helper-replace-supers/-/helper-replace-supers-7.22.20.tgz",
			"integrity": "sha512-qsW0In3dbwQUbK8kejJ4R7IHVGwHJlV6lpG6UA7a9hSa2YEiAib+N1T2kr6PEeUT+Fl7najmSOS6SmAwCHK6Tw==",
			"dev": true,
			"dependencies": {
				"@babel/helper-environment-visitor": "^7.22.20",
				"@babel/helper-member-expression-to-functions": "^7.22.15",
				"@babel/helper-optimise-call-expression": "^7.22.5"
			},
			"engines": {
				"node": ">=6.9.0"
			},
			"peerDependencies": {
				"@babel/core": "^7.0.0"
			}
		},
		"node_modules/@babel/helper-simple-access": {
			"version": "7.22.5",
			"resolved": "https://registry.npmjs.org/@babel/helper-simple-access/-/helper-simple-access-7.22.5.tgz",
			"integrity": "sha512-n0H99E/K+Bika3++WNL17POvo4rKWZ7lZEp1Q+fStVbUi8nxPQEBOlTmCOxW/0JsS56SKKQ+ojAe2pHKJHN35w==",
			"dev": true,
			"dependencies": {
				"@babel/types": "^7.22.5"
			},
			"engines": {
				"node": ">=6.9.0"
			}
		},
		"node_modules/@babel/helper-skip-transparent-expression-wrappers": {
			"version": "7.22.5",
			"resolved": "https://registry.npmjs.org/@babel/helper-skip-transparent-expression-wrappers/-/helper-skip-transparent-expression-wrappers-7.22.5.tgz",
			"integrity": "sha512-tK14r66JZKiC43p8Ki33yLBVJKlQDFoA8GYN67lWCDCqoL6EMMSuM9b+Iff2jHaM/RRFYl7K+iiru7hbRqNx8Q==",
			"dev": true,
			"dependencies": {
				"@babel/types": "^7.22.5"
			},
			"engines": {
				"node": ">=6.9.0"
			}
		},
		"node_modules/@babel/helper-split-export-declaration": {
			"version": "7.22.6",
			"resolved": "https://registry.npmjs.org/@babel/helper-split-export-declaration/-/helper-split-export-declaration-7.22.6.tgz",
			"integrity": "sha512-AsUnxuLhRYsisFiaJwvp1QF+I3KjD5FOxut14q/GzovUe6orHLesW2C7d754kRm53h5gqrz6sFl6sxc4BVtE/g==",
			"dev": true,
			"dependencies": {
				"@babel/types": "^7.22.5"
			},
			"engines": {
				"node": ">=6.9.0"
			}
		},
		"node_modules/@babel/helper-string-parser": {
			"version": "7.23.4",
			"resolved": "https://registry.npmjs.org/@babel/helper-string-parser/-/helper-string-parser-7.23.4.tgz",
			"integrity": "sha512-803gmbQdqwdf4olxrX4AJyFBV/RTr3rSmOj0rKwesmzlfhYNDEs+/iOcznzpNWlJlIlTJC2QfPFcHB6DlzdVLQ==",
			"dev": true,
			"engines": {
				"node": ">=6.9.0"
			}
		},
		"node_modules/@babel/helper-validator-identifier": {
			"version": "7.22.20",
			"resolved": "https://registry.npmjs.org/@babel/helper-validator-identifier/-/helper-validator-identifier-7.22.20.tgz",
			"integrity": "sha512-Y4OZ+ytlatR8AI+8KZfKuL5urKp7qey08ha31L8b3BwewJAoJamTzyvxPR/5D+KkdJCGPq/+8TukHBlY10FX9A==",
			"dev": true,
			"engines": {
				"node": ">=6.9.0"
			}
		},
		"node_modules/@babel/helper-validator-option": {
			"version": "7.23.5",
			"resolved": "https://registry.npmjs.org/@babel/helper-validator-option/-/helper-validator-option-7.23.5.tgz",
			"integrity": "sha512-85ttAOMLsr53VgXkTbkx8oA6YTfT4q7/HzXSLEYmjcSTJPMPQtvq1BD79Byep5xMUYbGRzEpDsjUf3dyp54IKw==",
			"dev": true,
			"engines": {
				"node": ">=6.9.0"
			}
		},
		"node_modules/@babel/helper-wrap-function": {
			"version": "7.22.20",
			"resolved": "https://registry.npmjs.org/@babel/helper-wrap-function/-/helper-wrap-function-7.22.20.tgz",
			"integrity": "sha512-pms/UwkOpnQe/PDAEdV/d7dVCoBbB+R4FvYoHGZz+4VPcg7RtYy2KP7S2lbuWM6FCSgob5wshfGESbC/hzNXZw==",
			"dev": true,
			"dependencies": {
				"@babel/helper-function-name": "^7.22.5",
				"@babel/template": "^7.22.15",
				"@babel/types": "^7.22.19"
			},
			"engines": {
				"node": ">=6.9.0"
			}
		},
		"node_modules/@babel/helpers": {
			"version": "7.24.0",
			"resolved": "https://registry.npmjs.org/@babel/helpers/-/helpers-7.24.0.tgz",
			"integrity": "sha512-ulDZdc0Aj5uLc5nETsa7EPx2L7rM0YJM8r7ck7U73AXi7qOV44IHHRAYZHY6iU1rr3C5N4NtTmMRUJP6kwCWeA==",
			"dev": true,
			"dependencies": {
				"@babel/template": "^7.24.0",
				"@babel/traverse": "^7.24.0",
				"@babel/types": "^7.24.0"
			},
			"engines": {
				"node": ">=6.9.0"
			}
		},
		"node_modules/@babel/highlight": {
			"version": "7.23.4",
			"resolved": "https://registry.npmjs.org/@babel/highlight/-/highlight-7.23.4.tgz",
			"integrity": "sha512-acGdbYSfp2WheJoJm/EBBBLh/ID8KDc64ISZ9DYtBmC8/Q204PZJLHyzeB5qMzJ5trcOkybd78M4x2KWsUq++A==",
			"dev": true,
			"dependencies": {
				"@babel/helper-validator-identifier": "^7.22.20",
				"chalk": "^2.4.2",
				"js-tokens": "^4.0.0"
			},
			"engines": {
				"node": ">=6.9.0"
			}
		},
		"node_modules/@babel/parser": {
			"version": "7.24.0",
			"resolved": "https://registry.npmjs.org/@babel/parser/-/parser-7.24.0.tgz",
			"integrity": "sha512-QuP/FxEAzMSjXygs8v4N9dvdXzEHN4W1oF3PxuWAtPo08UdM17u89RDMgjLn/mlc56iM0HlLmVkO/wgR+rDgHg==",
			"dev": true,
			"bin": {
				"parser": "bin/babel-parser.js"
			},
			"engines": {
				"node": ">=6.0.0"
			}
		},
		"node_modules/@babel/plugin-bugfix-safari-id-destructuring-collision-in-function-expression": {
			"version": "7.23.3",
			"resolved": "https://registry.npmjs.org/@babel/plugin-bugfix-safari-id-destructuring-collision-in-function-expression/-/plugin-bugfix-safari-id-destructuring-collision-in-function-expression-7.23.3.tgz",
			"integrity": "sha512-iRkKcCqb7iGnq9+3G6rZ+Ciz5VywC4XNRHe57lKM+jOeYAoR0lVqdeeDRfh0tQcTfw/+vBhHn926FmQhLtlFLQ==",
			"dev": true,
			"dependencies": {
				"@babel/helper-plugin-utils": "^7.22.5"
			},
			"engines": {
				"node": ">=6.9.0"
			},
			"peerDependencies": {
				"@babel/core": "^7.0.0"
			}
		},
		"node_modules/@babel/plugin-bugfix-v8-spread-parameters-in-optional-chaining": {
			"version": "7.23.3",
			"resolved": "https://registry.npmjs.org/@babel/plugin-bugfix-v8-spread-parameters-in-optional-chaining/-/plugin-bugfix-v8-spread-parameters-in-optional-chaining-7.23.3.tgz",
			"integrity": "sha512-WwlxbfMNdVEpQjZmK5mhm7oSwD3dS6eU+Iwsi4Knl9wAletWem7kaRsGOG+8UEbRyqxY4SS5zvtfXwX+jMxUwQ==",
			"dev": true,
			"dependencies": {
				"@babel/helper-plugin-utils": "^7.22.5",
				"@babel/helper-skip-transparent-expression-wrappers": "^7.22.5",
				"@babel/plugin-transform-optional-chaining": "^7.23.3"
			},
			"engines": {
				"node": ">=6.9.0"
			},
			"peerDependencies": {
				"@babel/core": "^7.13.0"
			}
		},
		"node_modules/@babel/plugin-bugfix-v8-static-class-fields-redefine-readonly": {
			"version": "7.23.7",
			"resolved": "https://registry.npmjs.org/@babel/plugin-bugfix-v8-static-class-fields-redefine-readonly/-/plugin-bugfix-v8-static-class-fields-redefine-readonly-7.23.7.tgz",
			"integrity": "sha512-LlRT7HgaifEpQA1ZgLVOIJZZFVPWN5iReq/7/JixwBtwcoeVGDBD53ZV28rrsLYOZs1Y/EHhA8N/Z6aazHR8cw==",
			"dev": true,
			"dependencies": {
				"@babel/helper-environment-visitor": "^7.22.20",
				"@babel/helper-plugin-utils": "^7.22.5"
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
			"dependencies": {
				"@babel/helper-plugin-utils": "^7.8.3"
			},
			"peerDependencies": {
				"@babel/core": "^7.0.0-0"
			}
		},
		"node_modules/@babel/plugin-syntax-import-assertions": {
			"version": "7.23.3",
			"resolved": "https://registry.npmjs.org/@babel/plugin-syntax-import-assertions/-/plugin-syntax-import-assertions-7.23.3.tgz",
			"integrity": "sha512-lPgDSU+SJLK3xmFDTV2ZRQAiM7UuUjGidwBywFavObCiZc1BeAAcMtHJKUya92hPHO+at63JJPLygilZard8jw==",
			"dev": true,
			"dependencies": {
				"@babel/helper-plugin-utils": "^7.22.5"
			},
			"engines": {
				"node": ">=6.9.0"
			},
			"peerDependencies": {
				"@babel/core": "^7.0.0-0"
			}
		},
		"node_modules/@babel/plugin-syntax-import-attributes": {
			"version": "7.23.3",
			"resolved": "https://registry.npmjs.org/@babel/plugin-syntax-import-attributes/-/plugin-syntax-import-attributes-7.23.3.tgz",
			"integrity": "sha512-pawnE0P9g10xgoP7yKr6CK63K2FMsTE+FZidZO/1PwRdzmAPVs+HS1mAURUsgaoxammTJvULUdIkEK0gOcU2tA==",
			"dev": true,
			"dependencies": {
				"@babel/helper-plugin-utils": "^7.22.5"
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
			"version": "7.23.3",
			"resolved": "https://registry.npmjs.org/@babel/plugin-transform-arrow-functions/-/plugin-transform-arrow-functions-7.23.3.tgz",
			"integrity": "sha512-NzQcQrzaQPkaEwoTm4Mhyl8jI1huEL/WWIEvudjTCMJ9aBZNpsJbMASx7EQECtQQPS/DcnFpo0FIh3LvEO9cxQ==",
			"dev": true,
			"dependencies": {
				"@babel/helper-plugin-utils": "^7.22.5"
			},
			"engines": {
				"node": ">=6.9.0"
			},
			"peerDependencies": {
				"@babel/core": "^7.0.0-0"
			}
		},
		"node_modules/@babel/plugin-transform-async-generator-functions": {
			"version": "7.23.9",
			"resolved": "https://registry.npmjs.org/@babel/plugin-transform-async-generator-functions/-/plugin-transform-async-generator-functions-7.23.9.tgz",
			"integrity": "sha512-8Q3veQEDGe14dTYuwagbRtwxQDnytyg1JFu4/HwEMETeofocrB0U0ejBJIXoeG/t2oXZ8kzCyI0ZZfbT80VFNQ==",
			"dev": true,
			"dependencies": {
				"@babel/helper-environment-visitor": "^7.22.20",
				"@babel/helper-plugin-utils": "^7.22.5",
				"@babel/helper-remap-async-to-generator": "^7.22.20",
				"@babel/plugin-syntax-async-generators": "^7.8.4"
			},
			"engines": {
				"node": ">=6.9.0"
			},
			"peerDependencies": {
				"@babel/core": "^7.0.0-0"
			}
		},
		"node_modules/@babel/plugin-transform-async-to-generator": {
			"version": "7.23.3",
			"resolved": "https://registry.npmjs.org/@babel/plugin-transform-async-to-generator/-/plugin-transform-async-to-generator-7.23.3.tgz",
			"integrity": "sha512-A7LFsKi4U4fomjqXJlZg/u0ft/n8/7n7lpffUP/ZULx/DtV9SGlNKZolHH6PE8Xl1ngCc0M11OaeZptXVkfKSw==",
			"dev": true,
			"dependencies": {
				"@babel/helper-module-imports": "^7.22.15",
				"@babel/helper-plugin-utils": "^7.22.5",
				"@babel/helper-remap-async-to-generator": "^7.22.20"
			},
			"engines": {
				"node": ">=6.9.0"
			},
			"peerDependencies": {
				"@babel/core": "^7.0.0-0"
			}
		},
		"node_modules/@babel/plugin-transform-block-scoped-functions": {
			"version": "7.23.3",
			"resolved": "https://registry.npmjs.org/@babel/plugin-transform-block-scoped-functions/-/plugin-transform-block-scoped-functions-7.23.3.tgz",
			"integrity": "sha512-vI+0sIaPIO6CNuM9Kk5VmXcMVRiOpDh7w2zZt9GXzmE/9KD70CUEVhvPR/etAeNK/FAEkhxQtXOzVF3EuRL41A==",
			"dev": true,
			"dependencies": {
				"@babel/helper-plugin-utils": "^7.22.5"
			},
			"engines": {
				"node": ">=6.9.0"
			},
			"peerDependencies": {
				"@babel/core": "^7.0.0-0"
			}
		},
		"node_modules/@babel/plugin-transform-block-scoping": {
			"version": "7.23.4",
			"resolved": "https://registry.npmjs.org/@babel/plugin-transform-block-scoping/-/plugin-transform-block-scoping-7.23.4.tgz",
			"integrity": "sha512-0QqbP6B6HOh7/8iNR4CQU2Th/bbRtBp4KS9vcaZd1fZ0wSh5Fyssg0UCIHwxh+ka+pNDREbVLQnHCMHKZfPwfw==",
			"dev": true,
			"dependencies": {
				"@babel/helper-plugin-utils": "^7.22.5"
			},
			"engines": {
				"node": ">=6.9.0"
			},
			"peerDependencies": {
				"@babel/core": "^7.0.0-0"
			}
		},
		"node_modules/@babel/plugin-transform-class-properties": {
			"version": "7.23.3",
			"resolved": "https://registry.npmjs.org/@babel/plugin-transform-class-properties/-/plugin-transform-class-properties-7.23.3.tgz",
			"integrity": "sha512-uM+AN8yCIjDPccsKGlw271xjJtGii+xQIF/uMPS8H15L12jZTsLfF4o5vNO7d/oUguOyfdikHGc/yi9ge4SGIg==",
			"dev": true,
			"dependencies": {
				"@babel/helper-create-class-features-plugin": "^7.22.15",
				"@babel/helper-plugin-utils": "^7.22.5"
			},
			"engines": {
				"node": ">=6.9.0"
			},
			"peerDependencies": {
				"@babel/core": "^7.0.0-0"
			}
		},
		"node_modules/@babel/plugin-transform-class-static-block": {
			"version": "7.23.4",
			"resolved": "https://registry.npmjs.org/@babel/plugin-transform-class-static-block/-/plugin-transform-class-static-block-7.23.4.tgz",
			"integrity": "sha512-nsWu/1M+ggti1SOALj3hfx5FXzAY06fwPJsUZD4/A5e1bWi46VUIWtD+kOX6/IdhXGsXBWllLFDSnqSCdUNydQ==",
			"dev": true,
			"dependencies": {
				"@babel/helper-create-class-features-plugin": "^7.22.15",
				"@babel/helper-plugin-utils": "^7.22.5",
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
			"version": "7.23.8",
			"resolved": "https://registry.npmjs.org/@babel/plugin-transform-classes/-/plugin-transform-classes-7.23.8.tgz",
			"integrity": "sha512-yAYslGsY1bX6Knmg46RjiCiNSwJKv2IUC8qOdYKqMMr0491SXFhcHqOdRDeCRohOOIzwN/90C6mQ9qAKgrP7dg==",
			"dev": true,
			"dependencies": {
				"@babel/helper-annotate-as-pure": "^7.22.5",
				"@babel/helper-compilation-targets": "^7.23.6",
				"@babel/helper-environment-visitor": "^7.22.20",
				"@babel/helper-function-name": "^7.23.0",
				"@babel/helper-plugin-utils": "^7.22.5",
				"@babel/helper-replace-supers": "^7.22.20",
				"@babel/helper-split-export-declaration": "^7.22.6",
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
			"version": "7.23.3",
			"resolved": "https://registry.npmjs.org/@babel/plugin-transform-computed-properties/-/plugin-transform-computed-properties-7.23.3.tgz",
			"integrity": "sha512-dTj83UVTLw/+nbiHqQSFdwO9CbTtwq1DsDqm3CUEtDrZNET5rT5E6bIdTlOftDTDLMYxvxHNEYO4B9SLl8SLZw==",
			"dev": true,
			"dependencies": {
				"@babel/helper-plugin-utils": "^7.22.5",
				"@babel/template": "^7.22.15"
			},
			"engines": {
				"node": ">=6.9.0"
			},
			"peerDependencies": {
				"@babel/core": "^7.0.0-0"
			}
		},
		"node_modules/@babel/plugin-transform-destructuring": {
			"version": "7.23.3",
			"resolved": "https://registry.npmjs.org/@babel/plugin-transform-destructuring/-/plugin-transform-destructuring-7.23.3.tgz",
			"integrity": "sha512-n225npDqjDIr967cMScVKHXJs7rout1q+tt50inyBCPkyZ8KxeI6d+GIbSBTT/w/9WdlWDOej3V9HE5Lgk57gw==",
			"dev": true,
			"dependencies": {
				"@babel/helper-plugin-utils": "^7.22.5"
			},
			"engines": {
				"node": ">=6.9.0"
			},
			"peerDependencies": {
				"@babel/core": "^7.0.0-0"
			}
		},
		"node_modules/@babel/plugin-transform-dotall-regex": {
			"version": "7.23.3",
			"resolved": "https://registry.npmjs.org/@babel/plugin-transform-dotall-regex/-/plugin-transform-dotall-regex-7.23.3.tgz",
			"integrity": "sha512-vgnFYDHAKzFaTVp+mneDsIEbnJ2Np/9ng9iviHw3P/KVcgONxpNULEW/51Z/BaFojG2GI2GwwXck5uV1+1NOYQ==",
			"dev": true,
			"dependencies": {
				"@babel/helper-create-regexp-features-plugin": "^7.22.15",
				"@babel/helper-plugin-utils": "^7.22.5"
			},
			"engines": {
				"node": ">=6.9.0"
			},
			"peerDependencies": {
				"@babel/core": "^7.0.0-0"
			}
		},
		"node_modules/@babel/plugin-transform-duplicate-keys": {
			"version": "7.23.3",
			"resolved": "https://registry.npmjs.org/@babel/plugin-transform-duplicate-keys/-/plugin-transform-duplicate-keys-7.23.3.tgz",
			"integrity": "sha512-RrqQ+BQmU3Oyav3J+7/myfvRCq7Tbz+kKLLshUmMwNlDHExbGL7ARhajvoBJEvc+fCguPPu887N+3RRXBVKZUA==",
			"dev": true,
			"dependencies": {
				"@babel/helper-plugin-utils": "^7.22.5"
			},
			"engines": {
				"node": ">=6.9.0"
			},
			"peerDependencies": {
				"@babel/core": "^7.0.0-0"
			}
		},
		"node_modules/@babel/plugin-transform-dynamic-import": {
			"version": "7.23.4",
			"resolved": "https://registry.npmjs.org/@babel/plugin-transform-dynamic-import/-/plugin-transform-dynamic-import-7.23.4.tgz",
			"integrity": "sha512-V6jIbLhdJK86MaLh4Jpghi8ho5fGzt3imHOBu/x0jlBaPYqDoWz4RDXjmMOfnh+JWNaQleEAByZLV0QzBT4YQQ==",
			"dev": true,
			"dependencies": {
				"@babel/helper-plugin-utils": "^7.22.5",
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
			"version": "7.23.3",
			"resolved": "https://registry.npmjs.org/@babel/plugin-transform-exponentiation-operator/-/plugin-transform-exponentiation-operator-7.23.3.tgz",
			"integrity": "sha512-5fhCsl1odX96u7ILKHBj4/Y8vipoqwsJMh4csSA8qFfxrZDEA4Ssku2DyNvMJSmZNOEBT750LfFPbtrnTP90BQ==",
			"dev": true,
			"dependencies": {
				"@babel/helper-builder-binary-assignment-operator-visitor": "^7.22.15",
				"@babel/helper-plugin-utils": "^7.22.5"
			},
			"engines": {
				"node": ">=6.9.0"
			},
			"peerDependencies": {
				"@babel/core": "^7.0.0-0"
			}
		},
		"node_modules/@babel/plugin-transform-export-namespace-from": {
			"version": "7.23.4",
			"resolved": "https://registry.npmjs.org/@babel/plugin-transform-export-namespace-from/-/plugin-transform-export-namespace-from-7.23.4.tgz",
			"integrity": "sha512-GzuSBcKkx62dGzZI1WVgTWvkkz84FZO5TC5T8dl/Tht/rAla6Dg/Mz9Yhypg+ezVACf/rgDuQt3kbWEv7LdUDQ==",
			"dev": true,
			"dependencies": {
				"@babel/helper-plugin-utils": "^7.22.5",
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
			"version": "7.23.6",
			"resolved": "https://registry.npmjs.org/@babel/plugin-transform-for-of/-/plugin-transform-for-of-7.23.6.tgz",
			"integrity": "sha512-aYH4ytZ0qSuBbpfhuofbg/e96oQ7U2w1Aw/UQmKT+1l39uEhUPoFS3fHevDc1G0OvewyDudfMKY1OulczHzWIw==",
			"dev": true,
			"dependencies": {
				"@babel/helper-plugin-utils": "^7.22.5",
				"@babel/helper-skip-transparent-expression-wrappers": "^7.22.5"
			},
			"engines": {
				"node": ">=6.9.0"
			},
			"peerDependencies": {
				"@babel/core": "^7.0.0-0"
			}
		},
		"node_modules/@babel/plugin-transform-function-name": {
			"version": "7.23.3",
			"resolved": "https://registry.npmjs.org/@babel/plugin-transform-function-name/-/plugin-transform-function-name-7.23.3.tgz",
			"integrity": "sha512-I1QXp1LxIvt8yLaib49dRW5Okt7Q4oaxao6tFVKS/anCdEOMtYwWVKoiOA1p34GOWIZjUK0E+zCp7+l1pfQyiw==",
			"dev": true,
			"dependencies": {
				"@babel/helper-compilation-targets": "^7.22.15",
				"@babel/helper-function-name": "^7.23.0",
				"@babel/helper-plugin-utils": "^7.22.5"
			},
			"engines": {
				"node": ">=6.9.0"
			},
			"peerDependencies": {
				"@babel/core": "^7.0.0-0"
			}
		},
		"node_modules/@babel/plugin-transform-json-strings": {
			"version": "7.23.4",
			"resolved": "https://registry.npmjs.org/@babel/plugin-transform-json-strings/-/plugin-transform-json-strings-7.23.4.tgz",
			"integrity": "sha512-81nTOqM1dMwZ/aRXQ59zVubN9wHGqk6UtqRK+/q+ciXmRy8fSolhGVvG09HHRGo4l6fr/c4ZhXUQH0uFW7PZbg==",
			"dev": true,
			"dependencies": {
				"@babel/helper-plugin-utils": "^7.22.5",
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
			"version": "7.23.3",
			"resolved": "https://registry.npmjs.org/@babel/plugin-transform-literals/-/plugin-transform-literals-7.23.3.tgz",
			"integrity": "sha512-wZ0PIXRxnwZvl9AYpqNUxpZ5BiTGrYt7kueGQ+N5FiQ7RCOD4cm8iShd6S6ggfVIWaJf2EMk8eRzAh52RfP4rQ==",
			"dev": true,
			"dependencies": {
				"@babel/helper-plugin-utils": "^7.22.5"
			},
			"engines": {
				"node": ">=6.9.0"
			},
			"peerDependencies": {
				"@babel/core": "^7.0.0-0"
			}
		},
		"node_modules/@babel/plugin-transform-logical-assignment-operators": {
			"version": "7.23.4",
			"resolved": "https://registry.npmjs.org/@babel/plugin-transform-logical-assignment-operators/-/plugin-transform-logical-assignment-operators-7.23.4.tgz",
			"integrity": "sha512-Mc/ALf1rmZTP4JKKEhUwiORU+vcfarFVLfcFiolKUo6sewoxSEgl36ak5t+4WamRsNr6nzjZXQjM35WsU+9vbg==",
			"dev": true,
			"dependencies": {
				"@babel/helper-plugin-utils": "^7.22.5",
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
			"version": "7.23.3",
			"resolved": "https://registry.npmjs.org/@babel/plugin-transform-member-expression-literals/-/plugin-transform-member-expression-literals-7.23.3.tgz",
			"integrity": "sha512-sC3LdDBDi5x96LA+Ytekz2ZPk8i/Ck+DEuDbRAll5rknJ5XRTSaPKEYwomLcs1AA8wg9b3KjIQRsnApj+q51Ag==",
			"dev": true,
			"dependencies": {
				"@babel/helper-plugin-utils": "^7.22.5"
			},
			"engines": {
				"node": ">=6.9.0"
			},
			"peerDependencies": {
				"@babel/core": "^7.0.0-0"
			}
		},
		"node_modules/@babel/plugin-transform-modules-amd": {
			"version": "7.23.3",
			"resolved": "https://registry.npmjs.org/@babel/plugin-transform-modules-amd/-/plugin-transform-modules-amd-7.23.3.tgz",
			"integrity": "sha512-vJYQGxeKM4t8hYCKVBlZX/gtIY2I7mRGFNcm85sgXGMTBcoV3QdVtdpbcWEbzbfUIUZKwvgFT82mRvaQIebZzw==",
			"dev": true,
			"dependencies": {
				"@babel/helper-module-transforms": "^7.23.3",
				"@babel/helper-plugin-utils": "^7.22.5"
			},
			"engines": {
				"node": ">=6.9.0"
			},
			"peerDependencies": {
				"@babel/core": "^7.0.0-0"
			}
		},
		"node_modules/@babel/plugin-transform-modules-commonjs": {
			"version": "7.23.3",
			"resolved": "https://registry.npmjs.org/@babel/plugin-transform-modules-commonjs/-/plugin-transform-modules-commonjs-7.23.3.tgz",
			"integrity": "sha512-aVS0F65LKsdNOtcz6FRCpE4OgsP2OFnW46qNxNIX9h3wuzaNcSQsJysuMwqSibC98HPrf2vCgtxKNwS0DAlgcA==",
			"dev": true,
			"dependencies": {
				"@babel/helper-module-transforms": "^7.23.3",
				"@babel/helper-plugin-utils": "^7.22.5",
				"@babel/helper-simple-access": "^7.22.5"
			},
			"engines": {
				"node": ">=6.9.0"
			},
			"peerDependencies": {
				"@babel/core": "^7.0.0-0"
			}
		},
		"node_modules/@babel/plugin-transform-modules-systemjs": {
			"version": "7.23.9",
			"resolved": "https://registry.npmjs.org/@babel/plugin-transform-modules-systemjs/-/plugin-transform-modules-systemjs-7.23.9.tgz",
			"integrity": "sha512-KDlPRM6sLo4o1FkiSlXoAa8edLXFsKKIda779fbLrvmeuc3itnjCtaO6RrtoaANsIJANj+Vk1zqbZIMhkCAHVw==",
			"dev": true,
			"dependencies": {
				"@babel/helper-hoist-variables": "^7.22.5",
				"@babel/helper-module-transforms": "^7.23.3",
				"@babel/helper-plugin-utils": "^7.22.5",
				"@babel/helper-validator-identifier": "^7.22.20"
			},
			"engines": {
				"node": ">=6.9.0"
			},
			"peerDependencies": {
				"@babel/core": "^7.0.0-0"
			}
		},
		"node_modules/@babel/plugin-transform-modules-umd": {
			"version": "7.23.3",
			"resolved": "https://registry.npmjs.org/@babel/plugin-transform-modules-umd/-/plugin-transform-modules-umd-7.23.3.tgz",
			"integrity": "sha512-zHsy9iXX2nIsCBFPud3jKn1IRPWg3Ing1qOZgeKV39m1ZgIdpJqvlWVeiHBZC6ITRG0MfskhYe9cLgntfSFPIg==",
			"dev": true,
			"dependencies": {
				"@babel/helper-module-transforms": "^7.23.3",
				"@babel/helper-plugin-utils": "^7.22.5"
			},
			"engines": {
				"node": ">=6.9.0"
			},
			"peerDependencies": {
				"@babel/core": "^7.0.0-0"
			}
		},
		"node_modules/@babel/plugin-transform-named-capturing-groups-regex": {
			"version": "7.22.5",
			"resolved": "https://registry.npmjs.org/@babel/plugin-transform-named-capturing-groups-regex/-/plugin-transform-named-capturing-groups-regex-7.22.5.tgz",
			"integrity": "sha512-YgLLKmS3aUBhHaxp5hi1WJTgOUb/NCuDHzGT9z9WTt3YG+CPRhJs6nprbStx6DnWM4dh6gt7SU3sZodbZ08adQ==",
			"dev": true,
			"dependencies": {
				"@babel/helper-create-regexp-features-plugin": "^7.22.5",
				"@babel/helper-plugin-utils": "^7.22.5"
			},
			"engines": {
				"node": ">=6.9.0"
			},
			"peerDependencies": {
				"@babel/core": "^7.0.0"
			}
		},
		"node_modules/@babel/plugin-transform-new-target": {
			"version": "7.23.3",
			"resolved": "https://registry.npmjs.org/@babel/plugin-transform-new-target/-/plugin-transform-new-target-7.23.3.tgz",
			"integrity": "sha512-YJ3xKqtJMAT5/TIZnpAR3I+K+WaDowYbN3xyxI8zxx/Gsypwf9B9h0VB+1Nh6ACAAPRS5NSRje0uVv5i79HYGQ==",
			"dev": true,
			"dependencies": {
				"@babel/helper-plugin-utils": "^7.22.5"
			},
			"engines": {
				"node": ">=6.9.0"
			},
			"peerDependencies": {
				"@babel/core": "^7.0.0-0"
			}
		},
		"node_modules/@babel/plugin-transform-nullish-coalescing-operator": {
			"version": "7.23.4",
			"resolved": "https://registry.npmjs.org/@babel/plugin-transform-nullish-coalescing-operator/-/plugin-transform-nullish-coalescing-operator-7.23.4.tgz",
			"integrity": "sha512-jHE9EVVqHKAQx+VePv5LLGHjmHSJR76vawFPTdlxR/LVJPfOEGxREQwQfjuZEOPTwG92X3LINSh3M40Rv4zpVA==",
			"dev": true,
			"dependencies": {
				"@babel/helper-plugin-utils": "^7.22.5",
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
			"version": "7.23.4",
			"resolved": "https://registry.npmjs.org/@babel/plugin-transform-numeric-separator/-/plugin-transform-numeric-separator-7.23.4.tgz",
			"integrity": "sha512-mps6auzgwjRrwKEZA05cOwuDc9FAzoyFS4ZsG/8F43bTLf/TgkJg7QXOrPO1JO599iA3qgK9MXdMGOEC8O1h6Q==",
			"dev": true,
			"dependencies": {
				"@babel/helper-plugin-utils": "^7.22.5",
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
			"version": "7.24.0",
			"resolved": "https://registry.npmjs.org/@babel/plugin-transform-object-rest-spread/-/plugin-transform-object-rest-spread-7.24.0.tgz",
			"integrity": "sha512-y/yKMm7buHpFFXfxVFS4Vk1ToRJDilIa6fKRioB9Vjichv58TDGXTvqV0dN7plobAmTW5eSEGXDngE+Mm+uO+w==",
			"dev": true,
			"dependencies": {
				"@babel/compat-data": "^7.23.5",
				"@babel/helper-compilation-targets": "^7.23.6",
				"@babel/helper-plugin-utils": "^7.24.0",
				"@babel/plugin-syntax-object-rest-spread": "^7.8.3",
				"@babel/plugin-transform-parameters": "^7.23.3"
			},
			"engines": {
				"node": ">=6.9.0"
			},
			"peerDependencies": {
				"@babel/core": "^7.0.0-0"
			}
		},
		"node_modules/@babel/plugin-transform-object-super": {
			"version": "7.23.3",
			"resolved": "https://registry.npmjs.org/@babel/plugin-transform-object-super/-/plugin-transform-object-super-7.23.3.tgz",
			"integrity": "sha512-BwQ8q0x2JG+3lxCVFohg+KbQM7plfpBwThdW9A6TMtWwLsbDA01Ek2Zb/AgDN39BiZsExm4qrXxjk+P1/fzGrA==",
			"dev": true,
			"dependencies": {
				"@babel/helper-plugin-utils": "^7.22.5",
				"@babel/helper-replace-supers": "^7.22.20"
			},
			"engines": {
				"node": ">=6.9.0"
			},
			"peerDependencies": {
				"@babel/core": "^7.0.0-0"
			}
		},
		"node_modules/@babel/plugin-transform-optional-catch-binding": {
			"version": "7.23.4",
			"resolved": "https://registry.npmjs.org/@babel/plugin-transform-optional-catch-binding/-/plugin-transform-optional-catch-binding-7.23.4.tgz",
			"integrity": "sha512-XIq8t0rJPHf6Wvmbn9nFxU6ao4c7WhghTR5WyV8SrJfUFzyxhCm4nhC+iAp3HFhbAKLfYpgzhJ6t4XCtVwqO5A==",
			"dev": true,
			"dependencies": {
				"@babel/helper-plugin-utils": "^7.22.5",
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
			"version": "7.23.4",
			"resolved": "https://registry.npmjs.org/@babel/plugin-transform-optional-chaining/-/plugin-transform-optional-chaining-7.23.4.tgz",
			"integrity": "sha512-ZU8y5zWOfjM5vZ+asjgAPwDaBjJzgufjES89Rs4Lpq63O300R/kOz30WCLo6BxxX6QVEilwSlpClnG5cZaikTA==",
			"dev": true,
			"dependencies": {
				"@babel/helper-plugin-utils": "^7.22.5",
				"@babel/helper-skip-transparent-expression-wrappers": "^7.22.5",
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
			"version": "7.23.3",
			"resolved": "https://registry.npmjs.org/@babel/plugin-transform-parameters/-/plugin-transform-parameters-7.23.3.tgz",
			"integrity": "sha512-09lMt6UsUb3/34BbECKVbVwrT9bO6lILWln237z7sLaWnMsTi7Yc9fhX5DLpkJzAGfaReXI22wP41SZmnAA3Vw==",
			"dev": true,
			"dependencies": {
				"@babel/helper-plugin-utils": "^7.22.5"
			},
			"engines": {
				"node": ">=6.9.0"
			},
			"peerDependencies": {
				"@babel/core": "^7.0.0-0"
			}
		},
		"node_modules/@babel/plugin-transform-private-methods": {
			"version": "7.23.3",
			"resolved": "https://registry.npmjs.org/@babel/plugin-transform-private-methods/-/plugin-transform-private-methods-7.23.3.tgz",
			"integrity": "sha512-UzqRcRtWsDMTLrRWFvUBDwmw06tCQH9Rl1uAjfh6ijMSmGYQ+fpdB+cnqRC8EMh5tuuxSv0/TejGL+7vyj+50g==",
			"dev": true,
			"dependencies": {
				"@babel/helper-create-class-features-plugin": "^7.22.15",
				"@babel/helper-plugin-utils": "^7.22.5"
			},
			"engines": {
				"node": ">=6.9.0"
			},
			"peerDependencies": {
				"@babel/core": "^7.0.0-0"
			}
		},
		"node_modules/@babel/plugin-transform-private-property-in-object": {
			"version": "7.23.4",
			"resolved": "https://registry.npmjs.org/@babel/plugin-transform-private-property-in-object/-/plugin-transform-private-property-in-object-7.23.4.tgz",
			"integrity": "sha512-9G3K1YqTq3F4Vt88Djx1UZ79PDyj+yKRnUy7cZGSMe+a7jkwD259uKKuUzQlPkGam7R+8RJwh5z4xO27fA1o2A==",
			"dev": true,
			"dependencies": {
				"@babel/helper-annotate-as-pure": "^7.22.5",
				"@babel/helper-create-class-features-plugin": "^7.22.15",
				"@babel/helper-plugin-utils": "^7.22.5",
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
			"version": "7.23.3",
			"resolved": "https://registry.npmjs.org/@babel/plugin-transform-property-literals/-/plugin-transform-property-literals-7.23.3.tgz",
			"integrity": "sha512-jR3Jn3y7cZp4oEWPFAlRsSWjxKe4PZILGBSd4nis1TsC5qeSpb+nrtihJuDhNI7QHiVbUaiXa0X2RZY3/TI6Nw==",
			"dev": true,
			"dependencies": {
				"@babel/helper-plugin-utils": "^7.22.5"
			},
			"engines": {
				"node": ">=6.9.0"
			},
			"peerDependencies": {
				"@babel/core": "^7.0.0-0"
			}
		},
		"node_modules/@babel/plugin-transform-regenerator": {
			"version": "7.23.3",
			"resolved": "https://registry.npmjs.org/@babel/plugin-transform-regenerator/-/plugin-transform-regenerator-7.23.3.tgz",
			"integrity": "sha512-KP+75h0KghBMcVpuKisx3XTu9Ncut8Q8TuvGO4IhY+9D5DFEckQefOuIsB/gQ2tG71lCke4NMrtIPS8pOj18BQ==",
			"dev": true,
			"dependencies": {
				"@babel/helper-plugin-utils": "^7.22.5",
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
			"version": "7.23.3",
			"resolved": "https://registry.npmjs.org/@babel/plugin-transform-reserved-words/-/plugin-transform-reserved-words-7.23.3.tgz",
			"integrity": "sha512-QnNTazY54YqgGxwIexMZva9gqbPa15t/x9VS+0fsEFWplwVpXYZivtgl43Z1vMpc1bdPP2PP8siFeVcnFvA3Cg==",
			"dev": true,
			"dependencies": {
				"@babel/helper-plugin-utils": "^7.22.5"
			},
			"engines": {
				"node": ">=6.9.0"
			},
			"peerDependencies": {
				"@babel/core": "^7.0.0-0"
			}
		},
		"node_modules/@babel/plugin-transform-runtime": {
			"version": "7.23.9",
			"resolved": "https://registry.npmjs.org/@babel/plugin-transform-runtime/-/plugin-transform-runtime-7.23.9.tgz",
			"integrity": "sha512-A7clW3a0aSjm3ONU9o2HAILSegJCYlEZmOhmBRReVtIpY/Z/p7yIZ+wR41Z+UipwdGuqwtID/V/dOdZXjwi9gQ==",
			"dev": true,
			"dependencies": {
				"@babel/helper-module-imports": "^7.22.15",
				"@babel/helper-plugin-utils": "^7.22.5",
				"babel-plugin-polyfill-corejs2": "^0.4.8",
				"babel-plugin-polyfill-corejs3": "^0.9.0",
				"babel-plugin-polyfill-regenerator": "^0.5.5",
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
			"bin": {
				"semver": "bin/semver.js"
			}
		},
		"node_modules/@babel/plugin-transform-shorthand-properties": {
			"version": "7.23.3",
			"resolved": "https://registry.npmjs.org/@babel/plugin-transform-shorthand-properties/-/plugin-transform-shorthand-properties-7.23.3.tgz",
			"integrity": "sha512-ED2fgqZLmexWiN+YNFX26fx4gh5qHDhn1O2gvEhreLW2iI63Sqm4llRLCXALKrCnbN4Jy0VcMQZl/SAzqug/jg==",
			"dev": true,
			"dependencies": {
				"@babel/helper-plugin-utils": "^7.22.5"
			},
			"engines": {
				"node": ">=6.9.0"
			},
			"peerDependencies": {
				"@babel/core": "^7.0.0-0"
			}
		},
		"node_modules/@babel/plugin-transform-spread": {
			"version": "7.23.3",
			"resolved": "https://registry.npmjs.org/@babel/plugin-transform-spread/-/plugin-transform-spread-7.23.3.tgz",
			"integrity": "sha512-VvfVYlrlBVu+77xVTOAoxQ6mZbnIq5FM0aGBSFEcIh03qHf+zNqA4DC/3XMUozTg7bZV3e3mZQ0i13VB6v5yUg==",
			"dev": true,
			"dependencies": {
				"@babel/helper-plugin-utils": "^7.22.5",
				"@babel/helper-skip-transparent-expression-wrappers": "^7.22.5"
			},
			"engines": {
				"node": ">=6.9.0"
			},
			"peerDependencies": {
				"@babel/core": "^7.0.0-0"
			}
		},
		"node_modules/@babel/plugin-transform-sticky-regex": {
			"version": "7.23.3",
			"resolved": "https://registry.npmjs.org/@babel/plugin-transform-sticky-regex/-/plugin-transform-sticky-regex-7.23.3.tgz",
			"integrity": "sha512-HZOyN9g+rtvnOU3Yh7kSxXrKbzgrm5X4GncPY1QOquu7epga5MxKHVpYu2hvQnry/H+JjckSYRb93iNfsioAGg==",
			"dev": true,
			"dependencies": {
				"@babel/helper-plugin-utils": "^7.22.5"
			},
			"engines": {
				"node": ">=6.9.0"
			},
			"peerDependencies": {
				"@babel/core": "^7.0.0-0"
			}
		},
		"node_modules/@babel/plugin-transform-template-literals": {
			"version": "7.23.3",
			"resolved": "https://registry.npmjs.org/@babel/plugin-transform-template-literals/-/plugin-transform-template-literals-7.23.3.tgz",
			"integrity": "sha512-Flok06AYNp7GV2oJPZZcP9vZdszev6vPBkHLwxwSpaIqx75wn6mUd3UFWsSsA0l8nXAKkyCmL/sR02m8RYGeHg==",
			"dev": true,
			"dependencies": {
				"@babel/helper-plugin-utils": "^7.22.5"
			},
			"engines": {
				"node": ">=6.9.0"
			},
			"peerDependencies": {
				"@babel/core": "^7.0.0-0"
			}
		},
		"node_modules/@babel/plugin-transform-typeof-symbol": {
			"version": "7.23.3",
			"resolved": "https://registry.npmjs.org/@babel/plugin-transform-typeof-symbol/-/plugin-transform-typeof-symbol-7.23.3.tgz",
			"integrity": "sha512-4t15ViVnaFdrPC74be1gXBSMzXk3B4Us9lP7uLRQHTFpV5Dvt33pn+2MyyNxmN3VTTm3oTrZVMUmuw3oBnQ2oQ==",
			"dev": true,
			"dependencies": {
				"@babel/helper-plugin-utils": "^7.22.5"
			},
			"engines": {
				"node": ">=6.9.0"
			},
			"peerDependencies": {
				"@babel/core": "^7.0.0-0"
			}
		},
		"node_modules/@babel/plugin-transform-unicode-escapes": {
			"version": "7.23.3",
			"resolved": "https://registry.npmjs.org/@babel/plugin-transform-unicode-escapes/-/plugin-transform-unicode-escapes-7.23.3.tgz",
			"integrity": "sha512-OMCUx/bU6ChE3r4+ZdylEqAjaQgHAgipgW8nsCfu5pGqDcFytVd91AwRvUJSBZDz0exPGgnjoqhgRYLRjFZc9Q==",
			"dev": true,
			"dependencies": {
				"@babel/helper-plugin-utils": "^7.22.5"
			},
			"engines": {
				"node": ">=6.9.0"
			},
			"peerDependencies": {
				"@babel/core": "^7.0.0-0"
			}
		},
		"node_modules/@babel/plugin-transform-unicode-property-regex": {
			"version": "7.23.3",
			"resolved": "https://registry.npmjs.org/@babel/plugin-transform-unicode-property-regex/-/plugin-transform-unicode-property-regex-7.23.3.tgz",
			"integrity": "sha512-KcLIm+pDZkWZQAFJ9pdfmh89EwVfmNovFBcXko8szpBeF8z68kWIPeKlmSOkT9BXJxs2C0uk+5LxoxIv62MROA==",
			"dev": true,
			"dependencies": {
				"@babel/helper-create-regexp-features-plugin": "^7.22.15",
				"@babel/helper-plugin-utils": "^7.22.5"
			},
			"engines": {
				"node": ">=6.9.0"
			},
			"peerDependencies": {
				"@babel/core": "^7.0.0-0"
			}
		},
		"node_modules/@babel/plugin-transform-unicode-regex": {
			"version": "7.23.3",
			"resolved": "https://registry.npmjs.org/@babel/plugin-transform-unicode-regex/-/plugin-transform-unicode-regex-7.23.3.tgz",
			"integrity": "sha512-wMHpNA4x2cIA32b/ci3AfwNgheiva2W0WUKWTK7vBHBhDKfPsc5cFGNWm69WBqpwd86u1qwZ9PWevKqm1A3yAw==",
			"dev": true,
			"dependencies": {
				"@babel/helper-create-regexp-features-plugin": "^7.22.15",
				"@babel/helper-plugin-utils": "^7.22.5"
			},
			"engines": {
				"node": ">=6.9.0"
			},
			"peerDependencies": {
				"@babel/core": "^7.0.0-0"
			}
		},
		"node_modules/@babel/plugin-transform-unicode-sets-regex": {
			"version": "7.23.3",
			"resolved": "https://registry.npmjs.org/@babel/plugin-transform-unicode-sets-regex/-/plugin-transform-unicode-sets-regex-7.23.3.tgz",
			"integrity": "sha512-W7lliA/v9bNR83Qc3q1ip9CQMZ09CcHDbHfbLRDNuAhn1Mvkr1ZNF7hPmztMQvtTGVLJ9m8IZqWsTkXOml8dbw==",
			"dev": true,
			"dependencies": {
				"@babel/helper-create-regexp-features-plugin": "^7.22.15",
				"@babel/helper-plugin-utils": "^7.22.5"
			},
			"engines": {
				"node": ">=6.9.0"
			},
			"peerDependencies": {
				"@babel/core": "^7.0.0"
			}
		},
		"node_modules/@babel/preset-env": {
			"version": "7.23.9",
			"resolved": "https://registry.npmjs.org/@babel/preset-env/-/preset-env-7.23.9.tgz",
			"integrity": "sha512-3kBGTNBBk9DQiPoXYS0g0BYlwTQYUTifqgKTjxUwEUkduRT2QOa0FPGBJ+NROQhGyYO5BuTJwGvBnqKDykac6A==",
			"dev": true,
			"dependencies": {
				"@babel/compat-data": "^7.23.5",
				"@babel/helper-compilation-targets": "^7.23.6",
				"@babel/helper-plugin-utils": "^7.22.5",
				"@babel/helper-validator-option": "^7.23.5",
				"@babel/plugin-bugfix-safari-id-destructuring-collision-in-function-expression": "^7.23.3",
				"@babel/plugin-bugfix-v8-spread-parameters-in-optional-chaining": "^7.23.3",
				"@babel/plugin-bugfix-v8-static-class-fields-redefine-readonly": "^7.23.7",
				"@babel/plugin-proposal-private-property-in-object": "7.21.0-placeholder-for-preset-env.2",
				"@babel/plugin-syntax-async-generators": "^7.8.4",
				"@babel/plugin-syntax-class-properties": "^7.12.13",
				"@babel/plugin-syntax-class-static-block": "^7.14.5",
				"@babel/plugin-syntax-dynamic-import": "^7.8.3",
				"@babel/plugin-syntax-export-namespace-from": "^7.8.3",
				"@babel/plugin-syntax-import-assertions": "^7.23.3",
				"@babel/plugin-syntax-import-attributes": "^7.23.3",
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
				"@babel/plugin-transform-arrow-functions": "^7.23.3",
				"@babel/plugin-transform-async-generator-functions": "^7.23.9",
				"@babel/plugin-transform-async-to-generator": "^7.23.3",
				"@babel/plugin-transform-block-scoped-functions": "^7.23.3",
				"@babel/plugin-transform-block-scoping": "^7.23.4",
				"@babel/plugin-transform-class-properties": "^7.23.3",
				"@babel/plugin-transform-class-static-block": "^7.23.4",
				"@babel/plugin-transform-classes": "^7.23.8",
				"@babel/plugin-transform-computed-properties": "^7.23.3",
				"@babel/plugin-transform-destructuring": "^7.23.3",
				"@babel/plugin-transform-dotall-regex": "^7.23.3",
				"@babel/plugin-transform-duplicate-keys": "^7.23.3",
				"@babel/plugin-transform-dynamic-import": "^7.23.4",
				"@babel/plugin-transform-exponentiation-operator": "^7.23.3",
				"@babel/plugin-transform-export-namespace-from": "^7.23.4",
				"@babel/plugin-transform-for-of": "^7.23.6",
				"@babel/plugin-transform-function-name": "^7.23.3",
				"@babel/plugin-transform-json-strings": "^7.23.4",
				"@babel/plugin-transform-literals": "^7.23.3",
				"@babel/plugin-transform-logical-assignment-operators": "^7.23.4",
				"@babel/plugin-transform-member-expression-literals": "^7.23.3",
				"@babel/plugin-transform-modules-amd": "^7.23.3",
				"@babel/plugin-transform-modules-commonjs": "^7.23.3",
				"@babel/plugin-transform-modules-systemjs": "^7.23.9",
				"@babel/plugin-transform-modules-umd": "^7.23.3",
				"@babel/plugin-transform-named-capturing-groups-regex": "^7.22.5",
				"@babel/plugin-transform-new-target": "^7.23.3",
				"@babel/plugin-transform-nullish-coalescing-operator": "^7.23.4",
				"@babel/plugin-transform-numeric-separator": "^7.23.4",
				"@babel/plugin-transform-object-rest-spread": "^7.23.4",
				"@babel/plugin-transform-object-super": "^7.23.3",
				"@babel/plugin-transform-optional-catch-binding": "^7.23.4",
				"@babel/plugin-transform-optional-chaining": "^7.23.4",
				"@babel/plugin-transform-parameters": "^7.23.3",
				"@babel/plugin-transform-private-methods": "^7.23.3",
				"@babel/plugin-transform-private-property-in-object": "^7.23.4",
				"@babel/plugin-transform-property-literals": "^7.23.3",
				"@babel/plugin-transform-regenerator": "^7.23.3",
				"@babel/plugin-transform-reserved-words": "^7.23.3",
				"@babel/plugin-transform-shorthand-properties": "^7.23.3",
				"@babel/plugin-transform-spread": "^7.23.3",
				"@babel/plugin-transform-sticky-regex": "^7.23.3",
				"@babel/plugin-transform-template-literals": "^7.23.3",
				"@babel/plugin-transform-typeof-symbol": "^7.23.3",
				"@babel/plugin-transform-unicode-escapes": "^7.23.3",
				"@babel/plugin-transform-unicode-property-regex": "^7.23.3",
				"@babel/plugin-transform-unicode-regex": "^7.23.3",
				"@babel/plugin-transform-unicode-sets-regex": "^7.23.3",
				"@babel/preset-modules": "0.1.6-no-external-plugins",
				"babel-plugin-polyfill-corejs2": "^0.4.8",
				"babel-plugin-polyfill-corejs3": "^0.9.0",
				"babel-plugin-polyfill-regenerator": "^0.5.5",
				"core-js-compat": "^3.31.0",
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
			"bin": {
				"semver": "bin/semver.js"
			}
		},
		"node_modules/@babel/preset-modules": {
			"version": "0.1.6-no-external-plugins",
			"resolved": "https://registry.npmjs.org/@babel/preset-modules/-/preset-modules-0.1.6-no-external-plugins.tgz",
			"integrity": "sha512-HrcgcIESLm9aIR842yhJ5RWan/gebQUJ6E/E5+rf0y9o6oj7w0Br+sWuL6kEQ/o/AdfvR1Je9jG18/gnpwjEyA==",
			"dev": true,
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
			"dev": true
		},
		"node_modules/@babel/runtime": {
			"version": "7.23.9",
			"resolved": "https://registry.npmjs.org/@babel/runtime/-/runtime-7.23.9.tgz",
			"integrity": "sha512-0CX6F+BI2s9dkUqr08KFrAIZgNFj75rdBU/DjCyYLIaV/quFjkk6T+EJ2LkZHyZTbEV4L5p97mNkUsHl2wLFAw==",
			"dev": true,
			"dependencies": {
				"regenerator-runtime": "^0.14.0"
			},
			"engines": {
				"node": ">=6.9.0"
			}
		},
		"node_modules/@babel/template": {
			"version": "7.24.0",
			"resolved": "https://registry.npmjs.org/@babel/template/-/template-7.24.0.tgz",
			"integrity": "sha512-Bkf2q8lMB0AFpX0NFEqSbx1OkTHf0f+0j82mkw+ZpzBnkk7e9Ql0891vlfgi+kHwOk8tQjiQHpqh4LaSa0fKEA==",
			"dev": true,
			"dependencies": {
				"@babel/code-frame": "^7.23.5",
				"@babel/parser": "^7.24.0",
				"@babel/types": "^7.24.0"
			},
			"engines": {
				"node": ">=6.9.0"
			}
		},
		"node_modules/@babel/traverse": {
			"version": "7.24.0",
			"resolved": "https://registry.npmjs.org/@babel/traverse/-/traverse-7.24.0.tgz",
			"integrity": "sha512-HfuJlI8qq3dEDmNU5ChzzpZRWq+oxCZQyMzIMEqLho+AQnhMnKQUzH6ydo3RBl/YjPCuk68Y6s0Gx0AeyULiWw==",
			"dev": true,
			"dependencies": {
				"@babel/code-frame": "^7.23.5",
				"@babel/generator": "^7.23.6",
				"@babel/helper-environment-visitor": "^7.22.20",
				"@babel/helper-function-name": "^7.23.0",
				"@babel/helper-hoist-variables": "^7.22.5",
				"@babel/helper-split-export-declaration": "^7.22.6",
				"@babel/parser": "^7.24.0",
				"@babel/types": "^7.24.0",
				"debug": "^4.3.1",
				"globals": "^11.1.0"
			},
			"engines": {
				"node": ">=6.9.0"
			}
		},
		"node_modules/@babel/types": {
			"version": "7.24.0",
			"resolved": "https://registry.npmjs.org/@babel/types/-/types-7.24.0.tgz",
			"integrity": "sha512-+j7a5c253RfKh8iABBhywc8NSfP5LURe7Uh4qpsh6jc+aLJguvmIUBdjSdEMQv2bENrCR5MfRdjGo7vzS/ob7w==",
			"dev": true,
			"dependencies": {
				"@babel/helper-string-parser": "^7.23.4",
				"@babel/helper-validator-identifier": "^7.22.20",
				"to-fast-properties": "^2.0.0"
			},
			"engines": {
				"node": ">=6.9.0"
			}
		},
		"node_modules/@discoveryjs/json-ext": {
			"version": "0.5.7",
			"resolved": "https://registry.npmjs.org/@discoveryjs/json-ext/-/json-ext-0.5.7.tgz",
			"integrity": "sha512-dBVuXR082gk3jsFp7Rd/JI4kytwGHecnCoTtXFb7DB6CNHp4rg5k1bhg0nWdLGLnOV71lmDzGQaLMy8iPLY0pw==",
			"dev": true,
			"engines": {
				"node": ">=10.0.0"
			}
		},
		"node_modules/@esbuild/aix-ppc64": {
			"version": "0.20.0",
			"resolved": "https://registry.npmjs.org/@esbuild/aix-ppc64/-/aix-ppc64-0.20.0.tgz",
			"integrity": "sha512-fGFDEctNh0CcSwsiRPxiaqX0P5rq+AqE0SRhYGZ4PX46Lg1FNR6oCxJghf8YgY0WQEgQuh3lErUFE4KxLeRmmw==",
			"cpu": [
				"ppc64"
			],
			"dev": true,
			"optional": true,
			"os": [
				"aix"
			],
			"engines": {
				"node": ">=12"
			}
		},
		"node_modules/@esbuild/android-arm": {
			"version": "0.20.0",
			"resolved": "https://registry.npmjs.org/@esbuild/android-arm/-/android-arm-0.20.0.tgz",
			"integrity": "sha512-3bMAfInvByLHfJwYPJRlpTeaQA75n8C/QKpEaiS4HrFWFiJlNI0vzq/zCjBrhAYcPyVPG7Eo9dMrcQXuqmNk5g==",
			"cpu": [
				"arm"
			],
			"dev": true,
			"optional": true,
			"os": [
				"android"
			],
			"engines": {
				"node": ">=12"
			}
		},
		"node_modules/@esbuild/android-arm64": {
			"version": "0.20.0",
			"resolved": "https://registry.npmjs.org/@esbuild/android-arm64/-/android-arm64-0.20.0.tgz",
			"integrity": "sha512-aVpnM4lURNkp0D3qPoAzSG92VXStYmoVPOgXveAUoQBWRSuQzt51yvSju29J6AHPmwY1BjH49uR29oyfH1ra8Q==",
			"cpu": [
				"arm64"
			],
			"dev": true,
			"optional": true,
			"os": [
				"android"
			],
			"engines": {
				"node": ">=12"
			}
		},
		"node_modules/@esbuild/android-x64": {
			"version": "0.20.0",
			"resolved": "https://registry.npmjs.org/@esbuild/android-x64/-/android-x64-0.20.0.tgz",
			"integrity": "sha512-uK7wAnlRvjkCPzh8jJ+QejFyrP8ObKuR5cBIsQZ+qbMunwR8sbd8krmMbxTLSrDhiPZaJYKQAU5Y3iMDcZPhyQ==",
			"cpu": [
				"x64"
			],
			"dev": true,
			"optional": true,
			"os": [
				"android"
			],
			"engines": {
				"node": ">=12"
			}
		},
		"node_modules/@esbuild/darwin-arm64": {
			"version": "0.20.0",
			"resolved": "https://registry.npmjs.org/@esbuild/darwin-arm64/-/darwin-arm64-0.20.0.tgz",
			"integrity": "sha512-AjEcivGAlPs3UAcJedMa9qYg9eSfU6FnGHJjT8s346HSKkrcWlYezGE8VaO2xKfvvlZkgAhyvl06OJOxiMgOYQ==",
			"cpu": [
				"arm64"
			],
			"dev": true,
			"optional": true,
			"os": [
				"darwin"
			],
			"engines": {
				"node": ">=12"
			}
		},
		"node_modules/@esbuild/darwin-x64": {
			"version": "0.20.0",
			"resolved": "https://registry.npmjs.org/@esbuild/darwin-x64/-/darwin-x64-0.20.0.tgz",
			"integrity": "sha512-bsgTPoyYDnPv8ER0HqnJggXK6RyFy4PH4rtsId0V7Efa90u2+EifxytE9pZnsDgExgkARy24WUQGv9irVbTvIw==",
			"cpu": [
				"x64"
			],
			"dev": true,
			"optional": true,
			"os": [
				"darwin"
			],
			"engines": {
				"node": ">=12"
			}
		},
		"node_modules/@esbuild/freebsd-arm64": {
			"version": "0.20.0",
			"resolved": "https://registry.npmjs.org/@esbuild/freebsd-arm64/-/freebsd-arm64-0.20.0.tgz",
			"integrity": "sha512-kQ7jYdlKS335mpGbMW5tEe3IrQFIok9r84EM3PXB8qBFJPSc6dpWfrtsC/y1pyrz82xfUIn5ZrnSHQQsd6jebQ==",
			"cpu": [
				"arm64"
			],
			"dev": true,
			"optional": true,
			"os": [
				"freebsd"
			],
			"engines": {
				"node": ">=12"
			}
		},
		"node_modules/@esbuild/freebsd-x64": {
			"version": "0.20.0",
			"resolved": "https://registry.npmjs.org/@esbuild/freebsd-x64/-/freebsd-x64-0.20.0.tgz",
			"integrity": "sha512-uG8B0WSepMRsBNVXAQcHf9+Ko/Tr+XqmK7Ptel9HVmnykupXdS4J7ovSQUIi0tQGIndhbqWLaIL/qO/cWhXKyQ==",
			"cpu": [
				"x64"
			],
			"dev": true,
			"optional": true,
			"os": [
				"freebsd"
			],
			"engines": {
				"node": ">=12"
			}
		},
		"node_modules/@esbuild/linux-arm": {
			"version": "0.20.0",
			"resolved": "https://registry.npmjs.org/@esbuild/linux-arm/-/linux-arm-0.20.0.tgz",
			"integrity": "sha512-2ezuhdiZw8vuHf1HKSf4TIk80naTbP9At7sOqZmdVwvvMyuoDiZB49YZKLsLOfKIr77+I40dWpHVeY5JHpIEIg==",
			"cpu": [
				"arm"
			],
			"dev": true,
			"optional": true,
			"os": [
				"linux"
			],
			"engines": {
				"node": ">=12"
			}
		},
		"node_modules/@esbuild/linux-arm64": {
			"version": "0.20.0",
			"resolved": "https://registry.npmjs.org/@esbuild/linux-arm64/-/linux-arm64-0.20.0.tgz",
			"integrity": "sha512-uTtyYAP5veqi2z9b6Gr0NUoNv9F/rOzI8tOD5jKcCvRUn7T60Bb+42NDBCWNhMjkQzI0qqwXkQGo1SY41G52nw==",
			"cpu": [
				"arm64"
			],
			"dev": true,
			"optional": true,
			"os": [
				"linux"
			],
			"engines": {
				"node": ">=12"
			}
		},
		"node_modules/@esbuild/linux-ia32": {
			"version": "0.20.0",
			"resolved": "https://registry.npmjs.org/@esbuild/linux-ia32/-/linux-ia32-0.20.0.tgz",
			"integrity": "sha512-c88wwtfs8tTffPaoJ+SQn3y+lKtgTzyjkD8NgsyCtCmtoIC8RDL7PrJU05an/e9VuAke6eJqGkoMhJK1RY6z4w==",
			"cpu": [
				"ia32"
			],
			"dev": true,
			"optional": true,
			"os": [
				"linux"
			],
			"engines": {
				"node": ">=12"
			}
		},
		"node_modules/@esbuild/linux-loong64": {
			"version": "0.20.0",
			"resolved": "https://registry.npmjs.org/@esbuild/linux-loong64/-/linux-loong64-0.20.0.tgz",
			"integrity": "sha512-lR2rr/128/6svngnVta6JN4gxSXle/yZEZL3o4XZ6esOqhyR4wsKyfu6qXAL04S4S5CgGfG+GYZnjFd4YiG3Aw==",
			"cpu": [
				"loong64"
			],
			"dev": true,
			"optional": true,
			"os": [
				"linux"
			],
			"engines": {
				"node": ">=12"
			}
		},
		"node_modules/@esbuild/linux-mips64el": {
			"version": "0.20.0",
			"resolved": "https://registry.npmjs.org/@esbuild/linux-mips64el/-/linux-mips64el-0.20.0.tgz",
			"integrity": "sha512-9Sycc+1uUsDnJCelDf6ZNqgZQoK1mJvFtqf2MUz4ujTxGhvCWw+4chYfDLPepMEvVL9PDwn6HrXad5yOrNzIsQ==",
			"cpu": [
				"mips64el"
			],
			"dev": true,
			"optional": true,
			"os": [
				"linux"
			],
			"engines": {
				"node": ">=12"
			}
		},
		"node_modules/@esbuild/linux-ppc64": {
			"version": "0.20.0",
			"resolved": "https://registry.npmjs.org/@esbuild/linux-ppc64/-/linux-ppc64-0.20.0.tgz",
			"integrity": "sha512-CoWSaaAXOZd+CjbUTdXIJE/t7Oz+4g90A3VBCHLbfuc5yUQU/nFDLOzQsN0cdxgXd97lYW/psIIBdjzQIwTBGw==",
			"cpu": [
				"ppc64"
			],
			"dev": true,
			"optional": true,
			"os": [
				"linux"
			],
			"engines": {
				"node": ">=12"
			}
		},
		"node_modules/@esbuild/linux-riscv64": {
			"version": "0.20.0",
			"resolved": "https://registry.npmjs.org/@esbuild/linux-riscv64/-/linux-riscv64-0.20.0.tgz",
			"integrity": "sha512-mlb1hg/eYRJUpv8h/x+4ShgoNLL8wgZ64SUr26KwglTYnwAWjkhR2GpoKftDbPOCnodA9t4Y/b68H4J9XmmPzA==",
			"cpu": [
				"riscv64"
			],
			"dev": true,
			"optional": true,
			"os": [
				"linux"
			],
			"engines": {
				"node": ">=12"
			}
		},
		"node_modules/@esbuild/linux-s390x": {
			"version": "0.20.0",
			"resolved": "https://registry.npmjs.org/@esbuild/linux-s390x/-/linux-s390x-0.20.0.tgz",
			"integrity": "sha512-fgf9ubb53xSnOBqyvWEY6ukBNRl1mVX1srPNu06B6mNsNK20JfH6xV6jECzrQ69/VMiTLvHMicQR/PgTOgqJUQ==",
			"cpu": [
				"s390x"
			],
			"dev": true,
			"optional": true,
			"os": [
				"linux"
			],
			"engines": {
				"node": ">=12"
			}
		},
		"node_modules/@esbuild/linux-x64": {
			"version": "0.20.0",
			"resolved": "https://registry.npmjs.org/@esbuild/linux-x64/-/linux-x64-0.20.0.tgz",
			"integrity": "sha512-H9Eu6MGse++204XZcYsse1yFHmRXEWgadk2N58O/xd50P9EvFMLJTQLg+lB4E1cF2xhLZU5luSWtGTb0l9UeSg==",
			"cpu": [
				"x64"
			],
			"dev": true,
			"optional": true,
			"os": [
				"linux"
			],
			"engines": {
				"node": ">=12"
			}
		},
		"node_modules/@esbuild/netbsd-x64": {
			"version": "0.20.0",
			"resolved": "https://registry.npmjs.org/@esbuild/netbsd-x64/-/netbsd-x64-0.20.0.tgz",
			"integrity": "sha512-lCT675rTN1v8Fo+RGrE5KjSnfY0x9Og4RN7t7lVrN3vMSjy34/+3na0q7RIfWDAj0e0rCh0OL+P88lu3Rt21MQ==",
			"cpu": [
				"x64"
			],
			"dev": true,
			"optional": true,
			"os": [
				"netbsd"
			],
			"engines": {
				"node": ">=12"
			}
		},
		"node_modules/@esbuild/openbsd-x64": {
			"version": "0.20.0",
			"resolved": "https://registry.npmjs.org/@esbuild/openbsd-x64/-/openbsd-x64-0.20.0.tgz",
			"integrity": "sha512-HKoUGXz/TOVXKQ+67NhxyHv+aDSZf44QpWLa3I1lLvAwGq8x1k0T+e2HHSRvxWhfJrFxaaqre1+YyzQ99KixoA==",
			"cpu": [
				"x64"
			],
			"dev": true,
			"optional": true,
			"os": [
				"openbsd"
			],
			"engines": {
				"node": ">=12"
			}
		},
		"node_modules/@esbuild/sunos-x64": {
			"version": "0.20.0",
			"resolved": "https://registry.npmjs.org/@esbuild/sunos-x64/-/sunos-x64-0.20.0.tgz",
			"integrity": "sha512-GDwAqgHQm1mVoPppGsoq4WJwT3vhnz/2N62CzhvApFD1eJyTroob30FPpOZabN+FgCjhG+AgcZyOPIkR8dfD7g==",
			"cpu": [
				"x64"
			],
			"dev": true,
			"optional": true,
			"os": [
				"sunos"
			],
			"engines": {
				"node": ">=12"
			}
		},
		"node_modules/@esbuild/win32-arm64": {
			"version": "0.20.0",
			"resolved": "https://registry.npmjs.org/@esbuild/win32-arm64/-/win32-arm64-0.20.0.tgz",
			"integrity": "sha512-0vYsP8aC4TvMlOQYozoksiaxjlvUcQrac+muDqj1Fxy6jh9l9CZJzj7zmh8JGfiV49cYLTorFLxg7593pGldwQ==",
			"cpu": [
				"arm64"
			],
			"dev": true,
			"optional": true,
			"os": [
				"win32"
			],
			"engines": {
				"node": ">=12"
			}
		},
		"node_modules/@esbuild/win32-ia32": {
			"version": "0.20.0",
			"resolved": "https://registry.npmjs.org/@esbuild/win32-ia32/-/win32-ia32-0.20.0.tgz",
			"integrity": "sha512-p98u4rIgfh4gdpV00IqknBD5pC84LCub+4a3MO+zjqvU5MVXOc3hqR2UgT2jI2nh3h8s9EQxmOsVI3tyzv1iFg==",
			"cpu": [
				"ia32"
			],
			"dev": true,
			"optional": true,
			"os": [
				"win32"
			],
			"engines": {
				"node": ">=12"
			}
		},
		"node_modules/@esbuild/win32-x64": {
			"version": "0.20.0",
			"resolved": "https://registry.npmjs.org/@esbuild/win32-x64/-/win32-x64-0.20.0.tgz",
			"integrity": "sha512-NgJnesu1RtWihtTtXGFMU5YSE6JyyHPMxCwBZK7a6/8d31GuSo9l0Ss7w1Jw5QnKUawG6UEehs883kcXf5fYwg==",
			"cpu": [
				"x64"
			],
			"dev": true,
			"optional": true,
			"os": [
				"win32"
			],
			"engines": {
				"node": ">=12"
			}
		},
		"node_modules/@fastify/busboy": {
			"version": "2.1.1",
			"resolved": "https://registry.npmjs.org/@fastify/busboy/-/busboy-2.1.1.tgz",
			"integrity": "sha512-vBZP4NlzfOlerQTnba4aqZoMhE/a9HY7HRqoOPaETQcSQuWEIyZMHGfVu6w9wGtGK5fED5qRs2DteVCjOH60sA==",
			"dev": true,
			"engines": {
				"node": ">=14"
			}
		},
		"node_modules/@floating-ui/core": {
			"version": "1.6.0",
			"resolved": "https://registry.npmjs.org/@floating-ui/core/-/core-1.6.0.tgz",
			"integrity": "sha512-PcF++MykgmTj3CIyOQbKA/hDzOAiqI3mhuoN44WRCopIs1sgoDoU4oty4Jtqaj/y3oDU6fnVSm4QG0a3t5i0+g==",
			"dev": true,
			"dependencies": {
				"@floating-ui/utils": "^0.2.1"
			}
		},
		"node_modules/@floating-ui/dom": {
			"version": "1.6.3",
			"resolved": "https://registry.npmjs.org/@floating-ui/dom/-/dom-1.6.3.tgz",
			"integrity": "sha512-RnDthu3mzPlQ31Ss/BTwQ1zjzIhr3lk1gZB1OC56h/1vEtaXkESrOqL5fQVMfXpwGtRwX+YsZBdyHtJMQnkArw==",
			"dev": true,
			"dependencies": {
				"@floating-ui/core": "^1.0.0",
				"@floating-ui/utils": "^0.2.0"
			}
		},
		"node_modules/@floating-ui/utils": {
			"version": "0.2.1",
			"resolved": "https://registry.npmjs.org/@floating-ui/utils/-/utils-0.2.1.tgz",
			"integrity": "sha512-9TANp6GPoMtYzQdt54kfAyMmz1+osLlXdg2ENroU7zzrtflTLrrC/lgrIfaSe+Wu0b89GKccT7vxXA0MoAIO+Q==",
			"dev": true
		},
		"node_modules/@isaacs/cliui": {
			"version": "8.0.2",
			"resolved": "https://registry.npmjs.org/@isaacs/cliui/-/cliui-8.0.2.tgz",
			"integrity": "sha512-O8jcjabXaleOG9DQ0+ARXWZBTfnP4WNAqzuiJK7ll44AmxGKv/J2M4TPjxjY3znBCfvBXFzucm1twdyFybFqEA==",
			"dev": true,
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
			"dev": true
		},
		"node_modules/@isaacs/cliui/node_modules/string-width": {
			"version": "5.1.2",
			"resolved": "https://registry.npmjs.org/string-width/-/string-width-5.1.2.tgz",
			"integrity": "sha512-HnLOCR3vjcY8beoNLtcjZ5/nxn2afmME6lhrDrebokqMap+XbeW8n9TXpPDOqdGK5qcI3oT0GKTW6wC7EMiVqA==",
			"dev": true,
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
		"node_modules/@istanbuljs/load-nyc-config": {
			"version": "1.1.0",
			"resolved": "https://registry.npmjs.org/@istanbuljs/load-nyc-config/-/load-nyc-config-1.1.0.tgz",
			"integrity": "sha512-VjeHSlIzpv/NyD3N0YuHfXOPDIixcA1q2ZV98wsMqcYlPmv2n3Yb2lYP9XMElnaFVXg5A7YLTeLu6V84uQDjmQ==",
			"dev": true,
			"dependencies": {
				"camelcase": "^5.3.1",
				"find-up": "^4.1.0",
				"get-package-type": "^0.1.0",
				"js-yaml": "^3.13.1",
				"resolve-from": "^5.0.0"
			},
			"engines": {
				"node": ">=8"
			}
		},
		"node_modules/@istanbuljs/schema": {
			"version": "0.1.3",
			"resolved": "https://registry.npmjs.org/@istanbuljs/schema/-/schema-0.1.3.tgz",
			"integrity": "sha512-ZXRY4jNvVgSVQ8DL3LTcakaAtXwTVUxE81hslsyD2AtoXW/wVob10HkOJ1X/pAlcI7D+2YoZKg5do8G/w6RYgA==",
			"dev": true,
			"engines": {
				"node": ">=8"
			}
		},
		"node_modules/@jridgewell/gen-mapping": {
			"version": "0.3.5",
			"resolved": "https://registry.npmjs.org/@jridgewell/gen-mapping/-/gen-mapping-0.3.5.tgz",
			"integrity": "sha512-IzL8ZoEDIBRWEzlCcRhOaCupYyN5gdIK+Q6fbFdPDg6HqX6jpkItn7DFIpW9LQzXG6Df9sA7+OKnq0qlz/GaQg==",
			"dev": true,
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
			"engines": {
				"node": ">=6.0.0"
			}
		},
		"node_modules/@jridgewell/set-array": {
			"version": "1.2.1",
			"resolved": "https://registry.npmjs.org/@jridgewell/set-array/-/set-array-1.2.1.tgz",
			"integrity": "sha512-R8gLRTZeyp03ymzP/6Lil/28tGeGEzhx1q2k703KGWRAI1VdvPIXdG70VJc2pAMw3NA6JKL5hhFu1sJX0Mnn/A==",
			"dev": true,
			"engines": {
				"node": ">=6.0.0"
			}
		},
		"node_modules/@jridgewell/source-map": {
			"version": "0.3.5",
			"resolved": "https://registry.npmjs.org/@jridgewell/source-map/-/source-map-0.3.5.tgz",
			"integrity": "sha512-UTYAUj/wviwdsMfzoSJspJxbkH5o1snzwX0//0ENX1u/55kkZZkcTZP6u9bwKGkv+dkk9at4m1Cpt0uY80kcpQ==",
			"dev": true,
			"dependencies": {
				"@jridgewell/gen-mapping": "^0.3.0",
				"@jridgewell/trace-mapping": "^0.3.9"
			}
		},
		"node_modules/@jridgewell/sourcemap-codec": {
			"version": "1.4.15",
			"resolved": "https://registry.npmjs.org/@jridgewell/sourcemap-codec/-/sourcemap-codec-1.4.15.tgz",
			"integrity": "sha512-eF2rxCRulEKXHTRiDrDy6erMYWqNw4LPdQ8UQA4huuxaQsVeRPFl2oM8oDGxMFhJUWZf9McpLtJasDDZb/Bpeg==",
			"dev": true
		},
		"node_modules/@jridgewell/trace-mapping": {
			"version": "0.3.25",
			"resolved": "https://registry.npmjs.org/@jridgewell/trace-mapping/-/trace-mapping-0.3.25.tgz",
			"integrity": "sha512-vNk6aEwybGtawWmy/PzwnGDOjCkLWSD2wqvjGGAgOAwCGWySYXfYoxt00IJkTF+8Lb57DwOb3Aa0o9CApepiYQ==",
			"dev": true,
			"dependencies": {
				"@jridgewell/resolve-uri": "^3.1.0",
				"@jridgewell/sourcemap-codec": "^1.4.14"
			}
		},
		"node_modules/@leichtgewicht/ip-codec": {
			"version": "2.0.4",
			"resolved": "https://registry.npmjs.org/@leichtgewicht/ip-codec/-/ip-codec-2.0.4.tgz",
			"integrity": "sha512-Hcv+nVC0kZnQ3tD9GVu5xSMR4VVYOteQIr/hwFPVEvPdlXqgGEuRjiheChHgdM+JyqdgNcmzZOX/tnl0JOiI7A==",
			"dev": true
		},
		"node_modules/@ljharb/through": {
			"version": "2.3.12",
			"resolved": "https://registry.npmjs.org/@ljharb/through/-/through-2.3.12.tgz",
			"integrity": "sha512-ajo/heTlG3QgC8EGP6APIejksVAYt4ayz4tqoP3MolFELzcH1x1fzwEYRJTPO0IELutZ5HQ0c26/GqAYy79u3g==",
			"dev": true,
			"dependencies": {
				"call-bind": "^1.0.5"
			},
			"engines": {
				"node": ">= 0.4"
			}
		},
		"node_modules/@ngtools/webpack": {
			"version": "17.2.2",
			"resolved": "https://registry.npmjs.org/@ngtools/webpack/-/webpack-17.2.2.tgz",
			"integrity": "sha512-HgvClGO6WVq4VA5d0ZvlDG5hrj8lQzRH99Gt87URm7G8E5XkatysdOsMqUQsJz+OwFWhP4PvTRWVblpBDiDl/A==",
			"dev": true,
			"engines": {
				"node": "^18.13.0 || >=20.9.0",
				"npm": "^6.11.0 || ^7.5.6 || >=8.0.0",
				"yarn": ">= 1.13.0"
			},
			"peerDependencies": {
				"@angular/compiler-cli": "^17.0.0",
				"typescript": ">=5.2 <5.4",
				"webpack": "^5.54.0"
			}
		},
		"node_modules/@nodelib/fs.scandir": {
			"version": "2.1.5",
			"resolved": "https://registry.npmjs.org/@nodelib/fs.scandir/-/fs.scandir-2.1.5.tgz",
			"integrity": "sha512-vq24Bq3ym5HEQm2NKCr3yXDwjc7vTsEThRDnkp2DK9p1uqLR+DHurm/NOTo0KG7HYHU7eppKZj3MyqYuMBf62g==",
			"dev": true,
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
			"engines": {
				"node": ">= 8"
			}
		},
		"node_modules/@nodelib/fs.walk": {
			"version": "1.2.8",
			"resolved": "https://registry.npmjs.org/@nodelib/fs.walk/-/fs.walk-1.2.8.tgz",
			"integrity": "sha512-oGB+UxlgWcgQkgwo8GcEGwemoTFt3FIO9ababBmaGwXIoBKZ+GTy0pP185beGg7Llih/NSHSV2XAs1lnznocSg==",
			"dev": true,
			"dependencies": {
				"@nodelib/fs.scandir": "2.1.5",
				"fastq": "^1.6.0"
			},
			"engines": {
				"node": ">= 8"
			}
		},
		"node_modules/@npmcli/agent": {
			"version": "2.2.1",
			"resolved": "https://registry.npmjs.org/@npmcli/agent/-/agent-2.2.1.tgz",
			"integrity": "sha512-H4FrOVtNyWC8MUwL3UfjOsAihHvT1Pe8POj3JvjXhSTJipsZMtgUALCT4mGyYZNxymkUfOw3PUj6dE4QPp6osQ==",
			"dev": true,
			"dependencies": {
				"agent-base": "^7.1.0",
				"http-proxy-agent": "^7.0.0",
				"https-proxy-agent": "^7.0.1",
				"lru-cache": "^10.0.1",
				"socks-proxy-agent": "^8.0.1"
			},
			"engines": {
				"node": "^16.14.0 || >=18.0.0"
			}
		},
		"node_modules/@npmcli/agent/node_modules/lru-cache": {
			"version": "10.2.0",
			"resolved": "https://registry.npmjs.org/lru-cache/-/lru-cache-10.2.0.tgz",
			"integrity": "sha512-2bIM8x+VAf6JT4bKAljS1qUWgMsqZRPGJS6FSahIMPVvctcNhyVp7AJu7quxOW9jwkryBReKZY5tY5JYv2n/7Q==",
			"dev": true,
			"engines": {
				"node": "14 || >=16.14"
			}
		},
		"node_modules/@npmcli/fs": {
			"version": "3.1.0",
			"resolved": "https://registry.npmjs.org/@npmcli/fs/-/fs-3.1.0.tgz",
			"integrity": "sha512-7kZUAaLscfgbwBQRbvdMYaZOWyMEcPTH/tJjnyAWJ/dvvs9Ef+CERx/qJb9GExJpl1qipaDGn7KqHnFGGixd0w==",
			"dev": true,
			"dependencies": {
				"semver": "^7.3.5"
			},
			"engines": {
				"node": "^14.17.0 || ^16.13.0 || >=18.0.0"
			}
		},
		"node_modules/@npmcli/git": {
			"version": "5.0.4",
			"resolved": "https://registry.npmjs.org/@npmcli/git/-/git-5.0.4.tgz",
			"integrity": "sha512-nr6/WezNzuYUppzXRaYu/W4aT5rLxdXqEFupbh6e/ovlYFQ8hpu1UUPV3Ir/YTl+74iXl2ZOMlGzudh9ZPUchQ==",
			"dev": true,
			"dependencies": {
				"@npmcli/promise-spawn": "^7.0.0",
				"lru-cache": "^10.0.1",
				"npm-pick-manifest": "^9.0.0",
				"proc-log": "^3.0.0",
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
			"version": "10.2.0",
			"resolved": "https://registry.npmjs.org/lru-cache/-/lru-cache-10.2.0.tgz",
			"integrity": "sha512-2bIM8x+VAf6JT4bKAljS1qUWgMsqZRPGJS6FSahIMPVvctcNhyVp7AJu7quxOW9jwkryBReKZY5tY5JYv2n/7Q==",
			"dev": true,
			"engines": {
				"node": "14 || >=16.14"
			}
		},
		"node_modules/@npmcli/installed-package-contents": {
			"version": "2.0.2",
			"resolved": "https://registry.npmjs.org/@npmcli/installed-package-contents/-/installed-package-contents-2.0.2.tgz",
			"integrity": "sha512-xACzLPhnfD51GKvTOOuNX2/V4G4mz9/1I2MfDoye9kBM3RYe5g2YbscsaGoTlaWqkxeiapBWyseULVKpSVHtKQ==",
			"dev": true,
			"dependencies": {
				"npm-bundled": "^3.0.0",
				"npm-normalize-package-bin": "^3.0.0"
			},
			"bin": {
				"installed-package-contents": "lib/index.js"
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
			"engines": {
				"node": "^14.17.0 || ^16.13.0 || >=18.0.0"
			}
		},
		"node_modules/@npmcli/package-json": {
			"version": "5.0.0",
			"resolved": "https://registry.npmjs.org/@npmcli/package-json/-/package-json-5.0.0.tgz",
			"integrity": "sha512-OI2zdYBLhQ7kpNPaJxiflofYIpkNLi+lnGdzqUOfRmCF3r2l1nadcjtCYMJKv/Utm/ZtlffaUuTiAktPHbc17g==",
			"dev": true,
			"dependencies": {
				"@npmcli/git": "^5.0.0",
				"glob": "^10.2.2",
				"hosted-git-info": "^7.0.0",
				"json-parse-even-better-errors": "^3.0.0",
				"normalize-package-data": "^6.0.0",
				"proc-log": "^3.0.0",
				"semver": "^7.5.3"
			},
			"engines": {
				"node": "^16.14.0 || >=18.0.0"
			}
		},
		"node_modules/@npmcli/promise-spawn": {
			"version": "7.0.1",
			"resolved": "https://registry.npmjs.org/@npmcli/promise-spawn/-/promise-spawn-7.0.1.tgz",
			"integrity": "sha512-P4KkF9jX3y+7yFUxgcUdDtLy+t4OlDGuEBLNs57AZsfSfg+uV6MLndqGpnl4831ggaEdXwR50XFoZP4VFtHolg==",
			"dev": true,
			"dependencies": {
				"which": "^4.0.0"
			},
			"engines": {
				"node": "^16.14.0 || >=18.0.0"
			}
		},
		"node_modules/@npmcli/run-script": {
			"version": "7.0.4",
			"resolved": "https://registry.npmjs.org/@npmcli/run-script/-/run-script-7.0.4.tgz",
			"integrity": "sha512-9ApYM/3+rBt9V80aYg6tZfzj3UWdiYyCt7gJUD1VJKvWF5nwKDSICXbYIQbspFTq6TOpbsEtIC0LArB8d9PFmg==",
			"dev": true,
			"dependencies": {
				"@npmcli/node-gyp": "^3.0.0",
				"@npmcli/package-json": "^5.0.0",
				"@npmcli/promise-spawn": "^7.0.0",
				"node-gyp": "^10.0.0",
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
			"optional": true,
			"engines": {
				"node": ">=14"
			}
		},
		"node_modules/@rollup/rollup-android-arm-eabi": {
			"version": "4.12.0",
			"resolved": "https://registry.npmjs.org/@rollup/rollup-android-arm-eabi/-/rollup-android-arm-eabi-4.12.0.tgz",
			"integrity": "sha512-+ac02NL/2TCKRrJu2wffk1kZ+RyqxVUlbjSagNgPm94frxtr+XDL12E5Ll1enWskLrtrZ2r8L3wED1orIibV/w==",
			"cpu": [
				"arm"
			],
			"dev": true,
			"optional": true,
			"os": [
				"android"
			]
		},
		"node_modules/@rollup/rollup-android-arm64": {
			"version": "4.12.0",
			"resolved": "https://registry.npmjs.org/@rollup/rollup-android-arm64/-/rollup-android-arm64-4.12.0.tgz",
			"integrity": "sha512-OBqcX2BMe6nvjQ0Nyp7cC90cnumt8PXmO7Dp3gfAju/6YwG0Tj74z1vKrfRz7qAv23nBcYM8BCbhrsWqO7PzQQ==",
			"cpu": [
				"arm64"
			],
			"dev": true,
			"optional": true,
			"os": [
				"android"
			]
		},
		"node_modules/@rollup/rollup-darwin-arm64": {
			"version": "4.12.0",
			"resolved": "https://registry.npmjs.org/@rollup/rollup-darwin-arm64/-/rollup-darwin-arm64-4.12.0.tgz",
			"integrity": "sha512-X64tZd8dRE/QTrBIEs63kaOBG0b5GVEd3ccoLtyf6IdXtHdh8h+I56C2yC3PtC9Ucnv0CpNFJLqKFVgCYe0lOQ==",
			"cpu": [
				"arm64"
			],
			"dev": true,
			"optional": true,
			"os": [
				"darwin"
			]
		},
		"node_modules/@rollup/rollup-darwin-x64": {
			"version": "4.12.0",
			"resolved": "https://registry.npmjs.org/@rollup/rollup-darwin-x64/-/rollup-darwin-x64-4.12.0.tgz",
			"integrity": "sha512-cc71KUZoVbUJmGP2cOuiZ9HSOP14AzBAThn3OU+9LcA1+IUqswJyR1cAJj3Mg55HbjZP6OLAIscbQsQLrpgTOg==",
			"cpu": [
				"x64"
			],
			"dev": true,
			"optional": true,
			"os": [
				"darwin"
			]
		},
		"node_modules/@rollup/rollup-linux-arm-gnueabihf": {
			"version": "4.12.0",
			"resolved": "https://registry.npmjs.org/@rollup/rollup-linux-arm-gnueabihf/-/rollup-linux-arm-gnueabihf-4.12.0.tgz",
			"integrity": "sha512-a6w/Y3hyyO6GlpKL2xJ4IOh/7d+APaqLYdMf86xnczU3nurFTaVN9s9jOXQg97BE4nYm/7Ga51rjec5nfRdrvA==",
			"cpu": [
				"arm"
			],
			"dev": true,
			"optional": true,
			"os": [
				"linux"
			]
		},
		"node_modules/@rollup/rollup-linux-arm64-gnu": {
			"version": "4.12.0",
			"resolved": "https://registry.npmjs.org/@rollup/rollup-linux-arm64-gnu/-/rollup-linux-arm64-gnu-4.12.0.tgz",
			"integrity": "sha512-0fZBq27b+D7Ar5CQMofVN8sggOVhEtzFUwOwPppQt0k+VR+7UHMZZY4y+64WJ06XOhBTKXtQB/Sv0NwQMXyNAA==",
			"cpu": [
				"arm64"
			],
			"dev": true,
			"optional": true,
			"os": [
				"linux"
			]
		},
		"node_modules/@rollup/rollup-linux-arm64-musl": {
			"version": "4.12.0",
			"resolved": "https://registry.npmjs.org/@rollup/rollup-linux-arm64-musl/-/rollup-linux-arm64-musl-4.12.0.tgz",
			"integrity": "sha512-eTvzUS3hhhlgeAv6bfigekzWZjaEX9xP9HhxB0Dvrdbkk5w/b+1Sxct2ZuDxNJKzsRStSq1EaEkVSEe7A7ipgQ==",
			"cpu": [
				"arm64"
			],
			"dev": true,
			"optional": true,
			"os": [
				"linux"
			]
		},
		"node_modules/@rollup/rollup-linux-riscv64-gnu": {
			"version": "4.12.0",
			"resolved": "https://registry.npmjs.org/@rollup/rollup-linux-riscv64-gnu/-/rollup-linux-riscv64-gnu-4.12.0.tgz",
			"integrity": "sha512-ix+qAB9qmrCRiaO71VFfY8rkiAZJL8zQRXveS27HS+pKdjwUfEhqo2+YF2oI+H/22Xsiski+qqwIBxVewLK7sw==",
			"cpu": [
				"riscv64"
			],
			"dev": true,
			"optional": true,
			"os": [
				"linux"
			]
		},
		"node_modules/@rollup/rollup-linux-x64-gnu": {
			"version": "4.12.0",
			"resolved": "https://registry.npmjs.org/@rollup/rollup-linux-x64-gnu/-/rollup-linux-x64-gnu-4.12.0.tgz",
			"integrity": "sha512-TenQhZVOtw/3qKOPa7d+QgkeM6xY0LtwzR8OplmyL5LrgTWIXpTQg2Q2ycBf8jm+SFW2Wt/DTn1gf7nFp3ssVA==",
			"cpu": [
				"x64"
			],
			"dev": true,
			"optional": true,
			"os": [
				"linux"
			]
		},
		"node_modules/@rollup/rollup-linux-x64-musl": {
			"version": "4.12.0",
			"resolved": "https://registry.npmjs.org/@rollup/rollup-linux-x64-musl/-/rollup-linux-x64-musl-4.12.0.tgz",
			"integrity": "sha512-LfFdRhNnW0zdMvdCb5FNuWlls2WbbSridJvxOvYWgSBOYZtgBfW9UGNJG//rwMqTX1xQE9BAodvMH9tAusKDUw==",
			"cpu": [
				"x64"
			],
			"dev": true,
			"optional": true,
			"os": [
				"linux"
			]
		},
		"node_modules/@rollup/rollup-win32-arm64-msvc": {
			"version": "4.12.0",
			"resolved": "https://registry.npmjs.org/@rollup/rollup-win32-arm64-msvc/-/rollup-win32-arm64-msvc-4.12.0.tgz",
			"integrity": "sha512-JPDxovheWNp6d7AHCgsUlkuCKvtu3RB55iNEkaQcf0ttsDU/JZF+iQnYcQJSk/7PtT4mjjVG8N1kpwnI9SLYaw==",
			"cpu": [
				"arm64"
			],
			"dev": true,
			"optional": true,
			"os": [
				"win32"
			]
		},
		"node_modules/@rollup/rollup-win32-ia32-msvc": {
			"version": "4.12.0",
			"resolved": "https://registry.npmjs.org/@rollup/rollup-win32-ia32-msvc/-/rollup-win32-ia32-msvc-4.12.0.tgz",
			"integrity": "sha512-fjtuvMWRGJn1oZacG8IPnzIV6GF2/XG+h71FKn76OYFqySXInJtseAqdprVTDTyqPxQOG9Exak5/E9Z3+EJ8ZA==",
			"cpu": [
				"ia32"
			],
			"dev": true,
			"optional": true,
			"os": [
				"win32"
			]
		},
		"node_modules/@rollup/rollup-win32-x64-msvc": {
			"version": "4.12.0",
			"resolved": "https://registry.npmjs.org/@rollup/rollup-win32-x64-msvc/-/rollup-win32-x64-msvc-4.12.0.tgz",
			"integrity": "sha512-ZYmr5mS2wd4Dew/JjT0Fqi2NPB/ZhZ2VvPp7SmvPZb4Y1CG/LRcS6tcRo2cYU7zLK5A7cdbhWnnWmUjoI4qapg==",
			"cpu": [
				"x64"
			],
			"dev": true,
			"optional": true,
			"os": [
				"win32"
			]
		},
		"node_modules/@schematics/angular": {
			"version": "17.2.2",
			"resolved": "https://registry.npmjs.org/@schematics/angular/-/angular-17.2.2.tgz",
			"integrity": "sha512-Q3VAQ/S4gj8D1JPWgWG4enDdDZUu8mUXWVRG1rOi4sHgOF5zgPieQFp3LXqMUgOncmzbXrctkbO6NKc4N2FAag==",
			"dev": true,
			"dependencies": {
				"@angular-devkit/core": "17.2.2",
				"@angular-devkit/schematics": "17.2.2",
				"jsonc-parser": "3.2.1"
			},
			"engines": {
				"node": "^18.13.0 || >=20.9.0",
				"npm": "^6.11.0 || ^7.5.6 || >=8.0.0",
				"yarn": ">= 1.13.0"
			}
		},
		"node_modules/@sigstore/bundle": {
			"version": "2.2.0",
			"resolved": "https://registry.npmjs.org/@sigstore/bundle/-/bundle-2.2.0.tgz",
			"integrity": "sha512-5VI58qgNs76RDrwXNhpmyN/jKpq9evV/7f1XrcqcAfvxDl5SeVY/I5Rmfe96ULAV7/FK5dge9RBKGBJPhL1WsQ==",
			"dev": true,
			"dependencies": {
				"@sigstore/protobuf-specs": "^0.3.0"
			},
			"engines": {
				"node": "^16.14.0 || >=18.0.0"
			}
		},
		"node_modules/@sigstore/core": {
			"version": "1.0.0",
			"resolved": "https://registry.npmjs.org/@sigstore/core/-/core-1.0.0.tgz",
			"integrity": "sha512-dW2qjbWLRKGu6MIDUTBuJwXCnR8zivcSpf5inUzk7y84zqy/dji0/uahppoIgMoKeR+6pUZucrwHfkQQtiG9Rw==",
			"dev": true,
			"engines": {
				"node": "^16.14.0 || >=18.0.0"
			}
		},
		"node_modules/@sigstore/protobuf-specs": {
			"version": "0.3.0",
			"resolved": "https://registry.npmjs.org/@sigstore/protobuf-specs/-/protobuf-specs-0.3.0.tgz",
			"integrity": "sha512-zxiQ66JFOjVvP9hbhGj/F/qNdsZfkGb/dVXSanNRNuAzMlr4MC95voPUBX8//ZNnmv3uSYzdfR/JSkrgvZTGxA==",
			"dev": true,
			"engines": {
				"node": "^14.17.0 || ^16.13.0 || >=18.0.0"
			}
		},
		"node_modules/@sigstore/sign": {
			"version": "2.2.3",
			"resolved": "https://registry.npmjs.org/@sigstore/sign/-/sign-2.2.3.tgz",
			"integrity": "sha512-LqlA+ffyN02yC7RKszCdMTS6bldZnIodiox+IkT8B2f8oRYXCB3LQ9roXeiEL21m64CVH1wyveYAORfD65WoSw==",
			"dev": true,
			"dependencies": {
				"@sigstore/bundle": "^2.2.0",
				"@sigstore/core": "^1.0.0",
				"@sigstore/protobuf-specs": "^0.3.0",
				"make-fetch-happen": "^13.0.0"
			},
			"engines": {
				"node": "^16.14.0 || >=18.0.0"
			}
		},
		"node_modules/@sigstore/tuf": {
			"version": "2.3.1",
			"resolved": "https://registry.npmjs.org/@sigstore/tuf/-/tuf-2.3.1.tgz",
			"integrity": "sha512-9Iv40z652td/QbV0o5n/x25H9w6IYRt2pIGbTX55yFDYlApDQn/6YZomjz6+KBx69rXHLzHcbtTS586mDdFD+Q==",
			"dev": true,
			"dependencies": {
				"@sigstore/protobuf-specs": "^0.3.0",
				"tuf-js": "^2.2.0"
			},
			"engines": {
				"node": "^16.14.0 || >=18.0.0"
			}
		},
		"node_modules/@sigstore/verify": {
			"version": "1.1.0",
			"resolved": "https://registry.npmjs.org/@sigstore/verify/-/verify-1.1.0.tgz",
			"integrity": "sha512-1fTqnqyTBWvV7cftUUFtDcHPdSox0N3Ub7C0lRyReYx4zZUlNTZjCV+HPy4Lre+r45dV7Qx5JLKvqqsgxuyYfg==",
			"dev": true,
			"dependencies": {
				"@sigstore/bundle": "^2.2.0",
				"@sigstore/core": "^1.0.0",
				"@sigstore/protobuf-specs": "^0.3.0"
			},
			"engines": {
				"node": "^16.14.0 || >=18.0.0"
			}
		},
		"node_modules/@tufjs/canonical-json": {
			"version": "2.0.0",
			"resolved": "https://registry.npmjs.org/@tufjs/canonical-json/-/canonical-json-2.0.0.tgz",
			"integrity": "sha512-yVtV8zsdo8qFHe+/3kw81dSLyF7D576A5cCFCi4X7B39tWT7SekaEFUnvnWJHz+9qO7qJTah1JbrDjWKqFtdWA==",
			"dev": true,
			"engines": {
				"node": "^16.14.0 || >=18.0.0"
			}
		},
		"node_modules/@tufjs/models": {
			"version": "2.0.0",
			"resolved": "https://registry.npmjs.org/@tufjs/models/-/models-2.0.0.tgz",
			"integrity": "sha512-c8nj8BaOExmZKO2DXhDfegyhSGcG9E/mPN3U13L+/PsoWm1uaGiHHjxqSHQiasDBQwDA3aHuw9+9spYAP1qvvg==",
			"dev": true,
			"dependencies": {
				"@tufjs/canonical-json": "2.0.0",
				"minimatch": "^9.0.3"
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
			"dependencies": {
				"@types/node": "*"
			}
		},
		"node_modules/@types/connect": {
			"version": "3.4.38",
			"resolved": "https://registry.npmjs.org/@types/connect/-/connect-3.4.38.tgz",
			"integrity": "sha512-K6uROf1LD88uDQqJCktA4yzL1YYAK6NgfsI0v/mTgyPKWsX1CnJ0XPSDhViejru1GcRkLWb8RlzFYJRqGUbaug==",
			"dev": true,
			"dependencies": {
				"@types/node": "*"
			}
		},
		"node_modules/@types/connect-history-api-fallback": {
			"version": "1.5.4",
			"resolved": "https://registry.npmjs.org/@types/connect-history-api-fallback/-/connect-history-api-fallback-1.5.4.tgz",
			"integrity": "sha512-n6Cr2xS1h4uAulPRdlw6Jl6s1oG8KrVilPN2yUITEs+K48EzMJJ3W1xy8K5eWuFvjp3R74AOIGSmp2UfBJ8HFw==",
			"dev": true,
			"dependencies": {
				"@types/express-serve-static-core": "*",
				"@types/node": "*"
			}
		},
		"node_modules/@types/eslint": {
			"version": "8.56.5",
			"resolved": "https://registry.npmjs.org/@types/eslint/-/eslint-8.56.5.tgz",
			"integrity": "sha512-u5/YPJHo1tvkSF2CE0USEkxon82Z5DBy2xR+qfyYNszpX9qcs4sT6uq2kBbj4BXY1+DBGDPnrhMZV3pKWGNukw==",
			"dev": true,
			"dependencies": {
				"@types/estree": "*",
				"@types/json-schema": "*"
			}
		},
		"node_modules/@types/eslint-scope": {
			"version": "3.7.7",
			"resolved": "https://registry.npmjs.org/@types/eslint-scope/-/eslint-scope-3.7.7.tgz",
			"integrity": "sha512-MzMFlSLBqNF2gcHWO0G1vP/YQyfvrxZ0bF+u7mzUdZ1/xK4A4sru+nraZz5i3iEIk1l1uyicaDVTB4QbbEkAYg==",
			"dev": true,
			"dependencies": {
				"@types/eslint": "*",
				"@types/estree": "*"
			}
		},
		"node_modules/@types/estree": {
			"version": "1.0.5",
			"resolved": "https://registry.npmjs.org/@types/estree/-/estree-1.0.5.tgz",
			"integrity": "sha512-/kYRxGDLWzHOB7q+wtSUQlFrtcdUccpfy+X+9iMBpHK8QLLhx2wIPYuS5DYtR9Wa/YlZAbIovy7qVdB1Aq6Lyw==",
			"dev": true
		},
		"node_modules/@types/express": {
			"version": "4.17.21",
			"resolved": "https://registry.npmjs.org/@types/express/-/express-4.17.21.tgz",
			"integrity": "sha512-ejlPM315qwLpaQlQDTjPdsUFSc6ZsP4AN6AlWnogPjQ7CVi7PYF3YVz+CY3jE2pwYf7E/7HlDAN0rV2GxTG0HQ==",
			"dev": true,
			"dependencies": {
				"@types/body-parser": "*",
				"@types/express-serve-static-core": "^4.17.33",
				"@types/qs": "*",
				"@types/serve-static": "*"
			}
		},
		"node_modules/@types/express-serve-static-core": {
			"version": "4.17.43",
			"resolved": "https://registry.npmjs.org/@types/express-serve-static-core/-/express-serve-static-core-4.17.43.tgz",
			"integrity": "sha512-oaYtiBirUOPQGSWNGPWnzyAFJ0BP3cwvN4oWZQY+zUBwpVIGsKUkpBpSztp74drYcjavs7SKFZ4DX1V2QeN8rg==",
			"dev": true,
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
			"dev": true
		},
		"node_modules/@types/http-proxy": {
			"version": "1.17.14",
			"resolved": "https://registry.npmjs.org/@types/http-proxy/-/http-proxy-1.17.14.tgz",
			"integrity": "sha512-SSrD0c1OQzlFX7pGu1eXxSEjemej64aaNPRhhVYUGqXh0BtldAAx37MG8btcumvpgKyZp1F5Gn3JkktdxiFv6w==",
			"dev": true,
			"dependencies": {
				"@types/node": "*"
			}
		},
		"node_modules/@types/json-schema": {
			"version": "7.0.15",
			"resolved": "https://registry.npmjs.org/@types/json-schema/-/json-schema-7.0.15.tgz",
			"integrity": "sha512-5+fP8P8MFNC+AyZCDxrB2pkZFPGzqQWUzpSeuuVLvm8VMcorNYavBqoFcxK8bQz4Qsbn4oUEEem4wDLfcysGHA==",
			"dev": true
		},
		"node_modules/@types/mime": {
			"version": "1.3.5",
			"resolved": "https://registry.npmjs.org/@types/mime/-/mime-1.3.5.tgz",
			"integrity": "sha512-/pyBZWSLD2n0dcHE3hq8s8ZvcETHtEuF+3E7XVt0Ig2nvsVQXdghHVcEkIWjy9A0wKfTn97a/PSDYohKIlnP/w==",
			"dev": true
		},
		"node_modules/@types/node": {
			"version": "20.11.24",
			"resolved": "https://registry.npmjs.org/@types/node/-/node-20.11.24.tgz",
			"integrity": "sha512-Kza43ewS3xoLgCEpQrsT+xRo/EJej1y0kVYGiLFE1NEODXGzTfwiC6tXTLMQskn1X4/Rjlh0MQUvx9W+L9long==",
			"dev": true,
			"dependencies": {
				"undici-types": "~5.26.4"
			}
		},
		"node_modules/@types/node-forge": {
			"version": "1.3.11",
			"resolved": "https://registry.npmjs.org/@types/node-forge/-/node-forge-1.3.11.tgz",
			"integrity": "sha512-FQx220y22OKNTqaByeBGqHWYz4cl94tpcxeFdvBo3wjG6XPBuZ0BNgNZRV5J5TFmmcsJ4IzsLkmGRiQbnYsBEQ==",
			"dev": true,
			"dependencies": {
				"@types/node": "*"
			}
		},
		"node_modules/@types/qs": {
			"version": "6.9.12",
			"resolved": "https://registry.npmjs.org/@types/qs/-/qs-6.9.12.tgz",
			"integrity": "sha512-bZcOkJ6uWrL0Qb2NAWKa7TBU+mJHPzhx9jjLL1KHF+XpzEcR7EXHvjbHlGtR/IsP1vyPrehuS6XqkmaePy//mg==",
			"dev": true
		},
		"node_modules/@types/range-parser": {
			"version": "1.2.7",
			"resolved": "https://registry.npmjs.org/@types/range-parser/-/range-parser-1.2.7.tgz",
			"integrity": "sha512-hKormJbkJqzQGhziax5PItDUTMAM9uE2XXQmM37dyd4hVM+5aVl7oVxMVUiVQn2oCQFN/LKCZdvSM0pFRqbSmQ==",
			"dev": true
		},
		"node_modules/@types/retry": {
			"version": "0.12.0",
			"resolved": "https://registry.npmjs.org/@types/retry/-/retry-0.12.0.tgz",
			"integrity": "sha512-wWKOClTTiizcZhXnPY4wikVAwmdYHp8q6DmC+EJUzAMsycb7HB32Kh9RN4+0gExjmPmZSAQjgURXIGATPegAvA==",
			"dev": true
		},
		"node_modules/@types/send": {
			"version": "0.17.4",
			"resolved": "https://registry.npmjs.org/@types/send/-/send-0.17.4.tgz",
			"integrity": "sha512-x2EM6TJOybec7c52BX0ZspPodMsQUd5L6PRwOunVyVUhXiBSKf3AezDL8Dgvgt5o0UfKNfuA0eMLr2wLT4AiBA==",
			"dev": true,
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
			"dependencies": {
				"@types/express": "*"
			}
		},
		"node_modules/@types/serve-static": {
			"version": "1.15.5",
			"resolved": "https://registry.npmjs.org/@types/serve-static/-/serve-static-1.15.5.tgz",
			"integrity": "sha512-PDRk21MnK70hja/YF8AHfC7yIsiQHn1rcXx7ijCFBX/k+XQJhQT/gw3xekXKJvx+5SXaMMS8oqQy09Mzvz2TuQ==",
			"dev": true,
			"dependencies": {
				"@types/http-errors": "*",
				"@types/mime": "*",
				"@types/node": "*"
			}
		},
		"node_modules/@types/sockjs": {
			"version": "0.3.36",
			"resolved": "https://registry.npmjs.org/@types/sockjs/-/sockjs-0.3.36.tgz",
			"integrity": "sha512-MK9V6NzAS1+Ud7JV9lJLFqW85VbC9dq3LmwZCuBe4wBDgKC0Kj/jd8Xl+nSviU+Qc3+m7umHHyHg//2KSa0a0Q==",
			"dev": true,
			"dependencies": {
				"@types/node": "*"
			}
		},
		"node_modules/@types/ws": {
			"version": "8.5.10",
			"resolved": "https://registry.npmjs.org/@types/ws/-/ws-8.5.10.tgz",
			"integrity": "sha512-vmQSUcfalpIq0R9q7uTo2lXs6eGIpt9wtnLdMv9LVpIjCA/+ufZRozlVoVelIYixx1ugCBKDhn89vnsEGOCx9A==",
			"dev": true,
			"dependencies": {
				"@types/node": "*"
			}
		},
		"node_modules/@vitejs/plugin-basic-ssl": {
			"version": "1.1.0",
			"resolved": "https://registry.npmjs.org/@vitejs/plugin-basic-ssl/-/plugin-basic-ssl-1.1.0.tgz",
			"integrity": "sha512-wO4Dk/rm8u7RNhOf95ZzcEmC9rYOncYgvq4z3duaJrCgjN8BxAnDVyndanfcJZ0O6XZzHz6Q0hTimxTg8Y9g/A==",
			"dev": true,
			"engines": {
				"node": ">=14.6.0"
			},
			"peerDependencies": {
				"vite": "^3.0.0 || ^4.0.0 || ^5.0.0"
			}
		},
		"node_modules/@webassemblyjs/ast": {
			"version": "1.11.6",
			"resolved": "https://registry.npmjs.org/@webassemblyjs/ast/-/ast-1.11.6.tgz",
			"integrity": "sha512-IN1xI7PwOvLPgjcf180gC1bqn3q/QaOCwYUahIOhbYUu8KA/3tw2RT/T0Gidi1l7Hhj5D/INhJxiICObqpMu4Q==",
			"dev": true,
			"dependencies": {
				"@webassemblyjs/helper-numbers": "1.11.6",
				"@webassemblyjs/helper-wasm-bytecode": "1.11.6"
			}
		},
		"node_modules/@webassemblyjs/floating-point-hex-parser": {
			"version": "1.11.6",
			"resolved": "https://registry.npmjs.org/@webassemblyjs/floating-point-hex-parser/-/floating-point-hex-parser-1.11.6.tgz",
			"integrity": "sha512-ejAj9hfRJ2XMsNHk/v6Fu2dGS+i4UaXBXGemOfQ/JfQ6mdQg/WXtwleQRLLS4OvfDhv8rYnVwH27YJLMyYsxhw==",
			"dev": true
		},
		"node_modules/@webassemblyjs/helper-api-error": {
			"version": "1.11.6",
			"resolved": "https://registry.npmjs.org/@webassemblyjs/helper-api-error/-/helper-api-error-1.11.6.tgz",
			"integrity": "sha512-o0YkoP4pVu4rN8aTJgAyj9hC2Sv5UlkzCHhxqWj8butaLvnpdc2jOwh4ewE6CX0txSfLn/UYaV/pheS2Txg//Q==",
			"dev": true
		},
		"node_modules/@webassemblyjs/helper-buffer": {
			"version": "1.11.6",
			"resolved": "https://registry.npmjs.org/@webassemblyjs/helper-buffer/-/helper-buffer-1.11.6.tgz",
			"integrity": "sha512-z3nFzdcp1mb8nEOFFk8DrYLpHvhKC3grJD2ardfKOzmbmJvEf/tPIqCY+sNcwZIY8ZD7IkB2l7/pqhUhqm7hLA==",
			"dev": true
		},
		"node_modules/@webassemblyjs/helper-numbers": {
			"version": "1.11.6",
			"resolved": "https://registry.npmjs.org/@webassemblyjs/helper-numbers/-/helper-numbers-1.11.6.tgz",
			"integrity": "sha512-vUIhZ8LZoIWHBohiEObxVm6hwP034jwmc9kuq5GdHZH0wiLVLIPcMCdpJzG4C11cHoQ25TFIQj9kaVADVX7N3g==",
			"dev": true,
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
			"dev": true
		},
		"node_modules/@webassemblyjs/helper-wasm-section": {
			"version": "1.11.6",
			"resolved": "https://registry.npmjs.org/@webassemblyjs/helper-wasm-section/-/helper-wasm-section-1.11.6.tgz",
			"integrity": "sha512-LPpZbSOwTpEC2cgn4hTydySy1Ke+XEu+ETXuoyvuyezHO3Kjdu90KK95Sh9xTbmjrCsUwvWwCOQQNta37VrS9g==",
			"dev": true,
			"dependencies": {
				"@webassemblyjs/ast": "1.11.6",
				"@webassemblyjs/helper-buffer": "1.11.6",
				"@webassemblyjs/helper-wasm-bytecode": "1.11.6",
				"@webassemblyjs/wasm-gen": "1.11.6"
			}
		},
		"node_modules/@webassemblyjs/ieee754": {
			"version": "1.11.6",
			"resolved": "https://registry.npmjs.org/@webassemblyjs/ieee754/-/ieee754-1.11.6.tgz",
			"integrity": "sha512-LM4p2csPNvbij6U1f19v6WR56QZ8JcHg3QIJTlSwzFcmx6WSORicYj6I63f9yU1kEUtrpG+kjkiIAkevHpDXrg==",
			"dev": true,
			"dependencies": {
				"@xtuc/ieee754": "^1.2.0"
			}
		},
		"node_modules/@webassemblyjs/leb128": {
			"version": "1.11.6",
			"resolved": "https://registry.npmjs.org/@webassemblyjs/leb128/-/leb128-1.11.6.tgz",
			"integrity": "sha512-m7a0FhE67DQXgouf1tbN5XQcdWoNgaAuoULHIfGFIEVKA6tu/edls6XnIlkmS6FrXAquJRPni3ZZKjw6FSPjPQ==",
			"dev": true,
			"dependencies": {
				"@xtuc/long": "4.2.2"
			}
		},
		"node_modules/@webassemblyjs/utf8": {
			"version": "1.11.6",
			"resolved": "https://registry.npmjs.org/@webassemblyjs/utf8/-/utf8-1.11.6.tgz",
			"integrity": "sha512-vtXf2wTQ3+up9Zsg8sa2yWiQpzSsMyXj0qViVP6xKGCUT8p8YJ6HqI7l5eCnWx1T/FYdsv07HQs2wTFbbof/RA==",
			"dev": true
		},
		"node_modules/@webassemblyjs/wasm-edit": {
			"version": "1.11.6",
			"resolved": "https://registry.npmjs.org/@webassemblyjs/wasm-edit/-/wasm-edit-1.11.6.tgz",
			"integrity": "sha512-Ybn2I6fnfIGuCR+Faaz7YcvtBKxvoLV3Lebn1tM4o/IAJzmi9AWYIPWpyBfU8cC+JxAO57bk4+zdsTjJR+VTOw==",
			"dev": true,
			"dependencies": {
				"@webassemblyjs/ast": "1.11.6",
				"@webassemblyjs/helper-buffer": "1.11.6",
				"@webassemblyjs/helper-wasm-bytecode": "1.11.6",
				"@webassemblyjs/helper-wasm-section": "1.11.6",
				"@webassemblyjs/wasm-gen": "1.11.6",
				"@webassemblyjs/wasm-opt": "1.11.6",
				"@webassemblyjs/wasm-parser": "1.11.6",
				"@webassemblyjs/wast-printer": "1.11.6"
			}
		},
		"node_modules/@webassemblyjs/wasm-gen": {
			"version": "1.11.6",
			"resolved": "https://registry.npmjs.org/@webassemblyjs/wasm-gen/-/wasm-gen-1.11.6.tgz",
			"integrity": "sha512-3XOqkZP/y6B4F0PBAXvI1/bky7GryoogUtfwExeP/v7Nzwo1QLcq5oQmpKlftZLbT+ERUOAZVQjuNVak6UXjPA==",
			"dev": true,
			"dependencies": {
				"@webassemblyjs/ast": "1.11.6",
				"@webassemblyjs/helper-wasm-bytecode": "1.11.6",
				"@webassemblyjs/ieee754": "1.11.6",
				"@webassemblyjs/leb128": "1.11.6",
				"@webassemblyjs/utf8": "1.11.6"
			}
		},
		"node_modules/@webassemblyjs/wasm-opt": {
			"version": "1.11.6",
			"resolved": "https://registry.npmjs.org/@webassemblyjs/wasm-opt/-/wasm-opt-1.11.6.tgz",
			"integrity": "sha512-cOrKuLRE7PCe6AsOVl7WasYf3wbSo4CeOk6PkrjS7g57MFfVUF9u6ysQBBODX0LdgSvQqRiGz3CXvIDKcPNy4g==",
			"dev": true,
			"dependencies": {
				"@webassemblyjs/ast": "1.11.6",
				"@webassemblyjs/helper-buffer": "1.11.6",
				"@webassemblyjs/wasm-gen": "1.11.6",
				"@webassemblyjs/wasm-parser": "1.11.6"
			}
		},
		"node_modules/@webassemblyjs/wasm-parser": {
			"version": "1.11.6",
			"resolved": "https://registry.npmjs.org/@webassemblyjs/wasm-parser/-/wasm-parser-1.11.6.tgz",
			"integrity": "sha512-6ZwPeGzMJM3Dqp3hCsLgESxBGtT/OeCvCZ4TA1JUPYgmhAx38tTPR9JaKy0S5H3evQpO/h2uWs2j6Yc/fjkpTQ==",
			"dev": true,
			"dependencies": {
				"@webassemblyjs/ast": "1.11.6",
				"@webassemblyjs/helper-api-error": "1.11.6",
				"@webassemblyjs/helper-wasm-bytecode": "1.11.6",
				"@webassemblyjs/ieee754": "1.11.6",
				"@webassemblyjs/leb128": "1.11.6",
				"@webassemblyjs/utf8": "1.11.6"
			}
		},
		"node_modules/@webassemblyjs/wast-printer": {
			"version": "1.11.6",
			"resolved": "https://registry.npmjs.org/@webassemblyjs/wast-printer/-/wast-printer-1.11.6.tgz",
			"integrity": "sha512-JM7AhRcE+yW2GWYaKeHL5vt4xqee5N2WcezptmgyhNS+ScggqcT1OtXykhAb13Sn5Yas0j2uv9tHgrjwvzAP4A==",
			"dev": true,
			"dependencies": {
				"@webassemblyjs/ast": "1.11.6",
				"@xtuc/long": "4.2.2"
			}
		},
		"node_modules/@xtuc/ieee754": {
			"version": "1.2.0",
			"resolved": "https://registry.npmjs.org/@xtuc/ieee754/-/ieee754-1.2.0.tgz",
			"integrity": "sha512-DX8nKgqcGwsc0eJSqYt5lwP4DH5FlHnmuWWBRy7X0NcaGR0ZtuyeESgMwTYVEtxmsNGY+qit4QYT/MIYTOTPeA==",
			"dev": true
		},
		"node_modules/@xtuc/long": {
			"version": "4.2.2",
			"resolved": "https://registry.npmjs.org/@xtuc/long/-/long-4.2.2.tgz",
			"integrity": "sha512-NuHqBY1PB/D8xU6s/thBgOAiAP7HOYDQ32+BFZILJ8ivkUkAHQnWfn6WhL79Owj1qmUnoN/YPhktdIoucipkAQ==",
			"dev": true
		},
		"node_modules/@yarnpkg/lockfile": {
			"version": "1.1.0",
			"resolved": "https://registry.npmjs.org/@yarnpkg/lockfile/-/lockfile-1.1.0.tgz",
			"integrity": "sha512-GpSwvyXOcOOlV70vbnzjj4fW5xW/FdUF6nQEt1ENy7m4ZCczi1+/buVUPAqmGfqznsORNFzUMjctTIp8a9tuCQ==",
			"dev": true
		},
		"node_modules/abbrev": {
			"version": "2.0.0",
			"resolved": "https://registry.npmjs.org/abbrev/-/abbrev-2.0.0.tgz",
			"integrity": "sha512-6/mh1E2u2YgEsCHdY0Yx5oW+61gZU+1vXaoiHHrpKeuRNNgFvS+/jrwHiQhB5apAf5oB7UB7E19ol2R2LKH8hQ==",
			"dev": true,
			"engines": {
				"node": "^14.17.0 || ^16.13.0 || >=18.0.0"
			}
		},
		"node_modules/accepts": {
			"version": "1.3.8",
			"resolved": "https://registry.npmjs.org/accepts/-/accepts-1.3.8.tgz",
			"integrity": "sha512-PYAthTa2m2VKxuvSD3DPC/Gy+U+sOA1LAuT8mkmRuvw+NACSaeXEQ+NHcVF7rONl6qcaxV3Uuemwawk+7+SJLw==",
			"dev": true,
			"dependencies": {
				"mime-types": "~2.1.34",
				"negotiator": "0.6.3"
			},
			"engines": {
				"node": ">= 0.6"
			}
		},
		"node_modules/acorn": {
			"version": "8.11.3",
			"resolved": "https://registry.npmjs.org/acorn/-/acorn-8.11.3.tgz",
			"integrity": "sha512-Y9rRfJG5jcKOE0CLisYbojUjIrIEE7AGMzA/Sm4BslANhbS+cDMpgBdcPT91oJ7OuJ9hYJBx59RjbhxVnrF8Xg==",
			"dev": true,
			"bin": {
				"acorn": "bin/acorn"
			},
			"engines": {
				"node": ">=0.4.0"
			}
		},
		"node_modules/acorn-import-assertions": {
			"version": "1.9.0",
			"resolved": "https://registry.npmjs.org/acorn-import-assertions/-/acorn-import-assertions-1.9.0.tgz",
			"integrity": "sha512-cmMwop9x+8KFhxvKrKfPYmN6/pKTYYHBqLa0DfvVZcKMJWNyWLnaqND7dx/qn66R7ewM1UX5XMaDVP5wlVTaVA==",
			"dev": true,
			"peerDependencies": {
				"acorn": "^8"
			}
		},
		"node_modules/adjust-sourcemap-loader": {
			"version": "4.0.0",
			"resolved": "https://registry.npmjs.org/adjust-sourcemap-loader/-/adjust-sourcemap-loader-4.0.0.tgz",
			"integrity": "sha512-OXwN5b9pCUXNQHJpwwD2qP40byEmSgzj8B4ydSN0uMNYWiFmJ6x6KwUllMmfk8Rwu/HJDFR7U8ubsWBoN0Xp0A==",
			"dev": true,
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
			"version": "7.1.0",
			"resolved": "https://registry.npmjs.org/agent-base/-/agent-base-7.1.0.tgz",
			"integrity": "sha512-o/zjMZRhJxny7OyEF+Op8X+efiELC7k7yOjMzgfzVqOzXqkBkWI79YoTdOtsuWd5BWhAGAuOY/Xa6xpiaWXiNg==",
			"dev": true,
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
			"dependencies": {
				"clean-stack": "^2.0.0",
				"indent-string": "^4.0.0"
			},
			"engines": {
				"node": ">=8"
			}
		},
		"node_modules/ajv": {
			"version": "8.12.0",
			"resolved": "https://registry.npmjs.org/ajv/-/ajv-8.12.0.tgz",
			"integrity": "sha512-sRu1kpcO9yLtYxBKvqfTeh9KzZEwO3STyX1HT+4CaDzC6HpTGYhIhPIzj9XuKU7KYDwnaeh5hcOwjy1QuJzBPA==",
			"dev": true,
			"dependencies": {
				"fast-deep-equal": "^3.1.1",
				"json-schema-traverse": "^1.0.0",
				"require-from-string": "^2.0.2",
				"uri-js": "^4.2.2"
			},
			"funding": {
				"type": "github",
				"url": "https://github.com/sponsors/epoberezkin"
			}
		},
		"node_modules/ajv-formats": {
			"version": "2.1.1",
			"resolved": "https://registry.npmjs.org/ajv-formats/-/ajv-formats-2.1.1.tgz",
			"integrity": "sha512-Wx0Kx52hxE7C18hkMEggYlEifqWZtYaRgouJor+WMdPnQyEK13vgEWyVNup7SoeeoLMsr4kf5h6dOW11I15MUA==",
			"dev": true,
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
			"engines": {
				"node": ">=6"
			}
		},
		"node_modules/ansi-escapes": {
			"version": "4.3.2",
			"resolved": "https://registry.npmjs.org/ansi-escapes/-/ansi-escapes-4.3.2.tgz",
			"integrity": "sha512-gKXj5ALrKWQLsYG9jlTRmR/xKluxHV+Z9QEwNIgCfM1/uwPMCuzVVnh5mwTd+OuBZcwSIMbqssNWRm1lE51QaQ==",
			"dev": true,
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
			"bin": {
				"ansi-html": "bin/ansi-html"
			}
		},
		"node_modules/ansi-regex": {
			"version": "5.0.1",
			"resolved": "https://registry.npmjs.org/ansi-regex/-/ansi-regex-5.0.1.tgz",
			"integrity": "sha512-quJQXlTSUGL2LH9SUXo8VwsY4soanhgo6LNSm84E1LBcE8s3O0wpdiRzyR9z/ZZJMlMWv37qOOb9pdJlMUEKFQ==",
			"dev": true,
			"engines": {
				"node": ">=8"
			}
		},
		"node_modules/ansi-styles": {
			"version": "3.2.1",
			"resolved": "https://registry.npmjs.org/ansi-styles/-/ansi-styles-3.2.1.tgz",
			"integrity": "sha512-VT0ZI6kZRdTh8YyJw3SMbYm/u+NqfsAxEpWO0Pf9sq8/e94WxxOpPKx9FR1FlyCtOVDNOQ+8ntlqFxiRc+r5qA==",
			"dev": true,
			"dependencies": {
				"color-convert": "^1.9.0"
			},
			"engines": {
				"node": ">=4"
			}
		},
		"node_modules/anymatch": {
			"version": "3.1.3",
			"resolved": "https://registry.npmjs.org/anymatch/-/anymatch-3.1.3.tgz",
			"integrity": "sha512-KMReFUr0B4t+D+OBkjR3KYqvocp2XaSzO55UcB6mgQMd3KbcE+mWTyvVV7D/zsdEbNnV6acZUutkiHQXvTr1Rw==",
			"dev": true,
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
			"engines": {
				"node": ">=8.6"
			},
			"funding": {
				"url": "https://github.com/sponsors/jonschlinkert"
			}
		},
		"node_modules/argparse": {
			"version": "1.0.10",
			"resolved": "https://registry.npmjs.org/argparse/-/argparse-1.0.10.tgz",
			"integrity": "sha512-o5Roy6tNG4SL/FOkCAN6RzjiakZS25RLYFrcMttJqbdd8BWrnA+fGz57iN5Pb06pvBGvl5gQ0B48dJlslXvoTg==",
			"dev": true,
			"dependencies": {
				"sprintf-js": "~1.0.2"
			}
		},
		"node_modules/array-flatten": {
			"version": "1.1.1",
			"resolved": "https://registry.npmjs.org/array-flatten/-/array-flatten-1.1.1.tgz",
			"integrity": "sha512-PCVAQswWemu6UdxsDFFX/+gVeYqKAod3D3UVm91jHwynguOwAvYPhx8nNlM++NqRcK6CxxpUafjmhIdKiHibqg==",
			"dev": true
		},
		"node_modules/autoprefixer": {
			"version": "10.4.17",
			"resolved": "https://registry.npmjs.org/autoprefixer/-/autoprefixer-10.4.17.tgz",
			"integrity": "sha512-/cpVNRLSfhOtcGflT13P2794gVSgmPgTR+erw5ifnMLZb0UnSlkK4tquLmkd3BhA+nLo5tX8Cu0upUsGKvKbmg==",
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
			"dependencies": {
				"browserslist": "^4.22.2",
				"caniuse-lite": "^1.0.30001578",
				"fraction.js": "^4.3.7",
				"normalize-range": "^0.1.2",
				"picocolors": "^1.0.0",
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
		"node_modules/babel-plugin-istanbul": {
			"version": "6.1.1",
			"resolved": "https://registry.npmjs.org/babel-plugin-istanbul/-/babel-plugin-istanbul-6.1.1.tgz",
			"integrity": "sha512-Y1IQok9821cC9onCx5otgFfRm7Lm+I+wwxOx738M/WLPZ9Q42m4IG5W0FNX8WLL2gYMZo3JkuXIH2DOpWM+qwA==",
			"dev": true,
			"dependencies": {
				"@babel/helper-plugin-utils": "^7.0.0",
				"@istanbuljs/load-nyc-config": "^1.0.0",
				"@istanbuljs/schema": "^0.1.2",
				"istanbul-lib-instrument": "^5.0.4",
				"test-exclude": "^6.0.0"
			},
			"engines": {
				"node": ">=8"
			}
		},
		"node_modules/babel-plugin-polyfill-corejs2": {
			"version": "0.4.8",
			"resolved": "https://registry.npmjs.org/babel-plugin-polyfill-corejs2/-/babel-plugin-polyfill-corejs2-0.4.8.tgz",
			"integrity": "sha512-OtIuQfafSzpo/LhnJaykc0R/MMnuLSSVjVYy9mHArIZ9qTCSZ6TpWCuEKZYVoN//t8HqBNScHrOtCrIK5IaGLg==",
			"dev": true,
			"dependencies": {
				"@babel/compat-data": "^7.22.6",
				"@babel/helper-define-polyfill-provider": "^0.5.0",
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
			"bin": {
				"semver": "bin/semver.js"
			}
		},
		"node_modules/babel-plugin-polyfill-corejs3": {
			"version": "0.9.0",
			"resolved": "https://registry.npmjs.org/babel-plugin-polyfill-corejs3/-/babel-plugin-polyfill-corejs3-0.9.0.tgz",
			"integrity": "sha512-7nZPG1uzK2Ymhy/NbaOWTg3uibM2BmGASS4vHS4szRZAIR8R6GwA/xAujpdrXU5iyklrimWnLWU+BLF9suPTqg==",
			"dev": true,
			"dependencies": {
				"@babel/helper-define-polyfill-provider": "^0.5.0",
				"core-js-compat": "^3.34.0"
			},
			"peerDependencies": {
				"@babel/core": "^7.4.0 || ^8.0.0-0 <8.0.0"
			}
		},
		"node_modules/babel-plugin-polyfill-regenerator": {
			"version": "0.5.5",
			"resolved": "https://registry.npmjs.org/babel-plugin-polyfill-regenerator/-/babel-plugin-polyfill-regenerator-0.5.5.tgz",
			"integrity": "sha512-OJGYZlhLqBh2DDHeqAxWB1XIvr49CxiJ2gIt61/PU55CQK4Z58OzMqjDe1zwQdQk+rBYsRc+1rJmdajM3gimHg==",
			"dev": true,
			"dependencies": {
				"@babel/helper-define-polyfill-provider": "^0.5.0"
			},
			"peerDependencies": {
				"@babel/core": "^7.4.0 || ^8.0.0-0 <8.0.0"
			}
		},
		"node_modules/balanced-match": {
			"version": "1.0.2",
			"resolved": "https://registry.npmjs.org/balanced-match/-/balanced-match-1.0.2.tgz",
			"integrity": "sha512-3oSeUO0TMV67hN1AmbXsK4yaqU7tjiHlbxRDZOpH0KW9+CeX4bRAaX0Anxt0tx2MrpRpWwQaPwIlISEJhYU5Pw==",
			"dev": true
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
			]
		},
		"node_modules/batch": {
			"version": "0.6.1",
			"resolved": "https://registry.npmjs.org/batch/-/batch-0.6.1.tgz",
			"integrity": "sha512-x+VAiMRL6UPkx+kudNvxTl6hB2XNNCG2r+7wixVfIYwu/2HKRXimwQyaumLjMveWvT2Hkd/cAJw+QBMfJ/EKVw==",
			"dev": true
		},
		"node_modules/big.js": {
			"version": "5.2.2",
			"resolved": "https://registry.npmjs.org/big.js/-/big.js-5.2.2.tgz",
			"integrity": "sha512-vyL2OymJxmarO8gxMr0mhChsO9QGwhynfuu4+MHTAW6czfq9humCB7rKpUjDd9YUiDPU4mzpyupFSvOClAwbmQ==",
			"dev": true,
			"engines": {
				"node": "*"
			}
		},
		"node_modules/binary-extensions": {
			"version": "2.2.0",
			"resolved": "https://registry.npmjs.org/binary-extensions/-/binary-extensions-2.2.0.tgz",
			"integrity": "sha512-jDctJ/IVQbZoJykoeHbhXpOlNBqGNcwXJKJog42E5HDPUwQTSdjCHdihjj0DlnheQ7blbT6dHOafNAiS8ooQKA==",
			"dev": true,
			"engines": {
				"node": ">=8"
			}
		},
		"node_modules/bl": {
			"version": "4.1.0",
			"resolved": "https://registry.npmjs.org/bl/-/bl-4.1.0.tgz",
			"integrity": "sha512-1W07cM9gS6DcLperZfFSj+bWLtaPGSOHWhPiGzXmvVJbRLdG82sH/Kn8EtW1VqWVA54AKf2h5k5BbnIbwF3h6w==",
			"dev": true,
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
			"engines": {
				"node": ">= 0.8"
			}
		},
		"node_modules/body-parser/node_modules/debug": {
			"version": "2.6.9",
			"resolved": "https://registry.npmjs.org/debug/-/debug-2.6.9.tgz",
			"integrity": "sha512-bC7ElrdJaJnPbAP+1EotYvqZsb3ecl5wi6Bfi6BJTUcNowp6cvspg0jXznRTKDjm/E7AdgFBVeAPVMNcKGsHMA==",
			"dev": true,
			"dependencies": {
				"ms": "2.0.0"
			}
		},
		"node_modules/body-parser/node_modules/ms": {
			"version": "2.0.0",
			"resolved": "https://registry.npmjs.org/ms/-/ms-2.0.0.tgz",
			"integrity": "sha512-Tpp60P6IUJDTuOq/5Z8cdskzJujfwqfOTkrwIwj7IRISpnkJnT6SyJ4PCPnGMoFjC9ddhal5KVIYtAt97ix05A==",
			"dev": true
		},
		"node_modules/bonjour-service": {
			"version": "1.2.1",
			"resolved": "https://registry.npmjs.org/bonjour-service/-/bonjour-service-1.2.1.tgz",
			"integrity": "sha512-oSzCS2zV14bh2kji6vNe7vrpJYCHGvcZnlffFQ1MEoX/WOeQ/teD8SYWKR942OI3INjq8OMNJlbPK5LLLUxFDw==",
			"dev": true,
			"dependencies": {
				"fast-deep-equal": "^3.1.3",
				"multicast-dns": "^7.2.5"
			}
		},
		"node_modules/boolbase": {
			"version": "1.0.0",
			"resolved": "https://registry.npmjs.org/boolbase/-/boolbase-1.0.0.tgz",
			"integrity": "sha512-JZOSA7Mo9sNGB8+UjSgzdLtokWAky1zbztM3WRLCbZ70/3cTANmQmOdR7y2g+J0e2WXywy1yS468tY+IruqEww==",
			"dev": true
		},
		"node_modules/bootstrap-icons": {
			"version": "1.11.3",
			"resolved": "https://registry.npmjs.org/bootstrap-icons/-/bootstrap-icons-1.11.3.tgz",
			"integrity": "sha512-+3lpHrCw/it2/7lBL15VR0HEumaBss0+f/Lb6ZvHISn1mlK83jjFpooTLsMWbIjJMDjDjOExMsTxnXSIT4k4ww==",
			"dev": true,
			"funding": [
				{
					"type": "github",
					"url": "https://github.com/sponsors/twbs"
				},
				{
					"type": "opencollective",
					"url": "https://opencollective.com/bootstrap"
				}
			]
		},
		"node_modules/brace-expansion": {
			"version": "2.0.1",
			"resolved": "https://registry.npmjs.org/brace-expansion/-/brace-expansion-2.0.1.tgz",
			"integrity": "sha512-XnAIvQ8eM+kC6aULx6wuQiwVsnzsi9d3WxzV3FpWTGA19F621kwdbsAcFKXgKUHZWsy+mY6iL1sHTxWEFCytDA==",
			"dev": true,
			"dependencies": {
				"balanced-match": "^1.0.0"
			}
		},
		"node_modules/braces": {
			"version": "3.0.2",
			"resolved": "https://registry.npmjs.org/braces/-/braces-3.0.2.tgz",
			"integrity": "sha512-b8um+L1RzM3WDSzvhm6gIz1yfTbBt6YTlcEKAvsmqCZZFw46z626lVj9j1yEPW33H5H+lBQpZMP1k8l+78Ha0A==",
			"dev": true,
			"dependencies": {
				"fill-range": "^7.0.1"
			},
			"engines": {
				"node": ">=8"
			}
		},
		"node_modules/browserslist": {
			"version": "4.23.0",
			"resolved": "https://registry.npmjs.org/browserslist/-/browserslist-4.23.0.tgz",
			"integrity": "sha512-QW8HiM1shhT2GuzkvklfjcKDiWFXHOeFCIA/huJPwHsslwcydgk7X+z2zXpEijP98UCY7HbubZt5J2Zgvf0CaQ==",
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
			"dependencies": {
				"caniuse-lite": "^1.0.30001587",
				"electron-to-chromium": "^1.4.668",
				"node-releases": "^2.0.14",
				"update-browserslist-db": "^1.0.13"
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
			"dependencies": {
				"base64-js": "^1.3.1",
				"ieee754": "^1.1.13"
			}
		},
		"node_modules/buffer-from": {
			"version": "1.1.2",
			"resolved": "https://registry.npmjs.org/buffer-from/-/buffer-from-1.1.2.tgz",
			"integrity": "sha512-E+XQCRwSbaaiChtv6k6Dwgc+bx+Bs6vuKJHHl5kox/BaKbhiXzqQOwK4cO22yElGp2OCmjwVhT3HmxgyPGnJfQ==",
			"dev": true
		},
		"node_modules/builtins": {
			"version": "5.0.1",
			"resolved": "https://registry.npmjs.org/builtins/-/builtins-5.0.1.tgz",
			"integrity": "sha512-qwVpFEHNfhYJIzNRBvd2C1kyo6jz3ZSMPyyuR47OPdiKWlbYnZNyDWuyR175qDnAJLiCo5fBBqPb3RiXgWlkOQ==",
			"dev": true,
			"dependencies": {
				"semver": "^7.0.0"
			}
		},
		"node_modules/bytes": {
			"version": "3.0.0",
			"resolved": "https://registry.npmjs.org/bytes/-/bytes-3.0.0.tgz",
			"integrity": "sha512-pMhOfFDPiv9t5jjIXkHosWmkSyQbvsgEVNkz0ERHbuLh2T/7j4Mqqpz523Fe8MVY89KC6Sh/QfS2sM+SjgFDcw==",
			"dev": true,
			"engines": {
				"node": ">= 0.8"
			}
		},
		"node_modules/cacache": {
			"version": "18.0.2",
			"resolved": "https://registry.npmjs.org/cacache/-/cacache-18.0.2.tgz",
			"integrity": "sha512-r3NU8h/P+4lVUHfeRw1dtgQYar3DZMm4/cm2bZgOvrFC/su7budSOeqh52VJIC4U4iG1WWwV6vRW0znqBvxNuw==",
			"dev": true,
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
			"version": "10.2.0",
			"resolved": "https://registry.npmjs.org/lru-cache/-/lru-cache-10.2.0.tgz",
			"integrity": "sha512-2bIM8x+VAf6JT4bKAljS1qUWgMsqZRPGJS6FSahIMPVvctcNhyVp7AJu7quxOW9jwkryBReKZY5tY5JYv2n/7Q==",
			"dev": true,
			"engines": {
				"node": "14 || >=16.14"
			}
		},
		"node_modules/call-bind": {
			"version": "1.0.7",
			"resolved": "https://registry.npmjs.org/call-bind/-/call-bind-1.0.7.tgz",
			"integrity": "sha512-GHTSNSYICQ7scH7sZ+M2rFopRoLh8t2bLSW6BbgrtLsahOIB5iyAVJf9GjWK3cYTDaMj4XdBpM1cA6pIS0Kv2w==",
			"dev": true,
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
			"engines": {
				"node": ">=6"
			}
		},
		"node_modules/camelcase": {
			"version": "5.3.1",
			"resolved": "https://registry.npmjs.org/camelcase/-/camelcase-5.3.1.tgz",
			"integrity": "sha512-L28STB170nwWS63UjtlEOE3dldQApaJXZkOI1uMFfzf3rRuPegHaHesyee+YxQ+W6SvRDQV6UrdOdRiR153wJg==",
			"dev": true,
			"engines": {
				"node": ">=6"
			}
		},
		"node_modules/caniuse-lite": {
			"version": "1.0.30001593",
			"resolved": "https://registry.npmjs.org/caniuse-lite/-/caniuse-lite-1.0.30001593.tgz",
			"integrity": "sha512-UWM1zlo3cZfkpBysd7AS+z+v007q9G1+fLTUU42rQnY6t2axoogPW/xol6T7juU5EUoOhML4WgBIdG+9yYqAjQ==",
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
			]
		},
		"node_modules/chalk": {
			"version": "2.4.2",
			"resolved": "https://registry.npmjs.org/chalk/-/chalk-2.4.2.tgz",
			"integrity": "sha512-Mti+f9lpJNcwF4tWV8/OrTTtF1gZi+f8FqlyAdouralcFWFQWF2+NgCHShjkCb+IFBLq9buZwE1xckQU4peSuQ==",
			"dev": true,
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
			"dev": true
		},
		"node_modules/chokidar": {
			"version": "3.6.0",
			"resolved": "https://registry.npmjs.org/chokidar/-/chokidar-3.6.0.tgz",
			"integrity": "sha512-7VT13fmjotKpGipCW9JEQAusEPE+Ei8nl6/g4FBAmIm0GOOLMua9NDDo/DWp0ZAxCr3cPq5ZpBqmPAQgDda2Pw==",
			"dev": true,
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
			"engines": {
				"node": ">=10"
			}
		},
		"node_modules/chrome-trace-event": {
			"version": "1.0.3",
			"resolved": "https://registry.npmjs.org/chrome-trace-event/-/chrome-trace-event-1.0.3.tgz",
			"integrity": "sha512-p3KULyQg4S7NIHixdwbGX+nFHkoBiA4YQmyWtjb8XngSKV124nJmRysgAeujbUVb15vh+RvFUfCPqU7rXk+hZg==",
			"dev": true,
			"engines": {
				"node": ">=6.0"
			}
		},
		"node_modules/clean-stack": {
			"version": "2.2.0",
			"resolved": "https://registry.npmjs.org/clean-stack/-/clean-stack-2.2.0.tgz",
			"integrity": "sha512-4diC9HaTE+KRAMWhDhrGOECgWZxoevMc5TlkObMqNSsVU62PYzXZ/SMTjzyGAFF1YusgxGcSWTEXBhp0CPwQ1A==",
			"dev": true,
			"engines": {
				"node": ">=6"
			}
		},
		"node_modules/cli-cursor": {
			"version": "3.1.0",
			"resolved": "https://registry.npmjs.org/cli-cursor/-/cli-cursor-3.1.0.tgz",
			"integrity": "sha512-I/zHAwsKf9FqGoXM4WWRACob9+SNukZTd94DWF57E4toouRulbCxcUh6RKUEOQlYTHJnzkPMySvPNaaSLNfLZw==",
			"dev": true,
			"dependencies": {
				"restore-cursor": "^3.1.0"
			},
			"engines": {
				"node": ">=8"
			}
		},
		"node_modules/cli-spinners": {
			"version": "2.9.2",
			"resolved": "https://registry.npmjs.org/cli-spinners/-/cli-spinners-2.9.2.tgz",
			"integrity": "sha512-ywqV+5MmyL4E7ybXgKys4DugZbX0FC6LnwrhjuykIjnK9k8OQacQ7axGKnjDXWNhns0xot3bZI5h55H8yo9cJg==",
			"dev": true,
			"engines": {
				"node": ">=6"
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
			"engines": {
				"node": ">= 12"
			}
		},
		"node_modules/cliui": {
			"version": "8.0.1",
			"resolved": "https://registry.npmjs.org/cliui/-/cliui-8.0.1.tgz",
			"integrity": "sha512-BSeNnyus75C4//NQ9gQt1/csTXyo/8Sb+afLAkzAptFuMsod9HFokGNudZpi/oQV73hnVK+sR+5PVRMd+Dr7YQ==",
			"dev": true,
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
			"dev": true
		},
		"node_modules/cliui/node_modules/wrap-ansi": {
			"version": "7.0.0",
			"resolved": "https://registry.npmjs.org/wrap-ansi/-/wrap-ansi-7.0.0.tgz",
			"integrity": "sha512-YVGIj2kamLSTxw6NsZjoBxfSwsn0ycdesmc4p+Q21c5zPuZ1pl+NfxVdxPtdHvmNVOQ6XSYG4AUtyt/Fi7D16Q==",
			"dev": true,
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
			"engines": {
				"node": ">=0.8"
			}
		},
		"node_modules/clone-deep": {
			"version": "4.0.1",
			"resolved": "https://registry.npmjs.org/clone-deep/-/clone-deep-4.0.1.tgz",
			"integrity": "sha512-neHB9xuzh/wk0dIHweyAXv2aPGZIVk3pLMe+/RNzINf17fe0OG96QroktYAUm7SM1PBnzTabaLboqqxDyMU+SQ==",
			"dev": true,
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
			"dependencies": {
				"color-name": "1.1.3"
			}
		},
		"node_modules/color-name": {
			"version": "1.1.3",
			"resolved": "https://registry.npmjs.org/color-name/-/color-name-1.1.3.tgz",
			"integrity": "sha512-72fSenhMw2HZMTVHeCA9KCmpEIbzWiQsjN+BHcBbS9vr1mtt+vJjPdksIBNUmKAW8TFUDPJK5SUU3QhE9NEXDw==",
			"dev": true
		},
		"node_modules/colorette": {
			"version": "2.0.20",
			"resolved": "https://registry.npmjs.org/colorette/-/colorette-2.0.20.tgz",
			"integrity": "sha512-IfEDxwoWIjkeXL1eXcDiow4UbKjhLdq6/EuSVR9GMN7KVH3r9gQ83e73hsz1Nd1T3ijd5xv1wcWRYO+D6kCI2w==",
			"dev": true
		},
		"node_modules/commander": {
			"version": "2.20.3",
			"resolved": "https://registry.npmjs.org/commander/-/commander-2.20.3.tgz",
			"integrity": "sha512-GpVkmM8vF2vQUkj2LvZmD35JxeJOLCwJ9cUkugyk2nuhbv3+mJvpLYYt+0+USMxE+oj+ey/lJEnhZw75x/OMcQ==",
			"dev": true
		},
		"node_modules/common-path-prefix": {
			"version": "3.0.0",
			"resolved": "https://registry.npmjs.org/common-path-prefix/-/common-path-prefix-3.0.0.tgz",
			"integrity": "sha512-QE33hToZseCH3jS0qN96O/bSh3kaw/h+Tq7ngyY9eWDUnTlTNUyqfqvCXioLe5Na5jFsL78ra/wuBU4iuEgd4w==",
			"dev": true
		},
		"node_modules/compressible": {
			"version": "2.0.18",
			"resolved": "https://registry.npmjs.org/compressible/-/compressible-2.0.18.tgz",
			"integrity": "sha512-AF3r7P5dWxL8MxyITRMlORQNaOA2IkAFaTr4k7BUumjPtRpGDTZpl0Pb1XCO6JeDCBdp126Cgs9sMxqSjgYyRg==",
			"dev": true,
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
			"dependencies": {
				"ms": "2.0.0"
			}
		},
		"node_modules/compression/node_modules/ms": {
			"version": "2.0.0",
			"resolved": "https://registry.npmjs.org/ms/-/ms-2.0.0.tgz",
			"integrity": "sha512-Tpp60P6IUJDTuOq/5Z8cdskzJujfwqfOTkrwIwj7IRISpnkJnT6SyJ4PCPnGMoFjC9ddhal5KVIYtAt97ix05A==",
			"dev": true
		},
		"node_modules/compression/node_modules/safe-buffer": {
			"version": "5.1.2",
			"resolved": "https://registry.npmjs.org/safe-buffer/-/safe-buffer-5.1.2.tgz",
			"integrity": "sha512-Gd2UZBJDkXlY7GbJxfsE8/nvKkUEU1G38c1siN6QP6a9PT9MmHB8GnpscSmMJSoF8LOIrt8ud/wPtojys4G6+g==",
			"dev": true
		},
		"node_modules/concat-map": {
			"version": "0.0.1",
			"resolved": "https://registry.npmjs.org/concat-map/-/concat-map-0.0.1.tgz",
			"integrity": "sha512-/Srv4dswyQNBfohGpz9o6Yb3Gz3SrUDqBH5rTuhGR7ahtlbYKnVxw2bCFMRljaA7EXHaXZ8wsHdodFvbkhKmqg==",
			"dev": true
		},
		"node_modules/connect-history-api-fallback": {
			"version": "2.0.0",
			"resolved": "https://registry.npmjs.org/connect-history-api-fallback/-/connect-history-api-fallback-2.0.0.tgz",
			"integrity": "sha512-U73+6lQFmfiNPrYbXqr6kZ1i1wiRqXnp2nhMsINseWXO8lDau0LGEffJ8kQi4EjLZympVgRdvqjAgiZ1tgzDDA==",
			"dev": true,
			"engines": {
				"node": ">=0.8"
			}
		},
		"node_modules/content-disposition": {
			"version": "0.5.4",
			"resolved": "https://registry.npmjs.org/content-disposition/-/content-disposition-0.5.4.tgz",
			"integrity": "sha512-FveZTNuGw04cxlAiWbzi6zTAL/lhehaWbTtgluJh4/E95DqMwTmha3KZN1aAWA8cFIhHzMZUvLevkw5Rqk+tSQ==",
			"dev": true,
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
			"engines": {
				"node": ">= 0.6"
			}
		},
		"node_modules/convert-source-map": {
			"version": "1.9.0",
			"resolved": "https://registry.npmjs.org/convert-source-map/-/convert-source-map-1.9.0.tgz",
			"integrity": "sha512-ASFBup0Mz1uyiIjANan1jzLQami9z1PoYSZCiiYW2FczPbenXc45FZdBZLzOT+r6+iciuEModtmCti+hjaAk0A==",
			"dev": true
		},
		"node_modules/cookie": {
			"version": "0.5.0",
			"resolved": "https://registry.npmjs.org/cookie/-/cookie-0.5.0.tgz",
			"integrity": "sha512-YZ3GUyn/o8gfKJlnlX7g7xq4gyO6OSuhGPKaaGssGB2qgDUS0gPgtTvoyZLTt9Ab6dC4hfc9dV5arkvc/OCmrw==",
			"dev": true,
			"engines": {
				"node": ">= 0.6"
			}
		},
		"node_modules/cookie-signature": {
			"version": "1.0.6",
			"resolved": "https://registry.npmjs.org/cookie-signature/-/cookie-signature-1.0.6.tgz",
			"integrity": "sha512-QADzlaHc8icV8I7vbaJXJwod9HWYp8uCqf1xa4OfNu1T7JVxQIrUgOWtHdNDtPiywmFbiS12VjotIXLrKM3orQ==",
			"dev": true
		},
		"node_modules/copy-anything": {
			"version": "2.0.6",
			"resolved": "https://registry.npmjs.org/copy-anything/-/copy-anything-2.0.6.tgz",
			"integrity": "sha512-1j20GZTsvKNkc4BY3NpMOM8tt///wY3FpIzozTOFO2ffuZcV61nojHXVKIy3WM+7ADCy5FVhdZYHYDdgTU0yJw==",
			"dev": true,
			"dependencies": {
				"is-what": "^3.14.1"
			},
			"funding": {
				"url": "https://github.com/sponsors/mesqueeb"
			}
		},
		"node_modules/copy-webpack-plugin": {
			"version": "11.0.0",
			"resolved": "https://registry.npmjs.org/copy-webpack-plugin/-/copy-webpack-plugin-11.0.0.tgz",
			"integrity": "sha512-fX2MWpamkW0hZxMEg0+mYnA40LTosOSa5TqZ9GYIBzyJa9C3QUaMPSE2xAi/buNr8u89SfD9wHSQVBzrRa/SOQ==",
			"dev": true,
			"dependencies": {
				"fast-glob": "^3.2.11",
				"glob-parent": "^6.0.1",
				"globby": "^13.1.1",
				"normalize-path": "^3.0.0",
				"schema-utils": "^4.0.0",
				"serialize-javascript": "^6.0.0"
			},
			"engines": {
				"node": ">= 14.15.0"
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
			"dependencies": {
				"is-glob": "^4.0.3"
			},
			"engines": {
				"node": ">=10.13.0"
			}
		},
		"node_modules/core-js-compat": {
			"version": "3.36.0",
			"resolved": "https://registry.npmjs.org/core-js-compat/-/core-js-compat-3.36.0.tgz",
			"integrity": "sha512-iV9Pd/PsgjNWBXeq8XRtWVSgz2tKAfhfvBs7qxYty+RlRd+OCksaWmOnc4JKrTc1cToXL1N0s3l/vwlxPtdElw==",
			"dev": true,
			"dependencies": {
				"browserslist": "^4.22.3"
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
			"dev": true
		},
		"node_modules/cosmiconfig": {
			"version": "9.0.0",
			"resolved": "https://registry.npmjs.org/cosmiconfig/-/cosmiconfig-9.0.0.tgz",
			"integrity": "sha512-itvL5h8RETACmOTFc4UfIyB2RfEHi71Ax6E/PivVxq9NseKbOWpeyHEOIbmAw1rs8Ak0VursQNww7lf7YtUwzg==",
			"dev": true,
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
		"node_modules/cosmiconfig/node_modules/argparse": {
			"version": "2.0.1",
			"resolved": "https://registry.npmjs.org/argparse/-/argparse-2.0.1.tgz",
			"integrity": "sha512-8+9WqebbFzpX9OR+Wa6O29asIogeRMzcGtAINdpMHHyAg10f05aSFVBbcEqGf/PXw1EjAZ+q2/bEBg3DvurK3Q==",
			"dev": true
		},
		"node_modules/cosmiconfig/node_modules/js-yaml": {
			"version": "4.1.0",
			"resolved": "https://registry.npmjs.org/js-yaml/-/js-yaml-4.1.0.tgz",
			"integrity": "sha512-wpxZs9NoxZaJESJGIZTyDEaYpl0FKSA+FB9aJiyemKhMwkxQg63h4T1KJgUGHpTqPDNRcmmYLugrRjJlBtWvRA==",
			"dev": true,
			"dependencies": {
				"argparse": "^2.0.1"
			},
			"bin": {
				"js-yaml": "bin/js-yaml.js"
			}
		},
		"node_modules/critters": {
			"version": "0.0.20",
			"resolved": "https://registry.npmjs.org/critters/-/critters-0.0.20.tgz",
			"integrity": "sha512-CImNRorKOl5d8TWcnAz5n5izQ6HFsvz29k327/ELy6UFcmbiZNOsinaKvzv16WZR0P6etfSWYzE47C4/56B3Uw==",
			"dev": true,
			"dependencies": {
				"chalk": "^4.1.0",
				"css-select": "^5.1.0",
				"dom-serializer": "^2.0.0",
				"domhandler": "^5.0.2",
				"htmlparser2": "^8.0.2",
				"postcss": "^8.4.23",
				"pretty-bytes": "^5.3.0"
			}
		},
		"node_modules/critters/node_modules/ansi-styles": {
			"version": "4.3.0",
			"resolved": "https://registry.npmjs.org/ansi-styles/-/ansi-styles-4.3.0.tgz",
			"integrity": "sha512-zbB9rCJAT1rbjiVDb2hqKFHNYLxgtk8NURxZ3IZwD3F6NtxbXZQCnnSi1Lkx+IDohdPlFp222wVALIheZJQSEg==",
			"dev": true,
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
			"dev": true
		},
		"node_modules/critters/node_modules/has-flag": {
			"version": "4.0.0",
			"resolved": "https://registry.npmjs.org/has-flag/-/has-flag-4.0.0.tgz",
			"integrity": "sha512-EykJT/Q1KjTWctppgIAgfSO0tKVuZUjhgMr17kqTumMl6Afv3EISleU7qZUzoXDFTAHTDC4NOoG/ZxU3EvlMPQ==",
			"dev": true,
			"engines": {
				"node": ">=8"
			}
		},
		"node_modules/critters/node_modules/supports-color": {
			"version": "7.2.0",
			"resolved": "https://registry.npmjs.org/supports-color/-/supports-color-7.2.0.tgz",
			"integrity": "sha512-qpCAvRl9stuOHveKsn7HncJRvv501qIacKzQlO/+Lwxc9+0q2wLyv4Dfvt80/DPn2pqOBsJdDiogXGR9+OvwRw==",
			"dev": true,
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
			"dev": true
		},
		"node_modules/cross-spawn/node_modules/which": {
			"version": "2.0.2",
			"resolved": "https://registry.npmjs.org/which/-/which-2.0.2.tgz",
			"integrity": "sha512-BLI3Tl1TW3Pvl70l3yq3Y64i+awpwXqsGBYWkkqMtnbXgrMD+yj7rhW0kuEDxzJaYXGjEW5ogapKNMEKNMjibA==",
			"dev": true,
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
			"version": "6.10.0",
			"resolved": "https://registry.npmjs.org/css-loader/-/css-loader-6.10.0.tgz",
			"integrity": "sha512-LTSA/jWbwdMlk+rhmElbDR2vbtQoTBPr7fkJE+mxrHj+7ru0hUmHafDRzWIjIHTwpitWVaqY2/UWGRca3yUgRw==",
			"dev": true,
			"dependencies": {
				"icss-utils": "^5.1.0",
				"postcss": "^8.4.33",
				"postcss-modules-extract-imports": "^3.0.0",
				"postcss-modules-local-by-default": "^4.0.4",
				"postcss-modules-scope": "^3.1.1",
				"postcss-modules-values": "^4.0.0",
				"postcss-value-parser": "^4.2.0",
				"semver": "^7.5.4"
			},
			"engines": {
				"node": ">= 12.13.0"
			},
			"funding": {
				"type": "opencollective",
				"url": "https://opencollective.com/webpack"
			},
			"peerDependencies": {
				"@rspack/core": "0.x || 1.x",
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
		"node_modules/css-select": {
			"version": "5.1.0",
			"resolved": "https://registry.npmjs.org/css-select/-/css-select-5.1.0.tgz",
			"integrity": "sha512-nwoRF1rvRRnnCqqY7updORDsuqKzqYJ28+oSMaJMMgOauh3fvwHqMS7EZpIPqK8GL+g9mKxF1vP/ZjSeNjEVHg==",
			"dev": true,
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
		"node_modules/css-what": {
			"version": "6.1.0",
			"resolved": "https://registry.npmjs.org/css-what/-/css-what-6.1.0.tgz",
			"integrity": "sha512-HTUrgRJ7r4dsZKU6GjmpfRK1O76h97Z8MfS1G0FozR+oF2kG6Vfe8JE6zwrkbxigziPHinCJ+gCPjA9EaBDtRw==",
			"dev": true,
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
			"bin": {
				"cssesc": "bin/cssesc"
			},
			"engines": {
				"node": ">=4"
			}
		},
		"node_modules/debug": {
			"version": "4.3.4",
			"resolved": "https://registry.npmjs.org/debug/-/debug-4.3.4.tgz",
			"integrity": "sha512-PRWFHuSU3eDtQJPvnNY7Jcket1j0t5OuOsFzPPzsekD52Zl8qUfFIPEiswXqIvHWGVHOgX+7G/vCNNhehwxfkQ==",
			"dev": true,
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
		"node_modules/default-gateway": {
			"version": "6.0.3",
			"resolved": "https://registry.npmjs.org/default-gateway/-/default-gateway-6.0.3.tgz",
			"integrity": "sha512-fwSOJsbbNzZ/CUFpqFBqYfYNLj1NbMPm8MMCIzHjC83iSJRBEGmDUxU+WP661BaBQImeC2yHwXtz+P/O9o+XEg==",
			"dev": true,
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
			"version": "2.0.0",
			"resolved": "https://registry.npmjs.org/define-lazy-prop/-/define-lazy-prop-2.0.0.tgz",
			"integrity": "sha512-Ds09qNh8yw3khSjiJjiUInaGX9xlqZDY7JVryGxdxV7NPeuqQfplOpQ66yJFZut3jLa5zOwkXw1g9EI2uKh4Og==",
			"dev": true,
			"engines": {
				"node": ">=8"
			}
		},
		"node_modules/depd": {
			"version": "2.0.0",
			"resolved": "https://registry.npmjs.org/depd/-/depd-2.0.0.tgz",
			"integrity": "sha512-g7nH6P6dyDioJogAAGprGpCtVImJhpPk/roCzdb3fIh61/s/nPsfR6onyMwkCAR/OlC3yBC0lESvUoQEAssIrw==",
			"dev": true,
			"engines": {
				"node": ">= 0.8"
			}
		},
		"node_modules/destroy": {
			"version": "1.2.0",
			"resolved": "https://registry.npmjs.org/destroy/-/destroy-1.2.0.tgz",
			"integrity": "sha512-2sJGJTaXIIaR1w4iJSNoN0hnMY7Gpc/n8D4qSCJw8QqFWXf7cuAgnEHxBpweaVcPevC2l3KpjYCx3NypQQgaJg==",
			"dev": true,
			"engines": {
				"node": ">= 0.8",
				"npm": "1.2.8000 || >= 1.4.16"
			}
		},
		"node_modules/detect-node": {
			"version": "2.1.0",
			"resolved": "https://registry.npmjs.org/detect-node/-/detect-node-2.1.0.tgz",
			"integrity": "sha512-T0NIuQpnTvFDATNuHN5roPwSBG83rFsuO+MXXH9/3N1eFbn4wcPjttvjMLEPWJ0RGUYgQE7cGgS3tNxbqCGM7g==",
			"dev": true
		},
		"node_modules/dir-glob": {
			"version": "3.0.1",
			"resolved": "https://registry.npmjs.org/dir-glob/-/dir-glob-3.0.1.tgz",
			"integrity": "sha512-WkrWp9GR4KXfKGYzOLmTuGVi1UWFfws377n9cc55/tb6DuqyF6pcQ5AbiHEshaDpY9v6oaSr2XCDidGmMwdzIA==",
			"dev": true,
			"dependencies": {
				"path-type": "^4.0.0"
			},
			"engines": {
				"node": ">=8"
			}
		},
		"node_modules/dns-packet": {
			"version": "5.6.1",
			"resolved": "https://registry.npmjs.org/dns-packet/-/dns-packet-5.6.1.tgz",
			"integrity": "sha512-l4gcSouhcgIKRvyy99RNVOgxXiicE+2jZoNmaNmZ6JXiGajBOJAesk1OBlJuM5k2c+eudGdLxDqXuPCKIj6kpw==",
			"dev": true,
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
			]
		},
		"node_modules/domhandler": {
			"version": "5.0.3",
			"resolved": "https://registry.npmjs.org/domhandler/-/domhandler-5.0.3.tgz",
			"integrity": "sha512-cgwlv/1iFQiFnU96XXgROh8xTeetsnJiDsTc7TYCLFd9+/WNkIqPTxiM/8pSd8VIrhXGTf1Ny1q1hquVqDJB5w==",
			"dev": true,
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
			"dev": true
		},
		"node_modules/ee-first": {
			"version": "1.1.1",
			"resolved": "https://registry.npmjs.org/ee-first/-/ee-first-1.1.1.tgz",
			"integrity": "sha512-WMwm9LhRUo+WUaRN+vRuETqG89IgZphVSNkdFgeb6sS/E4OrDIN7t48CAewSHXc6C8lefD8KKfr5vY61brQlow==",
			"dev": true
		},
		"node_modules/electron-to-chromium": {
			"version": "1.4.691",
			"resolved": "https://registry.npmjs.org/electron-to-chromium/-/electron-to-chromium-1.4.691.tgz",
			"integrity": "sha512-vJ+/LmKja/St8Ofq4JGMFVZuwG7ECU6akjNSn2/g6nv8xbIBOWGlEs+WA8/3XaWkU0Nlyu0iFGgOxC4mpgFjgA==",
			"dev": true
		},
		"node_modules/emoji-regex": {
			"version": "8.0.0",
			"resolved": "https://registry.npmjs.org/emoji-regex/-/emoji-regex-8.0.0.tgz",
			"integrity": "sha512-MSjYzcWNOA0ewAHpz0MxpYFvwg6yjy1NG3xteoqz644VCo/RPgnr1/GGt+ic3iJTzQ8Eu3TdM14SawnVUmGE6A==",
			"dev": true
		},
		"node_modules/emojis-list": {
			"version": "3.0.0",
			"resolved": "https://registry.npmjs.org/emojis-list/-/emojis-list-3.0.0.tgz",
			"integrity": "sha512-/kyM18EfinwXZbno9FyUGeFh87KC8HRQBQGildHZbEuRyWFOmv1U10o9BBp8XVZDVNNuQKyIGIu5ZYAAXJ0V2Q==",
			"dev": true,
			"engines": {
				"node": ">= 4"
			}
		},
		"node_modules/encodeurl": {
			"version": "1.0.2",
			"resolved": "https://registry.npmjs.org/encodeurl/-/encodeurl-1.0.2.tgz",
			"integrity": "sha512-TPJXq8JqFaVYm2CWmPvnP2Iyo4ZSM7/QKcSmuMLDObfpH5fi7RUGmd/rTDf+rut/saiDiQEeVTNgAmJEdAOx0w==",
			"dev": true,
			"engines": {
				"node": ">= 0.8"
			}
		},
		"node_modules/encoding": {
			"version": "0.1.13",
			"resolved": "https://registry.npmjs.org/encoding/-/encoding-0.1.13.tgz",
			"integrity": "sha512-ETBauow1T35Y/WZMkio9jiM0Z5xjHHmJ4XmjZOq1l/dXz3lr2sRn87nJy20RupqSh1F2m3HHPSp8ShIPQJrJ3A==",
			"dev": true,
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
			"optional": true,
			"dependencies": {
				"safer-buffer": ">= 2.1.2 < 3.0.0"
			},
			"engines": {
				"node": ">=0.10.0"
			}
		},
		"node_modules/enhanced-resolve": {
			"version": "5.15.1",
			"resolved": "https://registry.npmjs.org/enhanced-resolve/-/enhanced-resolve-5.15.1.tgz",
			"integrity": "sha512-3d3JRbwsCLJsYgvb6NuWEG44jjPSOMuS73L/6+7BZuoKm3W+qXnSoIYVHi8dG7Qcg4inAY4jbzkZ7MnskePeDg==",
			"dev": true,
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
			"engines": {
				"node": ">=6"
			}
		},
		"node_modules/err-code": {
			"version": "2.0.3",
			"resolved": "https://registry.npmjs.org/err-code/-/err-code-2.0.3.tgz",
			"integrity": "sha512-2bmlRpNKBxT/CRmPOlyISQpNj+qSeYvcym/uT0Jx2bMOlKLtSy1ZmLuVxSEKKyor/N5yhvp/ZiG1oE3DEYMSFA==",
			"dev": true
		},
		"node_modules/errno": {
			"version": "0.1.8",
			"resolved": "https://registry.npmjs.org/errno/-/errno-0.1.8.tgz",
			"integrity": "sha512-dJ6oBr5SQ1VSd9qkk7ByRgb/1SH4JZjCHSW/mr63/QcXO9zLVxvJ6Oy13nio03rxpSnVDDjFor75SjVeZWPW/A==",
			"dev": true,
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
			"dependencies": {
				"is-arrayish": "^0.2.1"
			}
		},
		"node_modules/es-define-property": {
			"version": "1.0.0",
			"resolved": "https://registry.npmjs.org/es-define-property/-/es-define-property-1.0.0.tgz",
			"integrity": "sha512-jxayLKShrEqqzJ0eumQbVhTYQM27CfT1T35+gCgDFoL82JLsXqTJ76zv6A0YLOgEnLUMvLzsDsGIrl8NFpT2gQ==",
			"dev": true,
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
			"engines": {
				"node": ">= 0.4"
			}
		},
		"node_modules/es-module-lexer": {
			"version": "1.4.1",
			"resolved": "https://registry.npmjs.org/es-module-lexer/-/es-module-lexer-1.4.1.tgz",
			"integrity": "sha512-cXLGjP0c4T3flZJKQSuziYoq7MlT+rnvfZjfp7h+I7K9BNX54kP9nyWvdbwjQ4u1iWbOL4u96fgeZLToQlZC7w==",
			"dev": true
		},
		"node_modules/esbuild": {
			"version": "0.20.0",
			"resolved": "https://registry.npmjs.org/esbuild/-/esbuild-0.20.0.tgz",
			"integrity": "sha512-6iwE3Y2RVYCME1jLpBqq7LQWK3MW6vjV2bZy6gt/WrqkY+WE74Spyc0ThAOYpMtITvnjX09CrC6ym7A/m9mebA==",
			"dev": true,
			"hasInstallScript": true,
			"optional": true,
			"bin": {
				"esbuild": "bin/esbuild"
			},
			"engines": {
				"node": ">=12"
			},
			"optionalDependencies": {
				"@esbuild/aix-ppc64": "0.20.0",
				"@esbuild/android-arm": "0.20.0",
				"@esbuild/android-arm64": "0.20.0",
				"@esbuild/android-x64": "0.20.0",
				"@esbuild/darwin-arm64": "0.20.0",
				"@esbuild/darwin-x64": "0.20.0",
				"@esbuild/freebsd-arm64": "0.20.0",
				"@esbuild/freebsd-x64": "0.20.0",
				"@esbuild/linux-arm": "0.20.0",
				"@esbuild/linux-arm64": "0.20.0",
				"@esbuild/linux-ia32": "0.20.0",
				"@esbuild/linux-loong64": "0.20.0",
				"@esbuild/linux-mips64el": "0.20.0",
				"@esbuild/linux-ppc64": "0.20.0",
				"@esbuild/linux-riscv64": "0.20.0",
				"@esbuild/linux-s390x": "0.20.0",
				"@esbuild/linux-x64": "0.20.0",
				"@esbuild/netbsd-x64": "0.20.0",
				"@esbuild/openbsd-x64": "0.20.0",
				"@esbuild/sunos-x64": "0.20.0",
				"@esbuild/win32-arm64": "0.20.0",
				"@esbuild/win32-ia32": "0.20.0",
				"@esbuild/win32-x64": "0.20.0"
			}
		},
		"node_modules/esbuild-wasm": {
			"version": "0.20.0",
			"resolved": "https://registry.npmjs.org/esbuild-wasm/-/esbuild-wasm-0.20.0.tgz",
			"integrity": "sha512-Lc9KeQCg1Zf8kCtfDXgy29rx0x8dOuhDWbkP76Wc64q7ctOOc1Zv1C39AxiE+y4N6ONyXtJk4HKpM7jlU7/jSA==",
			"dev": true,
			"bin": {
				"esbuild": "bin/esbuild"
			},
			"engines": {
				"node": ">=12"
			}
		},
		"node_modules/escalade": {
			"version": "3.1.2",
			"resolved": "https://registry.npmjs.org/escalade/-/escalade-3.1.2.tgz",
			"integrity": "sha512-ErCHMCae19vR8vQGe50xIsVomy19rg6gFu3+r3jkEO46suLMWBksvVyoGgQV+jOfl84ZSOSlmv6Gxa89PmTGmA==",
			"dev": true,
			"engines": {
				"node": ">=6"
			}
		},
		"node_modules/escape-html": {
			"version": "1.0.3",
			"resolved": "https://registry.npmjs.org/escape-html/-/escape-html-1.0.3.tgz",
			"integrity": "sha512-NiSupZ4OeuGwr68lGIeym/ksIZMJodUGOSCZ/FSnTxcrekbvqrgdUxlJOMpijaKZVjAJrWrGs/6Jy8OMuyj9ow==",
			"dev": true
		},
		"node_modules/escape-string-regexp": {
			"version": "1.0.5",
			"resolved": "https://registry.npmjs.org/escape-string-regexp/-/escape-string-regexp-1.0.5.tgz",
			"integrity": "sha512-vbRorB5FUQWvla16U8R/qgaFIya2qGzwDrNmCZuYKrbdSUMG6I1ZCGQRefkRVhuOkIGVne7BQ35DSfo1qvJqFg==",
			"dev": true,
			"engines": {
				"node": ">=0.8.0"
			}
		},
		"node_modules/eslint-scope": {
			"version": "5.1.1",
			"resolved": "https://registry.npmjs.org/eslint-scope/-/eslint-scope-5.1.1.tgz",
			"integrity": "sha512-2NxwbF/hZ0KpepYN0cNbo+FN6XoK7GaHlQhgx/hIZl6Va0bF45RQOOwhLIy8lQDbuCiadSLCBnH2CFYquit5bw==",
			"dev": true,
			"dependencies": {
				"esrecurse": "^4.3.0",
				"estraverse": "^4.1.1"
			},
			"engines": {
				"node": ">=8.0.0"
			}
		},
		"node_modules/esprima": {
			"version": "4.0.1",
			"resolved": "https://registry.npmjs.org/esprima/-/esprima-4.0.1.tgz",
			"integrity": "sha512-eGuFFw7Upda+g4p+QHvnW0RyTX/SVeJBDM/gCtMARO0cLuT2HcEKnTPvhjV6aGeqrCB/sbNop0Kszm0jsaWU4A==",
			"dev": true,
			"bin": {
				"esparse": "bin/esparse.js",
				"esvalidate": "bin/esvalidate.js"
			},
			"engines": {
				"node": ">=4"
			}
		},
		"node_modules/esrecurse": {
			"version": "4.3.0",
			"resolved": "https://registry.npmjs.org/esrecurse/-/esrecurse-4.3.0.tgz",
			"integrity": "sha512-KmfKL3b6G+RXvP8N1vr3Tq1kL/oCFgn2NYXEtqP8/L3pKapUA4G8cFVaoF3SU323CD4XypR/ffioHmkti6/Tag==",
			"dev": true,
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
			"engines": {
				"node": ">=4.0"
			}
		},
		"node_modules/estraverse": {
			"version": "4.3.0",
			"resolved": "https://registry.npmjs.org/estraverse/-/estraverse-4.3.0.tgz",
			"integrity": "sha512-39nnKffWz8xN1BU/2c79n9nB9HDzo0niYUqx6xyqUnyoAnQyyWpOTdZEeiCch8BBu515t4wp9ZmgVfVhn9EBpw==",
			"dev": true,
			"engines": {
				"node": ">=4.0"
			}
		},
		"node_modules/esutils": {
			"version": "2.0.3",
			"resolved": "https://registry.npmjs.org/esutils/-/esutils-2.0.3.tgz",
			"integrity": "sha512-kVscqXk4OCp68SZ0dkgEKVi6/8ij300KBWTJq32P/dYeWTSwK41WyTxalN1eRmA5Z9UU/LX9D7FWSmV9SAYx6g==",
			"dev": true,
			"engines": {
				"node": ">=0.10.0"
			}
		},
		"node_modules/etag": {
			"version": "1.8.1",
			"resolved": "https://registry.npmjs.org/etag/-/etag-1.8.1.tgz",
			"integrity": "sha512-aIL5Fx7mawVa300al2BnEE4iNvo1qETxLrPI/o05L7z6go7fCw1J6EQmbK4FmJ2AS7kgVF/KEZWufBfdClMcPg==",
			"dev": true,
			"engines": {
				"node": ">= 0.6"
			}
		},
		"node_modules/eventemitter3": {
			"version": "4.0.7",
			"resolved": "https://registry.npmjs.org/eventemitter3/-/eventemitter3-4.0.7.tgz",
			"integrity": "sha512-8guHBZCwKnFhYdHr2ysuRWErTwhoN2X8XELRlrRwpmfeY2jjuUN4taQMsULKUVo1K4DvZl+0pgfyoysHxvmvEw==",
			"dev": true
		},
		"node_modules/events": {
			"version": "3.3.0",
			"resolved": "https://registry.npmjs.org/events/-/events-3.3.0.tgz",
			"integrity": "sha512-mQw+2fkQbALzQ7V0MY0IqdnXNOeTtP4r0lN9z7AAawCXgqea7bDii20AYrIBrFd/Hx0M2Ocz6S111CaFkUcb0Q==",
			"dev": true,
			"engines": {
				"node": ">=0.8.x"
			}
		},
		"node_modules/execa": {
			"version": "5.1.1",
			"resolved": "https://registry.npmjs.org/execa/-/execa-5.1.1.tgz",
			"integrity": "sha512-8uSpZZocAZRBAPIEINJj3Lo9HyGitllczc27Eh5YYojjMFMn8yHMDMaUHE2Jqfq05D/wucwI4JGURyXt1vchyg==",
			"dev": true,
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
		"node_modules/execa/node_modules/signal-exit": {
			"version": "3.0.7",
			"resolved": "https://registry.npmjs.org/signal-exit/-/signal-exit-3.0.7.tgz",
			"integrity": "sha512-wnD2ZE+l+SPC/uoS0vXeE9L1+0wuaMqKlfz9AMUo38JsyLSBWSFcHR1Rri62LZc12vLr1gb3jl7iwQhgwpAbGQ==",
			"dev": true
		},
		"node_modules/exponential-backoff": {
			"version": "3.1.1",
			"resolved": "https://registry.npmjs.org/exponential-backoff/-/exponential-backoff-3.1.1.tgz",
			"integrity": "sha512-dX7e/LHVJ6W3DE1MHWi9S1EYzDESENfLrYohG2G++ovZrYOkm4Knwa0mc1cn84xJOR4KEU0WSchhLbd0UklbHw==",
			"dev": true
		},
		"node_modules/express": {
			"version": "4.18.3",
			"resolved": "https://registry.npmjs.org/express/-/express-4.18.3.tgz",
			"integrity": "sha512-6VyCijWQ+9O7WuVMTRBTl+cjNNIzD5cY5mQ1WM8r/LEkI2u8EYpOotESNwzNlyCn3g+dmjKYI6BmNneSr/FSRw==",
			"dev": true,
			"dependencies": {
				"accepts": "~1.3.8",
				"array-flatten": "1.1.1",
				"body-parser": "1.20.2",
				"content-disposition": "0.5.4",
				"content-type": "~1.0.4",
				"cookie": "0.5.0",
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
			"dependencies": {
				"ms": "2.0.0"
			}
		},
		"node_modules/express/node_modules/ms": {
			"version": "2.0.0",
			"resolved": "https://registry.npmjs.org/ms/-/ms-2.0.0.tgz",
			"integrity": "sha512-Tpp60P6IUJDTuOq/5Z8cdskzJujfwqfOTkrwIwj7IRISpnkJnT6SyJ4PCPnGMoFjC9ddhal5KVIYtAt97ix05A==",
			"dev": true
		},
		"node_modules/external-editor": {
			"version": "3.1.0",
			"resolved": "https://registry.npmjs.org/external-editor/-/external-editor-3.1.0.tgz",
			"integrity": "sha512-hMQ4CX1p1izmuLYyZqLMO/qGNw10wSv9QDCPfzXfyFrOaCSSoRfqE1Kf1s5an66J5JZC62NewG+mK49jOCtQew==",
			"dev": true,
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
			"dev": true
		},
		"node_modules/fast-glob": {
			"version": "3.3.2",
			"resolved": "https://registry.npmjs.org/fast-glob/-/fast-glob-3.3.2.tgz",
			"integrity": "sha512-oX2ruAFQwf/Orj8m737Y5adxDQO0LAB7/S5MnxCdTNDd4p6BsyIVsv9JQsATbTSq8KHRpLwIHbVlUNatxd+1Ow==",
			"dev": true,
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
			"dev": true
		},
		"node_modules/fastq": {
			"version": "1.17.1",
			"resolved": "https://registry.npmjs.org/fastq/-/fastq-1.17.1.tgz",
			"integrity": "sha512-sRVD3lWVIXWg6By68ZN7vho9a1pQcN/WBFaAAsDDFzlJjvoGx0P8z7V1t72grFJfJhu3YPZBuu25f7Kaw2jN1w==",
			"dev": true,
			"dependencies": {
				"reusify": "^1.0.4"
			}
		},
		"node_modules/faye-websocket": {
			"version": "0.11.4",
			"resolved": "https://registry.npmjs.org/faye-websocket/-/faye-websocket-0.11.4.tgz",
			"integrity": "sha512-CzbClwlXAuiRQAlUyfqPgvPoNKTckTPGfwZV4ZdAhVcP2lh9KUxJg2b5GkE7XbjKQ3YJnQ9z6D9ntLAlB+tP8g==",
			"dev": true,
			"dependencies": {
				"websocket-driver": ">=0.5.1"
			},
			"engines": {
				"node": ">=0.8.0"
			}
		},
		"node_modules/figures": {
			"version": "3.2.0",
			"resolved": "https://registry.npmjs.org/figures/-/figures-3.2.0.tgz",
			"integrity": "sha512-yaduQFRKLXYOGgEn6AZau90j3ggSOyiqXU0F9JZfeXYhNa+Jk4X+s45A2zg5jns87GAFa34BBm2kXw4XpNcbdg==",
			"dev": true,
			"dependencies": {
				"escape-string-regexp": "^1.0.5"
			},
			"engines": {
				"node": ">=8"
			},
			"funding": {
				"url": "https://github.com/sponsors/sindresorhus"
			}
		},
		"node_modules/fill-range": {
			"version": "7.0.1",
			"resolved": "https://registry.npmjs.org/fill-range/-/fill-range-7.0.1.tgz",
			"integrity": "sha512-qOo9F+dMUmC2Lcb4BbVvnKJxTPjCm+RRpe4gDuGrzkL7mEVl/djYSu2OdQ2Pa302N4oqkSg9ir6jaLWJ2USVpQ==",
			"dev": true,
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
			"dependencies": {
				"ms": "2.0.0"
			}
		},
		"node_modules/finalhandler/node_modules/ms": {
			"version": "2.0.0",
			"resolved": "https://registry.npmjs.org/ms/-/ms-2.0.0.tgz",
			"integrity": "sha512-Tpp60P6IUJDTuOq/5Z8cdskzJujfwqfOTkrwIwj7IRISpnkJnT6SyJ4PCPnGMoFjC9ddhal5KVIYtAt97ix05A==",
			"dev": true
		},
		"node_modules/find-cache-dir": {
			"version": "4.0.0",
			"resolved": "https://registry.npmjs.org/find-cache-dir/-/find-cache-dir-4.0.0.tgz",
			"integrity": "sha512-9ZonPT4ZAK4a+1pUPVPZJapbi7O5qbbJPdYw/NOQWZZbVLdDTYM3A4R9z/DpAM08IDaFGsvPgiGZ82WEwUDWjg==",
			"dev": true,
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
			"version": "4.1.0",
			"resolved": "https://registry.npmjs.org/find-up/-/find-up-4.1.0.tgz",
			"integrity": "sha512-PpOwAdQ/YlXQ2vj8a3h8IipDuYRi3wceVQQGYWxNINccq40Anw7BlsEXCMbt1Zt+OLA6Fq9suIpIWD0OsnISlw==",
			"dev": true,
			"dependencies": {
				"locate-path": "^5.0.0",
				"path-exists": "^4.0.0"
			},
			"engines": {
				"node": ">=8"
			}
		},
		"node_modules/flat": {
			"version": "5.0.2",
			"resolved": "https://registry.npmjs.org/flat/-/flat-5.0.2.tgz",
			"integrity": "sha512-b6suED+5/3rTpUBdG1gupIl8MPFCAMA0QXwmljLhvCUKcUvdE4gWky9zpuGCcXHOsz4J9wPGNWq6OKpmIzz3hQ==",
			"dev": true,
			"bin": {
				"flat": "cli.js"
			}
		},
		"node_modules/follow-redirects": {
			"version": "1.15.5",
			"resolved": "https://registry.npmjs.org/follow-redirects/-/follow-redirects-1.15.5.tgz",
			"integrity": "sha512-vSFWUON1B+yAw1VN4xMfxgn5fTUiaOzAJCKBwIIgT/+7CuGy9+r+5gITvP62j3RmaD5Ph65UaERdOSRGUzZtgw==",
			"dev": true,
			"funding": [
				{
					"type": "individual",
					"url": "https://github.com/sponsors/RubenVerborgh"
				}
			],
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
			"version": "3.1.1",
			"resolved": "https://registry.npmjs.org/foreground-child/-/foreground-child-3.1.1.tgz",
			"integrity": "sha512-TMKDUnIte6bfb5nWv7V/caI169OHgvwjb7V4WkeUvbQQdjr5rWKqHFiKWb/fcOwB+CzBT+qbWjvj+DVwRskpIg==",
			"dev": true,
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
			"engines": {
				"node": ">= 0.6"
			}
		},
		"node_modules/fraction.js": {
			"version": "4.3.7",
			"resolved": "https://registry.npmjs.org/fraction.js/-/fraction.js-4.3.7.tgz",
			"integrity": "sha512-ZsDfxO51wGAXREY55a7la9LScWpwv9RxIrYABrlvOFBlH/ShPnrtsXeuUIfXKKOVicNxQ+o8JTbJvjS4M89yew==",
			"dev": true,
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
			"engines": {
				"node": ">= 0.6"
			}
		},
		"node_modules/fs-minipass": {
			"version": "3.0.3",
			"resolved": "https://registry.npmjs.org/fs-minipass/-/fs-minipass-3.0.3.tgz",
			"integrity": "sha512-XUBA9XClHbnJWSfBzjkm6RvPsyg3sryZt06BEQoXcF7EK/xpGaQYJgQKDJSUH5SGZ76Y7pFx1QBnXz09rU5Fbw==",
			"dev": true,
			"dependencies": {
				"minipass": "^7.0.3"
			},
			"engines": {
				"node": "^14.17.0 || ^16.13.0 || >=18.0.0"
			}
		},
		"node_modules/fs-monkey": {
			"version": "1.0.5",
			"resolved": "https://registry.npmjs.org/fs-monkey/-/fs-monkey-1.0.5.tgz",
			"integrity": "sha512-8uMbBjrhzW76TYgEV27Y5E//W2f/lTFmx78P2w19FZSxarhI/798APGQyuGCwmkNxgwGRhrLfvWyLBvNtuOmew==",
			"dev": true
		},
		"node_modules/fs.realpath": {
			"version": "1.0.0",
			"resolved": "https://registry.npmjs.org/fs.realpath/-/fs.realpath-1.0.0.tgz",
			"integrity": "sha512-OO0pH2lK6a0hZnAdau5ItzHPI6pUlvI7jMVnxUQRtw4owF2wk8lOSabtGDCTP4Ggrg2MbGnWO9X8K1t4+fGMDw==",
			"dev": true
		},
		"node_modules/fsevents": {
			"version": "2.3.3",
			"resolved": "https://registry.npmjs.org/fsevents/-/fsevents-2.3.3.tgz",
			"integrity": "sha512-5xoDfX+fL7faATnagmWPpbFtwh/R77WmMMqqHGS65C3vvB0YHrgF+B1YmZ3441tMj5n63k0212XNoJwzlhffQw==",
			"dev": true,
			"hasInstallScript": true,
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
			"funding": {
				"url": "https://github.com/sponsors/ljharb"
			}
		},
		"node_modules/gensync": {
			"version": "1.0.0-beta.2",
			"resolved": "https://registry.npmjs.org/gensync/-/gensync-1.0.0-beta.2.tgz",
			"integrity": "sha512-3hN7NaskYvMDLQY55gnW3NQ+mesEAepTqlg+VEbj7zzqEMBVNhzcGYYeqFo/TlYz6eQiFcp1HcsCZO+nGgS8zg==",
			"dev": true,
			"engines": {
				"node": ">=6.9.0"
			}
		},
		"node_modules/get-caller-file": {
			"version": "2.0.5",
			"resolved": "https://registry.npmjs.org/get-caller-file/-/get-caller-file-2.0.5.tgz",
			"integrity": "sha512-DyFP3BM/3YHTQOCUL/w0OZHR0lpKeGrxotcHWcqNEdnltqFwXVfhEBQ94eIo34AfQpo0rGki4cyIiftY06h2Fg==",
			"dev": true,
			"engines": {
				"node": "6.* || 8.* || >= 10.*"
			}
		},
		"node_modules/get-intrinsic": {
			"version": "1.2.4",
			"resolved": "https://registry.npmjs.org/get-intrinsic/-/get-intrinsic-1.2.4.tgz",
			"integrity": "sha512-5uYhsJH8VJBTv7oslg4BznJYhDoRI6waYCxMmCdnTrcCrHA/fCFKoTFz2JKKE0HdDFUF7/oQuhzumXJK7paBRQ==",
			"dev": true,
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
		"node_modules/get-package-type": {
			"version": "0.1.0",
			"resolved": "https://registry.npmjs.org/get-package-type/-/get-package-type-0.1.0.tgz",
			"integrity": "sha512-pjzuKtY64GYfWizNAJ0fr9VqttZkNiK2iS430LtIHzjBEr6bX8Am2zm4sW4Ro5wjWW5cAlRL1qAMTcXbjNAO2Q==",
			"dev": true,
			"engines": {
				"node": ">=8.0.0"
			}
		},
		"node_modules/get-stream": {
			"version": "6.0.1",
			"resolved": "https://registry.npmjs.org/get-stream/-/get-stream-6.0.1.tgz",
			"integrity": "sha512-ts6Wi+2j3jQjqi70w5AlN8DFnkSwC+MqmxEzdEALB2qXZYV3X/b1CTfgPLGJNMeAWxdPfU8FO1ms3NUfaHCPYg==",
			"dev": true,
			"engines": {
				"node": ">=10"
			},
			"funding": {
				"url": "https://github.com/sponsors/sindresorhus"
			}
		},
		"node_modules/glob": {
			"version": "10.3.10",
			"resolved": "https://registry.npmjs.org/glob/-/glob-10.3.10.tgz",
			"integrity": "sha512-fa46+tv1Ak0UPK1TOy/pZrIybNNt4HCv7SDzwyfiOZkvZLEbjsZkJBPtDHVshZjbecAoAGSC20MjLDG/qr679g==",
			"dev": true,
			"dependencies": {
				"foreground-child": "^3.1.0",
				"jackspeak": "^2.3.5",
				"minimatch": "^9.0.1",
				"minipass": "^5.0.0 || ^6.0.2 || ^7.0.0",
				"path-scurry": "^1.10.1"
			},
			"bin": {
				"glob": "dist/esm/bin.mjs"
			},
			"engines": {
				"node": ">=16 || 14 >=14.17"
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
			"dev": true
		},
		"node_modules/globals": {
			"version": "11.12.0",
			"resolved": "https://registry.npmjs.org/globals/-/globals-11.12.0.tgz",
			"integrity": "sha512-WOBp/EEGUiIsJSp7wcv/y6MO+lV9UoncWqxuFfm8eBwzWNgyfBd6Gz+IeKQ9jCmyhoH99g15M3T+QaVHFjizVA==",
			"dev": true,
			"engines": {
				"node": ">=4"
			}
		},
		"node_modules/globby": {
			"version": "13.2.2",
			"resolved": "https://registry.npmjs.org/globby/-/globby-13.2.2.tgz",
			"integrity": "sha512-Y1zNGV+pzQdh7H39l9zgB4PJqjRNqydvdYCDG4HFXM4XuvSaQQlEc91IU1yALL8gUTDomgBAfz3XJdmUS+oo0w==",
			"dev": true,
			"dependencies": {
				"dir-glob": "^3.0.1",
				"fast-glob": "^3.3.0",
				"ignore": "^5.2.4",
				"merge2": "^1.4.1",
				"slash": "^4.0.0"
			},
			"engines": {
				"node": "^12.20.0 || ^14.13.1 || >=16.0.0"
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
			"dev": true
		},
		"node_modules/handle-thing": {
			"version": "2.0.1",
			"resolved": "https://registry.npmjs.org/handle-thing/-/handle-thing-2.0.1.tgz",
			"integrity": "sha512-9Qn4yBxelxoh2Ow62nP+Ka/kMnOXRi8BXnRaUwezLNhqelnN49xKz4F/dPP8OYLxLxq6JDtZb2i9XznUQbNPTg==",
			"dev": true
		},
		"node_modules/has-flag": {
			"version": "3.0.0",
			"resolved": "https://registry.npmjs.org/has-flag/-/has-flag-3.0.0.tgz",
			"integrity": "sha512-sKJf1+ceQBr4SMkvQnBDNDtf4TXpVhVGateu0t918bl30FnbE2m4vNLX+VWe/dpjlb+HugGYzW7uQXH98HPEYw==",
			"dev": true,
			"engines": {
				"node": ">=4"
			}
		},
		"node_modules/has-property-descriptors": {
			"version": "1.0.2",
			"resolved": "https://registry.npmjs.org/has-property-descriptors/-/has-property-descriptors-1.0.2.tgz",
			"integrity": "sha512-55JNKuIW+vq4Ke1BjOTjM2YctQIvCT7GFzHwmfZPGo5wnrgkid0YQtnAleFSqumZm4az3n2BS+erby5ipJdgrg==",
			"dev": true,
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
			"engines": {
				"node": ">= 0.4"
			},
			"funding": {
				"url": "https://github.com/sponsors/ljharb"
			}
		},
		"node_modules/hasown": {
			"version": "2.0.1",
			"resolved": "https://registry.npmjs.org/hasown/-/hasown-2.0.1.tgz",
			"integrity": "sha512-1/th4MHjnwncwXsIW6QMzlvYL9kG5e/CpVvLRZe4XPa8TOUNbCELqmvhDmnkNsAjwaG4+I8gJJL0JBvTTLO9qA==",
			"dev": true,
			"dependencies": {
				"function-bind": "^1.1.2"
			},
			"engines": {
				"node": ">= 0.4"
			}
		},
		"node_modules/hosted-git-info": {
			"version": "7.0.1",
			"resolved": "https://registry.npmjs.org/hosted-git-info/-/hosted-git-info-7.0.1.tgz",
			"integrity": "sha512-+K84LB1DYwMHoHSgaOY/Jfhw3ucPmSET5v98Ke/HdNSw4a0UktWzyW1mjhjpuxxTqOOsfWT/7iVshHmVZ4IpOA==",
			"dev": true,
			"dependencies": {
				"lru-cache": "^10.0.1"
			},
			"engines": {
				"node": "^16.14.0 || >=18.0.0"
			}
		},
		"node_modules/hosted-git-info/node_modules/lru-cache": {
			"version": "10.2.0",
			"resolved": "https://registry.npmjs.org/lru-cache/-/lru-cache-10.2.0.tgz",
			"integrity": "sha512-2bIM8x+VAf6JT4bKAljS1qUWgMsqZRPGJS6FSahIMPVvctcNhyVp7AJu7quxOW9jwkryBReKZY5tY5JYv2n/7Q==",
			"dev": true,
			"engines": {
				"node": "14 || >=16.14"
			}
		},
		"node_modules/hpack.js": {
			"version": "2.1.6",
			"resolved": "https://registry.npmjs.org/hpack.js/-/hpack.js-2.1.6.tgz",
			"integrity": "sha512-zJxVehUdMGIKsRaNt7apO2Gqp0BdqW5yaiGHXXmbpvxgBYVZnAql+BJb4RO5ad2MgpbZKn5G6nMnegrH1FcNYQ==",
			"dev": true,
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
			"dev": true
		},
		"node_modules/hpack.js/node_modules/string_decoder": {
			"version": "1.1.1",
			"resolved": "https://registry.npmjs.org/string_decoder/-/string_decoder-1.1.1.tgz",
			"integrity": "sha512-n/ShnvDi6FHbbVfviro+WojiFzv+s8MPMHBczVePfUpDJLwoLT0ht1l4YwBCbi8pJAveEEdnkHyPyTP/mzRfwg==",
			"dev": true,
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
			]
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
			"dev": true
		},
		"node_modules/http-deceiver": {
			"version": "1.2.7",
			"resolved": "https://registry.npmjs.org/http-deceiver/-/http-deceiver-1.2.7.tgz",
			"integrity": "sha512-LmpOGxTfbpgtGVxJrj5k7asXHCgNZp5nLfp+hWc8QQRqtb7fUy6kRY3BO1h9ddF6yIPYUARgxGOwB42DnxIaNw==",
			"dev": true
		},
		"node_modules/http-errors": {
			"version": "2.0.0",
			"resolved": "https://registry.npmjs.org/http-errors/-/http-errors-2.0.0.tgz",
			"integrity": "sha512-FtwrG/euBzaEjYeRqOgly7G0qviiXoJWnvEH2Z1plBdXgbyjv34pHTSb9zoeHMyDy33+DWy5Wt9Wo+TURtOYSQ==",
			"dev": true,
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
			"dev": true
		},
		"node_modules/http-proxy": {
			"version": "1.18.1",
			"resolved": "https://registry.npmjs.org/http-proxy/-/http-proxy-1.18.1.tgz",
			"integrity": "sha512-7mz/721AbnJwIVbnaSv1Cz3Am0ZLT/UBwkC92VlxhXv/k/BBQfM2fXElQNC27BVGr0uwUpplYPQM9LnaBMR5NQ==",
			"dev": true,
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
			"dependencies": {
				"agent-base": "^7.1.0",
				"debug": "^4.3.4"
			},
			"engines": {
				"node": ">= 14"
			}
		},
		"node_modules/http-proxy-middleware": {
			"version": "2.0.6",
			"resolved": "https://registry.npmjs.org/http-proxy-middleware/-/http-proxy-middleware-2.0.6.tgz",
			"integrity": "sha512-ya/UeJ6HVBYxrgYotAZo1KvPWlgB48kUJLDePFeneHsVujFaW5WNj2NgWCAE//B1Dl02BIfYlpNgBy8Kf8Rjmw==",
			"dev": true,
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
		"node_modules/https-proxy-agent": {
			"version": "7.0.2",
			"resolved": "https://registry.npmjs.org/https-proxy-agent/-/https-proxy-agent-7.0.2.tgz",
			"integrity": "sha512-NmLNjm6ucYwtcUmL7JQC1ZQ57LmHP4lT15FQ8D61nak1rO6DH+fz5qNK2Ap5UN4ZapYICE3/0KodcLYSPsPbaA==",
			"dev": true,
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
			"engines": {
				"node": ">=10.17.0"
			}
		},
		"node_modules/iconv-lite": {
			"version": "0.4.24",
			"resolved": "https://registry.npmjs.org/iconv-lite/-/iconv-lite-0.4.24.tgz",
			"integrity": "sha512-v3MXnZAcvnywkTUEZomIActle7RXXeedOR31wwl7VlyoXO4Qi9arvSenNQWne1TcRwhCL1HwLI21bEqdpj8/rA==",
			"dev": true,
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
			]
		},
		"node_modules/ignore": {
			"version": "5.3.1",
			"resolved": "https://registry.npmjs.org/ignore/-/ignore-5.3.1.tgz",
			"integrity": "sha512-5Fytz/IraMjqpwfd34ke28PTVMjZjJG2MPn5t7OE4eUCUNf8BAa7b5WUS9/Qvr6mwOQS7Mk6vdsMno5he+T8Xw==",
			"dev": true,
			"engines": {
				"node": ">= 4"
			}
		},
		"node_modules/ignore-walk": {
			"version": "6.0.4",
			"resolved": "https://registry.npmjs.org/ignore-walk/-/ignore-walk-6.0.4.tgz",
			"integrity": "sha512-t7sv42WkwFkyKbivUCglsQW5YWMskWtbEf4MNKX5u/CCWHKSPzN4FtBQGsQZgCLbxOzpVlcbWVK5KB3auIOjSw==",
			"dev": true,
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
			"optional": true,
			"bin": {
				"image-size": "bin/image-size.js"
			},
			"engines": {
				"node": ">=0.10.0"
			}
		},
		"node_modules/immutable": {
			"version": "4.3.5",
			"resolved": "https://registry.npmjs.org/immutable/-/immutable-4.3.5.tgz",
			"integrity": "sha512-8eabxkth9gZatlwl5TBuJnCsoTADlL6ftEr7A4qgdaTsPyreilDSnUk57SO+jfKcNtxPa22U5KK6DSeAYhpBJw==",
			"dev": true
		},
		"node_modules/import-fresh": {
			"version": "3.3.0",
			"resolved": "https://registry.npmjs.org/import-fresh/-/import-fresh-3.3.0.tgz",
			"integrity": "sha512-veYYhQa+D1QBKznvhUHxb8faxlrwUnxseDAbAp457E0wLNio2bOSKnjYDhMj+YiAq61xrMGhQk9iXVk5FzgQMw==",
			"dev": true,
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
		"node_modules/import-fresh/node_modules/resolve-from": {
			"version": "4.0.0",
			"resolved": "https://registry.npmjs.org/resolve-from/-/resolve-from-4.0.0.tgz",
			"integrity": "sha512-pb/MYmXstAkysRFx8piNI1tGFNQIFA3vkE3Gq4EuA1dF6gHp/+vgZqsCGJapvy8N3Q+4o7FwvquPJcnZ7RYy4g==",
			"dev": true,
			"engines": {
				"node": ">=4"
			}
		},
		"node_modules/imurmurhash": {
			"version": "0.1.4",
			"resolved": "https://registry.npmjs.org/imurmurhash/-/imurmurhash-0.1.4.tgz",
			"integrity": "sha512-JmXMZ6wuvDmLiHEml9ykzqO6lwFbof0GG4IkcGaENdCRDDmMVnny7s5HsIgHCbaq0w2MyPhDqkhTUgS2LU2PHA==",
			"dev": true,
			"engines": {
				"node": ">=0.8.19"
			}
		},
		"node_modules/indent-string": {
			"version": "4.0.0",
			"resolved": "https://registry.npmjs.org/indent-string/-/indent-string-4.0.0.tgz",
			"integrity": "sha512-EdDDZu4A2OyIK7Lr/2zG+w5jmbuk1DVBnEwREQvBzspBJkCEbRa8GxU1lghYcaGJCnRWibjDXlq779X1/y5xwg==",
			"dev": true,
			"engines": {
				"node": ">=8"
			}
		},
		"node_modules/inflight": {
			"version": "1.0.6",
			"resolved": "https://registry.npmjs.org/inflight/-/inflight-1.0.6.tgz",
			"integrity": "sha512-k92I/b08q4wvFscXCLvqfsHCrjrF7yiXsQuIVvVE7N82W3+aqpzuUdBbfhWcy/FZR3/4IgflMgKLOsvPDrGCJA==",
			"dev": true,
			"dependencies": {
				"once": "^1.3.0",
				"wrappy": "1"
			}
		},
		"node_modules/inherits": {
			"version": "2.0.4",
			"resolved": "https://registry.npmjs.org/inherits/-/inherits-2.0.4.tgz",
			"integrity": "sha512-k/vGaX4/Yla3WzyMCvTQOXYeIHvqOKtnqBduzTHpzpQZzAskKMhZ2K+EnBiSM9zGSoIFeMpXKxa4dYeZIQqewQ==",
			"dev": true
		},
		"node_modules/ini": {
			"version": "4.1.1",
			"resolved": "https://registry.npmjs.org/ini/-/ini-4.1.1.tgz",
			"integrity": "sha512-QQnnxNyfvmHFIsj7gkPcYymR8Jdw/o7mp5ZFihxn6h8Ci6fh3Dx4E1gPjpQEpIuPo9XVNY/ZUwh4BPMjGyL01g==",
			"dev": true,
			"engines": {
				"node": "^14.17.0 || ^16.13.0 || >=18.0.0"
			}
		},
		"node_modules/inquirer": {
			"version": "9.2.14",
			"resolved": "https://registry.npmjs.org/inquirer/-/inquirer-9.2.14.tgz",
			"integrity": "sha512-4ByIMt677Iz5AvjyKrDpzaepIyMewNvDcvwpVVRZNmy9dLakVoVgdCHZXbK1SlVJra1db0JZ6XkJyHsanpdrdQ==",
			"dev": true,
			"dependencies": {
				"@ljharb/through": "^2.3.12",
				"ansi-escapes": "^4.3.2",
				"chalk": "^5.3.0",
				"cli-cursor": "^3.1.0",
				"cli-width": "^4.1.0",
				"external-editor": "^3.1.0",
				"figures": "^3.2.0",
				"lodash": "^4.17.21",
				"mute-stream": "1.0.0",
				"ora": "^5.4.1",
				"run-async": "^3.0.0",
				"rxjs": "^7.8.1",
				"string-width": "^4.2.3",
				"strip-ansi": "^6.0.1",
				"wrap-ansi": "^6.2.0"
			},
			"engines": {
				"node": ">=18"
			}
		},
		"node_modules/inquirer/node_modules/chalk": {
			"version": "5.3.0",
			"resolved": "https://registry.npmjs.org/chalk/-/chalk-5.3.0.tgz",
			"integrity": "sha512-dLitG79d+GV1Nb/VYcCDFivJeK1hiukt9QjRNVOsUtTy1rR1YJsmpGGTZ3qJos+uw7WmWF4wUwBd9jxjocFC2w==",
			"dev": true,
			"engines": {
				"node": "^12.17.0 || ^14.13 || >=16.0.0"
			},
			"funding": {
				"url": "https://github.com/chalk/chalk?sponsor=1"
			}
		},
		"node_modules/ip-address": {
			"version": "9.0.5",
			"resolved": "https://registry.npmjs.org/ip-address/-/ip-address-9.0.5.tgz",
			"integrity": "sha512-zHtQzGojZXTwZTHQqra+ETKd4Sn3vgi7uBmlPoXVWZqYvuKmtI0l/VZTjqGmJY9x88GGOaZ9+G9ES8hC4T4X8g==",
			"dev": true,
			"dependencies": {
				"jsbn": "1.1.0",
				"sprintf-js": "^1.1.3"
			},
			"engines": {
				"node": ">= 12"
			}
		},
		"node_modules/ip-address/node_modules/sprintf-js": {
			"version": "1.1.3",
			"resolved": "https://registry.npmjs.org/sprintf-js/-/sprintf-js-1.1.3.tgz",
			"integrity": "sha512-Oo+0REFV59/rz3gfJNKQiBlwfHaSESl1pcGyABQsnnIfWOFt6JNj5gCog2U6MLZ//IGYD+nA8nI+mTShREReaA==",
			"dev": true
		},
		"node_modules/ipaddr.js": {
			"version": "2.1.0",
			"resolved": "https://registry.npmjs.org/ipaddr.js/-/ipaddr.js-2.1.0.tgz",
			"integrity": "sha512-LlbxQ7xKzfBusov6UMi4MFpEg0m+mAm9xyNGEduwXMEDuf4WfzB/RZwMVYEd7IKGvh4IUkEXYxtAVu9T3OelJQ==",
			"dev": true,
			"engines": {
				"node": ">= 10"
			}
		},
		"node_modules/is-arrayish": {
			"version": "0.2.1",
			"resolved": "https://registry.npmjs.org/is-arrayish/-/is-arrayish-0.2.1.tgz",
			"integrity": "sha512-zz06S8t0ozoDXMG+ube26zeCTNXcKIPJZJi8hBrF4idCLms4CG9QtK7qBl1boi5ODzFpjswb5JPmHCbMpjaYzg==",
			"dev": true
		},
		"node_modules/is-binary-path": {
			"version": "2.1.0",
			"resolved": "https://registry.npmjs.org/is-binary-path/-/is-binary-path-2.1.0.tgz",
			"integrity": "sha512-ZMERYes6pDydyuGidse7OsHxtbI7WVeUEozgR/g7rd0xUimYNlvZRE/K2MgZTjWy725IfelLeVcEM97mmtRGXw==",
			"dev": true,
			"dependencies": {
				"binary-extensions": "^2.0.0"
			},
			"engines": {
				"node": ">=8"
			}
		},
		"node_modules/is-core-module": {
			"version": "2.13.1",
			"resolved": "https://registry.npmjs.org/is-core-module/-/is-core-module-2.13.1.tgz",
			"integrity": "sha512-hHrIjvZsftOsvKSn2TRYl63zvxsgE0K+0mYMoH6gD4omR5IWB2KynivBQczo3+wF1cCkjzvptnI9Q0sPU66ilw==",
			"dev": true,
			"dependencies": {
				"hasown": "^2.0.0"
			},
			"funding": {
				"url": "https://github.com/sponsors/ljharb"
			}
		},
		"node_modules/is-docker": {
			"version": "2.2.1",
			"resolved": "https://registry.npmjs.org/is-docker/-/is-docker-2.2.1.tgz",
			"integrity": "sha512-F+i2BKsFrH66iaUFc0woD8sLy8getkwTwtOBjvs56Cx4CgJDeKQeqfz8wAYiSb8JOprWhHH5p77PbmYCvvUuXQ==",
			"dev": true,
			"bin": {
				"is-docker": "cli.js"
			},
			"engines": {
				"node": ">=8"
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
			"engines": {
				"node": ">=0.10.0"
			}
		},
		"node_modules/is-fullwidth-code-point": {
			"version": "3.0.0",
			"resolved": "https://registry.npmjs.org/is-fullwidth-code-point/-/is-fullwidth-code-point-3.0.0.tgz",
			"integrity": "sha512-zymm5+u+sCsSWyD9qNaejV3DFvhCKclKdizYaJUuHA83RLjb7nSuGnddCHGv0hk+KY7BMAlsWeK4Ueg6EV6XQg==",
			"dev": true,
			"engines": {
				"node": ">=8"
			}
		},
		"node_modules/is-glob": {
			"version": "4.0.3",
			"resolved": "https://registry.npmjs.org/is-glob/-/is-glob-4.0.3.tgz",
			"integrity": "sha512-xelSayHH36ZgE7ZWhli7pW34hNbNl8Ojv5KVmkJD4hBdD3th8Tfk9vYasLM+mXWOZhFkgZfxhLSnrwRr4elSSg==",
			"dev": true,
			"dependencies": {
				"is-extglob": "^2.1.1"
			},
			"engines": {
				"node": ">=0.10.0"
			}
		},
		"node_modules/is-interactive": {
			"version": "1.0.0",
			"resolved": "https://registry.npmjs.org/is-interactive/-/is-interactive-1.0.0.tgz",
			"integrity": "sha512-2HvIEKRoqS62guEC+qBjpvRubdX910WCMuJTZ+I9yvqKU2/12eSL549HMwtabb4oupdj2sMP50k+XJfB/8JE6w==",
			"dev": true,
			"engines": {
				"node": ">=8"
			}
		},
		"node_modules/is-lambda": {
			"version": "1.0.1",
			"resolved": "https://registry.npmjs.org/is-lambda/-/is-lambda-1.0.1.tgz",
			"integrity": "sha512-z7CMFGNrENq5iFB9Bqo64Xk6Y9sg+epq1myIcdHaGnbMTYOxvzsEtdYqQUylB7LxfkvgrrjP32T6Ywciio9UIQ==",
			"dev": true
		},
		"node_modules/is-number": {
			"version": "7.0.0",
			"resolved": "https://registry.npmjs.org/is-number/-/is-number-7.0.0.tgz",
			"integrity": "sha512-41Cifkg6e8TylSpdtTpeLVMqvSBEVzTttHvERD741+pnZ8ANv0004MRL43QKPDlK9cGvNp6NZWZUBlbGXYxxng==",
			"dev": true,
			"engines": {
				"node": ">=0.12.0"
			}
		},
		"node_modules/is-plain-obj": {
			"version": "3.0.0",
			"resolved": "https://registry.npmjs.org/is-plain-obj/-/is-plain-obj-3.0.0.tgz",
			"integrity": "sha512-gwsOE28k+23GP1B6vFl1oVh/WOzmawBrKwo5Ev6wMKzPkaXaCDIQKzLnvsA42DRlbVTWorkgTKIviAKCWkfUwA==",
			"dev": true,
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
			"dev": true
		},
		"node_modules/is-wsl": {
			"version": "2.2.0",
			"resolved": "https://registry.npmjs.org/is-wsl/-/is-wsl-2.2.0.tgz",
			"integrity": "sha512-fKzAra0rGJUUBwGBgNkHZuToZcn+TtXHpeCgmkMJMMYx1sQDYaCSyjJBSCa2nH1DGm7s3n1oBnohoVTBaN7Lww==",
			"dev": true,
			"dependencies": {
				"is-docker": "^2.0.0"
			},
			"engines": {
				"node": ">=8"
			}
		},
		"node_modules/isarray": {
			"version": "1.0.0",
			"resolved": "https://registry.npmjs.org/isarray/-/isarray-1.0.0.tgz",
			"integrity": "sha512-VLghIWNM6ELQzo7zwmcg0NmTVyWKYjvIeM83yjp0wRDTmUnrM678fQbcKBo6n2CJEF0szoG//ytg+TKla89ALQ==",
			"dev": true
		},
		"node_modules/isexe": {
			"version": "3.1.1",
			"resolved": "https://registry.npmjs.org/isexe/-/isexe-3.1.1.tgz",
			"integrity": "sha512-LpB/54B+/2J5hqQ7imZHfdU31OlgQqx7ZicVlkm9kzg9/w8GKLEcFfJl/t7DCEDueOyBAD6zCCwTO6Fzs0NoEQ==",
			"dev": true,
			"engines": {
				"node": ">=16"
			}
		},
		"node_modules/isobject": {
			"version": "3.0.1",
			"resolved": "https://registry.npmjs.org/isobject/-/isobject-3.0.1.tgz",
			"integrity": "sha512-WhB9zCku7EGTj/HQQRz5aUQEUeoQZH2bWcltRErOpymJ4boYE6wL9Tbr23krRPSZ+C5zqNSrSw+Cc7sZZ4b7vg==",
			"dev": true,
			"engines": {
				"node": ">=0.10.0"
			}
		},
		"node_modules/istanbul-lib-coverage": {
			"version": "3.2.2",
			"resolved": "https://registry.npmjs.org/istanbul-lib-coverage/-/istanbul-lib-coverage-3.2.2.tgz",
			"integrity": "sha512-O8dpsF+r0WV/8MNRKfnmrtCWhuKjxrq2w+jpzBL5UZKTi2LeVWnWOmWRxFlesJONmc+wLAGvKQZEOanko0LFTg==",
			"dev": true,
			"engines": {
				"node": ">=8"
			}
		},
		"node_modules/istanbul-lib-instrument": {
			"version": "5.2.1",
			"resolved": "https://registry.npmjs.org/istanbul-lib-instrument/-/istanbul-lib-instrument-5.2.1.tgz",
			"integrity": "sha512-pzqtp31nLv/XFOzXGuvhCb8qhjmTVo5vjVk19XE4CRlSWz0KoeJ3bw9XsA7nOp9YBf4qHjwBxkDzKcME/J29Yg==",
			"dev": true,
			"dependencies": {
				"@babel/core": "^7.12.3",
				"@babel/parser": "^7.14.7",
				"@istanbuljs/schema": "^0.1.2",
				"istanbul-lib-coverage": "^3.2.0",
				"semver": "^6.3.0"
			},
			"engines": {
				"node": ">=8"
			}
		},
		"node_modules/istanbul-lib-instrument/node_modules/semver": {
			"version": "6.3.1",
			"resolved": "https://registry.npmjs.org/semver/-/semver-6.3.1.tgz",
			"integrity": "sha512-BR7VvDCVHO+q2xBEWskxS6DJE1qRnb7DxzUrogb71CWoSficBxYsiAGd+Kl0mmq/MprG9yArRkyrQxTO6XjMzA==",
			"dev": true,
			"bin": {
				"semver": "bin/semver.js"
			}
		},
		"node_modules/jackspeak": {
			"version": "2.3.6",
			"resolved": "https://registry.npmjs.org/jackspeak/-/jackspeak-2.3.6.tgz",
			"integrity": "sha512-N3yCS/NegsOBokc8GAdM8UcmfsKiSS8cipheD/nivzr700H+nsMOxJjQnvwOcRYVuFkdH0wGUvW2WbXGmrZGbQ==",
			"dev": true,
			"dependencies": {
				"@isaacs/cliui": "^8.0.2"
			},
			"engines": {
				"node": ">=14"
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
			"engines": {
				"node": ">=8"
			}
		},
		"node_modules/jest-worker/node_modules/supports-color": {
			"version": "8.1.1",
			"resolved": "https://registry.npmjs.org/supports-color/-/supports-color-8.1.1.tgz",
			"integrity": "sha512-MpUEN2OodtUzxvKQl72cUF7RQ5EiHsGvSsVG0ia9c5RbWGL2CI4C7EpPS8UTBIplnlzZiNuV56w+FuNxy3ty2Q==",
			"dev": true,
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
			"version": "1.21.0",
			"resolved": "https://registry.npmjs.org/jiti/-/jiti-1.21.0.tgz",
			"integrity": "sha512-gFqAIbuKyyso/3G2qhiO2OM6shY6EPP/R0+mkDbyspxKazh8BXDC5FiFsUjlczgdNz/vfra0da2y+aHrusLG/Q==",
			"dev": true,
			"bin": {
				"jiti": "bin/jiti.js"
			}
		},
		"node_modules/js-tokens": {
			"version": "4.0.0",
			"resolved": "https://registry.npmjs.org/js-tokens/-/js-tokens-4.0.0.tgz",
			"integrity": "sha512-RdJUflcE3cUzKiMqQgsCu06FPu9UdIJO0beYbPhHN4k6apgJtifcoCtT9bcxOpYBtpD2kCM6Sbzg4CausW/PKQ==",
			"dev": true
		},
		"node_modules/js-yaml": {
			"version": "3.14.1",
			"resolved": "https://registry.npmjs.org/js-yaml/-/js-yaml-3.14.1.tgz",
			"integrity": "sha512-okMH7OXXJ7YrN9Ok3/SXrnu4iX9yOk+25nqX4imS2npuvTYDmo/QEZoqwZkYaIDk3jVvBOTOIEgEhaLOynBS9g==",
			"dev": true,
			"dependencies": {
				"argparse": "^1.0.7",
				"esprima": "^4.0.0"
			},
			"bin": {
				"js-yaml": "bin/js-yaml.js"
			}
		},
		"node_modules/jsbn": {
			"version": "1.1.0",
			"resolved": "https://registry.npmjs.org/jsbn/-/jsbn-1.1.0.tgz",
			"integrity": "sha512-4bYVV3aAMtDTTu4+xsDYa6sy9GyJ69/amsu9sYF2zqjiEoZA5xJi3BrfX3uY+/IekIu7MwdObdbDWpoZdBv3/A==",
			"dev": true
		},
		"node_modules/jsesc": {
			"version": "2.5.2",
			"resolved": "https://registry.npmjs.org/jsesc/-/jsesc-2.5.2.tgz",
			"integrity": "sha512-OYu7XEzjkCQ3C5Ps3QIZsQfNpqoJyZZA99wd9aWd05NCtC5pWOkShK2mkL6HXQR6/Cy2lbNdPlZBpuQHXE63gA==",
			"dev": true,
			"bin": {
				"jsesc": "bin/jsesc"
			},
			"engines": {
				"node": ">=4"
			}
		},
		"node_modules/json-parse-even-better-errors": {
			"version": "3.0.1",
			"resolved": "https://registry.npmjs.org/json-parse-even-better-errors/-/json-parse-even-better-errors-3.0.1.tgz",
			"integrity": "sha512-aatBvbL26wVUCLmbWdCpeu9iF5wOyWpagiKkInA+kfws3sWdBrTnsvN2CKcyCYyUrc7rebNBlK6+kteg7ksecg==",
			"dev": true,
			"engines": {
				"node": "^14.17.0 || ^16.13.0 || >=18.0.0"
			}
		},
		"node_modules/json-schema-traverse": {
			"version": "1.0.0",
			"resolved": "https://registry.npmjs.org/json-schema-traverse/-/json-schema-traverse-1.0.0.tgz",
			"integrity": "sha512-NM8/P9n3XjXhIZn1lLhkFaACTOURQXjWhV4BA/RnOv8xvgqtqpAX9IO4mRQxSx1Rlo4tqzeqb0sOlruaOy3dug==",
			"dev": true
		},
		"node_modules/json5": {
			"version": "2.2.3",
			"resolved": "https://registry.npmjs.org/json5/-/json5-2.2.3.tgz",
			"integrity": "sha512-XmOWe7eyHYH14cLdVPoyg+GOH3rYX++KpzrylJwSW98t3Nk+U8XOl8FWKOgwtzdb8lXGf6zYwDUzeHMWfxasyg==",
			"dev": true,
			"bin": {
				"json5": "lib/cli.js"
			},
			"engines": {
				"node": ">=6"
			}
		},
		"node_modules/jsonc-parser": {
			"version": "3.2.1",
			"resolved": "https://registry.npmjs.org/jsonc-parser/-/jsonc-parser-3.2.1.tgz",
			"integrity": "sha512-AilxAyFOAcK5wA1+LeaySVBrHsGQvUFCDWXKpZjzaL0PqW+xfBOttn8GNtWKFWqneyMZj41MWF9Kl6iPWLwgOA==",
			"dev": true
		},
		"node_modules/jsonparse": {
			"version": "1.3.1",
			"resolved": "https://registry.npmjs.org/jsonparse/-/jsonparse-1.3.1.tgz",
			"integrity": "sha512-POQXvpdL69+CluYsillJ7SUhKvytYjW9vG/GKpnf+xP8UWgYEM/RaMzHHofbALDiKbbP1W8UEYmgGl39WkPZsg==",
			"dev": true,
			"engines": [
				"node >= 0.2.0"
			]
		},
		"node_modules/karma-source-map-support": {
			"version": "1.4.0",
			"resolved": "https://registry.npmjs.org/karma-source-map-support/-/karma-source-map-support-1.4.0.tgz",
			"integrity": "sha512-RsBECncGO17KAoJCYXjv+ckIz+Ii9NCi+9enk+rq6XC81ezYkb4/RHE6CTXdA7IOJqoF3wcaLfVG0CPmE5ca6A==",
			"dev": true,
			"dependencies": {
				"source-map-support": "^0.5.5"
			}
		},
		"node_modules/kind-of": {
			"version": "6.0.3",
			"resolved": "https://registry.npmjs.org/kind-of/-/kind-of-6.0.3.tgz",
			"integrity": "sha512-dcS1ul+9tmeD95T+x28/ehLgd9mENa3LsvDTtzm3vyBEO7RPptvAD+t44WVXaUjTBRcrpFeFlC8WCruUR456hw==",
			"dev": true,
			"engines": {
				"node": ">=0.10.0"
			}
		},
		"node_modules/klona": {
			"version": "2.0.6",
			"resolved": "https://registry.npmjs.org/klona/-/klona-2.0.6.tgz",
			"integrity": "sha512-dhG34DXATL5hSxJbIexCft8FChFXtmskoZYnoPWjXQuebWYCNkVeV3KkGegCK9CP1oswI/vQibS2GY7Em/sJJA==",
			"dev": true,
			"engines": {
				"node": ">= 8"
			}
		},
		"node_modules/launch-editor": {
			"version": "2.6.1",
			"resolved": "https://registry.npmjs.org/launch-editor/-/launch-editor-2.6.1.tgz",
			"integrity": "sha512-eB/uXmFVpY4zezmGp5XtU21kwo7GBbKB+EQ+UZeWtGb9yAM5xt/Evk+lYH3eRNAtId+ej4u7TYPFZ07w4s7rRw==",
			"dev": true,
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
			"version": "11.1.0",
			"resolved": "https://registry.npmjs.org/less-loader/-/less-loader-11.1.0.tgz",
			"integrity": "sha512-C+uDBV7kS7W5fJlUjq5mPBeBVhYpTIm5gB09APT9o3n/ILeaXVsiSFTbZpTJCJwQ/Crczfn3DmfQFwxYusWFug==",
			"dev": true,
			"dependencies": {
				"klona": "^2.0.4"
			},
			"engines": {
				"node": ">= 14.15.0"
			},
			"funding": {
				"type": "opencollective",
				"url": "https://opencollective.com/webpack"
			},
			"peerDependencies": {
				"less": "^3.5.0 || ^4.0.0",
				"webpack": "^5.0.0"
			}
		},
		"node_modules/less/node_modules/source-map": {
			"version": "0.6.1",
			"resolved": "https://registry.npmjs.org/source-map/-/source-map-0.6.1.tgz",
			"integrity": "sha512-UjgapumWlbMhkBgzT7Ykc5YXUT46F0iKu8SGXq0bcwP5dz/h0Plj6enJqjz1Zbq2l5WaqYnrVbwWOWMyF3F47g==",
			"dev": true,
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
		"node_modules/lines-and-columns": {
			"version": "1.2.4",
			"resolved": "https://registry.npmjs.org/lines-and-columns/-/lines-and-columns-1.2.4.tgz",
			"integrity": "sha512-7ylylesZQ/PV29jhEDl3Ufjo6ZX7gCqJr5F7PKrqc93v7fzSymt1BpwEU8nAUXs8qzzvqhbjhK5QZg6Mt/HkBg==",
			"dev": true
		},
		"node_modules/loader-runner": {
			"version": "4.3.0",
			"resolved": "https://registry.npmjs.org/loader-runner/-/loader-runner-4.3.0.tgz",
			"integrity": "sha512-3R/1M+yS3j5ou80Me59j7F9IMs4PXs3VqRrm0TU3AbKPxlmpoY1TNscJV/oGJXo8qCatFGTfDbY6W6ipGOYXfg==",
			"dev": true,
			"engines": {
				"node": ">=6.11.5"
			}
		},
		"node_modules/loader-utils": {
			"version": "3.2.1",
			"resolved": "https://registry.npmjs.org/loader-utils/-/loader-utils-3.2.1.tgz",
			"integrity": "sha512-ZvFw1KWS3GVyYBYb7qkmRM/WwL2TQQBxgCK62rlvm4WpVQ23Nb4tYjApUlfjrEGvOs7KHEsmyUn75OHZrJMWPw==",
			"dev": true,
			"engines": {
				"node": ">= 12.13.0"
			}
		},
		"node_modules/locate-path": {
			"version": "5.0.0",
			"resolved": "https://registry.npmjs.org/locate-path/-/locate-path-5.0.0.tgz",
			"integrity": "sha512-t7hw9pI+WvuwNJXwk5zVHpyhIqzg2qTlklJOf0mVxGSbe3Fp2VieZcduNYjaLDoy6p9uGpQEGWG87WpMKlNq8g==",
			"dev": true,
			"dependencies": {
				"p-locate": "^4.1.0"
			},
			"engines": {
				"node": ">=8"
			}
		},
		"node_modules/lodash": {
			"version": "4.17.21",
			"resolved": "https://registry.npmjs.org/lodash/-/lodash-4.17.21.tgz",
			"integrity": "sha512-v2kDEe57lecTulaDIuNTPy3Ry4gLGJ6Z1O3vE1krgXZNrsQ+LFTGHVxVjcXPs17LhbZVGedAJv8XZ1tvj5FvSg==",
			"dev": true
		},
		"node_modules/lodash.debounce": {
			"version": "4.0.8",
			"resolved": "https://registry.npmjs.org/lodash.debounce/-/lodash.debounce-4.0.8.tgz",
			"integrity": "sha512-FT1yDzDYEoYWhnSGnpE/4Kj1fLZkDFyqRb7fNt6FdYOSxlUWAtp42Eh6Wb0rGIv/m9Bgo7x4GhQbm5Ys4SG5ow==",
			"dev": true
		},
		"node_modules/log-symbols": {
			"version": "4.1.0",
			"resolved": "https://registry.npmjs.org/log-symbols/-/log-symbols-4.1.0.tgz",
			"integrity": "sha512-8XPvpAA8uyhfteu8pIvQxpJZ7SYYdpUivZpGy6sFsBuKRY/7rQGavedeB8aK+Zkyq6upMFVL/9AW6vOYzfRyLg==",
			"dev": true,
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
			"dev": true
		},
		"node_modules/log-symbols/node_modules/has-flag": {
			"version": "4.0.0",
			"resolved": "https://registry.npmjs.org/has-flag/-/has-flag-4.0.0.tgz",
			"integrity": "sha512-EykJT/Q1KjTWctppgIAgfSO0tKVuZUjhgMr17kqTumMl6Afv3EISleU7qZUzoXDFTAHTDC4NOoG/ZxU3EvlMPQ==",
			"dev": true,
			"engines": {
				"node": ">=8"
			}
		},
		"node_modules/log-symbols/node_modules/supports-color": {
			"version": "7.2.0",
			"resolved": "https://registry.npmjs.org/supports-color/-/supports-color-7.2.0.tgz",
			"integrity": "sha512-qpCAvRl9stuOHveKsn7HncJRvv501qIacKzQlO/+Lwxc9+0q2wLyv4Dfvt80/DPn2pqOBsJdDiogXGR9+OvwRw==",
			"dev": true,
			"dependencies": {
				"has-flag": "^4.0.0"
			},
			"engines": {
				"node": ">=8"
			}
		},
		"node_modules/lru-cache": {
			"version": "5.1.1",
			"resolved": "https://registry.npmjs.org/lru-cache/-/lru-cache-5.1.1.tgz",
			"integrity": "sha512-KpNARQA3Iwv+jTA0utUVVbrh+Jlrr1Fv0e56GGzAFOXN7dk/FviaDW8LHmK52DlcH4WP2n6gI8vN1aesBFgo9w==",
			"dev": true,
			"dependencies": {
				"yallist": "^3.0.2"
			}
		},
		"node_modules/magic-string": {
			"version": "0.30.7",
			"resolved": "https://registry.npmjs.org/magic-string/-/magic-string-0.30.7.tgz",
			"integrity": "sha512-8vBuFF/I/+OSLRmdf2wwFCJCz+nSn0m6DPvGH1fS/KiQoSaR+sETbov0eIk9KhEKy8CYqIkIAnbohxT/4H0kuA==",
			"dev": true,
			"dependencies": {
				"@jridgewell/sourcemap-codec": "^1.4.15"
			},
			"engines": {
				"node": ">=12"
			}
		},
		"node_modules/make-dir": {
			"version": "2.1.0",
			"resolved": "https://registry.npmjs.org/make-dir/-/make-dir-2.1.0.tgz",
			"integrity": "sha512-LS9X+dc8KLxXCb8dni79fLIIUA5VyZoyjSMCwTluaXA0o27cCK0bhXkpgw+sTXVpPy/lSO57ilRixqk0vDmtRA==",
			"dev": true,
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
			"optional": true,
			"bin": {
				"semver": "bin/semver"
			}
		},
		"node_modules/make-fetch-happen": {
			"version": "13.0.0",
			"resolved": "https://registry.npmjs.org/make-fetch-happen/-/make-fetch-happen-13.0.0.tgz",
			"integrity": "sha512-7ThobcL8brtGo9CavByQrQi+23aIfgYU++wg4B87AIS8Rb2ZBt/MEaDqzA00Xwv/jUjAjYkLHjVolYuTLKda2A==",
			"dev": true,
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
			"engines": {
				"node": ">= 0.6"
			}
		},
		"node_modules/memfs": {
			"version": "3.5.3",
			"resolved": "https://registry.npmjs.org/memfs/-/memfs-3.5.3.tgz",
			"integrity": "sha512-UERzLsxzllchadvbPs5aolHh65ISpKpM+ccLbOJ8/vvpBKmAWf+la7dXFy7Mr0ySHbdHrFv5kGFCUHHe6GFEmw==",
			"dev": true,
			"dependencies": {
				"fs-monkey": "^1.0.4"
			},
			"engines": {
				"node": ">= 4.0.0"
			}
		},
		"node_modules/merge-descriptors": {
			"version": "1.0.1",
			"resolved": "https://registry.npmjs.org/merge-descriptors/-/merge-descriptors-1.0.1.tgz",
			"integrity": "sha512-cCi6g3/Zr1iqQi6ySbseM1Xvooa98N0w31jzUYrXPX2xqObmFGHJ0tQ5u74H3mVh7wLouTseZyYIq39g8cNp1w==",
			"dev": true
		},
		"node_modules/merge-stream": {
			"version": "2.0.0",
			"resolved": "https://registry.npmjs.org/merge-stream/-/merge-stream-2.0.0.tgz",
			"integrity": "sha512-abv/qOcuPfk3URPfDzmZU1LKmuw8kT+0nIHvKrKgFrwifol/doWcdA4ZqsWQ8ENrFKkd67Mfpo/LovbIUsbt3w==",
			"dev": true
		},
		"node_modules/merge2": {
			"version": "1.4.1",
			"resolved": "https://registry.npmjs.org/merge2/-/merge2-1.4.1.tgz",
			"integrity": "sha512-8q7VEgMJW4J8tcfVPy8g09NcQwZdbwFEqhe/WZkoIzjn/3TGDwtOCYtXGxA3O8tPzpczCCDgv+P2P5y00ZJOOg==",
			"dev": true,
			"engines": {
				"node": ">= 8"
			}
		},
		"node_modules/methods": {
			"version": "1.1.2",
			"resolved": "https://registry.npmjs.org/methods/-/methods-1.1.2.tgz",
			"integrity": "sha512-iclAHeNqNm68zFtnZ0e+1L2yUIdvzNoauKU4WBA3VvH/vPFieF7qfRlwUZU+DA9P9bPXIS90ulxoUoCH23sV2w==",
			"dev": true,
			"engines": {
				"node": ">= 0.6"
			}
		},
		"node_modules/micromatch": {
			"version": "4.0.5",
			"resolved": "https://registry.npmjs.org/micromatch/-/micromatch-4.0.5.tgz",
			"integrity": "sha512-DMy+ERcEW2q8Z2Po+WNXuw3c5YaUSFjAO5GsJqfEl7UjvtIuFKO6ZrKvcItdy98dwFI2N1tg3zNIdKaQT+aNdA==",
			"dev": true,
			"dependencies": {
				"braces": "^3.0.2",
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
			"engines": {
				"node": ">= 0.6"
			}
		},
		"node_modules/mime-types": {
			"version": "2.1.35",
			"resolved": "https://registry.npmjs.org/mime-types/-/mime-types-2.1.35.tgz",
			"integrity": "sha512-ZDY+bPm5zTTF+YpCrAU9nK0UgICYPT0QtT1NZWFv4s++TNkcgVaT0g6+4R2uI4MjQjzysHB1zxuWL50hzaeXiw==",
			"dev": true,
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
			"engines": {
				"node": ">=6"
			}
		},
		"node_modules/mini-css-extract-plugin": {
			"version": "2.8.0",
			"resolved": "https://registry.npmjs.org/mini-css-extract-plugin/-/mini-css-extract-plugin-2.8.0.tgz",
			"integrity": "sha512-CxmUYPFcTgET1zImteG/LZOy/4T5rTojesQXkSNBiquhydn78tfbCE9sjIjnJ/UcjNjOC1bphTCCW5rrS7cXAg==",
			"dev": true,
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
			"dev": true
		},
		"node_modules/minimatch": {
			"version": "9.0.3",
			"resolved": "https://registry.npmjs.org/minimatch/-/minimatch-9.0.3.tgz",
			"integrity": "sha512-RHiac9mvaRw0x3AYRgDC1CxAP7HTcNrrECeA8YYJeWnpo+2Q5CegtZjaotWTWxDG3UeGA1coE05iH1mPjT/2mg==",
			"dev": true,
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
			"version": "7.0.4",
			"resolved": "https://registry.npmjs.org/minipass/-/minipass-7.0.4.tgz",
			"integrity": "sha512-jYofLM5Dam9279rdkWzqHozUo4ybjdZmCsDHePy5V/PbBcVMiSZR97gmAy45aqi8CK1lG2ECd356FU86avfwUQ==",
			"dev": true,
			"engines": {
				"node": ">=16 || 14 >=14.17"
			}
		},
		"node_modules/minipass-collect": {
			"version": "2.0.1",
			"resolved": "https://registry.npmjs.org/minipass-collect/-/minipass-collect-2.0.1.tgz",
			"integrity": "sha512-D7V8PO9oaz7PWGLbCACuI1qEOsq7UKfLotx/C0Aet43fCUB/wfQ7DYeq2oR/svFJGYDHPr38SHATeaj/ZoKHKw==",
			"dev": true,
			"dependencies": {
				"minipass": "^7.0.3"
			},
			"engines": {
				"node": ">=16 || 14 >=14.17"
			}
		},
		"node_modules/minipass-fetch": {
			"version": "3.0.4",
			"resolved": "https://registry.npmjs.org/minipass-fetch/-/minipass-fetch-3.0.4.tgz",
			"integrity": "sha512-jHAqnA728uUpIaFm7NWsCnqKT6UqZz7GcI/bDpPATuwYyKwJwW0remxSCxUlKiEty+eopHGa3oc8WxgQ1FFJqg==",
			"dev": true,
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
			"dev": true
		},
		"node_modules/minipass-json-stream": {
			"version": "1.0.1",
			"resolved": "https://registry.npmjs.org/minipass-json-stream/-/minipass-json-stream-1.0.1.tgz",
			"integrity": "sha512-ODqY18UZt/I8k+b7rl2AENgbWE8IDYam+undIJONvigAz8KR5GWblsFTEfQs0WODsjbSXWlm+JHEv8Gr6Tfdbg==",
			"dev": true,
			"dependencies": {
				"jsonparse": "^1.3.1",
				"minipass": "^3.0.0"
			}
		},
		"node_modules/minipass-json-stream/node_modules/minipass": {
			"version": "3.3.6",
			"resolved": "https://registry.npmjs.org/minipass/-/minipass-3.3.6.tgz",
			"integrity": "sha512-DxiNidxSEK+tHG6zOIklvNOwm3hvCrbUrdtzY74U6HKTJxvIDfOUL5W5P2Ghd3DTkhhKPYGqeNUIh5qcM4YBfw==",
			"dev": true,
			"dependencies": {
				"yallist": "^4.0.0"
			},
			"engines": {
				"node": ">=8"
			}
		},
		"node_modules/minipass-json-stream/node_modules/yallist": {
			"version": "4.0.0",
			"resolved": "https://registry.npmjs.org/yallist/-/yallist-4.0.0.tgz",
			"integrity": "sha512-3wdGidZyq5PB084XLES5TpOSRA3wjXAlIWMhum2kRcv/41Sn2emQ0dycQW4uZXLejwKvg6EsvbdlVL+FYEct7A==",
			"dev": true
		},
		"node_modules/minipass-pipeline": {
			"version": "1.2.4",
			"resolved": "https://registry.npmjs.org/minipass-pipeline/-/minipass-pipeline-1.2.4.tgz",
			"integrity": "sha512-xuIq7cIOt09RPRJ19gdi4b+RiNvDFYe5JH+ggNvBqGqpQXcru3PcRmOZuHBKWK1Txf9+cQ+HMVN4d6z46LZP7A==",
			"dev": true,
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
			"dev": true
		},
		"node_modules/minipass-sized": {
			"version": "1.0.3",
			"resolved": "https://registry.npmjs.org/minipass-sized/-/minipass-sized-1.0.3.tgz",
			"integrity": "sha512-MbkQQ2CTiBMlA2Dm/5cY+9SWFEN8pzzOXi6rlM5Xxq0Yqbda5ZQy9sU75a673FE9ZK0Zsbr6Y5iP6u9nktfg2g==",
			"dev": true,
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
			"dev": true
		},
		"node_modules/minizlib": {
			"version": "2.1.2",
			"resolved": "https://registry.npmjs.org/minizlib/-/minizlib-2.1.2.tgz",
			"integrity": "sha512-bAxsR8BVfj60DWXHE3u30oHzfl4G7khkSuPW+qvpd7jFRHm7dLxOjUk1EHACJ/hxLY8phGJ0YhYHZo7jil7Qdg==",
			"dev": true,
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
			"dev": true
		},
		"node_modules/mkdirp": {
			"version": "1.0.4",
			"resolved": "https://registry.npmjs.org/mkdirp/-/mkdirp-1.0.4.tgz",
			"integrity": "sha512-vVqVZQyf3WLx2Shd0qJ9xuvqgAyKPLAiqITEtqW0oIUjzo3PePDd6fW9iFz30ef7Ysp/oiWqbhszeGWW2T6Gzw==",
			"dev": true,
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
			"engines": {
				"node": ">=10"
			}
		},
		"node_modules/ms": {
			"version": "2.1.2",
			"resolved": "https://registry.npmjs.org/ms/-/ms-2.1.2.tgz",
			"integrity": "sha512-sGkPx+VjMtmA6MX27oA4FBFELFCZZ4S4XqeGOXCv68tT+jb3vk/RyaKWP0PTKyWtmLSM0b+adUTEvbs1PEaH2w==",
			"dev": true
		},
		"node_modules/multicast-dns": {
			"version": "7.2.5",
			"resolved": "https://registry.npmjs.org/multicast-dns/-/multicast-dns-7.2.5.tgz",
			"integrity": "sha512-2eznPJP8z2BFLX50tf0LuODrpINqP1RVIm/CObbTcBRITQgmC/TjcREF1NeTBzIcR5XO/ukWo+YHOjBbFwIupg==",
			"dev": true,
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
			"engines": {
				"node": "^14.17.0 || ^16.13.0 || >=18.0.0"
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
			"engines": {
				"node": ">= 0.6"
			}
		},
		"node_modules/neo-async": {
			"version": "2.6.2",
			"resolved": "https://registry.npmjs.org/neo-async/-/neo-async-2.6.2.tgz",
			"integrity": "sha512-Yd3UES5mWCSqR+qNT93S3UoYUkqAZ9lLg8a7g9rimsWmYGK8cVToA4/sF3RrshdyV3sAGMXVUmpMYOw+dLpOuw==",
			"dev": true
		},
		"node_modules/nice-napi": {
			"version": "1.0.2",
			"resolved": "https://registry.npmjs.org/nice-napi/-/nice-napi-1.0.2.tgz",
			"integrity": "sha512-px/KnJAJZf5RuBGcfD+Sp2pAKq0ytz8j+1NehvgIGFkvtvFrDM3T8E4x/JJODXK9WZow8RRGrbA9QQ3hs+pDhA==",
			"dev": true,
			"hasInstallScript": true,
			"optional": true,
			"os": [
				"!win32"
			],
			"dependencies": {
				"node-addon-api": "^3.0.0",
				"node-gyp-build": "^4.2.2"
			}
		},
		"node_modules/node-addon-api": {
			"version": "3.2.1",
			"resolved": "https://registry.npmjs.org/node-addon-api/-/node-addon-api-3.2.1.tgz",
			"integrity": "sha512-mmcei9JghVNDYydghQmeDX8KoAm0FAiYyIcUt/N4nhyAipB17pllZQDOJD2fotxABnt4Mdz+dKTO7eftLg4d0A==",
			"dev": true,
			"optional": true
		},
		"node_modules/node-forge": {
			"version": "1.3.1",
			"resolved": "https://registry.npmjs.org/node-forge/-/node-forge-1.3.1.tgz",
			"integrity": "sha512-dPEtOeMvF9VMcYV/1Wb8CPoVAXtp6MKMlcbAt4ddqmGqUJ6fQZFXkNZNkNlfevtNkGtaSoXf/vNNNSvgrdXwtA==",
			"dev": true,
			"engines": {
				"node": ">= 6.13.0"
			}
		},
		"node_modules/node-gyp": {
			"version": "10.0.1",
			"resolved": "https://registry.npmjs.org/node-gyp/-/node-gyp-10.0.1.tgz",
			"integrity": "sha512-gg3/bHehQfZivQVfqIyy8wTdSymF9yTyP4CJifK73imyNMU8AIGQE2pUa7dNWfmMeG9cDVF2eehiRMv0LC1iAg==",
			"dev": true,
			"dependencies": {
				"env-paths": "^2.2.0",
				"exponential-backoff": "^3.1.1",
				"glob": "^10.3.10",
				"graceful-fs": "^4.2.6",
				"make-fetch-happen": "^13.0.0",
				"nopt": "^7.0.0",
				"proc-log": "^3.0.0",
				"semver": "^7.3.5",
				"tar": "^6.1.2",
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
			"version": "4.8.0",
			"resolved": "https://registry.npmjs.org/node-gyp-build/-/node-gyp-build-4.8.0.tgz",
			"integrity": "sha512-u6fs2AEUljNho3EYTJNBfImO5QTo/J/1Etd+NVdCj7qWKUSN/bSLkZwhDv7I+w/MSC6qJ4cknepkAYykDdK8og==",
			"dev": true,
			"optional": true,
			"bin": {
				"node-gyp-build": "bin.js",
				"node-gyp-build-optional": "optional.js",
				"node-gyp-build-test": "build-test.js"
			}
		},
		"node_modules/node-releases": {
			"version": "2.0.14",
			"resolved": "https://registry.npmjs.org/node-releases/-/node-releases-2.0.14.tgz",
			"integrity": "sha512-y10wOWt8yZpqXmOgRo77WaHEmhYQYGNA6y421PKsKYWEK8aW+cqAphborZDhqfyKrbZEN92CN1X2KbafY2s7Yw==",
			"dev": true
		},
		"node_modules/nopt": {
			"version": "7.2.0",
			"resolved": "https://registry.npmjs.org/nopt/-/nopt-7.2.0.tgz",
			"integrity": "sha512-CVDtwCdhYIvnAzFoJ6NJ6dX3oga9/HyciQDnG1vQDjSLMeKLJ4A93ZqYKDrgYSr1FBY5/hMYC+2VCi24pgpkGA==",
			"dev": true,
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
			"version": "6.0.0",
			"resolved": "https://registry.npmjs.org/normalize-package-data/-/normalize-package-data-6.0.0.tgz",
			"integrity": "sha512-UL7ELRVxYBHBgYEtZCXjxuD5vPxnmvMGq0jp/dGPKKrN7tfsBh2IY7TlJ15WWwdjRWD3RJbnsygUurTK3xkPkg==",
			"dev": true,
			"dependencies": {
				"hosted-git-info": "^7.0.0",
				"is-core-module": "^2.8.1",
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
			"engines": {
				"node": ">=0.10.0"
			}
		},
		"node_modules/normalize-range": {
			"version": "0.1.2",
			"resolved": "https://registry.npmjs.org/normalize-range/-/normalize-range-0.1.2.tgz",
			"integrity": "sha512-bdok/XvKII3nUpklnV6P2hxtMNrCboOjAcyBuQnWEhO665FwrSNRxU+AqpsyvO6LgGYPspN+lu5CLtw4jPRKNA==",
			"dev": true,
			"engines": {
				"node": ">=0.10.0"
			}
		},
		"node_modules/npm-bundled": {
			"version": "3.0.0",
			"resolved": "https://registry.npmjs.org/npm-bundled/-/npm-bundled-3.0.0.tgz",
			"integrity": "sha512-Vq0eyEQy+elFpzsKjMss9kxqb9tG3YHg4dsyWuUENuzvSUWe1TCnW/vV9FkhvBk/brEDoDiVd+M1Btosa6ImdQ==",
			"dev": true,
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
			"engines": {
				"node": "^14.17.0 || ^16.13.0 || >=18.0.0"
			}
		},
		"node_modules/npm-package-arg": {
			"version": "11.0.1",
			"resolved": "https://registry.npmjs.org/npm-package-arg/-/npm-package-arg-11.0.1.tgz",
			"integrity": "sha512-M7s1BD4NxdAvBKUPqqRW957Xwcl/4Zvo8Aj+ANrzvIPzGJZElrH7Z//rSaec2ORcND6FHHLnZeY8qgTpXDMFQQ==",
			"dev": true,
			"dependencies": {
				"hosted-git-info": "^7.0.0",
				"proc-log": "^3.0.0",
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
			"dependencies": {
				"ignore-walk": "^6.0.4"
			},
			"engines": {
				"node": "^14.17.0 || ^16.13.0 || >=18.0.0"
			}
		},
		"node_modules/npm-pick-manifest": {
			"version": "9.0.0",
			"resolved": "https://registry.npmjs.org/npm-pick-manifest/-/npm-pick-manifest-9.0.0.tgz",
			"integrity": "sha512-VfvRSs/b6n9ol4Qb+bDwNGUXutpy76x6MARw/XssevE0TnctIKcmklJZM5Z7nqs5z5aW+0S63pgCNbpkUNNXBg==",
			"dev": true,
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
			"version": "16.1.0",
			"resolved": "https://registry.npmjs.org/npm-registry-fetch/-/npm-registry-fetch-16.1.0.tgz",
			"integrity": "sha512-PQCELXKt8Azvxnt5Y85GseQDJJlglTFM9L9U9gkv2y4e9s0k3GVDdOx3YoB6gm2Do0hlkzC39iCGXby+Wve1Bw==",
			"dev": true,
			"dependencies": {
				"make-fetch-happen": "^13.0.0",
				"minipass": "^7.0.2",
				"minipass-fetch": "^3.0.0",
				"minipass-json-stream": "^1.0.1",
				"minizlib": "^2.1.2",
				"npm-package-arg": "^11.0.0",
				"proc-log": "^3.0.0"
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
			"dependencies": {
				"boolbase": "^1.0.0"
			},
			"funding": {
				"url": "https://github.com/fb55/nth-check?sponsor=1"
			}
		},
		"node_modules/object-inspect": {
			"version": "1.13.1",
			"resolved": "https://registry.npmjs.org/object-inspect/-/object-inspect-1.13.1.tgz",
			"integrity": "sha512-5qoj1RUiKOMsCCNLV1CBiPYE10sziTsnmNxkAI/rZhiD63CF7IqdFGC/XzjWjpSgLf0LxXX3bDFIh0E18f6UhQ==",
			"dev": true,
			"funding": {
				"url": "https://github.com/sponsors/ljharb"
			}
		},
		"node_modules/obuf": {
			"version": "1.1.2",
			"resolved": "https://registry.npmjs.org/obuf/-/obuf-1.1.2.tgz",
			"integrity": "sha512-PX1wu0AmAdPqOL1mWhqmlOd8kOIZQwGZw6rh7uby9fTc5lhaOWFLX3I6R1hrF9k3zUY40e6igsLGkDXK92LJNg==",
			"dev": true
		},
		"node_modules/on-finished": {
			"version": "2.4.1",
			"resolved": "https://registry.npmjs.org/on-finished/-/on-finished-2.4.1.tgz",
			"integrity": "sha512-oVlzkg3ENAhCk2zdv7IJwd/QUD4z2RxRwpkcGY8psCVcCYZNq4wYnVWALHM+brtuJjePWiYF/ClmuDr8Ch5+kg==",
			"dev": true,
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
			"engines": {
				"node": ">= 0.8"
			}
		},
		"node_modules/once": {
			"version": "1.4.0",
			"resolved": "https://registry.npmjs.org/once/-/once-1.4.0.tgz",
			"integrity": "sha512-lNaJgI+2Q5URQBkccEKHTQOPaXdUxnZZElQTZY0MFUAuaEqe1E+Nyvgdz/aIyNi6Z9MzO5dv1H8n58/GELp3+w==",
			"dev": true,
			"dependencies": {
				"wrappy": "1"
			}
		},
		"node_modules/onetime": {
			"version": "5.1.2",
			"resolved": "https://registry.npmjs.org/onetime/-/onetime-5.1.2.tgz",
			"integrity": "sha512-kbpaSSGJTWdAY5KPVeMOKXSrPtr8C8C7wodJbcsd51jRnmD+GZu8Y0VoU6Dm5Z4vWr0Ig/1NKuWRKf7j5aaYSg==",
			"dev": true,
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
		"node_modules/open": {
			"version": "8.4.2",
			"resolved": "https://registry.npmjs.org/open/-/open-8.4.2.tgz",
			"integrity": "sha512-7x81NCL719oNbsq/3mh+hVrAWmFuEYUqrq/Iw3kUzH8ReypT9QQ0BLoJS7/G9k6N81XjW4qHWtjWwe/9eLy1EQ==",
			"dev": true,
			"dependencies": {
				"define-lazy-prop": "^2.0.0",
				"is-docker": "^2.1.1",
				"is-wsl": "^2.2.0"
			},
			"engines": {
				"node": ">=12"
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
		"node_modules/ora/node_modules/color-convert": {
			"version": "2.0.1",
			"resolved": "https://registry.npmjs.org/color-convert/-/color-convert-2.0.1.tgz",
			"integrity": "sha512-RRECPsj7iu/xb5oKYcsFHSppFNnsj/52OVTRKb4zP5onXwVF3zVmmToNcOfGC+CRDpfK/U584fMg38ZHCaElKQ==",
			"dev": true,
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
			"dev": true
		},
		"node_modules/ora/node_modules/has-flag": {
			"version": "4.0.0",
			"resolved": "https://registry.npmjs.org/has-flag/-/has-flag-4.0.0.tgz",
			"integrity": "sha512-EykJT/Q1KjTWctppgIAgfSO0tKVuZUjhgMr17kqTumMl6Afv3EISleU7qZUzoXDFTAHTDC4NOoG/ZxU3EvlMPQ==",
			"dev": true,
			"engines": {
				"node": ">=8"
			}
		},
		"node_modules/ora/node_modules/supports-color": {
			"version": "7.2.0",
			"resolved": "https://registry.npmjs.org/supports-color/-/supports-color-7.2.0.tgz",
			"integrity": "sha512-qpCAvRl9stuOHveKsn7HncJRvv501qIacKzQlO/+Lwxc9+0q2wLyv4Dfvt80/DPn2pqOBsJdDiogXGR9+OvwRw==",
			"dev": true,
			"dependencies": {
				"has-flag": "^4.0.0"
			},
			"engines": {
				"node": ">=8"
			}
		},
		"node_modules/os-tmpdir": {
			"version": "1.0.2",
			"resolved": "https://registry.npmjs.org/os-tmpdir/-/os-tmpdir-1.0.2.tgz",
			"integrity": "sha512-D2FR03Vir7FIu45XBY20mTb+/ZSWB00sjU9jdQXt83gDrI4Ztz5Fs7/yy74g2N5SVQY4xY1qDr4rNddwYRVX0g==",
			"dev": true,
			"engines": {
				"node": ">=0.10.0"
			}
		},
		"node_modules/p-limit": {
			"version": "2.3.0",
			"resolved": "https://registry.npmjs.org/p-limit/-/p-limit-2.3.0.tgz",
			"integrity": "sha512-//88mFWSJx8lxCzwdAABTJL2MyWB12+eIY7MDL2SqLmAkeKU9qxRvWuSyTjm3FUmpBEMuFfckAIqEaVGUDxb6w==",
			"dev": true,
			"dependencies": {
				"p-try": "^2.0.0"
			},
			"engines": {
				"node": ">=6"
			},
			"funding": {
				"url": "https://github.com/sponsors/sindresorhus"
			}
		},
		"node_modules/p-locate": {
			"version": "4.1.0",
			"resolved": "https://registry.npmjs.org/p-locate/-/p-locate-4.1.0.tgz",
			"integrity": "sha512-R79ZZ/0wAxKGu3oYMlz8jy/kbhsNrS7SKZ7PxEHBgJ5+F2mtFW2fK2cOtBh1cHYkQsbzFV7I+EoRKe6Yt0oK7A==",
			"dev": true,
			"dependencies": {
				"p-limit": "^2.2.0"
			},
			"engines": {
				"node": ">=8"
			}
		},
		"node_modules/p-map": {
			"version": "4.0.0",
			"resolved": "https://registry.npmjs.org/p-map/-/p-map-4.0.0.tgz",
			"integrity": "sha512-/bjOqmgETBYB5BoEeGVea8dmvHb2m9GLy1E9W43yeyfP6QQCZGFNa+XRceJEuDB6zqr+gKpIAmlLebMpykw/MQ==",
			"dev": true,
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
			"version": "4.6.2",
			"resolved": "https://registry.npmjs.org/p-retry/-/p-retry-4.6.2.tgz",
			"integrity": "sha512-312Id396EbJdvRONlngUx0NydfrIQ5lsYu0znKVUzVvArzEIt08V1qhtyESbGVd1FGX7UKtiFp5uwKZdM8wIuQ==",
			"dev": true,
			"dependencies": {
				"@types/retry": "0.12.0",
				"retry": "^0.13.1"
			},
			"engines": {
				"node": ">=8"
			}
		},
		"node_modules/p-retry/node_modules/retry": {
			"version": "0.13.1",
			"resolved": "https://registry.npmjs.org/retry/-/retry-0.13.1.tgz",
			"integrity": "sha512-XQBQ3I8W1Cge0Seh+6gjj03LbmRFWuoszgK9ooCpwYIrhhoO80pfq4cUkU5DkknwfOfFteRwlZ56PYOGYyFWdg==",
			"dev": true,
			"engines": {
				"node": ">= 4"
			}
		},
		"node_modules/p-try": {
			"version": "2.2.0",
			"resolved": "https://registry.npmjs.org/p-try/-/p-try-2.2.0.tgz",
			"integrity": "sha512-R4nPAVTAU0B9D35/Gk3uJf/7XYbQcyohSKdvAxIRSNghFl4e71hVoGnBNQz9cWaXxO2I10KTC+3jMdvvoKw6dQ==",
			"dev": true,
			"engines": {
				"node": ">=6"
			}
		},
		"node_modules/pacote": {
			"version": "17.0.6",
			"resolved": "https://registry.npmjs.org/pacote/-/pacote-17.0.6.tgz",
			"integrity": "sha512-cJKrW21VRE8vVTRskJo78c/RCvwJCn1f4qgfxL4w77SOWrTCRcmfkYHlHtS0gqpgjv3zhXflRtgsrUCX5xwNnQ==",
			"dev": true,
			"dependencies": {
				"@npmcli/git": "^5.0.0",
				"@npmcli/installed-package-contents": "^2.0.1",
				"@npmcli/promise-spawn": "^7.0.0",
				"@npmcli/run-script": "^7.0.0",
				"cacache": "^18.0.0",
				"fs-minipass": "^3.0.0",
				"minipass": "^7.0.2",
				"npm-package-arg": "^11.0.0",
				"npm-packlist": "^8.0.0",
				"npm-pick-manifest": "^9.0.0",
				"npm-registry-fetch": "^16.0.0",
				"proc-log": "^3.0.0",
				"promise-retry": "^2.0.1",
				"read-package-json": "^7.0.0",
				"read-package-json-fast": "^3.0.0",
				"sigstore": "^2.2.0",
				"ssri": "^10.0.0",
				"tar": "^6.1.11"
			},
			"bin": {
				"pacote": "lib/bin.js"
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
			"dev": true
		},
		"node_modules/parse-node-version": {
			"version": "1.0.1",
			"resolved": "https://registry.npmjs.org/parse-node-version/-/parse-node-version-1.0.1.tgz",
			"integrity": "sha512-3YHlOa/JgH6Mnpr05jP9eDG254US9ek25LyIxZlDItp2iJtwyaXQb57lBYLdT3MowkUFYEV2XXNAYIPlESvJlA==",
			"dev": true,
			"engines": {
				"node": ">= 0.10"
			}
		},
		"node_modules/parse5": {
			"version": "7.1.2",
			"resolved": "https://registry.npmjs.org/parse5/-/parse5-7.1.2.tgz",
			"integrity": "sha512-Czj1WaSVpaoj0wbhMzLmWD69anp2WH7FXMB9n1Sy8/ZFF9jolSQVMu1Ij5WIyGmcBmhk7EOndpO4mIpihVqAXw==",
			"dev": true,
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
			"engines": {
				"node": ">= 0.8"
			}
		},
		"node_modules/path-exists": {
			"version": "4.0.0",
			"resolved": "https://registry.npmjs.org/path-exists/-/path-exists-4.0.0.tgz",
			"integrity": "sha512-ak9Qy5Q7jYb2Wwcey5Fpvg2KoAc/ZIhLSLOSBmRmygPsGwkVVt0fZa0qrtMz+m6tJTAHfZQ8FnmB4MG4LWy7/w==",
			"dev": true,
			"engines": {
				"node": ">=8"
			}
		},
		"node_modules/path-is-absolute": {
			"version": "1.0.1",
			"resolved": "https://registry.npmjs.org/path-is-absolute/-/path-is-absolute-1.0.1.tgz",
			"integrity": "sha512-AVbw3UJ2e9bq64vSaS9Am0fje1Pa8pbGqTTsmXfaIiMpnr5DlDhfJOuLj9Sf95ZPVDAUerDfEk88MPmPe7UCQg==",
			"dev": true,
			"engines": {
				"node": ">=0.10.0"
			}
		},
		"node_modules/path-key": {
			"version": "3.1.1",
			"resolved": "https://registry.npmjs.org/path-key/-/path-key-3.1.1.tgz",
			"integrity": "sha512-ojmeN0qd+y0jszEtoY48r0Peq5dwMEkIlCOu6Q5f41lfkswXuKtYrhgoTpLnyIcHm24Uhqx+5Tqm2InSwLhE6Q==",
			"dev": true,
			"engines": {
				"node": ">=8"
			}
		},
		"node_modules/path-parse": {
			"version": "1.0.7",
			"resolved": "https://registry.npmjs.org/path-parse/-/path-parse-1.0.7.tgz",
			"integrity": "sha512-LDJzPVEEEPR+y48z93A0Ed0yXb8pAByGWo/k5YYdYgpY2/2EsOsksJrq7lOHxryrVOn1ejG6oAp8ahvOIQD8sw==",
			"dev": true
		},
		"node_modules/path-scurry": {
			"version": "1.10.1",
			"resolved": "https://registry.npmjs.org/path-scurry/-/path-scurry-1.10.1.tgz",
			"integrity": "sha512-MkhCqzzBEpPvxxQ71Md0b1Kk51W01lrYvlMzSUaIzNsODdd7mqhiimSZlr+VegAz5Z6Vzt9Xg2ttE//XBhH3EQ==",
			"dev": true,
			"dependencies": {
				"lru-cache": "^9.1.1 || ^10.0.0",
				"minipass": "^5.0.0 || ^6.0.2 || ^7.0.0"
			},
			"engines": {
				"node": ">=16 || 14 >=14.17"
			},
			"funding": {
				"url": "https://github.com/sponsors/isaacs"
			}
		},
		"node_modules/path-scurry/node_modules/lru-cache": {
			"version": "10.2.0",
			"resolved": "https://registry.npmjs.org/lru-cache/-/lru-cache-10.2.0.tgz",
			"integrity": "sha512-2bIM8x+VAf6JT4bKAljS1qUWgMsqZRPGJS6FSahIMPVvctcNhyVp7AJu7quxOW9jwkryBReKZY5tY5JYv2n/7Q==",
			"dev": true,
			"engines": {
				"node": "14 || >=16.14"
			}
		},
		"node_modules/path-to-regexp": {
			"version": "0.1.7",
			"resolved": "https://registry.npmjs.org/path-to-regexp/-/path-to-regexp-0.1.7.tgz",
			"integrity": "sha512-5DFkuoqlv1uYQKxy8omFBeJPQcdoE07Kv2sferDCrAq1ohOU+MSDswDIbnx3YAM60qIOnYa53wBhXW0EbMonrQ==",
			"dev": true
		},
		"node_modules/path-type": {
			"version": "4.0.0",
			"resolved": "https://registry.npmjs.org/path-type/-/path-type-4.0.0.tgz",
			"integrity": "sha512-gDKb8aZMDeD/tZWs9P6+q0J9Mwkdl6xMV8TjnGP3qJVJ06bdMgkbBlLU8IdfOsIsFz2BW1rNVT3XuNEl8zPAvw==",
			"dev": true,
			"engines": {
				"node": ">=8"
			}
		},
		"node_modules/picocolors": {
			"version": "1.0.0",
			"resolved": "https://registry.npmjs.org/picocolors/-/picocolors-1.0.0.tgz",
			"integrity": "sha512-1fygroTLlHu66zi26VoTDv8yRgm0Fccecssto+MhsZ0D/DGW2sm8E8AjW7NU5VVTRt5GxbeZ5qBuJr+HyLYkjQ==",
			"dev": true
		},
		"node_modules/picomatch": {
			"version": "4.0.1",
			"resolved": "https://registry.npmjs.org/picomatch/-/picomatch-4.0.1.tgz",
			"integrity": "sha512-xUXwsxNjwTQ8K3GnT4pCJm+xq3RUPQbmkYJTP5aFIfNIvbcc/4MUxgBaaRSZJ6yGJZiGSyYlM6MzwTsRk8SYCg==",
			"dev": true,
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
			"optional": true,
			"engines": {
				"node": ">=6"
			}
		},
		"node_modules/piscina": {
			"version": "4.3.1",
			"resolved": "https://registry.npmjs.org/piscina/-/piscina-4.3.1.tgz",
			"integrity": "sha512-MBj0QYm3hJQ/C/wIXTN1OCYC8uQ4BBJ4LVele2P4ZwVQAH04vkk8E1SpDbuemLAL1dZorbuOob9rYqJeWCcCRg==",
			"dev": true,
			"optionalDependencies": {
				"nice-napi": "^1.0.2"
			}
		},
		"node_modules/pkg-dir": {
			"version": "7.0.0",
			"resolved": "https://registry.npmjs.org/pkg-dir/-/pkg-dir-7.0.0.tgz",
			"integrity": "sha512-Ie9z/WINcxxLp27BKOCHGde4ITq9UklYKDzVo1nhk5sqGEXU3FpkwP5GM2voTGJkGd9B3Otl+Q4uwSOeSUtOBA==",
			"dev": true,
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
		"node_modules/pkg-dir/node_modules/find-up": {
			"version": "6.3.0",
			"resolved": "https://registry.npmjs.org/find-up/-/find-up-6.3.0.tgz",
			"integrity": "sha512-v2ZsoEuVHYy8ZIlYqwPe/39Cy+cFDzp4dXPaxNvkEuouymu+2Jbz0PxpKarJHYJTmv2HWT3O382qY8l4jMWthw==",
			"dev": true,
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
		"node_modules/pkg-dir/node_modules/locate-path": {
			"version": "7.2.0",
			"resolved": "https://registry.npmjs.org/locate-path/-/locate-path-7.2.0.tgz",
			"integrity": "sha512-gvVijfZvn7R+2qyPX8mAuKcFGDf6Nc61GdvGafQsHL0sBIxfKzA+usWn4GFC/bk+QdwPUD4kWFJLhElipq+0VA==",
			"dev": true,
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
		"node_modules/pkg-dir/node_modules/p-limit": {
			"version": "4.0.0",
			"resolved": "https://registry.npmjs.org/p-limit/-/p-limit-4.0.0.tgz",
			"integrity": "sha512-5b0R4txpzjPWVw/cXXUResoD4hb6U/x9BH08L7nw+GN1sezDzPdxeRvpc9c433fZhBan/wusjbCsqwqm4EIBIQ==",
			"dev": true,
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
		"node_modules/pkg-dir/node_modules/p-locate": {
			"version": "6.0.0",
			"resolved": "https://registry.npmjs.org/p-locate/-/p-locate-6.0.0.tgz",
			"integrity": "sha512-wPrq66Llhl7/4AGC6I+cqxT07LhXvWL08LNXz1fENOw0Ap4sRZZ/gZpTTJ5jpurzzzfS2W/Ge9BY3LgLjCShcw==",
			"dev": true,
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
		"node_modules/pkg-dir/node_modules/path-exists": {
			"version": "5.0.0",
			"resolved": "https://registry.npmjs.org/path-exists/-/path-exists-5.0.0.tgz",
			"integrity": "sha512-RjhtfwJOxzcFmNOi6ltcbcu4Iu+FL3zEj83dk4kAS+fVpTxXLO1b38RvJgT/0QwvV/L3aY9TAnyv0EOqW4GoMQ==",
			"dev": true,
			"engines": {
				"node": "^12.20.0 || ^14.13.1 || >=16.0.0"
			}
		},
		"node_modules/postcss": {
			"version": "8.4.35",
			"resolved": "https://registry.npmjs.org/postcss/-/postcss-8.4.35.tgz",
			"integrity": "sha512-u5U8qYpBCpN13BsiEB0CbR1Hhh4Gc0zLFuedrHJKMctHCHAGrMdG0PRM/KErzAL3CU6/eckEtmHNB3x6e3c0vA==",
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
			"dependencies": {
				"nanoid": "^3.3.7",
				"picocolors": "^1.0.0",
				"source-map-js": "^1.0.2"
			},
			"engines": {
				"node": "^10 || ^12 || >=14"
			}
		},
		"node_modules/postcss-loader": {
			"version": "8.1.0",
			"resolved": "https://registry.npmjs.org/postcss-loader/-/postcss-loader-8.1.0.tgz",
			"integrity": "sha512-AbperNcX3rlob7Ay7A/HQcrofug1caABBkopoFeOQMspZBqcqj6giYn1Bwey/0uiOPAcR+NQD0I2HC7rXzk91w==",
			"dev": true,
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
		"node_modules/postcss-modules-extract-imports": {
			"version": "3.0.0",
			"resolved": "https://registry.npmjs.org/postcss-modules-extract-imports/-/postcss-modules-extract-imports-3.0.0.tgz",
			"integrity": "sha512-bdHleFnP3kZ4NYDhuGlVK+CMrQ/pqUm8bx/oGL93K6gVwiclvX5x0n76fYMKuIGKzlABOy13zsvqjb0f92TEXw==",
			"dev": true,
			"engines": {
				"node": "^10 || ^12 || >= 14"
			},
			"peerDependencies": {
				"postcss": "^8.1.0"
			}
		},
		"node_modules/postcss-modules-local-by-default": {
			"version": "4.0.4",
			"resolved": "https://registry.npmjs.org/postcss-modules-local-by-default/-/postcss-modules-local-by-default-4.0.4.tgz",
			"integrity": "sha512-L4QzMnOdVwRm1Qb8m4x8jsZzKAaPAgrUF1r/hjDR2Xj7R+8Zsf97jAlSQzWtKx5YNiNGN8QxmPFIc/sh+RQl+Q==",
			"dev": true,
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
			"version": "3.1.1",
			"resolved": "https://registry.npmjs.org/postcss-modules-scope/-/postcss-modules-scope-3.1.1.tgz",
			"integrity": "sha512-uZgqzdTleelWjzJY+Fhti6F3C9iF1JR/dODLs/JDefozYcKTBCdD8BIl6nNPbTbcLnGrk56hzwZC2DaGNvYjzA==",
			"dev": true,
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
		"node_modules/postcss-selector-parser": {
			"version": "6.0.15",
			"resolved": "https://registry.npmjs.org/postcss-selector-parser/-/postcss-selector-parser-6.0.15.tgz",
			"integrity": "sha512-rEYkQOMUCEMhsKbK66tbEU9QVIxbhN18YiniAwA7XQYTVBqrBy+P2p5JcdqsHgKM2zWylp8d7J6eszocfds5Sw==",
			"dev": true,
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
			"dev": true
		},
		"node_modules/pretty-bytes": {
			"version": "5.6.0",
			"resolved": "https://registry.npmjs.org/pretty-bytes/-/pretty-bytes-5.6.0.tgz",
			"integrity": "sha512-FFw039TmrBqFK8ma/7OL3sDz/VytdtJr044/QUJtH0wK9lb9jLq9tJyIxUwtQJHwar2BqtiA4iCWSwo9JLkzFg==",
			"dev": true,
			"engines": {
				"node": ">=6"
			},
			"funding": {
				"url": "https://github.com/sponsors/sindresorhus"
			}
		},
		"node_modules/proc-log": {
			"version": "3.0.0",
			"resolved": "https://registry.npmjs.org/proc-log/-/proc-log-3.0.0.tgz",
			"integrity": "sha512-++Vn7NS4Xf9NacaU9Xq3URUuqZETPsf8L4j5/ckhaRYsfPeRyzGw+iDjFhV/Jr3uNmTvvddEJFWh5R1gRgUH8A==",
			"dev": true,
			"engines": {
				"node": "^14.17.0 || ^16.13.0 || >=18.0.0"
			}
		},
		"node_modules/process-nextick-args": {
			"version": "2.0.1",
			"resolved": "https://registry.npmjs.org/process-nextick-args/-/process-nextick-args-2.0.1.tgz",
			"integrity": "sha512-3ouUOpQhtgrbOa17J7+uxOTpITYWaGP7/AhoR3+A+/1e9skrzelGi/dXzEYyvbxubEF6Wn2ypscTKiKJFFn1ag==",
			"dev": true
		},
		"node_modules/promise-inflight": {
			"version": "1.0.1",
			"resolved": "https://registry.npmjs.org/promise-inflight/-/promise-inflight-1.0.1.tgz",
			"integrity": "sha512-6zWPyEOFaQBJYcGMHBKTKJ3u6TBsnMFOIZSa6ce1e/ZrrsOlnHRHbabMjLiBYKp+n44X9eUI6VUPaukCXHuG4g==",
			"dev": true
		},
		"node_modules/promise-retry": {
			"version": "2.0.1",
			"resolved": "https://registry.npmjs.org/promise-retry/-/promise-retry-2.0.1.tgz",
			"integrity": "sha512-y+WKFlBR8BGXnsNlIHFGPZmyDf3DFMoLhaflAnyZgV6rG6xu+JwesTo2Q9R6XwYmtmwAFCkAk3e35jEdoeh/3g==",
			"dev": true,
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
			"engines": {
				"node": ">= 0.10"
			}
		},
		"node_modules/prr": {
			"version": "1.0.1",
			"resolved": "https://registry.npmjs.org/prr/-/prr-1.0.1.tgz",
			"integrity": "sha512-yPw4Sng1gWghHQWj0B3ZggWUm4qVbPwPFcRG8KyxiU7J2OHFSoEHKS+EZ3fv5l1t9CyCiop6l/ZYeWbrgoQejw==",
			"dev": true,
			"optional": true
		},
		"node_modules/punycode": {
			"version": "2.3.1",
			"resolved": "https://registry.npmjs.org/punycode/-/punycode-2.3.1.tgz",
			"integrity": "sha512-vYt7UD1U9Wg6138shLtLOvdAu+8DsC/ilFtEVHcH+wydcSpNE20AfSOduf6MkRFahL5FY7X1oU7nKVZFtfq8Fg==",
			"dev": true,
			"engines": {
				"node": ">=6"
			}
		},
		"node_modules/qs": {
			"version": "6.11.0",
			"resolved": "https://registry.npmjs.org/qs/-/qs-6.11.0.tgz",
			"integrity": "sha512-MvjoMCJwEarSbUYk5O+nmoSzSutSsTwF85zcHPQ9OrlFoZOYIjaqBAJIqIXjptyD5vThxGq52Xu/MaJzRkIk4Q==",
			"dev": true,
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
			]
		},
		"node_modules/randombytes": {
			"version": "2.1.0",
			"resolved": "https://registry.npmjs.org/randombytes/-/randombytes-2.1.0.tgz",
			"integrity": "sha512-vYl3iOX+4CKUWuxGi9Ukhie6fsqXqS9FE2Zaic4tNFD2N2QQaXOMFbuKK4QmDHC0JO6B1Zp41J0LpT0oR68amQ==",
			"dev": true,
			"dependencies": {
				"safe-buffer": "^5.1.0"
			}
		},
		"node_modules/range-parser": {
			"version": "1.2.1",
			"resolved": "https://registry.npmjs.org/range-parser/-/range-parser-1.2.1.tgz",
			"integrity": "sha512-Hrgsx+orqoygnmhFbKaHE6c296J+HTAQXoxEF6gNupROmmGJRoyzfG3ccAveqCBrwr/2yxQ5BVd/GTl5agOwSg==",
			"dev": true,
			"engines": {
				"node": ">= 0.6"
			}
		},
		"node_modules/raw-body": {
			"version": "2.5.2",
			"resolved": "https://registry.npmjs.org/raw-body/-/raw-body-2.5.2.tgz",
			"integrity": "sha512-8zGqypfENjCIqGhgXToC8aB2r7YrBX+AQAfIPs/Mlk+BtPTztOvTS01NRW/3Eh60J+a48lt8qsCzirQ6loCVfA==",
			"dev": true,
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
			"engines": {
				"node": ">= 0.8"
			}
		},
		"node_modules/read-package-json": {
			"version": "7.0.0",
			"resolved": "https://registry.npmjs.org/read-package-json/-/read-package-json-7.0.0.tgz",
			"integrity": "sha512-uL4Z10OKV4p6vbdvIXB+OzhInYtIozl/VxUBPgNkBuUi2DeRonnuspmaVAMcrkmfjKGNmRndyQAbE7/AmzGwFg==",
			"dev": true,
			"dependencies": {
				"glob": "^10.2.2",
				"json-parse-even-better-errors": "^3.0.0",
				"normalize-package-data": "^6.0.0",
				"npm-normalize-package-bin": "^3.0.0"
			},
			"engines": {
				"node": "^16.14.0 || >=18.0.0"
			}
		},
		"node_modules/read-package-json-fast": {
			"version": "3.0.2",
			"resolved": "https://registry.npmjs.org/read-package-json-fast/-/read-package-json-fast-3.0.2.tgz",
			"integrity": "sha512-0J+Msgym3vrLOUB3hzQCuZHII0xkNGCtz/HJH9xZshwv9DbDwkw1KaE3gx/e2J5rpEY5rtOy6cyhKOPrkP7FZw==",
			"dev": true,
			"dependencies": {
				"json-parse-even-better-errors": "^3.0.0",
				"npm-normalize-package-bin": "^3.0.0"
			},
			"engines": {
				"node": "^14.17.0 || ^16.13.0 || >=18.0.0"
			}
		},
		"node_modules/readable-stream": {
			"version": "3.6.2",
			"resolved": "https://registry.npmjs.org/readable-stream/-/readable-stream-3.6.2.tgz",
			"integrity": "sha512-9u/sniCrY3D5WdsERHzHE4G2YCXqoG5FTHUiCC4SIbr6XcLZBY05ya9EKjYek9O5xOAwjGq+1JdGBAS7Q9ScoA==",
			"dev": true,
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
			"engines": {
				"node": ">=8.6"
			},
			"funding": {
				"url": "https://github.com/sponsors/jonschlinkert"
			}
		},
		"node_modules/reflect-metadata": {
			"version": "0.2.1",
			"resolved": "https://registry.npmjs.org/reflect-metadata/-/reflect-metadata-0.2.1.tgz",
			"integrity": "sha512-i5lLI6iw9AU3Uu4szRNPPEkomnkjRTaVt9hy/bn5g/oSzekBSMeLZblcjP74AW0vBabqERLLIrz+gR8QYR54Tw==",
			"dev": true
		},
		"node_modules/regenerate": {
			"version": "1.4.2",
			"resolved": "https://registry.npmjs.org/regenerate/-/regenerate-1.4.2.tgz",
			"integrity": "sha512-zrceR/XhGYU/d/opr2EKO7aRHUeiBI8qjtfHqADTwZd6Szfy16la6kqD0MIUs5z5hx6AaKa+PixpPrR289+I0A==",
			"dev": true
		},
		"node_modules/regenerate-unicode-properties": {
			"version": "10.1.1",
			"resolved": "https://registry.npmjs.org/regenerate-unicode-properties/-/regenerate-unicode-properties-10.1.1.tgz",
			"integrity": "sha512-X007RyZLsCJVVrjgEFVpLUTZwyOZk3oiL75ZcuYjlIWd6rNJtOjkBwQc5AsRrpbKVkxN6sklw/k/9m2jJYOf8Q==",
			"dev": true,
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
			"dev": true
		},
		"node_modules/regenerator-transform": {
			"version": "0.15.2",
			"resolved": "https://registry.npmjs.org/regenerator-transform/-/regenerator-transform-0.15.2.tgz",
			"integrity": "sha512-hfMp2BoF0qOk3uc5V20ALGDS2ddjQaLrdl7xrGXvAIow7qeWRM2VA2HuCHkUKk9slq3VwEwLNK3DFBqDfPGYtg==",
			"dev": true,
			"dependencies": {
				"@babel/runtime": "^7.8.4"
			}
		},
		"node_modules/regex-parser": {
			"version": "2.3.0",
			"resolved": "https://registry.npmjs.org/regex-parser/-/regex-parser-2.3.0.tgz",
			"integrity": "sha512-TVILVSz2jY5D47F4mA4MppkBrafEaiUWJO/TcZHEIuI13AqoZMkK1WMA4Om1YkYbTx+9Ki1/tSUXbceyr9saRg==",
			"dev": true
		},
		"node_modules/regexpu-core": {
			"version": "5.3.2",
			"resolved": "https://registry.npmjs.org/regexpu-core/-/regexpu-core-5.3.2.tgz",
			"integrity": "sha512-RAM5FlZz+Lhmo7db9L298p2vHP5ZywrVXmVXpmAD9GuL5MPH6t9ROw1iA/wfHkQ76Qe7AaPF0nGuim96/IrQMQ==",
			"dev": true,
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
			"engines": {
				"node": ">=0.10.0"
			}
		},
		"node_modules/require-from-string": {
			"version": "2.0.2",
			"resolved": "https://registry.npmjs.org/require-from-string/-/require-from-string-2.0.2.tgz",
			"integrity": "sha512-Xf0nWe6RseziFMu+Ap9biiUbmplq6S9/p+7w7YXP/JBHhrUDDUhwa+vANyubuqfZWTveU//DYVGsDG7RKL/vEw==",
			"dev": true,
			"engines": {
				"node": ">=0.10.0"
			}
		},
		"node_modules/requires-port": {
			"version": "1.0.0",
			"resolved": "https://registry.npmjs.org/requires-port/-/requires-port-1.0.0.tgz",
			"integrity": "sha512-KigOCHcocU3XODJxsu8i/j8T9tzT4adHiecwORRQ0ZZFcp7ahwXuRU1m+yuO90C5ZUyGeGfocHDI14M3L3yDAQ==",
			"dev": true
		},
		"node_modules/resolve": {
			"version": "1.22.8",
			"resolved": "https://registry.npmjs.org/resolve/-/resolve-1.22.8.tgz",
			"integrity": "sha512-oKWePCxqpd6FlLvGV1VU0x7bkPmmCNolxzjMf4NczoDnQcIWrAF+cPtZn5i6n+RfD2d9i0tzpKnG6Yk168yIyw==",
			"dev": true,
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
			"version": "5.0.0",
			"resolved": "https://registry.npmjs.org/resolve-from/-/resolve-from-5.0.0.tgz",
			"integrity": "sha512-qYg9KP24dD5qka9J47d0aVky0N+b4fTU89LN9iDnjB5waksiC49rvMB0PrUJQGoTmH50XPiqOvAjDfaijGxYZw==",
			"dev": true,
			"engines": {
				"node": ">=8"
			}
		},
		"node_modules/resolve-url-loader": {
			"version": "5.0.0",
			"resolved": "https://registry.npmjs.org/resolve-url-loader/-/resolve-url-loader-5.0.0.tgz",
			"integrity": "sha512-uZtduh8/8srhBoMx//5bwqjQ+rfYOUq8zC9NrMUGtjBiGTtFJM42s58/36+hTqeqINcnYe08Nj3LkK9lW4N8Xg==",
			"dev": true,
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
			"engines": {
				"node": ">=0.10.0"
			}
		},
		"node_modules/restore-cursor": {
			"version": "3.1.0",
			"resolved": "https://registry.npmjs.org/restore-cursor/-/restore-cursor-3.1.0.tgz",
			"integrity": "sha512-l+sSefzHpj5qimhFSE5a8nufZYAM3sBSVMAPtYkmC+4EH2anSGaEMXSD0izRQbu9nfyQ9y5JrVmp7E8oZrUjvA==",
			"dev": true,
			"dependencies": {
				"onetime": "^5.1.0",
				"signal-exit": "^3.0.2"
			},
			"engines": {
				"node": ">=8"
			}
		},
		"node_modules/restore-cursor/node_modules/signal-exit": {
			"version": "3.0.7",
			"resolved": "https://registry.npmjs.org/signal-exit/-/signal-exit-3.0.7.tgz",
			"integrity": "sha512-wnD2ZE+l+SPC/uoS0vXeE9L1+0wuaMqKlfz9AMUo38JsyLSBWSFcHR1Rri62LZc12vLr1gb3jl7iwQhgwpAbGQ==",
			"dev": true
		},
		"node_modules/retry": {
			"version": "0.12.0",
			"resolved": "https://registry.npmjs.org/retry/-/retry-0.12.0.tgz",
			"integrity": "sha512-9LkiTwjUh6rT555DtE9rTX+BKByPfrMzEAtnlEtdEwr3Nkffwiihqe2bWADg+OQRjt9gl6ICdmB/ZFDCGAtSow==",
			"dev": true,
			"engines": {
				"node": ">= 4"
			}
		},
		"node_modules/reusify": {
			"version": "1.0.4",
			"resolved": "https://registry.npmjs.org/reusify/-/reusify-1.0.4.tgz",
			"integrity": "sha512-U9nH88a3fc/ekCF1l0/UP1IosiuIjyTh7hBvXVMHYgVcfGvt897Xguj2UOLDeI5BG2m7/uwyaLVT6fbtCwTyzw==",
			"dev": true,
			"engines": {
				"iojs": ">=1.0.0",
				"node": ">=0.10.0"
			}
		},
		"node_modules/rimraf": {
			"version": "3.0.2",
			"resolved": "https://registry.npmjs.org/rimraf/-/rimraf-3.0.2.tgz",
			"integrity": "sha512-JZkJMZkAGFFPP2YqXZXPbMlMBgsxzE8ILs4lMIX/2o0L9UBw9O/Y3o6wFw/i9YLapcUJWwqbi3kdxIPdC62TIA==",
			"dev": true,
			"dependencies": {
				"glob": "^7.1.3"
			},
			"bin": {
				"rimraf": "bin.js"
			},
			"funding": {
				"url": "https://github.com/sponsors/isaacs"
			}
		},
		"node_modules/rimraf/node_modules/brace-expansion": {
			"version": "1.1.11",
			"resolved": "https://registry.npmjs.org/brace-expansion/-/brace-expansion-1.1.11.tgz",
			"integrity": "sha512-iCuPHDFgrHX7H2vEI/5xpz07zSHB00TpugqhmYtVmMO6518mCuRMoOYFldEBl0g187ufozdaHgWKcYFb61qGiA==",
			"dev": true,
			"dependencies": {
				"balanced-match": "^1.0.0",
				"concat-map": "0.0.1"
			}
		},
		"node_modules/rimraf/node_modules/glob": {
			"version": "7.2.3",
			"resolved": "https://registry.npmjs.org/glob/-/glob-7.2.3.tgz",
			"integrity": "sha512-nFR0zLpU2YCaRxwoCJvL6UvCH2JFyFVIvwTLsIf21AuHlMskA1hhTdk+LlYJtOlYt9v6dvszD2BGRqBL+iQK9Q==",
			"dev": true,
			"dependencies": {
				"fs.realpath": "^1.0.0",
				"inflight": "^1.0.4",
				"inherits": "2",
				"minimatch": "^3.1.1",
				"once": "^1.3.0",
				"path-is-absolute": "^1.0.0"
			},
			"engines": {
				"node": "*"
			},
			"funding": {
				"url": "https://github.com/sponsors/isaacs"
			}
		},
		"node_modules/rimraf/node_modules/minimatch": {
			"version": "3.1.2",
			"resolved": "https://registry.npmjs.org/minimatch/-/minimatch-3.1.2.tgz",
			"integrity": "sha512-J7p63hRiAjw1NDEww1W7i37+ByIrOWO5XQQAzZ3VOcL0PNybwpfmV/N05zFAzwQ9USyEcX6t3UO+K5aqBQOIHw==",
			"dev": true,
			"dependencies": {
				"brace-expansion": "^1.1.7"
			},
			"engines": {
				"node": "*"
			}
		},
		"node_modules/rollup": {
			"version": "4.12.0",
			"resolved": "https://registry.npmjs.org/rollup/-/rollup-4.12.0.tgz",
			"integrity": "sha512-wz66wn4t1OHIJw3+XU7mJJQV/2NAfw5OAk6G6Hoo3zcvz/XOfQ52Vgi+AN4Uxoxi0KBBwk2g8zPrTDA4btSB/Q==",
			"dev": true,
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
				"@rollup/rollup-android-arm-eabi": "4.12.0",
				"@rollup/rollup-android-arm64": "4.12.0",
				"@rollup/rollup-darwin-arm64": "4.12.0",
				"@rollup/rollup-darwin-x64": "4.12.0",
				"@rollup/rollup-linux-arm-gnueabihf": "4.12.0",
				"@rollup/rollup-linux-arm64-gnu": "4.12.0",
				"@rollup/rollup-linux-arm64-musl": "4.12.0",
				"@rollup/rollup-linux-riscv64-gnu": "4.12.0",
				"@rollup/rollup-linux-x64-gnu": "4.12.0",
				"@rollup/rollup-linux-x64-musl": "4.12.0",
				"@rollup/rollup-win32-arm64-msvc": "4.12.0",
				"@rollup/rollup-win32-ia32-msvc": "4.12.0",
				"@rollup/rollup-win32-x64-msvc": "4.12.0",
				"fsevents": "~2.3.2"
			}
		},
		"node_modules/run-async": {
			"version": "3.0.0",
			"resolved": "https://registry.npmjs.org/run-async/-/run-async-3.0.0.tgz",
			"integrity": "sha512-540WwVDOMxA6dN6We19EcT9sc3hkXPw5mzRNGM3FkdN/vtE9NFvj5lFAPNwUDmJjXidm3v7TC1cTE7t17Ulm1Q==",
			"dev": true,
			"engines": {
				"node": ">=0.12.0"
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
			"dependencies": {
				"queue-microtask": "^1.2.2"
			}
		},
		"node_modules/rxjs": {
			"version": "7.8.1",
			"resolved": "https://registry.npmjs.org/rxjs/-/rxjs-7.8.1.tgz",
			"integrity": "sha512-AA3TVj+0A2iuIoQkWEK/tqFjBq2j+6PO6Y0zJcvzLAFhEFIO3HL0vls9hWLncZbAAbK0mar7oZ4V079I/qPMxg==",
			"dev": true,
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
			]
		},
		"node_modules/safer-buffer": {
			"version": "2.1.2",
			"resolved": "https://registry.npmjs.org/safer-buffer/-/safer-buffer-2.1.2.tgz",
			"integrity": "sha512-YZo3K82SD7Riyi0E1EQPojLz7kpepnSQI9IyPbHHg1XXXevb5dJI7tpyN2ADxGcQbHG7vcyRHk0cbwqcQriUtg==",
			"dev": true
		},
		"node_modules/sass": {
			"version": "1.70.0",
			"resolved": "https://registry.npmjs.org/sass/-/sass-1.70.0.tgz",
			"integrity": "sha512-uUxNQ3zAHeAx5nRFskBnrWzDUJrrvpCPD5FNAoRvTi0WwremlheES3tg+56PaVtCs5QDRX5CBLxxKMDJMEa1WQ==",
			"dev": true,
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
			"version": "14.1.0",
			"resolved": "https://registry.npmjs.org/sass-loader/-/sass-loader-14.1.0.tgz",
			"integrity": "sha512-LS2mLeFWA+orYxHNu+O18Xe4jR0kyamNOOUsE3NyBP4DvIL+8stHpNX0arYTItdPe80kluIiJ7Wfe/9iHSRO0Q==",
			"dev": true,
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
			"version": "1.3.0",
			"resolved": "https://registry.npmjs.org/sax/-/sax-1.3.0.tgz",
			"integrity": "sha512-0s+oAmw9zLl1V1cS9BtZN7JAd0cW5e0QH4W3LWEK6a4LaLEA2OTpGYWDY+6XasBLtz6wkm3u1xRw95mRuJ59WA==",
			"dev": true,
			"optional": true
		},
		"node_modules/schema-utils": {
			"version": "4.2.0",
			"resolved": "https://registry.npmjs.org/schema-utils/-/schema-utils-4.2.0.tgz",
			"integrity": "sha512-L0jRsrPpjdckP3oPug3/VxNKt2trR8TcabrM6FOAAlvC/9Phcmm+cuAgTlxBqdBR1WJx7Naj9WHw+aOmheSVbw==",
			"dev": true,
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
		"node_modules/select-hose": {
			"version": "2.0.0",
			"resolved": "https://registry.npmjs.org/select-hose/-/select-hose-2.0.0.tgz",
			"integrity": "sha512-mEugaLK+YfkijB4fx0e6kImuJdCIt2LxCRcbEYPqRGCs4F2ogyfZU5IAZRdjCP8JPq2AtdNoC/Dux63d9Kiryg==",
			"dev": true
		},
		"node_modules/selfsigned": {
			"version": "2.4.1",
			"resolved": "https://registry.npmjs.org/selfsigned/-/selfsigned-2.4.1.tgz",
			"integrity": "sha512-th5B4L2U+eGLq1TVh7zNRGBapioSORUeymIydxgFpwww9d2qyKvtuPU2jJuHvYAwwqi2Y596QBL3eEqcPEYL8Q==",
			"dev": true,
			"dependencies": {
				"@types/node-forge": "^1.3.0",
				"node-forge": "^1"
			},
			"engines": {
				"node": ">=10"
			}
		},
		"node_modules/semver": {
			"version": "7.6.0",
			"resolved": "https://registry.npmjs.org/semver/-/semver-7.6.0.tgz",
			"integrity": "sha512-EnwXhrlwXMk9gKu5/flx5sv/an57AkRplG3hTK68W7FRDN+k+OWBj65M7719OkA82XLBxrcX0KSHj+X5COhOVg==",
			"dev": true,
			"dependencies": {
				"lru-cache": "^6.0.0"
			},
			"bin": {
				"semver": "bin/semver.js"
			},
			"engines": {
				"node": ">=10"
			}
		},
		"node_modules/semver/node_modules/lru-cache": {
			"version": "6.0.0",
			"resolved": "https://registry.npmjs.org/lru-cache/-/lru-cache-6.0.0.tgz",
			"integrity": "sha512-Jo6dJ04CmSjuznwJSS3pUeWmd/H0ffTlkXXgwZi+eq1UCmqQwCh+eLsYOYCwY991i2Fah4h1BEMCx4qThGbsiA==",
			"dev": true,
			"dependencies": {
				"yallist": "^4.0.0"
			},
			"engines": {
				"node": ">=10"
			}
		},
		"node_modules/semver/node_modules/yallist": {
			"version": "4.0.0",
			"resolved": "https://registry.npmjs.org/yallist/-/yallist-4.0.0.tgz",
			"integrity": "sha512-3wdGidZyq5PB084XLES5TpOSRA3wjXAlIWMhum2kRcv/41Sn2emQ0dycQW4uZXLejwKvg6EsvbdlVL+FYEct7A==",
			"dev": true
		},
		"node_modules/send": {
			"version": "0.18.0",
			"resolved": "https://registry.npmjs.org/send/-/send-0.18.0.tgz",
			"integrity": "sha512-qqWzuOjSFOuqPjFe4NOsMLafToQQwBSOEpS+FwEt3A2V3vKubTquT3vmLTQpFgMXp8AlFWFuP1qKaJZOtPpVXg==",
			"dev": true,
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
			"dependencies": {
				"ms": "2.0.0"
			}
		},
		"node_modules/send/node_modules/debug/node_modules/ms": {
			"version": "2.0.0",
			"resolved": "https://registry.npmjs.org/ms/-/ms-2.0.0.tgz",
			"integrity": "sha512-Tpp60P6IUJDTuOq/5Z8cdskzJujfwqfOTkrwIwj7IRISpnkJnT6SyJ4PCPnGMoFjC9ddhal5KVIYtAt97ix05A==",
			"dev": true
		},
		"node_modules/send/node_modules/ms": {
			"version": "2.1.3",
			"resolved": "https://registry.npmjs.org/ms/-/ms-2.1.3.tgz",
			"integrity": "sha512-6FlzubTLZG3J2a/NVCAleEhjzq5oxgHyaCU9yYXvcLsvoVaHJq/s5xXI6/XXP6tz7R9xAOtHnSO/tXtF3WRTlA==",
			"dev": true
		},
		"node_modules/serialize-javascript": {
			"version": "6.0.2",
			"resolved": "https://registry.npmjs.org/serialize-javascript/-/serialize-javascript-6.0.2.tgz",
			"integrity": "sha512-Saa1xPByTTq2gdeFZYLLo+RFE35NHZkAbqZeWNd3BpzppeVisAqpDjcp8dyf6uIvEqJRd46jemmyA4iFIeVk8g==",
			"dev": true,
			"dependencies": {
				"randombytes": "^2.1.0"
			}
		},
		"node_modules/serve-index": {
			"version": "1.9.1",
			"resolved": "https://registry.npmjs.org/serve-index/-/serve-index-1.9.1.tgz",
			"integrity": "sha512-pXHfKNP4qujrtteMrSBb0rc8HJ9Ms/GrXwcUtUtD5s4ewDJI8bT3Cz2zTVRMKtri49pLx2e0Ya8ziP5Ya2pZZw==",
			"dev": true,
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
			"dependencies": {
				"ms": "2.0.0"
			}
		},
		"node_modules/serve-index/node_modules/depd": {
			"version": "1.1.2",
			"resolved": "https://registry.npmjs.org/depd/-/depd-1.1.2.tgz",
			"integrity": "sha512-7emPTl6Dpo6JRXOXjLRxck+FlLRX5847cLKEn00PLAgc3g2hTZZgr+e4c2v6QpSmLeFP3n5yUo7ft6avBK/5jQ==",
			"dev": true,
			"engines": {
				"node": ">= 0.6"
			}
		},
		"node_modules/serve-index/node_modules/http-errors": {
			"version": "1.6.3",
			"resolved": "https://registry.npmjs.org/http-errors/-/http-errors-1.6.3.tgz",
			"integrity": "sha512-lks+lVC8dgGyh97jxvxeYTWQFvh4uw4yC12gVl63Cg30sjPX4wuGcdkICVXDAESr6OJGjqGA8Iz5mkeN6zlD7A==",
			"dev": true,
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
			"dev": true
		},
		"node_modules/serve-index/node_modules/ms": {
			"version": "2.0.0",
			"resolved": "https://registry.npmjs.org/ms/-/ms-2.0.0.tgz",
			"integrity": "sha512-Tpp60P6IUJDTuOq/5Z8cdskzJujfwqfOTkrwIwj7IRISpnkJnT6SyJ4PCPnGMoFjC9ddhal5KVIYtAt97ix05A==",
			"dev": true
		},
		"node_modules/serve-index/node_modules/setprototypeof": {
			"version": "1.1.0",
			"resolved": "https://registry.npmjs.org/setprototypeof/-/setprototypeof-1.1.0.tgz",
			"integrity": "sha512-BvE/TwpZX4FXExxOxZyRGQQv651MSwmWKZGqvmPcRIjDqWub67kTKuIMx43cZZrS/cBBzwBcNDWoFxt2XEFIpQ==",
			"dev": true
		},
		"node_modules/serve-index/node_modules/statuses": {
			"version": "1.5.0",
			"resolved": "https://registry.npmjs.org/statuses/-/statuses-1.5.0.tgz",
			"integrity": "sha512-OpZ3zP+jT1PI7I8nemJX4AKmAX070ZkYPVWV/AaKTJl+tXCTGyVdC1a4SL8RUQYEwk/f34ZX8UTykN68FwrqAA==",
			"dev": true,
			"engines": {
				"node": ">= 0.6"
			}
		},
		"node_modules/serve-static": {
			"version": "1.15.0",
			"resolved": "https://registry.npmjs.org/serve-static/-/serve-static-1.15.0.tgz",
			"integrity": "sha512-XGuRDNjXUijsUL0vl6nSD7cwURuzEgglbOaFuZM9g3kwDXOWVTck0jLzjPzGD+TazWbboZYu52/9/XPdUgne9g==",
			"dev": true,
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
			"version": "1.2.1",
			"resolved": "https://registry.npmjs.org/set-function-length/-/set-function-length-1.2.1.tgz",
			"integrity": "sha512-j4t6ccc+VsKwYHso+kElc5neZpjtq9EnRICFZtWyBsLojhmeF/ZBd/elqm22WJh/BziDe/SBiOeAt0m2mfLD0g==",
			"dev": true,
			"dependencies": {
				"define-data-property": "^1.1.2",
				"es-errors": "^1.3.0",
				"function-bind": "^1.1.2",
				"get-intrinsic": "^1.2.3",
				"gopd": "^1.0.1",
				"has-property-descriptors": "^1.0.1"
			},
			"engines": {
				"node": ">= 0.4"
			}
		},
		"node_modules/setprototypeof": {
			"version": "1.2.0",
			"resolved": "https://registry.npmjs.org/setprototypeof/-/setprototypeof-1.2.0.tgz",
			"integrity": "sha512-E5LDX7Wrp85Kil5bhZv46j8jOeboKq5JMmYM3gVGdGH8xFpPWXUMsNrlODCrkoxMEeNi/XZIwuRvY4XNwYMJpw==",
			"dev": true
		},
		"node_modules/shallow-clone": {
			"version": "3.0.1",
			"resolved": "https://registry.npmjs.org/shallow-clone/-/shallow-clone-3.0.1.tgz",
			"integrity": "sha512-/6KqX+GVUdqPuPPd2LxDDxzX6CAbjJehAAOKlNpqqUpAqPM6HeL8f+o3a+JsyGjn2lv0WY8UsTgUJjU9Ok55NA==",
			"dev": true,
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
			"engines": {
				"node": ">=8"
			}
		},
		"node_modules/shell-quote": {
			"version": "1.8.1",
			"resolved": "https://registry.npmjs.org/shell-quote/-/shell-quote-1.8.1.tgz",
			"integrity": "sha512-6j1W9l1iAs/4xYBI1SYOVZyFcCis9b4KCLQ8fgAGG07QvzaRLVVRQvAy85yNmmZSjYjg4MWh4gNvlPujU/5LpA==",
			"dev": true,
			"funding": {
				"url": "https://github.com/sponsors/ljharb"
			}
		},
		"node_modules/side-channel": {
			"version": "1.0.6",
			"resolved": "https://registry.npmjs.org/side-channel/-/side-channel-1.0.6.tgz",
			"integrity": "sha512-fDW/EZ6Q9RiO8eFG8Hj+7u/oW+XrPTIChwCOM2+th2A6OblDtYYIpve9m+KvI9Z4C9qSEXlaGR6bTEYHReuglA==",
			"dev": true,
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
			"engines": {
				"node": ">=14"
			},
			"funding": {
				"url": "https://github.com/sponsors/isaacs"
			}
		},
		"node_modules/sigstore": {
			"version": "2.2.2",
			"resolved": "https://registry.npmjs.org/sigstore/-/sigstore-2.2.2.tgz",
			"integrity": "sha512-2A3WvXkQurhuMgORgT60r6pOWiCOO5LlEqY2ADxGBDGVYLSo5HN0uLtb68YpVpuL/Vi8mLTe7+0Dx2Fq8lLqEg==",
			"dev": true,
			"dependencies": {
				"@sigstore/bundle": "^2.2.0",
				"@sigstore/core": "^1.0.0",
				"@sigstore/protobuf-specs": "^0.3.0",
				"@sigstore/sign": "^2.2.3",
				"@sigstore/tuf": "^2.3.1",
				"@sigstore/verify": "^1.1.0"
			},
			"engines": {
				"node": "^16.14.0 || >=18.0.0"
			}
		},
		"node_modules/slash": {
			"version": "4.0.0",
			"resolved": "https://registry.npmjs.org/slash/-/slash-4.0.0.tgz",
			"integrity": "sha512-3dOsAHXXUkQTpOYcoAxLIorMTp4gIQr5IW3iVb7A7lFIp0VHhnynm9izx6TssdrIcVIESAlVjtnO2K8bg+Coew==",
			"dev": true,
			"engines": {
				"node": ">=12"
			},
			"funding": {
				"url": "https://github.com/sponsors/sindresorhus"
			}
		},
		"node_modules/smart-buffer": {
			"version": "4.2.0",
			"resolved": "https://registry.npmjs.org/smart-buffer/-/smart-buffer-4.2.0.tgz",
			"integrity": "sha512-94hK0Hh8rPqQl2xXc3HsaBoOXKV20MToPkcXvwbISWLEs+64sBq5kFgn2kJDHb1Pry9yrP0dxrCI9RRci7RXKg==",
			"dev": true,
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
			"dependencies": {
				"faye-websocket": "^0.11.3",
				"uuid": "^8.3.2",
				"websocket-driver": "^0.7.4"
			}
		},
		"node_modules/socks": {
			"version": "2.8.1",
			"resolved": "https://registry.npmjs.org/socks/-/socks-2.8.1.tgz",
			"integrity": "sha512-B6w7tkwNid7ToxjZ08rQMT8M9BJAf8DKx8Ft4NivzH0zBUfd6jldGcisJn/RLgxcX3FPNDdNQCUEMMT79b+oCQ==",
			"dev": true,
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
			"version": "8.0.2",
			"resolved": "https://registry.npmjs.org/socks-proxy-agent/-/socks-proxy-agent-8.0.2.tgz",
			"integrity": "sha512-8zuqoLv1aP/66PHF5TqwJ7Czm3Yv32urJQHrVyhD7mmA6d61Zv8cIXQYPTWwmg6qlupnPvs/QKDmfa4P/qct2g==",
			"dev": true,
			"dependencies": {
				"agent-base": "^7.0.2",
				"debug": "^4.3.4",
				"socks": "^2.7.1"
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
			"engines": {
				"node": ">= 8"
			}
		},
		"node_modules/source-map-js": {
			"version": "1.0.2",
			"resolved": "https://registry.npmjs.org/source-map-js/-/source-map-js-1.0.2.tgz",
			"integrity": "sha512-R0XvVJ9WusLiqTCEiGCmICCMplcCkIwwR11mOSD9CR5u+IXYdiseeEuXCVAjS54zqwkLcPNnmU4OeJ6tUrWhDw==",
			"dev": true,
			"engines": {
				"node": ">=0.10.0"
			}
		},
		"node_modules/source-map-loader": {
			"version": "5.0.0",
			"resolved": "https://registry.npmjs.org/source-map-loader/-/source-map-loader-5.0.0.tgz",
			"integrity": "sha512-k2Dur7CbSLcAH73sBcIkV5xjPV4SzqO1NJ7+XaQl8if3VODDUj3FNchNGpqgJSKbvUfJuhVdv8K2Eu8/TNl2eA==",
			"dev": true,
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
			"engines": {
				"node": ">=0.10.0"
			}
		},
		"node_modules/spdx-correct": {
			"version": "3.2.0",
			"resolved": "https://registry.npmjs.org/spdx-correct/-/spdx-correct-3.2.0.tgz",
			"integrity": "sha512-kN9dJbvnySHULIluDHy32WHRUu3Og7B9sbY7tsFLctQkIqnMh3hErYgdMjTYuqmcXX+lK5T1lnUt3G7zNswmZA==",
			"dev": true,
			"dependencies": {
				"spdx-expression-parse": "^3.0.0",
				"spdx-license-ids": "^3.0.0"
			}
		},
		"node_modules/spdx-exceptions": {
			"version": "2.5.0",
			"resolved": "https://registry.npmjs.org/spdx-exceptions/-/spdx-exceptions-2.5.0.tgz",
			"integrity": "sha512-PiU42r+xO4UbUS1buo3LPJkjlO7430Xn5SVAhdpzzsPHsjbYVflnnFdATgabnLude+Cqu25p6N+g2lw/PFsa4w==",
			"dev": true
		},
		"node_modules/spdx-expression-parse": {
			"version": "3.0.1",
			"resolved": "https://registry.npmjs.org/spdx-expression-parse/-/spdx-expression-parse-3.0.1.tgz",
			"integrity": "sha512-cbqHunsQWnJNE6KhVSMsMeH5H/L9EpymbzqTQ3uLwNCLZ1Q481oWaofqH7nO6V07xlXwY6PhQdQ2IedWx/ZK4Q==",
			"dev": true,
			"dependencies": {
				"spdx-exceptions": "^2.1.0",
				"spdx-license-ids": "^3.0.0"
			}
		},
		"node_modules/spdx-license-ids": {
			"version": "3.0.17",
			"resolved": "https://registry.npmjs.org/spdx-license-ids/-/spdx-license-ids-3.0.17.tgz",
			"integrity": "sha512-sh8PWc/ftMqAAdFiBu6Fy6JUOYjqDJBJvIhpfDMyHrr0Rbp5liZqd4TjtQ/RgfLjKFZb+LMx5hpml5qOWy0qvg==",
			"dev": true
		},
		"node_modules/spdy": {
			"version": "4.0.2",
			"resolved": "https://registry.npmjs.org/spdy/-/spdy-4.0.2.tgz",
			"integrity": "sha512-r46gZQZQV+Kl9oItvl1JZZqJKGr+oEkB08A6BzkiR7593/7IbtuncXHd2YoYeTsG4157ZssMu9KYvUHLcjcDoA==",
			"dev": true,
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
			"version": "1.0.3",
			"resolved": "https://registry.npmjs.org/sprintf-js/-/sprintf-js-1.0.3.tgz",
			"integrity": "sha512-D9cPgkvLlV3t3IzL0D0YLvGA9Ahk4PcvVwUbN0dSGr1aP0Nrt4AEnTUbuGvquEC0mA64Gqt1fzirlRs5ibXx8g==",
			"dev": true
		},
		"node_modules/ssri": {
			"version": "10.0.5",
			"resolved": "https://registry.npmjs.org/ssri/-/ssri-10.0.5.tgz",
			"integrity": "sha512-bSf16tAFkGeRlUNDjXu8FzaMQt6g2HZJrun7mtMbIPOddxt3GLMSz5VWUWcqTJUPfLEaDIepGxv+bYQW49596A==",
			"dev": true,
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
			"engines": {
				"node": ">= 0.8"
			}
		},
		"node_modules/string_decoder": {
			"version": "1.3.0",
			"resolved": "https://registry.npmjs.org/string_decoder/-/string_decoder-1.3.0.tgz",
			"integrity": "sha512-hkRX8U1WjJFd8LsDJ2yQ/wWWxaopEsABU1XfkM8A+j0+85JAGppt16cr1Whg6KIbb4okU6Mql6BOj+uup/wKeA==",
			"dev": true,
			"dependencies": {
				"safe-buffer": "~5.2.0"
			}
		},
		"node_modules/string-width": {
			"version": "4.2.3",
			"resolved": "https://registry.npmjs.org/string-width/-/string-width-4.2.3.tgz",
			"integrity": "sha512-wKyQRQpjJ0sIp62ErSZdGsjMJWsap5oRNihHhu6G7JVO/9jIB6UyevL+tXuOqrng8j/cxKTWyWUwvSTriiZz/g==",
			"dev": true,
			"dependencies": {
				"emoji-regex": "^8.0.0",
				"is-fullwidth-code-point": "^3.0.0",
				"strip-ansi": "^6.0.1"
			},
			"engines": {
				"node": ">=8"
			}
		},
		"node_modules/string-width-cjs": {
			"name": "string-width",
			"version": "4.2.3",
			"resolved": "https://registry.npmjs.org/string-width/-/string-width-4.2.3.tgz",
			"integrity": "sha512-wKyQRQpjJ0sIp62ErSZdGsjMJWsap5oRNihHhu6G7JVO/9jIB6UyevL+tXuOqrng8j/cxKTWyWUwvSTriiZz/g==",
			"dev": true,
			"dependencies": {
				"emoji-regex": "^8.0.0",
				"is-fullwidth-code-point": "^3.0.0",
				"strip-ansi": "^6.0.1"
			},
			"engines": {
				"node": ">=8"
			}
		},
		"node_modules/strip-ansi": {
			"version": "6.0.1",
			"resolved": "https://registry.npmjs.org/strip-ansi/-/strip-ansi-6.0.1.tgz",
			"integrity": "sha512-Y38VPSHcqkFrCpFnQ9vuSXmquuv5oXOKpGeT6aGrr3o3Gc9AlVa6JBfUSOCnbxGGZF+/0ooI7KrPuUSztUdU5A==",
			"dev": true,
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
			"engines": {
				"node": ">=6"
			}
		},
		"node_modules/supports-color": {
			"version": "5.5.0",
			"resolved": "https://registry.npmjs.org/supports-color/-/supports-color-5.5.0.tgz",
			"integrity": "sha512-QjVjwdXIt408MIiAqCX4oUKsgU2EqAGzs2Ppkm4aQYbjm+ZEWEcW4SfFNTr4uMNZma0ey4f5lgLrkB0aX0QMow==",
			"dev": true,
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
			"engines": {
				"node": ">=0.10"
			}
		},
		"node_modules/tapable": {
			"version": "2.2.1",
			"resolved": "https://registry.npmjs.org/tapable/-/tapable-2.2.1.tgz",
			"integrity": "sha512-GNzQvQTOIP6RyTfE2Qxb8ZVlNmw0n88vp1szwWRimP02mnTsx3Wtn5qRdqY9w2XduFNUgvOwhNnQsjwCp+kqaQ==",
			"dev": true,
			"engines": {
				"node": ">=6"
			}
		},
		"node_modules/tar": {
			"version": "6.2.0",
			"resolved": "https://registry.npmjs.org/tar/-/tar-6.2.0.tgz",
			"integrity": "sha512-/Wo7DcT0u5HUV486xg675HtjNd3BXZ6xDbzsCUZPt5iw8bTQ63bP0Raut3mvro9u+CUyq7YQd8Cx55fsZXxqLQ==",
			"dev": true,
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
			"engines": {
				"node": ">=8"
			}
		},
		"node_modules/tar/node_modules/yallist": {
			"version": "4.0.0",
			"resolved": "https://registry.npmjs.org/yallist/-/yallist-4.0.0.tgz",
			"integrity": "sha512-3wdGidZyq5PB084XLES5TpOSRA3wjXAlIWMhum2kRcv/41Sn2emQ0dycQW4uZXLejwKvg6EsvbdlVL+FYEct7A==",
			"dev": true
		},
		"node_modules/terser": {
			"version": "5.27.0",
			"resolved": "https://registry.npmjs.org/terser/-/terser-5.27.0.tgz",
			"integrity": "sha512-bi1HRwVRskAjheeYl291n3JC4GgO/Ty4z1nVs5AAsmonJulGxpSektecnNedrwK9C7vpvVtcX3cw00VSLt7U2A==",
			"dev": true,
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
			"peerDependencies": {
				"ajv": "^6.9.1"
			}
		},
		"node_modules/terser-webpack-plugin/node_modules/json-schema-traverse": {
			"version": "0.4.1",
			"resolved": "https://registry.npmjs.org/json-schema-traverse/-/json-schema-traverse-0.4.1.tgz",
			"integrity": "sha512-xbbCH5dCYU5T8LcEhhuh7HJ88HXuW3qsI3Y0zOZFKfZEHcpWiHU/Jxzk629Brsab/mMiHQti9wMP+845RPe3Vg==",
			"dev": true
		},
		"node_modules/terser-webpack-plugin/node_modules/schema-utils": {
			"version": "3.3.0",
			"resolved": "https://registry.npmjs.org/schema-utils/-/schema-utils-3.3.0.tgz",
			"integrity": "sha512-pN/yOAvcC+5rQ5nERGuwrjLlYvLTbCibnZ1I7B1LaiAz9BRBlE9GMgE/eqV30P7aJQUf7Ddimy/RsbYO/GrVGg==",
			"dev": true,
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
		"node_modules/test-exclude": {
			"version": "6.0.0",
			"resolved": "https://registry.npmjs.org/test-exclude/-/test-exclude-6.0.0.tgz",
			"integrity": "sha512-cAGWPIyOHU6zlmg88jwm7VRyXnMN7iV68OGAbYDk/Mh/xC/pzVPlQtY6ngoIH/5/tciuhGfvESU8GrHrcxD56w==",
			"dev": true,
			"dependencies": {
				"@istanbuljs/schema": "^0.1.2",
				"glob": "^7.1.4",
				"minimatch": "^3.0.4"
			},
			"engines": {
				"node": ">=8"
			}
		},
		"node_modules/test-exclude/node_modules/brace-expansion": {
			"version": "1.1.11",
			"resolved": "https://registry.npmjs.org/brace-expansion/-/brace-expansion-1.1.11.tgz",
			"integrity": "sha512-iCuPHDFgrHX7H2vEI/5xpz07zSHB00TpugqhmYtVmMO6518mCuRMoOYFldEBl0g187ufozdaHgWKcYFb61qGiA==",
			"dev": true,
			"dependencies": {
				"balanced-match": "^1.0.0",
				"concat-map": "0.0.1"
			}
		},
		"node_modules/test-exclude/node_modules/glob": {
			"version": "7.2.3",
			"resolved": "https://registry.npmjs.org/glob/-/glob-7.2.3.tgz",
			"integrity": "sha512-nFR0zLpU2YCaRxwoCJvL6UvCH2JFyFVIvwTLsIf21AuHlMskA1hhTdk+LlYJtOlYt9v6dvszD2BGRqBL+iQK9Q==",
			"dev": true,
			"dependencies": {
				"fs.realpath": "^1.0.0",
				"inflight": "^1.0.4",
				"inherits": "2",
				"minimatch": "^3.1.1",
				"once": "^1.3.0",
				"path-is-absolute": "^1.0.0"
			},
			"engines": {
				"node": "*"
			},
			"funding": {
				"url": "https://github.com/sponsors/isaacs"
			}
		},
		"node_modules/test-exclude/node_modules/minimatch": {
			"version": "3.1.2",
			"resolved": "https://registry.npmjs.org/minimatch/-/minimatch-3.1.2.tgz",
			"integrity": "sha512-J7p63hRiAjw1NDEww1W7i37+ByIrOWO5XQQAzZ3VOcL0PNybwpfmV/N05zFAzwQ9USyEcX6t3UO+K5aqBQOIHw==",
			"dev": true,
			"dependencies": {
				"brace-expansion": "^1.1.7"
			},
			"engines": {
				"node": "*"
			}
		},
		"node_modules/thunky": {
			"version": "1.1.0",
			"resolved": "https://registry.npmjs.org/thunky/-/thunky-1.1.0.tgz",
			"integrity": "sha512-eHY7nBftgThBqOyHGVN+l8gF0BucP09fMo0oO/Lb0w1OF80dJv+lDVpXG60WMQvkcxAkNybKsrEIE3ZtKGmPrA==",
			"dev": true
		},
		"node_modules/tmp": {
			"version": "0.0.33",
			"resolved": "https://registry.npmjs.org/tmp/-/tmp-0.0.33.tgz",
			"integrity": "sha512-jRCJlojKnZ3addtTOjdIqoRuPEKBvNXcGYqzO6zWZX8KfKEpnGY5jfggJQ3EjKuu8D4bJRr0y+cYJFmYbImXGw==",
			"dev": true,
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
			"engines": {
				"node": ">=4"
			}
		},
		"node_modules/to-regex-range": {
			"version": "5.0.1",
			"resolved": "https://registry.npmjs.org/to-regex-range/-/to-regex-range-5.0.1.tgz",
			"integrity": "sha512-65P7iz6X5yEr1cwcgvQxbbIw7Uk3gOy5dIdtZ4rDveLqhrdJP+Li/Hx6tyK0NEb+2GCyneCMJiGqrADCSNk8sQ==",
			"dev": true,
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
			"engines": {
				"node": ">=0.6"
			}
		},
		"node_modules/tree-kill": {
			"version": "1.2.2",
			"resolved": "https://registry.npmjs.org/tree-kill/-/tree-kill-1.2.2.tgz",
			"integrity": "sha512-L0Orpi8qGpRG//Nd+H90vFB+3iHnue1zSSGmNOOCh1GLJ7rUKVwV2HvijphGQS2UmhUZewS9VgvxYIdgr+fG1A==",
			"dev": true,
			"bin": {
				"tree-kill": "cli.js"
			}
		},
		"node_modules/tslib": {
			"version": "2.6.2",
			"resolved": "https://registry.npmjs.org/tslib/-/tslib-2.6.2.tgz",
			"integrity": "sha512-AEYxH93jGFPn/a2iVAwW87VuUIkR1FVUKB77NwMF7nBTDkDrrT/Hpt/IrCJ0QXhW27jTBDcf5ZY7w6RiqTMw2Q==",
			"dev": true
		},
		"node_modules/tuf-js": {
			"version": "2.2.0",
			"resolved": "https://registry.npmjs.org/tuf-js/-/tuf-js-2.2.0.tgz",
			"integrity": "sha512-ZSDngmP1z6zw+FIkIBjvOp/II/mIub/O7Pp12j1WNsiCpg5R5wAc//i555bBQsE44O94btLt0xM/Zr2LQjwdCg==",
			"dev": true,
			"dependencies": {
				"@tufjs/models": "2.0.0",
				"debug": "^4.3.4",
				"make-fetch-happen": "^13.0.0"
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
			"dev": true
		},
		"node_modules/typescript": {
			"version": "5.3.3",
			"resolved": "https://registry.npmjs.org/typescript/-/typescript-5.3.3.tgz",
			"integrity": "sha512-pXWcraxM0uxAS+tN0AG/BF2TyqmHO014Z070UsJ+pFvYuRSq8KH8DmWpnbXe0pEPDHXZV3FcAbJkijJ5oNEnWw==",
			"dev": true,
			"bin": {
				"tsc": "bin/tsc",
				"tsserver": "bin/tsserver"
			},
			"engines": {
				"node": ">=14.17"
			}
		},
		"node_modules/undici": {
			"version": "6.6.2",
			"resolved": "https://registry.npmjs.org/undici/-/undici-6.6.2.tgz",
			"integrity": "sha512-vSqvUE5skSxQJ5sztTZ/CdeJb1Wq0Hf44hlYMciqHghvz+K88U0l7D6u1VsndoFgskDcnU+nG3gYmMzJVzd9Qg==",
			"dev": true,
			"dependencies": {
				"@fastify/busboy": "^2.0.0"
			},
			"engines": {
				"node": ">=18.0"
			}
		},
		"node_modules/undici-types": {
			"version": "5.26.5",
			"resolved": "https://registry.npmjs.org/undici-types/-/undici-types-5.26.5.tgz",
			"integrity": "sha512-JlCMO+ehdEIKqlFxk6IfVoAUVmgz7cU7zD/h9XZ0qzeosSHmUJVOzSQvvYSYWXkFXC+IfLKSIffhv0sVZup6pA==",
			"dev": true
		},
		"node_modules/unicode-canonical-property-names-ecmascript": {
			"version": "2.0.0",
			"resolved": "https://registry.npmjs.org/unicode-canonical-property-names-ecmascript/-/unicode-canonical-property-names-ecmascript-2.0.0.tgz",
			"integrity": "sha512-yY5PpDlfVIU5+y/BSCxAJRBIS1Zc2dDG3Ujq+sR0U+JjUevW2JhocOF+soROYDSaAezOzOKuyyixhD6mBknSmQ==",
			"dev": true,
			"engines": {
				"node": ">=4"
			}
		},
		"node_modules/unicode-match-property-ecmascript": {
			"version": "2.0.0",
			"resolved": "https://registry.npmjs.org/unicode-match-property-ecmascript/-/unicode-match-property-ecmascript-2.0.0.tgz",
			"integrity": "sha512-5kaZCrbp5mmbz5ulBkDkbY0SsPOjKqVS35VpL9ulMPfSl0J0Xsm+9Evphv9CoIZFwre7aJoa94AY6seMKGVN5Q==",
			"dev": true,
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
			"engines": {
				"node": ">=4"
			}
		},
		"node_modules/unicode-property-aliases-ecmascript": {
			"version": "2.1.0",
			"resolved": "https://registry.npmjs.org/unicode-property-aliases-ecmascript/-/unicode-property-aliases-ecmascript-2.1.0.tgz",
			"integrity": "sha512-6t3foTQI9qne+OZoVQB/8x8rk2k1eVy1gRXhV3oFQ5T6R1dqQ1xtin3XqSlx3+ATBkliTaR/hHyJBm+LVPNM8w==",
			"dev": true,
			"engines": {
				"node": ">=4"
			}
		},
		"node_modules/unique-filename": {
			"version": "3.0.0",
			"resolved": "https://registry.npmjs.org/unique-filename/-/unique-filename-3.0.0.tgz",
			"integrity": "sha512-afXhuC55wkAmZ0P18QsVE6kp8JaxrEokN2HGIoIVv2ijHQd419H0+6EigAFcIzXeMIkcIkNBpB3L/DXB3cTS/g==",
			"dev": true,
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
			"engines": {
				"node": ">= 0.8"
			}
		},
		"node_modules/update-browserslist-db": {
			"version": "1.0.13",
			"resolved": "https://registry.npmjs.org/update-browserslist-db/-/update-browserslist-db-1.0.13.tgz",
			"integrity": "sha512-xebP81SNcPuNpPP3uzeW1NYXxI3rxyJzF3pD6sH4jE7o/IX+WtSpwnVU+qIsDPyk0d3hmFQ7mjqc6AtV604hbg==",
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
			"dependencies": {
				"escalade": "^3.1.1",
				"picocolors": "^1.0.0"
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
			"dependencies": {
				"punycode": "^2.1.0"
			}
		},
		"node_modules/util-deprecate": {
			"version": "1.0.2",
			"resolved": "https://registry.npmjs.org/util-deprecate/-/util-deprecate-1.0.2.tgz",
			"integrity": "sha512-EPD5q1uXyFxJpCrLnCc1nHnq3gOa6DZBocAIiI2TaSCA7VCJ1UJDMagCzIkXNsUYfD1daK//LTEQ8xiIbrHtcw==",
			"dev": true
		},
		"node_modules/utils-merge": {
			"version": "1.0.1",
			"resolved": "https://registry.npmjs.org/utils-merge/-/utils-merge-1.0.1.tgz",
			"integrity": "sha512-pMZTvIkT1d+TFGvDOqodOclx0QWkkgi6Tdoa8gC8ffGAAqz9pzPTZWAybbsHHoED/ztMtkv/VoYTYyShUn81hA==",
			"dev": true,
			"engines": {
				"node": ">= 0.4.0"
			}
		},
		"node_modules/uuid": {
			"version": "8.3.2",
			"resolved": "https://registry.npmjs.org/uuid/-/uuid-8.3.2.tgz",
			"integrity": "sha512-+NYs2QeMWy+GWFOEm9xnn6HCDp0l7QBD7ml8zLUmJ+93Q5NF0NocErnwkTkXVFNiX3/fpC6afS8Dhb/gz7R7eg==",
			"dev": true,
			"bin": {
				"uuid": "dist/bin/uuid"
			}
		},
		"node_modules/validate-npm-package-license": {
			"version": "3.0.4",
			"resolved": "https://registry.npmjs.org/validate-npm-package-license/-/validate-npm-package-license-3.0.4.tgz",
			"integrity": "sha512-DpKm2Ui/xN7/HQKCtpZxoRWBhZ9Z0kqtygG8XCgNQ8ZlDnxuQmWhj566j8fN4Cu3/JmbhsDo7fcAJq4s9h27Ew==",
			"dev": true,
			"dependencies": {
				"spdx-correct": "^3.0.0",
				"spdx-expression-parse": "^3.0.0"
			}
		},
		"node_modules/validate-npm-package-name": {
			"version": "5.0.0",
			"resolved": "https://registry.npmjs.org/validate-npm-package-name/-/validate-npm-package-name-5.0.0.tgz",
			"integrity": "sha512-YuKoXDAhBYxY7SfOKxHBDoSyENFeW5VvIIQp2TGQuit8gpK6MnWaQelBKxso72DoxTZfZdcP3W90LqpSkgPzLQ==",
			"dev": true,
			"dependencies": {
				"builtins": "^5.0.0"
			},
			"engines": {
				"node": "^14.17.0 || ^16.13.0 || >=18.0.0"
			}
		},
		"node_modules/vary": {
			"version": "1.1.2",
			"resolved": "https://registry.npmjs.org/vary/-/vary-1.1.2.tgz",
			"integrity": "sha512-BNGbWLfd0eUPabhkXUVm0j8uuvREyTh5ovRa/dyow/BqAbZJyC+5fU+IzQOzmAKzYqYRAISoRhdQr3eIZ/PXqg==",
			"dev": true,
			"engines": {
				"node": ">= 0.8"
			}
		},
		"node_modules/vite": {
			"version": "5.0.12",
			"resolved": "https://registry.npmjs.org/vite/-/vite-5.0.12.tgz",
			"integrity": "sha512-4hsnEkG3q0N4Tzf1+t6NdN9dg/L3BM+q8SWgbSPnJvrgH2kgdyzfVJwbR1ic69/4uMJJ/3dqDZZE5/WwqW8U1w==",
			"dev": true,
			"dependencies": {
				"esbuild": "^0.19.3",
				"postcss": "^8.4.32",
				"rollup": "^4.2.0"
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
			"version": "0.19.12",
			"resolved": "https://registry.npmjs.org/@esbuild/aix-ppc64/-/aix-ppc64-0.19.12.tgz",
			"integrity": "sha512-bmoCYyWdEL3wDQIVbcyzRyeKLgk2WtWLTWz1ZIAZF/EGbNOwSA6ew3PftJ1PqMiOOGu0OyFMzG53L0zqIpPeNA==",
			"cpu": [
				"ppc64"
			],
			"dev": true,
			"optional": true,
			"os": [
				"aix"
			],
			"engines": {
				"node": ">=12"
			}
		},
		"node_modules/vite/node_modules/@esbuild/android-arm": {
			"version": "0.19.12",
			"resolved": "https://registry.npmjs.org/@esbuild/android-arm/-/android-arm-0.19.12.tgz",
			"integrity": "sha512-qg/Lj1mu3CdQlDEEiWrlC4eaPZ1KztwGJ9B6J+/6G+/4ewxJg7gqj8eVYWvao1bXrqGiW2rsBZFSX3q2lcW05w==",
			"cpu": [
				"arm"
			],
			"dev": true,
			"optional": true,
			"os": [
				"android"
			],
			"engines": {
				"node": ">=12"
			}
		},
		"node_modules/vite/node_modules/@esbuild/android-arm64": {
			"version": "0.19.12",
			"resolved": "https://registry.npmjs.org/@esbuild/android-arm64/-/android-arm64-0.19.12.tgz",
			"integrity": "sha512-P0UVNGIienjZv3f5zq0DP3Nt2IE/3plFzuaS96vihvD0Hd6H/q4WXUGpCxD/E8YrSXfNyRPbpTq+T8ZQioSuPA==",
			"cpu": [
				"arm64"
			],
			"dev": true,
			"optional": true,
			"os": [
				"android"
			],
			"engines": {
				"node": ">=12"
			}
		},
		"node_modules/vite/node_modules/@esbuild/android-x64": {
			"version": "0.19.12",
			"resolved": "https://registry.npmjs.org/@esbuild/android-x64/-/android-x64-0.19.12.tgz",
			"integrity": "sha512-3k7ZoUW6Q6YqhdhIaq/WZ7HwBpnFBlW905Fa4s4qWJyiNOgT1dOqDiVAQFwBH7gBRZr17gLrlFCRzF6jFh7Kew==",
			"cpu": [
				"x64"
			],
			"dev": true,
			"optional": true,
			"os": [
				"android"
			],
			"engines": {
				"node": ">=12"
			}
		},
		"node_modules/vite/node_modules/@esbuild/darwin-arm64": {
			"version": "0.19.12",
			"resolved": "https://registry.npmjs.org/@esbuild/darwin-arm64/-/darwin-arm64-0.19.12.tgz",
			"integrity": "sha512-B6IeSgZgtEzGC42jsI+YYu9Z3HKRxp8ZT3cqhvliEHovq8HSX2YX8lNocDn79gCKJXOSaEot9MVYky7AKjCs8g==",
			"cpu": [
				"arm64"
			],
			"dev": true,
			"optional": true,
			"os": [
				"darwin"
			],
			"engines": {
				"node": ">=12"
			}
		},
		"node_modules/vite/node_modules/@esbuild/darwin-x64": {
			"version": "0.19.12",
			"resolved": "https://registry.npmjs.org/@esbuild/darwin-x64/-/darwin-x64-0.19.12.tgz",
			"integrity": "sha512-hKoVkKzFiToTgn+41qGhsUJXFlIjxI/jSYeZf3ugemDYZldIXIxhvwN6erJGlX4t5h417iFuheZ7l+YVn05N3A==",
			"cpu": [
				"x64"
			],
			"dev": true,
			"optional": true,
			"os": [
				"darwin"
			],
			"engines": {
				"node": ">=12"
			}
		},
		"node_modules/vite/node_modules/@esbuild/freebsd-arm64": {
			"version": "0.19.12",
			"resolved": "https://registry.npmjs.org/@esbuild/freebsd-arm64/-/freebsd-arm64-0.19.12.tgz",
			"integrity": "sha512-4aRvFIXmwAcDBw9AueDQ2YnGmz5L6obe5kmPT8Vd+/+x/JMVKCgdcRwH6APrbpNXsPz+K653Qg8HB/oXvXVukA==",
			"cpu": [
				"arm64"
			],
			"dev": true,
			"optional": true,
			"os": [
				"freebsd"
			],
			"engines": {
				"node": ">=12"
			}
		},
		"node_modules/vite/node_modules/@esbuild/freebsd-x64": {
			"version": "0.19.12",
			"resolved": "https://registry.npmjs.org/@esbuild/freebsd-x64/-/freebsd-x64-0.19.12.tgz",
			"integrity": "sha512-EYoXZ4d8xtBoVN7CEwWY2IN4ho76xjYXqSXMNccFSx2lgqOG/1TBPW0yPx1bJZk94qu3tX0fycJeeQsKovA8gg==",
			"cpu": [
				"x64"
			],
			"dev": true,
			"optional": true,
			"os": [
				"freebsd"
			],
			"engines": {
				"node": ">=12"
			}
		},
		"node_modules/vite/node_modules/@esbuild/linux-arm": {
			"version": "0.19.12",
			"resolved": "https://registry.npmjs.org/@esbuild/linux-arm/-/linux-arm-0.19.12.tgz",
			"integrity": "sha512-J5jPms//KhSNv+LO1S1TX1UWp1ucM6N6XuL6ITdKWElCu8wXP72l9MM0zDTzzeikVyqFE6U8YAV9/tFyj0ti+w==",
			"cpu": [
				"arm"
			],
			"dev": true,
			"optional": true,
			"os": [
				"linux"
			],
			"engines": {
				"node": ">=12"
			}
		},
		"node_modules/vite/node_modules/@esbuild/linux-arm64": {
			"version": "0.19.12",
			"resolved": "https://registry.npmjs.org/@esbuild/linux-arm64/-/linux-arm64-0.19.12.tgz",
			"integrity": "sha512-EoTjyYyLuVPfdPLsGVVVC8a0p1BFFvtpQDB/YLEhaXyf/5bczaGeN15QkR+O4S5LeJ92Tqotve7i1jn35qwvdA==",
			"cpu": [
				"arm64"
			],
			"dev": true,
			"optional": true,
			"os": [
				"linux"
			],
			"engines": {
				"node": ">=12"
			}
		},
		"node_modules/vite/node_modules/@esbuild/linux-ia32": {
			"version": "0.19.12",
			"resolved": "https://registry.npmjs.org/@esbuild/linux-ia32/-/linux-ia32-0.19.12.tgz",
			"integrity": "sha512-Thsa42rrP1+UIGaWz47uydHSBOgTUnwBwNq59khgIwktK6x60Hivfbux9iNR0eHCHzOLjLMLfUMLCypBkZXMHA==",
			"cpu": [
				"ia32"
			],
			"dev": true,
			"optional": true,
			"os": [
				"linux"
			],
			"engines": {
				"node": ">=12"
			}
		},
		"node_modules/vite/node_modules/@esbuild/linux-loong64": {
			"version": "0.19.12",
			"resolved": "https://registry.npmjs.org/@esbuild/linux-loong64/-/linux-loong64-0.19.12.tgz",
			"integrity": "sha512-LiXdXA0s3IqRRjm6rV6XaWATScKAXjI4R4LoDlvO7+yQqFdlr1Bax62sRwkVvRIrwXxvtYEHHI4dm50jAXkuAA==",
			"cpu": [
				"loong64"
			],
			"dev": true,
			"optional": true,
			"os": [
				"linux"
			],
			"engines": {
				"node": ">=12"
			}
		},
		"node_modules/vite/node_modules/@esbuild/linux-mips64el": {
			"version": "0.19.12",
			"resolved": "https://registry.npmjs.org/@esbuild/linux-mips64el/-/linux-mips64el-0.19.12.tgz",
			"integrity": "sha512-fEnAuj5VGTanfJ07ff0gOA6IPsvrVHLVb6Lyd1g2/ed67oU1eFzL0r9WL7ZzscD+/N6i3dWumGE1Un4f7Amf+w==",
			"cpu": [
				"mips64el"
			],
			"dev": true,
			"optional": true,
			"os": [
				"linux"
			],
			"engines": {
				"node": ">=12"
			}
		},
		"node_modules/vite/node_modules/@esbuild/linux-ppc64": {
			"version": "0.19.12",
			"resolved": "https://registry.npmjs.org/@esbuild/linux-ppc64/-/linux-ppc64-0.19.12.tgz",
			"integrity": "sha512-nYJA2/QPimDQOh1rKWedNOe3Gfc8PabU7HT3iXWtNUbRzXS9+vgB0Fjaqr//XNbd82mCxHzik2qotuI89cfixg==",
			"cpu": [
				"ppc64"
			],
			"dev": true,
			"optional": true,
			"os": [
				"linux"
			],
			"engines": {
				"node": ">=12"
			}
		},
		"node_modules/vite/node_modules/@esbuild/linux-riscv64": {
			"version": "0.19.12",
			"resolved": "https://registry.npmjs.org/@esbuild/linux-riscv64/-/linux-riscv64-0.19.12.tgz",
			"integrity": "sha512-2MueBrlPQCw5dVJJpQdUYgeqIzDQgw3QtiAHUC4RBz9FXPrskyyU3VI1hw7C0BSKB9OduwSJ79FTCqtGMWqJHg==",
			"cpu": [
				"riscv64"
			],
			"dev": true,
			"optional": true,
			"os": [
				"linux"
			],
			"engines": {
				"node": ">=12"
			}
		},
		"node_modules/vite/node_modules/@esbuild/linux-s390x": {
			"version": "0.19.12",
			"resolved": "https://registry.npmjs.org/@esbuild/linux-s390x/-/linux-s390x-0.19.12.tgz",
			"integrity": "sha512-+Pil1Nv3Umes4m3AZKqA2anfhJiVmNCYkPchwFJNEJN5QxmTs1uzyy4TvmDrCRNT2ApwSari7ZIgrPeUx4UZDg==",
			"cpu": [
				"s390x"
			],
			"dev": true,
			"optional": true,
			"os": [
				"linux"
			],
			"engines": {
				"node": ">=12"
			}
		},
		"node_modules/vite/node_modules/@esbuild/linux-x64": {
			"version": "0.19.12",
			"resolved": "https://registry.npmjs.org/@esbuild/linux-x64/-/linux-x64-0.19.12.tgz",
			"integrity": "sha512-B71g1QpxfwBvNrfyJdVDexenDIt1CiDN1TIXLbhOw0KhJzE78KIFGX6OJ9MrtC0oOqMWf+0xop4qEU8JrJTwCg==",
			"cpu": [
				"x64"
			],
			"dev": true,
			"optional": true,
			"os": [
				"linux"
			],
			"engines": {
				"node": ">=12"
			}
		},
		"node_modules/vite/node_modules/@esbuild/netbsd-x64": {
			"version": "0.19.12",
			"resolved": "https://registry.npmjs.org/@esbuild/netbsd-x64/-/netbsd-x64-0.19.12.tgz",
			"integrity": "sha512-3ltjQ7n1owJgFbuC61Oj++XhtzmymoCihNFgT84UAmJnxJfm4sYCiSLTXZtE00VWYpPMYc+ZQmB6xbSdVh0JWA==",
			"cpu": [
				"x64"
			],
			"dev": true,
			"optional": true,
			"os": [
				"netbsd"
			],
			"engines": {
				"node": ">=12"
			}
		},
		"node_modules/vite/node_modules/@esbuild/openbsd-x64": {
			"version": "0.19.12",
			"resolved": "https://registry.npmjs.org/@esbuild/openbsd-x64/-/openbsd-x64-0.19.12.tgz",
			"integrity": "sha512-RbrfTB9SWsr0kWmb9srfF+L933uMDdu9BIzdA7os2t0TXhCRjrQyCeOt6wVxr79CKD4c+p+YhCj31HBkYcXebw==",
			"cpu": [
				"x64"
			],
			"dev": true,
			"optional": true,
			"os": [
				"openbsd"
			],
			"engines": {
				"node": ">=12"
			}
		},
		"node_modules/vite/node_modules/@esbuild/sunos-x64": {
			"version": "0.19.12",
			"resolved": "https://registry.npmjs.org/@esbuild/sunos-x64/-/sunos-x64-0.19.12.tgz",
			"integrity": "sha512-HKjJwRrW8uWtCQnQOz9qcU3mUZhTUQvi56Q8DPTLLB+DawoiQdjsYq+j+D3s9I8VFtDr+F9CjgXKKC4ss89IeA==",
			"cpu": [
				"x64"
			],
			"dev": true,
			"optional": true,
			"os": [
				"sunos"
			],
			"engines": {
				"node": ">=12"
			}
		},
		"node_modules/vite/node_modules/@esbuild/win32-arm64": {
			"version": "0.19.12",
			"resolved": "https://registry.npmjs.org/@esbuild/win32-arm64/-/win32-arm64-0.19.12.tgz",
			"integrity": "sha512-URgtR1dJnmGvX864pn1B2YUYNzjmXkuJOIqG2HdU62MVS4EHpU2946OZoTMnRUHklGtJdJZ33QfzdjGACXhn1A==",
			"cpu": [
				"arm64"
			],
			"dev": true,
			"optional": true,
			"os": [
				"win32"
			],
			"engines": {
				"node": ">=12"
			}
		},
		"node_modules/vite/node_modules/@esbuild/win32-ia32": {
			"version": "0.19.12",
			"resolved": "https://registry.npmjs.org/@esbuild/win32-ia32/-/win32-ia32-0.19.12.tgz",
			"integrity": "sha512-+ZOE6pUkMOJfmxmBZElNOx72NKpIa/HFOMGzu8fqzQJ5kgf6aTGrcJaFsNiVMH4JKpMipyK+7k0n2UXN7a8YKQ==",
			"cpu": [
				"ia32"
			],
			"dev": true,
			"optional": true,
			"os": [
				"win32"
			],
			"engines": {
				"node": ">=12"
			}
		},
		"node_modules/vite/node_modules/@esbuild/win32-x64": {
			"version": "0.19.12",
			"resolved": "https://registry.npmjs.org/@esbuild/win32-x64/-/win32-x64-0.19.12.tgz",
			"integrity": "sha512-T1QyPSDCyMXaO3pzBkF96E8xMkiRYbUEZADd29SyPGabqxMViNoii+NcK7eWJAEoU6RZyEm5lVSIjTmcdoB9HA==",
			"cpu": [
				"x64"
			],
			"dev": true,
			"optional": true,
			"os": [
				"win32"
			],
			"engines": {
				"node": ">=12"
			}
		},
		"node_modules/vite/node_modules/esbuild": {
			"version": "0.19.12",
			"resolved": "https://registry.npmjs.org/esbuild/-/esbuild-0.19.12.tgz",
			"integrity": "sha512-aARqgq8roFBj054KvQr5f1sFu0D65G+miZRCuJyJ0G13Zwx7vRar5Zhn2tkQNzIXcBrNVsv/8stehpj+GAjgbg==",
			"dev": true,
			"hasInstallScript": true,
			"bin": {
				"esbuild": "bin/esbuild"
			},
			"engines": {
				"node": ">=12"
			},
			"optionalDependencies": {
				"@esbuild/aix-ppc64": "0.19.12",
				"@esbuild/android-arm": "0.19.12",
				"@esbuild/android-arm64": "0.19.12",
				"@esbuild/android-x64": "0.19.12",
				"@esbuild/darwin-arm64": "0.19.12",
				"@esbuild/darwin-x64": "0.19.12",
				"@esbuild/freebsd-arm64": "0.19.12",
				"@esbuild/freebsd-x64": "0.19.12",
				"@esbuild/linux-arm": "0.19.12",
				"@esbuild/linux-arm64": "0.19.12",
				"@esbuild/linux-ia32": "0.19.12",
				"@esbuild/linux-loong64": "0.19.12",
				"@esbuild/linux-mips64el": "0.19.12",
				"@esbuild/linux-ppc64": "0.19.12",
				"@esbuild/linux-riscv64": "0.19.12",
				"@esbuild/linux-s390x": "0.19.12",
				"@esbuild/linux-x64": "0.19.12",
				"@esbuild/netbsd-x64": "0.19.12",
				"@esbuild/openbsd-x64": "0.19.12",
				"@esbuild/sunos-x64": "0.19.12",
				"@esbuild/win32-arm64": "0.19.12",
				"@esbuild/win32-ia32": "0.19.12",
				"@esbuild/win32-x64": "0.19.12"
			}
		},
		"node_modules/watchpack": {
			"version": "2.4.0",
			"resolved": "https://registry.npmjs.org/watchpack/-/watchpack-2.4.0.tgz",
			"integrity": "sha512-Lcvm7MGST/4fup+ifyKi2hjyIAwcdI4HRgtvTpIUxBRhB+RFtUh8XtDOxUfctVCnhVi+QQj49i91OyvzkJl6cg==",
			"dev": true,
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
			"dependencies": {
				"minimalistic-assert": "^1.0.0"
			}
		},
		"node_modules/wcwidth": {
			"version": "1.0.1",
			"resolved": "https://registry.npmjs.org/wcwidth/-/wcwidth-1.0.1.tgz",
			"integrity": "sha512-XHPEwS0q6TaxcvG85+8EYkbiCux2XtWG2mkc47Ng2A77BQu9+DqIOJldST4HgPkuea7dvKSj5VgX3P1d4rW8Tg==",
			"dev": true,
			"dependencies": {
				"defaults": "^1.0.3"
			}
		},
		"node_modules/webpack": {
			"version": "5.90.1",
			"resolved": "https://registry.npmjs.org/webpack/-/webpack-5.90.1.tgz",
			"integrity": "sha512-SstPdlAC5IvgFnhiRok8hqJo/+ArAbNv7rhU4fnWGHNVfN59HSQFaxZDSAL3IFG2YmqxuRs+IU33milSxbPlog==",
			"dev": true,
			"dependencies": {
				"@types/eslint-scope": "^3.7.3",
				"@types/estree": "^1.0.5",
				"@webassemblyjs/ast": "^1.11.5",
				"@webassemblyjs/wasm-edit": "^1.11.5",
				"@webassemblyjs/wasm-parser": "^1.11.5",
				"acorn": "^8.7.1",
				"acorn-import-assertions": "^1.9.0",
				"browserslist": "^4.21.10",
				"chrome-trace-event": "^1.0.2",
				"enhanced-resolve": "^5.15.0",
				"es-module-lexer": "^1.2.1",
				"eslint-scope": "5.1.1",
				"events": "^3.2.0",
				"glob-to-regexp": "^0.4.1",
				"graceful-fs": "^4.2.9",
				"json-parse-even-better-errors": "^2.3.1",
				"loader-runner": "^4.2.0",
				"mime-types": "^2.1.27",
				"neo-async": "^2.6.2",
				"schema-utils": "^3.2.0",
				"tapable": "^2.1.1",
				"terser-webpack-plugin": "^5.3.10",
				"watchpack": "^2.4.0",
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
			"version": "6.1.1",
			"resolved": "https://registry.npmjs.org/webpack-dev-middleware/-/webpack-dev-middleware-6.1.1.tgz",
			"integrity": "sha512-y51HrHaFeeWir0YO4f0g+9GwZawuigzcAdRNon6jErXy/SqV/+O6eaVAzDqE6t3e3NpGeR5CS+cCDaTC+V3yEQ==",
			"dev": true,
			"dependencies": {
				"colorette": "^2.0.10",
				"memfs": "^3.4.12",
				"mime-types": "^2.1.31",
				"range-parser": "^1.2.1",
				"schema-utils": "^4.0.0"
			},
			"engines": {
				"node": ">= 14.15.0"
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
			"version": "4.15.1",
			"resolved": "https://registry.npmjs.org/webpack-dev-server/-/webpack-dev-server-4.15.1.tgz",
			"integrity": "sha512-5hbAst3h3C3L8w6W4P96L5vaV0PxSmJhxZvWKYIdgxOQm8pNZ5dEOmmSLBVpP85ReeyRt6AS1QJNyo/oFFPeVA==",
			"dev": true,
			"dependencies": {
				"@types/bonjour": "^3.5.9",
				"@types/connect-history-api-fallback": "^1.3.5",
				"@types/express": "^4.17.13",
				"@types/serve-index": "^1.9.1",
				"@types/serve-static": "^1.13.10",
				"@types/sockjs": "^0.3.33",
				"@types/ws": "^8.5.5",
				"ansi-html-community": "^0.0.8",
				"bonjour-service": "^1.0.11",
				"chokidar": "^3.5.3",
				"colorette": "^2.0.10",
				"compression": "^1.7.4",
				"connect-history-api-fallback": "^2.0.0",
				"default-gateway": "^6.0.3",
				"express": "^4.17.3",
				"graceful-fs": "^4.2.6",
				"html-entities": "^2.3.2",
				"http-proxy-middleware": "^2.0.3",
				"ipaddr.js": "^2.0.1",
				"launch-editor": "^2.6.0",
				"open": "^8.0.9",
				"p-retry": "^4.5.0",
				"rimraf": "^3.0.2",
				"schema-utils": "^4.0.0",
				"selfsigned": "^2.1.1",
				"serve-index": "^1.9.1",
				"sockjs": "^0.3.24",
				"spdy": "^4.0.2",
				"webpack-dev-middleware": "^5.3.1",
				"ws": "^8.13.0"
			},
			"bin": {
				"webpack-dev-server": "bin/webpack-dev-server.js"
			},
			"engines": {
				"node": ">= 12.13.0"
			},
			"funding": {
				"type": "opencollective",
				"url": "https://opencollective.com/webpack"
			},
			"peerDependencies": {
				"webpack": "^4.37.0 || ^5.0.0"
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
		"node_modules/webpack-dev-server/node_modules/webpack-dev-middleware": {
			"version": "5.3.3",
			"resolved": "https://registry.npmjs.org/webpack-dev-middleware/-/webpack-dev-middleware-5.3.3.tgz",
			"integrity": "sha512-hj5CYrY0bZLB+eTO+x/j67Pkrquiy7kWepMHmUMoPsmcUaeEnQJqFzHJOyxgWlq746/wUuA64p9ta34Kyb01pA==",
			"dev": true,
			"dependencies": {
				"colorette": "^2.0.10",
				"memfs": "^3.4.3",
				"mime-types": "^2.1.31",
				"range-parser": "^1.2.1",
				"schema-utils": "^4.0.0"
			},
			"engines": {
				"node": ">= 12.13.0"
			},
			"funding": {
				"type": "opencollective",
				"url": "https://opencollective.com/webpack"
			},
			"peerDependencies": {
				"webpack": "^4.0.0 || ^5.0.0"
			}
		},
		"node_modules/webpack-merge": {
			"version": "5.10.0",
			"resolved": "https://registry.npmjs.org/webpack-merge/-/webpack-merge-5.10.0.tgz",
			"integrity": "sha512-+4zXKdx7UnO+1jaN4l2lHVD+mFvnlZQP/6ljaJVb4SZiwIKeUnrT5l0gkT8z+n4hKpC+jpOv6O9R+gLtag7pSA==",
			"dev": true,
			"dependencies": {
				"clone-deep": "^4.0.1",
				"flat": "^5.0.2",
				"wildcard": "^2.0.0"
			},
			"engines": {
				"node": ">=10.0.0"
			}
		},
		"node_modules/webpack-sources": {
			"version": "3.2.3",
			"resolved": "https://registry.npmjs.org/webpack-sources/-/webpack-sources-3.2.3.tgz",
			"integrity": "sha512-/DyMEOrDgLKKIG0fmvtz+4dUX/3Ghozwgm6iPp8KRhvn+eQf9+Q7GWxVNMk3+uCPWfdXYC4ExGBckIXdFEfH1w==",
			"dev": true,
			"engines": {
				"node": ">=10.13.0"
			}
		},
		"node_modules/webpack-subresource-integrity": {
			"version": "5.1.0",
			"resolved": "https://registry.npmjs.org/webpack-subresource-integrity/-/webpack-subresource-integrity-5.1.0.tgz",
			"integrity": "sha512-sacXoX+xd8r4WKsy9MvH/q/vBtEHr86cpImXwyg74pFIpERKt6FmB8cXpeuh0ZLgclOlHI4Wcll7+R5L02xk9Q==",
			"dev": true,
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
			"peerDependencies": {
				"ajv": "^6.9.1"
			}
		},
		"node_modules/webpack/node_modules/json-parse-even-better-errors": {
			"version": "2.3.1",
			"resolved": "https://registry.npmjs.org/json-parse-even-better-errors/-/json-parse-even-better-errors-2.3.1.tgz",
			"integrity": "sha512-xyFwyhro/JEof6Ghe2iz2NcXoj2sloNsWr/XsERDK/oiPCfaNhl5ONfp+jQdAZRQQ0IJWNzH9zIZF7li91kh2w==",
			"dev": true
		},
		"node_modules/webpack/node_modules/json-schema-traverse": {
			"version": "0.4.1",
			"resolved": "https://registry.npmjs.org/json-schema-traverse/-/json-schema-traverse-0.4.1.tgz",
			"integrity": "sha512-xbbCH5dCYU5T8LcEhhuh7HJ88HXuW3qsI3Y0zOZFKfZEHcpWiHU/Jxzk629Brsab/mMiHQti9wMP+845RPe3Vg==",
			"dev": true
		},
		"node_modules/webpack/node_modules/schema-utils": {
			"version": "3.3.0",
			"resolved": "https://registry.npmjs.org/schema-utils/-/schema-utils-3.3.0.tgz",
			"integrity": "sha512-pN/yOAvcC+5rQ5nERGuwrjLlYvLTbCibnZ1I7B1LaiAz9BRBlE9GMgE/eqV30P7aJQUf7Ddimy/RsbYO/GrVGg==",
			"dev": true,
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
			"engines": {
				"node": ">=0.8.0"
			}
		},
		"node_modules/which": {
			"version": "4.0.0",
			"resolved": "https://registry.npmjs.org/which/-/which-4.0.0.tgz",
			"integrity": "sha512-GlaYyEb07DPxYCKhKzplCWBJtvxZcZMrL+4UkrTSJHHPyZU4mYYTv3qaOe77H7EODLSSopAUFAc6W8U4yqvscg==",
			"dev": true,
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
			"dev": true
		},
		"node_modules/wrap-ansi": {
			"version": "6.2.0",
			"resolved": "https://registry.npmjs.org/wrap-ansi/-/wrap-ansi-6.2.0.tgz",
			"integrity": "sha512-r6lPcBGxZXlIcymEu7InxDMhdW0KDxpLgoFLcguasxCaJ/SOIZwINatK9KY/tf+ZrlywOKU0UDj3ATXUBfxJXA==",
			"dev": true,
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
			"dev": true
		},
		"node_modules/wrap-ansi/node_modules/ansi-styles": {
			"version": "4.3.0",
			"resolved": "https://registry.npmjs.org/ansi-styles/-/ansi-styles-4.3.0.tgz",
			"integrity": "sha512-zbB9rCJAT1rbjiVDb2hqKFHNYLxgtk8NURxZ3IZwD3F6NtxbXZQCnnSi1Lkx+IDohdPlFp222wVALIheZJQSEg==",
			"dev": true,
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
			"dev": true
		},
		"node_modules/wrappy": {
			"version": "1.0.2",
			"resolved": "https://registry.npmjs.org/wrappy/-/wrappy-1.0.2.tgz",
			"integrity": "sha512-l4Sp/DRseor9wL6EvV2+TuQn63dMkPjZ/sp9XkghTEbV9KlPS1xUsZ3u7/IQO4wxtcFB4bgpQPRcR3QCvezPcQ==",
			"dev": true
		},
		"node_modules/ws": {
			"version": "8.16.0",
			"resolved": "https://registry.npmjs.org/ws/-/ws-8.16.0.tgz",
			"integrity": "sha512-HS0c//TP7Ina87TfiPUz1rQzMhHrl/SG2guqRcTOIUYD2q8uhUdNHZYJUaQ8aTGPzCh+c6oawMKW35nFl1dxyQ==",
			"dev": true,
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
			"engines": {
				"node": ">=10"
			}
		},
		"node_modules/yallist": {
			"version": "3.1.1",
			"resolved": "https://registry.npmjs.org/yallist/-/yallist-3.1.1.tgz",
			"integrity": "sha512-a4UGQaWPH59mOXUYnAG2ewncQS4i4F43Tv3JoAM+s2VDAmS9NsK8GpDMLrCHPksFT7h3K6TOoUNn2pb7RoXx4g==",
			"dev": true
		},
		"node_modules/yargs": {
			"version": "17.7.2",
			"resolved": "https://registry.npmjs.org/yargs/-/yargs-17.7.2.tgz",
			"integrity": "sha512-7dSzzRQ++CKnNI/krKnYRV7JKKPUXMEh61soaHKg9mrWEhzFWhFnxPxGl+69cD1Ou63C13NUPCnmIcrvqCuM6w==",
			"dev": true,
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
			"engines": {
				"node": ">=12"
			}
		},
		"node_modules/yocto-queue": {
			"version": "1.0.0",
			"resolved": "https://registry.npmjs.org/yocto-queue/-/yocto-queue-1.0.0.tgz",
			"integrity": "sha512-9bnSc/HEW2uRy67wc+T8UwauLuPJVn28jb+GtJY16iiKWyvmYJRXVT4UamsAEGQfPohgr2q4Tq0sQbQlxTfi1g==",
			"dev": true,
			"engines": {
				"node": ">=12.20"
			},
			"funding": {
				"url": "https://github.com/sponsors/sindresorhus"
			}
		},
		"node_modules/zone.js": {
			"version": "0.14.4",
			"resolved": "https://registry.npmjs.org/zone.js/-/zone.js-0.14.4.tgz",
			"integrity": "sha512-NtTUvIlNELez7Q1DzKVIFZBzNb646boQMgpATo9z3Ftuu/gWvzxCW7jdjcUDoRGxRikrhVHB/zLXh1hxeJawvw==",
			"dev": true,
			"dependencies": {
				"tslib": "^2.3.0"
			}
		}
	}
}
`;export{t as default};
