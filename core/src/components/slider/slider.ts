import type {ReadableSignal, WritableSignal} from '@amadeus-it-group/tansu';
import {computed, readable, writable} from '@amadeus-it-group/tansu';
import type {WidgetsCommonPropsAndState} from '../commonProps';
import {
	browserDirective,
	createAttributesDirective,
	createBrowserStoreArrayDirective,
	createBrowserStoreDirective,
	mergeDirectives,
} from '../../utils/directive';
import type {ConfigValidator, Directive, PropsConfig, Widget, WidgetFactory} from '../../types';
import {noop} from '../../utils/func';
import {getDecimalPrecision} from '../../utils/internal/math';
import {bindableProp, stateStores, true$, writablesForProps} from '../../utils/stores';
import {typeArray, typeBoolean, typeFunction, typeNumber, typeNumberInRangeFactory, typeString} from '../../utils/writables';
import {createResizeObserver, createResizeObserverMap} from '../../services/resizeObserver';
import {createWidgetFactory} from '../../utils/widget';
import {manageMinMaxRange} from './slider-utils';
import {clamp} from '../../utils/internal/checks';

/**
 * Options for displaying progress in a slider component.
 */
export interface ProgressDisplayOptions {
	/**
	 * Right offset of the progress in %
	 */
	left: number | null;
	/**
	 * Left offset of the progress in %
	 */
	right: number | null;
	/**
	 * Top offset of the progress in %
	 */
	top: number | null;
	/**
	 * Bottom offset of the progress in %
	 */
	bottom: number | null;
	/**
	 * Width of the progress in %
	 */
	width: number;
	/**
	 * Height of the progress in %
	 */
	height: number;
	/**
	 * Id of the progress
	 */
	id: number;
}

/**
 * Options for displaying a handle in a slider component.
 */
export interface HandleDisplayOptions {
	/**
	 * Left offset of the handle in %
	 */
	left: number | null;
	/**
	 * Top offset of the handle in %
	 */
	top: number | null;
}

/**
 * Represents a handle in a slider component.
 */
export interface SliderHandle {
	/**
	 * Value of the handle
	 */
	value: number;
	/**
	 * Handle id
	 */
	id: number;
	/**
	 * ariaLabel of the handle
	 */
	ariaLabel: string | undefined;
	/**
	 * ariaValueText of the handle
	 */
	ariaValueText: string | undefined;
	/**
	 * aria-labelledBy of the handle
	 */
	ariaLabelledBy: string | undefined;
}

/**
 * Represents a tick in a slider component.
 */
export interface SliderTick {
	/**
	 * CSS classes to be applied on the tick
	 */
	className?: string | null;
	/**
	 * Visualized optional explanation of the label
	 */
	legend?: string | null;
	/**
	 * Position of the tick in percent
	 */
	position: number;
	/**
	 * If `true` the tick has selected style
	 */
	selected: boolean;
	/**
	 * Value of the tick
	 */
	value: number;
	/**
	 * If `true` the tick label is displayed
	 */
	displayLabel: boolean;
}

interface SliderCommonPropsAndState extends WidgetsCommonPropsAndState {
	/**
	 * Minimum value that can be assigned to the slider
	 *
	 * @defaultValue `0`
	 */
	min: number;

	/**
	 * Maximum value that can be assigned to the slider
	 *
	 * @defaultValue `100`
	 */
	max: number;

	/**
	 * Unit value between slider steps
	 *
	 * @defaultValue `1`
	 */
	stepSize: number;

	/**
	 * If `true` slider value cannot be changed but the slider is still focusable
	 *
	 * @defaultValue `false`
	 */
	readonly: boolean;

	/**
	 * If `true` slider value cannot be changed and the slider cannot be focused
	 *
	 * @defaultValue `false`
	 */
	disabled: boolean;

	/**
	 * If `true` is vertically positioned otherwise it is horizontal
	 *
	 * @defaultValue `false`
	 */
	vertical: boolean;

	/**
	 * Current slider values
	 *
	 * @defaultValue `[0]`
	 */
	values: number[];

	/**
	 * If `true` the value labels are displayed on the slider
	 *
	 * @defaultValue `true`
	 */
	showValueLabels: boolean;

	/**
	 * If `true` the min and max labels are displayed on the slider
	 *
	 * @defaultValue `true`
	 */
	showMinMaxLabels: boolean;

	/**
	 * If `true` the ticks are displayed on the slider
	 *
	 * @defaultValue `false`
	 */
	showTicks: boolean;

	/**
	 * It `true` slider display is inversed
	 *
	 * @defaultValue `false`
	 */
	rtl: boolean;
}

/**
 * Represents the state of a slider component.
 */
export interface SliderState extends SliderCommonPropsAndState {
	/**
	 * Sorted slider values
	 */
	sortedValues: number[];

	/**
	 * Combined label left offset in %
	 */
	combinedLabelPositionLeft: number;

	/**
	 * Combined label top offset in %
	 */
	combinedLabelPositionTop: number;

	/**
	 * If true, the minimum label will be visible
	 */
	minValueLabelDisplay: boolean;

	/**
	 * If true, the maximum label will be visible
	 */
	maxValueLabelDisplay: boolean;

	/**
	 * If true, the label when the handles are close is visible
	 */
	combinedLabelDisplay: boolean;

	/**
	 * Array of the sorted handles to display
	 */
	sortedHandles: SliderHandle[];

	/**
	 * Array of objects representing progress display options
	 */
	progressDisplayOptions: ProgressDisplayOptions[];

	/**
	 * Array of objects representing handle display options
	 */
	handleDisplayOptions: HandleDisplayOptions[];

	/**
	 * Check if the slider is interactive, meaning it is not disabled or readonly
	 */
	interactive: boolean;

	/**
	 * Array of ticks to display on the slider component
	 */
	ticks: SliderTick[];
}

/**
 * Interface representing the properties for the Slider component.
 */
export interface SliderProps extends SliderCommonPropsAndState {
	/**
	 * Return the value for the 'aria-label' attribute for the handle
	 * @param sortedIndex - index of the handle in the sorted list
	 *
	 * @defaultValue
	 * ```ts
	 * () => 'Value'
	 * ```
	 */
	ariaLabel: (sortedIndex: number) => string;

	/**
	 * Return the value for the 'aria-labelledBy' attribute for the handle
	 * @param sortedIndex - index of the handle in the sorted list
	 *
	 * @defaultValue
	 * ```ts
	 * () => ''
	 * ```
	 */
	ariaLabelledBy: (sortedIndex: number) => string;

	/**
	 * Return the value for the 'aria-valuetext' attribute for the handle
	 * @param value - value of the handle
	 * @param sortedIndex - index of the handle in the sorted list
	 *
	 * @defaultValue
	 * ```ts
	 * () => ''
	 * ```
	 */
	ariaValueText: (value: number, sortedIndex: number) => string;

	/**
	 * An event emitted when slider values are changed
	 *
	 * Event payload equals to the updated slider values
	 *
	 * @defaultValue
	 * ```ts
	 * () => {}
	 * ```
	 */
	onValuesChange: (values: number[]) => void;

	/**
	 * Unit value between the ticks
	 * If value is set to `0` the {@link stepSize} is used to space the ticks
	 *
	 * @defaultValue `0`
	 */
	tickInterval: number;

	/**
	 * If `true` the tick values are displayed on the slider
	 *
	 * @defaultValue `true`
	 */
	showTickValues: boolean;

	/**
	 * Minimum distance between two values.
	 * When set to 0, no minimum distance constraint is applied.
	 *
	 * @defaultValue `0`
	 */
	minRange: number;

	/**
	 * Maximum distance between two values
	 * When set to 0, no maximum distance constraint is applied.
	 *
	 * @defaultValue `0`
	 */
	maxRange: number;

	/**
	 * When true, if moving a value would break the minRange or maxRange constraint,
	 * it will instead push or pull the neighboring values to keep the allowed range rather than just stopping.
	 *
	 * @defaultValue `false`
	 */
	pushRange: boolean;
}

/**
 * Interface representing various directives used in the slider component.
 */
export interface SliderDirectives {
	/**
	 * Directive to get the slider component elementRef
	 */
	sliderDirective: Directive;

	/**
	 * Directive to apply to the slider container wrapping the slider content
	 */
	containerDirective: Directive;

	/**
	 * Directive used to style the progress display for each handle
	 */
	progressDisplayDirective: Directive<{option: ProgressDisplayOptions}>;

	/**
	 * Directive to apply to the slider clickable area, to directly move the handle to a given specific position
	 */
	clickableAreaDirective: Directive;

	/**
	 * Directive to apply handle events handlers
	 */
	handleEventsDirective: Directive<{item: {id: number}}>;
	/**
	 * Directive to apply to the slider handle if any
	 */
	handleDirective: Directive<{item: SliderHandle}>;

	/**
	 * Directive to get the minLabel elementRef
	 */
	minLabelDirective: Directive;

	/**
	 * Directive to get the maxLabel elementRef
	 */
	maxLabelDirective: Directive;

	/**
	 * Directive to apply to the handle when combined label display is active
	 */
	combinedHandleLabelDisplayDirective: Directive;

	/**
	 * Directive to apply to the handle when combined label display is not active
	 */
	handleLabelDisplayDirective: Directive<{index: number}>;

	/**
	 * Directive to apply to the slider tick
	 */
	tickDirective: Directive<{tick: SliderTick}>;

	/**
	 * Directive to apply to the slider tick label
	 */
	tickLabelDirective: Directive<{tick: SliderTick}>;
}

/**
 * Represents a slider widget component.
 */
export type SliderWidget = Widget<SliderProps, SliderState, object, SliderDirectives>;

const defaultSliderConfig: SliderProps = {
	min: 0,
	max: 100,
	stepSize: 1,
	readonly: false,
	disabled: false,
	vertical: false,
	className: '',
	ariaLabel: () => 'Value',
	ariaLabelledBy: () => '',
	ariaValueText: () => '',
	onValuesChange: noop,
	values: [0],
	showValueLabels: true,
	showMinMaxLabels: true,
	showTicks: false,
	showTickValues: true,
	tickInterval: 0,
	minRange: 0,
	maxRange: 0,
	pushRange: false,
	rtl: false,
};

/**
 * Returns a shallow copy of the default slider config.
 * @returns a copy of the default config
 */
export function getSliderDefaultConfig(): SliderProps {
	return {...defaultSliderConfig};
}

const configValidator: ConfigValidator<SliderProps> = {
	min: typeNumber,
	max: typeNumber,
	stepSize: typeNumberInRangeFactory(0, +Infinity, {strict: true}),
	readonly: typeBoolean,
	disabled: typeBoolean,
	vertical: typeBoolean,
	ariaLabel: typeFunction,
	ariaLabelledBy: typeFunction,
	ariaValueText: typeFunction,
	onValuesChange: typeFunction,
	values: typeArray,
	showValueLabels: typeBoolean,
	showMinMaxLabels: typeBoolean,
	showTicks: typeBoolean,
	showTickValues: typeBoolean,
	tickInterval: typeNumberInRangeFactory(0, +Infinity, {strict: true}),
	rtl: typeBoolean,
	className: typeString,
	minRange: typeNumberInRangeFactory(0, +Infinity),
	maxRange: typeNumberInRangeFactory(0, +Infinity),
	pushRange: typeBoolean,
};

/**
 * Computes slider clean value based on the input parameters
 * @param value - dirty value
 * @param min  - minimum value
 * @param max - maximum value
 * @param intStepSize - step size converted to integer
 * @param decimalPrecision - maximum decimum precision of slider values
 * @returns adjusted clean value
 */
const computeCleanValue = (value: number, min: number, max: number, intStepSize: number, decimalPrecision: number) => {
	const magnitude = Math.pow(10, decimalPrecision);
	if (value >= max) {
		return max;
	} else if (value <= min) {
		return min;
	}
	const indexMin = Math.floor(((value - min) * magnitude) / intStepSize);
	return +(((((value - min) * magnitude) % intStepSize < intStepSize / 2 ? indexMin : indexMin + 1) * intStepSize) / magnitude + min).toFixed(
		decimalPrecision,
	);
};

/**
 * Method to update the values for the slider keyboard navigation
 * @param handleIndex - index of the handle to update
 * @param values$ - writable signal that contains values
 * @param stepSize - slider step size
 * @param updateDirection - if equals 1 value is increased, if equals -1 value is decreased
 */
const updateValue = (handleIndex: number, values$: WritableSignal<number[]>, stepSize: number, updateDirection: number) => {
	values$.update((value) => {
		value = [...value];
		value[handleIndex] = value[handleIndex] + stepSize * updateDirection;
		return value;
	});
};

const getUpdateDirection = (vertical: boolean, rtl: boolean, keysVertical: boolean) => {
	if (vertical && rtl) {
		return keysVertical ? 1 : -1;
	} else if (vertical && !rtl) {
		return -1;
	} else if (!vertical && rtl) {
		return keysVertical ? -1 : 1;
	} else if (!vertical && !rtl) {
		return -1;
	}
	return 1;
};

/**
 * Utility to return percent string
 * @param value numberic percent value
 * @returns string with % appended to the numberic value
 */
const percent = (value: number | null) => (value != null ? `${value}%` : '');

/**
 * Create a slider widget with given config props
 * @param config - an optional slider config
 * @returns a SliderWidget
 */
export const createSlider: WidgetFactory<SliderWidget> = createWidgetFactory('slider', (config?: PropsConfig<SliderProps>) => {
	const [
		{
			// dirty inputs that need adjustment:
			min$: _dirtyMinimum$,
			max$: _dirtyMaximum$,
			minRange$: _dirtyMinimumRange$,
			maxRange$: _dirtyMaximumRange$,
			pushRange$,
			stepSize$,
			rtl$,
			values$: _dirtyValues$,

			ariaLabel$,
			ariaLabelledBy$,
			ariaValueText$,
			onValuesChange$,
			showValueLabels$,
			showMinMaxLabels$,
			showTicks$,
			showTickValues$,
			tickInterval$,

			...stateProps
		},
		patch,
	] = writablesForProps(defaultSliderConfig, config, configValidator);
	const {vertical$, disabled$, readonly$} = stateProps;
	let _prevCoordinate = -1;
	const _handleElements = new Map<number, HTMLElement>();
	// clean inputs adjustment
	const min$ = computed(() => {
		const _dirtyMinimum = _dirtyMinimum$(),
			_dirtyMaximum = _dirtyMaximum$();
		if (_dirtyMinimum === _dirtyMaximum) {
			return defaultSliderConfig.min;
		}
		return Math.min(_dirtyMinimum, _dirtyMaximum);
	});
	const max$ = computed(() => {
		const _dirtyMinimum = _dirtyMinimum$(),
			_dirtyMaximum = _dirtyMaximum$();
		if (_dirtyMinimum === _dirtyMaximum) {
			return defaultSliderConfig.max;
		}
		return Math.max(_dirtyMinimum, _dirtyMaximum);
	});
	const minRange$ = computed(() => {
		const _dirtyMinimumRange = _dirtyMinimumRange$();
		if (_dirtyMinimumRange <= 0) {
			return 0;
		}
		const _dirtyMaximumRange = _dirtyMaximumRange$();
		return _dirtyMaximumRange === 0 ? _dirtyMinimumRange : Math.min(_dirtyMinimumRange, _dirtyMaximumRange);
	});
	const maxRange$ = computed(() => {
		const _dirtyMaximumRange = _dirtyMaximumRange$();
		if (_dirtyMaximumRange <= 0) {
			return 0;
		}

		const _dirtyMinimumRange = _dirtyMinimumRange$();
		return _dirtyMinimumRange === 0 ? _dirtyMaximumRange : Math.max(_dirtyMinimumRange, _dirtyMaximumRange);
	});
	const _decimalPrecision$ = computed(() => Math.max(getDecimalPrecision(stepSize$()), getDecimalPrecision(min$()), getDecimalPrecision(max$())));
	const _intStepSize$ = computed(() => stepSize$() * Math.pow(10, _decimalPrecision$()));

	// Storage of the previous values to detect changes
	let previousValues = _dirtyValues$();
	const values$ = bindableProp(
		_dirtyValues$,
		onValuesChange$,
		(dirtyValues) => {
			const min = min$();
			const max = max$();
			const intStepSize = _intStepSize$();
			const decimalPrecision = _decimalPrecision$();
			const newValues = dirtyValues.map((dv) => computeCleanValue(dv, min, max, intStepSize, decimalPrecision));
			if (dirtyValues.length > 1) {
				const minRange = minRange$();
				const maxRange = maxRange$();
				if (minRange || maxRange) {
					const pushRange = pushRange$();
					const changedIndex = newValues.findIndex((dv, index) => dv !== previousValues[index]);
					if (changedIndex !== -1) {
						manageMinMaxRange(newValues, changedIndex, minRange, maxRange, min, max, pushRange);
					}
				}
			}
			previousValues = newValues;
			return newValues;
		},
		typeArray.equal,
	);

	// computed
	const {directive: sliderDirective, element$: sliderDom$} = createBrowserStoreDirective();
	const {directive: minLabelDomDirective, element$: minLabelDom$} = createBrowserStoreDirective();
	const {directive: maxLabelDomDirective, element$: maxLabelDom$} = createBrowserStoreDirective();
	const {directive: handleLabelDirective, elements$: currentLabelDoms$} = createBrowserStoreArrayDirective();
	const {directive: resizeDirective, dimensions$} = createResizeObserver();
	const {directive: resizeLabelsDirective, dimensionsMap$: handleDimensions$} = createResizeObserverMap();
	const {directive: resizeCombineLabelDirective, dimensions$: combinedDimensions$} = createResizeObserver();

	const updateSliderSize$ = writable({});
	const sliderDomRect$ = computed(
		() => {
			dimensions$();
			updateSliderSize$();
			return sliderDom$()?.getBoundingClientRect() ?? ({} as DOMRect);
		},
		{
			equal: Object.is,
		},
	);
	const minLabelDomRect$ = computed(
		() => {
			dimensions$();
			updateSliderSize$();
			return minLabelDom$()?.getBoundingClientRect() ?? ({} as DOMRect);
		},
		{
			equal: (a, b) => Object.is(a, b),
		},
	);
	const maxLabelDomRect$ = computed(
		() => {
			dimensions$();
			updateSliderSize$();
			return maxLabelDom$()?.getBoundingClientRect() ?? ({} as DOMRect);
		},
		{
			equal: (a, b) => Object.is(a, b),
		},
	);

	const sliderDomRectOffset$ = computed(() => sliderDomRect$()[vertical$() ? 'top' : 'left']);
	const sliderDomRectSize$ = computed(() => sliderDomRect$()[vertical$() ? 'height' : 'width']);
	const sortedValues$ = computed(() => [...values$()].sort((a, b) => a - b));
	const _sortedHandlesValues$ = computed(() => {
		return values$()
			.map((val, index) => {
				return {id: index, value: val};
			})
			.sort((a, b) => a.value - b.value);
	});
	const sortedHandles$ = computed(() => {
		const ariaLabelHandle = ariaLabel$(),
			ariaValueText = ariaValueText$(),
			ariaLabelledBy = ariaLabelledBy$();
		return _sortedHandlesValues$().map((sortedValue, index) => {
			return {
				...sortedValue,
				ariaLabel: ariaLabelledBy(index) ? undefined : ariaLabelHandle(index),
				ariaLabelledBy: ariaLabelledBy(index) || undefined,
				ariaValueText: ariaValueText(sortedValue.value, index) || undefined,
			};
		});
	});
	const valuesPercent$ = computed(() => values$().map((val) => percentCompute(val)));
	const sortedValuesPercent$ = computed(() => [...valuesPercent$()].sort((a, b) => a - b));
	const activeDimension$ = computed(() => (vertical$() ? 'height' : 'width'));
	const activePosition$ = computed(() => (vertical$() ? 'top' : 'left'));
	const minLabelSize$ = computed(() => pixelToPercent(minLabelDomRect$()[activeDimension$()]));
	const maxLabelSize$ = computed(() => pixelToPercent(maxLabelDomRect$()[activeDimension$()]));
	// to avoid showing the tick labels when the value labels are shown. Not using intersection saves performance on boudingClientRect call
	const adjustedShowValueLabels$ = computed(() => showValueLabels$() && (!showTicks$() || !showTickValues$()));

	/**
	 * Utility method to translate pixels to percent based on the slider size
	 * @param pixels px size to be translated
	 * @returns percent representation of the pixels provided or 0 if the input was undefined
	 */
	const pixelToPercent = (pixels: number | undefined) => (pixels ? (pixels / sliderDomRectSize$()) * 100 : 0);

	const combinedLabelSize$ = computed(() => pixelToPercent(combinedDimensions$()?.contentRect[activeDimension$()]));

	const combinedLabelPosition$ = computed(() => (vertical$() ? combinedLabelPositionTop$() : combinedLabelPositionLeft$()));
	const currentLabelSizeByIndex = (index: number) =>
		pixelToPercent(handleDimensions$().get(currentLabelDoms$()[index])?.contentRect[activeDimension$()]);
	const minValueLabelDisplay$ = computed(() => {
		if (!showMinMaxLabels$() || (showTicks$() && showTickValues$())) {
			return false;
		} else if (!showValueLabels$()) {
			return true;
		}
		const minLabelSize = minLabelSize$();
		const vertical = vertical$();
		const rtl = rtl$();
		if (combinedLabelDisplay$()) {
			const combinedLabelSize = combinedLabelSize$();
			const combinedLabelPosition = combinedLabelPosition$();
			return (rtl && !vertical) || (vertical && !rtl)
				? combinedLabelPosition + combinedLabelSize / 2 < 100 - minLabelSize - 1
				: combinedLabelPosition - combinedLabelSize / 2 > minLabelSize + 1;
		}
		const sortedValuesPercent = sortedValuesPercent$();
		return rtl
			? sortedValuesPercent[0] - currentLabelSizeByIndex(sortedValuesPercent.length - 1) / 2 > minLabelSize + 1
			: sortedValuesPercent[0] - currentLabelSizeByIndex(0) / 2 > minLabelSize + 1;
	});
	const maxValueLabelDisplay$ = computed(() => {
		if (!showMinMaxLabels$() || (showTicks$() && showTickValues$())) {
			return false;
		} else if (!showValueLabels$()) {
			return true;
		}
		const maxLabelSize = maxLabelSize$();
		const vertical = vertical$();
		const rtl = rtl$();
		if (combinedLabelDisplay$()) {
			const combinedLabelSize = combinedLabelSize$();
			const combinedLabelPosition = combinedLabelPosition$();
			return (rtl && !vertical) || (vertical && !rtl)
				? combinedLabelPosition - combinedLabelSize / 2 > maxLabelSize + 1
				: combinedLabelPosition + combinedLabelSize / 2 < 100 - maxLabelSize - 1;
		}
		const sortedValuesPercent = sortedValuesPercent$();
		return rtl
			? 100 - sortedValuesPercent[sortedValuesPercent.length - 1] - currentLabelSizeByIndex(0) / 2 > maxLabelSize + 1
			: sortedValuesPercent[sortedValuesPercent.length - 1] + currentLabelSizeByIndex(sortedValuesPercent.length - 1) / 2 < 100 - maxLabelSize - 1;
	});

	const combinedLabelDisplay$ = computed(() => {
		if (currentLabelDoms$().length == 2) {
			return doLabelsIntersect();
		}
		return false;
	});

	/**
	 * Utility to check whether two labels intersect
	 * @returns `true` if the labels overlap, `false` otherwise
	 */
	function doLabelsIntersect(): boolean {
		const handleOptions = handleDisplayOptions$();
		const activePosition = activePosition$();

		// Get positions (already adjusted to slider bounds by labelPosition)
		const labelPosition1 = labelPosition(handleOptions[0][activePosition]!, currentLabelSizeByIndex(0));
		const labelPosition2 = labelPosition(handleOptions[1][activePosition]!, currentLabelSizeByIndex(1));

		// Get label sizes in percent
		const labelSize1 = currentLabelSizeByIndex(0);
		const labelSize2 = currentLabelSizeByIndex(1);
		// check the cases when getBoundingClientRect is taken before the full paint
		if (labelSize1 === 100 || labelSize2 === 100) {
			return false;
		}

		// Calculate edges in percent (labels are centered on position)
		const labelStart1 = labelPosition1 - labelSize1;
		const labelEnd1 = labelPosition1 + labelSize1;
		const labelStart2 = labelPosition2 - labelSize2;
		const labelEnd2 = labelPosition2 + labelSize2;

		// Check if ranges overlap
		return !(labelEnd1 < labelStart2 || labelStart1 > labelEnd2);
	}

	const interactive$ = computed(() => !disabled$() && !readonly$());

	const combinedLabelPositionLeft$ = computed(() => {
		const sortedValuesPercent = sortedValuesPercent$();
		const combinedLabelSize = combinedLabelSize$();
		let combinedPosition = (sortedValuesPercent[0] + sortedValuesPercent[1]) / 2;
		combinedPosition = labelPosition(combinedPosition, combinedLabelSize);
		return vertical$() || sortedValuesPercent.length != 2 ? 0 : rtl$() ? 100 - combinedPosition : combinedPosition;
	});

	const combinedLabelPositionTop$ = computed(() => {
		const sortedValuesPercent = sortedValuesPercent$();
		const combinedPosition = 100 - (sortedValuesPercent[0] + sortedValuesPercent[1]) / 2;
		return vertical$() && sortedValuesPercent.length == 2 ? (rtl$() ? 100 - combinedPosition : combinedPosition) : 0;
	});

	const handleDisplayOptions$ = computed(() => {
		const vertical = vertical$(),
			rtl = rtl$();
		return valuesPercent$().map((vp) => {
			return {
				left: rtl ? (vertical ? null : 100 - vp) : vertical ? null : vp,
				top: rtl ? (vertical ? vp : null) : vertical ? 100 - vp : null,
			};
		});
	});

	/**
	 * Computes the label position inside the slider bounds
	 * @param initialPosition original label position
	 * @param labelSize size of the label to be put within the bounds
	 * @returns position of the label within the slider bounds
	 */
	const labelPosition = (initialPosition: number, labelSize: number) => clamp(initialPosition, 100 - labelSize / 2, labelSize / 2);

	const progressDisplayOptions$ = computed(() => {
		const vertical = vertical$(),
			sortedValuesPercent = sortedValuesPercent$(),
			rtl = rtl$();
		if (sortedValuesPercent.length === 1) {
			return [
				{
					left: vertical ? null : rtl ? null : 0,
					right: vertical ? null : rtl ? 0 : null,
					bottom: vertical ? (rtl ? null : 0) : null,
					top: vertical ? (rtl ? 0 : null) : null,
					width: vertical ? 100 : sortedValuesPercent[0],
					height: vertical ? sortedValuesPercent[0] : 100,
					id: 0,
				},
			];
		} else {
			return sortedValuesPercent
				.map((svp, index, array) => {
					return {
						left: vertical ? null : rtl ? null : svp,
						right: vertical ? null : rtl ? array[index] : null,
						bottom: vertical ? (rtl ? null : svp) : null,
						top: vertical ? (rtl ? array[index] : null) : null,
						width: vertical ? 100 : index === array.length - 1 ? svp : array[index + 1] - svp,
						height: vertical ? (index === array.length - 1 ? svp : array[index + 1] - svp) : 100,
						id: index,
					};
				})
				.slice(0, sortedValuesPercent.length - 1);
		}
	});

	const computeTicks$ = computed(() => {
		if (!showTicks$()) {
			return [];
		}

		const vertical = vertical$();
		const min = min$();
		const max = max$();
		const rtl = rtl$();
		const showTickValues = showTickValues$();
		const tickInterval = tickInterval$() || stepSize$();
		const tickArray = [];
		const intStepSize = _intStepSize$();
		const decimalPrecision = _decimalPrecision$();
		/**
		 * Utility to decide whether the position is inverted based on the slider orientation
		 * @param position initial position to check
		 * @returns postion based on the slider orientation
		 */
		const positionCompute = (position: number) => {
			return !!rtl !== !!vertical ? 100 - position : position;
		};
		for (let step = min; step < max; step += tickInterval) {
			const cleanValue = computeCleanValue(step, min, max, intStepSize, decimalPrecision);
			const stepPercent = percentCompute(cleanValue);
			tickArray.push({position: positionCompute(stepPercent), selected: false, value: cleanValue, displayLabel: showTickValues});
		}
		tickArray.push({position: positionCompute(100), selected: false, value: max, displayLabel: showTickValues});
		return tickArray;
	});

	const ticks$ = computed(() => {
		const sortedValues = sortedValues$();
		/**
		 * Utility to verify whether the value is in the selected range
		 * @param value value to check
		 * @returns ``true`` if the value is in the selected range, ``false`` otherwise
		 */
		const isTickSelected = (value: number) => {
			const isMultiHandle = sortedValues.length > 1;
			const currentMax = isMultiHandle ? sortedValues[sortedValues.length - 1] : sortedValues[0];
			const currentMin = isMultiHandle ? sortedValues[0] : 0;
			return value <= currentMax && value >= currentMin;
		};

		return computeTicks$().map((tick) => {
			return {
				...tick,
				selected: isTickSelected(tick.value),
			};
		});
	});

	// functions
	const percentCompute = (value: number) => {
		const min = min$(),
			max = max$();
		return ((value - min) * 100) / (max - min);
	};
	const getClosestSliderHandle = (clickedPercent: number) => {
		const values = values$();
		if (values.length === 1) {
			return 0;
		}
		const sortedValues = sortedValues$();
		const closestBigger = sortedValues.find((sv) => percentCompute(sv) > clickedPercent * 100);
		const closestBiggerIndex = closestBigger ? sortedValues.indexOf(closestBigger) : sortedValues.length - 1;
		const midPoint = percentCompute(
			sortedValues[closestBiggerIndex - 1] + (sortedValues[closestBiggerIndex] - sortedValues[closestBiggerIndex - 1]) / 2,
		);
		const closestValue = sortedValues[clickedPercent * 100 <= midPoint ? closestBiggerIndex - 1 : closestBiggerIndex];
		return values.indexOf(closestValue);
	};

	/**
	 * Utility to get the clicked percent based on the clicked coordinate
	 * @param clickedCoordinate numeric value of the clicked coordinate
	 * @returns percent value of the clicked coordinate
	 */
	const getClickedPercent = (clickedCoordinate: number) => {
		const sliderDomRectSize = sliderDomRectSize$(),
			sliderDomRectOffset = sliderDomRectOffset$();
		let clickedPercent = vertical$()
			? (sliderDomRectSize - clickedCoordinate + sliderDomRectOffset) / sliderDomRectSize
			: (clickedCoordinate - sliderDomRectOffset) / sliderDomRectSize;
		clickedPercent = rtl$() ? 1 - clickedPercent : clickedPercent;
		return clickedPercent;
	};

	const adjustCoordinate = (clickedCoordinate: number, handleNumber?: number) => {
		if (interactive$()) {
			const clickedPercent = getClickedPercent(clickedCoordinate);
			const derivedHandleIndex = handleNumber ?? getClosestSliderHandle(clickedPercent);
			const newValue = clickedPercent * (max$() - min$()) + min$();
			values$.update((dh) => {
				dh = [...dh];
				dh[derivedHandleIndex] = newValue;
				return dh;
			});
		}
	};

	const horizontal$ = computed(() => !vertical$());

	const containerDirective = createAttributesDirective(() => ({
		classNames: {
			'au-slider': true$,
			'au-slider-vertical': vertical$,
			'au-slider-horizontal': horizontal$,
		},
		attributes: {
			class: stateProps.className$,
		},
	}));

	const contentDirective = createAttributesDirective(() => ({
		attributes: {
			'aria-disabled': computed(() => (disabled$() ? 'true' : undefined)),
			class: stateProps.className$,
		},
		classNames: {
			'au-slider-content': true$,
			'au-slider-vertical': vertical$,
			'au-slider-horizontal': horizontal$,
			'au-slider-with-labels': computed(() => showValueLabels$() || showMinMaxLabels$() || (showTickValues$() && showTicks$())),
			disabled: disabled$,
		},
	}));

	const minLabelDirective = createAttributesDirective(() => ({
		classNames: {
			'au-slider-label-vertical': vertical$,
			'au-slider-label-vertical-min': vertical$,
			'au-slider-label': horizontal$,
			'au-slider-label-min': horizontal$,
			'au-slider-rtl': rtl$,
			invisible: computed(() => !minValueLabelDisplay$()),
		},
		attributes: {
			'aria-hidden': readable('true'),
		},
	}));

	const maxLabelDirective = createAttributesDirective(() => ({
		classNames: {
			'au-slider-label-vertical': vertical$,
			'au-slider-label-vertical-max': vertical$,
			'au-slider-label': horizontal$,
			'au-slider-label-max': horizontal$,
			'au-slider-rtl': rtl$,
			invisible: computed(() => !maxValueLabelDisplay$()),
		},
		attributes: {
			'aria-hidden': readable('true'),
		},
	}));

	// custom directive to retrieve the HTMLElement of each slider handle
	const handleElementDirective: Directive<{item: SliderHandle}> = browserDirective((handleItem: HTMLElement, args: {item: SliderHandle}) => {
		const destroy = () => {
			_handleElements.delete(args.item.id);
		};

		const update = (args: {item: SliderHandle}) => {
			_handleElements.set(args.item.id, handleItem);
		};

		update(args);

		return {
			update,
			destroy,
		};
	});

	/**
	 * Mousedown even handler that controls `mousemove` and `mouseup` events
	 * @param event MouseEvent object
	 * @param handleId optional handle id
	 */
	const mouseDown = (event: MouseEvent, handleId?: number) => {
		event.preventDefault();
		const currentTarget = handleId !== undefined ? _handleElements.get(handleId) : (event.target as HTMLElement);
		const handleDrag = (e: MouseEvent) => {
			e.preventDefault();
			const newCoord = vertical$() ? e.clientY : e.clientX;
			currentTarget?.focus();
			if (_prevCoordinate !== newCoord) {
				_prevCoordinate = newCoord;
				adjustCoordinate(newCoord, handleId);
			}
		};
		if (interactive$()) {
			updateSliderSize$.set({});
			currentTarget?.focus();
			document.addEventListener('mousemove', handleDrag);
			document.addEventListener(
				'mouseup',
				() => {
					document.removeEventListener('mousemove', handleDrag);
				},
				{once: true},
			);
		}
	};

	const touchStart = (event: TouchEvent, handleId?: number) => {
		const currentTarget = handleId !== undefined ? _handleElements.get(handleId) : (event.target as HTMLElement);
		const handleDrag = (e: TouchEvent) => {
			e.preventDefault();
			const newCoord = vertical$() ? e.touches[0].clientY : e.touches[0].clientX;
			currentTarget?.focus();
			if (_prevCoordinate !== newCoord) {
				_prevCoordinate = newCoord;
				adjustCoordinate(newCoord, handleId);
			}
		};
		if (interactive$()) {
			updateSliderSize$.set({});
			currentTarget?.focus();
			document.addEventListener('touchmove', handleDrag, {passive: false});
			document.addEventListener(
				'touchend',
				() => {
					document.removeEventListener('touchmove', handleDrag);
					document.removeEventListener('touchcancel', handleDrag);
				},
				{once: true},
			);
			document.addEventListener(
				'touchcancel',
				() => {
					document.removeEventListener('touchmove', handleDrag);
					document.removeEventListener('touchend', handleDrag);
				},
				{once: true},
			);
		}
	};

	const handleEventsDirective = createAttributesDirective((handleContext$: ReadableSignal<{item: {id: number}}>) => ({
		events: {
			keydown: (event: KeyboardEvent) => {
				const handleIndex = handleContext$().item.id;
				const {key} = event;
				const rtl = rtl$(),
					stepSize = stepSize$(),
					min = min$(),
					max = max$(),
					vertical = vertical$();
				if (interactive$()) {
					switch (key) {
						case 'ArrowDown':
							updateValue(handleIndex, values$, stepSize, getUpdateDirection(vertical, rtl, true));
							break;
						case 'ArrowLeft':
							updateValue(handleIndex, values$, stepSize, getUpdateDirection(vertical, rtl, false));
							break;
						case 'ArrowUp':
							updateValue(handleIndex, values$, stepSize, -1 * getUpdateDirection(vertical, rtl, true));
							break;
						case 'ArrowRight':
							updateValue(handleIndex, values$, stepSize, -1 * getUpdateDirection(vertical, rtl, false));
							break;
						case 'Home':
							values$.update((value) => {
								value = [...value];
								value[handleIndex] = min;
								return value;
							});
							break;
						case 'End':
							values$.update((value) => {
								value = [...value];
								value[handleIndex] = max;
								return value;
							});
							break;
						case 'PageUp':
							// TODO it is optional in accessibility guidelines, so define the skip value for steps and write unit test
							break;
						case 'PageDown':
							// TODO it is optional in accessibility guidelines, so define the skip value for steps and write unit test
							break;
						default:
							return;
					}
					event.preventDefault();
				}
			},
			mousedown: (event: MouseEvent) => {
				if (event.button !== 0) {
					return;
				}
				mouseDown(event, handleContext$().item.id);
			},
			touchstart: (event: TouchEvent) => {
				touchStart(event, handleContext$().item.id);
			},
		},
	}));

	const widget: SliderWidget = {
		...stateStores({
			min$,
			max$,
			stepSize$,
			values$,
			sortedValues$,
			sortedHandles$,
			minValueLabelDisplay$,
			maxValueLabelDisplay$,
			combinedLabelDisplay$,
			interactive$,
			combinedLabelPositionLeft$,
			combinedLabelPositionTop$,
			progressDisplayOptions$,
			handleDisplayOptions$,
			showValueLabels$: adjustedShowValueLabels$,
			showMinMaxLabels$,
			showTicks$,
			rtl$,
			ticks$,
			...stateProps,
		}),
		patch,
		api: {},
		directives: {
			sliderDirective: mergeDirectives(sliderDirective, resizeDirective, contentDirective),
			containerDirective,
			progressDisplayDirective: createAttributesDirective((progressContext$: ReadableSignal<{option: ProgressDisplayOptions}>) => ({
				styles: {
					left: computed(() => percent(progressContext$().option.left)),
					right: computed(() => percent(progressContext$().option.right)),
					top: computed(() => percent(progressContext$().option.top)),
					bottom: computed(() => percent(progressContext$().option.bottom)),
					width: computed(() => percent(progressContext$().option.width)),
					height: computed(() => percent(progressContext$().option.height)),
				},
				classNames: {
					'au-slider-progress': true$,
				},
			})),
			clickableAreaDirective: createAttributesDirective(() => ({
				events: {
					mousedown: (event: MouseEvent) => {
						if (event.button !== 0) {
							return;
						}
						const clickedCoordinate = vertical$() ? event.clientY : event.clientX;
						const closestHandle = getClosestSliderHandle(getClickedPercent(clickedCoordinate));
						adjustCoordinate(clickedCoordinate, closestHandle);
						mouseDown(event, closestHandle);
					},
					touchstart: (event: TouchEvent) => {
						const clickedCoordinate = vertical$() ? event.touches[0].clientY : event.touches[0].clientX;
						const closestHandle = getClosestSliderHandle(getClickedPercent(clickedCoordinate));
						adjustCoordinate(clickedCoordinate, closestHandle);
						touchStart(event, closestHandle);
					},
				},
				classNames: {
					'au-slider-clickable-area': horizontal$,
					'au-slider-clickable-area-vertical': vertical$,
					'au-slider-clickable-area-with-ticks': computed(() => showTicks$() && tickInterval$() === 0),
				},
			})),
			handleEventsDirective,
			handleDirective: mergeDirectives(
				handleElementDirective,
				handleEventsDirective,
				createAttributesDirective((handleContext$: ReadableSignal<{item: SliderHandle}>) => ({
					attributes: {
						role: readable('slider'),
						'aria-valuemin': min$,
						'aria-valuemax': max$,
						'aria-valuenow': computed(() => handleContext$().item.value),
						'aria-valuetext': computed(() => handleContext$().item.ariaValueText),
						'aria-label': computed(() => handleContext$().item.ariaLabel),
						'aria-labelledBy': computed(() => handleContext$().item.ariaLabelledBy),
						'aria-orientation': computed(() => (vertical$() ? 'vertical' : undefined)),
						'aria-disabled': computed(() => (disabled$() ? 'true' : undefined)),
						disabled: disabled$,
						'aria-readonly': computed(() => (readonly$() ? 'true' : undefined)),
					},
					styles: {
						left: computed(() => percent(handleDisplayOptions$()[handleContext$().item.id].left)),
						top: computed(() => percent(handleDisplayOptions$()[handleContext$().item.id].top)),
					},
					classNames: {
						'au-slider-handle': true$,
						'au-slider-handle-vertical': vertical$,
						'au-slider-handle-horizontal': horizontal$,
					},
				})),
			),
			minLabelDirective: mergeDirectives(minLabelDomDirective, minLabelDirective),
			maxLabelDirective: mergeDirectives(maxLabelDomDirective, maxLabelDirective),
			combinedHandleLabelDisplayDirective: mergeDirectives(
				resizeCombineLabelDirective,
				createAttributesDirective(() => ({
					classNames: {
						'au-slider-label-vertical': vertical$,
						'au-slider-label-vertical-now': vertical$,
						'au-slider-label': horizontal$,
						'au-slider-label-now': horizontal$,
					},
					styles: {
						left: computed(() => percent(combinedLabelPositionLeft$())),
						top: computed(() => percent(combinedLabelPositionTop$())),
					},
					attributes: {
						'aria-hidden': readable('true'),
					},
				})),
			),
			handleLabelDisplayDirective: mergeDirectives<{index: number}>(
				handleLabelDirective,
				resizeLabelsDirective,
				createAttributesDirective((labelDisplayContext$: ReadableSignal<{index: number}>) => ({
					classNames: {
						'au-slider-label-vertical': vertical$,
						'au-slider-label-vertical-now': vertical$,
						'au-slider-label': horizontal$,
						'au-slider-label-now': horizontal$,
					},
					styles: {
						left: computed(() => {
							const handleIndex = labelDisplayContext$().index;
							const leftPosition = handleDisplayOptions$()[handleIndex].left;
							return leftPosition === null ? '' : percent(labelPosition(leftPosition, currentLabelSizeByIndex(handleIndex)));
						}),
						top: computed(() => percent(handleDisplayOptions$()[labelDisplayContext$().index].top)),
						opacity: computed(() => (combinedLabelDisplay$() ? '0' : '1')),
					},
					attributes: {
						'aria-hidden': readable('true'),
					},
				})),
			),
			tickDirective: createAttributesDirective((tickContext$: ReadableSignal<{tick: SliderTick}>) => ({
				classNames: {
					'au-slider-tick': true$,
					'au-slider-tick-horizontal': horizontal$,
					'au-slider-tick-vertical': vertical$,
				},
				styles: {
					left: computed(() => (vertical$() ? null : percent(tickContext$().tick.position))),
					top: computed(() => (vertical$() ? percent(tickContext$().tick.position) : null)),
				},
				events: {
					click: (event: MouseEvent) => {
						adjustCoordinate(vertical$() ? event.clientY : event.clientX);
					},
				},
				attributes: {
					'aria-hidden': readable('true'),
				},
			})),
			tickLabelDirective: createAttributesDirective((tickContext$: ReadableSignal<{tick: SliderTick}>) => ({
				classNames: {
					'au-slider-tick-label': true$,
					'au-slider-tick-label-vertical': vertical$,
					'au-slider-tick-label-now': computed(() => sortedValues$().some((sv) => sv === tickContext$().tick.value)),
				},
				styles: {
					left: computed(() => (vertical$() ? null : percent(tickContext$().tick.position))),
					top: computed(() => (vertical$() ? percent(tickContext$().tick.position) : null)),
				},
				attributes: {
					'aria-hidden': readable('true'),
				},
			})),
		},
	};

	return widget;
});
