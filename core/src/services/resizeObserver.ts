import type {ReadableSignal} from '@amadeus-it-group/tansu';
import {derived} from '@amadeus-it-group/tansu';
import {browserDirective, createBrowserStoreArrayDirective} from '../utils/directive';
import {noop} from '../utils/func';
import type {Directive, SSRHTMLElement} from '../types';

/**
 * Create a resize observer that can be applied to multiple elements
 * @returns An object containing the store with the dimensions map of observed elements (ResizeObserverEntry), the directive to be applied to the html element to be observed
 */
export const createResizeObserverMap = (): {
	dimensionsMap$: ReadableSignal<Map<HTMLElement, ResizeObserverEntry>>;
	directive: Directive<void, SSRHTMLElement>;
} => {
	const {elements$, directive} = createBrowserStoreArrayDirective();

	const dimensionsMap$ = derived(
		elements$,
		(elements, set) => {
			const dimensionsMap = new Map<HTMLElement, ResizeObserverEntry>();

			if (elements.length === 0) {
				set(dimensionsMap);
				return noop;
			}

			const observer = new ResizeObserver((entries) => {
				entries.forEach((entry) => dimensionsMap.set(entry.target as HTMLElement, entry));
				set(dimensionsMap);
			});

			elements.forEach((element) => observer.observe(element));

			return () => observer.disconnect();
		},
		new Map(),
	);

	return {dimensionsMap$, directive};
};

/**
 * Create a resize observer object for a single element
 * @returns An object containing the store with the dimensions of observed element (ResizeObserverEntry), the directive to be applied to the html element to be observed
 */
export const createResizeObserver = (): {
	dimensions$: ReadableSignal<ResizeObserverEntry | undefined>;
	directive: Directive<void, SSRHTMLElement>;
} => {
	const {dimensionsMap$, directive: arrayDirective} = createResizeObserverMap();
	let firstElement: HTMLElement | null = null;

	const directive: Directive<void, SSRHTMLElement> = browserDirective((element) => {
		if (firstElement === null) {
			firstElement = element;
		} else {
			console.error('createResizeObserver directive can only be applied to a single element. Use createResizeObserverMap for multiple elements.');
			return;
		}

		const result = arrayDirective(element);
		if (!result) return;

		const originalDestroy = result.destroy;
		return {
			...result,
			destroy: () => {
				firstElement = null;
				originalDestroy?.();
			},
		};
	});

	const dimensions$ = derived(dimensionsMap$, (map) => (firstElement ? map.get(firstElement) : undefined), undefined);
	return {dimensions$, directive};
};
