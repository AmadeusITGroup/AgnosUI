import type {ReadableSignal} from '@amadeus-it-group/tansu';
import {derived} from '@amadeus-it-group/tansu';
import {createBrowserStoreArrayDirective, createBrowserStoreDirective} from '../utils/directive';
import {noop} from '../utils/func';
import type {Directive, SSRHTMLElement} from '../types';

/**
 * Create a resize observer object
 * @returns An object containing the store with the dimentions of observed element (ResizeObserverEntry), the directive to be applied to the html element to be observed
 */
export const createResizeObserver = (): {
	dimensions$: ReadableSignal<ResizeObserverEntry | undefined>;
	directive: Directive<void, SSRHTMLElement>;
} => {
	const {element$, directive} = createBrowserStoreDirective();

	const observedElement$ = derived<ResizeObserverEntry | undefined, ReadableSignal<HTMLElement | null>>(
		element$,
		(element, set) => {
			if (element === null) {
				return noop;
			}

			const observer = new ResizeObserver((entries) => {
				set(entries[0]);
			});

			observer.observe(element);

			return () => observer?.disconnect();
		},
		undefined,
	);

	return {
		/**
		 * Store which contains the dimensions of the observed element (ResizeObserverEntry type)
		 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/ResizeObserverEntry | MDN documentation}
		 */
		dimensions$: observedElement$,

		/** Directive to be attached to html element in order to listen to resize events */
		directive,
	};
};

/**
 * Create a resize observer that can be applied to multiple elements
 * @returns An object containing the store with the dimentions map of observed elements (ResizeObserverEntry), the directive to be applied to the html element to be observed
 */
export const createResizeObserverArray = (): {
	dimensionsMap$: ReadableSignal<Map<HTMLElement, ResizeObserverEntry>>;
	directive: Directive<void, SSRHTMLElement>;
} => {
	const {elements$, directive} = createBrowserStoreArrayDirective();

	const observedElements$ = derived<Map<HTMLElement, ResizeObserverEntry>, ReadableSignal<HTMLElement[]>>(
		elements$,
		(elements, set) => {
			const dimensionsMap = new Map<HTMLElement, ResizeObserverEntry>();

			if (elements.length === 0) {
				set(dimensionsMap);
				return noop;
			}

			const observer = new ResizeObserver((entries) => {
				for (const entry of entries) {
					dimensionsMap.set(entry.target as HTMLElement, entry);
				}
				set(new Map(dimensionsMap)); // create new Map to trigger reactivity
			});

			for (const element of elements) {
				observer.observe(element);
			}

			return () => {
				observer.disconnect();
				dimensionsMap.clear();
			};
		},
		new Map(),
	);

	return {
		/**
		 * Store which contains a Map of observed elements to their dimensions (ResizeObserverEntry)
		 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/ResizeObserverEntry | MDN documentation}
		 */
		dimensionsMap$: observedElements$,

		/** Directive to be attached to html elements in order to listen to resize events */
		directive,
	};
};
