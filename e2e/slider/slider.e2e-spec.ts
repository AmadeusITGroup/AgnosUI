import {SliderPO} from '@agnos-ui/page-objects';
import {SliderDemoPO} from '../demo-po/slider.po';
import {test, expect} from '../fixture';

const defaultExpectedState: {[key: string]: string | null} = {
	value: '60',
	min: '0',
	max: '100',
	text: '60',
	ariaLabel: '60',
	readonly: null,
	disabled: null,
	style: 'left: 60%;',
};

const defaultExpectedHandleState: {[key: string]: string | null}[] = [
	{
		value: '10',
		min: '0',
		max: '100',
		text: '10',
		ariaLabel: '10',
		readonly: null,
		disabled: null,
		style: 'left: 10%;',
	},
	{
		value: '40',
		min: '0',
		max: '100',
		text: '40',
		ariaLabel: '40',
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
		text: '10',
		ariaLabel: '10',
		readonly: null,
		disabled: null,
		style: 'top: 90%;',
	},
	{
		value: '40',
		min: '0',
		max: '100',
		text: '40',
		ariaLabel: '40',
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
			expectedState.value = '43';
			expectedState.text = '43';
			expectedState.ariaLabel = '43';
			expectedState.style = 'left: 43%;';

			const sliderProgressLocator = sliderPO.locatorProgress;
			const boundingBox = await sliderProgressLocator.boundingBox();
			// force the click though the progress bar
			await sliderProgressLocator.click({position: {x: boundingBox!.x + boundingBox!.width * 0.5, y: 1}, force: true});

			expect((await sliderPO.sliderHandleState())[0]).toEqual(expectedState);
		});

		test(`should snap the handle on mouse drag event`, async ({page}) => {
			const sliderPO = new SliderPO(page, 0);

			await page.goto('#/slider/default');
			await sliderPO.locatorRoot.waitFor();

			const expectedState = {...defaultExpectedState};
			expectedState.value = '88';
			expectedState.text = '88';
			expectedState.ariaLabel = '88';
			expectedState.style = 'left: 88%;';

			const sliderHandleLocator = sliderPO.locatorHandle;
			const sliderLocator = sliderPO.locatorRoot;
			const boundingBox = await sliderLocator.boundingBox();
			await sliderHandleLocator.dragTo(sliderLocator, {
				targetPosition: {x: boundingBox!.x + boundingBox!.width * 0.8, y: 1},
			});

			expect((await sliderPO.sliderHandleState())[0]).toEqual(expectedState);
		});

		test(`should move handle on key strokes`, async ({page}) => {
			const sliderPO = new SliderPO(page, 0);

			await page.goto('#/slider/default');
			await sliderPO.locatorRoot.waitFor();

			const expectedState = {...defaultExpectedState};
			expectedState.value = '0';
			expectedState.text = '0';
			expectedState.ariaLabel = '0';
			expectedState.style = 'left: 0%;';

			const minLabelLocator = sliderPO.locatorMinLabelHorizontal;
			const maxLabelLocator = sliderPO.locatorMaxLabelHorizontal;
			const sliderHandleLocator = sliderPO.locatorHandle;

			await sliderHandleLocator.click();
			await page.keyboard.press('Home');

			expect((await sliderPO.sliderHandleState())[0]).toEqual(expectedState);

			expect(await minLabelLocator.isVisible()).toBe(false);
			expect(await maxLabelLocator.isVisible()).toBe(true);

			await page.keyboard.press('End');

			expectedState.text = '100';
			expectedState.ariaLabel = '100';
			expectedState.value = '100';
			expectedState.style = 'left: 100%;';

			expect((await sliderPO.sliderHandleState())[0]).toEqual(expectedState);

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
			expectedState.readonly = 'true';

			const sliderHandleLocator = sliderPO.locatorHandle;
			const sliderLocator = sliderPO.locatorRoot;
			const boundingBox = await sliderLocator.boundingBox();
			await sliderLocator.click({position: {x: boundingBox!.x + boundingBox!.width * 0.8, y: 1}});

			expect((await sliderPO.sliderHandleState())[0]).toEqual(expectedState);

			await expect(sliderHandleLocator).toBeEnabled();

			await sliderDemoPO.readonlyToggle.click();

			await sliderLocator.click({position: {x: boundingBox!.x + boundingBox!.width * 0.8, y: 1}});

			expectedState.value = '88';
			expectedState.text = '88';
			expectedState.ariaLabel = '88';
			expectedState.style = 'left: 88%;';
			expectedState.readonly = null;

			expect((await sliderPO.sliderHandleState())[0]).toEqual(expectedState);
		});

		test(`should remove min - max labels from the dom when showMinMaxLabels is false`, async ({page}) => {
			const sliderDemoPO = new SliderDemoPO(page);
			const sliderPO = new SliderPO(page, 0);

			await page.goto('#/slider/default');
			await sliderDemoPO.locatorRoot.waitFor();

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
	});

	test.describe(`Range slider`, () => {
		test(`should move the handle to correct tick on the slider click event`, async ({page}) => {
			const sliderPO = new SliderPO(page, 1);

			await page.goto('#/slider/range');
			await sliderPO.locatorRoot.waitFor();

			const expectedState = {...defaultExpectedHandleState[1]};
			expectedState.value = '88';
			expectedState.text = '88';
			expectedState.ariaLabel = '88';
			expectedState.style = 'left: 88%;';

			const sliderLocator = sliderPO.locatorRoot;
			const boundingBox = await sliderLocator.boundingBox();
			await sliderLocator.click({position: {x: boundingBox!.x + boundingBox!.width * 0.8, y: 1}});

			expect((await sliderPO.sliderHandleState())[1]).toEqual(expectedState);
			expect((await sliderPO.sliderProgressState())[0]).toEqual('left: 10%; bottom: 0%; width: 78%; height: 100%;');
		});

		test(`should interchange the handles on mouse drag event`, async ({page}) => {
			const sliderPO = new SliderPO(page, 1);

			await page.goto('#/slider/range');
			await sliderPO.locatorRoot.waitFor();

			const expectedState = {...defaultExpectedHandleState};
			expectedState[0].value = '40';
			expectedState[0].text = '40';
			expectedState[0].ariaLabel = '40';
			expectedState[0].style = 'left: 40%;';
			expectedState[1].value = '83';
			expectedState[1].text = '83';
			expectedState[1].ariaLabel = '83';
			expectedState[1].style = 'left: 83%;';

			const sliderHandleLocator = sliderPO.locatorHandle;
			const sliderLocator = sliderPO.locatorRoot;
			const boundingBox = await sliderLocator.boundingBox();
			await (await sliderHandleLocator.all()).at(0)!.dragTo(sliderLocator, {
				targetPosition: {x: boundingBox!.x + boundingBox!.width * 0.75, y: 1},
			});

			await expect.poll(async () => (await sliderPO.sliderHandleState()).at(0)).toEqual(expectedState[0]);
			expect((await sliderPO.sliderHandleState()).at(1)).toEqual(expectedState[1]);
			expect((await sliderPO.sliderProgressState())[0]).toEqual('left: 40%; bottom: 0%; width: 43%; height: 100%;');
		});

		test(`should move handle on key strokes`, async ({page}) => {
			const sliderPO = new SliderPO(page, 1);

			await page.goto('#/slider/range');
			await sliderPO.locatorRoot.waitFor();

			const expectedState = {...defaultExpectedHandleState};
			expectedState[0].value = '0';
			expectedState[0].text = '0';
			expectedState[0].ariaLabel = '0';
			expectedState[0].style = 'left: 0%;';
			expectedState[1].text = '40';
			expectedState[1].ariaLabel = '40';
			expectedState[1].value = '40';
			expectedState[1].style = 'left: 40%;';

			const minLabelLocator = sliderPO.locatorMinLabelHorizontal;
			const maxLabelLocator = sliderPO.locatorMaxLabelHorizontal;

			await (await sliderPO.locatorHandle.all()).at(0)!.click();
			await page.keyboard.press('Home');

			expect((await sliderPO.sliderHandleState()).at(0)).toEqual(expectedState[0]);
			expect((await sliderPO.sliderHandleState()).at(1)).toEqual(expectedState[1]);
			expect((await sliderPO.sliderProgressState())[0]).toEqual('left: 0%; bottom: 0%; width: 40%; height: 100%;');

			expect(await minLabelLocator.isVisible()).toBe(false);
			expect(await maxLabelLocator.isVisible()).toBe(true);

			await page.keyboard.press('End');

			expectedState[0].text = '40';
			expectedState[0].ariaLabel = '40';
			expectedState[0].value = '40';
			expectedState[0].style = 'left: 40%;';
			expectedState[1].text = '100';
			expectedState[1].ariaLabel = '100';
			expectedState[1].value = '100';
			expectedState[1].style = 'left: 100%;';

			expect((await sliderPO.sliderHandleState()).at(0)).toEqual(expectedState[0]);
			expect((await sliderPO.sliderHandleState()).at(1)).toEqual(expectedState[1]);
			expect((await sliderPO.sliderProgressState())[0]).toEqual('left: 40%; bottom: 0%; width: 60%; height: 100%;');

			expect(await minLabelLocator.isVisible()).toBe(true);
			expect(await maxLabelLocator.isVisible()).toBe(false);
		});

		test(`should add / remove combined label from dom`, async ({page}) => {
			const sliderDemoPO = new SliderDemoPO(page);
			const sliderPO = new SliderPO(page, 1);

			await page.goto('#/slider/range');
			await sliderDemoPO.locatorRoot.waitFor();

			expect((await sliderPO.locatorValueLabel.all()).length).toBe(2);

			const sliderLocator = sliderPO.locatorRoot;
			const boundingBox = await sliderLocator.boundingBox();
			await (await sliderPO.locatorHandle.all()).at(0)!.dragTo(sliderLocator, {
				targetPosition: {x: boundingBox!.x + boundingBox!.width * 0.35, y: 1},
			});

			expect((await sliderPO.locatorValueLabel.all()).length).toBe(1);
		});
	});

	test.describe(`Vertical slider`, () => {
		test(`should move the handle to correct tick on the slider click event`, async ({page}) => {
			const sliderPO = new SliderPO(page, 0);

			await page.goto('#/slider/vertical');
			await sliderPO.locatorRoot.waitFor();

			const expectedState = {...defaultExpectedHandleStateVertical[1]};
			expectedState.value = '80';
			expectedState.text = '80';
			expectedState.ariaLabel = '80';
			expectedState.style = 'top: 20%;';

			const sliderLocator = sliderPO.locatorRoot;
			const boundingBox = await sliderLocator.boundingBox();
			await sliderLocator.click({position: {y: boundingBox!.height * 0.2, x: 1}});

			expect((await sliderPO.sliderHandleState())[1]).toEqual(expectedState);
			expect((await sliderPO.sliderProgressState())[0]).toEqual('left: 0%; bottom: 10%; width: 100%; height: 70%;');
		});

		test(`should move handle on key strokes`, async ({page}) => {
			const sliderPO = new SliderPO(page, 0);

			await page.goto('#/slider/vertical');
			await sliderPO.locatorRoot.waitFor();

			const expectedState = {...defaultExpectedHandleStateVertical};
			expectedState[0].value = '0';
			expectedState[0].text = '0';
			expectedState[0].ariaLabel = '0';
			expectedState[0].style = 'top: 100%;';

			const minLabelLocator = sliderPO.locatorMinLabelVertical;
			const maxLabelLocator = sliderPO.locatorMaxLabelVertical;

			await (await sliderPO.locatorHandle.all()).at(0)!.click();
			await page.keyboard.press('Home');

			expect((await sliderPO.sliderHandleState()).at(0)).toEqual(expectedState[0]);
			expect((await sliderPO.sliderHandleState()).at(1)).toEqual(expectedState[1]);
			expect((await sliderPO.sliderProgressState())[0]).toEqual('left: 0%; bottom: 0%; width: 100%; height: 40%;');

			expect(await minLabelLocator.isVisible()).toBe(false);
			expect(await maxLabelLocator.isVisible()).toBe(true);

			await page.keyboard.press('End');

			expectedState[0].text = '40';
			expectedState[0].ariaLabel = '40';
			expectedState[0].value = '40';
			expectedState[0].style = 'top: 60%;';
			expectedState[1].text = '100';
			expectedState[1].ariaLabel = '100';
			expectedState[1].value = '100';
			expectedState[1].style = 'top: 0%;';

			expect((await sliderPO.sliderHandleState()).at(0)).toEqual(expectedState[0]);
			expect((await sliderPO.sliderHandleState()).at(1)).toEqual(expectedState[1]);
			expect((await sliderPO.sliderProgressState())[0]).toEqual('left: 0%; bottom: 40%; width: 100%; height: 60%;');

			expect(await minLabelLocator.isVisible()).toBe(true);
			expect(await maxLabelLocator.isVisible()).toBe(false);
		});
	});
});
