const n=`import { i as clamp, a as typeNumber, e as typeString, c as typeBoolean, f as typeFunction } from "./writables-DoU_XYTX.js";
import { writablesForProps, stateStores } from "./utils/stores.js";
import { computed } from "@amadeus-it-group/tansu";
const defaultConfig = {
  min: 0,
  max: 100,
  value: 0,
  ariaLabel: "Progressbar",
  className: "",
  slotStructure: void 0,
  slotDefault: void 0,
  height: "",
  striped: false,
  animated: false,
  ariaValueTextFn: () => void 0
};
function getProgressbarDefaultConfig() {
  return { ...defaultConfig };
}
const configValidator = {
  min: typeNumber,
  max: typeNumber,
  value: typeNumber,
  ariaLabel: typeString,
  className: typeString,
  height: typeString,
  striped: typeBoolean,
  animated: typeBoolean,
  ariaValueTextFn: typeFunction
};
function createProgressbar(config) {
  const [
    {
      // dirty inputs that need adjustment:
      max$: _dirtyMaximum$,
      value$: _dirtyValue$,
      // clean inputs
      min$,
      ariaValueTextFn$,
      ...stateProps
    },
    patch
  ] = writablesForProps(defaultConfig, config, configValidator);
  const max$ = computed(() => Math.max(min$(), _dirtyMaximum$()));
  const value$ = computed(() => clamp(_dirtyValue$(), max$(), min$()));
  const percentage$ = computed(() => {
    const max = max$();
    const min = min$();
    if (max > min) {
      return clamp((value$() - min) * 100 / (max - min), 100, 0);
    } else {
      return 0;
    }
  });
  const started$ = computed(() => value$() > min$());
  const finished$ = computed(() => value$() === max$());
  const ariaValueText$ = computed(() => ariaValueTextFn$()(value$(), min$(), max$()));
  return {
    ...stateStores({
      min$,
      max$,
      value$,
      percentage$,
      started$,
      finished$,
      ariaValueText$,
      ...stateProps
    }),
    patch,
    api: {},
    directives: {},
    actions: {}
  };
}
export {
  createProgressbar as c,
  getProgressbarDefaultConfig as g
};
`;export{n as default};
