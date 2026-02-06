const t=`"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const toast$1 = require("../../toast-C4gj0rX-.cjs");
const toast = require("@agnos-ui/core/components/toast");
exports.createToast = toast$1.createToast;
exports.getToastDefaultConfig = toast$1.getToastDefaultConfig;
exports.toastPositions = toast$1.toastPositions;
Object.keys(toast).forEach((k) => {
  if (k !== "default" && !Object.prototype.hasOwnProperty.call(exports, k)) Object.defineProperty(exports, k, {
    enumerable: true,
    get: () => toast[k]
  });
});
`;export{t as default};
