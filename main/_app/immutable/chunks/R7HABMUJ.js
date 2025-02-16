const e=`"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const resizeObserver = require("@agnos-ui/core/services/resizeObserver");
Object.keys(resizeObserver).forEach((k) => {
  if (k !== "default" && !Object.prototype.hasOwnProperty.call(exports, k)) Object.defineProperty(exports, k, {
    enumerable: true,
    get: () => resizeObserver[k]
  });
});
`;export{e as default};
