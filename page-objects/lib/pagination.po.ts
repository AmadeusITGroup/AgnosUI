import type {Locator} from '@playwright/test';
import {BasePO} from '@agnos-ui/base-po';

export const paginationSelectors = {
	rootComponent: '.au-pagination',
	activePage: '.active',
	previousPage: '.au-previous',
	nextPage: '.au-next',
	firstPage: '.au-first',
	lastPage: '.au-last',
	pages: '.au-page',
	ellipses: '.au-ellipsis',
};

export class PaginationPO extends BasePO {
	selectors = structuredClone(paginationSelectors);

	// TODO should we add this in the list of selector ?
	// Depend on the setSelectors usage...
	override getComponentSelector(): string {
		return this.selectors.rootComponent;
	}

	/**
	 * Gets the locator of the button is the current page in the pagination component.
	 */
	get locatorActivePage(): Locator {
		return this.locatorRoot.locator(this.selectors.activePage);
	}

	/**
	 * Gets the locator of the button that once clicked moves to the previous page in the pagination component.
	 */
	get locatorPreviousButton(): Locator {
		return this.locatorRoot.locator(this.selectors.previousPage);
	}

	/**
	 * Gets the locator of the button that once clicked moves to the next page in the pagination component.
	 */
	get locatorNextButton(): Locator {
		return this.locatorRoot.locator(this.selectors.nextPage);
	}

	/**
	 * Gets the locator of the button that once clicked moves to the first page in the pagination component.
	 */
	get locatorFirstButton(): Locator {
		return this.locatorRoot.locator(this.selectors.firstPage);
	}

	/**
	 * Gets the locator of the button that once clicked moves to the last page in the pagination component.
	 */
	get locatorLastButton(): Locator {
		return this.locatorRoot.locator(this.selectors.lastPage);
	}

	/**
	 * Gets the locators of the pages
	 */
	get locatorPages(): Locator {
		return this.locatorRoot.locator(this.selectors.pages);
	}

	/**
	 * Gets the locator of a page button in the pagination component given his position.
	 * @param pageNumber - The number of the page in the pagination object.
	 */
	locatorNthPage(pageNumber: number): Locator {
		return this.locatorRoot.locator(this.selectors.pages).nth(pageNumber - 1);
	}

	/**
	 * Gets the locator of a page button in the pagination component given a string.
	 * @param pageString - The string of the page in the pagination object.
	 */
	locatorPage(pageString: string): Locator {
		return this.locatorRoot.locator(this.selectors.pages, {hasText: pageString});
	}

	get locatorEllipses(): Locator {
		return this.locatorRoot.locator(this.selectors.ellipses);
	}
}
