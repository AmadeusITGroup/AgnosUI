const s=`"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const cssTransitions = require("@agnos-ui/core/services/transitions/cssTransitions");
Object.keys(cssTransitions).forEach((k) => {
  if (k !== "default" && !Object.prototype.hasOwnProperty.call(exports, k))
    Object.defineProperty(exports, k, {
      enumerable: true,
      get: () => cssTransitions[k]
    });
});
`;export{s as default};
