import type {ReadableSignal, WritableSignal} from '@amadeus-it-group/tansu';
import {computed, writable} from '@amadeus-it-group/tansu';
import type {WidgetsCommonPropsAndState} from '../commonProps';
import {createAttributesDirective, createBrowserStoreDirective, mergeDirectives} from '../../utils/directive';
import type {ConfigValidator, Directive, PropsConfig, Widget} from '../../types';
import {noop} from '../../utils/internal/func';
import {getDecimalPrecision} from '../../utils/internal/math';
import {bindableProp, stateStores, writablesForProps} from '../../utils/stores';
import {typeArray, typeBoolean, typeFunction, typeNumber, typeNumberInRangeFactory} from '../../utils/writables';
import {createResizeObserver} from '../../services/resizeObserver';

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
	 * Height of hte progress in %
	 */
	height: number;
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
	ariaLabel: string;
	/**
	 * ariaValueText of the handle
	 */
	ariaValueText: string;
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
}

/**
 * Interface representing the properties for the Slider component.
 */
export interface SliderProps extends SliderCommonPropsAndState {
	/**
	 * Return the value for the 'aria-label' attribute for the handle
	 * @param value - value of the handle
	 * @param sortedIndex - index of the handle in the sorted list
	 * @param index - index of the handle in the original list
	 *
	 * @defaultValue
	 * ```ts
	 * (value: number) => '' + value
	 * ```
	 */
	ariaLabelHandle: (value: number, sortedIndex: number, index: number) => string;

	/**
	 * Return the value for the 'aria-valuetext' attribute for the handle
	 * @param value - value of the handle
	 * @param sortedIndex - index of the handle in the sorted list
	 * @param index - index of the handle in the original list
	 *
	 * @defaultValue
	 * ```ts
	 * (value: number) => '' + value
	 * ```
	 */
	ariaValueText: (value: number, sortedIndex: number, index: number) => string;

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
	ariaLabelHandle: (value: number) => '' + value,
	ariaValueText: (value: number) => '' + value,
	onValuesChange: noop,
	values: [0],
	showValueLabels: true,
	showMinMaxLabels: true,
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
	ariaLabelHandle: typeFunction,
	ariaValueText: typeFunction,
	onValuesChange: typeFunction,
	values: typeArray,
	showValueLabels: typeBoolean,
	showMinMaxLabels: typeBoolean,
	rtl: typeBoolean,
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

const percent = (value: number | null) => (value != null ? `${value}%` : '');

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
			rtl$,
			values$: _dirtyValues$,

			ariaLabelHandle$,
			ariaValueText$,
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
	const _decimalPrecision$ = computed(() => Math.max(getDecimalPrecision(stepSize$()), getDecimalPrecision(min$()), getDecimalPrecision(max$())));
	const _intStepSize$ = computed(() => stepSize$() * Math.pow(10, _decimalPrecision$()));

	const values$ = bindableProp(
		_dirtyValues$,
		onValuesChange$,
		(dirtyValues) => {
			const min = min$();
			const max = max$();
			const intStepSize = _intStepSize$();
			const decimalPrecision = _decimalPrecision$();
			return dirtyValues.map((dv) => computeCleanValue(dv, min, max, intStepSize, decimalPrecision));
		},
		typeArray.equal,
	);

	// computed
	const {directive: sliderDirective, element$: sliderDom$} = createBrowserStoreDirective();
	const {directive: minLabelDomDirective, element$: minLabelDom$} = createBrowserStoreDirective();
	const {directive: maxLabelDomDirective, element$: maxLabelDom$} = createBrowserStoreDirective();
	const {directive: resizeDirective, dimensions$} = createResizeObserver();

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
		const ariaLabelHandle = ariaLabelHandle$(),
			ariaValueText = ariaValueText$();
		return _sortedHandlesValues$().map((sortedValue, index) => {
			return {
				...sortedValue,
				ariaLabel: ariaLabelHandle(sortedValue.value, index, sortedValue.id),
				ariaValueText: ariaValueText(sortedValue.value, index, sortedValue.id),
			};
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
		return rtl$()
			? !valuesPercent$().some((percent) => 100 - percent > 100 - minLabelWidth - 1)
			: !valuesPercent$().some((percent) => percent < minLabelWidth + 1);
	});
	const maxValueLabelDisplay$ = computed(() => {
		if (!showMinMaxLabels$()) {
			return false;
		} else if (!showValueLabels$()) {
			return true;
		}
		const maxLabelWidth = maxLabelWidth$();
		return rtl$()
			? !valuesPercent$().some((percent) => 100 - percent < maxLabelWidth + 1)
			: !valuesPercent$().some((percent) => percent > 100 - maxLabelWidth - 1);
	});

	const combinedLabelDisplay$ = computed(() => {
		const values = values$();
		// We use a normalizing factor scaling the difference to a slider range of 100 to handle bigger numbers
		return values.length == 2 && (Math.abs(values[0] - values[1]) * 100) / (max$() - min$()) < 10;
	});
	const interactive$ = computed(() => !disabled$() && !readonly$());

	const combinedLabelPositionLeft$ = computed(() => {
		const sortedValuesPercent = sortedValuesPercent$();
		const combinedPosition = (sortedValuesPercent[0] + sortedValuesPercent[1]) / 2;
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
		const closestBiggerIndex = closestBigger ? sortedValues.indexOf(closestBigger) : sortedValues.length - 1;
		const midPoint = sortedValues[closestBiggerIndex - 1] + (sortedValues[closestBiggerIndex] - sortedValues[closestBiggerIndex - 1]) / 2;
		const closestValue = sortedValues[clickedPercent * 100 <= midPoint ? closestBiggerIndex - 1 : closestBiggerIndex];
		return values.indexOf(closestValue);
	};

	const adjustCoordinate = (clickedCoordinate: number, handleNumber?: number) => {
		if (interactive$()) {
			const sliderDomRectSize = sliderDomRectSize$(),
				sliderDomRectOffset = sliderDomRectOffset$();
			let clickedPercent = vertical$()
				? (sliderDomRectSize - clickedCoordinate + sliderDomRectOffset) / sliderDomRectSize
				: (clickedCoordinate - sliderDomRectOffset) / sliderDomRectSize;
			clickedPercent = rtl$() ? 1 - clickedPercent : clickedPercent;
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
		attributes: {
			'aria-disabled': computed(() => (disabled$() ? 'true' : undefined)),
			class: stateProps.className$,
		},
		classNames: {
			'au-slider': true,
			'au-slider-vertical': vertical$,
			'au-slider-horizontal': horizontal$,
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
	}));

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
					event.stopPropagation();
				}
			},
			mousedown: (event: MouseEvent) => {
				event.preventDefault();
				const currentTarget = event.target as HTMLElement;
				const handleDrag = (e: MouseEvent) => {
					e.preventDefault();
					const newCoord = vertical$() ? e.clientY : e.clientX;
					currentTarget.focus();
					if (_prevCoordinate !== newCoord) {
						_prevCoordinate = newCoord;
						adjustCoordinate(newCoord, handleContext$().item.id);
					}
				};
				if (interactive$()) {
					updateSliderSize$.set({});
					currentTarget.focus();
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
			touchstart: (event: TouchEvent) => {
				event.preventDefault();
				const handleDrag = (e: TouchEvent) => {
					e.preventDefault();
					const newCoord = vertical$() ? e.touches[0].clientY : e.touches[0].clientX;
					(event.target as HTMLElement).focus();
					if (_prevCoordinate !== newCoord) {
						_prevCoordinate = newCoord;
						adjustCoordinate(newCoord, handleContext$().item.id);
					}
				};
				if (interactive$()) {
					updateSliderSize$.set({});
					(event.target as HTMLElement).focus();
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
			showValueLabels$,
			showMinMaxLabels$,
			rtl$,
			...stateProps,
		}),
		patch,
		api: {},
		directives: {
			sliderDirective: mergeDirectives(sliderDirective, resizeDirective, containerDirective),
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
					'au-slider-progress': true,
				},
			})),
			clickableAreaDirective: createAttributesDirective(() => ({
				events: {
					click: (event: MouseEvent) => {
						adjustCoordinate(vertical$() ? event.clientY : event.clientX);
					},
				},
				classNames: {
					'au-slider-clickable-area': horizontal$,
					'au-slider-clickable-area-vertical': vertical$,
				},
			})),
			handleEventsDirective,
			handleDirective: mergeDirectives(
				handleEventsDirective,
				createAttributesDirective((handleContext$: ReadableSignal<{item: SliderHandle}>) => ({
					attributes: {
						role: 'slider',
						'aria-valuemin': min$,
						'aria-valuemax': max$,
						'aria-valuenow': computed(() => handleContext$().item.value),
						'aria-valuetext': computed(() => handleContext$().item.ariaValueText),
						'aria-label': computed(() => handleContext$().item.ariaLabel),
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
						'au-slider-handle': true,
						'au-slider-handle-vertical': vertical$,
						'au-slider-handle-horizontal': horizontal$,
					},
				})),
			),
			minLabelDirective: mergeDirectives(minLabelDomDirective, minLabelDirective),
			maxLabelDirective: mergeDirectives(maxLabelDomDirective, maxLabelDirective),
			combinedHandleLabelDisplayDirective: createAttributesDirective(() => ({
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
			})),
			handleLabelDisplayDirective: createAttributesDirective((labelDisplayContext$: ReadableSignal<{index: number}>) => ({
				classNames: {
					'au-slider-label-vertical': vertical$,
					'au-slider-label-vertical-now': vertical$,
					'au-slider-label': horizontal$,
					'au-slider-label-now': horizontal$,
				},
				styles: {
					left: computed(() => percent(handleDisplayOptions$()[labelDisplayContext$().index].left)),
					top: computed(() => percent(handleDisplayOptions$()[labelDisplayContext$().index].top)),
				},
			})),
		},
	};

	return widget;
}
