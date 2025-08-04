const n=`"use strict";
const tansu = require("@amadeus-it-group/tansu");
const types = require("./types.cjs");
const utils_directive = require("./dom-DT_O1FFV.cjs");
const utils_writables = require("./writables-DcGT98a7.cjs");
const utils_func = require("./utils/func.cjs");
const utils_stores = require("./utils/stores.cjs");
const utils_widget = require("./utils/widget.cjs");
const defaultConfig = {
  rating: 0,
  tabindex: 0,
  maxRating: 10,
  disabled: false,
  readonly: false,
  resettable: true,
  ariaValueTextFn: (rating, maxRating) => \`\${rating} out of \${maxRating}\`,
  onHover: utils_func.noop,
  onLeave: utils_func.noop,
  onRatingChange: utils_func.noop,
  className: "",
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
const createRating = utils_widget.createWidgetFactory("rating", (config) => {
  const [
    {
      // dirty inputs that need adjustment:
      rating$: _dirtyRating$,
      tabindex$: _dirtyTabindex$,
      ariaValueTextFn$,
      onHover$,
      onLeave$,
      onRatingChange$,
      ...stateProps
    },
    patch
  ] = utils_stores.writablesForProps(defaultConfig, config, configValidator);
  const { ariaLabel$, ariaLabelledBy$, className$, disabled$, maxRating$, readonly$, resettable$ } = stateProps;
  const tabindex$ = tansu.computed(() => disabled$() ? -1 : _dirtyTabindex$());
  const rating$ = utils_stores.bindableProp(_dirtyRating$, onRatingChange$, (dirtyRating) => utils_writables.clamp(dirtyRating, maxRating$(), 0));
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
  const widget = {
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
    directives: {
      containerDirective: utils_directive.createAttributesDirective(() => ({
        events: {
          keydown: (event) => {
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
          },
          mouseleave: () => {
            if (interactive$()) {
              widget.api.leave();
            }
          }
        },
        attributes: {
          role: tansu.readable("slider"),
          class: className$,
          "aria-valuemin": tansu.readable(0),
          tabindex: tabindex$,
          "aria-valuemax": maxRating$,
          "aria-valuenow": visibleRating$,
          "aria-valuetext": ariaValueText$,
          "aria-readonly": tansu.computed(() => readonly$() ? "true" : void 0),
          "aria-disabled": tansu.computed(() => disabled$() ? "true" : void 0),
          "aria-label": ariaLabel$,
          "aria-labelledby": tansu.computed(() => ariaLabelledBy$() || void 0)
        },
        classNames: {
          "au-rating": utils_stores.true$
        }
      })),
      starDirective: utils_directive.createAttributesDirective((starContext$) => {
        return {
          events: {
            mouseenter: () => {
              const index = starContext$().index + 1;
              if (interactive$() && index > 0 && index <= maxRating$()) {
                _hoveredRating$.set(index);
                onHover$()(index);
              }
            },
            click: () => {
              const index = starContext$().index + 1;
              if (interactive$() && index > 0 && index <= maxRating$()) {
                rating$.update((rating) => rating === index && resettable$() ? 0 : index);
              }
            }
          },
          styles: {
            cursor: tansu.computed(() => interactive$() ? "pointer" : "default")
          },
          classNames: {
            "au-rating-star": utils_stores.true$
          }
        };
      })
    },
    api: {
      setRating(index) {
        rating$.set(index);
      },
      setHoveredRating(index) {
        onHover$()(index);
        _hoveredRating$.set(index);
      },
      leave() {
        onLeave$()(visibleRating$());
        _hoveredRating$.set(0);
      }
    }
  };
  return widget;
});
exports.createRating = createRating;
exports.getRatingDefaultConfig = getRatingDefaultConfig;
`;export{n as default};
