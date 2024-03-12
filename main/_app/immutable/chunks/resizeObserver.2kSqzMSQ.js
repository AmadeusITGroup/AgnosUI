const e=`import { derived } from "@amadeus-it-group/tansu";
import { createStoreDirective } from "../utils/directive.js";
import { n as noop } from "../func-DR0n-ShK.js";
const createResizeObserver = () => {
  const { element$, directive } = createStoreDirective();
  const observedElement$ = derived(
    element$,
    (element, set) => {
      if (element === null) {
        return noop;
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
export {
  createResizeObserver
};
`;export{e as default};
