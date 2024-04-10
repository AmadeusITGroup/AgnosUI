const e=`"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const matchMedia = require("@agnos-ui/react-headless/services/matchMedia");
Object.keys(matchMedia).forEach((k) => {
  if (k !== "default" && !Object.prototype.hasOwnProperty.call(exports, k))
    Object.defineProperty(exports, k, {
      enumerable: true,
      get: () => matchMedia[k]
    });
});
`;export{e as default};
