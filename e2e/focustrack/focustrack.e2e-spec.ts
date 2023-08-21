import {expect, getTest} from '../fixture';
import {FocusTrackPO} from '../demo-po/focustrack.po';

type PromiseValue<T> = T extends Promise<infer U> ? U : never;
type State = PromiseValue<ReturnType<FocusTrackPO['getState']>>;

const test = getTest();
test.describe(`Select tests`, () => {
	test.beforeEach(async ({page}) => {
		await page.goto('#/focustrack/focustrack');
	});

	test(`Basic navigation`, async ({page}) => {
		const focustrackPO = new FocusTrackPO(page);
		await focustrackPO.waitLoaded();

		const expectedState: State = {
			activeElements: [{tagName: 'body'}],
			isInContainer: false,
		};

		expect(await focustrackPO.getState()).toEqual(expectedState);

		await focustrackPO.locatorFocusableInput.click();

		expectedState.activeElements.push({tagName: 'input', id: 'focusableInput'});
		expectedState.isInContainer = true;
		await expect.poll(async () => await focustrackPO.getState()).toEqual(expectedState);

		await focustrackPO.locatorOtherFocusableInput.click();

		expectedState.activeElements.push({tagName: 'input', id: 'otherFocusableInput'});
		await expect.poll(async () => await focustrackPO.getState()).toEqual(expectedState);

		await focustrackPO.locatorDisabledInput.click({force: true});

		expectedState.activeElements.push({tagName: 'body'});
		expectedState.isInContainer = false;
		await expect.poll(async () => await focustrackPO.getState()).toEqual(expectedState);
	});
});
