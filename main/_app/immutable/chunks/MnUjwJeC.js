const e=`"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const modal = require("@agnos-ui/core/components/modal");
Object.keys(modal).forEach((k) => {
  if (k !== "default" && !Object.prototype.hasOwnProperty.call(exports, k)) Object.defineProperty(exports, k, {
    enumerable: true,
    get: () => modal[k]
  });
});
`;export{e as default};
