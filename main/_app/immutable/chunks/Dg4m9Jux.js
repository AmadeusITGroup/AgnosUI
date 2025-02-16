const e=`"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const hash = require("@agnos-ui/core/services/hash");
Object.keys(hash).forEach((k) => {
  if (k !== "default" && !Object.prototype.hasOwnProperty.call(exports, k)) Object.defineProperty(exports, k, {
    enumerable: true,
    get: () => hash[k]
  });
});
`;export{e as default};
