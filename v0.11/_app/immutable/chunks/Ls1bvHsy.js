const e=`"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const pointerdownPosition = require("@agnos-ui/react-headless/services/pointerdownPosition");
Object.keys(pointerdownPosition).forEach((k) => {
  if (k !== "default" && !Object.prototype.hasOwnProperty.call(exports, k)) Object.defineProperty(exports, k, {
    enumerable: true,
    get: () => pointerdownPosition[k]
  });
});
`;export{e as default};
