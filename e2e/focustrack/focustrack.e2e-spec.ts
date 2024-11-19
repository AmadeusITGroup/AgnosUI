import {expect, test} from '../fixture';
import {FocusTrackPO} from '../demo-po/focustrack.po';
import type {PromiseValue} from 'e2e/utils';

type State = PromiseValue<ReturnType<FocusTrackPO['getState']>>;

test.describe(`Select tests`, () => {
	test.beforeEach(async ({page}) => {
		await page.goto('#/focustrack/focustrack');
	});

	test(`Basic navigation`, async ({page}) => {
		const focustrackPO = new FocusTrackPO(page);
		await focustrackPO.waitLoaded();

		const expectedState: State = {
			activeElements: ['body'],
			isInContainer: false,
		};

		await expect.poll(() => focustrackPO.getState()).toEqual(expectedState);

		await focustrackPO.locatorFocusableInput.click();

		expectedState.activeElements.push('input with id focusableInput');
		expectedState.isInContainer = true;
		await expect.poll(() => focustrackPO.getState()).toEqual(expectedState);

		await focustrackPO.locatorOtherFocusableInput.click();

		expectedState.activeElements.push('input with id otherFocusableInput');
		await expect.poll(() => focustrackPO.getState()).toEqual(expectedState);

		// eslint-disable-next-line playwright/no-force-option
		await focustrackPO.locatorDisabledInput.click({force: true});

		expectedState.activeElements.push('body');
		expectedState.isInContainer = false;
		await expect.poll(() => focustrackPO.getState()).toEqual(expectedState);
	});
});
