/* eslint-disable @typescript-eslint/prefer-readonly */
import {page} from '$app/state';
import {BROWSER} from 'esm-env';

export type Frameworks = 'angular' | 'react' | 'svelte';
export type ApiFrameworks = 'typescript' | Frameworks;
export type PackageType = 'headless' | 'bootstrap';

const baseCanonicalURL = 'https://www.agnosui.dev/latest/';
const tabRegExp = /^\/docs\/\[framework\]\/(components|daisyUI)\/[^/]*\/([^/]*)/;

export const routing: {
	/**
	 * How deep the current route is compared to base
	 */
	routeLevel: number;
	/**
	 * Absolute path to root
	 */
	pathToRoot: string;
	/**
	 * Canonical URL
	 */
	canonicalURL: string;
	/**
	 * Current non-typescript selected framework
	 */
	selectedFramework: Frameworks;
	/**
	 * Current selected framework (including typescript for api)
	 */
	selectedApiFramework: ApiFrameworks;
	/**
	 * Current package type
	 */
	selectedPackageType: PackageType | undefined;
	/**
	 * Current selected tab
	 */
	selectedTabName: string | undefined;
} = BROWSER
	? new (class Routing {
			#routeLevel = $derived(
				page.route.id ? page.route.id.split('/').length - 2 + Object.values(page.params).reduce((pV, cur) => pV + cur.split('/').length - 1, 0) : -1,
			);

			// Return the url relative path to root, ex './', '../' or '../..'
			#relativePathToRoot = $derived(this.#routeLevel > 0 ? '../'.repeat(this.#routeLevel) : './');

			#pathToRoot = $derived(new URL(this.#relativePathToRoot, page.url.href).href);

			#canonicalURL = $derived(page.url.href.replace(new URL(this.#relativePathToRoot, page.url.href).href, baseCanonicalURL));

			#previousFwk: Frameworks = 'angular';
			#selectedFramework = $derived.by(() => {
				if (page.params.framework && page.params.framework !== 'typescript') {
					this.#previousFwk = page.params.framework as Frameworks;
				}
				return this.#previousFwk;
			});

			#previousApiFwk: ApiFrameworks = 'angular';
			#selectedApiFramework = $derived.by(() => {
				if (page.params.framework) {
					this.#previousApiFwk = page.params.framework as Frameworks;
				}
				return this.#previousApiFwk;
			});

			#selectedPackageType = $derived.by(() => {
				if (page.params.type) {
					return page.params.type as PackageType;
				}
				if (page.url.pathname.match(/\/daisyUI\//)) {
					return 'headless';
				}
				if (page.url.pathname.match(/\/docs\/[^/]*\/components\//)) {
					return 'bootstrap';
				}
				return undefined;
			});

			#selectedTabName = $derived(tabRegExp.exec(page.route.id || '')?.[2]);

			get routeLevel() {
				return this.#routeLevel;
			}
			get pathToRoot() {
				return this.#pathToRoot;
			}
			get canonicalURL() {
				return this.#canonicalURL;
			}
			get selectedFramework() {
				return this.#selectedFramework;
			}
			get selectedApiFramework() {
				return this.#selectedApiFramework;
			}
			get selectedPackageType() {
				return this.#selectedPackageType;
			}
			get selectedTabName() {
				return this.#selectedTabName;
			}
		})()
	: new (class Routing {
			get routeLevel() {
				return page.route.id
					? page.route.id.split('/').length - 2 + Object.values(page.params).reduce((pV, cur) => pV + cur.split('/').length - 1, 0)
					: -1;
			}
			get pathToRoot() {
				return this.routeLevel > 0 ? '../'.repeat(this.routeLevel) : './';
			}
			// Return the url relative path to root, ex './', '../' or '../..'
			get #relativePathToRoot() {
				return this.routeLevel > 0 ? '../'.repeat(this.routeLevel) : './';
			}
			get canonicalURL() {
				return page.url.href.replace(new URL(this.#relativePathToRoot, page.url.href).href, baseCanonicalURL);
			}
			#previousFwk: Frameworks = 'angular';
			get selectedFramework() {
				if (page.params.framework && page.params.framework !== 'typescript') {
					this.#previousFwk = page.params.framework as Frameworks;
				}
				return this.#previousFwk;
			}
			#previousApiFwk: ApiFrameworks = 'angular';
			get selectedApiFramework() {
				if (page.params.framework) {
					this.#previousApiFwk = page.params.framework as Frameworks;
				}
				return this.#previousApiFwk;
			}
			get selectedPackageType() {
				if (page.params.type) {
					return page.params.type as PackageType;
				}
				if (page.url.pathname.match(/\/daisyUI\//)) {
					return 'headless';
				}
				if (page.url.pathname.match(/\/docs\/[^/]*\/components\//)) {
					return 'bootstrap';
				}
				return undefined;
			}
			get selectedTabName() {
				return tabRegExp.exec(page.route.id || '')?.[2];
			}
		})();
