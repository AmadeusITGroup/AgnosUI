import type {MockInstance} from 'vitest';
import {beforeEach, describe, expect, test, vi} from 'vitest';
import type {PaginationState, PaginationWidget} from './pagination';
import {createPagination, getPaginationDefaultConfig} from './pagination';
import {ngBootstrapPagination} from './bootstrap';
import {assign} from '../../../../common/utils';

describe(`Pagination`, () => {
	let pagination: PaginationWidget;
	let state: PaginationState;
	let expectedState: PaginationState;

	let consoleErrorSpy: MockInstance<Parameters<typeof console.error>, ReturnType<typeof console.error>>;

	beforeEach(() => {
		consoleErrorSpy = vi.spyOn(console, 'error').mockImplementation(() => {});
		pagination = createPagination();
		// We test here the pagination utils algo...
		// Need to move those test to only ngBootstrapPagination tests
		// Need to add test of the simple widget alone.
		pagination.patch({pagesFactory: ngBootstrapPagination(0, false, true)});
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
			slotEllipsis: '…',
			slotFirst: '«',
			slotLast: '»',
			slotNext: '›',
			slotNumberLabel: state.slotNumberLabel,
			slotPages: undefined,
			slotPrevious: '‹',
			slotStructure: undefined,
			size: null,
			activeLabel: '(current)',
			ariaFirstLabel: 'Action link for first page',
			ariaLastLabel: 'Action link for last page',
			ariaNextLabel: 'Action link for next page',
			ariaPreviousLabel: 'Action link for previous page',
			ariaEllipsisLabel: 'Ellipsis page element',
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

	test('should include a simple slot number label factory in default config', () => {
		const slotNumberLabel = getPaginationDefaultConfig().slotNumberLabel as (props: {displayedPage: number}) => string;
		expect(slotNumberLabel({displayedPage: 3})).toEqual(`3`);
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
		expect(state).toStrictEqual(assign(expectedState, {page: 2, previousDisabled: false}));

		pagination.actions.select(5);
		expect(state).toStrictEqual(assign(expectedState, {page: 5}));

		pagination.actions.last();
		expect(state).toStrictEqual(assign(expectedState, {page: 20, nextDisabled: true}));

		pagination.actions.previous();
		expect(state).toStrictEqual(assign(expectedState, {page: 19, nextDisabled: false}));
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
		};
		expect(state).toStrictEqual(expectedState);

		pagination.actions.next();
		expectedState = assign(expectedState, {
			page: 4,
			directionsHrefs: {
				next: '5/5',
				previous: '3/5',
			},
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
		expect(state).toMatchObject({page: 2, pageCount: 10});
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

	test(`should pages changes according to maxSize`, () => {
		expect(state.pages).toStrictEqual([1]);

		pagination.patch({pagesFactory: ngBootstrapPagination(0, false, false)});
		pagination.patch({pageSize: 10, collectionSize: 70});
		expect(state.pages).toStrictEqual([1, 2, 3, 4, 5, 6, 7]);

		pagination.patch({pagesFactory: ngBootstrapPagination(3, false, false)});
		expect(state.pages).toStrictEqual([1, 2, 3]);

		pagination.patch({page: 3});
		expect(state.pages).toStrictEqual([1, 2, 3]);
		expect(state).toMatchObject({page: 3, nextDisabled: false});

		pagination.patch({page: 4});
		expect(state.pages).toStrictEqual([4, 5, 6]);
		expect(state).toMatchObject({page: 4, previousDisabled: false});

		pagination.patch({page: 7});
		expect(state.pages).toStrictEqual([7]);
		expect(state).toMatchObject({page: 7, nextDisabled: true});

		pagination.patch({pagesFactory: ngBootstrapPagination(100, false, false)});
		expect(state.pages).toStrictEqual([1, 2, 3, 4, 5, 6, 7]);
		expect(state).toMatchObject({page: 7, nextDisabled: true});
	});

	test('should rotate pages correctly', () => {
		pagination.patch({pageSize: 10, collectionSize: 70});
		expect(state.pages).toStrictEqual([1, 2, 3, 4, 5, 6, 7]);
		expect(state).toMatchObject({page: 1, previousDisabled: true});

		pagination.patch({pagesFactory: ngBootstrapPagination(3, true, false)});
		expect(state.pages).toStrictEqual([1, 2, 3]);
		expect(state).toMatchObject({page: 1, previousDisabled: true});

		pagination.patch({page: 2});
		expect(state.pages).toStrictEqual([1, 2, 3]);
		expect(state).toMatchObject({page: 2, previousDisabled: false});

		pagination.patch({page: 3});
		expect(state.pages).toStrictEqual([2, 3, 4]);
		expect(state).toMatchObject({page: 3, previousDisabled: false});

		pagination.patch({page: 7});
		expect(state.pages).toStrictEqual([5, 6, 7]);
		expect(state).toMatchObject({page: 7, nextDisabled: true});

		pagination.patch({pagesFactory: ngBootstrapPagination(4, true, false)});
		expect(state.pages).toStrictEqual([4, 5, 6, 7]);
		expect(state).toMatchObject({page: 7, nextDisabled: true});

		pagination.patch({page: 5});
		expect(state.pages).toStrictEqual([3, 4, 5, 6]);
		expect(state).toMatchObject({page: 5, nextDisabled: false});

		pagination.patch({page: 3});
		expect(state.pages).toStrictEqual([1, 2, 3, 4]);
		expect(state).toMatchObject({page: 3, nextDisabled: false});
	});

	test('should display ellipsis correctly', () => {
		pagination.patch({pageSize: 10, collectionSize: 70});
		expect(state.pages).toStrictEqual([1, 2, 3, 4, 5, 6, 7]);
		expect(state).toMatchObject({page: 1, previousDisabled: true});

		pagination.patch({pagesFactory: ngBootstrapPagination(3, false, true)});
		expect(state.pages).toStrictEqual([1, 2, 3, -1, 7]);
		expect(state).toMatchObject({page: 1, previousDisabled: true});

		pagination.patch({page: 4});
		expect(state.pages).toStrictEqual([1, -1, 4, 5, 6, 7]);
		expect(state).toMatchObject({page: 4, previousDisabled: false});

		pagination.patch({page: 7});
		expect(state.pages).toStrictEqual([1, -1, 7]);
		expect(state).toMatchObject({page: 7, nextDisabled: true});

		pagination.patch({pagesFactory: ngBootstrapPagination(3, true, true)});
		pagination.patch({page: 1});
		expect(state.pages).toStrictEqual([1, 2, 3, -1, 7]);
		expect(state).toMatchObject({page: 1, previousDisabled: true});

		pagination.patch({page: 2});
		expect(state.pages).toStrictEqual([1, 2, 3, -1, 7]);
		expect(state).toMatchObject({page: 2, previousDisabled: false});

		pagination.patch({page: 3});
		expect(state.pages).toStrictEqual([1, 2, 3, 4, -1, 7]);
		expect(state).toMatchObject({page: 3, previousDisabled: false});

		pagination.patch({page: 4});
		expect(state.pages).toStrictEqual([1, 2, 3, 4, 5, 6, 7]);
		expect(state).toMatchObject({page: 4, previousDisabled: false});

		pagination.patch({page: 5});
		expect(state.pages).toStrictEqual([1, -1, 4, 5, 6, 7]);
		expect(state).toMatchObject({page: 5, previousDisabled: false});

		pagination.patch({page: 6});
		expect(state.pages).toStrictEqual([1, -1, 5, 6, 7]);
		expect(state).toMatchObject({page: 6, previousDisabled: false});

		pagination.patch({page: 7});
		expect(state.pages).toStrictEqual([1, -1, 5, 6, 7]);
		expect(state).toMatchObject({page: 7, nextDisabled: true});

		pagination.patch({pagesFactory: ngBootstrapPagination(100, true, true)});
		pagination.patch({page: 5});
		expect(state.pages).toStrictEqual([1, 2, 3, 4, 5, 6, 7]);
		expect(state).toMatchObject({page: 5, nextDisabled: false});
	});

	test('should use page number instead of ellipsis when ellipsis hides a single page', () => {
		pagination.patch({pagesFactory: ngBootstrapPagination(5, true, true)});
		pagination.patch({pageSize: 10, collectionSize: 120});
		expect(state.pages).toStrictEqual([1, 2, 3, 4, 5, -1, 12]);

		pagination.patch({page: 2});
		expect(state.pages).toStrictEqual([1, 2, 3, 4, 5, -1, 12]);

		pagination.patch({page: 3});
		expect(state.pages).toStrictEqual([1, 2, 3, 4, 5, -1, 12]);

		pagination.patch({page: 4});
		expect(state.pages).toStrictEqual([1, 2, 3, 4, 5, 6, -1, 12]);

		pagination.patch({page: 5});
		expect(state.pages).toStrictEqual([1, 2, 3, 4, 5, 6, 7, -1, 12]);

		pagination.patch({page: 6});
		expect(state.pages).toStrictEqual([1, -1, 4, 5, 6, 7, 8, -1, 12]);

		pagination.patch({page: 7});
		expect(state.pages).toStrictEqual([1, -1, 5, 6, 7, 8, 9, -1, 12]);

		pagination.patch({page: 8});
		expect(state.pages).toStrictEqual([1, -1, 6, 7, 8, 9, 10, 11, 12]);

		pagination.patch({page: 9});
		expect(state.pages).toStrictEqual([1, -1, 7, 8, 9, 10, 11, 12]);

		pagination.patch({page: 10});
		expect(state.pages).toStrictEqual([1, -1, 8, 9, 10, 11, 12]);

		pagination.patch({page: 11});
		expect(state.pages).toStrictEqual([1, -1, 8, 9, 10, 11, 12]);

		pagination.patch({page: 12});
		expect(state.pages).toStrictEqual([1, -1, 8, 9, 10, 11, 12]);
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
