const e=`"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const portal = require("@agnos-ui/core/services/portal");
Object.keys(portal).forEach((k) => {
  if (k !== "default" && !Object.prototype.hasOwnProperty.call(exports, k)) Object.defineProperty(exports, k, {
    enumerable: true,
    get: () => portal[k]
  });
});
`;export{e as default};
