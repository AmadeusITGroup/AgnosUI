const n=`"use strict";
const utils_writables = require("./writables-DcGT98a7.cjs");
const utils_stores = require("./utils/stores.cjs");
const tansu = require("@amadeus-it-group/tansu");
const utils_directive = require("./dom-DT_O1FFV.cjs");
const utils_widget = require("./utils/widget.cjs");
const defaultConfig = {
  min: 0,
  max: 100,
  value: 0,
  ariaLabel: "Progressbar",
  className: "",
  ariaValueTextFn: () => void 0
};
function getProgressbarDefaultConfig() {
  return { ...defaultConfig };
}
const configValidator = {
  min: utils_writables.typeNumber,
  max: utils_writables.typeNumber,
  value: utils_writables.typeNumber,
  ariaLabel: utils_writables.typeString,
  className: utils_writables.typeString,
  ariaValueTextFn: utils_writables.typeFunction
};
const createProgressbar = utils_widget.createWidgetFactory("progressbar", (config) => {
  const [
    {
      // dirty inputs that need adjustment:
      max$: _dirtyMaximum$,
      value$: _dirtyValue$,
      // clean inputs
      min$,
      ariaValueTextFn$,
      ariaLabel$,
      ...stateProps
    },
    patch
  ] = utils_stores.writablesForProps(defaultConfig, config, configValidator);
  const max$ = tansu.computed(() => Math.max(min$(), _dirtyMaximum$()));
  const value$ = tansu.computed(() => utils_writables.clamp(_dirtyValue$(), max$(), min$()));
  const percentage$ = tansu.computed(() => {
    const max = max$();
    const min = min$();
    if (max > min) {
      return utils_writables.clamp((value$() - min) * 100 / (max - min), 100, 0);
    } else {
      return 0;
    }
  });
  const started$ = tansu.computed(() => value$() > min$());
  const finished$ = tansu.computed(() => value$() === max$());
  const ariaValueText$ = tansu.computed(() => ariaValueTextFn$()(value$(), min$(), max$()));
  return {
    ...utils_stores.stateStores({
      min$,
      max$,
      value$,
      percentage$,
      started$,
      finished$,
      ariaValueText$,
      ariaLabel$,
      ...stateProps
    }),
    patch,
    api: {},
    directives: {
      ariaDirective: utils_directive.createAttributesDirective(() => ({
        attributes: {
          role: tansu.readable("progressbar"),
          "aria-label": ariaLabel$,
          "aria-valuenow": value$,
          "aria-valuemin": min$,
          "aria-valuemax": max$,
          "aria-valuetext": ariaValueText$
        }
      }))
    }
  };
});
exports.createProgressbar = createProgressbar;
exports.getProgressbarDefaultConfig = getProgressbarDefaultConfig;
`;export{n as default};
