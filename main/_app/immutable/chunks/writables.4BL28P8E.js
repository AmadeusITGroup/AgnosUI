const e=`"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const writables = require("@agnos-ui/react-headless/utils/writables");
Object.keys(writables).forEach((k) => {
  if (k !== "default" && !Object.prototype.hasOwnProperty.call(exports, k))
    Object.defineProperty(exports, k, {
      enumerable: true,
      get: () => writables[k]
    });
});
`;export{e as default};
