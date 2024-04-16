const t=`"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const transitions = require("@agnos-ui/core-bootstrap/services/transitions");
Object.keys(transitions).forEach((k) => {
  if (k !== "default" && !Object.prototype.hasOwnProperty.call(exports, k))
    Object.defineProperty(exports, k, {
      enumerable: true,
      get: () => transitions[k]
    });
});
`;export{t as default};
