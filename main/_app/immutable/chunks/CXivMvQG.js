const e=`"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const floatingUI = require("@agnos-ui/react-headless/services/floatingUI");
Object.keys(floatingUI).forEach((k) => {
  if (k !== "default" && !Object.prototype.hasOwnProperty.call(exports, k)) Object.defineProperty(exports, k, {
    enumerable: true,
    get: () => floatingUI[k]
  });
});
`;export{e as default};
