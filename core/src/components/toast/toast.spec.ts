import {beforeEach, describe, expect, test} from 'vitest';
import type {WidgetState} from '../../types';
import {promiseWithResolve} from '../../utils/internal/promise';
import type {ToastWidget} from './toast';
import {createToast} from './toast';
import {assign} from '../../../../common/utils';

describe(`Toast`, () => {
	let toast: ToastWidget;
	let state: WidgetState<ToastWidget>;

	beforeEach(() => {
		toast = createToast();
		toast.state$.subscribe((newState) => {
			state = newState;
		});
	});

	test(`should create toast with a default state`, () => {
		expect(state).toEqual({
			className: '',
			dismissible: true,
			visible: true,
			hidden: false,
			ariaCloseButtonLabel: 'Close',
			delay: 5000,
			autoHide: true,
		});
	});

	test(`should close on method call`, () => {
		const expectedState = state;
		expect(expectedState.visible).toBe(true);
		toast.api.close();
		expect(state).toEqual(
			assign(expectedState, {
				visible: false,
				hidden: true,
			}),
		);
	});

	test(`should open on method call`, () => {
		toast.patch({visible: false});
		const expectedState = state;
		expect(expectedState.visible).toBe(false);
		toast.api.open();
		expect(state).toEqual(
			assign(expectedState, {
				visible: true,
				hidden: false,
			}),
		);
	});

	test('should emit events on change of the visibility', async () => {
		let onShownCounter = 0;
		let onHiddenCounter = 0;
		let onVisibleChangeCounter = 0;
		let promiseOnShown = promiseWithResolve();
		let promiseOnHidden = promiseWithResolve();
		const element = document.createElement('div');
		element.innerHTML = '<div>body</div>';
		const toastEvents = createToast({
			props: {
				onShown() {
					promiseOnShown.resolve();
					onShownCounter++;
					promiseOnShown = promiseWithResolve();
				},
				onHidden() {
					promiseOnHidden.resolve();
					onHiddenCounter++;
					promiseOnHidden = promiseWithResolve();
				},
				onVisibleChange() {
					onVisibleChangeCounter++;
				},
			},
		});
		toastEvents.directives.transitionDirective(element);

		toastEvents.api.close();
		await promiseOnHidden.promise;
		expect(onVisibleChangeCounter).toBe(1);
		expect(onShownCounter).toBe(0);
		expect(onHiddenCounter).toBe(1);

		toastEvents.api.open();
		await promiseOnShown.promise;
		expect(onVisibleChangeCounter).toBe(2);
		expect(onShownCounter).toBe(1);
		expect(onHiddenCounter).toBe(1);
	});

	test(`should autoclose the toaster after the delay`, async () => {
		let onHiddenCounter = 0;
		let onVisibleChangeCounter = 0;
		let promiseOnHidden = promiseWithResolve();
		const element = document.createElement('div');
		element.innerHTML = '<div>body</div>';
		const toastEvents = createToast({
			props: {
				onHidden() {
					promiseOnHidden.resolve();
					onHiddenCounter++;
					promiseOnHidden = promiseWithResolve();
				},
				onVisibleChange() {
					onVisibleChangeCounter++;
				},
				delay: 100,
			},
		});
		toastEvents.directives.transitionDirective(element);
		toastEvents.directives.autoHideDirective(element);

		await promiseOnHidden.promise;
		expect(onVisibleChangeCounter).toBe(1);
		expect(onHiddenCounter).toBe(1);
	});
});
