const e=`"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const alert$1 = require("../../alert-C-GktcuR.cjs");
const alert = require("@agnos-ui/core/components/alert");
exports.createAlert = alert$1.createAlert;
exports.getAlertDefaultConfig = alert$1.getAlertDefaultConfig;
Object.keys(alert).forEach((k) => {
  if (k !== "default" && !Object.prototype.hasOwnProperty.call(exports, k)) Object.defineProperty(exports, k, {
    enumerable: true,
    get: () => alert[k]
  });
});
`;export{e as default};
