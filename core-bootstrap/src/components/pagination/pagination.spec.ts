import type {MockInstance} from 'vitest';
import {beforeEach, describe, expect, test, vi} from 'vitest';
import type {PaginationState, PaginationWidget} from './pagination';
import {createPagination, getPaginationDefaultConfig} from './pagination';
import {ngBootstrapPagination} from './pageFactory';
import {assign} from '../../../../common/utils';

describe(`Pagination`, () => {
	let pagination: PaginationWidget;
	let state: PaginationState;

	let consoleErrorSpy: MockInstance<typeof console.error>;

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

	const expectedState: PaginationState = {
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
		structure: undefined,
		ellipsisLabel: '…',
		firstPageLabel: '«',
		previousPageLabel: '‹',
		nextPageLabel: '›',
		lastPageLabel: '»',
		pagesDisplay: undefined,
		numberLabel: getPaginationDefaultConfig().numberLabel,
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
	};

	test(`should have sensible state`, () => {
		expect(state).toStrictEqual(expectedState);
	});

	test('should include a simple pageFactory implementation in default config', () => {
		expect(getPaginationDefaultConfig().pagesFactory(5, 10)).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
	});

	test('should include a simple slot number label factory in default config', () => {
		const numberLabel = getPaginationDefaultConfig().numberLabel as (props: {displayedPage: number}) => string;
		expect(numberLabel({displayedPage: 3})).toEqual(`3`);
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

	test('should warn using invalid size value', () => {
		const state = {...expectedState};
		pagination.patch({size: 'invalidSize' as 'sm'});
		expect(state).toStrictEqual(assign(state, {size: null}));
		expectLogInvalidValue();
		pagination.patch({size: 'sm'});
		expect(state).toStrictEqual(assign(state, {size: 'sm'}));
	});
});
