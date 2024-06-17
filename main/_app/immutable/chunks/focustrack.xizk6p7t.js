const e=`"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const focustrack = require("@agnos-ui/core/services/focustrack");
Object.keys(focustrack).forEach((k) => {
  if (k !== "default" && !Object.prototype.hasOwnProperty.call(exports, k)) Object.defineProperty(exports, k, {
    enumerable: true,
    get: () => focustrack[k]
  });
});
`;export{e as default};
