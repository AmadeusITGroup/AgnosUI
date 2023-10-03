import type {UnsubscribeFunction, WritableSignal} from '@amadeus-it-group/tansu';
import {computed, writable} from '@amadeus-it-group/tansu';
import {afterEach, beforeEach, describe, expect, test, vi} from 'vitest';
import type {SliderProps, SliderWidget} from './slider';
import {createSlider} from './slider';
import type {WidgetState} from './types';

// TODO move to the utils?
function keyboardEvent(key: string): KeyboardEvent {
	return {
		key,
		preventDefault() {},
		stopPropagation() {},
	} as KeyboardEvent;
}

const defaultStateValues = {
	min: 0,
	max: 100,
	stepSize: 1,
	values: [0],
	sortedValues: [0],
	minValueLabelDisplay: 'hidden',
	maxValueLabelDisplay: 'visible',
	combinedLabelDisplay: 'hidden',
	disabled: false,
	readonly: false,
	vertical: false,
	progressLeft: [0],
	progressBottom: [0],
	progressHeight: [100],
	progressWidth: [0],
	combinedLabelPositionLeft: 0,
	combinedLabelPositionTop: 0,
	handleTooltipLeft: [0],
	handleTooltipTop: [0],
	sortedHandles: [{id: 0, value: 0}],
	className: '',
	isInteractable: true,
};

describe(`Slider basic`, () => {
	let slider: SliderWidget;
	let state: WidgetState<SliderWidget>;
	let unsubscribe: UnsubscribeFunction;
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
		slider.directives.sliderDirective(sliderElement);
		slider.directives.minLabelDirective(minLabel);
		slider.directives.maxLabelDirective(maxLabel);
		unsubscribe = slider.state$.subscribe((newState) => {
			state = newState;
		});
	});

	afterEach(() => {
		unsubscribe();
	});

	test(`should create the default configuration for the model`, () => {
		expect(state).toStrictEqual(defaultStateValues);
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
		expectedStateValue.handleTooltipLeft = [50];
		expectedStateValue.sortedHandles = [{id: 0, value: 150}];
		expectedStateValue.minValueLabelDisplay = 'visible';
		expectedStateValue.progressWidth = [50];

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

	test(`should set the step as 1 if the provided value is 0`, () => {
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
		expectedStateValue.handleTooltipLeft = [50];
		expectedStateValue.sortedHandles = [{id: 0, value: 50}];
		expectedStateValue.minValueLabelDisplay = 'visible';
		expectedStateValue.progressWidth = [50];

		expect(state).toStrictEqual(expectedStateValue);
	});

	test(`should set handle to 0 and hide the min label when clicked outside the slider on the left side`, () => {
		slider.patch({
			values: [50],
		});

		const expectedStateValue = {...defaultStateValues};
		expectedStateValue.values = [50];
		expectedStateValue.sortedValues = [50];
		expectedStateValue.handleTooltipLeft = [50];
		expectedStateValue.sortedHandles = [{id: 0, value: 50}];
		expectedStateValue.minValueLabelDisplay = 'visible';
		expectedStateValue.progressWidth = [50];

		expect(state).toStrictEqual(expectedStateValue);

		slider.actions.click(new MouseEvent('click', {clientX: 0}));

		expectedStateValue.values = [0];
		expectedStateValue.sortedValues = [0];
		expectedStateValue.handleTooltipLeft = [0];
		expectedStateValue.sortedHandles = [{id: 0, value: 0}];
		expectedStateValue.minValueLabelDisplay = 'hidden';
		expectedStateValue.progressWidth = [0];
	});

	test(`should set handle to 100 and hide the max label when clicked outside the slider on the right side`, () => {
		slider.actions.click(new MouseEvent('click', {clientX: 120}));

		const expectedStateValue = {...defaultStateValues};
		expectedStateValue.values = [100];
		expectedStateValue.sortedValues = [100];
		expectedStateValue.handleTooltipLeft = [100];
		expectedStateValue.sortedHandles = [{id: 0, value: 100}];
		expectedStateValue.minValueLabelDisplay = 'visible';
		expectedStateValue.maxValueLabelDisplay = 'hidden';
		expectedStateValue.progressWidth = [100];

		expect(state).toStrictEqual(expectedStateValue);
	});

	test(`should set handle to a proper percent when clicked inside the slider`, () => {
		slider.actions.click(new MouseEvent('click', {clientX: 70}));

		const expectedStateValue = {...defaultStateValues};
		expectedStateValue.values = [70];
		expectedStateValue.sortedValues = [70];
		expectedStateValue.handleTooltipLeft = [70];
		expectedStateValue.sortedHandles = [{id: 0, value: 70}];
		expectedStateValue.minValueLabelDisplay = 'visible';
		expectedStateValue.progressWidth = [70];

		expect(state).toStrictEqual(expectedStateValue);
	});

	test(`should not go below minimum on arrow left and down arrow key stroke`, () => {
		slider.actions.keydown(keyboardEvent('ArrowDown'), 0);

		const expectedStateValue = {...defaultStateValues};
		expectedStateValue.values = [0];
		expectedStateValue.sortedValues = [0];
		expectedStateValue.handleTooltipLeft = [0];
		expectedStateValue.sortedHandles = [{id: 0, value: 0}];
		expectedStateValue.minValueLabelDisplay = 'hidden';
		expectedStateValue.progressWidth = [0];

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
		expectedStateValue.handleTooltipLeft = [50];
		expectedStateValue.sortedHandles = [{id: 0, value: 50}];
		expectedStateValue.minValueLabelDisplay = 'visible';
		expectedStateValue.progressWidth = [50];

		expect(state).toStrictEqual(expectedStateValue);

		slider.actions.keydown(keyboardEvent('ArrowDown'), 0);

		expectedStateValue.values = [49];
		expectedStateValue.sortedValues = [49];
		expectedStateValue.handleTooltipLeft = [49];
		expectedStateValue.sortedHandles = [{id: 0, value: 49}];
		expectedStateValue.progressWidth = [49];

		expect(state).toStrictEqual(expectedStateValue);

		slider.actions.keydown(keyboardEvent('ArrowLeft'), 0);

		expectedStateValue.values = [48];
		expectedStateValue.sortedValues = [48];
		expectedStateValue.handleTooltipLeft = [48];
		expectedStateValue.sortedHandles = [{id: 0, value: 48}];
		expectedStateValue.progressWidth = [48];

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
		expectedStateValue.handleTooltipLeft = [100];
		expectedStateValue.sortedHandles = [{id: 0, value: 100}];
		expectedStateValue.minValueLabelDisplay = 'visible';
		expectedStateValue.maxValueLabelDisplay = 'hidden';
		expectedStateValue.progressWidth = [100];

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
		expectedStateValue.handleTooltipLeft = [50];
		expectedStateValue.sortedHandles = [{id: 0, value: 50}];
		expectedStateValue.minValueLabelDisplay = 'visible';
		expectedStateValue.progressWidth = [50];

		expect(state).toStrictEqual(expectedStateValue);

		slider.actions.keydown(keyboardEvent('ArrowUp'), 0);

		expectedStateValue.values = [51];
		expectedStateValue.sortedValues = [51];
		expectedStateValue.handleTooltipLeft = [51];
		expectedStateValue.sortedHandles = [{id: 0, value: 51}];
		expectedStateValue.progressWidth = [51];

		expect(state).toStrictEqual(expectedStateValue);

		slider.actions.keydown(keyboardEvent('ArrowRight'), 0);

		expectedStateValue.values = [52];
		expectedStateValue.sortedValues = [52];
		expectedStateValue.handleTooltipLeft = [52];
		expectedStateValue.sortedHandles = [{id: 0, value: 52}];
		expectedStateValue.progressWidth = [52];

		expect(state).toStrictEqual(expectedStateValue);
	});

	test(`should jump to minimum slider value on home key stroke`, () => {
		slider.patch({
			values: [50],
		});

		const expectedStateValue = {...defaultStateValues};
		expectedStateValue.values = [50];
		expectedStateValue.sortedValues = [50];
		expectedStateValue.handleTooltipLeft = [50];
		expectedStateValue.sortedHandles = [{id: 0, value: 50}];
		expectedStateValue.minValueLabelDisplay = 'visible';
		expectedStateValue.progressWidth = [50];

		expect(state).toStrictEqual(expectedStateValue);

		slider.actions.keydown(keyboardEvent('Home'), 0);

		expectedStateValue.values = [0];
		expectedStateValue.sortedValues = [0];
		expectedStateValue.handleTooltipLeft = [0];
		expectedStateValue.sortedHandles = [{id: 0, value: 0}];
		expectedStateValue.minValueLabelDisplay = 'hidden';
		expectedStateValue.progressWidth = [0];

		expect(state).toStrictEqual(expectedStateValue);
	});

	test(`should jump to maximum slider value on end key stroke`, () => {
		slider.patch({
			values: [50],
		});

		const expectedStateValue = {...defaultStateValues};
		expectedStateValue.values = [50];
		expectedStateValue.sortedValues = [50];
		expectedStateValue.handleTooltipLeft = [50];
		expectedStateValue.sortedHandles = [{id: 0, value: 50}];
		expectedStateValue.minValueLabelDisplay = 'visible';
		expectedStateValue.progressWidth = [50];

		expect(state).toStrictEqual(expectedStateValue);

		slider.actions.keydown(keyboardEvent('End'), 0);

		expectedStateValue.values = [100];
		expectedStateValue.sortedValues = [100];
		expectedStateValue.handleTooltipLeft = [100];
		expectedStateValue.sortedHandles = [{id: 0, value: 100}];
		expectedStateValue.maxValueLabelDisplay = 'hidden';
		expectedStateValue.progressWidth = [100];

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
});

describe(`Slider range`, () => {
	let slider: SliderWidget;
	let state: WidgetState<SliderWidget>;
	let unsubscribe: UnsubscribeFunction;
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
		slider.directives.sliderDirective(sliderElement);
		slider.directives.minLabelDirective(minLabel);
		slider.directives.maxLabelDirective(maxLabel);
		unsubscribe = slider.state$.subscribe((newState) => {
			state = newState;
		});
	});

	afterEach(() => {
		unsubscribe();
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
		expectedStateValue.handleTooltipLeft = [50, 75];
		expectedStateValue.handleTooltipTop = [0, 0];
		expectedStateValue.combinedLabelPositionLeft = 62.5;
		expectedStateValue.progressBottom = [0, 0];
		expectedStateValue.progressHeight = [100, 100];
		expectedStateValue.sortedHandles = [
			{id: 0, value: 150},
			{id: 1, value: 175},
		];
		expectedStateValue.minValueLabelDisplay = 'visible';
		expectedStateValue.progressLeft = [50, 75];
		expectedStateValue.progressWidth = [25, 75];

		expect(state).toStrictEqual(expectedStateValue);
	});

	test(`should update the correct handle when clicking on the range`, () => {
		slider.patch({
			values: [10, 50],
		});
		const expectedStateValue = {...defaultStateValues};
		expectedStateValue.values = [10, 50];
		expectedStateValue.sortedValues = [10, 50];
		expectedStateValue.handleTooltipLeft = [10, 50];
		expectedStateValue.handleTooltipTop = [0, 0];
		expectedStateValue.combinedLabelPositionLeft = 30;
		expectedStateValue.progressBottom = [0, 0];
		expectedStateValue.progressHeight = [100, 100];
		expectedStateValue.sortedHandles = [
			{id: 0, value: 10},
			{id: 1, value: 50},
		];
		expectedStateValue.minValueLabelDisplay = 'visible';
		expectedStateValue.progressLeft = [10, 50];
		expectedStateValue.progressWidth = [40, 50];

		expect(state).toStrictEqual(expectedStateValue);

		slider.actions.click(new MouseEvent('click', {clientX: 60}));

		expectedStateValue.values = [10, 60];
		expectedStateValue.sortedValues = [10, 60];
		expectedStateValue.handleTooltipLeft = [10, 60];
		expectedStateValue.handleTooltipTop = [0, 0];
		expectedStateValue.combinedLabelPositionLeft = 35;
		expectedStateValue.progressBottom = [0, 0];
		expectedStateValue.progressHeight = [100, 100];
		expectedStateValue.sortedHandles = [
			{id: 0, value: 10},
			{id: 1, value: 60},
		];
		expectedStateValue.minValueLabelDisplay = 'visible';
		expectedStateValue.progressLeft = [10, 60];
		expectedStateValue.progressWidth = [50, 60];

		expect(state).toStrictEqual(expectedStateValue);
	});

	test(`should update the correct handles when they are reversed`, () => {
		slider.patch({
			values: [10, 50],
		});
		const expectedStateValue = {...defaultStateValues};
		expectedStateValue.values = [10, 50];
		expectedStateValue.sortedValues = [10, 50];
		expectedStateValue.handleTooltipLeft = [10, 50];
		expectedStateValue.handleTooltipTop = [0, 0];
		expectedStateValue.combinedLabelPositionLeft = 30;
		expectedStateValue.progressBottom = [0, 0];
		expectedStateValue.progressHeight = [100, 100];
		expectedStateValue.sortedHandles = [
			{id: 0, value: 10},
			{id: 1, value: 50},
		];
		expectedStateValue.minValueLabelDisplay = 'visible';
		expectedStateValue.progressLeft = [10, 50];
		expectedStateValue.progressWidth = [40, 50];

		expect(state).toStrictEqual(expectedStateValue);

		slider.actions.keydown(keyboardEvent('End'), 0);

		expectedStateValue.values = [100, 50];
		expectedStateValue.sortedValues = [50, 100];
		expectedStateValue.handleTooltipLeft = [100, 50];
		expectedStateValue.handleTooltipTop = [0, 0];
		expectedStateValue.combinedLabelPositionLeft = 75;
		expectedStateValue.progressBottom = [0, 0];
		expectedStateValue.progressHeight = [100, 100];
		expectedStateValue.sortedHandles = [
			{id: 1, value: 50},
			{id: 0, value: 100},
		];
		expectedStateValue.maxValueLabelDisplay = 'hidden';
		expectedStateValue.progressLeft = [50, 100];
		expectedStateValue.progressWidth = [50, 100];

		expect(state).toStrictEqual(expectedStateValue);

		slider.actions.click(new MouseEvent('click', {clientX: 70}));

		expectedStateValue.values = [100, 70];
		expectedStateValue.sortedValues = [70, 100];
		expectedStateValue.handleTooltipLeft = [100, 70];
		expectedStateValue.handleTooltipTop = [0, 0];
		expectedStateValue.combinedLabelPositionLeft = 85;
		expectedStateValue.progressBottom = [0, 0];
		expectedStateValue.progressHeight = [100, 100];
		expectedStateValue.sortedHandles = [
			{id: 1, value: 70},
			{id: 0, value: 100},
		];
		expectedStateValue.progressLeft = [70, 100];
		expectedStateValue.progressWidth = [30, 100];

		expect(state).toStrictEqual(expectedStateValue);
	});

	test(`should merge the handle labels when the handles are too close`, () => {
		slider.patch({
			values: [45, 50],
		});
		const expectedStateValue = {...defaultStateValues};
		expectedStateValue.values = [45, 50];
		expectedStateValue.sortedValues = [45, 50];
		expectedStateValue.handleTooltipLeft = [45, 50];
		expectedStateValue.handleTooltipTop = [0, 0];
		expectedStateValue.combinedLabelPositionLeft = 47.5;
		expectedStateValue.progressBottom = [0, 0];
		expectedStateValue.progressHeight = [100, 100];
		expectedStateValue.sortedHandles = [
			{id: 0, value: 45},
			{id: 1, value: 50},
		];
		expectedStateValue.minValueLabelDisplay = 'visible';
		expectedStateValue.combinedLabelDisplay = 'visible';
		expectedStateValue.progressLeft = [45, 50];
		expectedStateValue.progressWidth = [5, 50];

		expect(state).toStrictEqual(expectedStateValue);

		slider.actions.click(new MouseEvent('click', {clientX: 70}));

		expectedStateValue.values = [45, 70];
		expectedStateValue.sortedValues = [45, 70];
		expectedStateValue.handleTooltipLeft = [45, 70];
		expectedStateValue.handleTooltipTop = [0, 0];
		expectedStateValue.combinedLabelPositionLeft = 57.5;
		expectedStateValue.progressBottom = [0, 0];
		expectedStateValue.progressHeight = [100, 100];
		expectedStateValue.sortedHandles = [
			{id: 0, value: 45},
			{id: 1, value: 70},
		];
		expectedStateValue.minValueLabelDisplay = 'visible';
		expectedStateValue.combinedLabelDisplay = 'hidden';
		expectedStateValue.progressLeft = [45, 70];
		expectedStateValue.progressWidth = [25, 70];

		expect(state).toStrictEqual(expectedStateValue);
	});
});

describe(`Slider vertical`, () => {
	let slider: SliderWidget;
	let state: WidgetState<SliderWidget>;
	let unsubscribe: UnsubscribeFunction;
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
		slider.directives.sliderDirective(sliderElement);
		slider.directives.minLabelDirective(minLabel);
		slider.directives.maxLabelDirective(maxLabel);
		slider.patch({
			values: [30],
			vertical: true,
		});
		unsubscribe = slider.state$.subscribe((newState) => {
			state = newState;
		});
	});

	afterEach(() => {
		unsubscribe();
	});

	test(`should calculate the clicked percent from the bottom to the top of the slider`, () => {
		const expectedStateValue = {...defaultStateValues};
		expectedStateValue.progressHeight = [30];
		expectedStateValue.handleTooltipLeft = [0];
		expectedStateValue.handleTooltipTop = [70];
		expectedStateValue.vertical = true;
		expectedStateValue.minValueLabelDisplay = 'visible';
		expectedStateValue.values = [30];
		expectedStateValue.sortedValues = [30];
		expectedStateValue.sortedHandles = [
			{
				id: 0,
				value: 30,
			},
		];
		expectedStateValue.progressWidth = [100];

		expect(state).toEqual(expectedStateValue);
	});
});
