const t=`"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const toast = require("@agnos-ui/core/components/toast");
const createToast = toast.createToast;
exports.createToast = createToast;
Object.keys(toast).forEach((k) => {
  if (k !== "default" && !Object.prototype.hasOwnProperty.call(exports, k))
    Object.defineProperty(exports, k, {
      enumerable: true,
      get: () => toast[k]
    });
});
`;export{t as default};
