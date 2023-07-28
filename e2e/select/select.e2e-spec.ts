import {expect, getTest} from '../fixture';
import {SelectPO} from '@agnos-ui/page-objects';
import {SelectDemoPO} from '../demo-po/select.po';

type PromiseValue<T> = T extends Promise<infer U> ? U : never;
type State = PromiseValue<ReturnType<SelectPO['state']>>;

const test = getTest();
test.describe.parallel(`Select tests`, () => {
	test.beforeEach(async ({page}) => {
		await page.goto('#/select/select?filterText=initial value');
	});

	test(`Basic states`, async ({page}) => {
		const selectPO = new SelectPO(page);

		const expectedState: State = {
			text: 'initial value',
			badges: [],
			isOpen: false,
			list: [],
		};

		expect(await selectPO.state()).toEqual(expectedState);

		const locatorInput = selectPO.locatorInput;
		await locatorInput.fill('a');

		Object.assign(expectedState, {
			text: 'a',
			isOpen: true,
			list: [
				{text: 'Action 1', hasCheckBox: true, isChecked: false},
				{text: 'Action 2', hasCheckBox: true, isChecked: false},
				{text: 'Action 3', hasCheckBox: true, isChecked: false},
			],
		});
		expect(await selectPO.state()).toEqual(expectedState);

		await locatorInput.press('Enter');

		expectedState.badges = [['Action 1', 'x']];
		expectedState.list[0].isChecked = true;
		expect(await selectPO.state()).toEqual(expectedState);

		await page.locator('body').click({position: {x: 0, y: 0}});

		Object.assign(expectedState, {
			isOpen: false,
			list: [],
		});
		expect(await selectPO.state()).toEqual(expectedState);
	});

	test(`Close actions`, async ({page}) => {
		const selectPO = new SelectPO(page);
		await selectPO.locatorInput.fill('a');
		expect((await selectPO.state()).isOpen).toEqual(true);

		await selectPO.locatorMenuItem('action 1').click();
		await selectPO.locatorMenuItem('action 2').click();
		expect((await selectPO.state()).isOpen).toEqual(true);

		await selectPO.locatorBadgeItemCross('action 1').click();
		expect((await selectPO.state()).isOpen).toEqual(true);

		await page.locator('body').click({position: {x: 0, y: 0}});
		expect((await selectPO.state()).isOpen).toEqual(false);
	});

	test(`Config`, async ({page}) => {
		const selectPO = new SelectPO(page);
		const selectConfigPO = new SelectDemoPO(page);

		const expectedState: State = {
			text: 'initial value',
			badges: [],
			isOpen: false,
			list: [],
		};

		expect(await selectPO.state()).toEqual(expectedState);
		await expect(selectConfigPO.locatorFilterTextInput).toHaveValue(expectedState.text);

		expectedState.text = 'other value';
		await selectConfigPO.locatorFilterTextInput.fill(expectedState.text);
		expect(await selectPO.state()).toEqual(expectedState);

		expectedState.text = 'test';
		await selectPO.locatorInput.fill(expectedState.text);
		expect(await selectPO.state()).toEqual(expectedState);

		await selectConfigPO.locatorFilterTextInput.fill('next value'); // does not change the select (which now has its own 'test' value)
		await expect(selectConfigPO.locatorFilterTextInput).toHaveValue('next value');
		expect(await selectPO.state()).toEqual(expectedState);

		expectedState.text = 'next value';
		await selectConfigPO.locatorResetFilterTextButton.click();
		expect(await selectPO.state()).toEqual(expectedState);

		expectedState.text = 'sync again';
		await selectPO.locatorInput.fill(expectedState.text);
		expect(await selectPO.state()).toEqual(expectedState);
	});
});
