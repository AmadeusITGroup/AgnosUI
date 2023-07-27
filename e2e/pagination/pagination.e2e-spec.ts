import {expect, test} from '@playwright/test';
import {PaginationPO} from '@agnos-ui/page-objects';
import {PaginationDemoPO} from '../demo-po/pagination.po';

async function paginationState(paginationPO: PaginationPO) {
	return paginationPO.locatorRoot.evaluate((rootNode: HTMLElement) => {
		const pagesElements = [...rootNode.querySelectorAll('.au-page')] as HTMLLinkElement[];
		const pages = [];
		for (const element of pagesElements) {
			pages.push((element.textContent || '').trim());
		}
		const pagesDisabledElements = [...rootNode.querySelectorAll('a.au-page[aria-disabled]')] as HTMLLinkElement[];
		return {
			rootClasses: rootNode.className.trim().split(' '),
			disabled: pagesDisabledElements.length === pagesElements.length ? 'true' : null,
			pages,
		};
	});
}

type PromiseValue<T> = T extends Promise<infer U> ? U : never;
type State = PromiseValue<ReturnType<typeof paginationState>>;

test.describe.parallel(`Pagination tests`, () => {
	const initState: State = {
		rootClasses: ['au-pagination', 'pagination'],
		disabled: null,
		pages: ['1(current)'],
	};
	test(`Default features`, async ({page}) => {
		const paginationDemoPO = new PaginationDemoPO(page);
		const paginationPO = new PaginationPO(page, 0);

		await page.goto('#/pagination/default');
		await paginationPO.locatorRoot.waitFor();

		expect(await paginationState(paginationPO)).toEqual(initState);
		expect(await paginationDemoPO.defaultPaginationDemoState()).toEqual({page: 1});

		await expect(paginationPO.locatorPreviousButton).toBeDisabled();
		await expect(paginationPO.locatorNextButton).toBeDisabled();
	});

	// TODO add test with the custom template, className...
	test(`Config features`, async ({page}) => {
		let expectedState = {...initState};
		const paginationDemoPO = new PaginationDemoPO(page);
		const paginationPO = new PaginationPO(page, 0);

		await page.goto('#/pagination/config');
		await paginationPO.locatorRoot.waitFor();

		expect(await paginationState(paginationPO)).toEqual(expectedState);

		await paginationDemoPO.locatorBtnConfigDisabled('true').click();
		expectedState = {...expectedState, disabled: 'true'};
		expect(await paginationState(paginationPO)).toEqual(expectedState);
		await paginationDemoPO.locatorBtnConfigDisabled('false').click();
		expectedState = {...expectedState, disabled: null};
		expect(await paginationState(paginationPO)).toEqual(expectedState);
		await paginationDemoPO.locatorBtnConfigCollectionSize('40').click();
		expectedState = {...expectedState, pages: ['1(current)', '2', '3', '4']};
		expect(await paginationState(paginationPO)).toEqual(expectedState);
		await paginationPO.locatorNthPage(4).click();
		expectedState = {...expectedState, pages: ['1', '2', '3', '4(current)']};
		expect(await paginationState(paginationPO)).toEqual(expectedState);
	});
});
