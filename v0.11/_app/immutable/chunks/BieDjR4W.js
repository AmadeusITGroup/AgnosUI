const e=`"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const accordion = require("@agnos-ui/core/components/accordion");
Object.keys(accordion).forEach((k) => {
  if (k !== "default" && !Object.prototype.hasOwnProperty.call(exports, k)) Object.defineProperty(exports, k, {
    enumerable: true,
    get: () => accordion[k]
  });
});
`;export{e as default};
