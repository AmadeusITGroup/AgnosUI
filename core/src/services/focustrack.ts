import type {ReadableSignal} from '@amadeus-it-group/tansu';
import {computed, readable} from '@amadeus-it-group/tansu';
import type {Directive} from '../types';
import {createBrowserStoreArrayDirective} from '../utils/directive';
import {BROWSER} from 'esm-env';

const evtFocusIn = 'focusin';
const evtFocusOut = 'focusout';

/**
 * A readable store that tracks the currently active (focused) element in the document.
 *
 * This store is only active in a browser environment. When not in a browser environment,
 * it will be a readable store with a `null` value.
 *
 * @example
 * ```typescript
 * import { activeElement$ } from './focustrack';
 *
 * activeElement$.subscribe((element) => {
 *   console.log('Active element:', element);
 * });
 * ```
 *
 * The store updates whenever the active element changes, such as when the user focuses
 * on a different input field or clicks on a different part of the document.
 */
export const activeElement$: ReadableSignal<Element | null> = !BROWSER
	? readable(null)
	: readable(<Element | null>null, {
			onUse({set}) {
				function setActiveElement() {
					set(document.activeElement);
				}
				setActiveElement();

				const container = document.documentElement;
				function onFocusOut() {
					setTimeout(setActiveElement);
				}

				container.addEventListener(evtFocusIn, setActiveElement, {capture: true});
				container.addEventListener(evtFocusOut, onFocusOut, {capture: true});

				return () => {
					container.removeEventListener(evtFocusIn, setActiveElement, {capture: true});
					container.removeEventListener(evtFocusOut, onFocusOut, {capture: true});
				};
			},
			equal: Object.is,
		});

/**
 * Interface representing an element that can have focus tracking.
 */
export interface HasFocus {
	/**
	 * Directive to put on some elements.
	 */
	directive: Directive;

	/**
	 * Store that contains true if the activeElement is one of the elements which has the directive,
	 * or any of their descendants.
	 */
	hasFocus$: ReadableSignal<boolean>;
}

/**
 * Create a HasFocus
 * @returns a HasFocus
 */
export function createHasFocus(): HasFocus {
	const {elements$, directive} = createBrowserStoreArrayDirective();

	const hasFocus$ = computed(() => {
		const activeElement = activeElement$();
		if (!activeElement) {
			return false;
		}
		for (const element of elements$()) {
			if (element === activeElement || element.contains(activeElement)) {
				return true;
			}
		}
		return false;
	});

	return {
		directive,
		hasFocus$,
	};
}
