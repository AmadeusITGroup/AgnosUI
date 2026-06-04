const e=`"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const collapse$1 = require("../../collapse-Cs0e7FlH.cjs");
const collapse = require("@agnos-ui/core/components/collapse");
exports.createCollapse = collapse$1.createCollapse;
exports.getCollapseDefaultConfig = collapse$1.getCollapseDefaultConfig;
Object.keys(collapse).forEach((k) => {
  if (k !== "default" && !Object.prototype.hasOwnProperty.call(exports, k)) Object.defineProperty(exports, k, {
    enumerable: true,
    get: () => collapse[k]
  });
});
`;export{e as default};
