import {SelectPO} from '@agnos-ui/page-objects';
import {assign} from '../../common/utils';
import {SelectDemoPO} from '../demo-po/select.po';
import {expect, test} from '../fixture';

type PromiseValue<T> = T extends Promise<infer U> ? U : never;
type State = PromiseValue<ReturnType<SelectPO['state']>>;

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
			checked: [],
		};

		await expect.poll(() => selectPO.state()).toEqual(expectedState);

		const locatorInput = selectPO.locatorInput;
		await locatorInput.fill('a');

		await expect
			.poll(() => selectPO.state())
			.toStrictEqual(
				assign(expectedState, {
					text: 'a',
					isOpen: true,
					list: ['Action 1', 'Action 2', 'Action 3'],
					checked: [],
				}),
			);

		await locatorInput.press('Enter');
		await expect
			.poll(() => selectPO.state())
			.toStrictEqual(
				assign(expectedState, {
					badges: ['Action 1'],
					checked: ['Action 1'],
				}),
			);

		await page.locator('body').click({position: {x: 0, y: 0}});
		await expect
			.poll(() => selectPO.state())
			.toStrictEqual(
				assign(expectedState, {
					isOpen: false,
					list: [],
					checked: [],
				}),
			);
	});

	test(`Close actions`, async ({page}) => {
		const selectPO = new SelectPO(page);
		await selectPO.locatorInput.fill('a');
		await expect.poll(async () => (await selectPO.state()).isOpen).toEqual(true);
		const expectedState = await selectPO.state();

		await selectPO.locatorMenuItem('action 1').click();
		await selectPO.locatorMenuItem('action 2').click();
		await expect
			.poll(() => selectPO.state())
			.toStrictEqual(
				assign(expectedState, {
					badges: ['Action 1', 'Action 2'],
					list: ['Action 1', 'Action 2', 'Action 3'],
					checked: ['Action 1', 'Action 2'],
				}),
			);

		await selectPO.locatorMenuItem('action 1').click();
		await expect
			.poll(() => selectPO.state())
			.toEqual(
				assign(expectedState, {
					badges: ['Action 2'],
					checked: ['Action 2'],
				}),
			);

		await page.locator('body').click({position: {x: 0, y: 0}});
		assign(expectedState, {
			isOpen: false,
			list: [],
			checked: [],
		});
		await expect.poll(() => selectPO.state()).toEqual(expectedState);
	});

	test(`Config`, async ({page}) => {
		const selectPO = new SelectPO(page);
		const selectConfigPO = new SelectDemoPO(page);

		const expectedState: State = {
			text: 'initial value',
			badges: [],
			isOpen: false,
			list: [],
			checked: [],
		};

		await expect.poll(() => selectPO.state()).toEqual(expectedState);
		await expect(selectConfigPO.locatorFilterTextInput).toHaveValue(expectedState.text);

		expectedState.text = 'other value';
		await selectConfigPO.locatorFilterTextInput.fill(expectedState.text);
		await expect.poll(() => selectPO.state()).toEqual(expectedState);

		expectedState.text = 'test';
		await selectPO.locatorInput.fill(expectedState.text);
		await expect.poll(() => selectPO.state()).toEqual(expectedState);

		await selectConfigPO.locatorFilterTextInput.fill('next value'); // does not change the select (which now has its own 'test' value)
		await expect(selectConfigPO.locatorFilterTextInput).toHaveValue('next value');
		await expect.poll(() => selectPO.state()).toEqual(expectedState);

		expectedState.text = 'next value';
		await selectConfigPO.locatorResetFilterTextButton.click();
		await expect.poll(() => selectPO.state()).toEqual(expectedState);

		expectedState.text = 'sync again';
		await selectPO.locatorInput.fill(expectedState.text);
		await expect.poll(() => selectPO.state()).toEqual(expectedState);
	});
});
