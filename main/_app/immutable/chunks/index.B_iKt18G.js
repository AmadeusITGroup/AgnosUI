const e=`"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const alert = require("../../alert-C_DIokIG.cjs");
const alert$1 = require("@agnos-ui/react-headless/components/alert");
exports.Alert = alert.Alert;
Object.keys(alert$1).forEach((k) => {
  if (k !== "default" && !Object.prototype.hasOwnProperty.call(exports, k))
    Object.defineProperty(exports, k, {
      enumerable: true,
      get: () => alert$1[k]
    });
});
`;export{e as default};
