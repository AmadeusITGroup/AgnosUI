const e=`"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const stores = require("../../stores-DLkDMqBY.cjs");
const stores$1 = require("@agnos-ui/core/utils/stores");
exports.useObservable = stores.useObservable;
exports.usePropsAsStore = stores.usePropsAsStore;
Object.keys(stores$1).forEach((k) => {
  if (k !== "default" && !Object.prototype.hasOwnProperty.call(exports, k)) Object.defineProperty(exports, k, {
    enumerable: true,
    get: () => stores$1[k]
  });
});
`;export{e as default};
