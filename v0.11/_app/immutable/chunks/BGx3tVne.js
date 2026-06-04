const e=`"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const modal$1 = require("../../modal-DFEAGpCe.cjs");
const modal = require("@agnos-ui/core/components/modal");
exports.createModal = modal$1.createModal;
exports.getModalDefaultConfig = modal$1.getModalDefaultConfig;
Object.keys(modal).forEach((k) => {
  if (k !== "default" && !Object.prototype.hasOwnProperty.call(exports, k)) Object.defineProperty(exports, k, {
    enumerable: true,
    get: () => modal[k]
  });
});
`;export{e as default};
