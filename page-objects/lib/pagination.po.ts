import type {Locator} from '@playwright/test';
import {BasePO} from '@agnos-ui/base-po';

/** Pagination navigation buttons hrefs */
export interface HrefsNavigation {
	first?: string;
	previous?: string;
	next?: string;
	last?: string;
}

/** Pagination page object */
export interface PaginationPOState {
	rootClasses: string[];
	disabled: string | null;
	pages: string[];
	hrefs: string[];
	hrefsNavigation?: HrefsNavigation;
	isFirstDisabled?: boolean;
	isPreviousDisabled?: boolean;
	isNextDisabled?: boolean;
	isLastDisabled?: boolean;
}

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

	async state() {
		return this.locatorRoot.evaluate((rootNode: HTMLElement) => {
			const returnState: PaginationPOState = {rootClasses: [], disabled: null, pages: [], hrefs: []};
			const pagesElements = [...rootNode.querySelectorAll('.au-page')] as HTMLLinkElement[];
			const pages = [];
			const hrefs = [];
			const hrefsNavigation: HrefsNavigation = {};
			const getHref = (elem: Element | null) => elem?.getAttribute('href');
			const firstElem = rootNode.querySelector('a.au-first');
			const previousElem = rootNode.querySelector('a.au-previous');
			const nextElem = rootNode.querySelector('a.au-next');
			const lastElem = rootNode.querySelector('a.au-last');
			if (firstElem) {
				hrefsNavigation.first = getHref(firstElem)!;
			}
			if (previousElem) {
				hrefsNavigation.previous = getHref(previousElem)!;
			}
			if (nextElem) {
				hrefsNavigation.next = getHref(nextElem)!;
			}
			if (lastElem) {
				hrefsNavigation.last = getHref(lastElem)!;
			}

			for (const element of pagesElements) {
				hrefs.push(element.getAttribute('href') || '');
				pages.push((element.textContent || '').trim());
			}
			const pagesDisabledElements = [...rootNode.querySelectorAll('a.au-page[aria-disabled]')] as HTMLLinkElement[];
			returnState['pages'] = pages;
			returnState['hrefs'] = hrefs;
			returnState['hrefsNavigation'] = hrefsNavigation;
			returnState['rootClasses'] = rootNode.className.trim().split(' ');
			returnState['disabled'] = pagesDisabledElements.length === pagesElements.length ? 'true' : null;
			if (rootNode.querySelector('a.au-previous[aria-disabled]')) {
				returnState['isPreviousDisabled'] = true;
			} else if (previousElem) {
				returnState['isPreviousDisabled'] = false;
			}
			if (rootNode.querySelector('a.au-next[aria-disabled]')) {
				returnState['isNextDisabled'] = true;
			} else if (nextElem) {
				returnState['isNextDisabled'] = false;
			}
			if (rootNode.querySelector('a.au-first[aria-disabled]')) {
				returnState['isFirstDisabled'] = true;
			} else if (firstElem) {
				returnState['isFirstDisabled'] = false;
			}
			if (rootNode.querySelector('a.au-last[aria-disabled]')) {
				returnState['isLastDisabled'] = true;
			} else if (lastElem) {
				returnState['isLastDisabled'] = false;
			}
			return returnState;
		});
	}
}
