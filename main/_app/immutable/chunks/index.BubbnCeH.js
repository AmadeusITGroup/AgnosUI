const t=`"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const toast = require("../../toast-D3Iu7NSr.cjs");
const toast$1 = require("@agnos-ui/core-bootstrap/components/toast");
exports.Toast = toast.Toast;
exports.createToast = toast.createToast;
Object.keys(toast$1).forEach((k) => {
  if (k !== "default" && !Object.prototype.hasOwnProperty.call(exports, k))
    Object.defineProperty(exports, k, {
      enumerable: true,
      get: () => toast$1[k]
    });
});
`;export{t as default};
