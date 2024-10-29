import type {ReadableSignal} from '@amadeus-it-group/tansu';
import {derived} from '@amadeus-it-group/tansu';
import {createBrowserStoreDirective} from '../utils/directive';
import {noop} from '../utils/internal/func';
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
