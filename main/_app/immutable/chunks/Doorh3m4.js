const n=`"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const tansu = require("@amadeus-it-group/tansu");
const utils_func = require("./utils/func.cjs");
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
const createWidgetsConfig = (parent$, adaptParentConfig = utils_func.identity) => {
  const own$ = tansu.writable({});
  const adaptedParent$ = adaptParentConfig === utils_func.identity ? parent$ : tansu.computed(() => adaptParentConfig(mergeInto({}, parent$?.(), 2)));
  return tansu.asWritable(
    tansu.computed(() => mergeInto(mergeInto({}, adaptedParent$?.(), 2), own$(), 2)),
    {
      ...own$,
      own$,
      adaptedParent$,
      parent$
    }
  );
};
exports.createWidgetsConfig = createWidgetsConfig;
exports.mergeInto = mergeInto;
`;export{n as default};
