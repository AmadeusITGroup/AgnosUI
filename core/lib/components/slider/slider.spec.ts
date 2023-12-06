import type {WritableSignal} from '@amadeus-it-group/tansu';
import {computed, writable} from '@amadeus-it-group/tansu';
import {beforeEach, describe, expect, test, vi} from 'vitest';
import type {SliderProps, SliderWidget} from './slider';
import {createSlider} from './slider';
import type {WidgetState} from '../../types';

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
			bottom: 0,
			height: 100,
			width: 0,
		},
	],
	combinedLabelPositionLeft: 0,
	combinedLabelPositionTop: 0,
	handleDisplayOptions: [
		{
			left: 0,
			top: 0,
		},
	],
	sortedHandles: [{id: 0, value: 0, ariaLabel: '0'}],
	className: '',
	isInteractable: true,
	showMinMaxLabels: true,
	showValueLabels: true,
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

		expectedStateValue.min = 50;
		expectedStateValue.values = [50];
		expectedStateValue.sortedValues = [50];
		expectedStateValue.handleDisplayOptions = [
			{
				top: 0,
				left: 0,
			},
		];
		expectedStateValue.sortedHandles = [{id: 0, value: 50, ariaLabel: '50'}];
		expectedStateValue.minValueLabelDisplay = false;
		expectedStateValue.progressDisplayOptions = [
			{
				left: 0,
				bottom: 0,
				height: 100,
				width: 0,
			},
		];

		expect(state).toStrictEqual(expectedStateValue);
	});

	test(`should recompute clean value if max has changed`, () => {
		slider.patch({
			values: [60],
		});

		const expectedStateValue = {...defaultStateValues};
		expectedStateValue.values = [60];
		expectedStateValue.sortedValues = [60];
		expectedStateValue.handleDisplayOptions = [
			{
				top: 0,
				left: 60,
			},
		];
		expectedStateValue.sortedHandles = [{id: 0, value: 60, ariaLabel: '60'}];
		expectedStateValue.minValueLabelDisplay = true;
		expectedStateValue.progressDisplayOptions = [
			{
				left: 0,
				bottom: 0,
				height: 100,
				width: 60,
			},
		];

		expect(state).toStrictEqual(expectedStateValue);

		slider.patch({
			max: 50,
		});

		expectedStateValue.max = 50;
		expectedStateValue.values = [50];
		expectedStateValue.sortedValues = [50];
		expectedStateValue.handleDisplayOptions = [
			{
				top: 0,
				left: 100,
			},
		];
		expectedStateValue.sortedHandles = [{id: 0, value: 50, ariaLabel: '50'}];
		expectedStateValue.maxValueLabelDisplay = false;
		expectedStateValue.progressDisplayOptions = [
			{
				left: 0,
				bottom: 0,
				height: 100,
				width: 100,
			},
		];

		expect(state).toStrictEqual(expectedStateValue);
	});

	test(`should recompute clean value if stepSize has changed`, () => {
		slider.patch({
			values: [60],
		});

		const expectedStateValue = {...defaultStateValues};
		expectedStateValue.values = [60];
		expectedStateValue.sortedValues = [60];
		expectedStateValue.handleDisplayOptions = [
			{
				top: 0,
				left: 60,
			},
		];
		expectedStateValue.sortedHandles = [{id: 0, value: 60, ariaLabel: '60'}];
		expectedStateValue.minValueLabelDisplay = true;
		expectedStateValue.progressDisplayOptions = [
			{
				left: 0,
				bottom: 0,
				height: 100,
				width: 60,
			},
		];

		expect(state).toStrictEqual(expectedStateValue);

		slider.patch({
			stepSize: 25,
		});

		expectedStateValue.stepSize = 25;
		expectedStateValue.values = [50];
		expectedStateValue.sortedValues = [50];
		expectedStateValue.handleDisplayOptions = [
			{
				top: 0,
				left: 50,
			},
		];
		expectedStateValue.sortedHandles = [{id: 0, value: 50, ariaLabel: '50'}];
		expectedStateValue.progressDisplayOptions = [
			{
				left: 0,
				bottom: 0,
				height: 100,
				width: 50,
			},
		];

		expect(state).toStrictEqual(expectedStateValue);
	});

	test(`should create the configuration for the model based on the input`, () => {
		slider.patch({
			min: 100,
			max: 200,
			stepSize: 25,
			values: [150],
		});

		const expectedStateValue = {...defaultStateValues};
		expectedStateValue.min = 100;
		expectedStateValue.max = 200;
		expectedStateValue.stepSize = 25;
		expectedStateValue.values = [150];
		expectedStateValue.sortedValues = [150];
		expectedStateValue.handleDisplayOptions = [...expectedStateValue.handleDisplayOptions];
		expectedStateValue.handleDisplayOptions[0] = {
			...expectedStateValue.handleDisplayOptions[0],
			left: 50,
		};
		expectedStateValue.sortedHandles = [{id: 0, value: 150, ariaLabel: '150'}];
		expectedStateValue.minValueLabelDisplay = true;
		expectedStateValue.progressDisplayOptions = [...expectedStateValue.progressDisplayOptions];
		expectedStateValue.progressDisplayOptions[0] = {
			...expectedStateValue.progressDisplayOptions[0],
			width: 50,
		};

		expect(state).toStrictEqual(expectedStateValue);
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
		expectedStateValue.stepSize = 25;
		expectedStateValue.values = [50];
		expectedStateValue.sortedValues = [50];
		expectedStateValue.handleDisplayOptions = [...expectedStateValue.handleDisplayOptions];
		expectedStateValue.handleDisplayOptions[0] = {
			...expectedStateValue.handleDisplayOptions[0],
			left: 50,
		};
		expectedStateValue.sortedHandles = [{id: 0, value: 50, ariaLabel: '50'}];
		expectedStateValue.minValueLabelDisplay = true;
		expectedStateValue.progressDisplayOptions = [...expectedStateValue.progressDisplayOptions];
		expectedStateValue.progressDisplayOptions[0] = {
			...expectedStateValue.progressDisplayOptions[0],
			width: 50,
		};

		expect(state).toStrictEqual(expectedStateValue);
	});

	test(`should set handle to 0 and hide the min label when clicked outside the slider on the left side`, () => {
		slider.patch({
			values: [50],
		});

		const expectedStateValue = {...defaultStateValues};
		expectedStateValue.values = [50];
		expectedStateValue.sortedValues = [50];
		expectedStateValue.handleDisplayOptions = [...expectedStateValue.handleDisplayOptions];
		expectedStateValue.handleDisplayOptions[0] = {
			...expectedStateValue.handleDisplayOptions[0],
			left: 50,
		};
		expectedStateValue.sortedHandles = [{id: 0, value: 50, ariaLabel: '50'}];
		expectedStateValue.minValueLabelDisplay = true;
		expectedStateValue.progressDisplayOptions = [...expectedStateValue.progressDisplayOptions];
		expectedStateValue.progressDisplayOptions[0] = {
			...expectedStateValue.progressDisplayOptions[0],
			width: 50,
		};

		expect(state).toStrictEqual(expectedStateValue);

		slider.actions.click(new MouseEvent('click', {clientX: 0}));

		expectedStateValue.values = [0];
		expectedStateValue.sortedValues = [0];
		expectedStateValue.handleDisplayOptions = [...expectedStateValue.handleDisplayOptions];
		expectedStateValue.handleDisplayOptions = [...expectedStateValue.handleDisplayOptions];
		expectedStateValue.handleDisplayOptions[0].left = 0;
		expectedStateValue.sortedHandles = [{id: 0, value: 0, ariaLabel: '0'}];
		expectedStateValue.minValueLabelDisplay = false;
		expectedStateValue.progressDisplayOptions = [...expectedStateValue.progressDisplayOptions];
		expectedStateValue.progressDisplayOptions[0] = {
			...expectedStateValue.progressDisplayOptions[0],
			width: 0,
		};
	});

	test(`should hide the min - max labels if the showMinMaxLabels is false`, () => {
		slider.patch({
			showMinMaxLabels: false,
			values: [50],
		});

		const expectedStateValue = {...defaultStateValues};
		expectedStateValue.values = [50];
		expectedStateValue.sortedValues = [50];
		expectedStateValue.handleDisplayOptions = [...expectedStateValue.handleDisplayOptions];
		expectedStateValue.handleDisplayOptions[0] = {
			...expectedStateValue.handleDisplayOptions[0],
			left: 50,
		};
		expectedStateValue.sortedHandles = [{id: 0, value: 50, ariaLabel: '50'}];
		expectedStateValue.minValueLabelDisplay = false;
		expectedStateValue.maxValueLabelDisplay = false;
		expectedStateValue.showMinMaxLabels = false;
		expectedStateValue.progressDisplayOptions = [...expectedStateValue.progressDisplayOptions];
		expectedStateValue.progressDisplayOptions[0] = {
			...expectedStateValue.progressDisplayOptions[0],
			width: 50,
		};

		expect(state).toStrictEqual(expectedStateValue);
	});

	test(`should not hide the min - max labels when showValueLabels is false`, () => {
		slider.patch({
			showValueLabels: false,
		});

		const expectedStateValue = {...defaultStateValues};
		expectedStateValue.showValueLabels = false;
		expectedStateValue.minValueLabelDisplay = true;

		expect(state).toStrictEqual(expectedStateValue);
	});

	test(`should set handle to 100 and hide the max label when clicked outside the slider on the right side`, () => {
		slider.actions.click(new MouseEvent('click', {clientX: 120}));

		const expectedStateValue = {...defaultStateValues};
		expectedStateValue.values = [100];
		expectedStateValue.sortedValues = [100];
		expectedStateValue.handleDisplayOptions = [...expectedStateValue.handleDisplayOptions];
		expectedStateValue.handleDisplayOptions[0] = {
			...expectedStateValue.handleDisplayOptions[0],
			left: 100,
		};
		expectedStateValue.sortedHandles = [{id: 0, value: 100, ariaLabel: '100'}];
		expectedStateValue.minValueLabelDisplay = true;
		expectedStateValue.maxValueLabelDisplay = false;
		expectedStateValue.progressDisplayOptions = [...expectedStateValue.progressDisplayOptions];
		expectedStateValue.progressDisplayOptions[0] = {
			...expectedStateValue.progressDisplayOptions[0],
			width: 100,
		};

		expect(state).toStrictEqual(expectedStateValue);
	});

	test(`should set handle to a proper percent when clicked inside the slider`, () => {
		slider.actions.click(new MouseEvent('click', {clientX: 70}));

		const expectedStateValue = {...defaultStateValues};
		expectedStateValue.values = [70];
		expectedStateValue.sortedValues = [70];
		expectedStateValue.handleDisplayOptions = [...expectedStateValue.handleDisplayOptions];
		expectedStateValue.handleDisplayOptions[0] = {
			...expectedStateValue.handleDisplayOptions[0],
			left: 70,
		};
		expectedStateValue.sortedHandles = [{id: 0, value: 70, ariaLabel: '70'}];
		expectedStateValue.minValueLabelDisplay = true;
		expectedStateValue.progressDisplayOptions = [...expectedStateValue.progressDisplayOptions];
		expectedStateValue.progressDisplayOptions[0] = {
			...expectedStateValue.progressDisplayOptions[0],
			width: 70,
		};

		expect(state).toStrictEqual(expectedStateValue);
	});

	test(`should not go below minimum on arrow left and down arrow key stroke`, () => {
		slider.actions.keydown(keyboardEvent('ArrowDown'), 0);

		const expectedStateValue = {...defaultStateValues};
		expectedStateValue.values = [0];
		expectedStateValue.sortedValues = [0];
		expectedStateValue.handleDisplayOptions = [...expectedStateValue.handleDisplayOptions];
		expectedStateValue.handleDisplayOptions[0] = {
			...expectedStateValue.handleDisplayOptions[0],
			left: 0,
		};
		expectedStateValue.sortedHandles = [{id: 0, value: 0, ariaLabel: '0'}];
		expectedStateValue.minValueLabelDisplay = false;
		expectedStateValue.progressDisplayOptions = [...expectedStateValue.progressDisplayOptions];
		expectedStateValue.progressDisplayOptions[0] = {
			...expectedStateValue.progressDisplayOptions[0],
			width: 0,
		};

		expect(state).toStrictEqual(expectedStateValue);

		slider.actions.keydown(keyboardEvent('ArrowLeft'), 0);

		expect(state).toStrictEqual(expectedStateValue);
	});

	test(`should decrease the handle value on left and down arrow key stroke`, () => {
		slider.patch({
			values: [50],
		});

		const expectedStateValue = {...defaultStateValues};
		expectedStateValue.values = [50];
		expectedStateValue.sortedValues = [50];
		expectedStateValue.handleDisplayOptions = [...expectedStateValue.handleDisplayOptions];
		expectedStateValue.handleDisplayOptions[0] = {
			...expectedStateValue.handleDisplayOptions[0],
			left: 50,
		};
		expectedStateValue.sortedHandles = [{id: 0, value: 50, ariaLabel: '50'}];
		expectedStateValue.minValueLabelDisplay = true;
		expectedStateValue.progressDisplayOptions = [...expectedStateValue.progressDisplayOptions];
		expectedStateValue.progressDisplayOptions[0] = {
			...expectedStateValue.progressDisplayOptions[0],
			width: 50,
		};

		expect(state).toStrictEqual(expectedStateValue);

		slider.actions.keydown(keyboardEvent('ArrowDown'), 0);

		expectedStateValue.values = [49];
		expectedStateValue.sortedValues = [49];
		expectedStateValue.handleDisplayOptions = [...expectedStateValue.handleDisplayOptions];
		expectedStateValue.handleDisplayOptions[0] = {
			...expectedStateValue.handleDisplayOptions[0],
			left: 49,
		};
		expectedStateValue.sortedHandles = [{id: 0, value: 49, ariaLabel: '49'}];
		expectedStateValue.progressDisplayOptions = [...expectedStateValue.progressDisplayOptions];
		expectedStateValue.progressDisplayOptions[0] = {
			...expectedStateValue.progressDisplayOptions[0],
			width: 49,
		};

		expect(state).toStrictEqual(expectedStateValue);

		slider.actions.keydown(keyboardEvent('ArrowLeft'), 0);

		expectedStateValue.values = [48];
		expectedStateValue.sortedValues = [48];
		expectedStateValue.handleDisplayOptions = [...expectedStateValue.handleDisplayOptions];
		expectedStateValue.handleDisplayOptions[0] = {
			...expectedStateValue.handleDisplayOptions[0],
			left: 48,
		};
		expectedStateValue.sortedHandles = [{id: 0, value: 48, ariaLabel: '48'}];
		expectedStateValue.progressDisplayOptions = [...expectedStateValue.progressDisplayOptions];
		expectedStateValue.progressDisplayOptions[0] = {
			...expectedStateValue.progressDisplayOptions[0],
			width: 48,
		};

		expect(state).toStrictEqual(expectedStateValue);
	});

	test(`should not go above maximum on arrow right and up arrow key stroke`, () => {
		slider.patch({
			values: [100],
		});

		slider.actions.keydown(keyboardEvent('ArrowUp'), 0);

		const expectedStateValue = {...defaultStateValues};
		expectedStateValue.values = [100];
		expectedStateValue.sortedValues = [100];
		expectedStateValue.handleDisplayOptions = [...expectedStateValue.handleDisplayOptions];
		expectedStateValue.handleDisplayOptions[0] = {
			...expectedStateValue.handleDisplayOptions[0],
			left: 100,
		};
		expectedStateValue.sortedHandles = [{id: 0, value: 100, ariaLabel: '100'}];
		expectedStateValue.minValueLabelDisplay = true;
		expectedStateValue.maxValueLabelDisplay = false;
		expectedStateValue.progressDisplayOptions = [...expectedStateValue.progressDisplayOptions];
		expectedStateValue.progressDisplayOptions[0] = {
			...expectedStateValue.progressDisplayOptions[0],
			width: 100,
		};

		expect(state).toStrictEqual(expectedStateValue);

		slider.actions.keydown(keyboardEvent('ArrowRight'), 0);

		expect(state).toStrictEqual(expectedStateValue);
	});

	test(`should increase the handle value on right and up arrow key stroke`, () => {
		slider.patch({
			values: [50],
		});

		const expectedStateValue = {...defaultStateValues};
		expectedStateValue.values = [50];
		expectedStateValue.sortedValues = [50];
		expectedStateValue.handleDisplayOptions = [...expectedStateValue.handleDisplayOptions];
		expectedStateValue.handleDisplayOptions[0] = {
			...expectedStateValue.handleDisplayOptions[0],
			left: 50,
		};
		expectedStateValue.sortedHandles = [{id: 0, value: 50, ariaLabel: '50'}];
		expectedStateValue.minValueLabelDisplay = true;
		expectedStateValue.progressDisplayOptions = [...expectedStateValue.progressDisplayOptions];
		expectedStateValue.progressDisplayOptions[0] = {
			...expectedStateValue.progressDisplayOptions[0],
			width: 50,
		};

		expect(state).toStrictEqual(expectedStateValue);

		slider.actions.keydown(keyboardEvent('ArrowUp'), 0);

		expectedStateValue.values = [51];
		expectedStateValue.sortedValues = [51];
		expectedStateValue.handleDisplayOptions = [...expectedStateValue.handleDisplayOptions];
		expectedStateValue.handleDisplayOptions[0] = {
			...expectedStateValue.handleDisplayOptions[0],
			left: 51,
		};
		expectedStateValue.sortedHandles = [{id: 0, value: 51, ariaLabel: '51'}];
		expectedStateValue.progressDisplayOptions = [...expectedStateValue.progressDisplayOptions];
		expectedStateValue.progressDisplayOptions[0] = {
			...expectedStateValue.progressDisplayOptions[0],
			width: 51,
		};

		expect(state).toStrictEqual(expectedStateValue);

		slider.actions.keydown(keyboardEvent('ArrowRight'), 0);

		expectedStateValue.values = [52];
		expectedStateValue.sortedValues = [52];
		expectedStateValue.handleDisplayOptions = [...expectedStateValue.handleDisplayOptions];
		expectedStateValue.handleDisplayOptions[0] = {
			...expectedStateValue.handleDisplayOptions[0],
			left: 52,
		};
		expectedStateValue.sortedHandles = [{id: 0, value: 52, ariaLabel: '52'}];
		expectedStateValue.progressDisplayOptions = [...expectedStateValue.progressDisplayOptions];
		expectedStateValue.progressDisplayOptions[0] = {
			...expectedStateValue.progressDisplayOptions[0],
			width: 52,
		};

		expect(state).toStrictEqual(expectedStateValue);
	});

	test(`should jump to minimum slider value on home key stroke`, () => {
		slider.patch({
			values: [50],
		});

		const expectedStateValue = {...defaultStateValues};
		expectedStateValue.values = [50];
		expectedStateValue.sortedValues = [50];
		expectedStateValue.handleDisplayOptions = [...expectedStateValue.handleDisplayOptions];
		expectedStateValue.handleDisplayOptions[0] = {
			...expectedStateValue.handleDisplayOptions[0],
			left: 50,
		};
		expectedStateValue.sortedHandles = [{id: 0, value: 50, ariaLabel: '50'}];
		expectedStateValue.minValueLabelDisplay = true;
		expectedStateValue.progressDisplayOptions = [...expectedStateValue.progressDisplayOptions];
		expectedStateValue.progressDisplayOptions[0] = {
			...expectedStateValue.progressDisplayOptions[0],
			width: 50,
		};

		expect(state).toStrictEqual(expectedStateValue);

		slider.actions.keydown(keyboardEvent('Home'), 0);

		expectedStateValue.values = [0];
		expectedStateValue.sortedValues = [0];
		expectedStateValue.handleDisplayOptions = [...expectedStateValue.handleDisplayOptions];
		expectedStateValue.handleDisplayOptions[0] = {
			...expectedStateValue.handleDisplayOptions[0],
			left: 0,
		};
		expectedStateValue.sortedHandles = [{id: 0, value: 0, ariaLabel: '0'}];
		expectedStateValue.minValueLabelDisplay = false;
		expectedStateValue.progressDisplayOptions = [...expectedStateValue.progressDisplayOptions];
		expectedStateValue.progressDisplayOptions[0] = {
			...expectedStateValue.progressDisplayOptions[0],
			width: 0,
		};

		expect(state).toStrictEqual(expectedStateValue);
	});

	test(`should jump to maximum slider value on end key stroke`, () => {
		slider.patch({
			values: [50],
		});

		const expectedStateValue = {...defaultStateValues};
		expectedStateValue.values = [50];
		expectedStateValue.sortedValues = [50];
		expectedStateValue.handleDisplayOptions = [...expectedStateValue.handleDisplayOptions];
		expectedStateValue.handleDisplayOptions[0] = {
			...expectedStateValue.handleDisplayOptions[0],
			left: 50,
		};
		expectedStateValue.sortedHandles = [{id: 0, value: 50, ariaLabel: '50'}];
		expectedStateValue.minValueLabelDisplay = true;
		expectedStateValue.progressDisplayOptions = [...expectedStateValue.progressDisplayOptions];
		expectedStateValue.progressDisplayOptions[0] = {
			...expectedStateValue.progressDisplayOptions[0],
			width: 50,
		};

		expect(state).toStrictEqual(expectedStateValue);

		slider.actions.keydown(keyboardEvent('End'), 0);

		expectedStateValue.values = [100];
		expectedStateValue.sortedValues = [100];
		expectedStateValue.handleDisplayOptions = [...expectedStateValue.handleDisplayOptions];
		expectedStateValue.handleDisplayOptions[0] = {
			...expectedStateValue.handleDisplayOptions[0],
			left: 100,
		};
		expectedStateValue.sortedHandles = [{id: 0, value: 100, ariaLabel: '100'}];
		expectedStateValue.maxValueLabelDisplay = false;
		expectedStateValue.progressDisplayOptions = [...expectedStateValue.progressDisplayOptions];
		expectedStateValue.progressDisplayOptions[0] = {
			...expectedStateValue.progressDisplayOptions[0],
			width: 100,
		};

		expect(state).toStrictEqual(expectedStateValue);
	});

	test(`should not change handle with actions if the slider is disabled`, () => {
		slider.patch({
			disabled: true,
		});

		const expectedStateValue = {...defaultStateValues};
		expectedStateValue.isInteractable = false;
		expectedStateValue.disabled = true;

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
		expectedStateValue.isInteractable = false;
		expectedStateValue.readonly = true;

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
		expectedStateValue.min = 0.5;
		expectedStateValue.max = 3.5;
		expectedStateValue.values = [0.5];
		expectedStateValue.sortedValues = [0.5];
		expectedStateValue.sortedHandles = [{id: 0, value: 0.5, ariaLabel: '0.5'}];
		expect(state).toStrictEqual(expectedStateValue);

		slider.actions.keydown(keyboardEvent('ArrowUp'), 0);

		expectedStateValue.minValueLabelDisplay = true;
		expectedStateValue.handleDisplayOptions = [
			{
				left: 33.333333333333336,
				top: 0,
			},
		];
		expectedStateValue.progressDisplayOptions = [
			{
				left: 0,
				bottom: 0,
				height: 100,
				width: 33.333333333333336,
			},
		];
		expectedStateValue.values = [1.5];
		expectedStateValue.sortedValues = [1.5];
		expectedStateValue.sortedHandles = [{id: 0, value: 1.5, ariaLabel: '1.5'}];

		expect(state).toStrictEqual(expectedStateValue);
	});

	test(`should base the value on the min value of the slider for step calculation`, () => {
		slider.patch({
			min: 0.5,
			max: 3,
			stepSize: 1,
			values: [3],
		});

		const expectedStateValue = {...defaultStateValues};
		expectedStateValue.min = 0.5;
		expectedStateValue.max = 3;
		expectedStateValue.stepSize = 1;
		expectedStateValue.values = [3];
		expectedStateValue.sortedValues = [3];
		expectedStateValue.sortedHandles = [{id: 0, value: 3, ariaLabel: '3'}];
		expectedStateValue.minValueLabelDisplay = true;
		expectedStateValue.maxValueLabelDisplay = false;
		expectedStateValue.progressDisplayOptions = [
			{
				left: 0,
				bottom: 0,
				height: 100,
				width: 100,
			},
		];
		expectedStateValue.handleDisplayOptions = [{left: 100, top: 0}];

		expect(state).toStrictEqual(expectedStateValue);

		slider.actions.keydown(keyboardEvent('ArrowLeft'), 0);

		expectedStateValue.handleDisplayOptions = [
			{
				left: 80,
				top: 0,
			},
		];
		expectedStateValue.progressDisplayOptions = [
			{
				left: 0,
				bottom: 0,
				height: 100,
				width: 80,
			},
		];
		expectedStateValue.values = [2.5];
		expectedStateValue.sortedValues = [2.5];
		expectedStateValue.sortedHandles = [{id: 0, value: 2.5, ariaLabel: '2.5'}];
		expectedStateValue.maxValueLabelDisplay = true;

		expect(state).toStrictEqual(expectedStateValue);
	});

	test(`should round the value to specific decimal precision (2) based on input values`, () => {
		slider.patch({
			min: 0.33,
			max: 5.55,
			stepSize: 0.2,
			values: [1],
		});

		const expectedStateValue = {...defaultStateValues};
		expectedStateValue.min = 0.33;
		expectedStateValue.max = 5.55;
		expectedStateValue.stepSize = 0.2;
		expectedStateValue.values = [0.93];
		expectedStateValue.sortedValues = [0.93];
		expectedStateValue.sortedHandles = [{id: 0, value: 0.93, ariaLabel: '0.93'}];
		expectedStateValue.minValueLabelDisplay = true;
		expectedStateValue.progressDisplayOptions = [
			{
				left: 0,
				bottom: 0,
				height: 100,
				width: 11.49425287356322,
			},
		];
		expectedStateValue.handleDisplayOptions = [{left: 11.49425287356322, top: 0}];

		expect(state).toStrictEqual(expectedStateValue);
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
		expectedStateValue.min = 100;
		expectedStateValue.max = 200;
		expectedStateValue.stepSize = 25;
		expectedStateValue.values = [150, 175];
		expectedStateValue.sortedValues = [150, 175];
		expectedStateValue.handleDisplayOptions = [...expectedStateValue.handleDisplayOptions];
		expectedStateValue.handleDisplayOptions[0] = {
			left: 50,
			top: 0,
		};
		expectedStateValue.handleDisplayOptions[1] = {
			left: 75,
			top: 0,
		};
		expectedStateValue.combinedLabelPositionLeft = 62.5;
		expectedStateValue.progressDisplayOptions = [...expectedStateValue.progressDisplayOptions];
		expectedStateValue.progressDisplayOptions[0] = {
			left: 50,
			bottom: 0,
			width: 25,
			height: 100,
		};
		expectedStateValue.sortedHandles = [
			{id: 0, value: 150, ariaLabel: '150'},
			{id: 1, value: 175, ariaLabel: '175'},
		];
		expectedStateValue.minValueLabelDisplay = true;

		expect(state).toStrictEqual(expectedStateValue);
	});

	test(`should update the correct handle when clicking on the range`, () => {
		slider.patch({
			values: [10, 50],
		});
		const expectedStateValue = {...defaultStateValues};
		expectedStateValue.values = [10, 50];
		expectedStateValue.sortedValues = [10, 50];
		expectedStateValue.handleDisplayOptions = [...expectedStateValue.handleDisplayOptions];
		expectedStateValue.handleDisplayOptions[0] = {
			left: 10,
			top: 0,
		};
		expectedStateValue.handleDisplayOptions[1] = {
			left: 50,
			top: 0,
		};
		expectedStateValue.combinedLabelPositionLeft = 30;
		expectedStateValue.progressDisplayOptions = [...expectedStateValue.progressDisplayOptions];
		expectedStateValue.progressDisplayOptions[0] = {
			left: 10,
			bottom: 0,
			width: 40,
			height: 100,
		};

		expectedStateValue.sortedHandles = [
			{id: 0, value: 10, ariaLabel: '10'},
			{id: 1, value: 50, ariaLabel: '50'},
		];
		expectedStateValue.minValueLabelDisplay = true;

		expect(state).toStrictEqual(expectedStateValue);

		slider.actions.click(new MouseEvent('click', {clientX: 60}));

		expectedStateValue.values = [10, 60];
		expectedStateValue.sortedValues = [10, 60];
		expectedStateValue.handleDisplayOptions = [...expectedStateValue.handleDisplayOptions];
		expectedStateValue.handleDisplayOptions[0] = {
			left: 10,
			top: 0,
		};
		expectedStateValue.handleDisplayOptions[1] = {
			left: 60,
			top: 0,
		};
		expectedStateValue.combinedLabelPositionLeft = 35;
		expectedStateValue.progressDisplayOptions = [...expectedStateValue.progressDisplayOptions];
		expectedStateValue.progressDisplayOptions[0] = {
			left: 10,
			bottom: 0,
			width: 50,
			height: 100,
		};
		expectedStateValue.sortedHandles = [
			{id: 0, value: 10, ariaLabel: '10'},
			{id: 1, value: 60, ariaLabel: '60'},
		];
		expectedStateValue.minValueLabelDisplay = true;

		expect(state).toStrictEqual(expectedStateValue);
	});

	test(`should update the correct handles when they are reversed`, () => {
		slider.patch({
			values: [10, 50],
		});
		const expectedStateValue = {...defaultStateValues};
		expectedStateValue.values = [10, 50];
		expectedStateValue.sortedValues = [10, 50];
		expectedStateValue.handleDisplayOptions = [...expectedStateValue.handleDisplayOptions];
		expectedStateValue.handleDisplayOptions[0] = {
			left: 10,
			top: 0,
		};
		expectedStateValue.handleDisplayOptions[1] = {
			left: 50,
			top: 0,
		};
		expectedStateValue.combinedLabelPositionLeft = 30;
		expectedStateValue.progressDisplayOptions = [...expectedStateValue.progressDisplayOptions];
		expectedStateValue.progressDisplayOptions[0] = {
			left: 10,
			bottom: 0,
			width: 40,
			height: 100,
		};
		expectedStateValue.sortedHandles = [
			{id: 0, value: 10, ariaLabel: '10'},
			{id: 1, value: 50, ariaLabel: '50'},
		];
		expectedStateValue.minValueLabelDisplay = true;

		expect(state).toStrictEqual(expectedStateValue);

		slider.actions.keydown(keyboardEvent('End'), 0);

		expectedStateValue.values = [100, 50];
		expectedStateValue.sortedValues = [50, 100];
		expectedStateValue.handleDisplayOptions = [...expectedStateValue.handleDisplayOptions];
		expectedStateValue.handleDisplayOptions[0] = {
			left: 100,
			top: 0,
		};
		expectedStateValue.handleDisplayOptions[1] = {
			left: 50,
			top: 0,
		};
		expectedStateValue.combinedLabelPositionLeft = 75;
		expectedStateValue.progressDisplayOptions = [...expectedStateValue.progressDisplayOptions];
		expectedStateValue.progressDisplayOptions[0] = {
			left: 50,
			bottom: 0,
			width: 50,
			height: 100,
		};
		expectedStateValue.sortedHandles = [
			{id: 1, value: 50, ariaLabel: '50'},
			{id: 0, value: 100, ariaLabel: '100'},
		];
		expectedStateValue.maxValueLabelDisplay = false;

		expect(state).toStrictEqual(expectedStateValue);

		slider.actions.click(new MouseEvent('click', {clientX: 70}));

		expectedStateValue.values = [100, 70];
		expectedStateValue.sortedValues = [70, 100];
		expectedStateValue.handleDisplayOptions = [...expectedStateValue.handleDisplayOptions];
		expectedStateValue.handleDisplayOptions[0] = {
			left: 100,
			top: 0,
		};
		expectedStateValue.handleDisplayOptions[1] = {
			left: 70,
			top: 0,
		};
		expectedStateValue.combinedLabelPositionLeft = 85;
		expectedStateValue.progressDisplayOptions = [...expectedStateValue.progressDisplayOptions];
		expectedStateValue.progressDisplayOptions[0] = {
			left: 70,
			bottom: 0,
			width: 30,
			height: 100,
		};
		expectedStateValue.sortedHandles = [
			{id: 1, value: 70, ariaLabel: '70'},
			{id: 0, value: 100, ariaLabel: '100'},
		];

		expect(state).toStrictEqual(expectedStateValue);
	});

	test(`should merge the handle labels when the handles are too close`, () => {
		slider.patch({
			values: [45, 50],
		});
		const expectedStateValue = {...defaultStateValues};
		expectedStateValue.values = [45, 50];
		expectedStateValue.sortedValues = [45, 50];
		expectedStateValue.handleDisplayOptions = [...expectedStateValue.handleDisplayOptions];
		expectedStateValue.handleDisplayOptions[0] = {
			left: 45,
			top: 0,
		};
		expectedStateValue.handleDisplayOptions[1] = {
			left: 50,
			top: 0,
		};
		expectedStateValue.combinedLabelPositionLeft = 47.5;
		expectedStateValue.progressDisplayOptions = [...expectedStateValue.progressDisplayOptions];
		expectedStateValue.progressDisplayOptions[0] = {
			left: 45,
			bottom: 0,
			width: 5,
			height: 100,
		};
		expectedStateValue.sortedHandles = [
			{id: 0, value: 45, ariaLabel: '45'},
			{id: 1, value: 50, ariaLabel: '50'},
		];
		expectedStateValue.minValueLabelDisplay = true;
		expectedStateValue.combinedLabelDisplay = true;

		expect(state).toStrictEqual(expectedStateValue);

		slider.actions.click(new MouseEvent('click', {clientX: 70}));

		expectedStateValue.values = [45, 70];
		expectedStateValue.sortedValues = [45, 70];
		expectedStateValue.handleDisplayOptions = [...expectedStateValue.handleDisplayOptions];
		expectedStateValue.handleDisplayOptions[0] = {
			left: 45,
			top: 0,
		};
		expectedStateValue.handleDisplayOptions[1] = {
			left: 70,
			top: 0,
		};
		expectedStateValue.combinedLabelPositionLeft = 57.5;
		expectedStateValue.progressDisplayOptions = [...expectedStateValue.progressDisplayOptions];
		expectedStateValue.progressDisplayOptions[0] = {
			left: 45,
			bottom: 0,
			width: 25,
			height: 100,
		};
		expectedStateValue.sortedHandles = [
			{id: 0, value: 45, ariaLabel: '45'},
			{id: 1, value: 70, ariaLabel: '70'},
		];
		expectedStateValue.minValueLabelDisplay = true;
		expectedStateValue.combinedLabelDisplay = false;

		expect(state).toStrictEqual(expectedStateValue);
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
		expectedStateValue.handleDisplayOptions = [...expectedStateValue.handleDisplayOptions];
		expectedStateValue.handleDisplayOptions[0] = {
			left: 0,
			top: 70,
		};
		expectedStateValue.progressDisplayOptions = [...expectedStateValue.progressDisplayOptions];
		expectedStateValue.progressDisplayOptions[0].height = 30;
		expectedStateValue.progressDisplayOptions[0].width = 100;
		expectedStateValue.vertical = true;
		expectedStateValue.minValueLabelDisplay = true;
		expectedStateValue.values = [30];
		expectedStateValue.sortedValues = [30];
		expectedStateValue.sortedHandles = [
			{
				id: 0,
				value: 30,
				ariaLabel: '30',
			},
		];

		expect(state).toEqual(expectedStateValue);
	});
});
