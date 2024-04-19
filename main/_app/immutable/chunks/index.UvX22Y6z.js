const e=`"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const alert = require("../../alert-DsgSUnWj.cjs");
const alert$1 = require("@agnos-ui/core-bootstrap/components/alert");
exports.Alert = alert.Alert;
exports.createAlert = alert.createAlert;
Object.keys(alert$1).forEach((k) => {
  if (k !== "default" && !Object.prototype.hasOwnProperty.call(exports, k))
    Object.defineProperty(exports, k, {
      enumerable: true,
      get: () => alert$1[k]
    });
});
`;export{e as default};
