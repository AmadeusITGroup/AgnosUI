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
				"@amadeus-it-group/tansu": "^2.0.0",
				"@angular/animations": "^19.0.3",
				"@angular/build": "^19.0.4",
				"@angular/cli": "^19.0.4",
				"@angular/common": "^19.0.3",
				"@angular/compiler": "^19.0.3",
				"@angular/compiler-cli": "^19.0.3",
				"@angular/core": "^19.0.3",
				"@angular/forms": "^19.0.3",
				"@angular/platform-browser": "^19.0.3",
				"@angular/platform-browser-dynamic": "^19.0.3",
				"@angular/router": "^19.0.3",
				"@floating-ui/dom": "^1.6.12",
				"autoprefixer": "^10.4.20",
				"daisyui": "^4.12.20",
				"postcss": "^8.4.49",
				"rxjs": "^7.8.1",
				"tailwindcss": "^3.4.16",
				"tslib": "^2.8.1",
				"typescript": "~5.6.3",
				"zone.js": "~0.15.0"
			}
		},
		"node_modules/@alloc/quick-lru": {
			"version": "5.2.0",
			"resolved": "https://registry.npmjs.org/@alloc/quick-lru/-/quick-lru-5.2.0.tgz",
			"integrity": "sha512-UrcABB+4bUrFABwbluTIBErXwvbsU/V7TZWfmbgJfbkwiBuziS9gxdODUyuiecfdGQ85jglMW6juS3+z5TsKLw==",
			"dev": true,
			"engines": {
				"node": ">=10"
			},
			"funding": {
				"url": "https://github.com/sponsors/sindresorhus"
			}
		},
		"node_modules/@amadeus-it-group/tansu": {
			"version": "2.0.0",
			"resolved": "https://registry.npmjs.org/@amadeus-it-group/tansu/-/tansu-2.0.0.tgz",
			"integrity": "sha512-KebRcEFWkdKix1vN12Y8cuGWdWKqkCzXiesXnxSAZbEULBDlPwm0sey+ygP98PudM1gBygtiWyWzGTeAL5+jIw==",
			"dev": true,
			"license": "MIT"
		},
		"node_modules/@ampproject/remapping": {
			"version": "2.3.0",
			"resolved": "https://registry.npmjs.org/@ampproject/remapping/-/remapping-2.3.0.tgz",
			"integrity": "sha512-30iZtAPgz+LTIYoeivqYo853f02jBYSd5uGnGpkFV0M3xOt9aN73erkgYAmZU43x4VfqcnLxW9Kpg3R5LC4YYw==",
			"dev": true,
			"dependencies": {
				"@jridgewell/gen-mapping": "^0.3.5",
				"@jridgewell/trace-mapping": "^0.3.24"
			},
			"engines": {
				"node": ">=6.0.0"
			}
		},
		"node_modules/@angular-devkit/architect": {
			"version": "0.1900.4",
			"resolved": "https://registry.npmjs.org/@angular-devkit/architect/-/architect-0.1900.4.tgz",
			"integrity": "sha512-9XwZ21BPYS2vGOOwVB40fsMyuwJT0H1lWaAMo8Umwi6XbKBVfaWbEhjtR9dlarrySKtFuTz9hmTZkIXHLjXPdA==",
			"dev": true,
			"license": "MIT",
			"dependencies": {
				"@angular-devkit/core": "19.0.4",
				"rxjs": "7.8.1"
			},
			"engines": {
				"node": "^18.19.1 || ^20.11.1 || >=22.0.0",
				"npm": "^6.11.0 || ^7.5.6 || >=8.0.0",
				"yarn": ">= 1.13.0"
			}
		},
		"node_modules/@angular-devkit/core": {
			"version": "19.0.4",
			"resolved": "https://registry.npmjs.org/@angular-devkit/core/-/core-19.0.4.tgz",
			"integrity": "sha512-+imxIj1JLr2hbUYQePHgkTUKr0VmlxNSZvIREcCWtXUcdCypiwhJAtGXv6MfpB4hAx+FJZYEpVWeLwYOS/gW0A==",
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
				"chokidar": "^4.0.0"
			},
			"peerDependenciesMeta": {
				"chokidar": {
					"optional": true
				}
			}
		},
		"node_modules/@angular-devkit/schematics": {
			"version": "19.0.4",
			"resolved": "https://registry.npmjs.org/@angular-devkit/schematics/-/schematics-19.0.4.tgz",
			"integrity": "sha512-2r6Qs4N5NSPho+qzegCYS8kIgylXyH4DHaS7HJ5+4XvM1I8V8AII8payLWkUK0i29XufVoD5XfPUFnjxZrBfYQ==",
			"dev": true,
			"license": "MIT",
			"dependencies": {
				"@angular-devkit/core": "19.0.4",
				"jsonc-parser": "3.3.1",
				"magic-string": "0.30.12",
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
			"version": "19.0.3",
			"resolved": "https://registry.npmjs.org/@angular/animations/-/animations-19.0.3.tgz",
			"integrity": "sha512-YWoXM2S5p+Eq6cX1xjtFaai23oVNnbf3u34pEQCyKDjZpqI5lMu8e63lQT0tf7fZttEWlNUYRTwQ9+MpZ0sjzQ==",
			"dev": true,
			"license": "MIT",
			"dependencies": {
				"tslib": "^2.3.0"
			},
			"engines": {
				"node": "^18.19.1 || ^20.11.1 || >=22.0.0"
			},
			"peerDependencies": {
				"@angular/core": "19.0.3"
			}
		},
		"node_modules/@angular/build": {
			"version": "19.0.4",
			"resolved": "https://registry.npmjs.org/@angular/build/-/build-19.0.4.tgz",
			"integrity": "sha512-ubsNjLb54VkZwcPQ21Ke8aAHiIrRIcv7gG3R6/6XOoWeK1K2+tsv8bnO4mz5cHgzWOspLOT7FDC83NJjrKX3Nw==",
			"dev": true,
			"license": "MIT",
			"dependencies": {
				"@ampproject/remapping": "2.3.0",
				"@angular-devkit/architect": "0.1900.4",
				"@babel/core": "7.26.0",
				"@babel/helper-annotate-as-pure": "7.25.9",
				"@babel/helper-split-export-declaration": "7.24.7",
				"@babel/plugin-syntax-import-attributes": "7.26.0",
				"@inquirer/confirm": "5.0.2",
				"@vitejs/plugin-basic-ssl": "1.1.0",
				"beasties": "0.1.0",
				"browserslist": "^4.23.0",
				"esbuild": "0.24.0",
				"fast-glob": "3.3.2",
				"https-proxy-agent": "7.0.5",
				"istanbul-lib-instrument": "6.0.3",
				"listr2": "8.2.5",
				"magic-string": "0.30.12",
				"mrmime": "2.0.0",
				"parse5-html-rewriting-stream": "7.0.0",
				"picomatch": "4.0.2",
				"piscina": "4.7.0",
				"rollup": "4.26.0",
				"sass": "1.80.7",
				"semver": "7.6.3",
				"vite": "5.4.11",
				"watchpack": "2.4.2"
			},
			"engines": {
				"node": "^18.19.1 || ^20.11.1 || >=22.0.0",
				"npm": "^6.11.0 || ^7.5.6 || >=8.0.0",
				"yarn": ">= 1.13.0"
			},
			"optionalDependencies": {
				"lmdb": "3.1.5"
			},
			"peerDependencies": {
				"@angular/compiler": "^19.0.0",
				"@angular/compiler-cli": "^19.0.0",
				"@angular/localize": "^19.0.0",
				"@angular/platform-server": "^19.0.0",
				"@angular/service-worker": "^19.0.0",
				"@angular/ssr": "^19.0.4",
				"less": "^4.2.0",
				"postcss": "^8.4.0",
				"tailwindcss": "^2.0.0 || ^3.0.0",
				"typescript": ">=5.5 <5.7"
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
				"@angular/ssr": {
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
			"version": "19.0.4",
			"resolved": "https://registry.npmjs.org/@angular/cli/-/cli-19.0.4.tgz",
			"integrity": "sha512-jxnD9qkhelcRMCrHDCxNsWgn6HQCvMIj8uI0T2eB9Vy93q2YWUo/fWl2Sy4gFlR+VNeF+1hYhPLb/vqLLzjWuA==",
			"dev": true,
			"license": "MIT",
			"dependencies": {
				"@angular-devkit/architect": "0.1900.4",
				"@angular-devkit/core": "19.0.4",
				"@angular-devkit/schematics": "19.0.4",
				"@inquirer/prompts": "7.1.0",
				"@listr2/prompt-adapter-inquirer": "2.0.18",
				"@schematics/angular": "19.0.4",
				"@yarnpkg/lockfile": "1.1.0",
				"ini": "5.0.0",
				"jsonc-parser": "3.3.1",
				"listr2": "8.2.5",
				"npm-package-arg": "12.0.0",
				"npm-pick-manifest": "10.0.0",
				"pacote": "20.0.0",
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
			"version": "19.0.3",
			"resolved": "https://registry.npmjs.org/@angular/common/-/common-19.0.3.tgz",
			"integrity": "sha512-YyBVZU+LQ38R+/U5vF/b1T3muROKpR0kkupMw7VKnGhQfgrRX5Dk3H2nr9ritt0zPc7TOUuQSlHMf3QWah2GDg==",
			"dev": true,
			"license": "MIT",
			"dependencies": {
				"tslib": "^2.3.0"
			},
			"engines": {
				"node": "^18.19.1 || ^20.11.1 || >=22.0.0"
			},
			"peerDependencies": {
				"@angular/core": "19.0.3",
				"rxjs": "^6.5.3 || ^7.4.0"
			}
		},
		"node_modules/@angular/compiler": {
			"version": "19.0.3",
			"resolved": "https://registry.npmjs.org/@angular/compiler/-/compiler-19.0.3.tgz",
			"integrity": "sha512-cxtK4SlHAPstcXfjwOaoR1dAszrzo2iDF8ZiihbZPgKUG3m27qIU3Lp5XBgxfZPlO4jh6TXkWznY7f6Tyxkb0Q==",
			"dev": true,
			"license": "MIT",
			"dependencies": {
				"tslib": "^2.3.0"
			},
			"engines": {
				"node": "^18.19.1 || ^20.11.1 || >=22.0.0"
			},
			"peerDependencies": {
				"@angular/core": "19.0.3"
			},
			"peerDependenciesMeta": {
				"@angular/core": {
					"optional": true
				}
			}
		},
		"node_modules/@angular/compiler-cli": {
			"version": "19.0.3",
			"resolved": "https://registry.npmjs.org/@angular/compiler-cli/-/compiler-cli-19.0.3.tgz",
			"integrity": "sha512-nayLcC3hSHoGKXCZInMdFcIZJEHYkEGNsdAutgCMuSj+lXCGuRUysuGC0rGzJc2R6nhgfaLJnO8T/O5acqaqdA==",
			"dev": true,
			"license": "MIT",
			"dependencies": {
				"@babel/core": "7.26.0",
				"@jridgewell/sourcemap-codec": "^1.4.14",
				"chokidar": "^4.0.0",
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
				"@angular/compiler": "19.0.3",
				"typescript": ">=5.5 <5.7"
			}
		},
		"node_modules/@angular/core": {
			"version": "19.0.3",
			"resolved": "https://registry.npmjs.org/@angular/core/-/core-19.0.3.tgz",
			"integrity": "sha512-WM844gDzrbHtcM2TJB9DmfCmenUYyNSI6h924CeppDW5oG8ShinQGiWNjF5oI6EZ4tG60uK3QvCm3kjr1dmbOA==",
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
				"zone.js": "~0.15.0"
			}
		},
		"node_modules/@angular/forms": {
			"version": "19.0.3",
			"resolved": "https://registry.npmjs.org/@angular/forms/-/forms-19.0.3.tgz",
			"integrity": "sha512-8wf8yDR6cW+lOhpzhmxUOiI5Wjr1Kf7o8NuJ2P5K6b7IMNRzRyR5q/6R4NUwtF6aaJ1wNqmSof+goQmtn1HOcw==",
			"dev": true,
			"license": "MIT",
			"dependencies": {
				"tslib": "^2.3.0"
			},
			"engines": {
				"node": "^18.19.1 || ^20.11.1 || >=22.0.0"
			},
			"peerDependencies": {
				"@angular/common": "19.0.3",
				"@angular/core": "19.0.3",
				"@angular/platform-browser": "19.0.3",
				"rxjs": "^6.5.3 || ^7.4.0"
			}
		},
		"node_modules/@angular/platform-browser": {
			"version": "19.0.3",
			"resolved": "https://registry.npmjs.org/@angular/platform-browser/-/platform-browser-19.0.3.tgz",
			"integrity": "sha512-vggWHSzOsCpYqnGq5IIN+n7xdEvXfgUGaMdgzPhFMTsnlMTUs5+VEFl9tX9FANHkXKB5S1RttVyvEXRqJM9ncQ==",
			"dev": true,
			"license": "MIT",
			"dependencies": {
				"tslib": "^2.3.0"
			},
			"engines": {
				"node": "^18.19.1 || ^20.11.1 || >=22.0.0"
			},
			"peerDependencies": {
				"@angular/animations": "19.0.3",
				"@angular/common": "19.0.3",
				"@angular/core": "19.0.3"
			},
			"peerDependenciesMeta": {
				"@angular/animations": {
					"optional": true
				}
			}
		},
		"node_modules/@angular/platform-browser-dynamic": {
			"version": "19.0.3",
			"resolved": "https://registry.npmjs.org/@angular/platform-browser-dynamic/-/platform-browser-dynamic-19.0.3.tgz",
			"integrity": "sha512-gFh+QN7JvepnD3mS0XmOtDmfY8h5sSkk2/guesE2A68Na8q+M3fGZlz7I37tCXToLth5us1X0Gi0UPCSESc4SA==",
			"dev": true,
			"license": "MIT",
			"dependencies": {
				"tslib": "^2.3.0"
			},
			"engines": {
				"node": "^18.19.1 || ^20.11.1 || >=22.0.0"
			},
			"peerDependencies": {
				"@angular/common": "19.0.3",
				"@angular/compiler": "19.0.3",
				"@angular/core": "19.0.3",
				"@angular/platform-browser": "19.0.3"
			}
		},
		"node_modules/@angular/router": {
			"version": "19.0.3",
			"resolved": "https://registry.npmjs.org/@angular/router/-/router-19.0.3.tgz",
			"integrity": "sha512-L/s8crRC6nj5knmHsnPeOXMNdC7vUOSOvTQonXhmT0FdlP9bPnnRrNeVDnLnd8AzjPSBfIFE2eQw6T8jCwdxMA==",
			"dev": true,
			"license": "MIT",
			"dependencies": {
				"tslib": "^2.3.0"
			},
			"engines": {
				"node": "^18.19.1 || ^20.11.1 || >=22.0.0"
			},
			"peerDependencies": {
				"@angular/common": "19.0.3",
				"@angular/core": "19.0.3",
				"@angular/platform-browser": "19.0.3",
				"rxjs": "^6.5.3 || ^7.4.0"
			}
		},
		"node_modules/@babel/code-frame": {
			"version": "7.26.2",
			"resolved": "https://registry.npmjs.org/@babel/code-frame/-/code-frame-7.26.2.tgz",
			"integrity": "sha512-RJlIHRueQgwWitWgF8OdFYGZX328Ax5BCemNGlqHfplnRT9ESi8JkFlvaVYbS+UubVY6dpv87Fs2u5M29iNFVQ==",
			"dev": true,
			"dependencies": {
				"@babel/helper-validator-identifier": "^7.25.9",
				"js-tokens": "^4.0.0",
				"picocolors": "^1.0.0"
			},
			"engines": {
				"node": ">=6.9.0"
			}
		},
		"node_modules/@babel/compat-data": {
			"version": "7.26.2",
			"resolved": "https://registry.npmjs.org/@babel/compat-data/-/compat-data-7.26.2.tgz",
			"integrity": "sha512-Z0WgzSEa+aUcdiJuCIqgujCshpMWgUpgOxXotrYPSA53hA3qopNaqcJpyr0hVb1FeWdnqFA35/fUtXgBK8srQg==",
			"dev": true,
			"engines": {
				"node": ">=6.9.0"
			}
		},
		"node_modules/@babel/core": {
			"version": "7.26.0",
			"resolved": "https://registry.npmjs.org/@babel/core/-/core-7.26.0.tgz",
			"integrity": "sha512-i1SLeK+DzNnQ3LL/CswPCa/E5u4lh1k6IAEphON8F+cXt0t9euTshDru0q7/IqMa1PMPz5RnHuHscF8/ZJsStg==",
			"dev": true,
			"dependencies": {
				"@ampproject/remapping": "^2.2.0",
				"@babel/code-frame": "^7.26.0",
				"@babel/generator": "^7.26.0",
				"@babel/helper-compilation-targets": "^7.25.9",
				"@babel/helper-module-transforms": "^7.26.0",
				"@babel/helpers": "^7.26.0",
				"@babel/parser": "^7.26.0",
				"@babel/template": "^7.25.9",
				"@babel/traverse": "^7.25.9",
				"@babel/types": "^7.26.0",
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
			"version": "7.26.2",
			"resolved": "https://registry.npmjs.org/@babel/generator/-/generator-7.26.2.tgz",
			"integrity": "sha512-zevQbhbau95nkoxSq3f/DC/SC+EEOUZd3DYqfSkMhY2/wfSeaHV1Ew4vk8e+x8lja31IbyuUa2uQ3JONqKbysw==",
			"dev": true,
			"dependencies": {
				"@babel/parser": "^7.26.2",
				"@babel/types": "^7.26.0",
				"@jridgewell/gen-mapping": "^0.3.5",
				"@jridgewell/trace-mapping": "^0.3.25",
				"jsesc": "^3.0.2"
			},
			"engines": {
				"node": ">=6.9.0"
			}
		},
		"node_modules/@babel/helper-annotate-as-pure": {
			"version": "7.25.9",
			"resolved": "https://registry.npmjs.org/@babel/helper-annotate-as-pure/-/helper-annotate-as-pure-7.25.9.tgz",
			"integrity": "sha512-gv7320KBUFJz1RnylIg5WWYPRXKZ884AGkYpgpWW02TH66Dl+HaC1t1CKd0z3R4b6hdYEcmrNZHUmfCP+1u3/g==",
			"dev": true,
			"dependencies": {
				"@babel/types": "^7.25.9"
			},
			"engines": {
				"node": ">=6.9.0"
			}
		},
		"node_modules/@babel/helper-compilation-targets": {
			"version": "7.25.9",
			"resolved": "https://registry.npmjs.org/@babel/helper-compilation-targets/-/helper-compilation-targets-7.25.9.tgz",
			"integrity": "sha512-j9Db8Suy6yV/VHa4qzrj9yZfZxhLWQdVnRlXxmKLYlhWUVB1sB2G5sxuWYXk/whHD9iW76PmNzxZ4UCnTQTVEQ==",
			"dev": true,
			"dependencies": {
				"@babel/compat-data": "^7.25.9",
				"@babel/helper-validator-option": "^7.25.9",
				"browserslist": "^4.24.0",
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
		"node_modules/@babel/helper-module-imports": {
			"version": "7.25.9",
			"resolved": "https://registry.npmjs.org/@babel/helper-module-imports/-/helper-module-imports-7.25.9.tgz",
			"integrity": "sha512-tnUA4RsrmflIM6W6RFTLFSXITtl0wKjgpnLgXyowocVPrbYrLUXSBXDgTs8BlbmIzIdlBySRQjINYs2BAkiLtw==",
			"dev": true,
			"dependencies": {
				"@babel/traverse": "^7.25.9",
				"@babel/types": "^7.25.9"
			},
			"engines": {
				"node": ">=6.9.0"
			}
		},
		"node_modules/@babel/helper-module-transforms": {
			"version": "7.26.0",
			"resolved": "https://registry.npmjs.org/@babel/helper-module-transforms/-/helper-module-transforms-7.26.0.tgz",
			"integrity": "sha512-xO+xu6B5K2czEnQye6BHA7DolFFmS3LB7stHZFaOLb1pAwO1HWLS8fXA+eh0A2yIvltPVmx3eNNDBJA2SLHXFw==",
			"dev": true,
			"dependencies": {
				"@babel/helper-module-imports": "^7.25.9",
				"@babel/helper-validator-identifier": "^7.25.9",
				"@babel/traverse": "^7.25.9"
			},
			"engines": {
				"node": ">=6.9.0"
			},
			"peerDependencies": {
				"@babel/core": "^7.0.0"
			}
		},
		"node_modules/@babel/helper-plugin-utils": {
			"version": "7.25.9",
			"resolved": "https://registry.npmjs.org/@babel/helper-plugin-utils/-/helper-plugin-utils-7.25.9.tgz",
			"integrity": "sha512-kSMlyUVdWe25rEsRGviIgOWnoT/nfABVWlqt9N19/dIPWViAOW2s9wznP5tURbs/IDuNk4gPy3YdYRgH3uxhBw==",
			"dev": true,
			"engines": {
				"node": ">=6.9.0"
			}
		},
		"node_modules/@babel/helper-split-export-declaration": {
			"version": "7.24.7",
			"resolved": "https://registry.npmjs.org/@babel/helper-split-export-declaration/-/helper-split-export-declaration-7.24.7.tgz",
			"integrity": "sha512-oy5V7pD+UvfkEATUKvIjvIAH/xCzfsFVw7ygW2SI6NClZzquT+mwdTfgfdbUiceh6iQO0CHtCPsyze/MZ2YbAA==",
			"dev": true,
			"dependencies": {
				"@babel/types": "^7.24.7"
			},
			"engines": {
				"node": ">=6.9.0"
			}
		},
		"node_modules/@babel/helper-string-parser": {
			"version": "7.25.9",
			"resolved": "https://registry.npmjs.org/@babel/helper-string-parser/-/helper-string-parser-7.25.9.tgz",
			"integrity": "sha512-4A/SCr/2KLd5jrtOMFzaKjVtAei3+2r/NChoBNoZ3EyP/+GlhoaEGoWOZUmFmoITP7zOJyHIMm+DYRd8o3PvHA==",
			"dev": true,
			"engines": {
				"node": ">=6.9.0"
			}
		},
		"node_modules/@babel/helper-validator-identifier": {
			"version": "7.25.9",
			"resolved": "https://registry.npmjs.org/@babel/helper-validator-identifier/-/helper-validator-identifier-7.25.9.tgz",
			"integrity": "sha512-Ed61U6XJc3CVRfkERJWDz4dJwKe7iLmmJsbOGu9wSloNSFttHV0I8g6UAgb7qnK5ly5bGLPd4oXZlxCdANBOWQ==",
			"dev": true,
			"engines": {
				"node": ">=6.9.0"
			}
		},
		"node_modules/@babel/helper-validator-option": {
			"version": "7.25.9",
			"resolved": "https://registry.npmjs.org/@babel/helper-validator-option/-/helper-validator-option-7.25.9.tgz",
			"integrity": "sha512-e/zv1co8pp55dNdEcCynfj9X7nyUKUXoUEwfXqaZt0omVOmDe9oOTdKStH4GmAw6zxMFs50ZayuMfHDKlO7Tfw==",
			"dev": true,
			"engines": {
				"node": ">=6.9.0"
			}
		},
		"node_modules/@babel/helpers": {
			"version": "7.26.0",
			"resolved": "https://registry.npmjs.org/@babel/helpers/-/helpers-7.26.0.tgz",
			"integrity": "sha512-tbhNuIxNcVb21pInl3ZSjksLCvgdZy9KwJ8brv993QtIVKJBBkYXz4q4ZbAv31GdnC+R90np23L5FbEBlthAEw==",
			"dev": true,
			"dependencies": {
				"@babel/template": "^7.25.9",
				"@babel/types": "^7.26.0"
			},
			"engines": {
				"node": ">=6.9.0"
			}
		},
		"node_modules/@babel/parser": {
			"version": "7.26.2",
			"resolved": "https://registry.npmjs.org/@babel/parser/-/parser-7.26.2.tgz",
			"integrity": "sha512-DWMCZH9WA4Maitz2q21SRKHo9QXZxkDsbNZoVD62gusNtNBBqDg9i7uOhASfTfIGNzW+O+r7+jAlM8dwphcJKQ==",
			"dev": true,
			"dependencies": {
				"@babel/types": "^7.26.0"
			},
			"bin": {
				"parser": "bin/babel-parser.js"
			},
			"engines": {
				"node": ">=6.0.0"
			}
		},
		"node_modules/@babel/plugin-syntax-import-attributes": {
			"version": "7.26.0",
			"resolved": "https://registry.npmjs.org/@babel/plugin-syntax-import-attributes/-/plugin-syntax-import-attributes-7.26.0.tgz",
			"integrity": "sha512-e2dttdsJ1ZTpi3B9UYGLw41hifAubg19AtCu/2I/F1QNVclOBr1dYpTdmdyZ84Xiz43BS/tCUkMAZNLv12Pi+A==",
			"dev": true,
			"dependencies": {
				"@babel/helper-plugin-utils": "^7.25.9"
			},
			"engines": {
				"node": ">=6.9.0"
			},
			"peerDependencies": {
				"@babel/core": "^7.0.0-0"
			}
		},
		"node_modules/@babel/template": {
			"version": "7.25.9",
			"resolved": "https://registry.npmjs.org/@babel/template/-/template-7.25.9.tgz",
			"integrity": "sha512-9DGttpmPvIxBb/2uwpVo3dqJ+O6RooAFOS+lB+xDqoE2PVCE8nfoHMdZLpfCQRLwvohzXISPZcgxt80xLfsuwg==",
			"dev": true,
			"dependencies": {
				"@babel/code-frame": "^7.25.9",
				"@babel/parser": "^7.25.9",
				"@babel/types": "^7.25.9"
			},
			"engines": {
				"node": ">=6.9.0"
			}
		},
		"node_modules/@babel/traverse": {
			"version": "7.25.9",
			"resolved": "https://registry.npmjs.org/@babel/traverse/-/traverse-7.25.9.tgz",
			"integrity": "sha512-ZCuvfwOwlz/bawvAuvcj8rrithP2/N55Tzz342AkTvq4qaWbGfmCk/tKhNaV2cthijKrPAA8SRJV5WWe7IBMJw==",
			"dev": true,
			"dependencies": {
				"@babel/code-frame": "^7.25.9",
				"@babel/generator": "^7.25.9",
				"@babel/parser": "^7.25.9",
				"@babel/template": "^7.25.9",
				"@babel/types": "^7.25.9",
				"debug": "^4.3.1",
				"globals": "^11.1.0"
			},
			"engines": {
				"node": ">=6.9.0"
			}
		},
		"node_modules/@babel/types": {
			"version": "7.26.0",
			"resolved": "https://registry.npmjs.org/@babel/types/-/types-7.26.0.tgz",
			"integrity": "sha512-Z/yiTPj+lDVnF7lWeKCIJzaIkI0vYO87dMpZ4bg4TDrFe4XXLFWL1TbXU27gBP3QccxV9mZICCrnjnYlJjXHOA==",
			"dev": true,
			"dependencies": {
				"@babel/helper-string-parser": "^7.25.9",
				"@babel/helper-validator-identifier": "^7.25.9"
			},
			"engines": {
				"node": ">=6.9.0"
			}
		},
		"node_modules/@esbuild/aix-ppc64": {
			"version": "0.24.0",
			"resolved": "https://registry.npmjs.org/@esbuild/aix-ppc64/-/aix-ppc64-0.24.0.tgz",
			"integrity": "sha512-WtKdFM7ls47zkKHFVzMz8opM7LkcsIp9amDUBIAWirg70RM71WRSjdILPsY5Uv1D42ZpUfaPILDlfactHgsRkw==",
			"cpu": [
				"ppc64"
			],
			"dev": true,
			"optional": true,
			"os": [
				"aix"
			],
			"engines": {
				"node": ">=18"
			}
		},
		"node_modules/@esbuild/android-arm": {
			"version": "0.24.0",
			"resolved": "https://registry.npmjs.org/@esbuild/android-arm/-/android-arm-0.24.0.tgz",
			"integrity": "sha512-arAtTPo76fJ/ICkXWetLCc9EwEHKaeya4vMrReVlEIUCAUncH7M4bhMQ+M9Vf+FFOZJdTNMXNBrWwW+OXWpSew==",
			"cpu": [
				"arm"
			],
			"dev": true,
			"optional": true,
			"os": [
				"android"
			],
			"engines": {
				"node": ">=18"
			}
		},
		"node_modules/@esbuild/android-arm64": {
			"version": "0.24.0",
			"resolved": "https://registry.npmjs.org/@esbuild/android-arm64/-/android-arm64-0.24.0.tgz",
			"integrity": "sha512-Vsm497xFM7tTIPYK9bNTYJyF/lsP590Qc1WxJdlB6ljCbdZKU9SY8i7+Iin4kyhV/KV5J2rOKsBQbB77Ab7L/w==",
			"cpu": [
				"arm64"
			],
			"dev": true,
			"optional": true,
			"os": [
				"android"
			],
			"engines": {
				"node": ">=18"
			}
		},
		"node_modules/@esbuild/android-x64": {
			"version": "0.24.0",
			"resolved": "https://registry.npmjs.org/@esbuild/android-x64/-/android-x64-0.24.0.tgz",
			"integrity": "sha512-t8GrvnFkiIY7pa7mMgJd7p8p8qqYIz1NYiAoKc75Zyv73L3DZW++oYMSHPRarcotTKuSs6m3hTOa5CKHaS02TQ==",
			"cpu": [
				"x64"
			],
			"dev": true,
			"optional": true,
			"os": [
				"android"
			],
			"engines": {
				"node": ">=18"
			}
		},
		"node_modules/@esbuild/darwin-arm64": {
			"version": "0.24.0",
			"resolved": "https://registry.npmjs.org/@esbuild/darwin-arm64/-/darwin-arm64-0.24.0.tgz",
			"integrity": "sha512-CKyDpRbK1hXwv79soeTJNHb5EiG6ct3efd/FTPdzOWdbZZfGhpbcqIpiD0+vwmpu0wTIL97ZRPZu8vUt46nBSw==",
			"cpu": [
				"arm64"
			],
			"dev": true,
			"optional": true,
			"os": [
				"darwin"
			],
			"engines": {
				"node": ">=18"
			}
		},
		"node_modules/@esbuild/darwin-x64": {
			"version": "0.24.0",
			"resolved": "https://registry.npmjs.org/@esbuild/darwin-x64/-/darwin-x64-0.24.0.tgz",
			"integrity": "sha512-rgtz6flkVkh58od4PwTRqxbKH9cOjaXCMZgWD905JOzjFKW+7EiUObfd/Kav+A6Gyud6WZk9w+xu6QLytdi2OA==",
			"cpu": [
				"x64"
			],
			"dev": true,
			"optional": true,
			"os": [
				"darwin"
			],
			"engines": {
				"node": ">=18"
			}
		},
		"node_modules/@esbuild/freebsd-arm64": {
			"version": "0.24.0",
			"resolved": "https://registry.npmjs.org/@esbuild/freebsd-arm64/-/freebsd-arm64-0.24.0.tgz",
			"integrity": "sha512-6Mtdq5nHggwfDNLAHkPlyLBpE5L6hwsuXZX8XNmHno9JuL2+bg2BX5tRkwjyfn6sKbxZTq68suOjgWqCicvPXA==",
			"cpu": [
				"arm64"
			],
			"dev": true,
			"optional": true,
			"os": [
				"freebsd"
			],
			"engines": {
				"node": ">=18"
			}
		},
		"node_modules/@esbuild/freebsd-x64": {
			"version": "0.24.0",
			"resolved": "https://registry.npmjs.org/@esbuild/freebsd-x64/-/freebsd-x64-0.24.0.tgz",
			"integrity": "sha512-D3H+xh3/zphoX8ck4S2RxKR6gHlHDXXzOf6f/9dbFt/NRBDIE33+cVa49Kil4WUjxMGW0ZIYBYtaGCa2+OsQwQ==",
			"cpu": [
				"x64"
			],
			"dev": true,
			"optional": true,
			"os": [
				"freebsd"
			],
			"engines": {
				"node": ">=18"
			}
		},
		"node_modules/@esbuild/linux-arm": {
			"version": "0.24.0",
			"resolved": "https://registry.npmjs.org/@esbuild/linux-arm/-/linux-arm-0.24.0.tgz",
			"integrity": "sha512-gJKIi2IjRo5G6Glxb8d3DzYXlxdEj2NlkixPsqePSZMhLudqPhtZ4BUrpIuTjJYXxvF9njql+vRjB2oaC9XpBw==",
			"cpu": [
				"arm"
			],
			"dev": true,
			"optional": true,
			"os": [
				"linux"
			],
			"engines": {
				"node": ">=18"
			}
		},
		"node_modules/@esbuild/linux-arm64": {
			"version": "0.24.0",
			"resolved": "https://registry.npmjs.org/@esbuild/linux-arm64/-/linux-arm64-0.24.0.tgz",
			"integrity": "sha512-TDijPXTOeE3eaMkRYpcy3LarIg13dS9wWHRdwYRnzlwlA370rNdZqbcp0WTyyV/k2zSxfko52+C7jU5F9Tfj1g==",
			"cpu": [
				"arm64"
			],
			"dev": true,
			"optional": true,
			"os": [
				"linux"
			],
			"engines": {
				"node": ">=18"
			}
		},
		"node_modules/@esbuild/linux-ia32": {
			"version": "0.24.0",
			"resolved": "https://registry.npmjs.org/@esbuild/linux-ia32/-/linux-ia32-0.24.0.tgz",
			"integrity": "sha512-K40ip1LAcA0byL05TbCQ4yJ4swvnbzHscRmUilrmP9Am7//0UjPreh4lpYzvThT2Quw66MhjG//20mrufm40mA==",
			"cpu": [
				"ia32"
			],
			"dev": true,
			"optional": true,
			"os": [
				"linux"
			],
			"engines": {
				"node": ">=18"
			}
		},
		"node_modules/@esbuild/linux-loong64": {
			"version": "0.24.0",
			"resolved": "https://registry.npmjs.org/@esbuild/linux-loong64/-/linux-loong64-0.24.0.tgz",
			"integrity": "sha512-0mswrYP/9ai+CU0BzBfPMZ8RVm3RGAN/lmOMgW4aFUSOQBjA31UP8Mr6DDhWSuMwj7jaWOT0p0WoZ6jeHhrD7g==",
			"cpu": [
				"loong64"
			],
			"dev": true,
			"optional": true,
			"os": [
				"linux"
			],
			"engines": {
				"node": ">=18"
			}
		},
		"node_modules/@esbuild/linux-mips64el": {
			"version": "0.24.0",
			"resolved": "https://registry.npmjs.org/@esbuild/linux-mips64el/-/linux-mips64el-0.24.0.tgz",
			"integrity": "sha512-hIKvXm0/3w/5+RDtCJeXqMZGkI2s4oMUGj3/jM0QzhgIASWrGO5/RlzAzm5nNh/awHE0A19h/CvHQe6FaBNrRA==",
			"cpu": [
				"mips64el"
			],
			"dev": true,
			"optional": true,
			"os": [
				"linux"
			],
			"engines": {
				"node": ">=18"
			}
		},
		"node_modules/@esbuild/linux-ppc64": {
			"version": "0.24.0",
			"resolved": "https://registry.npmjs.org/@esbuild/linux-ppc64/-/linux-ppc64-0.24.0.tgz",
			"integrity": "sha512-HcZh5BNq0aC52UoocJxaKORfFODWXZxtBaaZNuN3PUX3MoDsChsZqopzi5UupRhPHSEHotoiptqikjN/B77mYQ==",
			"cpu": [
				"ppc64"
			],
			"dev": true,
			"optional": true,
			"os": [
				"linux"
			],
			"engines": {
				"node": ">=18"
			}
		},
		"node_modules/@esbuild/linux-riscv64": {
			"version": "0.24.0",
			"resolved": "https://registry.npmjs.org/@esbuild/linux-riscv64/-/linux-riscv64-0.24.0.tgz",
			"integrity": "sha512-bEh7dMn/h3QxeR2KTy1DUszQjUrIHPZKyO6aN1X4BCnhfYhuQqedHaa5MxSQA/06j3GpiIlFGSsy1c7Gf9padw==",
			"cpu": [
				"riscv64"
			],
			"dev": true,
			"optional": true,
			"os": [
				"linux"
			],
			"engines": {
				"node": ">=18"
			}
		},
		"node_modules/@esbuild/linux-s390x": {
			"version": "0.24.0",
			"resolved": "https://registry.npmjs.org/@esbuild/linux-s390x/-/linux-s390x-0.24.0.tgz",
			"integrity": "sha512-ZcQ6+qRkw1UcZGPyrCiHHkmBaj9SiCD8Oqd556HldP+QlpUIe2Wgn3ehQGVoPOvZvtHm8HPx+bH20c9pvbkX3g==",
			"cpu": [
				"s390x"
			],
			"dev": true,
			"optional": true,
			"os": [
				"linux"
			],
			"engines": {
				"node": ">=18"
			}
		},
		"node_modules/@esbuild/linux-x64": {
			"version": "0.24.0",
			"resolved": "https://registry.npmjs.org/@esbuild/linux-x64/-/linux-x64-0.24.0.tgz",
			"integrity": "sha512-vbutsFqQ+foy3wSSbmjBXXIJ6PL3scghJoM8zCL142cGaZKAdCZHyf+Bpu/MmX9zT9Q0zFBVKb36Ma5Fzfa8xA==",
			"cpu": [
				"x64"
			],
			"dev": true,
			"optional": true,
			"os": [
				"linux"
			],
			"engines": {
				"node": ">=18"
			}
		},
		"node_modules/@esbuild/netbsd-x64": {
			"version": "0.24.0",
			"resolved": "https://registry.npmjs.org/@esbuild/netbsd-x64/-/netbsd-x64-0.24.0.tgz",
			"integrity": "sha512-hjQ0R/ulkO8fCYFsG0FZoH+pWgTTDreqpqY7UnQntnaKv95uP5iW3+dChxnx7C3trQQU40S+OgWhUVwCjVFLvg==",
			"cpu": [
				"x64"
			],
			"dev": true,
			"optional": true,
			"os": [
				"netbsd"
			],
			"engines": {
				"node": ">=18"
			}
		},
		"node_modules/@esbuild/openbsd-arm64": {
			"version": "0.24.0",
			"resolved": "https://registry.npmjs.org/@esbuild/openbsd-arm64/-/openbsd-arm64-0.24.0.tgz",
			"integrity": "sha512-MD9uzzkPQbYehwcN583yx3Tu5M8EIoTD+tUgKF982WYL9Pf5rKy9ltgD0eUgs8pvKnmizxjXZyLt0z6DC3rRXg==",
			"cpu": [
				"arm64"
			],
			"dev": true,
			"optional": true,
			"os": [
				"openbsd"
			],
			"engines": {
				"node": ">=18"
			}
		},
		"node_modules/@esbuild/openbsd-x64": {
			"version": "0.24.0",
			"resolved": "https://registry.npmjs.org/@esbuild/openbsd-x64/-/openbsd-x64-0.24.0.tgz",
			"integrity": "sha512-4ir0aY1NGUhIC1hdoCzr1+5b43mw99uNwVzhIq1OY3QcEwPDO3B7WNXBzaKY5Nsf1+N11i1eOfFcq+D/gOS15Q==",
			"cpu": [
				"x64"
			],
			"dev": true,
			"optional": true,
			"os": [
				"openbsd"
			],
			"engines": {
				"node": ">=18"
			}
		},
		"node_modules/@esbuild/sunos-x64": {
			"version": "0.24.0",
			"resolved": "https://registry.npmjs.org/@esbuild/sunos-x64/-/sunos-x64-0.24.0.tgz",
			"integrity": "sha512-jVzdzsbM5xrotH+W5f1s+JtUy1UWgjU0Cf4wMvffTB8m6wP5/kx0KiaLHlbJO+dMgtxKV8RQ/JvtlFcdZ1zCPA==",
			"cpu": [
				"x64"
			],
			"dev": true,
			"optional": true,
			"os": [
				"sunos"
			],
			"engines": {
				"node": ">=18"
			}
		},
		"node_modules/@esbuild/win32-arm64": {
			"version": "0.24.0",
			"resolved": "https://registry.npmjs.org/@esbuild/win32-arm64/-/win32-arm64-0.24.0.tgz",
			"integrity": "sha512-iKc8GAslzRpBytO2/aN3d2yb2z8XTVfNV0PjGlCxKo5SgWmNXx82I/Q3aG1tFfS+A2igVCY97TJ8tnYwpUWLCA==",
			"cpu": [
				"arm64"
			],
			"dev": true,
			"optional": true,
			"os": [
				"win32"
			],
			"engines": {
				"node": ">=18"
			}
		},
		"node_modules/@esbuild/win32-ia32": {
			"version": "0.24.0",
			"resolved": "https://registry.npmjs.org/@esbuild/win32-ia32/-/win32-ia32-0.24.0.tgz",
			"integrity": "sha512-vQW36KZolfIudCcTnaTpmLQ24Ha1RjygBo39/aLkM2kmjkWmZGEJ5Gn9l5/7tzXA42QGIoWbICfg6KLLkIw6yw==",
			"cpu": [
				"ia32"
			],
			"dev": true,
			"optional": true,
			"os": [
				"win32"
			],
			"engines": {
				"node": ">=18"
			}
		},
		"node_modules/@esbuild/win32-x64": {
			"version": "0.24.0",
			"resolved": "https://registry.npmjs.org/@esbuild/win32-x64/-/win32-x64-0.24.0.tgz",
			"integrity": "sha512-7IAFPrjSQIJrGsK6flwg7NFmwBoSTyF3rl7If0hNUFQU4ilTsEPL6GuMuU9BfIWVVGuRnuIidkSMC+c0Otu8IA==",
			"cpu": [
				"x64"
			],
			"dev": true,
			"optional": true,
			"os": [
				"win32"
			],
			"engines": {
				"node": ">=18"
			}
		},
		"node_modules/@floating-ui/core": {
			"version": "1.6.8",
			"resolved": "https://registry.npmjs.org/@floating-ui/core/-/core-1.6.8.tgz",
			"integrity": "sha512-7XJ9cPU+yI2QeLS+FCSlqNFZJq8arvswefkZrYI1yQBbftw6FyrZOxYSh+9S7z7TpeWlRt9zJ5IhM1WIL334jA==",
			"dev": true,
			"dependencies": {
				"@floating-ui/utils": "^0.2.8"
			}
		},
		"node_modules/@floating-ui/dom": {
			"version": "1.6.12",
			"resolved": "https://registry.npmjs.org/@floating-ui/dom/-/dom-1.6.12.tgz",
			"integrity": "sha512-NP83c0HjokcGVEMeoStg317VD9W7eDlGK7457dMBANbKA6GJZdc7rjujdgqzTaz93jkGgc5P/jeWbaCHnMNc+w==",
			"dev": true,
			"dependencies": {
				"@floating-ui/core": "^1.6.0",
				"@floating-ui/utils": "^0.2.8"
			}
		},
		"node_modules/@floating-ui/utils": {
			"version": "0.2.8",
			"resolved": "https://registry.npmjs.org/@floating-ui/utils/-/utils-0.2.8.tgz",
			"integrity": "sha512-kym7SodPp8/wloecOpcmSnWJsK7M0E5Wg8UcFA+uO4B9s5d0ywXOEro/8HM9x0rW+TljRzul/14UYz3TleT3ig==",
			"dev": true
		},
		"node_modules/@inquirer/checkbox": {
			"version": "4.0.2",
			"resolved": "https://registry.npmjs.org/@inquirer/checkbox/-/checkbox-4.0.2.tgz",
			"integrity": "sha512-+gznPl8ip8P8HYHYecDtUtdsh1t2jvb+sWCD72GAiZ9m45RqwrLmReDaqdC0umQfamtFXVRoMVJ2/qINKGm9Tg==",
			"dev": true,
			"dependencies": {
				"@inquirer/core": "^10.1.0",
				"@inquirer/figures": "^1.0.8",
				"@inquirer/type": "^3.0.1",
				"ansi-escapes": "^4.3.2",
				"yoctocolors-cjs": "^2.1.2"
			},
			"engines": {
				"node": ">=18"
			},
			"peerDependencies": {
				"@types/node": ">=18"
			}
		},
		"node_modules/@inquirer/confirm": {
			"version": "5.0.2",
			"resolved": "https://registry.npmjs.org/@inquirer/confirm/-/confirm-5.0.2.tgz",
			"integrity": "sha512-KJLUHOaKnNCYzwVbryj3TNBxyZIrr56fR5N45v6K9IPrbT6B7DcudBMfylkV1A8PUdJE15mybkEQyp2/ZUpxUA==",
			"dev": true,
			"dependencies": {
				"@inquirer/core": "^10.1.0",
				"@inquirer/type": "^3.0.1"
			},
			"engines": {
				"node": ">=18"
			},
			"peerDependencies": {
				"@types/node": ">=18"
			}
		},
		"node_modules/@inquirer/core": {
			"version": "10.1.0",
			"resolved": "https://registry.npmjs.org/@inquirer/core/-/core-10.1.0.tgz",
			"integrity": "sha512-I+ETk2AL+yAVbvuKx5AJpQmoaWhpiTFOg/UJb7ZkMAK4blmtG8ATh5ct+T/8xNld0CZG/2UhtkdMwpgvld92XQ==",
			"dev": true,
			"dependencies": {
				"@inquirer/figures": "^1.0.8",
				"@inquirer/type": "^3.0.1",
				"ansi-escapes": "^4.3.2",
				"cli-width": "^4.1.0",
				"mute-stream": "^2.0.0",
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
			"version": "4.1.0",
			"resolved": "https://registry.npmjs.org/@inquirer/editor/-/editor-4.1.0.tgz",
			"integrity": "sha512-K1gGWsxEqO23tVdp5MT3H799OZ4ER1za7Dlc8F4um0W7lwSv0KGR/YyrUEyimj0g7dXZd8XknM/5QA2/Uy+TbA==",
			"dev": true,
			"dependencies": {
				"@inquirer/core": "^10.1.0",
				"@inquirer/type": "^3.0.1",
				"external-editor": "^3.1.0"
			},
			"engines": {
				"node": ">=18"
			},
			"peerDependencies": {
				"@types/node": ">=18"
			}
		},
		"node_modules/@inquirer/expand": {
			"version": "4.0.2",
			"resolved": "https://registry.npmjs.org/@inquirer/expand/-/expand-4.0.2.tgz",
			"integrity": "sha512-WdgCX1cUtinz+syKyZdJomovULYlKUWZbVYZzhf+ZeeYf4htAQ3jLymoNs3koIAKfZZl3HUBb819ClCBfyznaw==",
			"dev": true,
			"dependencies": {
				"@inquirer/core": "^10.1.0",
				"@inquirer/type": "^3.0.1",
				"yoctocolors-cjs": "^2.1.2"
			},
			"engines": {
				"node": ">=18"
			},
			"peerDependencies": {
				"@types/node": ">=18"
			}
		},
		"node_modules/@inquirer/figures": {
			"version": "1.0.8",
			"resolved": "https://registry.npmjs.org/@inquirer/figures/-/figures-1.0.8.tgz",
			"integrity": "sha512-tKd+jsmhq21AP1LhexC0pPwsCxEhGgAkg28byjJAd+xhmIs8LUX8JbUc3vBf3PhLxWiB5EvyBE5X7JSPAqMAqg==",
			"dev": true,
			"engines": {
				"node": ">=18"
			}
		},
		"node_modules/@inquirer/input": {
			"version": "4.0.2",
			"resolved": "https://registry.npmjs.org/@inquirer/input/-/input-4.0.2.tgz",
			"integrity": "sha512-yCLCraigU085EcdpIVEDgyfGv4vBiE4I+k1qRkc9C5dMjWF42ADMGy1RFU94+eZlz4YlkmFsiyHZy0W1wdhaNg==",
			"dev": true,
			"dependencies": {
				"@inquirer/core": "^10.1.0",
				"@inquirer/type": "^3.0.1"
			},
			"engines": {
				"node": ">=18"
			},
			"peerDependencies": {
				"@types/node": ">=18"
			}
		},
		"node_modules/@inquirer/number": {
			"version": "3.0.2",
			"resolved": "https://registry.npmjs.org/@inquirer/number/-/number-3.0.2.tgz",
			"integrity": "sha512-MKQhYofdUNk7eqJtz52KvM1dH6R93OMrqHduXCvuefKrsiMjHiMwjc3NZw5Imm2nqY7gWd9xdhYrtcHMJQZUxA==",
			"dev": true,
			"dependencies": {
				"@inquirer/core": "^10.1.0",
				"@inquirer/type": "^3.0.1"
			},
			"engines": {
				"node": ">=18"
			},
			"peerDependencies": {
				"@types/node": ">=18"
			}
		},
		"node_modules/@inquirer/password": {
			"version": "4.0.2",
			"resolved": "https://registry.npmjs.org/@inquirer/password/-/password-4.0.2.tgz",
			"integrity": "sha512-tQXGSu7IO07gsYlGy3VgXRVsbOWqFBMbqAUrJSc1PDTQQ5Qdm+QVwkP0OC0jnUZ62D19iPgXOMO+tnWG+HhjNQ==",
			"dev": true,
			"dependencies": {
				"@inquirer/core": "^10.1.0",
				"@inquirer/type": "^3.0.1",
				"ansi-escapes": "^4.3.2"
			},
			"engines": {
				"node": ">=18"
			},
			"peerDependencies": {
				"@types/node": ">=18"
			}
		},
		"node_modules/@inquirer/prompts": {
			"version": "7.1.0",
			"resolved": "https://registry.npmjs.org/@inquirer/prompts/-/prompts-7.1.0.tgz",
			"integrity": "sha512-5U/XiVRH2pp1X6gpNAjWOglMf38/Ys522ncEHIKT1voRUvSj/DQnR22OVxHnwu5S+rCFaUiPQ57JOtMFQayqYA==",
			"dev": true,
			"dependencies": {
				"@inquirer/checkbox": "^4.0.2",
				"@inquirer/confirm": "^5.0.2",
				"@inquirer/editor": "^4.1.0",
				"@inquirer/expand": "^4.0.2",
				"@inquirer/input": "^4.0.2",
				"@inquirer/number": "^3.0.2",
				"@inquirer/password": "^4.0.2",
				"@inquirer/rawlist": "^4.0.2",
				"@inquirer/search": "^3.0.2",
				"@inquirer/select": "^4.0.2"
			},
			"engines": {
				"node": ">=18"
			},
			"peerDependencies": {
				"@types/node": ">=18"
			}
		},
		"node_modules/@inquirer/rawlist": {
			"version": "4.0.2",
			"resolved": "https://registry.npmjs.org/@inquirer/rawlist/-/rawlist-4.0.2.tgz",
			"integrity": "sha512-3XGcskMoVF8H0Dl1S5TSZ3rMPPBWXRcM0VeNVsS4ByWeWjSeb0lPqfnBg6N7T0608I1B2bSVnbi2cwCrmOD1Yw==",
			"dev": true,
			"dependencies": {
				"@inquirer/core": "^10.1.0",
				"@inquirer/type": "^3.0.1",
				"yoctocolors-cjs": "^2.1.2"
			},
			"engines": {
				"node": ">=18"
			},
			"peerDependencies": {
				"@types/node": ">=18"
			}
		},
		"node_modules/@inquirer/search": {
			"version": "3.0.2",
			"resolved": "https://registry.npmjs.org/@inquirer/search/-/search-3.0.2.tgz",
			"integrity": "sha512-Zv4FC7w4dJ13BOJfKRQCICQfShinGjb1bCEIHxTSnjj2telu3+3RHwHubPG9HyD4aix5s+lyAMEK/wSFD75HLA==",
			"dev": true,
			"dependencies": {
				"@inquirer/core": "^10.1.0",
				"@inquirer/figures": "^1.0.8",
				"@inquirer/type": "^3.0.1",
				"yoctocolors-cjs": "^2.1.2"
			},
			"engines": {
				"node": ">=18"
			},
			"peerDependencies": {
				"@types/node": ">=18"
			}
		},
		"node_modules/@inquirer/select": {
			"version": "4.0.2",
			"resolved": "https://registry.npmjs.org/@inquirer/select/-/select-4.0.2.tgz",
			"integrity": "sha512-uSWUzaSYAEj0hlzxa1mUB6VqrKaYx0QxGBLZzU4xWFxaSyGaXxsSE4OSOwdU24j0xl8OajgayqFXW0l2bkl2kg==",
			"dev": true,
			"dependencies": {
				"@inquirer/core": "^10.1.0",
				"@inquirer/figures": "^1.0.8",
				"@inquirer/type": "^3.0.1",
				"ansi-escapes": "^4.3.2",
				"yoctocolors-cjs": "^2.1.2"
			},
			"engines": {
				"node": ">=18"
			},
			"peerDependencies": {
				"@types/node": ">=18"
			}
		},
		"node_modules/@inquirer/type": {
			"version": "3.0.1",
			"resolved": "https://registry.npmjs.org/@inquirer/type/-/type-3.0.1.tgz",
			"integrity": "sha512-+ksJMIy92sOAiAccGpcKZUc3bYO07cADnscIxHBknEm3uNts3movSmBofc1908BNy5edKscxYeAdaX1NXkHS6A==",
			"dev": true,
			"engines": {
				"node": ">=18"
			},
			"peerDependencies": {
				"@types/node": ">=18"
			}
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
			"version": "6.1.0",
			"resolved": "https://registry.npmjs.org/ansi-regex/-/ansi-regex-6.1.0.tgz",
			"integrity": "sha512-7HSX4QQb4CspciLpVFwyRe79O3xsIZDDLER21kERQ71oaPodF8jL725AgJMFAYbooIqolJoRLuM81SpeUkpkvA==",
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
		"node_modules/@isaacs/fs-minipass": {
			"version": "4.0.1",
			"resolved": "https://registry.npmjs.org/@isaacs/fs-minipass/-/fs-minipass-4.0.1.tgz",
			"integrity": "sha512-wgm9Ehl2jpeqP3zw/7mo3kRHFp5MEDhqAdwy1fTGkHAwnkGOVsgpvQhL8B5n1qlb01jV3n/bI0ZfZp5lWA1k4w==",
			"dev": true,
			"dependencies": {
				"minipass": "^7.0.4"
			},
			"engines": {
				"node": ">=18.0.0"
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
		"node_modules/@jridgewell/sourcemap-codec": {
			"version": "1.5.0",
			"resolved": "https://registry.npmjs.org/@jridgewell/sourcemap-codec/-/sourcemap-codec-1.5.0.tgz",
			"integrity": "sha512-gv3ZRaISU3fjPAgNsriBRqGWQL6quFx04YMPW/zD8XMLsU32mhCCbfbO6KZFLjvYpCZ8zyDEgqsgf+PwPaM7GQ==",
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
		"node_modules/@listr2/prompt-adapter-inquirer": {
			"version": "2.0.18",
			"resolved": "https://registry.npmjs.org/@listr2/prompt-adapter-inquirer/-/prompt-adapter-inquirer-2.0.18.tgz",
			"integrity": "sha512-0hz44rAcrphyXcA8IS7EJ2SCoaBZD2u5goE8S/e+q/DL+dOGpqpcLidVOFeLG3VgML62SXmfRLAhWt0zL1oW4Q==",
			"dev": true,
			"dependencies": {
				"@inquirer/type": "^1.5.5"
			},
			"engines": {
				"node": ">=18.0.0"
			},
			"peerDependencies": {
				"@inquirer/prompts": ">= 3 < 8"
			}
		},
		"node_modules/@listr2/prompt-adapter-inquirer/node_modules/@inquirer/type": {
			"version": "1.5.5",
			"resolved": "https://registry.npmjs.org/@inquirer/type/-/type-1.5.5.tgz",
			"integrity": "sha512-MzICLu4yS7V8AA61sANROZ9vT1H3ooca5dSmI1FjZkzq7o/koMsRfQSzRtFo+F3Ao4Sf1C0bpLKejpKB/+j6MA==",
			"dev": true,
			"dependencies": {
				"mute-stream": "^1.0.0"
			},
			"engines": {
				"node": ">=18"
			}
		},
		"node_modules/@listr2/prompt-adapter-inquirer/node_modules/mute-stream": {
			"version": "1.0.0",
			"resolved": "https://registry.npmjs.org/mute-stream/-/mute-stream-1.0.0.tgz",
			"integrity": "sha512-avsJQhyd+680gKXyG/sQc0nXaC6rBkPOfyHYcFb9+hdkqQkR9bdnkJ0AMZhke0oesPqIO+mFFJ+IdBc7mst4IA==",
			"dev": true,
			"engines": {
				"node": "^14.17.0 || ^16.13.0 || >=18.0.0"
			}
		},
		"node_modules/@lmdb/lmdb-darwin-arm64": {
			"version": "3.1.5",
			"resolved": "https://registry.npmjs.org/@lmdb/lmdb-darwin-arm64/-/lmdb-darwin-arm64-3.1.5.tgz",
			"integrity": "sha512-ue5PSOzHMCIYrfvPP/MRS6hsKKLzqqhcdAvJCO8uFlDdj598EhgnacuOTuqA6uBK5rgiZXfDWyb7DVZSiBKxBA==",
			"cpu": [
				"arm64"
			],
			"dev": true,
			"optional": true,
			"os": [
				"darwin"
			]
		},
		"node_modules/@lmdb/lmdb-darwin-x64": {
			"version": "3.1.5",
			"resolved": "https://registry.npmjs.org/@lmdb/lmdb-darwin-x64/-/lmdb-darwin-x64-3.1.5.tgz",
			"integrity": "sha512-CGhsb0R5vE6mMNCoSfxHFD8QTvBHM51gs4DBeigTYHWnYv2V5YpJkC4rMo5qAAFifuUcc0+a8a3SIU0c9NrfNw==",
			"cpu": [
				"x64"
			],
			"dev": true,
			"optional": true,
			"os": [
				"darwin"
			]
		},
		"node_modules/@lmdb/lmdb-linux-arm": {
			"version": "3.1.5",
			"resolved": "https://registry.npmjs.org/@lmdb/lmdb-linux-arm/-/lmdb-linux-arm-3.1.5.tgz",
			"integrity": "sha512-3WeW328DN+xB5PZdhSWmqE+t3+44xWXEbqQ+caWJEZfOFdLp9yklBZEbVqVdqzznkoaXJYxTCp996KD6HmANeg==",
			"cpu": [
				"arm"
			],
			"dev": true,
			"optional": true,
			"os": [
				"linux"
			]
		},
		"node_modules/@lmdb/lmdb-linux-arm64": {
			"version": "3.1.5",
			"resolved": "https://registry.npmjs.org/@lmdb/lmdb-linux-arm64/-/lmdb-linux-arm64-3.1.5.tgz",
			"integrity": "sha512-LAjaoOcBHGj6fiYB8ureiqPoph4eygbXu4vcOF+hsxiY74n8ilA7rJMmGUT0K0JOB5lmRQHSmor3mytRjS4qeQ==",
			"cpu": [
				"arm64"
			],
			"dev": true,
			"optional": true,
			"os": [
				"linux"
			]
		},
		"node_modules/@lmdb/lmdb-linux-x64": {
			"version": "3.1.5",
			"resolved": "https://registry.npmjs.org/@lmdb/lmdb-linux-x64/-/lmdb-linux-x64-3.1.5.tgz",
			"integrity": "sha512-k/IklElP70qdCXOQixclSl2GPLFiopynGoKX1FqDd1/H0E3Fo1oPwjY2rEVu+0nS3AOw1sryStdXk8CW3cVIsw==",
			"cpu": [
				"x64"
			],
			"dev": true,
			"optional": true,
			"os": [
				"linux"
			]
		},
		"node_modules/@lmdb/lmdb-win32-x64": {
			"version": "3.1.5",
			"resolved": "https://registry.npmjs.org/@lmdb/lmdb-win32-x64/-/lmdb-win32-x64-3.1.5.tgz",
			"integrity": "sha512-KYar6W8nraZfSJspcK7Kp7hdj238X/FNauYbZyrqPBrtsXI1hvI4/KcRcRGP50aQoV7fkKDyJERlrQGMGTZUsA==",
			"cpu": [
				"x64"
			],
			"dev": true,
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
			"optional": true,
			"os": [
				"win32"
			]
		},
		"node_modules/@napi-rs/nice": {
			"version": "1.0.1",
			"resolved": "https://registry.npmjs.org/@napi-rs/nice/-/nice-1.0.1.tgz",
			"integrity": "sha512-zM0mVWSXE0a0h9aKACLwKmD6nHcRiKrPpCfvaKqG1CqDEyjEawId0ocXxVzPMCAm6kkWr2P025msfxXEnt8UGQ==",
			"dev": true,
			"optional": true,
			"engines": {
				"node": ">= 10"
			},
			"funding": {
				"type": "github",
				"url": "https://github.com/sponsors/Brooooooklyn"
			},
			"optionalDependencies": {
				"@napi-rs/nice-android-arm-eabi": "1.0.1",
				"@napi-rs/nice-android-arm64": "1.0.1",
				"@napi-rs/nice-darwin-arm64": "1.0.1",
				"@napi-rs/nice-darwin-x64": "1.0.1",
				"@napi-rs/nice-freebsd-x64": "1.0.1",
				"@napi-rs/nice-linux-arm-gnueabihf": "1.0.1",
				"@napi-rs/nice-linux-arm64-gnu": "1.0.1",
				"@napi-rs/nice-linux-arm64-musl": "1.0.1",
				"@napi-rs/nice-linux-ppc64-gnu": "1.0.1",
				"@napi-rs/nice-linux-riscv64-gnu": "1.0.1",
				"@napi-rs/nice-linux-s390x-gnu": "1.0.1",
				"@napi-rs/nice-linux-x64-gnu": "1.0.1",
				"@napi-rs/nice-linux-x64-musl": "1.0.1",
				"@napi-rs/nice-win32-arm64-msvc": "1.0.1",
				"@napi-rs/nice-win32-ia32-msvc": "1.0.1",
				"@napi-rs/nice-win32-x64-msvc": "1.0.1"
			}
		},
		"node_modules/@napi-rs/nice-android-arm-eabi": {
			"version": "1.0.1",
			"resolved": "https://registry.npmjs.org/@napi-rs/nice-android-arm-eabi/-/nice-android-arm-eabi-1.0.1.tgz",
			"integrity": "sha512-5qpvOu5IGwDo7MEKVqqyAxF90I6aLj4n07OzpARdgDRfz8UbBztTByBp0RC59r3J1Ij8uzYi6jI7r5Lws7nn6w==",
			"cpu": [
				"arm"
			],
			"dev": true,
			"optional": true,
			"os": [
				"android"
			],
			"engines": {
				"node": ">= 10"
			}
		},
		"node_modules/@napi-rs/nice-android-arm64": {
			"version": "1.0.1",
			"resolved": "https://registry.npmjs.org/@napi-rs/nice-android-arm64/-/nice-android-arm64-1.0.1.tgz",
			"integrity": "sha512-GqvXL0P8fZ+mQqG1g0o4AO9hJjQaeYG84FRfZaYjyJtZZZcMjXW5TwkL8Y8UApheJgyE13TQ4YNUssQaTgTyvA==",
			"cpu": [
				"arm64"
			],
			"dev": true,
			"optional": true,
			"os": [
				"android"
			],
			"engines": {
				"node": ">= 10"
			}
		},
		"node_modules/@napi-rs/nice-darwin-arm64": {
			"version": "1.0.1",
			"resolved": "https://registry.npmjs.org/@napi-rs/nice-darwin-arm64/-/nice-darwin-arm64-1.0.1.tgz",
			"integrity": "sha512-91k3HEqUl2fsrz/sKkuEkscj6EAj3/eZNCLqzD2AA0TtVbkQi8nqxZCZDMkfklULmxLkMxuUdKe7RvG/T6s2AA==",
			"cpu": [
				"arm64"
			],
			"dev": true,
			"optional": true,
			"os": [
				"darwin"
			],
			"engines": {
				"node": ">= 10"
			}
		},
		"node_modules/@napi-rs/nice-darwin-x64": {
			"version": "1.0.1",
			"resolved": "https://registry.npmjs.org/@napi-rs/nice-darwin-x64/-/nice-darwin-x64-1.0.1.tgz",
			"integrity": "sha512-jXnMleYSIR/+TAN/p5u+NkCA7yidgswx5ftqzXdD5wgy/hNR92oerTXHc0jrlBisbd7DpzoaGY4cFD7Sm5GlgQ==",
			"cpu": [
				"x64"
			],
			"dev": true,
			"optional": true,
			"os": [
				"darwin"
			],
			"engines": {
				"node": ">= 10"
			}
		},
		"node_modules/@napi-rs/nice-freebsd-x64": {
			"version": "1.0.1",
			"resolved": "https://registry.npmjs.org/@napi-rs/nice-freebsd-x64/-/nice-freebsd-x64-1.0.1.tgz",
			"integrity": "sha512-j+iJ/ezONXRQsVIB/FJfwjeQXX7A2tf3gEXs4WUGFrJjpe/z2KB7sOv6zpkm08PofF36C9S7wTNuzHZ/Iiccfw==",
			"cpu": [
				"x64"
			],
			"dev": true,
			"optional": true,
			"os": [
				"freebsd"
			],
			"engines": {
				"node": ">= 10"
			}
		},
		"node_modules/@napi-rs/nice-linux-arm-gnueabihf": {
			"version": "1.0.1",
			"resolved": "https://registry.npmjs.org/@napi-rs/nice-linux-arm-gnueabihf/-/nice-linux-arm-gnueabihf-1.0.1.tgz",
			"integrity": "sha512-G8RgJ8FYXYkkSGQwywAUh84m946UTn6l03/vmEXBYNJxQJcD+I3B3k5jmjFG/OPiU8DfvxutOP8bi+F89MCV7Q==",
			"cpu": [
				"arm"
			],
			"dev": true,
			"optional": true,
			"os": [
				"linux"
			],
			"engines": {
				"node": ">= 10"
			}
		},
		"node_modules/@napi-rs/nice-linux-arm64-gnu": {
			"version": "1.0.1",
			"resolved": "https://registry.npmjs.org/@napi-rs/nice-linux-arm64-gnu/-/nice-linux-arm64-gnu-1.0.1.tgz",
			"integrity": "sha512-IMDak59/W5JSab1oZvmNbrms3mHqcreaCeClUjwlwDr0m3BoR09ZiN8cKFBzuSlXgRdZ4PNqCYNeGQv7YMTjuA==",
			"cpu": [
				"arm64"
			],
			"dev": true,
			"optional": true,
			"os": [
				"linux"
			],
			"engines": {
				"node": ">= 10"
			}
		},
		"node_modules/@napi-rs/nice-linux-arm64-musl": {
			"version": "1.0.1",
			"resolved": "https://registry.npmjs.org/@napi-rs/nice-linux-arm64-musl/-/nice-linux-arm64-musl-1.0.1.tgz",
			"integrity": "sha512-wG8fa2VKuWM4CfjOjjRX9YLIbysSVV1S3Kgm2Fnc67ap/soHBeYZa6AGMeR5BJAylYRjnoVOzV19Cmkco3QEPw==",
			"cpu": [
				"arm64"
			],
			"dev": true,
			"optional": true,
			"os": [
				"linux"
			],
			"engines": {
				"node": ">= 10"
			}
		},
		"node_modules/@napi-rs/nice-linux-ppc64-gnu": {
			"version": "1.0.1",
			"resolved": "https://registry.npmjs.org/@napi-rs/nice-linux-ppc64-gnu/-/nice-linux-ppc64-gnu-1.0.1.tgz",
			"integrity": "sha512-lxQ9WrBf0IlNTCA9oS2jg/iAjQyTI6JHzABV664LLrLA/SIdD+I1i3Mjf7TsnoUbgopBcCuDztVLfJ0q9ubf6Q==",
			"cpu": [
				"ppc64"
			],
			"dev": true,
			"optional": true,
			"os": [
				"linux"
			],
			"engines": {
				"node": ">= 10"
			}
		},
		"node_modules/@napi-rs/nice-linux-riscv64-gnu": {
			"version": "1.0.1",
			"resolved": "https://registry.npmjs.org/@napi-rs/nice-linux-riscv64-gnu/-/nice-linux-riscv64-gnu-1.0.1.tgz",
			"integrity": "sha512-3xs69dO8WSWBb13KBVex+yvxmUeEsdWexxibqskzoKaWx9AIqkMbWmE2npkazJoopPKX2ULKd8Fm9veEn0g4Ig==",
			"cpu": [
				"riscv64"
			],
			"dev": true,
			"optional": true,
			"os": [
				"linux"
			],
			"engines": {
				"node": ">= 10"
			}
		},
		"node_modules/@napi-rs/nice-linux-s390x-gnu": {
			"version": "1.0.1",
			"resolved": "https://registry.npmjs.org/@napi-rs/nice-linux-s390x-gnu/-/nice-linux-s390x-gnu-1.0.1.tgz",
			"integrity": "sha512-lMFI3i9rlW7hgToyAzTaEybQYGbQHDrpRkg+1gJWEpH0PLAQoZ8jiY0IzakLfNWnVda1eTYYlxxFYzW8Rqczkg==",
			"cpu": [
				"s390x"
			],
			"dev": true,
			"optional": true,
			"os": [
				"linux"
			],
			"engines": {
				"node": ">= 10"
			}
		},
		"node_modules/@napi-rs/nice-linux-x64-gnu": {
			"version": "1.0.1",
			"resolved": "https://registry.npmjs.org/@napi-rs/nice-linux-x64-gnu/-/nice-linux-x64-gnu-1.0.1.tgz",
			"integrity": "sha512-XQAJs7DRN2GpLN6Fb+ZdGFeYZDdGl2Fn3TmFlqEL5JorgWKrQGRUrpGKbgZ25UeZPILuTKJ+OowG2avN8mThBA==",
			"cpu": [
				"x64"
			],
			"dev": true,
			"optional": true,
			"os": [
				"linux"
			],
			"engines": {
				"node": ">= 10"
			}
		},
		"node_modules/@napi-rs/nice-linux-x64-musl": {
			"version": "1.0.1",
			"resolved": "https://registry.npmjs.org/@napi-rs/nice-linux-x64-musl/-/nice-linux-x64-musl-1.0.1.tgz",
			"integrity": "sha512-/rodHpRSgiI9o1faq9SZOp/o2QkKQg7T+DK0R5AkbnI/YxvAIEHf2cngjYzLMQSQgUhxym+LFr+UGZx4vK4QdQ==",
			"cpu": [
				"x64"
			],
			"dev": true,
			"optional": true,
			"os": [
				"linux"
			],
			"engines": {
				"node": ">= 10"
			}
		},
		"node_modules/@napi-rs/nice-win32-arm64-msvc": {
			"version": "1.0.1",
			"resolved": "https://registry.npmjs.org/@napi-rs/nice-win32-arm64-msvc/-/nice-win32-arm64-msvc-1.0.1.tgz",
			"integrity": "sha512-rEcz9vZymaCB3OqEXoHnp9YViLct8ugF+6uO5McifTedjq4QMQs3DHz35xBEGhH3gJWEsXMUbzazkz5KNM5YUg==",
			"cpu": [
				"arm64"
			],
			"dev": true,
			"optional": true,
			"os": [
				"win32"
			],
			"engines": {
				"node": ">= 10"
			}
		},
		"node_modules/@napi-rs/nice-win32-ia32-msvc": {
			"version": "1.0.1",
			"resolved": "https://registry.npmjs.org/@napi-rs/nice-win32-ia32-msvc/-/nice-win32-ia32-msvc-1.0.1.tgz",
			"integrity": "sha512-t7eBAyPUrWL8su3gDxw9xxxqNwZzAqKo0Szv3IjVQd1GpXXVkb6vBBQUuxfIYaXMzZLwlxRQ7uzM2vdUE9ULGw==",
			"cpu": [
				"ia32"
			],
			"dev": true,
			"optional": true,
			"os": [
				"win32"
			],
			"engines": {
				"node": ">= 10"
			}
		},
		"node_modules/@napi-rs/nice-win32-x64-msvc": {
			"version": "1.0.1",
			"resolved": "https://registry.npmjs.org/@napi-rs/nice-win32-x64-msvc/-/nice-win32-x64-msvc-1.0.1.tgz",
			"integrity": "sha512-JlF+uDcatt3St2ntBG8H02F1mM45i5SF9W+bIKiReVE6wiy3o16oBP/yxt+RZ+N6LbCImJXJ6bXNO2kn9AXicg==",
			"cpu": [
				"x64"
			],
			"dev": true,
			"optional": true,
			"os": [
				"win32"
			],
			"engines": {
				"node": ">= 10"
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
			"version": "2.2.2",
			"resolved": "https://registry.npmjs.org/@npmcli/agent/-/agent-2.2.2.tgz",
			"integrity": "sha512-OrcNPXdpSl9UX7qPVRWbmWMCSXrcDa2M9DvrbOTj7ao1S4PlqVFYv9/yLKMkrJKZ/V5A/kDBC690or307i26Og==",
			"dev": true,
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
			"dev": true
		},
		"node_modules/@npmcli/fs": {
			"version": "4.0.0",
			"resolved": "https://registry.npmjs.org/@npmcli/fs/-/fs-4.0.0.tgz",
			"integrity": "sha512-/xGlezI6xfGO9NwuJlnwz/K14qD1kCSAGtacBHnGzeAIuJGazcp45KP5NuyARXoKb7cwulAGWVsbeSxdG/cb0Q==",
			"dev": true,
			"dependencies": {
				"semver": "^7.3.5"
			},
			"engines": {
				"node": "^18.17.0 || >=20.5.0"
			}
		},
		"node_modules/@npmcli/git": {
			"version": "6.0.1",
			"resolved": "https://registry.npmjs.org/@npmcli/git/-/git-6.0.1.tgz",
			"integrity": "sha512-BBWMMxeQzalmKadyimwb2/VVQyJB01PH0HhVSNLHNBDZN/M/h/02P6f8fxedIiFhpMj11SO9Ep5tKTBE7zL2nw==",
			"dev": true,
			"dependencies": {
				"@npmcli/promise-spawn": "^8.0.0",
				"ini": "^5.0.0",
				"lru-cache": "^10.0.1",
				"npm-pick-manifest": "^10.0.0",
				"proc-log": "^5.0.0",
				"promise-inflight": "^1.0.1",
				"promise-retry": "^2.0.1",
				"semver": "^7.3.5",
				"which": "^5.0.0"
			},
			"engines": {
				"node": "^18.17.0 || >=20.5.0"
			}
		},
		"node_modules/@npmcli/git/node_modules/lru-cache": {
			"version": "10.4.3",
			"resolved": "https://registry.npmjs.org/lru-cache/-/lru-cache-10.4.3.tgz",
			"integrity": "sha512-JNAzZcXrCt42VGLuYz0zfAzDfAvJWW6AfYlDBQyDV5DClI2m5sAmK+OIO7s59XfsRsWHp02jAJrRadPRGTt6SQ==",
			"dev": true
		},
		"node_modules/@npmcli/installed-package-contents": {
			"version": "3.0.0",
			"resolved": "https://registry.npmjs.org/@npmcli/installed-package-contents/-/installed-package-contents-3.0.0.tgz",
			"integrity": "sha512-fkxoPuFGvxyrH+OQzyTkX2LUEamrF4jZSmxjAtPPHHGO0dqsQ8tTKjnIS8SAnPHdk2I03BDtSMR5K/4loKg79Q==",
			"dev": true,
			"dependencies": {
				"npm-bundled": "^4.0.0",
				"npm-normalize-package-bin": "^4.0.0"
			},
			"bin": {
				"installed-package-contents": "bin/index.js"
			},
			"engines": {
				"node": "^18.17.0 || >=20.5.0"
			}
		},
		"node_modules/@npmcli/node-gyp": {
			"version": "4.0.0",
			"resolved": "https://registry.npmjs.org/@npmcli/node-gyp/-/node-gyp-4.0.0.tgz",
			"integrity": "sha512-+t5DZ6mO/QFh78PByMq1fGSAub/agLJZDRfJRMeOSNCt8s9YVlTjmGpIPwPhvXTGUIJk+WszlT0rQa1W33yzNA==",
			"dev": true,
			"engines": {
				"node": "^18.17.0 || >=20.5.0"
			}
		},
		"node_modules/@npmcli/package-json": {
			"version": "6.1.0",
			"resolved": "https://registry.npmjs.org/@npmcli/package-json/-/package-json-6.1.0.tgz",
			"integrity": "sha512-t6G+6ZInT4X+tqj2i+wlLIeCKnKOTuz9/VFYDtj+TGTur5q7sp/OYrQA19LdBbWfXDOi0Y4jtedV6xtB8zQ9ug==",
			"dev": true,
			"dependencies": {
				"@npmcli/git": "^6.0.0",
				"glob": "^10.2.2",
				"hosted-git-info": "^8.0.0",
				"json-parse-even-better-errors": "^4.0.0",
				"normalize-package-data": "^7.0.0",
				"proc-log": "^5.0.0",
				"semver": "^7.5.3"
			},
			"engines": {
				"node": "^18.17.0 || >=20.5.0"
			}
		},
		"node_modules/@npmcli/promise-spawn": {
			"version": "8.0.2",
			"resolved": "https://registry.npmjs.org/@npmcli/promise-spawn/-/promise-spawn-8.0.2.tgz",
			"integrity": "sha512-/bNJhjc+o6qL+Dwz/bqfTQClkEO5nTQ1ZEcdCkAQjhkZMHIh22LPG7fNh1enJP1NKWDqYiiABnjFCY7E0zHYtQ==",
			"dev": true,
			"dependencies": {
				"which": "^5.0.0"
			},
			"engines": {
				"node": "^18.17.0 || >=20.5.0"
			}
		},
		"node_modules/@npmcli/redact": {
			"version": "3.0.0",
			"resolved": "https://registry.npmjs.org/@npmcli/redact/-/redact-3.0.0.tgz",
			"integrity": "sha512-/1uFzjVcfzqrgCeGW7+SZ4hv0qLWmKXVzFahZGJ6QuJBj6Myt9s17+JL86i76NV9YSnJRcGXJYQbAU0rn1YTCQ==",
			"dev": true,
			"engines": {
				"node": "^18.17.0 || >=20.5.0"
			}
		},
		"node_modules/@npmcli/run-script": {
			"version": "9.0.1",
			"resolved": "https://registry.npmjs.org/@npmcli/run-script/-/run-script-9.0.1.tgz",
			"integrity": "sha512-q9C0uHrb6B6cm3qXVM32UmpqTKuFGbtP23O2K5sLvPMz2hilKd0ptqGXSpuunOuOmPQb/aT5F/kCXFc1P2gO/A==",
			"dev": true,
			"dependencies": {
				"@npmcli/node-gyp": "^4.0.0",
				"@npmcli/package-json": "^6.0.0",
				"@npmcli/promise-spawn": "^8.0.0",
				"node-gyp": "^10.0.0",
				"proc-log": "^5.0.0",
				"which": "^5.0.0"
			},
			"engines": {
				"node": "^18.17.0 || >=20.5.0"
			}
		},
		"node_modules/@parcel/watcher": {
			"version": "2.5.0",
			"resolved": "https://registry.npmjs.org/@parcel/watcher/-/watcher-2.5.0.tgz",
			"integrity": "sha512-i0GV1yJnm2n3Yq1qw6QrUrd/LI9bE8WEBOTtOkpCXHHdyN3TAGgqAK/DAT05z4fq2x04cARXt2pDmjWjL92iTQ==",
			"dev": true,
			"hasInstallScript": true,
			"optional": true,
			"dependencies": {
				"detect-libc": "^1.0.3",
				"is-glob": "^4.0.3",
				"micromatch": "^4.0.5",
				"node-addon-api": "^7.0.0"
			},
			"engines": {
				"node": ">= 10.0.0"
			},
			"funding": {
				"type": "opencollective",
				"url": "https://opencollective.com/parcel"
			},
			"optionalDependencies": {
				"@parcel/watcher-android-arm64": "2.5.0",
				"@parcel/watcher-darwin-arm64": "2.5.0",
				"@parcel/watcher-darwin-x64": "2.5.0",
				"@parcel/watcher-freebsd-x64": "2.5.0",
				"@parcel/watcher-linux-arm-glibc": "2.5.0",
				"@parcel/watcher-linux-arm-musl": "2.5.0",
				"@parcel/watcher-linux-arm64-glibc": "2.5.0",
				"@parcel/watcher-linux-arm64-musl": "2.5.0",
				"@parcel/watcher-linux-x64-glibc": "2.5.0",
				"@parcel/watcher-linux-x64-musl": "2.5.0",
				"@parcel/watcher-win32-arm64": "2.5.0",
				"@parcel/watcher-win32-ia32": "2.5.0",
				"@parcel/watcher-win32-x64": "2.5.0"
			}
		},
		"node_modules/@parcel/watcher-android-arm64": {
			"version": "2.5.0",
			"resolved": "https://registry.npmjs.org/@parcel/watcher-android-arm64/-/watcher-android-arm64-2.5.0.tgz",
			"integrity": "sha512-qlX4eS28bUcQCdribHkg/herLe+0A9RyYC+mm2PXpncit8z5b3nSqGVzMNR3CmtAOgRutiZ02eIJJgP/b1iEFQ==",
			"cpu": [
				"arm64"
			],
			"dev": true,
			"optional": true,
			"os": [
				"android"
			],
			"engines": {
				"node": ">= 10.0.0"
			},
			"funding": {
				"type": "opencollective",
				"url": "https://opencollective.com/parcel"
			}
		},
		"node_modules/@parcel/watcher-darwin-arm64": {
			"version": "2.5.0",
			"resolved": "https://registry.npmjs.org/@parcel/watcher-darwin-arm64/-/watcher-darwin-arm64-2.5.0.tgz",
			"integrity": "sha512-hyZ3TANnzGfLpRA2s/4U1kbw2ZI4qGxaRJbBH2DCSREFfubMswheh8TeiC1sGZ3z2jUf3s37P0BBlrD3sjVTUw==",
			"cpu": [
				"arm64"
			],
			"dev": true,
			"optional": true,
			"os": [
				"darwin"
			],
			"engines": {
				"node": ">= 10.0.0"
			},
			"funding": {
				"type": "opencollective",
				"url": "https://opencollective.com/parcel"
			}
		},
		"node_modules/@parcel/watcher-darwin-x64": {
			"version": "2.5.0",
			"resolved": "https://registry.npmjs.org/@parcel/watcher-darwin-x64/-/watcher-darwin-x64-2.5.0.tgz",
			"integrity": "sha512-9rhlwd78saKf18fT869/poydQK8YqlU26TMiNg7AIu7eBp9adqbJZqmdFOsbZ5cnLp5XvRo9wcFmNHgHdWaGYA==",
			"cpu": [
				"x64"
			],
			"dev": true,
			"optional": true,
			"os": [
				"darwin"
			],
			"engines": {
				"node": ">= 10.0.0"
			},
			"funding": {
				"type": "opencollective",
				"url": "https://opencollective.com/parcel"
			}
		},
		"node_modules/@parcel/watcher-freebsd-x64": {
			"version": "2.5.0",
			"resolved": "https://registry.npmjs.org/@parcel/watcher-freebsd-x64/-/watcher-freebsd-x64-2.5.0.tgz",
			"integrity": "sha512-syvfhZzyM8kErg3VF0xpV8dixJ+RzbUaaGaeb7uDuz0D3FK97/mZ5AJQ3XNnDsXX7KkFNtyQyFrXZzQIcN49Tw==",
			"cpu": [
				"x64"
			],
			"dev": true,
			"optional": true,
			"os": [
				"freebsd"
			],
			"engines": {
				"node": ">= 10.0.0"
			},
			"funding": {
				"type": "opencollective",
				"url": "https://opencollective.com/parcel"
			}
		},
		"node_modules/@parcel/watcher-linux-arm-glibc": {
			"version": "2.5.0",
			"resolved": "https://registry.npmjs.org/@parcel/watcher-linux-arm-glibc/-/watcher-linux-arm-glibc-2.5.0.tgz",
			"integrity": "sha512-0VQY1K35DQET3dVYWpOaPFecqOT9dbuCfzjxoQyif1Wc574t3kOSkKevULddcR9znz1TcklCE7Ht6NIxjvTqLA==",
			"cpu": [
				"arm"
			],
			"dev": true,
			"optional": true,
			"os": [
				"linux"
			],
			"engines": {
				"node": ">= 10.0.0"
			},
			"funding": {
				"type": "opencollective",
				"url": "https://opencollective.com/parcel"
			}
		},
		"node_modules/@parcel/watcher-linux-arm-musl": {
			"version": "2.5.0",
			"resolved": "https://registry.npmjs.org/@parcel/watcher-linux-arm-musl/-/watcher-linux-arm-musl-2.5.0.tgz",
			"integrity": "sha512-6uHywSIzz8+vi2lAzFeltnYbdHsDm3iIB57d4g5oaB9vKwjb6N6dRIgZMujw4nm5r6v9/BQH0noq6DzHrqr2pA==",
			"cpu": [
				"arm"
			],
			"dev": true,
			"optional": true,
			"os": [
				"linux"
			],
			"engines": {
				"node": ">= 10.0.0"
			},
			"funding": {
				"type": "opencollective",
				"url": "https://opencollective.com/parcel"
			}
		},
		"node_modules/@parcel/watcher-linux-arm64-glibc": {
			"version": "2.5.0",
			"resolved": "https://registry.npmjs.org/@parcel/watcher-linux-arm64-glibc/-/watcher-linux-arm64-glibc-2.5.0.tgz",
			"integrity": "sha512-BfNjXwZKxBy4WibDb/LDCriWSKLz+jJRL3cM/DllnHH5QUyoiUNEp3GmL80ZqxeumoADfCCP19+qiYiC8gUBjA==",
			"cpu": [
				"arm64"
			],
			"dev": true,
			"optional": true,
			"os": [
				"linux"
			],
			"engines": {
				"node": ">= 10.0.0"
			},
			"funding": {
				"type": "opencollective",
				"url": "https://opencollective.com/parcel"
			}
		},
		"node_modules/@parcel/watcher-linux-arm64-musl": {
			"version": "2.5.0",
			"resolved": "https://registry.npmjs.org/@parcel/watcher-linux-arm64-musl/-/watcher-linux-arm64-musl-2.5.0.tgz",
			"integrity": "sha512-S1qARKOphxfiBEkwLUbHjCY9BWPdWnW9j7f7Hb2jPplu8UZ3nes7zpPOW9bkLbHRvWM0WDTsjdOTUgW0xLBN1Q==",
			"cpu": [
				"arm64"
			],
			"dev": true,
			"optional": true,
			"os": [
				"linux"
			],
			"engines": {
				"node": ">= 10.0.0"
			},
			"funding": {
				"type": "opencollective",
				"url": "https://opencollective.com/parcel"
			}
		},
		"node_modules/@parcel/watcher-linux-x64-glibc": {
			"version": "2.5.0",
			"resolved": "https://registry.npmjs.org/@parcel/watcher-linux-x64-glibc/-/watcher-linux-x64-glibc-2.5.0.tgz",
			"integrity": "sha512-d9AOkusyXARkFD66S6zlGXyzx5RvY+chTP9Jp0ypSTC9d4lzyRs9ovGf/80VCxjKddcUvnsGwCHWuF2EoPgWjw==",
			"cpu": [
				"x64"
			],
			"dev": true,
			"optional": true,
			"os": [
				"linux"
			],
			"engines": {
				"node": ">= 10.0.0"
			},
			"funding": {
				"type": "opencollective",
				"url": "https://opencollective.com/parcel"
			}
		},
		"node_modules/@parcel/watcher-linux-x64-musl": {
			"version": "2.5.0",
			"resolved": "https://registry.npmjs.org/@parcel/watcher-linux-x64-musl/-/watcher-linux-x64-musl-2.5.0.tgz",
			"integrity": "sha512-iqOC+GoTDoFyk/VYSFHwjHhYrk8bljW6zOhPuhi5t9ulqiYq1togGJB5e3PwYVFFfeVgc6pbz3JdQyDoBszVaA==",
			"cpu": [
				"x64"
			],
			"dev": true,
			"optional": true,
			"os": [
				"linux"
			],
			"engines": {
				"node": ">= 10.0.0"
			},
			"funding": {
				"type": "opencollective",
				"url": "https://opencollective.com/parcel"
			}
		},
		"node_modules/@parcel/watcher-win32-arm64": {
			"version": "2.5.0",
			"resolved": "https://registry.npmjs.org/@parcel/watcher-win32-arm64/-/watcher-win32-arm64-2.5.0.tgz",
			"integrity": "sha512-twtft1d+JRNkM5YbmexfcH/N4znDtjgysFaV9zvZmmJezQsKpkfLYJ+JFV3uygugK6AtIM2oADPkB2AdhBrNig==",
			"cpu": [
				"arm64"
			],
			"dev": true,
			"optional": true,
			"os": [
				"win32"
			],
			"engines": {
				"node": ">= 10.0.0"
			},
			"funding": {
				"type": "opencollective",
				"url": "https://opencollective.com/parcel"
			}
		},
		"node_modules/@parcel/watcher-win32-ia32": {
			"version": "2.5.0",
			"resolved": "https://registry.npmjs.org/@parcel/watcher-win32-ia32/-/watcher-win32-ia32-2.5.0.tgz",
			"integrity": "sha512-+rgpsNRKwo8A53elqbbHXdOMtY/tAtTzManTWShB5Kk54N8Q9mzNWV7tV+IbGueCbcj826MfWGU3mprWtuf1TA==",
			"cpu": [
				"ia32"
			],
			"dev": true,
			"optional": true,
			"os": [
				"win32"
			],
			"engines": {
				"node": ">= 10.0.0"
			},
			"funding": {
				"type": "opencollective",
				"url": "https://opencollective.com/parcel"
			}
		},
		"node_modules/@parcel/watcher-win32-x64": {
			"version": "2.5.0",
			"resolved": "https://registry.npmjs.org/@parcel/watcher-win32-x64/-/watcher-win32-x64-2.5.0.tgz",
			"integrity": "sha512-lPrxve92zEHdgeff3aiu4gDOIt4u7sJYha6wbdEZDCDUhtjTsOMiaJzG5lMY4GkWH8p0fMmO2Ppq5G5XXG+DQw==",
			"cpu": [
				"x64"
			],
			"dev": true,
			"optional": true,
			"os": [
				"win32"
			],
			"engines": {
				"node": ">= 10.0.0"
			},
			"funding": {
				"type": "opencollective",
				"url": "https://opencollective.com/parcel"
			}
		},
		"node_modules/@parcel/watcher/node_modules/detect-libc": {
			"version": "1.0.3",
			"resolved": "https://registry.npmjs.org/detect-libc/-/detect-libc-1.0.3.tgz",
			"integrity": "sha512-pGjwhsmsp4kL2RTz08wcOlGN83otlqHeD/Z5T8GXZB+/YcpQ/dgo+lbU8ZsGxV0HIvqqxo9l7mqYwyYMD9bKDg==",
			"dev": true,
			"optional": true,
			"bin": {
				"detect-libc": "bin/detect-libc.js"
			},
			"engines": {
				"node": ">=0.10"
			}
		},
		"node_modules/@parcel/watcher/node_modules/node-addon-api": {
			"version": "7.1.1",
			"resolved": "https://registry.npmjs.org/node-addon-api/-/node-addon-api-7.1.1.tgz",
			"integrity": "sha512-5m3bsyrjFWE1xf7nz7YXdN4udnVtXK6/Yfgn5qnahL6bCkf2yKt4k3nuTKAtT4r3IG8JNR2ncsIMdZuAzJjHQQ==",
			"dev": true,
			"optional": true
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
			"version": "4.26.0",
			"resolved": "https://registry.npmjs.org/@rollup/rollup-android-arm-eabi/-/rollup-android-arm-eabi-4.26.0.tgz",
			"integrity": "sha512-gJNwtPDGEaOEgejbaseY6xMFu+CPltsc8/T+diUTTbOQLqD+bnrJq9ulH6WD69TqwqWmrfRAtUv30cCFZlbGTQ==",
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
			"version": "4.26.0",
			"resolved": "https://registry.npmjs.org/@rollup/rollup-android-arm64/-/rollup-android-arm64-4.26.0.tgz",
			"integrity": "sha512-YJa5Gy8mEZgz5JquFruhJODMq3lTHWLm1fOy+HIANquLzfIOzE9RA5ie3JjCdVb9r46qfAQY/l947V0zfGJ0OQ==",
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
			"version": "4.26.0",
			"resolved": "https://registry.npmjs.org/@rollup/rollup-darwin-arm64/-/rollup-darwin-arm64-4.26.0.tgz",
			"integrity": "sha512-ErTASs8YKbqTBoPLp/kA1B1Um5YSom8QAc4rKhg7b9tyyVqDBlQxy7Bf2wW7yIlPGPg2UODDQcbkTlruPzDosw==",
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
			"version": "4.26.0",
			"resolved": "https://registry.npmjs.org/@rollup/rollup-darwin-x64/-/rollup-darwin-x64-4.26.0.tgz",
			"integrity": "sha512-wbgkYDHcdWW+NqP2mnf2NOuEbOLzDblalrOWcPyY6+BRbVhliavon15UploG7PpBRQ2bZJnbmh8o3yLoBvDIHA==",
			"cpu": [
				"x64"
			],
			"dev": true,
			"optional": true,
			"os": [
				"darwin"
			]
		},
		"node_modules/@rollup/rollup-freebsd-arm64": {
			"version": "4.26.0",
			"resolved": "https://registry.npmjs.org/@rollup/rollup-freebsd-arm64/-/rollup-freebsd-arm64-4.26.0.tgz",
			"integrity": "sha512-Y9vpjfp9CDkAG4q/uwuhZk96LP11fBz/bYdyg9oaHYhtGZp7NrbkQrj/66DYMMP2Yo/QPAsVHkV891KyO52fhg==",
			"cpu": [
				"arm64"
			],
			"dev": true,
			"optional": true,
			"os": [
				"freebsd"
			]
		},
		"node_modules/@rollup/rollup-freebsd-x64": {
			"version": "4.26.0",
			"resolved": "https://registry.npmjs.org/@rollup/rollup-freebsd-x64/-/rollup-freebsd-x64-4.26.0.tgz",
			"integrity": "sha512-A/jvfCZ55EYPsqeaAt/yDAG4q5tt1ZboWMHEvKAH9Zl92DWvMIbnZe/f/eOXze65aJaaKbL+YeM0Hz4kLQvdwg==",
			"cpu": [
				"x64"
			],
			"dev": true,
			"optional": true,
			"os": [
				"freebsd"
			]
		},
		"node_modules/@rollup/rollup-linux-arm-gnueabihf": {
			"version": "4.26.0",
			"resolved": "https://registry.npmjs.org/@rollup/rollup-linux-arm-gnueabihf/-/rollup-linux-arm-gnueabihf-4.26.0.tgz",
			"integrity": "sha512-paHF1bMXKDuizaMODm2bBTjRiHxESWiIyIdMugKeLnjuS1TCS54MF5+Y5Dx8Ui/1RBPVRE09i5OUlaLnv8OGnA==",
			"cpu": [
				"arm"
			],
			"dev": true,
			"optional": true,
			"os": [
				"linux"
			]
		},
		"node_modules/@rollup/rollup-linux-arm-musleabihf": {
			"version": "4.26.0",
			"resolved": "https://registry.npmjs.org/@rollup/rollup-linux-arm-musleabihf/-/rollup-linux-arm-musleabihf-4.26.0.tgz",
			"integrity": "sha512-cwxiHZU1GAs+TMxvgPfUDtVZjdBdTsQwVnNlzRXC5QzIJ6nhfB4I1ahKoe9yPmoaA/Vhf7m9dB1chGPpDRdGXg==",
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
			"version": "4.26.0",
			"resolved": "https://registry.npmjs.org/@rollup/rollup-linux-arm64-gnu/-/rollup-linux-arm64-gnu-4.26.0.tgz",
			"integrity": "sha512-4daeEUQutGRCW/9zEo8JtdAgtJ1q2g5oHaoQaZbMSKaIWKDQwQ3Yx0/3jJNmpzrsScIPtx/V+1AfibLisb3AMQ==",
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
			"version": "4.26.0",
			"resolved": "https://registry.npmjs.org/@rollup/rollup-linux-arm64-musl/-/rollup-linux-arm64-musl-4.26.0.tgz",
			"integrity": "sha512-eGkX7zzkNxvvS05ROzJ/cO/AKqNvR/7t1jA3VZDi2vRniLKwAWxUr85fH3NsvtxU5vnUUKFHKh8flIBdlo2b3Q==",
			"cpu": [
				"arm64"
			],
			"dev": true,
			"optional": true,
			"os": [
				"linux"
			]
		},
		"node_modules/@rollup/rollup-linux-powerpc64le-gnu": {
			"version": "4.26.0",
			"resolved": "https://registry.npmjs.org/@rollup/rollup-linux-powerpc64le-gnu/-/rollup-linux-powerpc64le-gnu-4.26.0.tgz",
			"integrity": "sha512-Odp/lgHbW/mAqw/pU21goo5ruWsytP7/HCC/liOt0zcGG0llYWKrd10k9Fj0pdj3prQ63N5yQLCLiE7HTX+MYw==",
			"cpu": [
				"ppc64"
			],
			"dev": true,
			"optional": true,
			"os": [
				"linux"
			]
		},
		"node_modules/@rollup/rollup-linux-riscv64-gnu": {
			"version": "4.26.0",
			"resolved": "https://registry.npmjs.org/@rollup/rollup-linux-riscv64-gnu/-/rollup-linux-riscv64-gnu-4.26.0.tgz",
			"integrity": "sha512-MBR2ZhCTzUgVD0OJdTzNeF4+zsVogIR1U/FsyuFerwcqjZGvg2nYe24SAHp8O5sN8ZkRVbHwlYeHqcSQ8tcYew==",
			"cpu": [
				"riscv64"
			],
			"dev": true,
			"optional": true,
			"os": [
				"linux"
			]
		},
		"node_modules/@rollup/rollup-linux-s390x-gnu": {
			"version": "4.26.0",
			"resolved": "https://registry.npmjs.org/@rollup/rollup-linux-s390x-gnu/-/rollup-linux-s390x-gnu-4.26.0.tgz",
			"integrity": "sha512-YYcg8MkbN17fMbRMZuxwmxWqsmQufh3ZJFxFGoHjrE7bv0X+T6l3glcdzd7IKLiwhT+PZOJCblpnNlz1/C3kGQ==",
			"cpu": [
				"s390x"
			],
			"dev": true,
			"optional": true,
			"os": [
				"linux"
			]
		},
		"node_modules/@rollup/rollup-linux-x64-gnu": {
			"version": "4.26.0",
			"resolved": "https://registry.npmjs.org/@rollup/rollup-linux-x64-gnu/-/rollup-linux-x64-gnu-4.26.0.tgz",
			"integrity": "sha512-ZuwpfjCwjPkAOxpjAEjabg6LRSfL7cAJb6gSQGZYjGhadlzKKywDkCUnJ+KEfrNY1jH5EEoSIKLCb572jSiglA==",
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
			"version": "4.26.0",
			"resolved": "https://registry.npmjs.org/@rollup/rollup-linux-x64-musl/-/rollup-linux-x64-musl-4.26.0.tgz",
			"integrity": "sha512-+HJD2lFS86qkeF8kNu0kALtifMpPCZU80HvwztIKnYwym3KnA1os6nsX4BGSTLtS2QVAGG1P3guRgsYyMA0Yhg==",
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
			"version": "4.26.0",
			"resolved": "https://registry.npmjs.org/@rollup/rollup-win32-arm64-msvc/-/rollup-win32-arm64-msvc-4.26.0.tgz",
			"integrity": "sha512-WUQzVFWPSw2uJzX4j6YEbMAiLbs0BUysgysh8s817doAYhR5ybqTI1wtKARQKo6cGop3pHnrUJPFCsXdoFaimQ==",
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
			"version": "4.26.0",
			"resolved": "https://registry.npmjs.org/@rollup/rollup-win32-ia32-msvc/-/rollup-win32-ia32-msvc-4.26.0.tgz",
			"integrity": "sha512-D4CxkazFKBfN1akAIY6ieyOqzoOoBV1OICxgUblWxff/pSjCA2khXlASUx7mK6W1oP4McqhgcCsu6QaLj3WMWg==",
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
			"version": "4.26.0",
			"resolved": "https://registry.npmjs.org/@rollup/rollup-win32-x64-msvc/-/rollup-win32-x64-msvc-4.26.0.tgz",
			"integrity": "sha512-2x8MO1rm4PGEP0xWbubJW5RtbNLk3puzAMaLQd3B3JHVw4KcHlmXcO+Wewx9zCoo7EUFiMlu/aZbCJ7VjMzAag==",
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
			"version": "19.0.4",
			"resolved": "https://registry.npmjs.org/@schematics/angular/-/angular-19.0.4.tgz",
			"integrity": "sha512-1fXBtkA/AjgMPxHLpGlw7NuT/wggCqAwBAmDnSiRnBBV7Pgs/tHorLgh7A9eoUi3c8CYCuAh8zqWNyjBGGigOQ==",
			"dev": true,
			"license": "MIT",
			"dependencies": {
				"@angular-devkit/core": "19.0.4",
				"@angular-devkit/schematics": "19.0.4",
				"jsonc-parser": "3.3.1"
			},
			"engines": {
				"node": "^18.19.1 || ^20.11.1 || >=22.0.0",
				"npm": "^6.11.0 || ^7.5.6 || >=8.0.0",
				"yarn": ">= 1.13.0"
			}
		},
		"node_modules/@sigstore/bundle": {
			"version": "3.0.0",
			"resolved": "https://registry.npmjs.org/@sigstore/bundle/-/bundle-3.0.0.tgz",
			"integrity": "sha512-XDUYX56iMPAn/cdgh/DTJxz5RWmqKV4pwvUAEKEWJl+HzKdCd/24wUa9JYNMlDSCb7SUHAdtksxYX779Nne/Zg==",
			"dev": true,
			"dependencies": {
				"@sigstore/protobuf-specs": "^0.3.2"
			},
			"engines": {
				"node": "^18.17.0 || >=20.5.0"
			}
		},
		"node_modules/@sigstore/core": {
			"version": "2.0.0",
			"resolved": "https://registry.npmjs.org/@sigstore/core/-/core-2.0.0.tgz",
			"integrity": "sha512-nYxaSb/MtlSI+JWcwTHQxyNmWeWrUXJJ/G4liLrGG7+tS4vAz6LF3xRXqLH6wPIVUoZQel2Fs4ddLx4NCpiIYg==",
			"dev": true,
			"engines": {
				"node": "^18.17.0 || >=20.5.0"
			}
		},
		"node_modules/@sigstore/protobuf-specs": {
			"version": "0.3.2",
			"resolved": "https://registry.npmjs.org/@sigstore/protobuf-specs/-/protobuf-specs-0.3.2.tgz",
			"integrity": "sha512-c6B0ehIWxMI8wiS/bj6rHMPqeFvngFV7cDU/MY+B16P9Z3Mp9k8L93eYZ7BYzSickzuqAQqAq0V956b3Ju6mLw==",
			"dev": true,
			"engines": {
				"node": "^16.14.0 || >=18.0.0"
			}
		},
		"node_modules/@sigstore/sign": {
			"version": "3.0.0",
			"resolved": "https://registry.npmjs.org/@sigstore/sign/-/sign-3.0.0.tgz",
			"integrity": "sha512-UjhDMQOkyDoktpXoc5YPJpJK6IooF2gayAr5LvXI4EL7O0vd58okgfRcxuaH+YTdhvb5aa1Q9f+WJ0c2sVuYIw==",
			"dev": true,
			"dependencies": {
				"@sigstore/bundle": "^3.0.0",
				"@sigstore/core": "^2.0.0",
				"@sigstore/protobuf-specs": "^0.3.2",
				"make-fetch-happen": "^14.0.1",
				"proc-log": "^5.0.0",
				"promise-retry": "^2.0.1"
			},
			"engines": {
				"node": "^18.17.0 || >=20.5.0"
			}
		},
		"node_modules/@sigstore/sign/node_modules/@npmcli/agent": {
			"version": "3.0.0",
			"resolved": "https://registry.npmjs.org/@npmcli/agent/-/agent-3.0.0.tgz",
			"integrity": "sha512-S79NdEgDQd/NGCay6TCoVzXSj74skRZIKJcpJjC5lOq34SZzyI6MqtiiWoiVWoVrTcGjNeC4ipbh1VIHlpfF5Q==",
			"dev": true,
			"dependencies": {
				"agent-base": "^7.1.0",
				"http-proxy-agent": "^7.0.0",
				"https-proxy-agent": "^7.0.1",
				"lru-cache": "^10.0.1",
				"socks-proxy-agent": "^8.0.3"
			},
			"engines": {
				"node": "^18.17.0 || >=20.5.0"
			}
		},
		"node_modules/@sigstore/sign/node_modules/lru-cache": {
			"version": "10.4.3",
			"resolved": "https://registry.npmjs.org/lru-cache/-/lru-cache-10.4.3.tgz",
			"integrity": "sha512-JNAzZcXrCt42VGLuYz0zfAzDfAvJWW6AfYlDBQyDV5DClI2m5sAmK+OIO7s59XfsRsWHp02jAJrRadPRGTt6SQ==",
			"dev": true
		},
		"node_modules/@sigstore/sign/node_modules/make-fetch-happen": {
			"version": "14.0.3",
			"resolved": "https://registry.npmjs.org/make-fetch-happen/-/make-fetch-happen-14.0.3.tgz",
			"integrity": "sha512-QMjGbFTP0blj97EeidG5hk/QhKQ3T4ICckQGLgz38QF7Vgbk6e6FTARN8KhKxyBbWn8R0HU+bnw8aSoFPD4qtQ==",
			"dev": true,
			"dependencies": {
				"@npmcli/agent": "^3.0.0",
				"cacache": "^19.0.1",
				"http-cache-semantics": "^4.1.1",
				"minipass": "^7.0.2",
				"minipass-fetch": "^4.0.0",
				"minipass-flush": "^1.0.5",
				"minipass-pipeline": "^1.2.4",
				"negotiator": "^1.0.0",
				"proc-log": "^5.0.0",
				"promise-retry": "^2.0.1",
				"ssri": "^12.0.0"
			},
			"engines": {
				"node": "^18.17.0 || >=20.5.0"
			}
		},
		"node_modules/@sigstore/sign/node_modules/minipass-fetch": {
			"version": "4.0.0",
			"resolved": "https://registry.npmjs.org/minipass-fetch/-/minipass-fetch-4.0.0.tgz",
			"integrity": "sha512-2v6aXUXwLP1Epd/gc32HAMIWoczx+fZwEPRHm/VwtrJzRGwR1qGZXEYV3Zp8ZjjbwaZhMrM6uHV4KVkk+XCc2w==",
			"dev": true,
			"dependencies": {
				"minipass": "^7.0.3",
				"minipass-sized": "^1.0.3",
				"minizlib": "^3.0.1"
			},
			"engines": {
				"node": "^18.17.0 || >=20.5.0"
			},
			"optionalDependencies": {
				"encoding": "^0.1.13"
			}
		},
		"node_modules/@sigstore/sign/node_modules/minizlib": {
			"version": "3.0.1",
			"resolved": "https://registry.npmjs.org/minizlib/-/minizlib-3.0.1.tgz",
			"integrity": "sha512-umcy022ILvb5/3Djuu8LWeqUa8D68JaBzlttKeMWen48SjabqS3iY5w/vzeMzMUNhLDifyhbOwKDSznB1vvrwg==",
			"dev": true,
			"dependencies": {
				"minipass": "^7.0.4",
				"rimraf": "^5.0.5"
			},
			"engines": {
				"node": ">= 18"
			}
		},
		"node_modules/@sigstore/sign/node_modules/negotiator": {
			"version": "1.0.0",
			"resolved": "https://registry.npmjs.org/negotiator/-/negotiator-1.0.0.tgz",
			"integrity": "sha512-8Ofs/AUQh8MaEcrlq5xOX0CQ9ypTF5dl78mjlMNfOK08fzpgTHQRQPBxcPlEtIw0yRpws+Zo/3r+5WRby7u3Gg==",
			"dev": true,
			"engines": {
				"node": ">= 0.6"
			}
		},
		"node_modules/@sigstore/tuf": {
			"version": "3.0.0",
			"resolved": "https://registry.npmjs.org/@sigstore/tuf/-/tuf-3.0.0.tgz",
			"integrity": "sha512-9Xxy/8U5OFJu7s+OsHzI96IX/OzjF/zj0BSSaWhgJgTqtlBhQIV2xdrQI5qxLD7+CWWDepadnXAxzaZ3u9cvRw==",
			"dev": true,
			"dependencies": {
				"@sigstore/protobuf-specs": "^0.3.2",
				"tuf-js": "^3.0.1"
			},
			"engines": {
				"node": "^18.17.0 || >=20.5.0"
			}
		},
		"node_modules/@sigstore/verify": {
			"version": "2.0.0",
			"resolved": "https://registry.npmjs.org/@sigstore/verify/-/verify-2.0.0.tgz",
			"integrity": "sha512-Ggtq2GsJuxFNUvQzLoXqRwS4ceRfLAJnrIHUDrzAD0GgnOhwujJkKkxM/s5Bako07c3WtAs/sZo5PJq7VHjeDg==",
			"dev": true,
			"dependencies": {
				"@sigstore/bundle": "^3.0.0",
				"@sigstore/core": "^2.0.0",
				"@sigstore/protobuf-specs": "^0.3.2"
			},
			"engines": {
				"node": "^18.17.0 || >=20.5.0"
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
			"version": "3.0.1",
			"resolved": "https://registry.npmjs.org/@tufjs/models/-/models-3.0.1.tgz",
			"integrity": "sha512-UUYHISyhCU3ZgN8yaear3cGATHb3SMuKHsQ/nVbHXcmnBf+LzQ/cQfhNG+rfaSHgqGKNEm2cOCLVLELStUQ1JA==",
			"dev": true,
			"dependencies": {
				"@tufjs/canonical-json": "2.0.0",
				"minimatch": "^9.0.5"
			},
			"engines": {
				"node": "^18.17.0 || >=20.5.0"
			}
		},
		"node_modules/@types/estree": {
			"version": "1.0.6",
			"resolved": "https://registry.npmjs.org/@types/estree/-/estree-1.0.6.tgz",
			"integrity": "sha512-AYnb1nQyY49te+VRAVgmzfcgjYS91mY5P0TKUDCLEM+gNnA+3T6rWITXRLYCpahpqSQbN5cE+gHpnPyXjHWxcw==",
			"dev": true
		},
		"node_modules/@types/node": {
			"version": "22.10.1",
			"resolved": "https://registry.npmjs.org/@types/node/-/node-22.10.1.tgz",
			"integrity": "sha512-qKgsUwfHZV2WCWLAnVP1JqnpE6Im6h3Y0+fYgMTasNQ7V++CBX5OT1as0g0f+OyubbFqhf6XVNIsmN4IIhEgGQ==",
			"dev": true,
			"peer": true,
			"dependencies": {
				"undici-types": "~6.20.0"
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
		"node_modules/agent-base": {
			"version": "7.1.1",
			"resolved": "https://registry.npmjs.org/agent-base/-/agent-base-7.1.1.tgz",
			"integrity": "sha512-H0TSyFNDMomMNJQBn8wFV5YC/2eJ+VXECwOadZJT554xP6cODZHPX3H9QMQECxvrgiSOP1pHjy1sMWQVYJOUOA==",
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
			"version": "8.17.1",
			"resolved": "https://registry.npmjs.org/ajv/-/ajv-8.17.1.tgz",
			"integrity": "sha512-B/gBuNg5SiMTrPkC+A2+cW0RszwxYmn6VYxB/inlBStS5nx6xHIt/ehKRhIMhqusl7a8LjQoZnjCs5vhwxOQ1g==",
			"dev": true,
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
		"node_modules/any-promise": {
			"version": "1.3.0",
			"resolved": "https://registry.npmjs.org/any-promise/-/any-promise-1.3.0.tgz",
			"integrity": "sha512-7UvmKalWRt1wgjL1RrGxoSJW/0QZFIegpeGvZG9kjp8vrRu55XTHbwnqq2GpXm9uLbcuhxm3IqX9OB4MZR1b2A==",
			"dev": true
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
		"node_modules/arg": {
			"version": "5.0.2",
			"resolved": "https://registry.npmjs.org/arg/-/arg-5.0.2.tgz",
			"integrity": "sha512-PYjyFOLKQ9y57JvQ6QLo8dAgNqswh8M1RMJYdQduT6xbWSgK36P/Z/v+p888pM69jMMfS8Xd8F6I1kQ/I9HUGg==",
			"dev": true
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
		"node_modules/beasties": {
			"version": "0.1.0",
			"resolved": "https://registry.npmjs.org/beasties/-/beasties-0.1.0.tgz",
			"integrity": "sha512-+Ssscd2gVG24qRNC+E2g88D+xsQW4xwakWtKAiGEQ3Pw54/FGdyo9RrfxhGhEv6ilFVbB7r3Lgx+QnAxnSpECw==",
			"dev": true,
			"dependencies": {
				"css-select": "^5.1.0",
				"css-what": "^6.1.0",
				"dom-serializer": "^2.0.0",
				"domhandler": "^5.0.3",
				"htmlparser2": "^9.0.0",
				"picocolors": "^1.1.1",
				"postcss": "^8.4.47",
				"postcss-media-query-parser": "^0.2.3"
			}
		},
		"node_modules/binary-extensions": {
			"version": "2.3.0",
			"resolved": "https://registry.npmjs.org/binary-extensions/-/binary-extensions-2.3.0.tgz",
			"integrity": "sha512-Ceh+7ox5qe7LJuLHoY0feh3pHuUDHAcRUeyL2VYghZwfpkNIy/+8Ocg0a3UuSoYzavmylwuLWQOf3hl0jjMMIw==",
			"dev": true,
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
			"dependencies": {
				"buffer": "^5.5.0",
				"inherits": "^2.0.4",
				"readable-stream": "^3.4.0"
			}
		},
		"node_modules/boolbase": {
			"version": "1.0.0",
			"resolved": "https://registry.npmjs.org/boolbase/-/boolbase-1.0.0.tgz",
			"integrity": "sha512-JZOSA7Mo9sNGB8+UjSgzdLtokWAky1zbztM3WRLCbZ70/3cTANmQmOdR7y2g+J0e2WXywy1yS468tY+IruqEww==",
			"dev": true
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
			"version": "3.0.3",
			"resolved": "https://registry.npmjs.org/braces/-/braces-3.0.3.tgz",
			"integrity": "sha512-yQbXgO/OSZVD2IsiLlro+7Hf6Q18EJrKSEsdoMzKePKXct3gvD8oLcOQdIzGupr5Fj+EDe8gO/lxc1BzfMpxvA==",
			"dev": true,
			"dependencies": {
				"fill-range": "^7.1.1"
			},
			"engines": {
				"node": ">=8"
			}
		},
		"node_modules/browserslist": {
			"version": "4.24.2",
			"resolved": "https://registry.npmjs.org/browserslist/-/browserslist-4.24.2.tgz",
			"integrity": "sha512-ZIc+Q62revdMcqC6aChtW4jz3My3klmCO1fEmINZY/8J3EpBg5/A/D0AKmBveUh6pgoeycoMkVMko84tuYS+Gg==",
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
				"caniuse-lite": "^1.0.30001669",
				"electron-to-chromium": "^1.5.41",
				"node-releases": "^2.0.18",
				"update-browserslist-db": "^1.1.1"
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
		"node_modules/cacache": {
			"version": "19.0.1",
			"resolved": "https://registry.npmjs.org/cacache/-/cacache-19.0.1.tgz",
			"integrity": "sha512-hdsUxulXCi5STId78vRVYEtDAjq99ICAUktLTeTYsLoTE6Z8dS0c8pWNCxwdrk9YfJeobDZc2Y186hD/5ZQgFQ==",
			"dev": true,
			"dependencies": {
				"@npmcli/fs": "^4.0.0",
				"fs-minipass": "^3.0.0",
				"glob": "^10.2.2",
				"lru-cache": "^10.0.1",
				"minipass": "^7.0.3",
				"minipass-collect": "^2.0.1",
				"minipass-flush": "^1.0.5",
				"minipass-pipeline": "^1.2.4",
				"p-map": "^7.0.2",
				"ssri": "^12.0.0",
				"tar": "^7.4.3",
				"unique-filename": "^4.0.0"
			},
			"engines": {
				"node": "^18.17.0 || >=20.5.0"
			}
		},
		"node_modules/cacache/node_modules/chownr": {
			"version": "3.0.0",
			"resolved": "https://registry.npmjs.org/chownr/-/chownr-3.0.0.tgz",
			"integrity": "sha512-+IxzY9BZOQd/XuYPRmrvEVjF/nqj5kgT4kEq7VofrDoM1MxoRjEWkrCC3EtLi59TVawxTAn+orJwFQcrqEN1+g==",
			"dev": true,
			"engines": {
				"node": ">=18"
			}
		},
		"node_modules/cacache/node_modules/lru-cache": {
			"version": "10.4.3",
			"resolved": "https://registry.npmjs.org/lru-cache/-/lru-cache-10.4.3.tgz",
			"integrity": "sha512-JNAzZcXrCt42VGLuYz0zfAzDfAvJWW6AfYlDBQyDV5DClI2m5sAmK+OIO7s59XfsRsWHp02jAJrRadPRGTt6SQ==",
			"dev": true
		},
		"node_modules/cacache/node_modules/minizlib": {
			"version": "3.0.1",
			"resolved": "https://registry.npmjs.org/minizlib/-/minizlib-3.0.1.tgz",
			"integrity": "sha512-umcy022ILvb5/3Djuu8LWeqUa8D68JaBzlttKeMWen48SjabqS3iY5w/vzeMzMUNhLDifyhbOwKDSznB1vvrwg==",
			"dev": true,
			"dependencies": {
				"minipass": "^7.0.4",
				"rimraf": "^5.0.5"
			},
			"engines": {
				"node": ">= 18"
			}
		},
		"node_modules/cacache/node_modules/mkdirp": {
			"version": "3.0.1",
			"resolved": "https://registry.npmjs.org/mkdirp/-/mkdirp-3.0.1.tgz",
			"integrity": "sha512-+NsyUUAZDmo6YVHzL/stxSu3t9YS1iljliy3BSDrXJ/dkn1KYdmtZODGGjLcc9XLgVVpH4KshHB8XmZgMhaBXg==",
			"dev": true,
			"bin": {
				"mkdirp": "dist/cjs/src/bin.js"
			},
			"engines": {
				"node": ">=10"
			},
			"funding": {
				"url": "https://github.com/sponsors/isaacs"
			}
		},
		"node_modules/cacache/node_modules/tar": {
			"version": "7.4.3",
			"resolved": "https://registry.npmjs.org/tar/-/tar-7.4.3.tgz",
			"integrity": "sha512-5S7Va8hKfV7W5U6g3aYxXmlPoZVAwUMy9AOKyF2fVuZa2UD3qZjg578OrLRt8PcNN1PleVaL/5/yYATNL0ICUw==",
			"dev": true,
			"dependencies": {
				"@isaacs/fs-minipass": "^4.0.0",
				"chownr": "^3.0.0",
				"minipass": "^7.1.2",
				"minizlib": "^3.0.1",
				"mkdirp": "^3.0.1",
				"yallist": "^5.0.0"
			},
			"engines": {
				"node": ">=18"
			}
		},
		"node_modules/cacache/node_modules/yallist": {
			"version": "5.0.0",
			"resolved": "https://registry.npmjs.org/yallist/-/yallist-5.0.0.tgz",
			"integrity": "sha512-YgvUTfwqyc7UXVMrB+SImsVYSmTS8X/tSrtdNZMImM+n7+QTriRXyXim0mBrTXNeqzVF0KWGgHPeiyViFFrNDw==",
			"dev": true,
			"engines": {
				"node": ">=18"
			}
		},
		"node_modules/camelcase-css": {
			"version": "2.0.1",
			"resolved": "https://registry.npmjs.org/camelcase-css/-/camelcase-css-2.0.1.tgz",
			"integrity": "sha512-QOSvevhslijgYwRx6Rv7zKdMF8lbRmx+uQGx2+vDc+KI/eBnsy9kit5aj23AgGu3pa4t9AgwbnXWqS+iOY+2aA==",
			"dev": true,
			"engines": {
				"node": ">= 6"
			}
		},
		"node_modules/caniuse-lite": {
			"version": "1.0.30001685",
			"resolved": "https://registry.npmjs.org/caniuse-lite/-/caniuse-lite-1.0.30001685.tgz",
			"integrity": "sha512-e/kJN1EMyHQzgcMEEgoo+YTCO1NGCmIYHk5Qk8jT6AazWemS5QFKJ5ShCJlH3GZrNIdZofcNCEwZqbMjjKzmnA==",
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
		"node_modules/chardet": {
			"version": "0.7.0",
			"resolved": "https://registry.npmjs.org/chardet/-/chardet-0.7.0.tgz",
			"integrity": "sha512-mT8iDcrh03qDGRRmoA2hmBJnxpllMR+0/0qlzjqZES6NdiWDcZkCNAk4rPFZ9Q85r27unkiNNg8ZOiwZXBHwcA==",
			"dev": true
		},
		"node_modules/chokidar": {
			"version": "4.0.1",
			"resolved": "https://registry.npmjs.org/chokidar/-/chokidar-4.0.1.tgz",
			"integrity": "sha512-n8enUVCED/KVRQlab1hr3MVpcVMvxtZjmEa956u+4YijlmQED223XMSYj2tLuKvr4jcCTzNNMpQDUer72MMmzA==",
			"dev": true,
			"dependencies": {
				"readdirp": "^4.0.1"
			},
			"engines": {
				"node": ">= 14.16.0"
			},
			"funding": {
				"url": "https://paulmillr.com/funding/"
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
			"version": "5.0.0",
			"resolved": "https://registry.npmjs.org/cli-cursor/-/cli-cursor-5.0.0.tgz",
			"integrity": "sha512-aCj4O5wKyszjMmDT4tZj93kxyydN/K5zPWSCe6/0AV/AA1pqe5ZBIw0a2ZfPQV7lL5/yb5HsUreJ6UFAF1tEQw==",
			"dev": true,
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
		"node_modules/cliui/node_modules/emoji-regex": {
			"version": "8.0.0",
			"resolved": "https://registry.npmjs.org/emoji-regex/-/emoji-regex-8.0.0.tgz",
			"integrity": "sha512-MSjYzcWNOA0ewAHpz0MxpYFvwg6yjy1NG3xteoqz644VCo/RPgnr1/GGt+ic3iJTzQ8Eu3TdM14SawnVUmGE6A==",
			"dev": true
		},
		"node_modules/cliui/node_modules/is-fullwidth-code-point": {
			"version": "3.0.0",
			"resolved": "https://registry.npmjs.org/is-fullwidth-code-point/-/is-fullwidth-code-point-3.0.0.tgz",
			"integrity": "sha512-zymm5+u+sCsSWyD9qNaejV3DFvhCKclKdizYaJUuHA83RLjb7nSuGnddCHGv0hk+KY7BMAlsWeK4Ueg6EV6XQg==",
			"dev": true,
			"engines": {
				"node": ">=8"
			}
		},
		"node_modules/cliui/node_modules/string-width": {
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
		"node_modules/color-convert": {
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
		"node_modules/color-name": {
			"version": "1.1.4",
			"resolved": "https://registry.npmjs.org/color-name/-/color-name-1.1.4.tgz",
			"integrity": "sha512-dOy+3AuW3a2wNbZHIuMZpTcgjGuLU/uBL/ubcZF9OXbDo8ff4O8yVp5Bf0efS8uEoYo5q4Fx7dY9OgQGXgAsQA==",
			"dev": true
		},
		"node_modules/colorette": {
			"version": "2.0.20",
			"resolved": "https://registry.npmjs.org/colorette/-/colorette-2.0.20.tgz",
			"integrity": "sha512-IfEDxwoWIjkeXL1eXcDiow4UbKjhLdq6/EuSVR9GMN7KVH3r9gQ83e73hsz1Nd1T3ijd5xv1wcWRYO+D6kCI2w==",
			"dev": true
		},
		"node_modules/commander": {
			"version": "4.1.1",
			"resolved": "https://registry.npmjs.org/commander/-/commander-4.1.1.tgz",
			"integrity": "sha512-NOKm8xhkzAjzFx8B2v5OAHT+u5pRQc2UCa2Vq9jYL/31o2wi9mxBA7LIFs3sV5VSC49z6pEhfbMULvShKj26WA==",
			"dev": true,
			"engines": {
				"node": ">= 6"
			}
		},
		"node_modules/convert-source-map": {
			"version": "1.9.0",
			"resolved": "https://registry.npmjs.org/convert-source-map/-/convert-source-map-1.9.0.tgz",
			"integrity": "sha512-ASFBup0Mz1uyiIjANan1jzLQami9z1PoYSZCiiYW2FczPbenXc45FZdBZLzOT+r6+iciuEModtmCti+hjaAk0A==",
			"dev": true
		},
		"node_modules/cross-spawn": {
			"version": "7.0.6",
			"resolved": "https://registry.npmjs.org/cross-spawn/-/cross-spawn-7.0.6.tgz",
			"integrity": "sha512-uV2QOWP2nWzsy2aMp8aRibhi9dlzF5Hgh5SHaB9OiTGEyDTiJJyx0uy51QXdyWbtAHNua4XJzUKca3OzKUd3vA==",
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
		"node_modules/css-selector-tokenizer": {
			"version": "0.8.0",
			"resolved": "https://registry.npmjs.org/css-selector-tokenizer/-/css-selector-tokenizer-0.8.0.tgz",
			"integrity": "sha512-Jd6Ig3/pe62/qe5SBPTN8h8LeUg/pT4lLgtavPf7updwwHpvFzxvOQBHYj2LZDMjUnBzgvIUSjRcf6oT5HzHFg==",
			"dev": true,
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
		"node_modules/culori": {
			"version": "3.3.0",
			"resolved": "https://registry.npmjs.org/culori/-/culori-3.3.0.tgz",
			"integrity": "sha512-pHJg+jbuFsCjz9iclQBqyL3B2HLCBF71BwVNujUYEvCeQMvV97R59MNK3R2+jgJ3a1fcZgI9B3vYgz8lzr/BFQ==",
			"dev": true,
			"engines": {
				"node": "^12.20.0 || ^14.13.1 || >=16.0.0"
			}
		},
		"node_modules/daisyui": {
			"version": "4.12.20",
			"resolved": "https://registry.npmjs.org/daisyui/-/daisyui-4.12.20.tgz",
			"integrity": "sha512-uHr3SQsd2yTjRdVuswTiqGFvZTxX0sGSBRa8JJdbKgmZCk/kRFh4B7Z2jg9vLIdwsHTHPyPgCkZadQo1ce0tAw==",
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
			"version": "4.3.7",
			"resolved": "https://registry.npmjs.org/debug/-/debug-4.3.7.tgz",
			"integrity": "sha512-Er2nc/H7RrMXZBFCEim6TCmMk02Z8vLC2Rbi1KEBggpo0fS6l0S1nnapwmIi3yW/+GOJap1Krg4w0Hg80oCqgQ==",
			"dev": true,
			"dependencies": {
				"ms": "^2.1.3"
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
		"node_modules/detect-libc": {
			"version": "2.0.3",
			"resolved": "https://registry.npmjs.org/detect-libc/-/detect-libc-2.0.3.tgz",
			"integrity": "sha512-bwy0MGW55bG41VqxxypOsdSdGqLwXPI/focwgTYCFMbdUiBAxLg9CFzG08sz2aqzknwiX7Hkl0bQENjg8iLByw==",
			"dev": true,
			"optional": true,
			"engines": {
				"node": ">=8"
			}
		},
		"node_modules/didyoumean": {
			"version": "1.2.2",
			"resolved": "https://registry.npmjs.org/didyoumean/-/didyoumean-1.2.2.tgz",
			"integrity": "sha512-gxtyfqMg7GKyhQmb056K7M3xszy/myH8w+B4RT+QXBQsvAOdc3XymqDDPHx1BgPgsdAA5SIifona89YtRATDzw==",
			"dev": true
		},
		"node_modules/dlv": {
			"version": "1.1.3",
			"resolved": "https://registry.npmjs.org/dlv/-/dlv-1.1.3.tgz",
			"integrity": "sha512-+HlytyjlPKnIG8XuRG8WvmBP8xs8P71y+SKKS6ZXWoEgLuePxtDoUEiH7WkdePWrQ5JBpE6aoVqfZfJUQkjXwA==",
			"dev": true
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
		"node_modules/electron-to-chromium": {
			"version": "1.5.67",
			"resolved": "https://registry.npmjs.org/electron-to-chromium/-/electron-to-chromium-1.5.67.tgz",
			"integrity": "sha512-nz88NNBsD7kQSAGGJyp8hS6xSPtWwqNogA0mjtc2nUYeEf3nURK9qpV18TuBdDmEDgVWotS8Wkzf+V52dSQ/LQ==",
			"dev": true
		},
		"node_modules/emoji-regex": {
			"version": "10.4.0",
			"resolved": "https://registry.npmjs.org/emoji-regex/-/emoji-regex-10.4.0.tgz",
			"integrity": "sha512-EC+0oUMY1Rqm4O6LLrgjtYDvcVYTy7chDnM4Q7030tP4Kwj3u/pR6gP9ygnp2CJMK5Gq+9Q2oqmrFJAz01DXjw==",
			"dev": true
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
		"node_modules/environment": {
			"version": "1.1.0",
			"resolved": "https://registry.npmjs.org/environment/-/environment-1.1.0.tgz",
			"integrity": "sha512-xUtoPkMggbz0MPyPiIWr1Kp4aeWJjDZ6SMvURhimjdZgsRuDplF5/s9hcgGhyXMhs+6vpnuoiZ2kFiu3FMnS8Q==",
			"dev": true,
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
			"dev": true
		},
		"node_modules/esbuild": {
			"version": "0.24.0",
			"resolved": "https://registry.npmjs.org/esbuild/-/esbuild-0.24.0.tgz",
			"integrity": "sha512-FuLPevChGDshgSicjisSooU0cemp/sGXR841D5LHMB7mTVOmsEHcAxaH3irL53+8YDIeVNQEySh4DaYU/iuPqQ==",
			"dev": true,
			"hasInstallScript": true,
			"bin": {
				"esbuild": "bin/esbuild"
			},
			"engines": {
				"node": ">=18"
			},
			"optionalDependencies": {
				"@esbuild/aix-ppc64": "0.24.0",
				"@esbuild/android-arm": "0.24.0",
				"@esbuild/android-arm64": "0.24.0",
				"@esbuild/android-x64": "0.24.0",
				"@esbuild/darwin-arm64": "0.24.0",
				"@esbuild/darwin-x64": "0.24.0",
				"@esbuild/freebsd-arm64": "0.24.0",
				"@esbuild/freebsd-x64": "0.24.0",
				"@esbuild/linux-arm": "0.24.0",
				"@esbuild/linux-arm64": "0.24.0",
				"@esbuild/linux-ia32": "0.24.0",
				"@esbuild/linux-loong64": "0.24.0",
				"@esbuild/linux-mips64el": "0.24.0",
				"@esbuild/linux-ppc64": "0.24.0",
				"@esbuild/linux-riscv64": "0.24.0",
				"@esbuild/linux-s390x": "0.24.0",
				"@esbuild/linux-x64": "0.24.0",
				"@esbuild/netbsd-x64": "0.24.0",
				"@esbuild/openbsd-arm64": "0.24.0",
				"@esbuild/openbsd-x64": "0.24.0",
				"@esbuild/sunos-x64": "0.24.0",
				"@esbuild/win32-arm64": "0.24.0",
				"@esbuild/win32-ia32": "0.24.0",
				"@esbuild/win32-x64": "0.24.0"
			}
		},
		"node_modules/escalade": {
			"version": "3.2.0",
			"resolved": "https://registry.npmjs.org/escalade/-/escalade-3.2.0.tgz",
			"integrity": "sha512-WUj2qlxaQtO4g6Pq5c29GTcWGDyd8itL8zTlipgECz3JesAiiOKotd8JU6otB3PACgG6xkJUyVhboMS+bje/jA==",
			"dev": true,
			"engines": {
				"node": ">=6"
			}
		},
		"node_modules/eventemitter3": {
			"version": "5.0.1",
			"resolved": "https://registry.npmjs.org/eventemitter3/-/eventemitter3-5.0.1.tgz",
			"integrity": "sha512-GWkBvjiSZK87ELrYOSESUYeVIc9mvLLf/nXalMOS5dYrgZq9o5OVkbZAVM06CVxYsCwH9BDZFPlQTlPA1j4ahA==",
			"dev": true
		},
		"node_modules/exponential-backoff": {
			"version": "3.1.1",
			"resolved": "https://registry.npmjs.org/exponential-backoff/-/exponential-backoff-3.1.1.tgz",
			"integrity": "sha512-dX7e/LHVJ6W3DE1MHWi9S1EYzDESENfLrYohG2G++ovZrYOkm4Knwa0mc1cn84xJOR4KEU0WSchhLbd0UklbHw==",
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
		"node_modules/fast-uri": {
			"version": "3.0.3",
			"resolved": "https://registry.npmjs.org/fast-uri/-/fast-uri-3.0.3.tgz",
			"integrity": "sha512-aLrHthzCjH5He4Z2H9YZ+v6Ujb9ocRuW6ZzkJQOrTxleEijANq4v1TsaPaVG1PZcuurEzrLcWRyYBYXD5cEiaw==",
			"dev": true
		},
		"node_modules/fastparse": {
			"version": "1.1.2",
			"resolved": "https://registry.npmjs.org/fastparse/-/fastparse-1.1.2.tgz",
			"integrity": "sha512-483XLLxTVIwWK3QTrMGRqUfUpoOs/0hbQrl2oz4J0pAcm3A3bu84wxTFqGqkJzewCLdME38xJLJAxBABfQT8sQ==",
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
		"node_modules/fill-range": {
			"version": "7.1.1",
			"resolved": "https://registry.npmjs.org/fill-range/-/fill-range-7.1.1.tgz",
			"integrity": "sha512-YsGpe3WHLK8ZYi4tWDg2Jy3ebRz2rXowDxnld4bkQB00cc/1Zw9AWnC0i9ztDJitivtQvaI9KaLyKrc+hBW0yg==",
			"dev": true,
			"dependencies": {
				"to-regex-range": "^5.0.1"
			},
			"engines": {
				"node": ">=8"
			}
		},
		"node_modules/foreground-child": {
			"version": "3.3.0",
			"resolved": "https://registry.npmjs.org/foreground-child/-/foreground-child-3.3.0.tgz",
			"integrity": "sha512-Ld2g8rrAyMYFXBhEqMz8ZAHBi4J4uS1i/CxGMDnjyFWddMXLVcDp051DZfu+t7+ab7Wv6SMqpWmyFIj5UbfFvg==",
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
		"node_modules/get-east-asian-width": {
			"version": "1.3.0",
			"resolved": "https://registry.npmjs.org/get-east-asian-width/-/get-east-asian-width-1.3.0.tgz",
			"integrity": "sha512-vpeMIQKxczTD/0s2CdEWHcb0eeJe6TFjxb+J5xgX7hScxqrGuyjmv4c1D4A/gelKfyox0gJJwIHF+fLjeaM8kQ==",
			"dev": true,
			"engines": {
				"node": ">=18"
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
		"node_modules/graceful-fs": {
			"version": "4.2.11",
			"resolved": "https://registry.npmjs.org/graceful-fs/-/graceful-fs-4.2.11.tgz",
			"integrity": "sha512-RbJ5/jmFcNNCcDV5o9eTnBLJ/HszWV0P73bc+Ff4nS/rJj+YaS6IGyiOL0VoBYX+l1Wrl3k63h/KrH+nhJ0XvQ==",
			"dev": true
		},
		"node_modules/has-flag": {
			"version": "4.0.0",
			"resolved": "https://registry.npmjs.org/has-flag/-/has-flag-4.0.0.tgz",
			"integrity": "sha512-EykJT/Q1KjTWctppgIAgfSO0tKVuZUjhgMr17kqTumMl6Afv3EISleU7qZUzoXDFTAHTDC4NOoG/ZxU3EvlMPQ==",
			"dev": true,
			"engines": {
				"node": ">=8"
			}
		},
		"node_modules/hasown": {
			"version": "2.0.2",
			"resolved": "https://registry.npmjs.org/hasown/-/hasown-2.0.2.tgz",
			"integrity": "sha512-0hJU9SCPvmMzIBdZFqNPXWa6dqh7WdH0cII9y+CyS8rG3nL48Bclra9HmKhVVUHyPWNH5Y7xDwAB7bfgSjkUMQ==",
			"dev": true,
			"dependencies": {
				"function-bind": "^1.1.2"
			},
			"engines": {
				"node": ">= 0.4"
			}
		},
		"node_modules/hosted-git-info": {
			"version": "8.0.2",
			"resolved": "https://registry.npmjs.org/hosted-git-info/-/hosted-git-info-8.0.2.tgz",
			"integrity": "sha512-sYKnA7eGln5ov8T8gnYlkSOxFJvywzEx9BueN6xo/GKO8PGiI6uK6xx+DIGe45T3bdVjLAQDQW1aicT8z8JwQg==",
			"dev": true,
			"dependencies": {
				"lru-cache": "^10.0.1"
			},
			"engines": {
				"node": "^18.17.0 || >=20.5.0"
			}
		},
		"node_modules/hosted-git-info/node_modules/lru-cache": {
			"version": "10.4.3",
			"resolved": "https://registry.npmjs.org/lru-cache/-/lru-cache-10.4.3.tgz",
			"integrity": "sha512-JNAzZcXrCt42VGLuYz0zfAzDfAvJWW6AfYlDBQyDV5DClI2m5sAmK+OIO7s59XfsRsWHp02jAJrRadPRGTt6SQ==",
			"dev": true
		},
		"node_modules/htmlparser2": {
			"version": "9.1.0",
			"resolved": "https://registry.npmjs.org/htmlparser2/-/htmlparser2-9.1.0.tgz",
			"integrity": "sha512-5zfg6mHUoaer/97TxnGpxmbR7zJtPwIYFMZ/H5ucTlPZhKvtum05yiPK3Mgai3a0DyVxv7qYqoweaEd2nrYQzQ==",
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
				"domutils": "^3.1.0",
				"entities": "^4.5.0"
			}
		},
		"node_modules/http-cache-semantics": {
			"version": "4.1.1",
			"resolved": "https://registry.npmjs.org/http-cache-semantics/-/http-cache-semantics-4.1.1.tgz",
			"integrity": "sha512-er295DKPVsV82j5kw1Gjt+ADA/XYHsajl82cGNQG2eyoPkvgUhX+nDIyelzhIWbbsXP39EHcI6l5tYs2FYqYXQ==",
			"dev": true
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
		"node_modules/https-proxy-agent": {
			"version": "7.0.5",
			"resolved": "https://registry.npmjs.org/https-proxy-agent/-/https-proxy-agent-7.0.5.tgz",
			"integrity": "sha512-1e4Wqeblerz+tMKPIq2EMGiiWW1dIjZOksyHWSUm1rmuvw/how9hBHZ38lAGj5ID4Ik6EdkOw7NmWPy6LAwalw==",
			"dev": true,
			"dependencies": {
				"agent-base": "^7.0.2",
				"debug": "4"
			},
			"engines": {
				"node": ">= 14"
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
		"node_modules/ignore-walk": {
			"version": "7.0.0",
			"resolved": "https://registry.npmjs.org/ignore-walk/-/ignore-walk-7.0.0.tgz",
			"integrity": "sha512-T4gbf83A4NH95zvhVYZc+qWocBBGlpzUXLPGurJggw/WIOwicfXJChLDP/iBZnN5WqROSu5Bm3hhle4z8a8YGQ==",
			"dev": true,
			"dependencies": {
				"minimatch": "^9.0.0"
			},
			"engines": {
				"node": "^18.17.0 || >=20.5.0"
			}
		},
		"node_modules/immutable": {
			"version": "5.0.3",
			"resolved": "https://registry.npmjs.org/immutable/-/immutable-5.0.3.tgz",
			"integrity": "sha512-P8IdPQHq3lA1xVeBRi5VPqUm5HDgKnx0Ru51wZz5mjxHr5n3RWhjIpOFU7ybkUxfB+5IToy+OLaHYDBIWsv+uw==",
			"dev": true
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
		"node_modules/inherits": {
			"version": "2.0.4",
			"resolved": "https://registry.npmjs.org/inherits/-/inherits-2.0.4.tgz",
			"integrity": "sha512-k/vGaX4/Yla3WzyMCvTQOXYeIHvqOKtnqBduzTHpzpQZzAskKMhZ2K+EnBiSM9zGSoIFeMpXKxa4dYeZIQqewQ==",
			"dev": true
		},
		"node_modules/ini": {
			"version": "5.0.0",
			"resolved": "https://registry.npmjs.org/ini/-/ini-5.0.0.tgz",
			"integrity": "sha512-+N0ngpO3e7cRUWOJAS7qw0IZIVc6XPrW4MlFBdD066F2L4k1L6ker3hLqSq7iXxU5tgS4WGkIUElWn5vogAEnw==",
			"dev": true,
			"engines": {
				"node": "^18.17.0 || >=20.5.0"
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
			"version": "2.15.1",
			"resolved": "https://registry.npmjs.org/is-core-module/-/is-core-module-2.15.1.tgz",
			"integrity": "sha512-z0vtXSwucUJtANQWldhbtbt7BnL0vxiFjIdDLAatwhDYty2bad6s+rijD6Ri4YuYJubLzIJLUidCh09e1djEVQ==",
			"dev": true,
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
			"version": "4.0.0",
			"resolved": "https://registry.npmjs.org/is-fullwidth-code-point/-/is-fullwidth-code-point-4.0.0.tgz",
			"integrity": "sha512-O4L094N2/dZ7xqVdrXhh9r1KODPJpFms8B5sGdJLPy664AgvXsreZUyCQQNItZRDlYug4xStLjNp/sz3HvBowQ==",
			"dev": true,
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
		"node_modules/isexe": {
			"version": "3.1.1",
			"resolved": "https://registry.npmjs.org/isexe/-/isexe-3.1.1.tgz",
			"integrity": "sha512-LpB/54B+/2J5hqQ7imZHfdU31OlgQqx7ZicVlkm9kzg9/w8GKLEcFfJl/t7DCEDueOyBAD6zCCwTO6Fzs0NoEQ==",
			"dev": true,
			"engines": {
				"node": ">=16"
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
			"version": "6.0.3",
			"resolved": "https://registry.npmjs.org/istanbul-lib-instrument/-/istanbul-lib-instrument-6.0.3.tgz",
			"integrity": "sha512-Vtgk7L/R2JHyyGW07spoFlB8/lpjiOLTjMdms6AFMraYt3BaJauod/NGrfnVG/y4Ix1JEuMRPDPEj2ua+zz1/Q==",
			"dev": true,
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
		"node_modules/jiti": {
			"version": "1.21.6",
			"resolved": "https://registry.npmjs.org/jiti/-/jiti-1.21.6.tgz",
			"integrity": "sha512-2yTgeWTWzMWkHu6Jp9NKgePDaYHbntiwvYuuJLbbN9vl7DC9DvXKOB2BC3ZZ92D3cvV/aflH0osDfwpHepQ53w==",
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
		"node_modules/jsbn": {
			"version": "1.1.0",
			"resolved": "https://registry.npmjs.org/jsbn/-/jsbn-1.1.0.tgz",
			"integrity": "sha512-4bYVV3aAMtDTTu4+xsDYa6sy9GyJ69/amsu9sYF2zqjiEoZA5xJi3BrfX3uY+/IekIu7MwdObdbDWpoZdBv3/A==",
			"dev": true
		},
		"node_modules/jsesc": {
			"version": "3.0.2",
			"resolved": "https://registry.npmjs.org/jsesc/-/jsesc-3.0.2.tgz",
			"integrity": "sha512-xKqzzWXDttJuOcawBt4KnKHHIf5oQ/Cxax+0PWFG+DFDgHNAdi+TXECADI+RYiFUMmx8792xsMbbgXj4CwnP4g==",
			"dev": true,
			"bin": {
				"jsesc": "bin/jsesc"
			},
			"engines": {
				"node": ">=6"
			}
		},
		"node_modules/json-parse-even-better-errors": {
			"version": "4.0.0",
			"resolved": "https://registry.npmjs.org/json-parse-even-better-errors/-/json-parse-even-better-errors-4.0.0.tgz",
			"integrity": "sha512-lR4MXjGNgkJc7tkQ97kb2nuEMnNCyU//XYVH0MKTGcXEiSudQ5MKGKen3C5QubYy0vmq+JGitUg92uuywGEwIA==",
			"dev": true,
			"engines": {
				"node": "^18.17.0 || >=20.5.0"
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
			"version": "3.3.1",
			"resolved": "https://registry.npmjs.org/jsonc-parser/-/jsonc-parser-3.3.1.tgz",
			"integrity": "sha512-HUgH65KyejrUFPvHFPbqOY0rsFip3Bo5wb4ngvdi1EpCYWUQDC5V+Y7mZws+DLkr4M//zQJoanu1SP+87Dv1oQ==",
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
		"node_modules/lilconfig": {
			"version": "3.1.3",
			"resolved": "https://registry.npmjs.org/lilconfig/-/lilconfig-3.1.3.tgz",
			"integrity": "sha512-/vlFKAoH5Cgt3Ie+JLhRbwOsCQePABiU3tJ1egGvyQ+33R/vcwM2Zl2QR/LzjsBeItPt3oSVXapn+m4nQDvpzw==",
			"dev": true,
			"license": "MIT",
			"engines": {
				"node": ">=14"
			},
			"funding": {
				"url": "https://github.com/sponsors/antonk52"
			}
		},
		"node_modules/lines-and-columns": {
			"version": "1.2.4",
			"resolved": "https://registry.npmjs.org/lines-and-columns/-/lines-and-columns-1.2.4.tgz",
			"integrity": "sha512-7ylylesZQ/PV29jhEDl3Ufjo6ZX7gCqJr5F7PKrqc93v7fzSymt1BpwEU8nAUXs8qzzvqhbjhK5QZg6Mt/HkBg==",
			"dev": true
		},
		"node_modules/listr2": {
			"version": "8.2.5",
			"resolved": "https://registry.npmjs.org/listr2/-/listr2-8.2.5.tgz",
			"integrity": "sha512-iyAZCeyD+c1gPyE9qpFu8af0Y+MRtmKOncdGoA2S5EY8iFq99dmmvkNnHiWo+pj0s7yH7l3KPIgee77tKpXPWQ==",
			"dev": true,
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
			"version": "6.1.0",
			"resolved": "https://registry.npmjs.org/ansi-regex/-/ansi-regex-6.1.0.tgz",
			"integrity": "sha512-7HSX4QQb4CspciLpVFwyRe79O3xsIZDDLER21kERQ71oaPodF8jL725AgJMFAYbooIqolJoRLuM81SpeUkpkvA==",
			"dev": true,
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
			"engines": {
				"node": ">=12"
			},
			"funding": {
				"url": "https://github.com/chalk/ansi-styles?sponsor=1"
			}
		},
		"node_modules/listr2/node_modules/strip-ansi": {
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
		"node_modules/listr2/node_modules/wrap-ansi": {
			"version": "9.0.0",
			"resolved": "https://registry.npmjs.org/wrap-ansi/-/wrap-ansi-9.0.0.tgz",
			"integrity": "sha512-G8ura3S+3Z2G+mkgNRq8dqaFZAuxfsxpBB8OCTGRTCtp+l/v9nbFNmCUP1BZMts3G1142MsZfn6eeUKrr4PD1Q==",
			"dev": true,
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
			"version": "3.1.5",
			"resolved": "https://registry.npmjs.org/lmdb/-/lmdb-3.1.5.tgz",
			"integrity": "sha512-46Mch5Drq+A93Ss3gtbg+Xuvf5BOgIuvhKDWoGa3HcPHI6BL2NCOkRdSx1D4VfzwrxhnsjbyIVsLRlQHu6URvw==",
			"dev": true,
			"hasInstallScript": true,
			"optional": true,
			"dependencies": {
				"msgpackr": "^1.11.2",
				"node-addon-api": "^6.1.0",
				"node-gyp-build-optional-packages": "5.2.2",
				"ordered-binary": "^1.5.3",
				"weak-lru-cache": "^1.2.2"
			},
			"bin": {
				"download-lmdb-prebuilds": "bin/download-prebuilds.js"
			},
			"optionalDependencies": {
				"@lmdb/lmdb-darwin-arm64": "3.1.5",
				"@lmdb/lmdb-darwin-x64": "3.1.5",
				"@lmdb/lmdb-linux-arm": "3.1.5",
				"@lmdb/lmdb-linux-arm64": "3.1.5",
				"@lmdb/lmdb-linux-x64": "3.1.5",
				"@lmdb/lmdb-win32-x64": "3.1.5"
			}
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
		"node_modules/log-update": {
			"version": "6.1.0",
			"resolved": "https://registry.npmjs.org/log-update/-/log-update-6.1.0.tgz",
			"integrity": "sha512-9ie8ItPR6tjY5uYJh8K/Zrv/RMZ5VOlOWvtZdEHYSTFKZfIBPQa9tOAEeAWhd+AnIneLJ22w5fjOYtoutpWq5w==",
			"dev": true,
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
			"version": "6.1.0",
			"resolved": "https://registry.npmjs.org/ansi-regex/-/ansi-regex-6.1.0.tgz",
			"integrity": "sha512-7HSX4QQb4CspciLpVFwyRe79O3xsIZDDLER21kERQ71oaPodF8jL725AgJMFAYbooIqolJoRLuM81SpeUkpkvA==",
			"dev": true,
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
			"dependencies": {
				"yallist": "^3.0.2"
			}
		},
		"node_modules/magic-string": {
			"version": "0.30.12",
			"resolved": "https://registry.npmjs.org/magic-string/-/magic-string-0.30.12.tgz",
			"integrity": "sha512-Ea8I3sQMVXr8JhN4z+H/d8zwo+tYDgHE9+5G4Wnrwhs0gaK9fXTKx0Tw5Xwsd/bCPTTZNRAdpyzvoeORe9LYpw==",
			"dev": true,
			"dependencies": {
				"@jridgewell/sourcemap-codec": "^1.5.0"
			}
		},
		"node_modules/make-fetch-happen": {
			"version": "13.0.1",
			"resolved": "https://registry.npmjs.org/make-fetch-happen/-/make-fetch-happen-13.0.1.tgz",
			"integrity": "sha512-cKTUFc/rbKUd/9meOvgrpJ2WrNzymt6jfRDdwg5UCnVzv9dTpEj9JS5m3wtziXVCjluIXyL8pcaukYqezIzZQA==",
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
				"proc-log": "^4.2.0",
				"promise-retry": "^2.0.1",
				"ssri": "^10.0.0"
			},
			"engines": {
				"node": "^16.14.0 || >=18.0.0"
			}
		},
		"node_modules/make-fetch-happen/node_modules/@npmcli/fs": {
			"version": "3.1.1",
			"resolved": "https://registry.npmjs.org/@npmcli/fs/-/fs-3.1.1.tgz",
			"integrity": "sha512-q9CRWjpHCMIh5sVyefoD1cA7PkvILqCZsnSOEUUivORLjxCO/Irmue2DprETiNgEqktDBZaM1Bi+jrarx1XdCg==",
			"dev": true,
			"dependencies": {
				"semver": "^7.3.5"
			},
			"engines": {
				"node": "^14.17.0 || ^16.13.0 || >=18.0.0"
			}
		},
		"node_modules/make-fetch-happen/node_modules/cacache": {
			"version": "18.0.4",
			"resolved": "https://registry.npmjs.org/cacache/-/cacache-18.0.4.tgz",
			"integrity": "sha512-B+L5iIa9mgcjLbliir2th36yEwPftrzteHYujzsx3dFP/31GCHcIeS8f5MGd80odLOjaOvSpU3EEAmRQptkxLQ==",
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
		"node_modules/make-fetch-happen/node_modules/lru-cache": {
			"version": "10.4.3",
			"resolved": "https://registry.npmjs.org/lru-cache/-/lru-cache-10.4.3.tgz",
			"integrity": "sha512-JNAzZcXrCt42VGLuYz0zfAzDfAvJWW6AfYlDBQyDV5DClI2m5sAmK+OIO7s59XfsRsWHp02jAJrRadPRGTt6SQ==",
			"dev": true
		},
		"node_modules/make-fetch-happen/node_modules/p-map": {
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
		"node_modules/make-fetch-happen/node_modules/proc-log": {
			"version": "4.2.0",
			"resolved": "https://registry.npmjs.org/proc-log/-/proc-log-4.2.0.tgz",
			"integrity": "sha512-g8+OnU/L2v+wyiVK+D5fA34J7EH8jZ8DDlvwhRCMxmMj7UCBvxiO1mGeN+36JXIKF4zevU4kRBd8lVgG9vLelA==",
			"dev": true,
			"engines": {
				"node": "^14.17.0 || ^16.13.0 || >=18.0.0"
			}
		},
		"node_modules/make-fetch-happen/node_modules/ssri": {
			"version": "10.0.6",
			"resolved": "https://registry.npmjs.org/ssri/-/ssri-10.0.6.tgz",
			"integrity": "sha512-MGrFH9Z4NP9Iyhqn16sDtBpRRNJ0Y2hNa6D65h736fVSaPCHr4DM4sWUNvVaSuC+0OBGhwsrydQwmgfg5LncqQ==",
			"dev": true,
			"dependencies": {
				"minipass": "^7.0.3"
			},
			"engines": {
				"node": "^14.17.0 || ^16.13.0 || >=18.0.0"
			}
		},
		"node_modules/make-fetch-happen/node_modules/unique-filename": {
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
		"node_modules/make-fetch-happen/node_modules/unique-slug": {
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
		"node_modules/merge2": {
			"version": "1.4.1",
			"resolved": "https://registry.npmjs.org/merge2/-/merge2-1.4.1.tgz",
			"integrity": "sha512-8q7VEgMJW4J8tcfVPy8g09NcQwZdbwFEqhe/WZkoIzjn/3TGDwtOCYtXGxA3O8tPzpczCCDgv+P2P5y00ZJOOg==",
			"dev": true,
			"engines": {
				"node": ">= 8"
			}
		},
		"node_modules/micromatch": {
			"version": "4.0.8",
			"resolved": "https://registry.npmjs.org/micromatch/-/micromatch-4.0.8.tgz",
			"integrity": "sha512-PXwfBhYu0hBCPw8Dn0E+WDYb7af3dSLVWKi3HGv84IdF4TyFoC0ysxFd0Goxw7nSv4T/PzEJQxsYsEiFCKo2BA==",
			"dev": true,
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
			"engines": {
				"node": ">=8.6"
			},
			"funding": {
				"url": "https://github.com/sponsors/jonschlinkert"
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
		"node_modules/mimic-function": {
			"version": "5.0.1",
			"resolved": "https://registry.npmjs.org/mimic-function/-/mimic-function-5.0.1.tgz",
			"integrity": "sha512-VP79XUPxV2CigYP3jWwAUFSku2aKqBH7uTAapFWCBqutsbmDo96KY5o8uh6U+/YSIn5OxJnXp73beVkpqMIGhA==",
			"dev": true,
			"engines": {
				"node": ">=18"
			},
			"funding": {
				"url": "https://github.com/sponsors/sindresorhus"
			}
		},
		"node_modules/minimatch": {
			"version": "9.0.5",
			"resolved": "https://registry.npmjs.org/minimatch/-/minimatch-9.0.5.tgz",
			"integrity": "sha512-G6T0ZX48xgozx7587koeX9Ys2NYy6Gmv//P89sEte9V9whIapMNF4idKxnW2QtCcLiTWlb/wfCabAtAFWhhBow==",
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
			"version": "7.1.2",
			"resolved": "https://registry.npmjs.org/minipass/-/minipass-7.1.2.tgz",
			"integrity": "sha512-qOOzS1cBTWYF4BH8fVePDBOO9iptMnGUEZwNc/cMWnTV2nVLZ7VoNWEPHkYczZA0pdoA7dl6e7FL659nX9S2aw==",
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
			"version": "3.0.5",
			"resolved": "https://registry.npmjs.org/minipass-fetch/-/minipass-fetch-3.0.5.tgz",
			"integrity": "sha512-2N8elDQAtSnFV0Dk7gt15KHsS0Fyz6CbYZ360h0WTYV1Ty46li3rAXVOQj1THMNLdmrD9Vt5pBPtWtVkpwGBqg==",
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
			"version": "2.1.3",
			"resolved": "https://registry.npmjs.org/ms/-/ms-2.1.3.tgz",
			"integrity": "sha512-6FlzubTLZG3J2a/NVCAleEhjzq5oxgHyaCU9yYXvcLsvoVaHJq/s5xXI6/XXP6tz7R9xAOtHnSO/tXtF3WRTlA==",
			"dev": true
		},
		"node_modules/msgpackr": {
			"version": "1.11.2",
			"resolved": "https://registry.npmjs.org/msgpackr/-/msgpackr-1.11.2.tgz",
			"integrity": "sha512-F9UngXRlPyWCDEASDpTf6c9uNhGPTqnTeLVt7bN+bU1eajoR/8V9ys2BRaV5C/e5ihE6sJ9uPIKaYt6bFuO32g==",
			"dev": true,
			"optional": true,
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
		"node_modules/mute-stream": {
			"version": "2.0.0",
			"resolved": "https://registry.npmjs.org/mute-stream/-/mute-stream-2.0.0.tgz",
			"integrity": "sha512-WWdIxpyjEn+FhQJQQv9aQAYlHoNVdzIzUySNV1gHUPDSdZJ3yZn7pAAbQcV7B56Mvu881q9FZV+0Vx2xC44VWA==",
			"dev": true,
			"engines": {
				"node": "^18.17.0 || >=20.5.0"
			}
		},
		"node_modules/mz": {
			"version": "2.7.0",
			"resolved": "https://registry.npmjs.org/mz/-/mz-2.7.0.tgz",
			"integrity": "sha512-z81GNO7nnYMEhrGh9LeymoE4+Yr0Wn5McHIZMK5cfQCl+NDX08sCZgUc9/6MHni9IWuFLm1Z3HTCXu2z9fN62Q==",
			"dev": true,
			"dependencies": {
				"any-promise": "^1.0.0",
				"object-assign": "^4.0.1",
				"thenify-all": "^1.0.0"
			}
		},
		"node_modules/nanoid": {
			"version": "3.3.8",
			"resolved": "https://registry.npmjs.org/nanoid/-/nanoid-3.3.8.tgz",
			"integrity": "sha512-WNLf5Sd8oZxOm+TzppcYk8gVOgP+l58xNy58D0nbUnOxOWRWvlcCV4kUF7ltmI6PsrLl/BgKEyS4mqsGChFN0w==",
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
		"node_modules/negotiator": {
			"version": "0.6.4",
			"resolved": "https://registry.npmjs.org/negotiator/-/negotiator-0.6.4.tgz",
			"integrity": "sha512-myRT3DiWPHqho5PrJaIRyaMv2kgYf0mUVgBNOYMuCH5Ki1yEiQaf/ZJuQ62nvpc44wL5WDbTX7yGJi1Neevw8w==",
			"dev": true,
			"engines": {
				"node": ">= 0.6"
			}
		},
		"node_modules/node-addon-api": {
			"version": "6.1.0",
			"resolved": "https://registry.npmjs.org/node-addon-api/-/node-addon-api-6.1.0.tgz",
			"integrity": "sha512-+eawOlIgy680F0kBzPUNFhMZGtJ1YmqM6l4+Crf4IkImjYrO/mqPwRMh352g23uIaQKFItcQ64I7KMaJxHgAVA==",
			"dev": true,
			"optional": true
		},
		"node_modules/node-gyp": {
			"version": "10.2.0",
			"resolved": "https://registry.npmjs.org/node-gyp/-/node-gyp-10.2.0.tgz",
			"integrity": "sha512-sp3FonBAaFe4aYTcFdZUn2NYkbP7xroPGYvQmP4Nl5PxamznItBnNCgjrVTKrEfQynInMsJvZrdmqUnysCJ8rw==",
			"dev": true,
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
		"node_modules/node-gyp-build-optional-packages": {
			"version": "5.2.2",
			"resolved": "https://registry.npmjs.org/node-gyp-build-optional-packages/-/node-gyp-build-optional-packages-5.2.2.tgz",
			"integrity": "sha512-s+w+rBWnpTMwSFbaE0UXsRlg7hU4FjekKU4eyAih5T8nJuNZT1nNsskXpxmeqSK9UzkBl6UgRlnKc8hz8IEqOw==",
			"dev": true,
			"optional": true,
			"dependencies": {
				"detect-libc": "^2.0.1"
			},
			"bin": {
				"node-gyp-build-optional-packages": "bin.js",
				"node-gyp-build-optional-packages-optional": "optional.js",
				"node-gyp-build-optional-packages-test": "build-test.js"
			}
		},
		"node_modules/node-gyp/node_modules/proc-log": {
			"version": "4.2.0",
			"resolved": "https://registry.npmjs.org/proc-log/-/proc-log-4.2.0.tgz",
			"integrity": "sha512-g8+OnU/L2v+wyiVK+D5fA34J7EH8jZ8DDlvwhRCMxmMj7UCBvxiO1mGeN+36JXIKF4zevU4kRBd8lVgG9vLelA==",
			"dev": true,
			"engines": {
				"node": "^14.17.0 || ^16.13.0 || >=18.0.0"
			}
		},
		"node_modules/node-gyp/node_modules/which": {
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
		"node_modules/node-releases": {
			"version": "2.0.18",
			"resolved": "https://registry.npmjs.org/node-releases/-/node-releases-2.0.18.tgz",
			"integrity": "sha512-d9VeXT4SJ7ZeOqGX6R5EM022wpL+eWPooLI+5UpWn2jCT1aosUQEhQP214x33Wkwx3JQMvIm+tIoVOdodFS40g==",
			"dev": true
		},
		"node_modules/nopt": {
			"version": "7.2.1",
			"resolved": "https://registry.npmjs.org/nopt/-/nopt-7.2.1.tgz",
			"integrity": "sha512-taM24ViiimT/XntxbPyJQzCG+p4EKOpgD3mxFwW38mGjVUrfERQOeY4EDHjdnptttfHuHQXFx+lTP08Q+mLa/w==",
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
			"version": "7.0.0",
			"resolved": "https://registry.npmjs.org/normalize-package-data/-/normalize-package-data-7.0.0.tgz",
			"integrity": "sha512-k6U0gKRIuNCTkwHGZqblCfLfBRh+w1vI6tBo+IeJwq2M8FUiOqhX7GH+GArQGScA7azd1WfyRCvxoXDO3hQDIA==",
			"dev": true,
			"dependencies": {
				"hosted-git-info": "^8.0.0",
				"semver": "^7.3.5",
				"validate-npm-package-license": "^3.0.4"
			},
			"engines": {
				"node": "^18.17.0 || >=20.5.0"
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
			"version": "4.0.0",
			"resolved": "https://registry.npmjs.org/npm-bundled/-/npm-bundled-4.0.0.tgz",
			"integrity": "sha512-IxaQZDMsqfQ2Lz37VvyyEtKLe8FsRZuysmedy/N06TU1RyVppYKXrO4xIhR0F+7ubIBox6Q7nir6fQI3ej39iA==",
			"dev": true,
			"dependencies": {
				"npm-normalize-package-bin": "^4.0.0"
			},
			"engines": {
				"node": "^18.17.0 || >=20.5.0"
			}
		},
		"node_modules/npm-install-checks": {
			"version": "7.1.1",
			"resolved": "https://registry.npmjs.org/npm-install-checks/-/npm-install-checks-7.1.1.tgz",
			"integrity": "sha512-u6DCwbow5ynAX5BdiHQ9qvexme4U3qHW3MWe5NqH+NeBm0LbiH6zvGjNNew1fY+AZZUtVHbOPF3j7mJxbUzpXg==",
			"dev": true,
			"dependencies": {
				"semver": "^7.1.1"
			},
			"engines": {
				"node": "^18.17.0 || >=20.5.0"
			}
		},
		"node_modules/npm-normalize-package-bin": {
			"version": "4.0.0",
			"resolved": "https://registry.npmjs.org/npm-normalize-package-bin/-/npm-normalize-package-bin-4.0.0.tgz",
			"integrity": "sha512-TZKxPvItzai9kN9H/TkmCtx/ZN/hvr3vUycjlfmH0ootY9yFBzNOpiXAdIn1Iteqsvk4lQn6B5PTrt+n6h8k/w==",
			"dev": true,
			"engines": {
				"node": "^18.17.0 || >=20.5.0"
			}
		},
		"node_modules/npm-package-arg": {
			"version": "12.0.0",
			"resolved": "https://registry.npmjs.org/npm-package-arg/-/npm-package-arg-12.0.0.tgz",
			"integrity": "sha512-ZTE0hbwSdTNL+Stx2zxSqdu2KZfNDcrtrLdIk7XGnQFYBWYDho/ORvXtn5XEePcL3tFpGjHCV3X3xrtDh7eZ+A==",
			"dev": true,
			"dependencies": {
				"hosted-git-info": "^8.0.0",
				"proc-log": "^5.0.0",
				"semver": "^7.3.5",
				"validate-npm-package-name": "^6.0.0"
			},
			"engines": {
				"node": "^18.17.0 || >=20.5.0"
			}
		},
		"node_modules/npm-packlist": {
			"version": "9.0.0",
			"resolved": "https://registry.npmjs.org/npm-packlist/-/npm-packlist-9.0.0.tgz",
			"integrity": "sha512-8qSayfmHJQTx3nJWYbbUmflpyarbLMBc6LCAjYsiGtXxDB68HaZpb8re6zeaLGxZzDuMdhsg70jryJe+RrItVQ==",
			"dev": true,
			"dependencies": {
				"ignore-walk": "^7.0.0"
			},
			"engines": {
				"node": "^18.17.0 || >=20.5.0"
			}
		},
		"node_modules/npm-pick-manifest": {
			"version": "10.0.0",
			"resolved": "https://registry.npmjs.org/npm-pick-manifest/-/npm-pick-manifest-10.0.0.tgz",
			"integrity": "sha512-r4fFa4FqYY8xaM7fHecQ9Z2nE9hgNfJR+EmoKv0+chvzWkBcORX3r0FpTByP+CbOVJDladMXnPQGVN8PBLGuTQ==",
			"dev": true,
			"dependencies": {
				"npm-install-checks": "^7.1.0",
				"npm-normalize-package-bin": "^4.0.0",
				"npm-package-arg": "^12.0.0",
				"semver": "^7.3.5"
			},
			"engines": {
				"node": "^18.17.0 || >=20.5.0"
			}
		},
		"node_modules/npm-registry-fetch": {
			"version": "18.0.2",
			"resolved": "https://registry.npmjs.org/npm-registry-fetch/-/npm-registry-fetch-18.0.2.tgz",
			"integrity": "sha512-LeVMZBBVy+oQb5R6FDV9OlJCcWDU+al10oKpe+nsvcHnG24Z3uM3SvJYKfGJlfGjVU8v9liejCrUR/M5HO5NEQ==",
			"dev": true,
			"dependencies": {
				"@npmcli/redact": "^3.0.0",
				"jsonparse": "^1.3.1",
				"make-fetch-happen": "^14.0.0",
				"minipass": "^7.0.2",
				"minipass-fetch": "^4.0.0",
				"minizlib": "^3.0.1",
				"npm-package-arg": "^12.0.0",
				"proc-log": "^5.0.0"
			},
			"engines": {
				"node": "^18.17.0 || >=20.5.0"
			}
		},
		"node_modules/npm-registry-fetch/node_modules/@npmcli/agent": {
			"version": "3.0.0",
			"resolved": "https://registry.npmjs.org/@npmcli/agent/-/agent-3.0.0.tgz",
			"integrity": "sha512-S79NdEgDQd/NGCay6TCoVzXSj74skRZIKJcpJjC5lOq34SZzyI6MqtiiWoiVWoVrTcGjNeC4ipbh1VIHlpfF5Q==",
			"dev": true,
			"dependencies": {
				"agent-base": "^7.1.0",
				"http-proxy-agent": "^7.0.0",
				"https-proxy-agent": "^7.0.1",
				"lru-cache": "^10.0.1",
				"socks-proxy-agent": "^8.0.3"
			},
			"engines": {
				"node": "^18.17.0 || >=20.5.0"
			}
		},
		"node_modules/npm-registry-fetch/node_modules/lru-cache": {
			"version": "10.4.3",
			"resolved": "https://registry.npmjs.org/lru-cache/-/lru-cache-10.4.3.tgz",
			"integrity": "sha512-JNAzZcXrCt42VGLuYz0zfAzDfAvJWW6AfYlDBQyDV5DClI2m5sAmK+OIO7s59XfsRsWHp02jAJrRadPRGTt6SQ==",
			"dev": true
		},
		"node_modules/npm-registry-fetch/node_modules/make-fetch-happen": {
			"version": "14.0.3",
			"resolved": "https://registry.npmjs.org/make-fetch-happen/-/make-fetch-happen-14.0.3.tgz",
			"integrity": "sha512-QMjGbFTP0blj97EeidG5hk/QhKQ3T4ICckQGLgz38QF7Vgbk6e6FTARN8KhKxyBbWn8R0HU+bnw8aSoFPD4qtQ==",
			"dev": true,
			"dependencies": {
				"@npmcli/agent": "^3.0.0",
				"cacache": "^19.0.1",
				"http-cache-semantics": "^4.1.1",
				"minipass": "^7.0.2",
				"minipass-fetch": "^4.0.0",
				"minipass-flush": "^1.0.5",
				"minipass-pipeline": "^1.2.4",
				"negotiator": "^1.0.0",
				"proc-log": "^5.0.0",
				"promise-retry": "^2.0.1",
				"ssri": "^12.0.0"
			},
			"engines": {
				"node": "^18.17.0 || >=20.5.0"
			}
		},
		"node_modules/npm-registry-fetch/node_modules/minipass-fetch": {
			"version": "4.0.0",
			"resolved": "https://registry.npmjs.org/minipass-fetch/-/minipass-fetch-4.0.0.tgz",
			"integrity": "sha512-2v6aXUXwLP1Epd/gc32HAMIWoczx+fZwEPRHm/VwtrJzRGwR1qGZXEYV3Zp8ZjjbwaZhMrM6uHV4KVkk+XCc2w==",
			"dev": true,
			"dependencies": {
				"minipass": "^7.0.3",
				"minipass-sized": "^1.0.3",
				"minizlib": "^3.0.1"
			},
			"engines": {
				"node": "^18.17.0 || >=20.5.0"
			},
			"optionalDependencies": {
				"encoding": "^0.1.13"
			}
		},
		"node_modules/npm-registry-fetch/node_modules/minizlib": {
			"version": "3.0.1",
			"resolved": "https://registry.npmjs.org/minizlib/-/minizlib-3.0.1.tgz",
			"integrity": "sha512-umcy022ILvb5/3Djuu8LWeqUa8D68JaBzlttKeMWen48SjabqS3iY5w/vzeMzMUNhLDifyhbOwKDSznB1vvrwg==",
			"dev": true,
			"dependencies": {
				"minipass": "^7.0.4",
				"rimraf": "^5.0.5"
			},
			"engines": {
				"node": ">= 18"
			}
		},
		"node_modules/npm-registry-fetch/node_modules/negotiator": {
			"version": "1.0.0",
			"resolved": "https://registry.npmjs.org/negotiator/-/negotiator-1.0.0.tgz",
			"integrity": "sha512-8Ofs/AUQh8MaEcrlq5xOX0CQ9ypTF5dl78mjlMNfOK08fzpgTHQRQPBxcPlEtIw0yRpws+Zo/3r+5WRby7u3Gg==",
			"dev": true,
			"engines": {
				"node": ">= 0.6"
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
		"node_modules/object-assign": {
			"version": "4.1.1",
			"resolved": "https://registry.npmjs.org/object-assign/-/object-assign-4.1.1.tgz",
			"integrity": "sha512-rJgTQnkUnH1sFw8yT6VSU3zD3sWmu6sZhIseY8VX+GRu3P6F7Fu+JNDoXfklElbLJSnc3FUQHVe4cU5hj+BcUg==",
			"dev": true,
			"engines": {
				"node": ">=0.10.0"
			}
		},
		"node_modules/object-hash": {
			"version": "3.0.0",
			"resolved": "https://registry.npmjs.org/object-hash/-/object-hash-3.0.0.tgz",
			"integrity": "sha512-RSn9F68PjH9HqtltsSnqYC1XXoWe9Bju5+213R98cNGttag9q9yAOTzdbsqvIa7aNm5WffBZFpWYr2aWrklWAw==",
			"dev": true,
			"engines": {
				"node": ">= 6"
			}
		},
		"node_modules/onetime": {
			"version": "7.0.0",
			"resolved": "https://registry.npmjs.org/onetime/-/onetime-7.0.0.tgz",
			"integrity": "sha512-VXJjc87FScF88uafS3JllDgvAm+c/Slfz06lorj2uAY34rlUu0Nt+v8wreiImcrgAjjIHp1rXpTDlLOGw29WwQ==",
			"dev": true,
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
		"node_modules/ora/node_modules/cli-cursor": {
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
		"node_modules/ora/node_modules/onetime": {
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
		"node_modules/ora/node_modules/restore-cursor": {
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
		"node_modules/ora/node_modules/signal-exit": {
			"version": "3.0.7",
			"resolved": "https://registry.npmjs.org/signal-exit/-/signal-exit-3.0.7.tgz",
			"integrity": "sha512-wnD2ZE+l+SPC/uoS0vXeE9L1+0wuaMqKlfz9AMUo38JsyLSBWSFcHR1Rri62LZc12vLr1gb3jl7iwQhgwpAbGQ==",
			"dev": true
		},
		"node_modules/ordered-binary": {
			"version": "1.5.3",
			"resolved": "https://registry.npmjs.org/ordered-binary/-/ordered-binary-1.5.3.tgz",
			"integrity": "sha512-oGFr3T+pYdTGJ+YFEILMpS3es+GiIbs9h/XQrclBXUtd44ey7XwfsMzM31f64I1SQOawDoDr/D823kNCADI8TA==",
			"dev": true,
			"optional": true
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
		"node_modules/p-map": {
			"version": "7.0.2",
			"resolved": "https://registry.npmjs.org/p-map/-/p-map-7.0.2.tgz",
			"integrity": "sha512-z4cYYMMdKHzw4O5UkWJImbZynVIo0lSGTXc7bzB1e/rrDqkgGUNysK/o4bTr+0+xKvvLoTyGqYC4Fgljy9qe1Q==",
			"dev": true,
			"engines": {
				"node": ">=18"
			},
			"funding": {
				"url": "https://github.com/sponsors/sindresorhus"
			}
		},
		"node_modules/package-json-from-dist": {
			"version": "1.0.1",
			"resolved": "https://registry.npmjs.org/package-json-from-dist/-/package-json-from-dist-1.0.1.tgz",
			"integrity": "sha512-UEZIS3/by4OC8vL3P2dTXRETpebLI2NiI5vIrjaD/5UtrkFX/tNbwjTSRAGC/+7CAo2pIcBaRgWmcBBHcsaCIw==",
			"dev": true
		},
		"node_modules/pacote": {
			"version": "20.0.0",
			"resolved": "https://registry.npmjs.org/pacote/-/pacote-20.0.0.tgz",
			"integrity": "sha512-pRjC5UFwZCgx9kUFDVM9YEahv4guZ1nSLqwmWiLUnDbGsjs+U5w7z6Uc8HNR1a6x8qnu5y9xtGE6D1uAuYz+0A==",
			"dev": true,
			"dependencies": {
				"@npmcli/git": "^6.0.0",
				"@npmcli/installed-package-contents": "^3.0.0",
				"@npmcli/package-json": "^6.0.0",
				"@npmcli/promise-spawn": "^8.0.0",
				"@npmcli/run-script": "^9.0.0",
				"cacache": "^19.0.0",
				"fs-minipass": "^3.0.0",
				"minipass": "^7.0.2",
				"npm-package-arg": "^12.0.0",
				"npm-packlist": "^9.0.0",
				"npm-pick-manifest": "^10.0.0",
				"npm-registry-fetch": "^18.0.0",
				"proc-log": "^5.0.0",
				"promise-retry": "^2.0.1",
				"sigstore": "^3.0.0",
				"ssri": "^12.0.0",
				"tar": "^6.1.11"
			},
			"bin": {
				"pacote": "bin/index.js"
			},
			"engines": {
				"node": "^18.17.0 || >=20.5.0"
			}
		},
		"node_modules/parse5": {
			"version": "7.2.1",
			"resolved": "https://registry.npmjs.org/parse5/-/parse5-7.2.1.tgz",
			"integrity": "sha512-BuBYQYlv1ckiPdQi/ohiivi9Sagc9JG+Ozs0r7b/0iK3sKmrb0b9FdWdBbOdx6hBCM/F9Ir82ofnBhtZOjCRPQ==",
			"dev": true,
			"dependencies": {
				"entities": "^4.5.0"
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
			"version": "1.11.1",
			"resolved": "https://registry.npmjs.org/path-scurry/-/path-scurry-1.11.1.tgz",
			"integrity": "sha512-Xa4Nw17FS9ApQFJ9umLiJS4orGjm7ZzwUrwamcGQuHSzDyth9boKDaycYdDcZDuqYATXw4HFXgaqWTctW/v1HA==",
			"dev": true,
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
			"dev": true
		},
		"node_modules/picocolors": {
			"version": "1.1.1",
			"resolved": "https://registry.npmjs.org/picocolors/-/picocolors-1.1.1.tgz",
			"integrity": "sha512-xceH2snhtb5M9liqDsmEw56le376mTZkEX/jEb/RxNFyegNul7eNslCXP9FDj/Lcu0X8KEyMceP2ntpaHrDEVA==",
			"dev": true
		},
		"node_modules/picomatch": {
			"version": "4.0.2",
			"resolved": "https://registry.npmjs.org/picomatch/-/picomatch-4.0.2.tgz",
			"integrity": "sha512-M7BAV6Rlcy5u+m6oPhAPFgJTzAioX/6B0DxyvDlo9l8+T3nLKbrczg2WLUyzd45L8RqfUMyGPzekbMvX2Ldkwg==",
			"dev": true,
			"engines": {
				"node": ">=12"
			},
			"funding": {
				"url": "https://github.com/sponsors/jonschlinkert"
			}
		},
		"node_modules/pify": {
			"version": "2.3.0",
			"resolved": "https://registry.npmjs.org/pify/-/pify-2.3.0.tgz",
			"integrity": "sha512-udgsAY+fTnvv7kI7aaxbqwWNb0AHiB0qBO89PZKPkoTmGOgdbrHDKD+0B2X4uTfJ/FT1R09r9gTsjUjNJotuog==",
			"dev": true,
			"engines": {
				"node": ">=0.10.0"
			}
		},
		"node_modules/pirates": {
			"version": "4.0.6",
			"resolved": "https://registry.npmjs.org/pirates/-/pirates-4.0.6.tgz",
			"integrity": "sha512-saLsH7WeYYPiD25LDuLRRY/i+6HaPYr6G1OUlN39otzkSTxKnubR9RTxS3/Kk50s1g2JTgFwWQDQyplC5/SHZg==",
			"dev": true,
			"engines": {
				"node": ">= 6"
			}
		},
		"node_modules/piscina": {
			"version": "4.7.0",
			"resolved": "https://registry.npmjs.org/piscina/-/piscina-4.7.0.tgz",
			"integrity": "sha512-b8hvkpp9zS0zsfa939b/jXbe64Z2gZv0Ha7FYPNUiDIB1y2AtxcOZdfP8xN8HFjUaqQiT9gRlfjAsoL8vdJ1Iw==",
			"dev": true,
			"optionalDependencies": {
				"@napi-rs/nice": "^1.0.1"
			}
		},
		"node_modules/postcss": {
			"version": "8.4.49",
			"resolved": "https://registry.npmjs.org/postcss/-/postcss-8.4.49.tgz",
			"integrity": "sha512-OCVPnIObs4N29kxTjzLfUryOkvZEq+pf8jTF0lg8E7uETuWHA+v7j3c/xJmiqpX450191LlmZfUKkXxkTry7nA==",
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
				"picocolors": "^1.1.1",
				"source-map-js": "^1.2.1"
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
		"node_modules/postcss-media-query-parser": {
			"version": "0.2.3",
			"resolved": "https://registry.npmjs.org/postcss-media-query-parser/-/postcss-media-query-parser-0.2.3.tgz",
			"integrity": "sha512-3sOlxmbKcSHMjlUXQZKQ06jOswE7oVkXPxmZdoB1r5l0q6gTFTQSHxNxOrCccElbW7dxNytifNEo8qidX2Vsig==",
			"dev": true
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
		"node_modules/proc-log": {
			"version": "5.0.0",
			"resolved": "https://registry.npmjs.org/proc-log/-/proc-log-5.0.0.tgz",
			"integrity": "sha512-Azwzvl90HaF0aCz1JrDdXQykFakSSNPaPoiZ9fm5qJIMHioDZEi7OAdRwSm6rSoPtY3Qutnm3L7ogmg3dc+wbQ==",
			"dev": true,
			"engines": {
				"node": "^18.17.0 || >=20.5.0"
			}
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
		"node_modules/read-cache": {
			"version": "1.0.0",
			"resolved": "https://registry.npmjs.org/read-cache/-/read-cache-1.0.0.tgz",
			"integrity": "sha512-Owdv/Ft7IjOgm/i0xvNDZ1LrRANRfew4b2prF3OWMQLxLfu3bS8FVhCsrSCMK4lR56Y9ya+AThoTpDCTxCmpRA==",
			"dev": true,
			"dependencies": {
				"pify": "^2.3.0"
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
			"version": "4.0.2",
			"resolved": "https://registry.npmjs.org/readdirp/-/readdirp-4.0.2.tgz",
			"integrity": "sha512-yDMz9g+VaZkqBYS/ozoBJwaBhTbZo3UNYQHNRw1D3UFQB8oHB4uS/tAODO+ZLjGWmUbKnIlOWO+aaIiAxrUWHA==",
			"dev": true,
			"engines": {
				"node": ">= 14.16.0"
			},
			"funding": {
				"type": "individual",
				"url": "https://paulmillr.com/funding/"
			}
		},
		"node_modules/reflect-metadata": {
			"version": "0.2.2",
			"resolved": "https://registry.npmjs.org/reflect-metadata/-/reflect-metadata-0.2.2.tgz",
			"integrity": "sha512-urBwgfrvVP/eAyXx4hluJivBKzuEbSQs9rKWCrCkbSxNv8mxPcUZKeuoF3Uy4mJl3Lwprp6yy5/39VWigZ4K6Q==",
			"dev": true
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
		"node_modules/restore-cursor": {
			"version": "5.1.0",
			"resolved": "https://registry.npmjs.org/restore-cursor/-/restore-cursor-5.1.0.tgz",
			"integrity": "sha512-oMA2dcrw6u0YfxJQXm342bFKX/E4sG9rbTzO9ptUcR/e8A33cHuvStiYOwH7fszkZlZ1z/ta9AAoPk2F4qIOHA==",
			"dev": true,
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
		"node_modules/rfdc": {
			"version": "1.4.1",
			"resolved": "https://registry.npmjs.org/rfdc/-/rfdc-1.4.1.tgz",
			"integrity": "sha512-q1b3N5QkRUWUl7iyylaaj3kOpIT0N2i9MqIEQXP73GVsN9cw3fdx8X63cEmWhJGi2PPCF23Ijp7ktmd39rawIA==",
			"dev": true
		},
		"node_modules/rimraf": {
			"version": "5.0.10",
			"resolved": "https://registry.npmjs.org/rimraf/-/rimraf-5.0.10.tgz",
			"integrity": "sha512-l0OE8wL34P4nJH/H2ffoaniAokM2qSmrtXHmlpvYr5AVVX8msAyW0l8NVJFDxlSK4u3Uh/f41cQheDVdnYijwQ==",
			"dev": true,
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
			"version": "4.26.0",
			"resolved": "https://registry.npmjs.org/rollup/-/rollup-4.26.0.tgz",
			"integrity": "sha512-ilcl12hnWonG8f+NxU6BlgysVA0gvY2l8N0R84S1HcINbW20bvwuCngJkkInV6LXhwRpucsW5k1ovDwEdBVrNg==",
			"dev": true,
			"dependencies": {
				"@types/estree": "1.0.6"
			},
			"bin": {
				"rollup": "dist/bin/rollup"
			},
			"engines": {
				"node": ">=18.0.0",
				"npm": ">=8.0.0"
			},
			"optionalDependencies": {
				"@rollup/rollup-android-arm-eabi": "4.26.0",
				"@rollup/rollup-android-arm64": "4.26.0",
				"@rollup/rollup-darwin-arm64": "4.26.0",
				"@rollup/rollup-darwin-x64": "4.26.0",
				"@rollup/rollup-freebsd-arm64": "4.26.0",
				"@rollup/rollup-freebsd-x64": "4.26.0",
				"@rollup/rollup-linux-arm-gnueabihf": "4.26.0",
				"@rollup/rollup-linux-arm-musleabihf": "4.26.0",
				"@rollup/rollup-linux-arm64-gnu": "4.26.0",
				"@rollup/rollup-linux-arm64-musl": "4.26.0",
				"@rollup/rollup-linux-powerpc64le-gnu": "4.26.0",
				"@rollup/rollup-linux-riscv64-gnu": "4.26.0",
				"@rollup/rollup-linux-s390x-gnu": "4.26.0",
				"@rollup/rollup-linux-x64-gnu": "4.26.0",
				"@rollup/rollup-linux-x64-musl": "4.26.0",
				"@rollup/rollup-win32-arm64-msvc": "4.26.0",
				"@rollup/rollup-win32-ia32-msvc": "4.26.0",
				"@rollup/rollup-win32-x64-msvc": "4.26.0",
				"fsevents": "~2.3.2"
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
			"version": "1.80.7",
			"resolved": "https://registry.npmjs.org/sass/-/sass-1.80.7.tgz",
			"integrity": "sha512-MVWvN0u5meytrSjsU7AWsbhoXi1sc58zADXFllfZzbsBT1GHjjar6JwBINYPRrkx/zqnQ6uqbQuHgE95O+C+eQ==",
			"dev": true,
			"dependencies": {
				"chokidar": "^4.0.0",
				"immutable": "^5.0.2",
				"source-map-js": ">=0.6.2 <2.0.0"
			},
			"bin": {
				"sass": "sass.js"
			},
			"engines": {
				"node": ">=14.0.0"
			},
			"optionalDependencies": {
				"@parcel/watcher": "^2.4.1"
			}
		},
		"node_modules/semver": {
			"version": "7.6.3",
			"resolved": "https://registry.npmjs.org/semver/-/semver-7.6.3.tgz",
			"integrity": "sha512-oVekP1cKtI+CTDvHWYFUcMtsK/00wmAEfyqKfNdARm8u1wNVhSgaX7A8d4UuIlUI5e84iEwOhs7ZPYRmzU9U6A==",
			"dev": true,
			"bin": {
				"semver": "bin/semver.js"
			},
			"engines": {
				"node": ">=10"
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
			"version": "3.0.0",
			"resolved": "https://registry.npmjs.org/sigstore/-/sigstore-3.0.0.tgz",
			"integrity": "sha512-PHMifhh3EN4loMcHCz6l3v/luzgT3za+9f8subGgeMNjbJjzH4Ij/YoX3Gvu+kaouJRIlVdTHHCREADYf+ZteA==",
			"dev": true,
			"dependencies": {
				"@sigstore/bundle": "^3.0.0",
				"@sigstore/core": "^2.0.0",
				"@sigstore/protobuf-specs": "^0.3.2",
				"@sigstore/sign": "^3.0.0",
				"@sigstore/tuf": "^3.0.0",
				"@sigstore/verify": "^2.0.0"
			},
			"engines": {
				"node": "^18.17.0 || >=20.5.0"
			}
		},
		"node_modules/slice-ansi": {
			"version": "5.0.0",
			"resolved": "https://registry.npmjs.org/slice-ansi/-/slice-ansi-5.0.0.tgz",
			"integrity": "sha512-FC+lgizVPfie0kkhqUScwRu1O/lF6NOgJmlCgK+/LYxDCTk8sGelYaHDhFcDN+Sn3Cv+3VSa4Byeo+IMCzpMgQ==",
			"dev": true,
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
			"engines": {
				"node": ">= 6.0.0",
				"npm": ">= 3.0.0"
			}
		},
		"node_modules/socks": {
			"version": "2.8.3",
			"resolved": "https://registry.npmjs.org/socks/-/socks-2.8.3.tgz",
			"integrity": "sha512-l5x7VUUWbjVFbafGLxPWkYsHIhEvmF85tbIeFZWc8ZPtoMyybuEhL7Jye/ooC4/d48FgOjSJXgsF/AJPYCW8Zw==",
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
			"version": "8.0.4",
			"resolved": "https://registry.npmjs.org/socks-proxy-agent/-/socks-proxy-agent-8.0.4.tgz",
			"integrity": "sha512-GNAq/eg8Udq2x0eNiFkr9gRg5bA7PXEWagQdeRX4cPSG+X/8V38v637gim9bjFptMk1QWsCTr0ttrJEiXbNnRw==",
			"dev": true,
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
			"engines": {
				"node": ">= 8"
			}
		},
		"node_modules/source-map-js": {
			"version": "1.2.1",
			"resolved": "https://registry.npmjs.org/source-map-js/-/source-map-js-1.2.1.tgz",
			"integrity": "sha512-UXWMKhLOwVKb728IUtQPXxfYU+usdybtUrK/8uGE8CQMvrhOpwvzDBwj0QhSL7MQc7vIsISBG8VQ8+IDQxpfQA==",
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
			"version": "3.0.20",
			"resolved": "https://registry.npmjs.org/spdx-license-ids/-/spdx-license-ids-3.0.20.tgz",
			"integrity": "sha512-jg25NiDV/1fLtSgEgyvVyDunvaNHbuwF9lfNV17gSmPFAlYzdfNBlLtLzXTevwkPj7DhGbmN9VnmJIgLnhvaBw==",
			"dev": true
		},
		"node_modules/sprintf-js": {
			"version": "1.1.3",
			"resolved": "https://registry.npmjs.org/sprintf-js/-/sprintf-js-1.1.3.tgz",
			"integrity": "sha512-Oo+0REFV59/rz3gfJNKQiBlwfHaSESl1pcGyABQsnnIfWOFt6JNj5gCog2U6MLZ//IGYD+nA8nI+mTShREReaA==",
			"dev": true
		},
		"node_modules/ssri": {
			"version": "12.0.0",
			"resolved": "https://registry.npmjs.org/ssri/-/ssri-12.0.0.tgz",
			"integrity": "sha512-S7iGNosepx9RadX82oimUkvr0Ct7IjJbEbs4mJcTxst8um95J3sDYU1RBEOvdu6oL1Wek2ODI5i4MAw+dZ6cAQ==",
			"dev": true,
			"dependencies": {
				"minipass": "^7.0.3"
			},
			"engines": {
				"node": "^18.17.0 || >=20.5.0"
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
			"version": "7.2.0",
			"resolved": "https://registry.npmjs.org/string-width/-/string-width-7.2.0.tgz",
			"integrity": "sha512-tsaTIkKW9b4N+AEj+SVA+WhJzV7/zMhcSu78mLKWSk7cXMOSHsBKFWUs0fWwq8QyK3MgJBQRX6Gbi4kYbdvGkQ==",
			"dev": true,
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
			"dev": true
		},
		"node_modules/string-width-cjs/node_modules/is-fullwidth-code-point": {
			"version": "3.0.0",
			"resolved": "https://registry.npmjs.org/is-fullwidth-code-point/-/is-fullwidth-code-point-3.0.0.tgz",
			"integrity": "sha512-zymm5+u+sCsSWyD9qNaejV3DFvhCKclKdizYaJUuHA83RLjb7nSuGnddCHGv0hk+KY7BMAlsWeK4Ueg6EV6XQg==",
			"dev": true,
			"engines": {
				"node": ">=8"
			}
		},
		"node_modules/string-width/node_modules/ansi-regex": {
			"version": "6.1.0",
			"resolved": "https://registry.npmjs.org/ansi-regex/-/ansi-regex-6.1.0.tgz",
			"integrity": "sha512-7HSX4QQb4CspciLpVFwyRe79O3xsIZDDLER21kERQ71oaPodF8jL725AgJMFAYbooIqolJoRLuM81SpeUkpkvA==",
			"dev": true,
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
		"node_modules/sucrase": {
			"version": "3.35.0",
			"resolved": "https://registry.npmjs.org/sucrase/-/sucrase-3.35.0.tgz",
			"integrity": "sha512-8EbVDiu9iN/nESwxeSxDKe0dunta1GOlHufmSSXxMD2z2/tMZpDMpvXQGsc+ajGo8y2uYUmixaSRUc/QPoQ0GA==",
			"dev": true,
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
		"node_modules/tailwindcss": {
			"version": "3.4.16",
			"resolved": "https://registry.npmjs.org/tailwindcss/-/tailwindcss-3.4.16.tgz",
			"integrity": "sha512-TI4Cyx7gDiZ6r44ewaJmt0o6BrMCT5aK5e0rmJ/G9Xq3w7CX/5VXl/zIPEJZFUK5VEqwByyhqNPycPlvcK4ZNw==",
			"dev": true,
			"license": "MIT",
			"dependencies": {
				"@alloc/quick-lru": "^5.2.0",
				"arg": "^5.0.2",
				"chokidar": "^3.6.0",
				"didyoumean": "^1.2.2",
				"dlv": "^1.1.3",
				"fast-glob": "^3.3.2",
				"glob-parent": "^6.0.2",
				"is-glob": "^4.0.3",
				"jiti": "^1.21.6",
				"lilconfig": "^3.1.3",
				"micromatch": "^4.0.8",
				"normalize-path": "^3.0.0",
				"object-hash": "^3.0.0",
				"picocolors": "^1.1.1",
				"postcss": "^8.4.47",
				"postcss-import": "^15.1.0",
				"postcss-js": "^4.0.1",
				"postcss-load-config": "^4.0.2",
				"postcss-nested": "^6.2.0",
				"postcss-selector-parser": "^6.1.2",
				"resolve": "^1.22.8",
				"sucrase": "^3.35.0"
			},
			"bin": {
				"tailwind": "lib/cli.js",
				"tailwindcss": "lib/cli.js"
			},
			"engines": {
				"node": ">=14.0.0"
			}
		},
		"node_modules/tailwindcss/node_modules/chokidar": {
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
		"node_modules/tailwindcss/node_modules/chokidar/node_modules/glob-parent": {
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
		"node_modules/tailwindcss/node_modules/picomatch": {
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
		"node_modules/tailwindcss/node_modules/readdirp": {
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
		"node_modules/tar": {
			"version": "6.2.1",
			"resolved": "https://registry.npmjs.org/tar/-/tar-6.2.1.tgz",
			"integrity": "sha512-DZ4yORTwrbTj/7MZYq2w+/ZFdI6OZ/f9SFHR+71gIVUZhOQPHzVCLpvRnPgyaMpfWxxk/4ONva3GQSyNIKRv6A==",
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
		"node_modules/thenify": {
			"version": "3.3.1",
			"resolved": "https://registry.npmjs.org/thenify/-/thenify-3.3.1.tgz",
			"integrity": "sha512-RVZSIV5IG10Hk3enotrhvz0T9em6cyHBLkH/YAZuKqd8hRkKhSfCGIcP2KUY0EPxndzANBmNllzWPwak+bheSw==",
			"dev": true,
			"dependencies": {
				"any-promise": "^1.0.0"
			}
		},
		"node_modules/thenify-all": {
			"version": "1.6.0",
			"resolved": "https://registry.npmjs.org/thenify-all/-/thenify-all-1.6.0.tgz",
			"integrity": "sha512-RNxQH/qI8/t3thXJDwcstUO4zeqo64+Uy/+sNVRBx4Xn2OX+OZ9oP+iJnNFqplFra2ZUVeKCSa2oVWi3T4uVmA==",
			"dev": true,
			"dependencies": {
				"thenify": ">= 3.1.0 < 4"
			},
			"engines": {
				"node": ">=0.8"
			}
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
		"node_modules/ts-interface-checker": {
			"version": "0.1.13",
			"resolved": "https://registry.npmjs.org/ts-interface-checker/-/ts-interface-checker-0.1.13.tgz",
			"integrity": "sha512-Y/arvbn+rrz3JCKl9C4kVNfTfSm2/mEp5FSz5EsZSANGPSlQrpRI5M4PKF+mJnE52jOO90PnPSc3Ur3bTQw0gA==",
			"dev": true
		},
		"node_modules/tslib": {
			"version": "2.8.1",
			"resolved": "https://registry.npmjs.org/tslib/-/tslib-2.8.1.tgz",
			"integrity": "sha512-oJFu94HQb+KVduSUQL7wnpmqnfmLsOA/nAh6b6EH0wCEoK0/mPeXU6c3wKDV83MkOuHPRHtSXKKU99IBazS/2w==",
			"dev": true
		},
		"node_modules/tuf-js": {
			"version": "3.0.1",
			"resolved": "https://registry.npmjs.org/tuf-js/-/tuf-js-3.0.1.tgz",
			"integrity": "sha512-+68OP1ZzSF84rTckf3FA95vJ1Zlx/uaXyiiKyPd1pA4rZNkpEvDAKmsu1xUSmbF/chCRYgZ6UZkDwC7PmzmAyA==",
			"dev": true,
			"dependencies": {
				"@tufjs/models": "3.0.1",
				"debug": "^4.3.6",
				"make-fetch-happen": "^14.0.1"
			},
			"engines": {
				"node": "^18.17.0 || >=20.5.0"
			}
		},
		"node_modules/tuf-js/node_modules/@npmcli/agent": {
			"version": "3.0.0",
			"resolved": "https://registry.npmjs.org/@npmcli/agent/-/agent-3.0.0.tgz",
			"integrity": "sha512-S79NdEgDQd/NGCay6TCoVzXSj74skRZIKJcpJjC5lOq34SZzyI6MqtiiWoiVWoVrTcGjNeC4ipbh1VIHlpfF5Q==",
			"dev": true,
			"dependencies": {
				"agent-base": "^7.1.0",
				"http-proxy-agent": "^7.0.0",
				"https-proxy-agent": "^7.0.1",
				"lru-cache": "^10.0.1",
				"socks-proxy-agent": "^8.0.3"
			},
			"engines": {
				"node": "^18.17.0 || >=20.5.0"
			}
		},
		"node_modules/tuf-js/node_modules/lru-cache": {
			"version": "10.4.3",
			"resolved": "https://registry.npmjs.org/lru-cache/-/lru-cache-10.4.3.tgz",
			"integrity": "sha512-JNAzZcXrCt42VGLuYz0zfAzDfAvJWW6AfYlDBQyDV5DClI2m5sAmK+OIO7s59XfsRsWHp02jAJrRadPRGTt6SQ==",
			"dev": true
		},
		"node_modules/tuf-js/node_modules/make-fetch-happen": {
			"version": "14.0.3",
			"resolved": "https://registry.npmjs.org/make-fetch-happen/-/make-fetch-happen-14.0.3.tgz",
			"integrity": "sha512-QMjGbFTP0blj97EeidG5hk/QhKQ3T4ICckQGLgz38QF7Vgbk6e6FTARN8KhKxyBbWn8R0HU+bnw8aSoFPD4qtQ==",
			"dev": true,
			"dependencies": {
				"@npmcli/agent": "^3.0.0",
				"cacache": "^19.0.1",
				"http-cache-semantics": "^4.1.1",
				"minipass": "^7.0.2",
				"minipass-fetch": "^4.0.0",
				"minipass-flush": "^1.0.5",
				"minipass-pipeline": "^1.2.4",
				"negotiator": "^1.0.0",
				"proc-log": "^5.0.0",
				"promise-retry": "^2.0.1",
				"ssri": "^12.0.0"
			},
			"engines": {
				"node": "^18.17.0 || >=20.5.0"
			}
		},
		"node_modules/tuf-js/node_modules/minipass-fetch": {
			"version": "4.0.0",
			"resolved": "https://registry.npmjs.org/minipass-fetch/-/minipass-fetch-4.0.0.tgz",
			"integrity": "sha512-2v6aXUXwLP1Epd/gc32HAMIWoczx+fZwEPRHm/VwtrJzRGwR1qGZXEYV3Zp8ZjjbwaZhMrM6uHV4KVkk+XCc2w==",
			"dev": true,
			"dependencies": {
				"minipass": "^7.0.3",
				"minipass-sized": "^1.0.3",
				"minizlib": "^3.0.1"
			},
			"engines": {
				"node": "^18.17.0 || >=20.5.0"
			},
			"optionalDependencies": {
				"encoding": "^0.1.13"
			}
		},
		"node_modules/tuf-js/node_modules/minizlib": {
			"version": "3.0.1",
			"resolved": "https://registry.npmjs.org/minizlib/-/minizlib-3.0.1.tgz",
			"integrity": "sha512-umcy022ILvb5/3Djuu8LWeqUa8D68JaBzlttKeMWen48SjabqS3iY5w/vzeMzMUNhLDifyhbOwKDSznB1vvrwg==",
			"dev": true,
			"dependencies": {
				"minipass": "^7.0.4",
				"rimraf": "^5.0.5"
			},
			"engines": {
				"node": ">= 18"
			}
		},
		"node_modules/tuf-js/node_modules/negotiator": {
			"version": "1.0.0",
			"resolved": "https://registry.npmjs.org/negotiator/-/negotiator-1.0.0.tgz",
			"integrity": "sha512-8Ofs/AUQh8MaEcrlq5xOX0CQ9ypTF5dl78mjlMNfOK08fzpgTHQRQPBxcPlEtIw0yRpws+Zo/3r+5WRby7u3Gg==",
			"dev": true,
			"engines": {
				"node": ">= 0.6"
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
		"node_modules/typescript": {
			"version": "5.6.3",
			"resolved": "https://registry.npmjs.org/typescript/-/typescript-5.6.3.tgz",
			"integrity": "sha512-hjcS1mhfuyi4WW8IWtjP7brDrG2cuDZukyrYrSauoXGNgx0S7zceP07adYkJycEr56BOUTNPzbInooiN3fn1qw==",
			"dev": true,
			"bin": {
				"tsc": "bin/tsc",
				"tsserver": "bin/tsserver"
			},
			"engines": {
				"node": ">=14.17"
			}
		},
		"node_modules/undici-types": {
			"version": "6.20.0",
			"resolved": "https://registry.npmjs.org/undici-types/-/undici-types-6.20.0.tgz",
			"integrity": "sha512-Ny6QZ2Nju20vw1SRHe3d9jVu6gJ+4e3+MMpqu7pqE5HT6WsTSlce++GQmK5UXS8mzV8DSYHrQH+Xrf2jVcuKNg==",
			"dev": true,
			"peer": true
		},
		"node_modules/unique-filename": {
			"version": "4.0.0",
			"resolved": "https://registry.npmjs.org/unique-filename/-/unique-filename-4.0.0.tgz",
			"integrity": "sha512-XSnEewXmQ+veP7xX2dS5Q4yZAvO40cBN2MWkJ7D/6sW4Dg6wYBNwM1Vrnz1FhH5AdeLIlUXRI9e28z1YZi71NQ==",
			"dev": true,
			"dependencies": {
				"unique-slug": "^5.0.0"
			},
			"engines": {
				"node": "^18.17.0 || >=20.5.0"
			}
		},
		"node_modules/unique-slug": {
			"version": "5.0.0",
			"resolved": "https://registry.npmjs.org/unique-slug/-/unique-slug-5.0.0.tgz",
			"integrity": "sha512-9OdaqO5kwqR+1kVgHAhsp5vPNU0hnxRa26rBFNfNgM7M6pNtgzeBn3s/xbyCQL3dcjzOatcef6UUHpB/6MaETg==",
			"dev": true,
			"dependencies": {
				"imurmurhash": "^0.1.4"
			},
			"engines": {
				"node": "^18.17.0 || >=20.5.0"
			}
		},
		"node_modules/update-browserslist-db": {
			"version": "1.1.1",
			"resolved": "https://registry.npmjs.org/update-browserslist-db/-/update-browserslist-db-1.1.1.tgz",
			"integrity": "sha512-R8UzCaa9Az+38REPiJ1tXlImTJXlVfgHZsglwBD/k6nj76ctsH1E3q4doGrukiLQd3sGQYu56r5+lo5r94l29A==",
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
				"escalade": "^3.2.0",
				"picocolors": "^1.1.0"
			},
			"bin": {
				"update-browserslist-db": "cli.js"
			},
			"peerDependencies": {
				"browserslist": ">= 4.21.0"
			}
		},
		"node_modules/util-deprecate": {
			"version": "1.0.2",
			"resolved": "https://registry.npmjs.org/util-deprecate/-/util-deprecate-1.0.2.tgz",
			"integrity": "sha512-EPD5q1uXyFxJpCrLnCc1nHnq3gOa6DZBocAIiI2TaSCA7VCJ1UJDMagCzIkXNsUYfD1daK//LTEQ8xiIbrHtcw==",
			"dev": true
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
			"version": "6.0.0",
			"resolved": "https://registry.npmjs.org/validate-npm-package-name/-/validate-npm-package-name-6.0.0.tgz",
			"integrity": "sha512-d7KLgL1LD3U3fgnvWEY1cQXoO/q6EQ1BSz48Sa149V/5zVTAbgmZIpyI8TRi6U9/JNyeYLlTKsEMPtLC27RFUg==",
			"dev": true,
			"engines": {
				"node": "^18.17.0 || >=20.5.0"
			}
		},
		"node_modules/vite": {
			"version": "5.4.11",
			"resolved": "https://registry.npmjs.org/vite/-/vite-5.4.11.tgz",
			"integrity": "sha512-c7jFQRklXua0mTzneGW9QVyxFjUgwcihC4bXEtujIo2ouWCe1Ajt/amn2PCxYnhYfd5k09JX3SB7OYWFKYqj8Q==",
			"dev": true,
			"dependencies": {
				"esbuild": "^0.21.3",
				"postcss": "^8.4.43",
				"rollup": "^4.20.0"
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
			"version": "2.4.2",
			"resolved": "https://registry.npmjs.org/watchpack/-/watchpack-2.4.2.tgz",
			"integrity": "sha512-TnbFSbcOCcDgjZ4piURLCbJ3nJhznVh9kw6F6iokjiFPl8ONxe9A6nMDVXDiNbrSfLILs6vB07F7wLBrwPYzJw==",
			"dev": true,
			"dependencies": {
				"glob-to-regexp": "^0.4.1",
				"graceful-fs": "^4.1.2"
			},
			"engines": {
				"node": ">=10.13.0"
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
		"node_modules/weak-lru-cache": {
			"version": "1.2.2",
			"resolved": "https://registry.npmjs.org/weak-lru-cache/-/weak-lru-cache-1.2.2.tgz",
			"integrity": "sha512-DEAoo25RfSYMuTGc9vPJzZcZullwIqRDSI9LOy+fkCJPi6hykCnfKaXTuPBDuXAUcqHXyOgFtHNp/kB2FjYHbw==",
			"dev": true,
			"optional": true
		},
		"node_modules/which": {
			"version": "5.0.0",
			"resolved": "https://registry.npmjs.org/which/-/which-5.0.0.tgz",
			"integrity": "sha512-JEdGzHwwkrbWoGOlIHqQ5gtprKGOenpDHpxE9zVR1bWbOtYRyPPHMe9FaP6x61CmNaTThSkb0DAJte5jD+DmzQ==",
			"dev": true,
			"dependencies": {
				"isexe": "^3.1.1"
			},
			"bin": {
				"node-which": "bin/which.js"
			},
			"engines": {
				"node": "^18.17.0 || >=20.5.0"
			}
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
		"node_modules/wrap-ansi-cjs/node_modules/emoji-regex": {
			"version": "8.0.0",
			"resolved": "https://registry.npmjs.org/emoji-regex/-/emoji-regex-8.0.0.tgz",
			"integrity": "sha512-MSjYzcWNOA0ewAHpz0MxpYFvwg6yjy1NG3xteoqz644VCo/RPgnr1/GGt+ic3iJTzQ8Eu3TdM14SawnVUmGE6A==",
			"dev": true
		},
		"node_modules/wrap-ansi-cjs/node_modules/is-fullwidth-code-point": {
			"version": "3.0.0",
			"resolved": "https://registry.npmjs.org/is-fullwidth-code-point/-/is-fullwidth-code-point-3.0.0.tgz",
			"integrity": "sha512-zymm5+u+sCsSWyD9qNaejV3DFvhCKclKdizYaJUuHA83RLjb7nSuGnddCHGv0hk+KY7BMAlsWeK4Ueg6EV6XQg==",
			"dev": true,
			"engines": {
				"node": ">=8"
			}
		},
		"node_modules/wrap-ansi-cjs/node_modules/string-width": {
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
		"node_modules/wrap-ansi/node_modules/emoji-regex": {
			"version": "8.0.0",
			"resolved": "https://registry.npmjs.org/emoji-regex/-/emoji-regex-8.0.0.tgz",
			"integrity": "sha512-MSjYzcWNOA0ewAHpz0MxpYFvwg6yjy1NG3xteoqz644VCo/RPgnr1/GGt+ic3iJTzQ8Eu3TdM14SawnVUmGE6A==",
			"dev": true
		},
		"node_modules/wrap-ansi/node_modules/is-fullwidth-code-point": {
			"version": "3.0.0",
			"resolved": "https://registry.npmjs.org/is-fullwidth-code-point/-/is-fullwidth-code-point-3.0.0.tgz",
			"integrity": "sha512-zymm5+u+sCsSWyD9qNaejV3DFvhCKclKdizYaJUuHA83RLjb7nSuGnddCHGv0hk+KY7BMAlsWeK4Ueg6EV6XQg==",
			"dev": true,
			"engines": {
				"node": ">=8"
			}
		},
		"node_modules/wrap-ansi/node_modules/string-width": {
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
		"node_modules/yaml": {
			"version": "2.6.1",
			"resolved": "https://registry.npmjs.org/yaml/-/yaml-2.6.1.tgz",
			"integrity": "sha512-7r0XPzioN/Q9kXBro/XPnA6kznR73DHq+GXh5ON7ZozRO6aMjbmiBuKste2wslTFkC5d1dw0GooOCepZXJ2SAg==",
			"dev": true,
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
		"node_modules/yargs/node_modules/emoji-regex": {
			"version": "8.0.0",
			"resolved": "https://registry.npmjs.org/emoji-regex/-/emoji-regex-8.0.0.tgz",
			"integrity": "sha512-MSjYzcWNOA0ewAHpz0MxpYFvwg6yjy1NG3xteoqz644VCo/RPgnr1/GGt+ic3iJTzQ8Eu3TdM14SawnVUmGE6A==",
			"dev": true
		},
		"node_modules/yargs/node_modules/is-fullwidth-code-point": {
			"version": "3.0.0",
			"resolved": "https://registry.npmjs.org/is-fullwidth-code-point/-/is-fullwidth-code-point-3.0.0.tgz",
			"integrity": "sha512-zymm5+u+sCsSWyD9qNaejV3DFvhCKclKdizYaJUuHA83RLjb7nSuGnddCHGv0hk+KY7BMAlsWeK4Ueg6EV6XQg==",
			"dev": true,
			"engines": {
				"node": ">=8"
			}
		},
		"node_modules/yargs/node_modules/string-width": {
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
		"node_modules/yoctocolors-cjs": {
			"version": "2.1.2",
			"resolved": "https://registry.npmjs.org/yoctocolors-cjs/-/yoctocolors-cjs-2.1.2.tgz",
			"integrity": "sha512-cYVsTjKl8b+FrnidjibDWskAv7UKOfcwaVZdp/it9n1s9fU3IkgDbhdIRKCW4JDsAlECJY0ytoVPT3sK6kideA==",
			"dev": true,
			"engines": {
				"node": ">=18"
			},
			"funding": {
				"url": "https://github.com/sponsors/sindresorhus"
			}
		},
		"node_modules/zone.js": {
			"version": "0.15.0",
			"resolved": "https://registry.npmjs.org/zone.js/-/zone.js-0.15.0.tgz",
			"integrity": "sha512-9oxn0IIjbCZkJ67L+LkhYWRyAy7axphb3VgE2MBDlOqnmHMPWGYMxJxBYFueFq/JGY2GMwS0rU+UCLunEmy5UA==",
			"dev": true
		}
	}
}
`;export{t as default};