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
		pages: ['1', '2', '3', '4(current)', '5', '6', '7'],
	};
	const initCustomState: State = {
		rootClasses: ['au-pagination', 'pagination'],
		disabled: null,
		isPreviousDisabled: false,
		isNextDisabled: false,
		pages: ['A', 'B', 'C', 'D(current)', 'E', 'F', 'G'],
	};
	const disabledInitState: State = {
		rootClasses: ['au-pagination', 'pagination'],
		disabled: 'true',
		isPreviousDisabled: true,
		isNextDisabled: true,
		pages: ['1(current)', '2', '3', '4', '5', '6', '7'],
	};
	test(`Default features`, async ({page}) => {
		const paginationDemoPO = new PaginationDemoPO(page);
		const paginationPO = new PaginationPO(page, 0);
		await page.goto('#/pagination/default');
		await paginationPO.locatorRoot.waitFor();
		expect(await paginationState(paginationPO)).toEqual(initState);
		expect(await paginationDemoPO.defaultPaginationDemoState()).toEqual({page: 4});
		await expect(paginationPO.locatorPreviousButton).not.toBeDisabled();
		await expect(paginationPO.locatorNextButton).not.toBeDisabled();
		const disabledPaginationPO = new PaginationPO(page, 3);
		expect(await paginationState(disabledPaginationPO)).toEqual(disabledInitState);
		const paginationWithBoundariesPO = new PaginationPO(page, 2);
		await paginationWithBoundariesPO.locatorFirstButton.click();
		expect(await paginationDemoPO.defaultPaginationDemoState()).toEqual({page: 1});
		expect(await paginationState(paginationWithBoundariesPO)).toEqual({
			...initState,
			isFirstDisabled: true,
			isLastDisabled: false,
			isPreviousDisabled: true,
			pages: ['1(current)', '2', '3', '4', '5', '6', '7'],
		});
		await paginationWithBoundariesPO.locatorLastButton.click();
		expect(await paginationDemoPO.defaultPaginationDemoState()).toEqual({page: 7});
		expect(await paginationState(paginationWithBoundariesPO)).toEqual({
			...initState,
			isFirstDisabled: false,
			isLastDisabled: true,
			isNextDisabled: true,
			isPreviousDisabled: false,
			pages: ['1', '2', '3', '4', '5', '6', '7(current)'],
		});
	});

	// TODO add test with the custom template, className...
	test(`Custom features`, async ({page}) => {
		const expectedState = {...initCustomState};
		const paginationPO = new PaginationPO(page, 0);
		await page.goto('#/pagination/custom');
		await paginationPO.locatorRoot.waitFor();
		expect(await paginationState(paginationPO)).toEqual(expectedState);
	});
});
