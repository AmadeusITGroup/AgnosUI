const e=`"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const drawer = require("@agnos-ui/core/components/drawer");
Object.keys(drawer).forEach((k) => {
  if (k !== "default" && !Object.prototype.hasOwnProperty.call(exports, k)) Object.defineProperty(exports, k, {
    enumerable: true,
    get: () => drawer[k]
  });
});
`;export{e as default};
