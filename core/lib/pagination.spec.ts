import type {SpyInstance} from 'vitest';
import {beforeEach, describe, expect, test, vi} from 'vitest';
import type {PaginationState, PaginationWidget} from './pagination.js';
import {createPagination, getPaginationDefaultConfig} from './pagination.js';
import {ngBootstrapPagination} from './pagination.utils.js';

describe(`Pagination`, () => {
	let pagination: PaginationWidget;
	let state: PaginationState;

	let consoleErrorSpy: SpyInstance<Parameters<typeof console.error>, ReturnType<typeof console.error>>;

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
		// TODO we don't test ariaPageLabel here...
		expect(state).toMatchObject({
			pageCount: 1, // total number of page
			page: 1, // current page
			pages: [1], // list of the visible pages
			previousDisabled: true,
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
		expect(state.size).toStrictEqual(null);
		expectLogInvalidValue();
		pagination.patch({size: 'sm'});
		expect(state.size).toStrictEqual('sm');
	});

	test('actions should update the state', () => {
		pagination.patch({collectionSize: 200});
		pagination.actions.first();
		expect(state).toContain({page: 1, pageCount: 20});
		pagination.actions.next();
		expect(state).toContain({page: 2, pageCount: 20});
		pagination.actions.select(5);
		expect(state).toContain({page: 5, pageCount: 20});
		pagination.actions.last();
		expect(state).toContain({page: 20, pageCount: 20});
		pagination.actions.previous();
		expect(state).toContain({page: 19, pageCount: 20});
	});

	test('should return api isEllipisis', () => {
		expect(pagination.api.isEllipsis(-1)).toBe(true);
		expect(pagination.api.isEllipsis(2)).toBe(false);
	});

	test('should calculate and update no of pages (default page size)', () => {
		expect(state).toContain({page: 1, pageCount: 1});

		pagination.patch({collectionSize: 100});
		expect(state).toContain({page: 1, pageCount: 10});

		pagination.patch({collectionSize: 200});
		expect(state).toContain({page: 1, pageCount: 20});
	});

	test('should calculate and update no of pages (custom page size)', () => {
		expect(state).toContain({page: 1, pageCount: 1});

		pagination.patch({collectionSize: 100, pageSize: 20});
		expect(state).toContain({page: 1, pageCount: 5});

		pagination.patch({collectionSize: 200});
		expect(state).toContain({page: 1, pageCount: 10});

		pagination.patch({pageSize: 10});
		expect(state).toContain({page: 1, pageCount: 20});
	});

	test('should allow setting a page within a valid range (default page size)', () => {
		pagination.patch({collectionSize: 100, page: 2});
		expect(state).toContain({page: 2, pageCount: 10});
	});

	test(`should set page within [1, pageCount]`, () => {
		expect(state).toContain({page: 1, pageCount: 1});

		pagination.patch({page: 5});
		expect(state).toContain({page: 1, pageCount: 1});

		pagination.patch({collectionSize: 60});
		expect(state).toContain({page: 1, pageCount: 6});

		pagination.patch({page: 5});
		expect(state).toContain({page: 5, pageCount: 6});

		pagination.patch({page: 0});
		expect(state).toContain({page: 1, pageCount: 6});

		pagination.patch({page: 10});
		expect(state).toContain({page: 6, pageCount: 6});

		pagination.patch({page: -1});
		expect(state).toContain({page: 1, pageCount: 6});

		pagination.patch({page: 5, collectionSize: 40});
		expect(state).toContain({page: 4, pageCount: 4});
	});

	test(`should nextDisabled react correctly`, () => {
		expect(state).toContain({page: 1, pageCount: 1, nextDisabled: true});

		pagination.patch({collectionSize: 60});
		expect(state).toContain({page: 1, pageCount: 6, nextDisabled: false});

		pagination.patch({page: 6});
		expect(state).toContain({page: 6, pageCount: 6, nextDisabled: true});

		pagination.patch({page: 0});
		expect(state).toContain({page: 1, pageCount: 6, nextDisabled: false});

		pagination.patch({page: 10});
		expect(state).toContain({page: 6, pageCount: 6, nextDisabled: true});
	});

	test(`should previousDisabled react correctly`, () => {
		expect(state).toContain({page: 1, previousDisabled: true});

		pagination.patch({collectionSize: 60});
		expect(state).toContain({page: 1, previousDisabled: true});

		pagination.patch({page: 6});
		expect(state).toContain({page: 6, previousDisabled: false});

		pagination.patch({page: 0});
		expect(state).toContain({page: 1, previousDisabled: true});

		pagination.patch({page: 10});
		expect(state).toContain({page: 6, previousDisabled: false});

		pagination.patch({collectionSize: 10});
		expect(state).toContain({page: 1, previousDisabled: true});
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
		expect(state).toContain({page: 3, nextDisabled: false});

		pagination.patch({page: 4});
		expect(state.pages).toStrictEqual([4, 5, 6]);
		expect(state).toContain({page: 4, previousDisabled: false});

		pagination.patch({page: 7});
		expect(state.pages).toStrictEqual([7]);
		expect(state).toContain({page: 7, nextDisabled: true});

		pagination.patch({pagesFactory: ngBootstrapPagination(100, false, false)});
		expect(state.pages).toStrictEqual([1, 2, 3, 4, 5, 6, 7]);
		expect(state).toContain({page: 7, nextDisabled: true});
	});

	test('should rotate pages correctly', () => {
		pagination.patch({pageSize: 10, collectionSize: 70});
		expect(state.pages).toStrictEqual([1, 2, 3, 4, 5, 6, 7]);
		expect(state).toContain({page: 1, previousDisabled: true});

		pagination.patch({pagesFactory: ngBootstrapPagination(3, true, false)});
		expect(state.pages).toStrictEqual([1, 2, 3]);
		expect(state).toContain({page: 1, previousDisabled: true});

		pagination.patch({page: 2});
		expect(state.pages).toStrictEqual([1, 2, 3]);
		expect(state).toContain({page: 2, previousDisabled: false});

		pagination.patch({page: 3});
		expect(state.pages).toStrictEqual([2, 3, 4]);
		expect(state).toContain({page: 3, previousDisabled: false});

		pagination.patch({page: 7});
		expect(state.pages).toStrictEqual([5, 6, 7]);
		expect(state).toContain({page: 7, nextDisabled: true});

		pagination.patch({pagesFactory: ngBootstrapPagination(4, true, false)});
		expect(state.pages).toStrictEqual([4, 5, 6, 7]);
		expect(state).toContain({page: 7, nextDisabled: true});

		pagination.patch({page: 5});
		expect(state.pages).toStrictEqual([3, 4, 5, 6]);
		expect(state).toContain({page: 5, nextDisabled: false});

		pagination.patch({page: 3});
		expect(state.pages).toStrictEqual([1, 2, 3, 4]);
		expect(state).toContain({page: 3, nextDisabled: false});
	});

	test('should display ellipsis correctly', () => {
		pagination.patch({pageSize: 10, collectionSize: 70});
		expect(state.pages).toStrictEqual([1, 2, 3, 4, 5, 6, 7]);
		expect(state).toContain({page: 1, previousDisabled: true});

		pagination.patch({pagesFactory: ngBootstrapPagination(3, false, true)});
		expect(state.pages).toStrictEqual([1, 2, 3, -1, 7]);
		expect(state).toContain({page: 1, previousDisabled: true});

		pagination.patch({page: 4});
		expect(state.pages).toStrictEqual([1, -1, 4, 5, 6, 7]);
		expect(state).toContain({page: 4, previousDisabled: false});

		pagination.patch({page: 7});
		expect(state.pages).toStrictEqual([1, -1, 7]);
		expect(state).toContain({page: 7, nextDisabled: true});

		pagination.patch({pagesFactory: ngBootstrapPagination(3, true, true)});
		pagination.patch({page: 1});
		expect(state.pages).toStrictEqual([1, 2, 3, -1, 7]);
		expect(state).toContain({page: 1, previousDisabled: true});

		pagination.patch({page: 2});
		expect(state.pages).toStrictEqual([1, 2, 3, -1, 7]);
		expect(state).toContain({page: 2, previousDisabled: false});

		pagination.patch({page: 3});
		expect(state.pages).toStrictEqual([1, 2, 3, 4, -1, 7]);
		expect(state).toContain({page: 3, previousDisabled: false});

		pagination.patch({page: 4});
		expect(state.pages).toStrictEqual([1, 2, 3, 4, 5, 6, 7]);
		expect(state).toContain({page: 4, previousDisabled: false});

		pagination.patch({page: 5});
		expect(state.pages).toStrictEqual([1, -1, 4, 5, 6, 7]);
		expect(state).toContain({page: 5, previousDisabled: false});

		pagination.patch({page: 6});
		expect(state.pages).toStrictEqual([1, -1, 5, 6, 7]);
		expect(state).toContain({page: 6, previousDisabled: false});

		pagination.patch({page: 7});
		expect(state.pages).toStrictEqual([1, -1, 5, 6, 7]);
		expect(state).toContain({page: 7, nextDisabled: true});

		pagination.patch({pagesFactory: ngBootstrapPagination(100, true, true)});
		pagination.patch({page: 5});
		expect(state.pages).toStrictEqual([1, 2, 3, 4, 5, 6, 7]);
		expect(state).toContain({page: 5, nextDisabled: false});
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
		expect(state).toContain({page: 1});

		pagination.patch({page: 2022});
		expect(state.pages).toStrictEqual([1, 2]);
		expect(state).toContain({page: 2});

		pagination.patch({page: NaN});
		expect(state.pages).toStrictEqual([1, 2]);
		expect(state).toContain({page: 2});
		expectLogInvalidValue();
	});

	test('should onChange be called correctly', () => {
		function onPageChangeCustom(page: number) {}
		const mock = vi.fn().mockImplementation(onPageChangeCustom);
		pagination.patch({onPageChange: mock});
		pagination.patch({collectionSize: 70, page: 2});
		expect(mock).toHaveBeenCalledTimes(1);
		expect(mock).toHaveBeenCalledWith(2);
		mock.mockRestore();
		pagination.patch({collectionSize: 150, page: 2});
		expect(mock).not.toHaveBeenCalled();
		pagination.patch({collectionSize: 1});
		expect(mock).toHaveBeenCalledTimes(1);
		expect(mock).toHaveBeenCalledWith(1);
		mock.mockRestore();
		pagination.patch({collectionSize: 1, page: 10});
		// value was adjusted, onPageChange has to be called even though the new value
		// is the same as the previous call to onPageChange
		expect(mock).toHaveBeenCalledWith(1);
		mock.mockRestore();
	});
});
