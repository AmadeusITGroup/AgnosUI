import type {ReadableSignal} from '@amadeus-it-group/tansu';
import {asReadable, batch, readable, writable} from '@amadeus-it-group/tansu';
import {BROWSER} from 'esm-env';
import type {AttributeValue, Directive, DirectivesAndOptParam, SSRHTMLElement, StyleKey, StyleValue} from '../types';
import {addEvent, bindAttribute, bindClassName, bindStyle} from './internal/dom';
import {noop} from './internal/func';
import {ssrHTMLElement, ssrHTMLElementAttributesAndStyle} from './internal/ssrHTMLElement';
import {toReadableStore} from './stores';

/**
 * On a browser environment, returns true if the given element is an HTMLElement.
 * On a server environment, always returns false.
 * @param element - The element to check.
 * @returns true in a browser environment if the given element is an HTMLElement, otherwise false.
 */
export const isBrowserHTMLElement: (element: SSRHTMLElement) => element is HTMLElement = BROWSER
	? (((element: SSRHTMLElement) => {
			const contentWindow = (element as any as Element)?.ownerDocument?.defaultView ?? window;
			return element instanceof contentWindow.HTMLElement;
		}) as any)
	: // eslint-disable-next-line @typescript-eslint/no-unused-vars
		(element) => false;

/**
 * Creates a directive that wraps the provided directive to only run it in a browser environment (and not in a server-side rendering environment).
 * @param directive - The directive to run only in a browser.
 * @returns The wrapped directive.
 */
export const browserDirective: <T, U extends HTMLElement>(directive: Directive<T, U>) => Directive<T, SSRHTMLElement> = BROWSER
	? (directive) => (node, args) => {
			if (isBrowserHTMLElement(node)) {
				return directive(node as any, args);
			}
		}
	: // eslint-disable-next-line @typescript-eslint/no-unused-vars
		(directive) => () => {};

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
export const bindDirective =
	<T, U extends SSRHTMLElement = SSRHTMLElement>(directive: Directive<T, U>, directiveArg$: ReadableSignal<T>): Directive<void, U> =>
	(element) => {
		let firstTime = true;
		let instance: ReturnType<Directive<T, U>> | undefined;
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

const noArg = readable(undefined);

/**
 * Returns a directive that ignores any argument passed to it and calls the provided directive without any
 * argument.
 *
 * @param directive - directive to wrap
 * @returns The resulting directive.
 */
export const bindDirectiveNoArg = <T, U extends SSRHTMLElement = SSRHTMLElement>(directive: Directive<T | void, U>) =>
	bindDirective(directive, noArg);

/**
 * Maps the argument to another argument of a directive using a provided function.
 *
 * @param directive - The directive to be applied.
 * @param fn - The function to map the argument.
 * @returns A new directive that applies the mapping function to the argument.
 */
export const mapDirectiveArg =
	<T, U, V extends SSRHTMLElement = SSRHTMLElement>(directive: Directive<U, V>, fn: (arg: T) => U): Directive<T, V> =>
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
	(_element, arg) => {
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
 * It is the same as {@link createBrowserStoreArrayDirective}, but the returned directive is also executed in a server environment
 * and the type of the elements is {@link SSRHTMLElement} instead of HTMLElement.
 *
 * If the directive is intended to be used on a single element element, it may be more appropriate to use
 * {@link createStoreDirective} instead.
 *
 * @returns An object with two properties: the `directive` property that is the directive to use on some DOM elements,
 * and the `elements$` property that is the store containing an array of all the elements on which the directive is currently
 * used.
 */
export const createStoreArrayDirective = (): {directive: Directive; elements$: ReadableSignal<SSRHTMLElement[]>} => {
	const elements$ = registrationArray<SSRHTMLElement>();
	return {
		elements$: asReadable(elements$),
		directive: (element) => ({destroy: elements$.register(element)}),
	};
};

/**
 * Returns a directive and a store. The store contains at any time the array of all the DOM elements on which the directive is
 * currently used.
 *
 * @remarks
 * It is the same as {@link createStoreArrayDirective}, but the returned directive is only executed in a browser environment
 * and the type of the elements is HTMLElement instead of {@link SSRHTMLElement}.
 *
 * If the directive is intended to be used on a single element element, it may be more appropriate to use
 * {@link createBrowserStoreDirective} instead.
 *
 * @returns An object with two properties: the `directive` property that is the directive to use on some DOM elements,
 * and the `elements$` property that is the store containing an array of all the elements on which the directive is currently
 * used.
 */
export const createBrowserStoreArrayDirective = () => {
	const {directive, elements$} = createStoreArrayDirective();
	return {directive: browserDirective(directive), elements$: elements$ as ReadableSignal<HTMLElement[]>};
};

/**
 * Returns a directive and a store. When the directive is used on a DOM element, the store contains that DOM element.
 * When the directive is not used, the store contains null.
 *
 * @remarks
 * It is the same as {@link createBrowserStoreDirective}, but the returned directive is also executed in a server environment
 * and the type of the element is {@link SSRHTMLElement} instead of HTMLElement.
 *
 * If the directive is used on more than one element, an error is displayed in the console and the element is ignored.
 * If the directive is intended to be used on more than one element, please use {@link createStoreArrayDirective} instead.
 *
 * @returns An object with two properties: the `directive` property that is the directive to use on one DOM element,
 * and the `element$` property that is the store containing the element on which the directive is currently used (or null
 * if the store is not currently used).
 */
export const createStoreDirective = (): {directive: Directive; element$: ReadableSignal<SSRHTMLElement | null>} => {
	const element$ = writable(null as SSRHTMLElement | null, equalOption);
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
 * Returns a directive and a store. When the directive is used on a DOM element, the store contains that DOM element.
 * When the directive is not used, the store contains null.
 *
 * @remarks
 * It is the same as {@link createStoreDirective}, but the returned directive is only executed in a browser environment
 * and the type of the element is HTMLElement instead of {@link SSRHTMLElement}.
 *
 * If the directive is used on more than one element, an error is displayed in the console and the element is ignored.
 * If the directive is intended to be used on more than one element, please use {@link createStoreArrayDirective} instead.
 *
 * @returns An object with two properties: the `directive` property that is the directive to use on one DOM element,
 * and the `element$` property that is the store containing the element on which the directive is currently used (or null
 * if the store is not currently used).
 */
export const createBrowserStoreDirective = () => {
	const {directive, element$} = createStoreDirective();
	return {directive: browserDirective(directive), element$: element$ as ReadableSignal<HTMLElement | null>};
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
	<T, U extends SSRHTMLElement = SSRHTMLElement>(...args: (Directive<T, U> | Directive<void, U>)[]): Directive<T, U> =>
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
 * Directive that applies all the directives passed as arguments.
 *
 * @param element - the element to apply the directives to
 * @param directives - the directives to apply
 * @returns The directive instance.
 */
export const multiDirective = <T extends any[], U extends SSRHTMLElement = SSRHTMLElement>(element: U, directives: DirectivesAndOptParam<T, U>) => {
	const instances: {[K in keyof T]: {directive: Directive<T[K], U>; instance: ReturnType<Directive<T[K], U>>; arg: T[K]}} = [] as any;
	const update = (directives: DirectivesAndOptParam<any[], U>) =>
		batch(() => {
			directives.forEach((directiveWithArg, index) => {
				const [directive, arg] = Array.isArray(directiveWithArg) ? directiveWithArg : [directiveWithArg, undefined];
				const oldInstance = instances[index];
				if (oldInstance) {
					if (oldInstance.directive === directive) {
						if (oldInstance.arg !== arg) {
							oldInstance.instance?.update?.(arg);
							oldInstance.arg = arg;
						}
						return;
					}
					oldInstance.instance?.destroy?.();
				}
				const instance = directive(element, arg);
				instances[index] = {directive, instance, arg};
			});
			const extraInstances = instances.splice(directives.length);
			extraInstances.reverse().forEach(({instance}) => instance?.destroy?.());
		});
	update(directives);
	return {
		update,
		destroy: () => update([]),
	};
};

/**
 * Properties for configuring server-side rendering directives.
 */
export interface AttributesDirectiveProps {
	/**
	 * Events to be attached to an HTML element.
	 * @remarks
	 * Key-value pairs where keys are event types and values are event handlers.
	 */
	events?: Partial<{
		[K in keyof HTMLElementEventMap]:
			| {
					handler: (this: HTMLElement, event: HTMLElementEventMap[K]) => void;
					options?: boolean | AddEventListenerOptions;
			  }
			| ((this: HTMLElement, event: HTMLElementEventMap[K]) => void);
	}>;

	/**
	 * Attributes to be added to the provided node.
	 * @remarks
	 * The `style` attribute must be added separately.
	 */
	attributes?: Record<string, AttributeValue | ReadableSignal<AttributeValue>>;

	/**
	 * Styles to be added to an HTML element.
	 * @remarks
	 * Key-value pairs where keys are CSS style properties and values are style values.
	 */
	styles?: Partial<Record<StyleKey, StyleValue | ReadableSignal<StyleValue>>>;

	/**
	 * Class names to be added to an HTML element.
	 * @remarks
	 * Key-value pairs where keys are class names and values indicate whether the class should be added (true) or removed (false).
	 */
	classNames?: Record<string, boolean | ReadableSignal<boolean>>;
}

/**
 * Creates a directive for server-side rendering with bindable elements.
 * This directive binds events, attributes, styles, and classNames to an HTML element.
 *
 * @param propsFn - A function that returns the AttributesDirectiveProps with the data to bind.
 * This function can take an optional parameter that corrspond to the second parameter of the created directive.
 * @returns A directive object with bound events, attributes, styles, and classNames.
 */
export const createAttributesDirective =
	<T = void>(propsFn: (arg: ReadableSignal<T>) => AttributesDirectiveProps): Directive<T> =>
	(node, args: T) => {
		const unsubscribers: (() => void)[] = [];
		const args$ = writable(args);

		const {events, attributes, styles, classNames} = propsFn(args$);

		if (isBrowserHTMLElement(node)) {
			for (const [type, event] of Object.entries(events ?? {})) {
				if (typeof event === 'function') {
					unsubscribers.push(addEvent(node, type as keyof HTMLElementEventMap, event as any));
				} else {
					unsubscribers.push(addEvent(node, type as keyof HTMLElementEventMap, event.handler as any, event.options));
				}
			}
		}

		for (const [attributeName, value] of Object.entries(attributes ?? {})) {
			if (value != null) {
				unsubscribers.push(bindAttribute(node, attributeName, toReadableStore(value)));
			}
		}

		for (const [styleName, value] of Object.entries(styles ?? {}) as Iterable<[StyleKey, StyleValue | ReadableSignal<StyleValue>]>) {
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
	};

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
export const attributesData = <T extends any[]>(
	...directives: DirectivesAndOptParam<T>
): {
	attributes: Record<string, string>;
	classNames: string[];
	style: Partial<Record<StyleKey, StyleValue>>;
} => {
	const instances = [];
	try {
		const element = ssrHTMLElement();
		for (const directive of directives) {
			instances.push(Array.isArray(directive) ? directive[0](element, directive[1]) : directive(element));
		}
		return (element as any)[ssrHTMLElementAttributesAndStyle]();
	} finally {
		instances.forEach((instance) => instance?.destroy?.());
	}
};

/**
 * Directive that takes as an argument a string containing CSS classes to be put on the HTML element.
 */
export const classDirective: Directive<string> = createAttributesDirective<string>((className) => ({attributes: {class: className}}));

/**
 * Returns JSON representation of the attributes to be applied derived from a list of directives.
 *
 * @param directives - List of directives to generate attributes from. Each parameter can be the directive or an array with the directive and its parameter
 * @returns JSON object with name/value for the attributes
 */
export function directiveAttributes<T extends any[]>(...directives: DirectivesAndOptParam<T>) {
	const {attributes, classNames, style} = attributesData(...directives);
	if (classNames.length) {
		attributes['class'] = classNames.join(' ');
	}
	const stringStyle = Object.entries(style)
		.filter(([, value]) => !!value)
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
 * @returns JSON object with name/value for the attributes
 */
export const ssrAttributes = BROWSER ? () => ({}) : directiveAttributes;
