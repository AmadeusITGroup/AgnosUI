const e=`"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const simpleClassTransition = require("@agnos-ui/react-headless/services/transitions/simpleClassTransition");
Object.keys(simpleClassTransition).forEach((k) => {
  if (k !== "default" && !Object.prototype.hasOwnProperty.call(exports, k))
    Object.defineProperty(exports, k, {
      enumerable: true,
      get: () => simpleClassTransition[k]
    });
});
`;export{e as default};
