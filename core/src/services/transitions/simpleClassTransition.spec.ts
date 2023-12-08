import {afterEach, beforeEach, describe, expect, test, vi} from 'vitest';
import type {Directive} from '../../types';
import type {TransitionFn, TransitionWidget} from './baseTransitions';
import {createTransition} from './baseTransitions';
import {createSimpleClassTransition} from './simpleClassTransition';

describe('createSimpleClassTransition', () => {
	let element: HTMLElement;
	let myTransition: TransitionFn;
	let transition: TransitionWidget;
	let directiveInstance: ReturnType<Directive>;

	beforeEach(() => {
		const style = document.createElement('style');
		style.innerHTML = `
		  .anim { transition-property: opacity; transition-duration: 0.1s; transition-delay: 0s; }
		  .anim-hide, hide { opacity: 0; }
		  .anim-show, show { opacity: 100%; }
		`;
		document.body.appendChild(style);
		element = document.createElement('div');
		document.body.appendChild(element);
		myTransition = createSimpleClassTransition({
			animationPendingClasses: ['anim'],
			animationPendingHideClasses: ['anim-hide'],
			animationPendingShowClasses: ['anim-show'],
			hideClasses: ['hide'],
			showClasses: ['show'],
		});
		transition = createTransition({
			props: {
				visible: false,
				transition: myTransition,
			},
		});
		directiveInstance = transition.directives.directive(element);
	});

	afterEach(() => {
		directiveInstance?.destroy?.();
		document.body.innerHTML = '';
	});

	const checkClasses = (classes: string[]) => {
		expect([...element.classList.values()]).toEqual(classes);
	};

	test('animations enabled', async () => {
		checkClasses(['hide']);
		let promise = transition.api.toggle(true, true);
		checkClasses(['anim', 'anim-show']);
		await promise;
		checkClasses(['show']);
		promise = transition.api.toggle(false, true);
		checkClasses(['anim', 'anim-hide']);
		await promise;
		checkClasses(['hide']);
	});

	test('show animation reverted', async () => {
		checkClasses(['hide']);
		const promise1 = transition.api.toggle(true, true);
		checkClasses(['anim', 'anim-show']);
		const promise2 = transition.api.toggle(false, true);
		checkClasses(['anim', 'anim-hide']);
		await promise2;
		checkClasses(['hide']);
		promise1.finally(() => {
			throw new Error('promise1 is expected not to resolve');
		});
	});

	test('hide animation reverted', async () => {
		checkClasses(['hide']);
		await transition.api.toggle(true, false);
		checkClasses(['show']);
		const promise1 = transition.api.toggle(false, true);
		checkClasses(['anim', 'anim-hide']);
		const promise2 = transition.api.toggle(true, true);
		checkClasses(['anim', 'anim-show']);
		await promise2;
		checkClasses(['show']);
		promise1.finally(() => {
			throw new Error('promise1 is expected not to resolve');
		});
	});

	test('disabled animations (false in toggle)', async () => {
		const reflow = vi.spyOn(element, 'getBoundingClientRect');
		checkClasses(['hide']);
		let promise = transition.api.toggle(true, false);
		checkClasses(['show']);
		await promise;
		checkClasses(['show']);
		promise = transition.api.toggle(false, false);
		checkClasses(['hide']);
		await promise;
		checkClasses(['hide']);
		expect(reflow).not.toHaveBeenCalled();
	});

	test('disabled animations (transition-property: none in css)', async () => {
		checkClasses(['hide']);
		element.style.transitionProperty = 'none';
		let promise = transition.api.toggle(true, true);
		checkClasses(['show']);
		await promise;
		checkClasses(['show']);
		promise = transition.api.toggle(false, true);
		checkClasses(['hide']);
		await promise;
		checkClasses(['hide']);
	});
});
