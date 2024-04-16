const t=`"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const toast = require("../../toast-kMbwghA_.cjs");
const toast$1 = require("@agnos-ui/core/components/toast");
exports.createToast = toast.createToast;
exports.getToastDefaultConfig = toast.getToastDefaultConfig;
Object.keys(toast$1).forEach((k) => {
  if (k !== "default" && !Object.prototype.hasOwnProperty.call(exports, k))
    Object.defineProperty(exports, k, {
      enumerable: true,
      get: () => toast$1[k]
    });
});
`;export{t as default};
