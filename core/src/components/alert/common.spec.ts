import {beforeEach, describe, expect, test} from 'vitest';
import type {CommonAlertWidget} from './common';
import {createCommonAlert} from './common';
import type {WidgetState} from '../../types';
import {promiseWithResolve} from '../../utils/internal/promise';

describe(`Common Alert`, () => {
	let commonAlert: CommonAlertWidget;
	let state: WidgetState<CommonAlertWidget>;

	beforeEach(() => {
		commonAlert = createCommonAlert();
		commonAlert.state$.subscribe((newState) => {
			state = newState;
		});
	});

	test(`should create common alert with a default state`, () => {
		expect(state).toEqual({
			className: '',
			dismissible: true,
			visible: true,
			hidden: false,
			ariaCloseButtonLabel: 'Close',
		});
	});

	test(`should close on method call`, () => {
		const expectedState = state;
		expect(expectedState.visible).toBe(true);
		commonAlert.api.close();
		expectedState.visible = false;
		expectedState.hidden = true;
		expect(state).toEqual(expectedState);
	});

	test(`should open on method call`, () => {
		commonAlert.patch({visible: false});
		const expectedState = state;
		expect(expectedState.visible).toBe(false);
		commonAlert.api.open();
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
		const alertEvents = createCommonAlert({
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
