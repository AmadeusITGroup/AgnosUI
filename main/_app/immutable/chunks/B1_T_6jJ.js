const e=`import { computed, writable, readable } from "@amadeus-it-group/tansu";
import { j as createBrowserStoreDirective, g as createBrowserStoreArrayDirective, k as mergeDirectives, n as createAttributesDirective, b as browserDirective } from "./dom-BhJG5nY-.js";
import { noop } from "./utils/func.js";
import { writablesForProps, bindableProp, stateStores, true$ } from "./utils/stores.js";
import { i as typeArray, e as typeString, c as typeBoolean, b as typeNumberInRangeFactory, g as typeFunction, a as typeNumber } from "./writables-e0tyaQpe.js";
import { createResizeObserver } from "./services/resizeObserver.js";
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
  className: typeString
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
  let _prevCoordinate = -1;
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
    typeArray.equal
  );
  const { directive: sliderDirective, element$: sliderDom$ } = createBrowserStoreDirective();
  const { directive: minLabelDomDirective, element$: minLabelDom$ } = createBrowserStoreDirective();
  const { directive: maxLabelDomDirective, element$: maxLabelDom$ } = createBrowserStoreDirective();
  const { directive: combinedLabelDomDirective, element$: combinedLabelDom$ } = createBrowserStoreDirective();
  const { directive: handleLabelDirective, elements$: currentLabelDoms$ } = createBrowserStoreArrayDirective();
  const { directive: resizeDirective, dimensions$ } = createResizeObserver();
  const updateSliderSize$ = writable({});
  const currentLabelDomsRect$ = computed(
    () => {
      dimensions$();
      updateSliderSize$();
      return currentLabelDoms$().map((element) => element.getBoundingClientRect());
    },
    {
      equal: Object.is
    }
  );
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
  const sliderDomRectOffset$ = computed(() => vertical$() ? sliderDomRect$().top : sliderDomRect$().left);
  const sliderDomRectSize$ = computed(() => vertical$() ? sliderDomRect$().height : sliderDomRect$().width);
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
  const minLabelSize$ = computed(() => {
    const minLabelDomRect = minLabelDomRect$();
    return pixelToPercent(vertical$() ? minLabelDomRect.height : minLabelDomRect.width);
  });
  const maxLabelSize$ = computed(() => {
    const maxLabelDomRect = maxLabelDomRect$();
    return pixelToPercent(vertical$() ? maxLabelDomRect.height : maxLabelDomRect.width);
  });
  const adjustedShowValueLabels$ = computed(() => showValueLabels$() && (!showTicks$() || !showTickValues$()));
  const pixelToPercent = (pixels) => pixels ? pixels / sliderDomRectSize$() * 100 : 0;
  const combinedLabelSize$ = computed(
    () => pixelToPercent(vertical$() ? combinedLabelDom$()?.getBoundingClientRect().height : combinedLabelDom$()?.getBoundingClientRect().width)
  );
  const combinedLabelPosition$ = computed(() => vertical$() ? combinedLabelPositionTop$() : combinedLabelPositionLeft$());
  const currentLabelSizeByIndex = (index) => pixelToPercent(vertical$() ? currentLabelDomsRect$()[index]?.height : currentLabelDomsRect$()[index]?.width);
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
  const storedLabelSize$ = writable([]);
  const combinedLabelDisplay$ = computed(() => {
    const values = sortedValuesPercent$();
    if (currentLabelDomsRect$().length === values.length) {
      storedLabelSize$.set(values.map((_, index) => currentLabelSizeByIndex(index) / 2));
    }
    const storedLabelSize = storedLabelSize$();
    const firstLabelSize = storedLabelSize?.[0] ?? 0;
    const secondLabelSize = storedLabelSize?.[1] ?? 0;
    const biggestLabelSize = Math.max(firstLabelSize, secondLabelSize);
    const intersectionLimit = biggestLabelSize !== 50 ? biggestLabelSize * 2 + 2 : 15;
    return values.length == 2 && values[1] - secondLabelSize - values[0] + firstLabelSize < intersectionLimit;
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
  const mouseDown = (event, handleId) => {
    event.preventDefault();
    const currentTarget = handleId !== void 0 ? _handleElements.get(handleId) : event.target;
    const handleDrag = (e) => {
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
      document.addEventListener("mousemove", handleDrag);
      document.addEventListener(
        "mouseup",
        () => {
          document.removeEventListener("mousemove", handleDrag);
        },
        { once: true }
      );
    }
  };
  const touchStart = (event, handleId) => {
    const currentTarget = handleId !== void 0 ? _handleElements.get(handleId) : event.target;
    const handleDrag = (e) => {
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
      document.addEventListener("touchmove", handleDrag, { passive: false });
      document.addEventListener(
        "touchend",
        () => {
          document.removeEventListener("touchmove", handleDrag);
          document.removeEventListener("touchcancel", handleDrag);
        },
        { once: true }
      );
      document.addEventListener(
        "touchcancel",
        () => {
          document.removeEventListener("touchmove", handleDrag);
          document.removeEventListener("touchend", handleDrag);
        },
        { once: true }
      );
    }
  };
  const handleEventsDirective = createAttributesDirective((handleContext$) => ({
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
      },
      mousedown: (event) => {
        if (event.button !== 0) {
          return;
        }
        mouseDown(event, handleContext$().item.id);
      },
      touchstart: (event) => {
        touchStart(event, handleContext$().item.id);
      }
    }
  }));
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
      clickableAreaDirective: createAttributesDirective(() => ({
        events: {
          mousedown: (event) => {
            if (event.button !== 0) {
              return;
            }
            const clickedCoordinate = vertical$() ? event.clientY : event.clientX;
            const closestHandle = getClosestSliderHandle(getClickedPercent(clickedCoordinate));
            adjustCoordinate(clickedCoordinate, closestHandle);
            mouseDown(event, closestHandle);
          },
          touchstart: (event) => {
            const clickedCoordinate = vertical$() ? event.touches[0].clientY : event.touches[0].clientX;
            const closestHandle = getClosestSliderHandle(getClickedPercent(clickedCoordinate));
            adjustCoordinate(clickedCoordinate, closestHandle);
            touchStart(event, closestHandle);
          }
        },
        classNames: {
          "au-slider-clickable-area": horizontal$,
          "au-slider-clickable-area-vertical": vertical$,
          "au-slider-clickable-area-with-ticks": computed(() => showTicks$() && tickInterval$() === 0)
        }
      })),
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
        combinedLabelDomDirective,
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
        createAttributesDirective((labelDisplayContext$) => ({
          classNames: {
            "au-slider-label-vertical": vertical$,
            "au-slider-label-vertical-now": vertical$,
            "au-slider-label": horizontal$,
            "au-slider-label-now": horizontal$
          },
          styles: {
            left: computed(() => percent(handleDisplayOptions$()[labelDisplayContext$().index].left)),
            top: computed(() => percent(handleDisplayOptions$()[labelDisplayContext$().index].top))
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
