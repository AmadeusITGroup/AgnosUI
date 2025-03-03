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
				"@tailwindcss/browser": "^4.0.0",
				"@types/react": "^19.0.0",
				"@types/react-dom": "^19.0.0",
				"@vitejs/plugin-react": "^4.3.4",
				"daisyui": "^5.0.0-beta.8",
				"react": "^19.0.0",
				"react-dom": "^19.0.0",
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
			"version": "7.26.2",
			"resolved": "https://registry.npmjs.org/@babel/code-frame/-/code-frame-7.26.2.tgz",
			"integrity": "sha512-RJlIHRueQgwWitWgF8OdFYGZX328Ax5BCemNGlqHfplnRT9ESi8JkFlvaVYbS+UubVY6dpv87Fs2u5M29iNFVQ==",
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
			"version": "7.26.8",
			"resolved": "https://registry.npmjs.org/@babel/compat-data/-/compat-data-7.26.8.tgz",
			"integrity": "sha512-oH5UPLMWR3L2wEFLnFJ1TZXqHufiTKAiLfqw5zkhS4dKXLJ10yVztfil/twG8EDTA4F/tvVNw9nOl4ZMslB8rQ==",
			"dev": true,
			"license": "MIT",
			"engines": {
				"node": ">=6.9.0"
			}
		},
		"node_modules/@babel/core": {
			"version": "7.26.9",
			"resolved": "https://registry.npmjs.org/@babel/core/-/core-7.26.9.tgz",
			"integrity": "sha512-lWBYIrF7qK5+GjY5Uy+/hEgp8OJWOD/rpy74GplYRhEauvbHDeFB8t5hPOZxCZ0Oxf4Cc36tK51/l3ymJysrKw==",
			"dev": true,
			"license": "MIT",
			"dependencies": {
				"@ampproject/remapping": "^2.2.0",
				"@babel/code-frame": "^7.26.2",
				"@babel/generator": "^7.26.9",
				"@babel/helper-compilation-targets": "^7.26.5",
				"@babel/helper-module-transforms": "^7.26.0",
				"@babel/helpers": "^7.26.9",
				"@babel/parser": "^7.26.9",
				"@babel/template": "^7.26.9",
				"@babel/traverse": "^7.26.9",
				"@babel/types": "^7.26.9",
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
			"version": "7.26.9",
			"resolved": "https://registry.npmjs.org/@babel/generator/-/generator-7.26.9.tgz",
			"integrity": "sha512-kEWdzjOAUMW4hAyrzJ0ZaTOu9OmpyDIQicIh0zg0EEcEkYXZb2TjtBhnHi2ViX7PKwZqF4xwqfAm299/QMP3lg==",
			"dev": true,
			"license": "MIT",
			"dependencies": {
				"@babel/parser": "^7.26.9",
				"@babel/types": "^7.26.9",
				"@jridgewell/gen-mapping": "^0.3.5",
				"@jridgewell/trace-mapping": "^0.3.25",
				"jsesc": "^3.0.2"
			},
			"engines": {
				"node": ">=6.9.0"
			}
		},
		"node_modules/@babel/helper-compilation-targets": {
			"version": "7.26.5",
			"resolved": "https://registry.npmjs.org/@babel/helper-compilation-targets/-/helper-compilation-targets-7.26.5.tgz",
			"integrity": "sha512-IXuyn5EkouFJscIDuFF5EsiSolseme1s0CZB+QxVugqJLYmKdxI1VfIBOst0SUu4rnk2Z7kqTwmoO1lp3HIfnA==",
			"dev": true,
			"license": "MIT",
			"dependencies": {
				"@babel/compat-data": "^7.26.5",
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
			"version": "7.26.5",
			"resolved": "https://registry.npmjs.org/@babel/helper-plugin-utils/-/helper-plugin-utils-7.26.5.tgz",
			"integrity": "sha512-RS+jZcRdZdRFzMyr+wcsaqOmld1/EqTghfaBGQQd/WnRdzdlvSZ//kF7U8VQTxf1ynZ4cjUcYgjVGx13ewNPMg==",
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
			"version": "7.26.9",
			"resolved": "https://registry.npmjs.org/@babel/helpers/-/helpers-7.26.9.tgz",
			"integrity": "sha512-Mz/4+y8udxBKdmzt/UjPACs4G3j5SshJJEFFKxlCGPydG4JAHXxjWjAwjd09tf6oINvl1VfMJo+nB7H2YKQ0dA==",
			"dev": true,
			"license": "MIT",
			"dependencies": {
				"@babel/template": "^7.26.9",
				"@babel/types": "^7.26.9"
			},
			"engines": {
				"node": ">=6.9.0"
			}
		},
		"node_modules/@babel/parser": {
			"version": "7.26.9",
			"resolved": "https://registry.npmjs.org/@babel/parser/-/parser-7.26.9.tgz",
			"integrity": "sha512-81NWa1njQblgZbQHxWHpxxCzNsa3ZwvFqpUg7P+NNUU6f3UU2jBEg4OlF/J6rl8+PQGh1q6/zWScd001YwcA5A==",
			"dev": true,
			"license": "MIT",
			"dependencies": {
				"@babel/types": "^7.26.9"
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
			"version": "7.26.9",
			"resolved": "https://registry.npmjs.org/@babel/template/-/template-7.26.9.tgz",
			"integrity": "sha512-qyRplbeIpNZhmzOysF/wFMuP9sctmh2cFzRAZOn1YapxBsE1i9bJIY586R/WBLfLcmcBlM8ROBiQURnnNy+zfA==",
			"dev": true,
			"license": "MIT",
			"dependencies": {
				"@babel/code-frame": "^7.26.2",
				"@babel/parser": "^7.26.9",
				"@babel/types": "^7.26.9"
			},
			"engines": {
				"node": ">=6.9.0"
			}
		},
		"node_modules/@babel/traverse": {
			"version": "7.26.9",
			"resolved": "https://registry.npmjs.org/@babel/traverse/-/traverse-7.26.9.tgz",
			"integrity": "sha512-ZYW7L+pL8ahU5fXmNbPF+iZFHCv5scFak7MZ9bwaRPLUhHh7QQEMjZUg0HevihoqCM5iSYHN61EyCoZvqC+bxg==",
			"dev": true,
			"license": "MIT",
			"dependencies": {
				"@babel/code-frame": "^7.26.2",
				"@babel/generator": "^7.26.9",
				"@babel/parser": "^7.26.9",
				"@babel/template": "^7.26.9",
				"@babel/types": "^7.26.9",
				"debug": "^4.3.1",
				"globals": "^11.1.0"
			},
			"engines": {
				"node": ">=6.9.0"
			}
		},
		"node_modules/@babel/types": {
			"version": "7.26.9",
			"resolved": "https://registry.npmjs.org/@babel/types/-/types-7.26.9.tgz",
			"integrity": "sha512-Y3IR1cRnOxOCDvMmNiym7XpXQ93iGDDPHx+Zj+NM+rg0fBaShfQLkg+hKPaZCEvg5N/LeCo4+Rj/i3FuJsIQaw==",
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
			"version": "0.25.0",
			"resolved": "https://registry.npmjs.org/@esbuild/aix-ppc64/-/aix-ppc64-0.25.0.tgz",
			"integrity": "sha512-O7vun9Sf8DFjH2UtqK8Ku3LkquL9SZL8OLY1T5NZkA34+wG3OQF7cl4Ql8vdNzM6fzBbYfLaiRLIOZ+2FOCgBQ==",
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
			"version": "0.25.0",
			"resolved": "https://registry.npmjs.org/@esbuild/android-arm/-/android-arm-0.25.0.tgz",
			"integrity": "sha512-PTyWCYYiU0+1eJKmw21lWtC+d08JDZPQ5g+kFyxP0V+es6VPPSUhM6zk8iImp2jbV6GwjX4pap0JFbUQN65X1g==",
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
			"version": "0.25.0",
			"resolved": "https://registry.npmjs.org/@esbuild/android-arm64/-/android-arm64-0.25.0.tgz",
			"integrity": "sha512-grvv8WncGjDSyUBjN9yHXNt+cq0snxXbDxy5pJtzMKGmmpPxeAmAhWxXI+01lU5rwZomDgD3kJwulEnhTRUd6g==",
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
			"version": "0.25.0",
			"resolved": "https://registry.npmjs.org/@esbuild/android-x64/-/android-x64-0.25.0.tgz",
			"integrity": "sha512-m/ix7SfKG5buCnxasr52+LI78SQ+wgdENi9CqyCXwjVR2X4Jkz+BpC3le3AoBPYTC9NHklwngVXvbJ9/Akhrfg==",
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
			"version": "0.25.0",
			"resolved": "https://registry.npmjs.org/@esbuild/darwin-arm64/-/darwin-arm64-0.25.0.tgz",
			"integrity": "sha512-mVwdUb5SRkPayVadIOI78K7aAnPamoeFR2bT5nszFUZ9P8UpK4ratOdYbZZXYSqPKMHfS1wdHCJk1P1EZpRdvw==",
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
			"version": "0.25.0",
			"resolved": "https://registry.npmjs.org/@esbuild/darwin-x64/-/darwin-x64-0.25.0.tgz",
			"integrity": "sha512-DgDaYsPWFTS4S3nWpFcMn/33ZZwAAeAFKNHNa1QN0rI4pUjgqf0f7ONmXf6d22tqTY+H9FNdgeaAa+YIFUn2Rg==",
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
			"version": "0.25.0",
			"resolved": "https://registry.npmjs.org/@esbuild/freebsd-arm64/-/freebsd-arm64-0.25.0.tgz",
			"integrity": "sha512-VN4ocxy6dxefN1MepBx/iD1dH5K8qNtNe227I0mnTRjry8tj5MRk4zprLEdG8WPyAPb93/e4pSgi1SoHdgOa4w==",
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
			"version": "0.25.0",
			"resolved": "https://registry.npmjs.org/@esbuild/freebsd-x64/-/freebsd-x64-0.25.0.tgz",
			"integrity": "sha512-mrSgt7lCh07FY+hDD1TxiTyIHyttn6vnjesnPoVDNmDfOmggTLXRv8Id5fNZey1gl/V2dyVK1VXXqVsQIiAk+A==",
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
			"version": "0.25.0",
			"resolved": "https://registry.npmjs.org/@esbuild/linux-arm/-/linux-arm-0.25.0.tgz",
			"integrity": "sha512-vkB3IYj2IDo3g9xX7HqhPYxVkNQe8qTK55fraQyTzTX/fxaDtXiEnavv9geOsonh2Fd2RMB+i5cbhu2zMNWJwg==",
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
			"version": "0.25.0",
			"resolved": "https://registry.npmjs.org/@esbuild/linux-arm64/-/linux-arm64-0.25.0.tgz",
			"integrity": "sha512-9QAQjTWNDM/Vk2bgBl17yWuZxZNQIF0OUUuPZRKoDtqF2k4EtYbpyiG5/Dk7nqeK6kIJWPYldkOcBqjXjrUlmg==",
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
			"version": "0.25.0",
			"resolved": "https://registry.npmjs.org/@esbuild/linux-ia32/-/linux-ia32-0.25.0.tgz",
			"integrity": "sha512-43ET5bHbphBegyeqLb7I1eYn2P/JYGNmzzdidq/w0T8E2SsYL1U6un2NFROFRg1JZLTzdCoRomg8Rvf9M6W6Gg==",
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
			"version": "0.25.0",
			"resolved": "https://registry.npmjs.org/@esbuild/linux-loong64/-/linux-loong64-0.25.0.tgz",
			"integrity": "sha512-fC95c/xyNFueMhClxJmeRIj2yrSMdDfmqJnyOY4ZqsALkDrrKJfIg5NTMSzVBr5YW1jf+l7/cndBfP3MSDpoHw==",
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
			"version": "0.25.0",
			"resolved": "https://registry.npmjs.org/@esbuild/linux-mips64el/-/linux-mips64el-0.25.0.tgz",
			"integrity": "sha512-nkAMFju7KDW73T1DdH7glcyIptm95a7Le8irTQNO/qtkoyypZAnjchQgooFUDQhNAy4iu08N79W4T4pMBwhPwQ==",
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
			"version": "0.25.0",
			"resolved": "https://registry.npmjs.org/@esbuild/linux-ppc64/-/linux-ppc64-0.25.0.tgz",
			"integrity": "sha512-NhyOejdhRGS8Iwv+KKR2zTq2PpysF9XqY+Zk77vQHqNbo/PwZCzB5/h7VGuREZm1fixhs4Q/qWRSi5zmAiO4Fw==",
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
			"version": "0.25.0",
			"resolved": "https://registry.npmjs.org/@esbuild/linux-riscv64/-/linux-riscv64-0.25.0.tgz",
			"integrity": "sha512-5S/rbP5OY+GHLC5qXp1y/Mx//e92L1YDqkiBbO9TQOvuFXM+iDqUNG5XopAnXoRH3FjIUDkeGcY1cgNvnXp/kA==",
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
			"version": "0.25.0",
			"resolved": "https://registry.npmjs.org/@esbuild/linux-s390x/-/linux-s390x-0.25.0.tgz",
			"integrity": "sha512-XM2BFsEBz0Fw37V0zU4CXfcfuACMrppsMFKdYY2WuTS3yi8O1nFOhil/xhKTmE1nPmVyvQJjJivgDT+xh8pXJA==",
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
			"version": "0.25.0",
			"resolved": "https://registry.npmjs.org/@esbuild/linux-x64/-/linux-x64-0.25.0.tgz",
			"integrity": "sha512-9yl91rHw/cpwMCNytUDxwj2XjFpxML0y9HAOH9pNVQDpQrBxHy01Dx+vaMu0N1CKa/RzBD2hB4u//nfc+Sd3Cw==",
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
		"node_modules/@esbuild/netbsd-arm64": {
			"version": "0.25.0",
			"resolved": "https://registry.npmjs.org/@esbuild/netbsd-arm64/-/netbsd-arm64-0.25.0.tgz",
			"integrity": "sha512-RuG4PSMPFfrkH6UwCAqBzauBWTygTvb1nxWasEJooGSJ/NwRw7b2HOwyRTQIU97Hq37l3npXoZGYMy3b3xYvPw==",
			"cpu": [
				"arm64"
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
		"node_modules/@esbuild/netbsd-x64": {
			"version": "0.25.0",
			"resolved": "https://registry.npmjs.org/@esbuild/netbsd-x64/-/netbsd-x64-0.25.0.tgz",
			"integrity": "sha512-jl+qisSB5jk01N5f7sPCsBENCOlPiS/xptD5yxOx2oqQfyourJwIKLRA2yqWdifj3owQZCL2sn6o08dBzZGQzA==",
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
			"version": "0.25.0",
			"resolved": "https://registry.npmjs.org/@esbuild/openbsd-arm64/-/openbsd-arm64-0.25.0.tgz",
			"integrity": "sha512-21sUNbq2r84YE+SJDfaQRvdgznTD8Xc0oc3p3iW/a1EVWeNj/SdUCbm5U0itZPQYRuRTW20fPMWMpcrciH2EJw==",
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
			"version": "0.25.0",
			"resolved": "https://registry.npmjs.org/@esbuild/openbsd-x64/-/openbsd-x64-0.25.0.tgz",
			"integrity": "sha512-2gwwriSMPcCFRlPlKx3zLQhfN/2WjJ2NSlg5TKLQOJdV0mSxIcYNTMhk3H3ulL/cak+Xj0lY1Ym9ysDV1igceg==",
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
			"version": "0.25.0",
			"resolved": "https://registry.npmjs.org/@esbuild/sunos-x64/-/sunos-x64-0.25.0.tgz",
			"integrity": "sha512-bxI7ThgLzPrPz484/S9jLlvUAHYMzy6I0XiU1ZMeAEOBcS0VePBFxh1JjTQt3Xiat5b6Oh4x7UC7IwKQKIJRIg==",
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
			"version": "0.25.0",
			"resolved": "https://registry.npmjs.org/@esbuild/win32-arm64/-/win32-arm64-0.25.0.tgz",
			"integrity": "sha512-ZUAc2YK6JW89xTbXvftxdnYy3m4iHIkDtK3CLce8wg8M2L+YZhIvO1DKpxrd0Yr59AeNNkTiic9YLf6FTtXWMw==",
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
			"version": "0.25.0",
			"resolved": "https://registry.npmjs.org/@esbuild/win32-ia32/-/win32-ia32-0.25.0.tgz",
			"integrity": "sha512-eSNxISBu8XweVEWG31/JzjkIGbGIJN/TrRoiSVZwZ6pkC6VX4Im/WV2cz559/TXLcYbcrDN8JtKgd9DJVIo8GA==",
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
			"version": "0.25.0",
			"resolved": "https://registry.npmjs.org/@esbuild/win32-x64/-/win32-x64-0.25.0.tgz",
			"integrity": "sha512-ZENoHJBxA20C2zFzh6AI4fT6RraMzjYw4xKWemRTRmRVtN9c5DcH9r/f2ihEkMjOW5eGgrwCslG/+Y/3bL+DHQ==",
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
			"version": "1.6.9",
			"resolved": "https://registry.npmjs.org/@floating-ui/core/-/core-1.6.9.tgz",
			"integrity": "sha512-uMXCuQ3BItDUbAMhIXw7UPXRfAlOAvZzdK9BWpE60MCn+Svt3aLn9jsPTi/WNGlRUu2uI0v5S7JiIUsbsvh3fw==",
			"dev": true,
			"license": "MIT",
			"dependencies": {
				"@floating-ui/utils": "^0.2.9"
			}
		},
		"node_modules/@floating-ui/dom": {
			"version": "1.6.13",
			"resolved": "https://registry.npmjs.org/@floating-ui/dom/-/dom-1.6.13.tgz",
			"integrity": "sha512-umqzocjDgNRGTuO7Q8CU32dkHkECqI8ZdMZ5Swb6QAM0t5rnlrN3lGo1hdpscRd3WS8T6DKYK4ephgIH9iRh3w==",
			"dev": true,
			"license": "MIT",
			"dependencies": {
				"@floating-ui/core": "^1.6.0",
				"@floating-ui/utils": "^0.2.9"
			}
		},
		"node_modules/@floating-ui/utils": {
			"version": "0.2.9",
			"resolved": "https://registry.npmjs.org/@floating-ui/utils/-/utils-0.2.9.tgz",
			"integrity": "sha512-MDWhGtE+eHw5JW7lq4qhc5yRLS11ERl1c7Z6Xd0a58DozHES6EnNNwUWbMiG4J9Cgj053Bhk8zvlhFYKVhULwg==",
			"dev": true,
			"license": "MIT"
		},
		"node_modules/@jridgewell/gen-mapping": {
			"version": "0.3.8",
			"resolved": "https://registry.npmjs.org/@jridgewell/gen-mapping/-/gen-mapping-0.3.8.tgz",
			"integrity": "sha512-imAbBGkb+ebQyxKgzv5Hu2nmROxoDOXHh80evxdoXNOrvAnVx7zimzc1Oo5h9RlfV4vPXaE2iM5pOFbvOCClWA==",
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
			"version": "5.1.4",
			"resolved": "https://registry.npmjs.org/@rollup/pluginutils/-/pluginutils-5.1.4.tgz",
			"integrity": "sha512-USm05zrsFxYLPdWWq+K3STlWiT/3ELn3RcV5hJMghpeAIhxfsUIg6mt12CBJBInWMV4VneoV7SfGv8xIwo2qNQ==",
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
		"node_modules/@rollup/rollup-android-arm-eabi": {
			"version": "4.34.9",
			"resolved": "https://registry.npmjs.org/@rollup/rollup-android-arm-eabi/-/rollup-android-arm-eabi-4.34.9.tgz",
			"integrity": "sha512-qZdlImWXur0CFakn2BJ2znJOdqYZKiedEPEVNTBrpfPjc/YuTGcaYZcdmNFTkUj3DU0ZM/AElcM8Ybww3xVLzA==",
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
			"version": "4.34.9",
			"resolved": "https://registry.npmjs.org/@rollup/rollup-android-arm64/-/rollup-android-arm64-4.34.9.tgz",
			"integrity": "sha512-4KW7P53h6HtJf5Y608T1ISKvNIYLWRKMvfnG0c44M6In4DQVU58HZFEVhWINDZKp7FZps98G3gxwC1sb0wXUUg==",
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
			"version": "4.34.9",
			"resolved": "https://registry.npmjs.org/@rollup/rollup-darwin-arm64/-/rollup-darwin-arm64-4.34.9.tgz",
			"integrity": "sha512-0CY3/K54slrzLDjOA7TOjN1NuLKERBgk9nY5V34mhmuu673YNb+7ghaDUs6N0ujXR7fz5XaS5Aa6d2TNxZd0OQ==",
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
			"version": "4.34.9",
			"resolved": "https://registry.npmjs.org/@rollup/rollup-darwin-x64/-/rollup-darwin-x64-4.34.9.tgz",
			"integrity": "sha512-eOojSEAi/acnsJVYRxnMkPFqcxSMFfrw7r2iD9Q32SGkb/Q9FpUY1UlAu1DH9T7j++gZ0lHjnm4OyH2vCI7l7Q==",
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
			"version": "4.34.9",
			"resolved": "https://registry.npmjs.org/@rollup/rollup-freebsd-arm64/-/rollup-freebsd-arm64-4.34.9.tgz",
			"integrity": "sha512-2lzjQPJbN5UnHm7bHIUKFMulGTQwdvOkouJDpPysJS+QFBGDJqcfh+CxxtG23Ik/9tEvnebQiylYoazFMAgrYw==",
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
			"version": "4.34.9",
			"resolved": "https://registry.npmjs.org/@rollup/rollup-freebsd-x64/-/rollup-freebsd-x64-4.34.9.tgz",
			"integrity": "sha512-SLl0hi2Ah2H7xQYd6Qaiu01kFPzQ+hqvdYSoOtHYg/zCIFs6t8sV95kaoqjzjFwuYQLtOI0RZre/Ke0nPaQV+g==",
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
			"version": "4.34.9",
			"resolved": "https://registry.npmjs.org/@rollup/rollup-linux-arm-gnueabihf/-/rollup-linux-arm-gnueabihf-4.34.9.tgz",
			"integrity": "sha512-88I+D3TeKItrw+Y/2ud4Tw0+3CxQ2kLgu3QvrogZ0OfkmX/DEppehus7L3TS2Q4lpB+hYyxhkQiYPJ6Mf5/dPg==",
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
			"version": "4.34.9",
			"resolved": "https://registry.npmjs.org/@rollup/rollup-linux-arm-musleabihf/-/rollup-linux-arm-musleabihf-4.34.9.tgz",
			"integrity": "sha512-3qyfWljSFHi9zH0KgtEPG4cBXHDFhwD8kwg6xLfHQ0IWuH9crp005GfoUUh/6w9/FWGBwEHg3lxK1iHRN1MFlA==",
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
			"version": "4.34.9",
			"resolved": "https://registry.npmjs.org/@rollup/rollup-linux-arm64-gnu/-/rollup-linux-arm64-gnu-4.34.9.tgz",
			"integrity": "sha512-6TZjPHjKZUQKmVKMUowF3ewHxctrRR09eYyvT5eFv8w/fXarEra83A2mHTVJLA5xU91aCNOUnM+DWFMSbQ0Nxw==",
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
			"version": "4.34.9",
			"resolved": "https://registry.npmjs.org/@rollup/rollup-linux-arm64-musl/-/rollup-linux-arm64-musl-4.34.9.tgz",
			"integrity": "sha512-LD2fytxZJZ6xzOKnMbIpgzFOuIKlxVOpiMAXawsAZ2mHBPEYOnLRK5TTEsID6z4eM23DuO88X0Tq1mErHMVq0A==",
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
		"node_modules/@rollup/rollup-linux-loongarch64-gnu": {
			"version": "4.34.9",
			"resolved": "https://registry.npmjs.org/@rollup/rollup-linux-loongarch64-gnu/-/rollup-linux-loongarch64-gnu-4.34.9.tgz",
			"integrity": "sha512-dRAgTfDsn0TE0HI6cmo13hemKpVHOEyeciGtvlBTkpx/F65kTvShtY/EVyZEIfxFkV5JJTuQ9tP5HGBS0hfxIg==",
			"cpu": [
				"loong64"
			],
			"dev": true,
			"license": "MIT",
			"optional": true,
			"os": [
				"linux"
			]
		},
		"node_modules/@rollup/rollup-linux-powerpc64le-gnu": {
			"version": "4.34.9",
			"resolved": "https://registry.npmjs.org/@rollup/rollup-linux-powerpc64le-gnu/-/rollup-linux-powerpc64le-gnu-4.34.9.tgz",
			"integrity": "sha512-PHcNOAEhkoMSQtMf+rJofwisZqaU8iQ8EaSps58f5HYll9EAY5BSErCZ8qBDMVbq88h4UxaNPlbrKqfWP8RfJA==",
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
			"version": "4.34.9",
			"resolved": "https://registry.npmjs.org/@rollup/rollup-linux-riscv64-gnu/-/rollup-linux-riscv64-gnu-4.34.9.tgz",
			"integrity": "sha512-Z2i0Uy5G96KBYKjeQFKbbsB54xFOL5/y1P5wNBsbXB8yE+At3oh0DVMjQVzCJRJSfReiB2tX8T6HUFZ2k8iaKg==",
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
			"version": "4.34.9",
			"resolved": "https://registry.npmjs.org/@rollup/rollup-linux-s390x-gnu/-/rollup-linux-s390x-gnu-4.34.9.tgz",
			"integrity": "sha512-U+5SwTMoeYXoDzJX5dhDTxRltSrIax8KWwfaaYcynuJw8mT33W7oOgz0a+AaXtGuvhzTr2tVKh5UO8GVANTxyQ==",
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
			"version": "4.34.9",
			"resolved": "https://registry.npmjs.org/@rollup/rollup-linux-x64-gnu/-/rollup-linux-x64-gnu-4.34.9.tgz",
			"integrity": "sha512-FwBHNSOjUTQLP4MG7y6rR6qbGw4MFeQnIBrMe161QGaQoBQLqSUEKlHIiVgF3g/mb3lxlxzJOpIBhaP+C+KP2A==",
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
			"version": "4.34.9",
			"resolved": "https://registry.npmjs.org/@rollup/rollup-linux-x64-musl/-/rollup-linux-x64-musl-4.34.9.tgz",
			"integrity": "sha512-cYRpV4650z2I3/s6+5/LONkjIz8MBeqrk+vPXV10ORBnshpn8S32bPqQ2Utv39jCiDcO2eJTuSlPXpnvmaIgRA==",
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
			"version": "4.34.9",
			"resolved": "https://registry.npmjs.org/@rollup/rollup-win32-arm64-msvc/-/rollup-win32-arm64-msvc-4.34.9.tgz",
			"integrity": "sha512-z4mQK9dAN6byRA/vsSgQiPeuO63wdiDxZ9yg9iyX2QTzKuQM7T4xlBoeUP/J8uiFkqxkcWndWi+W7bXdPbt27Q==",
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
			"version": "4.34.9",
			"resolved": "https://registry.npmjs.org/@rollup/rollup-win32-ia32-msvc/-/rollup-win32-ia32-msvc-4.34.9.tgz",
			"integrity": "sha512-KB48mPtaoHy1AwDNkAJfHXvHp24H0ryZog28spEs0V48l3H1fr4i37tiyHsgKZJnCmvxsbATdZGBpbmxTE3a9w==",
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
			"version": "4.34.9",
			"resolved": "https://registry.npmjs.org/@rollup/rollup-win32-x64-msvc/-/rollup-win32-x64-msvc-4.34.9.tgz",
			"integrity": "sha512-AyleYRPU7+rgkMWbEh71fQlrzRfeP6SyMnRf9XX4fCdDPAJumdSBqYEcWPMzVQ4ScAl7E4oFfK0GUVn77xSwbw==",
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
		"node_modules/@tailwindcss/browser": {
			"version": "4.0.9",
			"resolved": "https://registry.npmjs.org/@tailwindcss/browser/-/browser-4.0.9.tgz",
			"integrity": "sha512-jl4C8g0wkp0CxcOg/Ge1P+4atW8hx4iDjDo4c5bIrluTiKDUWNRdBfKTUAtcQHQ1utElHJ/AEPDD95wSM/ivtA==",
			"dev": true,
			"license": "MIT"
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
		"node_modules/@types/react": {
			"version": "19.0.10",
			"resolved": "https://registry.npmjs.org/@types/react/-/react-19.0.10.tgz",
			"integrity": "sha512-JuRQ9KXLEjaUNjTWpzuR231Z2WpIwczOkBEIvbHNCzQefFIT0L8IqE6NV6ULLyC1SI/i234JnDoMkfg+RjQj2g==",
			"dev": true,
			"license": "MIT",
			"dependencies": {
				"csstype": "^3.0.2"
			}
		},
		"node_modules/@types/react-dom": {
			"version": "19.0.4",
			"resolved": "https://registry.npmjs.org/@types/react-dom/-/react-dom-19.0.4.tgz",
			"integrity": "sha512-4fSQ8vWFkg+TGhePfUzVmat3eC14TXYSsiiDSLI0dVLsrm9gZFABjPy/Qu6TKgl1tq1Bu1yDsuQgY3A3DOjCcg==",
			"dev": true,
			"license": "MIT",
			"peerDependencies": {
				"@types/react": "^19.0.0"
			}
		},
		"node_modules/@vitejs/plugin-react": {
			"version": "4.3.4",
			"resolved": "https://registry.npmjs.org/@vitejs/plugin-react/-/plugin-react-4.3.4.tgz",
			"integrity": "sha512-SCCPBJtYLdE8PX/7ZQAs1QAZ8Jqwih+0VBLum1EGqmCCQal+MIUqLCzj3ZUy8ufbC0cAM4LRlSTm7IQJwWT4ug==",
			"dev": true,
			"license": "MIT",
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
			"dev": true,
			"license": "Python-2.0"
		},
		"node_modules/browserslist": {
			"version": "4.24.4",
			"resolved": "https://registry.npmjs.org/browserslist/-/browserslist-4.24.4.tgz",
			"integrity": "sha512-KDi1Ny1gSePi1vm0q4oxSF8b4DR44GF4BbmS2YdhPLOEqd8pDviZOGH/GsmRwoWJ2+5Lr085X7naowMwKHDG1A==",
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
				"caniuse-lite": "^1.0.30001688",
				"electron-to-chromium": "^1.5.73",
				"node-releases": "^2.0.19",
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
			"version": "1.0.30001701",
			"resolved": "https://registry.npmjs.org/caniuse-lite/-/caniuse-lite-1.0.30001701.tgz",
			"integrity": "sha512-faRs/AW3jA9nTwmJBSO1PQ6L/EOgsB5HMQQq4iCu5zhPgVVgO/pZRHlmatwijZKetFw8/Pr4q6dEN8sJuq8qTw==",
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
		"node_modules/daisyui": {
			"version": "5.0.0",
			"resolved": "https://registry.npmjs.org/daisyui/-/daisyui-5.0.0.tgz",
			"integrity": "sha512-U0K9Bac3Bi3zZGm6ojrw12F0vBHTpEgf46zv/BYxLe07hF0Xnx7emIQliwaRBgJuYhY0BhwQ6wSnq5cJXHA2yA==",
			"dev": true,
			"license": "MIT",
			"funding": {
				"url": "https://github.com/saadeghi/daisyui?sponsor=1"
			}
		},
		"node_modules/debug": {
			"version": "4.4.0",
			"resolved": "https://registry.npmjs.org/debug/-/debug-4.4.0.tgz",
			"integrity": "sha512-6WTZ/IxCY/T6BALoZHaE4ctp9xm+Z5kY/pzYaCHRFeyVhojxlrm+46y68HA6hr0TcwEssoxNiDEUJQjfPZ/RYA==",
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
			"version": "1.5.109",
			"resolved": "https://registry.npmjs.org/electron-to-chromium/-/electron-to-chromium-1.5.109.tgz",
			"integrity": "sha512-AidaH9JETVRr9DIPGfp1kAarm/W6hRJTPuCnkF+2MqhF4KaAgRIcBc8nvjk+YMXZhwfISof/7WG29eS4iGxQLQ==",
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
			"version": "0.25.0",
			"resolved": "https://registry.npmjs.org/esbuild/-/esbuild-0.25.0.tgz",
			"integrity": "sha512-BXq5mqc8ltbaN34cDqWuYKyNhX8D/Z0J1xdtdQ8UcIIIyJyz+ZMKUt58tF3SrZ85jcfN/PZYhjR5uDQAYNVbuw==",
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
				"@esbuild/aix-ppc64": "0.25.0",
				"@esbuild/android-arm": "0.25.0",
				"@esbuild/android-arm64": "0.25.0",
				"@esbuild/android-x64": "0.25.0",
				"@esbuild/darwin-arm64": "0.25.0",
				"@esbuild/darwin-x64": "0.25.0",
				"@esbuild/freebsd-arm64": "0.25.0",
				"@esbuild/freebsd-x64": "0.25.0",
				"@esbuild/linux-arm": "0.25.0",
				"@esbuild/linux-arm64": "0.25.0",
				"@esbuild/linux-ia32": "0.25.0",
				"@esbuild/linux-loong64": "0.25.0",
				"@esbuild/linux-mips64el": "0.25.0",
				"@esbuild/linux-ppc64": "0.25.0",
				"@esbuild/linux-riscv64": "0.25.0",
				"@esbuild/linux-s390x": "0.25.0",
				"@esbuild/linux-x64": "0.25.0",
				"@esbuild/netbsd-arm64": "0.25.0",
				"@esbuild/netbsd-x64": "0.25.0",
				"@esbuild/openbsd-arm64": "0.25.0",
				"@esbuild/openbsd-x64": "0.25.0",
				"@esbuild/sunos-x64": "0.25.0",
				"@esbuild/win32-arm64": "0.25.0",
				"@esbuild/win32-ia32": "0.25.0",
				"@esbuild/win32-x64": "0.25.0"
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
		"node_modules/import-fresh": {
			"version": "3.3.1",
			"resolved": "https://registry.npmjs.org/import-fresh/-/import-fresh-3.3.1.tgz",
			"integrity": "sha512-TR3KfrTZTYLPB6jUjfx6MF9WcWrHL9su5TObK4ZkYgBdWKPOFoSoQIdEuTuR82pmtxH2spWG9h6etwfr1pLBqQ==",
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
			"version": "3.1.0",
			"resolved": "https://registry.npmjs.org/jsesc/-/jsesc-3.1.0.tgz",
			"integrity": "sha512-/sM3dO2FOzXjKQhJuo0Q173wf2KOo8t4I8vHy6lF9poUp7bKT0/NHE8fPX23PwfhnykfqnC2xRxOnVw5XuGIaA==",
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
			"version": "2.1.3",
			"resolved": "https://registry.npmjs.org/ms/-/ms-2.1.3.tgz",
			"integrity": "sha512-6FlzubTLZG3J2a/NVCAleEhjzq5oxgHyaCU9yYXvcLsvoVaHJq/s5xXI6/XXP6tz7R9xAOtHnSO/tXtF3WRTlA==",
			"dev": true,
			"license": "MIT"
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
			"version": "2.0.19",
			"resolved": "https://registry.npmjs.org/node-releases/-/node-releases-2.0.19.tgz",
			"integrity": "sha512-xxOWJsBKtzAq7DY0J+DTzuz58K8e7sJbdgwkbMWQe8UYB6ekmsQ45q0M/tJDsGaZmbC+l7n57UV8Hl5tHxO9uw==",
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
		"node_modules/postcss": {
			"version": "8.5.3",
			"resolved": "https://registry.npmjs.org/postcss/-/postcss-8.5.3.tgz",
			"integrity": "sha512-dle9A3yYxlBSrt8Fu+IpjGT8SY8hN0mlaA6GY8t0P5PjIOZemULz/E2Bnm/2dcUOena75OTNkHI76uZBNUUq3A==",
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
				"nanoid": "^3.3.8",
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
			"license": "MIT",
			"engines": {
				"node": ">=0.10.0"
			}
		},
		"node_modules/react-dom": {
			"version": "19.0.0",
			"resolved": "https://registry.npmjs.org/react-dom/-/react-dom-19.0.0.tgz",
			"integrity": "sha512-4GV5sHFG0e/0AD4X+ySy6UJd3jVl1iNsNHdpad0qhABJ11twS3TTBnseqsKurKcsNqCEFeGL3uLpVChpIO3QfQ==",
			"dev": true,
			"license": "MIT",
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
			"license": "MIT",
			"engines": {
				"node": ">=0.10.0"
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
			"version": "4.34.9",
			"resolved": "https://registry.npmjs.org/rollup/-/rollup-4.34.9.tgz",
			"integrity": "sha512-nF5XYqWWp9hx/LrpC8sZvvvmq0TeTjQgaZHYmAgwysT9nh8sWnZhBnM8ZyVbbJFIQBLwHDNoMqsBZBbUo4U8sQ==",
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
				"@rollup/rollup-android-arm-eabi": "4.34.9",
				"@rollup/rollup-android-arm64": "4.34.9",
				"@rollup/rollup-darwin-arm64": "4.34.9",
				"@rollup/rollup-darwin-x64": "4.34.9",
				"@rollup/rollup-freebsd-arm64": "4.34.9",
				"@rollup/rollup-freebsd-x64": "4.34.9",
				"@rollup/rollup-linux-arm-gnueabihf": "4.34.9",
				"@rollup/rollup-linux-arm-musleabihf": "4.34.9",
				"@rollup/rollup-linux-arm64-gnu": "4.34.9",
				"@rollup/rollup-linux-arm64-musl": "4.34.9",
				"@rollup/rollup-linux-loongarch64-gnu": "4.34.9",
				"@rollup/rollup-linux-powerpc64le-gnu": "4.34.9",
				"@rollup/rollup-linux-riscv64-gnu": "4.34.9",
				"@rollup/rollup-linux-s390x-gnu": "4.34.9",
				"@rollup/rollup-linux-x64-gnu": "4.34.9",
				"@rollup/rollup-linux-x64-musl": "4.34.9",
				"@rollup/rollup-win32-arm64-msvc": "4.34.9",
				"@rollup/rollup-win32-ia32-msvc": "4.34.9",
				"@rollup/rollup-win32-x64-msvc": "4.34.9",
				"fsevents": "~2.3.2"
			}
		},
		"node_modules/scheduler": {
			"version": "0.25.0",
			"resolved": "https://registry.npmjs.org/scheduler/-/scheduler-0.25.0.tgz",
			"integrity": "sha512-xFVuu11jh+xcO7JOAGJNOXld8/TcEHK/4CituBUeUb5hqxJLj9YuemAEuvm9gQ/+pgXYfbQuqAkiYu+u7YEsNA==",
			"dev": true,
			"license": "MIT"
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
		"node_modules/tslib": {
			"version": "2.8.1",
			"resolved": "https://registry.npmjs.org/tslib/-/tslib-2.8.1.tgz",
			"integrity": "sha512-oJFu94HQb+KVduSUQL7wnpmqnfmLsOA/nAh6b6EH0wCEoK0/mPeXU6c3wKDV83MkOuHPRHtSXKKU99IBazS/2w==",
			"dev": true,
			"license": "0BSD"
		},
		"node_modules/typescript": {
			"version": "5.6.3",
			"resolved": "https://registry.npmjs.org/typescript/-/typescript-5.6.3.tgz",
			"integrity": "sha512-hjcS1mhfuyi4WW8IWtjP7brDrG2cuDZukyrYrSauoXGNgx0S7zceP07adYkJycEr56BOUTNPzbInooiN3fn1qw==",
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
			"version": "1.1.3",
			"resolved": "https://registry.npmjs.org/update-browserslist-db/-/update-browserslist-db-1.1.3.tgz",
			"integrity": "sha512-UxhIZQ+QInVdunkDAaiazvvT/+fXL5Osr0JZlJulepYu6Jd7qJtDZjlur0emRlT71EN3ScPoE7gvsuIKKNavKw==",
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
				"picocolors": "^1.1.1"
			},
			"bin": {
				"update-browserslist-db": "cli.js"
			},
			"peerDependencies": {
				"browserslist": ">= 4.21.0"
			}
		},
		"node_modules/vite": {
			"version": "6.2.0",
			"resolved": "https://registry.npmjs.org/vite/-/vite-6.2.0.tgz",
			"integrity": "sha512-7dPxoo+WsT/64rDcwoOjk76XHj+TqNTIvHKcuMQ1k4/SeHDaQt5GFAeLYzrimZrMpn/O6DtdI03WUjdxuPM0oQ==",
			"dev": true,
			"license": "MIT",
			"dependencies": {
				"esbuild": "^0.25.0",
				"postcss": "^8.5.3",
				"rollup": "^4.30.1"
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
