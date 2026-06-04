const e=`"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const siblingsInert = require("@agnos-ui/react-headless/services/siblingsInert");
Object.keys(siblingsInert).forEach((k) => {
  if (k !== "default" && !Object.prototype.hasOwnProperty.call(exports, k)) Object.defineProperty(exports, k, {
    enumerable: true,
    get: () => siblingsInert[k]
  });
});
`;export{e as default};
