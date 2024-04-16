const r=`"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const progressbar = require("../../progressbar-I6Jvhy5T.cjs");
const progressbar$1 = require("@agnos-ui/core/components/progressbar");
exports.createProgressbar = progressbar.createProgressbar;
exports.getProgressbarDefaultConfig = progressbar.getProgressbarDefaultConfig;
Object.keys(progressbar$1).forEach((k) => {
  if (k !== "default" && !Object.prototype.hasOwnProperty.call(exports, k))
    Object.defineProperty(exports, k, {
      enumerable: true,
      get: () => progressbar$1[k]
    });
});
`;export{r as default};
