import {writable} from '@amadeus-it-group/tansu';
import type {MockInstance} from 'vitest';
import {beforeEach, describe, expect, test, vi} from 'vitest';
import {writableWithDefault} from './stores';
import {typeArray, typeNumberInRangeFactory} from './writables';
import {INVALID_VALUE} from '../types';

describe(`Writables service`, () => {
	const equal = typeArray.equal!;
	let consoleErrorSpy: MockInstance<typeof console.error>;

	beforeEach(() => {
		consoleErrorSpy = vi.spyOn(console, 'error').mockImplementation(() => {});
	});

	test(`should support typeArray`, () => {
		const config$ = writable([0]);
		const store$ = writableWithDefault<number[]>([0], config$, typeArray);
		// set the wrong value
		store$.set(100 as any);
		expect(consoleErrorSpy).toHaveBeenCalledWith('Not setting invalid value', 100);
		// the store is not updated with the wrong value
		expect(store$()).toStrictEqual([0]);

		const testArray = [15, 20];
		store$.set(testArray);

		expect(store$()).toBe(testArray);
	});

	test(`typeArray equal function should compare values`, () => {
		expect(equal([15, 15], [15, 15])).toBe(true);
		expect(equal([15, 15], [15, 10])).toBe(false);
		const arr = [15, 15];
		expect(equal(arr, arr)).toBe(true);
		expect(equal([15], [15, 15])).toBe(false);
		expect(equal([15, 15], [15])).toBe(false);
	});

	test(`typeNumberInRangeFactory should normalized the value in a range`, () => {
		const normalizeValueFn = typeNumberInRangeFactory(1, 3).normalizeValue!;
		expect(normalizeValueFn(0)).toBe(1);
		expect(normalizeValueFn(1)).toBe(1);
		expect(normalizeValueFn(2)).toBe(2);
		expect(normalizeValueFn(3)).toBe(3);
		expect(normalizeValueFn(4)).toBe(3);
		expect(normalizeValueFn(NaN)).toBe(INVALID_VALUE);
		expect(normalizeValueFn('a' as any)).toBe(INVALID_VALUE);
		expect(normalizeValueFn(true as any)).toBe(INVALID_VALUE);
		expect(normalizeValueFn({} as any)).toBe(INVALID_VALUE);
		expect(normalizeValueFn(null as any)).toBe(INVALID_VALUE);

		const normalizeStrictFn = typeNumberInRangeFactory(1, 3, {strict: true}).normalizeValue!;
		expect(normalizeStrictFn(0)).toBe(INVALID_VALUE);
		expect(normalizeStrictFn(1)).toBe(INVALID_VALUE);
		expect(normalizeStrictFn(2)).toBe(2);
		expect(normalizeStrictFn(3)).toBe(INVALID_VALUE);
		expect(normalizeStrictFn(4)).toBe(INVALID_VALUE);
		expect(normalizeValueFn(NaN)).toBe(INVALID_VALUE);
		expect(normalizeValueFn('a' as any)).toBe(INVALID_VALUE);
		expect(normalizeValueFn(true as any)).toBe(INVALID_VALUE);
		expect(normalizeValueFn({} as any)).toBe(INVALID_VALUE);
		expect(normalizeValueFn(null as any)).toBe(INVALID_VALUE);

		const normalizeNoClampFn = typeNumberInRangeFactory(1, 3, {useClamp: false}).normalizeValue!;
		expect(normalizeNoClampFn(0)).toBe(INVALID_VALUE);
		expect(normalizeNoClampFn(1)).toBe(1);
		expect(normalizeNoClampFn(2)).toBe(2);
		expect(normalizeNoClampFn(3)).toBe(3);
		expect(normalizeNoClampFn(4)).toBe(INVALID_VALUE);
		expect(normalizeValueFn(NaN)).toBe(INVALID_VALUE);
		expect(normalizeValueFn('a' as any)).toBe(INVALID_VALUE);
		expect(normalizeValueFn(true as any)).toBe(INVALID_VALUE);
		expect(normalizeValueFn({} as any)).toBe(INVALID_VALUE);
		expect(normalizeValueFn(null as any)).toBe(INVALID_VALUE);

		const normalizeCombineFn = typeNumberInRangeFactory(1, 3, {strict: true, useClamp: false}).normalizeValue!;
		expect(normalizeCombineFn(0)).toBe(INVALID_VALUE);
		expect(normalizeCombineFn(1)).toBe(INVALID_VALUE);
		expect(normalizeCombineFn(2)).toBe(2);
		expect(normalizeCombineFn(3)).toBe(INVALID_VALUE);
		expect(normalizeCombineFn(4)).toBe(INVALID_VALUE);
		expect(normalizeValueFn(NaN)).toBe(INVALID_VALUE);
		expect(normalizeValueFn('a' as any)).toBe(INVALID_VALUE);
		expect(normalizeValueFn(true as any)).toBe(INVALID_VALUE);
		expect(normalizeValueFn({} as any)).toBe(INVALID_VALUE);
		expect(normalizeValueFn(null as any)).toBe(INVALID_VALUE);
	});
});
