const e=`"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const intersection = require("@agnos-ui/react-headless/services/intersection");
Object.keys(intersection).forEach((k) => {
  if (k !== "default" && !Object.prototype.hasOwnProperty.call(exports, k)) Object.defineProperty(exports, k, {
    enumerable: true,
    get: () => intersection[k]
  });
});
`;export{e as default};
