const t=`{
	"name": "agnos-ui-svelte-stackblitz-demo",
	"version": "0.4.0-next.0",
	"lockfileVersion": 3,
	"requires": true,
	"packages": {
		"": {
			"name": "agnos-ui-svelte-stackblitz-demo",
			"version": "0.4.0-next.0",
			"devDependencies": {
				"@agnos-ui/svelte-bootstrap": "0.4.0-next.0",
				"@agnos-ui/svelte-preprocess": "0.4.0-next.0",
				"@amadeus-it-group/tansu": "^1.0.0",
				"@floating-ui/dom": "^1.6.5",
				"@sveltejs/vite-plugin-svelte": "^3.1.1",
				"@tsconfig/svelte": "^5.0.4",
				"bootstrap-icons": "^1.11.3",
				"sass": "^1.77.6",
				"svelte": "^4.2.18",
				"svelte-check": "^3.8.1",
				"tslib": "^2.6.3",
				"typescript": "~5.4.5",
				"vite": "^5.3.1"
			}
		},
		"node_modules/@agnos-ui/core": {
			"version": "0.4.0-next.0",
			"resolved": "https://registry.npmjs.org/@agnos-ui/core/-/core-0.4.0-next.0.tgz",
			"integrity": "sha512-bk3tF+TiD0J6mV178Xaole3JL5mxPCZPUj01Cck5GR2zzvai9HrvE6a37Krk8IqOgf3/dBLKaTkpC5/yFh1J2w==",
			"dev": true,
			"peerDependencies": {
				"@amadeus-it-group/tansu": "^1.0.0",
				"@floating-ui/dom": "^1.6.5",
				"esm-env": "^1.0.0"
			}
		},
		"node_modules/@agnos-ui/core-bootstrap": {
			"version": "0.4.0-next.0",
			"resolved": "https://registry.npmjs.org/@agnos-ui/core-bootstrap/-/core-bootstrap-0.4.0-next.0.tgz",
			"integrity": "sha512-YG3QDo3k/LdlfGF341GWHgQqYsWSlce5TWRDN9f9Xnpc48QkMy3MGWEMPzuS3qBMhxmkpo/y42rVlj/KMbuaIw==",
			"dev": true,
			"dependencies": {
				"@agnos-ui/core": "0.4.0-next.0"
			}
		},
		"node_modules/@agnos-ui/svelte-bootstrap": {
			"version": "0.4.0-next.0",
			"resolved": "https://registry.npmjs.org/@agnos-ui/svelte-bootstrap/-/svelte-bootstrap-0.4.0-next.0.tgz",
			"integrity": "sha512-VFxJJHVK1tw6aZnF1+2qy851d+EIBMdhMi/tgGKWbFiuR53R73o2Y0nXib5lGsntJK9rk3NDEq1oJnUwEarABw==",
			"dev": true,
			"dependencies": {
				"@agnos-ui/core-bootstrap": "0.4.0-next.0",
				"@agnos-ui/svelte-headless": "0.4.0-next.0"
			},
			"peerDependencies": {
				"@amadeus-it-group/tansu": "^1.0.0",
				"esm-env": "^1.0.0",
				"svelte": "^4.2.18"
			}
		},
		"node_modules/@agnos-ui/svelte-headless": {
			"version": "0.4.0-next.0",
			"resolved": "https://registry.npmjs.org/@agnos-ui/svelte-headless/-/svelte-headless-0.4.0-next.0.tgz",
			"integrity": "sha512-dr4J3aFg2qqQNFDcZIm2VFlUMdWyC1MUGvsMJKMf4pA3aWYCxXzuHDTi5NFqrkc/XzXlOZ/kOZGkw4bMQKcjKg==",
			"dev": true,
			"dependencies": {
				"@agnos-ui/core": "0.4.0-next.0"
			},
			"peerDependencies": {
				"@amadeus-it-group/tansu": "^1.0.0",
				"svelte": "^4.2.18"
			}
		},
		"node_modules/@agnos-ui/svelte-preprocess": {
			"version": "0.4.0-next.0",
			"resolved": "https://registry.npmjs.org/@agnos-ui/svelte-preprocess/-/svelte-preprocess-0.4.0-next.0.tgz",
			"integrity": "sha512-7czxfL2xOIfhIFBkJrKan144mPMHp4HmlQ3PGuOu+G7UyWiylAiWkJVQEjLWW2UEnawT57mmwlAWKR2Epb7Q/w==",
			"dev": true,
			"dependencies": {
				"magic-string": "^0.30.10"
			},
			"peerDependencies": {
				"svelte": "^4.2.18"
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
		"node_modules/@floating-ui/core": {
			"version": "1.6.2",
			"resolved": "https://registry.npmjs.org/@floating-ui/core/-/core-1.6.2.tgz",
			"integrity": "sha512-+2XpQV9LLZeanU4ZevzRnGFg2neDeKHgFLjP6YLW+tly0IvrhqT4u8enLGjLH3qeh85g19xY5rsAusfwTdn5lg==",
			"dev": true,
			"license": "MIT",
			"dependencies": {
				"@floating-ui/utils": "^0.2.0"
			}
		},
		"node_modules/@floating-ui/dom": {
			"version": "1.6.5",
			"resolved": "https://registry.npmjs.org/@floating-ui/dom/-/dom-1.6.5.tgz",
			"integrity": "sha512-Nsdud2X65Dz+1RHjAIP0t8z5e2ff/IRbei6BqFrl1urT8sDVzM1HMQ+R0XcU5ceRfyO3I6ayeqIfh+6Wb8LGTw==",
			"dev": true,
			"license": "MIT",
			"dependencies": {
				"@floating-ui/core": "^1.0.0",
				"@floating-ui/utils": "^0.2.0"
			}
		},
		"node_modules/@floating-ui/utils": {
			"version": "0.2.2",
			"resolved": "https://registry.npmjs.org/@floating-ui/utils/-/utils-0.2.2.tgz",
			"integrity": "sha512-J4yDIIthosAsRZ5CPYP/jQvUAQtlZTTD/4suA08/FEnlxqW3sKS9iAhgsa9VYLZ6vDHn/ixJgIqRQPotoBjxIw==",
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
			"version": "1.4.15",
			"resolved": "https://registry.npmjs.org/@jridgewell/sourcemap-codec/-/sourcemap-codec-1.4.15.tgz",
			"integrity": "sha512-eF2rxCRulEKXHTRiDrDy6erMYWqNw4LPdQ8UQA4huuxaQsVeRPFl2oM8oDGxMFhJUWZf9McpLtJasDDZb/Bpeg==",
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
		"node_modules/@rollup/rollup-linux-x64-gnu": {
			"version": "4.18.0",
			"resolved": "https://registry.npmjs.org/@rollup/rollup-linux-x64-gnu/-/rollup-linux-x64-gnu-4.18.0.tgz",
			"integrity": "sha512-xuglR2rBVHA5UsI8h8UbX4VJ470PtGCf5Vpswh7p2ukaqBGFTnsfzxUBetoWBWymHMxbIG0Cmx7Y9qDZzr648w==",
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
			"version": "4.18.0",
			"resolved": "https://registry.npmjs.org/@rollup/rollup-linux-x64-musl/-/rollup-linux-x64-musl-4.18.0.tgz",
			"integrity": "sha512-LKaqQL9osY/ir2geuLVvRRs+utWUNilzdE90TpyoX0eNqPzWjRm14oMEE+YLve4k/NAqCdPkGYDaDF5Sw+xBfg==",
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
		"node_modules/@sveltejs/vite-plugin-svelte": {
			"version": "3.1.1",
			"resolved": "https://registry.npmjs.org/@sveltejs/vite-plugin-svelte/-/vite-plugin-svelte-3.1.1.tgz",
			"integrity": "sha512-rimpFEAboBBHIlzISibg94iP09k/KYdHgVhJlcsTfn7KMBhc70jFX/GRWkRdFCc2fdnk+4+Bdfej23cMDnJS6A==",
			"dev": true,
			"license": "MIT",
			"dependencies": {
				"@sveltejs/vite-plugin-svelte-inspector": "^2.1.0",
				"debug": "^4.3.4",
				"deepmerge": "^4.3.1",
				"kleur": "^4.1.5",
				"magic-string": "^0.30.10",
				"svelte-hmr": "^0.16.0",
				"vitefu": "^0.2.5"
			},
			"engines": {
				"node": "^18.0.0 || >=20"
			},
			"peerDependencies": {
				"svelte": "^4.0.0 || ^5.0.0-next.0",
				"vite": "^5.0.0"
			}
		},
		"node_modules/@sveltejs/vite-plugin-svelte-inspector": {
			"version": "2.1.0",
			"resolved": "https://registry.npmjs.org/@sveltejs/vite-plugin-svelte-inspector/-/vite-plugin-svelte-inspector-2.1.0.tgz",
			"integrity": "sha512-9QX28IymvBlSCqsCll5t0kQVxipsfhFFL+L2t3nTWfXnddYwxBuAEtTtlaVQpRz9c37BhJjltSeY4AJSC03SSg==",
			"dev": true,
			"license": "MIT",
			"dependencies": {
				"debug": "^4.3.4"
			},
			"engines": {
				"node": "^18.0.0 || >=20"
			},
			"peerDependencies": {
				"@sveltejs/vite-plugin-svelte": "^3.0.0",
				"svelte": "^4.0.0 || ^5.0.0-next.0",
				"vite": "^5.0.0"
			}
		},
		"node_modules/@tsconfig/svelte": {
			"version": "5.0.4",
			"resolved": "https://registry.npmjs.org/@tsconfig/svelte/-/svelte-5.0.4.tgz",
			"integrity": "sha512-BV9NplVgLmSi4mwKzD8BD/NQ8erOY/nUE/GpgWe2ckx+wIQF5RyRirn/QsSSCPeulVpc3RA/iJt6DpfTIZps0Q==",
			"dev": true,
			"license": "MIT"
		},
		"node_modules/@types/estree": {
			"version": "1.0.5",
			"resolved": "https://registry.npmjs.org/@types/estree/-/estree-1.0.5.tgz",
			"integrity": "sha512-/kYRxGDLWzHOB7q+wtSUQlFrtcdUccpfy+X+9iMBpHK8QLLhx2wIPYuS5DYtR9Wa/YlZAbIovy7qVdB1Aq6Lyw==",
			"dev": true,
			"license": "MIT"
		},
		"node_modules/@types/pug": {
			"version": "2.0.10",
			"resolved": "https://registry.npmjs.org/@types/pug/-/pug-2.0.10.tgz",
			"integrity": "sha512-Sk/uYFOBAB7mb74XcpizmH0KOR2Pv3D2Hmrh1Dmy5BmK3MpdSa5kqZcg6EKBdklU0bFXX9gCfzvpnyUehrPIuA==",
			"dev": true,
			"license": "MIT"
		},
		"node_modules/acorn": {
			"version": "8.12.0",
			"resolved": "https://registry.npmjs.org/acorn/-/acorn-8.12.0.tgz",
			"integrity": "sha512-RTvkC4w+KNXrM39/lWCUaG0IbRkWdCv7W/IOW9oU6SawyxulvkQy5HQPVTKxEjczcUvapcrw3cFx/60VN/NRNw==",
			"dev": true,
			"license": "MIT",
			"bin": {
				"acorn": "bin/acorn"
			},
			"engines": {
				"node": ">=0.4.0"
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
		"node_modules/aria-query": {
			"version": "5.3.0",
			"resolved": "https://registry.npmjs.org/aria-query/-/aria-query-5.3.0.tgz",
			"integrity": "sha512-b0P0sZPKtyu8HkeRAfCq0IfURZK+SuwMjY1UXGBU27wpAiTwQAIlq56IbIO+ytk/JjS1fMR14ee5WBBfKi5J6A==",
			"dev": true,
			"license": "Apache-2.0",
			"dependencies": {
				"dequal": "^2.0.3"
			}
		},
		"node_modules/axobject-query": {
			"version": "4.0.0",
			"resolved": "https://registry.npmjs.org/axobject-query/-/axobject-query-4.0.0.tgz",
			"integrity": "sha512-+60uv1hiVFhHZeO+Lz0RYzsVHy5Wr1ayX0mwda9KPDVLNJgZ1T9Ny7VmFbLDzxsH0D87I86vgj3gFrjTJUYznw==",
			"dev": true,
			"license": "Apache-2.0",
			"dependencies": {
				"dequal": "^2.0.3"
			}
		},
		"node_modules/balanced-match": {
			"version": "1.0.2",
			"resolved": "https://registry.npmjs.org/balanced-match/-/balanced-match-1.0.2.tgz",
			"integrity": "sha512-3oSeUO0TMV67hN1AmbXsK4yaqU7tjiHlbxRDZOpH0KW9+CeX4bRAaX0Anxt0tx2MrpRpWwQaPwIlISEJhYU5Pw==",
			"dev": true,
			"license": "MIT"
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
		"node_modules/brace-expansion": {
			"version": "1.1.11",
			"resolved": "https://registry.npmjs.org/brace-expansion/-/brace-expansion-1.1.11.tgz",
			"integrity": "sha512-iCuPHDFgrHX7H2vEI/5xpz07zSHB00TpugqhmYtVmMO6518mCuRMoOYFldEBl0g187ufozdaHgWKcYFb61qGiA==",
			"dev": true,
			"license": "MIT",
			"dependencies": {
				"balanced-match": "^1.0.0",
				"concat-map": "0.0.1"
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
		"node_modules/buffer-crc32": {
			"version": "1.0.0",
			"resolved": "https://registry.npmjs.org/buffer-crc32/-/buffer-crc32-1.0.0.tgz",
			"integrity": "sha512-Db1SbgBS/fg/392AblrMJk97KggmvYhr4pB5ZIMTWtaivCPMWLkmb7m21cJvpvgK+J3nsU2CmmixNBZx4vFj/w==",
			"dev": true,
			"license": "MIT",
			"engines": {
				"node": ">=8.0.0"
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
		"node_modules/code-red": {
			"version": "1.0.4",
			"resolved": "https://registry.npmjs.org/code-red/-/code-red-1.0.4.tgz",
			"integrity": "sha512-7qJWqItLA8/VPVlKJlFXU+NBlo/qyfs39aJcuMT/2ere32ZqvF5OSxgdM5xOfJJ7O429gg2HM47y8v9P+9wrNw==",
			"dev": true,
			"license": "MIT",
			"dependencies": {
				"@jridgewell/sourcemap-codec": "^1.4.15",
				"@types/estree": "^1.0.1",
				"acorn": "^8.10.0",
				"estree-walker": "^3.0.3",
				"periscopic": "^3.1.0"
			}
		},
		"node_modules/concat-map": {
			"version": "0.0.1",
			"resolved": "https://registry.npmjs.org/concat-map/-/concat-map-0.0.1.tgz",
			"integrity": "sha512-/Srv4dswyQNBfohGpz9o6Yb3Gz3SrUDqBH5rTuhGR7ahtlbYKnVxw2bCFMRljaA7EXHaXZ8wsHdodFvbkhKmqg==",
			"dev": true,
			"license": "MIT"
		},
		"node_modules/css-tree": {
			"version": "2.3.1",
			"resolved": "https://registry.npmjs.org/css-tree/-/css-tree-2.3.1.tgz",
			"integrity": "sha512-6Fv1DV/TYw//QF5IzQdqsNDjx/wc8TrMBZsqjL9eW01tWb7R7k/mq+/VXfJCl7SoD5emsJop9cOByJZfs8hYIw==",
			"dev": true,
			"license": "MIT",
			"dependencies": {
				"mdn-data": "2.0.30",
				"source-map-js": "^1.0.1"
			},
			"engines": {
				"node": "^10 || ^12.20.0 || ^14.13.0 || >=15.0.0"
			}
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
		"node_modules/dequal": {
			"version": "2.0.3",
			"resolved": "https://registry.npmjs.org/dequal/-/dequal-2.0.3.tgz",
			"integrity": "sha512-0je+qPKHEMohvfRTCEo3CrPG6cAzAYgmzKyxRiYSSDkS6eGJdyVJm7WaYA5ECaAD9wLB2T4EEeymA5aFVcYXCA==",
			"dev": true,
			"license": "MIT",
			"engines": {
				"node": ">=6"
			}
		},
		"node_modules/detect-indent": {
			"version": "6.1.0",
			"resolved": "https://registry.npmjs.org/detect-indent/-/detect-indent-6.1.0.tgz",
			"integrity": "sha512-reYkTUJAZb9gUuZ2RvVCNhVHdg62RHnJ7WJl8ftMi4diZ6NWlciOzQN88pUhSELEwflJht4oQDv0F0BMlwaYtA==",
			"dev": true,
			"license": "MIT",
			"engines": {
				"node": ">=8"
			}
		},
		"node_modules/es6-promise": {
			"version": "3.3.1",
			"resolved": "https://registry.npmjs.org/es6-promise/-/es6-promise-3.3.1.tgz",
			"integrity": "sha512-SOp9Phqvqn7jtEUxPWdWfWoLmyt2VaJ6MpvP9Comy1MceMXqE6bxvaTu4iaxpYYPzhny28Lc+M87/c2cPK6lDg==",
			"dev": true,
			"license": "MIT"
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
		"node_modules/esm-env": {
			"version": "1.0.0",
			"resolved": "https://registry.npmjs.org/esm-env/-/esm-env-1.0.0.tgz",
			"integrity": "sha512-Cf6VksWPsTuW01vU9Mk/3vRue91Zevka5SjyNf3nEpokFRuqt/KjUQoGAwq9qMmhpLTHmXzSIrFRw8zxWzmFBA==",
			"dev": true,
			"peer": true
		},
		"node_modules/estree-walker": {
			"version": "3.0.3",
			"resolved": "https://registry.npmjs.org/estree-walker/-/estree-walker-3.0.3.tgz",
			"integrity": "sha512-7RUKfXgSMMkzt6ZuXmqapOurLGPPfgj6l9uRZ7lRGolvk0y2yocc35LdcxKC5PQZdn2DMqioAQ2NoWcrTKmm6g==",
			"dev": true,
			"license": "MIT",
			"dependencies": {
				"@types/estree": "^1.0.0"
			}
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
		"node_modules/fs.realpath": {
			"version": "1.0.0",
			"resolved": "https://registry.npmjs.org/fs.realpath/-/fs.realpath-1.0.0.tgz",
			"integrity": "sha512-OO0pH2lK6a0hZnAdau5ItzHPI6pUlvI7jMVnxUQRtw4owF2wk8lOSabtGDCTP4Ggrg2MbGnWO9X8K1t4+fGMDw==",
			"dev": true,
			"license": "ISC"
		},
		"node_modules/glob": {
			"version": "7.2.3",
			"resolved": "https://registry.npmjs.org/glob/-/glob-7.2.3.tgz",
			"integrity": "sha512-nFR0zLpU2YCaRxwoCJvL6UvCH2JFyFVIvwTLsIf21AuHlMskA1hhTdk+LlYJtOlYt9v6dvszD2BGRqBL+iQK9Q==",
			"deprecated": "Glob versions prior to v9 are no longer supported",
			"dev": true,
			"license": "ISC",
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
		"node_modules/graceful-fs": {
			"version": "4.2.11",
			"resolved": "https://registry.npmjs.org/graceful-fs/-/graceful-fs-4.2.11.tgz",
			"integrity": "sha512-RbJ5/jmFcNNCcDV5o9eTnBLJ/HszWV0P73bc+Ff4nS/rJj+YaS6IGyiOL0VoBYX+l1Wrl3k63h/KrH+nhJ0XvQ==",
			"dev": true,
			"license": "ISC"
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
		"node_modules/inflight": {
			"version": "1.0.6",
			"resolved": "https://registry.npmjs.org/inflight/-/inflight-1.0.6.tgz",
			"integrity": "sha512-k92I/b08q4wvFscXCLvqfsHCrjrF7yiXsQuIVvVE7N82W3+aqpzuUdBbfhWcy/FZR3/4IgflMgKLOsvPDrGCJA==",
			"deprecated": "This module is not supported, and leaks memory. Do not use it. Check out lru-cache if you want a good and tested way to coalesce async requests by a key value, which is much more comprehensive and powerful.",
			"dev": true,
			"license": "ISC",
			"dependencies": {
				"once": "^1.3.0",
				"wrappy": "1"
			}
		},
		"node_modules/inherits": {
			"version": "2.0.4",
			"resolved": "https://registry.npmjs.org/inherits/-/inherits-2.0.4.tgz",
			"integrity": "sha512-k/vGaX4/Yla3WzyMCvTQOXYeIHvqOKtnqBduzTHpzpQZzAskKMhZ2K+EnBiSM9zGSoIFeMpXKxa4dYeZIQqewQ==",
			"dev": true,
			"license": "ISC"
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
		"node_modules/is-reference": {
			"version": "3.0.2",
			"resolved": "https://registry.npmjs.org/is-reference/-/is-reference-3.0.2.tgz",
			"integrity": "sha512-v3rht/LgVcsdZa3O2Nqs+NMowLOxeOm7Ay9+/ARQ2F+qEoANRcqrjAZKGN0v8ymUetZGgkp26LTnGT7H0Qo9Pg==",
			"dev": true,
			"license": "MIT",
			"dependencies": {
				"@types/estree": "*"
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
			"version": "0.30.10",
			"resolved": "https://registry.npmjs.org/magic-string/-/magic-string-0.30.10.tgz",
			"integrity": "sha512-iIRwTIf0QKV3UAnYK4PU8uiEc4SRh5jX0mwpIwETPpHdhVM4f53RSwS/vXvN1JhGX+Cs7B8qIq3d6AH49O5fAQ==",
			"dev": true,
			"license": "MIT",
			"dependencies": {
				"@jridgewell/sourcemap-codec": "^1.4.15"
			}
		},
		"node_modules/mdn-data": {
			"version": "2.0.30",
			"resolved": "https://registry.npmjs.org/mdn-data/-/mdn-data-2.0.30.tgz",
			"integrity": "sha512-GaqWWShW4kv/G9IEucWScBx9G1/vsFZZJUO+tD26M8J8z3Kw5RDQjaoZe03YAClgeS/SWPOcb4nkFBTEi5DUEA==",
			"dev": true,
			"license": "CC0-1.0"
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
		"node_modules/micromatch": {
			"version": "4.0.7",
			"resolved": "https://registry.npmjs.org/micromatch/-/micromatch-4.0.7.tgz",
			"integrity": "sha512-LPP/3KorzCwBxfeUuZmaR6bG2kdeHSbe0P2tY3FLRU4vYrjYz5hI4QZwV0njUx3jeuKe67YukQ1LSPZBKDqO/Q==",
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
		"node_modules/min-indent": {
			"version": "1.0.1",
			"resolved": "https://registry.npmjs.org/min-indent/-/min-indent-1.0.1.tgz",
			"integrity": "sha512-I9jwMn07Sy/IwOj3zVkVik2JTvgpaykDZEigL6Rx6N9LbMywwUSMtxET+7lVoDLLd3O3IXwJwvuuns8UB/HeAg==",
			"dev": true,
			"license": "MIT",
			"engines": {
				"node": ">=4"
			}
		},
		"node_modules/minimatch": {
			"version": "3.1.2",
			"resolved": "https://registry.npmjs.org/minimatch/-/minimatch-3.1.2.tgz",
			"integrity": "sha512-J7p63hRiAjw1NDEww1W7i37+ByIrOWO5XQQAzZ3VOcL0PNybwpfmV/N05zFAzwQ9USyEcX6t3UO+K5aqBQOIHw==",
			"dev": true,
			"license": "ISC",
			"dependencies": {
				"brace-expansion": "^1.1.7"
			},
			"engines": {
				"node": "*"
			}
		},
		"node_modules/minimist": {
			"version": "1.2.8",
			"resolved": "https://registry.npmjs.org/minimist/-/minimist-1.2.8.tgz",
			"integrity": "sha512-2yyAR8qBkN3YuheJanUpWC5U3bb5osDywNB8RzDVlDwDHbocAJveqqj1u8+SVD7jkWT4yvsHCpWqqWqAxb0zCA==",
			"dev": true,
			"license": "MIT",
			"funding": {
				"url": "https://github.com/sponsors/ljharb"
			}
		},
		"node_modules/mkdirp": {
			"version": "0.5.6",
			"resolved": "https://registry.npmjs.org/mkdirp/-/mkdirp-0.5.6.tgz",
			"integrity": "sha512-FP+p8RB8OWpF3YZBCrP5gtADmtXApB5AMLn+vdyA+PyxCjrCs00mjyUozssO33cwDeT3wNGdLxJ5M//YqtHAJw==",
			"dev": true,
			"license": "MIT",
			"dependencies": {
				"minimist": "^1.2.6"
			},
			"bin": {
				"mkdirp": "bin/cmd.js"
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
		"node_modules/once": {
			"version": "1.4.0",
			"resolved": "https://registry.npmjs.org/once/-/once-1.4.0.tgz",
			"integrity": "sha512-lNaJgI+2Q5URQBkccEKHTQOPaXdUxnZZElQTZY0MFUAuaEqe1E+Nyvgdz/aIyNi6Z9MzO5dv1H8n58/GELp3+w==",
			"dev": true,
			"license": "ISC",
			"dependencies": {
				"wrappy": "1"
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
		"node_modules/path-is-absolute": {
			"version": "1.0.1",
			"resolved": "https://registry.npmjs.org/path-is-absolute/-/path-is-absolute-1.0.1.tgz",
			"integrity": "sha512-AVbw3UJ2e9bq64vSaS9Am0fje1Pa8pbGqTTsmXfaIiMpnr5DlDhfJOuLj9Sf95ZPVDAUerDfEk88MPmPe7UCQg==",
			"dev": true,
			"license": "MIT",
			"engines": {
				"node": ">=0.10.0"
			}
		},
		"node_modules/periscopic": {
			"version": "3.1.0",
			"resolved": "https://registry.npmjs.org/periscopic/-/periscopic-3.1.0.tgz",
			"integrity": "sha512-vKiQ8RRtkl9P+r/+oefh25C3fhybptkHKCZSPlcXiJux2tJF55GnEj3BVn4A5gKfq9NWWXXrxkHBwVPUfH0opw==",
			"dev": true,
			"license": "MIT",
			"dependencies": {
				"@types/estree": "^1.0.0",
				"estree-walker": "^3.0.0",
				"is-reference": "^3.0.0"
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
			"version": "8.4.38",
			"resolved": "https://registry.npmjs.org/postcss/-/postcss-8.4.38.tgz",
			"integrity": "sha512-Wglpdk03BSfXkHoQa3b/oulrotAkwrlLDRSOb9D0bN86FdRyE9lppSp33aHNPgBa0JKCoB+drFLZkQoRRYae5A==",
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
				"picocolors": "^1.0.0",
				"source-map-js": "^1.2.0"
			},
			"engines": {
				"node": "^10 || ^12 || >=14"
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
		"node_modules/rimraf": {
			"version": "2.7.1",
			"resolved": "https://registry.npmjs.org/rimraf/-/rimraf-2.7.1.tgz",
			"integrity": "sha512-uWjbaKIK3T1OSVptzX7Nl6PvQ3qAGtKEtVRjRuazjfL3Bx5eI409VZSqgND+4UNnmzLVdPj9FqFJNPqBZFve4w==",
			"deprecated": "Rimraf versions prior to v4 are no longer supported",
			"dev": true,
			"license": "ISC",
			"dependencies": {
				"glob": "^7.1.3"
			},
			"bin": {
				"rimraf": "bin.js"
			}
		},
		"node_modules/rollup": {
			"version": "4.18.0",
			"resolved": "https://registry.npmjs.org/rollup/-/rollup-4.18.0.tgz",
			"integrity": "sha512-QmJz14PX3rzbJCN1SG4Xe/bAAX2a6NpCP8ab2vfu2GiUr8AQcr2nCV/oEO3yneFarB67zk8ShlIyWb2LGTb3Sg==",
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
				"@rollup/rollup-android-arm-eabi": "4.18.0",
				"@rollup/rollup-android-arm64": "4.18.0",
				"@rollup/rollup-darwin-arm64": "4.18.0",
				"@rollup/rollup-darwin-x64": "4.18.0",
				"@rollup/rollup-linux-arm-gnueabihf": "4.18.0",
				"@rollup/rollup-linux-arm-musleabihf": "4.18.0",
				"@rollup/rollup-linux-arm64-gnu": "4.18.0",
				"@rollup/rollup-linux-arm64-musl": "4.18.0",
				"@rollup/rollup-linux-powerpc64le-gnu": "4.18.0",
				"@rollup/rollup-linux-riscv64-gnu": "4.18.0",
				"@rollup/rollup-linux-s390x-gnu": "4.18.0",
				"@rollup/rollup-linux-x64-gnu": "4.18.0",
				"@rollup/rollup-linux-x64-musl": "4.18.0",
				"@rollup/rollup-win32-arm64-msvc": "4.18.0",
				"@rollup/rollup-win32-ia32-msvc": "4.18.0",
				"@rollup/rollup-win32-x64-msvc": "4.18.0",
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
			"license": "MIT",
			"dependencies": {
				"queue-microtask": "^1.2.2"
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
		"node_modules/sander": {
			"version": "0.5.1",
			"resolved": "https://registry.npmjs.org/sander/-/sander-0.5.1.tgz",
			"integrity": "sha512-3lVqBir7WuKDHGrKRDn/1Ye3kwpXaDOMsiRP1wd6wpZW56gJhsbp5RqQpA6JG/P+pkXizygnr1dKR8vzWaVsfA==",
			"dev": true,
			"license": "MIT",
			"dependencies": {
				"es6-promise": "^3.1.2",
				"graceful-fs": "^4.1.3",
				"mkdirp": "^0.5.1",
				"rimraf": "^2.5.2"
			}
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
		"node_modules/sorcery": {
			"version": "0.11.1",
			"resolved": "https://registry.npmjs.org/sorcery/-/sorcery-0.11.1.tgz",
			"integrity": "sha512-o7npfeJE6wi6J9l0/5LKshFzZ2rMatRiCDwYeDQaOzqdzRJwALhX7mk/A/ecg6wjMu7wdZbmXfD2S/vpOg0bdQ==",
			"dev": true,
			"license": "MIT",
			"dependencies": {
				"@jridgewell/sourcemap-codec": "^1.4.14",
				"buffer-crc32": "^1.0.0",
				"minimist": "^1.2.0",
				"sander": "^0.5.0"
			},
			"bin": {
				"sorcery": "bin/sorcery"
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
		"node_modules/strip-indent": {
			"version": "3.0.0",
			"resolved": "https://registry.npmjs.org/strip-indent/-/strip-indent-3.0.0.tgz",
			"integrity": "sha512-laJTa3Jb+VQpaC6DseHhF7dXVqHTfJPCRDaEbid/drOhgitgYku/letMUqOXFoWV0zIIUbjpdH2t+tYj4bQMRQ==",
			"dev": true,
			"license": "MIT",
			"dependencies": {
				"min-indent": "^1.0.0"
			},
			"engines": {
				"node": ">=8"
			}
		},
		"node_modules/svelte": {
			"version": "4.2.18",
			"resolved": "https://registry.npmjs.org/svelte/-/svelte-4.2.18.tgz",
			"integrity": "sha512-d0FdzYIiAePqRJEb90WlJDkjUEx42xhivxN8muUBmfZnP+tzUgz12DJ2hRJi8sIHCME7jeK1PTMgKPSfTd8JrA==",
			"dev": true,
			"license": "MIT",
			"dependencies": {
				"@ampproject/remapping": "^2.2.1",
				"@jridgewell/sourcemap-codec": "^1.4.15",
				"@jridgewell/trace-mapping": "^0.3.18",
				"@types/estree": "^1.0.1",
				"acorn": "^8.9.0",
				"aria-query": "^5.3.0",
				"axobject-query": "^4.0.0",
				"code-red": "^1.0.3",
				"css-tree": "^2.3.1",
				"estree-walker": "^3.0.3",
				"is-reference": "^3.0.1",
				"locate-character": "^3.0.0",
				"magic-string": "^0.30.4",
				"periscopic": "^3.1.0"
			},
			"engines": {
				"node": ">=16"
			}
		},
		"node_modules/svelte-check": {
			"version": "3.8.1",
			"resolved": "https://registry.npmjs.org/svelte-check/-/svelte-check-3.8.1.tgz",
			"integrity": "sha512-KlQ0TRVe01mdvh49Ylkr9FQxO/UWbQOtaIrccl3gjgkvby1TxY41VkT7ijCl6i29FjaJPE4m6YGmhdqov0MfkA==",
			"dev": true,
			"license": "MIT",
			"dependencies": {
				"@jridgewell/trace-mapping": "^0.3.17",
				"chokidar": "^3.4.1",
				"fast-glob": "^3.2.7",
				"import-fresh": "^3.2.1",
				"picocolors": "^1.0.0",
				"sade": "^1.7.4",
				"svelte-preprocess": "^5.1.3",
				"typescript": "^5.0.3"
			},
			"bin": {
				"svelte-check": "bin/svelte-check"
			},
			"peerDependencies": {
				"svelte": "^3.55.0 || ^4.0.0-next.0 || ^4.0.0 || ^5.0.0-next.0"
			}
		},
		"node_modules/svelte-hmr": {
			"version": "0.16.0",
			"resolved": "https://registry.npmjs.org/svelte-hmr/-/svelte-hmr-0.16.0.tgz",
			"integrity": "sha512-Gyc7cOS3VJzLlfj7wKS0ZnzDVdv3Pn2IuVeJPk9m2skfhcu5bq3wtIZyQGggr7/Iim5rH5cncyQft/kRLupcnA==",
			"dev": true,
			"license": "ISC",
			"engines": {
				"node": "^12.20 || ^14.13.1 || >= 16"
			},
			"peerDependencies": {
				"svelte": "^3.19.0 || ^4.0.0"
			}
		},
		"node_modules/svelte-preprocess": {
			"version": "5.1.4",
			"resolved": "https://registry.npmjs.org/svelte-preprocess/-/svelte-preprocess-5.1.4.tgz",
			"integrity": "sha512-IvnbQ6D6Ao3Gg6ftiM5tdbR6aAETwjhHV+UKGf5bHGYR69RQvF1ho0JKPcbUON4vy4R7zom13jPjgdOWCQ5hDA==",
			"dev": true,
			"hasInstallScript": true,
			"license": "MIT",
			"dependencies": {
				"@types/pug": "^2.0.6",
				"detect-indent": "^6.1.0",
				"magic-string": "^0.30.5",
				"sorcery": "^0.11.0",
				"strip-indent": "^3.0.0"
			},
			"engines": {
				"node": ">= 16.0.0"
			},
			"peerDependencies": {
				"@babel/core": "^7.10.2",
				"coffeescript": "^2.5.1",
				"less": "^3.11.3 || ^4.0.0",
				"postcss": "^7 || ^8",
				"postcss-load-config": "^2.1.0 || ^3.0.0 || ^4.0.0 || ^5.0.0",
				"pug": "^3.0.0",
				"sass": "^1.26.8",
				"stylus": "^0.55.0",
				"sugarss": "^2.0.0 || ^3.0.0 || ^4.0.0",
				"svelte": "^3.23.0 || ^4.0.0-next.0 || ^4.0.0 || ^5.0.0-next.0",
				"typescript": ">=3.9.5 || ^4.0.0 || ^5.0.0"
			},
			"peerDependenciesMeta": {
				"@babel/core": {
					"optional": true
				},
				"coffeescript": {
					"optional": true
				},
				"less": {
					"optional": true
				},
				"postcss": {
					"optional": true
				},
				"postcss-load-config": {
					"optional": true
				},
				"pug": {
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
				"typescript": {
					"optional": true
				}
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
			"version": "5.4.5",
			"resolved": "https://registry.npmjs.org/typescript/-/typescript-5.4.5.tgz",
			"integrity": "sha512-vcI4UpRgg81oIRUFwR0WSIHKt11nJ7SAVlYNIu+QpqeyXP+gpQJy/Z4+F0aGxSE4MqwjyXvW/TzgkLAx2AGHwQ==",
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
			"version": "5.3.1",
			"resolved": "https://registry.npmjs.org/vite/-/vite-5.3.1.tgz",
			"integrity": "sha512-XBmSKRLXLxiaPYamLv3/hnP/KXDai1NDexN0FpkTaZXTfycHvkRHoenpgl/fvuK/kPbB6xAgoyiryAhQNxYmAQ==",
			"dev": true,
			"license": "MIT",
			"dependencies": {
				"esbuild": "^0.21.3",
				"postcss": "^8.4.38",
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
		"node_modules/vitefu": {
			"version": "0.2.5",
			"resolved": "https://registry.npmjs.org/vitefu/-/vitefu-0.2.5.tgz",
			"integrity": "sha512-SgHtMLoqaeeGnd2evZ849ZbACbnwQCIwRH57t18FxcXoZop0uQu0uzlIhJBlF/eWVzuce0sHeqPcDo+evVcg8Q==",
			"dev": true,
			"license": "MIT",
			"peerDependencies": {
				"vite": "^3.0.0 || ^4.0.0 || ^5.0.0"
			},
			"peerDependenciesMeta": {
				"vite": {
					"optional": true
				}
			}
		},
		"node_modules/wrappy": {
			"version": "1.0.2",
			"resolved": "https://registry.npmjs.org/wrappy/-/wrappy-1.0.2.tgz",
			"integrity": "sha512-l4Sp/DRseor9wL6EvV2+TuQn63dMkPjZ/sp9XkghTEbV9KlPS1xUsZ3u7/IQO4wxtcFB4bgpQPRcR3QCvezPcQ==",
			"dev": true,
			"license": "ISC"
		}
	}
}
`;export{t as default};
