import type {ReadableSignal} from '@amadeus-it-group/tansu';
import {asReadable, batch, computed, readable, writable} from '@amadeus-it-group/tansu';
import type {MockInstance} from 'vitest';
import {beforeEach, describe, expect, test, vi, vitest} from 'vitest';
import type {Directive, SSRHTMLElement} from '../types';
import {
	bindDirective,
	bindDirectiveNoArg,
	createAttributesDirective,
	createStoreArrayDirective,
	createStoreDirective,
	directiveAttributes,
	directiveSubscribe,
	directiveUpdate,
	mergeDirectives,
	multiDirective,
	registrationArray,
} from './directive';

function getDirectiveAttributes<T = void>(directive: Directive<T>, args?: T) {
	const node = document.createElement('div');
	const directiveInstance = directive(node, args!);
	const attributes: Record<string, string> = {};
	for (const {name, value} of [...node.attributes]) {
		attributes[name] = value;
	}
	directiveInstance?.destroy?.();
	return attributes;
}

const directiveSpy = <T>() => vitest.fn((element, value: T) => ({destroy: vitest.fn(), update: vitest.fn()}));

describe('directive', () => {
	let element: HTMLElement;
	let consoleErrorSpy: MockInstance<Parameters<typeof console.error>, ReturnType<typeof console.error>>;

	beforeEach(() => {
		consoleErrorSpy = vitest.spyOn(console, 'error').mockImplementation(() => {});
		element = document.createElement('div');
		return () => {
			expect(consoleErrorSpy).not.toHaveBeenCalled();
		};
	});

	describe('bindDirective', () => {
		test('Basic functionalities', () => {
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
		test('Basic functionalities', () => {
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
		test('Basic functionalities, asynchronous (default behavior)', async () => {
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

		test('Basic functionalities, synchronous', () => {
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
		test('Basic functionalities', () => {
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
		test('Basic functionalities', () => {
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
		test('Basic functionalities', () => {
			const {directive, elements$} = createStoreArrayDirective();
			const values: SSRHTMLElement[][] = [];
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

		test('should behave correctly with the same directive twice on the same item and destroying twice the same directive', () => {
			const {directive, elements$} = createStoreArrayDirective();
			const values: SSRHTMLElement[][] = [];
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
		test('Basic functionalities', () => {
			const {directive, element$} = createStoreDirective();
			const values: (SSRHTMLElement | null)[] = [];
			const unsubscribe = element$.subscribe((value) => values.push(value));
			expect(values).toEqual([null]);
			const instance = directive(element);
			expect(values).toEqual([null, element]);
			instance?.destroy?.();
			expect(values).toEqual([null, element, null]);
			unsubscribe();
		});

		test('should log an error when using the directive on more than one element', () => {
			const {directive, element$} = createStoreDirective();
			const values: (SSRHTMLElement | null)[] = [];
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
		test('Basic functionalities', () => {
			const directive1 = directiveSpy<number>();
			const directive2 = directiveSpy<number>();
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

		test('should wrap calls to directives in batch', () => {
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

	describe('multiDirective', () => {
		test('Basic functionalities', () => {
			const directive1 = directiveSpy<number>();
			const directive2 = directiveSpy<number>();
			const multi = multiDirective(element, [
				[directive1, 4],
				[directive2, 0],
			]);
			expect(directive1).toHaveBeenCalledOnce();
			expect(directive1.mock.calls[0][0]).toBe(element);
			expect(directive1.mock.calls[0][1]).toBe(4);
			expect(directive2).toHaveBeenCalledOnce();
			const directive1Instance = directive1.mock.results[0].value;
			const directive2Instance = directive2.mock.results[0].value;
			directive1.mockClear();
			directive2.mockClear();
			multi?.update?.([
				[directive1, 8],
				[directive2, 0],
			]);
			expect(directive1).not.toHaveBeenCalled();
			expect(directive2).not.toHaveBeenCalled();
			expect(directive1Instance.update).toHaveBeenCalledOnce();
			expect(directive1Instance.update).toHaveBeenCalledWith(8);
			expect(directive2Instance.update).not.toHaveBeenCalled();
			multi?.destroy?.();
			expect(directive1Instance.destroy).toHaveBeenCalledOnce();
			expect(directive2Instance.destroy).toHaveBeenCalledOnce();
		});
	});

	describe('createAttributesDirective', () => {
		test('should retrieve attributes with static values', () => {
			const clickFn = vi.fn();
			const directive = createAttributesDirective(() => ({
				events: {
					click: {handler: clickFn},
				},
				attributes: {
					'aria-label': 'a',
					readonly: true,
					disabled: false,
					'aria-disabled': undefined,
				},
				styles: {
					cursor: 'pointer',
					width: undefined,
				},
				classNames: {
					c1: true,
					c2: false,
				},
			}));

			expect(getDirectiveAttributes(directive)).toStrictEqual({
				'aria-label': 'a',
				readonly: '',
				class: 'c1',
				style: 'cursor: pointer;',
			});
			expect(clickFn).not.toHaveBeenCalled();
		});

		test('should retrieve attributes with stores', () => {
			const clickFn = vi.fn();
			const clickFn$ = writable(clickFn);
			const ariaLabel$ = writable('a');
			const readonly$ = writable(true);
			const disabled$ = writable(false);
			const ariaDisabled$ = writable(undefined);
			const cursor$ = writable('pointer');
			const width$ = writable(undefined);
			const c1$ = writable(true);
			const c2$ = writable(false);

			const directive = createAttributesDirective(() => ({
				events: {
					click: clickFn$,
				},
				attributes: {
					'aria-label': ariaLabel$,
					readonly: readonly$,
					disabled: disabled$,
					'aria-disabled': ariaDisabled$,
				},
				styles: {
					cursor: cursor$,
					width: width$,
				},
				classNames: {
					c1: c1$,
					c2: c2$,
				},
			}));

			expect(getDirectiveAttributes(directive)).toStrictEqual({'aria-label': 'a', readonly: '', class: 'c1', style: 'cursor: pointer;'});
			expect(clickFn).not.toHaveBeenCalled();
		});

		test('should work with classnames', () => {
			const props = {
				attributes: {
					class: 'aa bb',
				},
				classNames: {
					cc: true,
					dd: false,
				},
			};

			const directive = createAttributesDirective(() => props);

			expect(getDirectiveAttributes(directive)).toStrictEqual({
				class: 'aa bb cc',
			});
		});

		test('should work with dynamic classnames on a real node', () => {
			const classNames$ = writable('a b');
			const classC$ = writable(true);
			const classD$ = writable(false);

			const node = document.createElement('div');
			const props = {
				attributes: {
					class: classNames$,
				},
				classNames: {
					c: classC$,
					d: classD$,
				},
			};

			const directive = createAttributesDirective(() => props);
			const {destroy} = directive(node)!;

			expect(node.getAttribute('class')).toBe('a b c');

			classNames$.set('a');
			expect(node.getAttribute('class')).toBe('a c');

			batch(() => {
				classC$.set(false);
				classD$.set(true);
			});
			expect(node.getAttribute('class')).toBe('a d');

			destroy!();
		});

		test(`should call the 'destroy' directive`, () => {
			const destroy = vi.fn();
			const directive = () => ({
				destroy,
			});
			getDirectiveAttributes(directive);
			expect(destroy).toHaveBeenCalled();
		});

		test('should work with update', () => {
			const node = document.createElement('div');
			node.setAttribute('class', 'extra');

			function getProps(arg$: ReadableSignal<{classnames: string; classC: boolean; classD: boolean}>) {
				return {
					attributes: {
						class: computed(() => arg$().classnames),
					},
					classNames: {
						cc: computed(() => arg$().classC),
						dd: computed(() => arg$().classD),
					},
				};
			}

			const directive = createAttributesDirective(getProps);
			const {update, destroy} = directive(node, {classnames: 'aa bb', classC: true, classD: false})!;

			expect(node.getAttribute('class')).toBe('extra aa bb cc');

			update!({classnames: 'aa', classC: true, classD: false});
			expect(node.getAttribute('class')).toBe('extra aa cc');

			update!({classnames: 'aa', classC: false, classD: true});
			expect(node.getAttribute('class')).toBe('extra aa dd');

			destroy!();
		});
	});

	describe('directiveAttributes', () => {
		test('should retrieve attributes with stores', () => {
			const ariaLabel$ = writable('a');
			const readonly$ = writable(true);
			const disabled$ = writable(false);
			const ariaDisabled$ = writable(undefined);
			const cursor$ = writable('pointer');
			const width$ = writable(undefined);
			const c1$ = writable(true);
			const c2$ = writable(false);

			const directive = createAttributesDirective(() => ({
				attributes: {
					'aria-label': ariaLabel$,
					readonly: readonly$,
					disabled: disabled$,
					'aria-disabled': ariaDisabled$,
				},
				styles: {
					cursor: cursor$,
					width: width$,
				},
				classNames: {
					c1: c1$,
					c2: c2$,
				},
			}));

			expect(directiveAttributes(directive)).toStrictEqual({
				'aria-label': 'a',
				readonly: '',
				class: 'c1',
				style: 'cursor: pointer;',
			});
		});

		test('should work with multiple directives', () => {
			const readonly$ = writable(true);
			const disabled$ = writable(true);
			const cursor$ = writable('pointer');
			const width$ = writable('10px');
			const c1$ = writable(true);
			const c2$ = writable(true);

			const directive1 = createAttributesDirective(() => ({
				attributes: {
					readonly: readonly$,
					class: 'a',
				},
				styles: {
					cursor: cursor$,
				},
				classNames: {
					c1: c1$,
				},
			}));

			const directive2 = createAttributesDirective(() => ({
				attributes: {
					disabled: disabled$,
					class: 'b',
				},
				styles: {
					width: width$,
				},
				classNames: {
					c2: c2$,
				},
			}));

			const expectedState = {
				readonly: '',
				disabled: '',
				class: 'a c1 b c2',
				style: 'cursor: pointer;width: 10px;',
			};

			expect(directiveAttributes(directive1, directive2)).toStrictEqual(expectedState);

			const mergedDirective = mergeDirectives(directive1, directive2);
			expect(directiveAttributes(mergedDirective), 'should work the same with mergeDirectives').toStrictEqual(expectedState);
		});
	});
});
