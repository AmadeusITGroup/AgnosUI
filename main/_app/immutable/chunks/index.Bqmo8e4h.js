const e=`"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const modal = require("../../modal-CJt6Fp1P.cjs");
const modal$1 = require("@agnos-ui/core/components/modal");
exports.createModal = modal.createModal;
exports.getModalDefaultConfig = modal.getModalDefaultConfig;
Object.keys(modal$1).forEach((k) => {
  if (k !== "default" && !Object.prototype.hasOwnProperty.call(exports, k))
    Object.defineProperty(exports, k, {
      enumerable: true,
      get: () => modal$1[k]
    });
});
`;export{e as default};
