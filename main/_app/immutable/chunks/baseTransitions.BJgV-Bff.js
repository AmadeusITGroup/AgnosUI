const e=`"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const baseTransitions = require("@agnos-ui/react-headless/services/transitions/baseTransitions");
Object.keys(baseTransitions).forEach((k) => {
  if (k !== "default" && !Object.prototype.hasOwnProperty.call(exports, k)) Object.defineProperty(exports, k, {
    enumerable: true,
    get: () => baseTransitions[k]
  });
});
`;export{e as default};
