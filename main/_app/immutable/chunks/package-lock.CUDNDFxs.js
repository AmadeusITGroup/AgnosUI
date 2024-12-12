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
				"@amadeus-it-group/tansu": "^2.0.0",
				"@floating-ui/dom": "^1.6.12",
				"@types/react": "^19.0.0",
				"@types/react-dom": "^19.0.0",
				"@vitejs/plugin-react": "^4.3.4",
				"bootstrap-icons": "^1.11.3",
				"react": "^19.0.0",
				"react-dom": "^19.0.0",
				"sass": "^1.82.0",
				"tslib": "^2.8.1",
				"typescript": "~5.6.3",
				"vite": "^6.0.3",
				"vite-plugin-svgr": "^4.3.0"
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
			"version": "7.26.3",
			"resolved": "https://registry.npmjs.org/@babel/compat-data/-/compat-data-7.26.3.tgz",
			"integrity": "sha512-nHIxvKPniQXpmQLb0vhY3VaFb3S0YrTAwpOWJZh1wn3oJPjJk9Asva204PsBdmAE8vpzfHudT8DB0scYvy9q0g==",
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
		"node_modules/@babel/generator": {
			"version": "7.26.3",
			"resolved": "https://registry.npmjs.org/@babel/generator/-/generator-7.26.3.tgz",
			"integrity": "sha512-6FF/urZvD0sTeO7k6/B15pMLC4CHUv1426lzr3N01aHJTl046uCAh9LXW/fzeXXjPNCJ6iABW5XaWOsIZB93aQ==",
			"dev": true,
			"dependencies": {
				"@babel/parser": "^7.26.3",
				"@babel/types": "^7.26.3",
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
			"version": "7.26.3",
			"resolved": "https://registry.npmjs.org/@babel/parser/-/parser-7.26.3.tgz",
			"integrity": "sha512-WJ/CvmY8Mea8iDXo6a7RK2wbmJITT5fN3BEkRuFlxVyNx8jOKIIhmC4fSkTcPcf8JyavbBwIe6OpiCOBXt/IcA==",
			"dev": true,
			"dependencies": {
				"@babel/types": "^7.26.3"
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
			"version": "7.26.4",
			"resolved": "https://registry.npmjs.org/@babel/traverse/-/traverse-7.26.4.tgz",
			"integrity": "sha512-fH+b7Y4p3yqvApJALCPJcwb0/XaOSgtK4pzV6WVjPR5GLFQBRI7pfoX2V2iM48NXvX07NUxxm1Vw98YjqTcU5w==",
			"dev": true,
			"dependencies": {
				"@babel/code-frame": "^7.26.2",
				"@babel/generator": "^7.26.3",
				"@babel/parser": "^7.26.3",
				"@babel/template": "^7.25.9",
				"@babel/types": "^7.26.3",
				"debug": "^4.3.1",
				"globals": "^11.1.0"
			},
			"engines": {
				"node": ">=6.9.0"
			}
		},
		"node_modules/@babel/types": {
			"version": "7.26.3",
			"resolved": "https://registry.npmjs.org/@babel/types/-/types-7.26.3.tgz",
			"integrity": "sha512-vN5p+1kl59GVKMvTHt55NzzmYVxprfJD+ql7U9NFIfKCBkYE55LYtS+WtPlaYOyzydrKI8Nezd+aZextrd+FMA==",
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
		"node_modules/@rollup/pluginutils": {
			"version": "5.1.3",
			"resolved": "https://registry.npmjs.org/@rollup/pluginutils/-/pluginutils-5.1.3.tgz",
			"integrity": "sha512-Pnsb6f32CD2W3uCaLZIzDmeFyQ2b8UWMFI7xtwUezpcGBDVDW6y9XgAWIlARiGAo6eNF5FK5aQTr0LFyNyqq5A==",
			"dev": true,
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
			"engines": {
				"node": ">=12"
			},
			"funding": {
				"url": "https://github.com/sponsors/jonschlinkert"
			}
		},
		"node_modules/@rollup/rollup-android-arm-eabi": {
			"version": "4.28.1",
			"resolved": "https://registry.npmjs.org/@rollup/rollup-android-arm-eabi/-/rollup-android-arm-eabi-4.28.1.tgz",
			"integrity": "sha512-2aZp8AES04KI2dy3Ss6/MDjXbwBzj+i0GqKtWXgw2/Ma6E4jJvujryO6gJAghIRVz7Vwr9Gtl/8na3nDUKpraQ==",
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
			"version": "4.28.1",
			"resolved": "https://registry.npmjs.org/@rollup/rollup-android-arm64/-/rollup-android-arm64-4.28.1.tgz",
			"integrity": "sha512-EbkK285O+1YMrg57xVA+Dp0tDBRB93/BZKph9XhMjezf6F4TpYjaUSuPt5J0fZXlSag0LmZAsTmdGGqPp4pQFA==",
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
			"version": "4.28.1",
			"resolved": "https://registry.npmjs.org/@rollup/rollup-darwin-arm64/-/rollup-darwin-arm64-4.28.1.tgz",
			"integrity": "sha512-prduvrMKU6NzMq6nxzQw445zXgaDBbMQvmKSJaxpaZ5R1QDM8w+eGxo6Y/jhT/cLoCvnZI42oEqf9KQNYz1fqQ==",
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
			"version": "4.28.1",
			"resolved": "https://registry.npmjs.org/@rollup/rollup-darwin-x64/-/rollup-darwin-x64-4.28.1.tgz",
			"integrity": "sha512-WsvbOunsUk0wccO/TV4o7IKgloJ942hVFK1CLatwv6TJspcCZb9umQkPdvB7FihmdxgaKR5JyxDjWpCOp4uZlQ==",
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
			"version": "4.28.1",
			"resolved": "https://registry.npmjs.org/@rollup/rollup-freebsd-arm64/-/rollup-freebsd-arm64-4.28.1.tgz",
			"integrity": "sha512-HTDPdY1caUcU4qK23FeeGxCdJF64cKkqajU0iBnTVxS8F7H/7BewvYoG+va1KPSL63kQ1PGNyiwKOfReavzvNA==",
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
			"version": "4.28.1",
			"resolved": "https://registry.npmjs.org/@rollup/rollup-freebsd-x64/-/rollup-freebsd-x64-4.28.1.tgz",
			"integrity": "sha512-m/uYasxkUevcFTeRSM9TeLyPe2QDuqtjkeoTpP9SW0XxUWfcYrGDMkO/m2tTw+4NMAF9P2fU3Mw4ahNvo7QmsQ==",
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
			"version": "4.28.1",
			"resolved": "https://registry.npmjs.org/@rollup/rollup-linux-arm-gnueabihf/-/rollup-linux-arm-gnueabihf-4.28.1.tgz",
			"integrity": "sha512-QAg11ZIt6mcmzpNE6JZBpKfJaKkqTm1A9+y9O+frdZJEuhQxiugM05gnCWiANHj4RmbgeVJpTdmKRmH/a+0QbA==",
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
			"version": "4.28.1",
			"resolved": "https://registry.npmjs.org/@rollup/rollup-linux-arm-musleabihf/-/rollup-linux-arm-musleabihf-4.28.1.tgz",
			"integrity": "sha512-dRP9PEBfolq1dmMcFqbEPSd9VlRuVWEGSmbxVEfiq2cs2jlZAl0YNxFzAQS2OrQmsLBLAATDMb3Z6MFv5vOcXg==",
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
			"version": "4.28.1",
			"resolved": "https://registry.npmjs.org/@rollup/rollup-linux-arm64-gnu/-/rollup-linux-arm64-gnu-4.28.1.tgz",
			"integrity": "sha512-uGr8khxO+CKT4XU8ZUH1TTEUtlktK6Kgtv0+6bIFSeiSlnGJHG1tSFSjm41uQ9sAO/5ULx9mWOz70jYLyv1QkA==",
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
			"version": "4.28.1",
			"resolved": "https://registry.npmjs.org/@rollup/rollup-linux-arm64-musl/-/rollup-linux-arm64-musl-4.28.1.tgz",
			"integrity": "sha512-QF54q8MYGAqMLrX2t7tNpi01nvq5RI59UBNx+3+37zoKX5KViPo/gk2QLhsuqok05sSCRluj0D00LzCwBikb0A==",
			"cpu": [
				"arm64"
			],
			"dev": true,
			"optional": true,
			"os": [
				"linux"
			]
		},
		"node_modules/@rollup/rollup-linux-loongarch64-gnu": {
			"version": "4.28.1",
			"resolved": "https://registry.npmjs.org/@rollup/rollup-linux-loongarch64-gnu/-/rollup-linux-loongarch64-gnu-4.28.1.tgz",
			"integrity": "sha512-vPul4uodvWvLhRco2w0GcyZcdyBfpfDRgNKU+p35AWEbJ/HPs1tOUrkSueVbBS0RQHAf/A+nNtDpvw95PeVKOA==",
			"cpu": [
				"loong64"
			],
			"dev": true,
			"optional": true,
			"os": [
				"linux"
			]
		},
		"node_modules/@rollup/rollup-linux-powerpc64le-gnu": {
			"version": "4.28.1",
			"resolved": "https://registry.npmjs.org/@rollup/rollup-linux-powerpc64le-gnu/-/rollup-linux-powerpc64le-gnu-4.28.1.tgz",
			"integrity": "sha512-pTnTdBuC2+pt1Rmm2SV7JWRqzhYpEILML4PKODqLz+C7Ou2apEV52h19CR7es+u04KlqplggmN9sqZlekg3R1A==",
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
			"version": "4.28.1",
			"resolved": "https://registry.npmjs.org/@rollup/rollup-linux-riscv64-gnu/-/rollup-linux-riscv64-gnu-4.28.1.tgz",
			"integrity": "sha512-vWXy1Nfg7TPBSuAncfInmAI/WZDd5vOklyLJDdIRKABcZWojNDY0NJwruY2AcnCLnRJKSaBgf/GiJfauu8cQZA==",
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
			"version": "4.28.1",
			"resolved": "https://registry.npmjs.org/@rollup/rollup-linux-s390x-gnu/-/rollup-linux-s390x-gnu-4.28.1.tgz",
			"integrity": "sha512-/yqC2Y53oZjb0yz8PVuGOQQNOTwxcizudunl/tFs1aLvObTclTwZ0JhXF2XcPT/zuaymemCDSuuUPXJJyqeDOg==",
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
			"version": "4.28.1",
			"resolved": "https://registry.npmjs.org/@rollup/rollup-linux-x64-gnu/-/rollup-linux-x64-gnu-4.28.1.tgz",
			"integrity": "sha512-fzgeABz7rrAlKYB0y2kSEiURrI0691CSL0+KXwKwhxvj92VULEDQLpBYLHpF49MSiPG4sq5CK3qHMnb9tlCjBw==",
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
			"version": "4.28.1",
			"resolved": "https://registry.npmjs.org/@rollup/rollup-linux-x64-musl/-/rollup-linux-x64-musl-4.28.1.tgz",
			"integrity": "sha512-xQTDVzSGiMlSshpJCtudbWyRfLaNiVPXt1WgdWTwWz9n0U12cI2ZVtWe/Jgwyv/6wjL7b66uu61Vg0POWVfz4g==",
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
			"version": "4.28.1",
			"resolved": "https://registry.npmjs.org/@rollup/rollup-win32-arm64-msvc/-/rollup-win32-arm64-msvc-4.28.1.tgz",
			"integrity": "sha512-wSXmDRVupJstFP7elGMgv+2HqXelQhuNf+IS4V+nUpNVi/GUiBgDmfwD0UGN3pcAnWsgKG3I52wMOBnk1VHr/A==",
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
			"version": "4.28.1",
			"resolved": "https://registry.npmjs.org/@rollup/rollup-win32-ia32-msvc/-/rollup-win32-ia32-msvc-4.28.1.tgz",
			"integrity": "sha512-ZkyTJ/9vkgrE/Rk9vhMXhf8l9D+eAhbAVbsGsXKy2ohmJaWg0LPQLnIxRdRp/bKyr8tXuPlXhIoGlEB5XpJnGA==",
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
			"version": "4.28.1",
			"resolved": "https://registry.npmjs.org/@rollup/rollup-win32-x64-msvc/-/rollup-win32-x64-msvc-4.28.1.tgz",
			"integrity": "sha512-ZvK2jBafvttJjoIdKm/Q/Bh7IJ1Ose9IBOwpOXcOvW3ikGTQGmKDgxTC6oCAzW6PynbkKP8+um1du81XJHZ0JA==",
			"cpu": [
				"x64"
			],
			"dev": true,
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
			"dependencies": {
				"@babel/types": "^7.0.0"
			}
		},
		"node_modules/@types/babel__template": {
			"version": "7.4.4",
			"resolved": "https://registry.npmjs.org/@types/babel__template/-/babel__template-7.4.4.tgz",
			"integrity": "sha512-h/NUaSyG5EyxBIp8YRxo4RMe2/qQgvyowRwVMzhYhBCONbW8PUsg4lkFMrhgZhUe5z3L3MiLDuvyJ/CaPa2A8A==",
			"dev": true,
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
			"dependencies": {
				"@babel/types": "^7.20.7"
			}
		},
		"node_modules/@types/estree": {
			"version": "1.0.6",
			"resolved": "https://registry.npmjs.org/@types/estree/-/estree-1.0.6.tgz",
			"integrity": "sha512-AYnb1nQyY49te+VRAVgmzfcgjYS91mY5P0TKUDCLEM+gNnA+3T6rWITXRLYCpahpqSQbN5cE+gHpnPyXjHWxcw==",
			"dev": true
		},
		"node_modules/@types/react": {
			"version": "19.0.1",
			"resolved": "https://registry.npmjs.org/@types/react/-/react-19.0.1.tgz",
			"integrity": "sha512-YW6614BDhqbpR5KtUYzTA+zlA7nayzJRA9ljz9CQoxthR0sDisYZLuvSMsil36t4EH/uAt8T52Xb4sVw17G+SQ==",
			"dev": true,
			"dependencies": {
				"csstype": "^3.0.2"
			}
		},
		"node_modules/@types/react-dom": {
			"version": "19.0.1",
			"resolved": "https://registry.npmjs.org/@types/react-dom/-/react-dom-19.0.1.tgz",
			"integrity": "sha512-hljHij7MpWPKF6u5vojuyfV0YA4YURsQG7KT6SzV0Zs2BXAtgdTxG6A229Ub/xiWV4w/7JL8fi6aAyjshH4meA==",
			"dev": true,
			"dependencies": {
				"@types/react": "*"
			}
		},
		"node_modules/@vitejs/plugin-react": {
			"version": "4.3.4",
			"resolved": "https://registry.npmjs.org/@vitejs/plugin-react/-/plugin-react-4.3.4.tgz",
			"integrity": "sha512-SCCPBJtYLdE8PX/7ZQAs1QAZ8Jqwih+0VBLum1EGqmCCQal+MIUqLCzj3ZUy8ufbC0cAM4LRlSTm7IQJwWT4ug==",
			"dev": true,
			"dependencies": {
				"@babel/core": "^7.26.0",
				"@babel/plugin-transform-react-jsx-self": "^7.25.9",
				"@babel/plugin-transform-react-jsx-source": "^7.25.9",
				"@types/babel__core": "^7.20.5",
				"react-refresh": "^0.14.2"
			},
			"engines": {
				"node": "^14.18.0 || >=16.0.0"
			},
			"peerDependencies": {
				"vite": "^4.2.0 || ^5.0.0 || ^6.0.0"
			}
		},
		"node_modules/argparse": {
			"version": "2.0.1",
			"resolved": "https://registry.npmjs.org/argparse/-/argparse-2.0.1.tgz",
			"integrity": "sha512-8+9WqebbFzpX9OR+Wa6O29asIogeRMzcGtAINdpMHHyAg10f05aSFVBbcEqGf/PXw1EjAZ+q2/bEBg3DvurK3Q==",
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
		"node_modules/braces": {
			"version": "3.0.3",
			"resolved": "https://registry.npmjs.org/braces/-/braces-3.0.3.tgz",
			"integrity": "sha512-yQbXgO/OSZVD2IsiLlro+7Hf6Q18EJrKSEsdoMzKePKXct3gvD8oLcOQdIzGupr5Fj+EDe8gO/lxc1BzfMpxvA==",
			"dev": true,
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
			"engines": {
				"node": ">=6"
			}
		},
		"node_modules/camelcase": {
			"version": "6.3.0",
			"resolved": "https://registry.npmjs.org/camelcase/-/camelcase-6.3.0.tgz",
			"integrity": "sha512-Gmy6FhYlCY7uOElZUSbxo2UCDH8owEk996gkbrpsgGtrJLM3J7jGxl9Ic7Qwwj4ivOE5AWZWRMecDdF7hqGjFA==",
			"dev": true,
			"engines": {
				"node": ">=10"
			},
			"funding": {
				"url": "https://github.com/sponsors/sindresorhus"
			}
		},
		"node_modules/caniuse-lite": {
			"version": "1.0.30001687",
			"resolved": "https://registry.npmjs.org/caniuse-lite/-/caniuse-lite-1.0.30001687.tgz",
			"integrity": "sha512-0S/FDhf4ZiqrTUiQ39dKeUjYRjkv7lOZU1Dgif2rIqrTzX/1wV2hfKu9TOm1IHkdSijfLswxTFzl/cvir+SLSQ==",
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
		"node_modules/convert-source-map": {
			"version": "2.0.0",
			"resolved": "https://registry.npmjs.org/convert-source-map/-/convert-source-map-2.0.0.tgz",
			"integrity": "sha512-Kvp459HrV2FEJ1CAsi1Ku+MY3kasH19TFykTz2xWmMeq6bk2NU3XXvfJ+Q61m0xktWwt+1HSYf3JZsTms3aRJg==",
			"dev": true
		},
		"node_modules/cosmiconfig": {
			"version": "8.3.6",
			"resolved": "https://registry.npmjs.org/cosmiconfig/-/cosmiconfig-8.3.6.tgz",
			"integrity": "sha512-kcZ6+W5QzcJ3P1Mt+83OUv/oHFqZHIx8DuxG6eZ5RGMERoLqp4BuGjhHLYGK+Kf5XVkQvqBSmAy/nGWN3qDgEA==",
			"dev": true,
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
			"dev": true
		},
		"node_modules/debug": {
			"version": "4.4.0",
			"resolved": "https://registry.npmjs.org/debug/-/debug-4.4.0.tgz",
			"integrity": "sha512-6WTZ/IxCY/T6BALoZHaE4ctp9xm+Z5kY/pzYaCHRFeyVhojxlrm+46y68HA6hr0TcwEssoxNiDEUJQjfPZ/RYA==",
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
		"node_modules/detect-libc": {
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
		"node_modules/dot-case": {
			"version": "3.0.4",
			"resolved": "https://registry.npmjs.org/dot-case/-/dot-case-3.0.4.tgz",
			"integrity": "sha512-Kv5nKlh6yRrdrGvxeJ2e5y2eRUpkUosIW4A2AS38zwSz27zu7ufDwQPi5Jhs3XAlGNetl3bmnGhQsMtkKJnj3w==",
			"dev": true,
			"dependencies": {
				"no-case": "^3.0.4",
				"tslib": "^2.0.3"
			}
		},
		"node_modules/electron-to-chromium": {
			"version": "1.5.71",
			"resolved": "https://registry.npmjs.org/electron-to-chromium/-/electron-to-chromium-1.5.71.tgz",
			"integrity": "sha512-dB68l59BI75W1BUGVTAEJy45CEVuEGy9qPVVQ8pnHyHMn36PLPPoE1mjLH+lo9rKulO3HC2OhbACI/8tCqJBcA==",
			"dev": true
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
		"node_modules/error-ex": {
			"version": "1.3.2",
			"resolved": "https://registry.npmjs.org/error-ex/-/error-ex-1.3.2.tgz",
			"integrity": "sha512-7dFHNmqeFSEt2ZBsCriorKnn3Z2pj+fd9kmI6QoWw4//DL+icEBfc0U7qJCisqrTsKTjw4fNFy2pW9OqStD84g==",
			"dev": true,
			"dependencies": {
				"is-arrayish": "^0.2.1"
			}
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
		"node_modules/estree-walker": {
			"version": "2.0.2",
			"resolved": "https://registry.npmjs.org/estree-walker/-/estree-walker-2.0.2.tgz",
			"integrity": "sha512-Rfkk/Mp/DL7JVje3u18FxFujQlTNR2q6QfMSMB7AvCBx91NGj/ba3kCfza0f6dVDbw7YlRf/nDrn7pQrCCyQ/w==",
			"dev": true
		},
		"node_modules/fill-range": {
			"version": "7.1.1",
			"resolved": "https://registry.npmjs.org/fill-range/-/fill-range-7.1.1.tgz",
			"integrity": "sha512-YsGpe3WHLK8ZYi4tWDg2Jy3ebRz2rXowDxnld4bkQB00cc/1Zw9AWnC0i9ztDJitivtQvaI9KaLyKrc+hBW0yg==",
			"dev": true,
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
			"engines": {
				"node": ">=6.9.0"
			}
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
		"node_modules/immutable": {
			"version": "5.0.3",
			"resolved": "https://registry.npmjs.org/immutable/-/immutable-5.0.3.tgz",
			"integrity": "sha512-P8IdPQHq3lA1xVeBRi5VPqUm5HDgKnx0Ru51wZz5mjxHr5n3RWhjIpOFU7ybkUxfB+5IToy+OLaHYDBIWsv+uw==",
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
		"node_modules/is-arrayish": {
			"version": "0.2.1",
			"resolved": "https://registry.npmjs.org/is-arrayish/-/is-arrayish-0.2.1.tgz",
			"integrity": "sha512-zz06S8t0ozoDXMG+ube26zeCTNXcKIPJZJi8hBrF4idCLms4CG9QtK7qBl1boi5ODzFpjswb5JPmHCbMpjaYzg==",
			"dev": true
		},
		"node_modules/is-extglob": {
			"version": "2.1.1",
			"resolved": "https://registry.npmjs.org/is-extglob/-/is-extglob-2.1.1.tgz",
			"integrity": "sha512-SbKbANkN603Vi4jEZv49LeVJMn4yGwsbzZworEoyEiutsN3nJYdbO36zfhGJ6QEDpOZIFkDtnq5JRxmvl3jsoQ==",
			"dev": true,
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
			"optional": true,
			"engines": {
				"node": ">=0.12.0"
			}
		},
		"node_modules/js-tokens": {
			"version": "4.0.0",
			"resolved": "https://registry.npmjs.org/js-tokens/-/js-tokens-4.0.0.tgz",
			"integrity": "sha512-RdJUflcE3cUzKiMqQgsCu06FPu9UdIJO0beYbPhHN4k6apgJtifcoCtT9bcxOpYBtpD2kCM6Sbzg4CausW/PKQ==",
			"dev": true
		},
		"node_modules/js-yaml": {
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
			"version": "2.3.1",
			"resolved": "https://registry.npmjs.org/json-parse-even-better-errors/-/json-parse-even-better-errors-2.3.1.tgz",
			"integrity": "sha512-xyFwyhro/JEof6Ghe2iz2NcXoj2sloNsWr/XsERDK/oiPCfaNhl5ONfp+jQdAZRQQ0IJWNzH9zIZF7li91kh2w==",
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
		"node_modules/lines-and-columns": {
			"version": "1.2.4",
			"resolved": "https://registry.npmjs.org/lines-and-columns/-/lines-and-columns-1.2.4.tgz",
			"integrity": "sha512-7ylylesZQ/PV29jhEDl3Ufjo6ZX7gCqJr5F7PKrqc93v7fzSymt1BpwEU8nAUXs8qzzvqhbjhK5QZg6Mt/HkBg==",
			"dev": true
		},
		"node_modules/lower-case": {
			"version": "2.0.2",
			"resolved": "https://registry.npmjs.org/lower-case/-/lower-case-2.0.2.tgz",
			"integrity": "sha512-7fm3l3NAF9WfN6W3JOmf5drwpVqX78JtoGJ3A6W0a6ZnldM41w2fV5D490psKFTpMds8TJse/eHLFFsNHHjHgg==",
			"dev": true,
			"dependencies": {
				"tslib": "^2.0.3"
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
		"node_modules/micromatch": {
			"version": "4.0.8",
			"resolved": "https://registry.npmjs.org/micromatch/-/micromatch-4.0.8.tgz",
			"integrity": "sha512-PXwfBhYu0hBCPw8Dn0E+WDYb7af3dSLVWKi3HGv84IdF4TyFoC0ysxFd0Goxw7nSv4T/PzEJQxsYsEiFCKo2BA==",
			"dev": true,
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
			"dev": true
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
		"node_modules/no-case": {
			"version": "3.0.4",
			"resolved": "https://registry.npmjs.org/no-case/-/no-case-3.0.4.tgz",
			"integrity": "sha512-fgAN3jGAh+RoxUGZHTSOLJIqUc2wmoBwGR4tbpNAKmmovFoWq0OdRkb0VkldReO2a2iBT/OEulG9XSUc10r3zg==",
			"dev": true,
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
			"optional": true
		},
		"node_modules/node-releases": {
			"version": "2.0.18",
			"resolved": "https://registry.npmjs.org/node-releases/-/node-releases-2.0.18.tgz",
			"integrity": "sha512-d9VeXT4SJ7ZeOqGX6R5EM022wpL+eWPooLI+5UpWn2jCT1aosUQEhQP214x33Wkwx3JQMvIm+tIoVOdodFS40g==",
			"dev": true
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
			"version": "1.1.1",
			"resolved": "https://registry.npmjs.org/picocolors/-/picocolors-1.1.1.tgz",
			"integrity": "sha512-xceH2snhtb5M9liqDsmEw56le376mTZkEX/jEb/RxNFyegNul7eNslCXP9FDj/Lcu0X8KEyMceP2ntpaHrDEVA==",
			"dev": true
		},
		"node_modules/picomatch": {
			"version": "2.3.1",
			"resolved": "https://registry.npmjs.org/picomatch/-/picomatch-2.3.1.tgz",
			"integrity": "sha512-JU3teHTNjmE2VCGFzuY8EXzCDVwEqB2a8fsIvwaStHhAWJEeVd1o1QD80CU6+ZdEXXSLbSsuLwJjkCBWqRQUVA==",
			"dev": true,
			"optional": true,
			"engines": {
				"node": ">=8.6"
			},
			"funding": {
				"url": "https://github.com/sponsors/jonschlinkert"
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
		"node_modules/react": {
			"version": "19.0.0",
			"resolved": "https://registry.npmjs.org/react/-/react-19.0.0.tgz",
			"integrity": "sha512-V8AVnmPIICiWpGfm6GLzCR/W5FXLchHop40W4nXBmdlEceh16rCN8O8LNWm5bh5XUX91fh7KpA+W0TgMKmgTpQ==",
			"dev": true,
			"engines": {
				"node": ">=0.10.0"
			}
		},
		"node_modules/react-dom": {
			"version": "19.0.0",
			"resolved": "https://registry.npmjs.org/react-dom/-/react-dom-19.0.0.tgz",
			"integrity": "sha512-4GV5sHFG0e/0AD4X+ySy6UJd3jVl1iNsNHdpad0qhABJ11twS3TTBnseqsKurKcsNqCEFeGL3uLpVChpIO3QfQ==",
			"dev": true,
			"dependencies": {
				"scheduler": "^0.25.0"
			},
			"peerDependencies": {
				"react": "^19.0.0"
			}
		},
		"node_modules/react-refresh": {
			"version": "0.14.2",
			"resolved": "https://registry.npmjs.org/react-refresh/-/react-refresh-0.14.2.tgz",
			"integrity": "sha512-jCvmsr+1IUSMUyzOkRcvnVbX3ZYC6g9TDrDbFuFmRDq7PD4yaGbLKNQL6k2jnArV8hjYxh7hVhAZB6s9HDGpZA==",
			"dev": true,
			"engines": {
				"node": ">=0.10.0"
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
		"node_modules/resolve-from": {
			"version": "4.0.0",
			"resolved": "https://registry.npmjs.org/resolve-from/-/resolve-from-4.0.0.tgz",
			"integrity": "sha512-pb/MYmXstAkysRFx8piNI1tGFNQIFA3vkE3Gq4EuA1dF6gHp/+vgZqsCGJapvy8N3Q+4o7FwvquPJcnZ7RYy4g==",
			"dev": true,
			"engines": {
				"node": ">=4"
			}
		},
		"node_modules/rollup": {
			"version": "4.28.1",
			"resolved": "https://registry.npmjs.org/rollup/-/rollup-4.28.1.tgz",
			"integrity": "sha512-61fXYl/qNVinKmGSTHAZ6Yy8I3YIJC/r2m9feHo6SwVAVcLT5MPwOUFe7EuURA/4m0NR8lXG4BBXuo/IZEsjMg==",
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
				"@rollup/rollup-android-arm-eabi": "4.28.1",
				"@rollup/rollup-android-arm64": "4.28.1",
				"@rollup/rollup-darwin-arm64": "4.28.1",
				"@rollup/rollup-darwin-x64": "4.28.1",
				"@rollup/rollup-freebsd-arm64": "4.28.1",
				"@rollup/rollup-freebsd-x64": "4.28.1",
				"@rollup/rollup-linux-arm-gnueabihf": "4.28.1",
				"@rollup/rollup-linux-arm-musleabihf": "4.28.1",
				"@rollup/rollup-linux-arm64-gnu": "4.28.1",
				"@rollup/rollup-linux-arm64-musl": "4.28.1",
				"@rollup/rollup-linux-loongarch64-gnu": "4.28.1",
				"@rollup/rollup-linux-powerpc64le-gnu": "4.28.1",
				"@rollup/rollup-linux-riscv64-gnu": "4.28.1",
				"@rollup/rollup-linux-s390x-gnu": "4.28.1",
				"@rollup/rollup-linux-x64-gnu": "4.28.1",
				"@rollup/rollup-linux-x64-musl": "4.28.1",
				"@rollup/rollup-win32-arm64-msvc": "4.28.1",
				"@rollup/rollup-win32-ia32-msvc": "4.28.1",
				"@rollup/rollup-win32-x64-msvc": "4.28.1",
				"fsevents": "~2.3.2"
			}
		},
		"node_modules/sass": {
			"version": "1.82.0",
			"resolved": "https://registry.npmjs.org/sass/-/sass-1.82.0.tgz",
			"integrity": "sha512-j4GMCTa8elGyN9A7x7bEglx0VgSpNUG4W4wNedQ33wSMdnkqQCT8HTwOaVSV4e6yQovcu/3Oc4coJP/l0xhL2Q==",
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
		"node_modules/scheduler": {
			"version": "0.25.0",
			"resolved": "https://registry.npmjs.org/scheduler/-/scheduler-0.25.0.tgz",
			"integrity": "sha512-xFVuu11jh+xcO7JOAGJNOXld8/TcEHK/4CituBUeUb5hqxJLj9YuemAEuvm9gQ/+pgXYfbQuqAkiYu+u7YEsNA==",
			"dev": true
		},
		"node_modules/semver": {
			"version": "6.3.1",
			"resolved": "https://registry.npmjs.org/semver/-/semver-6.3.1.tgz",
			"integrity": "sha512-BR7VvDCVHO+q2xBEWskxS6DJE1qRnb7DxzUrogb71CWoSficBxYsiAGd+Kl0mmq/MprG9yArRkyrQxTO6XjMzA==",
			"dev": true,
			"bin": {
				"semver": "bin/semver.js"
			}
		},
		"node_modules/snake-case": {
			"version": "3.0.4",
			"resolved": "https://registry.npmjs.org/snake-case/-/snake-case-3.0.4.tgz",
			"integrity": "sha512-LAOh4z89bGQvl9pFfNF8V146i7o7/CqFPbqzYgP+yYzDIDeS9HaNFtXABamRW+AQzEVODcvE79ljJ+8a9YSdMg==",
			"dev": true,
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
			"engines": {
				"node": ">=0.10.0"
			}
		},
		"node_modules/svg-parser": {
			"version": "2.0.4",
			"resolved": "https://registry.npmjs.org/svg-parser/-/svg-parser-2.0.4.tgz",
			"integrity": "sha512-e4hG1hRwoOdRb37cIMSgzNsxyzKfayW6VOflrwvR+/bzrkyxY/31WkbgnQpgtrNp1SdpJvpUAGTa/ZoiPNDuRQ==",
			"dev": true
		},
		"node_modules/to-regex-range": {
			"version": "5.0.1",
			"resolved": "https://registry.npmjs.org/to-regex-range/-/to-regex-range-5.0.1.tgz",
			"integrity": "sha512-65P7iz6X5yEr1cwcgvQxbbIw7Uk3gOy5dIdtZ4rDveLqhrdJP+Li/Hx6tyK0NEb+2GCyneCMJiGqrADCSNk8sQ==",
			"dev": true,
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
			"dev": true
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
		"node_modules/vite": {
			"version": "6.0.3",
			"resolved": "https://registry.npmjs.org/vite/-/vite-6.0.3.tgz",
			"integrity": "sha512-Cmuo5P0ENTN6HxLSo6IHsjCLn/81Vgrp81oaiFFMRa8gGDj5xEjIcEpf2ZymZtZR8oU0P2JX5WuUp/rlXcHkAw==",
			"dev": true,
			"dependencies": {
				"esbuild": "^0.24.0",
				"postcss": "^8.4.49",
				"rollup": "^4.23.0"
			},
			"bin": {
				"vite": "bin/vite.js"
			},
			"engines": {
				"node": "^18.0.0 || ^20.0.0 || >=22.0.0"
			},
			"funding": {
				"url": "https://github.com/vitejs/vite?sponsor=1"
			},
			"optionalDependencies": {
				"fsevents": "~2.3.3"
			},
			"peerDependencies": {
				"@types/node": "^18.0.0 || ^20.0.0 || >=22.0.0",
				"jiti": ">=1.21.0",
				"less": "*",
				"lightningcss": "^1.21.0",
				"sass": "*",
				"sass-embedded": "*",
				"stylus": "*",
				"sugarss": "*",
				"terser": "^5.16.0",
				"tsx": "^4.8.1",
				"yaml": "^2.4.2"
			},
			"peerDependenciesMeta": {
				"@types/node": {
					"optional": true
				},
				"jiti": {
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
				},
				"tsx": {
					"optional": true
				},
				"yaml": {
					"optional": true
				}
			}
		},
		"node_modules/vite-plugin-svgr": {
			"version": "4.3.0",
			"resolved": "https://registry.npmjs.org/vite-plugin-svgr/-/vite-plugin-svgr-4.3.0.tgz",
			"integrity": "sha512-Jy9qLB2/PyWklpYy0xk0UU3TlU0t2UMpJXZvf+hWII1lAmRHrOUKi11Uw8N3rxoNk7atZNYO3pR3vI1f7oi+6w==",
			"dev": true,
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
			"dev": true
		}
	}
}
`;export{t as default};