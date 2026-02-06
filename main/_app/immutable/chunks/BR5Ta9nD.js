const e=`"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const types = require("@agnos-ui/core-bootstrap/types");
const types$1 = require("@agnos-ui/react-headless/types");
Object.keys(types).forEach((k) => {
  if (k !== "default" && !Object.prototype.hasOwnProperty.call(exports, k)) Object.defineProperty(exports, k, {
    enumerable: true,
    get: () => types[k]
  });
});
Object.keys(types$1).forEach((k) => {
  if (k !== "default" && !Object.prototype.hasOwnProperty.call(exports, k)) Object.defineProperty(exports, k, {
    enumerable: true,
    get: () => types$1[k]
  });
});
`;export{e as default};
