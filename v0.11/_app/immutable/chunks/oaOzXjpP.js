const e=`"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const carousel = require("@agnos-ui/core/components/carousel");
Object.keys(carousel).forEach((k) => {
  if (k !== "default" && !Object.prototype.hasOwnProperty.call(exports, k)) Object.defineProperty(exports, k, {
    enumerable: true,
    get: () => carousel[k]
  });
});
`;export{e as default};
