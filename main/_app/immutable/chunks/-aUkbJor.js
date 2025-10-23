const e=`"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const collapse = require("../../collapse-Dy-3cJym.cjs");
const collapse$1 = require("@agnos-ui/core/components/collapse");
exports.createCollapse = collapse.createCollapse;
exports.getCollapseDefaultConfig = collapse.getCollapseDefaultConfig;
Object.keys(collapse$1).forEach((k) => {
  if (k !== "default" && !Object.prototype.hasOwnProperty.call(exports, k)) Object.defineProperty(exports, k, {
    enumerable: true,
    get: () => collapse$1[k]
  });
});
`;export{e as default};
