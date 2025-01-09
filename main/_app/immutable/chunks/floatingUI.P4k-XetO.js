const n=`"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const tansu = require("@amadeus-it-group/tansu");
const dom = require("@floating-ui/dom");
const utils_directive = require("../directive-BtOvPrmt.cjs");
const promise = require("../promise-BMJ8qhA8.cjs");
const utils_stores = require("../utils/stores.cjs");
const defaultConfig = {
  computePositionOptions: {},
  autoUpdateOptions: {},
  arrowOptions: {}
};
const createFloatingUI = (propsConfig) => {
  const [{ autoUpdateOptions$, computePositionOptions$: computePositionInputOptions$, arrowOptions$: arrowInputOptions$ }, patch] = utils_stores.writablesForProps(
    defaultConfig,
    propsConfig
  );
  const { directive: floatingDirective, element$: floatingElement$ } = utils_directive.createBrowserStoreDirective();
  const { directive: referenceDirective, element$: referenceElement$ } = utils_directive.createBrowserStoreDirective();
  const { directive: arrowDirective, element$: arrowElement$ } = utils_directive.createBrowserStoreDirective();
  const arrowOptions$ = tansu.computed(() => {
    const arrowElement = arrowElement$();
    if (!arrowElement) {
      return null;
    }
    const arrowInputOptions = arrowInputOptions$();
    return typeof arrowInputOptions === "function" ? (state) => ({ ...arrowInputOptions(state), element: arrowElement }) : { ...arrowInputOptions, element: arrowElement };
  });
  const computePositionOptions$ = tansu.computed(() => {
    let options = computePositionInputOptions$();
    const arrowOptions = arrowOptions$();
    if (arrowOptions) {
      options = {
        ...options,
        middleware: [...options.middleware ?? [], dom.arrow(arrowOptions)]
      };
    }
    return options;
  });
  const promisePosition$ = tansu.derived(
    [floatingElement$, referenceElement$, computePositionOptions$, autoUpdateOptions$],
    ([floatingElement, referenceElement, computePositionOptions, autoUpdateOptions], set) => {
      if (floatingElement && referenceElement) {
        const clean = dom.autoUpdate(
          referenceElement,
          floatingElement,
          () => {
            set(dom.computePosition(referenceElement, floatingElement, computePositionOptions));
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
  const position$ = promise.promiseStoreToValueStore(promisePosition$, null);
  const placement$ = tansu.computed(() => {
    var _a;
    return (_a = position$()) == null ? void 0 : _a.placement;
  });
  const middlewareData$ = tansu.computed(() => {
    var _a;
    return (_a = position$()) == null ? void 0 : _a.middlewareData;
  });
  const x$ = tansu.computed(() => {
    var _a;
    return (_a = position$()) == null ? void 0 : _a.x;
  });
  const y$ = tansu.computed(() => {
    var _a;
    return (_a = position$()) == null ? void 0 : _a.y;
  });
  const strategy$ = tansu.computed(() => {
    var _a;
    return (_a = position$()) == null ? void 0 : _a.strategy;
  });
  const arrowX$ = tansu.computed(() => {
    var _a, _b;
    return (_b = (_a = middlewareData$()) == null ? void 0 : _a.arrow) == null ? void 0 : _b.x;
  });
  const arrowY$ = tansu.computed(() => {
    var _a, _b;
    return (_b = (_a = middlewareData$()) == null ? void 0 : _a.arrow) == null ? void 0 : _b.y;
  });
  const floatingStyleApplyAction$ = tansu.computed(() => {
    const floatingElement = floatingElement$();
    if (floatingElement) {
      floatingElement.style.left = \`\${x$() ?? 0}px\`;
      floatingElement.style.top = \`\${y$() ?? 0}px\`;
    }
  });
  const arrowStyleApplyAction$ = tansu.computed(() => {
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
    ...utils_stores.stateStores({
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
      floatingDirective: utils_directive.mergeDirectives(floatingDirective, utils_directive.directiveSubscribe(floatingStyleApplyAction$)),
      /**
       * Directive to be used on the arrow element, if any
       */
      arrowDirective: utils_directive.mergeDirectives(arrowDirective, utils_directive.directiveSubscribe(arrowStyleApplyAction$))
    },
    api: {}
  };
};
exports.createFloatingUI = createFloatingUI;
`;export{n as default};
