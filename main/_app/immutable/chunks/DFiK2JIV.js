const e=`"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const tansu = require("@amadeus-it-group/tansu");
const utils_directive = require("../dom-Cm9_uROp.cjs");
const utils_func = require("../utils/func.cjs");
const createResizeObserverMap = () => {
  const { elements$, directive } = utils_directive.createBrowserStoreArrayDirective();
  const dimensionsMap$ = tansu.derived(
    elements$,
    (elements, set) => {
      const dimensionsMap = /* @__PURE__ */ new Map();
      if (elements.length === 0) {
        set(dimensionsMap);
        return utils_func.noop;
      }
      const observer = new ResizeObserver((entries) => {
        entries.forEach((entry) => dimensionsMap.set(entry.target, entry));
        set(dimensionsMap);
      });
      elements.forEach((element) => observer.observe(element));
      return () => observer.disconnect();
    },
    /* @__PURE__ */ new Map()
  );
  return { dimensionsMap$, directive };
};
const createResizeObserver = () => {
  const { dimensionsMap$, directive: arrayDirective } = createResizeObserverMap();
  let firstElement = null;
  const directive = utils_directive.browserDirective((element) => {
    if (firstElement === null) {
      firstElement = element;
    } else {
      console.error("createResizeObserver directive can only be applied to a single element. Use createResizeObserverMap for multiple elements.");
      return;
    }
    const result = arrayDirective(element);
    if (!result) return;
    const originalDestroy = result.destroy;
    return {
      ...result,
      destroy: () => {
        firstElement = null;
        originalDestroy?.();
      }
    };
  });
  const dimensions$ = tansu.derived(dimensionsMap$, (map) => firstElement ? map.get(firstElement) : void 0, void 0);
  return { dimensions$, directive };
};
exports.createResizeObserver = createResizeObserver;
exports.createResizeObserverMap = createResizeObserverMap;
`;export{e as default};
