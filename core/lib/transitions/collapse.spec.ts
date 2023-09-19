import {afterEach, beforeEach, describe, expect, test, vi} from 'vitest';
import type {Directive} from '../types.js';
import type {TransitionFn, TransitionWidget} from './baseTransitions.js';
import {createTransition} from './baseTransitions.js';
import {createCollapseTransition} from './collapse.js';

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
			visible: false,
			transition: myTransition,
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
		checkClasses(['anim']);
		await promise;
		checkClasses(['show']);
		promise = transition.api.toggle(false, true);
		checkClasses(['anim']);
		await promise;
		checkClasses(['hide']);
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
