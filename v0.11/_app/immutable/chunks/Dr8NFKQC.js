const r=`"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const progressbar$1 = require("../../progressbar-FwnctYWo.cjs");
const progressbar = require("@agnos-ui/core/components/progressbar");
exports.createProgressbar = progressbar$1.createProgressbar;
exports.getProgressbarDefaultConfig = progressbar$1.getProgressbarDefaultConfig;
Object.keys(progressbar).forEach((k) => {
  if (k !== "default" && !Object.prototype.hasOwnProperty.call(exports, k)) Object.defineProperty(exports, k, {
    enumerable: true,
    get: () => progressbar[k]
  });
});
`;export{r as default};
