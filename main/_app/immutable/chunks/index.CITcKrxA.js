const e=`"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const select = require("../../select-B8YStA17.cjs");
const select$1 = require("@agnos-ui/core-bootstrap/components/select");
exports.Select = select.Select;
exports.createSelect = select.createSelect;
Object.keys(select$1).forEach((k) => {
  if (k !== "default" && !Object.prototype.hasOwnProperty.call(exports, k))
    Object.defineProperty(exports, k, {
      enumerable: true,
      get: () => select$1[k]
    });
});
`;export{e as default};
