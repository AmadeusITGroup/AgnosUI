import {SliderPO} from '@agnos-ui/page-objects';
import {SliderDemoPO} from '../demo-po/slider.po';
import {test, expect} from '../fixture';
import {assign} from '../../common/utils';

const defaultExpectedState: {[key: string]: string | null} = {
	value: '60',
	min: '0',
	max: '100',
	ariaLabel: 'Value',
	ariaValueText: null,
	readonly: null,
	disabled: null,
	style: 'left: 60%;',
};

const defaultExpectedHandleState: {[key: string]: string | null}[] = [
	{
		value: '10',
		min: '0',
		max: '100',
		ariaLabel: 'Value',
		ariaValueText: null,
		readonly: null,
		disabled: null,
		style: 'left: 10%;',
	},
	{
		value: '40',
		min: '0',
		max: '100',
		ariaLabel: 'Value',
		ariaValueText: null,
		readonly: null,
		disabled: null,
		style: 'left: 40%;',
	},
];

const defaultExpectedHandleStateVertical: {[key: string]: string | null}[] = [
	{
		value: '10',
		min: '0',
		max: '100',
		ariaLabel: 'Value',
		ariaValueText: null,
		readonly: null,
		disabled: null,
		style: 'top: 90%;',
	},
	{
		value: '40',
		min: '0',
		max: '100',
		ariaLabel: 'Value',
		ariaValueText: null,
		readonly: null,
		disabled: null,
		style: 'top: 60%;',
	},
];

test.describe(`Slider tests`, () => {
	test.describe(`Basic slider`, () => {
		test(`should snap the handle to correct tick on the slider click event`, async ({page}) => {
			const sliderPO = new SliderPO(page, 0);

			await page.goto('#/slider/default');
			await sliderPO.locatorRoot.waitFor();

			const expectedState = {...defaultExpectedState};

			const sliderProgressLocator = sliderPO.locatorProgress;
			const boundingBox = await sliderProgressLocator.boundingBox();
			// force the click though the progress bar
			// eslint-disable-next-line playwright/no-force-option
			await sliderProgressLocator.click({position: {x: boundingBox!.x + boundingBox!.width * 0.5, y: 1}, force: true});

			await expect
				.poll(async () => (await sliderPO.sliderHandleState()).at(0))
				.toEqual(
					assign(expectedState, {
						value: '43',
						style: 'left: 43%;',
					}),
				);
		});

		test(`should snap the handle on mouse drag event`, async ({page}) => {
			const sliderPO = new SliderPO(page, 0);

			await page.goto('#/slider/default');
			await sliderPO.locatorRoot.waitFor();

			const expectedState = {...defaultExpectedState};

			const sliderHandleLocator = sliderPO.locatorHandle;
			const sliderLocator = sliderPO.locatorRoot;
			const boundingBox = await sliderLocator.boundingBox();
			await sliderHandleLocator.dragTo(sliderLocator, {
				targetPosition: {x: boundingBox!.x + boundingBox!.width * 0.8, y: 1},
			});

			await expect
				.poll(async () => (await sliderPO.sliderHandleState()).at(0))
				.toEqual(
					assign(expectedState, {
						value: '88',
						style: 'left: 88%;',
					}),
				);
		});

		test(`should move handle on key strokes`, async ({page}) => {
			const sliderPO = new SliderPO(page, 0);

			await page.goto('#/slider/default');
			await sliderPO.locatorRoot.waitFor();

			const expectedState = {...defaultExpectedState};

			const minLabelLocator = sliderPO.locatorMinLabelHorizontal;
			const maxLabelLocator = sliderPO.locatorMaxLabelHorizontal;
			const sliderHandleLocator = sliderPO.locatorHandle;

			await sliderHandleLocator.click();
			await page.keyboard.press('Home');

			await expect
				.poll(async () => (await sliderPO.sliderHandleState()).at(0))
				.toEqual(
					assign(expectedState, {
						value: '0',
						style: 'left: 0%;',
					}),
				);

			await expect(minLabelLocator).toBeHidden();
			await expect(maxLabelLocator).toBeVisible();

			await page.keyboard.press('End');

			await expect
				.poll(async () => (await sliderPO.sliderHandleState()).at(0))
				.toEqual(
					assign(expectedState, {
						value: '100',
						style: 'left: 100%;',
					}),
				);

			await expect(minLabelLocator).toBeVisible();
			await expect(maxLabelLocator).toBeHidden();
		});

		test(`should render slider disabled when passing the 'disabled' option`, async ({page}) => {
			const sliderDemoPO = new SliderDemoPO(page);
			const sliderPO = new SliderPO(page, 2);

			await page.goto('#/slider/default');
			await sliderPO.locatorRoot.waitFor();

			const sliderHandleLocator = sliderPO.locatorHandle;

			await expect(sliderHandleLocator).toBeDisabled();

			await sliderDemoPO.disabledToggle.click();

			await expect(sliderHandleLocator).toBeEnabled();
		});

		test(`should ignore all the actions when passing the 'readonly' option`, async ({page}) => {
			const sliderDemoPO = new SliderDemoPO(page);
			const sliderPO = new SliderPO(page, 2);

			await page.goto('#/slider/default');
			await sliderPO.locatorRoot.waitFor();

			await sliderDemoPO.disabledToggle.click();

			const expectedState = {...defaultExpectedState};

			const sliderHandleLocator = sliderPO.locatorHandle;
			const sliderLocator = sliderPO.locatorRoot;
			const boundingBox = await sliderLocator.boundingBox();
			await sliderLocator.click({position: {x: boundingBox!.x + boundingBox!.width * 0.8, y: 1}});

			await expect
				.poll(async () => (await sliderPO.sliderHandleState()).at(0))
				.toEqual(
					assign(expectedState, {
						...expectedState,
						readonly: 'true',
					}),
				);

			await expect(sliderHandleLocator).toBeEnabled();

			await sliderDemoPO.readonlyToggle.click();

			await sliderLocator.click({position: {x: boundingBox!.x + boundingBox!.width * 0.8, y: 1}});

			await expect
				.poll(async () => (await sliderPO.sliderHandleState()).at(0))
				.toEqual(
					assign(expectedState, {
						value: '88',
						style: 'left: 88%;',
						readonly: null,
					}),
				);
		});

		test(`should remove min - max labels from the dom when showMinMaxLabels is false`, async ({page}) => {
			const sliderDemoPO = new SliderDemoPO(page);
			const sliderPO = new SliderPO(page, 0);

			await page.goto('#/slider/default');
			await sliderPO.locatorRoot.waitFor();

			await expect(sliderPO.locatorMinLabelHorizontal).toBeVisible();
			await expect(sliderPO.locatorMaxLabelHorizontal).toBeVisible();
			await expect(sliderPO.locatorValueLabel).toBeVisible();

			await sliderPO.locatorHandle.click();
			await page.keyboard.press('Home');

			await expect(sliderPO.locatorMinLabelHorizontal).toBeHidden();

			await sliderDemoPO.showMinMaxToggle.click();

			await expect(sliderPO.locatorMinLabelHorizontal).not.toBeAttached();
			await expect(sliderPO.locatorMaxLabelHorizontal).not.toBeAttached();

			await sliderDemoPO.showValuesToggle.click();

			await expect(sliderPO.locatorValueLabel).not.toBeAttached();

			await sliderDemoPO.showMinMaxToggle.click();

			await expect(sliderPO.locatorMinLabelHorizontal).toBeVisible();
			await expect(sliderPO.locatorMaxLabelHorizontal).toBeVisible();
		});

		test(`should update the aria values on user change`, async ({page}) => {
			const sliderPO = new SliderPO(page, 0);

			await page.goto('#/slider/playground#{"props":{"ariaValueText":{"value":"sliderValueTextUnits"}}}');
			await sliderPO.locatorRoot.waitFor();

			const expectedState = {...defaultExpectedState};
			await expect
				.poll(async () => (await sliderPO.sliderHandleState()).at(0))
				.toEqual(
					assign(expectedState, {
						...expectedState,
						value: '0',
						style: 'left: 0%;',
						ariaValueText: '0 units',
					}),
				);
		});
	});

	test.describe(`Range slider`, () => {
		test(`should move the handle to correct tick on the slider click event`, async ({page}) => {
			const sliderPO = new SliderPO(page, 1);

			await page.goto('#/slider/range');
			await sliderPO.locatorRoot.waitFor();

			const expectedState = {...defaultExpectedHandleState[1]};

			const sliderLocator = sliderPO.locatorRoot;
			const boundingBox = await sliderLocator.boundingBox();
			await sliderLocator.click({position: {x: boundingBox!.x + boundingBox!.width * 0.8, y: 1}});

			await expect
				.poll(async () => (await sliderPO.sliderHandleState()).at(1))
				.toEqual(
					assign(expectedState, {
						value: '88',
						style: 'left: 88%;',
					}),
				);
			expect((await sliderPO.sliderProgressState())[0]).toEqual('left: 10%; width: 78%; height: 100%;');
		});

		test(`should interchange the handles on mouse drag event`, async ({page}) => {
			const sliderPO = new SliderPO(page, 1);

			await page.goto('#/slider/range');
			await sliderPO.locatorRoot.waitFor();

			const expectedState = {...defaultExpectedHandleState};
			assign(expectedState, [
				{
					...expectedState[0],
					value: '40',
					style: 'left: 40%;',
				},
				{
					...expectedState[1],
					value: '83',
					style: 'left: 83%;',
				},
			]);

			const sliderLocator = sliderPO.locatorRoot;
			const boundingBox = await sliderLocator.boundingBox();
			await sliderPO.locatorHandle.nth(0).dragTo(sliderLocator, {
				targetPosition: {x: boundingBox!.x + boundingBox!.width * 0.75, y: 1},
			});

			await expect.poll(async () => (await sliderPO.sliderHandleState()).at(0)).toEqual(expectedState[0]);
			expect((await sliderPO.sliderHandleState()).at(1)).toEqual(expectedState[1]);
			expect((await sliderPO.sliderProgressState())[0]).toEqual('left: 40%; width: 43%; height: 100%;');
		});

		test(`should move handle on key strokes and keep the focus`, async ({page}) => {
			const sliderPO = new SliderPO(page, 1);

			await page.goto('#/slider/range');
			await sliderPO.locatorRoot.waitFor();

			const expectedState = {...defaultExpectedHandleState};

			const minLabelLocator = sliderPO.locatorMinLabelHorizontal;
			const maxLabelLocator = sliderPO.locatorMaxLabelHorizontal;

			await sliderPO.locatorHandle.nth(0).click();
			await page.keyboard.press('End');

			assign(expectedState, [
				{
					...expectedState[0],
					value: '40',
					style: 'left: 40%;',
				},
				{
					...expectedState[1],
					value: '100',
					style: 'left: 100%;',
				},
			]);

			await expect.poll(async () => (await sliderPO.sliderHandleState()).at(0)).toEqual(expectedState[0]);
			expect((await sliderPO.sliderHandleState()).at(1)).toEqual(expectedState[1]);
			expect((await sliderPO.sliderProgressState())[0]).toEqual('left: 40%; width: 60%; height: 100%;');

			await expect(sliderPO.locatorHandle.nth(1)).toBeFocused();
			await expect(minLabelLocator).toBeVisible();
			await expect(maxLabelLocator).toBeHidden();

			await page.keyboard.press('Home');

			assign(expectedState, [
				{
					...expectedState[0],
					value: '0',
					style: 'left: 0%;',
				},
				{
					...expectedState[1],
					value: '40',
					style: 'left: 40%;',
				},
			]);

			await expect.poll(async () => (await sliderPO.sliderHandleState()).at(0)).toEqual(expectedState[0]);
			expect((await sliderPO.sliderHandleState()).at(1)).toEqual(expectedState[1]);
			expect((await sliderPO.sliderProgressState())[0]).toEqual('left: 0%; width: 40%; height: 100%;');

			await expect(sliderPO.locatorHandle.nth(0)).toBeFocused();
			await expect(minLabelLocator).toBeHidden();
			await expect(maxLabelLocator).toBeVisible();
		});

		test(`should add / remove combined label from dom`, async ({page}) => {
			const sliderPO = new SliderPO(page, 1);

			await page.goto('#/slider/range');
			await sliderPO.locatorRoot.waitFor();

			await expect(sliderPO.locatorValueLabel).toHaveCount(2);

			const sliderLocator = sliderPO.locatorRoot;
			const boundingBox = await sliderLocator.boundingBox();
			await sliderPO.locatorHandle.nth(0).dragTo(sliderLocator, {
				targetPosition: {x: boundingBox!.x + boundingBox!.width * 0.35, y: 1},
			});

			await expect(sliderPO.locatorValueLabel).toHaveCount(1);
		});

		test(`should invert the slider display for the RTL case`, async ({page}) => {
			const sliderPO = new SliderPO(page, 1);

			await page.goto('#/slider/right-to-left');
			await sliderPO.locatorRoot.waitFor();

			await expect(sliderPO.locatorValueLabel).toHaveCount(2);

			const sliderLocator = sliderPO.locatorRoot;
			const boundingBox = await sliderLocator.boundingBox();
			await sliderPO.locatorHandle.nth(0).dragTo(sliderLocator, {
				targetPosition: {x: boundingBox!.x + boundingBox!.width * 0.3, y: 1},
			});

			await expect(sliderPO.locatorValueLabel).toHaveCount(1);
			await expect(sliderPO.locatorValueLabel).toHaveText('70 - 62');

			await expect(sliderPO.locatorMinLabelHorizontal).toHaveClass(/au-slider-rtl/);
			await expect(sliderPO.locatorMaxLabelHorizontal).toHaveClass(/au-slider-rtl/);
		});

		test(`should have proper aria attributes for custom labels`, async ({page}) => {
			const sliderPO = new SliderPO(page, 0);

			await page.goto('#/slider/accessibility');
			await sliderPO.locatorRoot.waitFor();

			const expectedState = [
				{
					...defaultExpectedHandleState[0],
					value: '1733007600000',
					min: '1733007600000',
					max: '1735599600000',
					ariaLabel: null,
					ariaValueText: 'Minimum date: 30 Nov 2024',
					readonly: null,
					disabled: null,
					style: 'left: 0%;',
				},
				{
					...defaultExpectedHandleState[1],
					value: '1735599600000',
					min: '1733007600000',
					max: '1735599600000',
					ariaLabel: null,
					ariaValueText: 'Maximum date: 30 Dec 2024',
					readonly: null,
					disabled: null,
					style: 'left: 100%;',
				},
			];

			await expect.poll(async () => await sliderPO.sliderHandleState()).toEqual(expectedState);
		});

		test(`should move the handle on mouse drag event initiated on clickable area`, async ({page}) => {
			const sliderPO = new SliderPO(page, 1);

			await page.goto('#/slider/range');
			await sliderPO.locatorRoot.waitFor();

			const expectedState = {...defaultExpectedHandleState};
			assign(expectedState, [
				{
					...expectedState[0],
					value: '40',
					style: 'left: 40%;',
				},
				{
					...expectedState[1],
					value: '75',
					style: 'left: 75%;',
				},
			]);

			const sliderLocator = sliderPO.locatorRoot;
			const boundingBox = await sliderLocator.boundingBox();

			await page.mouse.move(boundingBox!.x, boundingBox!.y);
			await page.mouse.down();
			await page.mouse.move(boundingBox!.x + boundingBox!.width * 0.75, boundingBox!.y);
			await page.mouse.up();

			await expect.poll(async () => (await sliderPO.sliderHandleState()).at(0)).toEqual(expectedState[0]);
			expect((await sliderPO.sliderHandleState()).at(1)).toEqual(expectedState[1]);
			expect((await sliderPO.sliderProgressState())[0]).toEqual('left: 40%; width: 35%; height: 100%;');
		});
	});

	test.describe(`Vertical slider`, () => {
		test(`should move the handle to correct tick on the slider click event`, async ({page}) => {
			const sliderPO = new SliderPO(page, 0);

			await page.goto('#/slider/vertical');
			await sliderPO.locatorRoot.waitFor();

			const expectedState = {...defaultExpectedHandleStateVertical[1]};

			const sliderLocator = sliderPO.locatorRoot;
			const boundingBox = await sliderLocator.boundingBox();
			await sliderLocator.click({position: {y: boundingBox!.height * 0.2, x: 1}});

			await expect
				.poll(async () => (await sliderPO.sliderHandleState()).at(1))
				.toEqual(
					assign(expectedState, {
						value: '80',
						style: 'top: 20%;',
					}),
				);
			expect((await sliderPO.sliderProgressState())[0]).toEqual('bottom: 10%; width: 100%; height: 70%;');
		});

		test(`should move handle on key strokes`, async ({page}) => {
			const sliderPO = new SliderPO(page, 0);

			await page.goto('#/slider/vertical');
			await sliderPO.locatorRoot.waitFor();

			const expectedState = {...defaultExpectedHandleStateVertical};
			assign(expectedState, [
				{
					...expectedState[0],
					value: '0',
					style: 'top: 100%;',
				},
				expectedState[1],
			]);

			const minLabelLocator = sliderPO.locatorMinLabelVertical;
			const maxLabelLocator = sliderPO.locatorMaxLabelVertical;

			await sliderPO.locatorHandle.nth(0).click();
			await page.keyboard.press('Home');

			await expect.poll(async () => (await sliderPO.sliderHandleState()).at(0)).toEqual(expectedState[0]);
			expect((await sliderPO.sliderHandleState()).at(1)).toEqual(expectedState[1]);
			expect((await sliderPO.sliderProgressState())[0]).toEqual('bottom: 0%; width: 100%; height: 40%;');

			await expect(minLabelLocator).toBeHidden();
			await expect(maxLabelLocator).toBeVisible();

			await page.keyboard.press('End');

			assign(expectedState, [
				{
					...expectedState[0],
					value: '40',
					style: 'top: 60%;',
				},
				{
					...expectedState[1],
					value: '100',
					style: 'top: 0%;',
				},
			]);

			await expect.poll(async () => (await sliderPO.sliderHandleState()).at(0)).toEqual(expectedState[0]);
			expect((await sliderPO.sliderHandleState()).at(1)).toEqual(expectedState[1]);
			expect((await sliderPO.sliderProgressState())[0]).toEqual('bottom: 40%; width: 100%; height: 60%;');

			await expect(minLabelLocator).toBeVisible();
			await expect(maxLabelLocator).toBeHidden();
		});
	});

	test.describe(`Slider with ticks`, () => {
		test(`should render the ticks on the horizontal slider`, async ({page}) => {
			const sliderPO = new SliderPO(page, 0);

			await page.goto('#/slider/ticks');
			await sliderPO.locatorRoot.waitFor();

			await expect(sliderPO.locatorTick).toHaveCount(5);
			await expect(sliderPO.locatorTickLabel).toHaveCount(5);
			expect((await sliderPO.sliderTickLabelState(sliderPO.locatorTickLabel)).map((state) => state.innerText)).toEqual([
				'0',
				'25',
				'50',
				'75',
				'100',
			]);
			await expect(sliderPO.locatorTickLabelNow).toHaveCount(2);
		});

		test(`should not render the tick labels when the showTickValues is false`, async ({page}) => {
			const sliderPO = new SliderPO(page, 2);

			await page.goto('#/slider/ticks');
			await sliderPO.locatorRoot.waitFor();

			await expect(sliderPO.locatorTick).toHaveCount(5);
			await expect(sliderPO.locatorTickLabel).toHaveCount(0);
			await expect(sliderPO.locatorTickLabelNow).toHaveCount(0);
		});

		test(`should render the ticks on the vertical slider`, async ({page}) => {
			const sliderPO = new SliderPO(page, 1);

			await page.goto('#/slider/vertical');
			await sliderPO.locatorRoot.waitFor();

			await expect(sliderPO.locatorTick).toHaveCount(5);
			await expect(sliderPO.locatorTickLabelVertical).toHaveCount(5);
			expect((await sliderPO.sliderTickLabelState(sliderPO.locatorTickLabel)).map((state) => state.innerText)).toEqual([
				'0',
				'25',
				'50',
				'75',
				'100',
			]);
		});

		test(`should handle click on the tick`, async ({page}) => {
			const sliderPO = new SliderPO(page, 1);
			const expectedState = {...defaultExpectedState, value: '30', style: 'left: 30%;'};

			await page.goto('#/slider/ticks');
			await sliderPO.locatorRoot.waitFor();

			await expect(sliderPO.locatorTick).toHaveCount(5);

			await expect.poll(async () => (await sliderPO.sliderHandleState()).at(0)).toEqual(expectedState);

			await sliderPO.locatorTick.nth(1).click();

			await expect
				.poll(async () => (await sliderPO.sliderHandleState()).at(0))
				.toEqual(
					assign(expectedState, {
						value: '25',
						style: 'left: 25%;',
					}),
				);
		});
	});
});
