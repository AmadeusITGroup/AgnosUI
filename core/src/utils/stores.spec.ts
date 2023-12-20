import type {WritableSignal, Updater} from '@amadeus-it-group/tansu';
import {asWritable, computed, writable} from '@amadeus-it-group/tansu';
import {beforeEach, describe, expect, test, vi} from 'vitest';
import {createPatch, findChangedProperties, mergeConfigStores, stateStores, writablesWithDefault, writableWithDefault} from './stores';
import {INVALID_VALUE} from '../types';

describe(`Stores service`, () => {
	describe('createPatch', () => {
		let a$: WritableSignal<number> | undefined;
		let b$: WritableSignal<number> | undefined;

		function getInitialState() {
			return {
				a: <number[]>[],
				b: <number[]>[],
			};
		}

		let state: ReturnType<typeof getInitialState>;

		beforeEach(() => {
			a$ = writable(1);
			b$ = writable(1);
			state = getInitialState();

			const unsubscribeA = a$.subscribe((value) => {
				state.a.push(value);
			});

			const unsubscribeB = b$.subscribe((value) => {
				state.b.push(value);
			});

			return () => {
				a$ = b$ = undefined;
				unsubscribeA();
				unsubscribeB();
			};
		});

		test(`Basic functionalities`, () => {
			const patch = createPatch({a$, b$});

			const expectedState = {
				a: [1],
				b: [1],
			};

			expect(state).toEqual(expectedState);

			patch({a: 2});

			expectedState.a.push(2);
			expect(state, 'Partial change').toEqual(expectedState);

			patch({a: 3, b: 3});

			expectedState.a.push(3);
			expectedState.b.push(3);
			expect(state, 'Grouped change').toEqual(expectedState);

			patch({a: 4, c: 4});

			expectedState.a.push(4);
			expect(state, 'Change with unknown key').toEqual(expectedState);
		});
	});

	describe('findChangedProperties', () => {
		test(`Basic functionalities`, () => {
			const jsonRef: Partial<{a: number; b: number; c: number}> = {a: 1, b: 1};
			expect(findChangedProperties(jsonRef, {a: 1, b: 1})).toBeNull();
			expect(findChangedProperties(jsonRef, {a: 1, c: 1})).toEqual({c: 1});
			expect(findChangedProperties(jsonRef, {a: 2})).toEqual({a: 2, b: undefined});
			expect(findChangedProperties(jsonRef, {a: 2, b: 1})).toEqual({a: 2});
			expect(findChangedProperties(jsonRef, {a: 2, c: 1})).toEqual({a: 2, c: 1});
		});
	});

	describe('mergeConfigStores', () => {
		test('Basic functionalities', () => {
			const store1 = {a: writable(undefined as number | undefined), b: writable(1 as number | undefined)};
			const store2 = {a: writable(2 as number | undefined), b: writable(undefined as number | undefined)};
			const merged = mergeConfigStores(['a', 'b'], store1, store2);
			const aValues: (number | undefined)[] = [];
			const bValues: (number | undefined)[] = [];
			merged.a?.subscribe((a) => aValues.push(a));
			merged.b?.subscribe((b) => bValues.push(b));
			expect(aValues).toEqual([2]);
			expect(bValues).toEqual([1]);
			store1.a.set(3);
			expect(aValues).toEqual([2, 3]);
			store1.b.set(undefined);
			expect(bValues).toEqual([1, undefined]);
			store2.b.set(4);
			expect(bValues).toEqual([1, undefined, 4]);
			store1.b.set(5);
			expect(bValues).toEqual([1, undefined, 4, 5]);
			store2.a.set(6);
			expect(aValues).toEqual([2, 3]);
			store1.a.set(undefined);
			expect(aValues).toEqual([2, 3, 6]);
		});
	});

	describe('writableWithDefault', () => {
		test(`Basic functionalities`, () => {
			const values: number[] = [];
			const config$ = writable(undefined as undefined | number);
			const store$ = writableWithDefault(0, config$);
			store$.subscribe((a) => values.push(a));
			expect(values).toEqual([0]);
			config$.set(1);
			expect(values).toEqual([0, 1]);
			config$.set(undefined);
			expect(values).toEqual([0, 1, 0]);
			config$.set(3);
			expect(values).toEqual([0, 1, 0, 3]);
			store$.set(4);
			expect(values).toEqual([0, 1, 0, 3, 4]);
			config$.set(5);
			expect(values).toEqual([0, 1, 0, 3, 4]);
			config$.set(6);
			expect(values).toEqual([0, 1, 0, 3, 4]);
			store$.set(undefined);
			expect(values).toEqual([0, 1, 0, 3, 4, 6]);
		});

		test(`Provided prop store`, () => {
			const spyErrorLog = vi.spyOn(console, 'error').mockImplementation(() => {});
			const storeValues: number[] = [];
			const propValues: (number | undefined)[] = [];
			const config$ = writable(9 as undefined | number);
			const prop$ = writable(2 as undefined | number);
			const store$ = writableWithDefault(
				0,
				config$,
				{
					normalizeValue(value) {
						if (value < 0) {
							// negative values are invalid
							return INVALID_VALUE;
						}
						return value;
					},
				},
				prop$,
			);
			store$.subscribe((a) => storeValues.push(a));
			prop$.subscribe((a) => propValues.push(a));
			expect(propValues).toEqual([2]);
			expect(storeValues).toEqual([2]);
			config$.set(10); // no change
			expect(propValues).toEqual([2]);
			expect(storeValues).toEqual([2]);
			prop$.set(5);
			expect(propValues).toEqual([2, 5]);
			expect(storeValues).toEqual([2, 5]);
			expect(spyErrorLog).not.toBeCalled();
			prop$.set(-1); // invalid value, replaced with value from config
			expect(spyErrorLog).toBeCalledTimes(1);
			expect(spyErrorLog.mock.calls[0][0]).to.match(/invalid value/i);
			spyErrorLog.mockReset();
			expect(propValues).toEqual([2, 5, -1]);
			expect(storeValues).toEqual([2, 5, 10]);
			store$.set(22);
			expect(propValues).toEqual([2, 5, -1, 22]);
			expect(storeValues).toEqual([2, 5, 10, 22]);
			expect(spyErrorLog).not.toBeCalled();
			store$.set(-2); // invalid value, ignored
			expect(spyErrorLog).toBeCalledTimes(1);
			expect(spyErrorLog.mock.calls[0][0]).to.match(/invalid value/i);
			spyErrorLog.mockReset();
			expect(propValues).toEqual([2, 5, -1, 22]);
			expect(storeValues).toEqual([2, 5, 10, 22]);
			prop$.set(undefined);
			expect(propValues).toEqual([2, 5, -1, 22, undefined]);
			expect(storeValues).toEqual([2, 5, 10, 22, 10]);
		});

		test(`Provided prop store with custom set`, () => {
			const storeValues: number[] = [];
			const config$ = writable(20 as number | undefined);
			const refValues: (number | undefined)[] = [];
			const refValue$ = writable(0 as number | undefined);
			const prop$: WritableSignal<number | undefined> = asWritable(
				computed(() => {
					const refValue = refValue$();
					return refValue !== undefined ? refValue + 1 : undefined;
				}),
				{
					set(newValue: number | undefined) {
						refValue$.set(newValue !== undefined ? newValue - 1 : undefined);
					},
					update(updater: Updater<number | undefined>) {
						refValue$.update((curValue) => {
							const res = updater(curValue !== undefined ? curValue + 1 : undefined);
							return res !== undefined ? res - 1 : undefined;
						});
					},
				},
			);
			const store$ = writableWithDefault(50, config$, undefined, prop$);
			store$.subscribe((a) => storeValues.push(a));
			refValue$.subscribe((a) => refValues.push(a));
			expect(refValues).toEqual([0]);
			expect(storeValues).toEqual([1]);
			store$.set(5);
			expect(refValues).toEqual([0, 4]);
			expect(storeValues).toEqual([1, 5]);
			store$.update((value) => value * 2);
			expect(refValues).toEqual([0, 4, 9]);
			expect(storeValues).toEqual([1, 5, 10]);
			store$.set(undefined);
			expect(refValues).toEqual([0, 4, 9, undefined]);
			expect(storeValues).toEqual([1, 5, 10, 20]);
			config$.set(undefined);
			expect(refValues).toEqual([0, 4, 9, undefined]);
			expect(storeValues).toEqual([1, 5, 10, 20, 50]);
			refValue$.set(1);
			expect(refValues).toEqual([0, 4, 9, undefined, 1]);
			expect(storeValues).toEqual([1, 5, 10, 20, 50, 2]);
		});

		test(`Invalid values`, () => {
			const spyErrorLog = vi.spyOn(console, 'error').mockImplementation(() => {});
			const values: number[] = [];
			const config$ = writable(undefined as undefined | number);
			const store$ = writableWithDefault(0, config$, {
				normalizeValue(value) {
					if (value < 0) {
						// negative values are invalid
						return INVALID_VALUE;
					}
					return value;
				},
			});
			store$.subscribe((a) => values.push(a));
			expect(values).toEqual([0]);
			expect(spyErrorLog).not.toBeCalled();
			store$.set(-1); // invalid value is ignored
			expect(spyErrorLog).toBeCalledTimes(1);
			expect(spyErrorLog.mock.calls[0][0]).to.match(/invalid value/i);
			spyErrorLog.mockReset();
			expect(values).toEqual([0]);
			expect(spyErrorLog).not.toBeCalled();
			config$.set(-1); // invalid value is ignored
			expect(spyErrorLog).toBeCalledTimes(1);
			expect(spyErrorLog.mock.calls[0][0]).to.match(/invalid value/i);
			spyErrorLog.mockReset();
			expect(values).toEqual([0]);
			config$.set(1); // correct value
			expect(values).toEqual([0, 1]);
		});
	});

	describe('writablesWithDefault', () => {
		test(`Basic functionalities with a store`, () => {
			const defConfig = {a: 1, b: 2};
			const config$ = writable<Partial<typeof defConfig>>({});
			const props = writablesWithDefault(defConfig, {config: config$});
			const a: number[] = [];
			const b: number[] = [];
			const unsubscribeA = props.a$.subscribe((value) => a.push(value));
			const unsubscribeB = props.b$.subscribe((value) => b.push(value));
			expect(a).toEqual([1]);
			expect(b).toEqual([2]);
			config$.set({a: 2, b: 3});
			expect(a).toEqual([1, 2]);
			expect(b).toEqual([2, 3]);
			config$.set({b: undefined});
			expect(a).toEqual([1, 2, 1]);
			expect(b).toEqual([2, 3, 2]);
			props.a$.set(5);
			expect(a).toEqual([1, 2, 1, 5]);
			config$.set({a: 6});
			expect(a).toEqual([1, 2, 1, 5]);
			props.a$.set(undefined);
			expect(a).toEqual([1, 2, 1, 5, 6]);
			unsubscribeA();
			unsubscribeB();
		});

		test(`Basic functionalities with an object containing a store and a value`, () => {
			const defConfig = {a: 1, b: 2};
			const config = {a: writable(4 as number | undefined), b: 3};
			const props = writablesWithDefault(defConfig, {config});
			const a: number[] = [];
			const b: number[] = [];
			const unsubscribeA = props.a$.subscribe((value) => a.push(value));
			const unsubscribeB = props.b$.subscribe((value) => b.push(value));
			expect(a).toEqual([4]);
			expect(b).toEqual([3]);
			config.a.set(5);
			expect(a).toEqual([4, 5]);
			config.a.set(undefined);
			expect(a).toEqual([4, 5, 1]);
			props.a$.set(7);
			expect(a).toEqual([4, 5, 1, 7]);
			config.a.set(6);
			expect(a).toEqual([4, 5, 1, 7]);
			props.a$.set(undefined);
			expect(a).toEqual([4, 5, 1, 7, 6]);
			expect(b).toEqual([3]);
			props.b$.set(8);
			expect(b).toEqual([3, 8]);
			props.b$.set(undefined);
			expect(b).toEqual([3, 8, 3]);
			unsubscribeA();
			unsubscribeB();
		});

		test(`Invalid values`, () => {
			const spyErrorLog = vi.spyOn(console, 'error');
			const defConfig = {a: 1, b: 2};
			const config$ = writable<Partial<typeof defConfig>>({});
			const props = writablesWithDefault(
				defConfig,
				{config: config$},
				{
					a: {
						normalizeValue(value) {
							if (value < 0) {
								// negative values are invalid
								return INVALID_VALUE;
							}
							return value;
						},
					},
				},
			);
			const a: number[] = [];
			props.a$.subscribe((value) => a.push(value));
			expect(a).toEqual([1]);
			expect(spyErrorLog).not.toBeCalled();
			config$.set({a: -1}); // invalid value is ignored
			expect(spyErrorLog).toBeCalledTimes(1);
			expect(spyErrorLog.mock.calls[0][0]).to.match(/invalid value/i);
			spyErrorLog.mockReset();
			expect(spyErrorLog).not.toBeCalled();
			props.a$.set(-2); // invalid value is ignored
			expect(spyErrorLog).toBeCalledTimes(1);
			expect(spyErrorLog.mock.calls[0][0]).to.match(/invalid value/i);
			spyErrorLog.mockReset();
			config$.set({a: 3});
			expect(a).toEqual([1, 3]);
			props.a$.set(4);
			expect(a).toEqual([1, 3, 4]);
		});
	});

	describe('stateStores', () => {
		test('Basic functionalities', () => {
			const stores = {a$: writable(5), b$: writable(6)};
			const res = stateStores(stores);
			const stateValues: {a: number; b: number}[] = [];
			expect((res.stores.a$ as any).set).toBeUndefined();
			expect((res.stores.a$ as any).update).toBeUndefined();
			expect(res.stores.a$()).toBe(5);
			expect(res.stores.b$()).toBe(6);
			const unsubscribeState = res.state$.subscribe((value) => stateValues.push(value));
			expect(stateValues).toEqual([{a: 5, b: 6}]);
			stores.a$.set(9);
			expect(stateValues.length).toBe(2);
			expect(stateValues[1]).toEqual({a: 9, b: 6});
			expect(res.stores.a$()).toBe(9);
			unsubscribeState();
		});
	});
});
