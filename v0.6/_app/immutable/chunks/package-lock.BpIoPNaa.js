const t=`{
	"name": "agnos-ui-svelte-stackblitz-demo",
	"version": "0.6.0",
	"lockfileVersion": 3,
	"requires": true,
	"packages": {
		"": {
			"name": "agnos-ui-svelte-stackblitz-demo",
			"version": "0.6.0",
			"devDependencies": {
				"@agnos-ui/svelte-headless": "0.6.0",
				"@agnos-ui/svelte-preprocess": "0.6.0",
				"@amadeus-it-group/tansu": "^1.0.0",
				"@floating-ui/dom": "^1.6.12",
				"@sveltejs/vite-plugin-svelte": "^5.0.1",
				"@tsconfig/svelte": "^5.0.4",
				"autoprefixer": "^10.4.20",
				"daisyui": "^4.12.14",
				"postcss": "^8.4.49",
				"sass": "^1.81.0",
				"svelte": "^5.3.1",
				"svelte-check": "^4.1.0",
				"tailwindcss": "^3.4.15",
				"tslib": "^2.8.1",
				"typescript": "~5.5.4",
				"vite": "^6.0.2"
			}
		},
		"node_modules/@agnos-ui/core": {
			"version": "0.6.0",
			"resolved": "https://registry.npmjs.org/@agnos-ui/core/-/core-0.6.0.tgz",
			"integrity": "sha512-pMZLUJ9y/DMQOxKLWEdYtaeu7DviEqqxTz8s30T8XGSIGJenuhtjExVbs6te/3KCSVMR8VkhczvcqygOWle2cQ==",
			"dev": true,
			"license": "MIT",
			"peerDependencies": {
				"@amadeus-it-group/tansu": "^1.0.0",
				"@floating-ui/dom": "^1.6.12",
				"esm-env": "^1.2.1"
			}
		},
		"node_modules/@agnos-ui/svelte-headless": {
			"version": "0.6.0",
			"resolved": "https://registry.npmjs.org/@agnos-ui/svelte-headless/-/svelte-headless-0.6.0.tgz",
			"integrity": "sha512-avn+7uu9TQ16hOvkfJvCsTn1ZHkuuIcxKDZLQ1qYInxa/e9rsH24xSD3XhZMwMNoQ6c9l7x7Yi7HjQ5Zdmjc0w==",
			"dev": true,
			"license": "MIT",
			"dependencies": {
				"@agnos-ui/core": "0.6.0"
			},
			"peerDependencies": {
				"@amadeus-it-group/tansu": "^1.0.0",
				"svelte": "^5.3.1"
			}
		},
		"node_modules/@agnos-ui/svelte-preprocess": {
			"version": "0.6.0",
			"resolved": "https://registry.npmjs.org/@agnos-ui/svelte-preprocess/-/svelte-preprocess-0.6.0.tgz",
			"integrity": "sha512-rPz1FWL9/XGnxn8WUJqmGf1qs1vgtC49GE6JEkF2luICzT4s+xUq/q2NM00rc6LwSJK9mDG5fjpZMGs3ywtPNg==",
			"dev": true,
			"license": "MIT",
			"dependencies": {
				"magic-string": "^0.30.14"
			},
			"peerDependencies": {
				"svelte": "^5.3.1"
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
			"version": "1.0.0",
			"resolved": "https://registry.npmjs.org/@amadeus-it-group/tansu/-/tansu-1.0.0.tgz",
			"integrity": "sha512-JXR89NVtWT8rn7prB9j7/x/n/IxiWJEXhRWztyocrzb+M9hEhvIESeIE3mpSbrWRmDTyWvdpDCnOvKJ5/W8APQ==",
			"dev": true
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
		"node_modules/@rollup/rollup-linux-x64-gnu": {
			"version": "4.28.0",
			"resolved": "https://registry.npmjs.org/@rollup/rollup-linux-x64-gnu/-/rollup-linux-x64-gnu-4.28.0.tgz",
			"integrity": "sha512-Nl4KIzteVEKE9BdAvYoTkW19pa7LR/RBrT6F1dJCV/3pbjwDcaOq+edkP0LXuJ9kflW/xOK414X78r+K84+msw==",
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
			"version": "4.28.0",
			"resolved": "https://registry.npmjs.org/@rollup/rollup-linux-x64-musl/-/rollup-linux-x64-musl-4.28.0.tgz",
			"integrity": "sha512-eKpJr4vBDOi4goT75MvW+0dXcNUqisK4jvibY9vDdlgLx+yekxSm55StsHbxUsRxSTt3JEQvlr3cGDkzcSP8bw==",
			"cpu": [
				"x64"
			],
			"dev": true,
			"optional": true,
			"os": [
				"linux"
			]
		},
		"node_modules/@sveltejs/vite-plugin-svelte": {
			"version": "5.0.1",
			"resolved": "https://registry.npmjs.org/@sveltejs/vite-plugin-svelte/-/vite-plugin-svelte-5.0.1.tgz",
			"integrity": "sha512-D5l5+STmywGoLST07T9mrqqFFU+xgv5fqyTWM+VbxTvQ6jujNn4h3lQNCvlwVYs4Erov8i0K5Rwr3LQtmBYmBw==",
			"dev": true,
			"dependencies": {
				"@sveltejs/vite-plugin-svelte-inspector": "^4.0.0",
				"debug": "^4.3.7",
				"deepmerge": "^4.3.1",
				"kleur": "^4.1.5",
				"magic-string": "^0.30.13",
				"vitefu": "^1.0.3"
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
		"node_modules/@tsconfig/svelte": {
			"version": "5.0.4",
			"resolved": "https://registry.npmjs.org/@tsconfig/svelte/-/svelte-5.0.4.tgz",
			"integrity": "sha512-BV9NplVgLmSi4mwKzD8BD/NQ8erOY/nUE/GpgWe2ckx+wIQF5RyRirn/QsSSCPeulVpc3RA/iJt6DpfTIZps0Q==",
			"dev": true
		},
		"node_modules/@types/estree": {
			"version": "1.0.6",
			"resolved": "https://registry.npmjs.org/@types/estree/-/estree-1.0.6.tgz",
			"integrity": "sha512-AYnb1nQyY49te+VRAVgmzfcgjYS91mY5P0TKUDCLEM+gNnA+3T6rWITXRLYCpahpqSQbN5cE+gHpnPyXjHWxcw==",
			"dev": true
		},
		"node_modules/acorn": {
			"version": "8.14.0",
			"resolved": "https://registry.npmjs.org/acorn/-/acorn-8.14.0.tgz",
			"integrity": "sha512-cl669nCJTZBsL97OF4kUQm5g5hC2uihk0NxY3WENAC0TYdILVkAyHymAntgxGkl7K+t0cXIrH5siy5S4XkFycA==",
			"dev": true,
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
			"peerDependencies": {
				"acorn": ">=8.9.0"
			}
		},
		"node_modules/ansi-regex": {
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
		"node_modules/ansi-styles": {
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
		"node_modules/arg": {
			"version": "5.0.2",
			"resolved": "https://registry.npmjs.org/arg/-/arg-5.0.2.tgz",
			"integrity": "sha512-PYjyFOLKQ9y57JvQ6QLo8dAgNqswh8M1RMJYdQduT6xbWSgK36P/Z/v+p888pM69jMMfS8Xd8F6I1kQ/I9HUGg==",
			"dev": true
		},
		"node_modules/aria-query": {
			"version": "5.3.2",
			"resolved": "https://registry.npmjs.org/aria-query/-/aria-query-5.3.2.tgz",
			"integrity": "sha512-COROpnaoap1E2F000S62r6A60uHZnmlvomhfyT2DlTcrY1OrBKn2UhH7qn5wTC9zMvD0AY7csdPSNwKP+7WiQw==",
			"dev": true,
			"engines": {
				"node": ">= 0.4"
			}
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
		"node_modules/axobject-query": {
			"version": "4.1.0",
			"resolved": "https://registry.npmjs.org/axobject-query/-/axobject-query-4.1.0.tgz",
			"integrity": "sha512-qIj0G9wZbMGNLjLmg1PT6v2mE9AH2zlnADJD/2tC6E00hgmhUOfEB6greHPAfLRSufHqROIUTkw6E+M3lH0PTQ==",
			"dev": true,
			"engines": {
				"node": ">= 0.4"
			}
		},
		"node_modules/balanced-match": {
			"version": "1.0.2",
			"resolved": "https://registry.npmjs.org/balanced-match/-/balanced-match-1.0.2.tgz",
			"integrity": "sha512-3oSeUO0TMV67hN1AmbXsK4yaqU7tjiHlbxRDZOpH0KW9+CeX4bRAaX0Anxt0tx2MrpRpWwQaPwIlISEJhYU5Pw==",
			"dev": true
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
			"version": "1.0.30001684",
			"resolved": "https://registry.npmjs.org/caniuse-lite/-/caniuse-lite-1.0.30001684.tgz",
			"integrity": "sha512-G1LRwLIQjBQoyq0ZJGqGIJUXzJ8irpbjHLpVRXDvBEScFJ9b17sgK6vlx0GAJFE21okD7zXl08rRRUfq6HdoEQ==",
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
		"node_modules/commander": {
			"version": "4.1.1",
			"resolved": "https://registry.npmjs.org/commander/-/commander-4.1.1.tgz",
			"integrity": "sha512-NOKm8xhkzAjzFx8B2v5OAHT+u5pRQc2UCa2Vq9jYL/31o2wi9mxBA7LIFs3sV5VSC49z6pEhfbMULvShKj26WA==",
			"dev": true,
			"engines": {
				"node": ">= 6"
			}
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
			"version": "4.12.14",
			"resolved": "https://registry.npmjs.org/daisyui/-/daisyui-4.12.14.tgz",
			"integrity": "sha512-hA27cdBasdwd4/iEjn+aidoCrRroDuo3G5W9NDKaVCJI437Mm/3eSL/2u7MkZ0pt8a+TrYF3aT2pFVemTS3how==",
			"dev": true,
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
		"node_modules/deepmerge": {
			"version": "4.3.1",
			"resolved": "https://registry.npmjs.org/deepmerge/-/deepmerge-4.3.1.tgz",
			"integrity": "sha512-3sUqbMEc77XqpdNO7FRyRog+eW3ph+GYCbj+rK+uYyRMuwsVy0rMiVtPn+QJlKFvWP/1PYpapqYn0Me2knFn+A==",
			"dev": true,
			"engines": {
				"node": ">=0.10.0"
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
			"version": "9.2.2",
			"resolved": "https://registry.npmjs.org/emoji-regex/-/emoji-regex-9.2.2.tgz",
			"integrity": "sha512-L18DaJsXSUk2+42pv8mLs5jJT2hqFkFE4j21wOmgbUqsZ2hL72NsUU785g9RXgo3s0ZNgVl42TiHp3ZtOv/Vyg==",
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
		"node_modules/esm-env": {
			"version": "1.2.1",
			"resolved": "https://registry.npmjs.org/esm-env/-/esm-env-1.2.1.tgz",
			"integrity": "sha512-U9JedYYjCnadUlXk7e1Kr+aENQhtUaoaV9+gZm1T8LC/YBAPJx3NSPIAurFOC0U5vrdSevnUJS2/wUVxGwPhng==",
			"dev": true
		},
		"node_modules/esrap": {
			"version": "1.2.3",
			"resolved": "https://registry.npmjs.org/esrap/-/esrap-1.2.3.tgz",
			"integrity": "sha512-ZlQmCCK+n7SGoqo7DnfKaP1sJZa49P01/dXzmjCASSo04p72w8EksT2NMK8CEX8DhKsfJXANioIw8VyHNsBfvQ==",
			"dev": true,
			"dependencies": {
				"@jridgewell/sourcemap-codec": "^1.4.15",
				"@types/estree": "^1.0.1"
			}
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
		"node_modules/fast-glob/node_modules/glob-parent": {
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
		"node_modules/function-bind": {
			"version": "1.1.2",
			"resolved": "https://registry.npmjs.org/function-bind/-/function-bind-1.1.2.tgz",
			"integrity": "sha512-7XHNxH7qX9xG5mIwxkhumTox/MIRNcOgDrxWsMt2pAr23WHp6MrRlN7FBSFpCpr+oVO0F744iUgR82nJMfG2SA==",
			"dev": true,
			"funding": {
				"url": "https://github.com/sponsors/ljharb"
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
		"node_modules/immutable": {
			"version": "5.0.3",
			"resolved": "https://registry.npmjs.org/immutable/-/immutable-5.0.3.tgz",
			"integrity": "sha512-P8IdPQHq3lA1xVeBRi5VPqUm5HDgKnx0Ru51wZz5mjxHr5n3RWhjIpOFU7ybkUxfB+5IToy+OLaHYDBIWsv+uw==",
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
		"node_modules/is-number": {
			"version": "7.0.0",
			"resolved": "https://registry.npmjs.org/is-number/-/is-number-7.0.0.tgz",
			"integrity": "sha512-41Cifkg6e8TylSpdtTpeLVMqvSBEVzTttHvERD741+pnZ8ANv0004MRL43QKPDlK9cGvNp6NZWZUBlbGXYxxng==",
			"dev": true,
			"engines": {
				"node": ">=0.12.0"
			}
		},
		"node_modules/is-reference": {
			"version": "3.0.3",
			"resolved": "https://registry.npmjs.org/is-reference/-/is-reference-3.0.3.tgz",
			"integrity": "sha512-ixkJoqQvAP88E6wLydLGGqCJsrFUnqoH6HnaczB8XmDH1oaWU+xxdptvikTgaEhtZ53Ky6YXiBuUI2WXLMCwjw==",
			"dev": true,
			"dependencies": {
				"@types/estree": "^1.0.6"
			}
		},
		"node_modules/isexe": {
			"version": "2.0.0",
			"resolved": "https://registry.npmjs.org/isexe/-/isexe-2.0.0.tgz",
			"integrity": "sha512-RHxMLp9lnKHGHRng9QFhRCMbYAcVpn69smSGcq3f36xjgVVWThj4qqLbTLlq7Ssj8B+fIQ1EuCEGI2lKsyQeIw==",
			"dev": true
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
		"node_modules/kleur": {
			"version": "4.1.5",
			"resolved": "https://registry.npmjs.org/kleur/-/kleur-4.1.5.tgz",
			"integrity": "sha512-o+NO+8WrRiQEE4/7nwRJhN1HWpVmJm511pBHUxPLtp0BUISzlBplORYSmTclCnJvQq2tKu/sgl3xVpkc7ZWuQQ==",
			"dev": true,
			"engines": {
				"node": ">=6"
			}
		},
		"node_modules/lilconfig": {
			"version": "2.1.0",
			"resolved": "https://registry.npmjs.org/lilconfig/-/lilconfig-2.1.0.tgz",
			"integrity": "sha512-utWOt/GHzuUxnLKxB6dk81RoOeoNeHgbrXiuGk4yyF5qlRz+iIVWu56E2fqGHFrXz0QNUhLB/8nKqvRH66JKGQ==",
			"dev": true,
			"engines": {
				"node": ">=10"
			}
		},
		"node_modules/lines-and-columns": {
			"version": "1.2.4",
			"resolved": "https://registry.npmjs.org/lines-and-columns/-/lines-and-columns-1.2.4.tgz",
			"integrity": "sha512-7ylylesZQ/PV29jhEDl3Ufjo6ZX7gCqJr5F7PKrqc93v7fzSymt1BpwEU8nAUXs8qzzvqhbjhK5QZg6Mt/HkBg==",
			"dev": true
		},
		"node_modules/locate-character": {
			"version": "3.0.0",
			"resolved": "https://registry.npmjs.org/locate-character/-/locate-character-3.0.0.tgz",
			"integrity": "sha512-SW13ws7BjaeJ6p7Q6CO2nchbYEc3X3J6WrmTTDto7yMPqVSZTUyY5Tjbid+Ab8gLnATtygYtiDIJGQRRn2ZOiA==",
			"dev": true
		},
		"node_modules/lru-cache": {
			"version": "10.4.3",
			"resolved": "https://registry.npmjs.org/lru-cache/-/lru-cache-10.4.3.tgz",
			"integrity": "sha512-JNAzZcXrCt42VGLuYz0zfAzDfAvJWW6AfYlDBQyDV5DClI2m5sAmK+OIO7s59XfsRsWHp02jAJrRadPRGTt6SQ==",
			"dev": true
		},
		"node_modules/magic-string": {
			"version": "0.30.14",
			"resolved": "https://registry.npmjs.org/magic-string/-/magic-string-0.30.14.tgz",
			"integrity": "sha512-5c99P1WKTed11ZC0HMJOj6CDIue6F8ySu+bJL+85q1zBEIY8IklrJ1eiKC2NDRh3Ct3FcvmJPyQHb9erXMTJNw==",
			"dev": true,
			"dependencies": {
				"@jridgewell/sourcemap-codec": "^1.5.0"
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
		"node_modules/mri": {
			"version": "1.2.0",
			"resolved": "https://registry.npmjs.org/mri/-/mri-1.2.0.tgz",
			"integrity": "sha512-tzzskb3bG8LvYGFF/mDTpq3jpI6Q9wc3LEmBaghu+DdCssd1FakN7Bc0hVNmEyGq1bq3RgfkCb3cmQLpNPOroA==",
			"dev": true,
			"engines": {
				"node": ">=4"
			}
		},
		"node_modules/ms": {
			"version": "2.1.3",
			"resolved": "https://registry.npmjs.org/ms/-/ms-2.1.3.tgz",
			"integrity": "sha512-6FlzubTLZG3J2a/NVCAleEhjzq5oxgHyaCU9yYXvcLsvoVaHJq/s5xXI6/XXP6tz7R9xAOtHnSO/tXtF3WRTlA==",
			"dev": true
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
		"node_modules/package-json-from-dist": {
			"version": "1.0.1",
			"resolved": "https://registry.npmjs.org/package-json-from-dist/-/package-json-from-dist-1.0.1.tgz",
			"integrity": "sha512-UEZIS3/by4OC8vL3P2dTXRETpebLI2NiI5vIrjaD/5UtrkFX/tNbwjTSRAGC/+7CAo2pIcBaRgWmcBBHcsaCIw==",
			"dev": true
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
			"engines": {
				"node": ">=8.6"
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
		"node_modules/postcss-load-config/node_modules/lilconfig": {
			"version": "3.1.2",
			"resolved": "https://registry.npmjs.org/lilconfig/-/lilconfig-3.1.2.tgz",
			"integrity": "sha512-eop+wDAvpItUys0FWkHIKeC9ybYrTGbU41U5K7+bttZZeohvnY7M9dZ5kB21GNWiFT2q1OoPTvncPCgSOVO5ow==",
			"dev": true,
			"engines": {
				"node": ">=14"
			},
			"funding": {
				"url": "https://github.com/sponsors/antonk52"
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
		"node_modules/rollup": {
			"version": "4.28.0",
			"resolved": "https://registry.npmjs.org/rollup/-/rollup-4.28.0.tgz",
			"integrity": "sha512-G9GOrmgWHBma4YfCcX8PjH0qhXSdH8B4HDE2o4/jaxj93S4DPCIDoLcXz99eWMji4hB29UFCEd7B2gwGJDR9cQ==",
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
				"@rollup/rollup-android-arm-eabi": "4.28.0",
				"@rollup/rollup-android-arm64": "4.28.0",
				"@rollup/rollup-darwin-arm64": "4.28.0",
				"@rollup/rollup-darwin-x64": "4.28.0",
				"@rollup/rollup-freebsd-arm64": "4.28.0",
				"@rollup/rollup-freebsd-x64": "4.28.0",
				"@rollup/rollup-linux-arm-gnueabihf": "4.28.0",
				"@rollup/rollup-linux-arm-musleabihf": "4.28.0",
				"@rollup/rollup-linux-arm64-gnu": "4.28.0",
				"@rollup/rollup-linux-arm64-musl": "4.28.0",
				"@rollup/rollup-linux-powerpc64le-gnu": "4.28.0",
				"@rollup/rollup-linux-riscv64-gnu": "4.28.0",
				"@rollup/rollup-linux-s390x-gnu": "4.28.0",
				"@rollup/rollup-linux-x64-gnu": "4.28.0",
				"@rollup/rollup-linux-x64-musl": "4.28.0",
				"@rollup/rollup-win32-arm64-msvc": "4.28.0",
				"@rollup/rollup-win32-ia32-msvc": "4.28.0",
				"@rollup/rollup-win32-x64-msvc": "4.28.0",
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
		"node_modules/sade": {
			"version": "1.8.1",
			"resolved": "https://registry.npmjs.org/sade/-/sade-1.8.1.tgz",
			"integrity": "sha512-xal3CZX1Xlo/k4ApwCFrHVACi9fBqJ7V+mwhBsuf/1IOKbBy098Fex+Wa/5QMubw09pSZ/u8EY8PWgevJsXp1A==",
			"dev": true,
			"dependencies": {
				"mri": "^1.1.0"
			},
			"engines": {
				"node": ">=6"
			}
		},
		"node_modules/sass": {
			"version": "1.81.0",
			"resolved": "https://registry.npmjs.org/sass/-/sass-1.81.0.tgz",
			"integrity": "sha512-Q4fOxRfhmv3sqCLoGfvrC9pRV8btc0UtqL9mN6Yrv6Qi9ScL55CVH1vlPP863ISLEEMNLLuu9P+enCeGHlnzhA==",
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
		"node_modules/source-map-js": {
			"version": "1.2.1",
			"resolved": "https://registry.npmjs.org/source-map-js/-/source-map-js-1.2.1.tgz",
			"integrity": "sha512-UXWMKhLOwVKb728IUtQPXxfYU+usdybtUrK/8uGE8CQMvrhOpwvzDBwj0QhSL7MQc7vIsISBG8VQ8+IDQxpfQA==",
			"dev": true,
			"engines": {
				"node": ">=0.10.0"
			}
		},
		"node_modules/string-width": {
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
		"node_modules/string-width-cjs/node_modules/ansi-regex": {
			"version": "5.0.1",
			"resolved": "https://registry.npmjs.org/ansi-regex/-/ansi-regex-5.0.1.tgz",
			"integrity": "sha512-quJQXlTSUGL2LH9SUXo8VwsY4soanhgo6LNSm84E1LBcE8s3O0wpdiRzyR9z/ZZJMlMWv37qOOb9pdJlMUEKFQ==",
			"dev": true,
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
		"node_modules/string-width-cjs/node_modules/strip-ansi": {
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
		"node_modules/strip-ansi": {
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
		"node_modules/strip-ansi-cjs/node_modules/ansi-regex": {
			"version": "5.0.1",
			"resolved": "https://registry.npmjs.org/ansi-regex/-/ansi-regex-5.0.1.tgz",
			"integrity": "sha512-quJQXlTSUGL2LH9SUXo8VwsY4soanhgo6LNSm84E1LBcE8s3O0wpdiRzyR9z/ZZJMlMWv37qOOb9pdJlMUEKFQ==",
			"dev": true,
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
		"node_modules/svelte": {
			"version": "5.3.1",
			"resolved": "https://registry.npmjs.org/svelte/-/svelte-5.3.1.tgz",
			"integrity": "sha512-Y6PXppQhIZZ0HLZKj6UMV/VZPJbHiK98K8A5M7mJ+PGrz4erUmuDRUa8l7aw4La++Vl51YWzLUuuB0FZ7JPfnw==",
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
				"esm-env": "^1.2.1",
				"esrap": "^1.2.3",
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
			"version": "4.1.0",
			"resolved": "https://registry.npmjs.org/svelte-check/-/svelte-check-4.1.0.tgz",
			"integrity": "sha512-AflEZYqI578KuDZcpcorPSf597LStxlkN7XqXi38u09zlHODVKd7c+7OuubGzbhgGRUqNTdQCZ+Ga96iRXEf2g==",
			"dev": true,
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
			"version": "6.4.2",
			"resolved": "https://registry.npmjs.org/fdir/-/fdir-6.4.2.tgz",
			"integrity": "sha512-KnhMXsKSPZlAhp7+IjUkRZKPb4fUyccpDrdFXbi4QL1qkmFh9kVY09Yox+n4MaOb3lHZ1Tv829C3oaaXoMYPDQ==",
			"dev": true,
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
			"optional": true,
			"peer": true,
			"engines": {
				"node": ">=12"
			},
			"funding": {
				"url": "https://github.com/sponsors/jonschlinkert"
			}
		},
		"node_modules/tailwindcss": {
			"version": "3.4.15",
			"resolved": "https://registry.npmjs.org/tailwindcss/-/tailwindcss-3.4.15.tgz",
			"integrity": "sha512-r4MeXnfBmSOuKUWmXe6h2CcyfzJCEk4F0pptO5jlnYSIViUkVmsawj80N5h2lO3gwcmSb4n3PuN+e+GC1Guylw==",
			"dev": true,
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
				"lilconfig": "^2.1.0",
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
			"dependencies": {
				"is-glob": "^4.0.1"
			},
			"engines": {
				"node": ">= 6"
			}
		},
		"node_modules/tailwindcss/node_modules/readdirp": {
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
		"node_modules/vite": {
			"version": "6.0.2",
			"resolved": "https://registry.npmjs.org/vite/-/vite-6.0.2.tgz",
			"integrity": "sha512-XdQ+VsY2tJpBsKGs0wf3U/+azx8BBpYRHFAyKm5VeEZNOJZRB63q7Sc8Iup3k0TrN3KO6QgyzFf+opSbfY1y0g==",
			"dev": true,
			"license": "MIT",
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
		"node_modules/vitefu": {
			"version": "1.0.4",
			"resolved": "https://registry.npmjs.org/vitefu/-/vitefu-1.0.4.tgz",
			"integrity": "sha512-y6zEE3PQf6uu/Mt6DTJ9ih+kyJLr4XcSgHR2zUkM8SWDhuixEJxfJ6CZGMHh1Ec3vPLoEA0IHU5oWzVqw8ulow==",
			"dev": true,
			"peerDependencies": {
				"vite": "^3.0.0 || ^4.0.0 || ^5.0.0 || ^6.0.0"
			},
			"peerDependenciesMeta": {
				"vite": {
					"optional": true
				}
			}
		},
		"node_modules/which": {
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
		"node_modules/wrap-ansi": {
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
		"node_modules/wrap-ansi-cjs/node_modules/ansi-regex": {
			"version": "5.0.1",
			"resolved": "https://registry.npmjs.org/ansi-regex/-/ansi-regex-5.0.1.tgz",
			"integrity": "sha512-quJQXlTSUGL2LH9SUXo8VwsY4soanhgo6LNSm84E1LBcE8s3O0wpdiRzyR9z/ZZJMlMWv37qOOb9pdJlMUEKFQ==",
			"dev": true,
			"engines": {
				"node": ">=8"
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
		"node_modules/wrap-ansi-cjs/node_modules/emoji-regex": {
			"version": "8.0.0",
			"resolved": "https://registry.npmjs.org/emoji-regex/-/emoji-regex-8.0.0.tgz",
			"integrity": "sha512-MSjYzcWNOA0ewAHpz0MxpYFvwg6yjy1NG3xteoqz644VCo/RPgnr1/GGt+ic3iJTzQ8Eu3TdM14SawnVUmGE6A==",
			"dev": true
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
		"node_modules/wrap-ansi-cjs/node_modules/strip-ansi": {
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
		"node_modules/zimmerframe": {
			"version": "1.1.2",
			"resolved": "https://registry.npmjs.org/zimmerframe/-/zimmerframe-1.1.2.tgz",
			"integrity": "sha512-rAbqEGa8ovJy4pyBxZM70hg4pE6gDgaQ0Sl9M3enG3I0d6H4XSAM3GeNGLKnsBpuijUow064sf7ww1nutC5/3w==",
			"dev": true
		}
	}
}
`;export{t as default};