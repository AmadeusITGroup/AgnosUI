import type {Page, Locator} from '@playwright/test';

function isLocator(locator: Page | Locator): locator is Locator {
	return 'waitFor' in locator;
}

/**
 * Base class to be extended for page objects.
 * The purpose of this architecture is to standardize the way locators are created in the page object, to be able to target precisely the dom elements you want to interact with.
 *
 * The constructor takes two parameters:
 *
 * - `container: Page | Locator` is the container locator from which other locators are built
 * - `index: number | null = null` is the nth index component found in the container locator
 *
 * Page objects must usually override the `getComponentSelector()` method to return the html selector of the component
 *
 * @example
 *
 * ```html
 * <!-- page.html -->
 * <div class="component1">
 *    <div class="component2">
 *      <button>Click me</button>
 *    </div>
 *    <div class="component2">
 *      <button>Click me</button>
 *    </div>
 * </div>
 * ```
 *
 * ```typescript
 * // component1.po.ts
 * export Component1Page extends BasePo {
 *    getComponentSelector(): string {
 *      return 'div.component1';
 *    }
 * }
 *
 * // component2.po.ts
 * export Component2Page extends BasePo {
 *    getComponentSelector(): string {
 *      return 'div.component2';
 *    }
 *
 *    // Button locator in component2
 *    get locatorButton() {
 *        return this.locatorRoot.locator('button');
 *    }
 * }
 *
 * // test.spec.ts
 * test('should click', ({page}) => {
 *
 *    // will manage the component1 section
 *    const component1Po = new Component1Page(page);
 *
 *    // click on the button of the first component2 of component1
 *    const firstComponent2Po = new Component2Page(component1Po.locatorRoot);
 *    await firstComponent2Po.locatorButton.click();
 *
 *    // click on the button of the second component2 of component1
 *    const secondComponent2Po = new Component2Page(component1Po.locatorRoot, 1);
 *    await secondComponent2Po.locatorButton.click();
 *
 * });
 *
 * ```
 *
 */
export class BasePO {
	readonly #container: Page | Locator;
	readonly #index: number | null;
	#locatorRoot: Locator | undefined;

	/**
	 * Playwright page object from which the page object has been created.
	 * It can be convenient for situation where you can't work (internally) with the locatorRoot
	 */
	protected _page: Page;

	/**
	 *
	 * @param container - Container locator (page if there is no container) where the component is located
	 * @param index - If you have multiple components **inside the container**, you must provide the index to select the component to work with. You can omit this parameter if you have a single component.
	 */
	constructor(container: Page | Locator, index: number | null = null) {
		this.#container = container;
		this.#index = index;
		this._page = isLocator(container) ? container.page() : container;
	}

	/**
	 * The root locator of your page object.
	 * It can be used to be chain with internal locators.
	 *
	 * It is built with the provided `container` from the constructor, the `getComponentSelector` (one of them must be provided, at least) and the optional `index` parameter from the contructor.
	 *
	 * @example
	 *
	 * ```typescript
	 *
	 * // Button locator in this component
	 * get locatorButton() {
	 *    return this.locatorRoot().locator('button').nth(0);
	 * }
	 * ```
	 */
	get locatorRoot(): Locator {
		let locatorRoot = this.#locatorRoot;
		if (!locatorRoot) {
			const componentSelector = this.getComponentSelector();
			let tmpLocatorRoot = this.#container;

			if (componentSelector) {
				tmpLocatorRoot = tmpLocatorRoot.locator(componentSelector);

				// Use the nth engine : https://playwright.dev/docs/selectors#n-th-element-selector
				const index = this.#index;
				if (index !== null) {
					tmpLocatorRoot = tmpLocatorRoot.nth(index);
				}
			}

			locatorRoot = isLocator(tmpLocatorRoot) ? tmpLocatorRoot : tmpLocatorRoot.locator('html');
			this.#locatorRoot = locatorRoot;
		}
		return locatorRoot;
	}

	/**
	 * Returns the root selector for the component
	 * This method must be usually overriden to return the css selector of your component
	 *
	 * @example
	 *
	 * ```typescript
	 * getComponentSelector(): string {
	 *  return 'app-component';
	 * }
	 * ```
	 * Will target the html component:
	 * ```html
	 * <app-component>...</app-component>
	 * ```
	 */
	getComponentSelector(): string {
		return '';
	}

	/**
	 * Wait for the locatorRoot to be displayed in the page
	 */
	async waitLoaded() {
		if (isLocator(this.locatorRoot)) {
			await this.locatorRoot.waitFor();
		}
	}
}
