import {beforeEach, describe, expect, test} from 'vitest';
import {createAlert} from './alert.js';
import type {AlertWidget} from './alert.js';
import type {WidgetState} from './types.js';

const promiseWithResolve = () => {
	let resolve: (value: void | Promise<void>) => void;
	const promise = new Promise<void>((r) => {
		resolve = r;
	});
	return {promise, resolve: resolve!};
};

describe(`Alert`, () => {
	let alert: AlertWidget;
	let state: WidgetState<AlertWidget>;

	beforeEach(() => {
		alert = createAlert();
		alert.state$.subscribe((newState) => {
			state = newState;
		});
	});

	test(`should create alert with a default state`, () => {
		expect(state).toEqual({
			className: '',
			dismissible: true,
			slotDefault: undefined,
			slotStructure: undefined,
			type: 'primary',
			visible: true,
			hidden: false,
			ariaCloseButtonLabel: 'Close',
		});
	});

	test(`should close on method call`, () => {
		const expectedState = state;
		expect(expectedState.visible).toBe(true);
		alert.api.close();
		expectedState.visible = false;
		expectedState.hidden = true;
		expect(state).toEqual(expectedState);
	});

	test(`should open on method call`, () => {
		alert.patch({visible: false});
		const expectedState = state;
		expect(expectedState.visible).toBe(false);
		alert.api.open();
		expectedState.visible = true;
		expectedState.hidden = false;
		expect(state).toEqual(expectedState);
	});

	test('should emit events on change of the visibility', async () => {
		let onShownCounter = 0;
		let onHiddenCounter = 0;
		let onVisibleChangeCounter = 0;
		let promiseOnShown = promiseWithResolve();
		let promiseOnHidden = promiseWithResolve();
		const element = document.createElement('div');
		element.innerHTML = '<div>body</div>';
		const alertEvents = createAlert({
			type: 'danger',
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
			onVisibleChange(event) {
				onVisibleChangeCounter++;
			},
		});
		alertEvents.directives.transitionDirective(element);

		alertEvents.api.close();
		await promiseOnHidden.promise;
		expect(onVisibleChangeCounter).toBe(1);
		expect(onShownCounter).toBe(0);
		expect(onHiddenCounter).toBe(1);

		alertEvents.api.open();
		await promiseOnShown.promise;
		expect(onVisibleChangeCounter).toBe(2);
		expect(onShownCounter).toBe(1);
		expect(onHiddenCounter).toBe(1);
	});
});
