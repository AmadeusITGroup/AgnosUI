import {expect, test} from '../fixture';
import type {PaginationPOState} from '@agnos-ui/page-objects';
import {PaginationPO} from '@agnos-ui/page-objects';
import {PaginationDemoPO} from '../demo-po/pagination.po';

test.describe.parallel(`Pagination tests`, () => {
	const initState: PaginationPOState = {
		rootClasses: ['au-pagination', 'pagination'],
		disabled: null,
		isPreviousDisabled: false,
		isNextDisabled: false,
		pages: ['1', '2', '3', '4(current)', '5', '6'],
		hrefs: ['#', '#', '#', '#', '#', '#'],
		hrefsNavigation: {previous: '#', next: '#'},
	};
	const initCustomState: PaginationPOState = {
		rootClasses: ['au-pagination', 'pagination'],
		disabled: null,
		isPreviousDisabled: false,
		isNextDisabled: false,
		pages: ['A', 'B', 'C', 'D(current)', 'E', 'F'],
		hrefs: ['#', '#', '#', '#', '#', '#'],
		hrefsNavigation: {previous: '#', next: '#'},
	};
	const disabledInitState: PaginationPOState = {
		rootClasses: ['au-pagination', 'pagination'],
		disabled: 'true',
		isPreviousDisabled: true,
		isNextDisabled: true,
		pages: ['1(current)', '2', '3', '4', '5', '6'],
		hrefs: ['#', '#', '#', '#', '#', '#'],
		hrefsNavigation: {previous: '#', next: '#'},
	};
	test(`Default features`, async ({page}) => {
		const paginationDemoPO = new PaginationDemoPO(page);
		const paginationPO = new PaginationPO(page, 0);
		await page.goto('#/pagination/default');
		await paginationPO.locatorRoot.waitFor();
		await expect.poll(() => paginationPO.state()).toEqual(initState);
		await expect.poll(() => paginationDemoPO.defaultPaginationDemoState()).toEqual({page: 4});
		await expect(paginationPO.locatorPreviousButton).not.toBeDisabled();
		await expect(paginationPO.locatorNextButton).not.toBeDisabled();
		const disabledPaginationPO = new PaginationPO(page, 3);
		await expect.poll(() => disabledPaginationPO.state()).toEqual(disabledInitState);
		const paginationWithBoundariesPO = new PaginationPO(page, 2);
		await paginationWithBoundariesPO.locatorFirstButton.click();
		await expect.poll(() => paginationDemoPO.defaultPaginationDemoState()).toEqual({page: 1});
		await expect
			.poll(() => paginationWithBoundariesPO.state())
			.toEqual({
				...initState,
				isFirstDisabled: true,
				isLastDisabled: false,
				isPreviousDisabled: true,
				hrefsNavigation: {first: '#', previous: '#', next: '#', last: '#'},
				pages: ['1(current)', '2', '3', '4', '5', '6'],
			});
		await paginationWithBoundariesPO.locatorLastButton.click();
		await expect.poll(() => paginationDemoPO.defaultPaginationDemoState()).toEqual({page: 6});
		await expect
			.poll(() => paginationWithBoundariesPO.state())
			.toEqual({
				...initState,
				isFirstDisabled: false,
				isLastDisabled: true,
				isNextDisabled: true,
				isPreviousDisabled: false,
				hrefsNavigation: {first: '#', previous: '#', next: '#', last: '#'},
				pages: ['1', '2', '3', '4', '5', '6(current)'],
			});
		await paginationWithBoundariesPO.locatorPreviousButton.click();
		await expect
			.poll(() => paginationWithBoundariesPO.state())
			.toEqual({
				...initState,
				isFirstDisabled: false,
				isLastDisabled: false,
				isNextDisabled: false,
				isPreviousDisabled: false,
				hrefsNavigation: {first: '#', previous: '#', next: '#', last: '#'},
				pages: ['1', '2', '3', '4', '5(current)', '6'],
			});
		await paginationWithBoundariesPO.locatorNthPage(2).click();
		await expect
			.poll(() => paginationWithBoundariesPO.state())
			.toEqual({
				...initState,
				isFirstDisabled: false,
				isLastDisabled: false,
				isNextDisabled: false,
				isPreviousDisabled: false,
				hrefsNavigation: {first: '#', previous: '#', next: '#', last: '#'},
				pages: ['1', '2(current)', '3', '4', '5', '6'],
			});
	});

	// TODO add test with the custom template, className...
	test(`Custom features`, async ({page}) => {
		const expectedState = {...initCustomState};
		const paginationPO1 = new PaginationPO(page, 0);
		const paginationPO2 = new PaginationPO(page, 1);
		await page.goto('#/pagination/custom');
		await paginationPO1.locatorRoot.waitFor();
		await expect.poll(() => paginationPO1.state()).toEqual(expectedState);
		await paginationPO2.locatorNextButton.click();
		expectedState.pages = ['A', 'B', 'C', 'D', 'E(current)', 'F'];
		await expect.poll(() => paginationPO1.state()).toEqual(expectedState);
	});

	test(`Hrefs custom for pages`, async ({page}) => {
		const initialStateWithCustomHrefs: PaginationPOState = {
			rootClasses: ['au-pagination', 'pagination'],
			disabled: null,
			isPreviousDisabled: false,
			isNextDisabled: false,
			pages: ['1', '2', '3', '4(current)', '5', '6'],
			isFirstDisabled: false,
			isLastDisabled: false,
			hrefsNavigation: {
				first: '#/pagination/hash#1',
				previous: '#/pagination/hash#3',
				next: '#/pagination/hash#5',
				last: '#/pagination/hash#6',
			},
			hrefs: [
				'#/pagination/hash#1',
				'#/pagination/hash#2',
				'#/pagination/hash#3',
				'#/pagination/hash#4',
				'#/pagination/hash#5',
				'#/pagination/hash#6',
			],
		};
		const paginationPO = new PaginationPO(page, 0);
		await page.goto('#/pagination/hash');
		await paginationPO.locatorRoot.waitFor();
		await expect.poll(() => paginationPO.state()).toEqual(initialStateWithCustomHrefs);
		await paginationPO.locatorNextButton.click();
		const expectedStateAfterPageClick = structuredClone({
			...initialStateWithCustomHrefs,
			pages: ['1', '2', '3', '4', '5(current)', '6'],
			hrefsNavigation: {
				first: '#/pagination/hash#1',
				previous: '#/pagination/hash#4',
				next: '#/pagination/hash#6',
				last: '#/pagination/hash#6',
			},
		});
		await expect.poll(() => paginationPO.state()).toEqual(expectedStateAfterPageClick);
		await paginationPO.locatorFirstButton.click();
		const expectedStateAfterFirstButtonClicked = structuredClone({
			...initialStateWithCustomHrefs,
			pages: ['1(current)', '2', '3', '4', '5', '6'],
			hrefsNavigation: {
				first: '#/pagination/hash#1',
				previous: '#/pagination/hash#1',
				next: '#/pagination/hash#2',
				last: '#/pagination/hash#6',
			},
			isFirstDisabled: true,
			isPreviousDisabled: true,
		});
		await expect.poll(() => paginationPO.state()).toEqual(expectedStateAfterFirstButtonClicked);
		await page.goBack();
		await expect.poll(() => paginationPO.state()).toEqual(expectedStateAfterPageClick);
		await page.goBack();
		await expect.poll(() => paginationPO.state()).toEqual(initialStateWithCustomHrefs);
		await page.goForward();
		await expect.poll(() => paginationPO.state()).toEqual(expectedStateAfterPageClick);
	});
});
