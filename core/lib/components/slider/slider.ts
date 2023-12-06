import {computed, derived, writable} from '@amadeus-it-group/tansu';
import type {WidgetsCommonPropsAndState} from '../commonProps';
import {bindableDerived, writablesForProps} from '../../utils/stores';
import {createStoreDirective, directiveSubscribe, mergeDirectives} from '../../utils/directive';
import {stateStores} from '../../utils/stores';
import {typeArray, typeBoolean, typeFunction, typeNumber, typeNumberInRangeFactory} from '../../utils/writables';
import type {ConfigValidator, Directive, PropsConfig, Widget} from '../../types';
import {noop} from '../../utils/internal/func';
import {getDecimalPrecision} from '../../utils/internal/math';

export interface ProgressDisplayOptions {
	/**
	 * Left offset of the progress in %
	 */
	left: number;
	/**
	 * Bottom offset of the progress in %
	 */
	bottom: number;
	/**
	 * Width of the progress in %
	 */
	width: number;
	/**
	 * Height of hte progress in %
	 */
	height: number;
}

export interface HandleDisplayOptions {
	/**
	 * Left offset of the handle in %
	 */
	left: number;
	/**
	 * Top offset of the handle in %
	 */
	top: number;
}

export interface SliderCommonPropsAndState extends WidgetsCommonPropsAndState {
	/**
	 * Minimum value that can be assigned to the slider
	 */
	min: number;

	/**
	 * Maximum value that can be assigned to the slider
	 */
	max: number;

	/**
	 * Unit value between slider steps
	 */
	stepSize: number;

	/**
	 * If `true` slider value cannot be changed but the slider is still focusable
	 */
	readonly: boolean;

	/**
	 * If `true` slider value cannot be changed and the slider cannot be focused
	 */
	disabled: boolean;

	/**
	 * If `true` is vertically positioned otherwise it is horizontal
	 */
	vertical: boolean;

	/**
	 * Current slider values
	 */
	values: number[];

	/**
	 * If `true` the value labels are displayed on the slider
	 */
	showValueLabels: boolean;

	/**
	 * If `true` the min and max labels are displayed on the slider
	 */
	showMinMaxLabels: boolean;
}

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
	sortedHandles: {value: number; id: number; ariaLabel: string}[];

	/**
	 * Array of objects representing progress display options
	 */
	progressDisplayOptions: ProgressDisplayOptions[];

	/**
	 * Array of objects representing handle display options
	 */
	handleDisplayOptions: HandleDisplayOptions[];
}

export interface SliderProps extends SliderCommonPropsAndState {
	/**
	 * Return the value for the 'aria-label' attribute for the handle
	 * @param value - value of the handle
	 * @param sortedIndex - index of the handle in the sorted list
	 * @param index - index of the handle in the original list
	 */
	ariaLabelHandle: (value: number, sortedIndex: number, index: number) => string;

	/**
	 * An event emitted when slider values are changed
	 *
	 * Event payload equals to the updated slider values
	 */
	onValuesChange: (values: number[]) => void;
}

export interface SliderApi {}

export interface SliderDirectives {
	/**
	 * Directive to get the slider component elementRef
	 */
	sliderDirective: Directive;

	/**
	 * Directive to get the minLabel elementRef
	 */
	minLabelDirective: Directive;

	/**
	 * Directive to get the maxLabel elementRef
	 */
	maxLabelDirective: Directive;
}

export interface SliderActions {
	/**
	 * Method to handle click on the slider
	 * @param event - mouse event
	 */
	click(event: MouseEvent): void;
	/**
	 * Method to process the keyboard event
	 * @param event - keyboard event object
	 * @param handleNumber - id of the modified handle
	 */
	keydown(event: KeyboardEvent, handleNumber: number): void;

	/**
	 * Method describing the behavior of the slider handle on mouse down event
	 * @param event - mouse event
	 * @param handleId - numeric id of the handle
	 */
	mouseDown(event: MouseEvent, handleId: number): void;
}

export type SliderWidget = Widget<SliderProps, SliderState, SliderApi, SliderActions, SliderDirectives>;

const defaultSliderConfig: SliderProps = {
	min: 0,
	max: 100,
	stepSize: 1,
	readonly: false,
	disabled: false,
	vertical: false,
	className: '',
	ariaLabelHandle: (value, _index) => '' + value,
	onValuesChange: noop,
	values: [0],
	showValueLabels: true,
	showMinMaxLabels: true,
};

/**
 * Returns a shallow copy of the default slider config.
 * @returns a copy of the default config
 */
export function getSliderDefaultConfig() {
	return {...defaultSliderConfig};
}

const configValidator: ConfigValidator<SliderProps> = {
	min: typeNumber,
	max: typeNumber,
	stepSize: typeNumberInRangeFactory(0, +Infinity, {strict: true}),
	readonly: typeBoolean,
	disabled: typeBoolean,
	vertical: typeBoolean,
	ariaLabelHandle: typeFunction,
	onValuesChange: typeFunction,
	values: typeArray,
	showValueLabels: typeBoolean,
	showMinMaxLabels: typeBoolean,
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
 * Create a slider widget with given config props
 * @param config - an optional slider config
 * @returns a SliderWidget
 */
export function createSlider(config?: PropsConfig<SliderProps>): SliderWidget {
	const [
		{
			// dirty inputs that need adjustment:
			min$: _dirtyMinimum$,
			max$: _dirtyMaximum$,
			stepSize$,
			values$: _dirtyValues$,

			ariaLabelHandle$,
			onValuesChange$,
			showValueLabels$,
			showMinMaxLabels$,

			...stateProps
		},
		patch,
	] = writablesForProps(defaultSliderConfig, config, configValidator);
	const {vertical$, disabled$, readonly$} = stateProps;
	let _prevCoordinate = -1;
	// clean inputs adjustment
	const min$ = computed(() => {
		if (_dirtyMinimum$() === _dirtyMaximum$()) return defaultSliderConfig.min;
		return Math.min(_dirtyMinimum$(), _dirtyMaximum$());
	});
	const max$ = computed(() => {
		if (_dirtyMinimum$() === _dirtyMaximum$()) return defaultSliderConfig.max;
		return Math.max(_dirtyMinimum$(), _dirtyMaximum$());
	});
	const _decimalPrecision$ = computed(() => Math.max(getDecimalPrecision(stepSize$()), getDecimalPrecision(min$()), getDecimalPrecision(max$())));
	const _intStepSize$ = computed(() => stepSize$() * Math.pow(10, _decimalPrecision$()));

	const values$ = bindableDerived(
		onValuesChange$,
		[_dirtyValues$, min$, max$, _intStepSize$, _decimalPrecision$],
		([dirtyValues, min, max, intStepSize, decimalPrecision]) =>
			dirtyValues.map((dv) => computeCleanValue(dv, min, max, intStepSize, decimalPrecision)),
		typeArray.equal,
	);

	// computed
	const {directive: sliderDirective, element$: sliderDom$} = createStoreDirective();
	const {directive: minLabelDirective, element$: minLabelDom$} = createStoreDirective();
	const {directive: maxLabelDirective, element$: maxLabelDom$} = createStoreDirective();

	const sliderResized$ = derived(
		sliderDom$,
		(sliderDom, set) => {
			if (!sliderDom) {
				set({});
				return;
			}
			const resizeObserver = new ResizeObserver(() => {
				set({});
			});
			resizeObserver.observe(sliderDom);
			return () => resizeObserver.disconnect();
		},
		{},
	);
	const updateSliderSize$ = writable({});
	const sliderDomRect$ = computed(
		() => {
			sliderResized$();
			updateSliderSize$();
			return sliderDom$()?.getBoundingClientRect() ?? ({} as DOMRect);
		},
		{
			equal: Object.is,
		},
	);
	const minLabelDomRect$ = computed(
		() => {
			sliderResized$();
			updateSliderSize$();
			return minLabelDom$()?.getBoundingClientRect() ?? ({} as DOMRect);
		},
		{
			equal: (a, b) => Object.is(a, b),
		},
	);
	const maxLabelDomRect$ = computed(
		() => {
			sliderResized$();
			updateSliderSize$();
			return maxLabelDom$()?.getBoundingClientRect() ?? ({} as DOMRect);
		},
		{
			equal: (a, b) => Object.is(a, b),
		},
	);

	const sliderDomRectOffset$ = computed(() => (vertical$() ? sliderDomRect$().top : sliderDomRect$().left));
	const sliderDomRectSize$ = computed(() => (vertical$() ? sliderDomRect$().height : sliderDomRect$().width));
	const sortedValues$ = computed(() => [...values$()].sort((a, b) => a - b));
	const _sortedHandlesValues$ = computed(() => {
		return values$()
			.map((val, index) => {
				return {id: index, value: val};
			})
			.sort((a, b) => a.value - b.value);
	});
	const sortedHandles$ = computed(() => {
		const ariaLabelHandle = ariaLabelHandle$();
		return _sortedHandlesValues$().map((sortedValue, index) => {
			return {...sortedValue, ariaLabel: ariaLabelHandle(sortedValue.value, index, sortedValue.id)};
		});
	});
	const valuesPercent$ = computed(() => values$().map((val) => percentCompute(val)));
	const sortedValuesPercent$ = computed(() => [...valuesPercent$()].sort((a, b) => a - b));
	const minLabelWidth$ = computed(() => (minLabelDomRect$().width / sliderDomRectSize$()) * 100);
	const maxLabelWidth$ = computed(() => (maxLabelDomRect$().width / sliderDomRectSize$()) * 100);
	const minValueLabelDisplay$ = computed(() => {
		if (!showMinMaxLabels$()) {
			return false;
		} else if (!showValueLabels$()) {
			return true;
		}
		const minLabelWidth = minLabelWidth$();
		return !valuesPercent$().some((percent) => percent < minLabelWidth + 1);
	});
	const maxValueLabelDisplay$ = computed(() => {
		if (!showMinMaxLabels$()) {
			return false;
		} else if (!showValueLabels$()) {
			return true;
		}
		const maxLabelWidth = maxLabelWidth$();
		return !valuesPercent$().some((percent) => percent > 100 - maxLabelWidth - 1);
	});
	// TODO define the intersection value
	const combinedLabelDisplay$ = computed(() => {
		const values = values$();
		return values.length == 2 && Math.abs(values[0] - values[1]) < 10;
	});
	const isInteractable$ = computed(() => !disabled$() && !readonly$());

	const combinedLabelPositionLeft$ = computed(() => {
		const sortedValuesPercent = sortedValuesPercent$();
		return vertical$() || sortedValuesPercent.length != 2 ? 0 : (sortedValuesPercent[0] + sortedValuesPercent[1]) / 2;
	});
	const combinedLabelPositionTop$ = computed(() => {
		const sortedValuesPercent = sortedValuesPercent$();
		return vertical$() && sortedValuesPercent.length == 2 ? 100 - (sortedValuesPercent[0] + sortedValuesPercent[1]) / 2 : 0;
	});

	const handleDisplayOptions$ = computed(() => {
		const vertical = vertical$();
		return valuesPercent$().map((vp, index) => {
			return {
				left: vertical ? 0 : vp,
				top: vertical ? 100 - vp : 0,
			};
		});
	});

	const progressDisplayOptions$ = computed(() => {
		const vertical = vertical$(),
			sortedValuesPercent = sortedValuesPercent$();
		if (sortedValuesPercent.length === 1) {
			return [
				{
					left: 0,
					bottom: 0,
					width: vertical ? 100 : sortedValuesPercent[0],
					height: vertical ? sortedValuesPercent[0] : 100,
				},
			];
		} else {
			return sortedValuesPercent
				.map((svp, index, array) => {
					return {
						left: vertical ? 0 : svp,
						bottom: vertical ? svp : 0,
						width: vertical ? 100 : index === array.length - 1 ? svp : array[index + 1] - svp,
						height: vertical ? (index === array.length - 1 ? svp : array[index + 1] - svp) : 100,
					};
				})
				.slice(0, sortedValuesPercent.length - 1);
		}
	});

	// functions
	const percentCompute = (value: number) => {
		const min = min$();
		return ((value - min) * 100) / (max$() - min);
	};
	const getClosestSliderHandle = (clickedPercent: number) => {
		const values = values$();
		if (values.length === 1) {
			return 0;
		}
		const sortedValues = sortedValues$();
		const closestBigger = sortedValues.find((sv) => sv > clickedPercent * 100);
		const closestBiggerIndex = closestBigger ? sortedValues.indexOf(closestBigger!) : sortedValues.length - 1;
		const midPoint = sortedValues[closestBiggerIndex - 1] + (sortedValues[closestBiggerIndex] - sortedValues[closestBiggerIndex - 1]) / 2;
		const closestValue = sortedValues[clickedPercent * 100 <= midPoint ? closestBiggerIndex - 1 : closestBiggerIndex];
		return values.indexOf(closestValue);
	};

	const adjustCoordinate = (clickedCoordinate: number, handleNumber?: number) => {
		if (isInteractable$()) {
			const sliderDomRectSize = sliderDomRectSize$(),
				sliderDomRectOffset = sliderDomRectOffset$();
			const clickedPercent = vertical$()
				? (sliderDomRectSize - clickedCoordinate + sliderDomRectOffset) / sliderDomRectSize
				: (clickedCoordinate - sliderDomRectOffset) / sliderDomRectSize;
			const derivedHandleIndex = handleNumber ?? getClosestSliderHandle(clickedPercent);
			const newValue = clickedPercent * (max$() - min$()) + min$();
			_dirtyValues$.update((dh) => {
				dh = [...dh];
				dh[derivedHandleIndex] = newValue;
				return dh;
			});
		}
	};

	return {
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
			isInteractable$,
			combinedLabelPositionLeft$,
			combinedLabelPositionTop$,
			progressDisplayOptions$,
			handleDisplayOptions$,
			showValueLabels$,
			showMinMaxLabels$,
			...stateProps,
		}),
		patch,
		api: {},
		directives: {
			sliderDirective: mergeDirectives(sliderDirective, directiveSubscribe(sliderResized$)),
			minLabelDirective,
			maxLabelDirective,
		},
		actions: {
			click(event: MouseEvent) {
				adjustCoordinate(vertical$() ? event.clientY : event.clientX);
			},
			keydown(event: KeyboardEvent, handleIndex: number) {
				const {key} = event;
				if (isInteractable$()) {
					switch (key) {
						case 'ArrowDown':
						case 'ArrowLeft':
							_dirtyValues$.update((value) => {
								value = [...value];
								value[handleIndex] = values$()[handleIndex] - stepSize$();
								return value;
							});
							break;
						case 'ArrowUp':
						case 'ArrowRight':
							_dirtyValues$.update((value) => {
								value = [...value];
								value[handleIndex] = values$()[handleIndex] + stepSize$();
								return value;
							});
							break;
						case 'Home':
							_dirtyValues$.update((value) => {
								value = [...value];
								value[handleIndex] = min$();
								return value;
							});
							break;
						case 'End':
							_dirtyValues$.update((value) => {
								value = [...value];
								value[handleIndex] = max$();
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
					event.stopPropagation();
				}
			},
			mouseDown(event: MouseEvent, handleId: number) {
				event.preventDefault();
				const handleDrag = (e: MouseEvent) => {
					e.preventDefault();
					const newCoord = vertical$() ? e.clientY : e.clientX;
					(event.target as HTMLElement).focus();
					if (_prevCoordinate !== newCoord) {
						_prevCoordinate = newCoord;
						adjustCoordinate(newCoord, handleId);
					}
				};
				if (isInteractable$()) {
					(event.target as HTMLElement).focus();
					document.addEventListener('mousemove', handleDrag);
					// TODO mouse up doesn't work outside the handle area
					document.addEventListener(
						'mouseup',
						() => {
							document.removeEventListener('mousemove', handleDrag);
						},
						{once: true},
					);
				}
			},
		},
	};
}
