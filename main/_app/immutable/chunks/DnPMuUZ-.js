const e=`"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const tansu = require("@amadeus-it-group/tansu");
const utils_directive = require("../dom-CFojlmcS.cjs");
const utils_func = require("../utils/func.cjs");
const createResizeObserver = () => {
  const { element$, directive } = utils_directive.createBrowserStoreDirective();
  const observedElement$ = tansu.derived(
    element$,
    (element, set) => {
      if (element === null) {
        return utils_func.noop;
      }
      const observer = new ResizeObserver((entries) => {
        set(entries[0]);
      });
      observer.observe(element);
      return () => observer?.disconnect();
    },
    void 0
  );
  return {
    /**
     * Store which contains the dimensions of the observed element (ResizeObserverEntry type)
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/ResizeObserverEntry | MDN documentation}
     */
    dimensions$: observedElement$,
    /** Directive to be attached to html element in order to listen to resize events */
    directive
  };
};
exports.createResizeObserver = createResizeObserver;
`;export{e as default};
