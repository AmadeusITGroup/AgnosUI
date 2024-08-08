import {afterEach, beforeEach, describe, expect, test, vi} from 'vitest';
import type {Directive} from '../../types';
import type {TransitionFn, TransitionWidget} from './baseTransitions';
import {createTransition} from './baseTransitions';
import {createCollapseTransition} from './collapse';

describe('createCollapseTransition', () => {
	let element: HTMLElement;
	let myTransition: TransitionFn;
	let transition: TransitionWidget;
	let directiveInstance: ReturnType<Directive>;

	beforeEach(() => {
		const style = document.createElement('style');
		style.innerHTML = `
		  .anim { transition-property: height; transition-duration: 0.1s; transition-delay: 0s; }
		  .hide { display: none; }
		  .show { display: block; }
		`;
		document.body.appendChild(style);
		element = document.createElement('div');
		document.body.appendChild(element);
		myTransition = createCollapseTransition({
			animationPendingClasses: ['anim'],
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

	const expectClasses = (classes: string[]) => {
		expect([...element.classList.values()]).toEqual(classes);
	};

	test('animations enabled', async () => {
		expectClasses(['hide']);
		let promise = transition.api.toggle(true, true);
		expectClasses(['anim']);
		await promise;
		expectClasses(['show']);
		promise = transition.api.toggle(false, true);
		expectClasses(['anim']);
		await promise;
		expectClasses(['hide']);
	});

	test('disabled animations (false in toggle)', async () => {
		const reflow = vi.spyOn(element, 'getBoundingClientRect');
		expectClasses(['hide']);
		let promise = transition.api.toggle(true, false);
		expectClasses(['show']);
		await promise;
		expectClasses(['show']);
		promise = transition.api.toggle(false, false);
		expectClasses(['hide']);
		await promise;
		expectClasses(['hide']);
		expect(reflow).not.toHaveBeenCalled();
	});

	test('disabled animations (transition-property: none in css)', async () => {
		expectClasses(['hide']);
		element.style.transitionProperty = 'none';
		let promise = transition.api.toggle(true, true);
		expectClasses(['show']);
		await promise;
		expectClasses(['show']);
		promise = transition.api.toggle(false, true);
		expectClasses(['hide']);
		await promise;
		expectClasses(['hide']);
	});
});
