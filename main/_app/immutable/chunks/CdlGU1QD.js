const t=`"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const toast = require("../../toast-C4gj0rX-.cjs");
const toast$1 = require("@agnos-ui/core/components/toast");
exports.createToast = toast.createToast;
exports.getToastDefaultConfig = toast.getToastDefaultConfig;
exports.toastPositions = toast.toastPositions;
Object.keys(toast$1).forEach((k) => {
  if (k !== "default" && !Object.prototype.hasOwnProperty.call(exports, k)) Object.defineProperty(exports, k, {
    enumerable: true,
    get: () => toast$1[k]
  });
});
`;export{t as default};
