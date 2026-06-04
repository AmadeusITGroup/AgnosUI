const e=`"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const progressbar = require("@agnos-ui/core/components/progressbar");
Object.keys(progressbar).forEach((k) => {
  if (k !== "default" && !Object.prototype.hasOwnProperty.call(exports, k)) Object.defineProperty(exports, k, {
    enumerable: true,
    get: () => progressbar[k]
  });
});
`;export{e as default};
