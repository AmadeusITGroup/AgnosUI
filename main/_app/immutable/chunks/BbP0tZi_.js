const e=`import { computed, writable, readable } from "@amadeus-it-group/tansu";
import { l as createBrowserStoreDirective, h as createBrowserStoreArrayDirective, o as mergeDirectives, q as createAttributesDirective, b as browserDirective } from "./dom-iY0R3D7u.js";
import { noop } from "./utils/func.js";
import { writablesForProps, bindableProp, stateStores, true$ } from "./utils/stores.js";
import { j as typeArray, l as clamp, c as typeBoolean, b as typeNumberInRangeFactory, e as typeString, h as typeFunction, a as typeNumber } from "./writables-Is1bF1Vt.js";
import { createResizeObserver, createResizeObserverMap } from "./services/resizeObserver.js";
import { createPointerdownPositionDirective } from "./services/pointerdownPosition.js";
import { createWidgetFactory } from "./utils/widget.js";
const decimalRegExp = /(?:\\.(\\d+))?(?:[eE]([+-]?\\d+))?$/;
function getDecimalPrecision(number) {
  const matches = ("" + number).match(decimalRegExp);
  return Math.max(
    0,
    // Number of digits right of decimal point.
    (matches[1]?.length ?? 0) - // Adjust for exponential notation.
    (+matches[2] || 0)
  );
}
const pushHandle = (values, index, currentValue, direction, minRange, min, max, pushRange) => {
  let nextValue = values[index + direction];
  if (nextValue == null || Math.abs(nextValue - currentValue) >= minRange) {
    return currentValue;
  }
  if (pushRange) {
    const targetValue = currentValue + minRange * direction;
    nextValue = pushHandle(values, index + direction, targetValue, direction, minRange, min, max, pushRange);
    nextValue = Math.max(Math.min(nextValue, max), min);
    values[index + direction] = nextValue;
  }
  if (Math.abs(nextValue - currentValue) < minRange) {
    currentValue = nextValue - minRange * direction;
    values[index] = currentValue;
  }
  return currentValue;
};
const pullHandle = (values, index, currentValue, direction, maxRange, min, max, pushRange) => {
  let nextValue = values[index + direction];
  if (nextValue == null || Math.abs(nextValue - currentValue) <= maxRange) {
    return currentValue;
  }
  if (pushRange) {
    const targetValue = currentValue + maxRange * direction;
    nextValue = pullHandle(values, index + direction, targetValue, direction, maxRange, min, max, pushRange);
    nextValue = Math.max(Math.min(nextValue, max), min);
    values[index + direction] = nextValue;
  }
  if (Math.abs(nextValue - currentValue) > maxRange) {
    currentValue = nextValue - maxRange * direction;
    values[index] = currentValue;
  }
  return currentValue;
};
const manageMinMaxRange = (values, index, minRange, maxRange, min, max, pushRange) => {
  let current = values[index];
  const previous = values[index - 1];
  const next = values[index + 1];
  if (previous != null && current < previous) {
    current = values[index] = previous;
  } else if (next != null && current > next) {
    current = values[index] = next;
  }
  if (minRange) {
    current = pushHandle(values, index, current, 1, minRange, min, max, pushRange);
    current = pushHandle(values, index, current, -1, minRange, min, max, pushRange);
  }
  if (maxRange) {
    current = pullHandle(values, index, current, 1, maxRange, min, max, pushRange);
    pullHandle(values, index, current, -1, maxRange, min, max, pushRange);
  }
  return values;
};
const defaultSliderConfig = {
  min: 0,
  max: 100,
  stepSize: 1,
  readonly: false,
  disabled: false,
  vertical: false,
  className: "",
  ariaLabel: () => "Value",
  ariaLabelledBy: () => "",
  ariaValueText: () => "",
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
  rtl: false
};
function getSliderDefaultConfig() {
  return { ...defaultSliderConfig };
}
const configValidator = {
  min: typeNumber,
  max: typeNumber,
  stepSize: typeNumberInRangeFactory(0, Infinity, { strict: true }),
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
  tickInterval: typeNumberInRangeFactory(0, Infinity, { strict: true }),
  rtl: typeBoolean,
  className: typeString,
  minRange: typeNumberInRangeFactory(0, Infinity),
  maxRange: typeNumberInRangeFactory(0, Infinity),
  pushRange: typeBoolean
};
const computeCleanValue = (value, min, max, intStepSize, decimalPrecision) => {
  const magnitude = Math.pow(10, decimalPrecision);
  if (value >= max) {
    return max;
  } else if (value <= min) {
    return min;
  }
  const indexMin = Math.floor((value - min) * magnitude / intStepSize);
  return +(((value - min) * magnitude % intStepSize < intStepSize / 2 ? indexMin : indexMin + 1) * intStepSize / magnitude + min).toFixed(
    decimalPrecision
  );
};
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
  } else if (vertical && !rtl) {
    return -1;
  } else if (!vertical && rtl) {
    return keysVertical ? -1 : 1;
  } else if (!vertical && !rtl) {
    return -1;
  }
  return 1;
};
const percent = (value) => value != null ? \`\${value}%\` : "";
const createSlider = createWidgetFactory("slider", (config) => {
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
    patch
  ] = writablesForProps(defaultSliderConfig, config, configValidator);
  const { vertical$, disabled$, readonly$ } = stateProps;
  const _handleElements = /* @__PURE__ */ new Map();
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
    typeArray.equal
  );
  const { directive: sliderDirective, element$: sliderDom$ } = createBrowserStoreDirective();
  const { directive: minLabelDomDirective, element$: minLabelDom$ } = createBrowserStoreDirective();
  const { directive: maxLabelDomDirective, element$: maxLabelDom$ } = createBrowserStoreDirective();
  const { directive: handleLabelDirective, elements$: currentLabelDoms$ } = createBrowserStoreArrayDirective();
  const { directive: resizeDirective, dimensions$ } = createResizeObserver();
  const { directive: resizeLabelsDirective, dimensionsMap$: handleDimensions$ } = createResizeObserverMap();
  const { directive: resizeCombineLabelDirective, dimensions$: combinedDimensions$ } = createResizeObserver();
  const updateSliderSize$ = writable({});
  const sliderDomRect$ = computed(
    () => {
      dimensions$();
      updateSliderSize$();
      return sliderDom$()?.getBoundingClientRect() ?? {};
    },
    {
      equal: Object.is
    }
  );
  const minLabelDomRect$ = computed(
    () => {
      dimensions$();
      updateSliderSize$();
      return minLabelDom$()?.getBoundingClientRect() ?? {};
    },
    {
      equal: (a, b) => Object.is(a, b)
    }
  );
  const maxLabelDomRect$ = computed(
    () => {
      dimensions$();
      updateSliderSize$();
      return maxLabelDom$()?.getBoundingClientRect() ?? {};
    },
    {
      equal: (a, b) => Object.is(a, b)
    }
  );
  const sliderDomRectOffset$ = computed(() => sliderDomRect$()[vertical$() ? "top" : "left"]);
  const sliderDomRectSize$ = computed(() => sliderDomRect$()[vertical$() ? "height" : "width"]);
  const sortedValues$ = computed(() => [...values$()].sort((a, b) => a - b));
  const _sortedHandlesValues$ = computed(() => {
    return values$().map((val, index) => {
      return { id: index, value: val };
    }).sort((a, b) => a.value - b.value);
  });
  const sortedHandles$ = computed(() => {
    const ariaLabelHandle = ariaLabel$(), ariaValueText = ariaValueText$(), ariaLabelledBy = ariaLabelledBy$();
    return _sortedHandlesValues$().map((sortedValue, index) => {
      return {
        ...sortedValue,
        ariaLabel: ariaLabelledBy(index) ? void 0 : ariaLabelHandle(index),
        ariaLabelledBy: ariaLabelledBy(index) || void 0,
        ariaValueText: ariaValueText(sortedValue.value, index) || void 0
      };
    });
  });
  const valuesPercent$ = computed(() => values$().map((val) => percentCompute(val)));
  const sortedValuesPercent$ = computed(() => [...valuesPercent$()].sort((a, b) => a - b));
  const activeDimension$ = computed(() => vertical$() ? "height" : "width");
  const activePosition$ = computed(() => vertical$() ? "top" : "left");
  const minLabelSize$ = computed(() => pixelToPercent(minLabelDomRect$()[activeDimension$()]));
  const maxLabelSize$ = computed(() => pixelToPercent(maxLabelDomRect$()[activeDimension$()]));
  const adjustedShowValueLabels$ = computed(() => showValueLabels$() && (!showTicks$() || !showTickValues$()));
  const pixelToPercent = (pixels) => pixels ? pixels / sliderDomRectSize$() * 100 : 0;
  const combinedLabelSize$ = computed(() => pixelToPercent(combinedDimensions$()?.contentRect[activeDimension$()]));
  const combinedLabelPosition$ = computed(() => vertical$() ? combinedLabelPositionTop$() : combinedLabelPositionLeft$());
  const currentLabelSizeByIndex = (index) => pixelToPercent(handleDimensions$().get(currentLabelDoms$()[index])?.contentRect[activeDimension$()]);
  const minValueLabelDisplay$ = computed(() => {
    if (!showMinMaxLabels$() || showTicks$() && showTickValues$()) {
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
      return rtl && !vertical || vertical && !rtl ? combinedLabelPosition + combinedLabelSize / 2 < 100 - minLabelSize - 1 : combinedLabelPosition - combinedLabelSize / 2 > minLabelSize + 1;
    }
    const sortedValuesPercent = sortedValuesPercent$();
    return rtl ? sortedValuesPercent[0] - currentLabelSizeByIndex(sortedValuesPercent.length - 1) / 2 > minLabelSize + 1 : sortedValuesPercent[0] - currentLabelSizeByIndex(0) / 2 > minLabelSize + 1;
  });
  const maxValueLabelDisplay$ = computed(() => {
    if (!showMinMaxLabels$() || showTicks$() && showTickValues$()) {
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
      return rtl && !vertical || vertical && !rtl ? combinedLabelPosition - combinedLabelSize / 2 > maxLabelSize + 1 : combinedLabelPosition + combinedLabelSize / 2 < 100 - maxLabelSize - 1;
    }
    const sortedValuesPercent = sortedValuesPercent$();
    return rtl ? 100 - sortedValuesPercent[sortedValuesPercent.length - 1] - currentLabelSizeByIndex(0) / 2 > maxLabelSize + 1 : sortedValuesPercent[sortedValuesPercent.length - 1] + currentLabelSizeByIndex(sortedValuesPercent.length - 1) / 2 < 100 - maxLabelSize - 1;
  });
  const combinedLabelDisplay$ = computed(() => {
    if (currentLabelDoms$().length == 2) {
      return doLabelsIntersect();
    }
    return false;
  });
  function doLabelsIntersect() {
    const handleOptions = handleDisplayOptions$();
    const activePosition = activePosition$();
    const labelPosition1 = labelPosition(handleOptions[0][activePosition], currentLabelSizeByIndex(0));
    const labelPosition2 = labelPosition(handleOptions[1][activePosition], currentLabelSizeByIndex(1));
    const labelSize1 = currentLabelSizeByIndex(0);
    const labelSize2 = currentLabelSizeByIndex(1);
    if (labelSize1 === 100 || labelSize2 === 100) {
      return false;
    }
    const labelStart1 = labelPosition1 - labelSize1;
    const labelEnd1 = labelPosition1 + labelSize1;
    const labelStart2 = labelPosition2 - labelSize2;
    const labelEnd2 = labelPosition2 + labelSize2;
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
    return vertical$() && sortedValuesPercent.length == 2 ? rtl$() ? 100 - combinedPosition : combinedPosition : 0;
  });
  const handleDisplayOptions$ = computed(() => {
    const vertical = vertical$(), rtl = rtl$();
    return valuesPercent$().map((vp) => {
      return {
        left: rtl ? vertical ? null : 100 - vp : vertical ? null : vp,
        top: rtl ? vertical ? vp : null : vertical ? 100 - vp : null
      };
    });
  });
  const labelPosition = (initialPosition, labelSize) => clamp(initialPosition, 100 - labelSize / 2, labelSize / 2);
  const progressDisplayOptions$ = computed(() => {
    const vertical = vertical$(), sortedValuesPercent = sortedValuesPercent$(), rtl = rtl$();
    if (sortedValuesPercent.length === 1) {
      return [
        {
          left: vertical ? null : rtl ? null : 0,
          right: vertical ? null : rtl ? 0 : null,
          bottom: vertical ? rtl ? null : 0 : null,
          top: vertical ? rtl ? 0 : null : null,
          width: vertical ? 100 : sortedValuesPercent[0],
          height: vertical ? sortedValuesPercent[0] : 100,
          id: 0
        }
      ];
    } else {
      return sortedValuesPercent.map((svp, index, array) => {
        return {
          left: vertical ? null : rtl ? null : svp,
          right: vertical ? null : rtl ? array[index] : null,
          bottom: vertical ? rtl ? null : svp : null,
          top: vertical ? rtl ? array[index] : null : null,
          width: vertical ? 100 : index === array.length - 1 ? svp : array[index + 1] - svp,
          height: vertical ? index === array.length - 1 ? svp : array[index + 1] - svp : 100,
          id: index
        };
      }).slice(0, sortedValuesPercent.length - 1);
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
    const positionCompute = (position) => {
      return !!rtl !== !!vertical ? 100 - position : position;
    };
    for (let step = min; step < max; step += tickInterval) {
      const cleanValue = computeCleanValue(step, min, max, intStepSize, decimalPrecision);
      const stepPercent = percentCompute(cleanValue);
      tickArray.push({ position: positionCompute(stepPercent), selected: false, value: cleanValue, displayLabel: showTickValues });
    }
    tickArray.push({ position: positionCompute(100), selected: false, value: max, displayLabel: showTickValues });
    return tickArray;
  });
  const ticks$ = computed(() => {
    const sortedValues = sortedValues$();
    const isTickSelected = (value) => {
      const isMultiHandle = sortedValues.length > 1;
      const currentMax = isMultiHandle ? sortedValues[sortedValues.length - 1] : sortedValues[0];
      const currentMin = isMultiHandle ? sortedValues[0] : 0;
      return value <= currentMax && value >= currentMin;
    };
    return computeTicks$().map((tick) => {
      return {
        ...tick,
        selected: isTickSelected(tick.value)
      };
    });
  });
  const percentCompute = (value) => {
    const min = min$(), max = max$();
    return (value - min) * 100 / (max - min);
  };
  const getClosestSliderHandle = (clickedPercent) => {
    const values = values$();
    if (values.length === 1) {
      return 0;
    }
    const sortedValues = sortedValues$();
    const closestBigger = sortedValues.find((sv) => percentCompute(sv) > clickedPercent * 100);
    const closestBiggerIndex = closestBigger ? sortedValues.indexOf(closestBigger) : sortedValues.length - 1;
    const midPoint = percentCompute(
      sortedValues[closestBiggerIndex - 1] + (sortedValues[closestBiggerIndex] - sortedValues[closestBiggerIndex - 1]) / 2
    );
    const closestValue = sortedValues[clickedPercent * 100 <= midPoint ? closestBiggerIndex - 1 : closestBiggerIndex];
    return values.indexOf(closestValue);
  };
  const getClickedPercent = (clickedCoordinate) => {
    const sliderDomRectSize = sliderDomRectSize$(), sliderDomRectOffset = sliderDomRectOffset$();
    let clickedPercent = vertical$() ? (sliderDomRectSize - clickedCoordinate + sliderDomRectOffset) / sliderDomRectSize : (clickedCoordinate - sliderDomRectOffset) / sliderDomRectSize;
    clickedPercent = rtl$() ? 1 - clickedPercent : clickedPercent;
    return clickedPercent;
  };
  const adjustCoordinate = (clickedCoordinate, handleNumber) => {
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
      "au-slider": true$,
      "au-slider-vertical": vertical$,
      "au-slider-horizontal": horizontal$
    },
    attributes: {
      class: stateProps.className$
    }
  }));
  const contentDirective = createAttributesDirective(() => ({
    attributes: {
      "aria-disabled": computed(() => disabled$() ? "true" : void 0),
      class: stateProps.className$
    },
    classNames: {
      "au-slider-content": true$,
      "au-slider-vertical": vertical$,
      "au-slider-horizontal": horizontal$,
      "au-slider-with-labels": computed(() => showValueLabels$() || showMinMaxLabels$() || showTickValues$() && showTicks$()),
      disabled: disabled$
    }
  }));
  const minLabelDirective = createAttributesDirective(() => ({
    classNames: {
      "au-slider-label-vertical": vertical$,
      "au-slider-label-vertical-min": vertical$,
      "au-slider-label": horizontal$,
      "au-slider-label-min": horizontal$,
      "au-slider-rtl": rtl$,
      invisible: computed(() => !minValueLabelDisplay$())
    },
    attributes: {
      "aria-hidden": readable("true")
    }
  }));
  const maxLabelDirective = createAttributesDirective(() => ({
    classNames: {
      "au-slider-label-vertical": vertical$,
      "au-slider-label-vertical-max": vertical$,
      "au-slider-label": horizontal$,
      "au-slider-label-max": horizontal$,
      "au-slider-rtl": rtl$,
      invisible: computed(() => !maxValueLabelDisplay$())
    },
    attributes: {
      "aria-hidden": readable("true")
    }
  }));
  const handleElementDirective = browserDirective((handleItem, args) => {
    const destroy = () => {
      _handleElements.delete(args.item.id);
    };
    const update = (args2) => {
      _handleElements.set(args2.item.id, handleItem);
    };
    update(args);
    return {
      update,
      destroy
    };
  });
  const pointerMoveStart = (event, handleId) => {
    const currentTarget = handleId !== void 0 ? _handleElements.get(handleId) : event.target;
    if (interactive$()) {
      const vertical = vertical$();
      const clientXorY = vertical ? "clientY" : "clientX";
      let _prevCoordinate = event[clientXorY];
      updateSliderSize$.set({});
      currentTarget?.focus();
      return {
        onMove: (event2) => {
          currentTarget?.focus();
          const newCoord = event2[clientXorY];
          if (_prevCoordinate !== newCoord) {
            _prevCoordinate = newCoord;
            adjustCoordinate(newCoord, handleId);
          }
        }
      };
    }
    return void 0;
  };
  const handleEventsDirective = mergeDirectives(
    createAttributesDirective((handleContext$) => ({
      events: {
        keydown: (event) => {
          const handleIndex = handleContext$().item.id;
          const { key } = event;
          const rtl = rtl$(), stepSize = stepSize$(), min = min$(), max = max$(), vertical = vertical$();
          if (interactive$()) {
            switch (key) {
              case "ArrowDown":
                updateValue(handleIndex, values$, stepSize, getUpdateDirection(vertical, rtl, true));
                break;
              case "ArrowLeft":
                updateValue(handleIndex, values$, stepSize, getUpdateDirection(vertical, rtl, false));
                break;
              case "ArrowUp":
                updateValue(handleIndex, values$, stepSize, -1 * getUpdateDirection(vertical, rtl, true));
                break;
              case "ArrowRight":
                updateValue(handleIndex, values$, stepSize, -1 * getUpdateDirection(vertical, rtl, false));
                break;
              case "Home":
                values$.update((value) => {
                  value = [...value];
                  value[handleIndex] = min;
                  return value;
                });
                break;
              case "End":
                values$.update((value) => {
                  value = [...value];
                  value[handleIndex] = max;
                  return value;
                });
                break;
              case "PageUp":
                break;
              case "PageDown":
                break;
              default:
                return;
            }
            event.preventDefault();
          }
        }
      }
    })),
    createPointerdownPositionDirective((position, { item: { id } }) => pointerMoveStart(position, id))
  );
  const widget = {
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
      ...stateProps
    }),
    patch,
    api: {},
    directives: {
      sliderDirective: mergeDirectives(sliderDirective, resizeDirective, contentDirective),
      containerDirective,
      progressDisplayDirective: createAttributesDirective((progressContext$) => ({
        styles: {
          left: computed(() => percent(progressContext$().option.left)),
          right: computed(() => percent(progressContext$().option.right)),
          top: computed(() => percent(progressContext$().option.top)),
          bottom: computed(() => percent(progressContext$().option.bottom)),
          width: computed(() => percent(progressContext$().option.width)),
          height: computed(() => percent(progressContext$().option.height))
        },
        classNames: {
          "au-slider-progress": true$
        }
      })),
      clickableAreaDirective: mergeDirectives(
        createAttributesDirective(() => ({
          classNames: {
            "au-slider-clickable-area": horizontal$,
            "au-slider-clickable-area-vertical": vertical$,
            "au-slider-clickable-area-with-ticks": computed(() => showTicks$() && tickInterval$() === 0)
          }
        })),
        createPointerdownPositionDirective((position) => {
          const clickedCoordinate = vertical$() ? position.clientY : position.clientX;
          const closestHandle = getClosestSliderHandle(getClickedPercent(clickedCoordinate));
          adjustCoordinate(clickedCoordinate, closestHandle);
          return pointerMoveStart(position, closestHandle);
        })
      ),
      handleEventsDirective,
      handleDirective: mergeDirectives(
        handleElementDirective,
        handleEventsDirective,
        createAttributesDirective((handleContext$) => ({
          attributes: {
            role: readable("slider"),
            "aria-valuemin": min$,
            "aria-valuemax": max$,
            "aria-valuenow": computed(() => handleContext$().item.value),
            "aria-valuetext": computed(() => handleContext$().item.ariaValueText),
            "aria-label": computed(() => handleContext$().item.ariaLabel),
            "aria-labelledBy": computed(() => handleContext$().item.ariaLabelledBy),
            "aria-orientation": computed(() => vertical$() ? "vertical" : void 0),
            "aria-disabled": computed(() => disabled$() ? "true" : void 0),
            disabled: disabled$,
            "aria-readonly": computed(() => readonly$() ? "true" : void 0)
          },
          styles: {
            left: computed(() => percent(handleDisplayOptions$()[handleContext$().item.id].left)),
            top: computed(() => percent(handleDisplayOptions$()[handleContext$().item.id].top))
          },
          classNames: {
            "au-slider-handle": true$,
            "au-slider-handle-vertical": vertical$,
            "au-slider-handle-horizontal": horizontal$
          }
        }))
      ),
      minLabelDirective: mergeDirectives(minLabelDomDirective, minLabelDirective),
      maxLabelDirective: mergeDirectives(maxLabelDomDirective, maxLabelDirective),
      combinedHandleLabelDisplayDirective: mergeDirectives(
        resizeCombineLabelDirective,
        createAttributesDirective(() => ({
          classNames: {
            "au-slider-label-vertical": vertical$,
            "au-slider-label-vertical-now": vertical$,
            "au-slider-label": horizontal$,
            "au-slider-label-now": horizontal$
          },
          styles: {
            left: computed(() => percent(combinedLabelPositionLeft$())),
            top: computed(() => percent(combinedLabelPositionTop$()))
          },
          attributes: {
            "aria-hidden": readable("true")
          }
        }))
      ),
      handleLabelDisplayDirective: mergeDirectives(
        handleLabelDirective,
        resizeLabelsDirective,
        createAttributesDirective((labelDisplayContext$) => ({
          classNames: {
            "au-slider-label-vertical": vertical$,
            "au-slider-label-vertical-now": vertical$,
            "au-slider-label": horizontal$,
            "au-slider-label-now": horizontal$
          },
          styles: {
            left: computed(() => {
              const handleIndex = labelDisplayContext$().index;
              const leftPosition = handleDisplayOptions$()[handleIndex].left;
              return leftPosition === null ? "" : percent(labelPosition(leftPosition, currentLabelSizeByIndex(handleIndex)));
            }),
            top: computed(() => percent(handleDisplayOptions$()[labelDisplayContext$().index].top)),
            opacity: computed(() => combinedLabelDisplay$() ? "0" : "1")
          },
          attributes: {
            "aria-hidden": readable("true")
          }
        }))
      ),
      tickDirective: createAttributesDirective((tickContext$) => ({
        classNames: {
          "au-slider-tick": true$,
          "au-slider-tick-horizontal": horizontal$,
          "au-slider-tick-vertical": vertical$
        },
        styles: {
          left: computed(() => vertical$() ? null : percent(tickContext$().tick.position)),
          top: computed(() => vertical$() ? percent(tickContext$().tick.position) : null)
        },
        events: {
          click: (event) => {
            adjustCoordinate(vertical$() ? event.clientY : event.clientX);
          }
        },
        attributes: {
          "aria-hidden": readable("true")
        }
      })),
      tickLabelDirective: createAttributesDirective((tickContext$) => ({
        classNames: {
          "au-slider-tick-label": true$,
          "au-slider-tick-label-vertical": vertical$,
          "au-slider-tick-label-now": computed(() => sortedValues$().some((sv) => sv === tickContext$().tick.value))
        },
        styles: {
          left: computed(() => vertical$() ? null : percent(tickContext$().tick.position)),
          top: computed(() => vertical$() ? percent(tickContext$().tick.position) : null)
        },
        attributes: {
          "aria-hidden": readable("true")
        }
      }))
    }
  };
  return widget;
});
export {
  createSlider as c,
  getSliderDefaultConfig as g
};
`;export{e as default};
