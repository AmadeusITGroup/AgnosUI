const e=`"use strict";
const tansu = require("@amadeus-it-group/tansu");
const utils_directive = require("./dom-CuBx1JPZ.cjs");
const utils_func = require("./utils/func.cjs");
const utils_stores = require("./utils/stores.cjs");
const utils_writables = require("./writables-BPAJvaL_.cjs");
const services_resizeObserver = require("./services/resizeObserver.cjs");
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
  ariaLabel: () => "Value",
  ariaLabelledBy: () => "",
  ariaValueText: () => "",
  onValuesChange: utils_func.noop,
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
  min: utils_writables.typeNumber,
  max: utils_writables.typeNumber,
  stepSize: utils_writables.typeNumberInRangeFactory(0, Infinity, { strict: true }),
  readonly: utils_writables.typeBoolean,
  disabled: utils_writables.typeBoolean,
  vertical: utils_writables.typeBoolean,
  ariaLabel: utils_writables.typeFunction,
  ariaLabelledBy: utils_writables.typeFunction,
  ariaValueText: utils_writables.typeFunction,
  onValuesChange: utils_writables.typeFunction,
  values: utils_writables.typeArray,
  showValueLabels: utils_writables.typeBoolean,
  showMinMaxLabels: utils_writables.typeBoolean,
  showTicks: utils_writables.typeBoolean,
  showTickValues: utils_writables.typeBoolean,
  tickInterval: utils_writables.typeNumberInRangeFactory(0, Infinity, { strict: true }),
  rtl: utils_writables.typeBoolean,
  className: utils_writables.typeString
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
  ] = utils_stores.writablesForProps(defaultSliderConfig, config, configValidator);
  const { vertical$, disabled$, readonly$ } = stateProps;
  let _prevCoordinate = -1;
  const min$ = tansu.computed(() => {
    const _dirtyMinimum = _dirtyMinimum$(), _dirtyMaximum = _dirtyMaximum$();
    if (_dirtyMinimum === _dirtyMaximum) {
      return defaultSliderConfig.min;
    }
    return Math.min(_dirtyMinimum, _dirtyMaximum);
  });
  const max$ = tansu.computed(() => {
    const _dirtyMinimum = _dirtyMinimum$(), _dirtyMaximum = _dirtyMaximum$();
    if (_dirtyMinimum === _dirtyMaximum) {
      return defaultSliderConfig.max;
    }
    return Math.max(_dirtyMinimum, _dirtyMaximum);
  });
  const _decimalPrecision$ = tansu.computed(() => Math.max(getDecimalPrecision(stepSize$()), getDecimalPrecision(min$()), getDecimalPrecision(max$())));
  const _intStepSize$ = tansu.computed(() => stepSize$() * Math.pow(10, _decimalPrecision$()));
  const values$ = utils_stores.bindableProp(
    _dirtyValues$,
    onValuesChange$,
    (dirtyValues) => {
      const min = min$();
      const max = max$();
      const intStepSize = _intStepSize$();
      const decimalPrecision = _decimalPrecision$();
      return dirtyValues.map((dv) => computeCleanValue(dv, min, max, intStepSize, decimalPrecision));
    },
    utils_writables.typeArray.equal
  );
  const { directive: sliderDirective, element$: sliderDom$ } = utils_directive.createBrowserStoreDirective();
  const { directive: minLabelDomDirective, element$: minLabelDom$ } = utils_directive.createBrowserStoreDirective();
  const { directive: maxLabelDomDirective, element$: maxLabelDom$ } = utils_directive.createBrowserStoreDirective();
  const { directive: resizeDirective, dimensions$ } = services_resizeObserver.createResizeObserver();
  const updateSliderSize$ = tansu.writable({});
  const sliderDomRect$ = tansu.computed(
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
  const minLabelDomRect$ = tansu.computed(
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
  const maxLabelDomRect$ = tansu.computed(
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
  const sliderDomRectOffset$ = tansu.computed(() => vertical$() ? sliderDomRect$().top : sliderDomRect$().left);
  const sliderDomRectSize$ = tansu.computed(() => vertical$() ? sliderDomRect$().height : sliderDomRect$().width);
  const sortedValues$ = tansu.computed(() => [...values$()].sort((a, b) => a - b));
  const _sortedHandlesValues$ = tansu.computed(() => {
    return values$().map((val, index) => {
      return { id: index, value: val };
    }).sort((a, b) => a.value - b.value);
  });
  const sortedHandles$ = tansu.computed(() => {
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
  const valuesPercent$ = tansu.computed(() => values$().map((val) => percentCompute(val)));
  const sortedValuesPercent$ = tansu.computed(() => [...valuesPercent$()].sort((a, b) => a - b));
  const minLabelWidth$ = tansu.computed(() => minLabelDomRect$().width / sliderDomRectSize$() * 100);
  const maxLabelWidth$ = tansu.computed(() => maxLabelDomRect$().width / sliderDomRectSize$() * 100);
  const adjustedShowValueLabels$ = tansu.computed(() => showValueLabels$() && (!showTicks$() || !showTickValues$()));
  const minValueLabelDisplay$ = tansu.computed(() => {
    if (!showMinMaxLabels$() || showTicks$() && showTickValues$()) {
      return false;
    } else if (!showValueLabels$()) {
      return true;
    }
    const minLabelWidth = minLabelWidth$();
    return rtl$() ? !valuesPercent$().some((percent2) => 100 - percent2 > 100 - minLabelWidth - 1) : !valuesPercent$().some((percent2) => percent2 < minLabelWidth + 1);
  });
  const maxValueLabelDisplay$ = tansu.computed(() => {
    if (!showMinMaxLabels$() || showTicks$() && showTickValues$()) {
      return false;
    } else if (!showValueLabels$()) {
      return true;
    }
    const maxLabelWidth = maxLabelWidth$();
    return rtl$() ? !valuesPercent$().some((percent2) => 100 - percent2 < maxLabelWidth + 1) : !valuesPercent$().some((percent2) => percent2 > 100 - maxLabelWidth - 1);
  });
  const combinedLabelDisplay$ = tansu.computed(() => {
    const values = values$();
    return values.length == 2 && Math.abs(values[0] - values[1]) * 100 / (max$() - min$()) < 10;
  });
  const interactive$ = tansu.computed(() => !disabled$() && !readonly$());
  const combinedLabelPositionLeft$ = tansu.computed(() => {
    const sortedValuesPercent = sortedValuesPercent$();
    const combinedPosition = (sortedValuesPercent[0] + sortedValuesPercent[1]) / 2;
    return vertical$() || sortedValuesPercent.length != 2 ? 0 : rtl$() ? 100 - combinedPosition : combinedPosition;
  });
  const combinedLabelPositionTop$ = tansu.computed(() => {
    const sortedValuesPercent = sortedValuesPercent$();
    const combinedPosition = 100 - (sortedValuesPercent[0] + sortedValuesPercent[1]) / 2;
    return vertical$() && sortedValuesPercent.length == 2 ? rtl$() ? 100 - combinedPosition : combinedPosition : 0;
  });
  const handleDisplayOptions$ = tansu.computed(() => {
    const vertical = vertical$(), rtl = rtl$();
    return valuesPercent$().map((vp) => {
      return {
        left: rtl ? vertical ? null : 100 - vp : vertical ? null : vp,
        top: rtl ? vertical ? vp : null : vertical ? 100 - vp : null
      };
    });
  });
  const progressDisplayOptions$ = tansu.computed(() => {
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
  const computeTicks$ = tansu.computed(() => {
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
  const ticks$ = tansu.computed(() => {
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
  const horizontal$ = tansu.computed(() => !vertical$());
  const containerDirective = utils_directive.createAttributesDirective(() => ({
    attributes: {
      "aria-disabled": tansu.computed(() => disabled$() ? "true" : void 0),
      class: stateProps.className$
    },
    classNames: {
      "au-slider": utils_stores.true$,
      "au-slider-vertical": vertical$,
      "au-slider-horizontal": horizontal$,
      disabled: disabled$
    }
  }));
  const minLabelDirective = utils_directive.createAttributesDirective(() => ({
    classNames: {
      "au-slider-label-vertical": vertical$,
      "au-slider-label-vertical-min": vertical$,
      "au-slider-label": horizontal$,
      "au-slider-label-min": horizontal$,
      "au-slider-rtl": rtl$,
      invisible: tansu.computed(() => !minValueLabelDisplay$())
    },
    attributes: {
      "aria-hidden": tansu.readable("true")
    }
  }));
  const maxLabelDirective = utils_directive.createAttributesDirective(() => ({
    classNames: {
      "au-slider-label-vertical": vertical$,
      "au-slider-label-vertical-max": vertical$,
      "au-slider-label": horizontal$,
      "au-slider-label-max": horizontal$,
      "au-slider-rtl": rtl$,
      invisible: tansu.computed(() => !maxValueLabelDisplay$())
    },
    attributes: {
      "aria-hidden": tansu.readable("true")
    }
  }));
  const handleEventsDirective = utils_directive.createAttributesDirective((handleContext$) => ({
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
        event.preventDefault();
        const currentTarget = event.target;
        const handleDrag = (e) => {
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
      touchstart: (event) => {
        const handleDrag = (e) => {
          e.preventDefault();
          const newCoord = vertical$() ? e.touches[0].clientY : e.touches[0].clientX;
          event.target.focus();
          if (_prevCoordinate !== newCoord) {
            _prevCoordinate = newCoord;
            adjustCoordinate(newCoord, handleContext$().item.id);
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
  }));
  const widget = {
    ...utils_stores.stateStores({
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
      sliderDirective: utils_directive.mergeDirectives(sliderDirective, resizeDirective, containerDirective),
      progressDisplayDirective: utils_directive.createAttributesDirective((progressContext$) => ({
        styles: {
          left: tansu.computed(() => percent(progressContext$().option.left)),
          right: tansu.computed(() => percent(progressContext$().option.right)),
          top: tansu.computed(() => percent(progressContext$().option.top)),
          bottom: tansu.computed(() => percent(progressContext$().option.bottom)),
          width: tansu.computed(() => percent(progressContext$().option.width)),
          height: tansu.computed(() => percent(progressContext$().option.height))
        },
        classNames: {
          "au-slider-progress": utils_stores.true$
        }
      })),
      clickableAreaDirective: utils_directive.createAttributesDirective(() => ({
        events: {
          click: (event) => {
            adjustCoordinate(vertical$() ? event.clientY : event.clientX);
          }
        },
        classNames: {
          "au-slider-clickable-area": horizontal$,
          "au-slider-clickable-area-vertical": vertical$,
          "au-slider-clickable-area-with-ticks": tansu.computed(() => showTicks$() && tickInterval$() === 0)
        }
      })),
      handleEventsDirective,
      handleDirective: utils_directive.mergeDirectives(
        handleEventsDirective,
        utils_directive.createAttributesDirective((handleContext$) => ({
          attributes: {
            role: tansu.readable("slider"),
            "aria-valuemin": min$,
            "aria-valuemax": max$,
            "aria-valuenow": tansu.computed(() => handleContext$().item.value),
            "aria-valuetext": tansu.computed(() => handleContext$().item.ariaValueText),
            "aria-label": tansu.computed(() => handleContext$().item.ariaLabel),
            "aria-labelledBy": tansu.computed(() => handleContext$().item.ariaLabelledBy),
            "aria-orientation": tansu.computed(() => vertical$() ? "vertical" : void 0),
            "aria-disabled": tansu.computed(() => disabled$() ? "true" : void 0),
            disabled: disabled$,
            "aria-readonly": tansu.computed(() => readonly$() ? "true" : void 0)
          },
          styles: {
            left: tansu.computed(() => percent(handleDisplayOptions$()[handleContext$().item.id].left)),
            top: tansu.computed(() => percent(handleDisplayOptions$()[handleContext$().item.id].top))
          },
          classNames: {
            "au-slider-handle": utils_stores.true$,
            "au-slider-handle-vertical": vertical$,
            "au-slider-handle-horizontal": horizontal$
          }
        }))
      ),
      minLabelDirective: utils_directive.mergeDirectives(minLabelDomDirective, minLabelDirective),
      maxLabelDirective: utils_directive.mergeDirectives(maxLabelDomDirective, maxLabelDirective),
      combinedHandleLabelDisplayDirective: utils_directive.createAttributesDirective(() => ({
        classNames: {
          "au-slider-label-vertical": vertical$,
          "au-slider-label-vertical-now": vertical$,
          "au-slider-label": horizontal$,
          "au-slider-label-now": horizontal$
        },
        styles: {
          left: tansu.computed(() => percent(combinedLabelPositionLeft$())),
          top: tansu.computed(() => percent(combinedLabelPositionTop$()))
        },
        attributes: {
          "aria-hidden": tansu.readable("true")
        }
      })),
      handleLabelDisplayDirective: utils_directive.createAttributesDirective((labelDisplayContext$) => ({
        classNames: {
          "au-slider-label-vertical": vertical$,
          "au-slider-label-vertical-now": vertical$,
          "au-slider-label": horizontal$,
          "au-slider-label-now": horizontal$
        },
        styles: {
          left: tansu.computed(() => percent(handleDisplayOptions$()[labelDisplayContext$().index].left)),
          top: tansu.computed(() => percent(handleDisplayOptions$()[labelDisplayContext$().index].top))
        },
        attributes: {
          "aria-hidden": tansu.readable("true")
        }
      })),
      tickDirective: utils_directive.createAttributesDirective((tickContext$) => ({
        classNames: {
          "au-slider-tick": utils_stores.true$,
          "au-slider-tick-horizontal": horizontal$,
          "au-slider-tick-vertical": vertical$
        },
        styles: {
          left: tansu.computed(() => vertical$() ? null : percent(tickContext$().tick.position)),
          top: tansu.computed(() => vertical$() ? percent(tickContext$().tick.position) : null)
        },
        events: {
          click: (event) => {
            adjustCoordinate(vertical$() ? event.clientY : event.clientX);
          }
        },
        attributes: {
          "aria-hidden": tansu.readable("true")
        }
      })),
      tickLabelDirective: utils_directive.createAttributesDirective((tickContext$) => ({
        classNames: {
          "au-slider-tick-label": utils_stores.true$,
          "au-slider-tick-label-vertical": vertical$,
          "au-slider-tick-label-now": tansu.computed(() => sortedValues$().some((sv) => sv === tickContext$().tick.value))
        },
        styles: {
          left: tansu.computed(() => vertical$() ? null : percent(tickContext$().tick.position)),
          top: tansu.computed(() => vertical$() ? percent(tickContext$().tick.position) : null)
        },
        attributes: {
          "aria-hidden": tansu.readable("true")
        }
      }))
    }
  };
  return widget;
}
exports.createSlider = createSlider;
exports.getSliderDefaultConfig = getSliderDefaultConfig;
`;export{e as default};
