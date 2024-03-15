const t=`"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const bootstrap = require("@agnos-ui/react-headless/services/transitions/bootstrap");
Object.keys(bootstrap).forEach((k) => {
  if (k !== "default" && !Object.prototype.hasOwnProperty.call(exports, k))
    Object.defineProperty(exports, k, {
      enumerable: true,
      get: () => bootstrap[k]
    });
});
`;export{t as default};
