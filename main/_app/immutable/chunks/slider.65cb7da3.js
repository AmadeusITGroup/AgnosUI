const e=`import { computed, derived, writable } from '@amadeus-it-group/tansu';
import { bindableDerived, createStoreDirective, writablesForProps } from './services';
import { stateStores } from './services/stores';
import { typeArray, typeBoolean, typeFunction, typeNumber, typeNumberInRangeFactory } from './services/writables';
import { noop } from './utils';
const defaultSliderConfig = {
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
    stepSize: typeNumberInRangeFactory(0, +Infinity),
    readonly: typeBoolean,
    disabled: typeBoolean,
    vertical: typeBoolean,
    ariaLabelHandle: typeFunction,
    onValuesChange: typeFunction,
    values: typeArray,
};
/**
 * Computes slider clean value based on the imput parameters
 * @param value - dirty value
 * @param min  - minimum value
 * @param max - maximum value
 * @param stepSize - step size
 * @returns adjusted clean value
 */
const computeCleanValue = (value, min, max, stepSize) => {
    if (value >= max) {
        return max;
    }
    else if (value <= min) {
        return min;
    }
    const indexMin = Math.floor(value / stepSize);
    return value % stepSize < stepSize / 2 ? indexMin * stepSize : (indexMin + 1) * stepSize;
};
/**
 * Create a slider widget with given config props
 * @param config - an optional slider config
 * @returns a SliderWidget
 */
export function createSlider(config) {
    const [{ 
    // dirty inputs that need adjustment:
    min$: _dirtyMinimum$, max$: _dirtyMaximum$, stepSize$, values$: _dirtyValues$, ariaLabelHandle$, onValuesChange$, ...stateProps }, patch,] = writablesForProps(defaultSliderConfig, config, configValidator);
    const { vertical$, disabled$, readonly$ } = stateProps;
    let _prevCoordinate = -1;
    // clean inputs adjustment
    const min$ = computed(() => {
        if (_dirtyMinimum$() === _dirtyMaximum$())
            return defaultSliderConfig.min;
        return Math.min(_dirtyMinimum$(), _dirtyMaximum$());
    });
    const max$ = computed(() => {
        if (_dirtyMinimum$() === _dirtyMaximum$())
            return defaultSliderConfig.max;
        return Math.max(_dirtyMinimum$(), _dirtyMaximum$());
    });
    const values$ = bindableDerived(onValuesChange$, [_dirtyValues$, min$, max$, stepSize$], ([dirtyValues, min, max, stepSize]) => dirtyValues.map((dv) => computeCleanValue(dv, min, max, stepSize)), typeArray.equal);
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
    const sortedHandlesValues$ = computed(() => {
        return values$()
            .map((val, index) => {
            return { id: index, value: val };
        })
            .sort((a, b) => a.value - b.value);
    });
    const sortedHandles$ = computed(() => {
        const ariaLabelHandle = ariaLabelHandle$();
        return sortedHandlesValues$().map((sortedValue, index) => {
            return { ...sortedValue, ariaLabel: ariaLabelHandle(sortedValue.value, index, sortedValue.id) };
        });
    });
    const valuesPercent$ = computed(() => values$().map((val) => percentCompute(val)));
    const sortedValuesPercent$ = computed(() => [...valuesPercent$()].sort((a, b) => a - b));
    const minLabelWidth$ = computed(() => (minLabelDomRect$().width / sliderDomRectSize$()) * 100);
    const maxLabelWidth$ = computed(() => (maxLabelDomRect$().width / sliderDomRectSize$()) * 100);
    const minValueLabelDisplay$ = computed(() => {
        const minLabelWidth = minLabelWidth$();
        return !valuesPercent$().some((percent) => percent < minLabelWidth + 1);
    });
    const maxValueLabelDisplay$ = computed(() => {
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
    // const handleTooltipLeft$ = computed(() => (vertical$() ? Array(valuesPercent$().length).fill(0) : valuesPercent$()));
    // const handleTooltipTop$ = computed(() => (vertical$() ? valuesPercent$().map((vp) => 100 - vp) : Array(valuesPercent$().length).fill(0)));
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
        const vertical = vertical$(), sortedValuesPercent = sortedValuesPercent$();
        if (sortedValuesPercent.length === 1) {
            return [
                {
                    left: 0,
                    bottom: 0,
                    width: vertical ? 100 : sortedValuesPercent[0],
                    height: vertical ? sortedValuesPercent[0] : 100,
                },
            ];
        }
        else {
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
            ...stateProps,
        }),
        patch,
        api: {},
        directives: {
            sliderDirective,
            minLabelDirective,
            maxLabelDirective,
        },
        actions: {
            click(event) {
                updateSliderSize$.set({});
                adjustCoordinate(vertical$() ? event.clientY : event.clientX);
            },
            keydown(event, handleIndex) {
                const { key } = event;
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
            mouseDown(event, handleId) {
                event.preventDefault();
                const handleDrag = (e) => {
                    e.preventDefault();
                    const newCoord = vertical$() ? e.clientY : e.clientX;
                    event.target.focus();
                    if (_prevCoordinate !== newCoord) {
                        _prevCoordinate = newCoord;
                        adjustCoordinate(newCoord, handleId);
                    }
                };
                if (isInteractable$()) {
                    event.target.focus();
                    document.addEventListener('mousemove', handleDrag);
                    // TODO mouse up doesn't work outside the handle area
                    document.addEventListener('mouseup', () => {
                        document.removeEventListener('mousemove', handleDrag);
                    }, { once: true });
                }
            },
        },
    };
}
`;export{e as default};
