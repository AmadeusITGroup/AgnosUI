const e=`"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const navManager = require("@agnos-ui/core/services/navManager");
Object.keys(navManager).forEach((k) => {
  if (k !== "default" && !Object.prototype.hasOwnProperty.call(exports, k)) Object.defineProperty(exports, k, {
    enumerable: true,
    get: () => navManager[k]
  });
});
`;export{e as default};
