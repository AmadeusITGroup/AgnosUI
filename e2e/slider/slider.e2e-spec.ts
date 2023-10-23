import {SliderPO} from '@agnos-ui/page-objects';
import {SliderDemoPO} from '../demo-po/slider.po';
import {getTest, expect} from '../fixture';

const defaultExpectedState: {[key: string]: string | null} = {
	value: '60',
	min: '0',
	max: '100',
	text: '60',
	readonly: null,
	disabled: null,
	style: 'left: 60%; top: 0%;',
};

const defaultExpectedHandleState: {[key: string]: string | null}[] = [
	{
		value: '10',
		min: '0',
		max: '100',
		text: '10',
		readonly: null,
		disabled: null,
		style: 'left: 10%; top: 0%;',
	},
	{
		value: '40',
		min: '0',
		max: '100',
		text: '40',
		readonly: null,
		disabled: null,
		style: 'left: 40%; top: 0%;',
	},
];

const defaultExpectedHandleStateVertical: {[key: string]: string | null}[] = [
	{
		value: '10',
		min: '0',
		max: '100',
		text: '10',
		readonly: null,
		disabled: null,
		style: 'left: 0%; top: 90%;',
	},
	{
		value: '40',
		min: '0',
		max: '100',
		text: '40',
		readonly: null,
		disabled: null,
		style: 'left: 0%; top: 60%;',
	},
];

const test = getTest();
test.describe(`Slider tests`, () => {
	test.skip(({framework}) => framework !== 'angular');

	test.describe(`Basic slider`, () => {
		test(`should snap the handle to correct tick on the slider click event`, async ({page}) => {
			const sliderDemoPO = new SliderDemoPO(page);
			const sliderPO = new SliderPO(page, 0);

			await page.goto('#/slider/default');
			await sliderDemoPO.locatorRoot.waitFor();

			const expectedState = {...defaultExpectedState};
			expectedState.value = '88';
			expectedState.text = '88';
			expectedState.style = 'left: 88%; top: 0%;';

			const sliderLocator = sliderPO.locatorRoot;
			const boundingBox = await sliderLocator.boundingBox();
			await sliderLocator.click({position: {x: boundingBox!.x + boundingBox!.width * 0.8, y: 1}});

			expect((await sliderPO.sliderHandleState())[0]).toEqual(expectedState);
		});

		test(`should snap the handle on mouse drag event`, async ({page}) => {
			const sliderDemoPO = new SliderDemoPO(page);
			const sliderPO = new SliderPO(page, 0);

			await page.goto('#/slider/default');
			await sliderDemoPO.locatorRoot.waitFor();

			const expectedState = {...defaultExpectedState};
			expectedState.value = '88';
			expectedState.text = '88';
			expectedState.style = 'left: 88%; top: 0%;';

			const sliderHandleLocator = sliderPO.locatorHandle;
			const sliderLocator = sliderPO.locatorRoot;
			const boundingBox = await sliderLocator.boundingBox();
			await sliderHandleLocator.dragTo(sliderLocator, {
				targetPosition: {x: boundingBox!.x + boundingBox!.width * 0.8, y: 1},
			});

			expect((await sliderPO.sliderHandleState())[0]).toEqual(expectedState);
		});

		test(`should move handle on key strokes`, async ({page}) => {
			const sliderDemoPO = new SliderDemoPO(page);
			const sliderPO = new SliderPO(page, 0);

			await page.goto('#/slider/default');
			await sliderDemoPO.locatorRoot.waitFor();

			const expectedState = {...defaultExpectedState};
			expectedState.value = '0';
			expectedState.text = '0';
			expectedState.style = 'left: 0%; top: 0%;';

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
			expectedState.value = '100';
			expectedState.style = 'left: 100%; top: 0%;';

			expect((await sliderPO.sliderHandleState())[0]).toEqual(expectedState);

			expect(await minLabelLocator.isVisible()).toBe(true);
			expect(await maxLabelLocator.isVisible()).toBe(false);
		});

		test(`should render slider disabled when passing the 'disabled' option`, async ({page}) => {
			const sliderDemoPO = new SliderDemoPO(page);
			const sliderPO = new SliderPO(page, 2);

			await page.goto('#/slider/default');
			await sliderDemoPO.locatorRoot.waitFor();

			const sliderHandleLocator = sliderPO.locatorHandle;

			await expect(sliderHandleLocator).toBeDisabled();

			await sliderDemoPO.disabledToggle.click();

			await expect(sliderHandleLocator).toBeEnabled();
		});

		test(`should ignore all the actions when passing the 'readonly' option`, async ({page}) => {
			const sliderDemoPO = new SliderDemoPO(page);
			const sliderPO = new SliderPO(page, 2);

			await page.goto('#/slider/default');
			await sliderDemoPO.locatorRoot.waitFor();

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
			expectedState.style = 'left: 88%; top: 0%;';
			expectedState.readonly = null;

			expect((await sliderPO.sliderHandleState())[0]).toEqual(expectedState);
		});
	});

	test.describe(`Range slider`, () => {
		test(`should move the handle to correct tick on the slider click event`, async ({page}) => {
			const sliderDemoPO = new SliderDemoPO(page);
			const sliderPO = new SliderPO(page, 1);

			await page.goto('#/slider/range');
			await sliderDemoPO.locatorRoot.waitFor();

			const expectedState = {...defaultExpectedHandleState[1]};
			expectedState.value = '88';
			expectedState.text = '88';
			expectedState.style = 'left: 88%; top: 0%;';

			const sliderLocator = sliderPO.locatorRoot;
			const boundingBox = await sliderLocator.boundingBox();
			await sliderLocator.click({position: {x: boundingBox!.x + boundingBox!.width * 0.8, y: 1}});

			expect((await sliderPO.sliderHandleState())[1]).toEqual(expectedState);
			expect((await sliderPO.sliderProgressState())[0]).toEqual('left: 10%; bottom: 0%; width: 78%; height: 100%;');
		});

		test(`should interchange the handles on mouse drag event`, async ({page}) => {
			const sliderDemoPO = new SliderDemoPO(page);
			const sliderPO = new SliderPO(page, 1);

			await page.goto('#/slider/range');
			await sliderDemoPO.locatorRoot.waitFor();

			const expectedState = {...defaultExpectedHandleState};
			expectedState[0].value = '40';
			expectedState[0].text = '40';
			expectedState[0].style = 'left: 40%; top: 0%;';
			expectedState[1].value = '83';
			expectedState[1].text = '83';
			expectedState[1].style = 'left: 83%; top: 0%;';

			const sliderHandleLocator = sliderPO.locatorHandle;
			const sliderLocator = sliderPO.locatorRoot;
			const boundingBox = await sliderLocator.boundingBox();
			await (await sliderHandleLocator.all()).at(0)!.dragTo(sliderLocator, {
				targetPosition: {x: boundingBox!.x + boundingBox!.width * 0.75, y: 1},
			});

			expect((await sliderPO.sliderHandleState()).at(0)).toEqual(expectedState[0]);
			expect((await sliderPO.sliderHandleState()).at(1)).toEqual(expectedState[1]);
			expect((await sliderPO.sliderProgressState())[0]).toEqual('left: 40%; bottom: 0%; width: 43%; height: 100%;');
		});

		test(`should move handle on key strokes`, async ({page}) => {
			const sliderDemoPO = new SliderDemoPO(page);
			const sliderPO = new SliderPO(page, 1);

			await page.goto('#/slider/range');
			await sliderDemoPO.locatorRoot.waitFor();

			const expectedState = {...defaultExpectedHandleState};
			expectedState[0].value = '0';
			expectedState[0].text = '0';
			expectedState[0].style = 'left: 0%; top: 0%;';
			expectedState[1].text = '40';
			expectedState[1].value = '40';
			expectedState[1].style = 'left: 40%; top: 0%;';

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
			expectedState[0].value = '40';
			expectedState[0].style = 'left: 40%; top: 0%;';
			expectedState[1].text = '100';
			expectedState[1].value = '100';
			expectedState[1].style = 'left: 100%; top: 0%;';

			expect((await sliderPO.sliderHandleState()).at(0)).toEqual(expectedState[0]);
			expect((await sliderPO.sliderHandleState()).at(1)).toEqual(expectedState[1]);
			expect((await sliderPO.sliderProgressState())[0]).toEqual('left: 40%; bottom: 0%; width: 60%; height: 100%;');

			expect(await minLabelLocator.isVisible()).toBe(true);
			expect(await maxLabelLocator.isVisible()).toBe(false);
		});
	});

	test.describe(`Vertical slider`, () => {
		test(`should move the handle to correct tick on the slider click event`, async ({page}) => {
			const sliderDemoPO = new SliderDemoPO(page);
			const sliderPO = new SliderPO(page, 0);

			await page.goto('#/slider/vertical');
			await sliderDemoPO.locatorRoot.waitFor();

			const expectedState = {...defaultExpectedHandleStateVertical[1]};
			expectedState.value = '80';
			expectedState.text = '80';
			expectedState.style = 'left: 0%; top: 20%;';

			const sliderLocator = sliderPO.locatorRoot;
			const boundingBox = await sliderLocator.boundingBox();
			await sliderLocator.click({position: {y: boundingBox!.height * 0.2, x: 1}});

			expect((await sliderPO.sliderHandleState())[1]).toEqual(expectedState);
			expect((await sliderPO.sliderProgressState())[0]).toEqual('left: 0%; bottom: 10%; width: 100%; height: 70%;');
		});

		test(`should move handle on key strokes`, async ({page}) => {
			const sliderDemoPO = new SliderDemoPO(page);
			const sliderPO = new SliderPO(page, 0);

			await page.goto('#/slider/vertical');
			await sliderDemoPO.locatorRoot.waitFor();

			const expectedState = {...defaultExpectedHandleStateVertical};
			expectedState[0].value = '0';
			expectedState[0].text = '0';
			expectedState[0].style = 'left: 0%; top: 100%;';

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
			expectedState[0].value = '40';
			expectedState[0].style = 'left: 0%; top: 60%;';
			expectedState[1].text = '100';
			expectedState[1].value = '100';
			expectedState[1].style = 'left: 0%; top: 0%;';

			expect((await sliderPO.sliderHandleState()).at(0)).toEqual(expectedState[0]);
			expect((await sliderPO.sliderHandleState()).at(1)).toEqual(expectedState[1]);
			expect((await sliderPO.sliderProgressState())[0]).toEqual('left: 0%; bottom: 40%; width: 100%; height: 60%;');

			expect(await minLabelLocator.isVisible()).toBe(true);
			expect(await maxLabelLocator.isVisible()).toBe(false);
		});
	});
});
