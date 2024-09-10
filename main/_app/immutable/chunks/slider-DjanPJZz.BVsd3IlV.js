const e=`import { computed, writable } from "@amadeus-it-group/tansu";
import { j as createBrowserStoreDirective, k as mergeDirectives, n as createAttributesDirective } from "./directive-CKEccryv.js";
import { n as noop } from "./func-DR0n-ShK.js";
import { writablesForProps, bindableProp, stateStores } from "./utils/stores.js";
import { h as typeArray, a as typeNumber, b as typeNumberInRangeFactory, c as typeBoolean, f as typeFunction } from "./writables-DoU_XYTX.js";
import { createResizeObserver } from "./services/resizeObserver.js";
const decimalRegExp = /(?:\\.(\\d+))?(?:[eE]([+-]?\\d+))?$/;
function getDecimalPrecision(number) {
  var _a;
  const matches = ("" + number).match(decimalRegExp);
  return Math.max(
    0,
    // Number of digits right of decimal point.
    (((_a = matches[1]) == null ? void 0 : _a.length) ?? 0) - // Adjust for exponential notation.
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
  ariaLabelHandle: (value) => "" + value,
  ariaValueText: (value) => "" + value,
  onValuesChange: noop,
  values: [0],
  showValueLabels: true,
  showMinMaxLabels: true,
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
  ariaLabelHandle: typeFunction,
  ariaValueText: typeFunction,
  onValuesChange: typeFunction,
  values: typeArray,
  showValueLabels: typeBoolean,
  showMinMaxLabels: typeBoolean,
  rtl: typeBoolean
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
function createSlider(config) {
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
    patch
  ] = writablesForProps(defaultSliderConfig, config, configValidator);
  const { vertical$, disabled$, readonly$ } = stateProps;
  let _prevCoordinate = -1;
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
  const { directive: resizeDirective, dimensions$ } = createResizeObserver();
  const updateSliderSize$ = writable({});
  const sliderDomRect$ = computed(
    () => {
      var _a;
      dimensions$();
      updateSliderSize$();
      return ((_a = sliderDom$()) == null ? void 0 : _a.getBoundingClientRect()) ?? {};
    },
    {
      equal: Object.is
    }
  );
  const minLabelDomRect$ = computed(
    () => {
      var _a;
      dimensions$();
      updateSliderSize$();
      return ((_a = minLabelDom$()) == null ? void 0 : _a.getBoundingClientRect()) ?? {};
    },
    {
      equal: (a, b) => Object.is(a, b)
    }
  );
  const maxLabelDomRect$ = computed(
    () => {
      var _a;
      dimensions$();
      updateSliderSize$();
      return ((_a = maxLabelDom$()) == null ? void 0 : _a.getBoundingClientRect()) ?? {};
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
    const ariaLabelHandle = ariaLabelHandle$(), ariaValueText = ariaValueText$();
    return _sortedHandlesValues$().map((sortedValue, index) => {
      return {
        ...sortedValue,
        ariaLabel: ariaLabelHandle(sortedValue.value, index, sortedValue.id),
        ariaValueText: ariaValueText(sortedValue.value, index, sortedValue.id)
      };
    });
  });
  const valuesPercent$ = computed(() => values$().map((val) => percentCompute(val)));
  const sortedValuesPercent$ = computed(() => [...valuesPercent$()].sort((a, b) => a - b));
  const minLabelWidth$ = computed(() => minLabelDomRect$().width / sliderDomRectSize$() * 100);
  const maxLabelWidth$ = computed(() => maxLabelDomRect$().width / sliderDomRectSize$() * 100);
  const minValueLabelDisplay$ = computed(() => {
    if (!showMinMaxLabels$()) {
      return false;
    } else if (!showValueLabels$()) {
      return true;
    }
    const minLabelWidth = minLabelWidth$();
    return rtl$() ? !valuesPercent$().some((percent2) => 100 - percent2 > 100 - minLabelWidth - 1) : !valuesPercent$().some((percent2) => percent2 < minLabelWidth + 1);
  });
  const maxValueLabelDisplay$ = computed(() => {
    if (!showMinMaxLabels$()) {
      return false;
    } else if (!showValueLabels$()) {
      return true;
    }
    const maxLabelWidth = maxLabelWidth$();
    return rtl$() ? !valuesPercent$().some((percent2) => 100 - percent2 < maxLabelWidth + 1) : !valuesPercent$().some((percent2) => percent2 > 100 - maxLabelWidth - 1);
  });
  const combinedLabelDisplay$ = computed(() => {
    const values = values$();
    return values.length == 2 && Math.abs(values[0] - values[1]) < 10;
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
          height: vertical ? sortedValuesPercent[0] : 100
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
          height: vertical ? index === array.length - 1 ? svp : array[index + 1] - svp : 100
        };
      }).slice(0, sortedValuesPercent.length - 1);
    }
  });
  const percentCompute = (value) => {
    const min = min$();
    return (value - min) * 100 / (max$() - min);
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
    if (interactive$()) {
      const sliderDomRectSize = sliderDomRectSize$(), sliderDomRectOffset = sliderDomRectOffset$();
      let clickedPercent = vertical$() ? (sliderDomRectSize - clickedCoordinate + sliderDomRectOffset) / sliderDomRectSize : (clickedCoordinate - sliderDomRectOffset) / sliderDomRectSize;
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
      "aria-disabled": computed(() => disabled$() ? "true" : void 0),
      class: stateProps.className$
    },
    classNames: {
      "au-slider": true,
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
      showValueLabels$,
      showMinMaxLabels$,
      rtl$,
      ...stateProps
    }),
    patch,
    api: {},
    directives: {
      sliderDirective: mergeDirectives(sliderDirective, resizeDirective, containerDirective),
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
          "au-slider-progress": true
        }
      })),
      clickableAreaDirective: createAttributesDirective(() => ({
        events: {
          click: (event) => widget.actions.click(event)
        },
        classNames: {
          "au-slider-clickable-area": horizontal$,
          "au-slider-clickable-area-vertical": vertical$
        }
      })),
      handleDirective: createAttributesDirective((handleContext$) => ({
        events: {
          keydown: (event) => widget.actions.keydown(event, handleContext$().item.id),
          mousedown: (event) => widget.actions.mouseDown(event, handleContext$().item.id),
          touchstart: (event) => widget.actions.touchStart(event, handleContext$().item.id)
        },
        attributes: {
          role: "slider",
          "aria-valuemin": min$,
          "aria-valuemax": max$,
          "aria-valuenow": computed(() => handleContext$().item.value),
          "aria-valuetext": computed(() => handleContext$().item.ariaValueText),
          "aria-label": computed(() => handleContext$().item.ariaLabel),
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
          "au-slider-handle": true,
          "au-slider-handle-vertical": vertical$,
          "au-slider-handle-horizontal": horizontal$
        }
      })),
      minLabelDirective: mergeDirectives(minLabelDomDirective, minLabelDirective),
      maxLabelDirective: mergeDirectives(maxLabelDomDirective, maxLabelDirective),
      combinedHandleLabelDisplayDirective: createAttributesDirective(() => ({
        classNames: {
          "au-slider-label-vertical": vertical$,
          "au-slider-label-vertical-now": vertical$,
          "au-slider-label": horizontal$,
          "au-slider-label-now": horizontal$
        },
        styles: {
          left: computed(() => percent(combinedLabelPositionLeft$())),
          top: computed(() => percent(combinedLabelPositionTop$()))
        }
      })),
      handleLabelDisplayDirective: createAttributesDirective((labelDisplayContext$) => ({
        classNames: {
          "au-slider-label-vertical": vertical$,
          "au-slider-label-vertical-now": vertical$,
          "au-slider-label": horizontal$,
          "au-slider-label-now": horizontal$
        },
        styles: {
          left: computed(() => percent(handleDisplayOptions$()[labelDisplayContext$().index].left)),
          top: computed(() => percent(handleDisplayOptions$()[labelDisplayContext$().index].top))
        }
      }))
    },
    actions: {
      click(event) {
        adjustCoordinate(vertical$() ? event.clientY : event.clientX);
      },
      keydown(event, handleIndex) {
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
        if (interactive$()) {
          updateSliderSize$.set({});
          currentTarget.focus();
          document.addEventListener("mousemove", handleDrag);
          document.addEventListener(
            "mouseup",
            () => {
              document.removeEventListener("mousemove", handleDrag);
            },
            { once: true }
          );
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
        if (interactive$()) {
          updateSliderSize$.set({});
          event.target.focus();
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
      }
    }
  };
  return widget;
}
export {
  createSlider as c,
  getSliderDefaultConfig as g
};
`;export{e as default};
