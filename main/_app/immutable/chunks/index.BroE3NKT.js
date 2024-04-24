const e=`"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const modal = require("../../modal-2qAV4Hjl.cjs");
const modal$1 = require("@agnos-ui/core-bootstrap/components/modal");
exports.Modal = modal.Modal;
exports.createModal = modal.createModal;
exports.openModal = modal.openModal;
Object.keys(modal$1).forEach((k) => {
  if (k !== "default" && !Object.prototype.hasOwnProperty.call(exports, k))
    Object.defineProperty(exports, k, {
      enumerable: true,
      get: () => modal$1[k]
    });
});
`;export{e as default};
