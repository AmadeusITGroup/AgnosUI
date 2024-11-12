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
				"@floating-ui/dom": "^1.6.12",
				"@types/react": "^18.3.12",
				"@types/react-dom": "^18.3.1",
				"@vitejs/plugin-react": "^4.3.3",
				"bootstrap-icons": "^1.11.3",
				"react": "^18.3.1",
				"react-dom": "^18.3.1",
				"sass": "^1.80.6",
				"tslib": "^2.8.1",
				"typescript": "~5.5.4",
				"vite": "^5.4.11",
				"vite-plugin-svgr": "^4.3.0"
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
			"version": "7.26.0",
			"resolved": "https://registry.npmjs.org/@babel/code-frame/-/code-frame-7.26.0.tgz",
			"integrity": "sha512-INCKxTtbXtcNbUZ3YXutwMpEleqttcswhAdee7dhuoVrD2cnuc3PqtERBtxkX5nziX9vnBL8WXmSGwv8CuPV6g==",
			"dev": true,
			"license": "MIT",
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
			"version": "7.26.0",
			"resolved": "https://registry.npmjs.org/@babel/compat-data/-/compat-data-7.26.0.tgz",
			"integrity": "sha512-qETICbZSLe7uXv9VE8T/RWOdIE5qqyTucOt4zLYMafj2MRO271VGgLd4RACJMeBO37UPWhXiKMBk7YlJ0fOzQA==",
			"dev": true,
			"license": "MIT",
			"engines": {
				"node": ">=6.9.0"
			}
		},
		"node_modules/@babel/core": {
			"version": "7.26.0",
			"resolved": "https://registry.npmjs.org/@babel/core/-/core-7.26.0.tgz",
			"integrity": "sha512-i1SLeK+DzNnQ3LL/CswPCa/E5u4lh1k6IAEphON8F+cXt0t9euTshDru0q7/IqMa1PMPz5RnHuHscF8/ZJsStg==",
			"dev": true,
			"license": "MIT",
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
		"node_modules/@babel/generator": {
			"version": "7.26.0",
			"resolved": "https://registry.npmjs.org/@babel/generator/-/generator-7.26.0.tgz",
			"integrity": "sha512-/AIkAmInnWwgEAJGQr9vY0c66Mj6kjkE2ZPB1PurTRaRAh3U+J45sAQMjQDJdh4WbR3l0x5xkimXBKyBXXAu2w==",
			"dev": true,
			"license": "MIT",
			"dependencies": {
				"@babel/parser": "^7.26.0",
				"@babel/types": "^7.26.0",
				"@jridgewell/gen-mapping": "^0.3.5",
				"@jridgewell/trace-mapping": "^0.3.25",
				"jsesc": "^3.0.2"
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
			"license": "MIT",
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
		"node_modules/@babel/helper-module-imports": {
			"version": "7.25.9",
			"resolved": "https://registry.npmjs.org/@babel/helper-module-imports/-/helper-module-imports-7.25.9.tgz",
			"integrity": "sha512-tnUA4RsrmflIM6W6RFTLFSXITtl0wKjgpnLgXyowocVPrbYrLUXSBXDgTs8BlbmIzIdlBySRQjINYs2BAkiLtw==",
			"dev": true,
			"license": "MIT",
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
			"license": "MIT",
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
			"license": "MIT",
			"engines": {
				"node": ">=6.9.0"
			}
		},
		"node_modules/@babel/helper-string-parser": {
			"version": "7.25.9",
			"resolved": "https://registry.npmjs.org/@babel/helper-string-parser/-/helper-string-parser-7.25.9.tgz",
			"integrity": "sha512-4A/SCr/2KLd5jrtOMFzaKjVtAei3+2r/NChoBNoZ3EyP/+GlhoaEGoWOZUmFmoITP7zOJyHIMm+DYRd8o3PvHA==",
			"dev": true,
			"license": "MIT",
			"engines": {
				"node": ">=6.9.0"
			}
		},
		"node_modules/@babel/helper-validator-identifier": {
			"version": "7.25.9",
			"resolved": "https://registry.npmjs.org/@babel/helper-validator-identifier/-/helper-validator-identifier-7.25.9.tgz",
			"integrity": "sha512-Ed61U6XJc3CVRfkERJWDz4dJwKe7iLmmJsbOGu9wSloNSFttHV0I8g6UAgb7qnK5ly5bGLPd4oXZlxCdANBOWQ==",
			"dev": true,
			"license": "MIT",
			"engines": {
				"node": ">=6.9.0"
			}
		},
		"node_modules/@babel/helper-validator-option": {
			"version": "7.25.9",
			"resolved": "https://registry.npmjs.org/@babel/helper-validator-option/-/helper-validator-option-7.25.9.tgz",
			"integrity": "sha512-e/zv1co8pp55dNdEcCynfj9X7nyUKUXoUEwfXqaZt0omVOmDe9oOTdKStH4GmAw6zxMFs50ZayuMfHDKlO7Tfw==",
			"dev": true,
			"license": "MIT",
			"engines": {
				"node": ">=6.9.0"
			}
		},
		"node_modules/@babel/helpers": {
			"version": "7.26.0",
			"resolved": "https://registry.npmjs.org/@babel/helpers/-/helpers-7.26.0.tgz",
			"integrity": "sha512-tbhNuIxNcVb21pInl3ZSjksLCvgdZy9KwJ8brv993QtIVKJBBkYXz4q4ZbAv31GdnC+R90np23L5FbEBlthAEw==",
			"dev": true,
			"license": "MIT",
			"dependencies": {
				"@babel/template": "^7.25.9",
				"@babel/types": "^7.26.0"
			},
			"engines": {
				"node": ">=6.9.0"
			}
		},
		"node_modules/@babel/parser": {
			"version": "7.26.1",
			"resolved": "https://registry.npmjs.org/@babel/parser/-/parser-7.26.1.tgz",
			"integrity": "sha512-reoQYNiAJreZNsJzyrDNzFQ+IQ5JFiIzAHJg9bn94S3l+4++J7RsIhNMoB+lgP/9tpmiAQqspv+xfdxTSzREOw==",
			"dev": true,
			"license": "MIT",
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
		"node_modules/@babel/plugin-transform-react-jsx-self": {
			"version": "7.25.9",
			"resolved": "https://registry.npmjs.org/@babel/plugin-transform-react-jsx-self/-/plugin-transform-react-jsx-self-7.25.9.tgz",
			"integrity": "sha512-y8quW6p0WHkEhmErnfe58r7x0A70uKphQm8Sp8cV7tjNQwK56sNVK0M73LK3WuYmsuyrftut4xAkjjgU0twaMg==",
			"dev": true,
			"license": "MIT",
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
		"node_modules/@babel/plugin-transform-react-jsx-source": {
			"version": "7.25.9",
			"resolved": "https://registry.npmjs.org/@babel/plugin-transform-react-jsx-source/-/plugin-transform-react-jsx-source-7.25.9.tgz",
			"integrity": "sha512-+iqjT8xmXhhYv4/uiYd8FNQsraMFZIfxVSqxxVSZP0WbbSAWvBXAul0m/zu+7Vv4O/3WtApy9pmaTMiumEZgfg==",
			"dev": true,
			"license": "MIT",
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
			"license": "MIT",
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
			"license": "MIT",
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
			"license": "MIT",
			"dependencies": {
				"@babel/helper-string-parser": "^7.25.9",
				"@babel/helper-validator-identifier": "^7.25.9"
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
			"version": "1.6.8",
			"resolved": "https://registry.npmjs.org/@floating-ui/core/-/core-1.6.8.tgz",
			"integrity": "sha512-7XJ9cPU+yI2QeLS+FCSlqNFZJq8arvswefkZrYI1yQBbftw6FyrZOxYSh+9S7z7TpeWlRt9zJ5IhM1WIL334jA==",
			"dev": true,
			"license": "MIT",
			"dependencies": {
				"@floating-ui/utils": "^0.2.8"
			}
		},
		"node_modules/@floating-ui/dom": {
			"version": "1.6.12",
			"resolved": "https://registry.npmjs.org/@floating-ui/dom/-/dom-1.6.12.tgz",
			"integrity": "sha512-NP83c0HjokcGVEMeoStg317VD9W7eDlGK7457dMBANbKA6GJZdc7rjujdgqzTaz93jkGgc5P/jeWbaCHnMNc+w==",
			"dev": true,
			"license": "MIT",
			"dependencies": {
				"@floating-ui/core": "^1.6.0",
				"@floating-ui/utils": "^0.2.8"
			}
		},
		"node_modules/@floating-ui/utils": {
			"version": "0.2.8",
			"resolved": "https://registry.npmjs.org/@floating-ui/utils/-/utils-0.2.8.tgz",
			"integrity": "sha512-kym7SodPp8/wloecOpcmSnWJsK7M0E5Wg8UcFA+uO4B9s5d0ywXOEro/8HM9x0rW+TljRzul/14UYz3TleT3ig==",
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
		"node_modules/@parcel/watcher": {
			"version": "2.4.1",
			"resolved": "https://registry.npmjs.org/@parcel/watcher/-/watcher-2.4.1.tgz",
			"integrity": "sha512-HNjmfLQEVRZmHRET336f20H/8kOozUGwk7yajvsonjNxbj2wBTK1WsQuHkD5yYh9RxFGL2EyDHryOihOwUoKDA==",
			"dev": true,
			"license": "MIT",
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
				"@parcel/watcher-android-arm64": "2.4.1",
				"@parcel/watcher-darwin-arm64": "2.4.1",
				"@parcel/watcher-darwin-x64": "2.4.1",
				"@parcel/watcher-freebsd-x64": "2.4.1",
				"@parcel/watcher-linux-arm-glibc": "2.4.1",
				"@parcel/watcher-linux-arm64-glibc": "2.4.1",
				"@parcel/watcher-linux-arm64-musl": "2.4.1",
				"@parcel/watcher-linux-x64-glibc": "2.4.1",
				"@parcel/watcher-linux-x64-musl": "2.4.1",
				"@parcel/watcher-win32-arm64": "2.4.1",
				"@parcel/watcher-win32-ia32": "2.4.1",
				"@parcel/watcher-win32-x64": "2.4.1"
			}
		},
		"node_modules/@parcel/watcher-android-arm64": {
			"version": "2.4.1",
			"resolved": "https://registry.npmjs.org/@parcel/watcher-android-arm64/-/watcher-android-arm64-2.4.1.tgz",
			"integrity": "sha512-LOi/WTbbh3aTn2RYddrO8pnapixAziFl6SMxHM69r3tvdSm94JtCenaKgk1GRg5FJ5wpMCpHeW+7yqPlvZv7kg==",
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
				"node": ">= 10.0.0"
			},
			"funding": {
				"type": "opencollective",
				"url": "https://opencollective.com/parcel"
			}
		},
		"node_modules/@parcel/watcher-darwin-arm64": {
			"version": "2.4.1",
			"resolved": "https://registry.npmjs.org/@parcel/watcher-darwin-arm64/-/watcher-darwin-arm64-2.4.1.tgz",
			"integrity": "sha512-ln41eihm5YXIY043vBrrHfn94SIBlqOWmoROhsMVTSXGh0QahKGy77tfEywQ7v3NywyxBBkGIfrWRHm0hsKtzA==",
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
				"node": ">= 10.0.0"
			},
			"funding": {
				"type": "opencollective",
				"url": "https://opencollective.com/parcel"
			}
		},
		"node_modules/@parcel/watcher-darwin-x64": {
			"version": "2.4.1",
			"resolved": "https://registry.npmjs.org/@parcel/watcher-darwin-x64/-/watcher-darwin-x64-2.4.1.tgz",
			"integrity": "sha512-yrw81BRLjjtHyDu7J61oPuSoeYWR3lDElcPGJyOvIXmor6DEo7/G2u1o7I38cwlcoBHQFULqF6nesIX3tsEXMg==",
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
				"node": ">= 10.0.0"
			},
			"funding": {
				"type": "opencollective",
				"url": "https://opencollective.com/parcel"
			}
		},
		"node_modules/@parcel/watcher-freebsd-x64": {
			"version": "2.4.1",
			"resolved": "https://registry.npmjs.org/@parcel/watcher-freebsd-x64/-/watcher-freebsd-x64-2.4.1.tgz",
			"integrity": "sha512-TJa3Pex/gX3CWIx/Co8k+ykNdDCLx+TuZj3f3h7eOjgpdKM+Mnix37RYsYU4LHhiYJz3DK5nFCCra81p6g050w==",
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
				"node": ">= 10.0.0"
			},
			"funding": {
				"type": "opencollective",
				"url": "https://opencollective.com/parcel"
			}
		},
		"node_modules/@parcel/watcher-linux-arm-glibc": {
			"version": "2.4.1",
			"resolved": "https://registry.npmjs.org/@parcel/watcher-linux-arm-glibc/-/watcher-linux-arm-glibc-2.4.1.tgz",
			"integrity": "sha512-4rVYDlsMEYfa537BRXxJ5UF4ddNwnr2/1O4MHM5PjI9cvV2qymvhwZSFgXqbS8YoTk5i/JR0L0JDs69BUn45YA==",
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
				"node": ">= 10.0.0"
			},
			"funding": {
				"type": "opencollective",
				"url": "https://opencollective.com/parcel"
			}
		},
		"node_modules/@parcel/watcher-linux-arm64-glibc": {
			"version": "2.4.1",
			"resolved": "https://registry.npmjs.org/@parcel/watcher-linux-arm64-glibc/-/watcher-linux-arm64-glibc-2.4.1.tgz",
			"integrity": "sha512-BJ7mH985OADVLpbrzCLgrJ3TOpiZggE9FMblfO65PlOCdG++xJpKUJ0Aol74ZUIYfb8WsRlUdgrZxKkz3zXWYA==",
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
				"node": ">= 10.0.0"
			},
			"funding": {
				"type": "opencollective",
				"url": "https://opencollective.com/parcel"
			}
		},
		"node_modules/@parcel/watcher-linux-arm64-musl": {
			"version": "2.4.1",
			"resolved": "https://registry.npmjs.org/@parcel/watcher-linux-arm64-musl/-/watcher-linux-arm64-musl-2.4.1.tgz",
			"integrity": "sha512-p4Xb7JGq3MLgAfYhslU2SjoV9G0kI0Xry0kuxeG/41UfpjHGOhv7UoUDAz/jb1u2elbhazy4rRBL8PegPJFBhA==",
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
				"node": ">= 10.0.0"
			},
			"funding": {
				"type": "opencollective",
				"url": "https://opencollective.com/parcel"
			}
		},
		"node_modules/@parcel/watcher-linux-x64-glibc": {
			"version": "2.4.1",
			"resolved": "https://registry.npmjs.org/@parcel/watcher-linux-x64-glibc/-/watcher-linux-x64-glibc-2.4.1.tgz",
			"integrity": "sha512-s9O3fByZ/2pyYDPoLM6zt92yu6P4E39a03zvO0qCHOTjxmt3GHRMLuRZEWhWLASTMSrrnVNWdVI/+pUElJBBBg==",
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
				"node": ">= 10.0.0"
			},
			"funding": {
				"type": "opencollective",
				"url": "https://opencollective.com/parcel"
			}
		},
		"node_modules/@parcel/watcher-linux-x64-musl": {
			"version": "2.4.1",
			"resolved": "https://registry.npmjs.org/@parcel/watcher-linux-x64-musl/-/watcher-linux-x64-musl-2.4.1.tgz",
			"integrity": "sha512-L2nZTYR1myLNST0O632g0Dx9LyMNHrn6TOt76sYxWLdff3cB22/GZX2UPtJnaqQPdCRoszoY5rcOj4oMTtp5fQ==",
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
				"node": ">= 10.0.0"
			},
			"funding": {
				"type": "opencollective",
				"url": "https://opencollective.com/parcel"
			}
		},
		"node_modules/@parcel/watcher-win32-arm64": {
			"version": "2.4.1",
			"resolved": "https://registry.npmjs.org/@parcel/watcher-win32-arm64/-/watcher-win32-arm64-2.4.1.tgz",
			"integrity": "sha512-Uq2BPp5GWhrq/lcuItCHoqxjULU1QYEcyjSO5jqqOK8RNFDBQnenMMx4gAl3v8GiWa59E9+uDM7yZ6LxwUIfRg==",
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
				"node": ">= 10.0.0"
			},
			"funding": {
				"type": "opencollective",
				"url": "https://opencollective.com/parcel"
			}
		},
		"node_modules/@parcel/watcher-win32-ia32": {
			"version": "2.4.1",
			"resolved": "https://registry.npmjs.org/@parcel/watcher-win32-ia32/-/watcher-win32-ia32-2.4.1.tgz",
			"integrity": "sha512-maNRit5QQV2kgHFSYwftmPBxiuK5u4DXjbXx7q6eKjq5dsLXZ4FJiVvlcw35QXzk0KrUecJmuVFbj4uV9oYrcw==",
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
				"node": ">= 10.0.0"
			},
			"funding": {
				"type": "opencollective",
				"url": "https://opencollective.com/parcel"
			}
		},
		"node_modules/@parcel/watcher-win32-x64": {
			"version": "2.4.1",
			"resolved": "https://registry.npmjs.org/@parcel/watcher-win32-x64/-/watcher-win32-x64-2.4.1.tgz",
			"integrity": "sha512-+DvS92F9ezicfswqrvIRM2njcYJbd5mb9CUgtrHCHmvn7pPPa+nMDRu1o1bYYz/l5IB2NVGNJWiH7h1E58IF2A==",
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
				"node": ">= 10.0.0"
			},
			"funding": {
				"type": "opencollective",
				"url": "https://opencollective.com/parcel"
			}
		},
		"node_modules/@rollup/pluginutils": {
			"version": "5.1.3",
			"resolved": "https://registry.npmjs.org/@rollup/pluginutils/-/pluginutils-5.1.3.tgz",
			"integrity": "sha512-Pnsb6f32CD2W3uCaLZIzDmeFyQ2b8UWMFI7xtwUezpcGBDVDW6y9XgAWIlARiGAo6eNF5FK5aQTr0LFyNyqq5A==",
			"dev": true,
			"license": "MIT",
			"dependencies": {
				"@types/estree": "^1.0.0",
				"estree-walker": "^2.0.2",
				"picomatch": "^4.0.2"
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
		"node_modules/@rollup/pluginutils/node_modules/picomatch": {
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
		"node_modules/@rollup/rollup-android-arm-eabi": {
			"version": "4.24.3",
			"resolved": "https://registry.npmjs.org/@rollup/rollup-android-arm-eabi/-/rollup-android-arm-eabi-4.24.3.tgz",
			"integrity": "sha512-ufb2CH2KfBWPJok95frEZZ82LtDl0A6QKTa8MoM+cWwDZvVGl5/jNb79pIhRvAalUu+7LD91VYR0nwRD799HkQ==",
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
			"version": "4.24.3",
			"resolved": "https://registry.npmjs.org/@rollup/rollup-android-arm64/-/rollup-android-arm64-4.24.3.tgz",
			"integrity": "sha512-iAHpft/eQk9vkWIV5t22V77d90CRofgR2006UiCjHcHJFVI1E0oBkQIAbz+pLtthFw3hWEmVB4ilxGyBf48i2Q==",
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
			"version": "4.24.3",
			"resolved": "https://registry.npmjs.org/@rollup/rollup-darwin-arm64/-/rollup-darwin-arm64-4.24.3.tgz",
			"integrity": "sha512-QPW2YmkWLlvqmOa2OwrfqLJqkHm7kJCIMq9kOz40Zo9Ipi40kf9ONG5Sz76zszrmIZZ4hgRIkez69YnTHgEz1w==",
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
			"version": "4.24.3",
			"resolved": "https://registry.npmjs.org/@rollup/rollup-darwin-x64/-/rollup-darwin-x64-4.24.3.tgz",
			"integrity": "sha512-KO0pN5x3+uZm1ZXeIfDqwcvnQ9UEGN8JX5ufhmgH5Lz4ujjZMAnxQygZAVGemFWn+ZZC0FQopruV4lqmGMshow==",
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
		"node_modules/@rollup/rollup-freebsd-arm64": {
			"version": "4.24.3",
			"resolved": "https://registry.npmjs.org/@rollup/rollup-freebsd-arm64/-/rollup-freebsd-arm64-4.24.3.tgz",
			"integrity": "sha512-CsC+ZdIiZCZbBI+aRlWpYJMSWvVssPuWqrDy/zi9YfnatKKSLFCe6fjna1grHuo/nVaHG+kiglpRhyBQYRTK4A==",
			"cpu": [
				"arm64"
			],
			"dev": true,
			"license": "MIT",
			"optional": true,
			"os": [
				"freebsd"
			]
		},
		"node_modules/@rollup/rollup-freebsd-x64": {
			"version": "4.24.3",
			"resolved": "https://registry.npmjs.org/@rollup/rollup-freebsd-x64/-/rollup-freebsd-x64-4.24.3.tgz",
			"integrity": "sha512-F0nqiLThcfKvRQhZEzMIXOQG4EeX61im61VYL1jo4eBxv4aZRmpin6crnBJQ/nWnCsjH5F6J3W6Stdm0mBNqBg==",
			"cpu": [
				"x64"
			],
			"dev": true,
			"license": "MIT",
			"optional": true,
			"os": [
				"freebsd"
			]
		},
		"node_modules/@rollup/rollup-linux-arm-gnueabihf": {
			"version": "4.24.3",
			"resolved": "https://registry.npmjs.org/@rollup/rollup-linux-arm-gnueabihf/-/rollup-linux-arm-gnueabihf-4.24.3.tgz",
			"integrity": "sha512-KRSFHyE/RdxQ1CSeOIBVIAxStFC/hnBgVcaiCkQaVC+EYDtTe4X7z5tBkFyRoBgUGtB6Xg6t9t2kulnX6wJc6A==",
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
			"version": "4.24.3",
			"resolved": "https://registry.npmjs.org/@rollup/rollup-linux-arm-musleabihf/-/rollup-linux-arm-musleabihf-4.24.3.tgz",
			"integrity": "sha512-h6Q8MT+e05zP5BxEKz0vi0DhthLdrNEnspdLzkoFqGwnmOzakEHSlXfVyA4HJ322QtFy7biUAVFPvIDEDQa6rw==",
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
			"version": "4.24.3",
			"resolved": "https://registry.npmjs.org/@rollup/rollup-linux-arm64-gnu/-/rollup-linux-arm64-gnu-4.24.3.tgz",
			"integrity": "sha512-fKElSyXhXIJ9pqiYRqisfirIo2Z5pTTve5K438URf08fsypXrEkVmShkSfM8GJ1aUyvjakT+fn2W7Czlpd/0FQ==",
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
			"version": "4.24.3",
			"resolved": "https://registry.npmjs.org/@rollup/rollup-linux-arm64-musl/-/rollup-linux-arm64-musl-4.24.3.tgz",
			"integrity": "sha512-YlddZSUk8G0px9/+V9PVilVDC6ydMz7WquxozToozSnfFK6wa6ne1ATUjUvjin09jp34p84milxlY5ikueoenw==",
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
			"version": "4.24.3",
			"resolved": "https://registry.npmjs.org/@rollup/rollup-linux-powerpc64le-gnu/-/rollup-linux-powerpc64le-gnu-4.24.3.tgz",
			"integrity": "sha512-yNaWw+GAO8JjVx3s3cMeG5Esz1cKVzz8PkTJSfYzE5u7A+NvGmbVFEHP+BikTIyYWuz0+DX9kaA3pH9Sqxp69g==",
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
			"version": "4.24.3",
			"resolved": "https://registry.npmjs.org/@rollup/rollup-linux-riscv64-gnu/-/rollup-linux-riscv64-gnu-4.24.3.tgz",
			"integrity": "sha512-lWKNQfsbpv14ZCtM/HkjCTm4oWTKTfxPmr7iPfp3AHSqyoTz5AgLemYkWLwOBWc+XxBbrU9SCokZP0WlBZM9lA==",
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
			"version": "4.24.3",
			"resolved": "https://registry.npmjs.org/@rollup/rollup-linux-s390x-gnu/-/rollup-linux-s390x-gnu-4.24.3.tgz",
			"integrity": "sha512-HoojGXTC2CgCcq0Woc/dn12wQUlkNyfH0I1ABK4Ni9YXyFQa86Fkt2Q0nqgLfbhkyfQ6003i3qQk9pLh/SpAYw==",
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
			"version": "4.24.3",
			"resolved": "https://registry.npmjs.org/@rollup/rollup-linux-x64-gnu/-/rollup-linux-x64-gnu-4.24.3.tgz",
			"integrity": "sha512-mnEOh4iE4USSccBOtcrjF5nj+5/zm6NcNhbSEfR3Ot0pxBwvEn5QVUXcuOwwPkapDtGZ6pT02xLoPaNv06w7KQ==",
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
			"version": "4.24.3",
			"resolved": "https://registry.npmjs.org/@rollup/rollup-linux-x64-musl/-/rollup-linux-x64-musl-4.24.3.tgz",
			"integrity": "sha512-rMTzawBPimBQkG9NKpNHvquIUTQPzrnPxPbCY1Xt+mFkW7pshvyIS5kYgcf74goxXOQk0CP3EoOC1zcEezKXhw==",
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
			"version": "4.24.3",
			"resolved": "https://registry.npmjs.org/@rollup/rollup-win32-arm64-msvc/-/rollup-win32-arm64-msvc-4.24.3.tgz",
			"integrity": "sha512-2lg1CE305xNvnH3SyiKwPVsTVLCg4TmNCF1z7PSHX2uZY2VbUpdkgAllVoISD7JO7zu+YynpWNSKAtOrX3AiuA==",
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
			"version": "4.24.3",
			"resolved": "https://registry.npmjs.org/@rollup/rollup-win32-ia32-msvc/-/rollup-win32-ia32-msvc-4.24.3.tgz",
			"integrity": "sha512-9SjYp1sPyxJsPWuhOCX6F4jUMXGbVVd5obVpoVEi8ClZqo52ViZewA6eFz85y8ezuOA+uJMP5A5zo6Oz4S5rVQ==",
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
			"version": "4.24.3",
			"resolved": "https://registry.npmjs.org/@rollup/rollup-win32-x64-msvc/-/rollup-win32-x64-msvc-4.24.3.tgz",
			"integrity": "sha512-HGZgRFFYrMrP3TJlq58nR1xy8zHKId25vhmm5S9jETEfDf6xybPxsavFTJaufe2zgOGYJBskGlj49CwtEuFhWQ==",
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
			"version": "1.0.6",
			"resolved": "https://registry.npmjs.org/@types/estree/-/estree-1.0.6.tgz",
			"integrity": "sha512-AYnb1nQyY49te+VRAVgmzfcgjYS91mY5P0TKUDCLEM+gNnA+3T6rWITXRLYCpahpqSQbN5cE+gHpnPyXjHWxcw==",
			"dev": true,
			"license": "MIT"
		},
		"node_modules/@types/prop-types": {
			"version": "15.7.13",
			"resolved": "https://registry.npmjs.org/@types/prop-types/-/prop-types-15.7.13.tgz",
			"integrity": "sha512-hCZTSvwbzWGvhqxp/RqVqwU999pBf2vp7hzIjiYOsl8wqOmUxkQ6ddw1cV3l8811+kdUFus/q4d1Y3E3SyEifA==",
			"dev": true,
			"license": "MIT"
		},
		"node_modules/@types/react": {
			"version": "18.3.12",
			"resolved": "https://registry.npmjs.org/@types/react/-/react-18.3.12.tgz",
			"integrity": "sha512-D2wOSq/d6Agt28q7rSI3jhU7G6aiuzljDGZ2hTZHIkrTLUI+AF3WMeKkEZ9nN2fkBAlcktT6vcZjDFiIhMYEQw==",
			"dev": true,
			"license": "MIT",
			"dependencies": {
				"@types/prop-types": "*",
				"csstype": "^3.0.2"
			}
		},
		"node_modules/@types/react-dom": {
			"version": "18.3.1",
			"resolved": "https://registry.npmjs.org/@types/react-dom/-/react-dom-18.3.1.tgz",
			"integrity": "sha512-qW1Mfv8taImTthu4KoXgDfLuk4bydU6Q/TkADnDWWHwi4NX4BR+LWfTp2sVmTqRrsHvyDDTelgelxJ+SsejKKQ==",
			"dev": true,
			"license": "MIT",
			"dependencies": {
				"@types/react": "*"
			}
		},
		"node_modules/@vitejs/plugin-react": {
			"version": "4.3.3",
			"resolved": "https://registry.npmjs.org/@vitejs/plugin-react/-/plugin-react-4.3.3.tgz",
			"integrity": "sha512-NooDe9GpHGqNns1i8XDERg0Vsg5SSYRhRxxyTGogUdkdNt47jal+fbuYi+Yfq6pzRCKXyoPcWisfxE6RIM3GKA==",
			"dev": true,
			"license": "MIT",
			"dependencies": {
				"@babel/core": "^7.25.2",
				"@babel/plugin-transform-react-jsx-self": "^7.24.7",
				"@babel/plugin-transform-react-jsx-source": "^7.24.7",
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
		"node_modules/argparse": {
			"version": "2.0.1",
			"resolved": "https://registry.npmjs.org/argparse/-/argparse-2.0.1.tgz",
			"integrity": "sha512-8+9WqebbFzpX9OR+Wa6O29asIogeRMzcGtAINdpMHHyAg10f05aSFVBbcEqGf/PXw1EjAZ+q2/bEBg3DvurK3Q==",
			"dev": true,
			"license": "Python-2.0"
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
			"optional": true,
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
			"license": "MIT",
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
			"version": "1.0.30001675",
			"resolved": "https://registry.npmjs.org/caniuse-lite/-/caniuse-lite-1.0.30001675.tgz",
			"integrity": "sha512-/wV1bQwPrkLiQMjaJF5yUMVM/VdRPOCU8QZ+PmG6uW6DvYSrNY1bpwHI/3mOcUosLaJCzYDi5o91IQB51ft6cg==",
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
		"node_modules/chokidar": {
			"version": "4.0.1",
			"resolved": "https://registry.npmjs.org/chokidar/-/chokidar-4.0.1.tgz",
			"integrity": "sha512-n8enUVCED/KVRQlab1hr3MVpcVMvxtZjmEa956u+4YijlmQED223XMSYj2tLuKvr4jcCTzNNMpQDUer72MMmzA==",
			"dev": true,
			"license": "MIT",
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
			"version": "4.3.7",
			"resolved": "https://registry.npmjs.org/debug/-/debug-4.3.7.tgz",
			"integrity": "sha512-Er2nc/H7RrMXZBFCEim6TCmMk02Z8vLC2Rbi1KEBggpo0fS6l0S1nnapwmIi3yW/+GOJap1Krg4w0Hg80oCqgQ==",
			"dev": true,
			"license": "MIT",
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
		"node_modules/detect-libc": {
			"version": "1.0.3",
			"resolved": "https://registry.npmjs.org/detect-libc/-/detect-libc-1.0.3.tgz",
			"integrity": "sha512-pGjwhsmsp4kL2RTz08wcOlGN83otlqHeD/Z5T8GXZB+/YcpQ/dgo+lbU8ZsGxV0HIvqqxo9l7mqYwyYMD9bKDg==",
			"dev": true,
			"license": "Apache-2.0",
			"optional": true,
			"bin": {
				"detect-libc": "bin/detect-libc.js"
			},
			"engines": {
				"node": ">=0.10"
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
			"version": "1.5.49",
			"resolved": "https://registry.npmjs.org/electron-to-chromium/-/electron-to-chromium-1.5.49.tgz",
			"integrity": "sha512-ZXfs1Of8fDb6z7WEYZjXpgIRF6MEu8JdeGA0A40aZq6OQbS+eJpnnV49epZRna2DU/YsEjSQuGtQPPtvt6J65A==",
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
			"version": "3.2.0",
			"resolved": "https://registry.npmjs.org/escalade/-/escalade-3.2.0.tgz",
			"integrity": "sha512-WUj2qlxaQtO4g6Pq5c29GTcWGDyd8itL8zTlipgECz3JesAiiOKotd8JU6otB3PACgG6xkJUyVhboMS+bje/jA==",
			"dev": true,
			"license": "MIT",
			"engines": {
				"node": ">=6"
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
			"optional": true,
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
		"node_modules/is-arrayish": {
			"version": "0.2.1",
			"resolved": "https://registry.npmjs.org/is-arrayish/-/is-arrayish-0.2.1.tgz",
			"integrity": "sha512-zz06S8t0ozoDXMG+ube26zeCTNXcKIPJZJi8hBrF4idCLms4CG9QtK7qBl1boi5ODzFpjswb5JPmHCbMpjaYzg==",
			"dev": true,
			"license": "MIT"
		},
		"node_modules/is-extglob": {
			"version": "2.1.1",
			"resolved": "https://registry.npmjs.org/is-extglob/-/is-extglob-2.1.1.tgz",
			"integrity": "sha512-SbKbANkN603Vi4jEZv49LeVJMn4yGwsbzZworEoyEiutsN3nJYdbO36zfhGJ6QEDpOZIFkDtnq5JRxmvl3jsoQ==",
			"dev": true,
			"license": "MIT",
			"optional": true,
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
			"optional": true,
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
			"optional": true,
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
			"version": "3.0.2",
			"resolved": "https://registry.npmjs.org/jsesc/-/jsesc-3.0.2.tgz",
			"integrity": "sha512-xKqzzWXDttJuOcawBt4KnKHHIf5oQ/Cxax+0PWFG+DFDgHNAdi+TXECADI+RYiFUMmx8792xsMbbgXj4CwnP4g==",
			"dev": true,
			"license": "MIT",
			"bin": {
				"jsesc": "bin/jsesc"
			},
			"engines": {
				"node": ">=6"
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
		"node_modules/micromatch": {
			"version": "4.0.8",
			"resolved": "https://registry.npmjs.org/micromatch/-/micromatch-4.0.8.tgz",
			"integrity": "sha512-PXwfBhYu0hBCPw8Dn0E+WDYb7af3dSLVWKi3HGv84IdF4TyFoC0ysxFd0Goxw7nSv4T/PzEJQxsYsEiFCKo2BA==",
			"dev": true,
			"license": "MIT",
			"optional": true,
			"dependencies": {
				"braces": "^3.0.3",
				"picomatch": "^2.3.1"
			},
			"engines": {
				"node": ">=8.6"
			}
		},
		"node_modules/ms": {
			"version": "2.1.3",
			"resolved": "https://registry.npmjs.org/ms/-/ms-2.1.3.tgz",
			"integrity": "sha512-6FlzubTLZG3J2a/NVCAleEhjzq5oxgHyaCU9yYXvcLsvoVaHJq/s5xXI6/XXP6tz7R9xAOtHnSO/tXtF3WRTlA==",
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
		"node_modules/node-addon-api": {
			"version": "7.1.1",
			"resolved": "https://registry.npmjs.org/node-addon-api/-/node-addon-api-7.1.1.tgz",
			"integrity": "sha512-5m3bsyrjFWE1xf7nz7YXdN4udnVtXK6/Yfgn5qnahL6bCkf2yKt4k3nuTKAtT4r3IG8JNR2ncsIMdZuAzJjHQQ==",
			"dev": true,
			"license": "MIT",
			"optional": true
		},
		"node_modules/node-releases": {
			"version": "2.0.18",
			"resolved": "https://registry.npmjs.org/node-releases/-/node-releases-2.0.18.tgz",
			"integrity": "sha512-d9VeXT4SJ7ZeOqGX6R5EM022wpL+eWPooLI+5UpWn2jCT1aosUQEhQP214x33Wkwx3JQMvIm+tIoVOdodFS40g==",
			"dev": true,
			"license": "MIT"
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
			"version": "1.1.1",
			"resolved": "https://registry.npmjs.org/picocolors/-/picocolors-1.1.1.tgz",
			"integrity": "sha512-xceH2snhtb5M9liqDsmEw56le376mTZkEX/jEb/RxNFyegNul7eNslCXP9FDj/Lcu0X8KEyMceP2ntpaHrDEVA==",
			"dev": true,
			"license": "ISC"
		},
		"node_modules/picomatch": {
			"version": "2.3.1",
			"resolved": "https://registry.npmjs.org/picomatch/-/picomatch-2.3.1.tgz",
			"integrity": "sha512-JU3teHTNjmE2VCGFzuY8EXzCDVwEqB2a8fsIvwaStHhAWJEeVd1o1QD80CU6+ZdEXXSLbSsuLwJjkCBWqRQUVA==",
			"dev": true,
			"license": "MIT",
			"optional": true,
			"engines": {
				"node": ">=8.6"
			},
			"funding": {
				"url": "https://github.com/sponsors/jonschlinkert"
			}
		},
		"node_modules/postcss": {
			"version": "8.4.47",
			"resolved": "https://registry.npmjs.org/postcss/-/postcss-8.4.47.tgz",
			"integrity": "sha512-56rxCq7G/XfB4EkXq9Egn5GCqugWvDFjafDOThIdMBsI15iqPqR5r15TfSr1YPYeEI19YeaXMCbY6u88Y76GLQ==",
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
				"picocolors": "^1.1.0",
				"source-map-js": "^1.2.1"
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
			"version": "4.0.2",
			"resolved": "https://registry.npmjs.org/readdirp/-/readdirp-4.0.2.tgz",
			"integrity": "sha512-yDMz9g+VaZkqBYS/ozoBJwaBhTbZo3UNYQHNRw1D3UFQB8oHB4uS/tAODO+ZLjGWmUbKnIlOWO+aaIiAxrUWHA==",
			"dev": true,
			"license": "MIT",
			"engines": {
				"node": ">= 14.16.0"
			},
			"funding": {
				"type": "individual",
				"url": "https://paulmillr.com/funding/"
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
			"version": "4.24.3",
			"resolved": "https://registry.npmjs.org/rollup/-/rollup-4.24.3.tgz",
			"integrity": "sha512-HBW896xR5HGmoksbi3JBDtmVzWiPAYqp7wip50hjQ67JbDz61nyoMPdqu1DvVW9asYb2M65Z20ZHsyJCMqMyDg==",
			"dev": true,
			"license": "MIT",
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
				"@rollup/rollup-android-arm-eabi": "4.24.3",
				"@rollup/rollup-android-arm64": "4.24.3",
				"@rollup/rollup-darwin-arm64": "4.24.3",
				"@rollup/rollup-darwin-x64": "4.24.3",
				"@rollup/rollup-freebsd-arm64": "4.24.3",
				"@rollup/rollup-freebsd-x64": "4.24.3",
				"@rollup/rollup-linux-arm-gnueabihf": "4.24.3",
				"@rollup/rollup-linux-arm-musleabihf": "4.24.3",
				"@rollup/rollup-linux-arm64-gnu": "4.24.3",
				"@rollup/rollup-linux-arm64-musl": "4.24.3",
				"@rollup/rollup-linux-powerpc64le-gnu": "4.24.3",
				"@rollup/rollup-linux-riscv64-gnu": "4.24.3",
				"@rollup/rollup-linux-s390x-gnu": "4.24.3",
				"@rollup/rollup-linux-x64-gnu": "4.24.3",
				"@rollup/rollup-linux-x64-musl": "4.24.3",
				"@rollup/rollup-win32-arm64-msvc": "4.24.3",
				"@rollup/rollup-win32-ia32-msvc": "4.24.3",
				"@rollup/rollup-win32-x64-msvc": "4.24.3",
				"fsevents": "~2.3.2"
			}
		},
		"node_modules/sass": {
			"version": "1.80.6",
			"resolved": "https://registry.npmjs.org/sass/-/sass-1.80.6.tgz",
			"integrity": "sha512-ccZgdHNiBF1NHBsWvacvT5rju3y1d/Eu+8Ex6c21nHp2lZGLBEtuwc415QfiI1PJa1TpCo3iXwwSRjRpn2Ckjg==",
			"dev": true,
			"license": "MIT",
			"dependencies": {
				"chokidar": "^4.0.0",
				"immutable": "^4.0.0",
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
			"version": "1.2.1",
			"resolved": "https://registry.npmjs.org/source-map-js/-/source-map-js-1.2.1.tgz",
			"integrity": "sha512-UXWMKhLOwVKb728IUtQPXxfYU+usdybtUrK/8uGE8CQMvrhOpwvzDBwj0QhSL7MQc7vIsISBG8VQ8+IDQxpfQA==",
			"dev": true,
			"license": "BSD-3-Clause",
			"engines": {
				"node": ">=0.10.0"
			}
		},
		"node_modules/svg-parser": {
			"version": "2.0.4",
			"resolved": "https://registry.npmjs.org/svg-parser/-/svg-parser-2.0.4.tgz",
			"integrity": "sha512-e4hG1hRwoOdRb37cIMSgzNsxyzKfayW6VOflrwvR+/bzrkyxY/31WkbgnQpgtrNp1SdpJvpUAGTa/ZoiPNDuRQ==",
			"dev": true,
			"license": "MIT"
		},
		"node_modules/to-regex-range": {
			"version": "5.0.1",
			"resolved": "https://registry.npmjs.org/to-regex-range/-/to-regex-range-5.0.1.tgz",
			"integrity": "sha512-65P7iz6X5yEr1cwcgvQxbbIw7Uk3gOy5dIdtZ4rDveLqhrdJP+Li/Hx6tyK0NEb+2GCyneCMJiGqrADCSNk8sQ==",
			"dev": true,
			"license": "MIT",
			"optional": true,
			"dependencies": {
				"is-number": "^7.0.0"
			},
			"engines": {
				"node": ">=8.0"
			}
		},
		"node_modules/tslib": {
			"version": "2.8.1",
			"resolved": "https://registry.npmjs.org/tslib/-/tslib-2.8.1.tgz",
			"integrity": "sha512-oJFu94HQb+KVduSUQL7wnpmqnfmLsOA/nAh6b6EH0wCEoK0/mPeXU6c3wKDV83MkOuHPRHtSXKKU99IBazS/2w==",
			"dev": true,
			"license": "0BSD"
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
			"license": "MIT",
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
		"node_modules/vite": {
			"version": "5.4.11",
			"resolved": "https://registry.npmjs.org/vite/-/vite-5.4.11.tgz",
			"integrity": "sha512-c7jFQRklXua0mTzneGW9QVyxFjUgwcihC4bXEtujIo2ouWCe1Ajt/amn2PCxYnhYfd5k09JX3SB7OYWFKYqj8Q==",
			"dev": true,
			"license": "MIT",
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
		"node_modules/vite-plugin-svgr": {
			"version": "4.3.0",
			"resolved": "https://registry.npmjs.org/vite-plugin-svgr/-/vite-plugin-svgr-4.3.0.tgz",
			"integrity": "sha512-Jy9qLB2/PyWklpYy0xk0UU3TlU0t2UMpJXZvf+hWII1lAmRHrOUKi11Uw8N3rxoNk7atZNYO3pR3vI1f7oi+6w==",
			"dev": true,
			"license": "MIT",
			"dependencies": {
				"@rollup/pluginutils": "^5.1.3",
				"@svgr/core": "^8.1.0",
				"@svgr/plugin-jsx": "^8.1.0"
			},
			"peerDependencies": {
				"vite": ">=2.6.0"
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
