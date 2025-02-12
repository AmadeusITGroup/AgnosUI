const e=`"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const func = require("@agnos-ui/react-headless/utils/func");
Object.keys(func).forEach((k) => {
  if (k !== "default" && !Object.prototype.hasOwnProperty.call(exports, k)) Object.defineProperty(exports, k, {
    enumerable: true,
    get: () => func[k]
  });
});
`;export{e as default};
