const t=`{
	"name": "agnos-ui-react-stackblitz-demo",
	"version": "0.0.0",
	"lockfileVersion": 3,
	"requires": true,
	"packages": {
		"": {
			"name": "agnos-ui-react-stackblitz-demo",
			"version": "0.0.0",
			"devDependencies": {
				"@amadeus-it-group/tansu": "^1.0.0",
				"@floating-ui/dom": "^1.6.7",
				"@types/react": "^18.3.3",
				"@types/react-dom": "^18.3.0",
				"@vitejs/plugin-react": "^4.3.1",
				"bootstrap-icons": "^1.11.3",
				"react": "^18.3.1",
				"react-dom": "^18.3.1",
				"sass": "^1.77.8",
				"tslib": "^2.6.3",
				"typescript": "~5.5.3",
				"vite": "^5.3.4",
				"vite-plugin-svgr": "^4.2.0"
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
			"version": "7.24.9",
			"resolved": "https://registry.npmjs.org/@babel/compat-data/-/compat-data-7.24.9.tgz",
			"integrity": "sha512-e701mcfApCJqMMueQI0Fb68Amflj83+dvAvHawoBpAz+GDjCIyGHzNwnefjsWJ3xiYAqqiQFoWbspGYBdb2/ng==",
			"dev": true,
			"license": "MIT",
			"engines": {
				"node": ">=6.9.0"
			}
		},
		"node_modules/@babel/core": {
			"version": "7.24.9",
			"resolved": "https://registry.npmjs.org/@babel/core/-/core-7.24.9.tgz",
			"integrity": "sha512-5e3FI4Q3M3Pbr21+5xJwCv6ZT6KmGkI0vw3Tozy5ODAQFTIWe37iT8Cr7Ice2Ntb+M3iSKCEWMB1MBgKrW3whg==",
			"dev": true,
			"license": "MIT",
			"dependencies": {
				"@ampproject/remapping": "^2.2.0",
				"@babel/code-frame": "^7.24.7",
				"@babel/generator": "^7.24.9",
				"@babel/helper-compilation-targets": "^7.24.8",
				"@babel/helper-module-transforms": "^7.24.9",
				"@babel/helpers": "^7.24.8",
				"@babel/parser": "^7.24.8",
				"@babel/template": "^7.24.7",
				"@babel/traverse": "^7.24.8",
				"@babel/types": "^7.24.9",
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
		"node_modules/@babel/generator": {
			"version": "7.24.10",
			"resolved": "https://registry.npmjs.org/@babel/generator/-/generator-7.24.10.tgz",
			"integrity": "sha512-o9HBZL1G2129luEUlG1hB4N/nlYNWHnpwlND9eOMclRqqu1YDy2sSYVCFUZwl8I1Gxh+QSRrP2vD7EpUmFVXxg==",
			"dev": true,
			"license": "MIT",
			"dependencies": {
				"@babel/types": "^7.24.9",
				"@jridgewell/gen-mapping": "^0.3.5",
				"@jridgewell/trace-mapping": "^0.3.25",
				"jsesc": "^2.5.1"
			},
			"engines": {
				"node": ">=6.9.0"
			}
		},
		"node_modules/@babel/helper-compilation-targets": {
			"version": "7.24.8",
			"resolved": "https://registry.npmjs.org/@babel/helper-compilation-targets/-/helper-compilation-targets-7.24.8.tgz",
			"integrity": "sha512-oU+UoqCHdp+nWVDkpldqIQL/i/bvAv53tRqLG/s+cOXxe66zOYLU7ar/Xs3LdmBihrUMEUhwu6dMZwbNOYDwvw==",
			"dev": true,
			"license": "MIT",
			"dependencies": {
				"@babel/compat-data": "^7.24.8",
				"@babel/helper-validator-option": "^7.24.8",
				"browserslist": "^4.23.1",
				"lru-cache": "^5.1.1",
				"semver": "^6.3.1"
			},
			"engines": {
				"node": ">=6.9.0"
			}
		},
		"node_modules/@babel/helper-environment-visitor": {
			"version": "7.24.7",
			"resolved": "https://registry.npmjs.org/@babel/helper-environment-visitor/-/helper-environment-visitor-7.24.7.tgz",
			"integrity": "sha512-DoiN84+4Gnd0ncbBOM9AZENV4a5ZiL39HYMyZJGZ/AZEykHYdJw0wW3kdcsh9/Kn+BRXHLkkklZ51ecPKmI1CQ==",
			"dev": true,
			"license": "MIT",
			"dependencies": {
				"@babel/types": "^7.24.7"
			},
			"engines": {
				"node": ">=6.9.0"
			}
		},
		"node_modules/@babel/helper-function-name": {
			"version": "7.24.7",
			"resolved": "https://registry.npmjs.org/@babel/helper-function-name/-/helper-function-name-7.24.7.tgz",
			"integrity": "sha512-FyoJTsj/PEUWu1/TYRiXTIHc8lbw+TDYkZuoE43opPS5TrI7MyONBE1oNvfguEXAD9yhQRrVBnXdXzSLQl9XnA==",
			"dev": true,
			"license": "MIT",
			"dependencies": {
				"@babel/template": "^7.24.7",
				"@babel/types": "^7.24.7"
			},
			"engines": {
				"node": ">=6.9.0"
			}
		},
		"node_modules/@babel/helper-hoist-variables": {
			"version": "7.24.7",
			"resolved": "https://registry.npmjs.org/@babel/helper-hoist-variables/-/helper-hoist-variables-7.24.7.tgz",
			"integrity": "sha512-MJJwhkoGy5c4ehfoRyrJ/owKeMl19U54h27YYftT0o2teQ3FJ3nQUf/I3LlJsX4l3qlw7WRXUmiyajvHXoTubQ==",
			"dev": true,
			"license": "MIT",
			"dependencies": {
				"@babel/types": "^7.24.7"
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
			"version": "7.24.9",
			"resolved": "https://registry.npmjs.org/@babel/helper-module-transforms/-/helper-module-transforms-7.24.9.tgz",
			"integrity": "sha512-oYbh+rtFKj/HwBQkFlUzvcybzklmVdVV3UU+mN7n2t/q3yGHbuVdNxyFvSBO1tfvjyArpHNcWMAzsSPdyI46hw==",
			"dev": true,
			"license": "MIT",
			"dependencies": {
				"@babel/helper-environment-visitor": "^7.24.7",
				"@babel/helper-module-imports": "^7.24.7",
				"@babel/helper-simple-access": "^7.24.7",
				"@babel/helper-split-export-declaration": "^7.24.7",
				"@babel/helper-validator-identifier": "^7.24.7"
			},
			"engines": {
				"node": ">=6.9.0"
			},
			"peerDependencies": {
				"@babel/core": "^7.0.0"
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
		"node_modules/@babel/helpers": {
			"version": "7.24.8",
			"resolved": "https://registry.npmjs.org/@babel/helpers/-/helpers-7.24.8.tgz",
			"integrity": "sha512-gV2265Nkcz7weJJfvDoAEVzC1e2OTDpkGbEsebse8koXUJUXPsCMi7sRo/+SPMuMZ9MtUPnGwITTnQnU5YjyaQ==",
			"dev": true,
			"license": "MIT",
			"dependencies": {
				"@babel/template": "^7.24.7",
				"@babel/types": "^7.24.8"
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
			"version": "7.24.8",
			"resolved": "https://registry.npmjs.org/@babel/parser/-/parser-7.24.8.tgz",
			"integrity": "sha512-WzfbgXOkGzZiXXCqk43kKwZjzwx4oulxZi3nq2TYL9mOjQv6kYwul9mz6ID36njuL7Xkp6nJEfok848Zj10j/w==",
			"dev": true,
			"license": "MIT",
			"bin": {
				"parser": "bin/babel-parser.js"
			},
			"engines": {
				"node": ">=6.0.0"
			}
		},
		"node_modules/@babel/plugin-transform-react-jsx-self": {
			"version": "7.24.7",
			"resolved": "https://registry.npmjs.org/@babel/plugin-transform-react-jsx-self/-/plugin-transform-react-jsx-self-7.24.7.tgz",
			"integrity": "sha512-fOPQYbGSgH0HUp4UJO4sMBFjY6DuWq+2i8rixyUMb3CdGixs/gccURvYOAhajBdKDoGajFr3mUq5rH3phtkGzw==",
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
		"node_modules/@babel/plugin-transform-react-jsx-source": {
			"version": "7.24.7",
			"resolved": "https://registry.npmjs.org/@babel/plugin-transform-react-jsx-source/-/plugin-transform-react-jsx-source-7.24.7.tgz",
			"integrity": "sha512-J2z+MWzZHVOemyLweMqngXrgGC42jQ//R0KdxqkIz/OrbVIIlhFI3WigZ5fO+nwFvBlncr4MGapd8vTyc7RPNQ==",
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
		"node_modules/@babel/template": {
			"version": "7.24.7",
			"resolved": "https://registry.npmjs.org/@babel/template/-/template-7.24.7.tgz",
			"integrity": "sha512-jYqfPrU9JTF0PmPy1tLYHW4Mp4KlgxJD9l2nP9fD6yT/ICi554DmrWBAEYpIelzjHf1msDP3PxJIRt/nFNfBig==",
			"dev": true,
			"license": "MIT",
			"dependencies": {
				"@babel/code-frame": "^7.24.7",
				"@babel/parser": "^7.24.7",
				"@babel/types": "^7.24.7"
			},
			"engines": {
				"node": ">=6.9.0"
			}
		},
		"node_modules/@babel/traverse": {
			"version": "7.24.8",
			"resolved": "https://registry.npmjs.org/@babel/traverse/-/traverse-7.24.8.tgz",
			"integrity": "sha512-t0P1xxAPzEDcEPmjprAQq19NWum4K0EQPjMwZQZbHt+GiZqvjCHjj755Weq1YRPVzBI+3zSfvScfpnuIecVFJQ==",
			"dev": true,
			"license": "MIT",
			"dependencies": {
				"@babel/code-frame": "^7.24.7",
				"@babel/generator": "^7.24.8",
				"@babel/helper-environment-visitor": "^7.24.7",
				"@babel/helper-function-name": "^7.24.7",
				"@babel/helper-hoist-variables": "^7.24.7",
				"@babel/helper-split-export-declaration": "^7.24.7",
				"@babel/parser": "^7.24.8",
				"@babel/types": "^7.24.8",
				"debug": "^4.3.1",
				"globals": "^11.1.0"
			},
			"engines": {
				"node": ">=6.9.0"
			}
		},
		"node_modules/@babel/types": {
			"version": "7.24.9",
			"resolved": "https://registry.npmjs.org/@babel/types/-/types-7.24.9.tgz",
			"integrity": "sha512-xm8XrMKz0IlUdocVbYJe0Z9xEgidU7msskG8BbhnTPK/HZ2z/7FP7ykqPgrUH+C+r414mNfNWam1f2vqOjqjYQ==",
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
		"node_modules/@esbuild/aix-ppc64": {
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
		"node_modules/@esbuild/android-arm": {
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
		"node_modules/@esbuild/android-arm64": {
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
		"node_modules/@esbuild/android-x64": {
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
		"node_modules/@esbuild/darwin-arm64": {
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
		"node_modules/@esbuild/darwin-x64": {
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
		"node_modules/@esbuild/freebsd-arm64": {
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
		"node_modules/@esbuild/freebsd-x64": {
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
		"node_modules/@esbuild/linux-arm": {
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
		"node_modules/@esbuild/linux-arm64": {
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
		"node_modules/@esbuild/linux-ia32": {
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
		"node_modules/@esbuild/linux-loong64": {
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
		"node_modules/@esbuild/linux-mips64el": {
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
		"node_modules/@esbuild/linux-ppc64": {
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
		"node_modules/@esbuild/linux-riscv64": {
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
		"node_modules/@esbuild/linux-s390x": {
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
		"node_modules/@esbuild/linux-x64": {
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
		"node_modules/@esbuild/netbsd-x64": {
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
		"node_modules/@esbuild/openbsd-x64": {
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
		"node_modules/@esbuild/sunos-x64": {
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
		"node_modules/@esbuild/win32-arm64": {
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
		"node_modules/@esbuild/win32-ia32": {
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
		"node_modules/@esbuild/win32-x64": {
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
		"node_modules/@floating-ui/core": {
			"version": "1.6.4",
			"resolved": "https://registry.npmjs.org/@floating-ui/core/-/core-1.6.4.tgz",
			"integrity": "sha512-a4IowK4QkXl4SCWTGUR0INAfEOX3wtsYw3rKK5InQEHMGObkR8Xk44qYQD9P4r6HHw0iIfK6GUKECmY8sTkqRA==",
			"dev": true,
			"license": "MIT",
			"dependencies": {
				"@floating-ui/utils": "^0.2.4"
			}
		},
		"node_modules/@floating-ui/dom": {
			"version": "1.6.7",
			"resolved": "https://registry.npmjs.org/@floating-ui/dom/-/dom-1.6.7.tgz",
			"integrity": "sha512-wmVfPG5o2xnKDU4jx/m4w5qva9FWHcnZ8BvzEe90D/RpwsJaTAVYPEPdQ8sbr/N8zZTAHlZUTQdqg8ZUbzHmng==",
			"dev": true,
			"license": "MIT",
			"dependencies": {
				"@floating-ui/core": "^1.6.0",
				"@floating-ui/utils": "^0.2.4"
			}
		},
		"node_modules/@floating-ui/utils": {
			"version": "0.2.4",
			"resolved": "https://registry.npmjs.org/@floating-ui/utils/-/utils-0.2.4.tgz",
			"integrity": "sha512-dWO2pw8hhi+WrXq1YJy2yCuWoL20PddgGaqTgVe4cOS9Q6qklXCiA1tJEqX6BEwRNSCP84/afac9hd4MS+zEUA==",
			"dev": true,
			"license": "MIT"
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
		"node_modules/@rollup/pluginutils": {
			"version": "5.1.0",
			"resolved": "https://registry.npmjs.org/@rollup/pluginutils/-/pluginutils-5.1.0.tgz",
			"integrity": "sha512-XTIWOPPcpvyKI6L1NHo0lFlCyznUEyPmPY1mc3KpPVDYulHSTvyeLNVW00QTLIAFNhR3kYnJTQHeGqU4M3n09g==",
			"dev": true,
			"license": "MIT",
			"dependencies": {
				"@types/estree": "^1.0.0",
				"estree-walker": "^2.0.2",
				"picomatch": "^2.3.1"
			},
			"engines": {
				"node": ">=14.0.0"
			},
			"peerDependencies": {
				"rollup": "^1.20.0||^2.0.0||^3.0.0||^4.0.0"
			},
			"peerDependenciesMeta": {
				"rollup": {
					"optional": true
				}
			}
		},
		"node_modules/@rollup/rollup-android-arm-eabi": {
			"version": "4.19.0",
			"resolved": "https://registry.npmjs.org/@rollup/rollup-android-arm-eabi/-/rollup-android-arm-eabi-4.19.0.tgz",
			"integrity": "sha512-JlPfZ/C7yn5S5p0yKk7uhHTTnFlvTgLetl2VxqE518QgyM7C9bSfFTYvB/Q/ftkq0RIPY4ySxTz+/wKJ/dXC0w==",
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
			"version": "4.19.0",
			"resolved": "https://registry.npmjs.org/@rollup/rollup-android-arm64/-/rollup-android-arm64-4.19.0.tgz",
			"integrity": "sha512-RDxUSY8D1tWYfn00DDi5myxKgOk6RvWPxhmWexcICt/MEC6yEMr4HNCu1sXXYLw8iAsg0D44NuU+qNq7zVWCrw==",
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
			"version": "4.19.0",
			"resolved": "https://registry.npmjs.org/@rollup/rollup-darwin-arm64/-/rollup-darwin-arm64-4.19.0.tgz",
			"integrity": "sha512-emvKHL4B15x6nlNTBMtIaC9tLPRpeA5jMvRLXVbl/W9Ie7HhkrE7KQjvgS9uxgatL1HmHWDXk5TTS4IaNJxbAA==",
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
			"version": "4.19.0",
			"resolved": "https://registry.npmjs.org/@rollup/rollup-darwin-x64/-/rollup-darwin-x64-4.19.0.tgz",
			"integrity": "sha512-fO28cWA1dC57qCd+D0rfLC4VPbh6EOJXrreBmFLWPGI9dpMlER2YwSPZzSGfq11XgcEpPukPTfEVFtw2q2nYJg==",
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
			"version": "4.19.0",
			"resolved": "https://registry.npmjs.org/@rollup/rollup-linux-arm-gnueabihf/-/rollup-linux-arm-gnueabihf-4.19.0.tgz",
			"integrity": "sha512-2Rn36Ubxdv32NUcfm0wB1tgKqkQuft00PtM23VqLuCUR4N5jcNWDoV5iBC9jeGdgS38WK66ElncprqgMUOyomw==",
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
			"version": "4.19.0",
			"resolved": "https://registry.npmjs.org/@rollup/rollup-linux-arm-musleabihf/-/rollup-linux-arm-musleabihf-4.19.0.tgz",
			"integrity": "sha512-gJuzIVdq/X1ZA2bHeCGCISe0VWqCoNT8BvkQ+BfsixXwTOndhtLUpOg0A1Fcx/+eA6ei6rMBzlOz4JzmiDw7JQ==",
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
			"version": "4.19.0",
			"resolved": "https://registry.npmjs.org/@rollup/rollup-linux-arm64-gnu/-/rollup-linux-arm64-gnu-4.19.0.tgz",
			"integrity": "sha512-0EkX2HYPkSADo9cfeGFoQ7R0/wTKb7q6DdwI4Yn/ULFE1wuRRCHybxpl2goQrx4c/yzK3I8OlgtBu4xvted0ug==",
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
			"version": "4.19.0",
			"resolved": "https://registry.npmjs.org/@rollup/rollup-linux-arm64-musl/-/rollup-linux-arm64-musl-4.19.0.tgz",
			"integrity": "sha512-GlIQRj9px52ISomIOEUq/IojLZqzkvRpdP3cLgIE1wUWaiU5Takwlzpz002q0Nxxr1y2ZgxC2obWxjr13lvxNQ==",
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
			"version": "4.19.0",
			"resolved": "https://registry.npmjs.org/@rollup/rollup-linux-powerpc64le-gnu/-/rollup-linux-powerpc64le-gnu-4.19.0.tgz",
			"integrity": "sha512-N6cFJzssruDLUOKfEKeovCKiHcdwVYOT1Hs6dovDQ61+Y9n3Ek4zXvtghPPelt6U0AH4aDGnDLb83uiJMkWYzQ==",
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
			"version": "4.19.0",
			"resolved": "https://registry.npmjs.org/@rollup/rollup-linux-riscv64-gnu/-/rollup-linux-riscv64-gnu-4.19.0.tgz",
			"integrity": "sha512-2DnD3mkS2uuam/alF+I7M84koGwvn3ZVD7uG+LEWpyzo/bq8+kKnus2EVCkcvh6PlNB8QPNFOz6fWd5N8o1CYg==",
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
			"version": "4.19.0",
			"resolved": "https://registry.npmjs.org/@rollup/rollup-linux-s390x-gnu/-/rollup-linux-s390x-gnu-4.19.0.tgz",
			"integrity": "sha512-D6pkaF7OpE7lzlTOFCB2m3Ngzu2ykw40Nka9WmKGUOTS3xcIieHe82slQlNq69sVB04ch73thKYIWz/Ian8DUA==",
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
			"version": "4.19.0",
			"resolved": "https://registry.npmjs.org/@rollup/rollup-linux-x64-gnu/-/rollup-linux-x64-gnu-4.19.0.tgz",
			"integrity": "sha512-HBndjQLP8OsdJNSxpNIN0einbDmRFg9+UQeZV1eiYupIRuZsDEoeGU43NQsS34Pp166DtwQOnpcbV/zQxM+rWA==",
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
			"version": "4.19.0",
			"resolved": "https://registry.npmjs.org/@rollup/rollup-linux-x64-musl/-/rollup-linux-x64-musl-4.19.0.tgz",
			"integrity": "sha512-HxfbvfCKJe/RMYJJn0a12eiOI9OOtAUF4G6ozrFUK95BNyoJaSiBjIOHjZskTUffUrB84IPKkFG9H9nEvJGW6A==",
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
			"version": "4.19.0",
			"resolved": "https://registry.npmjs.org/@rollup/rollup-win32-arm64-msvc/-/rollup-win32-arm64-msvc-4.19.0.tgz",
			"integrity": "sha512-HxDMKIhmcguGTiP5TsLNolwBUK3nGGUEoV/BO9ldUBoMLBssvh4J0X8pf11i1fTV7WShWItB1bKAKjX4RQeYmg==",
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
			"version": "4.19.0",
			"resolved": "https://registry.npmjs.org/@rollup/rollup-win32-ia32-msvc/-/rollup-win32-ia32-msvc-4.19.0.tgz",
			"integrity": "sha512-xItlIAZZaiG/u0wooGzRsx11rokP4qyc/79LkAOdznGRAbOFc+SfEdfUOszG1odsHNgwippUJavag/+W/Etc6Q==",
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
			"version": "4.19.0",
			"resolved": "https://registry.npmjs.org/@rollup/rollup-win32-x64-msvc/-/rollup-win32-x64-msvc-4.19.0.tgz",
			"integrity": "sha512-xNo5fV5ycvCCKqiZcpB65VMR11NJB+StnxHz20jdqRAktfdfzhgjTiJ2doTDQE/7dqGaV5I7ZGqKpgph6lCIag==",
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
		"node_modules/@svgr/babel-plugin-add-jsx-attribute": {
			"version": "8.0.0",
			"resolved": "https://registry.npmjs.org/@svgr/babel-plugin-add-jsx-attribute/-/babel-plugin-add-jsx-attribute-8.0.0.tgz",
			"integrity": "sha512-b9MIk7yhdS1pMCZM8VeNfUlSKVRhsHZNMl5O9SfaX0l0t5wjdgu4IDzGB8bpnGBBOjGST3rRFVsaaEtI4W6f7g==",
			"dev": true,
			"license": "MIT",
			"engines": {
				"node": ">=14"
			},
			"funding": {
				"type": "github",
				"url": "https://github.com/sponsors/gregberge"
			},
			"peerDependencies": {
				"@babel/core": "^7.0.0-0"
			}
		},
		"node_modules/@svgr/babel-plugin-remove-jsx-attribute": {
			"version": "8.0.0",
			"resolved": "https://registry.npmjs.org/@svgr/babel-plugin-remove-jsx-attribute/-/babel-plugin-remove-jsx-attribute-8.0.0.tgz",
			"integrity": "sha512-BcCkm/STipKvbCl6b7QFrMh/vx00vIP63k2eM66MfHJzPr6O2U0jYEViXkHJWqXqQYjdeA9cuCl5KWmlwjDvbA==",
			"dev": true,
			"license": "MIT",
			"engines": {
				"node": ">=14"
			},
			"funding": {
				"type": "github",
				"url": "https://github.com/sponsors/gregberge"
			},
			"peerDependencies": {
				"@babel/core": "^7.0.0-0"
			}
		},
		"node_modules/@svgr/babel-plugin-remove-jsx-empty-expression": {
			"version": "8.0.0",
			"resolved": "https://registry.npmjs.org/@svgr/babel-plugin-remove-jsx-empty-expression/-/babel-plugin-remove-jsx-empty-expression-8.0.0.tgz",
			"integrity": "sha512-5BcGCBfBxB5+XSDSWnhTThfI9jcO5f0Ai2V24gZpG+wXF14BzwxxdDb4g6trdOux0rhibGs385BeFMSmxtS3uA==",
			"dev": true,
			"license": "MIT",
			"engines": {
				"node": ">=14"
			},
			"funding": {
				"type": "github",
				"url": "https://github.com/sponsors/gregberge"
			},
			"peerDependencies": {
				"@babel/core": "^7.0.0-0"
			}
		},
		"node_modules/@svgr/babel-plugin-replace-jsx-attribute-value": {
			"version": "8.0.0",
			"resolved": "https://registry.npmjs.org/@svgr/babel-plugin-replace-jsx-attribute-value/-/babel-plugin-replace-jsx-attribute-value-8.0.0.tgz",
			"integrity": "sha512-KVQ+PtIjb1BuYT3ht8M5KbzWBhdAjjUPdlMtpuw/VjT8coTrItWX6Qafl9+ji831JaJcu6PJNKCV0bp01lBNzQ==",
			"dev": true,
			"license": "MIT",
			"engines": {
				"node": ">=14"
			},
			"funding": {
				"type": "github",
				"url": "https://github.com/sponsors/gregberge"
			},
			"peerDependencies": {
				"@babel/core": "^7.0.0-0"
			}
		},
		"node_modules/@svgr/babel-plugin-svg-dynamic-title": {
			"version": "8.0.0",
			"resolved": "https://registry.npmjs.org/@svgr/babel-plugin-svg-dynamic-title/-/babel-plugin-svg-dynamic-title-8.0.0.tgz",
			"integrity": "sha512-omNiKqwjNmOQJ2v6ge4SErBbkooV2aAWwaPFs2vUY7p7GhVkzRkJ00kILXQvRhA6miHnNpXv7MRnnSjdRjK8og==",
			"dev": true,
			"license": "MIT",
			"engines": {
				"node": ">=14"
			},
			"funding": {
				"type": "github",
				"url": "https://github.com/sponsors/gregberge"
			},
			"peerDependencies": {
				"@babel/core": "^7.0.0-0"
			}
		},
		"node_modules/@svgr/babel-plugin-svg-em-dimensions": {
			"version": "8.0.0",
			"resolved": "https://registry.npmjs.org/@svgr/babel-plugin-svg-em-dimensions/-/babel-plugin-svg-em-dimensions-8.0.0.tgz",
			"integrity": "sha512-mURHYnu6Iw3UBTbhGwE/vsngtCIbHE43xCRK7kCw4t01xyGqb2Pd+WXekRRoFOBIY29ZoOhUCTEweDMdrjfi9g==",
			"dev": true,
			"license": "MIT",
			"engines": {
				"node": ">=14"
			},
			"funding": {
				"type": "github",
				"url": "https://github.com/sponsors/gregberge"
			},
			"peerDependencies": {
				"@babel/core": "^7.0.0-0"
			}
		},
		"node_modules/@svgr/babel-plugin-transform-react-native-svg": {
			"version": "8.1.0",
			"resolved": "https://registry.npmjs.org/@svgr/babel-plugin-transform-react-native-svg/-/babel-plugin-transform-react-native-svg-8.1.0.tgz",
			"integrity": "sha512-Tx8T58CHo+7nwJ+EhUwx3LfdNSG9R2OKfaIXXs5soiy5HtgoAEkDay9LIimLOcG8dJQH1wPZp/cnAv6S9CrR1Q==",
			"dev": true,
			"license": "MIT",
			"engines": {
				"node": ">=14"
			},
			"funding": {
				"type": "github",
				"url": "https://github.com/sponsors/gregberge"
			},
			"peerDependencies": {
				"@babel/core": "^7.0.0-0"
			}
		},
		"node_modules/@svgr/babel-plugin-transform-svg-component": {
			"version": "8.0.0",
			"resolved": "https://registry.npmjs.org/@svgr/babel-plugin-transform-svg-component/-/babel-plugin-transform-svg-component-8.0.0.tgz",
			"integrity": "sha512-DFx8xa3cZXTdb/k3kfPeaixecQLgKh5NVBMwD0AQxOzcZawK4oo1Jh9LbrcACUivsCA7TLG8eeWgrDXjTMhRmw==",
			"dev": true,
			"license": "MIT",
			"engines": {
				"node": ">=12"
			},
			"funding": {
				"type": "github",
				"url": "https://github.com/sponsors/gregberge"
			},
			"peerDependencies": {
				"@babel/core": "^7.0.0-0"
			}
		},
		"node_modules/@svgr/babel-preset": {
			"version": "8.1.0",
			"resolved": "https://registry.npmjs.org/@svgr/babel-preset/-/babel-preset-8.1.0.tgz",
			"integrity": "sha512-7EYDbHE7MxHpv4sxvnVPngw5fuR6pw79SkcrILHJ/iMpuKySNCl5W1qcwPEpU+LgyRXOaAFgH0KhwD18wwg6ug==",
			"dev": true,
			"license": "MIT",
			"dependencies": {
				"@svgr/babel-plugin-add-jsx-attribute": "8.0.0",
				"@svgr/babel-plugin-remove-jsx-attribute": "8.0.0",
				"@svgr/babel-plugin-remove-jsx-empty-expression": "8.0.0",
				"@svgr/babel-plugin-replace-jsx-attribute-value": "8.0.0",
				"@svgr/babel-plugin-svg-dynamic-title": "8.0.0",
				"@svgr/babel-plugin-svg-em-dimensions": "8.0.0",
				"@svgr/babel-plugin-transform-react-native-svg": "8.1.0",
				"@svgr/babel-plugin-transform-svg-component": "8.0.0"
			},
			"engines": {
				"node": ">=14"
			},
			"funding": {
				"type": "github",
				"url": "https://github.com/sponsors/gregberge"
			},
			"peerDependencies": {
				"@babel/core": "^7.0.0-0"
			}
		},
		"node_modules/@svgr/core": {
			"version": "8.1.0",
			"resolved": "https://registry.npmjs.org/@svgr/core/-/core-8.1.0.tgz",
			"integrity": "sha512-8QqtOQT5ACVlmsvKOJNEaWmRPmcojMOzCz4Hs2BGG/toAp/K38LcsMRyLp349glq5AzJbCEeimEoxaX6v/fLrA==",
			"dev": true,
			"license": "MIT",
			"dependencies": {
				"@babel/core": "^7.21.3",
				"@svgr/babel-preset": "8.1.0",
				"camelcase": "^6.2.0",
				"cosmiconfig": "^8.1.3",
				"snake-case": "^3.0.4"
			},
			"engines": {
				"node": ">=14"
			},
			"funding": {
				"type": "github",
				"url": "https://github.com/sponsors/gregberge"
			}
		},
		"node_modules/@svgr/hast-util-to-babel-ast": {
			"version": "8.0.0",
			"resolved": "https://registry.npmjs.org/@svgr/hast-util-to-babel-ast/-/hast-util-to-babel-ast-8.0.0.tgz",
			"integrity": "sha512-EbDKwO9GpfWP4jN9sGdYwPBU0kdomaPIL2Eu4YwmgP+sJeXT+L7bMwJUBnhzfH8Q2qMBqZ4fJwpCyYsAN3mt2Q==",
			"dev": true,
			"license": "MIT",
			"dependencies": {
				"@babel/types": "^7.21.3",
				"entities": "^4.4.0"
			},
			"engines": {
				"node": ">=14"
			},
			"funding": {
				"type": "github",
				"url": "https://github.com/sponsors/gregberge"
			}
		},
		"node_modules/@svgr/plugin-jsx": {
			"version": "8.1.0",
			"resolved": "https://registry.npmjs.org/@svgr/plugin-jsx/-/plugin-jsx-8.1.0.tgz",
			"integrity": "sha512-0xiIyBsLlr8quN+WyuxooNW9RJ0Dpr8uOnH/xrCVO8GLUcwHISwj1AG0k+LFzteTkAA0GbX0kj9q6Dk70PTiPA==",
			"dev": true,
			"license": "MIT",
			"dependencies": {
				"@babel/core": "^7.21.3",
				"@svgr/babel-preset": "8.1.0",
				"@svgr/hast-util-to-babel-ast": "8.0.0",
				"svg-parser": "^2.0.4"
			},
			"engines": {
				"node": ">=14"
			},
			"funding": {
				"type": "github",
				"url": "https://github.com/sponsors/gregberge"
			},
			"peerDependencies": {
				"@svgr/core": "*"
			}
		},
		"node_modules/@types/babel__core": {
			"version": "7.20.5",
			"resolved": "https://registry.npmjs.org/@types/babel__core/-/babel__core-7.20.5.tgz",
			"integrity": "sha512-qoQprZvz5wQFJwMDqeseRXWv3rqMvhgpbXFfVyWhbx9X47POIA6i/+dXefEmZKoAgOaTdaIgNSMqMIU61yRyzA==",
			"dev": true,
			"license": "MIT",
			"dependencies": {
				"@babel/parser": "^7.20.7",
				"@babel/types": "^7.20.7",
				"@types/babel__generator": "*",
				"@types/babel__template": "*",
				"@types/babel__traverse": "*"
			}
		},
		"node_modules/@types/babel__generator": {
			"version": "7.6.8",
			"resolved": "https://registry.npmjs.org/@types/babel__generator/-/babel__generator-7.6.8.tgz",
			"integrity": "sha512-ASsj+tpEDsEiFr1arWrlN6V3mdfjRMZt6LtK/Vp/kreFLnr5QH5+DhvD5nINYZXzwJvXeGq+05iUXcAzVrqWtw==",
			"dev": true,
			"license": "MIT",
			"dependencies": {
				"@babel/types": "^7.0.0"
			}
		},
		"node_modules/@types/babel__template": {
			"version": "7.4.4",
			"resolved": "https://registry.npmjs.org/@types/babel__template/-/babel__template-7.4.4.tgz",
			"integrity": "sha512-h/NUaSyG5EyxBIp8YRxo4RMe2/qQgvyowRwVMzhYhBCONbW8PUsg4lkFMrhgZhUe5z3L3MiLDuvyJ/CaPa2A8A==",
			"dev": true,
			"license": "MIT",
			"dependencies": {
				"@babel/parser": "^7.1.0",
				"@babel/types": "^7.0.0"
			}
		},
		"node_modules/@types/babel__traverse": {
			"version": "7.20.6",
			"resolved": "https://registry.npmjs.org/@types/babel__traverse/-/babel__traverse-7.20.6.tgz",
			"integrity": "sha512-r1bzfrm0tomOI8g1SzvCaQHo6Lcv6zu0EA+W2kHrt8dyrHQxGzBBL4kdkzIS+jBMV+EYcMAEAqXqYaLJq5rOZg==",
			"dev": true,
			"license": "MIT",
			"dependencies": {
				"@babel/types": "^7.20.7"
			}
		},
		"node_modules/@types/estree": {
			"version": "1.0.5",
			"resolved": "https://registry.npmjs.org/@types/estree/-/estree-1.0.5.tgz",
			"integrity": "sha512-/kYRxGDLWzHOB7q+wtSUQlFrtcdUccpfy+X+9iMBpHK8QLLhx2wIPYuS5DYtR9Wa/YlZAbIovy7qVdB1Aq6Lyw==",
			"dev": true,
			"license": "MIT"
		},
		"node_modules/@types/prop-types": {
			"version": "15.7.12",
			"resolved": "https://registry.npmjs.org/@types/prop-types/-/prop-types-15.7.12.tgz",
			"integrity": "sha512-5zvhXYtRNRluoE/jAp4GVsSduVUzNWKkOZrCDBWYtE7biZywwdC2AcEzg+cSMLFRfVgeAFqpfNabiPjxFddV1Q==",
			"dev": true,
			"license": "MIT"
		},
		"node_modules/@types/react": {
			"version": "18.3.3",
			"resolved": "https://registry.npmjs.org/@types/react/-/react-18.3.3.tgz",
			"integrity": "sha512-hti/R0pS0q1/xx+TsI73XIqk26eBsISZ2R0wUijXIngRK9R/e7Xw/cXVxQK7R5JjW+SV4zGcn5hXjudkN/pLIw==",
			"dev": true,
			"license": "MIT",
			"dependencies": {
				"@types/prop-types": "*",
				"csstype": "^3.0.2"
			}
		},
		"node_modules/@types/react-dom": {
			"version": "18.3.0",
			"resolved": "https://registry.npmjs.org/@types/react-dom/-/react-dom-18.3.0.tgz",
			"integrity": "sha512-EhwApuTmMBmXuFOikhQLIBUn6uFg81SwLMOAUgodJF14SOBOCMdU04gDoYi0WOJJHD144TL32z4yDqCW3dnkQg==",
			"dev": true,
			"license": "MIT",
			"dependencies": {
				"@types/react": "*"
			}
		},
		"node_modules/@vitejs/plugin-react": {
			"version": "4.3.1",
			"resolved": "https://registry.npmjs.org/@vitejs/plugin-react/-/plugin-react-4.3.1.tgz",
			"integrity": "sha512-m/V2syj5CuVnaxcUJOQRel/Wr31FFXRFlnOoq1TVtkCxsY5veGMTEmpWHndrhB2U8ScHtCQB1e+4hWYExQc6Lg==",
			"dev": true,
			"license": "MIT",
			"dependencies": {
				"@babel/core": "^7.24.5",
				"@babel/plugin-transform-react-jsx-self": "^7.24.5",
				"@babel/plugin-transform-react-jsx-source": "^7.24.1",
				"@types/babel__core": "^7.20.5",
				"react-refresh": "^0.14.2"
			},
			"engines": {
				"node": "^14.18.0 || >=16.0.0"
			},
			"peerDependencies": {
				"vite": "^4.2.0 || ^5.0.0"
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
		"node_modules/argparse": {
			"version": "2.0.1",
			"resolved": "https://registry.npmjs.org/argparse/-/argparse-2.0.1.tgz",
			"integrity": "sha512-8+9WqebbFzpX9OR+Wa6O29asIogeRMzcGtAINdpMHHyAg10f05aSFVBbcEqGf/PXw1EjAZ+q2/bEBg3DvurK3Q==",
			"dev": true,
			"license": "Python-2.0"
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
			],
			"license": "MIT"
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
			"version": "4.23.2",
			"resolved": "https://registry.npmjs.org/browserslist/-/browserslist-4.23.2.tgz",
			"integrity": "sha512-qkqSyistMYdxAcw+CzbZwlBy8AGmS/eEWs+sEV5TnLRGDOL+C5M2EnH6tlZyg0YoAxGJAFKh61En9BR941GnHA==",
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
				"caniuse-lite": "^1.0.30001640",
				"electron-to-chromium": "^1.4.820",
				"node-releases": "^2.0.14",
				"update-browserslist-db": "^1.1.0"
			},
			"bin": {
				"browserslist": "cli.js"
			},
			"engines": {
				"node": "^6 || ^7 || ^8 || ^9 || ^10 || ^11 || ^12 || >=13.7"
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
		"node_modules/camelcase": {
			"version": "6.3.0",
			"resolved": "https://registry.npmjs.org/camelcase/-/camelcase-6.3.0.tgz",
			"integrity": "sha512-Gmy6FhYlCY7uOElZUSbxo2UCDH8owEk996gkbrpsgGtrJLM3J7jGxl9Ic7Qwwj4ivOE5AWZWRMecDdF7hqGjFA==",
			"dev": true,
			"license": "MIT",
			"engines": {
				"node": ">=10"
			},
			"funding": {
				"url": "https://github.com/sponsors/sindresorhus"
			}
		},
		"node_modules/caniuse-lite": {
			"version": "1.0.30001643",
			"resolved": "https://registry.npmjs.org/caniuse-lite/-/caniuse-lite-1.0.30001643.tgz",
			"integrity": "sha512-ERgWGNleEilSrHM6iUz/zJNSQTP8Mr21wDWpdgvRwcTXGAq6jMtOUPP4dqFPTdKqZ2wKTdtB+uucZ3MRpAUSmg==",
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
		"node_modules/convert-source-map": {
			"version": "2.0.0",
			"resolved": "https://registry.npmjs.org/convert-source-map/-/convert-source-map-2.0.0.tgz",
			"integrity": "sha512-Kvp459HrV2FEJ1CAsi1Ku+MY3kasH19TFykTz2xWmMeq6bk2NU3XXvfJ+Q61m0xktWwt+1HSYf3JZsTms3aRJg==",
			"dev": true,
			"license": "MIT"
		},
		"node_modules/cosmiconfig": {
			"version": "8.3.6",
			"resolved": "https://registry.npmjs.org/cosmiconfig/-/cosmiconfig-8.3.6.tgz",
			"integrity": "sha512-kcZ6+W5QzcJ3P1Mt+83OUv/oHFqZHIx8DuxG6eZ5RGMERoLqp4BuGjhHLYGK+Kf5XVkQvqBSmAy/nGWN3qDgEA==",
			"dev": true,
			"license": "MIT",
			"dependencies": {
				"import-fresh": "^3.3.0",
				"js-yaml": "^4.1.0",
				"parse-json": "^5.2.0",
				"path-type": "^4.0.0"
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
		"node_modules/csstype": {
			"version": "3.1.3",
			"resolved": "https://registry.npmjs.org/csstype/-/csstype-3.1.3.tgz",
			"integrity": "sha512-M1uQkMl8rQK/szD0LNhtqxIPLpimGm8sOBwU7lLnCpSbTyY3yeU1Vc7l4KT5zT4s/yOxHH5O7tIuuLOCnLADRw==",
			"dev": true,
			"license": "MIT"
		},
		"node_modules/debug": {
			"version": "4.3.5",
			"resolved": "https://registry.npmjs.org/debug/-/debug-4.3.5.tgz",
			"integrity": "sha512-pt0bNEmneDIvdL1Xsd9oDQ/wrQRkXDT4AUWlNZNPKvW5x/jyO9VFXkJUP07vQ2upmw5PlaITaPKc31jK13V+jg==",
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
		"node_modules/dot-case": {
			"version": "3.0.4",
			"resolved": "https://registry.npmjs.org/dot-case/-/dot-case-3.0.4.tgz",
			"integrity": "sha512-Kv5nKlh6yRrdrGvxeJ2e5y2eRUpkUosIW4A2AS38zwSz27zu7ufDwQPi5Jhs3XAlGNetl3bmnGhQsMtkKJnj3w==",
			"dev": true,
			"license": "MIT",
			"dependencies": {
				"no-case": "^3.0.4",
				"tslib": "^2.0.3"
			}
		},
		"node_modules/electron-to-chromium": {
			"version": "1.4.832",
			"resolved": "https://registry.npmjs.org/electron-to-chromium/-/electron-to-chromium-1.4.832.tgz",
			"integrity": "sha512-cTen3SB0H2SGU7x467NRe1eVcQgcuS6jckKfWJHia2eo0cHIGOqHoAxevIYZD4eRHcWjkvFzo93bi3vJ9W+1lA==",
			"dev": true,
			"license": "ISC"
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
		"node_modules/esbuild": {
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
		"node_modules/escalade": {
			"version": "3.1.2",
			"resolved": "https://registry.npmjs.org/escalade/-/escalade-3.1.2.tgz",
			"integrity": "sha512-ErCHMCae19vR8vQGe50xIsVomy19rg6gFu3+r3jkEO46suLMWBksvVyoGgQV+jOfl84ZSOSlmv6Gxa89PmTGmA==",
			"dev": true,
			"license": "MIT",
			"engines": {
				"node": ">=6"
			}
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
		"node_modules/estree-walker": {
			"version": "2.0.2",
			"resolved": "https://registry.npmjs.org/estree-walker/-/estree-walker-2.0.2.tgz",
			"integrity": "sha512-Rfkk/Mp/DL7JVje3u18FxFujQlTNR2q6QfMSMB7AvCBx91NGj/ba3kCfza0f6dVDbw7YlRf/nDrn7pQrCCyQ/w==",
			"dev": true,
			"license": "MIT"
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
		"node_modules/immutable": {
			"version": "4.3.6",
			"resolved": "https://registry.npmjs.org/immutable/-/immutable-4.3.6.tgz",
			"integrity": "sha512-Ju0+lEMyzMVZarkTn/gqRpdqd5dOPaz1mCZ0SH3JV6iFw81PldE/PEB1hWVEA288HPt4WXW8O7AWxB10M+03QQ==",
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
			"version": "2.3.1",
			"resolved": "https://registry.npmjs.org/json-parse-even-better-errors/-/json-parse-even-better-errors-2.3.1.tgz",
			"integrity": "sha512-xyFwyhro/JEof6Ghe2iz2NcXoj2sloNsWr/XsERDK/oiPCfaNhl5ONfp+jQdAZRQQ0IJWNzH9zIZF7li91kh2w==",
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
		"node_modules/lines-and-columns": {
			"version": "1.2.4",
			"resolved": "https://registry.npmjs.org/lines-and-columns/-/lines-and-columns-1.2.4.tgz",
			"integrity": "sha512-7ylylesZQ/PV29jhEDl3Ufjo6ZX7gCqJr5F7PKrqc93v7fzSymt1BpwEU8nAUXs8qzzvqhbjhK5QZg6Mt/HkBg==",
			"dev": true,
			"license": "MIT"
		},
		"node_modules/loose-envify": {
			"version": "1.4.0",
			"resolved": "https://registry.npmjs.org/loose-envify/-/loose-envify-1.4.0.tgz",
			"integrity": "sha512-lyuxPGr/Wfhrlem2CL/UcnUc1zcqKAImBDzukY7Y5F/yQiNdko6+fRLevlw1HgMySw7f611UIY408EtxRSoK3Q==",
			"dev": true,
			"license": "MIT",
			"dependencies": {
				"js-tokens": "^3.0.0 || ^4.0.0"
			},
			"bin": {
				"loose-envify": "cli.js"
			}
		},
		"node_modules/lower-case": {
			"version": "2.0.2",
			"resolved": "https://registry.npmjs.org/lower-case/-/lower-case-2.0.2.tgz",
			"integrity": "sha512-7fm3l3NAF9WfN6W3JOmf5drwpVqX78JtoGJ3A6W0a6ZnldM41w2fV5D490psKFTpMds8TJse/eHLFFsNHHjHgg==",
			"dev": true,
			"license": "MIT",
			"dependencies": {
				"tslib": "^2.0.3"
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
		"node_modules/ms": {
			"version": "2.1.2",
			"resolved": "https://registry.npmjs.org/ms/-/ms-2.1.2.tgz",
			"integrity": "sha512-sGkPx+VjMtmA6MX27oA4FBFELFCZZ4S4XqeGOXCv68tT+jb3vk/RyaKWP0PTKyWtmLSM0b+adUTEvbs1PEaH2w==",
			"dev": true,
			"license": "MIT"
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
		"node_modules/no-case": {
			"version": "3.0.4",
			"resolved": "https://registry.npmjs.org/no-case/-/no-case-3.0.4.tgz",
			"integrity": "sha512-fgAN3jGAh+RoxUGZHTSOLJIqUc2wmoBwGR4tbpNAKmmovFoWq0OdRkb0VkldReO2a2iBT/OEulG9XSUc10r3zg==",
			"dev": true,
			"license": "MIT",
			"dependencies": {
				"lower-case": "^2.0.2",
				"tslib": "^2.0.3"
			}
		},
		"node_modules/node-releases": {
			"version": "2.0.18",
			"resolved": "https://registry.npmjs.org/node-releases/-/node-releases-2.0.18.tgz",
			"integrity": "sha512-d9VeXT4SJ7ZeOqGX6R5EM022wpL+eWPooLI+5UpWn2jCT1aosUQEhQP214x33Wkwx3JQMvIm+tIoVOdodFS40g==",
			"dev": true,
			"license": "MIT"
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
		"node_modules/path-type": {
			"version": "4.0.0",
			"resolved": "https://registry.npmjs.org/path-type/-/path-type-4.0.0.tgz",
			"integrity": "sha512-gDKb8aZMDeD/tZWs9P6+q0J9Mwkdl6xMV8TjnGP3qJVJ06bdMgkbBlLU8IdfOsIsFz2BW1rNVT3XuNEl8zPAvw==",
			"dev": true,
			"license": "MIT",
			"engines": {
				"node": ">=8"
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
		"node_modules/postcss": {
			"version": "8.4.39",
			"resolved": "https://registry.npmjs.org/postcss/-/postcss-8.4.39.tgz",
			"integrity": "sha512-0vzE+lAiG7hZl1/9I8yzKLx3aR9Xbof3fBHKunvMfOCYAtMhrsnccJY2iTURb9EZd5+pLuiNV9/c/GZJOHsgIw==",
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
		"node_modules/react": {
			"version": "18.3.1",
			"resolved": "https://registry.npmjs.org/react/-/react-18.3.1.tgz",
			"integrity": "sha512-wS+hAgJShR0KhEvPJArfuPVN1+Hz1t0Y6n5jLrGQbkb4urgPE/0Rve+1kMB1v/oWgHgm4WIcV+i7F2pTVj+2iQ==",
			"dev": true,
			"license": "MIT",
			"dependencies": {
				"loose-envify": "^1.1.0"
			},
			"engines": {
				"node": ">=0.10.0"
			}
		},
		"node_modules/react-dom": {
			"version": "18.3.1",
			"resolved": "https://registry.npmjs.org/react-dom/-/react-dom-18.3.1.tgz",
			"integrity": "sha512-5m4nQKp+rZRb09LNH59GM4BxTh9251/ylbKIbpe7TpGxfJ+9kv6BLkLBXIjjspbgbnIBNqlI23tRnTWT0snUIw==",
			"dev": true,
			"license": "MIT",
			"dependencies": {
				"loose-envify": "^1.1.0",
				"scheduler": "^0.23.2"
			},
			"peerDependencies": {
				"react": "^18.3.1"
			}
		},
		"node_modules/react-refresh": {
			"version": "0.14.2",
			"resolved": "https://registry.npmjs.org/react-refresh/-/react-refresh-0.14.2.tgz",
			"integrity": "sha512-jCvmsr+1IUSMUyzOkRcvnVbX3ZYC6g9TDrDbFuFmRDq7PD4yaGbLKNQL6k2jnArV8hjYxh7hVhAZB6s9HDGpZA==",
			"dev": true,
			"license": "MIT",
			"engines": {
				"node": ">=0.10.0"
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
		"node_modules/rollup": {
			"version": "4.19.0",
			"resolved": "https://registry.npmjs.org/rollup/-/rollup-4.19.0.tgz",
			"integrity": "sha512-5r7EYSQIowHsK4eTZ0Y81qpZuJz+MUuYeqmmYmRMl1nwhdmbiYqt5jwzf6u7wyOzJgYqtCRMtVRKOtHANBz7rA==",
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
				"@rollup/rollup-android-arm-eabi": "4.19.0",
				"@rollup/rollup-android-arm64": "4.19.0",
				"@rollup/rollup-darwin-arm64": "4.19.0",
				"@rollup/rollup-darwin-x64": "4.19.0",
				"@rollup/rollup-linux-arm-gnueabihf": "4.19.0",
				"@rollup/rollup-linux-arm-musleabihf": "4.19.0",
				"@rollup/rollup-linux-arm64-gnu": "4.19.0",
				"@rollup/rollup-linux-arm64-musl": "4.19.0",
				"@rollup/rollup-linux-powerpc64le-gnu": "4.19.0",
				"@rollup/rollup-linux-riscv64-gnu": "4.19.0",
				"@rollup/rollup-linux-s390x-gnu": "4.19.0",
				"@rollup/rollup-linux-x64-gnu": "4.19.0",
				"@rollup/rollup-linux-x64-musl": "4.19.0",
				"@rollup/rollup-win32-arm64-msvc": "4.19.0",
				"@rollup/rollup-win32-ia32-msvc": "4.19.0",
				"@rollup/rollup-win32-x64-msvc": "4.19.0",
				"fsevents": "~2.3.2"
			}
		},
		"node_modules/sass": {
			"version": "1.77.8",
			"resolved": "https://registry.npmjs.org/sass/-/sass-1.77.8.tgz",
			"integrity": "sha512-4UHg6prsrycW20fqLGPShtEvo/WyHRVRHwOP4DzkUrObWoWI05QBSfzU71TVB7PFaL104TwNaHpjlWXAZbQiNQ==",
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
		"node_modules/scheduler": {
			"version": "0.23.2",
			"resolved": "https://registry.npmjs.org/scheduler/-/scheduler-0.23.2.tgz",
			"integrity": "sha512-UOShsPwz7NrMUqhR6t0hWjFduvOzbtv7toDH1/hIrfRNIDBnnBWd0CwJTGvTpngVlmwGCdP9/Zl/tVrDqcuYzQ==",
			"dev": true,
			"license": "MIT",
			"dependencies": {
				"loose-envify": "^1.1.0"
			}
		},
		"node_modules/semver": {
			"version": "6.3.1",
			"resolved": "https://registry.npmjs.org/semver/-/semver-6.3.1.tgz",
			"integrity": "sha512-BR7VvDCVHO+q2xBEWskxS6DJE1qRnb7DxzUrogb71CWoSficBxYsiAGd+Kl0mmq/MprG9yArRkyrQxTO6XjMzA==",
			"dev": true,
			"license": "ISC",
			"bin": {
				"semver": "bin/semver.js"
			}
		},
		"node_modules/snake-case": {
			"version": "3.0.4",
			"resolved": "https://registry.npmjs.org/snake-case/-/snake-case-3.0.4.tgz",
			"integrity": "sha512-LAOh4z89bGQvl9pFfNF8V146i7o7/CqFPbqzYgP+yYzDIDeS9HaNFtXABamRW+AQzEVODcvE79ljJ+8a9YSdMg==",
			"dev": true,
			"license": "MIT",
			"dependencies": {
				"dot-case": "^3.0.4",
				"tslib": "^2.0.3"
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
		"node_modules/svg-parser": {
			"version": "2.0.4",
			"resolved": "https://registry.npmjs.org/svg-parser/-/svg-parser-2.0.4.tgz",
			"integrity": "sha512-e4hG1hRwoOdRb37cIMSgzNsxyzKfayW6VOflrwvR+/bzrkyxY/31WkbgnQpgtrNp1SdpJvpUAGTa/ZoiPNDuRQ==",
			"dev": true,
			"license": "MIT"
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
		"node_modules/tslib": {
			"version": "2.6.3",
			"resolved": "https://registry.npmjs.org/tslib/-/tslib-2.6.3.tgz",
			"integrity": "sha512-xNvxJEOUiWPGhUuUdQgAJPKOOJfGnIyKySOc09XkKsgdUV/3E2zvwZYdejjmRgPCgcym1juLH3226yA7sEFJKQ==",
			"dev": true,
			"license": "0BSD"
		},
		"node_modules/typescript": {
			"version": "5.5.3",
			"resolved": "https://registry.npmjs.org/typescript/-/typescript-5.5.3.tgz",
			"integrity": "sha512-/hreyEujaB0w76zKo6717l3L0o/qEUtRgdvUBvlkhoWeOVMjMuHNHk0BRBzikzuGDqNmPQbg5ifMEqsHLiIUcQ==",
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
		"node_modules/vite": {
			"version": "5.3.4",
			"resolved": "https://registry.npmjs.org/vite/-/vite-5.3.4.tgz",
			"integrity": "sha512-Cw+7zL3ZG9/NZBB8C+8QbQZmR54GwqIz+WMI4b3JgdYJvX+ny9AjJXqkGQlDXSXRP9rP0B4tbciRMOVEKulVOA==",
			"dev": true,
			"license": "MIT",
			"dependencies": {
				"esbuild": "^0.21.3",
				"postcss": "^8.4.39",
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
		"node_modules/vite-plugin-svgr": {
			"version": "4.2.0",
			"resolved": "https://registry.npmjs.org/vite-plugin-svgr/-/vite-plugin-svgr-4.2.0.tgz",
			"integrity": "sha512-SC7+FfVtNQk7So0XMjrrtLAbEC8qjFPifyD7+fs/E6aaNdVde6umlVVh0QuwDLdOMu7vp5RiGFsB70nj5yo0XA==",
			"dev": true,
			"license": "MIT",
			"dependencies": {
				"@rollup/pluginutils": "^5.0.5",
				"@svgr/core": "^8.1.0",
				"@svgr/plugin-jsx": "^8.1.0"
			},
			"peerDependencies": {
				"vite": "^2.6.0 || 3 || 4 || 5"
			}
		},
		"node_modules/yallist": {
			"version": "3.1.1",
			"resolved": "https://registry.npmjs.org/yallist/-/yallist-3.1.1.tgz",
			"integrity": "sha512-a4UGQaWPH59mOXUYnAG2ewncQS4i4F43Tv3JoAM+s2VDAmS9NsK8GpDMLrCHPksFT7h3K6TOoUNn2pb7RoXx4g==",
			"dev": true,
			"license": "ISC"
		}
	}
}
`;export{t as default};