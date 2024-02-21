import type {WritableSignal} from '@amadeus-it-group/tansu';
import {computed, writable} from '@amadeus-it-group/tansu';
import {beforeEach, describe, expect, test, vi} from 'vitest';
import type {HandleDisplayOptions, ProgressDisplayOptions, SliderProps, SliderWidget} from './slider';
import {createSlider} from './slider';
import type {WidgetState} from '../../types';
import {assign} from '../../../../common/utils';

// TODO move to the utils?
function keyboardEvent(key: string): KeyboardEvent {
	return new KeyboardEvent('keydown', {key});
}

const defaultStateValues = {
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
	sortedHandles: [{id: 0, value: 0, ariaLabel: '0', ariaValueText: '0'}],
	className: '',
	isInteractable: true,
	showMinMaxLabels: true,
	showValueLabels: true,
	rtl: false,
};

describe(`Slider basic`, () => {
	let slider: SliderWidget;
	let state: WidgetState<SliderWidget>;
	let defConfig: WritableSignal<Partial<SliderProps>>;

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
		const unsubscribe = slider.state$.subscribe((newState) => {
			state = newState;
		});

		return () => {
			sliderDirective!.destroy?.();
			minLabelDirective!.destroy?.();
			maxLabelDirective!.destroy?.();
			unsubscribe();
		};
	});

	test(`should create the default configuration for the model`, () => {
		expect(state).toStrictEqual(defaultStateValues);
	});

	test(`should recompute clean value if min has changed`, () => {
		const expectedStateValue = {...defaultStateValues};
		expect(state).toStrictEqual(expectedStateValue);

		slider.patch({
			min: 50,
		});

		expect(state).toStrictEqual(
			assign(expectedStateValue, {
				min: 50,
				values: [50],
				sortedValues: [50],
				handleDisplayOptions: [
					{
						...expectedStateValue.handleDisplayOptions[0],
						left: 0,
					},
				],
				sortedHandles: [
					{
						id: 0,
						value: 50,
						ariaLabel: '50',
						ariaValueText: '50',
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
					},
				],
			}),
		);

		expect(state).toStrictEqual(expectedStateValue);
	});

	test(`should recompute clean value if max has changed`, () => {
		slider.patch({
			values: [60],
		});

		const expectedStateValue = {...defaultStateValues};

		expect(state).toStrictEqual(
			assign(expectedStateValue, {
				values: [60],
				sortedValues: [60],
				handleDisplayOptions: [
					{
						...expectedStateValue.handleDisplayOptions[0],
						left: 60,
					},
				],
				sortedHandles: [
					{
						id: 0,
						value: 60,
						ariaLabel: '60',
						ariaValueText: '60',
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
					},
				],
			}),
		);

		slider.patch({
			max: 50,
		});

		expect(state).toStrictEqual(
			assign(expectedStateValue, {
				max: 50,
				values: [50],
				sortedValues: [50],
				handleDisplayOptions: [
					{
						...expectedStateValue.handleDisplayOptions[0],
						left: 100,
					},
				],
				sortedHandles: [
					{
						id: 0,
						value: 50,
						ariaLabel: '50',
						ariaValueText: '50',
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
					},
				],
			}),
		);
	});

	test(`should recompute clean value if stepSize has changed`, () => {
		slider.patch({
			values: [60],
		});

		const expectedStateValue = {...defaultStateValues};

		expect(state).toStrictEqual(
			assign(expectedStateValue, {
				values: [60],
				sortedValues: [60],
				handleDisplayOptions: [
					{
						...expectedStateValue.handleDisplayOptions[0],
						left: 60,
					},
				],
				sortedHandles: [
					{
						id: 0,
						value: 60,
						ariaLabel: '60',
						ariaValueText: '60',
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
					},
				],
			}),
		);

		slider.patch({
			stepSize: 25,
		});

		expect(state).toStrictEqual(
			assign(expectedStateValue, {
				stepSize: 25,
				values: [50],
				sortedValues: [50],
				handleDisplayOptions: [
					{
						...expectedStateValue.handleDisplayOptions[0],
						left: 50,
					},
				],
				sortedHandles: [
					{
						id: 0,
						value: 50,
						ariaLabel: '50',
						ariaValueText: '50',
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

		const expectedStateValue = {...defaultStateValues};
		expect(state).toStrictEqual(
			assign(expectedStateValue, {
				min: 100,
				max: 200,
				stepSize: 25,
				values: [150],
				sortedValues: [150],
				handleDisplayOptions: [
					{
						...expectedStateValue.handleDisplayOptions[0],
						left: 50,
					},
				],
				sortedHandles: [
					{
						id: 0,
						value: 150,
						ariaLabel: '150',
						ariaValueText: '150',
					},
				],
				minValueLabelDisplay: true,
				progressDisplayOptions: [
					{
						...expectedStateValue.progressDisplayOptions[0],
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

		expect(state).toStrictEqual(defaultStateValues);
	});

	test(`should set min as defaultMinValue and max as defaultMaxValue if provided values are the same`, () => {
		slider.patch({
			min: 100,
			max: 100,
		});

		expect(state).toStrictEqual(defaultStateValues);
	});

	test(`shouldn't accept 0 as a valid value`, () => {
		slider.patch({
			stepSize: 0,
		});

		expect(state).toStrictEqual(defaultStateValues);
	});

	test(`should snap the value to the valid step`, () => {
		slider.patch({
			stepSize: 25,
			values: [60],
		});
		const expectedStateValue = {...defaultStateValues};

		expect(state).toStrictEqual(
			assign(expectedStateValue, {
				stepSize: 25,
				values: [50],
				sortedValues: [50],
				handleDisplayOptions: [
					{
						...expectedStateValue.handleDisplayOptions[0],
						left: 50,
					},
				],
				sortedHandles: [
					{
						id: 0,
						value: 50,
						ariaLabel: '50',
						ariaValueText: '50',
					},
				],
				minValueLabelDisplay: true,
				progressDisplayOptions: [
					{
						...expectedStateValue.progressDisplayOptions[0],
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

		const expectedStateValue = {...defaultStateValues};

		expect(state).toStrictEqual(
			assign(expectedStateValue, {
				values: [50],
				sortedValues: [50],
				handleDisplayOptions: [
					{
						...expectedStateValue.handleDisplayOptions[0],
						left: 50,
					},
				],
				sortedHandles: [
					{
						id: 0,
						value: 50,
						ariaLabel: '50',
						ariaValueText: '50',
					},
				],
				minValueLabelDisplay: true,
				progressDisplayOptions: [
					{
						...expectedStateValue.progressDisplayOptions[0],
						width: 50,
					},
				],
			}),
		);

		slider.actions.click(new MouseEvent('click', {clientX: 0}));

		expect(state).toStrictEqual(
			assign(expectedStateValue, {
				values: [0],
				sortedValues: [0],
				handleDisplayOptions: [
					{
						...expectedStateValue.handleDisplayOptions[0],
						left: 0,
					},
				],
				sortedHandles: [
					{
						id: 0,
						value: 0,
						ariaLabel: '0',
						ariaValueText: '0',
					},
				],
				minValueLabelDisplay: false,
				progressDisplayOptions: [
					{
						...expectedStateValue.progressDisplayOptions[0],
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

		const expectedStateValue = {...defaultStateValues};

		expect(state).toStrictEqual(
			assign(expectedStateValue, {
				values: [50],
				sortedValues: [50],
				handleDisplayOptions: [
					{
						...expectedStateValue.handleDisplayOptions[0],
						left: 50,
					},
				],
				sortedHandles: [
					{
						id: 0,
						value: 50,
						ariaLabel: '50',
						ariaValueText: '50',
					},
				],
				minValueLabelDisplay: false,
				maxValueLabelDisplay: false,
				showMinMaxLabels: false,
				progressDisplayOptions: [
					{
						...expectedStateValue.progressDisplayOptions[0],
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

		const expectedStateValue = {...defaultStateValues};

		expect(state).toStrictEqual(
			assign(expectedStateValue, {
				showValueLabels: false,
				minValueLabelDisplay: true,
			}),
		);
	});

	test(`should set handle to 100 and hide the max label when clicked outside the slider on the right side`, () => {
		slider.actions.click(new MouseEvent('click', {clientX: 120}));

		const expectedStateValue = {...defaultStateValues};

		expect(state).toStrictEqual(
			assign(expectedStateValue, {
				values: [100],
				sortedValues: [100],
				handleDisplayOptions: [
					{
						...expectedStateValue.handleDisplayOptions[0],
						left: 100,
					},
				],
				sortedHandles: [
					{
						id: 0,
						value: 100,
						ariaLabel: '100',
						ariaValueText: '100',
					},
				],
				minValueLabelDisplay: true,
				maxValueLabelDisplay: false,
				progressDisplayOptions: [
					{
						...expectedStateValue.progressDisplayOptions[0],
						width: 100,
					},
				],
			}),
		);
	});

	test(`should set handle to a proper percent when clicked inside the slider`, () => {
		slider.actions.click(new MouseEvent('click', {clientX: 70}));

		const expectedStateValue = {...defaultStateValues};

		expect(state).toStrictEqual(
			assign(expectedStateValue, {
				values: [70],
				sortedValues: [70],
				handleDisplayOptions: [
					{
						...expectedStateValue.handleDisplayOptions[0],
						left: 70,
					},
				],
				sortedHandles: [
					{
						id: 0,
						value: 70,
						ariaLabel: '70',
						ariaValueText: '70',
					},
				],
				minValueLabelDisplay: true,
				progressDisplayOptions: [
					{
						...expectedStateValue.progressDisplayOptions[0],
						width: 70,
					},
				],
			}),
		);
	});

	test(`should not go below minimum on arrow left and down arrow key stroke`, () => {
		slider.actions.keydown(keyboardEvent('ArrowDown'), 0);

		const expectedStateValue = {...defaultStateValues};

		expect(state).toStrictEqual(
			assign(expectedStateValue, {
				values: [0],
				sortedValues: [0],
				handleDisplayOptions: [
					{
						...expectedStateValue.handleDisplayOptions[0],
						left: 0,
					},
				],
				sortedHandles: [
					{
						id: 0,
						value: 0,
						ariaLabel: '0',
						ariaValueText: '0',
					},
				],
				minValueLabelDisplay: false,
				progressDisplayOptions: [
					{
						...expectedStateValue.progressDisplayOptions[0],
						width: 0,
					},
				],
			}),
		);

		slider.actions.keydown(keyboardEvent('ArrowLeft'), 0);

		expect(state).toStrictEqual(expectedStateValue);
	});

	test(`should decrease the handle value on left and down arrow key stroke`, () => {
		slider.patch({
			values: [50],
		});

		const expectedStateValue = {...defaultStateValues};

		expect(state).toStrictEqual(
			assign(expectedStateValue, {
				values: [50],
				sortedValues: [50],
				handleDisplayOptions: [
					{
						...expectedStateValue.handleDisplayOptions[0],
						left: 50,
					},
				],
				sortedHandles: [
					{
						id: 0,
						value: 50,
						ariaLabel: '50',
						ariaValueText: '50',
					},
				],
				minValueLabelDisplay: true,
				progressDisplayOptions: [
					{
						...expectedStateValue.progressDisplayOptions[0],
						width: 50,
					},
				],
			}),
		);

		slider.actions.keydown(keyboardEvent('ArrowDown'), 0);

		expect(state).toStrictEqual(
			assign(expectedStateValue, {
				values: [49],
				sortedValues: [49],
				handleDisplayOptions: [
					{
						...expectedStateValue.handleDisplayOptions[0],
						left: 49,
					},
				],
				sortedHandles: [
					{
						id: 0,
						value: 49,
						ariaLabel: '49',
						ariaValueText: '49',
					},
				],
				progressDisplayOptions: [
					{
						...expectedStateValue.progressDisplayOptions[0],
						width: 49,
					},
				],
			}),
		);

		slider.actions.keydown(keyboardEvent('ArrowLeft'), 0);

		expect(state).toStrictEqual(
			assign(expectedStateValue, {
				values: [48],
				sortedValues: [48],
				handleDisplayOptions: [
					{
						...expectedStateValue.handleDisplayOptions[0],
						left: 48,
					},
				],
				sortedHandles: [
					{
						id: 0,
						value: 48,
						ariaLabel: '48',
						ariaValueText: '48',
					},
				],
				progressDisplayOptions: [
					{
						...expectedStateValue.progressDisplayOptions[0],
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

		slider.actions.keydown(keyboardEvent('ArrowUp'), 0);

		const expectedStateValue = {...defaultStateValues};

		expect(state).toStrictEqual(
			assign(expectedStateValue, {
				values: [100],
				sortedValues: [100],
				handleDisplayOptions: [
					{
						...expectedStateValue.handleDisplayOptions[0],
						left: 100,
					},
				],
				sortedHandles: [
					{
						id: 0,
						value: 100,
						ariaLabel: '100',
						ariaValueText: '100',
					},
				],
				minValueLabelDisplay: true,
				maxValueLabelDisplay: false,
				progressDisplayOptions: [
					{
						...expectedStateValue.progressDisplayOptions[0],
						width: 100,
					},
				],
			}),
		);

		slider.actions.keydown(keyboardEvent('ArrowRight'), 0);

		expect(state).toStrictEqual(expectedStateValue);
	});

	test(`should increase the handle value on right and up arrow key stroke`, () => {
		slider.patch({
			values: [50],
		});

		const expectedStateValue = {...defaultStateValues};

		expect(state).toStrictEqual(
			assign(expectedStateValue, {
				values: [50],
				sortedValues: [50],
				handleDisplayOptions: [
					{
						...expectedStateValue.handleDisplayOptions[0],
						left: 50,
					},
				],
				sortedHandles: [
					{
						id: 0,
						value: 50,
						ariaLabel: '50',
						ariaValueText: '50',
					},
				],
				minValueLabelDisplay: true,
				progressDisplayOptions: [
					{
						...expectedStateValue.progressDisplayOptions[0],
						width: 50,
					},
				],
			}),
		);

		slider.actions.keydown(keyboardEvent('ArrowUp'), 0);

		expect(state).toStrictEqual(
			assign(expectedStateValue, {
				values: [51],
				sortedValues: [51],
				handleDisplayOptions: [
					{
						...expectedStateValue.handleDisplayOptions[0],
						left: 51,
					},
				],
				sortedHandles: [
					{
						id: 0,
						value: 51,
						ariaLabel: '51',
						ariaValueText: '51',
					},
				],
				progressDisplayOptions: [
					{
						...expectedStateValue.progressDisplayOptions[0],
						width: 51,
					},
				],
			}),
		);

		slider.actions.keydown(keyboardEvent('ArrowRight'), 0);

		expect(state).toStrictEqual(
			assign(expectedStateValue, {
				values: [52],
				sortedValues: [52],
				handleDisplayOptions: [
					{
						...expectedStateValue.handleDisplayOptions[0],
						left: 52,
					},
				],
				sortedHandles: [
					{
						id: 0,
						value: 52,
						ariaLabel: '52',
						ariaValueText: '52',
					},
				],
				progressDisplayOptions: [
					{
						...expectedStateValue.progressDisplayOptions[0],
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

		const expectedStateValue = {...defaultStateValues};

		expect(state).toStrictEqual(
			assign(expectedStateValue, {
				values: [50],
				sortedValues: [50],
				handleDisplayOptions: [
					{
						...expectedStateValue.handleDisplayOptions[0],
						left: 50,
					},
				],
				sortedHandles: [
					{
						id: 0,
						value: 50,
						ariaLabel: '50',
						ariaValueText: '50',
					},
				],
				minValueLabelDisplay: true,
				progressDisplayOptions: [
					{
						...expectedStateValue.progressDisplayOptions[0],
						width: 50,
					},
				],
			}),
		);

		slider.actions.keydown(keyboardEvent('Home'), 0);

		expect(state).toStrictEqual(
			assign(expectedStateValue, {
				values: [0],
				sortedValues: [0],
				handleDisplayOptions: [
					{
						...expectedStateValue.handleDisplayOptions[0],
						left: 0,
					},
				],
				sortedHandles: [
					{
						id: 0,
						value: 0,
						ariaLabel: '0',
						ariaValueText: '0',
					},
				],
				minValueLabelDisplay: false,
				progressDisplayOptions: [
					{
						...expectedStateValue.progressDisplayOptions[0],
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

		const expectedStateValue = {...defaultStateValues};

		expect(state).toStrictEqual(
			assign(expectedStateValue, {
				values: [50],
				sortedValues: [50],
				handleDisplayOptions: [
					{
						...expectedStateValue.handleDisplayOptions[0],
						left: 50,
					},
				],
				sortedHandles: [
					{
						id: 0,
						value: 50,
						ariaLabel: '50',
						ariaValueText: '50',
					},
				],
				minValueLabelDisplay: true,
				progressDisplayOptions: [
					{
						...expectedStateValue.progressDisplayOptions[0],
						width: 50,
					},
				],
			}),
		);

		slider.actions.keydown(keyboardEvent('End'), 0);

		expect(state).toStrictEqual(
			assign(expectedStateValue, {
				values: [100],
				sortedValues: [100],
				handleDisplayOptions: [
					{
						...expectedStateValue.handleDisplayOptions[0],
						left: 100,
					},
				],
				sortedHandles: [
					{
						id: 0,
						value: 100,
						ariaLabel: '100',
						ariaValueText: '100',
					},
				],
				maxValueLabelDisplay: false,
				progressDisplayOptions: [
					{
						...expectedStateValue.progressDisplayOptions[0],
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

		const expectedStateValue = {...defaultStateValues};

		expect(state).toStrictEqual(
			assign(expectedStateValue, {
				isInteractable: false,
				disabled: true,
			}),
		);

		expect(state).toStrictEqual(expectedStateValue);

		slider.actions.click(new MouseEvent('click', {clientX: 50}));

		expect(state).toStrictEqual(expectedStateValue);

		slider.actions.keydown(keyboardEvent('Home'), 0);

		expect(state).toStrictEqual(expectedStateValue);
	});

	test(`should not change handle with actions if the slider is readonly`, () => {
		slider.patch({
			readonly: true,
		});

		const expectedStateValue = {...defaultStateValues};

		expect(state).toStrictEqual(
			assign(expectedStateValue, {
				isInteractable: false,
				readonly: true,
			}),
		);

		expect(state).toStrictEqual(expectedStateValue);

		slider.actions.click(new MouseEvent('click', {clientX: 50}));

		expect(state).toStrictEqual(expectedStateValue);

		slider.actions.keydown(keyboardEvent('Home'), 0);

		expect(state).toStrictEqual(expectedStateValue);
	});

	test(`should correctly increment the handle value when the min is decimal and step is integer`, () => {
		slider.patch({
			min: 0.5,
			max: 3.5,
			values: [0.5],
		});

		const expectedStateValue = {...defaultStateValues};

		expect(state).toStrictEqual(
			assign(expectedStateValue, {
				min: 0.5,
				max: 3.5,
				values: [0.5],
				sortedValues: [0.5],
				sortedHandles: [
					{
						id: 0,
						value: 0.5,
						ariaLabel: '0.5',
						ariaValueText: '0.5',
					},
				],
			}),
		);

		slider.actions.keydown(keyboardEvent('ArrowUp'), 0);

		expect(state).toStrictEqual(
			assign(expectedStateValue, {
				minValueLabelDisplay: true,
				handleDisplayOptions: [
					{
						...expectedStateValue.handleDisplayOptions[0],
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
					},
				],
				values: [1.5],
				sortedValues: [1.5],
				sortedHandles: [
					{
						id: 0,
						value: 1.5,
						ariaLabel: '1.5',
						ariaValueText: '1.5',
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

		const expectedStateValue = {...defaultStateValues};

		expect(state).toStrictEqual(
			assign(expectedStateValue, {
				min: 0.5,
				max: 3,
				stepSize: 1,
				values: [3],
				sortedValues: [3],
				sortedHandles: [
					{
						id: 0,
						value: 3,
						ariaLabel: '3',
						ariaValueText: '3',
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
					},
				],
				handleDisplayOptions: [
					{
						...expectedStateValue.handleDisplayOptions[0],
						left: 100,
					},
				],
			}),
		);

		slider.actions.keydown(keyboardEvent('ArrowLeft'), 0);

		expect(state).toStrictEqual(
			assign(expectedStateValue, {
				handleDisplayOptions: [
					{
						...expectedStateValue.handleDisplayOptions[0],
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
					},
				],
				values: [2.5],
				sortedValues: [2.5],
				sortedHandles: [
					{
						id: 0,
						value: 2.5,
						ariaLabel: '2.5',
						ariaValueText: '2.5',
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

		const expectedStateValue = {...defaultStateValues};
		expect(state).toStrictEqual(
			assign(expectedStateValue, {
				min: 0.33,
				max: 5.55,
				stepSize: 0.2,
				values: [0.93],
				sortedValues: [0.93],
				sortedHandles: [
					{
						id: 0,
						value: 0.93,
						ariaLabel: '0.93',
						ariaValueText: '0.93',
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
					},
				],
				handleDisplayOptions: [
					{
						...expectedStateValue.handleDisplayOptions[0],
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

		const expectedStateValue = {...defaultStateValues};

		expect(state).toStrictEqual(
			assign(expectedStateValue, {
				rtl: true,
				progressDisplayOptions: [
					{
						...expectedStateValue.progressDisplayOptions[0],
						left: null,
						right: 0,
						bottom: null,
						top: null,
					},
				],
				handleDisplayOptions: [
					{
						...expectedStateValue.handleDisplayOptions[0],
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

		const expectedStateValue = {...defaultStateValues};

		expect(state).toStrictEqual(
			assign(expectedStateValue, {
				rtl: true,
				progressDisplayOptions: [
					{
						...expectedStateValue.progressDisplayOptions[0],
						left: null,
						right: 0,
						bottom: null,
						top: null,
					},
				],
				handleDisplayOptions: [
					{
						...expectedStateValue.handleDisplayOptions[0],
						left: 100,
					},
				],
			}),
		);

		slider.actions.keydown(keyboardEvent('ArrowUp'), 0);

		expect(state).toStrictEqual(
			assign(expectedStateValue, {
				progressDisplayOptions: [
					{
						...expectedStateValue.progressDisplayOptions[0],
						left: null,
						right: 0,
						bottom: null,
						top: null,
						width: 1,
					},
				],
				handleDisplayOptions: [
					{
						...expectedStateValue.handleDisplayOptions[0],
						left: 99,
					},
				],
				values: [1],
				sortedValues: [1],
				sortedHandles: [
					{
						id: 0,
						value: 1,
						ariaLabel: '1',
						ariaValueText: '1',
					},
				],
			}),
		);

		slider.actions.keydown(keyboardEvent('ArrowLeft'), 0);

		expect(state).toStrictEqual(
			assign(expectedStateValue, {
				progressDisplayOptions: [
					{
						...expectedStateValue.progressDisplayOptions[0],
						left: null,
						right: 0,
						bottom: null,
						top: null,
						width: 2,
					},
				],
				handleDisplayOptions: [
					{
						...expectedStateValue.handleDisplayOptions[0],
						left: 98,
					},
				],
				values: [2],
				sortedValues: [2],
				sortedHandles: [
					{
						id: 0,
						value: 2,
						ariaLabel: '2',
						ariaValueText: '2',
					},
				],
			}),
		);

		slider.actions.keydown(keyboardEvent('ArrowDown'), 0);

		expect(state).toStrictEqual(
			assign(expectedStateValue, {
				progressDisplayOptions: [
					{
						...expectedStateValue.progressDisplayOptions[0],
						left: null,
						right: 0,
						bottom: null,
						top: null,
						width: 1,
					},
				],
				handleDisplayOptions: [
					{
						...expectedStateValue.handleDisplayOptions[0],
						left: 99,
					},
				],
				values: [1],
				sortedValues: [1],
				sortedHandles: [
					{
						id: 0,
						value: 1,
						ariaLabel: '1',
						ariaValueText: '1',
					},
				],
			}),
		);

		slider.actions.keydown(keyboardEvent('ArrowRight'), 0);

		expect(state).toStrictEqual(
			assign(expectedStateValue, {
				progressDisplayOptions: [
					{
						...expectedStateValue.progressDisplayOptions[0],
						left: null,
						right: 0,
						bottom: null,
						top: null,
						width: 0,
					},
				],
				handleDisplayOptions: [
					{
						...expectedStateValue.handleDisplayOptions[0],
						left: 100,
					},
				],
				values: [0],
				sortedValues: [0],
				sortedHandles: [
					{
						id: 0,
						value: 0,
						ariaLabel: '0',
						ariaValueText: '0',
					},
				],
			}),
		);
	});
});

describe(`Slider range`, () => {
	let slider: SliderWidget;
	let state: WidgetState<SliderWidget>;
	let defConfig: WritableSignal<Partial<SliderProps>>;

	beforeEach(() => {
		defConfig = writable({});
		slider = createSlider({config: computed(() => ({...defConfig()}))});
		const sliderElement = document.createElement('div');
		vi.spyOn(sliderElement, 'getBoundingClientRect').mockReturnValue({x: 10, y: 0, width: 100, height: 4, top: 0, left: 0} as DOMRect);
		const minLabel = document.createElement('div');
		vi.spyOn(minLabel, 'getBoundingClientRect').mockReturnValue({x: 10, y: 5, width: 3, height: 4} as DOMRect);
		const maxLabel = document.createElement('div');
		vi.spyOn(maxLabel, 'getBoundingClientRect').mockReturnValue({x: 100, y: 5, width: 3, height: 4} as DOMRect);
		const sliderDirective = slider.directives.sliderDirective(sliderElement);
		const minLabelDirective = slider.directives.minLabelDirective(minLabel);
		const maxLabelDirective = slider.directives.maxLabelDirective(maxLabel);
		const unsubscribe = slider.state$.subscribe((newState) => {
			state = newState;
		});

		return () => {
			sliderDirective!.destroy?.();
			minLabelDirective!.destroy?.();
			maxLabelDirective!.destroy?.();
			unsubscribe();
		};
	});

	test(`should create the configuration for the model based on input`, () => {
		slider.patch({
			min: 100,
			max: 200,
			stepSize: 25,
			values: [150, 175],
		});
		const expectedStateValue = {...defaultStateValues};
		expect(state).toStrictEqual(
			assign(expectedStateValue, {
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
					},
				],
				sortedHandles: [
					{
						id: 0,
						value: 150,
						ariaLabel: '150',
						ariaValueText: '150',
					},
					{
						id: 1,
						value: 175,
						ariaLabel: '175',
						ariaValueText: '175',
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
		const expectedStateValue = {...defaultStateValues};

		expect(state).toStrictEqual(
			assign(expectedStateValue, {
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
					},
				],
				sortedHandles: [
					{
						id: 0,
						value: 10,
						ariaLabel: '10',
						ariaValueText: '10',
					},
					{
						id: 1,
						value: 50,
						ariaLabel: '50',
						ariaValueText: '50',
					},
				],
				minValueLabelDisplay: true,
			}),
		);

		slider.actions.click(new MouseEvent('click', {clientX: 60}));

		expect(state).toStrictEqual(
			assign(expectedStateValue, {
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
					},
				],
				sortedHandles: [
					{
						id: 0,
						value: 10,
						ariaLabel: '10',
						ariaValueText: '10',
					},
					{
						id: 1,
						value: 60,
						ariaLabel: '60',
						ariaValueText: '60',
					},
				],
			}),
		);
	});

	test(`should update the correct handles when they are reversed`, () => {
		slider.patch({
			values: [10, 50],
		});
		const expectedStateValue = {...defaultStateValues};

		expect(state).toStrictEqual(
			assign(expectedStateValue, {
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
					},
				],
				sortedHandles: [
					{
						id: 0,
						value: 10,
						ariaLabel: '10',
						ariaValueText: '10',
					},
					{
						id: 1,
						value: 50,
						ariaLabel: '50',
						ariaValueText: '50',
					},
				],
				minValueLabelDisplay: true,
			}),
		);

		slider.actions.keydown(keyboardEvent('End'), 0);

		expect(state).toStrictEqual(
			assign(expectedStateValue, {
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
					},
				],
				sortedHandles: [
					{
						id: 1,
						value: 50,
						ariaLabel: '50',
						ariaValueText: '50',
					},
					{
						id: 0,
						value: 100,
						ariaLabel: '100',
						ariaValueText: '100',
					},
				],
				maxValueLabelDisplay: false,
			}),
		);

		slider.actions.click(new MouseEvent('click', {clientX: 70}));

		expect(state).toStrictEqual(
			assign(expectedStateValue, {
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
					},
				],
				sortedHandles: [
					{
						id: 1,
						value: 70,
						ariaLabel: '70',
						ariaValueText: '70',
					},
					{
						id: 0,
						value: 100,
						ariaLabel: '100',
						ariaValueText: '100',
					},
				],
			}),
		);
	});

	test(`should merge the handle labels when the handles are too close`, () => {
		slider.patch({
			values: [45, 50],
		});
		const expectedStateValue = {...defaultStateValues};

		expect(state).toStrictEqual(
			assign(expectedStateValue, {
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
					},
				],
				sortedHandles: [
					{
						id: 0,
						value: 45,
						ariaLabel: '45',
						ariaValueText: '45',
					},
					{
						id: 1,
						value: 50,
						ariaLabel: '50',
						ariaValueText: '50',
					},
				],
				minValueLabelDisplay: true,
				combinedLabelDisplay: true,
			}),
		);

		slider.actions.click(new MouseEvent('click', {clientX: 70}));

		expect(state).toStrictEqual(
			assign(expectedStateValue, {
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
					},
				],
				sortedHandles: [
					{
						id: 0,
						value: 45,
						ariaLabel: '45',
						ariaValueText: '45',
					},
					{
						id: 1,
						value: 70,
						ariaLabel: '70',
						ariaValueText: '70',
					},
				],
				minValueLabelDisplay: true,
				combinedLabelDisplay: false,
			}),
		);
	});

	test(`should properly set the state for RTL case`, () => {
		slider.patch({
			values: [10, 50],
			rtl: true,
		});
		const expectedStateValue = {...defaultStateValues};

		expect(state).toStrictEqual(
			assign(expectedStateValue, {
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
					},
				],
				rtl: true,
				sortedHandles: [
					{
						id: 0,
						value: 10,
						ariaLabel: '10',
						ariaValueText: '10',
					},
					{
						id: 1,
						value: 50,
						ariaLabel: '50',
						ariaValueText: '50',
					},
				],
				minValueLabelDisplay: true,
			}),
		);
	});
});

describe(`Slider vertical`, () => {
	let slider: SliderWidget;
	let state: WidgetState<SliderWidget>;
	let defConfig: WritableSignal<Partial<SliderProps>>;

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
		const unsubscribe = slider.state$.subscribe((newState) => {
			state = newState;
		});

		return () => {
			sliderDirective!.destroy?.();
			minLabelDirective!.destroy?.();
			maxLabelDirective!.destroy?.();
			unsubscribe();
		};
	});

	test(`should calculate the clicked percent from the bottom to the top of the slider`, () => {
		const expectedStateValue = {...defaultStateValues};

		expect(state).toStrictEqual(
			assign(expectedStateValue, {
				handleDisplayOptions: [
					{
						left: null,
						top: 70,
					},
				],
				progressDisplayOptions: [
					{
						...expectedStateValue.progressDisplayOptions[0],
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
						id: 0,
						value: 30,
						ariaLabel: '30',
						ariaValueText: '30',
					},
				],
			}),
		);
	});

	test(`should properly set the state for RTL case`, () => {
		slider.patch({
			rtl: true,
		});
		const expectedStateValue = {...defaultStateValues};

		expect(state).toStrictEqual(
			assign(expectedStateValue, {
				handleDisplayOptions: [
					{
						left: null,
						top: 30,
					},
				],
				progressDisplayOptions: [
					{
						...expectedStateValue.progressDisplayOptions[0],
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
						id: 0,
						value: 30,
						ariaLabel: '30',
						ariaValueText: '30',
					},
				],
				rtl: true,
			}),
		);
	});

	test(`should properly handle keyboard in LTR case`, () => {
		const expectedStateValue = {...defaultStateValues};

		expect(state).toStrictEqual(
			assign(expectedStateValue, {
				handleDisplayOptions: [
					{
						left: null,
						top: 70,
					},
				],
				progressDisplayOptions: [
					{
						...expectedStateValue.progressDisplayOptions[0],
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
						id: 0,
						value: 30,
						ariaLabel: '30',
						ariaValueText: '30',
					},
				],
			}),
		);

		slider.actions.keydown(keyboardEvent('ArrowDown'), 0);

		expect(state).toStrictEqual(
			assign(expectedStateValue, {
				handleDisplayOptions: [
					{
						left: null,
						top: 71,
					},
				],
				progressDisplayOptions: [
					{
						...expectedStateValue.progressDisplayOptions[0],
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
						id: 0,
						value: 29,
						ariaLabel: '29',
						ariaValueText: '29',
					},
				],
			}),
		);

		slider.actions.keydown(keyboardEvent('ArrowRight'), 0);

		expect(state).toStrictEqual(
			assign(expectedStateValue, {
				handleDisplayOptions: [
					{
						left: null,
						top: 70,
					},
				],
				progressDisplayOptions: [
					{
						...expectedStateValue.progressDisplayOptions[0],
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
						id: 0,
						value: 30,
						ariaLabel: '30',
						ariaValueText: '30',
					},
				],
			}),
		);

		slider.actions.keydown(keyboardEvent('ArrowUp'), 0);

		expect(state).toStrictEqual(
			assign(expectedStateValue, {
				handleDisplayOptions: [
					{
						left: null,
						top: 69,
					},
				],
				progressDisplayOptions: [
					{
						...expectedStateValue.progressDisplayOptions[0],
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
						id: 0,
						value: 31,
						ariaLabel: '31',
						ariaValueText: '31',
					},
				],
			}),
		);

		slider.actions.keydown(keyboardEvent('ArrowLeft'), 0);

		expect(state).toStrictEqual(
			assign(expectedStateValue, {
				handleDisplayOptions: [
					{
						left: null,
						top: 70,
					},
				],
				progressDisplayOptions: [
					{
						...expectedStateValue.progressDisplayOptions[0],
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
						id: 0,
						value: 30,
						ariaLabel: '30',
						ariaValueText: '30',
					},
				],
			}),
		);
	});

	test(`should properly handle keyboard in RTL case`, () => {
		slider.patch({
			rtl: true,
		});
		const expectedStateValue = {...defaultStateValues};

		expect(state).toStrictEqual(
			assign(expectedStateValue, {
				handleDisplayOptions: [
					{
						left: null,
						top: 30,
					},
				],
				progressDisplayOptions: [
					{
						...expectedStateValue.progressDisplayOptions[0],
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
						id: 0,
						value: 30,
						ariaLabel: '30',
						ariaValueText: '30',
					},
				],
				rtl: true,
			}),
		);

		slider.actions.keydown(keyboardEvent('ArrowDown'), 0);

		expect(state).toStrictEqual(
			assign(expectedStateValue, {
				handleDisplayOptions: [
					{
						left: null,
						top: 31,
					},
				],
				progressDisplayOptions: [
					{
						...expectedStateValue.progressDisplayOptions[0],
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
						id: 0,
						value: 31,
						ariaLabel: '31',
						ariaValueText: '31',
					},
				],
			}),
		);

		slider.actions.keydown(keyboardEvent('ArrowRight'), 0);

		expect(state).toStrictEqual(
			assign(expectedStateValue, {
				handleDisplayOptions: [
					{
						left: null,
						top: 32,
					},
				],
				progressDisplayOptions: [
					{
						...expectedStateValue.progressDisplayOptions[0],
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
						id: 0,
						value: 32,
						ariaLabel: '32',
						ariaValueText: '32',
					},
				],
			}),
		);

		slider.actions.keydown(keyboardEvent('ArrowUp'), 0);

		expect(state).toStrictEqual(
			assign(expectedStateValue, {
				handleDisplayOptions: [
					{
						left: null,
						top: 31,
					},
				],
				progressDisplayOptions: [
					{
						...expectedStateValue.progressDisplayOptions[0],
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
						id: 0,
						value: 31,
						ariaLabel: '31',
						ariaValueText: '31',
					},
				],
			}),
		);

		slider.actions.keydown(keyboardEvent('ArrowLeft'), 0);

		expect(state).toStrictEqual(
			assign(expectedStateValue, {
				handleDisplayOptions: [
					{
						left: null,
						top: 30,
					},
				],
				progressDisplayOptions: [
					{
						...expectedStateValue.progressDisplayOptions[0],
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
						id: 0,
						value: 30,
						ariaLabel: '30',
						ariaValueText: '30',
					},
				],
			}),
		);
	});
});
