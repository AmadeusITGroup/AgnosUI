const e=`import { computed, derived, writable } from '@amadeus-it-group/tansu';
import { createStoreDirective, directiveSubscribe, mergeDirectives } from '../../utils/directive';
import { noop } from '../../utils/internal/func';
import { getDecimalPrecision } from '../../utils/internal/math';
import { bindableProp, stateStores, writablesForProps } from '../../utils/stores';
import { typeArray, typeBoolean, typeFunction, typeNumber, typeNumberInRangeFactory } from '../../utils/writables';
const defaultSliderConfig = {
    min: 0,
    max: 100,
    stepSize: 1,
    readonly: false,
    disabled: false,
    vertical: false,
    className: '',
    ariaLabelHandle: (value) => '' + value,
    ariaValueText: (value) => '' + value,
    onValuesChange: noop,
    values: [0],
    showValueLabels: true,
    showMinMaxLabels: true,
    rtl: false,
    slotStructure: undefined,
    slotLabel: ({ value }) => '' + value,
    slotHandle: undefined,
};
/**
 * Returns a shallow copy of the default slider config.
 * @returns a copy of the default config
 */
export function getSliderDefaultConfig() {
    return { ...defaultSliderConfig };
}
const configValidator = {
    min: typeNumber,
    max: typeNumber,
    stepSize: typeNumberInRangeFactory(0, +Infinity, { strict: true }),
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
const computeCleanValue = (value, min, max, intStepSize, decimalPrecision) => {
    const magnitude = Math.pow(10, decimalPrecision);
    if (value >= max) {
        return max;
    }
    else if (value <= min) {
        return min;
    }
    const indexMin = Math.floor(((value - min) * magnitude) / intStepSize);
    return +(((((value - min) * magnitude) % intStepSize < intStepSize / 2 ? indexMin : indexMin + 1) * intStepSize) / magnitude + min).toFixed(decimalPrecision);
};
/**
 * Method to update the values for the slider keyboard navigation
 * @param handleIndex - index of the handle to update
 * @param values$ - writable signal that contains values
 * @param stepSize - slider step size
 * @param updateDirection - if equals 1 value is increased, if equals -1 value is decreased
 */
const updateValue = (handleIndex, values$, stepSize, updateDirection) => {
    values$.update((value) => {
        value = [...value];
        value[handleIndex] = value[handleIndex] + stepSize * updateDirection;
        return value;
    });
};
const getUpdateDirection = (vertical, rtl, keysVertical) => {
    if (vertical && rtl) {
        return keysVertical ? 1 : -1;
    }
    else if (vertical && !rtl) {
        return -1;
    }
    else if (!vertical && rtl) {
        return keysVertical ? -1 : 1;
    }
    else if (!vertical && !rtl) {
        return -1;
    }
    return 1;
};
/**
 * Create a slider widget with given config props
 * @param config - an optional slider config
 * @returns a SliderWidget
 */
export function createSlider(config) {
    const [{ 
    // dirty inputs that need adjustment:
    min$: _dirtyMinimum$, max$: _dirtyMaximum$, stepSize$, rtl$, values$: _dirtyValues$, ariaLabelHandle$, ariaValueText$, onValuesChange$, showValueLabels$, showMinMaxLabels$, ...stateProps }, patch,] = writablesForProps(defaultSliderConfig, config, configValidator);
    const { vertical$, disabled$, readonly$ } = stateProps;
    let _prevCoordinate = -1;
    // clean inputs adjustment
    const min$ = computed(() => {
        const _dirtyMinimum = _dirtyMinimum$(), _dirtyMaximum = _dirtyMaximum$();
        if (_dirtyMinimum === _dirtyMaximum) {
            return defaultSliderConfig.min;
        }
        return Math.min(_dirtyMinimum, _dirtyMaximum);
    });
    const max$ = computed(() => {
        const _dirtyMinimum = _dirtyMinimum$(), _dirtyMaximum = _dirtyMaximum$();
        if (_dirtyMinimum === _dirtyMaximum) {
            return defaultSliderConfig.max;
        }
        return Math.max(_dirtyMinimum, _dirtyMaximum);
    });
    const _decimalPrecision$ = computed(() => Math.max(getDecimalPrecision(stepSize$()), getDecimalPrecision(min$()), getDecimalPrecision(max$())));
    const _intStepSize$ = computed(() => stepSize$() * Math.pow(10, _decimalPrecision$()));
    const values$ = bindableProp(_dirtyValues$, onValuesChange$, (dirtyValues) => {
        const min = min$();
        const max = max$();
        const intStepSize = _intStepSize$();
        const decimalPrecision = _decimalPrecision$();
        return dirtyValues.map((dv) => computeCleanValue(dv, min, max, intStepSize, decimalPrecision));
    }, typeArray.equal);
    // computed
    const { directive: sliderDirective, element$: sliderDom$ } = createStoreDirective();
    const { directive: minLabelDirective, element$: minLabelDom$ } = createStoreDirective();
    const { directive: maxLabelDirective, element$: maxLabelDom$ } = createStoreDirective();
    const sliderResized$ = derived(sliderDom$, (sliderDom, set) => {
        if (!sliderDom) {
            set({});
            return;
        }
        const resizeObserver = new ResizeObserver(() => {
            set({});
        });
        resizeObserver.observe(sliderDom);
        return () => resizeObserver.disconnect();
    }, {});
    const updateSliderSize$ = writable({});
    const sliderDomRect$ = computed(() => {
        sliderResized$();
        updateSliderSize$();
        return sliderDom$()?.getBoundingClientRect() ?? {};
    }, {
        equal: Object.is,
    });
    const minLabelDomRect$ = computed(() => {
        sliderResized$();
        updateSliderSize$();
        return minLabelDom$()?.getBoundingClientRect() ?? {};
    }, {
        equal: (a, b) => Object.is(a, b),
    });
    const maxLabelDomRect$ = computed(() => {
        sliderResized$();
        updateSliderSize$();
        return maxLabelDom$()?.getBoundingClientRect() ?? {};
    }, {
        equal: (a, b) => Object.is(a, b),
    });
    const sliderDomRectOffset$ = computed(() => (vertical$() ? sliderDomRect$().top : sliderDomRect$().left));
    const sliderDomRectSize$ = computed(() => (vertical$() ? sliderDomRect$().height : sliderDomRect$().width));
    const sortedValues$ = computed(() => [...values$()].sort((a, b) => a - b));
    const _sortedHandlesValues$ = computed(() => {
        return values$()
            .map((val, index) => {
            return { id: index, value: val };
        })
            .sort((a, b) => a.value - b.value);
    });
    const sortedHandles$ = computed(() => {
        const ariaLabelHandle = ariaLabelHandle$(), ariaValueText = ariaValueText$();
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
        }
        else if (!showValueLabels$()) {
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
        }
        else if (!showValueLabels$()) {
            return true;
        }
        const maxLabelWidth = maxLabelWidth$();
        return rtl$()
            ? !valuesPercent$().some((percent) => 100 - percent < maxLabelWidth + 1)
            : !valuesPercent$().some((percent) => percent > 100 - maxLabelWidth - 1);
    });
    // TODO define the intersection value
    const combinedLabelDisplay$ = computed(() => {
        const values = values$();
        return values.length == 2 && Math.abs(values[0] - values[1]) < 10;
    });
    const isInteractable$ = computed(() => !disabled$() && !readonly$());
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
        const vertical = vertical$(), rtl = rtl$();
        return valuesPercent$().map((vp, index) => {
            return {
                left: rtl ? (vertical ? null : 100 - vp) : vertical ? null : vp,
                top: rtl ? (vertical ? vp : null) : vertical ? 100 - vp : null,
            };
        });
    });
    const progressDisplayOptions$ = computed(() => {
        const vertical = vertical$(), sortedValuesPercent = sortedValuesPercent$(), rtl = rtl$();
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
        }
        else {
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
    const percentCompute = (value) => {
        const min = min$();
        return ((value - min) * 100) / (max$() - min);
    };
    const getClosestSliderHandle = (clickedPercent) => {
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
    const adjustCoordinate = (clickedCoordinate, handleNumber) => {
        if (isInteractable$()) {
            const sliderDomRectSize = sliderDomRectSize$(), sliderDomRectOffset = sliderDomRectOffset$();
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
            rtl$,
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
            click(event) {
                adjustCoordinate(vertical$() ? event.clientY : event.clientX);
            },
            keydown(event, handleIndex) {
                const { key } = event;
                const rtl = rtl$(), stepSize = stepSize$(), min = min$(), max = max$(), vertical = vertical$();
                if (isInteractable$()) {
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
            mouseDown(event, handleId) {
                event.preventDefault();
                const currentTarget = event.target;
                const handleDrag = (e) => {
                    e.preventDefault();
                    const newCoord = vertical$() ? e.clientY : e.clientX;
                    currentTarget.focus();
                    if (_prevCoordinate !== newCoord) {
                        _prevCoordinate = newCoord;
                        adjustCoordinate(newCoord, handleId);
                    }
                };
                if (isInteractable$()) {
                    updateSliderSize$.set({});
                    currentTarget.focus();
                    document.addEventListener('mousemove', handleDrag);
                    // TODO mouse up doesn't work outside the handle area
                    document.addEventListener('mouseup', () => {
                        document.removeEventListener('mousemove', handleDrag);
                    }, { once: true });
                }
            },
            touchStart(event, handleId) {
                event.preventDefault();
                const handleDrag = (e) => {
                    e.preventDefault();
                    const newCoord = vertical$() ? e.touches[0].clientY : e.touches[0].clientX;
                    event.target.focus();
                    if (_prevCoordinate !== newCoord) {
                        _prevCoordinate = newCoord;
                        adjustCoordinate(newCoord, handleId);
                    }
                };
                if (isInteractable$()) {
                    updateSliderSize$.set({});
                    event.target.focus();
                    document.addEventListener('touchmove', handleDrag);
                    document.addEventListener('touchend', () => {
                        document.removeEventListener('touchmove', handleDrag);
                        document.removeEventListener('touchcancel', handleDrag);
                    }, { once: true });
                    document.addEventListener('touchcancel', () => {
                        document.removeEventListener('touchmove', handleDrag);
                        document.removeEventListener('touchend', handleDrag);
                    }, { once: true });
                }
            },
        },
    };
}
`;export{e as default};
