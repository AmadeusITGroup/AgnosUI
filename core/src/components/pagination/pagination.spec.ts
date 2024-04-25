import type {MockInstance} from 'vitest';
import {beforeEach, describe, expect, test, vi} from 'vitest';
import type {PaginationState, PaginationWidget} from './pagination';
import {createPagination, getPaginationDefaultConfig} from './pagination';
import {assign} from '../../../../common/utils';

describe(`Pagination`, () => {
	let pagination: PaginationWidget;
	let state: PaginationState;
	let expectedState: PaginationState;

	let consoleErrorSpy: MockInstance<Parameters<typeof console.error>, ReturnType<typeof console.error>>;

	beforeEach(() => {
		consoleErrorSpy = vi.spyOn(console, 'error').mockImplementation(() => {});
		pagination = createPagination();
		const unsubscribe = pagination.state$.subscribe((newState) => {
			state = newState;
		});
		expectedState = state;
		return () => {
			unsubscribe();
			expect(consoleErrorSpy).not.toHaveBeenCalled();
			consoleErrorSpy.mockRestore();
		};
	});

	const expectLogInvalidValue = () => {
		expect(consoleErrorSpy).toHaveBeenCalledTimes(1);
		expect(consoleErrorSpy.mock.calls[0][0]).toContain('invalid');
		consoleErrorSpy.mockClear();
	};

	test(`should have sensible state`, () => {
		expect(state).toStrictEqual({
			pageCount: 1, // total number of page
			page: 1, // current page
			pages: [1], // list of the visible pages
			previousDisabled: true,
			ariaLabel: 'Page navigation',
			className: '',
			nextDisabled: true,
			disabled: false,
			directionLinks: true,
			boundaryLinks: false,
			size: null,
			activeLabel: '(current)',
			ariaFirstLabel: 'Action link for first page',
			ariaLastLabel: 'Action link for last page',
			ariaNextLabel: 'Action link for next page',
			ariaPreviousLabel: 'Action link for previous page',
			ariaEllipsisLabel: 'Ellipsis page element',
			ariaLiveLabelText: 'Current page is 1',
			directionsHrefs: {
				next: '#',
				previous: '#',
			},
			pagesHrefs: ['#'],
			pagesLabel: ['Page 1 of 1'],
		});
	});

	test('should include a simple pageFactory implementation in default config', () => {
		expect(getPaginationDefaultConfig().pagesFactory(5, 10)).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
	});

	test('should warn using invalid size value', () => {
		pagination.patch({size: 'invalidSize' as 'sm'});
		expect(state).toStrictEqual(assign(expectedState, {size: null}));
		expectLogInvalidValue();
		pagination.patch({size: 'sm'});
		expect(state).toStrictEqual(assign(expectedState, {size: 'sm'}));
	});

	test('actions should update the state', () => {
		pagination.patch({collectionSize: 200});
		const pagesLabel = Array.from({length: 20}, (_, index) => `Page ${index + 1} of 20`);
		const pages = Array.from({length: 20}, (_, index) => index + 1);
		const pagesHrefs = Array.from({length: 20}, (_, __) => `#`);

		pagination.actions.first();
		expect(state).toStrictEqual(assign(expectedState, {page: 1, pageCount: 20, pagesLabel, nextDisabled: false, pages, pagesHrefs}));

		pagination.actions.next();
		expect(state).toStrictEqual(assign(expectedState, {page: 2, previousDisabled: false, ariaLiveLabelText: 'Current page is 2'}));

		pagination.actions.select(5);
		expect(state).toStrictEqual(assign(expectedState, {page: 5, ariaLiveLabelText: 'Current page is 5'}));

		pagination.actions.last();
		expect(state).toStrictEqual(assign(expectedState, {page: 20, nextDisabled: true, ariaLiveLabelText: 'Current page is 20'}));

		pagination.actions.previous();
		expect(state).toStrictEqual(assign(expectedState, {page: 19, nextDisabled: false, ariaLiveLabelText: 'Current page is 19'}));
	});

	test('should prepare pages hrefs', () => {
		pagination.patch({page: 3, collectionSize: 50, pageSize: 10, pageLink: (p) => `${p}/5`});
		const pagesLabel = Array.from({length: 5}, (_, index) => `Page ${index + 1} of 5`);
		const pages = Array.from({length: 5}, (_, index) => index + 1);
		const pagesHrefs = Array.from({length: 5}, (_, index) => `${index + 1}/5`);
		expectedState = {
			...expectedState,
			page: 3,
			pageCount: 5,
			pagesLabel,
			nextDisabled: false,
			pages,
			pagesHrefs,
			previousDisabled: false,
			directionsHrefs: {
				next: '4/5',
				previous: '2/5',
			},
			ariaLiveLabelText: 'Current page is 3',
		};
		expect(state).toStrictEqual(expectedState);

		pagination.actions.next();
		expectedState = assign(expectedState, {
			page: 4,
			directionsHrefs: {
				next: '5/5',
				previous: '3/5',
			},
			ariaLiveLabelText: 'Current page is 4',
		});
		expect(state).toStrictEqual(expectedState);

		pagination.actions.next();
		expectedState = assign(expectedState, {
			page: 5,
			nextDisabled: true,
			directionsHrefs: {
				next: '5/5',
				previous: '4/5',
			},
			ariaLiveLabelText: 'Current page is 5',
		});
		expect(state).toStrictEqual(expectedState);

		pagination.actions.first();
		expectedState = assign(expectedState, {
			page: 1,
			nextDisabled: false,
			previousDisabled: true,
			directionsHrefs: {
				next: '2/5',
				previous: '1/5',
			},
			ariaLiveLabelText: 'Current page is 1',
		});
		expect(state).toStrictEqual(expectedState);
	});

	test('should prepare pages hrefs when 1 page', () => {
		pagination.patch({page: 1, collectionSize: 20, pageSize: 20, pageLink: (p) => `${p}/1`});
		const pagesHrefs = ['1/1'];
		expect(state).toStrictEqual(assign(expectedState, {pagesHrefs, directionsHrefs: {previous: '1/1', next: '1/1'}}));
	});

	test('should calculate and update no of pages (default page size)', () => {
		expect(state).toMatchObject({page: 1, pageCount: 1});

		pagination.patch({collectionSize: 100});
		expect(state).toMatchObject({page: 1, pageCount: 10});

		pagination.patch({collectionSize: 200});
		expect(state).toMatchObject({page: 1, pageCount: 20});
	});

	test('should calculate and update no of pages (custom page size)', () => {
		expect(state).toMatchObject({page: 1, pageCount: 1});

		pagination.patch({collectionSize: 100, pageSize: 20});
		expect(state).toMatchObject({page: 1, pageCount: 5});

		pagination.patch({collectionSize: 200});
		expect(state).toMatchObject({page: 1, pageCount: 10});

		pagination.patch({pageSize: 10});
		expect(state).toMatchObject({page: 1, pageCount: 20});
	});

	test('should allow setting a page within a valid range (default page size)', () => {
		pagination.patch({collectionSize: 100, page: 2});
		expect(state).toMatchObject({page: 2, pageCount: 10, ariaLiveLabelText: 'Current page is 2'});
	});

	test(`should set page within [1, pageCount]`, () => {
		expect(state).toMatchObject({page: 1, pageCount: 1});

		pagination.patch({page: 5});
		expect(state).toMatchObject({page: 1, pageCount: 1});

		pagination.patch({collectionSize: 60});
		expect(state).toMatchObject({page: 5, pageCount: 6});

		pagination.patch({page: 5});
		expect(state).toMatchObject({page: 5, pageCount: 6});

		pagination.patch({page: 0});
		expect(state).toMatchObject({page: 1, pageCount: 6});

		pagination.patch({page: 10});
		expect(state).toMatchObject({page: 6, pageCount: 6});

		pagination.patch({page: -1});
		expect(state).toMatchObject({page: 1, pageCount: 6});

		pagination.patch({page: 5, collectionSize: 40});
		expect(state).toMatchObject({page: 4, pageCount: 4});
	});

	test(`should nextDisabled react correctly`, () => {
		expect(state).toMatchObject({page: 1, pageCount: 1, nextDisabled: true});

		pagination.patch({collectionSize: 60});
		expect(state).toMatchObject({page: 1, pageCount: 6, nextDisabled: false});

		pagination.patch({page: 6});
		expect(state).toMatchObject({page: 6, pageCount: 6, nextDisabled: true});

		pagination.patch({page: 0});
		expect(state).toMatchObject({page: 1, pageCount: 6, nextDisabled: false});

		pagination.patch({page: 10});
		expect(state).toMatchObject({page: 6, pageCount: 6, nextDisabled: true});
	});

	test(`should previousDisabled react correctly`, () => {
		expect(state).toMatchObject({page: 1, previousDisabled: true});

		pagination.patch({collectionSize: 60});
		expect(state).toMatchObject({page: 1, previousDisabled: true});

		pagination.patch({page: 6});
		expect(state).toMatchObject({page: 6, previousDisabled: false});

		pagination.patch({page: 0});
		expect(state).toMatchObject({page: 1, previousDisabled: true});

		pagination.patch({page: 10});
		expect(state).toMatchObject({page: 6, previousDisabled: false});

		pagination.patch({collectionSize: 10});
		expect(state).toMatchObject({page: 1, previousDisabled: true});
	});

	test(`should pages changes according to collectionSize`, () => {
		expect(state.pages).toStrictEqual([1]);

		pagination.patch({collectionSize: 60});
		expect(state.pages).toStrictEqual([1, 2, 3, 4, 5, 6]);

		pagination.patch({collectionSize: 45});
		expect(state.pages).toStrictEqual([1, 2, 3, 4, 5]);
	});

	test(`should pages changes according to pageSize`, () => {
		expect(state.pages).toStrictEqual([1]);

		pagination.patch({pageSize: 5, collectionSize: 10});
		expect(state.pages).toStrictEqual([1, 2]);

		pagination.patch({collectionSize: 60, pageSize: 20});
		expect(state.pages).toStrictEqual([1, 2, 3]);

		pagination.patch({pageSize: 30});
		expect(state.pages).toStrictEqual([1, 2]);
	});

	test('should handle edge "collectionSize" values', () => {
		pagination.patch({collectionSize: 70});
		expect(state.pages).toStrictEqual([1, 2, 3, 4, 5, 6, 7]);

		pagination.patch({collectionSize: 0});
		expect(state.pages).toStrictEqual([1]);

		pagination.patch({collectionSize: NaN});
		expect(state.pages).toStrictEqual([1]);
		expectLogInvalidValue();
	});

	test('should handle edge "pageSize" values', () => {
		pagination.patch({collectionSize: 70});
		expect(state.pages).toStrictEqual([1, 2, 3, 4, 5, 6, 7]);

		pagination.patch({collectionSize: 0});
		expect(state.pages).toStrictEqual([1]);

		pagination.patch({collectionSize: NaN});
		expect(state.pages).toStrictEqual([1]);
		expectLogInvalidValue();
	});

	test('should handle edge "page" values', () => {
		pagination.patch({page: 0, collectionSize: 20});
		expect(state.pages).toStrictEqual([1, 2]);
		expect(state).toMatchObject({page: 1});

		pagination.patch({page: 2022});
		expect(state.pages).toStrictEqual([1, 2]);
		expect(state).toMatchObject({page: 2});

		pagination.patch({page: NaN});
		expect(state.pages).toStrictEqual([1, 2]);
		expect(state).toMatchObject({page: 2});
		expectLogInvalidValue();
	});

	test('should onChange be called correctly', () => {
		function onPageChangeCustom(page: number) {}
		const mock = vi.fn().mockImplementation(onPageChangeCustom);
		pagination.patch({onPageChange: mock});
		pagination.patch({collectionSize: 70, page: 4});
		expect(mock).not.toHaveBeenCalled();
		pagination.actions.previous();
		expect(mock).toHaveBeenCalledTimes(1);
		expect(mock).toHaveBeenCalledWith(3);
		mock.mockRestore();
		pagination.patch({collectionSize: 150, page: 2});
		expect(mock).not.toHaveBeenCalled();
		pagination.patch({collectionSize: 1});
		expect(mock).not.toHaveBeenCalled();
	});
});
