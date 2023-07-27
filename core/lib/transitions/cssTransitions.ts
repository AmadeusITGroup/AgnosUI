import type {TransitionFn} from './baseTransitions';
import {promiseFromEvent, promiseFromTimeout} from './utils';

export function hasTransition(element: HTMLElement) {
	return window.getComputedStyle(element).transitionProperty !== 'none';
}

export function getTransitionDurationMs(element: HTMLElement) {
	const {transitionDelay, transitionDuration} = window.getComputedStyle(element);
	const transitionDelaySec = parseFloat(transitionDelay);
	const transitionDurationSec = parseFloat(transitionDuration);

	return (transitionDelaySec + transitionDurationSec) * 1000;
}

const noop = () => {
	/* do nothing */
};

export type CSSTransitionFn = (element: HTMLElement, direction: 'show' | 'hide', animation: boolean, context: object) => void | (() => void);

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
