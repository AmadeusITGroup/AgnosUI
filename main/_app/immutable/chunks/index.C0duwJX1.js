const e=`"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const alert = require("@agnos-ui/core/components/alert");
Object.keys(alert).forEach((k) => {
  if (k !== "default" && !Object.prototype.hasOwnProperty.call(exports, k))
    Object.defineProperty(exports, k, {
      enumerable: true,
      get: () => alert[k]
    });
});
`;export{e as default};
