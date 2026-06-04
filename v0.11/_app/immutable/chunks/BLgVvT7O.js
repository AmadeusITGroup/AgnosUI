const e=`"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const stores$1 = require("../../stores-DPOTvwx1.cjs");
const stores = require("@agnos-ui/core/utils/stores");
exports.useObservable = stores$1.useObservable;
exports.useObservablesProxy = stores$1.useObservablesProxy;
exports.usePropsAsStore = stores$1.usePropsAsStore;
Object.keys(stores).forEach((k) => {
  if (k !== "default" && !Object.prototype.hasOwnProperty.call(exports, k)) Object.defineProperty(exports, k, {
    enumerable: true,
    get: () => stores[k]
  });
});
`;export{e as default};
