const e=`"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const widget = require("@agnos-ui/react-headless/utils/widget");
Object.keys(widget).forEach((k) => {
  if (k !== "default" && !Object.prototype.hasOwnProperty.call(exports, k))
    Object.defineProperty(exports, k, {
      enumerable: true,
      get: () => widget[k]
    });
});
`;export{e as default};
