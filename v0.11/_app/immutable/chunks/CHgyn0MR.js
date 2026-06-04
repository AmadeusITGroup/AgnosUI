const e=`"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const focusElement = require("@agnos-ui/react-headless/services/focusElement");
Object.keys(focusElement).forEach((k) => {
  if (k !== "default" && !Object.prototype.hasOwnProperty.call(exports, k)) Object.defineProperty(exports, k, {
    enumerable: true,
    get: () => focusElement[k]
  });
});
`;export{e as default};
