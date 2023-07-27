import {asReadable, computed, readable, writable} from '@amadeus-it-group/tansu';
import type {SpyInstance} from 'vitest';
import {beforeEach, describe, expect, it, vitest} from 'vitest';
import {
	bindDirective,
	bindDirectiveNoArg,
	createStoreArrayDirective,
	createStoreDirective,
	directiveSubscribe,
	directiveUpdate,
	mergeDirectives,
	registrationArray,
} from './directiveUtils';

describe('directiveUtils', () => {
	let element: HTMLElement;
	let consoleErrorSpy: SpyInstance<Parameters<typeof console.error>, ReturnType<typeof console.error>>;

	beforeEach(() => {
		consoleErrorSpy = vitest.spyOn(console, 'error').mockImplementation(() => {});
		element = document.createElement('div');
		return () => {
			expect(consoleErrorSpy).not.toHaveBeenCalled();
		};
	});

	describe('bindDirective', () => {
		it('Basic functionalities', () => {
			const store = writable(1);
			const directiveArg$ = asReadable(store);
			vitest.spyOn(directiveArg$, 'subscribe');
			const directive = vitest.fn((element, value) => ({destroy: vitest.fn(), update: vitest.fn()}));
			const boundDirective = bindDirective(directive, directiveArg$);
			expect(directive).not.toHaveBeenCalled();
			expect(directiveArg$.subscribe).not.toHaveBeenCalled();
			const boundDirectiveInstance = boundDirective(element);
			const directiveInstance = directive.mock.results[0].value;
			expect(directive).toHaveBeenCalledOnce();
			expect(directiveArg$.subscribe).toHaveBeenCalledOnce();
			expect(directive).toHaveBeenCalledWith(element, 1);
			expect(directiveInstance.update).not.toHaveBeenCalled();
			store.set(5);
			expect(directiveInstance.update).toHaveBeenCalledOnce();
			expect(directiveInstance.update).toHaveBeenCalledWith(5);
			expect(directiveInstance.destroy).not.toHaveBeenCalled();
			boundDirectiveInstance?.destroy?.();
			expect(directiveInstance.destroy).toHaveBeenCalledOnce();
		});
	});

	describe('bindDirectiveNoArg', () => {
		it('Basic functionalities', () => {
			const directive = vitest.fn((element, value) => ({destroy: vitest.fn(), update: vitest.fn()}));
			const boundDirective = bindDirectiveNoArg(directive);
			expect(directive).not.toHaveBeenCalled();
			const boundDirectiveInstance = boundDirective(element, 1 as any); // the argument should be ignored
			const directiveInstance = directive.mock.results[0].value;
			expect(directive).toHaveBeenCalledOnce();
			expect(directive.mock.calls[0][0]).toBe(element);
			expect(directive.mock.calls[0][1]).toBe(undefined);
			boundDirectiveInstance?.update?.(5 as any); // should not call update on directiveInstance
			expect(directiveInstance.update).not.toHaveBeenCalled();
			expect(directiveInstance.destroy).not.toHaveBeenCalled();
			boundDirectiveInstance?.destroy?.();
			expect(directiveInstance.destroy).toHaveBeenCalledOnce();
		});
	});

	describe('directiveSubscribe', () => {
		it('Basic functionalities, asynchronous (default behavior)', async () => {
			let hasSubscribers = false;
			const store = readable(0, () => {
				hasSubscribers = true;
				return () => {
					hasSubscribers = false;
				};
			});
			const directive = directiveSubscribe(store);
			expect(hasSubscribers).toBe(false);
			const instance = directive(element);
			expect(hasSubscribers).toBe(true);
			instance?.destroy?.();
			expect(hasSubscribers).toBe(true);
			await 0;
			expect(hasSubscribers).toBe(false);
		});

		it('Basic functionalities, synchronous', () => {
			let hasSubscribers = false;
			const store = readable(0, () => {
				hasSubscribers = true;
				return () => {
					hasSubscribers = false;
				};
			});
			const directive = directiveSubscribe(store, false);
			expect(hasSubscribers).toBe(false);
			const instance = directive(element);
			expect(hasSubscribers).toBe(true);
			instance?.destroy?.();
			expect(hasSubscribers).toBe(false);
		});
	});

	describe('directiveUpdate', () => {
		it('Basic functionalities', () => {
			const update = vitest.fn((num: number) => {});
			const directive = directiveUpdate(update);
			expect(update).not.toHaveBeenCalled();
			const instance = directive(element, 1);
			expect(update).toHaveBeenCalledOnce();
			expect(update).toHaveBeenCalledWith(1);
			instance?.update?.(2);
			expect(update).toHaveBeenCalledTimes(2);
			expect(update).toHaveBeenCalledWith(2);
			instance?.destroy?.();
			expect(update).toHaveBeenCalledTimes(2);
		});
	});

	describe('registrationArray', () => {
		it('Basic functionalities', () => {
			const array$ = registrationArray<number>();
			const values: number[][] = [];
			const unsubscribe = array$.subscribe((value) => values.push(value));
			expect(values).toEqual([[]]);
			const unregister1 = array$.register(7);
			expect(values).toEqual([[], [7]]);
			const unregister2 = array$.register(8);
			expect(values).toEqual([[], [7], [7, 8]]);
			unregister1();
			expect(values).toEqual([[], [7], [7, 8], [8]]);
			unregister2();
			expect(values).toEqual([[], [7], [7, 8], [8], []]);
			unsubscribe();
		});
	});

	describe('createStoreArrayDirective', () => {
		it('Basic functionalities', () => {
			const {directive, elements$} = createStoreArrayDirective();
			const values: HTMLElement[][] = [];
			const unsubscribe = elements$.subscribe((value) => values.push(value));
			expect(values).toEqual([[]]);
			const instance1 = directive(element);
			expect(values).toEqual([[], [element]]);
			const element2 = document.createElement('span');
			const instance2 = directive(element2);
			expect(values).toEqual([[], [element], [element, element2]]);
			instance1?.destroy?.();
			expect(values).toEqual([[], [element], [element, element2], [element2]]);
			instance2?.destroy?.();
			expect(values).toEqual([[], [element], [element, element2], [element2], []]);
			unsubscribe();
		});

		it('should behave correctly with the same directive twice on the same item and destroying twice the same directive', () => {
			const {directive, elements$} = createStoreArrayDirective();
			const values: HTMLElement[][] = [];
			const unsubscribe = elements$.subscribe((value) => values.push(value));
			expect(values).toEqual([[]]);
			const instance1 = directive(element);
			expect(values).toEqual([[], [element]]);
			const instance2 = directive(element);
			expect(values).toEqual([[], [element], [element, element]]);
			instance1?.destroy?.();
			expect(values).toEqual([[], [element], [element, element], [element]]);
			instance1?.destroy?.(); // destroying again the same directive should be a noop
			expect(values).toEqual([[], [element], [element, element], [element]]);
			instance2?.destroy?.();
			expect(values).toEqual([[], [element], [element, element], [element], []]);
			unsubscribe();
		});
	});

	describe('createStoreDirective', () => {
		it('Basic functionalities', () => {
			const {directive, element$} = createStoreDirective();
			const values: (HTMLElement | null)[] = [];
			const unsubscribe = element$.subscribe((value) => values.push(value));
			expect(values).toEqual([null]);
			const instance = directive(element);
			expect(values).toEqual([null, element]);
			instance?.destroy?.();
			expect(values).toEqual([null, element, null]);
			unsubscribe();
		});

		it('should log an error when using the directive on more than one element', () => {
			const {directive, element$} = createStoreDirective();
			const values: (HTMLElement | null)[] = [];
			const unsubscribe = element$.subscribe((value) => values.push(value));
			expect(values).toEqual([null]);
			const instance1 = directive(element);
			expect(values).toEqual([null, element]);
			const element2 = document.createElement('span');
			const instance2 = directive(element2);
			expect(values).toEqual([null, element]);
			expect(consoleErrorSpy).toHaveBeenCalledOnce();
			expect(consoleErrorSpy.mock.calls[0][0]).toBe('The directive cannot be used on multiple elements.');
			instance1?.destroy?.();
			expect(values).toEqual([null, element, null]);
			instance2?.destroy?.();
			expect(values).toEqual([null, element, null]);
			unsubscribe();
			consoleErrorSpy.mockClear();
		});
	});

	describe('mergeDirectives', () => {
		it('Basic functionalities', () => {
			const directive1 = vitest.fn((element, value: number) => ({destroy: vitest.fn(), update: vitest.fn()}));
			const directive2 = vitest.fn((element, value: number) => ({destroy: vitest.fn(), update: vitest.fn()}));
			const mergedDirective = mergeDirectives(directive1, directive2);
			expect(directive1).not.toHaveBeenCalled();
			expect(directive2).not.toHaveBeenCalled();
			const mergedDirectiveInstance = mergedDirective(element, 1);
			expect(directive1).toHaveBeenCalledOnce();
			expect(directive2).toHaveBeenCalledOnce();
			const directive1Instance = directive1.mock.results[0].value;
			const directive2Instance = directive2.mock.results[0].value;
			expect(directive1Instance.update).not.toHaveBeenCalled();
			expect(directive2Instance.update).not.toHaveBeenCalled();
			mergedDirectiveInstance?.update?.(2);
			expect(directive1Instance.update).toHaveBeenCalledOnce();
			expect(directive1Instance.update).toHaveBeenCalledWith(2);
			expect(directive2Instance.update).toHaveBeenCalledOnce();
			expect(directive2Instance.update).toHaveBeenCalledWith(2);
			expect(directive1Instance.destroy).not.toHaveBeenCalled();
			expect(directive2Instance.destroy).not.toHaveBeenCalled();
			mergedDirectiveInstance?.destroy?.();
			expect(directive1Instance.destroy).toHaveBeenCalledOnce();
			expect(directive2Instance.destroy).toHaveBeenCalledOnce();
		});

		it('should wrap calls to directives in batch', () => {
			const storeAndDirective = () => {
				const store = writable(0);
				const directive = (element: HTMLElement, value: number) => {
					store.set(value);
					return {
						update(value: number) {
							store.set(value);
						},
						destroy() {
							store.set(-1);
						},
					};
				};
				return {store, directive};
			};
			const {store: store1, directive: directive1} = storeAndDirective();
			const {store: store2, directive: directive2} = storeAndDirective();
			const {store: store3, directive: directive3} = storeAndDirective();
			const mergedDirective = mergeDirectives(directive1, directive2, directive3);
			const combineStores = computed(() => `${store1()},${store2()},${store3()}`);
			const values: string[] = [];
			const unsubscribe = combineStores.subscribe((value) => values.push(value));
			expect(values).toEqual(['0,0,0']);
			const directiveInstance = mergedDirective(element, 2);
			expect(values).toEqual(['0,0,0', '2,2,2']);
			directiveInstance?.update?.(1);
			expect(values).toEqual(['0,0,0', '2,2,2', '1,1,1']);
			directiveInstance?.destroy?.();
			expect(values).toEqual(['0,0,0', '2,2,2', '1,1,1', '-1,-1,-1']);
			unsubscribe();
		});
	});
});
