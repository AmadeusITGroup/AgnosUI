import type {MockInstance} from 'vitest';
import {beforeEach, describe, expect, test, vi} from 'vitest';
import {ngBootstrapPagination} from './pagination.utils';

describe(`Pagination utils`, () => {
	let pageFactory: (page: number, pageCount: number) => number[];
	let consoleErrorSpy: MockInstance<Parameters<typeof console.error>, ReturnType<typeof console.error>>;

	beforeEach(() => {
		consoleErrorSpy = vi.spyOn(console, 'error').mockImplementation(() => {});
		// We test here the pagination utils algo...
		pageFactory = ngBootstrapPagination(0, false, true);
		return () => {
			expect(consoleErrorSpy).not.toHaveBeenCalled();
			consoleErrorSpy.mockRestore();
		};
	});

	test(`should pages changes according to pageCount`, () => {
		expect(pageFactory(1, 1)).toStrictEqual([1]);
		expect(pageFactory(1, 10)).toStrictEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
		expect(pageFactory(1, 20)).toStrictEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]);
	});

	test(`should pages changes according to maxSize`, () => {
		pageFactory = ngBootstrapPagination(0, false, false);
		expect(pageFactory(1, 7)).toStrictEqual([1, 2, 3, 4, 5, 6, 7]);
		pageFactory = ngBootstrapPagination(3, false, false);
		expect(pageFactory(1, 7)).toStrictEqual([1, 2, 3]);
		expect(pageFactory(3, 7)).toStrictEqual([1, 2, 3]);
		expect(pageFactory(4, 7)).toStrictEqual([4, 5, 6]);
		expect(pageFactory(7, 7)).toStrictEqual([7]);
		pageFactory = ngBootstrapPagination(100, false, false);
		expect(pageFactory(7, 7)).toStrictEqual([1, 2, 3, 4, 5, 6, 7]);
	});

	test(`should rotate pages correctly`, () => {
		pageFactory = ngBootstrapPagination(3, true, false);
		expect(pageFactory(1, 7)).toStrictEqual([1, 2, 3]);
		expect(pageFactory(2, 7)).toStrictEqual([1, 2, 3]);
		expect(pageFactory(3, 7)).toStrictEqual([2, 3, 4]);
		expect(pageFactory(7, 7)).toStrictEqual([5, 6, 7]);
		pageFactory = ngBootstrapPagination(4, true, false);
		expect(pageFactory(7, 7)).toStrictEqual([4, 5, 6, 7]);
		expect(pageFactory(5, 7)).toStrictEqual([3, 4, 5, 6]);
		expect(pageFactory(3, 7)).toStrictEqual([1, 2, 3, 4]);
	});

	test(`should display ellipsis correctly`, () => {
		pageFactory = ngBootstrapPagination(3, false, true);
		expect(pageFactory(1, 7)).toStrictEqual([1, 2, 3, -1, 7]);
		expect(pageFactory(4, 7)).toStrictEqual([1, -1, 4, 5, 6, 7]);
		expect(pageFactory(7, 7)).toStrictEqual([1, -1, 7]);
		pageFactory = ngBootstrapPagination(3, true, true);
		expect(pageFactory(7, 7)).toStrictEqual([1, -1, 5, 6, 7]);
		expect(pageFactory(1, 7)).toStrictEqual([1, 2, 3, -1, 7]);
		expect(pageFactory(2, 7)).toStrictEqual([1, 2, 3, -1, 7]);
		expect(pageFactory(3, 7)).toStrictEqual([1, 2, 3, 4, -1, 7]);
		expect(pageFactory(4, 7)).toStrictEqual([1, 2, 3, 4, 5, 6, 7]);
		expect(pageFactory(5, 7)).toStrictEqual([1, -1, 4, 5, 6, 7]);
		expect(pageFactory(6, 7)).toStrictEqual([1, -1, 5, 6, 7]);
		expect(pageFactory(7, 7)).toStrictEqual([1, -1, 5, 6, 7]);
		pageFactory = ngBootstrapPagination(100, true, true);
		expect(pageFactory(7, 7)).toStrictEqual([1, 2, 3, 4, 5, 6, 7]);
		expect(pageFactory(5, 7)).toStrictEqual([1, 2, 3, 4, 5, 6, 7]);
	});

	test(`should use page number instead of ellipsis when ellipsis hides a single page`, () => {
		pageFactory = ngBootstrapPagination(5, true, true);
		expect(pageFactory(1, 1)).toStrictEqual([1]);
		expect(pageFactory(1, 12)).toStrictEqual([1, 2, 3, 4, 5, -1, 12]);
		expect(pageFactory(2, 12)).toStrictEqual([1, 2, 3, 4, 5, -1, 12]);
		expect(pageFactory(3, 12)).toStrictEqual([1, 2, 3, 4, 5, -1, 12]);
		expect(pageFactory(4, 12)).toStrictEqual([1, 2, 3, 4, 5, 6, -1, 12]);
		expect(pageFactory(5, 12)).toStrictEqual([1, 2, 3, 4, 5, 6, 7, -1, 12]);
		expect(pageFactory(6, 12)).toStrictEqual([1, -1, 4, 5, 6, 7, 8, -1, 12]);
		expect(pageFactory(7, 12)).toStrictEqual([1, -1, 5, 6, 7, 8, 9, -1, 12]);
		expect(pageFactory(8, 12)).toStrictEqual([1, -1, 6, 7, 8, 9, 10, 11, 12]);
		expect(pageFactory(9, 12)).toStrictEqual([1, -1, 7, 8, 9, 10, 11, 12]);
		expect(pageFactory(10, 12)).toStrictEqual([1, -1, 8, 9, 10, 11, 12]);
		expect(pageFactory(11, 12)).toStrictEqual([1, -1, 8, 9, 10, 11, 12]);
		expect(pageFactory(12, 12)).toStrictEqual([1, -1, 8, 9, 10, 11, 12]);
	});
});
