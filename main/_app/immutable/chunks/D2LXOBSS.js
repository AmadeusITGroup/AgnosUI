const t=`{
	"name": "agnos-ui-svelte-stackblitz-demo",
	"version": "0.0.0",
	"lockfileVersion": 3,
	"requires": true,
	"packages": {
		"": {
			"name": "agnos-ui-svelte-stackblitz-demo",
			"version": "0.0.0",
			"devDependencies": {
				"@amadeus-it-group/tansu": "^2.0.0",
				"@floating-ui/dom": "^1.6.12",
				"@sveltejs/vite-plugin-svelte": "^6.0.0",
				"@tailwindcss/browser": "^4.0.0",
				"@tsconfig/svelte": "^5.0.4",
				"daisyui": "^5.0.6",
				"embla-carousel-autoplay": "^8.5.2",
				"sass": "^1.82.0",
				"svelte": "^5.16.0",
				"svelte-check": "^4.1.1",
				"tslib": "^2.8.1",
				"typescript": "~5.9.0",
				"vite": "^7.0.0"
			}
		},
		"node_modules/@amadeus-it-group/tansu": {
			"version": "2.0.0",
			"resolved": "https://registry.npmjs.org/@amadeus-it-group/tansu/-/tansu-2.0.0.tgz",
			"integrity": "sha512-KebRcEFWkdKix1vN12Y8cuGWdWKqkCzXiesXnxSAZbEULBDlPwm0sey+ygP98PudM1gBygtiWyWzGTeAL5+jIw==",
			"dev": true,
			"license": "MIT"
		},
		"node_modules/@esbuild/aix-ppc64": {
			"version": "0.27.2",
			"resolved": "https://registry.npmjs.org/@esbuild/aix-ppc64/-/aix-ppc64-0.27.2.tgz",
			"integrity": "sha512-GZMB+a0mOMZs4MpDbj8RJp4cw+w1WV5NYD6xzgvzUJ5Ek2jerwfO2eADyI6ExDSUED+1X8aMbegahsJi+8mgpw==",
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
			"version": "0.27.2",
			"resolved": "https://registry.npmjs.org/@esbuild/android-arm/-/android-arm-0.27.2.tgz",
			"integrity": "sha512-DVNI8jlPa7Ujbr1yjU2PfUSRtAUZPG9I1RwW4F4xFB1Imiu2on0ADiI/c3td+KmDtVKNbi+nffGDQMfcIMkwIA==",
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
			"version": "0.27.2",
			"resolved": "https://registry.npmjs.org/@esbuild/android-arm64/-/android-arm64-0.27.2.tgz",
			"integrity": "sha512-pvz8ZZ7ot/RBphf8fv60ljmaoydPU12VuXHImtAs0XhLLw+EXBi2BLe3OYSBslR4rryHvweW5gmkKFwTiFy6KA==",
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
			"version": "0.27.2",
			"resolved": "https://registry.npmjs.org/@esbuild/android-x64/-/android-x64-0.27.2.tgz",
			"integrity": "sha512-z8Ank4Byh4TJJOh4wpz8g2vDy75zFL0TlZlkUkEwYXuPSgX8yzep596n6mT7905kA9uHZsf/o2OJZubl2l3M7A==",
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
			"version": "0.27.2",
			"resolved": "https://registry.npmjs.org/@esbuild/darwin-arm64/-/darwin-arm64-0.27.2.tgz",
			"integrity": "sha512-davCD2Zc80nzDVRwXTcQP/28fiJbcOwvdolL0sOiOsbwBa72kegmVU0Wrh1MYrbuCL98Omp5dVhQFWRKR2ZAlg==",
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
			"version": "0.27.2",
			"resolved": "https://registry.npmjs.org/@esbuild/darwin-x64/-/darwin-x64-0.27.2.tgz",
			"integrity": "sha512-ZxtijOmlQCBWGwbVmwOF/UCzuGIbUkqB1faQRf5akQmxRJ1ujusWsb3CVfk/9iZKr2L5SMU5wPBi1UWbvL+VQA==",
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
			"version": "0.27.2",
			"resolved": "https://registry.npmjs.org/@esbuild/freebsd-arm64/-/freebsd-arm64-0.27.2.tgz",
			"integrity": "sha512-lS/9CN+rgqQ9czogxlMcBMGd+l8Q3Nj1MFQwBZJyoEKI50XGxwuzznYdwcav6lpOGv5BqaZXqvBSiB/kJ5op+g==",
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
			"version": "0.27.2",
			"resolved": "https://registry.npmjs.org/@esbuild/freebsd-x64/-/freebsd-x64-0.27.2.tgz",
			"integrity": "sha512-tAfqtNYb4YgPnJlEFu4c212HYjQWSO/w/h/lQaBK7RbwGIkBOuNKQI9tqWzx7Wtp7bTPaGC6MJvWI608P3wXYA==",
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
			"version": "0.27.2",
			"resolved": "https://registry.npmjs.org/@esbuild/linux-arm/-/linux-arm-0.27.2.tgz",
			"integrity": "sha512-vWfq4GaIMP9AIe4yj1ZUW18RDhx6EPQKjwe7n8BbIecFtCQG4CfHGaHuh7fdfq+y3LIA2vGS/o9ZBGVxIDi9hw==",
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
			"version": "0.27.2",
			"resolved": "https://registry.npmjs.org/@esbuild/linux-arm64/-/linux-arm64-0.27.2.tgz",
			"integrity": "sha512-hYxN8pr66NsCCiRFkHUAsxylNOcAQaxSSkHMMjcpx0si13t1LHFphxJZUiGwojB1a/Hd5OiPIqDdXONia6bhTw==",
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
			"version": "0.27.2",
			"resolved": "https://registry.npmjs.org/@esbuild/linux-ia32/-/linux-ia32-0.27.2.tgz",
			"integrity": "sha512-MJt5BRRSScPDwG2hLelYhAAKh9imjHK5+NE/tvnRLbIqUWa+0E9N4WNMjmp/kXXPHZGqPLxggwVhz7QP8CTR8w==",
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
			"version": "0.27.2",
			"resolved": "https://registry.npmjs.org/@esbuild/linux-loong64/-/linux-loong64-0.27.2.tgz",
			"integrity": "sha512-lugyF1atnAT463aO6KPshVCJK5NgRnU4yb3FUumyVz+cGvZbontBgzeGFO1nF+dPueHD367a2ZXe1NtUkAjOtg==",
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
			"version": "0.27.2",
			"resolved": "https://registry.npmjs.org/@esbuild/linux-mips64el/-/linux-mips64el-0.27.2.tgz",
			"integrity": "sha512-nlP2I6ArEBewvJ2gjrrkESEZkB5mIoaTswuqNFRv/WYd+ATtUpe9Y09RnJvgvdag7he0OWgEZWhviS1OTOKixw==",
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
			"version": "0.27.2",
			"resolved": "https://registry.npmjs.org/@esbuild/linux-ppc64/-/linux-ppc64-0.27.2.tgz",
			"integrity": "sha512-C92gnpey7tUQONqg1n6dKVbx3vphKtTHJaNG2Ok9lGwbZil6DrfyecMsp9CrmXGQJmZ7iiVXvvZH6Ml5hL6XdQ==",
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
			"version": "0.27.2",
			"resolved": "https://registry.npmjs.org/@esbuild/linux-riscv64/-/linux-riscv64-0.27.2.tgz",
			"integrity": "sha512-B5BOmojNtUyN8AXlK0QJyvjEZkWwy/FKvakkTDCziX95AowLZKR6aCDhG7LeF7uMCXEJqwa8Bejz5LTPYm8AvA==",
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
			"version": "0.27.2",
			"resolved": "https://registry.npmjs.org/@esbuild/linux-s390x/-/linux-s390x-0.27.2.tgz",
			"integrity": "sha512-p4bm9+wsPwup5Z8f4EpfN63qNagQ47Ua2znaqGH6bqLlmJ4bx97Y9JdqxgGZ6Y8xVTixUnEkoKSHcpRlDnNr5w==",
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
			"version": "0.27.2",
			"resolved": "https://registry.npmjs.org/@esbuild/linux-x64/-/linux-x64-0.27.2.tgz",
			"integrity": "sha512-uwp2Tip5aPmH+NRUwTcfLb+W32WXjpFejTIOWZFw/v7/KnpCDKG66u4DLcurQpiYTiYwQ9B7KOeMJvLCu/OvbA==",
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
			"version": "0.27.2",
			"resolved": "https://registry.npmjs.org/@esbuild/netbsd-arm64/-/netbsd-arm64-0.27.2.tgz",
			"integrity": "sha512-Kj6DiBlwXrPsCRDeRvGAUb/LNrBASrfqAIok+xB0LxK8CHqxZ037viF13ugfsIpePH93mX7xfJp97cyDuTZ3cw==",
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
			"version": "0.27.2",
			"resolved": "https://registry.npmjs.org/@esbuild/netbsd-x64/-/netbsd-x64-0.27.2.tgz",
			"integrity": "sha512-HwGDZ0VLVBY3Y+Nw0JexZy9o/nUAWq9MlV7cahpaXKW6TOzfVno3y3/M8Ga8u8Yr7GldLOov27xiCnqRZf0tCA==",
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
			"version": "0.27.2",
			"resolved": "https://registry.npmjs.org/@esbuild/openbsd-arm64/-/openbsd-arm64-0.27.2.tgz",
			"integrity": "sha512-DNIHH2BPQ5551A7oSHD0CKbwIA/Ox7+78/AWkbS5QoRzaqlev2uFayfSxq68EkonB+IKjiuxBFoV8ESJy8bOHA==",
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
			"version": "0.27.2",
			"resolved": "https://registry.npmjs.org/@esbuild/openbsd-x64/-/openbsd-x64-0.27.2.tgz",
			"integrity": "sha512-/it7w9Nb7+0KFIzjalNJVR5bOzA9Vay+yIPLVHfIQYG/j+j9VTH84aNB8ExGKPU4AzfaEvN9/V4HV+F+vo8OEg==",
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
		"node_modules/@esbuild/openharmony-arm64": {
			"version": "0.27.2",
			"resolved": "https://registry.npmjs.org/@esbuild/openharmony-arm64/-/openharmony-arm64-0.27.2.tgz",
			"integrity": "sha512-LRBbCmiU51IXfeXk59csuX/aSaToeG7w48nMwA6049Y4J4+VbWALAuXcs+qcD04rHDuSCSRKdmY63sruDS5qag==",
			"cpu": [
				"arm64"
			],
			"dev": true,
			"license": "MIT",
			"optional": true,
			"os": [
				"openharmony"
			],
			"engines": {
				"node": ">=18"
			}
		},
		"node_modules/@esbuild/sunos-x64": {
			"version": "0.27.2",
			"resolved": "https://registry.npmjs.org/@esbuild/sunos-x64/-/sunos-x64-0.27.2.tgz",
			"integrity": "sha512-kMtx1yqJHTmqaqHPAzKCAkDaKsffmXkPHThSfRwZGyuqyIeBvf08KSsYXl+abf5HDAPMJIPnbBfXvP2ZC2TfHg==",
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
			"version": "0.27.2",
			"resolved": "https://registry.npmjs.org/@esbuild/win32-arm64/-/win32-arm64-0.27.2.tgz",
			"integrity": "sha512-Yaf78O/B3Kkh+nKABUF++bvJv5Ijoy9AN1ww904rOXZFLWVc5OLOfL56W+C8F9xn5JQZa3UX6m+IktJnIb1Jjg==",
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
			"version": "0.27.2",
			"resolved": "https://registry.npmjs.org/@esbuild/win32-ia32/-/win32-ia32-0.27.2.tgz",
			"integrity": "sha512-Iuws0kxo4yusk7sw70Xa2E2imZU5HoixzxfGCdxwBdhiDgt9vX9VUCBhqcwY7/uh//78A1hMkkROMJq9l27oLQ==",
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
			"version": "0.27.2",
			"resolved": "https://registry.npmjs.org/@esbuild/win32-x64/-/win32-x64-0.27.2.tgz",
			"integrity": "sha512-sRdU18mcKf7F+YgheI/zGf5alZatMUTKj/jNS6l744f9u3WFu4v7twcUI9vu4mknF4Y9aDlblIie0IM+5xxaqQ==",
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
			"version": "1.7.4",
			"resolved": "https://registry.npmjs.org/@floating-ui/core/-/core-1.7.4.tgz",
			"integrity": "sha512-C3HlIdsBxszvm5McXlB8PeOEWfBhcGBTZGkGlWc2U0KFY5IwG5OQEuQ8rq52DZmcHDlPLd+YFBK+cZcytwIFWg==",
			"dev": true,
			"license": "MIT",
			"dependencies": {
				"@floating-ui/utils": "^0.2.10"
			}
		},
		"node_modules/@floating-ui/dom": {
			"version": "1.7.5",
			"resolved": "https://registry.npmjs.org/@floating-ui/dom/-/dom-1.7.5.tgz",
			"integrity": "sha512-N0bD2kIPInNHUHehXhMke1rBGs1dwqvC9O9KYMyyjK7iXt7GAhnro7UlcuYcGdS/yYOlq0MAVgrow8IbWJwyqg==",
			"dev": true,
			"license": "MIT",
			"dependencies": {
				"@floating-ui/core": "^1.7.4",
				"@floating-ui/utils": "^0.2.10"
			}
		},
		"node_modules/@floating-ui/utils": {
			"version": "0.2.10",
			"resolved": "https://registry.npmjs.org/@floating-ui/utils/-/utils-0.2.10.tgz",
			"integrity": "sha512-aGTxbpbg8/b5JfU1HXSrbH3wXZuLPJcNEcZQFMxLs3oSzgtVu6nFPkbbGGUvBcUjKV2YyB9Wxxabo+HEH9tcRQ==",
			"dev": true,
			"license": "MIT"
		},
		"node_modules/@jridgewell/gen-mapping": {
			"version": "0.3.13",
			"resolved": "https://registry.npmjs.org/@jridgewell/gen-mapping/-/gen-mapping-0.3.13.tgz",
			"integrity": "sha512-2kkt/7niJ6MgEPxF0bYdQ6etZaA+fQvDcLKckhy1yIQOzaoKjBBjSj63/aLVjYE3qhRt5dvM+uUyfCg6UKCBbA==",
			"dev": true,
			"license": "MIT",
			"dependencies": {
				"@jridgewell/sourcemap-codec": "^1.5.0",
				"@jridgewell/trace-mapping": "^0.3.24"
			}
		},
		"node_modules/@jridgewell/remapping": {
			"version": "2.3.5",
			"resolved": "https://registry.npmjs.org/@jridgewell/remapping/-/remapping-2.3.5.tgz",
			"integrity": "sha512-LI9u/+laYG4Ds1TDKSJW2YPrIlcVYOwi2fUC6xB43lueCjgxV4lffOCZCtYFiH6TNOX+tQKXx97T4IKHbhyHEQ==",
			"dev": true,
			"license": "MIT",
			"dependencies": {
				"@jridgewell/gen-mapping": "^0.3.5",
				"@jridgewell/trace-mapping": "^0.3.24"
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
		"node_modules/@jridgewell/sourcemap-codec": {
			"version": "1.5.5",
			"resolved": "https://registry.npmjs.org/@jridgewell/sourcemap-codec/-/sourcemap-codec-1.5.5.tgz",
			"integrity": "sha512-cYQ9310grqxueWbl+WuIUIaiUaDcj7WOq5fVhEljNVgRfOUhY9fy2zTvfoqWsnebh8Sl70VScFbICvJnLKB0Og==",
			"dev": true,
			"license": "MIT"
		},
		"node_modules/@jridgewell/trace-mapping": {
			"version": "0.3.31",
			"resolved": "https://registry.npmjs.org/@jridgewell/trace-mapping/-/trace-mapping-0.3.31.tgz",
			"integrity": "sha512-zzNR+SdQSDJzc8joaeP8QQoCQr8NuYx2dIIytl1QeBEZHJ9uW6hebsrYgbz8hJwUQao3TWCMtmfV8Nu1twOLAw==",
			"dev": true,
			"license": "MIT",
			"dependencies": {
				"@jridgewell/resolve-uri": "^3.1.0",
				"@jridgewell/sourcemap-codec": "^1.4.14"
			}
		},
		"node_modules/@parcel/watcher": {
			"version": "2.5.6",
			"resolved": "https://registry.npmjs.org/@parcel/watcher/-/watcher-2.5.6.tgz",
			"integrity": "sha512-tmmZ3lQxAe/k/+rNnXQRawJ4NjxO2hqiOLTHvWchtGZULp4RyFeh6aU4XdOYBFe2KE1oShQTv4AblOs2iOrNnQ==",
			"dev": true,
			"hasInstallScript": true,
			"license": "MIT",
			"optional": true,
			"dependencies": {
				"detect-libc": "^2.0.3",
				"is-glob": "^4.0.3",
				"node-addon-api": "^7.0.0",
				"picomatch": "^4.0.3"
			},
			"engines": {
				"node": ">= 10.0.0"
			},
			"funding": {
				"type": "opencollective",
				"url": "https://opencollective.com/parcel"
			},
			"optionalDependencies": {
				"@parcel/watcher-android-arm64": "2.5.6",
				"@parcel/watcher-darwin-arm64": "2.5.6",
				"@parcel/watcher-darwin-x64": "2.5.6",
				"@parcel/watcher-freebsd-x64": "2.5.6",
				"@parcel/watcher-linux-arm-glibc": "2.5.6",
				"@parcel/watcher-linux-arm-musl": "2.5.6",
				"@parcel/watcher-linux-arm64-glibc": "2.5.6",
				"@parcel/watcher-linux-arm64-musl": "2.5.6",
				"@parcel/watcher-linux-x64-glibc": "2.5.6",
				"@parcel/watcher-linux-x64-musl": "2.5.6",
				"@parcel/watcher-win32-arm64": "2.5.6",
				"@parcel/watcher-win32-ia32": "2.5.6",
				"@parcel/watcher-win32-x64": "2.5.6"
			}
		},
		"node_modules/@parcel/watcher-android-arm64": {
			"version": "2.5.6",
			"resolved": "https://registry.npmjs.org/@parcel/watcher-android-arm64/-/watcher-android-arm64-2.5.6.tgz",
			"integrity": "sha512-YQxSS34tPF/6ZG7r/Ih9xy+kP/WwediEUsqmtf0cuCV5TPPKw/PQHRhueUo6JdeFJaqV3pyjm0GdYjZotbRt/A==",
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
			"version": "2.5.6",
			"resolved": "https://registry.npmjs.org/@parcel/watcher-darwin-arm64/-/watcher-darwin-arm64-2.5.6.tgz",
			"integrity": "sha512-Z2ZdrnwyXvvvdtRHLmM4knydIdU9adO3D4n/0cVipF3rRiwP+3/sfzpAwA/qKFL6i1ModaabkU7IbpeMBgiVEA==",
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
			"version": "2.5.6",
			"resolved": "https://registry.npmjs.org/@parcel/watcher-darwin-x64/-/watcher-darwin-x64-2.5.6.tgz",
			"integrity": "sha512-HgvOf3W9dhithcwOWX9uDZyn1lW9R+7tPZ4sug+NGrGIo4Rk1hAXLEbcH1TQSqxts0NYXXlOWqVpvS1SFS4fRg==",
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
			"version": "2.5.6",
			"resolved": "https://registry.npmjs.org/@parcel/watcher-freebsd-x64/-/watcher-freebsd-x64-2.5.6.tgz",
			"integrity": "sha512-vJVi8yd/qzJxEKHkeemh7w3YAn6RJCtYlE4HPMoVnCpIXEzSrxErBW5SJBgKLbXU3WdIpkjBTeUNtyBVn8TRng==",
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
			"version": "2.5.6",
			"resolved": "https://registry.npmjs.org/@parcel/watcher-linux-arm-glibc/-/watcher-linux-arm-glibc-2.5.6.tgz",
			"integrity": "sha512-9JiYfB6h6BgV50CCfasfLf/uvOcJskMSwcdH1PHH9rvS1IrNy8zad6IUVPVUfmXr+u+Km9IxcfMLzgdOudz9EQ==",
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
			"version": "2.5.6",
			"resolved": "https://registry.npmjs.org/@parcel/watcher-linux-arm-musl/-/watcher-linux-arm-musl-2.5.6.tgz",
			"integrity": "sha512-Ve3gUCG57nuUUSyjBq/MAM0CzArtuIOxsBdQ+ftz6ho8n7s1i9E1Nmk/xmP323r2YL0SONs1EuwqBp2u1k5fxg==",
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
			"version": "2.5.6",
			"resolved": "https://registry.npmjs.org/@parcel/watcher-linux-arm64-glibc/-/watcher-linux-arm64-glibc-2.5.6.tgz",
			"integrity": "sha512-f2g/DT3NhGPdBmMWYoxixqYr3v/UXcmLOYy16Bx0TM20Tchduwr4EaCbmxh1321TABqPGDpS8D/ggOTaljijOA==",
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
			"version": "2.5.6",
			"resolved": "https://registry.npmjs.org/@parcel/watcher-linux-arm64-musl/-/watcher-linux-arm64-musl-2.5.6.tgz",
			"integrity": "sha512-qb6naMDGlbCwdhLj6hgoVKJl2odL34z2sqkC7Z6kzir8b5W65WYDpLB6R06KabvZdgoHI/zxke4b3zR0wAbDTA==",
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
			"version": "2.5.6",
			"resolved": "https://registry.npmjs.org/@parcel/watcher-linux-x64-glibc/-/watcher-linux-x64-glibc-2.5.6.tgz",
			"integrity": "sha512-kbT5wvNQlx7NaGjzPFu8nVIW1rWqV780O7ZtkjuWaPUgpv2NMFpjYERVi0UYj1msZNyCzGlaCWEtzc+exjMGbQ==",
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
			"version": "2.5.6",
			"resolved": "https://registry.npmjs.org/@parcel/watcher-linux-x64-musl/-/watcher-linux-x64-musl-2.5.6.tgz",
			"integrity": "sha512-1JRFeC+h7RdXwldHzTsmdtYR/Ku8SylLgTU/reMuqdVD7CtLwf0VR1FqeprZ0eHQkO0vqsbvFLXUmYm/uNKJBg==",
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
			"version": "2.5.6",
			"resolved": "https://registry.npmjs.org/@parcel/watcher-win32-arm64/-/watcher-win32-arm64-2.5.6.tgz",
			"integrity": "sha512-3ukyebjc6eGlw9yRt678DxVF7rjXatWiHvTXqphZLvo7aC5NdEgFufVwjFfY51ijYEWpXbqF5jtrK275z52D4Q==",
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
			"version": "2.5.6",
			"resolved": "https://registry.npmjs.org/@parcel/watcher-win32-ia32/-/watcher-win32-ia32-2.5.6.tgz",
			"integrity": "sha512-k35yLp1ZMwwee3Ez/pxBi5cf4AoBKYXj00CZ80jUz5h8prpiaQsiRPKQMxoLstNuqe2vR4RNPEAEcjEFzhEz/g==",
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
			"version": "2.5.6",
			"resolved": "https://registry.npmjs.org/@parcel/watcher-win32-x64/-/watcher-win32-x64-2.5.6.tgz",
			"integrity": "sha512-hbQlYcCq5dlAX9Qx+kFb0FHue6vbjlf0FrNzSKdYK2APUf7tGfGxQCk2ihEREmbR6ZMc0MVAD5RIX/41gpUzTw==",
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
			"version": "4.57.1",
			"resolved": "https://registry.npmjs.org/@rollup/rollup-android-arm-eabi/-/rollup-android-arm-eabi-4.57.1.tgz",
			"integrity": "sha512-A6ehUVSiSaaliTxai040ZpZ2zTevHYbvu/lDoeAteHI8QnaosIzm4qwtezfRg1jOYaUmnzLX1AOD6Z+UJjtifg==",
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
			"version": "4.57.1",
			"resolved": "https://registry.npmjs.org/@rollup/rollup-android-arm64/-/rollup-android-arm64-4.57.1.tgz",
			"integrity": "sha512-dQaAddCY9YgkFHZcFNS/606Exo8vcLHwArFZ7vxXq4rigo2bb494/xKMMwRRQW6ug7Js6yXmBZhSBRuBvCCQ3w==",
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
			"version": "4.57.1",
			"resolved": "https://registry.npmjs.org/@rollup/rollup-darwin-arm64/-/rollup-darwin-arm64-4.57.1.tgz",
			"integrity": "sha512-crNPrwJOrRxagUYeMn/DZwqN88SDmwaJ8Cvi/TN1HnWBU7GwknckyosC2gd0IqYRsHDEnXf328o9/HC6OkPgOg==",
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
			"version": "4.57.1",
			"resolved": "https://registry.npmjs.org/@rollup/rollup-darwin-x64/-/rollup-darwin-x64-4.57.1.tgz",
			"integrity": "sha512-Ji8g8ChVbKrhFtig5QBV7iMaJrGtpHelkB3lsaKzadFBe58gmjfGXAOfI5FV0lYMH8wiqsxKQ1C9B0YTRXVy4w==",
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
			"version": "4.57.1",
			"resolved": "https://registry.npmjs.org/@rollup/rollup-freebsd-arm64/-/rollup-freebsd-arm64-4.57.1.tgz",
			"integrity": "sha512-R+/WwhsjmwodAcz65guCGFRkMb4gKWTcIeLy60JJQbXrJ97BOXHxnkPFrP+YwFlaS0m+uWJTstrUA9o+UchFug==",
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
			"version": "4.57.1",
			"resolved": "https://registry.npmjs.org/@rollup/rollup-freebsd-x64/-/rollup-freebsd-x64-4.57.1.tgz",
			"integrity": "sha512-IEQTCHeiTOnAUC3IDQdzRAGj3jOAYNr9kBguI7MQAAZK3caezRrg0GxAb6Hchg4lxdZEI5Oq3iov/w/hnFWY9Q==",
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
			"version": "4.57.1",
			"resolved": "https://registry.npmjs.org/@rollup/rollup-linux-arm-gnueabihf/-/rollup-linux-arm-gnueabihf-4.57.1.tgz",
			"integrity": "sha512-F8sWbhZ7tyuEfsmOxwc2giKDQzN3+kuBLPwwZGyVkLlKGdV1nvnNwYD0fKQ8+XS6hp9nY7B+ZeK01EBUE7aHaw==",
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
			"version": "4.57.1",
			"resolved": "https://registry.npmjs.org/@rollup/rollup-linux-arm-musleabihf/-/rollup-linux-arm-musleabihf-4.57.1.tgz",
			"integrity": "sha512-rGfNUfn0GIeXtBP1wL5MnzSj98+PZe/AXaGBCRmT0ts80lU5CATYGxXukeTX39XBKsxzFpEeK+Mrp9faXOlmrw==",
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
			"version": "4.57.1",
			"resolved": "https://registry.npmjs.org/@rollup/rollup-linux-arm64-gnu/-/rollup-linux-arm64-gnu-4.57.1.tgz",
			"integrity": "sha512-MMtej3YHWeg/0klK2Qodf3yrNzz6CGjo2UntLvk2RSPlhzgLvYEB3frRvbEF2wRKh1Z2fDIg9KRPe1fawv7C+g==",
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
			"version": "4.57.1",
			"resolved": "https://registry.npmjs.org/@rollup/rollup-linux-arm64-musl/-/rollup-linux-arm64-musl-4.57.1.tgz",
			"integrity": "sha512-1a/qhaaOXhqXGpMFMET9VqwZakkljWHLmZOX48R0I/YLbhdxr1m4gtG1Hq7++VhVUmf+L3sTAf9op4JlhQ5u1Q==",
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
		"node_modules/@rollup/rollup-linux-loong64-gnu": {
			"version": "4.57.1",
			"resolved": "https://registry.npmjs.org/@rollup/rollup-linux-loong64-gnu/-/rollup-linux-loong64-gnu-4.57.1.tgz",
			"integrity": "sha512-QWO6RQTZ/cqYtJMtxhkRkidoNGXc7ERPbZN7dVW5SdURuLeVU7lwKMpo18XdcmpWYd0qsP1bwKPf7DNSUinhvA==",
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
		"node_modules/@rollup/rollup-linux-loong64-musl": {
			"version": "4.57.1",
			"resolved": "https://registry.npmjs.org/@rollup/rollup-linux-loong64-musl/-/rollup-linux-loong64-musl-4.57.1.tgz",
			"integrity": "sha512-xpObYIf+8gprgWaPP32xiN5RVTi/s5FCR+XMXSKmhfoJjrpRAjCuuqQXyxUa/eJTdAE6eJ+KDKaoEqjZQxh3Gw==",
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
		"node_modules/@rollup/rollup-linux-ppc64-gnu": {
			"version": "4.57.1",
			"resolved": "https://registry.npmjs.org/@rollup/rollup-linux-ppc64-gnu/-/rollup-linux-ppc64-gnu-4.57.1.tgz",
			"integrity": "sha512-4BrCgrpZo4hvzMDKRqEaW1zeecScDCR+2nZ86ATLhAoJ5FQ+lbHVD3ttKe74/c7tNT9c6F2viwB3ufwp01Oh2w==",
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
		"node_modules/@rollup/rollup-linux-ppc64-musl": {
			"version": "4.57.1",
			"resolved": "https://registry.npmjs.org/@rollup/rollup-linux-ppc64-musl/-/rollup-linux-ppc64-musl-4.57.1.tgz",
			"integrity": "sha512-NOlUuzesGauESAyEYFSe3QTUguL+lvrN1HtwEEsU2rOwdUDeTMJdO5dUYl/2hKf9jWydJrO9OL/XSSf65R5+Xw==",
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
			"version": "4.57.1",
			"resolved": "https://registry.npmjs.org/@rollup/rollup-linux-riscv64-gnu/-/rollup-linux-riscv64-gnu-4.57.1.tgz",
			"integrity": "sha512-ptA88htVp0AwUUqhVghwDIKlvJMD/fmL/wrQj99PRHFRAG6Z5nbWoWG4o81Nt9FT+IuqUQi+L31ZKAFeJ5Is+A==",
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
		"node_modules/@rollup/rollup-linux-riscv64-musl": {
			"version": "4.57.1",
			"resolved": "https://registry.npmjs.org/@rollup/rollup-linux-riscv64-musl/-/rollup-linux-riscv64-musl-4.57.1.tgz",
			"integrity": "sha512-S51t7aMMTNdmAMPpBg7OOsTdn4tySRQvklmL3RpDRyknk87+Sp3xaumlatU+ppQ+5raY7sSTcC2beGgvhENfuw==",
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
			"version": "4.57.1",
			"resolved": "https://registry.npmjs.org/@rollup/rollup-linux-s390x-gnu/-/rollup-linux-s390x-gnu-4.57.1.tgz",
			"integrity": "sha512-Bl00OFnVFkL82FHbEqy3k5CUCKH6OEJL54KCyx2oqsmZnFTR8IoNqBF+mjQVcRCT5sB6yOvK8A37LNm/kPJiZg==",
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
			"version": "4.57.1",
			"resolved": "https://registry.npmjs.org/@rollup/rollup-linux-x64-gnu/-/rollup-linux-x64-gnu-4.57.1.tgz",
			"integrity": "sha512-ABca4ceT4N+Tv/GtotnWAeXZUZuM/9AQyCyKYyKnpk4yoA7QIAuBt6Hkgpw8kActYlew2mvckXkvx0FfoInnLg==",
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
			"version": "4.57.1",
			"resolved": "https://registry.npmjs.org/@rollup/rollup-linux-x64-musl/-/rollup-linux-x64-musl-4.57.1.tgz",
			"integrity": "sha512-HFps0JeGtuOR2convgRRkHCekD7j+gdAuXM+/i6kGzQtFhlCtQkpwtNzkNj6QhCDp7DRJ7+qC/1Vg2jt5iSOFw==",
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
		"node_modules/@rollup/rollup-openbsd-x64": {
			"version": "4.57.1",
			"resolved": "https://registry.npmjs.org/@rollup/rollup-openbsd-x64/-/rollup-openbsd-x64-4.57.1.tgz",
			"integrity": "sha512-H+hXEv9gdVQuDTgnqD+SQffoWoc0Of59AStSzTEj/feWTBAnSfSD3+Dql1ZruJQxmykT/JVY0dE8Ka7z0DH1hw==",
			"cpu": [
				"x64"
			],
			"dev": true,
			"license": "MIT",
			"optional": true,
			"os": [
				"openbsd"
			]
		},
		"node_modules/@rollup/rollup-openharmony-arm64": {
			"version": "4.57.1",
			"resolved": "https://registry.npmjs.org/@rollup/rollup-openharmony-arm64/-/rollup-openharmony-arm64-4.57.1.tgz",
			"integrity": "sha512-4wYoDpNg6o/oPximyc/NG+mYUejZrCU2q+2w6YZqrAs2UcNUChIZXjtafAiiZSUc7On8v5NyNj34Kzj/Ltk6dQ==",
			"cpu": [
				"arm64"
			],
			"dev": true,
			"license": "MIT",
			"optional": true,
			"os": [
				"openharmony"
			]
		},
		"node_modules/@rollup/rollup-win32-arm64-msvc": {
			"version": "4.57.1",
			"resolved": "https://registry.npmjs.org/@rollup/rollup-win32-arm64-msvc/-/rollup-win32-arm64-msvc-4.57.1.tgz",
			"integrity": "sha512-O54mtsV/6LW3P8qdTcamQmuC990HDfR71lo44oZMZlXU4tzLrbvTii87Ni9opq60ds0YzuAlEr/GNwuNluZyMQ==",
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
			"version": "4.57.1",
			"resolved": "https://registry.npmjs.org/@rollup/rollup-win32-ia32-msvc/-/rollup-win32-ia32-msvc-4.57.1.tgz",
			"integrity": "sha512-P3dLS+IerxCT/7D2q2FYcRdWRl22dNbrbBEtxdWhXrfIMPP9lQhb5h4Du04mdl5Woq05jVCDPCMF7Ub0NAjIew==",
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
		"node_modules/@rollup/rollup-win32-x64-gnu": {
			"version": "4.57.1",
			"resolved": "https://registry.npmjs.org/@rollup/rollup-win32-x64-gnu/-/rollup-win32-x64-gnu-4.57.1.tgz",
			"integrity": "sha512-VMBH2eOOaKGtIJYleXsi2B8CPVADrh+TyNxJ4mWPnKfLB/DBUmzW+5m1xUrcwWoMfSLagIRpjUFeW5CO5hyciQ==",
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
		"node_modules/@rollup/rollup-win32-x64-msvc": {
			"version": "4.57.1",
			"resolved": "https://registry.npmjs.org/@rollup/rollup-win32-x64-msvc/-/rollup-win32-x64-msvc-4.57.1.tgz",
			"integrity": "sha512-mxRFDdHIWRxg3UfIIAwCm6NzvxG0jDX/wBN6KsQFTvKFqqg9vTrWUE68qEjHt19A5wwx5X5aUi2zuZT7YR0jrA==",
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
		"node_modules/@sveltejs/acorn-typescript": {
			"version": "1.0.8",
			"resolved": "https://registry.npmjs.org/@sveltejs/acorn-typescript/-/acorn-typescript-1.0.8.tgz",
			"integrity": "sha512-esgN+54+q0NjB0Y/4BomT9samII7jGwNy/2a3wNZbT2A2RpmXsXwUt24LvLhx6jUq2gVk4cWEvcRO6MFQbOfNA==",
			"dev": true,
			"license": "MIT",
			"peerDependencies": {
				"acorn": "^8.9.0"
			}
		},
		"node_modules/@sveltejs/vite-plugin-svelte": {
			"version": "6.2.4",
			"resolved": "https://registry.npmjs.org/@sveltejs/vite-plugin-svelte/-/vite-plugin-svelte-6.2.4.tgz",
			"integrity": "sha512-ou/d51QSdTyN26D7h6dSpusAKaZkAiGM55/AKYi+9AGZw7q85hElbjK3kEyzXHhLSnRISHOYzVge6x0jRZ7DXA==",
			"dev": true,
			"license": "MIT",
			"peer": true,
			"dependencies": {
				"@sveltejs/vite-plugin-svelte-inspector": "^5.0.0",
				"deepmerge": "^4.3.1",
				"magic-string": "^0.30.21",
				"obug": "^2.1.0",
				"vitefu": "^1.1.1"
			},
			"engines": {
				"node": "^20.19 || ^22.12 || >=24"
			},
			"peerDependencies": {
				"svelte": "^5.0.0",
				"vite": "^6.3.0 || ^7.0.0"
			}
		},
		"node_modules/@sveltejs/vite-plugin-svelte-inspector": {
			"version": "5.0.2",
			"resolved": "https://registry.npmjs.org/@sveltejs/vite-plugin-svelte-inspector/-/vite-plugin-svelte-inspector-5.0.2.tgz",
			"integrity": "sha512-TZzRTcEtZffICSAoZGkPSl6Etsj2torOVrx6Uw0KpXxrec9Gg6jFWQ60Q3+LmNGfZSxHRCZL7vXVZIWmuV50Ig==",
			"dev": true,
			"license": "MIT",
			"dependencies": {
				"obug": "^2.1.0"
			},
			"engines": {
				"node": "^20.19 || ^22.12 || >=24"
			},
			"peerDependencies": {
				"@sveltejs/vite-plugin-svelte": "^6.0.0-next.0",
				"svelte": "^5.0.0",
				"vite": "^6.3.0 || ^7.0.0"
			}
		},
		"node_modules/@tailwindcss/browser": {
			"version": "4.1.18",
			"resolved": "https://registry.npmjs.org/@tailwindcss/browser/-/browser-4.1.18.tgz",
			"integrity": "sha512-cnAUsj2TXGslPmDEnM469b4MAFT/ifxjt+Bla/2vBTBzp/PIPo6pjKxRrd8x+S84/S1bAtEIlzbJaaJxgZUV8Q==",
			"dev": true,
			"license": "MIT"
		},
		"node_modules/@tsconfig/svelte": {
			"version": "5.0.6",
			"resolved": "https://registry.npmjs.org/@tsconfig/svelte/-/svelte-5.0.6.tgz",
			"integrity": "sha512-yGxYL0I9eETH1/DR9qVJey4DAsCdeau4a9wYPKuXfEhm8lFO8wg+LLYJjIpAm6Fw7HSlhepPhYPDop75485yWQ==",
			"dev": true,
			"license": "MIT"
		},
		"node_modules/@types/estree": {
			"version": "1.0.8",
			"resolved": "https://registry.npmjs.org/@types/estree/-/estree-1.0.8.tgz",
			"integrity": "sha512-dWHzHa2WqEXI/O1E9OjrocMTKJl2mSrEolh1Iomrv6U+JuNwaHXsXx9bLu5gG7BUWFIN0skIQJQ/L1rIex4X6w==",
			"dev": true,
			"license": "MIT"
		},
		"node_modules/acorn": {
			"version": "8.15.0",
			"resolved": "https://registry.npmjs.org/acorn/-/acorn-8.15.0.tgz",
			"integrity": "sha512-NZyJarBfL7nWwIq+FDL6Zp/yHEhePMNnnJ0y3qfieCrmNvYct8uvtiV41UvlSe6apAfk0fY1FbWx+NwfmpvtTg==",
			"dev": true,
			"license": "MIT",
			"peer": true,
			"bin": {
				"acorn": "bin/acorn"
			},
			"engines": {
				"node": ">=0.4.0"
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
			"version": "5.5.16",
			"resolved": "https://registry.npmjs.org/daisyui/-/daisyui-5.5.16.tgz",
			"integrity": "sha512-EPGcgduRIwXoQPuIl+r2BXRQsOutvf7UEB/mBfRiD2fdOYYnUqDU5PNp2eONnRqo1DxSsnD01gCRPccH65FWtQ==",
			"dev": true,
			"license": "MIT",
			"funding": {
				"url": "https://github.com/saadeghi/daisyui?sponsor=1"
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
			"version": "2.1.2",
			"resolved": "https://registry.npmjs.org/detect-libc/-/detect-libc-2.1.2.tgz",
			"integrity": "sha512-Btj2BOOO83o3WyH59e8MgXsxEQVcarkUOpEYrubB0urwnN10yQ364rsiByU11nZlqWYZm05i/of7io4mzihBtQ==",
			"dev": true,
			"license": "Apache-2.0",
			"optional": true,
			"engines": {
				"node": ">=8"
			}
		},
		"node_modules/devalue": {
			"version": "5.6.2",
			"resolved": "https://registry.npmjs.org/devalue/-/devalue-5.6.2.tgz",
			"integrity": "sha512-nPRkjWzzDQlsejL1WVifk5rvcFi/y1onBRxjaFMjZeR9mFpqu2gmAZ9xUB9/IEanEP/vBtGeGganC/GO1fmufg==",
			"dev": true,
			"license": "MIT"
		},
		"node_modules/embla-carousel": {
			"version": "8.6.0",
			"resolved": "https://registry.npmjs.org/embla-carousel/-/embla-carousel-8.6.0.tgz",
			"integrity": "sha512-SjWyZBHJPbqxHOzckOfo8lHisEaJWmwd23XppYFYVh10bU66/Pn5tkVkbkCMZVdbUE5eTCI2nD8OyIP4Z+uwkA==",
			"dev": true,
			"license": "MIT",
			"peer": true
		},
		"node_modules/embla-carousel-autoplay": {
			"version": "8.6.0",
			"resolved": "https://registry.npmjs.org/embla-carousel-autoplay/-/embla-carousel-autoplay-8.6.0.tgz",
			"integrity": "sha512-OBu5G3nwaSXkZCo1A6LTaFMZ8EpkYbwIaH+bPqdBnDGQ2fh4+NbzjXjs2SktoPNKCtflfVMc75njaDHOYXcrsA==",
			"dev": true,
			"license": "MIT",
			"peerDependencies": {
				"embla-carousel": "8.6.0"
			}
		},
		"node_modules/esbuild": {
			"version": "0.27.2",
			"resolved": "https://registry.npmjs.org/esbuild/-/esbuild-0.27.2.tgz",
			"integrity": "sha512-HyNQImnsOC7X9PMNaCIeAm4ISCQXs5a5YasTXVliKv4uuBo1dKrG0A+uQS8M5eXjVMnLg3WgXaKvprHlFJQffw==",
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
				"@esbuild/aix-ppc64": "0.27.2",
				"@esbuild/android-arm": "0.27.2",
				"@esbuild/android-arm64": "0.27.2",
				"@esbuild/android-x64": "0.27.2",
				"@esbuild/darwin-arm64": "0.27.2",
				"@esbuild/darwin-x64": "0.27.2",
				"@esbuild/freebsd-arm64": "0.27.2",
				"@esbuild/freebsd-x64": "0.27.2",
				"@esbuild/linux-arm": "0.27.2",
				"@esbuild/linux-arm64": "0.27.2",
				"@esbuild/linux-ia32": "0.27.2",
				"@esbuild/linux-loong64": "0.27.2",
				"@esbuild/linux-mips64el": "0.27.2",
				"@esbuild/linux-ppc64": "0.27.2",
				"@esbuild/linux-riscv64": "0.27.2",
				"@esbuild/linux-s390x": "0.27.2",
				"@esbuild/linux-x64": "0.27.2",
				"@esbuild/netbsd-arm64": "0.27.2",
				"@esbuild/netbsd-x64": "0.27.2",
				"@esbuild/openbsd-arm64": "0.27.2",
				"@esbuild/openbsd-x64": "0.27.2",
				"@esbuild/openharmony-arm64": "0.27.2",
				"@esbuild/sunos-x64": "0.27.2",
				"@esbuild/win32-arm64": "0.27.2",
				"@esbuild/win32-ia32": "0.27.2",
				"@esbuild/win32-x64": "0.27.2"
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
			"version": "2.2.2",
			"resolved": "https://registry.npmjs.org/esrap/-/esrap-2.2.2.tgz",
			"integrity": "sha512-zA6497ha+qKvoWIK+WM9NAh5ni17sKZKhbS5B3PoYbBvaYHZWoS33zmFybmyqpn07RLUxSmn+RCls2/XF+d0oQ==",
			"dev": true,
			"license": "MIT",
			"dependencies": {
				"@jridgewell/sourcemap-codec": "^1.4.15"
			}
		},
		"node_modules/fdir": {
			"version": "6.5.0",
			"resolved": "https://registry.npmjs.org/fdir/-/fdir-6.5.0.tgz",
			"integrity": "sha512-tIbYtZbucOs0BRGqPJkshJUYdL+SDH7dVM8gjy+ERp3WAUjLEFJE+02kanyHtwjWOnwrKYBiwAmM0p4kLJAnXg==",
			"dev": true,
			"license": "MIT",
			"engines": {
				"node": ">=12.0.0"
			},
			"peerDependencies": {
				"picomatch": "^3 || ^4"
			},
			"peerDependenciesMeta": {
				"picomatch": {
					"optional": true
				}
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
			"version": "5.1.4",
			"resolved": "https://registry.npmjs.org/immutable/-/immutable-5.1.4.tgz",
			"integrity": "sha512-p6u1bG3YSnINT5RQmx/yRZBpenIl30kVxkTLDyHLIMk0gict704Q9n+thfDI7lTRm9vXdDYutVzXhzcThxTnXA==",
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
		"node_modules/locate-character": {
			"version": "3.0.0",
			"resolved": "https://registry.npmjs.org/locate-character/-/locate-character-3.0.0.tgz",
			"integrity": "sha512-SW13ws7BjaeJ6p7Q6CO2nchbYEc3X3J6WrmTTDto7yMPqVSZTUyY5Tjbid+Ab8gLnATtygYtiDIJGQRRn2ZOiA==",
			"dev": true,
			"license": "MIT"
		},
		"node_modules/magic-string": {
			"version": "0.30.21",
			"resolved": "https://registry.npmjs.org/magic-string/-/magic-string-0.30.21.tgz",
			"integrity": "sha512-vd2F4YUyEXKGcLHoq+TEyCjxueSeHnFxyyjNp80yg0XV4vUhnDer/lvvlqM/arB5bXQN5K2/3oinyCRyx8T2CQ==",
			"dev": true,
			"license": "MIT",
			"dependencies": {
				"@jridgewell/sourcemap-codec": "^1.5.5"
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
		"node_modules/nanoid": {
			"version": "3.3.11",
			"resolved": "https://registry.npmjs.org/nanoid/-/nanoid-3.3.11.tgz",
			"integrity": "sha512-N8SpfPUnUp1bK+PMYW8qSWdl9U+wwNWI4QKxOYDy9JAro3WMX7p2OeVRF9v+347pnakNevPmiHhNmZ2HbFA76w==",
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
		"node_modules/obug": {
			"version": "2.1.1",
			"resolved": "https://registry.npmjs.org/obug/-/obug-2.1.1.tgz",
			"integrity": "sha512-uTqF9MuPraAQ+IsnPf366RG4cP9RtUi7MLO1N3KEc+wb0a6yKpeL0lmk2IB1jY5KHPAlTc6T/JRdC/YqxHNwkQ==",
			"dev": true,
			"funding": [
				"https://github.com/sponsors/sxzz",
				"https://opencollective.com/debug"
			],
			"license": "MIT"
		},
		"node_modules/picocolors": {
			"version": "1.1.1",
			"resolved": "https://registry.npmjs.org/picocolors/-/picocolors-1.1.1.tgz",
			"integrity": "sha512-xceH2snhtb5M9liqDsmEw56le376mTZkEX/jEb/RxNFyegNul7eNslCXP9FDj/Lcu0X8KEyMceP2ntpaHrDEVA==",
			"dev": true,
			"license": "ISC"
		},
		"node_modules/picomatch": {
			"version": "4.0.3",
			"resolved": "https://registry.npmjs.org/picomatch/-/picomatch-4.0.3.tgz",
			"integrity": "sha512-5gTmgEY/sqK6gFXLIsQNH19lWb4ebPDLA4SdLP7dsWkIXHWlG66oPuVvXSGFPppYZz8ZDZq0dYYrbHfBCVUb1Q==",
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
			"version": "8.5.6",
			"resolved": "https://registry.npmjs.org/postcss/-/postcss-8.5.6.tgz",
			"integrity": "sha512-3Ybi1tAuwAP9s0r1UQ2J4n5Y0G05bJkpUIO0/bI9MhwmD70S5aTWbXGBwxHrelT+XM1k6dM0pk+SwNkpTRN7Pg==",
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
				"nanoid": "^3.3.11",
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
			"version": "4.57.1",
			"resolved": "https://registry.npmjs.org/rollup/-/rollup-4.57.1.tgz",
			"integrity": "sha512-oQL6lgK3e2QZeQ7gcgIkS2YZPg5slw37hYufJ3edKlfQSGGm8ICoxswK15ntSzF/a8+h7ekRy7k7oWc3BQ7y8A==",
			"dev": true,
			"license": "MIT",
			"dependencies": {
				"@types/estree": "1.0.8"
			},
			"bin": {
				"rollup": "dist/bin/rollup"
			},
			"engines": {
				"node": ">=18.0.0",
				"npm": ">=8.0.0"
			},
			"optionalDependencies": {
				"@rollup/rollup-android-arm-eabi": "4.57.1",
				"@rollup/rollup-android-arm64": "4.57.1",
				"@rollup/rollup-darwin-arm64": "4.57.1",
				"@rollup/rollup-darwin-x64": "4.57.1",
				"@rollup/rollup-freebsd-arm64": "4.57.1",
				"@rollup/rollup-freebsd-x64": "4.57.1",
				"@rollup/rollup-linux-arm-gnueabihf": "4.57.1",
				"@rollup/rollup-linux-arm-musleabihf": "4.57.1",
				"@rollup/rollup-linux-arm64-gnu": "4.57.1",
				"@rollup/rollup-linux-arm64-musl": "4.57.1",
				"@rollup/rollup-linux-loong64-gnu": "4.57.1",
				"@rollup/rollup-linux-loong64-musl": "4.57.1",
				"@rollup/rollup-linux-ppc64-gnu": "4.57.1",
				"@rollup/rollup-linux-ppc64-musl": "4.57.1",
				"@rollup/rollup-linux-riscv64-gnu": "4.57.1",
				"@rollup/rollup-linux-riscv64-musl": "4.57.1",
				"@rollup/rollup-linux-s390x-gnu": "4.57.1",
				"@rollup/rollup-linux-x64-gnu": "4.57.1",
				"@rollup/rollup-linux-x64-musl": "4.57.1",
				"@rollup/rollup-openbsd-x64": "4.57.1",
				"@rollup/rollup-openharmony-arm64": "4.57.1",
				"@rollup/rollup-win32-arm64-msvc": "4.57.1",
				"@rollup/rollup-win32-ia32-msvc": "4.57.1",
				"@rollup/rollup-win32-x64-gnu": "4.57.1",
				"@rollup/rollup-win32-x64-msvc": "4.57.1",
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
			"version": "1.97.3",
			"resolved": "https://registry.npmjs.org/sass/-/sass-1.97.3.tgz",
			"integrity": "sha512-fDz1zJpd5GycprAbu4Q2PV/RprsRtKC/0z82z0JLgdytmcq0+ujJbJ/09bPGDxCLkKY3Np5cRAOcWiVkLXJURg==",
			"dev": true,
			"license": "MIT",
			"peer": true,
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
			"version": "5.49.1",
			"resolved": "https://registry.npmjs.org/svelte/-/svelte-5.49.1.tgz",
			"integrity": "sha512-jj95WnbKbXsXXngYj28a4zx8jeZx50CN/J4r0CEeax2pbfdsETv/J1K8V9Hbu3DCXnpHz5qAikICuxEooi7eNQ==",
			"dev": true,
			"license": "MIT",
			"peer": true,
			"dependencies": {
				"@jridgewell/remapping": "^2.3.4",
				"@jridgewell/sourcemap-codec": "^1.5.0",
				"@sveltejs/acorn-typescript": "^1.0.5",
				"@types/estree": "^1.0.5",
				"acorn": "^8.12.1",
				"aria-query": "^5.3.1",
				"axobject-query": "^4.1.0",
				"clsx": "^2.1.1",
				"devalue": "^5.6.2",
				"esm-env": "^1.2.1",
				"esrap": "^2.2.2",
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
			"version": "4.3.6",
			"resolved": "https://registry.npmjs.org/svelte-check/-/svelte-check-4.3.6.tgz",
			"integrity": "sha512-uBkz96ElE3G4pt9E1Tw0xvBfIUQkeH794kDQZdAUk795UVMr+NJZpuFSS62vcmO/DuSalK83LyOwhgWq8YGU1Q==",
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
		"node_modules/tinyglobby": {
			"version": "0.2.15",
			"resolved": "https://registry.npmjs.org/tinyglobby/-/tinyglobby-0.2.15.tgz",
			"integrity": "sha512-j2Zq4NyQYG5XMST4cbs02Ak8iJUdxRM0XI5QyxXuZOzKOINmWurp3smXu3y5wDcJrptwpSjgXHzIQxR0omXljQ==",
			"dev": true,
			"license": "MIT",
			"dependencies": {
				"fdir": "^6.5.0",
				"picomatch": "^4.0.3"
			},
			"engines": {
				"node": ">=12.0.0"
			},
			"funding": {
				"url": "https://github.com/sponsors/SuperchupuDev"
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
			"version": "5.9.3",
			"resolved": "https://registry.npmjs.org/typescript/-/typescript-5.9.3.tgz",
			"integrity": "sha512-jl1vZzPDinLr9eUt3J/t7V6FgNEw9QjvBPdysz9KfQDD41fQrC2Y4vKQdiaUpFT4bXlb1RHhLpp8wtm6M5TgSw==",
			"dev": true,
			"license": "Apache-2.0",
			"peer": true,
			"bin": {
				"tsc": "bin/tsc",
				"tsserver": "bin/tsserver"
			},
			"engines": {
				"node": ">=14.17"
			}
		},
		"node_modules/vite": {
			"version": "7.3.1",
			"resolved": "https://registry.npmjs.org/vite/-/vite-7.3.1.tgz",
			"integrity": "sha512-w+N7Hifpc3gRjZ63vYBXA56dvvRlNWRczTdmCBBa+CotUzAPf5b7YMdMR/8CQoeYE5LX3W4wj6RYTgonm1b9DA==",
			"dev": true,
			"license": "MIT",
			"peer": true,
			"dependencies": {
				"esbuild": "^0.27.0",
				"fdir": "^6.5.0",
				"picomatch": "^4.0.3",
				"postcss": "^8.5.6",
				"rollup": "^4.43.0",
				"tinyglobby": "^0.2.15"
			},
			"bin": {
				"vite": "bin/vite.js"
			},
			"engines": {
				"node": "^20.19.0 || >=22.12.0"
			},
			"funding": {
				"url": "https://github.com/vitejs/vite?sponsor=1"
			},
			"optionalDependencies": {
				"fsevents": "~2.3.3"
			},
			"peerDependencies": {
				"@types/node": "^20.19.0 || >=22.12.0",
				"jiti": ">=1.21.0",
				"less": "^4.0.0",
				"lightningcss": "^1.21.0",
				"sass": "^1.70.0",
				"sass-embedded": "^1.70.0",
				"stylus": ">=0.54.8",
				"sugarss": "^5.0.0",
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
			"version": "1.1.1",
			"resolved": "https://registry.npmjs.org/vitefu/-/vitefu-1.1.1.tgz",
			"integrity": "sha512-B/Fegf3i8zh0yFbpzZ21amWzHmuNlLlmJT6n7bu5e+pCHUKQIfXSYokrqOBGEMMe9UG2sostKQF9mml/vYaWJQ==",
			"dev": true,
			"license": "MIT",
			"workspaces": [
				"tests/deps/*",
				"tests/projects/*",
				"tests/projects/workspace/packages/*"
			],
			"peerDependencies": {
				"vite": "^3.0.0 || ^4.0.0 || ^5.0.0 || ^6.0.0 || ^7.0.0-beta.0"
			},
			"peerDependenciesMeta": {
				"vite": {
					"optional": true
				}
			}
		},
		"node_modules/zimmerframe": {
			"version": "1.1.4",
			"resolved": "https://registry.npmjs.org/zimmerframe/-/zimmerframe-1.1.4.tgz",
			"integrity": "sha512-B58NGBEoc8Y9MWWCQGl/gq9xBCe4IiKM0a2x7GZdQKOW5Exr8S1W24J6OgM1njK8xCRGvAJIL/MxXHf6SkmQKQ==",
			"dev": true,
			"license": "MIT"
		}
	}
}
`;export{t as default};
