const e=`"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const toast = require("@agnos-ui/core/components/toast");
const toasterProvider = require("../../../toasterProvider-CYgzar_d.cjs");
exports.ToasterProvider = toasterProvider.ToasterProvider;
exports.useCreateToaster = toasterProvider.useCreateToaster;
exports.useToaster = toasterProvider.useToaster;
Object.keys(toast).forEach((k) => {
  if (k !== "default" && !Object.prototype.hasOwnProperty.call(exports, k)) Object.defineProperty(exports, k, {
    enumerable: true,
    get: () => toast[k]
  });
});
`;export{e as default};
