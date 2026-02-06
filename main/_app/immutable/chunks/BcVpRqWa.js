const e=`"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const select$1 = require("../../select-AtIM2x7x.cjs");
const select = require("@agnos-ui/core/components/select");
exports.createSelect = select$1.createSelect;
exports.getSelectDefaultConfig = select$1.getSelectDefaultConfig;
Object.keys(select).forEach((k) => {
  if (k !== "default" && !Object.prototype.hasOwnProperty.call(exports, k)) Object.defineProperty(exports, k, {
    enumerable: true,
    get: () => select[k]
  });
});
`;export{e as default};
