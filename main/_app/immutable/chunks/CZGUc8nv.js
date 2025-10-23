const e=`"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const tansu = require("@amadeus-it-group/tansu");
const dom = require("@floating-ui/dom");
const utils_directive = require("../dom-C2gi9OCP.cjs");
const promise = require("../promise-CxCD3NYv.cjs");
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
  const placement$ = tansu.computed(() => position$()?.placement);
  const middlewareData$ = tansu.computed(() => position$()?.middlewareData);
  const x$ = tansu.computed(() => position$()?.x);
  const y$ = tansu.computed(() => position$()?.y);
  const strategy$ = tansu.computed(() => position$()?.strategy);
  const arrowX$ = tansu.computed(() => middlewareData$()?.arrow?.x);
  const arrowY$ = tansu.computed(() => middlewareData$()?.arrow?.y);
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
`;export{e as default};
