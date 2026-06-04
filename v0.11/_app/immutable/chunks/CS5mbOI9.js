const e=`"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const types = require("@agnos-ui/core/types");
Object.keys(types).forEach((k) => {
  if (k !== "default" && !Object.prototype.hasOwnProperty.call(exports, k)) Object.defineProperty(exports, k, {
    enumerable: true,
    get: () => types[k]
  });
});
`;export{e as default};
