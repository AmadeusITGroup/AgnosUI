import {noop} from '../../utils/internal/func';
import type {TransitionFn} from './baseTransitions';
import {promiseFromEvent, promiseFromTimeout} from '../../utils/internal/promise';

/**
 * Check if the provided html element has a transition
 * @param element - the html element
 * @returns true if the element has a transition
 */
export function hasTransition(element: HTMLElement): boolean {
	return window.getComputedStyle(element).transitionProperty !== 'none';
}

/**
 * Retrieve the transition duration of the provided html element in milli seconds
 * @param element - the html element
 * @returns transition duration in milli seconds
 */
export function getTransitionDurationMs(element: HTMLElement): number {
	const {transitionDelay, transitionDuration} = window.getComputedStyle(element);
	const transitionDelaySec = parseFloat(transitionDelay);
	const transitionDurationSec = parseFloat(transitionDuration);

	return (transitionDelaySec + transitionDurationSec) * 1000;
}

export type CSSTransitionFn = (element: HTMLElement, direction: 'show' | 'hide', animation: boolean, context: object) => void | (() => void);

/**
 * Create a simple css transition.
 *
 * @param start - a function that creates the css animation and returns a clean-up function
 * @returns the css transition
 */
export const createCSSTransition =
	(start: CSSTransitionFn): TransitionFn =>
	async (element, direction, animation, signal, context) => {
		const endFn = start(element, direction, animation, context) ?? noop;

		if (animation && hasTransition(element)) {
			const abort = promiseFromEvent(signal, 'abort');
			const transitionEnd = promiseFromEvent(element, 'transitionend');
			const timer = promiseFromTimeout(getTransitionDurationMs(element));

			await Promise.race([abort.promise, transitionEnd.promise, timer.promise]);

			abort.unsubscribe();
			transitionEnd.unsubscribe();
			timer.unsubscribe();
		}
		if (!signal.aborted) {
			endFn();
		}
	};
