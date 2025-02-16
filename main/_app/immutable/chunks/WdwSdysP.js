const e=`import { derived, asReadable } from "@amadeus-it-group/tansu";
import { noop } from "../utils/func.js";
import { C as writablesForProps } from "../stores-DX-ADOKq.js";
const defaultValues = {
  elements: [],
  options: void 0
};
const createIntersection = (config) => {
  const [{ elements$, options$ }, patch] = writablesForProps(defaultValues, config);
  const visibleElements$ = derived(
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
      return noop;
    },
    /* @__PURE__ */ new Map()
  );
  return {
    /**
     * Readable of observed elements
     */
    elements$: asReadable(elements$),
    /**
     * Store of map that contains the visible elements (for the key) and the corresponding entries
     *
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/IntersectionObserverEntry | MDN documentation}
     */
    visibleElements$: asReadable(visibleElements$),
    patch
  };
};
export {
  createIntersection
};
`;export{e as default};
