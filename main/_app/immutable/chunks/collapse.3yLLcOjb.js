const e=`"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const collapse = require("@agnos-ui/react-headless/services/transitions/collapse");
Object.keys(collapse).forEach((k) => {
  if (k !== "default" && !Object.prototype.hasOwnProperty.call(exports, k))
    Object.defineProperty(exports, k, {
      enumerable: true,
      get: () => collapse[k]
    });
});
`;export{e as default};
