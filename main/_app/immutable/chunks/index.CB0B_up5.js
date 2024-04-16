const e=`"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const slider = require("@agnos-ui/core/components/slider");
Object.keys(slider).forEach((k) => {
  if (k !== "default" && !Object.prototype.hasOwnProperty.call(exports, k))
    Object.defineProperty(exports, k, {
      enumerable: true,
      get: () => slider[k]
    });
});
`;export{e as default};
