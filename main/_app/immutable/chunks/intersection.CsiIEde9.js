const e=`"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const tansu = require("@amadeus-it-group/tansu");
const utils_func = require("../utils/func.cjs");
const utils_directive = require("../stores-CuM3O4Ml.cjs");
const defaultValues = {
  elements: [],
  options: void 0
};
const createIntersection = (config) => {
  const [{ elements$, options$ }, patch] = utils_directive.writablesForProps(defaultValues, config);
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
      return utils_func.noop;
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
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/IntersectionObserverEntry | MDN documentation}
     */
    visibleElements$: tansu.asReadable(visibleElements$),
    patch
  };
};
exports.createIntersection = createIntersection;
`;export{e as default};
