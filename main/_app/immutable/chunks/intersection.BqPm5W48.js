const e=`"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const tansu = require("@amadeus-it-group/tansu");
const func = require("../func-Qd3cD9a3.cjs");
const utils_stores = require("../utils/stores.cjs");
const defaultValues = {
  elements: [],
  options: void 0
};
const createIntersection = (config) => {
  const [{ elements$, options$ }, patch] = utils_stores.writablesForProps(defaultValues, config);
  const visibleElements$ = tansu.derived(
    [elements$, options$],
    ([elements, options], set) => {
      if (elements.length) {
        const visibleElements = /* @__PURE__ */ new Map();
        const observer = new IntersectionObserver((entries) => {
          for (const entry of entries) {
            const { target, isIntersecting } = entry;
            if (isIntersecting) {
              visibleElements.set(target, entry);
            } else {
              visibleElements.delete(target);
            }
          }
          set(visibleElements);
        }, options);
        for (const element of elements) {
          observer.observe(element);
        }
        return () => {
          observer.disconnect();
        };
      }
      return func.noop;
    },
    /* @__PURE__ */ new Map()
  );
  return {
    /**
     * Readable of observed elements
     */
    elements$: tansu.asReadable(elements$),
    /**
     * Store of map that contains the visible elements (for the key) and the corresponding entries
     *
     * See the [MDN documentation](https://developer.mozilla.org/en-US/docs/Web/API/IntersectionObserverEntry)
     */
    visibleElements$: tansu.asReadable(visibleElements$),
    patch
  };
};
exports.createIntersection = createIntersection;
`;export{e as default};
