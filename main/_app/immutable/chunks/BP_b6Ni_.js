const n=`import { computed, writable } from "@amadeus-it-group/tansu";
import { INVALID_VALUE } from "./types.js";
import { C as writablesForProps, F as bindableProp, D as stateStores, n as createAttributesDirective } from "./stores-DX-ADOKq.js";
import { j as clamp, a as typeNumber, k as isNumber, c as typeBoolean, f as typeFunction, e as typeString } from "./writables-DCiBdIBK.js";
import { noop } from "./utils/func.js";
const defaultConfig = {
  rating: 0,
  tabindex: 0,
  maxRating: 10,
  disabled: false,
  readonly: false,
  resettable: true,
  ariaValueTextFn: (rating, maxRating) => \`\${rating} out of \${maxRating}\`,
  onHover: noop,
  onLeave: noop,
  onRatingChange: noop,
  className: "",
  ariaLabel: "Rating",
  ariaLabelledBy: ""
};
function getRatingDefaultConfig() {
  return { ...defaultConfig };
}
const configValidator = {
  rating: typeNumber,
  tabindex: typeNumber,
  maxRating: { normalizeValue: (value) => isNumber(value) ? Math.max(0, value) : INVALID_VALUE },
  disabled: typeBoolean,
  readonly: typeBoolean,
  resettable: typeBoolean,
  ariaValueTextFn: typeFunction,
  onHover: typeFunction,
  onLeave: typeFunction,
  onRatingChange: typeFunction,
  className: typeString,
  ariaLabel: typeString,
  ariaLabelledBy: typeString
};
function createRating(config) {
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
  ] = writablesForProps(defaultConfig, config, configValidator);
  const { ariaLabel$, ariaLabelledBy$, className$, disabled$, maxRating$, readonly$, resettable$ } = stateProps;
  const tabindex$ = computed(() => disabled$() ? -1 : _dirtyTabindex$());
  const rating$ = bindableProp(_dirtyRating$, onRatingChange$, (dirtyRating) => clamp(dirtyRating, maxRating$(), 0));
  const _hoveredRating$ = writable(0);
  const interactive$ = computed(() => !disabled$() && !readonly$());
  const visibleRating$ = computed(() => {
    const hoveredRating = _hoveredRating$();
    return hoveredRating !== 0 ? hoveredRating : rating$();
  });
  const ariaValueText$ = computed(() => ariaValueTextFn$()(visibleRating$(), maxRating$()));
  const stars$ = computed(() => {
    const visibleRating = visibleRating$();
    return Array.from({ length: maxRating$() }, (_v, i) => ({
      fill: Math.round(Math.max(Math.min(visibleRating - i, 1), 0) * 100),
      index: i
    }));
  });
  const widget = {
    ...stateStores({
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
      containerDirective: createAttributesDirective(() => ({
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
          role: "slider",
          class: className$,
          "aria-valuemin": 0,
          tabindex: tabindex$,
          "aria-valuemax": maxRating$,
          "aria-valuenow": visibleRating$,
          "aria-valuetext": ariaValueText$,
          "aria-readonly": computed(() => readonly$() ? "true" : void 0),
          "aria-disabled": computed(() => disabled$() ? "true" : void 0),
          "aria-label": ariaLabel$,
          "aria-labelledby": computed(() => ariaLabelledBy$() || void 0)
        },
        classNames: {
          "au-rating": true
        }
      })),
      starDirective: createAttributesDirective((starContext$) => {
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
            cursor: computed(() => interactive$() ? "pointer" : "default")
          },
          classNames: {
            "au-rating-star": true
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
}
export {
  createRating as c,
  getRatingDefaultConfig as g
};
`;export{n as default};
