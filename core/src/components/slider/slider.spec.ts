import type {ReadableSignal, WritableSignal} from '@amadeus-it-group/tansu';
import {computed, writable} from '@amadeus-it-group/tansu';
import {beforeEach, describe, expect, test, vi} from 'vitest';
import type {HandleDisplayOptions, ProgressDisplayOptions, SliderHandle, SliderProps, SliderState, SliderWidget} from './slider';
import {createSlider} from './slider';
import {assign} from '../../../../common/utils';
import {attachDirectiveAndSendEvent} from '../components.spec-utils';

// TODO move to the utils?
function keyboardEvent(key: string): KeyboardEvent {
	return new KeyboardEvent('keydown', {key});
}

const defaultHandle: SliderHandle = {id: 0, value: 0, ariaLabel: 'Value', ariaValueText: undefined, ariaLabelledBy: undefined};

const defaultState: () => SliderState = () => ({
	min: 0,
	max: 100,
	stepSize: 1,
	values: [0],
	sortedValues: [0],
	minValueLabelDisplay: false,
	maxValueLabelDisplay: true,
	combinedLabelDisplay: false,
	disabled: false,
	readonly: false,
	vertical: false,
	progressDisplayOptions: [
		{
			left: 0,
			right: null,
			bottom: null,
			top: null,
			height: 100,
			width: 0,
			id: 0,
		},
	] as ProgressDisplayOptions[],
	combinedLabelPositionLeft: 0,
	combinedLabelPositionTop: 0,
	handleDisplayOptions: [
		{
			left: 0,
			top: null,
		},
	] as HandleDisplayOptions[],
	sortedHandles: [defaultHandle],
	className: '',
	interactive: true,
	showMinMaxLabels: true,
	showValueLabels: true,
	showTicks: false,
	ticks: [],
	rtl: false,
});

const normalizeState = (state: SliderState): SliderState => {
	const normalizedState = {
		...state,
	};
	return normalizedState;
};

describe(`Slider basic`, () => {
	let slider: SliderWidget;
	let normalizedState$: ReadableSignal<SliderState>;
	let defConfig: WritableSignal<Partial<SliderProps>>;

	const clickAreaX = (clientX: number) => {
		attachDirectiveAndSendEvent(slider.directives.clickableAreaDirective, undefined, (node) =>
			node.dispatchEvent(new MouseEvent('mousedown', {clientX})),
		);
	};

	const touchAreaX = (clientX: number) => {
		attachDirectiveAndSendEvent(slider.directives.clickableAreaDirective, undefined, (node) =>
			node.dispatchEvent(new TouchEvent('touchstart', {touches: [new Touch({clientX, identifier: 0, target: new EventTarget()})]})),
		);
	};
	const useKeyOnHandle = (key: string) => {
		attachDirectiveAndSendEvent(slider.directives.handleEventsDirective, {item: {id: 0}}, (node) => node.dispatchEvent(keyboardEvent(key)));
	};

	beforeEach(() => {
		const sliderElement = document.createElement('div');
		vi.spyOn(sliderElement, 'getBoundingClientRect').mockReturnValue({x: 10, y: 0, width: 100, height: 4, top: 0, left: 0} as DOMRect);
		const minLabel = document.createElement('div');
		vi.spyOn(minLabel, 'getBoundingClientRect').mockReturnValue({x: 10, y: 5, width: 3, height: 4} as DOMRect);
		const maxLabel = document.createElement('div');
		vi.spyOn(maxLabel, 'getBoundingClientRect').mockReturnValue({x: 100, y: 5, width: 3, height: 4} as DOMRect);

		defConfig = writable({});
		slider = createSlider({config: computed(() => ({...defConfig()}))});
		const sliderDirective = slider.directives.sliderDirective(sliderElement);
		const minLabelDirective = slider.directives.minLabelDirective(minLabel);
		const maxLabelDirective = slider.directives.maxLabelDirective(maxLabel);

		normalizedState$ = computed(() => {
			return normalizeState(slider.state$());
		});

		return () => {
			sliderDirective!.destroy?.();
			minLabelDirective!.destroy?.();
			maxLabelDirective!.destroy?.();
		};
	});

	test(`should create the default configuration for the model`, () => {
		expect(normalizedState$()).toStrictEqual(defaultState());
	});

	test(`should recompute clean value if min has changed`, () => {
		const expectedState = defaultState();
		expect(normalizedState$()).toStrictEqual(expectedState);

		slider.patch({
			min: 50,
		});

		expect(normalizedState$()).toStrictEqual(
			assign(expectedState, {
				min: 50,
				values: [50],
				sortedValues: [50],
				handleDisplayOptions: [
					{
						...expectedState.handleDisplayOptions[0],
						left: 0,
					},
				],
				sortedHandles: [
					{
						...defaultHandle,
						value: 50,
					},
				],
				minValueLabelDisplay: false,
				progressDisplayOptions: [
					{
						left: 0,
						right: null,
						bottom: null,
						top: null,
						height: 100,
						width: 0,
						id: 0,
					},
				],
			}),
		);

		expect(normalizedState$()).toStrictEqual(expectedState);
	});

	test(`should recompute clean value if max has changed`, () => {
		slider.patch({
			values: [60],
		});

		const expectedState = defaultState();

		expect(normalizedState$()).toStrictEqual(
			assign(expectedState, {
				values: [60],
				sortedValues: [60],
				handleDisplayOptions: [
					{
						...expectedState.handleDisplayOptions[0],
						left: 60,
					},
				],
				sortedHandles: [
					{
						...defaultHandle,
						value: 60,
					},
				],
				minValueLabelDisplay: true,
				progressDisplayOptions: [
					{
						left: 0,
						right: null,
						bottom: null,
						top: null,
						height: 100,
						width: 60,
						id: 0,
					},
				],
			}),
		);

		slider.patch({
			max: 50,
		});

		expect(normalizedState$()).toStrictEqual(
			assign(expectedState, {
				max: 50,
				values: [50],
				sortedValues: [50],
				handleDisplayOptions: [
					{
						...expectedState.handleDisplayOptions[0],
						left: 100,
					},
				],
				sortedHandles: [
					{
						...defaultHandle,
						value: 50,
					},
				],
				maxValueLabelDisplay: false,
				progressDisplayOptions: [
					{
						left: 0,
						right: null,
						bottom: null,
						top: null,
						height: 100,
						width: 100,
						id: 0,
					},
				],
			}),
		);
	});

	test(`should recompute clean value if stepSize has changed`, () => {
		slider.patch({
			values: [60],
		});

		const expectedState = defaultState();

		expect(normalizedState$()).toStrictEqual(
			assign(expectedState, {
				values: [60],
				sortedValues: [60],
				handleDisplayOptions: [
					{
						...expectedState.handleDisplayOptions[0],
						left: 60,
					},
				],
				sortedHandles: [
					{
						...defaultHandle,
						value: 60,
					},
				],
				minValueLabelDisplay: true,
				progressDisplayOptions: [
					{
						left: 0,
						right: null,
						bottom: null,
						top: null,
						height: 100,
						width: 60,
						id: 0,
					},
				],
			}),
		);

		slider.patch({
			stepSize: 25,
		});

		expect(normalizedState$()).toStrictEqual(
			assign(expectedState, {
				stepSize: 25,
				values: [50],
				sortedValues: [50],
				handleDisplayOptions: [
					{
						...expectedState.handleDisplayOptions[0],
						left: 50,
					},
				],
				sortedHandles: [
					{
						...defaultHandle,
						value: 50,
					},
				],
				progressDisplayOptions: [
					{
						left: 0,
						right: null,
						bottom: null,
						top: null,
						height: 100,
						width: 50,
						id: 0,
					},
				],
			}),
		);
	});

	test(`should create the configuration for the model based on the input`, () => {
		slider.patch({
			min: 100,
			max: 200,
			stepSize: 25,
			values: [150],
		});

		const expectedState = defaultState();
		expect(normalizedState$()).toStrictEqual(
			assign(expectedState, {
				min: 100,
				max: 200,
				stepSize: 25,
				values: [150],
				sortedValues: [150],
				handleDisplayOptions: [
					{
						...expectedState.handleDisplayOptions[0],
						left: 50,
					},
				],
				sortedHandles: [
					{
						...defaultHandle,
						value: 150,
					},
				],
				minValueLabelDisplay: true,
				progressDisplayOptions: [
					{
						...expectedState.progressDisplayOptions[0],
						width: 50,
					},
				],
			}),
		);
	});

	test(`should set minValue as min between min, max initial values and maxValue as max accordingly`, () => {
		slider.patch({
			min: 100,
			max: 0,
		});

		expect(normalizedState$()).toStrictEqual(defaultState());
	});

	test(`should set min as defaultMinValue and max as defaultMaxValue if provided values are the same`, () => {
		slider.patch({
			min: 100,
			max: 100,
		});

		expect(normalizedState$()).toStrictEqual(defaultState());
	});

	test(`shouldn't accept 0 as a valid value`, () => {
		slider.patch({
			stepSize: 0,
		});

		expect(normalizedState$()).toStrictEqual(defaultState());
	});

	test(`should snap the value to the valid step`, () => {
		slider.patch({
			stepSize: 25,
			values: [60],
		});
		const expectedState = defaultState();

		expect(normalizedState$()).toStrictEqual(
			assign(expectedState, {
				stepSize: 25,
				values: [50],
				sortedValues: [50],
				handleDisplayOptions: [
					{
						...expectedState.handleDisplayOptions[0],
						left: 50,
					},
				],
				sortedHandles: [
					{
						...defaultHandle,
						value: 50,
					},
				],
				minValueLabelDisplay: true,
				progressDisplayOptions: [
					{
						...expectedState.progressDisplayOptions[0],
						width: 50,
					},
				],
			}),
		);
	});

	test(`should set handle to 0 and hide the min label when clicked outside the slider on the left side`, () => {
		slider.patch({
			values: [50],
		});

		const expectedState = defaultState();

		expect(normalizedState$()).toStrictEqual(
			assign(expectedState, {
				values: [50],
				sortedValues: [50],
				handleDisplayOptions: [
					{
						...expectedState.handleDisplayOptions[0],
						left: 50,
					},
				],
				sortedHandles: [
					{
						...defaultHandle,
						value: 50,
					},
				],
				minValueLabelDisplay: true,
				progressDisplayOptions: [
					{
						...expectedState.progressDisplayOptions[0],
						width: 50,
					},
				],
			}),
		);

		clickAreaX(0);

		expect(normalizedState$()).toStrictEqual(
			assign(expectedState, {
				values: [0],
				sortedValues: [0],
				handleDisplayOptions: [
					{
						...expectedState.handleDisplayOptions[0],
						left: 0,
					},
				],
				sortedHandles: [
					{
						...defaultHandle,
						id: 0,
						value: 0,
					},
				],
				minValueLabelDisplay: false,
				progressDisplayOptions: [
					{
						...expectedState.progressDisplayOptions[0],
						width: 0,
					},
				],
			}),
		);
	});

	test(`should hide the min - max labels if the showMinMaxLabels is false`, () => {
		slider.patch({
			showMinMaxLabels: false,
			values: [50],
		});

		const expectedState = defaultState();

		expect(normalizedState$()).toStrictEqual(
			assign(expectedState, {
				values: [50],
				sortedValues: [50],
				handleDisplayOptions: [
					{
						...expectedState.handleDisplayOptions[0],
						left: 50,
					},
				],
				sortedHandles: [
					{
						...defaultHandle,
						id: 0,
						value: 50,
					},
				],
				minValueLabelDisplay: false,
				maxValueLabelDisplay: false,
				showMinMaxLabels: false,
				progressDisplayOptions: [
					{
						...expectedState.progressDisplayOptions[0],
						width: 50,
					},
				],
			}),
		);
	});

	test(`should not hide the min - max labels when showValueLabels is false`, () => {
		slider.patch({
			showValueLabels: false,
		});

		const expectedState = defaultState();

		expect(normalizedState$()).toStrictEqual(
			assign(expectedState, {
				showValueLabels: false,
				minValueLabelDisplay: true,
			}),
		);
	});

	test(`should set handle to 100 and hide the max label when clicked outside the slider on the right side`, () => {
		clickAreaX(120);

		const expectedState = defaultState();

		expect(normalizedState$()).toStrictEqual(
			assign(expectedState, {
				values: [100],
				sortedValues: [100],
				handleDisplayOptions: [
					{
						...expectedState.handleDisplayOptions[0],
						left: 100,
					},
				],
				sortedHandles: [
					{
						...defaultHandle,
						value: 100,
					},
				],
				minValueLabelDisplay: true,
				maxValueLabelDisplay: false,
				progressDisplayOptions: [
					{
						...expectedState.progressDisplayOptions[0],
						width: 100,
					},
				],
			}),
		);
	});

	test(`should set handle to a proper percent when clicked inside the slider`, () => {
		clickAreaX(70);

		const expectedState = defaultState();

		expect(normalizedState$()).toStrictEqual(
			assign(expectedState, {
				values: [70],
				sortedValues: [70],
				handleDisplayOptions: [
					{
						...expectedState.handleDisplayOptions[0],
						left: 70,
					},
				],
				sortedHandles: [
					{
						...defaultHandle,
						id: 0,
						value: 70,
					},
				],
				minValueLabelDisplay: true,
				progressDisplayOptions: [
					{
						...expectedState.progressDisplayOptions[0],
						width: 70,
					},
				],
			}),
		);
	});

	test(`should set handle to a proper percent when touched inside the slider`, () => {
		touchAreaX(70);

		const expectedState = defaultState();

		expect(normalizedState$()).toStrictEqual(
			assign(expectedState, {
				values: [70],
				sortedValues: [70],
				handleDisplayOptions: [
					{
						...expectedState.handleDisplayOptions[0],
						left: 70,
					},
				],
				sortedHandles: [
					{
						...defaultHandle,
						id: 0,
						value: 70,
					},
				],
				minValueLabelDisplay: true,
				progressDisplayOptions: [
					{
						...expectedState.progressDisplayOptions[0],
						width: 70,
					},
				],
			}),
		);
	});

	test(`should not go below minimum on arrow left and down arrow key stroke`, () => {
		useKeyOnHandle('ArrowDown');

		const expectedState = defaultState();

		expect(normalizedState$()).toStrictEqual(
			assign(expectedState, {
				values: [0],
				sortedValues: [0],
				handleDisplayOptions: [
					{
						...expectedState.handleDisplayOptions[0],
						left: 0,
					},
				],
				sortedHandles: [
					{
						...defaultHandle,
					},
				],
				minValueLabelDisplay: false,
				progressDisplayOptions: [
					{
						...expectedState.progressDisplayOptions[0],
						width: 0,
					},
				],
			}),
		);

		useKeyOnHandle('ArrowLeft');

		expect(normalizedState$()).toStrictEqual(expectedState);
	});

	test(`should decrease the handle value on left and down arrow key stroke`, () => {
		slider.patch({
			values: [50],
		});

		const expectedState = defaultState();

		expect(normalizedState$()).toStrictEqual(
			assign(expectedState, {
				values: [50],
				sortedValues: [50],
				handleDisplayOptions: [
					{
						...expectedState.handleDisplayOptions[0],
						left: 50,
					},
				],
				sortedHandles: [
					{
						...defaultHandle,
						value: 50,
					},
				],
				minValueLabelDisplay: true,
				progressDisplayOptions: [
					{
						...expectedState.progressDisplayOptions[0],
						width: 50,
					},
				],
			}),
		);

		useKeyOnHandle('ArrowDown');

		expect(normalizedState$()).toStrictEqual(
			assign(expectedState, {
				values: [49],
				sortedValues: [49],
				handleDisplayOptions: [
					{
						...expectedState.handleDisplayOptions[0],
						left: 49,
					},
				],
				sortedHandles: [
					{
						...defaultHandle,
						value: 49,
					},
				],
				progressDisplayOptions: [
					{
						...expectedState.progressDisplayOptions[0],
						width: 49,
					},
				],
			}),
		);

		useKeyOnHandle('ArrowLeft');

		expect(normalizedState$()).toStrictEqual(
			assign(expectedState, {
				values: [48],
				sortedValues: [48],
				handleDisplayOptions: [
					{
						...expectedState.handleDisplayOptions[0],
						left: 48,
					},
				],
				sortedHandles: [
					{
						...defaultHandle,
						value: 48,
					},
				],
				progressDisplayOptions: [
					{
						...expectedState.progressDisplayOptions[0],
						width: 48,
					},
				],
			}),
		);
	});

	test(`should not go above maximum on arrow right and up arrow key stroke`, () => {
		slider.patch({
			values: [100],
		});

		useKeyOnHandle('ArrowUp');

		const expectedState = defaultState();

		expect(normalizedState$()).toStrictEqual(
			assign(expectedState, {
				values: [100],
				sortedValues: [100],
				handleDisplayOptions: [
					{
						...expectedState.handleDisplayOptions[0],
						left: 100,
					},
				],
				sortedHandles: [
					{
						...defaultHandle,
						value: 100,
					},
				],
				minValueLabelDisplay: true,
				maxValueLabelDisplay: false,
				progressDisplayOptions: [
					{
						...expectedState.progressDisplayOptions[0],
						width: 100,
					},
				],
			}),
		);

		useKeyOnHandle('ArrowRight');

		expect(normalizedState$()).toStrictEqual(expectedState);
	});

	test(`should increase the handle value on right and up arrow key stroke`, () => {
		slider.patch({
			values: [50],
		});

		const expectedState = defaultState();

		expect(normalizedState$()).toStrictEqual(
			assign(expectedState, {
				values: [50],
				sortedValues: [50],
				handleDisplayOptions: [
					{
						...expectedState.handleDisplayOptions[0],
						left: 50,
					},
				],
				sortedHandles: [
					{
						...defaultHandle,
						value: 50,
					},
				],
				minValueLabelDisplay: true,
				progressDisplayOptions: [
					{
						...expectedState.progressDisplayOptions[0],
						width: 50,
					},
				],
			}),
		);

		useKeyOnHandle('ArrowUp');

		expect(normalizedState$()).toStrictEqual(
			assign(expectedState, {
				values: [51],
				sortedValues: [51],
				handleDisplayOptions: [
					{
						...expectedState.handleDisplayOptions[0],
						left: 51,
					},
				],
				sortedHandles: [
					{
						...defaultHandle,
						value: 51,
					},
				],
				progressDisplayOptions: [
					{
						...expectedState.progressDisplayOptions[0],
						width: 51,
					},
				],
			}),
		);

		useKeyOnHandle('ArrowRight');

		expect(normalizedState$()).toStrictEqual(
			assign(expectedState, {
				values: [52],
				sortedValues: [52],
				handleDisplayOptions: [
					{
						...expectedState.handleDisplayOptions[0],
						left: 52,
					},
				],
				sortedHandles: [
					{
						...defaultHandle,
						value: 52,
					},
				],
				progressDisplayOptions: [
					{
						...expectedState.progressDisplayOptions[0],
						width: 52,
					},
				],
			}),
		);
	});

	test(`should jump to minimum slider value on home key stroke`, () => {
		slider.patch({
			values: [50],
		});

		const expectedState = defaultState();

		expect(normalizedState$()).toStrictEqual(
			assign(expectedState, {
				values: [50],
				sortedValues: [50],
				handleDisplayOptions: [
					{
						...expectedState.handleDisplayOptions[0],
						left: 50,
					},
				],
				sortedHandles: [
					{
						...defaultHandle,
						value: 50,
					},
				],
				minValueLabelDisplay: true,
				progressDisplayOptions: [
					{
						...expectedState.progressDisplayOptions[0],
						width: 50,
					},
				],
			}),
		);

		useKeyOnHandle('Home');

		expect(normalizedState$()).toStrictEqual(
			assign(expectedState, {
				values: [0],
				sortedValues: [0],
				handleDisplayOptions: [
					{
						...expectedState.handleDisplayOptions[0],
						left: 0,
					},
				],
				sortedHandles: [
					{
						...defaultHandle,
					},
				],
				minValueLabelDisplay: false,
				progressDisplayOptions: [
					{
						...expectedState.progressDisplayOptions[0],
						width: 0,
					},
				],
			}),
		);
	});

	test(`should jump to maximum slider value on end key stroke`, () => {
		slider.patch({
			values: [50],
		});

		const expectedState = defaultState();

		expect(normalizedState$()).toStrictEqual(
			assign(expectedState, {
				values: [50],
				sortedValues: [50],
				handleDisplayOptions: [
					{
						...expectedState.handleDisplayOptions[0],
						left: 50,
					},
				],
				sortedHandles: [
					{
						...defaultHandle,
						value: 50,
					},
				],
				minValueLabelDisplay: true,
				progressDisplayOptions: [
					{
						...expectedState.progressDisplayOptions[0],
						width: 50,
					},
				],
			}),
		);

		useKeyOnHandle('End');

		expect(normalizedState$()).toStrictEqual(
			assign(expectedState, {
				values: [100],
				sortedValues: [100],
				handleDisplayOptions: [
					{
						...expectedState.handleDisplayOptions[0],
						left: 100,
					},
				],
				sortedHandles: [
					{
						...defaultHandle,
						value: 100,
					},
				],
				maxValueLabelDisplay: false,
				progressDisplayOptions: [
					{
						...expectedState.progressDisplayOptions[0],
						width: 100,
					},
				],
			}),
		);
	});

	test(`should not change handle with actions if the slider is disabled`, () => {
		slider.patch({
			disabled: true,
		});

		const expectedState = defaultState();

		expect(normalizedState$()).toStrictEqual(
			assign(expectedState, {
				interactive: false,
				disabled: true,
			}),
		);

		expect(normalizedState$()).toStrictEqual(expectedState);

		clickAreaX(50);

		expect(normalizedState$()).toStrictEqual(expectedState);

		useKeyOnHandle('Home');

		expect(normalizedState$()).toStrictEqual(expectedState);
	});

	test(`should not change handle with actions if the slider is readonly`, () => {
		slider.patch({
			readonly: true,
		});

		const expectedState = defaultState();

		expect(normalizedState$()).toStrictEqual(
			assign(expectedState, {
				interactive: false,
				readonly: true,
			}),
		);

		expect(normalizedState$()).toStrictEqual(expectedState);

		clickAreaX(50);

		expect(normalizedState$()).toStrictEqual(expectedState);

		useKeyOnHandle('Home');

		expect(normalizedState$()).toStrictEqual(expectedState);
	});

	test(`should correctly increment the handle value when the min is decimal and step is integer`, () => {
		slider.patch({
			min: 0.5,
			max: 3.5,
			values: [0.5],
		});

		const expectedState = defaultState();

		expect(normalizedState$()).toStrictEqual(
			assign(expectedState, {
				min: 0.5,
				max: 3.5,
				values: [0.5],
				sortedValues: [0.5],
				sortedHandles: [
					{
						...defaultHandle,
						value: 0.5,
					},
				],
			}),
		);

		useKeyOnHandle('ArrowUp');

		expect(normalizedState$()).toStrictEqual(
			assign(expectedState, {
				minValueLabelDisplay: true,
				handleDisplayOptions: [
					{
						...expectedState.handleDisplayOptions[0],
						left: 33.333333333333336,
					},
				],
				progressDisplayOptions: [
					{
						left: 0,
						right: null,
						bottom: null,
						top: null,
						height: 100,
						width: 33.333333333333336,
						id: 0,
					},
				],
				values: [1.5],
				sortedValues: [1.5],
				sortedHandles: [
					{
						...defaultHandle,
						value: 1.5,
					},
				],
			}),
		);
	});

	test(`should base the value on the min value of the slider for step calculation`, () => {
		slider.patch({
			min: 0.5,
			max: 3,
			stepSize: 1,
			values: [3],
		});

		const expectedState = defaultState();

		expect(normalizedState$()).toStrictEqual(
			assign(expectedState, {
				min: 0.5,
				max: 3,
				stepSize: 1,
				values: [3],
				sortedValues: [3],
				sortedHandles: [
					{
						...defaultHandle,
						value: 3,
					},
				],
				minValueLabelDisplay: true,
				maxValueLabelDisplay: false,
				progressDisplayOptions: [
					{
						left: 0,
						right: null,
						bottom: null,
						top: null,
						height: 100,
						width: 100,
						id: 0,
					},
				],
				handleDisplayOptions: [
					{
						...expectedState.handleDisplayOptions[0],
						left: 100,
					},
				],
			}),
		);

		useKeyOnHandle('ArrowLeft');

		expect(normalizedState$()).toStrictEqual(
			assign(expectedState, {
				handleDisplayOptions: [
					{
						...expectedState.handleDisplayOptions[0],
						left: 80,
					},
				],
				progressDisplayOptions: [
					{
						left: 0,
						right: null,
						bottom: null,
						top: null,
						height: 100,
						width: 80,
						id: 0,
					},
				],
				values: [2.5],
				sortedValues: [2.5],
				sortedHandles: [
					{
						...defaultHandle,
						value: 2.5,
					},
				],
				maxValueLabelDisplay: true,
			}),
		);
	});

	test(`should round the value to specific decimal precision (2) based on input values`, () => {
		slider.patch({
			min: 0.33,
			max: 5.55,
			stepSize: 0.2,
			values: [1],
		});

		const expectedState = defaultState();
		expect(normalizedState$()).toStrictEqual(
			assign(expectedState, {
				min: 0.33,
				max: 5.55,
				stepSize: 0.2,
				values: [0.93],
				sortedValues: [0.93],
				sortedHandles: [
					{
						...defaultHandle,
						value: 0.93,
					},
				],
				minValueLabelDisplay: true,
				progressDisplayOptions: [
					{
						left: 0,
						right: null,
						bottom: null,
						top: null,
						height: 100,
						width: 11.49425287356322,
						id: 0,
					},
				],
				handleDisplayOptions: [
					{
						...expectedState.handleDisplayOptions[0],
						left: 11.49425287356322,
					},
				],
			}),
		);
	});

	test(`should properly set the state in RTL case`, () => {
		slider.patch({
			rtl: true,
		});

		const expectedState = defaultState();

		expect(normalizedState$()).toStrictEqual(
			assign(expectedState, {
				rtl: true,
				progressDisplayOptions: [
					{
						...expectedState.progressDisplayOptions[0],
						left: null,
						right: 0,
						bottom: null,
						top: null,
					},
				],
				handleDisplayOptions: [
					{
						...expectedState.handleDisplayOptions[0],
						left: 100,
					},
				],
			}),
		);
	});

	test(`should properly handle keyboard in RTL case`, () => {
		slider.patch({
			rtl: true,
		});

		const expectedState = defaultState();

		expect(normalizedState$()).toStrictEqual(
			assign(expectedState, {
				rtl: true,
				progressDisplayOptions: [
					{
						...expectedState.progressDisplayOptions[0],
						left: null,
						right: 0,
						bottom: null,
						top: null,
					},
				],
				handleDisplayOptions: [
					{
						...expectedState.handleDisplayOptions[0],
						left: 100,
					},
				],
			}),
		);

		useKeyOnHandle('ArrowUp');

		expect(normalizedState$()).toStrictEqual(
			assign(expectedState, {
				progressDisplayOptions: [
					{
						...expectedState.progressDisplayOptions[0],
						left: null,
						right: 0,
						bottom: null,
						top: null,
						width: 1,
					},
				],
				handleDisplayOptions: [
					{
						...expectedState.handleDisplayOptions[0],
						left: 99,
					},
				],
				values: [1],
				sortedValues: [1],
				sortedHandles: [
					{
						...defaultHandle,
						value: 1,
					},
				],
			}),
		);

		useKeyOnHandle('ArrowLeft');

		expect(normalizedState$()).toStrictEqual(
			assign(expectedState, {
				progressDisplayOptions: [
					{
						...expectedState.progressDisplayOptions[0],
						left: null,
						right: 0,
						bottom: null,
						top: null,
						width: 2,
					},
				],
				handleDisplayOptions: [
					{
						...expectedState.handleDisplayOptions[0],
						left: 98,
					},
				],
				values: [2],
				sortedValues: [2],
				sortedHandles: [
					{
						...defaultHandle,
						value: 2,
					},
				],
			}),
		);

		useKeyOnHandle('ArrowDown');

		expect(normalizedState$()).toStrictEqual(
			assign(expectedState, {
				progressDisplayOptions: [
					{
						...expectedState.progressDisplayOptions[0],
						left: null,
						right: 0,
						bottom: null,
						top: null,
						width: 1,
					},
				],
				handleDisplayOptions: [
					{
						...expectedState.handleDisplayOptions[0],
						left: 99,
					},
				],
				values: [1],
				sortedValues: [1],
				sortedHandles: [
					{
						...defaultHandle,
						value: 1,
					},
				],
			}),
		);

		useKeyOnHandle('ArrowRight');

		expect(normalizedState$()).toStrictEqual(
			assign(expectedState, {
				progressDisplayOptions: [
					{
						...expectedState.progressDisplayOptions[0],
						left: null,
						right: 0,
						bottom: null,
						top: null,
						width: 0,
					},
				],
				handleDisplayOptions: [
					{
						...expectedState.handleDisplayOptions[0],
						left: 100,
					},
				],
				values: [0],
				sortedValues: [0],
				sortedHandles: [
					{
						...defaultHandle,
					},
				],
			}),
		);
	});

	test(`should compute ticks based on the tickInterval input`, () => {
		slider.patch({
			stepSize: 1,
			tickInterval: 25,
			showTicks: true,
		});

		const expectedState = defaultState();

		expect(normalizedState$()).toStrictEqual(
			assign(expectedState, {
				showTicks: true,
				stepSize: 1,
				ticks: [
					{
						position: 0,
						value: 0,
						selected: true,
						displayLabel: true,
					},
					{
						position: 25,
						value: 25,
						selected: false,
						displayLabel: true,
					},
					{
						position: 50,
						value: 50,
						selected: false,
						displayLabel: true,
					},
					{
						position: 75,
						value: 75,
						selected: false,
						displayLabel: true,
					},
					{
						position: 100,
						value: 100,
						selected: false,
						displayLabel: true,
					},
				],
				maxValueLabelDisplay: false,
				showValueLabels: false,
			}),
		);
	});

	test(`should compute ticks on the decimal values and properly mark them selected`, () => {
		slider.patch({
			min: 0.33,
			max: 1.55,
			stepSize: 0.2,
			showTicks: true,
			values: [1],
		});

		const expectedState = defaultState();

		expect(normalizedState$()).toStrictEqual(
			assign(expectedState, {
				min: 0.33,
				max: 1.55,
				stepSize: 0.2,
				values: [0.93],
				sortedValues: [0.93],
				sortedHandles: [
					{
						...defaultHandle,
						value: 0.93,
					},
				],
				maxValueLabelDisplay: false,
				showValueLabels: false,
				progressDisplayOptions: [
					{
						left: 0,
						right: null,
						bottom: null,
						top: null,
						height: 100,
						width: 49.180327868852466,
						id: 0,
					},
				],
				handleDisplayOptions: [
					{
						...expectedState.handleDisplayOptions[0],
						left: 49.180327868852466,
					},
				],
				showTicks: true,
				ticks: [
					{
						position: 0,
						value: 0.33,
						selected: true,
						displayLabel: true,
					},
					{
						position: 16.39344262295082,
						value: 0.53,
						selected: true,
						displayLabel: true,
					},
					{
						position: 32.78688524590164,
						value: 0.73,
						selected: true,
						displayLabel: true,
					},
					{
						position: 49.180327868852466,
						value: 0.93,
						selected: true,
						displayLabel: true,
					},
					{
						position: 65.57377049180327,
						value: 1.13,
						selected: false,
						displayLabel: true,
					},
					{
						position: 81.9672131147541,
						value: 1.33,
						selected: false,
						displayLabel: true,
					},
					{
						position: 98.36065573770492,
						value: 1.53,
						selected: false,
						displayLabel: true,
					},
					{
						position: 100,
						value: 1.55,
						selected: false,
						displayLabel: true,
					},
				],
			}),
		);
	});

	test(`should proprely compute tick position for RTL case`, () => {
		slider.patch({
			rtl: true,
			tickInterval: 25,
			showTicks: true,
		});

		const expectedState = defaultState();

		expect(normalizedState$()).toStrictEqual(
			assign(expectedState, {
				rtl: true,
				showTicks: true,
				maxValueLabelDisplay: false,
				showValueLabels: false,
				ticks: [
					{
						position: 100,
						value: 0,
						selected: true,
						displayLabel: true,
					},
					{
						position: 75,
						value: 25,
						selected: false,
						displayLabel: true,
					},
					{
						position: 50,
						value: 50,
						selected: false,
						displayLabel: true,
					},
					{
						position: 25,
						value: 75,
						selected: false,
						displayLabel: true,
					},
					{
						position: 0,
						value: 100,
						selected: false,
						displayLabel: true,
					},
				],
				progressDisplayOptions: [
					{
						...expectedState.progressDisplayOptions[0],
						left: null,
						right: 0,
						bottom: null,
						top: null,
					},
				],
				handleDisplayOptions: [
					{
						...expectedState.handleDisplayOptions[0],
						left: 100,
					},
				],
			}),
		);
	});

	test(`should automatically hide the min/max/current labels when showTickValues is true`, () => {
		slider.patch({
			stepSize: 1,
			tickInterval: 25,
			showTicks: true,
			showTickValues: true,
			values: [50],
		});

		const expectedState = defaultState();

		expect(normalizedState$()).toStrictEqual(
			assign(expectedState, {
				showTicks: true,
				stepSize: 1,
				values: [50],
				sortedValues: [50],
				handleDisplayOptions: [
					{
						...expectedState.handleDisplayOptions[0],
						left: 50,
					},
				],
				sortedHandles: [
					{
						...defaultHandle,
						value: 50,
					},
				],
				progressDisplayOptions: [
					{
						...expectedState.progressDisplayOptions[0],
						width: 50,
					},
				],
				ticks: [
					{
						position: 0,
						value: 0,
						selected: true,
						displayLabel: true,
					},
					{
						position: 25,
						value: 25,
						selected: true,
						displayLabel: true,
					},
					{
						position: 50,
						value: 50,
						selected: true,
						displayLabel: true,
					},
					{
						position: 75,
						value: 75,
						selected: false,
						displayLabel: true,
					},
					{
						position: 100,
						value: 100,
						selected: false,
						displayLabel: true,
					},
				],
				minValueLabelDisplay: false,
				maxValueLabelDisplay: false,
				showValueLabels: false,
			}),
		);
	});

	test(`should automatically show the min/max/current labels when showTickValues is false`, () => {
		slider.patch({
			stepSize: 1,
			tickInterval: 25,
			showTicks: true,
			showTickValues: false,
			values: [50],
		});

		const expectedState = defaultState();

		expect(normalizedState$()).toStrictEqual(
			assign(expectedState, {
				showTicks: true,
				stepSize: 1,
				values: [50],
				sortedValues: [50],
				handleDisplayOptions: [
					{
						...expectedState.handleDisplayOptions[0],
						left: 50,
					},
				],
				sortedHandles: [
					{
						...defaultHandle,
						value: 50,
					},
				],
				progressDisplayOptions: [
					{
						...expectedState.progressDisplayOptions[0],
						width: 50,
					},
				],
				ticks: [
					{
						position: 0,
						value: 0,
						selected: true,
						displayLabel: false,
					},
					{
						position: 25,
						value: 25,
						selected: true,
						displayLabel: false,
					},
					{
						position: 50,
						value: 50,
						selected: true,
						displayLabel: false,
					},
					{
						position: 75,
						value: 75,
						selected: false,
						displayLabel: false,
					},
					{
						position: 100,
						value: 100,
						selected: false,
						displayLabel: false,
					},
				],
				minValueLabelDisplay: true,
				maxValueLabelDisplay: true,
				showValueLabels: true,
			}),
		);
	});
});

describe(`Slider range`, () => {
	let slider: SliderWidget;
	let normalizedState$: ReadableSignal<SliderState>;
	let defConfig: WritableSignal<Partial<SliderProps>>;

	const clickAreaX = (clientX: number) => {
		attachDirectiveAndSendEvent(slider.directives.clickableAreaDirective, undefined, (node) =>
			node.dispatchEvent(new MouseEvent('mousedown', {clientX})),
		);
	};
	const useKeyOnHandle = (key: string, handleId = 0) => {
		attachDirectiveAndSendEvent(slider.directives.handleEventsDirective, {item: {id: handleId}}, (node) => node.dispatchEvent(keyboardEvent(key)));
	};

	beforeEach(() => {
		defConfig = writable({values: [50, 75]});
		slider = createSlider({config: computed(() => ({...defConfig()}))});
		const sliderElement = document.createElement('div');
		vi.spyOn(sliderElement, 'getBoundingClientRect').mockReturnValue({x: 10, y: 0, width: 100, height: 4, top: 0, left: 0} as DOMRect);
		const minLabel = document.createElement('div');
		vi.spyOn(minLabel, 'getBoundingClientRect').mockReturnValue({x: 10, y: 5, width: 3, height: 4} as DOMRect);
		const maxLabel = document.createElement('div');
		vi.spyOn(maxLabel, 'getBoundingClientRect').mockReturnValue({x: 100, y: 5, width: 3, height: 4} as DOMRect);
		const currentLowLabel = document.createElement('div');
		vi.spyOn(currentLowLabel, 'getBoundingClientRect').mockReturnValue({x: 10, y: 5, width: 5, height: 4} as DOMRect);
		const currentHighLabel = document.createElement('div');
		vi.spyOn(currentHighLabel, 'getBoundingClientRect').mockReturnValue({x: 10, y: 5, width: 5, height: 4} as DOMRect);
		const sliderDirective = slider.directives.sliderDirective(sliderElement);
		const minLabelDirective = slider.directives.minLabelDirective(minLabel);
		const maxLabelDirective = slider.directives.maxLabelDirective(maxLabel);
		const handleLabelDirectiveInstance1 = slider.directives.handleLabelDisplayDirective(currentLowLabel, {index: 0});
		const handleLabelDirectiveInstance2 = slider.directives.handleLabelDisplayDirective(currentHighLabel, {index: 1});
		normalizedState$ = computed(() => {
			return normalizeState(slider.state$());
		});

		return () => {
			sliderDirective!.destroy?.();
			minLabelDirective!.destroy?.();
			maxLabelDirective!.destroy?.();
			handleLabelDirectiveInstance1!.destroy?.();
			handleLabelDirectiveInstance2!.destroy?.();
		};
	});

	test(`should create the configuration for the model based on input`, () => {
		slider.patch({
			min: 100,
			max: 200,
			stepSize: 25,
			values: [150, 175],
		});
		const expectedState = defaultState();
		expect(normalizedState$()).toStrictEqual(
			assign(expectedState, {
				min: 100,
				max: 200,
				stepSize: 25,
				values: [150, 175],
				sortedValues: [150, 175],
				handleDisplayOptions: [
					{
						left: 50,
						top: null,
					},
					{
						left: 75,
						top: null,
					},
				],
				combinedLabelPositionLeft: 62.5,
				progressDisplayOptions: [
					{
						left: 50,
						right: null,
						bottom: null,
						top: null,
						width: 25,
						height: 100,
						id: 0,
					},
				],
				sortedHandles: [
					{
						...defaultHandle,
						value: 150,
					},
					{
						...defaultHandle,
						id: 1,
						value: 175,
					},
				],
				minValueLabelDisplay: true,
			}),
		);
	});

	test(`should update the correct handle when clicking on the range`, () => {
		slider.patch({
			values: [10, 50],
		});
		const expectedState = defaultState();

		expect(normalizedState$()).toStrictEqual(
			assign(expectedState, {
				values: [10, 50],
				sortedValues: [10, 50],
				handleDisplayOptions: [
					{
						left: 10,
						top: null,
					},
					{
						left: 50,
						top: null,
					},
				],
				combinedLabelPositionLeft: 30,
				progressDisplayOptions: [
					{
						left: 10,
						right: null,
						bottom: null,
						top: null,
						width: 40,
						height: 100,
						id: 0,
					},
				],
				sortedHandles: [
					{
						...defaultHandle,
						value: 10,
					},
					{
						...defaultHandle,
						id: 1,
						value: 50,
					},
				],
				minValueLabelDisplay: true,
			}),
		);

		clickAreaX(60);

		expect(normalizedState$()).toStrictEqual(
			assign(expectedState, {
				values: [10, 60],
				sortedValues: [10, 60],
				handleDisplayOptions: [
					{
						left: 10,
						top: null,
					},
					{
						left: 60,
						top: null,
					},
				],
				combinedLabelPositionLeft: 35,
				progressDisplayOptions: [
					{
						left: 10,
						right: null,
						bottom: null,
						top: null,
						width: 50,
						height: 100,
						id: 0,
					},
				],
				sortedHandles: [
					{
						...defaultHandle,
						value: 10,
					},
					{
						...defaultHandle,
						id: 1,
						value: 60,
					},
				],
			}),
		);
	});

	test(`should update the correct handles when they are reversed`, () => {
		slider.patch({
			values: [10, 50],
		});
		const expectedState = defaultState();

		expect(normalizedState$()).toStrictEqual(
			assign(expectedState, {
				values: [10, 50],
				sortedValues: [10, 50],
				handleDisplayOptions: [
					{
						left: 10,
						top: null,
					},
					{
						left: 50,
						top: null,
					},
				],
				combinedLabelPositionLeft: 30,
				progressDisplayOptions: [
					{
						left: 10,
						right: null,
						bottom: null,
						top: null,
						width: 40,
						height: 100,
						id: 0,
					},
				],
				sortedHandles: [
					{
						...defaultHandle,
						value: 10,
					},
					{
						...defaultHandle,
						id: 1,
						value: 50,
					},
				],
				minValueLabelDisplay: true,
			}),
		);

		useKeyOnHandle('End');

		expect(normalizedState$()).toStrictEqual(
			assign(expectedState, {
				values: [100, 50],
				sortedValues: [50, 100],
				handleDisplayOptions: [
					{
						left: 100,
						top: null,
					},
					{
						left: 50,
						top: null,
					},
				],
				combinedLabelPositionLeft: 75,
				progressDisplayOptions: [
					{
						left: 50,
						right: null,
						bottom: null,
						top: null,
						width: 50,
						height: 100,
						id: 0,
					},
				],
				sortedHandles: [
					{
						...defaultHandle,
						id: 1,
						value: 50,
					},
					{
						...defaultHandle,
						value: 100,
					},
				],
				maxValueLabelDisplay: false,
			}),
		);

		clickAreaX(70);

		expect(normalizedState$()).toStrictEqual(
			assign(expectedState, {
				values: [100, 70],
				sortedValues: [70, 100],
				handleDisplayOptions: [
					{
						left: 100,
						top: null,
					},
					{
						left: 70,
						top: null,
					},
				],
				combinedLabelPositionLeft: 85,
				progressDisplayOptions: [
					{
						left: 70,
						right: null,
						bottom: null,
						top: null,
						width: 30,
						height: 100,
						id: 0,
					},
				],
				sortedHandles: [
					{
						...defaultHandle,
						id: 1,
						value: 70,
					},
					{
						...defaultHandle,
						value: 100,
					},
				],
			}),
		);
	});

	test(`should merge the handle labels when the handles are too close`, () => {
		slider.patch({
			values: [45, 50],
		});
		const expectedState = defaultState();

		expect(normalizedState$()).toStrictEqual(
			assign(expectedState, {
				values: [45, 50],
				sortedValues: [45, 50],
				handleDisplayOptions: [
					{
						left: 45,
						top: null,
					},
					{
						left: 50,
						top: null,
					},
				],
				combinedLabelPositionLeft: 47.5,
				progressDisplayOptions: [
					{
						left: 45,
						right: null,
						bottom: null,
						top: null,
						width: 5,
						height: 100,
						id: 0,
					},
				],
				sortedHandles: [
					{
						...defaultHandle,
						value: 45,
					},
					{
						...defaultHandle,
						id: 1,
						value: 50,
					},
				],
				minValueLabelDisplay: true,
				combinedLabelDisplay: true,
			}),
		);

		clickAreaX(70);

		expect(normalizedState$()).toStrictEqual(
			assign(expectedState, {
				values: [45, 70],
				sortedValues: [45, 70],
				handleDisplayOptions: [
					{
						left: 45,
						top: null,
					},
					{
						left: 70,
						top: null,
					},
				],
				combinedLabelPositionLeft: 57.5,
				progressDisplayOptions: [
					{
						left: 45,
						right: null,
						bottom: null,
						top: null,
						width: 25,
						height: 100,
						id: 0,
					},
				],
				sortedHandles: [
					{
						...defaultHandle,
						value: 45,
					},
					{
						...defaultHandle,
						id: 1,
						value: 70,
					},
				],
				minValueLabelDisplay: true,
				combinedLabelDisplay: false,
			}),
		);
	});

	test(`should merge the handle labels when the handles are too close for large scale numbers`, () => {
		slider.patch({
			max: 1_000_000,
			values: [1_000, 50_000],
		});
		const expectedState = defaultState();
		expect(normalizedState$()).toStrictEqual(
			assign(expectedState, {
				values: [1_000, 50_000],
				sortedValues: [1_000, 50_000],
				handleDisplayOptions: [
					{
						left: 0.1,
						top: null,
					},
					{
						left: 5,
						top: null,
					},
				],
				combinedLabelPositionLeft: 2.55,
				progressDisplayOptions: [
					{
						left: 0.1,
						right: null,
						bottom: null,
						top: null,
						width: 4.9,
						height: 100,
						id: 0,
					},
				],
				sortedHandles: [
					{
						...defaultHandle,
						value: 1000,
					},
					{
						...defaultHandle,
						id: 1,
						value: 50000,
					},
				],
				combinedLabelDisplay: true,
				max: 1000000,
			}),
		);

		slider.patch({
			values: [1_000, 700_000],
		});

		expect(normalizedState$()).toStrictEqual(
			assign(expectedState, {
				combinedLabelDisplay: false,
				combinedLabelPositionLeft: 35.05,
				handleDisplayOptions: [
					{
						left: 0.1,
						top: null,
					},
					{
						left: 70,
						top: null,
					},
				],
				progressDisplayOptions: [
					{
						bottom: null,
						height: 100,
						left: 0.1,
						right: null,
						top: null,
						width: 69.9,
						id: 0,
					},
				],
				sortedValues: [1000, 700000],
				values: [1000, 700000],
				sortedHandles: [
					{
						...defaultHandle,
						value: 1000,
					},
					{
						...defaultHandle,
						id: 1,
						value: 700000,
					},
				],
			}),
		);
	});

	test(`should properly set the state for RTL case`, () => {
		slider.patch({
			values: [10, 50],
			rtl: true,
		});
		const expectedState = defaultState();

		expect(normalizedState$()).toStrictEqual(
			assign(expectedState, {
				values: [10, 50],
				sortedValues: [10, 50],
				handleDisplayOptions: [
					{
						left: 90,
						top: null,
					},
					{
						left: 50,
						top: null,
					},
				],
				combinedLabelPositionLeft: 70,
				progressDisplayOptions: [
					{
						left: null,
						right: 10,
						bottom: null,
						top: null,
						width: 40,
						height: 100,
						id: 0,
					},
				],
				rtl: true,
				sortedHandles: [
					{
						...defaultHandle,
						value: 10,
					},
					{
						...defaultHandle,
						id: 1,
						value: 50,
					},
				],
				minValueLabelDisplay: true,
			}),
		);
	});

	test(`should properly assign aria values for the handles`, () => {
		slider.patch({
			values: [10, 50],
			ariaLabel: (index: number) => {
				if (index == 0) {
					return 'Min value';
				} else {
					return 'Max value';
				}
			},
			ariaLabelledBy: (index: number) => {
				if (index == 0) {
					return 'minLabel';
				} else {
					return 'maxLabel';
				}
			},
			ariaValueText: (value: number, index: number) => {
				if (index == 0) {
					return `Min value ${value}`;
				} else {
					return `Max value ${value}`;
				}
			},
		});
		const expectedState = defaultState();

		expect(normalizedState$()).toStrictEqual(
			assign(expectedState, {
				values: [10, 50],
				sortedValues: [10, 50],
				handleDisplayOptions: [
					{
						left: 10,
						top: null,
					},
					{
						left: 50,
						top: null,
					},
				],
				combinedLabelPositionLeft: 30,
				progressDisplayOptions: [
					{
						left: 10,
						right: null,
						bottom: null,
						top: null,
						width: 40,
						height: 100,
						id: 0,
					},
				],
				sortedHandles: [
					{
						...defaultHandle,
						value: 10,
						ariaLabel: undefined,
						ariaLabelledBy: 'minLabel',
						ariaValueText: 'Min value 10',
					},
					{
						...defaultHandle,
						id: 1,
						value: 50,
						ariaLabel: undefined,
						ariaLabelledBy: 'maxLabel',
						ariaValueText: 'Max value 50',
					},
				],
				minValueLabelDisplay: true,
			}),
		);
	});
});

describe(`Slider vertical`, () => {
	let slider: SliderWidget;
	let normalizedState$: ReadableSignal<SliderState>;
	let defConfig: WritableSignal<Partial<SliderProps>>;

	const useKeyOnHandle = (key: string, handleId = 0) => {
		attachDirectiveAndSendEvent(slider.directives.handleEventsDirective, {item: {id: handleId}}, (node) => node.dispatchEvent(keyboardEvent(key)));
	};

	beforeEach(() => {
		defConfig = writable({});
		slider = createSlider({config: computed(() => ({...defConfig()}))});
		const sliderElement = document.createElement('div');
		vi.spyOn(sliderElement, 'getBoundingClientRect').mockReturnValue({x: 10, y: 0, width: 4, height: 100, top: 0, left: 0} as DOMRect);
		const minLabel = document.createElement('div');
		vi.spyOn(minLabel, 'getBoundingClientRect').mockReturnValue({x: 20, y: 0, width: 3, height: 4} as DOMRect);
		const maxLabel = document.createElement('div');
		vi.spyOn(maxLabel, 'getBoundingClientRect').mockReturnValue({x: 20, y: 100, width: 3, height: 4} as DOMRect);
		const sliderDirective = slider.directives.sliderDirective(sliderElement);
		const minLabelDirective = slider.directives.minLabelDirective(minLabel);
		const maxLabelDirective = slider.directives.maxLabelDirective(maxLabel);
		slider.patch({
			values: [30],
			vertical: true,
		});
		normalizedState$ = computed(() => {
			return normalizeState(slider.state$());
		});

		return () => {
			sliderDirective!.destroy?.();
			minLabelDirective!.destroy?.();
			maxLabelDirective!.destroy?.();
		};
	});

	test(`should calculate the clicked percent from the bottom to the top of the slider`, () => {
		const expectedState = defaultState();

		expect(normalizedState$()).toStrictEqual(
			assign(expectedState, {
				handleDisplayOptions: [
					{
						left: null,
						top: 70,
					},
				],
				progressDisplayOptions: [
					{
						...expectedState.progressDisplayOptions[0],
						height: 30,
						width: 100,
						bottom: 0,
						left: null,
					},
				],
				vertical: true,
				minValueLabelDisplay: true,
				values: [30],
				sortedValues: [30],
				sortedHandles: [
					{
						...defaultHandle,
						value: 30,
					},
				],
			}),
		);
	});

	test(`should properly set the state for RTL case`, () => {
		slider.patch({
			rtl: true,
		});
		const expectedState = defaultState();

		expect(normalizedState$()).toStrictEqual(
			assign(expectedState, {
				handleDisplayOptions: [
					{
						left: null,
						top: 30,
					},
				],
				progressDisplayOptions: [
					{
						...expectedState.progressDisplayOptions[0],
						height: 30,
						width: 100,
						top: 0,
						left: null,
					},
				],
				vertical: true,
				minValueLabelDisplay: true,
				values: [30],
				sortedValues: [30],
				sortedHandles: [
					{
						...defaultHandle,
						value: 30,
					},
				],
				rtl: true,
			}),
		);
	});

	test(`should properly handle keyboard in LTR case`, () => {
		const expectedState = defaultState();

		expect(normalizedState$()).toStrictEqual(
			assign(expectedState, {
				handleDisplayOptions: [
					{
						left: null,
						top: 70,
					},
				],
				progressDisplayOptions: [
					{
						...expectedState.progressDisplayOptions[0],
						height: 30,
						width: 100,
						bottom: 0,
						left: null,
					},
				],
				vertical: true,
				minValueLabelDisplay: true,
				values: [30],
				sortedValues: [30],
				sortedHandles: [
					{
						...defaultHandle,
						value: 30,
					},
				],
			}),
		);

		useKeyOnHandle('ArrowDown');

		expect(normalizedState$()).toStrictEqual(
			assign(expectedState, {
				handleDisplayOptions: [
					{
						left: null,
						top: 71,
					},
				],
				progressDisplayOptions: [
					{
						...expectedState.progressDisplayOptions[0],
						height: 29,
						width: 100,
						bottom: 0,
						left: null,
					},
				],
				values: [29],
				sortedValues: [29],
				sortedHandles: [
					{
						...defaultHandle,
						value: 29,
					},
				],
			}),
		);

		useKeyOnHandle('ArrowRight');

		expect(normalizedState$()).toStrictEqual(
			assign(expectedState, {
				handleDisplayOptions: [
					{
						left: null,
						top: 70,
					},
				],
				progressDisplayOptions: [
					{
						...expectedState.progressDisplayOptions[0],
						height: 30,
						width: 100,
						bottom: 0,
						left: null,
					},
				],
				values: [30],
				sortedValues: [30],
				sortedHandles: [
					{
						...defaultHandle,
						value: 30,
					},
				],
			}),
		);

		useKeyOnHandle('ArrowUp');

		expect(normalizedState$()).toStrictEqual(
			assign(expectedState, {
				handleDisplayOptions: [
					{
						left: null,
						top: 69,
					},
				],
				progressDisplayOptions: [
					{
						...expectedState.progressDisplayOptions[0],
						height: 31,
						width: 100,
						bottom: 0,
						left: null,
					},
				],
				values: [31],
				sortedValues: [31],
				sortedHandles: [
					{
						...defaultHandle,
						value: 31,
					},
				],
			}),
		);

		useKeyOnHandle('ArrowLeft');

		expect(normalizedState$()).toStrictEqual(
			assign(expectedState, {
				handleDisplayOptions: [
					{
						left: null,
						top: 70,
					},
				],
				progressDisplayOptions: [
					{
						...expectedState.progressDisplayOptions[0],
						height: 30,
						width: 100,
						bottom: 0,
						left: null,
					},
				],
				values: [30],
				sortedValues: [30],
				sortedHandles: [
					{
						...defaultHandle,
						value: 30,
					},
				],
			}),
		);
	});

	test(`should properly handle keyboard in RTL case`, () => {
		slider.patch({
			rtl: true,
		});
		const expectedState = defaultState();

		expect(normalizedState$()).toStrictEqual(
			assign(expectedState, {
				handleDisplayOptions: [
					{
						left: null,
						top: 30,
					},
				],
				progressDisplayOptions: [
					{
						...expectedState.progressDisplayOptions[0],
						height: 30,
						width: 100,
						top: 0,
						left: null,
					},
				],
				vertical: true,
				minValueLabelDisplay: true,
				values: [30],
				sortedValues: [30],
				sortedHandles: [
					{
						...defaultHandle,
						value: 30,
					},
				],
				rtl: true,
			}),
		);

		useKeyOnHandle('ArrowDown');

		expect(normalizedState$()).toStrictEqual(
			assign(expectedState, {
				handleDisplayOptions: [
					{
						left: null,
						top: 31,
					},
				],
				progressDisplayOptions: [
					{
						...expectedState.progressDisplayOptions[0],
						height: 31,
						width: 100,
						top: 0,
						left: null,
					},
				],
				values: [31],
				sortedValues: [31],
				sortedHandles: [
					{
						...defaultHandle,
						value: 31,
					},
				],
			}),
		);

		useKeyOnHandle('ArrowRight');

		expect(normalizedState$()).toStrictEqual(
			assign(expectedState, {
				handleDisplayOptions: [
					{
						left: null,
						top: 32,
					},
				],
				progressDisplayOptions: [
					{
						...expectedState.progressDisplayOptions[0],
						height: 32,
						width: 100,
						top: 0,
						left: null,
					},
				],
				values: [32],
				sortedValues: [32],
				sortedHandles: [
					{
						...defaultHandle,
						value: 32,
					},
				],
			}),
		);

		useKeyOnHandle('ArrowUp');

		expect(normalizedState$()).toStrictEqual(
			assign(expectedState, {
				handleDisplayOptions: [
					{
						left: null,
						top: 31,
					},
				],
				progressDisplayOptions: [
					{
						...expectedState.progressDisplayOptions[0],
						height: 31,
						width: 100,
						top: 0,
						left: null,
					},
				],
				values: [31],
				sortedValues: [31],
				sortedHandles: [
					{
						...defaultHandle,
						value: 31,
					},
				],
			}),
		);

		useKeyOnHandle('ArrowLeft');

		expect(normalizedState$()).toStrictEqual(
			assign(expectedState, {
				handleDisplayOptions: [
					{
						left: null,
						top: 30,
					},
				],
				progressDisplayOptions: [
					{
						...expectedState.progressDisplayOptions[0],
						height: 30,
						width: 100,
						top: 0,
						left: null,
					},
				],
				values: [30],
				sortedValues: [30],
				sortedHandles: [
					{
						...defaultHandle,
						value: 30,
					},
				],
			}),
		);
	});
});
