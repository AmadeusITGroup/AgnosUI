const e=`"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const tansu = require("@amadeus-it-group/tansu");
const utils_directive = require("../directive-BAWw10P3.cjs");
const func = require("../func-Qd3cD9a3.cjs");
const createResizeObserver = () => {
  const { element$, directive } = utils_directive.createBrowserStoreDirective();
  const observedElement$ = tansu.derived(
    element$,
    (element, set) => {
      if (element === null) {
        return func.noop;
      }
      const observer = new ResizeObserver((entries) => {
        set(entries[0]);
      });
      observer.observe(element);
      return () => observer == null ? void 0 : observer.disconnect();
    },
    void 0
  );
  return {
    /**
     * Store which contains the dimensions of the observed element (ResizeObserverEntry type)
     * See the [MDN documentation](https://developer.mozilla.org/en-US/docs/Web/API/ResizeObserverEntry)
     */
    dimensions$: observedElement$,
    /** Directive to be attached to html element in order to listen to resize events */
    directive
  };
};
exports.createResizeObserver = createResizeObserver;
`;export{e as default};
