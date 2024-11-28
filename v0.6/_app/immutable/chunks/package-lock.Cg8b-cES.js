const t=`{
	"name": "agnos-ui-svelte-stackblitz-demo",
	"version": "0.6.0-next.0",
	"lockfileVersion": 3,
	"requires": true,
	"packages": {
		"": {
			"name": "agnos-ui-svelte-stackblitz-demo",
			"version": "0.6.0-next.0",
			"devDependencies": {
				"@agnos-ui/svelte-bootstrap": "0.6.0-next.0",
				"@agnos-ui/svelte-preprocess": "0.6.0-next.0",
				"@amadeus-it-group/tansu": "^1.0.0",
				"@floating-ui/dom": "^1.6.12",
				"@sveltejs/vite-plugin-svelte": "^4.0.1",
				"@tsconfig/svelte": "^5.0.4",
				"bootstrap-icons": "^1.11.3",
				"sass": "^1.81.0",
				"svelte": "^5.2.7",
				"svelte-check": "^4.1.0",
				"tslib": "^2.8.1",
				"typescript": "~5.5.4",
				"vite": "^5.4.11"
			}
		},
		"node_modules/@agnos-ui/core": {
			"version": "0.6.0-next.0",
			"resolved": "https://registry.npmjs.org/@agnos-ui/core/-/core-0.6.0-next.0.tgz",
			"integrity": "sha512-hk37rnRYBSCwCqAbBtn2iE982Fy7abvHBuehWYQwc/GHZdzllHT7FdHNx0jtfNTMhhbBpnqezwkCDDXw0BrVxQ==",
			"dev": true,
			"license": "MIT",
			"peerDependencies": {
				"@amadeus-it-group/tansu": "^1.0.0",
				"@floating-ui/dom": "^1.6.12",
				"esm-env": "^1.1.4"
			}
		},
		"node_modules/@agnos-ui/core-bootstrap": {
			"version": "0.6.0-next.0",
			"resolved": "https://registry.npmjs.org/@agnos-ui/core-bootstrap/-/core-bootstrap-0.6.0-next.0.tgz",
			"integrity": "sha512-V+CVH86utMmfM9RbhgSKcVoDqeMgn4vPx0YU1omoOq7SZm1x+iwJt02M7p8oiI5uo7cumCtu058Taifo/0uaHQ==",
			"dev": true,
			"license": "MIT",
			"dependencies": {
				"@agnos-ui/core": "0.6.0-next.0"
			},
			"peerDependencies": {
				"@amadeus-it-group/tansu": "^1.0.0"
			}
		},
		"node_modules/@agnos-ui/svelte-bootstrap": {
			"version": "0.6.0-next.0",
			"resolved": "https://registry.npmjs.org/@agnos-ui/svelte-bootstrap/-/svelte-bootstrap-0.6.0-next.0.tgz",
			"integrity": "sha512-cQOXVhwD+vAQ+Li+TdhzMS27adeWeorLUsqYT9MCuKMAverUZxBNp0bMfcOwj3MUmRbJuH7gKZ73LaWGLFoxgA==",
			"dev": true,
			"license": "MIT",
			"dependencies": {
				"@agnos-ui/core-bootstrap": "0.6.0-next.0",
				"@agnos-ui/svelte-headless": "0.6.0-next.0"
			},
			"peerDependencies": {
				"@amadeus-it-group/tansu": "^1.0.0",
				"esm-env": "^1.1.4",
				"svelte": "^5.2.7"
			}
		},
		"node_modules/@agnos-ui/svelte-headless": {
			"version": "0.6.0-next.0",
			"resolved": "https://registry.npmjs.org/@agnos-ui/svelte-headless/-/svelte-headless-0.6.0-next.0.tgz",
			"integrity": "sha512-/xHr80RDRPKS05pZuq65Qnsz6blivQ1JEQ17wpFLLN7gWnOs0lDAQPBPncPzwlh1gdZwp2pk1tUotM4ZoMcYrQ==",
			"dev": true,
			"license": "MIT",
			"dependencies": {
				"@agnos-ui/core": "0.6.0-next.0"
			},
			"peerDependencies": {
				"@amadeus-it-group/tansu": "^1.0.0",
				"svelte": "^5.2.7"
			}
		},
		"node_modules/@agnos-ui/svelte-preprocess": {
			"version": "0.6.0-next.0",
			"resolved": "https://registry.npmjs.org/@agnos-ui/svelte-preprocess/-/svelte-preprocess-0.6.0-next.0.tgz",
			"integrity": "sha512-N/GvPvwLpxdZ6Vs9mN+aXj+FlBbCio5N0e6BUYk05PcOiDf6ieyc2ewnJjQQkR7RP1sQJRNZ2T/BkmI38Q+FFw==",
			"dev": true,
			"license": "MIT",
			"dependencies": {
				"magic-string": "^0.30.13"
			},
			"peerDependencies": {
				"svelte": "^5.2.7"
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
		"node_modules/@esbuild/aix-ppc64": {
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
		"node_modules/@esbuild/android-arm": {
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
		"node_modules/@esbuild/android-arm64": {
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
		"node_modules/@esbuild/android-x64": {
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
		"node_modules/@esbuild/darwin-arm64": {
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
		"node_modules/@esbuild/darwin-x64": {
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
		"node_modules/@esbuild/freebsd-arm64": {
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
		"node_modules/@esbuild/freebsd-x64": {
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
		"node_modules/@esbuild/linux-arm": {
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
		"node_modules/@esbuild/linux-arm64": {
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
		"node_modules/@esbuild/linux-ia32": {
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
		"node_modules/@esbuild/linux-loong64": {
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
		"node_modules/@esbuild/linux-mips64el": {
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
		"node_modules/@esbuild/linux-ppc64": {
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
		"node_modules/@esbuild/linux-riscv64": {
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
		"node_modules/@esbuild/linux-s390x": {
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
		"node_modules/@esbuild/linux-x64": {
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
		"node_modules/@esbuild/netbsd-x64": {
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
		"node_modules/@esbuild/openbsd-x64": {
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
		"node_modules/@esbuild/sunos-x64": {
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
		"node_modules/@esbuild/win32-arm64": {
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
		"node_modules/@esbuild/win32-ia32": {
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
		"node_modules/@esbuild/win32-x64": {
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
		"node_modules/@rollup/rollup-android-arm-eabi": {
			"version": "4.27.4",
			"resolved": "https://registry.npmjs.org/@rollup/rollup-android-arm-eabi/-/rollup-android-arm-eabi-4.27.4.tgz",
			"integrity": "sha512-2Y3JT6f5MrQkICUyRVCw4oa0sutfAsgaSsb0Lmmy1Wi2y7X5vT9Euqw4gOsCyy0YfKURBg35nhUKZS4mDcfULw==",
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
			"version": "4.27.4",
			"resolved": "https://registry.npmjs.org/@rollup/rollup-android-arm64/-/rollup-android-arm64-4.27.4.tgz",
			"integrity": "sha512-wzKRQXISyi9UdCVRqEd0H4cMpzvHYt1f/C3CoIjES6cG++RHKhrBj2+29nPF0IB5kpy9MS71vs07fvrNGAl/iA==",
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
			"version": "4.27.4",
			"resolved": "https://registry.npmjs.org/@rollup/rollup-darwin-arm64/-/rollup-darwin-arm64-4.27.4.tgz",
			"integrity": "sha512-PlNiRQapift4LNS8DPUHuDX/IdXiLjf8mc5vdEmUR0fF/pyy2qWwzdLjB+iZquGr8LuN4LnUoSEvKRwjSVYz3Q==",
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
			"version": "4.27.4",
			"resolved": "https://registry.npmjs.org/@rollup/rollup-darwin-x64/-/rollup-darwin-x64-4.27.4.tgz",
			"integrity": "sha512-o9bH2dbdgBDJaXWJCDTNDYa171ACUdzpxSZt+u/AAeQ20Nk5x+IhA+zsGmrQtpkLiumRJEYef68gcpn2ooXhSQ==",
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
			"version": "4.27.4",
			"resolved": "https://registry.npmjs.org/@rollup/rollup-freebsd-arm64/-/rollup-freebsd-arm64-4.27.4.tgz",
			"integrity": "sha512-NBI2/i2hT9Q+HySSHTBh52da7isru4aAAo6qC3I7QFVsuhxi2gM8t/EI9EVcILiHLj1vfi+VGGPaLOUENn7pmw==",
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
			"version": "4.27.4",
			"resolved": "https://registry.npmjs.org/@rollup/rollup-freebsd-x64/-/rollup-freebsd-x64-4.27.4.tgz",
			"integrity": "sha512-wYcC5ycW2zvqtDYrE7deary2P2UFmSh85PUpAx+dwTCO9uw3sgzD6Gv9n5X4vLaQKsrfTSZZ7Z7uynQozPVvWA==",
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
			"version": "4.27.4",
			"resolved": "https://registry.npmjs.org/@rollup/rollup-linux-arm-gnueabihf/-/rollup-linux-arm-gnueabihf-4.27.4.tgz",
			"integrity": "sha512-9OwUnK/xKw6DyRlgx8UizeqRFOfi9mf5TYCw1uolDaJSbUmBxP85DE6T4ouCMoN6pXw8ZoTeZCSEfSaYo+/s1w==",
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
			"version": "4.27.4",
			"resolved": "https://registry.npmjs.org/@rollup/rollup-linux-arm-musleabihf/-/rollup-linux-arm-musleabihf-4.27.4.tgz",
			"integrity": "sha512-Vgdo4fpuphS9V24WOV+KwkCVJ72u7idTgQaBoLRD0UxBAWTF9GWurJO9YD9yh00BzbkhpeXtm6na+MvJU7Z73A==",
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
			"version": "4.27.4",
			"resolved": "https://registry.npmjs.org/@rollup/rollup-linux-arm64-gnu/-/rollup-linux-arm64-gnu-4.27.4.tgz",
			"integrity": "sha512-pleyNgyd1kkBkw2kOqlBx+0atfIIkkExOTiifoODo6qKDSpnc6WzUY5RhHdmTdIJXBdSnh6JknnYTtmQyobrVg==",
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
			"version": "4.27.4",
			"resolved": "https://registry.npmjs.org/@rollup/rollup-linux-arm64-musl/-/rollup-linux-arm64-musl-4.27.4.tgz",
			"integrity": "sha512-caluiUXvUuVyCHr5DxL8ohaaFFzPGmgmMvwmqAITMpV/Q+tPoaHZ/PWa3t8B2WyoRcIIuu1hkaW5KkeTDNSnMA==",
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
			"version": "4.27.4",
			"resolved": "https://registry.npmjs.org/@rollup/rollup-linux-powerpc64le-gnu/-/rollup-linux-powerpc64le-gnu-4.27.4.tgz",
			"integrity": "sha512-FScrpHrO60hARyHh7s1zHE97u0KlT/RECzCKAdmI+LEoC1eDh/RDji9JgFqyO+wPDb86Oa/sXkily1+oi4FzJQ==",
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
			"version": "4.27.4",
			"resolved": "https://registry.npmjs.org/@rollup/rollup-linux-riscv64-gnu/-/rollup-linux-riscv64-gnu-4.27.4.tgz",
			"integrity": "sha512-qyyprhyGb7+RBfMPeww9FlHwKkCXdKHeGgSqmIXw9VSUtvyFZ6WZRtnxgbuz76FK7LyoN8t/eINRbPUcvXB5fw==",
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
			"version": "4.27.4",
			"resolved": "https://registry.npmjs.org/@rollup/rollup-linux-s390x-gnu/-/rollup-linux-s390x-gnu-4.27.4.tgz",
			"integrity": "sha512-PFz+y2kb6tbh7m3A7nA9++eInGcDVZUACulf/KzDtovvdTizHpZaJty7Gp0lFwSQcrnebHOqxF1MaKZd7psVRg==",
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
			"version": "4.27.4",
			"resolved": "https://registry.npmjs.org/@rollup/rollup-linux-x64-gnu/-/rollup-linux-x64-gnu-4.27.4.tgz",
			"integrity": "sha512-Ni8mMtfo+o/G7DVtweXXV/Ol2TFf63KYjTtoZ5f078AUgJTmaIJnj4JFU7TK/9SVWTaSJGxPi5zMDgK4w+Ez7Q==",
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
			"version": "4.27.4",
			"resolved": "https://registry.npmjs.org/@rollup/rollup-linux-x64-musl/-/rollup-linux-x64-musl-4.27.4.tgz",
			"integrity": "sha512-5AeeAF1PB9TUzD+3cROzFTnAJAcVUGLuR8ng0E0WXGkYhp6RD6L+6szYVX+64Rs0r72019KHZS1ka1q+zU/wUw==",
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
			"version": "4.27.4",
			"resolved": "https://registry.npmjs.org/@rollup/rollup-win32-arm64-msvc/-/rollup-win32-arm64-msvc-4.27.4.tgz",
			"integrity": "sha512-yOpVsA4K5qVwu2CaS3hHxluWIK5HQTjNV4tWjQXluMiiiu4pJj4BN98CvxohNCpcjMeTXk/ZMJBRbgRg8HBB6A==",
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
			"version": "4.27.4",
			"resolved": "https://registry.npmjs.org/@rollup/rollup-win32-ia32-msvc/-/rollup-win32-ia32-msvc-4.27.4.tgz",
			"integrity": "sha512-KtwEJOaHAVJlxV92rNYiG9JQwQAdhBlrjNRp7P9L8Cb4Rer3in+0A+IPhJC9y68WAi9H0sX4AiG2NTsVlmqJeQ==",
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
			"version": "4.27.4",
			"resolved": "https://registry.npmjs.org/@rollup/rollup-win32-x64-msvc/-/rollup-win32-x64-msvc-4.27.4.tgz",
			"integrity": "sha512-3j4jx1TppORdTAoBJRd+/wJRGCPC0ETWkXOecJ6PPZLj6SptXkrXcNqdj0oclbKML6FkQltdz7bBA3rUSirZug==",
			"cpu": [
				"x64"
			],
			"dev": true,
			"optional": true,
			"os": [
				"win32"
			]
		},
		"node_modules/@sveltejs/vite-plugin-svelte": {
			"version": "4.0.1",
			"resolved": "https://registry.npmjs.org/@sveltejs/vite-plugin-svelte/-/vite-plugin-svelte-4.0.1.tgz",
			"integrity": "sha512-prXoAE/GleD2C4pKgHa9vkdjpzdYwCSw/kmjw6adIyu0vk5YKCfqIztkLg10m+kOYnzZu3bb0NaPTxlWre2a9Q==",
			"dev": true,
			"dependencies": {
				"@sveltejs/vite-plugin-svelte-inspector": "^3.0.0-next.0||^3.0.0",
				"debug": "^4.3.7",
				"deepmerge": "^4.3.1",
				"kleur": "^4.1.5",
				"magic-string": "^0.30.12",
				"vitefu": "^1.0.3"
			},
			"engines": {
				"node": "^18.0.0 || ^20.0.0 || >=22"
			},
			"peerDependencies": {
				"svelte": "^5.0.0-next.96 || ^5.0.0",
				"vite": "^5.0.0"
			}
		},
		"node_modules/@sveltejs/vite-plugin-svelte-inspector": {
			"version": "3.0.1",
			"resolved": "https://registry.npmjs.org/@sveltejs/vite-plugin-svelte-inspector/-/vite-plugin-svelte-inspector-3.0.1.tgz",
			"integrity": "sha512-2CKypmj1sM4GE7HjllT7UKmo4Q6L5xFRd7VMGEWhYnZ+wc6AUVU01IBd7yUi6WnFndEwWoMNOd6e8UjoN0nbvQ==",
			"dev": true,
			"dependencies": {
				"debug": "^4.3.7"
			},
			"engines": {
				"node": "^18.0.0 || ^20.0.0 || >=22"
			},
			"peerDependencies": {
				"@sveltejs/vite-plugin-svelte": "^4.0.0-next.0||^4.0.0",
				"svelte": "^5.0.0-next.96 || ^5.0.0",
				"vite": "^5.0.0"
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
		"node_modules/aria-query": {
			"version": "5.3.2",
			"resolved": "https://registry.npmjs.org/aria-query/-/aria-query-5.3.2.tgz",
			"integrity": "sha512-COROpnaoap1E2F000S62r6A60uHZnmlvomhfyT2DlTcrY1OrBKn2UhH7qn5wTC9zMvD0AY7csdPSNwKP+7WiQw==",
			"dev": true,
			"engines": {
				"node": ">= 0.4"
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
		"node_modules/esbuild": {
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
		"node_modules/esm-env": {
			"version": "1.1.4",
			"resolved": "https://registry.npmjs.org/esm-env/-/esm-env-1.1.4.tgz",
			"integrity": "sha512-oO82nKPHKkzIj/hbtuDYy/JHqBHFlMIW36SDiPCVsj87ntDLcWN+sJ1erdVryd4NxODacFTsdrIE3b7IamqbOg==",
			"dev": true
		},
		"node_modules/esrap": {
			"version": "1.2.2",
			"resolved": "https://registry.npmjs.org/esrap/-/esrap-1.2.2.tgz",
			"integrity": "sha512-F2pSJklxx1BlQIQgooczXCPHmcWpn6EsP5oo73LQfonG9fIlIENQ8vMmfGXeojP9MrkzUNAfyU5vdFlR9shHAw==",
			"dev": true,
			"dependencies": {
				"@jridgewell/sourcemap-codec": "^1.4.15",
				"@types/estree": "^1.0.1"
			}
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
		"node_modules/immutable": {
			"version": "5.0.3",
			"resolved": "https://registry.npmjs.org/immutable/-/immutable-5.0.3.tgz",
			"integrity": "sha512-P8IdPQHq3lA1xVeBRi5VPqUm5HDgKnx0Ru51wZz5mjxHr5n3RWhjIpOFU7ybkUxfB+5IToy+OLaHYDBIWsv+uw==",
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
		"node_modules/is-reference": {
			"version": "3.0.3",
			"resolved": "https://registry.npmjs.org/is-reference/-/is-reference-3.0.3.tgz",
			"integrity": "sha512-ixkJoqQvAP88E6wLydLGGqCJsrFUnqoH6HnaczB8XmDH1oaWU+xxdptvikTgaEhtZ53Ky6YXiBuUI2WXLMCwjw==",
			"dev": true,
			"dependencies": {
				"@types/estree": "^1.0.6"
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
		"node_modules/locate-character": {
			"version": "3.0.0",
			"resolved": "https://registry.npmjs.org/locate-character/-/locate-character-3.0.0.tgz",
			"integrity": "sha512-SW13ws7BjaeJ6p7Q6CO2nchbYEc3X3J6WrmTTDto7yMPqVSZTUyY5Tjbid+Ab8gLnATtygYtiDIJGQRRn2ZOiA==",
			"dev": true
		},
		"node_modules/magic-string": {
			"version": "0.30.13",
			"resolved": "https://registry.npmjs.org/magic-string/-/magic-string-0.30.13.tgz",
			"integrity": "sha512-8rYBO+MsWkgjDSOvLomYnzhdwEG51olQ4zL5KXnNJWV5MNmrb4rTZdrtkhxjnD/QyZUqR/Z/XDsUs/4ej2nx0g==",
			"dev": true,
			"dependencies": {
				"@jridgewell/sourcemap-codec": "^1.5.0"
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
		"node_modules/node-addon-api": {
			"version": "7.1.1",
			"resolved": "https://registry.npmjs.org/node-addon-api/-/node-addon-api-7.1.1.tgz",
			"integrity": "sha512-5m3bsyrjFWE1xf7nz7YXdN4udnVtXK6/Yfgn5qnahL6bCkf2yKt4k3nuTKAtT4r3IG8JNR2ncsIMdZuAzJjHQQ==",
			"dev": true,
			"optional": true
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
		"node_modules/rollup": {
			"version": "4.27.4",
			"resolved": "https://registry.npmjs.org/rollup/-/rollup-4.27.4.tgz",
			"integrity": "sha512-RLKxqHEMjh/RGLsDxAEsaLO3mWgyoU6x9w6n1ikAzet4B3gI2/3yP6PWY2p9QzRTh6MfEIXB3MwsOY0Iv3vNrw==",
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
				"@rollup/rollup-android-arm-eabi": "4.27.4",
				"@rollup/rollup-android-arm64": "4.27.4",
				"@rollup/rollup-darwin-arm64": "4.27.4",
				"@rollup/rollup-darwin-x64": "4.27.4",
				"@rollup/rollup-freebsd-arm64": "4.27.4",
				"@rollup/rollup-freebsd-x64": "4.27.4",
				"@rollup/rollup-linux-arm-gnueabihf": "4.27.4",
				"@rollup/rollup-linux-arm-musleabihf": "4.27.4",
				"@rollup/rollup-linux-arm64-gnu": "4.27.4",
				"@rollup/rollup-linux-arm64-musl": "4.27.4",
				"@rollup/rollup-linux-powerpc64le-gnu": "4.27.4",
				"@rollup/rollup-linux-riscv64-gnu": "4.27.4",
				"@rollup/rollup-linux-s390x-gnu": "4.27.4",
				"@rollup/rollup-linux-x64-gnu": "4.27.4",
				"@rollup/rollup-linux-x64-musl": "4.27.4",
				"@rollup/rollup-win32-arm64-msvc": "4.27.4",
				"@rollup/rollup-win32-ia32-msvc": "4.27.4",
				"@rollup/rollup-win32-x64-msvc": "4.27.4",
				"fsevents": "~2.3.2"
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
		"node_modules/source-map-js": {
			"version": "1.2.1",
			"resolved": "https://registry.npmjs.org/source-map-js/-/source-map-js-1.2.1.tgz",
			"integrity": "sha512-UXWMKhLOwVKb728IUtQPXxfYU+usdybtUrK/8uGE8CQMvrhOpwvzDBwj0QhSL7MQc7vIsISBG8VQ8+IDQxpfQA==",
			"dev": true,
			"engines": {
				"node": ">=0.10.0"
			}
		},
		"node_modules/svelte": {
			"version": "5.2.7",
			"resolved": "https://registry.npmjs.org/svelte/-/svelte-5.2.7.tgz",
			"integrity": "sha512-cEhPGuLHiH2+Z8B1FwQgiZJgA39uUmJR4516TKrM5zrp0/cuwJkfhUfcTxhAkznanAF5fXUKzvYR4o+Ksx3ZCQ==",
			"dev": true,
			"dependencies": {
				"@ampproject/remapping": "^2.3.0",
				"@jridgewell/sourcemap-codec": "^1.5.0",
				"@types/estree": "^1.0.5",
				"acorn": "^8.12.1",
				"acorn-typescript": "^1.4.13",
				"aria-query": "^5.3.1",
				"axobject-query": "^4.1.0",
				"esm-env": "^1.0.0",
				"esrap": "^1.2.2",
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
			"version": "5.5.4",
			"resolved": "https://registry.npmjs.org/typescript/-/typescript-5.5.4.tgz",
			"integrity": "sha512-Mtq29sKDAEYP7aljRgtPOpTvOfbwRWlS6dPRzwjdE+C0R4brX/GUyhHSecbHMFLNBLcJIPt9nl9yG5TZ1weH+Q==",
			"dev": true,
			"bin": {
				"tsc": "bin/tsc",
				"tsserver": "bin/tsserver"
			},
			"engines": {
				"node": ">=14.17"
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
		"node_modules/vitefu": {
			"version": "1.0.3",
			"resolved": "https://registry.npmjs.org/vitefu/-/vitefu-1.0.3.tgz",
			"integrity": "sha512-iKKfOMBHob2WxEJbqbJjHAkmYgvFDPhuqrO82om83S8RLk+17FtyMBfcyeH8GqD0ihShtkMW/zzJgiA51hCNCQ==",
			"dev": true,
			"peerDependencies": {
				"vite": "^3.0.0 || ^4.0.0 || ^5.0.0 || ^6.0.0-beta.0"
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
			"dev": true
		}
	}
}
`;export{t as default};
