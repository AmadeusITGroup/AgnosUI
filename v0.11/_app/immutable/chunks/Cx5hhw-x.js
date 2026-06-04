const e=`"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const directive = require("@agnos-ui/react-headless/utils/directive");
Object.keys(directive).forEach((k) => {
  if (k !== "default" && !Object.prototype.hasOwnProperty.call(exports, k)) Object.defineProperty(exports, k, {
    enumerable: true,
    get: () => directive[k]
  });
});
`;export{e as default};
