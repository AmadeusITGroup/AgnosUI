const e=`"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const stores = require("@agnos-ui/react-headless/utils/stores");
Object.keys(stores).forEach((k) => {
  if (k !== "default" && !Object.prototype.hasOwnProperty.call(exports, k))
    Object.defineProperty(exports, k, {
      enumerable: true,
      get: () => stores[k]
    });
});
`;export{e as default};
