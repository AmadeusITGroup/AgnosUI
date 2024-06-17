const n=`import { writable, computed, asWritable } from "@amadeus-it-group/tansu";
import { i as identity } from "./func-DR0n-ShK.js";
const mergeInto = (destination, source, levels = Infinity) => {
  if (source !== void 0) {
    if (typeof source === "object" && source && levels >= 1) {
      if (!destination) {
        destination = {};
      }
      for (const key of Object.keys(source)) {
        if (!Object.prototype.hasOwnProperty.call(source, key)) continue;
        if (key === "__proto__" || key === "constructor") continue;
        destination[key] = mergeInto(destination[key], source[key], levels - 1);
      }
    } else {
      return source;
    }
  }
  return destination;
};
const createWidgetsConfig = (parent$, adaptParentConfig = identity) => {
  const own$ = writable({});
  const adaptedParent$ = adaptParentConfig === identity ? parent$ : computed(() => adaptParentConfig(mergeInto({}, parent$ == null ? void 0 : parent$(), 2)));
  return asWritable(
    computed(() => mergeInto(mergeInto({}, adaptedParent$ == null ? void 0 : adaptedParent$(), 2), own$(), 2)),
    {
      ...own$,
      own$,
      adaptedParent$,
      parent$
    }
  );
};
export {
  createWidgetsConfig,
  mergeInto
};
`;export{n as default};
