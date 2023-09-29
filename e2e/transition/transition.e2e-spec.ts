import {expect, getTest} from '../fixture';
import type {State} from '../demo-po/transition.po';
import {TransitionPO} from '../demo-po/transition.po';

const defaultState = (): State => ({
	animation: true,
	animationOnInit: false,
	visible: true,
	hidden: false,
	shown: true,
	transitioning: false,
	removeFromDOM: true,
	transition: 'verticalCollapse',
	classes: ['collapse', 'show'],
});

const disableAnimationSetting = async (po: TransitionPO, expectedState: State) => {
	await po.locatorAnimationCheckbox.click();
	expectedState.animation = false;
	await expect.poll(() => po.getState()).toEqual(expectedState);
};

const test = getTest();
test.describe.parallel('Transition tests', () => {
	test.beforeEach(async ({page}) => {
		await page.goto('#/transition/transition');
		await page.addStyleTag({content: `.collapsing {transition-delay: 2s !important}`});
	});

	const testCases = [
		{
			name: 'with default toggle button, hiding DOM element',
			setup: async (po: TransitionPO, expectedState: State, animation: boolean) => {
				if (!animation) {
					await disableAnimationSetting(po, expectedState);
				}
				return po.locatorDefaultToggleButton;
			},
			removingDomElement: false,
		},
		{
			name: 'with default toggle button, removing DOM element',
			setup: async (po: TransitionPO, expectedState: State, animation: boolean) => {
				if (!animation) {
					await disableAnimationSetting(po, expectedState);
				}
				return po.locatorDefaultToggleButton;
			},
			removingDomElement: true,
		},
		{
			name: 'with dedicated buttons (opposite of animation setting)',
			setup: async (po: TransitionPO, expectedState: State, animation: boolean) => {
				if (animation) {
					await disableAnimationSetting(po, expectedState);
					return po.locatorToggleWithAnimationButton;
				} else {
					return po.locatorToggleWithoutAnimationButton;
				}
			},
			removingDomElement: true,
		},
	];

	for (const scenario of testCases) {
		test.describe.parallel(scenario.name, () => {
			test('toggle with animation', async ({page}) => {
				const po = new TransitionPO(page);
				await po.waitLoaded();
				const expectedState = defaultState();
				const button = await scenario.setup(po, expectedState, true);
				await expect.poll(() => po.getState()).toEqual(expectedState);

				if (!scenario.removingDomElement) {
					await po.locatorRemoveFromDOMCheckbox.click();
					expectedState.removeFromDOM = false;
					await expect.poll(() => po.getState()).toEqual(expectedState);
				}

				await button.click();
				expectedState.transitioning = true;
				expectedState.visible = false;
				expectedState.shown = false;
				expectedState.classes = ['collapsing'];

				// transition started
				await expect.poll(() => po.getState()).toEqual(expectedState);

				// transition ended
				await expect.poll(() => po.getState()).not.toEqual(expectedState);
				expectedState.transitioning = false;
				expectedState.hidden = true;
				expectedState.classes = scenario.removingDomElement ? undefined : ['collapse'];
				await expect.poll(() => po.getState()).toEqual(expectedState);

				await button.click();
				expectedState.visible = true;
				expectedState.transitioning = true;
				expectedState.hidden = false;
				expectedState.classes = ['collapsing'];

				// transition started
				await expect.poll(() => po.getState()).toEqual(expectedState);

				// transition ended
				await expect.poll(() => po.getState()).not.toEqual(expectedState);
				expectedState.transitioning = false;
				expectedState.shown = true;
				expectedState.classes = ['collapse', 'show'];
				await expect.poll(() => po.getState()).toEqual(expectedState);
			});

			test('toggle without animation', async ({page}) => {
				const po = new TransitionPO(page);
				await po.waitLoaded();
				const expectedState = defaultState();
				const button = await scenario.setup(po, expectedState, false);
				await expect.poll(() => po.getState()).toEqual(expectedState);

				if (!scenario.removingDomElement) {
					await po.locatorRemoveFromDOMCheckbox.click();
					expectedState.removeFromDOM = false;
					await expect.poll(() => po.getState()).toEqual(expectedState);
				}

				await button.click();
				expectedState.visible = false;
				expectedState.shown = false;
				expectedState.hidden = true;
				expectedState.classes = scenario.removingDomElement ? undefined : ['collapse'];
				await expect.poll(() => po.getState()).toEqual(expectedState);

				await button.click();
				expectedState.visible = true;
				expectedState.hidden = false;
				expectedState.shown = true;
				expectedState.classes = ['collapse', 'show'];
				await expect.poll(() => po.getState()).toEqual(expectedState);
			});
		});
	}

	for (const animationEnabled of [true, false]) {
		test(`animation on init, with animation setting ${animationEnabled ? 'enabled' : 'disabled'}`, async ({page}) => {
			const po = new TransitionPO(page);
			await po.waitLoaded();
			const expectedState = defaultState();
			await expect.poll(() => po.getState()).toEqual(expectedState);

			if (!animationEnabled) {
				await disableAnimationSetting(po, expectedState);
			}

			await po.locatorAnimationOnInitCheckbox.click();
			expectedState.animationOnInit = true;
			await expect.poll(() => po.getState()).toEqual(expectedState);

			await po.locatorToggleComponent.click();
			await expect(po.locatorInnerContainer).toBeHidden();
			await po.locatorToggleComponent.click();
			await expect(po.locatorInnerContainer).toBeVisible();

			expectedState.transitioning = true;
			expectedState.shown = false;
			expectedState.classes = ['collapsing'];
			await expect.poll(() => po.getState()).toEqual(expectedState);

			await expect.poll(() => po.getState()).not.toEqual(expectedState);
			expectedState.transitioning = false;
			expectedState.shown = true;
			expectedState.classes = ['collapse', 'show'];
			await expect.poll(() => po.getState()).toEqual(expectedState);
		});
	}
});
