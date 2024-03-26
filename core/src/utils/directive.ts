import type {ReadableSignal} from '@amadeus-it-group/tansu';
import {asReadable, batch, readable, writable} from '@amadeus-it-group/tansu';
import {BROWSER} from 'esm-env';
import type {AttributeDirective, AttributesDirectiveProps, Directive} from '../types';
import {addEvent, bindAttribute, bindClassName, bindStyle} from './internal/dom';
import {noop} from './internal/func';
import {toReadableStore, toValue} from './stores';

/**
 * Binds the given directive to a store that provides its argument.
 *
 * @remarks
 *
 * The returned directive can be used without argument, it will ignore any argument passed to it
 * and will call the provided directive with the content of the provided store as its argument,
 * calling its update method when the content of the store changes.
 *
 * @param directive - directive to bind
 * @param directiveArg$ - store containing the argument of the directive
 * @returns The bound directive that can be used with no argument.
 */
export const bindDirective = <T>(directive: Directive<T>, directiveArg$: ReadableSignal<T>): Directive => {
	return (element) => {
		let firstTime = true;
		let instance: ReturnType<Directive<T>> | undefined;
		const unsubscribe = directiveArg$.subscribe((value) => {
			if (firstTime) {
				firstTime = false;
				instance = directive(element, value);
			} else {
				instance?.update?.(value);
			}
		});
		return {
			destroy() {
				instance?.destroy?.();
				unsubscribe();
			},
		};
	};
};

const noArg = readable(undefined);

/**
 * Returns a directive that ignores any argument passed to it and calls the provided directive without any
 * argument.
 *
 * @param directive - directive to wrap
 * @returns The resulting directive.
 */
export const bindDirectiveNoArg = <T>(directive: Directive<T | void>) => bindDirective(directive, noArg);

/**
 * Maps the argument to another argument of a directive using a provided function.
 *
 * @param directive - The directive to be applied.
 * @param fn - The function to map the argument.
 * @returns A new directive that applies the mapping function to the argument.
 */
export const mapDirectiveArg =
	<T, U>(directive: Directive<U>, fn: (arg: T) => U): Directive<T> =>
	(node, arg) => {
		const instance = directive(node, fn(arg));
		return {
			update: (arg) => {
				instance?.update?.(fn(arg));
			},
			destroy: () => instance?.destroy?.(),
		};
	};
/**
 * Returns a directive that subscribes to the given store while it is used on a DOM element,
 * and that unsubscribes from it when it is no longer used.
 *
 * @param store - store on which there will be an active subscription while the returned directive is used.
 * @param asyncUnsubscribe - true if unsubscribing from the store should be done asynchronously (which is the default), and
 * false if it should be done synchronously when the directive is destroyed
 * @returns The resulting directive.
 */
export const directiveSubscribe =
	(store: ReadableSignal<any>, asyncUnsubscribe = true): Directive =>
	() => {
		const unsubscribe = store.subscribe(noop);
		return {
			destroy: async () => {
				if (asyncUnsubscribe) {
					await 0;
				}
				unsubscribe();
			},
		};
	};

/**
 * Returns a directive that calls the provided function with the arguments passed to the directive
 * on initialization and each time they are updated.
 *
 * @param update - Function called with the directive argument when the directive is initialized and when its argument is updated.
 * @returns The resulting directive.
 */
export const directiveUpdate =
	<T>(update: (arg: T) => void): Directive<T> =>
	(element, arg) => {
		update(arg);
		return {
			update,
		};
	};

const equalOption = {equal: Object.is};

/**
 * Utility to create a store that contains an array of items.
 * @returns a store containing an array of items.
 */
export const registrationArray = <T>(): ReadableSignal<T[]> & {register: (element: T) => () => void} => {
	const elements$ = writable([] as T[], equalOption);
	return asReadable(elements$, {
		/**
		 * Add the given element to the array.
		 * @param element - Element to be added to the array.
		 * @returns A function to remove the element from the array.
		 */
		register: (element: T) => {
			let removed = false;
			elements$.update((currentElements) => [...currentElements, element]);
			return () => {
				if (!removed) {
					removed = true;
					elements$.update((currentElements) => {
						const index = currentElements.indexOf(element);
						if (index > -1) {
							const copy = [...currentElements];
							copy.splice(index, 1);
							return copy;
						}
						return currentElements; // no change
					});
				}
			};
		},
	});
};

/**
 * Returns a directive and a store. The store contains at any time the array of all the DOM elements on which the directive is
 * currently used.
 *
 * @remarks
 * If the directive is intended to be used on a single element element, it may be more appropriate to use
 * {@link createStoreDirective} instead.
 *
 * @returns An object with two properties: the `directive` property that is the directive to use on some DOM elements,
 * and the `elements$` property that is the store containing an array of all the elements on which the directive is currently
 * used.
 */
export const createStoreArrayDirective = (): {directive: Directive; elements$: ReadableSignal<HTMLElement[]>} => {
	const elements$ = registrationArray<HTMLElement>();
	return {
		elements$: asReadable(elements$),
		directive: (element) => ({destroy: elements$.register(element)}),
	};
};

/**
 * Returns a directive and a store. When the directive is used on a DOM element, the store contains that DOM element.
 * When the directive is not used, the store contains null.
 *
 * @remarks
 * If the directive is used on more than one element, an error is displayed in the console and the element is ignored.
 * If the directive is intended to be used on more than one element, please use {@link createStoreArrayDirective} instead.
 *
 * @returns An object with two properties: the `directive` property that is the directive to use on one DOM element,
 * and the `element$` property that is the store containing the element on which the directive is currently used (or null
 * if the store is not currently used).
 */
export const createStoreDirective = (): {directive: Directive; element$: ReadableSignal<HTMLElement | null>} => {
	const element$ = writable(null as HTMLElement | null, equalOption);
	return {
		element$: asReadable(element$),
		directive: (element) => {
			let valid = false;
			element$.update((currentElement) => {
				if (currentElement) {
					console.error('The directive cannot be used on multiple elements.', currentElement, element);
					return currentElement;
				}
				valid = true;
				return element;
			});
			return valid
				? {
						destroy() {
							element$.update((currentElement) => (element === currentElement ? null : currentElement));
						},
					}
				: undefined;
		},
	};
};

/**
 * Merges multiple directives into a single directive that executes all of them when called.
 *
 * @remarks
 * All directives receive the same argument upon initialization and update.
 * Directives are created and updated in the same order as they appear in the arguments list,
 * they are destroyed in the reverse order.
 * All calls to the directives (to create, update and destroy them) are wrapped in a call to the
 * batch function of tansu
 *
 * @param args - directives to merge into a single directive.
 * @returns The resulting merged directive.
 */
export const mergeDirectives =
	<T>(...args: (Directive<T> | Directive)[]): Directive<T> =>
	(element, arg) => {
		const instances = batch(() => args.map((directive) => directive(element, arg as any)));
		return {
			update(arg) {
				batch(() => instances.forEach((instance) => instance?.update?.(arg as any)));
			},
			destroy() {
				batch(() => instances.reverse().forEach((instance) => instance?.destroy?.()));
			},
		};
	};

/**
 * Creates a directive for server-side rendering with bindable elements.
 * This directive binds events, attributes, styles, and classNames to an HTML element.
 *
 * @param propsFn - A function that returns the AttributesDirectiveProps with the data to bind.
 * This function can take an optional parameter that corrspond to the second parameter of the created directive.
 * @returns A directive object with bound events, attributes, styles, and classNames.
 */
export const createAttributesDirective = <T = void>(propsFn: (arg: ReadableSignal<T>) => AttributesDirectiveProps) => {
	const directive: AttributeDirective<T> = Object.assign(
		(node: HTMLElement, args: T) => {
			const unsubscribers: (() => void)[] = [];
			const args$ = writable(args);

			const {events, attributes, styles, classNames} = propsFn(args$);

			for (const [type, eventFn] of Object.entries(events ?? {})) {
				unsubscribers.push(addEvent(node, type as keyof HTMLElementEventMap, eventFn as any));
			}

			for (const [attributeName, value] of Object.entries(attributes ?? {})) {
				if (value != null) {
					unsubscribers.push(bindAttribute(node, attributeName, toReadableStore(value)));
				}
			}

			for (const [styleName, value] of Object.entries(styles ?? {})) {
				if (value) {
					unsubscribers.push(bindStyle(node, styleName, toReadableStore(value)));
				}
			}

			for (const [className, value] of Object.entries(classNames ?? {})) {
				unsubscribers.push(bindClassName(node, className, toReadableStore(value)));
			}

			return {
				update: (args: T) => args$.set(args),
				destroy: () => unsubscribers.forEach((fn) => fn()),
			};
		},
		{propsFn},
	);

	return directive;
};

/**
 * Creates a directive for adding specified CSS class names to an HTML element.
 *
 * @param classNames - An array of CSS class names to be added.
 * @returns A directive object with bound class names.
 */
export function createClassDirective(...classNames: string[]) {
	const classNamesObj: AttributesDirectiveProps['classNames'] = {};
	for (const className of classNames) {
		classNamesObj[className] = true;
	}
	return createAttributesDirective(() => ({classNames: classNamesObj}));
}

export type AttributeDirectiveAndParam<T> = [AttributeDirective<T>, T];

/**
 * Returns an object with the attributes, style and class keys containing information derived from a list of directives.
 *
 *   - The `attributes` value is a JSON representation of key/value attributes, excepted for the `class` and `style` attributes
 *   - The `classNames` value is an array of string representing the classes to be applied
 *   - The `style` value is a JSON representation of the styles to be applied
 *
 * @param directives - List of directives to generate attributes from. Each parameter can be the directive or an array with the directive and its parameter
 * @returns JSON object with the `attributes`, `class` and `style` keys.
 */
export function ssrAttributesData<T extends any[]>(...directives: {[K in keyof T]: AttributeDirectiveAndParam<T[K]> | AttributeDirective<void>}) {
	const result = {
		attributes: <Record<string, string>>{},
		classNames: <string[]>[],
		style: <Record<string, string>>{},
	};

	const classNames = new Set<string>();
	for (const directiveDef of directives) {
		let attributesDirectiveProps: AttributesDirectiveProps;
		if (Array.isArray(directiveDef)) {
			const [directive, args] = directiveDef;
			attributesDirectiveProps = directive.propsFn(readable(args));
		} else {
			const directive = directiveDef;
			attributesDirectiveProps = directive.propsFn(readable(undefined));
		}

		const {class: classNamesFromAttr, ...attributesFromAttr} = attributesDirectiveProps.attributes ?? {};
		const attributes = result.attributes;
		for (const [name, value] of Object.entries(attributesFromAttr)) {
			const rawValue = toValue(value);
			if (rawValue != null && rawValue !== false) {
				attributes[name] = '' + (rawValue === true ? '' : rawValue);
			}
		}
		const style = result.style;
		for (const [name, value] of Object.entries(attributesDirectiveProps.styles ?? {})) {
			const rawValue = toValue(value);
			if (rawValue != null) {
				style[name] = rawValue;
			}
		}

		`${toValue(classNamesFromAttr) || ''}`.split(' ').forEach((className) => classNames.add(className));
		for (const [name, value] of Object.entries(attributesDirectiveProps.classNames ?? {})) {
			if (toValue(value)) {
				classNames.add(name);
			}
		}
		result.classNames = [...classNames].filter((className) => className !== '');
	}

	return result;
}

/**
 * Returns JSON representation of the attributes to be applied derived from a list of directives.
 *
 * @param directives - List of directives to generate attributes from. Each parameter can be the directive or an array with the directive and its parameter
 * @returns JSON object with name/value for the attributes
 */
export function directiveAttributes<T extends any[]>(...directives: {[K in keyof T]: AttributeDirectiveAndParam<T[K]> | AttributeDirective<void>}) {
	const {attributes, classNames, style} = ssrAttributesData(...directives);
	if (classNames.length) {
		attributes['class'] = classNames.join(' ');
	}
	const stringStyle = Object.entries(style)
		.map(([name, value]) => `${name}: ${value};`)
		.join('');
	if (stringStyle.length) {
		attributes['style'] = stringStyle;
	}
	return attributes;
}

/**
 * Same as {@link directiveAttributes}, but returns an empty object when run in a browser environement.
 *
 * @param directives - List of directives to generate attributes from. Each parameter can be the directive or an array with the directive and its parameter
 * @returns JSON object with name/value for the attributes
 */
export function ssrAttributes<T extends any[]>(...directives: {[K in keyof T]: AttributeDirectiveAndParam<T[K]> | AttributeDirective<void>}) {
	return !BROWSER ? directiveAttributes(...directives) : {};
}
