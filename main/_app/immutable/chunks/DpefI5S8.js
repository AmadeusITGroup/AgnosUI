const e=`import { derived } from "@amadeus-it-group/tansu";
import { h as createBrowserStoreArrayDirective, b as browserDirective } from "../dom-iY0R3D7u.js";
import { noop } from "../utils/func.js";
const createResizeObserverMap = () => {
  const { elements$, directive } = createBrowserStoreArrayDirective();
  const dimensionsMap$ = derived(
    elements$,
    (elements, set) => {
      const dimensionsMap = /* @__PURE__ */ new Map();
      if (elements.length === 0) {
        set(dimensionsMap);
        return noop;
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
  const directive = browserDirective((element) => {
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
  const dimensions$ = derived(dimensionsMap$, (map) => firstElement ? map.get(firstElement) : void 0, void 0);
  return { dimensions$, directive };
};
export {
  createResizeObserver,
  createResizeObserverMap
};
`;export{e as default};
