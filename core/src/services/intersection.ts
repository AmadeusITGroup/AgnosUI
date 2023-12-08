import {asReadable, derived} from '@amadeus-it-group/tansu';
import {noop} from '../utils/internal/func';
import type {PropsConfig} from '../types';
import {writablesForProps} from '../utils/stores';

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

export const createIntersection = (config?: PropsConfig<IntersectionProps>) => {
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
