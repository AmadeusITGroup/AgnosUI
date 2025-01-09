const n=`import { computed, derived } from "@amadeus-it-group/tansu";
import { arrow, autoUpdate, computePosition } from "@floating-ui/dom";
import { j as createBrowserStoreDirective, k as mergeDirectives, d as directiveSubscribe } from "../directive-DrDJkTS5.js";
import { p as promiseStoreToValueStore } from "../promise-CY2U8bTP.js";
import { writablesForProps, stateStores } from "../utils/stores.js";
const defaultConfig = {
  computePositionOptions: {},
  autoUpdateOptions: {},
  arrowOptions: {}
};
const createFloatingUI = (propsConfig) => {
  const [{ autoUpdateOptions$, computePositionOptions$: computePositionInputOptions$, arrowOptions$: arrowInputOptions$ }, patch] = writablesForProps(
    defaultConfig,
    propsConfig
  );
  const { directive: floatingDirective, element$: floatingElement$ } = createBrowserStoreDirective();
  const { directive: referenceDirective, element$: referenceElement$ } = createBrowserStoreDirective();
  const { directive: arrowDirective, element$: arrowElement$ } = createBrowserStoreDirective();
  const arrowOptions$ = computed(() => {
    const arrowElement = arrowElement$();
    if (!arrowElement) {
      return null;
    }
    const arrowInputOptions = arrowInputOptions$();
    return typeof arrowInputOptions === "function" ? (state) => ({ ...arrowInputOptions(state), element: arrowElement }) : { ...arrowInputOptions, element: arrowElement };
  });
  const computePositionOptions$ = computed(() => {
    let options = computePositionInputOptions$();
    const arrowOptions = arrowOptions$();
    if (arrowOptions) {
      options = {
        ...options,
        middleware: [...options.middleware ?? [], arrow(arrowOptions)]
      };
    }
    return options;
  });
  const promisePosition$ = derived(
    [floatingElement$, referenceElement$, computePositionOptions$, autoUpdateOptions$],
    ([floatingElement, referenceElement, computePositionOptions, autoUpdateOptions], set) => {
      if (floatingElement && referenceElement) {
        const clean = autoUpdate(
          referenceElement,
          floatingElement,
          () => {
            set(computePosition(referenceElement, floatingElement, computePositionOptions));
          },
          autoUpdateOptions
        );
        return () => {
          set(null);
          clean();
        };
      }
      return void 0;
    },
    null
  );
  const position$ = promiseStoreToValueStore(promisePosition$, null);
  const placement$ = computed(() => {
    var _a;
    return (_a = position$()) == null ? void 0 : _a.placement;
  });
  const middlewareData$ = computed(() => {
    var _a;
    return (_a = position$()) == null ? void 0 : _a.middlewareData;
  });
  const x$ = computed(() => {
    var _a;
    return (_a = position$()) == null ? void 0 : _a.x;
  });
  const y$ = computed(() => {
    var _a;
    return (_a = position$()) == null ? void 0 : _a.y;
  });
  const strategy$ = computed(() => {
    var _a;
    return (_a = position$()) == null ? void 0 : _a.strategy;
  });
  const arrowX$ = computed(() => {
    var _a, _b;
    return (_b = (_a = middlewareData$()) == null ? void 0 : _a.arrow) == null ? void 0 : _b.x;
  });
  const arrowY$ = computed(() => {
    var _a, _b;
    return (_b = (_a = middlewareData$()) == null ? void 0 : _a.arrow) == null ? void 0 : _b.y;
  });
  const floatingStyleApplyAction$ = computed(() => {
    const floatingElement = floatingElement$();
    if (floatingElement) {
      floatingElement.style.left = \`\${x$() ?? 0}px\`;
      floatingElement.style.top = \`\${y$() ?? 0}px\`;
    }
  });
  const arrowStyleApplyAction$ = computed(() => {
    const arrowElement = arrowElement$();
    if (arrowElement) {
      const arrowX = arrowX$();
      const arrowY = arrowY$();
      arrowElement.style.left = arrowX != null ? \`\${arrowX}px\` : "";
      arrowElement.style.top = arrowY != null ? \`\${arrowY}px\` : "";
    }
  });
  return {
    patch,
    ...stateStores({
      x$,
      y$,
      strategy$,
      placement$,
      middlewareData$
    }),
    directives: {
      /**
       * Directive to be used on the reference element from where the floating element will be positioned
       */
      referenceDirective,
      /**
       * Directive to be used on the floating element
       */
      floatingDirective: mergeDirectives(floatingDirective, directiveSubscribe(floatingStyleApplyAction$)),
      /**
       * Directive to be used on the arrow element, if any
       */
      arrowDirective: mergeDirectives(arrowDirective, directiveSubscribe(arrowStyleApplyAction$))
    },
    api: {}
  };
};
export {
  createFloatingUI
};
`;export{n as default};
