import {SliderPO} from '@agnos-ui/page-objects';
import {SliderDemoPO} from '../demo-po/slider.po';
import {test, expect} from '../fixture';
import {assign} from '../../common/utils';

const defaultExpectedState: {[key: string]: string | null} = {
	value: '60',
	min: '0',
	max: '100',
	ariaLabel: '60',
	ariaValueText: '60',
	readonly: null,
	disabled: null,
	style: 'left: 60%;',
};

const defaultExpectedHandleState: {[key: string]: string | null}[] = [
	{
		value: '10',
		min: '0',
		max: '100',
		ariaLabel: '10',
		ariaValueText: '10',
		readonly: null,
		disabled: null,
		style: 'left: 10%;',
	},
	{
		value: '40',
		min: '0',
		max: '100',
		ariaLabel: '40',
		ariaValueText: '40',
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
		ariaLabel: '10',
		ariaValueText: '10',
		readonly: null,
		disabled: null,
		style: 'top: 90%;',
	},
	{
		value: '40',
		min: '0',
		max: '100',
		ariaLabel: '40',
		ariaValueText: '40',
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
			await sliderProgressLocator.click({position: {x: boundingBox!.x + boundingBox!.width * 0.5, y: 1}, force: true});

			await expect
				.poll(async () => (await sliderPO.sliderHandleState()).at(0))
				.toEqual(
					assign(expectedState, {
						value: '43',
						ariaLabel: '43',
						ariaValueText: '43',
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
						ariaLabel: '88',
						ariaValueText: '88',
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
						ariaLabel: '0',
						ariaValueText: '0',
						style: 'left: 0%;',
					}),
				);

			expect(await minLabelLocator.isVisible()).toBe(false);
			expect(await maxLabelLocator.isVisible()).toBe(true);

			await page.keyboard.press('End');

			await expect
				.poll(async () => (await sliderPO.sliderHandleState()).at(0))
				.toEqual(
					assign(expectedState, {
						value: '100',
						ariaLabel: '100',
						ariaValueText: '100',
						style: 'left: 100%;',
					}),
				);

			expect(await minLabelLocator.isVisible()).toBe(true);
			expect(await maxLabelLocator.isVisible()).toBe(false);
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
						ariaLabel: '88',
						ariaValueText: '88',
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

			await expect(sliderPO.locatorMinLabelHorizontal).not.toBeVisible();

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
						ariaLabel: '0',
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
						ariaLabel: '88',
						ariaValueText: '88',
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
					ariaLabel: '40',
					ariaValueText: '40',
					style: 'left: 40%;',
				},
				{
					...expectedState[1],
					value: '83',
					ariaLabel: '83',
					ariaValueText: '83',
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

		test(`should move handle on key strokes`, async ({page}) => {
			const sliderPO = new SliderPO(page, 1);

			await page.goto('#/slider/range');
			await sliderPO.locatorRoot.waitFor();

			const expectedState = {...defaultExpectedHandleState};
			assign(expectedState, [
				{
					...expectedState[0],
					value: '0',
					ariaLabel: '0',
					ariaValueText: '0',
					style: 'left: 0%;',
				},
				{
					...expectedState[1],
					value: '40',
					ariaLabel: '40',
					ariaValueText: '40',
					style: 'left: 40%;',
				},
			]);

			const minLabelLocator = sliderPO.locatorMinLabelHorizontal;
			const maxLabelLocator = sliderPO.locatorMaxLabelHorizontal;

			await sliderPO.locatorHandle.nth(0).click();
			await page.keyboard.press('Home');

			await expect.poll(async () => (await sliderPO.sliderHandleState()).at(0)).toEqual(expectedState[0]);
			expect((await sliderPO.sliderHandleState()).at(1)).toEqual(expectedState[1]);
			expect((await sliderPO.sliderProgressState())[0]).toEqual('left: 0%; width: 40%; height: 100%;');

			expect(await minLabelLocator.isVisible()).toBe(false);
			expect(await maxLabelLocator.isVisible()).toBe(true);

			await page.keyboard.press('End');

			assign(expectedState, [
				{
					...expectedState[0],
					value: '40',
					ariaLabel: '40',
					ariaValueText: '40',
					style: 'left: 40%;',
				},
				{
					...expectedState[1],
					value: '100',
					ariaLabel: '100',
					ariaValueText: '100',
					style: 'left: 100%;',
				},
			]);

			await expect.poll(async () => (await sliderPO.sliderHandleState()).at(0)).toEqual(expectedState[0]);
			expect((await sliderPO.sliderHandleState()).at(1)).toEqual(expectedState[1]);
			expect((await sliderPO.sliderProgressState())[0]).toEqual('left: 40%; width: 60%; height: 100%;');

			expect(await minLabelLocator.isVisible()).toBe(true);
			expect(await maxLabelLocator.isVisible()).toBe(false);
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
						ariaLabel: '80',
						ariaValueText: '80',
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
					ariaLabel: '0',
					ariaValueText: '0',
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

			expect(await minLabelLocator.isVisible()).toBe(false);
			expect(await maxLabelLocator.isVisible()).toBe(true);

			await page.keyboard.press('End');

			assign(expectedState, [
				{
					...expectedState[0],
					value: '40',
					ariaLabel: '40',
					ariaValueText: '40',
					style: 'top: 60%;',
				},
				{
					...expectedState[1],
					value: '100',
					ariaLabel: '100',
					ariaValueText: '100',
					style: 'top: 0%;',
				},
			]);

			await expect.poll(async () => (await sliderPO.sliderHandleState()).at(0)).toEqual(expectedState[0]);
			expect((await sliderPO.sliderHandleState()).at(1)).toEqual(expectedState[1]);
			expect((await sliderPO.sliderProgressState())[0]).toEqual('bottom: 40%; width: 100%; height: 60%;');

			expect(await minLabelLocator.isVisible()).toBe(true);
			expect(await maxLabelLocator.isVisible()).toBe(false);
		});
	});
});
