import {expect, getTest} from '../fixture';
import {PaginationPO} from '@agnos-ui/page-objects';
import {PaginationDemoPO} from '../demo-po/pagination.po';
interface returnState {
	rootClasses: string[];
	disabled: string | null;
	pages: string[];
	isFirstDisabled?: boolean;
	isPreviousDisabled?: boolean;
	isNextDisabled?: boolean;
	isLastDisabled?: boolean;
}

const test = getTest();
async function paginationState(paginationPO: PaginationPO) {
	return paginationPO.locatorRoot.evaluate((rootNode: HTMLElement) => {
		const returnState: returnState = {rootClasses: [], disabled: null, pages: []};
		const pagesElements = [...rootNode.querySelectorAll('.au-page')] as HTMLLinkElement[];
		const pages = [];
		for (const element of pagesElements) {
			pages.push((element.textContent || '').trim());
		}
		const pagesDisabledElements = [...rootNode.querySelectorAll('a.au-page[aria-disabled]')] as HTMLLinkElement[];
		returnState['pages'] = pages;
		returnState['rootClasses'] = rootNode.className.trim().split(' ');
		returnState['disabled'] = pagesDisabledElements.length === pagesElements.length ? 'true' : null;
		if (rootNode.querySelector('a.au-previous[aria-disabled]')) {
			returnState['isPreviousDisabled'] = true;
		} else if (rootNode.querySelector('a.au-previous')) {
			returnState['isPreviousDisabled'] = false;
		}
		if (rootNode.querySelector('a.au-next[aria-disabled]')) {
			returnState['isNextDisabled'] = true;
		} else if (rootNode.querySelector('a.au-next')) {
			returnState['isNextDisabled'] = false;
		}
		if (rootNode.querySelector('a.au-first[aria-disabled]')) {
			returnState['isFirstDisabled'] = true;
		} else if (rootNode.querySelector('a.au-first')) {
			returnState['isFirstDisabled'] = false;
		}
		if (rootNode.querySelector('a.au-last[aria-disabled]')) {
			returnState['isLastDisabled'] = true;
		} else if (rootNode.querySelector('a.au-last')) {
			returnState['isLastDisabled'] = false;
		}
		return returnState;
	});
}

type PromiseValue<T> = T extends Promise<infer U> ? U : never;
type State = PromiseValue<ReturnType<typeof paginationState>>;

test.describe.parallel(`Pagination tests`, () => {
	const initState: State = {
		rootClasses: ['au-pagination', 'pagination'],
		disabled: null,
		isPreviousDisabled: false,
		isNextDisabled: false,
		pages: ['1', '2', '3', '4(current)', '5', '6'],
	};
	const initCustomState: State = {
		rootClasses: ['au-pagination', 'pagination'],
		disabled: null,
		isPreviousDisabled: false,
		isNextDisabled: false,
		pages: ['A', 'B', 'C', 'D(current)', 'E', 'F'],
	};
	const disabledInitState: State = {
		rootClasses: ['au-pagination', 'pagination'],
		disabled: 'true',
		isPreviousDisabled: true,
		isNextDisabled: true,
		pages: ['1(current)', '2', '3', '4', '5', '6'],
	};
	test(`Default features`, async ({page}) => {
		const paginationDemoPO = new PaginationDemoPO(page);
		const paginationPO = new PaginationPO(page, 0);
		await page.goto('#/pagination/default');
		await paginationPO.locatorRoot.waitFor();
		await expect.poll(() => paginationState(paginationPO)).toEqual(initState);
		await expect.poll(() => paginationDemoPO.defaultPaginationDemoState()).toEqual({page: 4});
		await expect(paginationPO.locatorPreviousButton).not.toBeDisabled();
		await expect(paginationPO.locatorNextButton).not.toBeDisabled();
		const disabledPaginationPO = new PaginationPO(page, 3);
		await expect.poll(() => paginationState(disabledPaginationPO)).toEqual(disabledInitState);
		const paginationWithBoundariesPO = new PaginationPO(page, 2);
		await paginationWithBoundariesPO.locatorFirstButton.click();
		await expect.poll(() => paginationDemoPO.defaultPaginationDemoState()).toEqual({page: 1});
		await expect
			.poll(() => paginationState(paginationWithBoundariesPO))
			.toEqual({
				...initState,
				isFirstDisabled: true,
				isLastDisabled: false,
				isPreviousDisabled: true,
				pages: ['1(current)', '2', '3', '4', '5', '6'],
			});
		await paginationWithBoundariesPO.locatorLastButton.click();
		await expect.poll(() => paginationDemoPO.defaultPaginationDemoState()).toEqual({page: 6});
		await expect
			.poll(() => paginationState(paginationWithBoundariesPO))
			.toEqual({
				...initState,
				isFirstDisabled: false,
				isLastDisabled: true,
				isNextDisabled: true,
				isPreviousDisabled: false,
				pages: ['1', '2', '3', '4', '5', '6(current)'],
			});
	});

	// TODO add test with the custom template, className...
	test(`Custom features`, async ({page}) => {
		const expectedState = {...initCustomState};
		const paginationPO1 = new PaginationPO(page, 0);
		const paginationPO2 = new PaginationPO(page, 1);
		await page.goto('#/pagination/custom');
		await paginationPO1.locatorRoot.waitFor();
		await expect.poll(() => paginationState(paginationPO1)).toEqual(expectedState);
		await paginationPO2.locatorNextButton.click();
		expectedState.pages = ['A', 'B', 'C', 'D', 'E(current)', 'F'];
		await expect.poll(() => paginationState(paginationPO1)).toEqual(expectedState);
	});
});
