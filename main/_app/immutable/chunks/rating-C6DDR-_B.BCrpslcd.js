const n=`"use strict";
const tansu = require("@amadeus-it-group/tansu");
const types = require("./types.cjs");
const utils_stores = require("./utils/stores.cjs");
const utils_writables = require("./writables-D46sFgGK.cjs");
const func = require("./func-Qd3cD9a3.cjs");
const defaultConfig = {
  rating: 0,
  tabindex: 0,
  maxRating: 10,
  disabled: false,
  readonly: false,
  resettable: true,
  ariaValueTextFn: (rating, maxRating) => \`\${rating} out of \${maxRating}\`,
  onHover: func.noop,
  onLeave: func.noop,
  onRatingChange: func.noop,
  className: "",
  slotStar: ({ fill }) => String.fromCharCode(fill === 100 ? 9733 : 9734),
  ariaLabel: "Rating",
  ariaLabelledBy: ""
};
function getRatingDefaultConfig() {
  return { ...defaultConfig };
}
const configValidator = {
  rating: utils_writables.typeNumber,
  tabindex: utils_writables.typeNumber,
  maxRating: { normalizeValue: (value) => utils_writables.isNumber(value) ? Math.max(0, value) : types.INVALID_VALUE },
  disabled: utils_writables.typeBoolean,
  readonly: utils_writables.typeBoolean,
  resettable: utils_writables.typeBoolean,
  ariaValueTextFn: utils_writables.typeFunction,
  onHover: utils_writables.typeFunction,
  onLeave: utils_writables.typeFunction,
  onRatingChange: utils_writables.typeFunction,
  className: utils_writables.typeString,
  ariaLabel: utils_writables.typeString,
  ariaLabelledBy: utils_writables.typeString
};
function createRating(config) {
  const [
    {
      // dirty inputs that need adjustment:
      rating$: _dirtyRating$,
      tabindex$: _dirtyTabindex$,
      // clean inputs with value validation:
      ariaValueTextFn$,
      onHover$,
      onLeave$,
      onRatingChange$,
      ...stateProps
    },
    patch
  ] = utils_stores.writablesForProps(defaultConfig, config, configValidator);
  const { maxRating$, disabled$, readonly$, resettable$ } = stateProps;
  const tabindex$ = tansu.computed(() => disabled$() ? -1 : _dirtyTabindex$());
  const rating$ = utils_stores.bindableProp(_dirtyRating$, onRatingChange$, (dirtyRating) => utils_writables.clamp(dirtyRating, maxRating$()));
  const _hoveredRating$ = tansu.writable(0);
  const interactive$ = tansu.computed(() => !disabled$() && !readonly$());
  const visibleRating$ = tansu.computed(() => {
    const hoveredRating = _hoveredRating$();
    return hoveredRating !== 0 ? hoveredRating : rating$();
  });
  const ariaValueText$ = tansu.computed(() => ariaValueTextFn$()(visibleRating$(), maxRating$()));
  const stars$ = tansu.computed(() => {
    const visibleRating = visibleRating$();
    return Array.from({ length: maxRating$() }, (_v, i) => ({
      fill: Math.round(Math.max(Math.min(visibleRating - i, 1), 0) * 100),
      index: i
    }));
  });
  return {
    ...utils_stores.stateStores({
      ariaValueText$,
      interactive$,
      rating$,
      stars$,
      tabindex$,
      visibleRating$,
      ...stateProps
    }),
    patch,
    actions: {
      click: (index) => {
        if (interactive$() && index > 0 && index <= maxRating$()) {
          rating$.update((rating) => rating === index && resettable$() ? 0 : index);
        }
      },
      hover: (index) => {
        if (interactive$() && index > 0 && index <= maxRating$()) {
          _hoveredRating$.set(index);
          onHover$()(index);
        }
      },
      leave: () => {
        if (interactive$()) {
          onLeave$()(_hoveredRating$());
          _hoveredRating$.set(0);
        }
      },
      handleKey(event) {
        if (interactive$()) {
          const { key } = event;
          switch (key) {
            case "ArrowLeft":
            case "ArrowDown":
              rating$.update((rating) => rating - 1);
              break;
            case "ArrowRight":
            case "ArrowUp":
              rating$.update((rating) => rating + 1);
              break;
            case "Home":
            case "PageDown":
              rating$.set(0);
              break;
            case "End":
            case "PageUp":
              rating$.set(maxRating$());
              break;
            default:
              return;
          }
          event.preventDefault();
          event.stopPropagation();
        }
      }
    },
    directives: {},
    api: {}
  };
}
exports.createRating = createRating;
exports.getRatingDefaultConfig = getRatingDefaultConfig;
`;export{n as default};
