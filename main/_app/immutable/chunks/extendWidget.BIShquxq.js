const e=`"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const extendWidget = require("@agnos-ui/core/services/extendWidget");
Object.keys(extendWidget).forEach((k) => {
  if (k !== "default" && !Object.prototype.hasOwnProperty.call(exports, k))
    Object.defineProperty(exports, k, {
      enumerable: true,
      get: () => extendWidget[k]
    });
});
`;export{e as default};
