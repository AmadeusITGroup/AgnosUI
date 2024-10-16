import {asReadable, derived, type ReadableSignal} from '@amadeus-it-group/tansu';
import {noop} from '../utils/internal/func';
import type {PropsConfig} from '../types';
import {writablesForProps} from '../utils/stores';

/**
 * Interface representing the properties for the Intersection service.
 */
export interface IntersectionProps {
	/**
	 * elements to observe
	 */
	elements: HTMLElement[];

	/**
	 * IntersectionObserverInit used in the IntersectionObserver
	 *
	 * See the [MDN documentation](https://developer.mozilla.org/en-US/docs/Web/API/IntersectionObserver/IntersectionObserver#options)
	 */
	options: Partial<IntersectionObserverInit> | undefined;
}

const defaultValues: IntersectionProps = {
	elements: [],

	options: undefined,
};

/**
 * Create an intersection service.
 *
 * The returned service includes the patch method to set the elements to observe / intersection options and the states to track the visible elements.
 *
 * @param config - the props config for the intersection service
 * @returns the intersection service
 */
export const createIntersection = (
	config?: PropsConfig<IntersectionProps>,
): {
	elements$: ReadableSignal<HTMLElement[]>;
	visibleElements$: ReadableSignal<Map<Element, IntersectionObserverEntry>>;
	patch: (storesValues: Partial<IntersectionProps>) => void;
} => {
	const [{elements$, options$}, patch] = writablesForProps(defaultValues, config);

	const visibleElements$ = derived(
		[elements$, options$],
		([elements, options], set) => {
			if (elements.length) {
				const visibleElements = new Map<Element, IntersectionObserverEntry>();
				const observer = new IntersectionObserver((entries) => {
					for (const entry of entries) {
						const {target, isIntersecting} = entry;
						if (isIntersecting) {
							visibleElements.set(target, entry);
						} else {
							visibleElements.delete(target);
						}
					}
					set(visibleElements);
				}, options);

				for (const element of elements) {
					observer.observe(element);
				}

				return () => {
					observer.disconnect();
				};
			}

			return noop;
		},
		new Map<Element, IntersectionObserverEntry>(),
	);

	return {
		/**
		 * Readable of observed elements
		 */
		elements$: asReadable(elements$),

		/**
		 * Store of map that contains the visible elements (for the key) and the corresponding entries
		 *
		 * See the [MDN documentation](https://developer.mozilla.org/en-US/docs/Web/API/IntersectionObserverEntry)
		 */
		visibleElements$: asReadable(visibleElements$),

		patch,
	};
};
