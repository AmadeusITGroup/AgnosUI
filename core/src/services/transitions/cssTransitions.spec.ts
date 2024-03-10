import {beforeEach, describe, expect, test} from 'vitest';
import type {TransitionProps} from './baseTransitions';
import {createTransition} from './baseTransitions';
import {createCSSTransition} from './cssTransitions';

describe(`createCSSTransition`, () => {
	let createdElements: HTMLElement[];

	beforeEach(() => {
		createdElements = [];
		return () => {
			createdElements.forEach((element) => element.parentNode?.removeChild(element));
		};
	});

	const createElement = (type = 'div') => {
		const element = document.createElement(type);
		createdElements.push(element);
		document.body.appendChild(element);
		return element;
	};

	const callTransitionShow = async (element: HTMLElement, props: Partial<TransitionProps>) => {
		const transitionInstance = createTransition({props: {animatedOnInit: true, ...props}});
		const directiveInstance = transitionInstance.directives.directive(element);
		await transitionInstance.api.show();
		directiveInstance?.destroy?.();
	};

	test(`simple transition (setTimeout)`, async () => {
		const events: string[] = [];
		const element = createElement();
		let duration: number | undefined;
		const transition = createCSSTransition((e, d) => {
			const timeBefore = performance.now();
			events.push('startFn');
			expect(e).toBe(element);
			expect(d).toBe('show');
			e.style.transitionDuration = '0.025s';
			return () => {
				duration = Math.round(performance.now() - timeBefore);
				events.push('endFn');
			};
		});
		events.push('before');
		// we do not emit transitionend, so this relies on setTimeout:
		await callTransitionShow(element, {transition});
		events.push('after');
		expect(events).toEqual(['before', 'startFn', 'endFn', 'after']);
		expect(duration).toBeGreaterThanOrEqual(25);
		// FIXME investigate why the toBeLessThan are not reliable
		// expect(duration).toBeLessThan(100);
	});

	test(`transition with no endFn`, async () => {
		const events: string[] = [];
		const element = createElement();
		let timeBefore: number | undefined;
		const transition = createCSSTransition((e, d) => {
			timeBefore = performance.now();
			events.push('startFn');
			expect(e).toBe(element);
			expect(d).toBe('show');
			e.style.transitionDuration = '0.025s';
		});
		events.push('before');
		// we do not emit transitionend, so this relies on setTimeout:
		await callTransitionShow(element, {transition});
		const duration = Math.round(performance.now() - timeBefore!);
		events.push('after');
		expect(events).toEqual(['before', 'startFn', 'after']);
		expect(duration).toBeGreaterThanOrEqual(25);
		// FIXME investigate why the toBeLessThan are not reliable
		// expect(duration).toBeLessThan(100);
	});

	test(`simple transition (transitionend)`, async () => {
		const events: string[] = [];
		const element = createElement();
		let duration: number | undefined;
		const transition = createCSSTransition((e, d) => {
			const timeBefore = performance.now();
			events.push('startFn');
			expect(e).toBe(element);
			expect(d).toBe('show');
			e.style.transitionDuration = '1s'; // much higher value than the transitionend event (25ms)
			// to check that the transitionend event has an effect
			return () => {
				duration = Math.round(performance.now() - timeBefore);
				events.push('endFn');
			};
		});
		events.push('before');
		const promise = callTransitionShow(element, {transition});
		events.push('beforeTimeout');
		await new Promise((resolve) => setTimeout(resolve, 25));
		events.push('afterTimeout');
		element.dispatchEvent(new TransitionEvent('transitionend'));
		await promise;
		events.push('after');
		expect(events).toEqual(['before', 'startFn', 'beforeTimeout', 'afterTimeout', 'endFn', 'after']);
		expect(duration).toBeGreaterThanOrEqual(25);
		// FIXME investigate why the toBeLessThan are not reliable
		// expect(duration).toBeLessThan(100);
	});

	test(`transition disabled`, async () => {
		const events: string[] = [];
		const element = createElement();
		// this disables the transition:
		element.style.transitionProperty = 'none';
		let duration: number | undefined;
		const transition = createCSSTransition((e, d) => {
			events.push('startFn');
			const timeBefore = performance.now();
			expect(e).toBe(element);
			expect(d).toBe('show');
			e.style.transitionDuration = '0.2s';
			return () => {
				duration = Math.round(performance.now() - timeBefore);
				events.push('endFn');
			};
		});
		events.push('before');
		await callTransitionShow(element, {transition});
		events.push('after');
		expect(events).toEqual(['before', 'startFn', 'endFn', 'after']);
		expect(duration).toBeLessThan(10);
	});

	test(`animated disabled`, async () => {
		const events: string[] = [];
		const element = createElement();
		const transition = createCSSTransition((e, d, a) => {
			events.push('startFn');
			expect(e).toBe(element);
			expect(d).toBe('show');
			expect(a).toBe(false);
			e.style.transitionDuration = '0.2s';
			return () => {
				events.push('endFn');
			};
		});
		events.push('before');
		const promise = callTransitionShow(element, {transition, animatedOnInit: false, animated: false});
		events.push('after');
		await promise;
		events.push('afterAsync');
		expect(events).toEqual(['before', 'startFn', 'endFn', 'after', 'afterAsync']);
	});

	test(`stopped transition`, async () => {
		const events: string[] = [];
		const element = createElement();
		const cssTransition = createTransition({
			props: {
				animatedOnInit: true,
				transition: createCSSTransition((e, d, a, c: {used?: boolean}) => {
					events.push(`startFn:${d}:${c.used ?? false}`);
					c.used = true;
					expect(e).toBe(element);
					expect(a).toBe(true);
					e.style.transitionDuration = '1s'; // much higher value than the time we start the second transition
					return () => {
						events.push(`endFn:${d}`);
					};
				}),
			},
		});
		events.push('before');
		const timeBefore = performance.now();
		const directiveInstance = cssTransition.directives.directive(element);
		const promise1 = cssTransition.api.show();
		void promise1.finally(() => {
			throw new Error('promise1 is expected not to resolve');
		});
		await new Promise((resolve) => setTimeout(resolve, 200));
		events.push('middle');
		const promise2 = cssTransition.api.hide();
		await new Promise((resolve) => setTimeout(resolve, 200));
		element.dispatchEvent(new TransitionEvent('transitionend'));
		await promise2;
		const duration = Math.round(performance.now() - timeBefore);
		events.push('after');
		expect(events).toEqual(['before', 'startFn:show:false', 'middle', 'startFn:hide:true', 'endFn:hide', 'after']);
		expect(duration).toBeGreaterThanOrEqual(400);
		// FIXME investigate why the toBeLessThan are not reliable
		// expect(duration).toBeLessThan(600);
		directiveInstance?.destroy?.();
	});
});
