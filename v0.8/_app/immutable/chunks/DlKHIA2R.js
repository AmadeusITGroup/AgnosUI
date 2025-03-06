const t=`{
	"name": "agnos-ui-svelte-stackblitz-demo",
	"version": "0.8.0-next.1",
	"lockfileVersion": 3,
	"requires": true,
	"packages": {
		"": {
			"name": "agnos-ui-svelte-stackblitz-demo",
			"version": "0.8.0-next.1",
			"devDependencies": {
				"@agnos-ui/svelte-headless": "0.8.0-next.1",
				"@agnos-ui/svelte-preprocess": "0.8.0-next.1",
				"@amadeus-it-group/tansu": "^2.0.0",
				"@floating-ui/dom": "^1.6.12",
				"@sveltejs/vite-plugin-svelte": "^5.0.1",
				"@tailwindcss/browser": "^4.0.0",
				"@tsconfig/svelte": "^5.0.4",
				"daisyui": "^5.0.0-beta.8",
				"sass": "^1.82.0",
				"svelte": "^5.16.0",
				"svelte-check": "^4.1.1",
				"tslib": "^2.8.1",
				"typescript": "~5.6.3",
				"vite": "^6.0.3"
			}
		},
		"node_modules/@agnos-ui/core": {
			"version": "0.8.0-next.1",
			"resolved": "https://registry.npmjs.org/@agnos-ui/core/-/core-0.8.0-next.1.tgz",
			"integrity": "sha512-7HjiePocmnMc/jU0xrCvLZHcLhg5dlqOFblTYwuAEcvsUUPIHmTPbIW06KKx+qANkFSI8Pc5ywepJhphhBQ3jw==",
			"dev": true,
			"license": "MIT",
			"dependencies": {
				"clsx": "^2.1.1"
			},
			"peerDependencies": {
				"@amadeus-it-group/tansu": "^2.0.0",
				"@floating-ui/dom": "^1.6.12",
				"esm-env": "^1.2.1"
			}
		},
		"node_modules/@agnos-ui/svelte-headless": {
			"version": "0.8.0-next.1",
			"resolved": "https://registry.npmjs.org/@agnos-ui/svelte-headless/-/svelte-headless-0.8.0-next.1.tgz",
			"integrity": "sha512-hz0vVGCKoKQD53wryb3YpSeK23u/zm+f+1nzvQLaT6PkwTDQA5sw4A7AQ55Ct9bLqRlFFt5qfd59eBH5OHsaAg==",
			"dev": true,
			"license": "MIT",
			"dependencies": {
				"@agnos-ui/core": "0.8.0-next.1"
			},
			"peerDependencies": {
				"@amadeus-it-group/tansu": "^2.0.0",
				"svelte": "^5.16.0"
			}
		},
		"node_modules/@agnos-ui/svelte-preprocess": {
			"version": "0.8.0-next.1",
			"resolved": "https://registry.npmjs.org/@agnos-ui/svelte-preprocess/-/svelte-preprocess-0.8.0-next.1.tgz",
			"integrity": "sha512-zdW1XC3y3thIT6ncVkH1lXRDJFWifPi2ICaFaJeU0w9aZXFPZ2OUU97ujCGj/sDny6X7Pf4wWJxi7QzQPQ9OAg==",
			"dev": true,
			"license": "MIT",
			"dependencies": {
				"magic-string": "^0.30.14"
			},
			"peerDependencies": {
				"svelte": "^5.16.0"
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
		"node_modules/@parcel/watcher": {
			"version": "2.5.1",
			"resolved": "https://registry.npmjs.org/@parcel/watcher/-/watcher-2.5.1.tgz",
			"integrity": "sha512-dfUnCxiN9H4ap84DvD2ubjw+3vUNpstxa0TneY/Paat8a3R4uQZDLSvWjmznAY/DoahqTHl9V46HF/Zs3F29pg==",
			"dev": true,
			"hasInstallScript": true,
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
				"@parcel/watcher-android-arm64": "2.5.1",
				"@parcel/watcher-darwin-arm64": "2.5.1",
				"@parcel/watcher-darwin-x64": "2.5.1",
				"@parcel/watcher-freebsd-x64": "2.5.1",
				"@parcel/watcher-linux-arm-glibc": "2.5.1",
				"@parcel/watcher-linux-arm-musl": "2.5.1",
				"@parcel/watcher-linux-arm64-glibc": "2.5.1",
				"@parcel/watcher-linux-arm64-musl": "2.5.1",
				"@parcel/watcher-linux-x64-glibc": "2.5.1",
				"@parcel/watcher-linux-x64-musl": "2.5.1",
				"@parcel/watcher-win32-arm64": "2.5.1",
				"@parcel/watcher-win32-ia32": "2.5.1",
				"@parcel/watcher-win32-x64": "2.5.1"
			}
		},
		"node_modules/@parcel/watcher-android-arm64": {
			"version": "2.5.1",
			"resolved": "https://registry.npmjs.org/@parcel/watcher-android-arm64/-/watcher-android-arm64-2.5.1.tgz",
			"integrity": "sha512-KF8+j9nNbUN8vzOFDpRMsaKBHZ/mcjEjMToVMJOhTozkDonQFFrRcfdLWn6yWKCmJKmdVxSgHiYvTCef4/qcBA==",
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
			"version": "2.5.1",
			"resolved": "https://registry.npmjs.org/@parcel/watcher-darwin-arm64/-/watcher-darwin-arm64-2.5.1.tgz",
			"integrity": "sha512-eAzPv5osDmZyBhou8PoF4i6RQXAfeKL9tjb3QzYuccXFMQU0ruIc/POh30ePnaOyD1UXdlKguHBmsTs53tVoPw==",
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
			"version": "2.5.1",
			"resolved": "https://registry.npmjs.org/@parcel/watcher-darwin-x64/-/watcher-darwin-x64-2.5.1.tgz",
			"integrity": "sha512-1ZXDthrnNmwv10A0/3AJNZ9JGlzrF82i3gNQcWOzd7nJ8aj+ILyW1MTxVk35Db0u91oD5Nlk9MBiujMlwmeXZg==",
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
			"version": "2.5.1",
			"resolved": "https://registry.npmjs.org/@parcel/watcher-freebsd-x64/-/watcher-freebsd-x64-2.5.1.tgz",
			"integrity": "sha512-SI4eljM7Flp9yPuKi8W0ird8TI/JK6CSxju3NojVI6BjHsTyK7zxA9urjVjEKJ5MBYC+bLmMcbAWlZ+rFkLpJQ==",
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
			"version": "2.5.1",
			"resolved": "https://registry.npmjs.org/@parcel/watcher-linux-arm-glibc/-/watcher-linux-arm-glibc-2.5.1.tgz",
			"integrity": "sha512-RCdZlEyTs8geyBkkcnPWvtXLY44BCeZKmGYRtSgtwwnHR4dxfHRG3gR99XdMEdQ7KeiDdasJwwvNSF5jKtDwdA==",
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
		"node_modules/@parcel/watcher-linux-arm-musl": {
			"version": "2.5.1",
			"resolved": "https://registry.npmjs.org/@parcel/watcher-linux-arm-musl/-/watcher-linux-arm-musl-2.5.1.tgz",
			"integrity": "sha512-6E+m/Mm1t1yhB8X412stiKFG3XykmgdIOqhjWj+VL8oHkKABfu/gjFj8DvLrYVHSBNC+/u5PeNrujiSQ1zwd1Q==",
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
			"version": "2.5.1",
			"resolved": "https://registry.npmjs.org/@parcel/watcher-linux-arm64-glibc/-/watcher-linux-arm64-glibc-2.5.1.tgz",
			"integrity": "sha512-LrGp+f02yU3BN9A+DGuY3v3bmnFUggAITBGriZHUREfNEzZh/GO06FF5u2kx8x+GBEUYfyTGamol4j3m9ANe8w==",
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
			"version": "2.5.1",
			"resolved": "https://registry.npmjs.org/@parcel/watcher-linux-arm64-musl/-/watcher-linux-arm64-musl-2.5.1.tgz",
			"integrity": "sha512-cFOjABi92pMYRXS7AcQv9/M1YuKRw8SZniCDw0ssQb/noPkRzA+HBDkwmyOJYp5wXcsTrhxO0zq1U11cK9jsFg==",
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
			"version": "2.5.1",
			"resolved": "https://registry.npmjs.org/@parcel/watcher-linux-x64-glibc/-/watcher-linux-x64-glibc-2.5.1.tgz",
			"integrity": "sha512-GcESn8NZySmfwlTsIur+49yDqSny2IhPeZfXunQi48DMugKeZ7uy1FX83pO0X22sHntJ4Ub+9k34XQCX+oHt2A==",
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
			"version": "2.5.1",
			"resolved": "https://registry.npmjs.org/@parcel/watcher-linux-x64-musl/-/watcher-linux-x64-musl-2.5.1.tgz",
			"integrity": "sha512-n0E2EQbatQ3bXhcH2D1XIAANAcTZkQICBPVaxMeaCVBtOpBZpWJuf7LwyWPSBDITb7In8mqQgJ7gH8CILCURXg==",
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
			"version": "2.5.1",
			"resolved": "https://registry.npmjs.org/@parcel/watcher-win32-arm64/-/watcher-win32-arm64-2.5.1.tgz",
			"integrity": "sha512-RFzklRvmc3PkjKjry3hLF9wD7ppR4AKcWNzH7kXR7GUe0Igb3Nz8fyPwtZCSquGrhU5HhUNDr/mKBqj7tqA2Vw==",
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
			"version": "2.5.1",
			"resolved": "https://registry.npmjs.org/@parcel/watcher-win32-ia32/-/watcher-win32-ia32-2.5.1.tgz",
			"integrity": "sha512-c2KkcVN+NJmuA7CGlaGD1qJh1cLfDnQsHjE89E60vUEMlqduHGCdCLJCID5geFVM0dOtA3ZiIO8BoEQmzQVfpQ==",
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
			"version": "2.5.1",
			"resolved": "https://registry.npmjs.org/@parcel/watcher-win32-x64/-/watcher-win32-x64-2.5.1.tgz",
			"integrity": "sha512-9lHBdJITeNR++EvSQVUcaZoWupyHfXe1jZvGZ06O/5MflPcuPLtEphScIBL+AiCWBO46tDSHzWyD0uDmmZqsgA==",
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
		"node_modules/@sveltejs/vite-plugin-svelte": {
			"version": "5.0.3",
			"resolved": "https://registry.npmjs.org/@sveltejs/vite-plugin-svelte/-/vite-plugin-svelte-5.0.3.tgz",
			"integrity": "sha512-MCFS6CrQDu1yGwspm4qtli0e63vaPCehf6V7pIMP15AsWgMKrqDGCPFF/0kn4SP0ii4aySu4Pa62+fIRGFMjgw==",
			"dev": true,
			"license": "MIT",
			"dependencies": {
				"@sveltejs/vite-plugin-svelte-inspector": "^4.0.1",
				"debug": "^4.4.0",
				"deepmerge": "^4.3.1",
				"kleur": "^4.1.5",
				"magic-string": "^0.30.15",
				"vitefu": "^1.0.4"
			},
			"engines": {
				"node": "^18.0.0 || ^20.0.0 || >=22"
			},
			"peerDependencies": {
				"svelte": "^5.0.0",
				"vite": "^6.0.0"
			}
		},
		"node_modules/@sveltejs/vite-plugin-svelte-inspector": {
			"version": "4.0.1",
			"resolved": "https://registry.npmjs.org/@sveltejs/vite-plugin-svelte-inspector/-/vite-plugin-svelte-inspector-4.0.1.tgz",
			"integrity": "sha512-J/Nmb2Q2y7mck2hyCX4ckVHcR5tu2J+MtBEQqpDrrgELZ2uvraQcK/ioCV61AqkdXFgriksOKIceDcQmqnGhVw==",
			"dev": true,
			"license": "MIT",
			"dependencies": {
				"debug": "^4.3.7"
			},
			"engines": {
				"node": "^18.0.0 || ^20.0.0 || >=22"
			},
			"peerDependencies": {
				"@sveltejs/vite-plugin-svelte": "^5.0.0",
				"svelte": "^5.0.0",
				"vite": "^6.0.0"
			}
		},
		"node_modules/@tailwindcss/browser": {
			"version": "4.0.9",
			"resolved": "https://registry.npmjs.org/@tailwindcss/browser/-/browser-4.0.9.tgz",
			"integrity": "sha512-jl4C8g0wkp0CxcOg/Ge1P+4atW8hx4iDjDo4c5bIrluTiKDUWNRdBfKTUAtcQHQ1utElHJ/AEPDD95wSM/ivtA==",
			"dev": true,
			"license": "MIT"
		},
		"node_modules/@tsconfig/svelte": {
			"version": "5.0.4",
			"resolved": "https://registry.npmjs.org/@tsconfig/svelte/-/svelte-5.0.4.tgz",
			"integrity": "sha512-BV9NplVgLmSi4mwKzD8BD/NQ8erOY/nUE/GpgWe2ckx+wIQF5RyRirn/QsSSCPeulVpc3RA/iJt6DpfTIZps0Q==",
			"dev": true,
			"license": "MIT"
		},
		"node_modules/@types/estree": {
			"version": "1.0.6",
			"resolved": "https://registry.npmjs.org/@types/estree/-/estree-1.0.6.tgz",
			"integrity": "sha512-AYnb1nQyY49te+VRAVgmzfcgjYS91mY5P0TKUDCLEM+gNnA+3T6rWITXRLYCpahpqSQbN5cE+gHpnPyXjHWxcw==",
			"dev": true,
			"license": "MIT"
		},
		"node_modules/acorn": {
			"version": "8.14.0",
			"resolved": "https://registry.npmjs.org/acorn/-/acorn-8.14.0.tgz",
			"integrity": "sha512-cl669nCJTZBsL97OF4kUQm5g5hC2uihk0NxY3WENAC0TYdILVkAyHymAntgxGkl7K+t0cXIrH5siy5S4XkFycA==",
			"dev": true,
			"license": "MIT",
			"bin": {
				"acorn": "bin/acorn"
			},
			"engines": {
				"node": ">=0.4.0"
			}
		},
		"node_modules/acorn-typescript": {
			"version": "1.4.13",
			"resolved": "https://registry.npmjs.org/acorn-typescript/-/acorn-typescript-1.4.13.tgz",
			"integrity": "sha512-xsc9Xv0xlVfwp2o7sQ+GCQ1PgbkdcpWdTzrwXxO3xDMTAywVS3oXVOcOHuRjAPkS4P9b+yc/qNF15460v+jp4Q==",
			"dev": true,
			"license": "MIT",
			"peerDependencies": {
				"acorn": ">=8.9.0"
			}
		},
		"node_modules/aria-query": {
			"version": "5.3.2",
			"resolved": "https://registry.npmjs.org/aria-query/-/aria-query-5.3.2.tgz",
			"integrity": "sha512-COROpnaoap1E2F000S62r6A60uHZnmlvomhfyT2DlTcrY1OrBKn2UhH7qn5wTC9zMvD0AY7csdPSNwKP+7WiQw==",
			"dev": true,
			"license": "Apache-2.0",
			"engines": {
				"node": ">= 0.4"
			}
		},
		"node_modules/axobject-query": {
			"version": "4.1.0",
			"resolved": "https://registry.npmjs.org/axobject-query/-/axobject-query-4.1.0.tgz",
			"integrity": "sha512-qIj0G9wZbMGNLjLmg1PT6v2mE9AH2zlnADJD/2tC6E00hgmhUOfEB6greHPAfLRSufHqROIUTkw6E+M3lH0PTQ==",
			"dev": true,
			"license": "Apache-2.0",
			"engines": {
				"node": ">= 0.4"
			}
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
		"node_modules/chokidar": {
			"version": "4.0.3",
			"resolved": "https://registry.npmjs.org/chokidar/-/chokidar-4.0.3.tgz",
			"integrity": "sha512-Qgzu8kfBvo+cA4962jnP1KkS6Dop5NS6g7R5LFYJr4b8Ub94PPQXUksCw9PvXoeXPRRddRNC5C1JQUR2SMGtnA==",
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
		"node_modules/clsx": {
			"version": "2.1.1",
			"resolved": "https://registry.npmjs.org/clsx/-/clsx-2.1.1.tgz",
			"integrity": "sha512-eYm0QWBtUrBWZWG0d386OGAw16Z995PiOVo2B7bjWSbHedGl5e0ZWaq65kOGgUSNesEIDkB9ISbTg/JK9dhCZA==",
			"dev": true,
			"license": "MIT",
			"engines": {
				"node": ">=6"
			}
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
		"node_modules/deepmerge": {
			"version": "4.3.1",
			"resolved": "https://registry.npmjs.org/deepmerge/-/deepmerge-4.3.1.tgz",
			"integrity": "sha512-3sUqbMEc77XqpdNO7FRyRog+eW3ph+GYCbj+rK+uYyRMuwsVy0rMiVtPn+QJlKFvWP/1PYpapqYn0Me2knFn+A==",
			"dev": true,
			"license": "MIT",
			"engines": {
				"node": ">=0.10.0"
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
		"node_modules/esm-env": {
			"version": "1.2.2",
			"resolved": "https://registry.npmjs.org/esm-env/-/esm-env-1.2.2.tgz",
			"integrity": "sha512-Epxrv+Nr/CaL4ZcFGPJIYLWFom+YeV1DqMLHJoEd9SYRxNbaFruBwfEX/kkHUJf55j2+TUbmDcmuilbP1TmXHA==",
			"dev": true,
			"license": "MIT"
		},
		"node_modules/esrap": {
			"version": "1.4.5",
			"resolved": "https://registry.npmjs.org/esrap/-/esrap-1.4.5.tgz",
			"integrity": "sha512-CjNMjkBWWZeHn+VX+gS8YvFwJ5+NDhg8aWZBSFJPR8qQduDNjbJodA2WcwCm7uQa5Rjqj+nZvVmceg1RbHFB9g==",
			"dev": true,
			"license": "MIT",
			"dependencies": {
				"@jridgewell/sourcemap-codec": "^1.4.15"
			}
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
		"node_modules/immutable": {
			"version": "5.0.3",
			"resolved": "https://registry.npmjs.org/immutable/-/immutable-5.0.3.tgz",
			"integrity": "sha512-P8IdPQHq3lA1xVeBRi5VPqUm5HDgKnx0Ru51wZz5mjxHr5n3RWhjIpOFU7ybkUxfB+5IToy+OLaHYDBIWsv+uw==",
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
		"node_modules/is-reference": {
			"version": "3.0.3",
			"resolved": "https://registry.npmjs.org/is-reference/-/is-reference-3.0.3.tgz",
			"integrity": "sha512-ixkJoqQvAP88E6wLydLGGqCJsrFUnqoH6HnaczB8XmDH1oaWU+xxdptvikTgaEhtZ53Ky6YXiBuUI2WXLMCwjw==",
			"dev": true,
			"license": "MIT",
			"dependencies": {
				"@types/estree": "^1.0.6"
			}
		},
		"node_modules/kleur": {
			"version": "4.1.5",
			"resolved": "https://registry.npmjs.org/kleur/-/kleur-4.1.5.tgz",
			"integrity": "sha512-o+NO+8WrRiQEE4/7nwRJhN1HWpVmJm511pBHUxPLtp0BUISzlBplORYSmTclCnJvQq2tKu/sgl3xVpkc7ZWuQQ==",
			"dev": true,
			"license": "MIT",
			"engines": {
				"node": ">=6"
			}
		},
		"node_modules/locate-character": {
			"version": "3.0.0",
			"resolved": "https://registry.npmjs.org/locate-character/-/locate-character-3.0.0.tgz",
			"integrity": "sha512-SW13ws7BjaeJ6p7Q6CO2nchbYEc3X3J6WrmTTDto7yMPqVSZTUyY5Tjbid+Ab8gLnATtygYtiDIJGQRRn2ZOiA==",
			"dev": true,
			"license": "MIT"
		},
		"node_modules/magic-string": {
			"version": "0.30.17",
			"resolved": "https://registry.npmjs.org/magic-string/-/magic-string-0.30.17.tgz",
			"integrity": "sha512-sNPKHvyjVf7gyjwS4xGTaW/mCnF8wnjtifKBEhxfZ7E/S8tQ0rssrwGNn6q8JH/ohItJfSQp9mBtQYuTlH5QnA==",
			"dev": true,
			"license": "MIT",
			"dependencies": {
				"@jridgewell/sourcemap-codec": "^1.5.0"
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
		"node_modules/mri": {
			"version": "1.2.0",
			"resolved": "https://registry.npmjs.org/mri/-/mri-1.2.0.tgz",
			"integrity": "sha512-tzzskb3bG8LvYGFF/mDTpq3jpI6Q9wc3LEmBaghu+DdCssd1FakN7Bc0hVNmEyGq1bq3RgfkCb3cmQLpNPOroA==",
			"dev": true,
			"license": "MIT",
			"engines": {
				"node": ">=4"
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
		"node_modules/node-addon-api": {
			"version": "7.1.1",
			"resolved": "https://registry.npmjs.org/node-addon-api/-/node-addon-api-7.1.1.tgz",
			"integrity": "sha512-5m3bsyrjFWE1xf7nz7YXdN4udnVtXK6/Yfgn5qnahL6bCkf2yKt4k3nuTKAtT4r3IG8JNR2ncsIMdZuAzJjHQQ==",
			"dev": true,
			"license": "MIT",
			"optional": true
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
		"node_modules/readdirp": {
			"version": "4.1.2",
			"resolved": "https://registry.npmjs.org/readdirp/-/readdirp-4.1.2.tgz",
			"integrity": "sha512-GDhwkLfywWL2s6vEjyhri+eXmfH6j1L7JE27WhqLeYzoh/A3DBaYGEj2H/HFZCn/kMfim73FXxEJTw06WtxQwg==",
			"dev": true,
			"license": "MIT",
			"engines": {
				"node": ">= 14.18.0"
			},
			"funding": {
				"type": "individual",
				"url": "https://paulmillr.com/funding/"
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
		"node_modules/sade": {
			"version": "1.8.1",
			"resolved": "https://registry.npmjs.org/sade/-/sade-1.8.1.tgz",
			"integrity": "sha512-xal3CZX1Xlo/k4ApwCFrHVACi9fBqJ7V+mwhBsuf/1IOKbBy098Fex+Wa/5QMubw09pSZ/u8EY8PWgevJsXp1A==",
			"dev": true,
			"license": "MIT",
			"dependencies": {
				"mri": "^1.1.0"
			},
			"engines": {
				"node": ">=6"
			}
		},
		"node_modules/sass": {
			"version": "1.85.1",
			"resolved": "https://registry.npmjs.org/sass/-/sass-1.85.1.tgz",
			"integrity": "sha512-Uk8WpxM5v+0cMR0XjX9KfRIacmSG86RH4DCCZjLU2rFh5tyutt9siAXJ7G+YfxQ99Q6wrRMbMlVl6KqUms71ag==",
			"dev": true,
			"license": "MIT",
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
		"node_modules/svelte": {
			"version": "5.20.5",
			"resolved": "https://registry.npmjs.org/svelte/-/svelte-5.20.5.tgz",
			"integrity": "sha512-dpu2lTPVsAAgZFKpF7A9741sBCdXGogfxFU4aQeVgun7GVNCSVheTzj0FsT7g9OsLhBaMX4lKLwVIvmzQGytmQ==",
			"dev": true,
			"license": "MIT",
			"dependencies": {
				"@ampproject/remapping": "^2.3.0",
				"@jridgewell/sourcemap-codec": "^1.5.0",
				"@types/estree": "^1.0.5",
				"acorn": "^8.12.1",
				"acorn-typescript": "^1.4.13",
				"aria-query": "^5.3.1",
				"axobject-query": "^4.1.0",
				"clsx": "^2.1.1",
				"esm-env": "^1.2.1",
				"esrap": "^1.4.3",
				"is-reference": "^3.0.3",
				"locate-character": "^3.0.0",
				"magic-string": "^0.30.11",
				"zimmerframe": "^1.1.2"
			},
			"engines": {
				"node": ">=18"
			}
		},
		"node_modules/svelte-check": {
			"version": "4.1.4",
			"resolved": "https://registry.npmjs.org/svelte-check/-/svelte-check-4.1.4.tgz",
			"integrity": "sha512-v0j7yLbT29MezzaQJPEDwksybTE2Ups9rUxEXy92T06TiA0cbqcO8wAOwNUVkFW6B0hsYHA+oAX3BS8b/2oHtw==",
			"dev": true,
			"license": "MIT",
			"dependencies": {
				"@jridgewell/trace-mapping": "^0.3.25",
				"chokidar": "^4.0.1",
				"fdir": "^6.2.0",
				"picocolors": "^1.0.0",
				"sade": "^1.7.4"
			},
			"bin": {
				"svelte-check": "bin/svelte-check"
			},
			"engines": {
				"node": ">= 18.0.0"
			},
			"peerDependencies": {
				"svelte": "^4.0.0 || ^5.0.0-next.0",
				"typescript": ">=5.0.0"
			}
		},
		"node_modules/svelte-check/node_modules/fdir": {
			"version": "6.4.3",
			"resolved": "https://registry.npmjs.org/fdir/-/fdir-6.4.3.tgz",
			"integrity": "sha512-PMXmW2y1hDDfTSRc9gaXIuCCRpuoz3Kaz8cUelp3smouvfT632ozg2vrT6lJsHKKOF59YLbOGfAWGUcKEfRMQw==",
			"dev": true,
			"license": "MIT",
			"peerDependencies": {
				"picomatch": "^3 || ^4"
			},
			"peerDependenciesMeta": {
				"picomatch": {
					"optional": true
				}
			}
		},
		"node_modules/svelte-check/node_modules/picomatch": {
			"version": "4.0.2",
			"resolved": "https://registry.npmjs.org/picomatch/-/picomatch-4.0.2.tgz",
			"integrity": "sha512-M7BAV6Rlcy5u+m6oPhAPFgJTzAioX/6B0DxyvDlo9l8+T3nLKbrczg2WLUyzd45L8RqfUMyGPzekbMvX2Ldkwg==",
			"dev": true,
			"license": "MIT",
			"optional": true,
			"peer": true,
			"engines": {
				"node": ">=12"
			},
			"funding": {
				"url": "https://github.com/sponsors/jonschlinkert"
			}
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
		"node_modules/vitefu": {
			"version": "1.0.6",
			"resolved": "https://registry.npmjs.org/vitefu/-/vitefu-1.0.6.tgz",
			"integrity": "sha512-+Rex1GlappUyNN6UfwbVZne/9cYC4+R2XDk9xkNXBKMw6HQagdX9PgZ8V2v1WUSK1wfBLp7qbI1+XSNIlB1xmA==",
			"dev": true,
			"license": "MIT",
			"workspaces": [
				"tests/deps/*",
				"tests/projects/*"
			],
			"peerDependencies": {
				"vite": "^3.0.0 || ^4.0.0 || ^5.0.0 || ^6.0.0"
			},
			"peerDependenciesMeta": {
				"vite": {
					"optional": true
				}
			}
		},
		"node_modules/zimmerframe": {
			"version": "1.1.2",
			"resolved": "https://registry.npmjs.org/zimmerframe/-/zimmerframe-1.1.2.tgz",
			"integrity": "sha512-rAbqEGa8ovJy4pyBxZM70hg4pE6gDgaQ0Sl9M3enG3I0d6H4XSAM3GeNGLKnsBpuijUow064sf7ww1nutC5/3w==",
			"dev": true,
			"license": "MIT"
		}
	}
}
`;export{t as default};
